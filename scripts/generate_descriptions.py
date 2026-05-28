"""为文物生成引人入胜的中文描述 — 基于深厚的历史知识模板"""
import pymysql
import random

DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "040918hybHYB",
    "database": "cloud_museum",
    "charset": "utf8mb4",
}

# ==== 时代背景知识库 ====
ERA_CONTEXT = {
    "战国时期": [
        "战国七雄争霸的时代，百家争鸣、思想激荡，各国在军事、经济、文化上激烈竞争。",
        "那是一个铁血与智慧并存的年代，诸子百家各抒己见，列国变法图强，中华文明进入第一个黄金时代。",
        "群雄逐鹿中原的战国时代，青铜铸造技术登峰造极，新的货币形制层出不穷。",
    ],
    "汉": [
        "大汉王朝威震西域，丝绸之路驼铃阵阵，东西方文明在此交汇。",
        "汉代是中国历史上第一个长期大一统的王朝，国力强盛，文化艺术蓬勃发展。",
        "「犯强汉者，虽远必诛」——汉代的雄风至今回荡在每一个中国人的血脉里。",
    ],
    "南北朝": [
        "南北朝是民族大融合的时代，佛教东传，石窟艺术遍地开花，胡汉文化碰撞出璀璨火花。",
        "分裂动荡的年代里，文化艺术却异彩纷呈，佛教造像、青瓷技艺都达到了新的高峰。",
    ],
    "唐": [
        "大唐盛世，万邦来朝。长安城内的胡商、诗人、僧侣穿梭如织，丝绸之路繁华空前。",
        "唐代是中华文明的巅峰时期，诗歌、绘画、陶瓷、金银器工艺都达到了令人叹为观止的高度。",
        "「长安回望绣成堆」——唐代的繁华与浪漫，至今仍是中国人心中最辉煌的记忆。",
    ],
    "北宋": [
        "北宋经济文化极度繁荣，汴京城内商铺林立、勾栏瓦舍夜夜笙歌，市民文化蓬勃兴起。",
        "宋代是中国古代科技的黄金期，活字印刷、指南针、火药三大发明都成熟于此时。",
        "宋人崇尚雅致生活，点茶、焚香、插花、挂画被称为「四般闲事」，文人审美影响深远。",
    ],
    "南宋": [
        "南宋偏安江南，却创造出了举世无双的文化成就。临安城内，文人墨客吟诗作画，制瓷工艺臻于化境。",
        "「山外青山楼外楼」——南宋虽国势偏弱，却是中国古代商品经济与海外贸易最为活跃的时期之一。",
    ],
    "宋": [
        "宋代是中国古代文化的巅峰，文人阶层崛起，审美从雄浑转向雅致。宋瓷的素雅、宋词的婉约，皆是典范。",
    ],
    "元": [
        "马背上的民族入主中原，却促成了空前的东西方交流。马可·波罗笔下的元大都，是世界最繁华的都市。",
        "元代疆域辽阔，多元文化交融。青花瓷的蓝白之美、元曲的通俗魅力，至今仍广为流传。",
    ],
    "明": [
        "明代商品经济空前繁荣，资本主义萌芽悄然出现。景德镇的瓷器、苏州的丝织品远销海外。",
        "郑和七下西洋的壮举，将中华文明传播到了遥远的非洲东海岸。明代的工艺美术达到新的巅峰。",
        "从永乐大帝的紫禁城到万历皇帝的定陵珍宝，明代以其雄厚的国力留下了无数瑰宝。",
    ],
    "清": [
        "康乾盛世延续了百余年，多民族融合的帝国版图辽阔。瓷器、珐琅、玉雕等工艺都达到了炉火纯青的境界。",
        "清代是中国最后一个封建王朝，集历代工艺之大成，创造了无与伦比的宫廷艺术。",
        "从康熙的青花到乾隆的粉彩，清代的手工业匠人将中国陶瓷艺术推向了巅峰。",
        "清代火器与冷兵器并存，见证了战争形态从传统向近代的剧烈转变。",
        "清代是中国古代图书典籍编纂的鼎盛时期，《四库全书》的编修便是最好的例证。",
    ],
    "中华民国": [
        "民国时期，西风东渐，新旧文化激烈碰撞。传统工艺在变革中寻求新生。",
        "那是一个大变革的时代，封建帝制终结，现代中国开始蹒跚起步。",
    ],
    "公元20世纪": [
        "二十世纪的中国经历了翻天覆地的变化，从积贫积弱到自立于世界民族之林。",
    ],
    "更新世": [
        "更新世是地球历史上最近的一个冰河时代，剑齿虎、猛犸象等巨型动物在地球上漫步。",
        "数十万年前，远古生物在这片土地上繁衍生息，留下了珍贵的生命印记。",
    ],
}

