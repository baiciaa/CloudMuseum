"""
修复文物名称和图片URL

问题诊断：
1. 15对记录共享同一图片URL —— 爬虫从HTML各块提取时，名称与图片错位
2. 部分文件名带有后缀hash(如 qing-tie-mao-464283.jpg)，但DB指向不存在的 qing-tie-mao.jpg
3. 部分文件名是拼音的截断版本，不能精确匹配

修复策略：
- 对文件名带后缀的，修正DB中的image_url指向正确的文件
- 对共享图片的重复记录，保留拼音与文件名模糊匹配的那个，删除错误的
  （错误记录的真实文物没有对应的图片文件，保留无意义）
"""

import os, re, sys
sys.stdout = open(1, 'w', encoding='utf-8', closefd=False)

import mysql.connector
from pypinyin import pinyin, Style

DB = dict(host='localhost', port=3306, user='root', password='040918hybHYB', database='cloud_museum', charset='utf8mb4')
IMAGES_DIR = r'D:\MyCcode\Workspace\CloudMuseum_backend\uploads\images\relics'
URL_PREFIX = '/uploads/images/relics/'


def name_to_py(name):
    """中文→拼音（无音调, 仅字母数字短横）"""
    py_result = pinyin(name, style=Style.TONE3)
    s = '-'.join([p[0] for p in py_result])
    s = re.sub(r'[0-9]', '', s)
    s = re.sub(r'[^a-zA-Z0-9-]', '', s)
    return s.strip('-')


def normalize(s):
    """去掉所有非字母字符用于模糊比较"""
    return re.sub(r'[^a-zA-Z]', '', s)


def fuzzy_match_name_file(name, file_base):
    """中文名称的拼音是否与文件基础名模糊匹配（前缀匹配）"""
    name_py = normalize(name_to_py(name))
    file_py = normalize(file_base)
    return name_py.startswith(file_py)


def get_base(fname):
    """提取文件基础名（去掉后缀hash）"""
    return re.sub(r'-[A-Fa-f0-9]{4,8}$', '', fname)


# =========================== 1. 加载数据 ===========================
conn = mysql.connector.connect(**DB)
cur = conn.cursor(dictionary=True)
cur.execute("SELECT id, name, image_url FROM relics ORDER BY id")
relics = cur.fetchall()
cur.close()

fs_files = {}
for f in sorted(os.listdir(IMAGES_DIR)):
    if f.lower().endswith(('.jpg', '.jpeg', '.png')):
        name = os.path.splitext(f)[0]
        base = get_base(name)
        fs_files.setdefault(base, []).append(name)

print(f'DB记录: {len(relics)} 条')
print(f'FS文件: {sum(len(v) for v in fs_files.values())} 个 ({len(fs_files)} 个基础名)\n')


# =========================== 2. 构建拼音→中文名称映射 ===========================
print('===== 构建拼音→中文映射 =====')
py_to_cn = {}
for r in relics:
    if not r['image_url']:
        continue
    fname = os.path.basename(r['image_url'])
    fb = get_base(os.path.splitext(fname)[0])
    if fuzzy_match_name_file(r['name'], fb):
        if fb not in py_to_cn:
            py_to_cn[fb] = r['name']

# 补充遗漏的映射（从重复对的正确方获取）
extra = {
    'bei-song-tong-qian-yang-ban': '北宋铜钱（样板）',
    'dong-han-hua-xiang-ke-shi': '东汉画像刻石',
    'dong-zhou-tong-ge': '东周铜戈',
    'han-sheng-wen-tao-guan': '汉绳纹陶罐',
    'ming-hong-wu-ba-nian-zhu-qing-tong-wan-kou-pao': '明洪武八年（1375）铸青铜碗口炮',
    'ming-qing-guan-yin-tong-xiang': '明清观音铜像',
    'ming-tian-qi-si-nian-jia-zi-zhong-xia-deng-shu-zhong-lou-gua': '明天启四年（1624）“甲子仲夏登署中楼观海市诗”碑刻',
    'ming-tie-pao': '明铁炮',
    'ming-tie-mao': '明铁锚',
    'nian-wu-zhong-qi-shu-fa-li-zhou': '1981年武中奇书法立轴',
    'nian-yu-jian-hua-peng-lai-ge-tu-zhou': '1962年俞剑华蓬莱阁图轴',
    'qing-guang-xu-shi-ba-nian-nan-hai-li-shi-fan-bao-ke-ben-tai-': '清光绪十八年(1892)南海李氏翻鲍刻本《太平御览》',
    'qing-qing-hua-you-li-hong-chan-zhi-mu-dan-wen-zun': '清青花釉里红缠枝牡丹纹尊',
    'song-ying-qing-bo': '宋影清钵',
    'xi-zhou-shou-mian-wen-tong-ding': '西周兽面纹铜鼎',
}
py_to_cn.update(extra)

