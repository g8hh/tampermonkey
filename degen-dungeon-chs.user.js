// ==UserScript==
// @name         degen-dungeon-chs
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  Degen Dungeon (https://www.degen-dungeon.com/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://www.degendungeon.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/degen-dungeon-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/degen-dungeon-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/02/17 20:04
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
    "You": "你",
    "XP": "经验值",
    "Woodcutting": "伐木",
    "Shop": "商店",
    "Skills": "技能",
    "More": "更多",
    "monster": "怪物",
    "Mining": "采矿",
    "Membership": "会员",
    "Level": "等级",
    "Health": "生命值",
    "Inventory": "库存",
    "Character": "角色",
    "Combat History": "战斗记录",
    "Combat": "战斗",
    "Combat Chest": "战斗宝箱",
    "Cooking": "烹饪",
    "Energy": "能量",
    "Crafting": "制作",
    "Fishing": "钓鱼",
    "Forging": "锻造",
    "Alchemy": "炼金",
    "Armored Cave Crawler": "装甲洞穴爬行者",
    "Available Encounters": "可用的遭遇",
    "Cliff Prowler": "悬崖徘徊者",
    "Frosthide Boar": "冰霜猪",
    "Frosthide Wolf": "冰霜狼",
    "Gathering": "采集",
    "Glacial Warden": "冰川监狱长",
    "Glacier Beetle": "冰川甲虫",
    "Herbalism": "草药学",
    "Leaderboards": "排行榜",
    "Leatherworking": "皮革加工",
    "Marketplace": "市场",
    "Muck Bat": "粪蝠",
    "Mud Golem": "泥魔像",
    "Night Spider": "夜蛛",
    "required": "要求",
    "Rotfang": "腐牙",
    "Shadow Rat": "暗影鼠",
    "Snowdrift Owl": "雪原夜枭",
    "Stormhorn": "暴风号角",
    "Swamp Frog": "沼泽蛙",
    "Tailoring": "裁缝",
    "The Dreadmire Colossus": "可怕的巨像",
    "Thunderhorn Ram": "雷角公羊",
    "Tracking": "追踪",
    "Windstrider Hawk": "疾风鹰",
    "No encounters available": "没有可用的遭遇",
    "Damage Dealt:": "造成的伤害:",
    "Damage Taken:": "受到的伤害:",
    "In Progress": "进行中",
    "No items in combat chest": "战斗宝箱空空如也",
    "Character Slot": "角色槽位",
    "Characters": "角色",
    "Coming Soon": "敬请期待",
    "Continue": "继续",
    "Logout": "登出",
    "warrior": "战士",
    "Agility": "敏捷",
    "Attack Speed": "攻击速度",
    "Attack Power": "攻击力量",
    "Combat Stats": "战斗属性",
    "Defense": "防御",
    "for updates and more.": "查看更新和更多内容。",
    "Intelligence": "智力",
    "Join us on": "加入我们的",
    "Primary Stats": "主属性",
    "Strength": "力量",
    "Warrior": "战士",
    "Regenerate your health with food from cooking or health potions from alchemy.": "通过烹饪获得的食物，或炼金获得的生命药水来恢复生命值。",
    "Regenerate your energy with energy potions from alchemy.": "使用炼金术中获得的能量药水来恢复能量。",
    "No character found": "未找到角色",
    "Bank": "银行",
    "bank slots used": "使用的银行插槽",
    "Coal Ore": "煤矿石",
    "Common": "普通",
    "Copper Bar": "铜锭",
    "Empty": "空",
    "Empty Slot": "空槽位",
    "Equipment Effects": "装备效果",
    "Equips": "装备",
    "Leather Hide": "皮革皮",
    "Manage your items and equipment": "管理你的物品和装备",
    "Oak Logs": "橡树原木",
    "Raw Wool": "原生羊毛",
    "slots used": "已使用槽位",
    "Whisperleaf": "低语之叶",
    "Time": "时间",
    "Speed": "速度",
    "/ Need:": "/ 需要:",
    "Start 1 Action": "开始 1 行动",
    "Stop Task": "停止任务",
    "Weapons": "武器",
    "Max": "最大",
    "Attack": "攻击",
    "Have:": "拥有:",
    "gathered": "已采集",
    "Fishingrod": "鱼竿",
    "Current Task": "当前任务",
    "Resource": "资源",
    "Resources": "资源",
    "Requirements": "需要",
    "Required Bait": "需要鱼饵",
    "Aetherbloom": "以太绽放",
    "Angler": "垂钓者",
    "Angler Soup": "垂钓者汤",
    "Arcanleaf": "神秘叶",
    "Astralis": "黄芪",
    "Available Resources": "可用的资源",
    "Barracuda": "梭鱼",
    "Basic Bait": "初级诱饵",
    "Bodyarmor": "防弹衣",
    "Briarthorn": "刺梨",
    "Briarthorn Resin": "刺梨树脂",
    "Dreamvine": "梦之藤",
    "Dreamvine Sap": "梦藤汁液",
    "Emberpetal": "余烬",
    "Emberpetal Oil": "余烬油",
    "Emberroot": "香蒿",
    "Emberroot Essence": "香蒿精华",
    "Etherbloom": "永恒绽放",
    "Flaxthorn": "亚麻籽",
    "Frosted Sawfish Filet": "凉拌锯鳐鱼片",
    "Frostleaf": "霜叶",
    "Frostleaf Distillate": "霜叶蒸馏液",
    "Grilled Minnow": "烤鲦鱼",
    "Leviathan": "利维坦",
    "Leviathan Roast": "利维坦烤肉",
    "Minnow": "鲦鱼",
    "Moonblossom": "月花",
    "Moonblossom Tincture": "月花酊",
    "Moonglow": "月光草",
    "Mystroot": "神秘根",
    "Mystweave Cloth": "神秘织物",
    "Piranha": "食人鱼",
    "Piranha Stew": "炖食人鱼",
    "Raw Cotten": "原棉",
    "Roasted Snapper": "烤鲷鱼",
    "Sawfish": "锯鳐",
    "Sea Wyrm": "海妖龙",
    "Shadowbloom": "暗影花",
    "Shadowbloom Essence": "暗影花精华",
    "Shadowvine": "影藤",
    "Silkwisp": "蚕丝",
    "Snapper": "鲷鱼",
    "Spiced Sea Wyrm": "五香海龙",
    "Spicy Barracuda": "麻辣梭鱼",
    "Spiritthorn": "荆刺",
    "Spiritthorn Powder": "荆刺粉",
    "Starlotus": "星莲花",
    "Starlotus Extract": "星莲花提取物",
    "Stormray": "暴风",
    "Stormray Filet": "暴风鱼片",
    "Sunpetal": "太阳花瓣",
    "Sunpetal Infusion": "太阳花瓣灌注液",
    "Tigerfish": "虎鱼",
    "Tigerfish Stew": "炖虎鱼",
    "Whisperleaf Extract": "柳叶提取物",
    "You need level 20 Herbalism to gather this resource.": "需要草药学等级达到20级才能采集该资源",
    "Extended Idle Time": "扩展放置时间",
    "Purchase Gems": "购买宝石",
    "Name Highlight": "名字高亮",
    "The membership aims to provide slight gameplay enhancements while ensuring the core game remains fully accessible to all players. No critical content is locked behind the membership paywall.": "会员旨在提供轻微的游戏性增强，同时确保所有玩家都可以完全访问核心游戏。没有关键内容被锁定在会员付费墙后面。",
    "Membership is an optional subscription, activated through a Membership Scroll—an in-game item that can be purchased and traded through the marketplace. This membership provides special benefits to enhance your gaming experience, designed to offer modest improvements without fundamentally altering game balance.": "会员资格是一种可选的订阅，可以通过会员卷轴激活，这是一种可以通过市场购买和交易的游戏内物品。这个会员资格提供特殊的好处，以提高您的游戏体验，旨在提供适度的改进，而不会从根本上改变游戏的平衡。",
    "15% faster action times on all tasks": "所有任务的行动时间加快15%",
    "30 Day Membership Scroll": "30天会员资格卷轴",
    "Activate premium benefits with a Membership Scroll": "使用会员卷轴激活高级福利",
    "Activate this scroll to receive 30 days of premium membership benefits. The scroll can be traded with other players through the marketplace.": "激活此卷轴可获得30天的高级会员福利。卷轴可以通过市场与其他玩家进行交易。",
    "Character receives a distinctive color identifier": "字符接收一个独特的颜色标识符",
    "Enhance your gaming experience with premium benefits": "享受尊享福利，提升您的游戏体验",
    "Expanded from 8 to 12 maximum listings": "从8个扩展到12个最大清单",
    "Increased from 2 hours to 4 hours of idle progression": "从2小时增加到4小时",
    "Increased Listing Limits": "上架上限增加",
    "Membership Benefits": "会员福利",
    "Membership in Degen Dungeon": "剑与地下城的会员资格",
    "Purchase Membership": "购买会员",
    "Skill Efficiency": "技能效率",
    "gems": "宝石",
    "Get gems": "获取宝石",
    "Most popular": "热门",
    "Your balance:": "你的账户:",
    "This is currently an Alpha test and you will be refunded spent gems back to your character with a 20% bonus after alpha. Join our discord if you have any quesitons or need support.": "这是一个目前的Alpha测试，你将会在Alpha测试后获得已消耗宝石的20%的加成返回你的角色。如果您有任何问题或需要支持，请加入我们的discord。",
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
    "Shark Stew": "炖鲨鱼",
    "Shark": "鲨鱼",
    "Leather": "皮",
    "Hat": "帽子",
    "Reinforced Leather": "加强皮",
    "Heavy Leather": "重皮",
    "Light Leather": "光皮",
    "Soft Leather": "软皮",
    "Sturdy Leather": "韧皮",
    "Tough Leather": "硬皮",
    "Thick Leather": "厚皮",
    "Speed Potion": "速度药水",
    "Health Potion": "生命药水",
    "Energy Potion": "能量药水",
    "Defense Potion": "防御药水",
    "Attack Potion": "攻击药水",
    "Staff": "权杖",
    "Plank": "木板",
    "Logs": "原木",
    "Bow": "弓",
    "Pouch": "袋子",
    "Leather": "皮",
    "Shoes": "鞋子",
    "Robe": "长袍",
    "Basket": "篮子",
    "Cloth": "衣服",
    "Axe": "斧",
    "Bar": "锭",
    "Bodyarmor": "铠甲",
    "Boots": "靴子",
    "Fishing Rod": "鱼竿",
    "Gloves": "手套",
    "Helmet": "头盔",
    "Pickaxe": "镐子",
    "Shield": "盾牌",
    "Sword": "剑",
    "Trap": "陷阱",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "GItyx": "GItyx",
    "Degen Dungeon": "剑与地下城",
    "s": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "Silver ": "银",
    "Moonlit ": "月光",
    "Mithril ": "秘银",
    "Mystic ": "神秘",
    "Iron ": "铁",
    "Gold ": "金",
    "Dragonwood ": "龙木",
    "Eternium ": "永恒",
    "Etheric ": "以太",
    "Spirit ": "精神",
    "Standard ": "普通",
    "Superior ": "高级",
    "Umbral ": "阴暗",
    "Lesser ": "小型",
    "Greater ": "大型",
    "Grand ": "巨型",
    "Platinum ": "铂",
    "Radiant ": "辐射",
    "Abyssal ": "深渊",
    "Astral ": "星体",
    "Maple ": "枫木",
    "Mighty ": "强大",
    "Minor ": "迷你",
    "Redwood ": "红木",
    "Lead ": "铅",
    "Adamantite ": "精钢",
    "Aether ": "以太",
    "Arcane ": "奥术",
    "Pine ": "松木",
    "Oak ": "橡木",
    "Wool ": "羊毛",
    "Birch ": "桦木",
    "Eldertree ": "接骨木",
    "Leather ": "皮",
    "Reinforced Leather ": "加强皮",
    "Light Leather ": "光皮",
    "Soft Leather ": "软皮",
    "Sturdy Leather ": "韧皮",
    "Heavy Leather ": "重皮",
    "Tough Leather ": "硬皮",
    "Thick Leather ": "厚皮",
    "Ironwood ": "铁木",
    "Cedar ": "雪松",
    "Shadow ": "阴影",
    "Shadowhide ": "暗影",
    "Silk ": "丝绸",
    "Tin ": "锡",
    "Ebony ": "乌木",
    "Linen ": "亚麻",
    "Celestial ": "天体",
    "Copper ": "铜",
    "Cotton ": "棉花",
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
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
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
    [/^Start (.+) Actions$/, '开始 $1 行动'],
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
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Level ([\d\.,]+) Combat$/, '等级 $1 战斗'],
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