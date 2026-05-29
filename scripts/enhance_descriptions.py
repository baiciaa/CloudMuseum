"""
为与戚继光/登州海防相关的文物增强描述，加入历史背景关联。
"""
import pymysql

DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "040918hybHYB",
    "database": "cloud_museum",
    "charset": "utf8mb4",
}

# 针对不同文物类型的戚继光/登州关联文案
def get_qijiguang_context(name, era, category):
    """根据文物类型返回戚继光/登州关联文案"""
    name_lower = name.lower()

    # 明代火器/兵器 — 戚继光与登州
    if "明" in era and ("武器" in category or "兵器" in category or
                        "炮" in name or "铳" in name or "火" in name):
        return (
            "明代登州是北方最重要的海防基地，抗倭英雄戚继光即蓬莱人，"
            "他17岁袭父职任登州卫指挥佥事，在此练兵备战，"
            "以「封侯非我意，但愿海波平」明志，成就了一代抗倭名将的传奇。"
            "这件火器是登州海防体系的实物见证，承载着戚继光保家卫国的海防精神。"
        )

    # 明代铁炮/火炮
    if "明" in era and ("炮" in name or "铳" in name):
        return (
            "明代登州海防以火器著称，蓬莱水城城墙上曾密布各类火炮。"
            "戚继光在登州期间深入研究火器战术，改革装备，将登州打造为北方最坚固的海防堡垒。"
            "「封侯非我意，但愿海波平」——这件火炮见证了戚继光守护海疆的坚定信念。"
        )

    # 清代铁炮
    if "清" in era and ("炮" in name or "铳" in name):
        return (
            "清代登州水师延续了明代的海防传统，蓬莱水城仍是渤海海防的重要据点。"
            "从戚继光抗倭到清代登州水师抵御外侮，"
            "「封侯非我意，但愿海波平」的家国情怀在登州这片土地上薪火相传数百年。"
        )

    # 蓬莱水城相关
    if "蓬莱水城" in name or "小海" in name:
        return (
            "蓬莱水城是中国现存最完整的古代水军基地，北宋在此设立刀鱼寨，"
            "明代戚继光扩建为水城，清代登州水师驻泊于此。"
            "戚继光少年时在登州卫习文练武，蓬莱水城是他军事生涯的起点。"
            "此件文物出自蓬莱水城小海，是登州千年海防史的见证。"
        )

    # 宋代兵器
    if "宋" in era and ("武器" in category or "兵器" in category or
                        "戈" in name or "剑" in name or "胄" in name or "甲" in name):
        return (
            "宋代登州依山傍海，自古民风剽悍，尚武之风浓厚。"
            "北宋在登州设立刀鱼寨，驻泊水军，登州海防传统源远流长。"
            "戚继光继承并发扬了登州千年的尚武精神，在此创立了举世闻名的戚家军。"
            "这件兵器见证了登州作为军事重镇的千年荣光。"
        )

    # 宋代瓷器 — 海上丝路
    if "宋" in era and "瓷" in category:
        return (
            "宋代登州港是北方最大的贸易港口，被誉为东方海上丝绸之路始发港。"
            "登州（蓬莱）是戚继光的故乡，戚氏家族世袭登州卫指挥佥事，守护着这座千年古港。"
            "这件瓷器不仅是工艺的杰作，更是登州作为海上丝路枢纽的历史见证。"
        )

    # 明代其他文物 — 戚继光时代
    if "明" in era and ("铜" in category or "铁" in category):
        return (
            "明代是登州海防建设的鼎盛时期，洪武九年在宋代刀鱼寨基础上扩建蓬莱水城。"
            "抗倭英雄戚继光即蓬莱人，他17岁袭职登州卫指挥佥事，在此成长、练兵，"
            "最终率领戚家军转战东南沿海，成就了「封侯非我意，但愿海波平」的千古誓言。"
            "这件文物见证了戚继光故里深厚的历史文化底蕴。"
        )

    # 明代书画/书法
    if "明" in era and ("画" in category or "书" in category or "字" in category):
        return (
            "明代登州人文荟萃，将星璀璨，抗倭英雄戚继光、兵部尚书陈其学等皆出于此。"
            "戚继光不仅是一位军事家，更是一位才华横溢的诗人与书法家，"
            "其诗集《止止堂集》慷慨豪迈，书法苍劲有力。"
            "这件作品体现了登州作为文化重镇的历史地位与家国情怀。"
        )

    # 关于登州水城、海防的清代文物
    if "清" in era and ("水师" in name or "海防" in name or "水城" in name or "蓬莱" in name):
        return (
            "清代登州水师继承明代海防遗产，继续守卫渤海湾。"
            "从戚继光到清代水师将士，'封侯非我意，但愿海波平'的家国情怀在登州代代相传。"
            "登州博物馆所在蓬莱，是戚继光的故乡，至今保留着戚继光故里、戚氏祠堂等历史遗迹，"
            "这件文物是登州千年海防史的重要组成。"
        )

    # 宋代钱币 — 登州海防时代
    if "钱币" in category and ("宋" in era or "北宋" in era or "南宋" in era):
        if "建炎" in name or "绍兴" in name:
            return (
                "此枚钱币于蓬莱水城小海清淤时出土，钱文为南宋高宗时期铸币。"
                "登州作为北方海防重镇，宋代在此设立刀鱼寨，驻泊水军。"
                "这枚钱币见证了登州在宋代的军事地位，为后世戚继光在此建立海防体系奠定了历史基础。"
            )
        return (
            "宋代是登州（今蓬莱）作为北方海防重镇的重要时期。"
            "登州港是北方最大的贸易港口，刀鱼寨是重要的水军基地。"
            "七百余年后，戚继光在这片土地上成长为一代抗倭名将。"
            "这枚钱币见证了登州作为海防要塞和经济重镇的双重辉煌。"
        )

    # 宋代其他文物
    if "宋" in era:
        return (
            "宋代是登州（今蓬莱）历史上经济文化最繁荣的时期之一。"
            "登州是戚继光的故乡，戚氏家族自明初起世袭登州卫指挥佥事，守护着这片土地。"
            "这件文物出土于登州地区，承载着登州作为东方海上丝绸之路"
            "始发港和海防重镇的双重历史记忆。"
        )

    # 战国/周代兵器 — 登州尚武传统渊源
    if ("战国" in era or "周" in era) and ("武器" in category or "兵器" in category or
                                             "戈" in name or "剑" in name or "矛" in name):
        return (
            "登州依山傍海，自古为兵家必争之地，尚武之风源远流长。"
            "这件先秦兵器证明早在三千年前，登州地区已有完善的武备体系。"
            "从先秦到戚继光，登州尚武精神与家国情怀一脉相承。"
        )

    return None


def main():
    conn = pymysql.connect(**DB_CONFIG)
    cursor = conn.cursor()

    cursor.execute("SELECT id, name, era, category, description FROM relics ORDER BY id")
    relics = cursor.fetchall()

    updated = 0
    for relic_id, name, era, category, desc in relics:
        context = get_qijiguang_context(name, era, category)
        if context and context not in (desc or ""):
            # 在原描述后追加戚继光/登州关联内容
            new_desc = desc.rstrip() + context
            cursor.execute("UPDATE relics SET description=%s WHERE id=%s", (new_desc, relic_id))
            updated += 1
            print(f"[{relic_id}] {name[:30]} ← 已增强")

    conn.commit()
    cursor.close()
    conn.close()
    print(f"\n共增强 {updated} 件文物描述")


if __name__ == "__main__":
    main()
