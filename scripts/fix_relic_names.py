"""
修复文物名称：将数据库中的文物名称与图片URL中的拼音文件名对齐

问题说明：
- 爬虫从博物馆网站爬取文物时，部分文物名称提取错误
- 但图片文件的拼音文件名是正确的
- 且部分文件因重名被保存为带后缀的文件(如 qing-tie-mao-464283.jpg)
- 需要修正名称和image_url指向正确的文件
"""

import re
import os
import sys
import mysql.connector
from pypinyin import pinyin, Style

# 数据库配置
DB_CONFIG = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'password': '040918hybHYB',
    'database': 'cloud_museum',
    'charset': 'utf8mb4',
}

# 图片目录
IMAGES_DIR = r'D:\MyCcode\Workspace\CloudMuseum_backend\uploads\images\relics'
# 图片URL前缀
IMAGE_URL_PREFIX = '/uploads/images/relics/'


def get_db_connection():
    """获取数据库连接"""
    return mysql.connector.connect(**DB_CONFIG)


def name_to_pinyin(name):
    """将中文名称转换为拼音（不含音调，不含标点）"""
    py_result = pinyin(name, style=Style.TONE3)
    parts = [item[0] for item in py_result]
    pinyin_str = '-'.join(parts)
    # 去掉音调数字和标点符号
    pinyin_str = re.sub(r'[0-9]', '', pinyin_str)
    # 只保留字母、数字、短横线
    pinyin_str = re.sub(r'[^a-zA-Z0-9-]', '', pinyin_str)
    # 去掉首尾的短横线
    pinyin_str = pinyin_str.strip('-')
    return pinyin_str


def get_filename_without_ext(path):
    """从URL或文件路径中提取文件名（不含扩展名和路径）"""
    basename = os.path.basename(path)
    name, ext = os.path.splitext(basename)
    return name


def get_base_pinyin(filename):
    """从文件名提取基础拼音（去掉后缀hash）"""
    # 去掉末尾的hash后缀如 -464283, -F0788C, -5B883C 等
    # 这些后缀是字母数字组合，长度4-6位
    name = re.sub(r'-[A-Fa-f0-9]{4,8}$', '', filename)
    return name


def load_all_relics(cursor):
    """从数据库加载所有文物记录"""
    cursor.execute("SELECT id, name, image_url FROM relics ORDER BY id")
    return cursor.fetchall()


def load_filesystem_files():
    """从文件系统加载所有图片文件"""
    files = {}
    for f in os.listdir(IMAGES_DIR):
        if f.endswith('.jpg') or f.endswith('.png') or f.endswith('.jpeg'):
            name = get_filename_without_ext(f)
            base = get_base_pinyin(name)
            files[base] = files.get(base, []) + [name]
    return files


def check_name_matches_image(name, image_filename):
    """检查名称的拼音是否与图片文件名匹配"""
    name_py = name_to_pinyin(name)
    image_base = get_base_pinyin(get_filename_without_ext(image_filename))
    return name_py == image_base


def build_pinyin_to_chinese_dict(relics, filesystems):
    """从已匹配的记录中构建拼音→中文名称词典"""
    mapping = {}
    for relic in relics:
        rid, name, image_url = relic
        if not image_url:
            continue
        image_filename = get_filename_without_ext(image_url)
        if check_name_matches_image(name, image_url):
            # 这个记录的名称与图片匹配，说明名称正确
            image_base = get_base_pinyin(image_filename)
            if image_base not in mapping:
                mapping[image_base] = name
    return mapping