ERA_INTROS = {
    "战国时期": "这件战国时期的",
    "汉": "这件汉代的",
    "南北朝": "这件南北朝的",
    "唐": "这件唐代的",
    "北宋": "这件北宋的",
    "南宋": "这件南宋的",
    "宋": "这件宋代的",
    "元": "这件元代的",
    "明": "这件明代的",
    "清": "这件清代的",
    "中华民国": "这件民国时期的",
    "公元20世纪": "这件二十世纪的",
    "更新世": "这件来自更新世的",
}


def get_era_parts(era, category=""):
    """获取时代相关的描述片段，优先匹配分类"""
    if not era or era not in ERA_CONTEXT:
        return "这件文物承载着丰富的历史记忆，让我们得以一窥先民的智慧与匠心。"

    options = ERA_CONTEXT[era]
    # 根据分类关键词选择更贴切的背景描述
    weapon_kw = ["武器", "弹药", "炮", "枪", "剑", "戈", "矛", "钺", "铳"]
    book_kw = ["古籍", "图书", "文件", "宣传", "经"]
    art_kw = ["书法", "绘画", "画", "书"]
    money_kw = ["钱币", "钱"]
    ceramic_kw = ["瓷", "陶", "碗", "瓶", "罐", "壶"]
    sculpture_kw = ["雕塑", "造像", "佛", "观音"]

    cat = category or ""
    if any(kw in cat or kw in str(options) for kw in weapon_kw):
        # 优先找武器/军事相关背景
        for opt in options:
            if any(w in opt for w in ["火器", "战争", "军事", "冷兵器", "金戈"]):
                return opt
    if any(kw in cat for kw in book_kw):
        for opt in options:
            if any(w in opt for w in ["典籍", "图书", "编纂", "文化"]):
                return opt
    if any(kw in cat for kw in art_kw):
        for opt in options:
            if any(w in opt for w in ["绘画", "书法", "艺术", "审美"]):
                return opt
    if any(kw in cat for kw in money_kw):
        for opt in options:
            if any(w in opt for w in ["经济", "货币", "商业", "贸易"]):
                return opt

    return random.choice(options)


def generate_description(name, era, category, meta_desc):
    """根据文物信息生成引人入胜的描述"""
    era_str = era if era else "古代"
    cleaned_meta = (meta_desc or "").replace("�", "·").replace("\xa0", " ").strip()

    # 解析材质信息
    material = ""
    level = ""
    year = ""
    if "质地" in cleaned_meta:
        parts = cleaned_meta.split("|")
        for p in parts:
            p = p.strip()
            if "质地" in p:
                material = p.replace("质地：", "").strip()
            elif "级别" in p:
                level = p.replace("级别：", "").strip()
            elif "入藏年度" in p or "残缺度" in p:
                year = p.strip()

    era_context = get_era_parts(era, category)

    # 构建精彩描述
    era_intro = ERA_INTROS.get(era, f"这件{era_str}的")

    # 根据文物名称补充细节
    name_detail = get_name_detail(name, category)

    # 构建完整描述
    parts_list = []
    parts_list.append(f"{era_intro}{name}，{name_detail}{era_context}")

    if material:
        material_desc = get_material_story(material)
        parts_list.append(material_desc)

    if level and level != "一般":
        parts_list.append(f"经鉴定为国家{level}文物。")
    else:
        parts_list.append("它虽无华丽的外表，却是解读历史不可或缺的密码。")

    return "".join(parts_list)


