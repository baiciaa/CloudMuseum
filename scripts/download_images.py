"""下载文物图片到本地 uploads/images/relics/ 目录，并更新数据库 image_url 为本地路径"""
import pymysql
import requests
import os
import sys
import time
from pathlib import Path

# ---- 配置 ----
DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "040918hybHYB",
    "database": "cloud_museum",
    "charset": "utf8mb4",
}

PROJECT_ROOT = Path(__file__).resolve().parent.parent
IMAGE_DIR = PROJECT_ROOT / "uploads" / "images" / "relics"
LOCAL_URL_PREFIX = "/uploads/images/relics"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "http://www.museumschina.cn/",
}

os.makedirs(IMAGE_DIR, exist_ok=True)


def main():
    conn = pymysql.connect(**DB_CONFIG)
    cursor = conn.cursor()

    cursor.execute("SELECT id, name, image_url FROM relics WHERE image_url IS NOT NULL AND image_url != ''")
    relics = cursor.fetchall()

    print(f"共 {len(relics)} 件文物需要下载图片\n")

    success = 0
    skip = 0
    fail = 0

    for relic_id, name, image_url in relics:
        # 已经是本地路径则跳过
        if image_url.startswith(LOCAL_URL_PREFIX):
            print(f"[跳过] #{relic_id} {name} — 已是本地路径")
            skip += 1
            continue

        ext = ".jpg"
        if image_url.lower().endswith(".png"):
            ext = ".png"
        elif image_url.lower().endswith(".webp"):
            ext = ".webp"

        filename = f"{relic_id}{ext}"
        filepath = IMAGE_DIR / filename

        try:
            print(f"[下载] #{relic_id} {name} ← {image_url}", end=" ", flush=True)
            resp = requests.get(image_url, headers=HEADERS, timeout=30)
            if resp.status_code == 200:
                with open(filepath, "wb") as f:
                    f.write(resp.content)
                local_url = f"{LOCAL_URL_PREFIX}/{filename}"
                cursor.execute("UPDATE relics SET image_url=%s WHERE id=%s", (local_url, relic_id))
                conn.commit()
                size_kb = len(resp.content) / 1024
                print(f"→ OK ({size_kb:.1f} KB)")
                success += 1
            else:
                print(f"→ HTTP {resp.status_code}")
                fail += 1
        except Exception as e:
            print(f"→ 失败: {e}")
            fail += 1

        time.sleep(0.3)  # 礼貌性延迟，避免请求过快

    cursor.close()
    conn.close()

    print(f"\n===== 下载完成 =====")
    print(f"成功: {success}, 跳过: {skip}, 失败: {fail}")


if __name__ == "__main__":
    main()