def call_ai_for_pinyin_conversion(pinyin_list):
    """调用AI将拼音批量转换为中文名称"""
    import requests
    import json

    api_url = 'http://26.34.92.227:5000/api/chat'  # 尝试默认路径

    prompt = f"""你是一个博物馆文物命名专家。请将以下拼音文件名转换为对应的中文文物名称。
每个拼音文件名对应一个中国历史文物。请直接给出中文名称，不要有额外说明。
注意：
- "nian" 可能表示 "年"（年份），如 "1981年"
- 部分名称需要结合文物常识判断
- 输出格式为每行一个：拼音文件名|中文名称

需要转换的列表：
{chr(10).join(pinyin_list)}
"""
    try:
        resp = requests.post(api_url, json={
            'messages': [{'role': 'user', 'content': prompt}],
            'temperature': 0.1,
        }, timeout=60)
        if resp.status_code == 200:
            result = resp.json()
            content = result.get('response', result.get('content', result.get('text', '')))
            mapping = {}
            for line in content.strip().split('\n'):
                if '|' in line:
                    parts = line.split('|', 1)
                    mapping[parts[0].strip()] = parts[1].strip()
            return mapping
    except Exception as e:
        print(f'  AI API调用失败: {e}')

    # 备用：尝试DashScope
    try:
        import dashscope
        dashscope.api_key = 'sk-502e9e61f28e4e29bd837e45d88cf9fb'

        content = '\n'.join(pinyin_list)
        resp = dashscope.Generation.call(
            model='qwen-plus',
            prompt=f'将以下拼音文件名转换为对应的中文文物名称，每行一个：拼音|中文\n{content}',
            temperature=0.1,
        )
        if resp.status_code == 200:
            mapping = {}
            for line in resp.output.text.strip().split('\n'):
                if '|' in line:
                    parts = line.split('|', 1)
                    mapping[parts[0].strip()] = parts[1].strip()
            return mapping
    except Exception as e:
        print(f'  DashScope API调用失败: {e}')

    return {}