def get_name_detail(name, category):
    """根据文物名称补充细节描述"""
    detail = ""
    if "钱" in name or "钱币" in (category or ""):
        detail = "是古代商品经济的重要见证。"
    elif "印" in name or "玺" in name:
        detail = "方寸之间凝聚着权力与信用的象征。"
    elif "瓷" in name or "碗" in name or "瓶" in name or "罐" in name or "壶" in name or "盘" in name or "杯" in name or "洗" in name or "盂" in name or "尊" in name or "炉" in name or "灯" in name:
        detail = "造型优美，釉色莹润。"
    elif "镜" in name:
        detail = "以铜为镜，可以正衣冠。"
    elif "石" in name and ("刻" in name or "碑" in name or "墓志" in name or "志" in name):
        detail = "石上刻痕，穿越千年时光。"
    elif "佛" in name or "观音" in name or "菩萨" in name or "造像" in name:
        detail = "慈悲法相，普度众生。"
    elif "画" in name or "书" in name or "书法" in (category or ""):
        detail = "笔墨之间，尽显文人风骨。"
    elif "砚" in name or "墨" in name:
        detail = "文房雅器，文人墨客的心爱之物。"
    elif "化石" in (category or "") or "骨" in name or "牙" in name or "标本" in (category or ""):
        detail = "是地球生命演化的珍贵档案。"
    elif "剑" in name or "戈" in name or "矛" in name or "钺" in name:
        detail = "金戈铁马，气吞万里如虎。"
    elif "鼎" in name or "敦" in name or "豆" in name or "壶" in name:
        detail = "礼器之重，承载着古老仪典的庄严。"
    elif "俑" in name:
        detail = "陪葬千年，只为守护主人的往生之路。"
    elif "锚" in name or "船" in name:
        detail = "见证了古人对海洋的征服与向往。"
    elif "漆" in name or "木" in (category or ""):
        detail = "木质的温润与匠人的巧思在此完美融合。"
    elif "玻璃" in name or "琉璃" in name:
        detail = "晶莹剔透，折射出古人对光与色的迷恋。"
    elif "布" in name or "帛" in name or "织" in name or "绣" in name:
        detail = "丝缕之间编织着千年的温暖与审美。"
    elif "经" in name or "佛" in name:
        detail = "佛光普照，经文流转。"
    else:
        # 根据分类给通用细节
        category_details = {
            "钱币": "钱币虽小，却记录了一个王朝的经济脉搏。",
            "铜器": "青铜的沉稳光泽中，凝聚着古人的智慧与匠心。",
            "玺印符牌": "朱红印迹落下的一刻，历史的齿轮悄然转动。",
            "石器、石刻、砖瓦": "顽石不语，却默默诉说着千年的故事。",
            "瓷器": "泥与火的艺术，在此化作永恒的美丽。",
            "书法、绘画": "一笔一画间，流淌着千年的文脉与气韵。",
            "文玩": "案头清赏，文人的精神栖息于此。",
            "雕塑、造像": "凝固的瞬间里，蕴含着永恒的信仰。",
            "家具": "一桌一椅，皆是生活美学的见证。",
            "织绣": "千丝万缕织就的不仅是华服，更是时代的审美。",
            "竹木雕": "竹木虽轻，匠人的一刀一刻却力重千钧。",
            "金银器": "金辉银耀，映照出古代贵族的奢华生活。",
            "陶器": "最古老的手艺，最朴素的美。",
            "珐琅器": "珐琅的绚丽让人惊叹——那是东西方工艺碰撞出的火花。",
            "古籍图书": "泛黄的纸页里，藏着穿越时空的智慧。",
            "标本、化石": "大自然是最好的雕塑家，用亿万年打造出这件杰作。",
            "漆器": "漆光流转，历经千年依然熠熠生辉。",
            "武器、弹药": "冰冷的钢铁背后，凝结着烽火岁月的记忆。",
            "文件、宣传品": "一张薄纸，承载着一个时代的呐喊。",
            "度量衡器": "衡量万物的标准，见证了公平与秩序的建立。",
            "邮品": "方寸之间，传递着跨越山河的情谊。",
            "音像制品": "声与影的载体，记录着时代的脉动。",
            "牙骨角器": "从远古走来，大自然赋予的材料在人类手中绽放光彩。",
            "玻璃器": "流光溢彩，中西合璧的工艺精华。",
            "铁器、其他金属器": "金属的冷峻下，是炉火纯青的锻造技艺。",
        }
        detail = category_details.get(category, "穿越时光，来到了我们面前。")

    return detail


