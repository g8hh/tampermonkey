// ==UserScript==
// @name         Idle Arcana 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.12
// @description  网页游戏 Idle Arcana (https://idlearcana.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Idle Arcana.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://idlearcana.com/favicon.ico
// @license      MIT
// @include      *idlearcana.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/idlearcana-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/idlearcana-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/04/07 16:26
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
    "Play now": "马上开玩",
    "Open main menu": "打开主菜单",
    "LINKS": "链接",
    "Use the forge to craft powerful weapons and gear. Combine resources and create items that will shape your journey": "使用熔炉来制造强大的武器和装备。结合资源，创造物品，塑造你的旅程",
    "Want to be part of our community?": "想成为我们社区的一员吗？",
    "The Ultimate Pixel-Art Idle RPG": "终极像素美术放置RPG",
    "Support": "支持",
    "Profit": "盈利",
    "Privacy policy": "隐私政策",
    "people can redeem it! (Less than 100 left!)": "人可以兑换哦！（还剩不到100个！）",
    "LEGAL": "法律",
    "Limited Time Release Offer!": "限时发售特惠！",
    "Farm": "耕种",
    "first 500": "前500",
    "Click to begin": "点击开始",
    "Close menu": "关闭菜单",
    "Blog": "博客",
    "Become the Ultimate Hero": "成为终极英雄",
    "Forge Your Destiny": "锻造你的命运",
    "Go on Expeditions": "前往探险",
    "Idle Arcana is a pixel-art fantasy idle game where you can build your empire while sitting back and letting the magic unfold. Become a miner, a blacksmith, a warrior, or even a merchant—the choice is yours.": "《Idle Arcana》是一款像素艺术幻想游戏，在这里你可以建立自己的帝国，同时坐下来，让魔法展开。你可以成为一名矿工、铁匠、战士，甚至是商人——选择权在你。",
    "Dark Theme & Improved Design. Experience a modern and refined interface with our new dark theme, offering enhanced readability and a streamlined design that improves overall usability.": "黑暗主题和改进的设计。体验现代和精致的界面与我们新的黑暗主题，提供增强的可读性和流线型的设计，提高整体可用性。",
    "Arena 2.0 (Beta) 🏟️ - The Arena has been completely revamped! You'll now manage Attack, Defense, Health, Evasion, Critical Rate, and Critical Damage. These attributes can be boosted through Combat Power upgrades or by crafting powerful abilities in the Brand-New Academy.": "竞技场2.0（测试版）🏟️-竞技场已经完全翻新了！你现在可以管理攻击、防御、生命值、闪避、暴击率和暴击伤害。这些属性可以通过战斗能力升级或在全新学院中制作强大的技能来增强。",
    "- All rights reserved": "- 版权所有",
    ". Be quick, only the": "． 快点，只有",
    "✨ Discover our latest updates—new features, performance upgrades, and bug fixes for a seamless experience 🚀": "✨发现我们的最新更新-新功能，性能升级和错误修复的无缝体验🚀",
    "✨ Now featuring a brand-new Arena, Dark Theme & Guest Accounts!": "✨现在有一个全新的竞技场，黑暗主题和嘉宾帐户！",
    "A thriving economy and dynamic ecosystem designed for both casual and hardcore players.": "为休闲和硬核玩家设计的繁荣经济和动态生态系统。",
    "Balance changes.": "平衡的变化。",
    "Become stronger every day without the grind.": "每天都变得更强。",
    "Brand-New Mechanic: Dungeons & Jewelry! Battle your way through dungeons to earn powerful jewelry that boosts your strength!": "全新机制：地下城和珠宝！战斗你的方式通过地下城赚取强大的珠宝，提高你的力量！",
    "Bugfixes and improvements.": "bug修复和改进。",
    "Build Your Town": "建造你的城镇",
    "Celebrate our release with a special offer! Use the coupon": "以特别优惠庆祝我们的发行！使用优惠券",
    "Choose Your Life: Fighter or Farmer?": "选择你的生活：战士还是农民？",
    "Construct and customize your own town. Upgrade houses, build workshops, and create a thriving settlement to boost your efficiency!": "建造和定制你自己的城镇。升级房屋，建造车间，创造一个繁荣的定居点来提高你的效率！",
    "Copyright ©": "版权所有©",
    "Discover Adorable Companions": "发现可爱的同伴",
    "Don’t miss out on this limited-time release bonus!": "千万不要错过这个限时发行的奖励！",
    "Embark on an epic journey in Idle Arcana, the fantasy idle game where you build your empire, become a miner, blacksmith, or warrior, and let magic unfold!": "在《奥秘放置》中开启一段史诗般的旅程，在这款奇幻的空闲游戏中，你可以建立自己的帝国，成为一名矿工、铁匠或战士，让魔法展开！",
    "Embark on exciting expeditions to discover rare resources and hidden treasures. Adventure awaits!": "踏上激动人心的探险，发现稀有资源和隐藏的宝藏。冒险等待!",
    "Engage in a dynamic economy where resources and crafted goods fuel a bustling trade. Buy, sell, and barter your way to success!": "参与一个充满活力的经济，在这里，资源和精心制作的商品推动了繁荣的贸易。买，卖，物物交换你的成功之路！",
    "Engage in epic battles against other players in the arena. Prove your might, dominate the competition, and become the most powerful hero!": "在竞技场上与其他玩家进行史诗般的战斗。证明你的实力，主宰竞争，成为最强大的英雄！",
    "Explore the world to find unique pets, each with their own effects and rarity. Bond with them to become a renowned Pet Master!": "探索世界，寻找独特的宠物，每一个都有自己的效果和稀有性。与他们结合，成为一个著名的宠物大师！",
    "Fight against powerful bosses and collect rate loot to become the most powerful hero in the realm.": "与强大的boss战斗，收集战利品，成为世界上最强大的英雄。",
    "Forge legendary items and tools to unleash your true power. Each piece of equipment brings you closer to becoming an unstoppable hero!": "锻造传奇物品和工具来释放你真正的力量。每一件装备都让你更接近成为一个不可阻挡的英雄！",
    "Grab some pizza (or sleep!)": "吃点披萨（或者睡觉！）",
    "Guest Accounts & Account Linking (Beta) 🔗 - Players can now create guest accounts and link them using Google OAuth or Email for a seamless login experience.": "客人帐户和帐户链接（测试版）🔗-玩家现在可以创建客人帐户，并使用谷歌OAuth或电子邮件链接他们，以获得无缝登录体验。",
    "Harvest and trade your way to glory. Rise as the wealthiest hero in Arcana.": "收获和交易你的荣耀之路。成为奥秘界最富有的英雄。",
    "Idle Arcana": "奥秘放置",
    "Immerse yourself in a world full of magic and adventure": "让自己沉浸在一个充满魔法和冒险的世界里",
    "Join our Discord": "加入我们的Discord",
    "Join our vibrant Discord community and connect with fellow Idle Arcadians. Share strategies, explore tips, and shape the future of the game together!": "加入我们充满活力的Discord社区，并与无所事事的阿卡迪亚人联系。分享策略，探索技巧，共同塑造游戏的未来！",
    "Level up your abilities and unlock new ways to farm resources effortlessly. From mining to crafting, every skill brings you closer to greatness!": "升级你的能力和解锁新的方式来农场资源毫不费力。从采矿到制作，每一项技能都让你更接近伟大！",
    "Master Your Skills": "掌握你的技能",
    "Mining, Farming, Alchemy, Crafting... anything is possible. Choose your path. Forge your own destiny.": "采矿、耕种、炼金、锻造...一切皆有可能。选择你的道路。打造自己的命运。",
    "Never stop progressing! Boss raids, expeditions, housing, farming. It all works in the background, even when you're away.": "永远不要停止前进！Boss突袭，探险，房屋，农场。这一切都在后台运行，即使你不在。",
    "Official launch of the game.": "游戏正式发布。",
    "on your schedule!": "在你的日程表上！",
    "Return to sweet loot": "回归甜蜜战利品",
    "Rise to Power in the Arena": "在竞技场中崛起",
    "Start the Adventure!": "开始冒险吧！",
    "Terms of services": "服务条款",
    "Thrive in the Marketplace": "在市场中茁壮成长",
    "to get": "得到",
    "Trade": "交易",
    "Your epic adventure...": "你史诗般的冒险…",
    "Email": "邮箱",
    "Sign in with Email": "用邮箱登录",
    "Sign in with Google": "用谷歌账号登录",
    "Sign in with Guest": "用游客身份登录",
    "A sign in link has been sent to your email address.": "登录链接已发送到您的电子邮件地址，请前往邮箱查看。",
    "Check your email": "检查你的邮件",
    "idlearcana.com": "idlearcana.com",
    "% (Lvl.": "% (等级",
    "Your efficiency is calculated based on your equipped items and building upgrades. Each contributes to reducing the time required to generate resources. However, efficiency benefits decrease as total efficiency increases, due to diminishing returns. Efficiency is not capped at 100%, but at 350%.": "你的效率是根据你装备的物品和建筑升级来计算的。每一个都有助于减少产生资源所需的时间。然而，由于收益递减，效率效益随着总效率的提高而降低。效率上限不是100%，而是350%。",
    "Greetings, adventurer! You’ve stepped into a world full of exploration, crafting, and combat. Prepare to shape your destiny as you gather resources, build equipment, and embark on epic quests.": "你好，冒险家！你已经进入了一个充满探索、锻造和战斗的世界。当你收集资源，建造装备，并开始史诗般的任务时，准备好塑造你的命运。",
    "XP": "经验值",
    "Rules": "规则",
    "Resource": "资源",
    "Sell Resources": "出售资源",
    "Start": "开始",
    "Store": "商店",
    "Stop": "停止",
    "None": "无",
    "NEW": "新",
    "Oak Wood": "橡木",
    "FAQ": "问答",
    "Example": "示例",
    "Efficiency Bonus": "效率加成",
    "Dungeons": "地下城",
    "Drops": "掉落",
    "Discord": "Discord",
    "Crystals": "水晶",
    "(Guaranteed": "（必得）",
    "Academy": "学院",
    "Account": "账户",
    "Actions": "行动",
    "And most importantly: Let your minions work overnight while you relax and reap the rewards 🎉": "最重要的是：让你的下属通宵工作，而你放松并收获回报🎉",
    "Arena": "竞技场",
    "Cardmaster": "卡牌大师",
    "Character": "角色",
    "Claim Daily Rewards": "领取每日奖励",
    "Combat": "战斗",
    "community: Get insider news and special coupons! 💎": "社区：获得内幕消息和特别优惠券！💎",
    "Craft Equipment": "制造装备",
    "Discover new areas, fight bosses for precious loot, and grow stronger by engaging in commerce with others.": "发现新的区域，与boss战斗以获得珍贵的战利品，并通过与他人进行贸易而变得更强大。",
    "Drops are items that can be obtained through harvesting or combat.": "掉落物是可以通过收割或战斗获得的物品。",
    "Expeditions": "探险",
    "Farming": "农业",
    "Forge": "锻造",
    "Gather Resources": "收集资源",
    "Go to your inventory and sell resources to gain some early gold.": "打开背包，出售资源可以获得一些前期金币。",
    "Gold": "金币",
    "Housing": "房屋",
    "Idle Arcana": "奥秘放置",
    "If a resource takes 10 seconds to generate and your total efficiency is 50%, the adjusted time will be reduced to around 7.8 seconds.": "如果一个资源需要10秒来生成，而你的总效率是50%，那么调整后的时间将减少到7.8秒左右。",
    "Insufficient Level": "等级不足",
    "Jewelry": "珠宝",
    "Leaderboard": "排行榜",
    "Let’s Begin Your Adventure!": "让我们开始你的冒险吧！",
    "Magic Wood": "魔法木",
    "Maple Wood": "枫木",
    "Marketplace": "市场",
    "OFFER": "特惠",
    "Pets": "宠物",
    "Pine Wood": "松木",
    "Purchase Items": "购买物品",
    "Req. materials": "需要材料",
    "Smelting": "冶炼",
    "Start by collecting wood, minerals, and other essentials.": "从收集木材、矿物和其他必需品开始。",
    "Unlock exclusive perks in our": "解锁专属特权",
    "Use your resources to forge powerful tools and weapons.": "使用你的资源来锻造强大的工具和武器。",
    "Vendor": "供应商",
    "Version": "版本",
    "Visit vendors to buy valuable items to get you started.": "拜访小贩，购买有价值的物品，开始你的生活。",
    "Welcome to": "欢迎来到",
    "Willow Wood": "柳木",
    "Yew Wood": "紫杉木",
    "Alchemy": "炼金",
    "Avatars": "头像",
    "Backgrounds": "背景",
    "Change Character Name": "更改角色名称",
    "Click the button below to delete your account. Please note that this action is irreversible, and your account cannot be restored.": "点击下面的按钮删除您的帐户。请注意，此操作是不可逆的，您的帐户无法恢复。",
    "Coupon Code": "优惠码",
    "Crystals:": "水晶:",
    "DANGER ZONE": "危险区域",
    "Delete Account": "删除账户",
    "Frames": "边框",
    "Gold:": "金币：",
    "Inventory": "背包",
    "Link Account": "绑定账号",
    "Linked:": "已绑定：",
    "Mining": "采矿",
    "Name": "名字",
    "Redeem": "兑换",
    "Redeem Coupon": "兑换优惠券",
    "Sign in with email": "用电子邮件登录",
    "User Settings": "用户设置",
    "Woodcutting": "伐木",
    "Close": "关闭",
    "Congratulations!": "恭喜你!",
    "You have received your daily rewards:": "你已经收到了你的每日奖励：",
    "Empty": "空",
    "Go to Store": "前往商店",
    "Select a resource to see its details": "选择一个资源以查看其详细信息",
    "Would you like more inventory space? Get more inventory slots in the store!": "想要更多的背包空间吗？在商店中获得更多的背包栏位！",
    "Amount to sell:": "出售数量:",
    "Available:": "可用:",
    "Sell Resource": "出售资源",
    "Wood": "木头",
    "% Efficiency": "% 效率",
    "% Efficiency (": "% 效率(",
    "% Efficiency)": "% 效率)",
    "⏳ Time to upgrade:": "⏳ 升级时间：",
    "⚙️ Effect:": "⚙️ 效果：",
    "💰 Cost to upgrade:": "💰 升级费用：",
    "🔧 Level:": "🔧 等级：",
    "🚀 Level Up": "🚀 升级",
    "Apothecary": "药剂师",
    "Castle": "城堡",
    "Garden": "花园",
    "Lumberyard": "伐木场",
    "Mine": "矿洞",
    "You do not have enough gold.": "你没有足够的金币。",
    "⏳ Duration:": "⏳ 持续时间:",
    "⚔️ CP Required:": "⚔️ 所需战力：",
    "🔒 Insufficient CP": "🔒 战力不足",
    "Azure Depths": "蔚蓝深度",
    "Bogshade Whisper Rune": "沼泽低语符文",
    "Category": "类别",
    "Common Egg": "普通蛋",
    "Crimson Dunes": "赤红沙丘",
    "Currently, you don't have any Jewelry. Craft some gems to find new Jewelry.": "目前，你没有任何珠宝。制作一些宝石来寻找新的珠宝。",
    "Drowned Depths Rune": "沉沦深渊符文",
    "Efficiency": "效率",
    "Endless Dunes Rune": "无尽沙丘符文",
    "Epic Egg": "史诗蛋",
    "Frostpeak Summit": "冰峰之巅",
    "Gold Coin": "金币",
    "Guaranteed": "必得",
    "Legendary Egg": "传说蛋",
    "Mythical Egg": "神话蛋",
    "No gems found.": "没有发现宝石。",
    "No Jewelry found.": "没有发现珠宝。",
    "Obsidian Abyss": "黑曜深渊",
    "Rare Egg": "稀有蛋",
    "Rarity": "稀有度",
    "Shrouded Fen": "笼罩沼泽",
    "Sort by:": "排序方式:",
    "Stoneheart Summit Rune": "石心之巅符文",
    "Uncommon Egg": "罕见蛋",
    "Verdant Grove": "青翠树林",
    "Verdant Growth Rune": "青翠生长符文",
    "Volcanic Fury Rune": "火山狂怒符文",
    "You do not have enough gold.": "你没有足够的金币。",
    "You don't have any gems at the moment. Complete Dungeons to find some.": "你现在没有任何宝石。完成地下城可以找到一些。",
    "XP)": "经验值)",
    "Level": "等级",
    "Example:": "举例:",
    "Drops:": "掉落:",
    "Materials:": "材料:",
    "Level:": "等级:",
    "(Guaranteed)": "（必得）",
    "Boost your construction efficiency! Unlock additional queues for parallel building projects.": "提升建造效率！解锁额外的队列并行建设项目。",
    "Currently, you don't have any pets. Hatch some eggs to find new companions.": "目前，你没有宠物。孵化一些宠物蛋来寻找新的伙伴。",
    "No eggs found.": "没有发现宠物蛋。",
    "No pets found.": "没有发现宠物。",
    "Welcome Back!": "欢迎回来!",
    "while away.": "在你离开的时候。",
    "You don't have any eggs at the moment. Embark on expeditions to find some.": "你现在没有宠物蛋。开始探险去寻找一些。",
    "You were away for": "你离开了",
    "You've generated": "你生成了",
    "Running out of space? Unlock new Inventory Slots and never leave treasures behind!": "空间不够用了？解锁新的背包栏位，永不落下宝物！",
    "Common Gem": "普通宝石",
    "Crimson Hollow": "赤红山谷",
    "Epic Gem": "史诗宝石",
    "Labyrinth of Whispers": "低语迷宫",
    "Legendary Gem": "传说宝石",
    "Mythical Gem": "神话宝石",
    "Rare Gem": "稀有宝石",
    "Sylvan Veil": "森林面纱",
    "The Jade Enclave": "翡翠飞地",
    "Tideglass Cavern": "潮璃石窟",
    "Titans Ascent": "泰坦崛起",
    "Uncommon Gem": "罕见宝石",
    "Adamantite Ore": "金刚铁矿石",
    "Carrot": "胡萝卜",
    "Copper Ore": "铜矿石",
    "Corn": "玉米",
    "Gold Ore": "金矿石",
    "Mithril Ore": "秘银矿石",
    "Obsidian Ore": "黑曜石矿石",
    "Potato": "土豆",
    "Silver Ore": "银矿石",
    "Strawberry": "草莓",
    "Tomato": "番茄",
    "Wheat": "小麦",
    "Mark all as read": "全部标为已读",
    "Notifications": "通知",
    "Billing": "账单",
    "Logout": "登出",
    "Expand your Inventory Slots! Upgrade now and carry more items on your journey!": "扩充背包栏位！现在升级，在你的旅程中携带更多的物品！",
    "You don't have a billing account yet. Make a purchase first.": "你还没有账单账户。请先进行购物。",
    "Profile updated successfully.": "个人资料更新成功。",
    "Armor": "盔甲",
    "Armor": "盔甲",
    "Boots": "靴子",
    "Flask": "烧瓶",
    "Gloves": "手套",
    "Hatchet": "短斧",
    "Helmet": "头盔",
    "Pickaxe": "镐子",
    "Shield": "盾牌",
    "Spade": "铁锹",
    "Weapon": "武器",
    "Buy": "购买",
    "Category:": "类别:",
    "Flasks": "烧瓶",
    "Gloves": "手套",
    "Hatchets": "短斧",
    "Helmets": "头盔",
    "Pickaxes": "镐子",
    "Price:": "价格:",
    "Shields": "盾牌",
    "Spades": "铁锹",
    "Weapons": "武器",
    "Boss": "Boss",
    "Gold Bar": "金锭",
    "Mithril Bar": "秘银锭",
    "Copper Bar": "铜锭",
    "Adamantite Bar": "金刚铁锭",
    "Silver Bar": "银锭",
    "Obsidian Bar": "黑曜石锭",
    "Insufficient CP": "战力不足",
    "Amethyst Horn": "紫晶号角",
    "Argent Scales": "银色鳞片",
    "Away for more than 8 hours? Maximize your Offline Generation potential. Explore the store now!": "离开超过8小时？最大化你的离线生成潜力。快去探索商店吧！",
    "Azure Reaper": "天青死神",
    "Elixir of Unyielding Might": "不死之力长生不老药",
    "Gilded Bone": "鎏金之骨",
    "Gold (Guaranteed)": "金币（必得）",
    "Harbinger of Masks": "面具先驱者",
    "Harmony of Death": "和谐的死神",
    "Infernal Lord": "地狱领主",
    "Insufficient Materials": "材料不足",
    "Mining Copper Ore...": "开采铜矿…",
    "Phoenix Ember Flask": "凤凰余烬瓶",
    "Serpents Tail": "蛇尾巴",
    "Shadowbane Elixir": "魔剑长生不老药",
    "Silver Gaze": "银色凝视",
    "Spectral Sight Brew": "光谱蒸馏",
    "Stonecrush": "石雕",
    "Titans Rage Draught": "泰坦狂怒药",
    "Venomguard Tonic": "防毒液补剂",
    "Warchief": "酋长",
    "Wyrmking": "飞龙王",
    "You've fought": "你找到了",
    "Unlock more Market Slots with an upgrade! Don't miss out on opportunities!": "通过升级解锁更多市场栏位！不要错过任何机会！",
    "Increase your Construction Queues to build multiple structures simultaneously. Upgrade today!": "增加你的建造队列来同时建造多个建筑。今天就升级吧！",
    "🎁 Limited Time Offer!": "🎁 限时特惠！",
    "50% discount": "50%的折扣",
    "at checkout to get a": "在结帐时获得",
    "Hurry, this offer won’t last forever!": "快，这个优惠不会一直持续下去的！",
    "on your first purchase!": "仅限你的第一次购买!",
    "Popular": "热门",
    "Purchase": "购买",
    "purchased": "已购买",
    "Upgrade": "升级",
    "Upgrades": "升级",
    "Use code": "使用代码",
    "Health": "生命值",
    "Attack": "攻击",
    "Defense": "防御",
    "Evasion": "闪避",
    "Critical Damage": "暴击伤害",
    "Critical Rate": "暴击率",
    "Battle Tempo": "战斗节奏",
    "Berserkers Fury": "狂战士之怒",
    "Blade Dancer": "刀锋舞者",
    "Bloodlust Aura": "嗜血光环",
    "Catalysts Touch": "催化之触",
    "Crimson Strike": "赤红打击",
    "Deadeye Focus": "死眼聚焦",
    "Devastating Blow": "毁灭性打击",
    "Endless Provisions": "无尽的补给",
    "Enduring Spirit": "恒久精神",
    "Energy Conduit": "能量导管",
    "Essense Weaver": "精华织女",
    "Fatal Edge": "致命之刃",
    "Fields of Fortune": "财富之田",
    "Forge Spark": "锻造火花",
    "Fortress Stance": "堡垒姿态",
    "Guardians Bulwark": "守护者堡垒",
    "Inferno Artisan": "炼狱工匠",
    "Ironclad Resolve": "坚不可摧的决心",
    "Lumberlords Might": "樵夫之力",
    "Miners Fortune": "矿工财富",
    "Miners Insight": "矿工洞察",
    "Molten Precision": "熔融精度",
    "No plans are currently available.": "暂无可用的方案",
    "Note: In Arena, Evasion is capped at 80%": "注：在竞技场中，闪避上限为80%",
    "Phantom Reflexes": "幻影反射",
    "Potion Crafter": "药水工匠",
    "Precision Strikes": "精确打击",
    "Razor Instincts": "刀锋本能",
    "Req. Materials:": "需要材料:",
    "Seedling Sage": "幼苗贤者",
    "Shadowstep": "暗影步",
    "Timber Surge": "木材之潮",
    "Titans Resilience": "泰坦韧性",
    "Titans Wrath": "泰坦之怒",
    "Trailblazers Instinct": "开拓者本能",
    "Vein Whisperer": "矿脉语者",
    "Verdant Harvest": "翠绿收获",
    "Vital Essence": "生命精华",
    "Warriors Might": "勇士的力量",
    "Whispering Axe": "低语之斧",
    "Wind Dancer": "风舞者",
    "Filter by Type": "按类型筛选",
    "Bars": "金属锭",
    "All Types": "所有类型",
    "A tax of 15% will be deducted.": "将扣除15%的税金。",
    "List a Resource": "上架资源",
    "List Resource": "上架",
    "No resources have been listed yet.": "暂无已上架资源。",
    "Potions": "药水",
    "Plants": "植物",
    "Stones": "石头",
    "unit(s)": "单位",
    "Select a resource": "选择一种资源",
    "Runes": "符文",
    "Boss Loot": "Boss战利品",
    "each by @": " 卖家是 @",
    "at": "每个售价",
    "Available Resources": "可用资源",
    "Unlist": "下架",
    "The resource has been listed successfully.": "已成功上架该资源。",
    "The resource has been unlisted successfully.": "已成功下架该资源。",
    "Armor & Weapon": "护甲 & 武器",
    "Abilities": "能力",
    "Character Level": "角色等级",
    "Equipment": "装备",
    "Equip": "装备",
    "Equippable Cards": "可装备卡牌",
    "Select an item": "选择一个物品",
    "Tools": "工具",
    "Your Character Level is the sum of all your skill levels.": "你的角色等级是你所有技能等级的总和。",
    "Combat Power is calculated as:": "战力计算公式：",
    "Combat Power = Base Power × Scaling Multiplier × (1 + Total Efficiency) + Equipped Items × Item Multiplier": "战力 = 基础战力 × 缩放乘数 ×（1 + 总效率）+ 装备物品 × 物品乘数",
    "Arena Tickets": "竞技场门票",
    "Available": "可用",
    "Number of Arena Tickets Available. They are refreshed daily.": "可用的竞技场门票数量。每天刷新。",
    "⚔️ Challenge": "⚔️ 挑战",
    "Combat Power:": "战力:",
    "If you encounter a bug or issue in the game, please join our Discord and open a ticket in the #support-center channel. Our support team will assist you in resolving the problem as soon as possible.": "如果您在游戏中遇到错误或问题，请加入我们的 Discord，并在#support-center频道打开门票。我们的支持团队将协助您尽快解决问题。",
    "You are going to make money mainly either by selling resources from your Inventory screen (recommended if you have just started), or by farming Combat resources. Later in the game, you will be able to embark on expeditions and dungeons to earn more gold.": "你将主要通过出售背包屏幕上的资源（如果你刚开始，建议）或耕种战斗资源来赚钱。在游戏的后期，你将能够开始探险和地下城获得更多的金币。",
    "Please join our Discord server and ask your question in the #general-chat channel. Our community and support team will be happy to assist you with any queries you may have.": "请加入我们的Discord服务器并在#general-chat频道中提出您的问题。我们的社区和支持团队将很乐意帮助您解决您可能遇到的任何疑问。",
    "3 items/pets = +150 points": "3 物品/宠物 = +150 点数",
    "Core Power: 50 (Base) × 20 (Scaling) × (1 + 108/100) =": "核心战力：50（基础）× 20（缩放）× (1 + 108/100) =",
    "Base Power:": "基础战力:",
    "Bar": "金属锭",
    "Base Power × Multiplier × Boosted Efficiency = Core Combat Power": "基础战力×倍率×增益效率=核心战力",
    "Each equipped item/pet adds": "每个装备的物品/宠物增加",
    "Enhanced Efficiency:": "强化效率：",
    "Equipment Quantity Bonus:": "装备数量加成：",
    "Example Calculation:": "示例计算:",
    "Foundational fighting ability without equipment. Default value is": "没有装备的基础作战能力。默认值为",
    "Frequently Asked Questions": "常见问题",
    "How do I earn gold in the game?": "我如何在游戏中赚取金币？",
    "How is my Combat Power calculated?": "我的战斗能力是如何计算的？",
    "I have a question about the game, how can I get help?": "我对游戏有疑问，如何获得帮助？",
    "is calculated through a balanced combination of your equipment quality and quantity. Here's the updated calculation system:": "是通过你的设备质量和数量的平衡组合来计算的。以下是更新后的计算系统：",
    "It's set to": "它被设置为",
    "multiplied": "相乘",
    "Plant": "植物",
    "points:": "点数:",
    "Quantity Bonus: 3 items/pets × 50 =": "数量加成：3个道具/宠物× 50 =",
    "Scaling Multiplier:": "缩放倍率：",
    "Stone": "石头",
    "to amplify efficiency's impact:": "为了扩大效率的影响：",
    "to emphasize quality. A sword (20%) + armor (15%) + pet (25%) becomes:": "强调质量。一把剑(20%)+护甲(15%)+宠物（25%）变成：",
    "Total Combat Power: 2080 + 150 =": "总战斗力：2080 + 150 =",
    "Total efficiency from items/pets is": "物品/宠物的总效率是",
    "What should I do if I encounter a bug or issue in the game?": "如果我在游戏中遇到bug或问题，我该怎么办？",
    "The building has begun leveling up.": "建筑已经开始升级。",
    "🚧 Under Construction...": "🚧 建造中...",
    "You have reached the limit for simultaneous constructions. Upgrade your construction queue capacity in the Store.": "你已经达到了同时建造的队列上限。在商店中升级你的建筑队列上限。",
    "Owned": "已拥有",
    "Purchased": "已购买",
    "The item has been purchased successfully.": "已成功购买物品。",
    "Unequip": "卸下",
    "The item has been equipped successfully.": "已成功装备物品。",
    "🎉 Complete Upgrade": "🎉 完成升级",
    "The building has leveled up successfully.": "该建筑已成功完成升级。",
    "You do not have enough resources to sell": "你没有足够的资源出售",
    "Account boosting is prohibited under the following conditions:": "禁止在以下情况下进行账户提升：",
    "Account Boosting Prohibition": "账户提升禁令",
    "Account Ownership": "账户所有权",
    "Account Sharing and Transfer": "账户共享和转账",
    "Accounts may not be lent, shared, or transferred between users.": "帐户不得在用户之间出借、共享或转让。",
    "API and Source Code Access": "API和源代码访问",
    "Effective as of January 26th, 2025": "2025年1月26日生效",
    "Exchanging items, services, or other in-game resources for anything outside of Idle Arcana is not allowed.": "不允许交换物品、服务或其他游戏内资源来换取《空闲秘籍》之外的任何东西。",
    "Idle Arcana Rules": "奥秘放置游戏规则",
    "In-Game Transactions": "在游戏中交易",
    "Players are limited to owning a single account.": "玩家只能拥有一个账户。",
    "Players are not allowed to access, interact with, or utilize the game's API, source code, or assets outside of the provided user interface.": "玩家不允许访问、交互或使用游戏的API、源代码或提供的用户界面之外的资产。",
    "The use of third-party software to automate gameplay is strictly prohibited.": "使用第三方软件来自动化游戏是严格禁止的。",
    "Third-Party Software": "第三方软件",
    "Trading items below their minimum market value through any method is not allowed.": "不得以任何方式进行低于最低市价的交易。",
    "Transferring wealth to another player to provide them with an unfair advantage is strictly forbidden.": "将财富转移给其他玩家以提供给他们不公平的优势是被严格禁止的。",
    "Username Guidelines": "用户指南",
    "Usernames must not be inappropriate, offensive, or objectionable. Any username deemed unacceptable by Idle Arcana may be modified without prior notice.": "用户名不得是不恰当的、冒犯的或令人反感的。任何被闲置秘籍认为不可接受的用户名可以不经事先通知而修改。",
    "Using one account to benefit another is forbidden.": "禁止使用一个账户为另一个账户牟利。",
    "You do not have enough materials to create resources.": "您没有足够的材料来制造资源。",
    "Monster": "怪物",
    "The item has been forged successfully.": "物品已锻造成功。",
    "Forged": "已锻造",
    "Magic": "魔法",
    "Potion": "药水",
    "The purchase was successful.": "购买成功。",
    "You have reached your marketplace slot limit. Upgrade in the Store to add more slots.": "您已达到您的市场栏位限制。在商店中升级以增加更多栏位。",
    "The resource is either unavailable or insufficient in quantity.": "资源不可用或数量不足。",
    "Lunar Magic Disrupted": "月之魔法被破坏",
    "The moon's eternal cycle has faltered. Our celestial mages are working to restore harmony between the material and arcane planes.": "月亮的永恒循环已经动摇了。我们的天体法师正在努力恢复物质层和奥术层之间的和谐。",
    "Reignite the Glyphs": "重新点燃符号",
    "⚔️ Start Battle": "⚔️ 开始战斗",
    "Battle Log": "战斗日志",
    "🔙 Back to Opponents": "🔙 返回重选对手",
    "CP:": "战力:",
    "Crit Damage": "暴击伤害",
    "Crit Rate": "暴击率",
    "Arena Battle": "竞技场战斗",
    "No hits yet...": "暂未击中...",
    "Preparing the Arena...": "准备竞技场...",
    "🛡️ Fighting in progress...": "🛡️ 战斗进行中...",
    "🎉 You Won": "🎉 你赢了",
    "🎉 Victory!": "🎉 胜利！",
    "Gold Gained": "获得金币",
    "Points Gained": "获得点数",
    "🌍 Expedition in Progress...": "🌍 探险进行中...",
    "🚀 Start Expedition": "🚀 开始探险",
    "Expedition started successfully.": "已成功开始探险。",
    "m": "分钟",
    "h": "小时",
    "d": "天",
    "Defeat": "被击败",
    "🐾 Incubate": "🐾 孵化",
    "🎁 Expedition Rewards": "🎁 探险奖励",
    "🎉 Claim Drops": "🎉 收集掉落",
    "User": "用户",
    "You Lost": "你输了",
    "You have reached the limit for simultaneous incubations. Upgrade your incubation queue capacity in the Store.": "同时孵化数量已达上限。可以在商店中提升孵化队列容量。",
    "Common": "普通",
    "Drop Chances for": "掉率关于",
    "Epic": "史诗",
    "Legendary": "传说",
    "Mythical": "神话",
    "Rare": "稀有",
    "Uncommon": "罕见",
    "🎁 A Pet was born": "🎁 一只宠物出生了",
    "🎉 Complete": "🎉 完成",
    "Heatspire": "热塔",
    "Rarity:": "稀有度:",
    "Release": "放生",
    "Pet equipped successfully.": "成功装备宠物。",
    "Incubation started successfully.": "成功开始孵化。",
    "Cancel": "取消",
    "Confirm Release": "确认放生",
    "Are you sure you want to release this pet?": "你确定要放生这只宠物吗？",
    "Amount:": "数量:",
    "Rune": "符文",
    "Pet unequipped successfully.": "成功卸下宠物。",
    "Pet released successfully.": "成功放生宠物。",
    "Sproutle": "史普罗特",
    "Your pet slots are full. Upgrade in the Store to increase your capacity.": "宠物栏位已满。在商店中升级以增加您的容量。",
    "Brewing Venomguard Tonic...": "酿造防毒液补剂...",
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
    "Lagoonmyst": "Lagoonmyst",
    "Loamera": "洛美拉",
    "Oceanbreeze": "海风",
    "Tideshadow": "潮影",
    "Seaglimpse": "海景",
    "Dirtibug": "臭虫",
    "Fighting Harmony of Death...": "对抗和谐的死神...",
    "Brewing Shadowbane Elixir...": "酿造魔剑长生不老药...",
    "WELCOME50": "WELCOME50",
    "Smelting Copper Bar...": "正在冶炼铜矿石...",
    "Harvesting Carrot...": "正在收割胡萝卜...",
    "Harvesting Wheat...": "正在收割小麦...",
    "Chopping Willow Wood...": "正在砍伐柳木...",
    "Chopping Pine Wood...": "正在砍伐松木...",
    "Chopping Oak Wood...": "正在砍伐橡木...",
    "Mining Silver Ore...": "正在开采银矿石...",
    "Min. CP": "最低战力",
    "Combat Power": "战力",
    "CP": "战力",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "l": "l",
    "likexiazai@qq.com": "likexiazai@qq.com",
    "❌": "❌",
    "🌍": "🌍",
    "🏗": "🏗",
    "⏰": "⏰",
    "🏗️": "🏗️",
    "👏": "👏",
    "🚀": "🚀",
    "s (": " (",
    "s •": " •",
    "✅": "✅",
    "📦": "📦",
    "%": "%",
    "•": "•",
    ") -": ") -",
    ")": ")",
    "(x": "(x",
    "(": "(",
    "🎒": "🎒",
    "$": "$",
    "+": "+",
    "%)": "%)",
    "s": "秒",
    "💎": "💎",
    "🚨": "🚨",
    "🔥": "🔥",
    "VS": "VS",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    ":": ":",
    "/": "/",
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
    'II': 'I',
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
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    "Gityx": "Gityx",
    "Gz": "Gz",
    "O": "O",
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
    "  ": " ",
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
    "The resource has been stopped successfully. Drops obtained: ": "已成功停止资源。获得掉落：",
    "Advanced ": "高级",
    "Basic ": "基础",
    "Ascendant ": "上升",
    "Celestial ": "天体",
    "Golden ": "金色",
    "Spartan ": "斯巴达",
    "Primordial ": "原始",
    "Legionary ": "军团",
    "Knight ": "骑士",
    "Immortal ": "不朽",
    "Ethereal ": "空灵",
    "Astral ": "星芒",
    "Aether ": "以太",
    "Arcane ": "奥秘",
    "Insufficient Materials: ": "材料不足: ",
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
    " successfully started.": " 已成功开始。",
    "% boosted efficiency": "% 提升效率",
    " each) while away.": " 每个) 当你离开时.",
    "'s HP": " 生命值",
    " evaded the attack!": " 躲过了攻击！",
    " evaded your attack!": "躲过了你的攻击！",
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
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
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
    [/^You can only have up to (.+) pets equipped.$/, '你只能装备 $1 宠物。'],
    [/^(.+) hit you for (.+) damage!$/, '$1 击中了你并造成了 $2 伤害！'],
    [/^You hit (.+) for (.+) damage!$/, '你击中了 $1 并造成了 $2 伤害！'],
    [/^CRITICAL HIT! You dealt (.+) damage!$/, '暴击! 你造成了 $1 伤害!'],
    [/^Opponent CRITICAL HIT! They dealt (.+) damage!$/, '对手暴击！他们造成了 $1 点伤害！'],
    [/^Silver Gaze \(required: (.+), available: (.+)\)$/, '银色凝视（需要：$1个，可用：$2个）'],
    [/^\(Only (.+) hours were generating resources\).$/, '（只有 $1 小时在生成资源）。'],
    [/^You have sold (.+) of Copper Bar for (.+) Gold. Tax will be deducted.$/, '你售出了 $1 铜锭 换取了 $2 金币。税金将被自动扣除。'],
    [/^You have sold (.+) of Willow Wood for (.+) Gold. Tax will be deducted.$/, '你售出了 $1 柳木 换取了 $2 金币。税金将被自动扣除。'],
    [/^You have sold (.+) of Pine Wood for (.+) Gold. Tax will be deducted.$/, '你售出了 $1 松木 换取了 $2 金币。税金将被自动扣除。'],
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
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^You have claimed ([\d\.]+) Crystals as your daily rewards.$/, '你已经获得 $1 水晶作为每日奖励。'],
    [/^([\d\.]+) Crystals$/, '$1 水晶'],
    [/^([\d\.]+) days ago$/, '$1 天前'],
    [/^([\d\.]+) day ago$/, '$1 天前'],
    [/^([\d\.]+) hours ago$/, '$1 小时前'],
    [/^([\d\.]+) hour ago$/, '$1 小时前'],
    [/^([\d\.]+) minutes ago$/, '$1 分钟前'],
    [/^([\d\.]+) minute ago$/, '$1 分钟前'],
    [/^([\d\.]+) minutes$/, '$1 分钟'],
    [/^([\d\.]+) minute$/, '$1 分钟'],
    [/^([\d\.]+) seconds$/, '$1 秒'],
    [/^([\d\.]+) second$/, '$1 秒'],
    [/^([\d\.]+) hour$/, '$1 小时'],
    [/^([\d\.]+) hours$/, '$1 小时'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)x Wheat sold for ([\d\.]+) Gold$/, '出售 $1x 小麦 获得了 $2 金币'],
    [/^([\d\.]+)x Harmony of Death sold for ([\d\.]+) Gold$/, '出售 $1x 和谐的死神 获得了 $2 金币'],
    [/^([\d\.]+)x Copper Ore sold for ([\d\.]+) Gold$/, '出售 $1x 铜矿石 获得了 $2 金币'],
    [/^([\d\.]+)x Oak Wood sold for ([\d\.]+) Gold$/, '出售 $1x 橡木 获得了 $2 金币'],
    [/^([\d\.]+)x Shadowbane Elixir$/, '$1x 魔剑长生不老药'],
    [/^([\d\.]+)x Shadowbane Elixir.$/, '$1x 魔剑长生不老药。'],
    [/^([\d\.]+)x Copper Bar$/, '$1x 铜锭'],
    [/^([\d\.]+)x Copper Bar.$/, '$1x 铜锭。'],
    [/^([\d\.]+)x Copper Ore$/, '$1x 铜矿石'],
    [/^([\d\.]+)x Copper Ore.$/, '$1x 铜矿石。'],
    [/^([\d\.]+)x Harmony of Death$/, '$1x 和谐的死神'],
    [/^([\d\.]+)x Carrot$/, '$1x 胡萝卜'],
    [/^([\d\.]+)x Carrot.$/, '$1x 胡萝卜。'],
    [/^([\d\.]+)x Wheat$/, '$1x 小麦'],
    [/^([\d\.]+)x Wheat.$/, '$1x 小麦。'],
    [/^([\d\.]+)x Silver Ore$/, '$1x 银矿石'],
    [/^([\d\.]+)x Silver Ore.$/, '$1x 银矿石。'],
    [/^([\d\.]+)x Willow Wood$/, '$1x 柳木'],
    [/^([\d\.]+)x Willow Wood.$/, '$1x 柳木。'],
    [/^([\d\.]+)x Oak Wood$/, '$1x 橡木'],
    [/^([\d\.]+)x Oak Wood.$/, '$1x 橡木。'],
    [/^([\d\.]+)x Pine Wood$/, '$1x 松木'],
    [/^([\d\.]+)x Pine Wood.$/, '$1x 松木。'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\(Currently: ([\d\.,]+) tickets\)$/, '(当前: $1 门票)'],
    [/^\(Currently: ([\d\.,]+) queue\/s\)$/, '(当前: $1 队列\/秒)'],
    [/^\(Currently: ([\d\.,]+) hours\)$/, '(当前: $1 小时)'],
    [/^\(Currently: ([\d\.,]+) slots\)$/, '(当前: $1 栏位)'],
    [/^\+([\d\.,]+) Pet Slots$/, '\+$1 宠物栏位'],
    [/^\+([\d\.,]+) Market Slots$/, '\+$1 市场栏位'],
    [/^\+([\d\.,]+) Market Slot$/, '\+$1 市场栏位'],
    [/^\+([\d\.,]+) Jewelry Slots$/, '\+$1 珠宝栏位'],
    [/^\+([\d\.,]+) Jewelry Slot$/, '\+$1 珠宝栏位'],
    [/^\+([\d\.,]+) Inventory Slots$/, '\+$1 背包栏位'],
    [/^\+([\d\.,]+) Incubation Queue$/, '\+$1 孵化队列'],
    [/^\+([\d\.,]+) Dungeon Queue$/, '\+$1 地下城队列'],
    [/^\+([\d\.,]+) Expedition Queue$/, '\+$1 探险队列'],
    [/^\+([\d\.,]+) Construction Queue$/, '\+$1 建筑队列'],
    [/^\+([\d\.,]+) Jewelry Crafting Queue$/, '\+$1 珠宝加工队列'],
    [/^\+([\d\.,]+) hour of Offline Production$/, '\+$1 小时离线生产'],
    [/^\+([\d\.,]+) Arena Ticket Daily Limit$/, '\+$1 每日竞技场门票上限'],
    [/^([\d\.,]+) Bonus Crystals$/, '$1 奖励水晶'],
    [/^Ability ([\d\.,]+)$/, '能力 $1'],
    [/^Card ([\d\.,]+)$/, '卡牌 $1'],
    [/^Abilities ([\d\.,]+)$/, '能力 $1'],
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