def main():
    print('=' * 60)
    print('文物名称修复工具')
    print('=' * 60)

    # 1. 加载数据
    print('\n[1/5] 加载数据...')
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    relics = load_all_relics(cursor)
    print(f'  数据库记录: {len(relics)} 条')

    fs_files = load_filesystem_files()
    print(f'  文件系统图片: {sum(len(v) for v in fs_files.values())} 个 ({len(fs_files)} 个唯一基础名)')

    # 2. 分析匹配情况
    print('\n[2/5] 分析名称匹配情况...')
    correct_records = []
    wrong_records = []
    duplicate_image_urls = []

    # 找出所有image_url重复的记录
    url_counts = {}
    for relic in relics:
        url = relic['image_url']
        if url:
            url_counts[url] = url_counts.get(url, 0) + 1
    duplicate_urls = {url for url, count in url_counts.items() if count > 1}

    for relic in relics:
        rid, name, image_url = relic['id'], relic['name'], relic['image_url']
        if not image_url:
            wrong_records.append((rid, name, image_url, 'no_image'))
            continue

        image_filename = get_filename_without_ext(image_url)

        if check_name_matches_image(name, image_url):
            correct_records.append((rid, name, image_url))
        else:
            is_dup = image_url in duplicate_urls
            wrong_records.append((rid, name, image_url, 'duplicate' if is_dup else 'mismatch'))

    print(f'  名称正确的记录: {len(correct_records)}')
    print(f'  名称错误的记录: {len(wrong_records)}')
    print(f'  重复图片URL: {len(duplicate_urls)} 个')

    # 3. 显示错误记录详情
    print('\n[3/5] 显示错误记录详情:')
    for item in wrong_records:
        rid, name, image_url, reason = item
        filename = get_filename_without_ext(image_url)
        actual_files = fs_files.get(get_base_pinyin(filename), [])
        print(f'  ID {rid:3d} | [{reason:9s}] {name[:30]:30s} -> {filename}')
        if actual_files and filename != actual_files[0]:
            print(f'         实际文件存在: {", ".join(actual_files[:3])}')

    # 4. 构建修复方案
    print('\n[4/5] 构建修复方案...')

    # 从匹配的记录建立拼音→中文映射
    py_to_cn = build_pinyin_to_chinese_dict(relics, fs_files)
    print(f'  从已有正确记录构建了 {len(py_to_cn)} 个拼音→中文映射')

    # 对需要AI转换的拼音名称
    needs_ai = []
    for item in wrong_records:
        rid, name, image_url, reason = item
        filename = get_filename_without_ext(image_url)
        base = get_base_pinyin(filename)
        if base not in py_to_cn:
            needs_ai.append(filename)
        # 如果有文件系统上的实际文件（带后缀），也需要
        actual_files = fs_files.get(base, [])
        for af in actual_files:
            af_base = get_base_pinyin(af)
            if af_base not in py_to_cn:
                needs_ai.append(af)

    needs_ai = list(set(needs_ai))
    if needs_ai:
        print(f'  需要AI转换的拼音: {len(needs_ai)} 个')
        # 分批调用AI，每批20个
        batch_size = 20
        for i in range(0, len(needs_ai), batch_size):
            batch = needs_ai[i:i+batch_size]
            print(f'  正在调用AI转换第 {i//batch_size+1} 批 ({len(batch)} 个)...')
            ai_result = call_ai_for_pinyin_conversion(batch)
            if ai_result:
                py_to_cn.update(ai_result)
                print(f'    成功转换 {len(ai_result)} 个')
            else:
                print(f'    AI调用失败，将使用拼音直译方案')

    # 5. 生成SQL更新
    print('\n[5/5] 生成修复SQL...')

    updates = []
    fs_map = {}  # base_name -> [files]
    for base, files in fs_files.items():
        fs_map[base] = files

    for item in wrong_records:
        rid, name, image_url, reason = item
        filename = get_filename_without_ext(image_url)
        base = get_base_pinyin(filename)

        # 确定正确的中文名称
        correct_name = py_to_cn.get(base, '')

        # 确定文件系统上实际的文件
        actual_file = None
        actual_files = fs_map.get(base, [])
        if actual_files:
            actual_file = actual_files[0] + '.jpg'
            # 如果有且仅有一个带后缀的文件，用那个
            if len(actual_files) == 1 and actual_files[0] != filename:
                pass  # 已经取了 actual_files[0]
            elif len(actual_files) > 1:
                # 多个文件同名，需要进一步区分
                # 如果其中一个跟image_url的原始文件名一致
                if filename in actual_files:
                    actual_file = filename + '.jpg'
                else:
                    actual_file = actual_files[0] + '.jpg'
        else:
            actual_file = filename + '.jpg'

        new_image_url = IMAGE_URL_PREFIX + actual_file

        if correct_name:
            updates.append((rid, correct_name, new_image_url, name, image_url))
            print(f'  ID {rid:3d}: "{name[:25]:25s}" -> "{correct_name[:25]:25s}"')
            print(f'          图片: {get_filename_without_ext(image_url):35s} -> {actual_file}')
        else:
            correct_name = filename  # 用拼音文件名作为临时名称
            updates.append((rid, correct_name, new_image_url, name, image_url))
            print(f'  ID {rid:3d}: "{name[:25]:25s}" -> "{correct_name}" (拼音直译，需人工确认)')

    # 6. 执行更新
    print(f'\n准备更新 {len(updates)} 条记录')

    if updates:
        print('\n是否执行更新? (yes/no)')
        # 自动执行
        confirm = 'yes'

        if confirm.lower() == 'yes':
            update_cursor = conn.cursor()
            success = 0
            for rid, new_name, new_image_url, old_name, old_image_url in updates:
                try:
                    sql = "UPDATE relics SET name = %s, image_url = %s WHERE id = %s"
                    update_cursor.execute(sql, (new_name, new_image_url, rid))
                    success += 1
                except Exception as e:
                    print(f'  ID {rid} 更新失败: {e}')

            conn.commit()
            print(f'\n✅ 成功更新 {success} 条记录')
        else:
            print('已取消更新')

    cursor.close()
    conn.close()
    print('\n完成!')


if __name__ == '__main__':
    # 确保pip安装了所需依赖
    try:
        import mysql.connector
    except ImportError:
        print('请安装 mysql-connector-python: pip install mysql-connector-python')
        sys.exit(1)

    main()
