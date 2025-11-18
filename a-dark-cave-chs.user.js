// ==UserScript==
// @name         A Dark Cave 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 A Dark Cave (https://a-dark-cave.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game A Dark Cave.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://a-dark-cave.com/favicon.ico
// @license      MIT
// @include      *https://a-dark-cave.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/a-dark-cave-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/a-dark-cave-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/11/17 16:51
 * Author: guoba
 * View: https://www.gityx.com/
 * ---------------------------
 */
//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //设置
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Cave": "洞穴",
    "Coal": "煤",
    "Craft": "制作",
    "Feedback": "反馈",
    "Explore Cave": "探索洞穴",
    "Sign In/Up": "登录/注册",
    "Shop": "商店",
    "New": "新游戏",
    "Iron": "铁",
    "Imprint": "印记",
    "Gather Wood": "采集木头",
    "Privacy": "隐私",
    "Stone Axe": "石斧",
    "Resources": "资源",
    "Stone": "石头",
    "Wood": "木头",
    "Torch": "火把",
    "Some wood lies scattered near the cave's entrance. It might prove useful.": "一些木头散落在洞口附近。它可能会被证明是有用的。",
    "The fire crackles softly, casting dancing shadows on the cave walls. The warmth is comforting.": "火轻轻地噼啪作响，在洞壁上投下舞动的影子。温暖让人感到安慰。",
    "The torchlight illuminates the cave walls. In the flickering light, you notice a path leading deeper into the caves.": "火把照亮了岩壁。在闪烁的灯光下，你注意到一条通往洞穴深处的小路。",
    "Already have an account? Sign in": "已拥有账号？登录",
    "and": "和",
    "Back to sign in": "返回登录",
    "Close": "关闭",
    "Create Account": "创建账户",
    "Create an account to save your progress in the cloud": "创建一个帐户，把你的进度保存在云端",
    "Don't have an account? Sign up": "没有账户？注册",
    "Email": "电子邮件",
    "Enter your email to receive a password reset link": "输入您的电子邮件接收密码重置链接",
    "Forgot password?": "忘记了密码?",
    "I accept the": "我接受",
    "Password": "密码",
    "Privacy Policy": "隐私政策",
    "Reset Password": "重置密码",
    "Send Reset Link": "发送重置链接",
    "Sign In": "登录",
    "Sign in to sync your game across devices": "登录以跨设备同步游戏",
    "Sign Up": "注册",
    "Terms of Service": "服务条款",
    "A decent amount of gold": "相当多的金子",
    "A fortune in gold": "一大笔黄金",
    "A generous gift to get you started": "一份慷慨的礼物，让你开始",
    "A substantial treasure": "一笔巨大的财富",
    "Activate a magnificent Great Feast that boosts all production by 400% for 60 minutes. Can be purchased multiple times and activated when needed.": "激活一个伟大的盛宴，使所有产量提高400%，持续60分钟。可以多次购买并在需要时激活。",
    "Boost the village production by 4x for 60 minutes (5 times)": "提高村庄产量4倍，持续60分钟（5次）",
    "For Sale": "出售",
    "Purchase": "购买",
    "Purchase items and manage your purchases": "购买物品和管理您的购买",
    "Purchases": "购买",
    "Sign in or create an account to purchase items.": "登录或创建一个帐户来购买物品。",
    "Error": "错误",
    "Notification": "通知",
    "Email not confirmed": "邮箱未确认",
    "Sign Out": "登出",
    "Account created": "账号已创建",
    "Please check your email to verify your account.": "请检查您的电子邮件以验证您的帐户。",
    "Village": "村庄",
    "Tools": "工具",
    "Stone Pickaxe": "石镐",
    "Chop Wood": "砍木头",
    "Bonus": "奖励",
    "Outside the cave a clearing opens. This could be the start of something great.": "洞穴外面有一片空地。这可能是伟大的开始。",
    "Basic axe for chopping wood": "砍木头用的基础斧头",
    "Build": "建造",
    "Buildings": "建筑",
    "Free": "空闲",
    "Gatherer": "采集",
    "Rule": "分配",
    "The first wooden hut stands complete, the village begins to take shape.": "第一个木屋建成后，村庄开始初具雏形。",
    "Simple wooden hut providing basic shelter": "简陋的木屋提供基本的住所",
    "Each villager consumes 1 food and 1 wood": "每个村民消耗1食物和1木材",
    "A traveler arrives and decides to stay.": "一个旅行者来到这里，决定留下来。",
    "A wanderer appears and becomes part of the community.": "一个流浪者出现并成为社区的一部分。",
    "Mine": "采矿",
    "Blacksmith": "铁匠",
    "The whispering Cube": "低语的魔方",
    "Near the cave’s entrance, you discover a perfectly polished metal cube. At first it seems still, but then you feel a faint vibration like a slow, rhythmic pulse, almost like a heartbeat.": "在洞穴入口附近，你发现了一个抛光完美的金属立方体。起初它似乎静止不动，但随后你会感到一种微弱的振动，就像一种缓慢而有节奏的脉搏，几乎像心跳。",
    "Mining": "采矿",
    "Rudimentary pickaxe for mining": "采矿用的简易镐",
    "Luck": "幸运",
    "Stats": "属性",
    "Strength": "力量",
    "While chopping wood, you find an old trinket with glowing amber liquid inside. After some hesitation, you drink it. It burns as it goes down, but you feel stronger than before.": "在砍木头的时候，你发现了一个古老的小饰品，里面有发光的琥珀色液体。犹豫了一会儿，你喝了它。它在燃烧，但你感觉比以前更强大。",
    "A newcomer arrives and makes themselves at home.": "新来的人来了，就像在自己家里一样。",
    "Iron Axe": "铁斧",
    "Iron Pickaxe": "铁镐",
    "Iron Sword": "铁剑",
    "The blacksmith's forge comes alive. The heart of industry now beats in the village.": "铁匠的锻炉活了起来。工业的心脏现在在村里跳动。",
    "Venture Deeper": "深入探索",
    "Crude Bow": "简易弓",
    "Bones": "骨头",
    "Food": "食物",
    "Hunter": "猎人",
    "Fur": "皮毛",
    "Iron Lantern": "铁灯笼",
    "Sulfur": "硫",
    "The air grows colder as you descend the path deeper into the cave. The walls around you seem unnaturally smooth, as if shaped by someone.": "当你沿着小路深入洞穴时，空气变得越来越冷。你周围的墙壁看起来异常光滑，好像是被人塑造的。",
    "By dawn, a heap of iron lies at the village edge. No tracks remain.": "黎明时分，一堆铁块躺在村庄的边缘。没有留下任何痕迹。",
    "A pile of wood has been found near the village.": "在村子附近发现了一堆木头。",
    "Bonuses": "加成",
    "Forest": "森林",
    "Hunt": "狩猎",
    "Huntsman Bow": "猎人弓",
    "Old Trinket": "旧饰品",
    "Relics": "遗物",
    "Sharp axe for heavy chopping": "锋利的斧头，用于重砍",
    "Simple bow, reliable for any challenge": "简单的弓，经得起任何挑战",
    "Sturdy iron blade enhancing combat prowess": "坚固的铁刃，增强了战斗能力",
    "The village is encircled by a dense, dark forest. Danger lingers in the air, though it may also be a good place to hunt.": "这个村庄被茂密的黑森林包围着。危险在空气中徘徊，尽管它也是一个狩猎的好地方。",
    "Weapons": "武器",
    "Whispering Cube": "低语魔方",
    "The Cube awakens": "魔方觉醒",
    "You wake in the night. The cube hums softly. Suddenly a gentle, melodic voice emerges from it: 'Long ago, a great civilization thrived upon this world, but it crumbled, its knowledge lost to the ages.'": "你在夜里醒来。立方体轻轻地嗡嗡作响。突然，一个温柔而优美的声音从里面传出来：“很久以前，一个伟大的文明在这个世界上繁荣昌盛，但它崩溃了，它的知识随着时代的流逝而消失了。”",
    "Ancient trinket that grants both strength and luck": "古老的饰品，同时给予力量和运气",
    "Perfectly polished metal cube of unknown origin": "完美抛光的金属立方体，来历不明",
    "A pile of wood has been left near a hut.": "在一间小屋附近留下了一堆木头。",
    "Shallow Pit": "浅坑",
    "Durable pickaxe for mining efficiently": "耐用的鹤嘴锄，采矿效率高",
    "A muscular man with a large axe approaches your village. He flexes his arms 'I can cut trees like no other,' he boasts. 'Give me food, and I'll bring wood.'": "一个肌肉发达的男人拿着一把大斧头走近你的村庄。“我砍树的本领无人能及，”他夸口说。“给我吃的，我去拿木头。”",
    "Deny services": "拒绝服务",
    "food": "钢",
    "The Woodcutter": "樵夫",
    "Someone has left gleaming steel ingots at the edge of the village.": "有人在村子边上留下了闪闪发光的钢锭。",
    "You decline his offer. The woodcutter shrugs and walks away into the forest.": "你拒绝了他的提议。樵夫耸了耸肩，走进了森林。",
    "Continue": "继续",
    "Basic hunting cabin with tools for hunters": "基本的狩猎小屋，为猎人提供工具",
    "Blacksmith with basic tools for crafting": "拥有基本锻造工具的铁匠",
    "Steel": "钢",
    "Unlocks Crafting": "解锁制作",
    "Unlocks Hunters": "解锁猎人",
    "The woodcutter takes the food and heads into the forest. By evening, he returns with the promised 100 wood stacked neatly at your village edge.": "樵夫带着食物走进了森林。到了晚上，他带着承诺的100块木头回来，整齐地堆放在你的村庄边上。",
    "A stranger approaches and joins the village.": "一个陌生人走近，加入了村庄。",
    "One hut lies empty. Its occupant is gone.": "一间小屋空无一人。它的主人走了。",
    "Someone approaches the village and settles in.": "有人走近村庄，住了下来。",
    "Iron Miner": "铁矿工",
    "Coal Miner": "煤矿工",
    "Foundry": "铸造厂",
    "Food is missing. Villagers speak of voices in the dark.": "食物不见了。村民们说黑暗中有声音。",
    "The Woodcutter Returns": "樵夫回来了",
    "The woodcutter returns, his axe gleaming in the sun. 'Your village grows well,' he observes. 'I can bring you more wood. What do you say?'": "樵夫回来了，他的斧头在阳光下闪闪发光。他说，你的村子发展得很好。“我可以再给你拿些木头来。你说呢？”",
    "The woodcutter takes the food and disappears into the forest. By nightfall, he returns with a large pile of 250 wood.": "樵夫带着食物消失在森林里。夜幕降临时，他带着一大堆250木头回来了。",
    "Village Feast": "村庄盛宴",
    "Hold no feast": "不设宴",
    "Hold feast": "设宴",
    "The villagers propose organizing a feast to celebrate and boost work morale.": "村民们提议举办一场盛宴来庆祝，以鼓舞工作士气。",
    "Improved bow, finely balanced and precise": "改进的弓，精细平衡和精确",
    "Unlocks Coal Miners": "解锁煤矿工",
    "Unlocks Iron Miners": "解锁铁矿工",
    "Small mining pit allowing extraction of minerals": "可开采矿物的小矿坑",
    "Cave Explore": "洞穴探索",
    "Descend Further": "继续深入",
    "Obsidian": "黑曜石",
    "Silver": "银",
    "With the lantern casting a steady glow, you descend even deeper. Suddenly your feet touch manmade stone steps, worn by time.": "随着灯笼发出稳定的光芒，你下降得更深了。突然，你的脚碰到了被时间磨损的人造石阶。",
    "The warrior tribe": "战士部落",
    "'In the distant past, a tribe of fierce warriors was chosen to live deep in the caves. Their purpose was to guard something of great importance.'": "“在遥远的过去，一个由勇猛的战士组成的部落被选中住在洞穴深处。他们的目的是保护一些非常重要的东西。”",
    "min remaining": "分钟剩余",
    "The village erupts in celebration! A magnificent feast is held, bringing joy and renewed vigor to all.": "全村都在庆祝！举行盛大的宴会，给大家带来欢乐和新的活力。",
    "Bloodstained Belt": "血染腰带",
    "Clothing": "衣服",
    "In the cave you find a leather belt stained with ancient blood.": "在洞穴里，你发现了一条沾有古代血迹的皮带。",
    "Leather belt stained with old blood": "沾满旧血的皮带",
    "Steel Axe": "钢斧",
    "Steel Forger": "锻钢机",
    "Steel Lantern": "钢灯笼",
    "Steel Pickaxe": "钢镐",
    "The foundry roars to life as fire and heat fuse raw materials.": "当火和热熔合原料时，铸造厂轰鸣着。",
    "% Cave Explore Bonus": "% 洞穴探索加成",
    "Simple lantern providing reliable light": "简单的灯提供可靠的光",
    "Specialized building for forging steel": "专门用于锻造钢材的建筑",
    "Unlocks Steel Forgers": "解锁锻钢机",
    "Steel Sword": "钢剑",
    "Ignore it": "忽略它",
    "Investigate": "调查",
    "The Pale Figure": "苍白的身影",
    "At dawn, men glimpse a tall, pale, slender figure at the woods’ edge. What do you do?": "黎明时分，人们瞥见树林边有一个高大、苍白、纤细的身影。你要做什么？",
    "As your men near, the pale figure vanishes. In its place lies a raven-feather mantle, shimmering with otherworldly power.": "当你的人靠近时，苍白的身影消失了。取而代之的是一件乌鸦羽毛披风，闪耀着超凡脱俗的力量。",
    "Ravenfeather Mantle": "乌鸦羽毛披风",
    "Mystical mantle woven from shimmering raven feathers": "由闪闪发光的乌鸦羽毛编织而成的神秘斗篷",
    "Clerk's Hut": "职员小屋",
    "Trade Post": "交易站",
    "The woodcutter approaches again 'I see your village continues to thrive,' he says with a grin. 'I can bring you more wood if you pay for it.'": "樵夫又走了过来，他笑着说：“我看到你们村继续繁荣。”如果你付钱的话，我可以再给你拿些木头来。”",
    "The Woodcutter's Offer": "樵夫的提议",
    "The woodcutter takes the food and ventures deep into the forest. He returns with an impressive haul of 750 wood.": "樵夫带着食物冒险深入森林。他带回了令人印象深刻的750木头。",
    "A clerks hut is erected, its occupant ready to track the flow of  resources with meticulous care.": "一个职员小屋竖立起来，它的居住者准备无微不至地跟踪资源的流动。",
    "Hut where clerks track resources of the village": "工作人员追踪村庄资源的小屋",
    "Knowledge": "知识",
    "The woodcutter approaches again 'I see your village continues to thrive,' he says with a grin. 'I can bring you more wood if you pay for it.'": "樵夫又走了过来，他笑着说：“我看到你们村继续繁荣。”“如果你付钱的话，我可以再给你拿些木头来。”",
    "The woodcutter takes the food and ventures deep into the forest. He returns with an impressive haul of 750 wood.": "樵夫带着食物冒险深入森林。他带回了令人印象深刻的750块木材。",
    "The Woodcutter's Offer": "樵夫的提议",
    "The Traveling Merchant": "旅行商人",
    "Say Goodbye": "再见",
    "Reinforced Rope": "加固绳",
    "A weathered merchant arrives, his cart overflowing with wares. His eyes glint with avarice as he murmurs 'I have rare items for sale'.": "一个饱经风霜的商人来了，他的车里装满了货物。他的眼睛里闪烁着贪婪的光芒，低声说：“我有稀有的东西要卖。”",
    "Donate": "捐助",
    "Trade": "交易",
    "A trade post is built near the forest attracting tradesman who look to sell their goods for gold.": "在森林附近建立了一个贸易站，吸引那些想要出售货物换取黄金的商人。",
    "By morning, the food stores are lighter. Something was here.": "到了早上，食物储备变少了。有什么东西在这里。",
    "Ignore": "忽略",
    "Whispers Beneath the Hut": "小屋下的低语",
    "You lift the floorboards and find a strange amulet, faintly whispering.": "你掀开地板，发现一个奇怪的护身符，微弱地低语着。",
    "At night, faint whispers seem to rise from under the floor of one of the huts. The villagers are uneasy. Do you investigate?": "夜晚，从一间小屋的地板下传来微弱的低语。村民们很不安。你要调查吗？",
    "Madness": "疯狂",
    "Muttering Amulet": "嘀咕护身符",
    "Mysterious amulet that whispers ancient secrets": "神秘的护身符，低语着古老的秘密",
    "The woodcutter arrives once more, 'Do you want to use my services once more?,' he asks.'": "樵夫又来了，“你还想让我再帮你一次忙吗？他问道。",
    "The woodcutter takes the food and spends the afternoon in the forest. He returns with an enormous pile of 1500 wood.": "樵夫带着食物在森林里度过了一个下午。他带回了一大堆1500木头。",
    "The Woodcutter's Ambitious Plan": "樵夫雄心勃勃的计划",
    "Tannery": "制革厂",
    "Trading post attracting merchants selling goods": "贸易站吸引商人出售商品",
    "Unlocks Trade": "解锁贸易",
    "You decline the feast proposal. The villagers accept your decision, though some look disappointed.": "你拒绝了宴会的提议。村民们接受了你的决定，尽管有些人看起来很失望。",
    "As you descend further, you find a set of bone dice carved with ancient runes. These dice have seen much fortune... and much tragedy. Do you keep them?": "再往下走，你发现了一组刻着古代符文的骨骰子。这些骰子见得多了……还有很多悲剧。你想留着它们吗？",
    "Keep them": "保留它们",
    "Leave them": "留下它们",
    "The Bone Dice": "骨骰",
    "You decide to leave them on the cave floor. As you walk away, you hear them rattle once, as if rolling themselves in farewell.": "你决定把它们留在洞底。当你走开的时候，你听到它们嘎吱作响，好像在告别时打滚。",
    "Gold": "黄金",
    "Explorer's Pack": "探险者的背包",
    "Hunter Cloak": "猎人斗篷",
    "Leather": "皮革",
    "Logger's Gloves": "伐木工手套",
    "Occultists's Map": "术士的地图",
    "Tanner": "制革工",
    "The tannery is complete. The smell of curing leather fills the air as craftsmen begin their work.": "皮革厂已经完工了。当工匠们开始工作时，空气中弥漫着皮革的香味。",
    "Unlocks Tanners": "解锁制革工",
    "Workshop where furs are processed into leather": "将毛皮加工成皮革的车间",
    "Already Purchased": "已购买",
    "Boost the village production by 4x for 60 minutes": "提高4x村庄产量，持续60分钟",
    "Purchase successful! Check the Purchases tab to activate your items.": "购买成功！检查购买选项卡来激活您的物品。",
    "100 Gold (Free Gift)": "100 金币 (免费礼物)",
    "By dawn, obsidian shards have been found around the village.": "黎明时分，在村庄周围发现了黑曜石碎片。",
    "Long Bow": "长弓",
    "Altar": "祭坛",
    "Finely crafted axe forged from tempered steel": "精雕细琢的斧头由回火钢锻造而成",
    "During the night as you pass a narrow path, something moves at the edge of your vision, like a shadow fleeing the firelight. You follow it, and there, upon the cold stones, lies an ancient scroll.": "在夜晚，当你经过一条狭窄的小路时，有什么东西在你视线的边缘移动，就像一个逃离火光的影子。你跟着它走，在那里，在冰冷的石头上，躺着一个古老的卷轴。",
    "Close to midnight, wolves emerge from the darkness, their eyes glowing with unnatural hunger. Their howls echo filled with malice as they circle your village.": "午夜时分，狼从黑暗中出现，它们的眼睛闪烁着不自然的饥饿。他们的嚎叫充满了恶意回响当他们包围你的村庄。",
    "Defend village": "保卫村庄",
    "Elder Scroll": "上古卷轴",
    "Hide": "隐藏",
    "One villager succumbs to starvation.": "一个村民饿死了。",
    "The woodcutter appears with a confident smile. 'How about we make one more deal?'": "樵夫带着自信的微笑出现了。“我们再做一笔交易怎么样？”",
    "The Woodcutter's Grand Proposal": "樵夫的宏伟计划",
    "Wolf Attack": "狼袭",
    "You refuse the deal. The woodcutter frowns but doesn't argue.": "你拒绝交易。樵夫皱了皱眉头，但没有争辩。",
    "Traps": "陷阱",
    "Ancient scroll containing forbidden knowledge": "记载着禁忌知识的上古卷轴",
    "A man on a cart drawn by two horses approaches the village. An iron cage on the cart holds two miserable souls. The trader grins wickedly: 'I'll pay you 100 steel for two of your villagers. What do you say?'": "一个人坐在两匹马拉的马车上向村子走来。马车上的铁笼子里关着两个可怜的灵魂。商人邪恶地笑着说：“我出100钢买你的两个村民。你觉得如何呢？”",
    "Refuse the offer": "拒绝这个提议",
    "Sell 2 villagers": "卖2个村民",
    "The Slave Trader": "奴隶贩子",
    "Try freeing the slaves": "试着解放奴隶",
    "Your men attack the slaver, but he's prepared! He fights back viciously. 2 of your villagers fall in the struggle. The trader escapes with his captives, leaving only death behind.": "你的人攻击奴隶贩子，但他准备好了！他恶狠狠地反击。你的2个村民在战斗中倒下。商人带着他的俘虏逃走了，留下的只有死亡。",
    "You hand over the food. The woodcutter promises to return the same day. But he never does. It seems you got betrayed.": "你把食物递过来。樵夫答应当天就回来。但他一直没有。看来你被背叛了。",
    "Adamant": "艾德曼合金",
    "An altar rises at the forest's edge, raised to appease what dwells within.": "一座祭坛矗立在森林的边缘，为了安抚住在里面的人。",
    "At the end of the stairs, a vast cavern opens before you. In the dark lie the ruins of a lost city, the remains of a civilization long gone.": "在楼梯的尽头，一个巨大的洞穴展现在你面前。黑暗中躺着一座失落的城市的废墟，一个早已消失的文明的遗迹。",
    "Bone Totem": "骨图腾",
    "Bone Totems": "骨图腾",
    "Explore Ruins": "探索遗迹",
    "Sacrifice": "牺牲",
    "'The warrior tribe grew into a vast underground city, safe from the world above, still protecting what they were sent to protect lifetimes ago.'": "”战士部落成长为一个巨大的地下城市，远离了上面的世界，仍然在保护着他们被派来保护的东西“",
    "The underground city": "地下城市",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "❚❚": "❚❚",
    "▶": "▶",
    "◉": "◉",
    "⚵": "⚵",
    "✦": "✦",
    "◉◉": "◉◉",
    "◉◉◉": "◉◉◉",
    "✦✦✦✦✦": "✦✦✦✦✦",
    "⟡": "⟡",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    ">>": ">>",
    ">": ">",
    "<<": "<<",
    "<": "<",
    "%": "%",
    "+": "+",
    ".": ".",
    "…": "…",
    ":": ":",
    "-": "-",
    "|": "|",
    "(": "(",
    ")": ")",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "                   ",
    "                  ": "                  ",
    "                 ": "                 ",
    "                ": "                ",
    "               ": "               ",
    "              ": "              ",
    "             ": "             ",
    "            ": "            ",
    "           ": "           ",
    "          ": "          ",
    "         ": "         ",
    "        ": "        ",
    "       ": "       ",
    "      ": "      ",
    "     ": "     ",
    "    ": "    ",
    "   ": "   ",
    "  ": "  ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Animations: ": "动画: ",
    "Current Endgame: ": "当前终局: ",
    "Space Background: ": "太空背景: ",
    "Population ": "人口 ",
    "Cabin": "小屋",
    "Wooden Hut": "木屋",
    "Production Bonus: ": "生产加成: ",
    "✓ ": "✓ ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "/sec)": "/秒)",
    "% bonus": "% 奖励",
    " day(s)": " 天",
    " (Free Gift)": " (免费礼物)",
    " has been added to your purchases! You can activate it from the Purchases section.": "已添加到您的购买！您可以从购买部分激活它。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)$/,
    /^×([\d\.]+)$/,
    /^x([\d\.]+)$/,
    /^v([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^ \(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^\+([\d\.]+)\%$/,
    /^([\d\.]+) €$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)k$/,
    /^\-([\d\.]+)k$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^×([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = []

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^The village fights desperately against the wolves. (.+) villagers are claimed by the wolves' unnatural hunger. The wolves also devour (.+) units of food from your stores. Villagers suggest to lay traps around the village to protect better from wolfs and other foes.$/, '村子里的人拼命与狼搏斗。$1名村民被狼群反常的饥饿夺去了生命。狼也吃掉了 $2 单位的食物。村民们建议在村庄周围设置陷阱，以更好地保护自己免受狼和其他敌人的伤害。'],
    [/^Jan ([\d\.,]+)$/, '1 月 $1'],
    [/^Feb ([\d\.,]+)$/, '2 月 $1'],
    [/^Mar ([\d\.,]+)$/, '3 月 $1'],
    [/^Apr ([\d\.,]+)$/, '4 月 $1'],
    [/^May ([\d\.,]+)$/, '5 月 $1'],
    [/^Jun ([\d\.,]+)$/, '6 月 $1'],
    [/^Jul ([\d\.,]+)$/, '7 月 $1'],
    [/^Aug ([\d\.,]+)$/, '8 月 $1'],
    [/^Sep ([\d\.,]+)$/, '9 月 $1'],
    [/^Oct ([\d\.,]+)$/, '10 月 $1'],
    [/^Nov ([\d\.,]+)$/, '11 月 $1'],
    [/^Dec ([\d\.,]+)$/, '12 月 $1'],
    [/^January, ([\d\.,]+)$/, '$1 年 1 月'],
    [/^February, ([\d\.,]+)$/, '$1 年 2 月'],
    [/^March, ([\d\.,]+)$/, '$1 年 3 月'],
    [/^April, ([\d\.,]+)$/, '$1 年 4 月'],
    [/^May, ([\d\.,]+)$/, '$1 年 5 月'],
    [/^June, ([\d\.,]+)$/, '$1 年 6 月'],
    [/^July, ([\d\.,]+)$/, '$1 年 7 月'],
    [/^August, ([\d\.,]+)$/, '$1 年 8 月'],
    [/^September, ([\d\.,]+)$/, '$1 年 9 月'],
    [/^October, ([\d\.,]+)$/, ' $1 年 10 月'],
    [/^November, ([\d\.,]+)$/, ' $1 年 11 月'],
    [/^December, ([\d\.,]+)$/, ' $1 年 12 月'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^Jan ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '1月 $1 上午 $2:$3:$4'],
	[/^Feb ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '2月 $1 上午 $2:$3:$4'],
	[/^Mar ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '3月 $1 上午 $2:$3:$4'],
	[/^Apr ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '4月 $1 上午 $2:$3:$4'],
	[/^May ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '5月 $1 上午 $2:$3:$4'],
	[/^Jun ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '6月 $1 上午 $2:$3:$4'],
	[/^Jul ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '7月 $1 上午 $2:$3:$4'],
	[/^Aug ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '8月 $1 上午 $2:$3:$4'],
	[/^Sep ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '9月 $1 上午 $2:$3:$4'],
	[/^Oct ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '10月 $1 上午 $2:$3:$4'],
	[/^Nov ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '11月 $1 上午 $2:$3:$4'],
	[/^Dec ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '12月 $1 上午 $2:$3:$4'],
	[/^Jan ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '1月 $1 下午 $2:$3:$4'],
	[/^Feb ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '2月 $1 下午 $2:$3:$4'],
	[/^Mar ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '3月 $1 下午 $2:$3:$4'],
	[/^Apr ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '4月 $1 下午 $2:$3:$4'],
	[/^May ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '5月 $1 下午 $2:$3:$4'],
	[/^Jun ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '6月 $1 下午 $2:$3:$4'],
	[/^Jul ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '7月 $1 下午 $2:$3:$4'],
	[/^Aug ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '8月 $1 下午 $2:$3:$4'],
	[/^Sep ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '9月 $1 下午 $2:$3:$4'],
	[/^Oct ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '10月 $1 下午 $2:$3:$4'],
	[/^Nov ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '11月 $1 下午 $2:$3:$4'],
	[/^Dec ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '12月 $1 下午 $2:$3:$4'],
	[/^Jan ([\d\.]+), ([\d\.]+) AM$/, '1月 $1 上午 $2'],
	[/^Feb ([\d\.]+), ([\d\.]+) AM$/, '2月 $1 上午 $2'],
	[/^Mar ([\d\.]+), ([\d\.]+) AM$/, '3月 $1 上午 $2'],
	[/^Apr ([\d\.]+), ([\d\.]+) AM$/, '4月 $1 上午 $2'],
	[/^May ([\d\.]+), ([\d\.]+) AM$/, '5月 $1 上午 $2'],
	[/^Jun ([\d\.]+), ([\d\.]+) AM$/, '6月 $1 上午 $2'],
	[/^Jul ([\d\.]+), ([\d\.]+) AM$/, '7月 $1 上午 $2'],
	[/^Aug ([\d\.]+), ([\d\.]+) AM$/, '8月 $1 上午 $2'],
	[/^Sep ([\d\.]+), ([\d\.]+) AM$/, '9月 $1 上午 $2'],
	[/^Oct ([\d\.]+), ([\d\.]+) AM$/, '10月 $1 上午 $2'],
	[/^Nov ([\d\.]+), ([\d\.]+) AM$/, '11月 $1 上午 $2'],
	[/^Dec ([\d\.]+), ([\d\.]+) AM$/, '12月 $1 上午 $2'],
	[/^Jan ([\d\.]+), ([\d\.]+) PM$/, '1月 $1 下午 $2'],
	[/^Feb ([\d\.]+), ([\d\.]+) PM$/, '2月 $1 下午 $2'],
	[/^Mar ([\d\.]+), ([\d\.]+) PM$/, '3月 $1 下午 $2'],
	[/^Apr ([\d\.]+), ([\d\.]+) PM$/, '4月 $1 下午 $2'],
	[/^May ([\d\.]+), ([\d\.]+) PM$/, '5月 $1 下午 $2'],
	[/^Jun ([\d\.]+), ([\d\.]+) PM$/, '6月 $1 下午 $2'],
	[/^Jul ([\d\.]+), ([\d\.]+) PM$/, '7月 $1 下午 $2'],
	[/^Aug ([\d\.]+), ([\d\.]+) PM$/, '8月 $1 下午 $2'],
	[/^Sep ([\d\.]+), ([\d\.]+) PM$/, '9月 $1 下午 $2'],
	[/^Oct ([\d\.]+), ([\d\.]+) PM$/, '10月 $1 下午 $2'],
	[/^Nov ([\d\.]+), ([\d\.]+) PM$/, '11月 $1 下午 $2'],
	[/^Dec ([\d\.]+), ([\d\.]+) PM$/, '12月 $1 下午 $2'],
	[/^Jan (.+), ([\d\.]+)$/, '$2 年 1 月 $1'],
	[/^Feb (.+), ([\d\.]+)$/, '$2 年 2 月 $1'],
	[/^Mar (.+), ([\d\.]+)$/, '$2 年 3 月 $1'],
	[/^Apr (.+), ([\d\.]+)$/, '$2 年 4 月 $1'],
	[/^May (.+), ([\d\.]+)$/, '$2 年 5 月 $1'],
	[/^Jun (.+), ([\d\.]+)$/, '$2 年 6 月 $1'],
	[/^Jul (.+), ([\d\.]+)$/, '$2 年 7 月 $1'],
	[/^Aug (.+), ([\d\.]+)$/, '$2 年 8 月 $1'],
	[/^Sep (.+), ([\d\.]+)$/, '$2 年 9 月 $1'],
	[/^Oct (.+), ([\d\.]+)$/, '$2 年 10 月 $1'],
	[/^Nov (.+), ([\d\.]+)$/, '$2 年 11 月 $1'],
	[/^Dec (.+), ([\d\.]+)$/, '$2 年 12 月 $1'],
	[/^January ([\d\.]+) Theme$/, '$1 年 1 月 主题'],
	[/^February ([\d\.]+) Theme$/, '$1 年 2 月 主题'],
	[/^March ([\d\.]+) Theme$/, '$1 年 3 月 主题'],
	[/^April ([\d\.]+) Theme$/, '$1 年 4 月 主题'],
	[/^May ([\d\.]+) Theme$/, '$1 年 5 月 主题'],
	[/^June ([\d\.]+) Theme$/, '$1 年 6 月 主题'],
	[/^July ([\d\.]+) Theme$/, '$1 年 7 月 主题'],
	[/^August ([\d\.]+) Theme$/, '$1 年 8 月 主题'],
	[/^September ([\d\.]+) Theme$/, '$1 年 9 月 主题'],
	[/^October ([\d\.]+) Theme$/, '$1 年 10 月 主题'],
	[/^November ([\d\.]+) Theme$/, '$1 年 11 月 主题'],
	[/^December ([\d\.]+) Theme$/, '$1 年 12 月 主题'],
	[/^Jan ([\d\.]+) \- Jan ([\d\.]+)$/, '1 月 $1 \- 1 月 $2'],
	[/^Feb ([\d\.]+) \- Feb ([\d\.]+)$/, '2 月 $1 \- 2 月 $2'],
	[/^Mar ([\d\.]+) \- Mar ([\d\.]+)$/, '3 月 $1 \- 3 月 $2'],
	[/^Apr ([\d\.]+) \- Apr ([\d\.]+)$/, '4 月 $1 \- 4 月 $2'],
	[/^May ([\d\.]+) \- May ([\d\.]+)$/, '5 月 $1 \- 5 月 $2'],
	[/^Jun ([\d\.]+) \- Jun ([\d\.]+)$/, '6 月 $1 \- 6 月 $2'],
	[/^Jul ([\d\.]+) \- Jul ([\d\.]+)$/, '7 月 $1 \- 7 月 $2'],
	[/^Jun ([\d\.]+) \- Jul ([\d\.]+)$/, '6 月 $1 \- 7 月 $2'],
	[/^Aug ([\d\.]+) \- Aug ([\d\.]+)$/, '8 月 $1 \- 8 月 $2'],
	[/^Sep ([\d\.]+) \- Sep ([\d\.]+)$/, '9 月 $1 \- 9 月 $2'],
	[/^Oct ([\d\.]+) \- Oct ([\d\.]+)$/, '10 月 $1 \- 10 $2'],
	[/^Nov ([\d\.]+) \- Nov ([\d\.]+)$/, '11 月 $1 \- 11 $2'],
	[/^Dec ([\d\.]+) \- Dec ([\d\.]+)$/, '12 月 $1 \- 12 $2'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)h ([\d\.]+)m$/, '$1小时 $2分'],
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分钟 $2秒'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Torches$/, '$1 火把'],
    [/^([\d\.,]+) Wood$/, '$1 木头'],
    [/^([\d\.,]+) Obsidian$/, '$1 黑曜石'],
    [/^([\d\.,]+) Steel$/, '$1 钢'],
    [/^([\d\.,]+) Silver$/, '$1 银'],
    [/^([\d\.,]+) Food$/, '$1 食物'],
    [/^([\d\.,]+) Gold$/, '$1 黄金'],
    [/^([\d\.,]+) from Items\/Buildings\n([\d\.,]+) from Events$/, '$1 来自物品/建筑\n$2 来自事件'],
    [/^([\d\.,]+) Great Feast$/, '$1 盛宴'],
    [/^([\d\.,]+) Great Feasts$/, '$1 盛宴'],
    [/^\+([\d\.,]+) elves$/, '+$1 精灵'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Adamant$/, '+$1-$2 艾德曼合金'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Gold$/, '+$1-$2 黄金'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Bones$/, '+$1-$2 骨头'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Fur$/, '+$1-$2 皮毛'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Coal$/, '+$1-$2 煤'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Iron$/, '+$1-$2 铁'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Stone$/, '+$1-$2 石头'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Food$/, '+$1-$2 食物'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Silver$/, '+$1-$2 银'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Wood$/, '+$1-$2 木头'],
    [/^\+([\d\.,]+)\-([\d\.,]+) Obsidian$/, '+$1-$2 黑曜石'],
    [/^\+([\d\.,]+) Knowledge$/, '+$1 知识'],
    [/^\+([\d\.,]+) Iron, \-([\d\.,]+) Food$/, '+$1 铁, -$2 食物'],
    [/^\+([\d\.,]+) Coal, \-([\d\.,]+) Food$/, '+$1 煤, -$2 食物'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone$/, '+$1 木头, +$2 石头'],
    [/^\+([\d\.,]+) Food, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones$/, '+$1 食物, +$2 皮毛, +$3 骨头'],
    [/^\+([\d\.,]+) Leather, \-([\d\.,]+) Fur, \-([\d\.,]+) Food$/, '+$1 皮革, -$2 皮毛, -$3 食物'],
    [/^\+([\d\.,]+) Steel, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal, \-([\d\.,]+) Food$/, '+$1 钢, -$2 铁, -$3 煤, -$3 食物'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Food, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones$/, '+$1 木头, +$2 石头, +$3 食物, +$4 皮毛, +$5 骨头'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Food, \+([\d\.,]+) Stone, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones$/, '+$1 木头, +$2 食物, +$3 石头, +$4 皮毛, +$5 骨头'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones, \+([\d\.,]+) Food, \+([\d\.,]+) Steel, \-([\d\.,]+) Coal$/, '+$1 木头, +$2 石头, +$3 皮毛, +$4 骨头, +$5 食物, +$6 钢, -$7 煤'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones, \+([\d\.,]+) Food, \+([\d\.,]+) Steel, \-([\d\.,]+) Iron$/, '+$1 木头, +$2 石头, +$3 皮毛, +$4 骨头, +$5 食物, +$6 钢, -$7 铁'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones, \+([\d\.,]+) Food, \+([\d\.,]+) Steel, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 木头, +$2 石头, +$3 皮毛, +$4 骨头, +$5 食物, +$6 钢, -$7 铁, -$8 煤'],
    [/^\+([\d\.,]+) Stone, \+([\d\.,]+) Wood, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones, \+([\d\.,]+) Food, \+([\d\.,]+) Steel, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 石头, +$2 木头, +$3 皮毛, +$4 骨头, +$5 食物, +$6 钢, -$7 铁, -$8 煤'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \+([\d\.,]+) Food, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 木头, +$2 石头, +$3 皮毛, +$4 骨头, +$5 钢, +$6 食物, -$7 铁, -$8 煤'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Food, \+([\d\.,]+) Fur, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 木头, +$2 石头, +$3 食物, +$4 皮毛, +$5 骨头, +$6 钢, -$7 铁, -$8 煤'],
    [/^\+([\d\.,]+) Stone, \+([\d\.,]+) Wood, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \+([\d\.,]+) Leather, \-([\d\.,]+) Food, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 石头, +$2 木头, +$3 骨头, +$4 钢, +$5 皮革, -$6 食物, -$7 铁, -$8 煤'],
    [/^\+([\d\.,]+) Stone, \+([\d\.,]+) Wood, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \+([\d\.,]+) Leather, \-([\d\.,]+) Iron, \-([\d\.,]+) Food, \-([\d\.,]+) Coal$/, '+$1 石头, +$2 木头, +$3 骨头, +$4 钢, +$5 皮革, -$6 铁, -$7 食物, -$8 煤'],
    [/^\+([\d\.,]+) Stone, \+([\d\.,]+) Wood, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \+([\d\.,]+) Leather, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal, \-([\d\.,]+) Food$/, '+$1 石头, +$2 木头, +$3 骨头, +$4 钢, +$5 皮革, -$6 铁, -$7 煤, -$8 食物'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \+([\d\.,]+) Leather, \-([\d\.,]+) Fur, \-([\d\.,]+) Food,$/, '+$1 木头, +$2 石头, +$3 骨头, +$4 钢, +$5 皮革, -$6 毛皮, -$7 食物'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \+([\d\.,]+) Leather, \-([\d\.,]+) Fur, \-([\d\.,]+) Coal, \-([\d\.,]+) Food$/, '+$1 木头, +$2 石头, +$3 骨头, +$4 钢, +$5 皮革, -$6 毛皮, -$7 煤, -$8 食物'],
    [/^\+([\d\.,]+) Food, \+([\d\.,]+) Stone, \+([\d\.,]+) Bones, \+([\d\.,]+) Wood, \+([\d\.,]+) Steel, \-([\d\.,]+) Leather, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 食物, +$2 石头, +$3 骨头, +$4 木头, +$5 钢, -$6 皮革, -$7 铁, -$8 煤'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Food, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \+([\d\.,]+) Leather, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 木头, +$2 石头, +$3 食物, +$4 骨头, +$5 钢, +$6 皮革, -$7 铁, -$8 煤'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Bones, \+([\d\.,]+) Steel, \+([\d\.,]+) Leather, \-([\d\.,]+) Fur, \-([\d\.,]+) Food, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 木头, +$2 石头, +$3 骨头, +$4 钢, +$5 皮革, -$6 毛皮, -$7 食物, -$8 铁, -$9 煤'],
    [/^\+([\d\.,]+) Wood, \+([\d\.,]+) Stone, \+([\d\.,]+) Bones, \+([\d\.,]+) Food, \+([\d\.,]+) Steel, \+([\d\.,]+) Leather, \-([\d\.,]+) Fur, \-([\d\.,]+) Iron, \-([\d\.,]+) Coal$/, '+$1 木头, +$2 石头, +$3 骨头, +$4 上午, +$5 钢, +$6 皮革, -$7 皮毛, -$8 铁, -$9 煤'],
    [/^\+([\d\.,]+) Max Population$/, '+$1 人口上限'],
    [/^\-([\d\.,]+) Steel$/, '-$1 钢'],
    [/^\-([\d\.,]+) Leather$/, '-$1 皮革'],
    [/^\-([\d\.,]+) Gold$/, '-$1 黄金'],
    [/^\-([\d\.,]+) Silver$/, '-$1 银'],
    [/^\-([\d\.,]+) elves$/, '-$1 精灵'],
    [/^\-([\d\.,]+) Food$/, '-$1 食物'],
    [/^\-([\d\.,]+) Iron$/, '-$1 铁'],
    [/^\-([\d\.,]+) Torch$/, '-$1 火把'],
    [/^\-([\d\.,]+) Obsidian$/, '-$1 黑曜石'],
    [/^\-([\d\.,]+) Coal$/, '-$1 煤'],
    [/^\-([\d\.,]+) Fur$/, '-$1 毛皮'],
    [/^\-([\d\.,]+) Bones$/, '-$1 骨头'],
    [/^\-([\d\.,]+) Wood$/, '-$1 木头'],
    [/^\-([\d\.,]+) Stone$/, '-$1 石头'],
    [/^Buy ([\d\.,]+) Torch$/, '购买 $1 火把'],
    [/^Buy ([\d\.,]+) Steel$/, '购买 $1 钢'],
    [/^Buy ([\d\.,]+) Wood$/, '购买 $1 木头'],
    [/^Buy ([\d\.,]+) Stone$/, '购买 $1 石头'],
    [/^Buy ([\d\.,]+) Food$/, '购买 $1 食物'],
    [/^Buy ([\d\.,]+) Gold$/, '购买 $1 黄金'],
    [/^Pay ([\d\.,]+) food$/, '支付 $1 食物'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

var CNITEM_DEBUG = 0;

function cnItemByTag(text, itemgroup, node, textori) {
    for (let i in itemgroup) {
        if (i[0] == '.') { //匹配节点及其父节点的class
            let current_node = node;
            while (current_node) {
                if (current_node.classList && current_node.classList.contains(i.substr(1))) {
                    return itemgroup[i];
                } else if (current_node.parentElement && current_node.parentElement != document.documentElement) {
                    current_node = current_node.parentElement;
                } else {
                    break;
                }
            }
        } else if (i[0] == '#') { //匹配节点及其父节点的id
            let current_node = node;
            while (current_node) {
                if (current_node.id == i.substr(1)) {
                    return itemgroup[i];
                } else if (current_node.parentElement && current_node.parentElement != document.documentElement) {
                    current_node = current_node.parentElement;
                } else {
                    break;
                }
            }
        } else if (i[0] == '$') { //执行document.querySelector
            if (document.querySelector(i.substr(1)) != null) {
                return itemgroup[i];
            }
        } else if (i[0] == '*') { //搜索原始文本
            if (textori.includes(i.substr(1))) {
                return itemgroup[i];
            }
        }
        // and more ...
        else {
            CNITEM_DEBUG && console.log({ text, itemgroup, dsc: "不识别的标签" + i })
        }
    }
    return null;
}

//2.采集新词
//20190320@JAR  rewrite by 麦子
var cnItem = function(text, node) {

    if (typeof(text) != "string")
        return text;
    let textori = text;
    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;;
        }
    }

    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])) {
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
        } else if (typeof(cnItems[i]) == "object" && text == i) {
            let result = cnItemByTag(i, cnItems[i], node, textori);
            if (result != null) {
                return text_prefix + result + text_reg_exclude_postfix + text_postfix;
            } else {
                CNITEM_DEBUG && console.log({ text: i, cnitem: cnItems[i], node });
            }
        } else {
            // continue;
        }
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : textori;
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    if (cnItems._OTHER_.length < 1000) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function(a, b) {
                return a.localeCompare(b)
            }
        );
    }

    //开启生词打印
    CNITEM_DEBUG && console.log(
        '有需要汉化的英文：', text
    );

    //返回生词字串
    return text_prefix + text + text_reg_exclude_postfix + text_postfix;
};

transTaskMgr = {
    tasks: [],
    addTask: function(node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function() {
        let task = null;
        while (task = this.tasks.pop())
            task.node[task.attr] = task.text;
    },
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text, subnode);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text, subnode);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    //console.log(subnode);
                } else {
                    TransSubTextNode(subnode);
                }
            } else {
                // do nothing;
            }
        }
    }
}

! function() {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function(e) {
        //window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
            } else if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent, node);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || node.childNodes.length == 0) {
                            if (node.innerText)
                                node.innerText = cnItem(node.innerText, node);
                        } else {
                            TransSubTextNode(node);
                        }
                    }
                }
            }
        }
        transTaskMgr.doTask();
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
    window.cnItems = cnItems
}();