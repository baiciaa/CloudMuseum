"""
从 museumschina.cn 恢复登州博物馆原始 106 件文物数据。
1. 爬取每件藏品的详情页，提取名称、年代、分类、材质、级别、图片URL
2. 清空当前表，重新插入所有 106 件文物
3. 下载所有图片到 uploads/images/relics/
"""
import re
import time
import requests
import pymysql
import os
from pathlib import Path
from pypinyin import lazy_pinyin
import json

# ========== 配置 ==========
DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "040918hybHYB",
    "database": "cloud_museum",
    "charset": "utf8mb4",
}

MUSEUM_ID = "37068421800003"
BASE_URL = "http://www.museumschina.cn"
IMAGE_DIR = Path(__file__).resolve().parent.parent / "uploads" / "images" / "relics"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "http://www.museumschina.cn/",
}

# 时代映射，将网站用的年代名称标准化
ERA_MAP = {
    "战国时代": "战国时期",
    "西周时代": "西周",
    "东周时代": "东周",
    "春秋时代": "春秋时期",
    "秦代": "秦",
    "汉代": "汉",
    "西汉": "西汉",
    "东汉": "东汉",
    "三国时代": "三国",
    "晋代": "晋",
    "南北朝": "南北朝",
    "隋代": "隋",
    "唐代": "唐",
    "五代十国": "五代十国",
    "宋代": "宋",
    "北宋": "北宋",
    "南宋": "南宋",
    "辽代": "辽",
    "金代": "金",
    "元代": "元",
    "明代": "明",
    "清代": "清",
    "中华民国": "中华民国",
    "公元20世纪": "公元20世纪",
    "更新世": "更新世",
    "高丽时期": "高丽时期",
}


def slugify(name):
    """将中文名称转为拼音 slug，用于文件名"""
    pinyin = lazy_pinyin(name, errors='ignore')
    slug = '-'.join(pinyin).lower()
    # 只保留字母数字和连字符
    slug = re.sub(r'[^a-z0-9-]', '', slug)
    slug = re.sub(r'-+', '-', slug).strip('-')
    return slug[:60] if slug else 'relic'


# ========== 步骤1: 爬取列表页获取所有藏品 ID ==========
def scrape_list():
    """爬取所有分页，返回 [{'name': ..., 'img': ..., 'detail_id': ...}, ...]"""
    all_items = []
    for page in range(1, 7):
        url = f"{BASE_URL}/Collection?museums={MUSEUM_ID}&pages={page}&size=20"
        print(f"  爬取列表第 {page}/6 页...", end=" ")
        try:
            resp = requests.get(url, headers=HEADERS, timeout=30)
            resp.encoding = 'utf-8'
            html = resp.text
            cards = re.findall(
                r'<img\s+src="(http://www\.museumschina\.cn/img/[^"]+)"[^>]*>.*?'
                r'href=[\'"]/collection/details\?id=([^\'"]+)[\'"][^>]*>([^<]{2,80})</a>',
                html, re.DOTALL
            )
            for img, did, name in cards:
                all_items.append({'name': name.strip(), 'img': img, 'detail_id': did})
            print(f"OK ({len(cards)} 件)")
        except Exception as e:
            print(f"失败: {e}")
        time.sleep(0.5)
    return all_items