def get_material_story(material):
    """根据材质生成工艺描述"""
    material_stories = {
        "单一/无机质/铜": "铜的冶炼与铸造，是青铜文明最核心的技术。匠人们以失蜡法、范铸法精工细作，每一道纹饰都倾注了心血。",
        "单一/无机质/石": "石之美者谓之玉。古人对石材的选择极为讲究，雕琢之间尽显匠心。",
        "单一/无机质/瓷": "抟土为坯，入火烧制——瓷器的诞生是人类最伟大的发明之一。",
        "单一/无机质/陶": "火与土的第一次亲密接触，开启了人类文明的篇章。陶器虽质朴，却凝聚了先民最本真的智慧。",
        "单一/有机质/纸": "纸寿千年，绢八百。中国造纸术的发明，为人类文明的传承提供了最便捷的载体。",
        "单一/有机质/木": "木生于林，匠成于手。中国传统木作技艺以榫卯结构闻名天下，不用一钉一铆却能稳如泰山。",
        "单一/有机质/骨角牙": "取自自然的馈赠，经过巧手雕琢，骨角牙器散发着温润而神秘的光泽。",
        "单一/无机质/金银": "金银细工历来是皇家贵族的专宠，錾刻、鎏金、炸珠等工艺代代相传，件件都是心血之作。",
        "单一/无机质/铁": "铁的冶炼难度远高于铜，能掌握铁器制造技术的古代工匠，堪称时代的先锋。",
        "单一/无机质/玻璃": "玻璃晶莹剔透，在古代中国是极为珍贵的材质，多由西域传入，工艺极为考究。",
        "单一/无机质/玉石宝石": "玉不琢不成器。中国的玉文化源远流长，每一块玉都经过了千挑万选和精雕细琢。",
        "单一/无机质/珐琅": "铜胎掐丝珐琅，俗称景泰蓝，是中国最著名的传统工艺品之一。数百度高温下反复烧制，才成就了这般绚烂。",
        "复合/无机复合/漆木": "生漆采自漆树，一层层涂刷打磨，漆器的制作周期往往长达数月甚至数年，因此格外珍贵。",
        "单一/无机质/砖瓦": "一砖一瓦，皆为民居之本。古建筑的一砖一瓦都经过精心烧制，虽朴实却意蕴无穷。",
        "单一/无机质/泥": "泥土虽卑，却是人类最早使用的造型材料。从远古的彩陶到后来的泥塑，泥土在匠人手中拥有了灵魂。",
    }
    return material_stories.get(material, f"其材质为{material.replace('单一/', '').replace('复合/', '')}，经过匠人精心制作，历经岁月沧桑而风采不减。")


def main():
    conn = pymysql.connect(**DB_CONFIG)
    cursor = conn.cursor()

    cursor.execute("SELECT id, name, era, category, description FROM relics ORDER BY id")
    relics = cursor.fetchall()

    print(f"共 {len(relics)} 件文物需要生成描述\n")

    for relic_id, name, era, category, meta_desc in relics:
        desc = generate_description(name, era, category, meta_desc)
        cursor.execute("UPDATE relics SET description=%s WHERE id=%s", (desc, relic_id))
        conn.commit()
        print(f"[{relic_id}] {name} → OK ({len(desc)}字)")

    cursor.close()
    conn.close()

    print(f"\n===== 完成 =====")
    print(f"共 {len(relics)} 件文物描述已更新")


if __name__ == "__main__":
    main()