for k, v in sorted(py_to_cn.items()):
    print(f'  {k:45s} -> {v}')
print(f'共 {len(py_to_cn)} 个映射\n')


# =========================== 3. 生成修复操作 ===========================
print('===== 生成修复操作 =====')

fix_img = []   # (id, old_url, new_url, reason)
fix_name = []  # (id, old_name, new_name, reason)
del_recs = []  # (id, name, reason)

# 3a. 修复文件名不存在的记录（带后缀的文件名）
dir_list = os.listdir(IMAGES_DIR)
for r in relics:
    rid, name, url = r['id'], r['name'], r['image_url']
    if not url:
        continue

    fname = os.path.basename(url)
    fbase = os.path.splitext(fname)[0]

    if fname in dir_list:
        continue

    base = get_base(fbase)
    if base not in fs_files:
        print(f'  ⚠ ID {rid}: {fname} 无对应文件跳过')
        continue

    alt_files = fs_files[base]
    new_fname = alt_files[0] + '.jpg'
    new_url = URL_PREFIX + new_fname
    fix_img.append((rid, url, new_url, f'文件不存在，用 {new_fname}'))
    print(f'  [img] ID {rid:3d}: {fname:45s} -> {new_fname} ({r["name"][:20]})')

# 3b. 处理重复图片URL
url_groups = {}
for r in relics:
    url = r['image_url']
    if url:
        url_groups.setdefault(url, []).append(r)

for url, group in url_groups.items():
    if len(group) <= 1:
        continue

    fname = os.path.basename(url)
    fbase = get_base(os.path.splitext(fname)[0])

    correct = None
    wrong = []
    for r in group:
        if fuzzy_match_name_file(r['name'], fbase):
            correct = r
        else:
            wrong.append(r)

    if correct is None:
        correct = group[0]
        wrong = group[1:]
        print(f'  [!] {fbase}: 均不匹配，保留ID {correct["id"]}')

    for w in wrong:
        del_recs.append((w['id'], w['name'], f'与ID {correct["id"]} 共享图片'))
        print(f'  [del] ID {w["id"]:3d}: {w["name"][:25]:25s} (与ID {correct["id"]} 共享 {fname})')


# =========================== 4. 摘要 ===========================
print(f'\n===== 操作摘要 =====')
print(f'  修正图片URL: {len(fix_img)} 条')
print(f'  删除重复:    {len(del_recs)} 条')


# =========================== 5. 执行 ===========================
cur = conn.cursor()

if fix_img:
    print('\n--- 执行图片URL修正 ---')
    for rid, old_url, new_url, reason in fix_img:
        cur.execute("UPDATE relics SET image_url = %s WHERE id = %s", (new_url, rid))
        print(f'  ID {rid}: {reason}')

if fix_name:
    print('\n--- 执行名称修正 ---')
    for rid, old_name, new_name, reason in fix_name:
        cur.execute("UPDATE relics SET name = %s WHERE id = %s", (new_name, rid))
        print(f'  ID {rid}: {old_name[:20]} -> {new_name[:20]}')

if del_recs:
    print('\n--- 执行删除 ---')
    for rid, name, reason in del_recs:
        cur.execute("DELETE FROM relics WHERE id = %s", (rid,))
        print(f'  ID {rid}: {name[:25]:25s} ({reason})')

conn.commit()
print(f'\n✅ 完成! 修正图片 {len(fix_img)} 条, 删除 {len(del_recs)} 条')

# 验证
print(f'\n===== 验证 =====')
cur.execute("SELECT COUNT(*) as cnt FROM relics")
cnt = cur.fetchone()['cnt']
print(f'  剩余记录数: {cnt}')

# 检查是否有文件不存在的记录
has_problem = False
cur.execute("SELECT id, name, image_url FROM relics WHERE image_url IS NOT NULL")
for r in cur.fetchall():
    fname = os.path.basename(r['image_url'])
    if fname and fname not in dir_list:
        # 检查是否可能没刷到
        has_problem = True
        base = get_base(os.path.splitext(fname)[0])
        if base in fs_files:
            print(f'  ⚠ ID {r["id"]}: 图片仍不对 - {fname} (可用: {fs_files[base]})')
        else:
            print(f'  ⚠ ID {r["id"]}: 图片仍不存在 - {fname}')

if not has_problem:
    print('  ✓ 所有记录图片文件都存在')

# 检查重复图片URL
cur.execute("SELECT image_url, COUNT(*) as cnt FROM relics WHERE image_url IS NOT NULL GROUP BY image_url HAVING cnt > 1")
dups = cur.fetchall()
if dups:
    print(f'  ⚠ 仍有 {len(dups)} 个重复图片URL')
    for d in dups:
        print(f'    {os.path.basename(d["image_url"])}: {d["cnt"]} 条')

cur.close()
conn.close()
