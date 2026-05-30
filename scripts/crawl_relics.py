import re, os, sys, subprocess, time

# Step 1: Extract relic data from all 6 pages
relics = []
for page in range(1, 7):
    path = f'/tmp/collection_p{page}.html'
    if not os.path.exists(path):
        print(f'SKIP: page {page} not found')
        continue
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        html = f.read()

    blocks = html.split('ex_info_tit')
    for block in blocks[1:]:
        name_m = re.search(r'target="_blank">\s*([^<]+?)\s*<', block)
        cat_m = re.search(r'类别[：:]\s*([^<]+?)\s*<', block)
        era_m = re.search(r'年代[：:]\s*([^<]+?)\s*<', block)
        url_m = re.search(r'href="(/collection/details\?id=[^"]+)"', block, re.IGNORECASE)

        if name_m and url_m:
            name = name_m.group(1).strip()
            cat = cat_m.group(1).strip() if cat_m else ''
            era = era_m.group(1).strip() if era_m else ''
            url = url_m.group(1)
            relics.append((name, era, cat, url))

# Deduplicate
seen = set()
unique = []
for r in relics:
    if r[3] not in seen:
        seen.add(r[3])
        unique.append(r)

print(f'Step 1: Extracted {len(unique)} unique relics')
for i, (n, e, c, u) in enumerate(unique[:5]):
    print(f'  [{i+1}] {n} | {e} | {c}')

# Step 2: Save extracted data
with open('/tmp/relic_data.txt', 'w', encoding='utf-8') as f:
    for n, era, cat, url in unique:
        f.write(f'{n}|{era}|{cat}|{url}\n')
print('Data saved to /tmp/relic_data.txt')
