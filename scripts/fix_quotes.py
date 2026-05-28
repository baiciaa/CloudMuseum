"""修复 seed_museum_data.py 中的中文引号问题"""
with open("scripts/seed_museum_data.py", "r", encoding="utf-8") as f:
    content = f.read()

# 中文双引号替换为角括号
content = content.replace("“", "「")  # " -> 「
content = content.replace("”", "」")  # " -> 」

with open("scripts/seed_museum_data.py", "w", encoding="utf-8") as f:
    f.write(content)
print("OK")