# ========== 步骤2: 爬取详情页获取元数据 ==========
def scrape_detail(detail_id):
    """爬取详情页，返回 {name, era, category, material, level, images, ...}"""
    url = f"{BASE_URL}/collection/details?id={detail_id}"
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.encoding = 'utf-8'
        html = resp.text

        # 名称
        name_match = re.search(r'<div\s+class="info_tit">([^<]+)</div>', html)
        name = name_match.group(1).strip() if name_match else ""

        # 类别
        cat_match = re.search(r'<span>类别</span>\s*([^<\s][^<]*)', html)
        category = cat_match.group(1).strip() if cat_match else ""

        # 年代
        era_match = re.search(r'<span>年代</span>\s*([^<\s][^<]*)', html)
        era_raw = era_match.group(1).strip() if era_match else ""
        era = ERA_MAP.get(era_raw, era_raw)

        # 级别
        level_match = re.search(r'<span>级别</span>\s*([^<\s][^<]*)', html)
        level = level_match.group(1).strip() if level_match else ""

        # 质地/材质
        material_match = re.search(r'<span>质地</span>\s*([^<\s][^<]*)', html)
        material = material_match.group(1).strip() if material_match else ""

        # 入藏年度
        year_match = re.search(r'<span>入藏年度</span>\s*([^<\s][^<]*)', html)
        year = year_match.group(1).strip() if year_match else ""

        # 所有图片 (在 swiper-slide 中)
        images = re.findall(
            r'<img\s+src="(http://www\.museumschina\.cn/img/[^"]+)"',
            html
        )
        # 取第一张作为主图
        main_image = images[0] if images else ""

        return {
            'name': name,
            'era': era,
            'category': category,
            'material': material,
            'level': level,
            'year': year,
            'images': images,
            'main_image': main_image,
            'detail_id': detail_id,
        }
    except Exception as e:
        print(f"    爬取详情失败 {detail_id}: {e}")
        return None


# ========== 步骤3: 生成描述 ==========
def generate_description(meta):
    """基于元数据生成中文描述"""
    name = meta['name']
    era = meta['era']
    category = meta['category']
    material = meta['material']
    level = meta['level']

    parts = []

    # 开头介绍
    if era:
        parts.append(f"{name}，{era}时期文物。")
    else:
        parts.append(f"{name}，登州博物馆馆藏文物。")

    # 材质工艺
    if material:
        mat_clean = material.replace("单一质地/", "").replace("无机质/", "").replace("有机质/", "").replace("复合/", "")
        parts.append(f"质地为{mat_clean}。")

    # 分类特点
    if category == "钱币":
        parts.append("钱币虽小，却记录了一个王朝的经济脉搏，是研究古代商品经济的重要实物资料。")
    elif category == "铜器" or category == "青铜器":
        parts.append("青铜的沉稳光泽中，凝聚着古人的智慧与匠心，是青铜文明的珍贵遗存。")
    elif "瓷" in category or category == "瓷器":
        parts.append("泥与火的艺术在此化作永恒的美丽，体现了中国古代陶瓷工艺的高超水平。")
    elif "陶" in category:
        parts.append("火与土的第一次亲密接触，陶器虽质朴，却凝聚了先民最本真的智慧。")
    elif "石刻" in category or "碑刻" in category:
        parts.append("石上刻痕穿越千年时光，默默诉说着古老的故事。")
    elif "书画" in category or "字画" in category or "书法" in category:
        parts.append("一笔一画间流淌着千年的文脉与气韵。")
    elif "武器" in category or "兵器" in category:
        parts.append("冰冷的钢铁背后凝结着烽火岁月的记忆，见证了古代军事技术的发展。")
    elif "印章" in category or "玺印" in category:
        parts.append("方寸之间凝聚着权力与信用的象征。")
    elif "古籍" in category:
        parts.append("泛黄的纸页里藏着穿越时空的智慧。")
    elif "标本" in category or "化石" in category:
        parts.append("大自然是最好的记录者，为地球生命演化留下了珍贵的档案。")
    elif "织绣" in category:
        parts.append("丝缕之间编织着千年的温暖与审美。")
    else:
        parts.append("这件文物承载着丰富的历史记忆，让我们得以一窥先民的智慧与匠心。")

    # 级别
    if level and level != "一般" and level != "未定级":
        parts.append(f"经鉴定为国家{level}文物，具有重要的历史价值和艺术价值。")
    elif level == "一般":
        parts.append("它虽无华丽的外表，却是解读历史不可或缺的密码。")

    return "".join(parts)


# ========== 步骤4: 下载图片 ==========
def download_image(remote_url, local_filename):
    """下载单张图片"""
    filepath = IMAGE_DIR / local_filename
    try:
        resp = requests.get(remote_url, headers=HEADERS, timeout=60)
        if resp.status_code == 200:
            with open(filepath, "wb") as f:
                f.write(resp.content)
            return len(resp.content)
        return -1
    except Exception as e:
        print(f"    下载失败: {e}")
        return -1


# ========== 主流程 ==========
def main():
    print("=" * 60)
    print("  从 museumschina.cn 恢复登州博物馆原始文物数据")
    print("=" * 60)

    # --- 1. 爬取列表 ---
    print("\n[1/5] 爬取藏品列表...")
    list_items = scrape_list()
    print(f"  共 {len(list_items)} 件藏品")

    # --- 2. 爬取详情 ---
    print(f"\n[2/5] 爬取 {len(list_items)} 件藏品详情...")
    relics = []
    for i, item in enumerate(list_items):
        detail_id = item['detail_id']
        print(f"  [{i+1:3d}/{len(list_items)}] {item['name'][:30]}...", end=" ", flush=True)
        meta = scrape_detail(detail_id)
        if meta:
            # 用列表页的图片作为备用
            if not meta['main_image']:
                meta['main_image'] = item['img']
            # 生成描述
            meta['description'] = generate_description(meta)
            # 生成文件名 slug
            meta['slug'] = slugify(meta['name'])
            relics.append(meta)
            print("OK")
        else:
            print("跳过")
        time.sleep(0.4)

    print(f"  成功爬取 {len(relics)} 件藏品的详细数据")

    # --- 3. 写入数据库 ---
    print(f"\n[3/5] 写入数据库...")
    conn = pymysql.connect(**DB_CONFIG)
    cursor = conn.cursor()

    # 清空旧数据
    cursor.execute("DELETE FROM relics")
    conn.commit()
    print("  已清空 relics 表")

    # 批量插入
    inserted = 0
    for relic in relics:
        local_path = f"/uploads/images/relics/{relic['slug']}.jpg"
        cursor.execute(
            "INSERT INTO relics (name, description, era, category, image_url, model_url, external_link) "
            "VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (relic['name'], relic['description'], relic['era'],
             relic['category'], local_path, None, None)
        )
        relic['db_id'] = cursor.lastrowid
        inserted += 1
    conn.commit()
    cursor.close()
    conn.close()
    print(f"  已插入 {inserted} 条记录")

    # --- 4. 下载图片 ---
    print(f"\n[4/5] 下载图片...")
    os.makedirs(IMAGE_DIR, exist_ok=True)

    # 清理旧图片
    old_files = list(IMAGE_DIR.glob("*.jpg"))
    for f in old_files:
        f.unlink()
    print(f"  已清理 {len(old_files)} 个旧文件")

    success = 0
    fail = 0
    for relic in relics:
        if relic['main_image']:
            filename = f"{relic['slug']}.jpg"
            print(f"  [{relic['db_id']:3d}] {relic['name'][:30]} -> {filename}", end=" ", flush=True)
            size = download_image(relic['main_image'], filename)
            if size > 0:
                print(f"({size/1024:.0f} KB)")
                success += 1
            else:
                print("失败!")
                fail += 1
            time.sleep(0.3)

    print(f"\n  下载完成: 成功 {success}, 失败 {fail}")

    # --- 5. 保存爬取数据备用 ---
    print(f"\n[5/5] 保存爬取数据到 scraped_data.json ...")
    save_data = []
    for r in relics:
        save_data.append({
            'db_id': r['db_id'],
            'name': r['name'],
            'era': r['era'],
            'category': r['category'],
            'material': r['material'],
            'level': r['level'],
            'description': r['description'],
            'image_local': f"/uploads/images/relics/{r['slug']}.jpg",
            'image_remote': r['main_image'],
            'detail_id': r['detail_id'],
        })
    with open('scraped_data.json', 'w', encoding='utf-8') as f:
        json.dump(save_data, f, ensure_ascii=False, indent=2)
    print(f"  已保存 {len(save_data)} 条记录")

    print(f"\n===== 恢复完成 =====")
    print(f"共恢复 {len(relics)} 件文物，{success} 张图片下载成功")


if __name__ == "__main__":
    main()
