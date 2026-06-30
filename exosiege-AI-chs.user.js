// ==UserScript==
// @name         Exosiege AI简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Exosiege (https://exosiege.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Exosiege.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://exosiege.com/exosiege.svg
// @license      MIT
// @include      *https://exosiege.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/exosiege-AI-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/exosiege-AI-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/06/30 17:06
 * Author: guoba
 * View: https://www.gityx.com/
 * ---------------------------
 */

// ==UserScript==
// @name         锅巴汉化 - Web汉化插件
// @namespace    https://www.g8hh.com.cn/
// @version      0.8.2
// @description  网页游戏简体中文汉化脚本（引擎+数据整合版）
// @author       麦子、JAR、小蓝、好阳光的小锅巴、人民当家做主
// @website      https://www.g8hh.com
// @idle games   https://www.gityx.com
// @QQ Group     730783833
// ==/UserScript==

// ============================================================
// 匹配配置
// ============================================================
// ignoreCase: true   忽略大小写(Gold/gold/GOLD都匹配), false=区分大小写
// trimSpaces: true   忽略首尾空格(" gold "匹配"gold"), false=保留空格
//
// 影响范围：
//   ✅ cnItems 精确匹配(字符串值+数组值)
//   ✅ cnItems 分类索引({{分类名}}/{{分类名*}}/{{分类名*|sep|join}})
//   ✅ cnResourceNames 名词翻译
//   ✅ cnPrefix / cnPostfix 前后缀
//   ✅ cnRegReplace / 排除规则 / 模板正则(通过 addIgnoreCaseFlag / cnConfig.ignoreCase 控制)
var cnConfig = {
    ignoreCase: true,
    trimSpaces: true,
};

// ============================================================
// cnCategoriesList — 分类名称注册表（供编辑器工具使用）
// ============================================================
// 分类数据由 cnItems 中的数组值 ["译文", "分类名"] 自动构建。
// 此列表仅声明有哪些分类，以便编辑器提供分类选择/管理功能。
var cnCategoriesList = [
    "resource",
    "item",
];

// ============================================================
// cnItems — 主要翻译词条
// ============================================================
// 用法：
//   "原文": "译文"                         → 精确静态匹配
//   "原文": ["译文", "分类名"]               → 静态匹配 + 自动加入分类
//   "Cost: {{0}}": "消耗：{{0}}"            → 模板匹配 ({{0}} 匹配任意值)
//   "{{resource}}: {{%d}}": "{{resource}}：{{%d}}"  → 分类模板 + 数字验证
//   "{{分类名*}}": 仅在该分类查找，找不到保留原文
//   "{{分类名*|sep|join}}": 分类限定列表解析
//   "{{*}}": 通用列表，逐项递归翻译
//   "{{*|sep|join}}": 自定义分隔符/连接词的列表
// ============================================================
var cnItems = {
    // --- 静态匹配 ---
    "Welcome": "欢迎",
    "Score": "分数",
    "Health Potion": "生命药水",
    "Hello World": "你好世界",

    // --- 分类词条 [译文, 分类名] ---
    "gold": ["金币", "resource"],
    "wood": ["木材", "resource"],
    "stone": ["石头", "resource"],
    "iron": ["铁", "resource"],
    "sword": ["剑", "item"],
    "shield": ["盾牌", "item"],
    "helmet": ["头盔", "item"],

    // --- 模板 ({{0}} / {{1}}) ---
    "Verifying you're human… ({{0}} hashes)": "正在验证人机身份……（哈希计算量：{{0}}）",
    "Tier {{0}}": "层级 {{0}}",
    "Cost: {{0}}": "消耗：{{0}}",
    "New build {{0}} is live. It updates automatically when you leave.": "新版本 {{0}} 已上线。当你离开时会自动更新。",
    "Next Improvement: {{0}}": "下次提升：{{0}}",
    "Level {{0}}": "等级{{0}}",
    "{{0}} x {{1}}": "{{0}} × {{1}}",

    // --- 模板 ({{分类名}} + {{%d}}) ---
    "{{resource}}: {{0}}": "{{resource}}：{{0}}",

    // --- 模板 ({{分类名*}} 仅分类) ---
    "Get {{0}} {{resource*}}": "获得 {{0}} {{resource*}}",

    // --- 模板 ({{分类名*|sep|join}} 分类列表) ---
    "Craft {{item*|,|和}}": "制作{{item*|,|和}}",

    // --- 通用列表 {{*}} / {{*|sep|join}} ---
    "Items: {{*}}": "物品：{{*}}",
    "Mats: {{*|, |、}}": "材料：{{*|, |、}}",

    // --- 数字占位符 {{%d}} ---
    "Upgrade (Lvl {{%d}})": "升级 (等级 {{%d}})",
    "Lvl {{%d}}": "等级 {{%d}}",
    " → Lvl {{%d}}": " → 等级 {{%d}}",
    "HP: {{%d}}": "生命值：{{%d}}",
    "{{%d}}s": "{{%d}}秒",
    "{{%d}}k": "{{%d}}k",
    "DMG: {{%d}}": "伤害：{{%d}}",

    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "":["",""],
    "Mythic": "神话",
    "Legendary": "传说",
    "Epic": "史诗",
    "Rare": "稀有",
    "Uncommon": "罕见",
    "Common": "普通",
    "Buckler": "圆盾",
    "Amulet": "护符",
    "Wraps": "外衣",
    "Skirt": "裙子",
    "Sandals": "凉鞋",
    "Robe": "长袍",
    "Hat": "帽子",
    "Pants": "裤子",
    "Hood": "兜帽",
    "Vest": "背心",
    "Shield": "盾牌",
    "Ring": "戒指",
    "Platelegs": "板腿",
    "Platebody": "板甲",
    "Helmet": "头盔",
    "Gloves": "手套",
    "Boots": "靴子",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "???": "???",
    "Gityx": "Gityx",
    "G8hh": "G8hh",
    "discord.gg/gNrccFVQxD": "discord.gg/gNrccFVQxD",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "D:": "D:",
    "R:": "R:",
    "S:": "S:",
    "P:": "P:",
    "$": "$",
    "#": "#",
    "/": "/",
    "]": "]",
    "[": "[",
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
    // --- ExoSiege 翻译 ---
    "A bio-punk MMO": "一款生物朋克MMO",
    "A bio-punk browser MMO 4X on a planet-sized living organism. One shared world. You land knowing the legend says nobody returns. Then you build out of the planet's skin and try to outlast it.": "一款基于浏览器、以行星级活体生物为舞台的生物朋克4X-MMO。共享同一个世界。你降落时便知传说——无人能返。然后你用行星的皮肤建造据点，并试图比它活得更久。",
    "Ascend it. Win the run.": "登上它。赢得本轮。",
    "Ashfields": "灰烬平原",
    "Bandit Camp": "匪徒营地",
    "Bandits, traders, warmongers. All of them were ExoSiegers once. Long enough on the planet and the surface keeps the body but takes the rest. They raid you while you sleep.": "匪徒、商人、战争贩子。他们都曾是远征围攻者。在行星上待久了，地表留下躯壳，却夺走了其他一切。他们会在你沉睡时袭击你。",
    "Buzzhaven": "蜂鸣港",
    "By signing in, you confirm acceptance of the current": "登录即表示您确认接受当前的",
    "Claim a megastructure.": "占领一座巨构。",
    "Combat Report": "战斗报告",
    "Command Post": "指挥所",
    "Coral Spire": "珊瑚尖塔",
    "Corebloom": "核芯绽放",
    "Create Account": "创建账号",
    "Dark Hollow": "暗影谷地",
    "Dark Sanctum": "黑暗圣所",
    "Designed for a desktop, fits a pocket. Install it as a PWA and the planet sits on your home screen.": "为桌面设计，口袋也能装下。安装为PWA应用，行星就在你的主屏幕上。",
    "Desktop · PWA mobile": "桌面 · PWA移动端",
    "District Alpha": "阿尔法区",
    "Districts vote.": "各区投票。",
    "Each one already in the game today.": "每一项都已在当前游戏中实装。",
    "Echo Chamber": "回音室",
    "Email": "邮箱",
    "Empire Dashboard": "帝国仪表盘",
    "Endgame": "终局",
    "Every player on the same hex map. The grid goes down to individual position level and your neighbours are real.": "所有玩家在同一张六边形地图上。网格精细到个体位置层级，你的邻居都是真人。",
    "Every player on the same hex map. The planet is one organism, not a database row. Your neighbour is somebody's real territory, and the planet notices when you move.": "所有玩家在同一张六边形地图上。行星是一个完整的生命体，不是数据库中的一行。你的邻居是某人的真实领地，而你的一举一动——行星都察觉到了。",
    "ExoSiege is a planet-sized organism. The legend says nobody returns. You land anyway. You build your first territory out of its skin, you ally with the others who came before you, and together you try to break the planet open before it absorbs you back.": "远征围攻是一个行星大小的生命体。传说无人能返。但你还是降落了。你用它的表皮建起第一块领地，与先来者结盟，一起试图在行星将你吞噬之前，将其彻底瓦解。",
    "exosiege.com · ": "exosiege.com · ",
    "factions · 73 traits": "派系 · 73种特质",
    "Fiber is skin. Crystal is bone. Biomass is meat. Higher tiers go deeper.": "纤维是皮肤。水晶是骨骼。生物质是血肉。更高的层级通往更深处。",
    "Forgot password?": "忘记密码？",
    "Forward Base": "前进基地",
    "Free in the browser. No premium currency. No paywall. Nothing money buys that matters.": "浏览器内免费畅玩。无付费货币。无付费墙。金钱买不到任何影响游戏平衡的东西。",
    "From Reddit and Discord": "来自Reddit和Discord",
    "Frostex": "冰霜铸地",
    "Harvest Fields": "丰收平原",
    "Haven": "避难所",
    "Hidden Lab": "隐秘实验室",
    "Hostages": "人质",
    "How do I reach the dev?": "如何联系开发者？",
    "How does an alliance earn permanent Prestige?": "联盟如何获得永久名望？",
    "I confirm I am at least 16 years old and I have read and agree to the": "我确认已年满16周岁，并已阅读且同意",
    "Iron Core": "铁核",
    "Is it free?": "免费吗？",
    "Join Discord →": "加入Discord →",
    "Join Discord for playtest coordination →": "加入Discord协调测试 →",
    "June 27, 2026 19:00 CET to October 31, 2026 19:00 CET.": "2026年6月27日 19:00（欧洲中部时间）至 2026年10月31日 19:00（欧洲中部时间）",
    "June 27, 2026, 19:00 CET": "2026年6月27日 19:00（欧洲中部时间）",
    "Krypton's Edge": "氪星峭壁",
    "Land as Guest (claim later)": "以游客身份登陆（稍后占领）",
    "Living Planet": "活体行星",
    "living planet.": "活体行星。",
    "Login": "登录",
    "Lost Ruin": "失落废墟",
    "Mega Fortress": "巨型要塞",
    "Megastructure": "巨构",
    "Mobile?": "移动端？",
    "Movement Panel": "行动面板",
    "New Eden": "新伊甸",
    "Nexus Prime": "枢纽核心",
    "No pay-to-win.": "零氪金制胜。",
    "No shards.": "无分片。",
    "Obsidian Gate": "黑曜石门",
    "Officers rule.": "军官掌权。",
    "One planet · No shards · No way back": "一个行星 · 无分片 · 无回头路",
    "One world.": "同一个世界。",
    "or land immediately": "或立即登陆",
    "Password": "密码",
    "Permanent": "永久",
    "Pixel Peak": "像素巅峰",
    "PLAYTEST": "公开测试",
    "Playtest starts": "测试开始",
    "Playtest window": "测试时间窗口",
    "Politics": "政治",
    "Prestige earned from a level 10 Megastructure survives the end-of-playtest wipe.": "从10级巨构中获得的名望将在测试结束后保留，不会被清除。",
    "Prestige earned through a level 10 Megastructure is permanent; other progress resets after the playtest.": "通过10级巨构获得的名望是永久的；其他进度在测试结束后重置。",
    "Prestige survives": "名望保留",
    "Privacy": "隐私",
    "Privacy Policy": "隐私政策",
    "Questions": "常见问题",
    "Recon Post": "侦察哨站",
    "Register": "注册",
    "Registration opens when the planet stirs. Admins can sign in on the Login tab.": "当行星苏醒时开放注册。管理员可通过登录标签页登录。",
    "Requesting verification challenge…": "正在请求验证挑战……",
    "Same hex map on every device. The planet looks the same from a phone.": "所有设备同一张六边形地图。手机上看到的行星一模一样。",
    "Same screen, mobile": "同一画面，移动端",
    "See the surface": "查看地表",
    "Shadow Rift": "暗影裂隙",
    "Sign In": "登录",
    "Silent Watch": "沉默守望",
    "Six anchors. Ten generator levels. A five-minute freeze when the rift opens. The winning alliance is pulled in and absorbed into ExoSiege, etched into the Hall of Legends, reborn with wipe-immune Prestige. The territories they leave behind become Graves of Legends for everyone else to scavenge.": "六个锚点。十个发电机等级。裂隙开启时五分钟的冻结期。获胜联盟被吸入远征围攻之中，铭刻于传说殿堂，带着免疫清除的名望重生。他们留下的领地成为传说之墓，供其他人搜刮。",
    "Six pillars": "六大支柱",
    "Skyward": "苍穹",
    "Solitude": "孤寂之地",
    "Solo dev, passion project": "独立开发者，热情之作",
    "Solo dev. One planet. Built in the open.": "独立开发者。一个行星。公开构建。",
    "Starts June 27, 2026 at 19:00 CET.": "2026年6月27日 19:00（欧洲中部时间）开始。",
    "Stormveil": "风暴帷幕",
    "Submitting verification…": "正在提交验证……",
    "Support": "支持",
    "Swipe the screenshot to switch slides.": "滑动截图切换页面。",
    "Terms": "条款",
    "Terms of Service": "服务条款",
    "Territory Map · Position": "领土地图 · 位置",
    "Territory Map · Sub-Region": "领土地图 · 子区域",
    "The Body": "躯壳",
    "The Line": "战线",
    "The planet is not awake yet": "行星尚未苏醒",
    "The ones people actually ask.": "这些是大家真正关心的问题。",
    "The Transformed": "转化者",
    "Thornreach": "荆棘要塞",
    "Three tiers of elected office sit on top of the map. Run for a district seat in a week, levy taxes on every tile, push edicts that shield a region or strangle it. The planet does not care about borders. The other ExoSiegers do.": "三层民选官职凌驾于地图之上。一周内竞选一个区的席位，对每个地块征税，颁布法令保护或扼杀一个区域。行星不在乎边界。但其他远征围攻者在乎。",
    "tissues · tiers": "组织 · 层级",
    "Trader": "商人",
    "Units & Recruitment": "单位与招募",
    "Until Oct 31, 2026, 19:00 CET": "至2026年10月31日 19:00（欧洲中部时间）",
    "Username": "用户名",
    "Username or Email": "用户名或邮箱",
    "Usernames and passwords are case-sensitive. Email addresses are not.": "用户名和密码区分大小写。邮箱地址不区分。",
    "Verification complete.": "验证完成。",
    "Warmonger": "战争贩子",
    "What ExoSiege is": "远征围攻是什么",
    "What happens after the playtest?": "测试结束后会发生什么？",
    "What is ExoSiege?": "什么是远征围攻？",
    "What is the goal of this playtest?": "本次测试的目标是什么？",
    "When does the playtest run?": "测试何时进行？",
    "where everyone plays": "所有人同场竞技",
    "Will my progress be wiped?": "我的进度会被清除吗？",
    "Windforge": "风铸堡",
    "Windhollow": "风穴",
    "Window": "窗口",
    "the same": "相同的",
    "and the": "以及",
    "A bio-punk browser MMO 4X on a planet-sized living organism. One shared world. You land knowing the legend says nobody returns. Then you build out of the planet’s skin and try to outlast it.": "这是一款生物朋克风网页多人 4X 策略网游，整个世界建立在一颗体型堪比行星的巨型活体生物之上，全服共用同一片大世界。你降落在这片生灵星球前，早已听闻那个传说：从来没有人能活着离开此地。落地之后，你只能依托这头巨兽的体表肌理搭建据点，拼尽全力，在它的躯体侵蚀下长久存续。",
    "Every player on the same hex map. The planet is one organism, not a database row. Your neighbour is somebody’s real territory, and the planet notices when you move.": "所有玩家共享同一张六边形格战略地图。这颗星球本身是完整生命体，而非冰冷的数据条目。你毗邻的领地都属于其他真实玩家，而你的每一次行动，都会被这头巨兽感知。",
    "Claim a Megastructure, drive its Rift Generator to level 10 and survive the final five-minute freeze. The rift opens, the alliance is pulled into ExoSiege, its members are etched into the Hall of Legends, and their Prestige becomes wipe-immune. The territories they leave behind become Graves of Legends for everyone else to scavenge.": "夺取一座巨构，将裂隙生成器升级至10级，并在最后五分钟的冻结中幸存。裂隙开启后，联盟被拖入外星围城战，其成员将被铭刻于传奇大厅，声望值变为不可清除。他们身后留下的领地将成为所有人的传奇墓地，供他人搜刮。",
    "Zoom out. The colours are who owns which district right now. Tomorrow the picture has shifted.": "拉远地图视角，各色区块代表当下各势力掌控的区域，隔日版图格局便会彻底更迭。",
    "Resources, queues, alerts. Everything the planet is feeding you and everything it is taking back.": "资源储备、建造队列、事件提示——星球既向你馈赠万物，也会随时收回一切。",
    "Five archetypes. Rock paper scissors that the planet wrote, you only learn to read it.": "五大体系，相生相克的制衡法则由这颗活体星球本身缔造，你只能慢慢摸索其中门道。",
    "Send armies across the surface. Raid the transformed, intercept a rival, synchronise with the alliance, recall before it is too late.": "调遣大军穿行巨兽体表，劫掠异化生物据点、截击敌军、与同盟同步进攻，及时撤军避免全军覆没。",
    "Round by round, archetype by archetype. Who hit first, who came back, what they brought home.": "一轮轮交战，各类体系轮番角逐：谁率先出击、谁残兵撤退、谁满载战利品凯旋。",
    "Six anchors. Ten generator levels. One five-minute freeze. Then the rift opens and pulls the winning alliance in.": "六座能量锚点，发生器最高十级，五分钟全域停滞结束后裂隙开启，将获胜同盟吸入其中。",
    "Yes. Browser-based, no download, no account required for a guest run, no pay-to-win. Free now and free in open beta.": "没错，浏览器即可游玩，无需下载；游客模式不用注册账号，不存在氪金碾压，测试期间免费，公测也永久免费。",
    "The playtest starts on June 27, 2026 at 19:00 CET and is planned to run until October 31, 2026 at 19:00 CET. We may extend it if the game needs more time before open beta.": "本次测试将于2026年6月27日中欧时间19点开启，计划持续至2026年10月31日中欧时间19点。若公测筹备需要更多打磨时间，我们可能延长测试周期。",
    "Secure permanent Prestige. Reach a Megastructure, bring its Rift Generator to level 10, and get your alliance written into the Hall of Legends. Prestige earned this way will not be wiped after the playtest.": "获取永久传承声望：建造巨型建筑，将裂隙发生器升至十级，你的同盟名字会被记入名人殿堂。以此途径获得的传承声望，测试结束后不会清除。",
    "Most progress will reset after the playtest so open beta can start clean. Territories, resources, armies and similar world progress are expected to be wiped. Permanent Prestige is the exception": "测试结束后大部分进度会重置，让公测拥有全新初始环境。领地、资源、军队等大世界相关数据都会清空，唯有本次测试获取的永久传承声望不受影响，可以继承。",
    "if you earn it during this playtest, it carries forward.": "若你在本次测试中获取该奖励，可永久继承至后续版本。",
    "The plan is to move into open beta after this four-month playtest. Balance, features and timing can still change, and the playtest may be extended if that makes the open beta better.": "本次为期四个月的测试结束后会开启公测；数值平衡、游戏功能、上线时间均有可能调整，如果延长测试能优化公测体验，我们会酌情延长测试时长。",
    "PWA-installable from the browser. Designed desktop-first, mobile-optimised. Add it to your home screen and it runs full-screen.": "支持在浏览器安装网页应用，开发优先适配电脑端，同时优化移动端使用效果。添加到设备主屏幕就能全屏运行。",
    "Discord is the fastest path. Solo dev, passion project, no studio.": "想最快获取资讯请前往Discord社群；本作由单人开发者独立打造，纯粹热爱之作，没有商业工作室参与。",
    "Update now": "立即更新",
    "Update available": "更新可用",
    "Invalid username or password. Please check your credentials and remember that passwords are case-sensitive.": "用户名或密码无效。请检查您的登录信息，并注意密码区分大小写。",
    "Lv ": "等级 ",
    "Level": "等级",
    "Total": "总计",
    "Upgrade Cost": "升级成本",
    " | Lvl ": " | 等级 ",
    "Error": "错误",
    "Day ": "天 ",
    "Claim": "领取",
    "Units": "单位",
    "More": "更多",
    "Map": "地图",
    // ===== ExoSiege 第二批：人名（保持原文）=====
    "Aevix": "Aevix",
    "Allenone": "Allenone",
    "Berufius": "Berufius",
    "BreadTh": "BreadTh",
    "Coldea": "Coldea",
    "ExoSiege": "ExoSiege",
    "Jor-El": "Jor-El",
    "Krael": "Krael",
    "Manari": "Manari",
    "MegaDude": "MegaDude",
    "Minibuz": "Minibuz",
    "Mistereo": "Mistereo",
    "Neznano": "Neznano",
    "Riddix": "Riddix",
    "Rizzyan": "Rizzyan",
    "Skilledthis": "Skilledthis",
    "Spike": "Spike",
    "TC": "TC",
    "Teepix": "Teepix",
    "Vorek": "Vorek",
    "Wingnut": "Wingnut",
    "berufius": "berufius",
    "henri": "henri",
    "idlerunner00": "idlerunner00",
    "mo": "mo",
    "r/ExoSiege": "r/ExoSiege",
    "x1": "x1",
    "zackthorn": "zackthorn",
    "and": "与",
    // ===== UI / 菜单 =====
    " FREE": " 免费",
    "Abandon Territory": "放弃领地",
    "Change Email": "修改邮箱",
    "Change Password": "修改密码",
    "Change Username": "修改用户名",
    "Customize Player Card": "自定义玩家卡片",
    "Discord Bonus": "Discord奖励",
    "Feedback & Bug Reports": "反馈与Bug报告",
    "Invite Friends": "邀请好友",
    "Logout": "退出登录",
    "N/A": "无",
    "No territory selected": "未选择领地",
    "Push Notifications": "推送通知",
    "Rank:": "排名：",
    "Read Wiki": "阅读Wiki",
    "Redeem Code": "兑换码",
    "Rename Territory": "重命名领地",
    "Score:": "分数：",
    "Select Territory": "选择领地",
    "Vacation Mode": "休假模式",
    "Alliance": "联盟",
    "Army": "军队",
    "Buildings": "建筑",
    "Daily": "每日",
    "Empire": "帝国",
    "HoF": "名人堂",
    "Loading Your Empire...": "正在加载您的帝国……",
    "Loading your empire data...": "正在加载帝国数据……",
    "Main Content Area": "主内容区",
    "No active army movements": "无活跃的军队移动",
    "No active movements": "无活跃移动",
    "Quests": "任务",
    "Rank": "排名",
    "Research": "研究",
    "Select a territory to view queues": "选择一个领地以查看队列",
    "Origin": "起源",
    "Base:": "基地：",
    "Bookmarks": "书签",
    "Build to grow.": "建造以求发展。",
    "Building": "建筑",
    "Daily Reward": "每日奖励",
    "Defense": "防御",
    "Details": "详情",
    "Each colony builds from a short queue. Fill it and the work keeps running while you are away.": "每个殖民地通过简短的队列建造。填满队列后，即使你离开，建造工作也会持续进行。",
    "Fiber Harvester": "纤维采集器",
    "Loading Map Data...": "正在加载地图数据……",
    "Mind the queue.": "注意队列。",
    "Open the Build tab and raise your first Fiber Harvester. Every structure here is part machine, part planet.": "打开建造标签页，建造你的第一台纤维采集器。这里的每一座建筑，一半是机器，一半是行星的一部分。",
    "The Planet Provides": "行星的馈赠",
    "The ground hums beneath your equipment. Something pushes back when you dig. Build your first Fiber Harvester. The planet wants to see what you do with its skin.": "你的设备下，大地在低鸣。挖掘时，有某种力量在回推。建造第一台纤维采集器吧。行星想看看你会如何处置它的表皮。",
    "tutorial": "教程",
    "Acknowledge": "确认",
    "Notes": "备注",
    "Resource Data missing!": "资源数据丢失！",
    "SYSTEM": "系统",
    "The Planet Is Alive": "行星是活的",
    "You have landed on ExoSiege. The ground beneath you feels wrong, warm and breathing. Your instruments confirm what the legends always claimed": "你已降落在远征围攻之上。脚下的地面不对劲——温暖、有呼吸。你的仪器证实了传说一直声称的事实",
    "this is not soil, not rock. This is skin. The planet is no planet. It is a living thing. You knew there was no way back. The only direction is forward.": "这不是土壤，不是岩石。这是皮肤。这颗行星不是行星，它是一个活物。你知道已无回头路，唯一的方向是前进。",
    "Biome": "生物群系",
    "Click for details": "点击查看详情",
    "Loading details...": "正在加载详情……",
    "Nearby Bandit Camp": "附近的匪徒营地",
    "Steppe": "草原",
    "A small group of transformed squatters. They have been watching your colony since you landed.": "一小群转化者擅自占据此处。自你降落以来，他们一直在监视你的殖民地。",
    "Despawns in ": "消失倒计时 ",
    "Loot:": "战利品：",
    "Forgotten Cache": "遗忘缓存",
    "Reserved": "已保留",
    "Surface debris from a collapsed colony camp. The planet is pushing it upward. Clear it before it attracts scavengers.": "来自一处塌毁的殖民地营地的地表残骸。行星正将其向上推出。在它引来拾荒者之前将其清理。",
    "Weak": "弱小",
    "your": "你的",
    "Build a Research Institute to unlock": "建造研究所以解锁",
    " Missing:": " 缺失：",
    "Advanced processing": "高级加工",
    "Affordable only": "仅显示可负担",
    "All": "全部",
    "Allied coordination": "协同盟友",
    "An ancient relic structure that discharges precisely aimed electrical impulses into the ground. Over time the surging current bends the surrounding land toward a chosen biome.": "一座古老的遗物建筑，向地面释放精确瞄准的电脉冲。随着时间的推移，奔腾的电流将周围土地引向选定的生物群系。",
    "Basic processing": "基础加工",
    "Bio-directed salvage chamber, the defensive twin of the Bunker. Its slots are reserved for the most valuable defenses you lose in a battle, dragging your rarest and costliest installations out of the rubble. Saved defenses do not snap back instantly. They reform through a Rift Recovery movement, but faster than units (Repair Services research shortens it further). Defenses left over once the slots are full instead get a small free rebuild roll from Repair Services. Capacity scales per level.": "生物定向回收室，防御版的地堡。其槽位预留给战斗中损失的最宝贵防御设施，将你最稀有、最昂贵的装置从废墟中拖回。被救回的防御设施不会瞬间回归。它们通过裂隙回收移动重新形成，但比单位快（维修服务研究可进一步缩短时间）。槽位满后剩余的防御设施则可通过维修服务获得一次小额免费重建掷骰。容量随等级提升。",
    "Bio-forge nexus": "生物锻造核心",
    "Bioconversion chamber": "生物转化室",
    "Biohybrid docking structure grown to house foreign units. The planet tolerates them. Mostly.": "生物混合式停泊建筑，用于容纳外来单位。行星容忍它们的存在。大多数时候。",
    "Biomass cultivator": "生物质培养器",
    "Biomass recycler": "生物质回收器",
    "Bleachpans": "漂白浅滩",
    "Bone Choirs": "骨之合唱",
    "Breaks crystalline formations from the planetary crust. The planet produces them without logic, which keeps supply steady.": "从行星地壳中破碎结晶层。行星毫无逻辑地产出它们，因此供应稳定。",
    "Build (Lvl 1)": "建造（等级1）",
    "Build Speed": "建造速度",
    "Bunker": "地堡",
    "Burning Soil": "燃烧之土",
    "Carapace Forest": "甲壳森林",
    "Celutata": "塞鲁塔塔",
    "Chitin processor": "甲壳素处理器",
    "Collects volatile reactive dust from the planet's thermal vents under controlled conditions. 'Controlled' is relative when the vents shift without warning.": "在受控条件下从行星的热喷口收集挥发性活性粉尘。所谓'受控'是相对的——喷口毫无预警地移动时便另当别论。",
    "Colonization": "殖民",
    "Combat technologies": "战斗科技",
    "Concealed vault beneath the main storage grid. Raiders can't loot what they can't find.": "主存储网格下方的隐蔽宝库。掠夺者找不到的东西，自然无法抢走。",
    "Conduit manufactory": "导管制造厂",
    "Converts Fiber and Crystal into Biomass through advanced enzymatic processes. Consumes local Fiber and Crystal storage.": "通过先进的酶促过程将纤维和水晶转化为生物质。消耗本地的纤维和水晶储备。",
    "Coordinates a swarm of advanced nanites that drastically accelerates structure, unit, and defense construction. Half the swarm is synthetic. The other half grew on its own.": "协调一群先进纳米机器人，极大加速建筑、单位和防御设施的建造速度。一半蜂群是合成的，另一半是自己长出来的。",
    "Crystal extractor": "水晶提取器",
    "Cultivates crystals that resonate with the planet's psychic field. Workers report headaches, strange dreams, and occasionally useful premonitions.": "培育与行星灵能场共振的水晶。工人报告称有头痛、奇怪的梦境，偶尔还有有用的预兆。",
    "Deep-bored shelter lined with ossian plating. Bunker slots are reserved for the most valuable losses first. Your rarest and costliest units are the ones dragged back alive when the surface goes wrong. Units that can self-regenerate (Regenerative capability) are not eligible. They rely on their own regeneration roll instead and never take a bunker slot. Saved units don't snap back to the territory the instant combat ends. They ride a Rift Recovery movement back home over 2-24 hours, scaled by their total resource value. The recovery can be cancelled at any time (the units are then forfeit), useful when the rescue is blocking a relocation or an outbound dispatch.": "深钻掩体，内衬骨石板。地堡槽位优先保留给最有价值的损失——当地表出了差错时，你最稀有、最昂贵的单位是拖回来的活口。能自我再生的单位（再生能力）不符合条件，它们依赖自身的再生掷骰，从不占用槽位。被救回的单位不会在战斗结束瞬间回到领地，而是通过裂隙回收移动在2-24小时内返回，时长按其总资源价值缩放。可随时取消回收（单位将被放弃），这在救援阻碍搬迁或出发时很有用。",
    "Dimensional compression": "维度压缩",
    "Drift Hollows": "漂流洞穴",
    "Drone hive": "无人机巢",
    "Emergency preparation": "紧急准备",
    "Exotic processing": "异质加工",
    "Extracts exotic heavy metals from the planet's core-adjacent layers. The material's properties don't fully obey known physics.": "从行星核心邻近层提取异质重金属。该材料的性质不完全遵循已知物理学。",
    "Fabrication yard for defensive hardware. Colony engineers work here with equal parts welding torches and improvisation.": "防御硬件的制造场。殖民地工程师在这里工作的方式，一半是焊枪，一半是临场发挥。",
    "Ferrite synthesizer": "磁铁矿合成器",
    "Fiber harvester": "纤维采集器",
    "Field lab where transformed researchers reverse-engineer whatever the planet sends up. Higher levels mean more containment bays. Each level shaves a sliver off every technology's resource cost. Tiny per level, real when stacked across every territory you hold.": "转化研究员逆向工程行星送上来的一切东西的野地实验室。等级越高，容纳舱越多。每级可削减每项科技少量资源成本。单级微不足道，但叠加到你持有的每一个领地时效果显著。",
    "Floating Gardens": "浮空花园",
    "Glass Desert": "玻璃沙漠",
    "Grows computing crystals in conditions replicating the planet's neural substrate. The lattices are closer to brains than minerals.": "在模拟行星神经基底的环境中培育计算水晶。这些晶格更像是大脑而非矿物。",
    "Grows refined crystalline focus shards in pressurized chambers mimicking the planet's deeper tissue. Used for optics, targeting arrays, and energy weapons.": "在模拟行星深层组织的高压舱中培育精炼水晶聚焦碎片。用于光学、瞄准阵列和能量武器。",
    "Harvests naturally occurring conductive pathways from the planet's interior. Intact conduits carry energy without resistance, which makes extraction worth the effort.": "从行星内部采集自然生成的导电路径。完整导管能以零阻力传输能量，因此采集值得付出努力。",
    "Harvests organic mass from the planet's surface tissue. The deeper you cut, the faster it grows back.": "从行星表面组织获取有机质。切得越深，长回越快。",
    "Harvests radioactive material from the planet's deepest accessible strata and stabilizes it for use. Extraction at this depth is like pulling nerves from a living body.": "从行星可触及的最深层采集放射性物质并稳定化以供使用。在这个深度提取，就像是拉扯活体的神经。",
    "Hidden sanctum": "隐秘圣所",
    "Iron Hush": "铁寂之地",
    "Isotope stabilizer": "同位素稳定器",
    "Lattice crucible": "晶格坩埚",
    "Locked": "已锁定",
    "Megastructure that commands and deploys a forward outpost. Constructing this automatically spawns an outpost on an empty adjacent position. Only one can be built per territory.": "可指挥并部署前进哨站的巨构。建造此建筑后会在相邻空地自动生成一个哨站。每个领地只能建造一个。",
    "Mines fossilized bone-like deposits from beneath the surface. The deeper layers are denser, older, and occasionally still warm.": "从地表下开采化石化的骨状沉积物。越深的层次越致密、越古老，偶尔仍然是温热的。",
    "Mist Sea": "雾海",
    "Mushroom Canyon": "蘑菇峡谷",
    "Nanite swarm": "纳米蜂群",
    "Open-air training ground. Recruits learn to fight things that do not follow known biology. Each level shortens the time it takes them to stop screaming and start moving in formation.": "露天训练场。新兵在此学习与不遵循已知生物学的存在作战。每升一级都会缩短他们停止尖叫并开始列队行进所需的时间。",
    "Opens a stable micro-rift connecting this territory to the player's interdimensional Rift Vault. Required for accessing the global resource pool.": "打开一个稳定的微型裂隙，将此领地连接到玩家的跨维度裂隙宝库。为访问全局资源池所必需。",
    "Ossian workshop": "骨石工坊",
    "Outpost": "前哨站",
    "Outpost control center": "前哨指挥中心",
    "Outpost engineering": "前哨工程",
    "Processes chitin shed by the planet's creatures into armor plating and structural components. Supply depends on local fauna density.": "将行星生物蜕下的甲壳素加工为装甲板和结构部件。供应量取决于当地生物密度。",
    "Produces": "产出",
    "Produces construction drones that accelerate structure, unit, and defense construction. The drones learn from the planet's own repair mechanisms.": "生产建筑无人机，加速建筑、单位和防御设施的建造。无人机从行星自身的修复机制中学习。",
    "Production": "生产",
    "Psi-gem resonator": "灵能宝石谐振器",
    "Psi-shielded subterranean warren where non-combat utility units slip below detection when attackers arrive. Protected units are pulled out of the battle entirely. They neither fight nor take losses. Infiltrator units are not affected by the sanctum.": "灵能屏障保护的地下迷宫，攻击者到来时非战斗功能单位在探测下消失。受保护的单位完全脱离战斗，既不作战也不会损失。渗透者单位不受圣所影响。",
    "Pulls metallic dust from the planet's vascular channels using magnetic extraction arrays. The channels refill, but not always with the same composition.": "使用磁力提取阵列从行星的脉管通道中抽取金属粉尘。通道会重新充盈，但成分未必相同。",
    "Rare processing": "稀有加工",
    "Recycles organic waste from stationed units and defenses, reducing their biomass consumption by 2% per level. Maximum reduction": "回收驻军单位和防御设施的有机废料，每级减少其生物质消耗2%。最大削减",
    "Refined processing": "精炼加工",
    "Reinforced storage chambers dug into the planet's crust. Each level carves deeper, but the walls keep growing back.": "挖入行星地壳的强化储藏室。每级挖得更深，但墙壁会不断长回来。",
    "Repair services": "维修服务",
    "Repair station": "维修站",
    "Research institute": "研究所",
    "Resin syphon": "树脂汲取器",
    "Rift Sinks": "裂隙沉坑",
    "Rift Vault": "裂隙宝库",
    "Rift conduit": "裂隙导管",
    "Riftlands": "裂隙之地",
    "Sapglass Tides": "树液玻璃潮汐",
    "Shadowgrass": "暗影草",
    "Shiftmire": "变幻泥沼",
    "Show all": "显示全部",
    "Smolderbloom": "阴燃之花",
    "Sparkdust reactor": "火花尘反应器",
    "Storage": "存储",
    "Storm Fields": "风暴原野",
    "Strips fibrous material from the planet's outer layers. The machinery gets partially organic after a few weeks.": "从行星外层剥离纤维物质。几周后机械部分会半有机化。",
    "Synthesizes alien alloys from the planet's deep metabolic residue mixed with galactic debris. Stronger than anything colony forges can produce alone.": "从行星深处的代谢残渣与银河碎屑的混合物中合成外星合金。比殖民地熔炉能单独生产的任何东西都更强。",
    "Taps viscous secretions from the planet's pores and hardens them into structural adhesive. The extraction points keep reopening on their own.": "从行星孔隙中抽取粘稠分泌物并硬化为结构黏合剂。提取点会自行反复重新开启。",
    "Training camp": "训练营",
    "Underground silo": "地下储藏室",
    "Unlocked only": "仅显示已解锁",
    "Vinecrack Mires": "藤裂沼泽",
    "Vitrium forge": "琉璃质熔炉",
    "Voidium synthesizer": "虚空素合成器",
    "Vortex Vales": "漩涡山谷",
    "Warehouse": "仓库",
    "Workshop": "工坊",
    "World Shaping": "世界塑造",
    "X-alloy fabricator": "异合金制造器",
    // ===== 研究 / 科技 / 任务 =====
    "Tier Locked": "层级锁定",
    "Build a Training Camp or Workshop to unlock": "建造训练营或工坊以解锁",
    "Build Time": "建造时间",
    "Crystal/hr": "水晶/时",
    "Effect / Production": "效果/产出",
    "Fiber/hr": "纤维/时",
    "Enables unit recruitment and training": "启用单位招募和训练",
    "Alliance management and allied unit stationing": "联盟管理与盟友单位驻扎",
    "Local": "本地",
    "Research Colonization to unlock": "研究殖民科技以解锁",
    "A Grubjack told me the stars are wrong tonight. I do not look up anymore.": "一只格鲁布杰克告诉我今晚的星星不对劲。我再也不抬头看了。",
    // ===== 通知 / 每日奖励 / 任务日志 =====
    "Win two battles to unlock": "赢得两场战斗以解锁",
    "Win your first battle to unlock": "赢得首场战斗以解锁",
    "Hover here and scroll your mouse wheel to cycle through your active territories.": "将鼠标悬停于此并滚动滚轮以循环切换您的活跃领地。",
    "Quick-switch territories": "快速切换领地",
    "Territories": "领地",
    "Go to Fiber Harvester": "前往纤维采集器",
    "Open Daily Rewards": "打开每日奖励",
    "+ Bonus Roll included": "+ 含奖励掷骰",
    "Claim & Roll": "领取并掷骰",
    "Cycle": "周期",
    "Daily Rewards": "每日奖励",
    "Day": "天",
    "Grubjack": "格鲁布杰克",
    "Multiplier": "倍率",
    "Streak": "连续天数",
    "Today's Reward": "今日奖励",
    "Analyzing bonus signal...": "正在分析奖励信号……",
    "Bonus Roll": "奖励掷骰",
    "Close": "关闭",
    "Next": "下一个",
    "Reward Received": "奖励已领取",
    "Bonus T2 Unit": "奖励T2单位",
    "Spoolhand": "线轴手",
    "Open Quest Log": "打开任务日志",
    "Done in": "完成于",
    "Queues": "队列",
    "Starts in": "开始于",
    "Upgrade (Lvl 2)": "升级（等级2）",
    "Activity": "活动",
    "All messages →": "全部消息 →",
    "Briefing": "简报",
    "Read all": "全部已读",
    "System": "系统",
    "View unread →": "查看未读 →",
    " Back": " 返回",
    " Bonus Roll": " 奖励掷骰",
    " Daily Reward": " 每日奖励",
    " day streak": "天连续",
    " · Streak ": " · 连续天数 ",
    "All caught up!": "全部已阅！",
    "Combat": "战斗",
    "Daily Reward Claimed": "每日奖励已领取",
    "Exploration": "探索",
    "Governance": "治理",
    "Invitations": "邀请",
    "Movement": "移动",
    "No notifications to display.": "没有可显示的通知。",
    "Notifications Center": "通知中心",
    "Salvage": "回收",
    "Spying": "间谍",
    "Trade": "贸易",
    "Unread": "未读",
    "World Events": "世界事件",
    "/hr fuel consumption": "/时 燃料消耗",
    "Construct": "建造",
    "Cost": "成本",
    "Psionic": "灵能",
    "Quantity": "数量",
    "Stats": "属性",
    "Swarm": "蜂群",
    "The planet grows them in days. Most ExoSieger first armies are mostly Grubjacks.": "行星数天内即可培育它们。大多数远征围攻者的第一支军队主要是格鲁布杰克。",
    "strong vs": "克制",
    "weak vs": "被克",
    "Notification Settings": "通知设置",
    "Delete read notifications": "删除已读通知",
    "Mark all as read": "全部标为已读",
    "Done": "完成",
    "Finished": "已完成",
    "Reward for \"The Planet Provides\" is ready to claim!": "任务\"行星的馈赠\"的奖励可领取！",
    "No outpost notifications here.": "这里没有前哨通知。",
    "No governance notifications here.": "这里没有治理通知。",
    "No megastructure notifications here.": "这里没有巨构通知。",
    "No world events notifications here.": "这里没有世界事件通知。",
    " to navigate.": " 进行导航。",
    "Click an item or use ": "点击一个条目或使用 ",
    "Quest Ready to Claim": "任务可领取",
    "Select a notification": "选择一条通知",
    "Claim Reward": "领取奖励",
    "Construction": "建造",
    "Frenbait": "诱饵怪",
    "Minor": "次级",
    "Needlekin": "针族",
    "1min": "1分钟",
    "OK": "确定",
    "Rewards": "奖励",
    "Rewards Claimed": "奖励已领取",
    "Rift Spirits": "裂隙之灵",
    "Bend Time": "扭曲时间",
    "Off-world timers are brutal down here. Fill your build queue, then spend a Rift Impulse to collapse the wait. Open the queue, tap the Impulse, and watch the clock fold. Tier 1 skips a minute, higher tiers skip more.": "离世界的倒计时在这里很残酷。填满建造队列，然后使用裂隙脉冲来缩短等待。打开队列，点击脉冲，看着时钟折叠。T1跳一分钟，更高等级跳更多。",
    "Put an upgrade in your build queue, then open the Impulse picker.": "将升级放入建造队列，然后打开脉冲选择器。",
    "Queue first.": "先排入队列。",
    "Skip the wait.": "跳过等待。",
    "Spend an Impulse to shave time off whatever is building. Early timers are slow, so learning this now keeps your colony moving.": "使用脉冲来缩短正在建造的时间。早期计时器很慢，现在学会这个可以让你的殖民地持续运转。",
    "Use a Rift Impulse to skip a queue": "使用裂隙脉冲跳过队列",
    "Go to Use a Rift Impulse to skip a queue": "前往使用裂隙脉冲跳过队列",
    "Cancel": "取消",
    "Greater": "高级",
    "Impulses": "脉冲",
    "Loading Structures...": "加载结构中...",
    "(Lvl ": "(等级 ",
    "Items": "物品",
    "Pick impulses to activate": "选择要激活的脉冲",
    "Pick manually": "手动选择",
    "Queue is empty. Nothing to accelerate.": "队列为空，无内容可加速。",
    "Speed up Construction": "加速建造",
    "Supreme": "至高",
    "Total time": "总时间",
    "Clear": "清除",
    "Increases resource storage capacity": "增加资源存储容量",
    "Updating": "更新中",
    "Loading the latest build.": "加载最新版本。",
    // ===== 带变量的模板（cnItems）=====
    "{{0}} unread notifications": "{{0}}条未读通知",
    "{{0}} notification": "{{0}}条通知",
    "Welcome, {{0}}! Your account has been created.": "欢迎，{{0}}！您的账号已创建。",
    "Guest_{{0}}": "游客_{{0}}",
    "{{0}} units total": "共 {{0}} 个单位",
    "(Lvl {{0}}": "（等级 {{0}}",
    "{{0}} ago": "{{0}}前",
    "{{0}}s ago": "{{0}}秒前",
    "{{0}}d {{1}}h": "{{0}}天 {{1}}时",
    "{{0}}d {{1}}h {{2}}m {{3}}s": "{{0}}天 {{1}}时 {{2}}分 {{3}}秒",
    "{{0}}h {{1}}m {{2}}s": "{{0}}时 {{1}}分 {{2}}秒",
    "{{0}}h {{1}}m": "{{0}}时 {{1}}分",
    "{{0}}m {{1}}s": "{{0}}分 {{1}}秒",
    "{{0}}m 0s": "{{0}}分 0秒",
    "Day {{0}}": "第{{0}}天",
    "Day {{0}} - Cycle {{1}}": "第{{0}}天 - 周期{{1}}",
    "Cycle {{0}}": "周期{{0}}",
    "Streak: {{0}}": "连续天数：{{0}}",
    "{{0}} day streak": "连续{{0}}天",
    "Activate {{0}} impulses": "激活 {{0}} 个脉冲",
    "Activate {{0}} impulse": "激活 {{0}} 个脉冲",
    "Construction of {{0}} complete! ({{1}})": "{{0}}建造完成！（{{1}}）",
    " Origin ({{0}})": " 起源（{{0}}）",
    " Origin ({{0}}:{{1}}:{{2}})": " 起源（{{0}}:{{1}}:{{2}}）",
    "{{0}} of skip will be wasted. The queue will finish before all impulses are consumed.": "{{0}}的跳过将被浪费。队列将在所有脉冲消耗完毕前完成。",
    "Own any 3 of 5 Tier IV building types ({{0}}/3)": "拥有5种IV级建筑中的任意3种（{{0}}/3）",
    "Own any 3 of 6 Tier I building types ({{0}}/3)": "拥有6种I级建筑中的任意3种（{{0}}/3）",
    "Own any 4 of 7 Tier II building types ({{0}}/4)": "拥有7种II级建筑中的任意4种（{{0}}/4）",
    "Own any 4 of 8 Tier III building types ({{0}}/4)": "拥有8种III级建筑中的任意4种（{{0}}/4）",
    "{{0}} owned": "拥有 {{0}}",
    // ===== ExoSiege 第三批：单位/战斗/派遣 =====
    "Ability": "能力",
    "Attack": "攻击",
    "Biomass:": "生物质：",
    "Bioshield": "生物护盾",
    "Cargo:": "货物：",
    "Collect": "收集",
    "Combat Stats": "战斗属性",
    "Dispatch": "派遣",
    "ETA:": "预计到达：",
    "Gather": "采集",
    "Health": "生命值",
    "Max": "最大",
    "Puller": "牵引者",
    "Resources": "资源",
    "Send Army": "派遣军队",
    "Speed:": "速度：",
    "Taunt": "嘲讽",
    "Transport": "运输",
    "Type": "类型",
    "Capabilities": "能力",
    "Primitive taunt. A relatively weak fighter that sadly is not aware of its own weaknesses and is often seen as disposable bait.": "原始嘲讽。相对弱小的战士，可惜它不知道自己的弱点，常被视为一次性诱饵。",
    "Shifter": "变形者",
    "Weak in combat but extremely fast. Boosts army speed by 50% if fielded in equal numbers.": "战斗力弱但速度极快。等量部署时提升军队速度50%。",
    "Murderous against unarmored targets, less so against anything that brought a shell.": "对无甲目标致命，对有壳目标则效果平平。",
    "Psi-gem": "灵能宝石",
    "Available": "可用",
    "Base total": "基础总计",
    "Combined armor rating. Reduces incoming damage during combat.": "综合护甲等级。战斗中减免来袭伤害。",
    "Effective total": "有效总计",
    "Cargo Capacity": "货物容量",
    "Total cargo capacity of all selected units. Determines how many resources your army can carry.": "所有选中单位的总货物容量。决定军队可携带的资源数量。",
    "Army Speed": "军队速度",
    "Base speed": "基础速度",
    "Determined by the slowest unit in the army.": "由军队中最慢的单位决定。",
    "Effective speed": "有效速度",
    "Combined attack power of all selected units. Determines damage dealt in combat.": "所有选中单位的综合攻击力。决定战斗中造成的伤害。",
    "Estimated biomass consumption for the trip": "行程预计生物质消耗",
    "Colonize": "殖民",
    "Explore": "探索",
    "Spy": "侦察",
    "Station": "驻扎",
    "Total hit points of all selected units. Units are destroyed when their health reaches zero.": "所有选中单位的总生命值。单位生命值归零时即被摧毁。",
    "Estimated travel time": "预计行程时间",
    "Regenerative shield layer. Absorbs damage before health is affected and regenerates between combat rounds.": "再生护盾层。在生命值受损前吸收伤害，并在战斗轮次间再生。",
    "Initiate Gathering (": "发起采集（",
    "Max All Units": "最大化所有单位",
    "No other territories with movable units available.": "没有其他领地有可移动单位。",
    "Target for Gathering:": "采集目标：",
    "All Resources:": "所有资源：",
    "Global:": "全局：",
    "Initiate Collection (": "发起回收（",
    "No other territories with transport units found.": "未找到其他领地有运输单位。",
    "Send transport armies from your other territories to deliver resources here.": "从你的其他领地派遣运输部队，将资源运送至此。",
    "Target for Collection:": "回收目标：",
    "Reset all selections": "重置所有选择",
    "Collapse sidebar": "收起侧边栏",
    "Expand sidebar": "展开侧边栏",
    "Armies": "军队",
    "Army Slots": "军队槽位",
    "Support Ops": "支援行动",
    "24 Hours": "24小时",
    "7 Days": "7天",
    "Base Capacity": "基础容量",
    "Net per Hour": "净时产",
    "Production / Hour": "产出 / 小时",
    "Still vibrating when we pulled it out.": "我们拔出来时它还在震动。",
    "Stock": "库存",
    "Territory": "领地",
    "Total Capacity": "总容量",
    "Biome Bonus": "生物群系加成",
    "Upkeep": "维护",
    "Warm. Pulsing. Tastes like jell-o. Try not to think about it.": "温热。有脉搏。尝起来像果冻。别多想。",
    // ===== 治理/选举 =====
    " Elections": " 选举",
    "Candidacy": "候选人资格",
    "District": "区",
    "7dbed8cc": "7dbed8cc",
    "Coords": "坐标",
    "Newbie Shield": "新人护盾",
    "Protection": "保护",
    "Add Bookmark": "添加书签",
    "No bookmarks yet": "暂无书签",
    " POIs": " 兴趣点",
    " tiles": " 地块",
    "Filter": "筛选",
    "Min Qty": "最小数量",
    "Nearby": "附近",
    "Range": "范围",
    "Region": "区域",
    "Support Services": "支援服务",
    "Wreckage total": "残骸总计",
    // ===== 地图图例/NPC/地点 =====
    "+15% defense for your territories": "为你所有领地提供+15%防御",
    "Battle debris. Salvage before it despawns.": "战斗残骸。在消失前回收。",
    "By Resource": "按资源",
    "By Tier": "按层级",
    "By Type": "按类型",
    "Collapsed colony remains. Salvage for resources.": "塌毁的殖民地遗迹。回收获取资源。",
    "Creatures held by territorial tribes. Pay tribute for release.": "被领地部落关押的生物。支付贡品即可释放。",
    "Deep-transformed conquerors. Destroy camps to unlock Fort raid.": "深度转化的征服者。摧毁营地即可解锁要塞突袭。",
    "Defense Buff": "防御加成",
    "District, Regional & Planetary tiles.": "区级、区域及行星级地块。",
    "Governance Tiles": "治理地块",
    "Hourly resource rewards": "每小时资源奖励",
    "Payout in units instead of resources": "以单位而非资源支付",
    "Planetary spore blooms and Lithocyte. Harvest and deliver resources.": "行星孢子绽放和岩石细胞。采集并运送资源。",
    "Resource Payout": "资源支付",
    "Reward Type": "奖励类型",
    "Scientist": "科学家",
    "Toxic Mine event. Transformed researchers and Hidden Lab.": "毒矿事件。转化研究员和隐秘实验室。",
    "Transformed ExoSiegers hoarding resources. Raids nearby territories.": "囤积资源的转化远征围攻者。会袭击附近领地。",
    "Transformed factions that cooperate for military presence.": "为军事存在而合作的转化派系。",
    "Transformed traders exchanging resources at fixed rates.": "按固定汇率交易资源的转化商人。",
    "Unit Payout": "单位支付",
    "Wreckage Field": "残骸场",
    "Allied Outpost": "同盟前哨",
    "Allied Territory": "同盟领地",
    "An alliance member's outpost.": "同盟成员的前哨。",
    "Ancient structure. Salvage it for one-time rewards. Some are guarded.": "远古建筑。回收可获得一次性奖励。部分有守卫。",
    "Another player's outpost. Can be raided.": "其他玩家的前哨。可被袭击。",
    "Combat debris. Send a Salvage army to recover resources.": "战斗残骸。派遣回收部队获取资源。",
    "Corebloom & Lithocyte": "核芯绽放与岩石细胞",
    "District Council": "区议会",
    "Empty and uncolonized. Send a Colonize mission to claim it.": "空置未殖民。派遣殖民任务占领。",
    "Enemy Outpost": "敌方前哨",
    "Enemy Territory": "敌方领地",
    "Hostile NPC base. Higher tiers raid nearby player territories.": "敌对NPC基地。更高等级会袭击附近玩家领地。",
    "Legend": "图例",
    "Locations & NPCs": "地点与NPC",
    "Movements": "移动",
    "Neutral merchant. Buy or sell resources and units.": "中立商人。买卖资源和单位。",
    "Outposts": "前哨站",
    "Owned by an alliance member. Shared defense applies.": "由同盟成员拥有。共享防御适用。",
    "Owned by another player. Can be attacked.": "由其他玩家拥有。可被攻击。",
    "Owned by you. Contains buildings, units & resources.": "由你拥有。包含建筑、单位和资源。",
    "Planet-wide governance tile. Highest authority with global effects.": "行星级治理地块。最高权威，具有全局效果。",
    "Planetary Council": "行星议会",
    "Regional Council": "区域议会",
    "Regional governance tile. Affects all sub-regions within the region.": "区域级治理地块。影响该区域内所有子区域。",
    "Rescue mission target. Pay tribute to receive units.": "救援任务目标。支付贡品接收单位。",
    "Rogue scientist linked to the Toxic Facility world event.": "与毒设施世界事件关联的叛逃科学家。",
    "Station units here for hourly resource rewards.": "在此驻扎单位以获取每小时资源奖励。",
    "Sub-regional governance tile. Officer can activate local effects.": "子区域治理地块。官员可激活本地效果。",
    "Unclaimed Position": "未占领位置",
    "Warmonger (Camp & Fort)": "战争贩子（营地与要塞）",
    "World event NPCs. Destroy camps to unlock the Fort raid.": "世界事件NPC。摧毁营地以解锁要塞突袭。",
    "World event NPCs. Salvage Coreblooms, deliver resources to the Lithocyte.": "世界事件NPC。回收核芯绽放，向岩石细胞运送资源。",
    "Your Outpost": "你的前哨",
    "Your Territory": "你的领地",
    "Your mobile base. Dashed green border. Can be relocated.": "你的移动基地。绿色虚线边框。可重新选址。",
    // ===== 移动/军队状态描述 =====
    "A bandit camp raiding one of your territories.": "一个匪徒营地正在袭击你的某个领地。",
    "A bandit camp raiding your outpost.": "一个匪徒营地正在袭击你的前哨。",
    "A coordinated multi-player attack targeting you.": "一次针对你的多人协同攻击。",
    "A hostile player army approaching your territory.": "一支敌方玩家军队正在靠近你的领地。",
    "A non-allied army moving on the map (not targeting you).": "一支非同盟军队在地图上移动（未以你为目标）。",
    "Allied Movement": "同盟移动",
    "Allied Stationed": "同盟驻扎",
    "An allied army in transit. Color is based on the player.": "一支行进中的同盟军队。颜色基于所属玩家。",
    "An allied army permanently stationed at your territory.": "一支永久驻扎在你领地的同盟军队。",
    "Army collecting resources from wreckage or ruins.": "军队正在从残骸或废墟收集资源。",
    "Army heading back to its origin after completing a mission.": "军队完成任务后返回出发地。",
    "Army is actively exploring a location. Sits at the target until the event resolves.": "军队正在积极探索某地点。驻留在目标处直至事件解决。",
    "Bandit Raid (Outpost)": "匪徒袭击（前哨）",
    "Bandit Raid (Territory)": "匪徒袭击（领地）",
    "Claiming an empty position as a new territory.": "占领空地作为新领地。",
    "Covert intel-gathering on an enemy territory, outpost, or NPC.": "对敌方领地、前哨或NPC进行秘密情报收集。",
    "Deploying units to your own or allied territory, outpost, support NPC, or raid target.": "将单位部署到己方或同盟领地、前哨、支援NPC或突袭目标。",
    "Enemy Multi-Party Attack": "敌方多方联合攻击",
    "Exploring (Active)": "探索中（活跃）",
    "Incoming Attack": "来袭攻击",
    "Moving resources or units to your territories, outposts, NPC Traders, or Hostages.": "将资源或单位运至你的领地、前哨、NPC商人或人质。",
    "Multi-Party Attack (Join)": "多方联合攻击（加入）",
    "Multi-Party Attack (Lead)": "多方联合攻击（主导）",
    "Other Player Movement": "其他玩家移动",
    "Outpost Relocation": "前哨迁移",
    "Returning": "返回中",
    "Scouting an open position for randomized discoveries.": "侦察空地以获取随机发现。",
    "Special States": "特殊状态",
    "Threats & Others": "威胁与其他",
    "You initiated a coordinated attack with allies.": "你发起了与同盟的协同攻击。",
    "You joined an allied coordinated attack.": "你加入了同盟的协同攻击。",
    "Your Armies": "你的军队",
    "Your army assaulting an enemy territory, outpost, or NPC.": "你的军队正在攻击敌方领地、前哨或NPC。",
    "Your outpost is moving to a new location. Dashed pink line with progress.": "你的前哨正在迁往新位置。粉色虚线显示进度。",
    // ===== Wiki 导航 =====
    "Alliance objective, rift generator, wipe trigger": "同盟目标、裂隙生成器、清除触发器",
    "Attack, transport, station, and more": "攻击、运输、驻扎等",
    "Biomes": "生物群系",
    "Build": "建造",
    "Build queue, cost scaling, building catalog": "建造队列、成本扩展、建筑目录",
    "Channels, rules, reporting, moderation": "频道、规则、举报、管理",
    "Chat": "聊天",
    "Clans, roles, member slots, cooperation": "军团、角色、成员槽位、合作",
    "Combat & Units": "战斗与单位",
    "Discovery events, intel, army strength": "发现事件、情报、军队实力",
    "Economy": "经济",
    "Elections, officers, edicts, treasury": "选举、官员、法令、金库",
    "Espionage & Counter-Intel": "间谍与反情报",
    "Exploration & Intel": "探索与情报",
    "Game Wiki": "游戏Wiki",
    "Getting Started": "入门指南",
    "How battles work": "战斗机制",
    "Impulses, Support Forces, Hostile Forces": "脉冲、支援部队、敌对部队",
    "Login streaks, cycles, multipliers": "登录连续天数、周期、倍率",
    "Map Basics": "地图基础",
    "Map, territories, protection, alliances": "地图、领地、保护、同盟",
    "Megastructures": "巨构",
    "Military": "军事",
    "Missions & Movements": "任务与移动",
    "Mobile bases, relocation, buildings": "移动基地、迁址、建筑",
    "NPCs & Events": "NPC与事件",
    "NPCs & Locations": "NPC与地点",
    "New here? Start with": "新来的？从这开始",
    "Newbie shield, relocation, vacation mode, inactivity": "新人护盾、迁址、休假模式、不活跃",
    "Permanent meta-progression, upgrades, titles": "永久元进展、升级、称号",
    "Prestige & Wipe": "名望与清除",
    "Ranking & Scoring": "排名与计分",
    "Scientists, warmongers, cleanup raids, modifiers": "科学家、战争贩子、清理突袭、修正",
    "Score categories, formula, alliance rankings": "分数类别、公式、同盟排名",
    "Society": "社会",
    "Spy missions, detection, tech unlocks": "侦察任务、探测、科技解锁",
    "Tech tree, cost scaling, categories": "科技树、成本扩展、类别",
    "Terrain types, effects, shifts, the full catalog": "地形类型、效果、变化、完整目录",
    "Tiers, production, storage, Rift Vault": "层级、生产、存储、裂隙宝库",
    "Traders, bandits, ruins, hostages, support, traits": "商人、匪徒、废墟、人质、支援、特质",
    "Tutorial quests, objectives, rewards": "教程任务、目标、奖励",
    "Units & Defenses": "单位与防御",
    "What to recruit, stats, upkeep, the catalog": "招募建议、属性、维护、完整目录",
    "archetypes, damage, recovery": "原型、伤害、恢复",
    "topic": "主题",
    "topics": "主题",
    // ===== 经济/资源详细描述（Wiki内容）=====
    " (territory or outpost where the action takes place) is used first": "（行动发生的领地或前哨）优先使用",
    " across all your territories. When a territory doesn't have enough local resources for construction, research, or unit production, the system automatically pulls the deficit from your Rift Vault.": "横跨你的所有领地。当领地没有足够的本地资源用于建造、研究或单位生产时，系统会自动从裂隙宝库中提取差额。",
    " building increases storage capacity for all resource tiers per territory:": " 建筑可增加每个领地所有资源层级的存储容量：",
    " capacity per resource type.": " 每种资源类型的容量。",
    " provides the remaining amount (requires a Rift Conduit at the location)": " 提供剩余部分（需在位置建有裂隙导管）",
    " structure.": " 建筑。",
    " technology. Each level increases the Rift Vault's per-resource capacity.": " 科技。每级增加裂隙宝库每种资源的容量。",
    "(factor ^ (N - 1))": "（系数 ^ (N - 1)）",
    "+10% to +20%": "+10% 至 +20%",
    "+5% per level": "每级 +5%",
    ". Its output at level 1 is the base, and every extra level multiplies that output by the tier's factor, so a higher-level building produces far more than its level 1 base.": "。其1级产量为基准，每额外升一级都将该产量乘以该层级的系数，因此高级建筑产量远超其1级基准。",
    "0/hour": "0/时",
    "1 Base Production": "1 基础产量",
    "1 Storage": "1 存储",
    "1 output and per-level scaling factor for each tier's producer buildings.": "1 产量和每个层级生产建筑的每级缩放系数。",
    "100 / Lvl / tick": "100 / 级 / 周期",
    "12,000 each": "各12,000",
    "15,000 each": "各15,000",
    "152/hour at Lvl 1": "等级1时 152/时",
    "182/hour at Lvl 1": "等级1时 182/时",
    "2 Storage": "2 存储",
    "2-5 Base Production": "2-5 基础产量",
    "200/hour each": "各 200/时",
    "218/hour at Lvl 1": "等级1时 218/时",
    "261/hour at Lvl 1": "等级1时 261/时",
    "3 Storage": "3 存储",
    "3,000 each": "各3,000",
    "303/hour at Lvl 1": "等级1时 303/时",
    "4 Storage": "4 存储",
    "4,500 each": "各4,500",
    "5 Storage": "5 存储",
    "7,500 each": "各7,500",
    "At a glance": "概览",
    "Base Production & Storage": "基础产量与存储",
    "Base Storage": "基础存储",
    "Basic resources. Produced by starting buildings.": "基础资源。由起始建筑生产。",
    "Build and upgrade the matching producer building to grow output, and Warehouses to raise storage.": "建造并升级对应的生产建筑以提高产量，升级仓库以增加存储。",
    "Capacity per Level": "每级容量",
    "Capacity scaling: ": "容量缩放：",
    "Dimensional Compression Lvl": "维度压缩 等级",
    "Each level multiplies the previous level's output by the tier factor, and each level also costs more to build. T2-T5 producers require the corresponding Resource Processing technology to unlock. Exact level 1 bases and factors are in Reference": "每级将上一级产量乘以该层级系数，且每级建造成本递增。T2-T5生产建筑需要对应的资源加工科技解锁。精确的1级基准和系数详见参考",
    "Each resource has a dedicated ": "每种资源都有专属的 ",
    "Every 20 min": "每20分钟",
    "Everything you harvest was alive recently": "你采集的一切不久前都还活着",
    "Example": "示例",
    "Exotic. The rarest and most valuable resources.": "异质。最稀有最有价值的资源。",
    "Ferrite Synthesizer, Conduit Manufactory, Psi-Gem Resonator (x1.14 output per level)": "磁铁矿合成器、导管制造厂、灵能宝石谐振器（每级 x1.14 产量）",
    "Fiber Harvester, Crystal Extractor, Biomass Cultivator (x1.18 output per level)": "纤维采集器、水晶提取器、生物质培养器（每级 x1.18 产量）",
    "Fill Interval": "填充间隔",
    "Fill Rate": "填充率",
    "First move": "第一步",
    "Governance Edict": "治理法令",
    "How Production Works": "生产机制",
    "If insufficient, the ": "若不足，",
    "If total (local + vault) is insufficient, the action fails": "若总计（本地+宝库）不足，操作失败",
    "Industrial grade. Needed for advanced structures.": "工业级。用于高级建筑。",
    "Lattice Crucible, Voidium Synthesizer, Isotope Stabilizer (x1.13 output per level)": "晶格坩埚、虚空素合成器、同位素稳定器（每级 x1.13 产量）",
    "Local storage": "本地存储",
    "Must be obtained via trade, NPCs, exploration, or combat": "必须通过贸易、NPC、探索或战斗获取",
    "N output = Level 1 base": "N 产量 = 等级1 基准",
    "No vault access without the technology": "没有科技则无法访问宝库",
    "On this page": "本页内容",
    "Only Tier 1 produces on its own. Higher tiers come from trade, NPCs, exploration, and combat.": "仅T1可自行生产。更高层级需通过贸易、NPC、探索和战斗获取。",
    "Only territories with a Rift Conduit (level ≥1) contribute to filling the vault. There is no manual deposit or withdrawal. The system is fully automated.": "只有建有裂隙导管（等级≥1）的领地才会向宝库填充。无手动存取。系统全自动。",
    "Per Rift Conduit level, per auto-fill cycle": "每裂隙导管等级，每自动填充周期",
    "Per resource type per Dimensional Compression level": "每种资源类型每维度压缩等级",
    "Per tier (T1-T5), also increases storage capacity": "每层级（T1-T5），同时也增加存储容量",
    "Producers": "生产建筑",
    "Producers below.": "生产建筑见下。",
    "Production Bonuses": "产量加成",
    "Rare materials. Used in high-tech applications.": "稀有材料。用于高科技应用。",
    "Reference": "参考",
    "Refined materials. Required for mid-game progression.": "精炼材料。游戏中期进展所需。",
    "Related Topics": "相关主题",
    "Requires Research Institute 2 and Resource Processing T1 1.": "需要研究所2级和资源加工T1 1级。",
    "Research the ": "研究 ",
    "Resin Syphon, Chitin Processor, Ossian Workshop (x1.15 output per level)": "树脂汲取器、甲壳素处理器、骨石工坊（每级 x1.15 产量）",
    "Resource Deduction Order": "资源扣除顺序",
    "Resource Processing Tech": "资源加工科技",
    "Resource Tiers": "资源层级",
    "Resources are organized in 5 tiers. Higher-tier resources are used for more advanced buildings, research, and units.": "资源分为5个层级。更高层级资源用于更高级的建筑、研究和单位。",
    "Resources are transferred periodically": "资源定期转移",
    "Resources come in five tiers. Higher tiers unlock more advanced buildings, research, and units.": "资源共分五层。更高层级可解锁更高级的建筑、研究和单位。",
    "Rift Vault Auto-Fill": "裂隙宝库自动填充",
    "Spirits": "之灵",
    "Storage can be increased by upgrading warehouse structures and the Rift Vault.": "存储容量可通过升级仓库建筑和裂隙宝库来增加。",
    "Sub-Regional Production Boost or Planetary Golden Age": "子区域产量加成或行星黄金时代",
    "T1 Producers": "T1 生产建筑",
    "T1 per level": "T1 每级",
    "T2 Producers": "T2 生产建筑",
    "T2 per level": "T2 每级",
    "T3 Producers": "T3 生产建筑",
    "T3 per level": "T3 每级",
    "T4 Producers": "T4 生产建筑",
    "T4 per level": "T4 每级",
    "T5 Producers": "T5 生产建筑",
    "T5 per level": "T5 每级",
    "The ": "",
    "The Rift Vault is a dimensional storage system that provides a ": "裂隙宝库是一个维度存储系统，提供 ",
    "The Rift Vault is a shared backup pool that covers shortfalls at locations with a Rift Conduit.": "裂隙宝库是一个共享后备池，为建有裂隙导管的地点弥补资源缺口。",
    "The vault is automatically filled from your territories that have a ": "宝库自动从建有 ",
    "This applies to all resource-consuming actions": "此规则适用于所有消耗资源的操作",
    "Unlocking the Rift Vault": "解锁裂隙宝库",
    "When spending resources (building, recruiting, researching), the game deducts in this order:": "消耗资源（建造、招募、研究）时，游戏按以下顺序扣除：",
    "Xalloy Fabricator, Sparkdust Reactor, Vitrium Forge (x1.13 output per level)": "异合金制造器、火花尘反应器、琉璃质熔炉（每级 x1.13 产量）",
    "backup resource pool": "后备资源池",
    "construction, research, unit recruitment, and movement cargo loading.": "建造、研究、单位招募及移动货物装载。",
    "fiber is tissue, crystal is calcified nerve, biomass is flesh.": "纤维是组织，水晶是钙化神经，生物质是肉体。",
    "fiber, crystal, biomass": "纤维、水晶、生物质",
    "producer building": "生产建筑",
    "upgrade your Tier 1 producers early, they fund everything else.": "尽早升级你的T1生产建筑，它们是其他一切的基础。",
    "x per level.": "每级。",
    // ===== 裂隙之灵/脉冲/支援部队 =====
    " bar above the dashboard while at least one outgoing attack is in flight.": " 当至少一次外出攻击在进行中时，仪表盘上方的状态栏。",
    " bar above the dashboard, or directly from the map context menu when viewing one of your own territories or outposts via the ": " 仪表盘上方的状态栏，或通过地图上下文菜单直接查看你自己的领地或前哨时通过 ",
    " compress construction, research, and recruitment queue time. ": " 压缩建造、研究及招募队列时间。",
    " discoveries (Support and Hostile Forces from tier 3 events upward)": " 发现（T3及以上事件的支援与敌对部队）",
    " for completing objectives (Impulses)": " 完成目标获得（脉冲）",
    " materialize alongside an outgoing army to strike whatever you strike. Every type uses the same five-tier rarity ladder (Common → Legendary).": " 随出征军队一同具现，攻击你所攻击的一切。所有类型使用相同的五级稀有度阶梯（普通→传说）。",
    " missions (any spirit type)": " 任务（任意之灵类型）",
    " queues on territories and outposts.": " 领地与前哨的队列。",
    " queues.": " 队列。",
    " shortcut.": " 快捷方式。",
    " summon a defending garrison on your territory or outpost. ": " 在你的领地或前哨召唤防守守军。",
    " to your queue items:": " 对你的队列项目：",
    " with rift-attuned traders on significant trades (any spirit type)": " 与裂隙共鸣商人进行重大交易（任意之灵类型）",
    ", mostly on milestone days (Impulses)": "，主要在里程碑日（脉冲）",
    "1 h": "1 小时",
    "1 min": "1 分钟",
    "12 hours": "12 小时",
    "15 min": "15 分钟",
    "18 hours": "18 小时",
    "24 hours": "24 小时",
    "30 min": "30 分钟",
    "36 hours": "36 小时",
    "5 min": "5 分钟",
    "6 hours": "6 小时",
    "A partially-skipped item has its completion time moved forward": "部分跳过的项目完成时间向前推移",
    "Accelerates ": "加速 ",
    "Activate from the ": "从 ",
    "All downstream queue items are rescheduled accordingly": "所有后续队列项目相应重新排期",
    "Any remaining skip time carries over to the next item": "剩余跳过时间顺延至下一项目",
    "Applies to": "适用于",
    "Channel the rift's fury into an outgoing attack. Hostile creatures materialize beside your dispatched army and strike whatever you strike.": "将裂隙之怒注入出征攻击中。敌对生物在你派遣的军队身旁具现，与你攻击同一目标。",
    "Chrono-Skip Impulses": "时间跳过脉冲",
    "Common impulse": "普通脉冲",
    "Common → Legendary": "普通 → 传说",
    "Composition is calibrated to match an NPC camp of the same tier, so Support Forces are a directly comparable defensive counterpart.": "编成经过校准，以匹配同等级的NPC营地，因此支援部队是可直接对标的防御对应力量。",
    "Confir": "确认",
    "Construction Impulse": "建造脉冲",
    "Corebloom salvage": "核芯绽放回收",
    "Deep beneath the surface, dimensional rifts pulse with energy the planet cannot absorb.": "在地表深处，维度裂隙跳动着行星无法吸收的能量。",
    "Each impulse has a tier that determines how many minutes it skips per use:": "每个脉冲都有一个等级，决定每次使用跳过多少分钟：",
    "Each tier scales the summone": "每个等级缩放召",
    "Earn the": "获取",
    "Earning Rift Spirits": "获取裂隙之灵",
    "Epic impulse": "史诗脉冲",
    "Hostile Forces": "敌对部队",
    "Hostile Forces join an outgoing attack and fight alongside your army": "敌对部队加入出征攻击，与你的军队并肩作战",
    "How Much Time Do They Skip?": "它们跳过多少时间？",
    "How to Obtain": "如何获取",
    "I-V": "I-V",
    "Impulse Tiers & Skip Duration": "脉冲等级与跳过时长",
    "Impulses are stackable in your inventory. Each combination of type and tier is stored as a separate stack.": "脉冲可在库存中堆叠。每种类型与等级的组合按独立堆叠存储。",
    "Impulses skip time in construction, research, or recruitment queues": "脉冲跳过建造、研究或招募队列中的时间",
    "Impulses, Support Forces, and Hostile Forces": "脉冲、支援部队与敌对部队",
    "Items that complete instantly are resolved immediately": "立即完成的项目即时解决",
    "Legendary impulse": "传说脉冲",
    "Open a territory or outpost queue (the queue you open decides which impulse type applies)": "打开领地或前哨的队列（你打开的队列决定应用哪种脉冲类型）",
    "Pick one or more tiers and how many of each to spend": "选择一个或多个等级以及各等级使用数量",
    "Preview the result before confirming": "确认前预览结果",
    "Quest rewards": "任务奖励",
    "Rare impulse": "稀有脉冲",
    "Recruitment Impulse": "招募脉冲",
    "Research Impulse": "研究脉冲",
    "Rift Spirits are activatable inventory items in three types": "裂隙之灵是三种类型的可激活库存物品",
    "Rift Spirits are special activatable inventory items channelled from dimensional rifts. All Rift Spirits fall into ": "裂隙之灵是来自维度裂隙的特殊可激活库存物品。所有裂隙之灵分属 ",
    "Rift Spirits can be earned through various game activities:": "裂隙之灵可通过多种游戏活动获取：",
    "Skip Mechanics": "跳过机制",
    "Summon Support Forces": "召唤支援部队",
    "Support Forces": "支援部队",
    "Support Forces & Hostile Forces": "支援部队与敌对部队",
    "Support Forces Tiers": "支援部队等级",
    "Support Forces summon a temporary defending garrison on your own territory or outpost": "支援部队在你的领地或前哨召唤临时防守守军",
    "T1 garrison": "T1 守军",
    "T2 garrison": "T2 守军",
    "T3 garrison": "T3 守军",
    "T4 garrison": "T4 守军",
    "T5 garrison": "T5 守军",
    "Tear open a rift over your territory or outpost to summon a temporary defending garrison. The summoned units fight alongside your defenders until the rift collapses.": "在你的领地或前哨上空撕裂裂隙，召唤临时防守守军。召唤的单位与你的防守者并肩作战，直至裂隙坍缩。",
    "Technology research queue": "科技研究队列",
    "Territory build queue, Outpost build queue": "领地建造队列、前哨建造队列",
    "The archetype (kamikaze / first-strike / tank / stealth) is rolled randomly at activation. Tier only controls the strength multiplier on top of that archetype's base composition.": "原型（神风/先手/坦克/潜行）在激活时随机掷骰。等级仅控制该原型基础编成之上的强度倍率。",
    "The first ite": "第一个项",
    "The garrison flies in first and takes roughly 35 to 65 minutes to arrive before it is combat-ready. You can keep up to 3 active Support Forces on any single territory or outpost at once.": "守军首先飞入，大约需要35到65分钟才能抵达并做好战斗准备。单个领地或前哨上最多可同时保持3支活跃支援部队。",
    "The skip is applied ": "跳过应用于 ",
    "Trading": "交易",
    "Uncommon impulse": "罕见脉冲",
    "Unit recruitment, Defense construction, Outpost recruitment, Outpost defense": "单位招募、防御建造、前哨招募、前哨防御",
    "Using Rift Impulses (Chrono-Skip)": "使用裂隙脉冲（时间跳过）",
    "What Are Rift Spirits?": "什么是裂隙之灵？",
    "What Rift Spirits Are": "裂隙之灵是什么",
    "You can use as many impulses at once as you own, and even combine several tiers in a single activation. The total skip time is the sum of every impulse you spend.": "你可以一次性使用任意数量的脉冲，甚至将多个等级合并在一次激活中。总跳过时间为你所使用的每个脉冲之和。",
    "army's strengt": "军队实力",
    "defense construction": "防御建造",
    "from quests, daily rewards, exploration, trading, and salvage mission": "从任务、每日奖励、探索、交易和回收任务中获得",
    "in the queue absorbs skip time until it complete": "在队列中吸收跳过时间直至完成",
    "sequentially": "按顺序",
    "three types": "三种类型",
    "to apply the skip and consume the impulse": "以应用跳过并消耗脉冲",
    "unit recruitment": "单位招募",
    // ===== 每日奖励详情 =====
    " (construction, research, and recruitment), see the Rift Spirits guide for details. They appear most frequently on milestone days, with higher-tier impulses dropping in later weeks. Support and Hostile Forces are not part of the daily rewards. You earn those from exploration, traders, and Corebloom salvage.": "（建造、研究、招募），详见裂隙之灵指南。它们最常出现在里程碑日，更高等级脉冲在后几周掉落。支援与敌对部队不属于每日奖励。你通过探索、商人和核芯绽放回收获取它们。",
    " Extra resources scaled to the current week's tier": " 额外资源按当前周等级缩放",
    " In week 4, a roll can deposit resources straight into your Rift Vault": " 在第4周，掷骰可将资源直接存入裂隙宝库",
    " Temporary production, build, or research speed bonuses": " 临时产量、建造或研究速度加成",
    " are milestone rewards with significantly larger unit packages, bonus Rift Spirits, and premium resources.": " 是里程碑奖励，包含更大的单位礼包、额外裂隙之灵以及高级资源。",
    " from a weekly pool. Possible bonus types:": " 来自每周池。可能的奖励类型：",
    " that escalates in value over 4 weeks. After completing a full cycle, the cycle resets with a permanent multiplier increase.": " 在4周内价值逐步提升。完成完整周期后，周期重置并获得永久倍率提升。",
    "-day cycle": "天周期",
    "-day cycle, your reward multiplier increases permanently:": "天周期后，你的奖励倍率永久增加：",
    "1 units as main rewards. Bonus rolls offer T1 resources and occasional T2 drops.": "1个单位作为主要奖励。奖励掷骰提供T1资源和偶尔的T2掉落。",
    "1.5x": "1.5倍",
    "2 units all week. Bonus rolls offer T3 resources and research boosts.": "2个单位贯穿整周。奖励掷骰提供T3资源和研究加速。",
    "28 days": "28天",
    "48 hours": "48小时",
    "Added after each completed cycle": "每个周期完成后叠加",
    "Bonus Rolls": "奖励掷骰",
    "Boosts.": "加成。",
    "Certain daily rewards include chrono-skip ": "部分每日奖励包含时间跳过",
    "Completing a full cycle permanently raises your reward multiplier": "完成完整周期可永久提升你的奖励倍率",
    "Days ": "第",
    "Each claim includes an automatic bonus roll on top of the main reward": "每次领取在主要奖励之上自动包含一次奖励掷骰",
    "Each daily claim includes an automatic ": "每次每日领取自动包含 ",
    "Each time you complete a full ": "每次你完成一个完整",
    "Hard cap on the reward multiplier": "奖励倍率硬上限",
    "How Bonus Rolls Work": "奖励掷骰机制",
    "How Daily Rewards Work": "每日奖励机制",
    "How It Works": "机制说明",
    "Increment per Cycle": "每周期增量",
    "Larger T1 unit batches and first T2 units. Bonus rolls include T2 resources and build speed boosts.": "更大的T1单位批次和首批T2单位。奖励掷骰包含T2资源和建造速度加成。",
    "Length": "长度",
    "Log in daily to claim escalating rewards across a multi-week cycle": "每日登录领取涵盖数周周期的递增奖励",
    "Log in each day to claim your daily reward. Rewards follow a ": "每天登录领取每日奖励。奖励遵循 ",
    "Maximum Multiplier": "最大倍率",
    "Milestone Days": "里程碑日",
    "Milestone days deliver outsized unit packages and premiu": "里程碑日提供超规格的单位礼包和高",
    "Milestones": "里程碑",
    "Miss claiming for 48 hours and your streak resets": "超过48小时未领取，连续天数重置",
    "Missing too long resets your streak, but your multiplier is never lost": "太久未领取会重置连续天数，但倍率永不丢失",
    "One full cycle through all rewards": "一轮完整周期的全部奖励",
    "Premium T2 packages plus the first T3 units. Bonus rolls can add T4 resource drops and even Rift Vault resources.": "高级T2礼包加上首批T3单位。奖励掷骰可额外获得T4资源掉落甚至裂隙宝库资源。",
    "Resources.": "资源。",
    "Rift Impulses": "裂隙脉冲",
    "Rift Vault resources.": "裂隙宝库资源。",
    "Streak Break": "连续天数中断",
    "Streak System": "连续天数系统",
    "Streaks": "连续天数",
    "Streaks & Multipliers": "连续天数与倍率",
    "Structure": "结构",
    "The Reward Cycle": "奖励周期",
    "The multiplier applies to all resource and unit quantities in daily rewards. It persists even if your streak resets.": "倍率适用于每日奖励中所有资源和单位数量。即使连续天数重置，倍率仍然保留。",
    "The planet rewards persistence. Every day you return, it offers a little more.": "行星奖励坚持。每天你回来时，它给出多一点点。",
    "The world used to spin twenty times faster. Then time got tired.": "这个世界曾以二十倍的速度旋转着。然后时间倦了。",
    "Week 1": "第1周",
    "Week 2": "第2周",
    "Week 3": "第3周",
    "Week 4": "第4周",
    "Weekly Progression": "每周进展",
    "resource": "资源",
    // ===== 地图设置 =====
    "Always show coordinates on position view": "位置视图中始终显示坐标",
    "District & Region Borders": "区与区域边界",
    "Draw army routes as straight lines instea": "以直线绘制军队路线而非",
    "Global Activity": "全局活动",
    "Intel Overlay": "情报覆盖",
    "Map Settings": "地图设置",
    "Origin Indicator": "起源指示器",
    "Position Coordinates": "位置坐标",
    "Show anonymous movement lines across the map": "在地图上显示匿名移动线路",
    "Show biome colors & textures (still in tile menu)": "显示生物群系颜色与纹理（地块菜单中仍可用）",
    "Show boundary lines on position & subregion view": "在位置和子区域视图中显示边界线",
    "Show direction & distance to your active territory": "显示到你活跃领地的方向与距离",
    "Show intel values on territories": "在领地上显示情报值",
    "Straight Movement Lines": "直线移动路线",
    "of the A* pat": "的A*路",
    "Newbie Protection Active": "新人保护激活",
    "User Menu": "用户菜单",
    " saved": " 已保存",
    " Recommended": " 推荐",
    " short": " 短",
    " Selected": " 已选择",
    " owned": " 拥有",
    " skip": " 跳过",
    "Go to Crystal extractor": "前往水晶提取器",
    "Active": "运行中",
    "Clear queue": "清空队列",
    "Finish current": "完成当前项目",
    "Your selection": "你的选择",
    "no waste": "零损耗",
    "Apply": "应用",
    "Reward for \"Bend Time\" is ready to claim!": "技能“扭曲时空”奖励已可领取！",
    "Started": "已开始",
    "View quest details": "查看任务详情",
    "Establish Basic Production": "搭建基础生产设施",
    "Go wide early.": "尽早铺开生产规模",
    "It runs offline.": "支持离线挂机",
    "Production ticks even while you are gone, so upgrade and come back to a fuller store.": "即便离线，生产进度也会持续推进，升级设施后再上线，仓库物资将更加充盈",
    "Raise your three Tier 1 harvesters together. A broad base feeds everything that comes later.": "同步升级三台一级采集设施，完备的基础产能将支撑后续所有发展",
    "The planet provides, if you know where to cut. Upgrade your Fiber Harvester, Crystal Extractor, and Biomass Cultivator to level 3.": "只要找对开采之处，这颗星球便会源源不断供给资源。将纤维采集器、水晶提取器、生物质培育装置全部升至3级",
    "Go to Crystal Extractor": "前往水晶提取器",
    "All Colonies": "全部殖民地",
    "": "",
    "": "",
    "": "",
    "": "",
    // ===== 通知/任务 =====
    "1 quest": "1个任务",
    "2 notifications": "2条通知",
    " Voting begins ": " 投票开始于 ",
    " grouped notifications": " 条分组通知",
    "27m": "27分钟",
    "A governance tile in your scope is now active. You can run for office or vote in upcoming elections.": "你范围内的治理地块现已激活。你可以竞选公职或在即将到来的选举中投票。",
    "Candidacy Phase Started · District · Region 199": "候选人阶段已开始 · 区 · 区域199",
    "Candidacy registration is open.": "候选人登记已开放。",
    "District 6158": "第6158区",
    "Governance Activated · District · Region 199": "治理已激活 · 区 · 区域199",
    "Quest Reward Claimed": "任务奖励已领取",
    "View District 6158 on map (199:591:14)": "在地图上查看第6158区（199:591:14）",
    "29m": "29分钟",
    "Open Chat": "打开聊天",
    "Display settings": "显示设置",
    "sort & filters": "排序与筛选",
    "Collapse queue panel": "收起队列面板",
    "Time until your next daily reward can be claimed.": "距离可领取下一份每日奖励的时间。",
    "Increases research speed": "提升研究速度",
    "Track as goal": "设为追踪目标",
    // ===== 模板（第三批）=====
    "Origin ({{0}})": "起源（{{0}}）",
    "Initiate Gathering ({{0}}": "发起采集（{{0}}）",
    "Initiate Collection ({{0}}": "发起回收（{{0}}）",
    "{{0}} Resources": "{{0}} 资源",
    "{{0}}% full": "{{0}}% 充满",
    " near {{0}}": " 邻近 {{0}}",
    " of {{0}}": " / {{0}}",
    "Lv.{{0}}": "等级 {{0}}",
    "District {{0}}": "第{{0}}区",
    "": "",
    "": "",

};
// ============================================================
// cnResourceNames — 资源名词翻译（备用，优先级低于 cnItems）
// ============================================================
// 支持 "名词: 数值" 格式的自动翻译（如 "Mana: 500" → "法力：500"）
var cnResourceNames = {
    // --- ExoSiege 资源/材料 ---
    "biomass": "生物质",
    "chitin": "甲壳素",
    "conduit": "导管",
    "crimstal": "血晶",
    "crystal": "水晶",
    "ferrite": "磁铁矿",
    "fiber": "纤维",
    "isotope": "同位素",
    "lattice": "晶格",
    "ossian": "骨石",
    "paramecie": "草履晶",
    "psigem": "灵能宝石",
    "resin": "树脂",
    "sparkdust": "火花尘",
    "vitrium": "琉璃质",
    "voidium": "虚空素",
    "xalloy": "异合金",
};
// cnRegReplace — 正则替换（备用，优先级低于精确匹配但高于模板/分类）
var cnRegReplace = new Map([]);
// 前缀/后缀提取（备用）
var cnPrefix = {};
var cnPostfix = {};
// 排除规则（备用）
var cnExcludeWhole = [];
var cnExcludePostfix = [];

// ============================================================
// 引擎核心（高性能稳定版 V0.8.2 - 2026-05-26）
// 静态词条索引 O(1) | 资源名索引 O(1) | 无缓存 | 支持 {{*}} | 忽略首字母大小写 | 自动分类匹配 (数组定义)
// ============================================================
var CNITEM_DEBUG = 0;

// ============================================================
// 匹配配置（由 chs.js 的 cnConfig 传入，支持 CN_Helper.setConfig 运行时修改）
// ============================================================
window.cnConfig = Object.assign({
    ignoreCase: true,
    trimSpaces: true,
}, cnConfig);

// ============================================================
// 辅助函数
// ============================================================
function normalizeForMatching(str) {
    if (typeof str !== 'string') return str;
    let result = str;
    if (window.cnConfig.trimSpaces) {
        result = result.trim();
    }
    return result.split(/\s+/).map(word => {
        if (word.length === 0) return word;
        if (window.cnConfig.ignoreCase) {
            return word.toLowerCase();
        }
        return word[0].toLowerCase() + word.slice(1);
    }).join(' ');
}

function ignoreFirstLetterCaseEqual(a, b) {
    if (a === b) return true;
    return normalizeForMatching(a) === normalizeForMatching(b);
}

function addIgnoreCaseFlag(regex) {
    if (!window.cnConfig.ignoreCase) return regex;
    if (!(regex instanceof RegExp)) return regex;
    if (regex.flags.includes('i')) return regex;
    return new RegExp(regex.source, regex.flags + 'i');
}

// ============================================================
// 分类索引构建（支持从 cnItems 数组值自动提取）
// ============================================================
var _categoryIndex = {};  // { categoryName: Map(原文标准化 -> 中文) }

function rebuildCategoryIndex() {
    _categoryIndex = {};
    // 1. 如果用户手动定义了 cnCategories，先加载（兼容旧版）
    if (window.cnCategories) {
        for (let catName in window.cnCategories) {
            let dict = window.cnCategories[catName];
            if (typeof dict !== 'object') continue;
            let catMap = new Map();
            for (let original in dict) {
                let chinese = dict[original];
                if (typeof chinese !== 'string') continue;
                let normKey = normalizeForMatching(original);
                catMap.set(normKey, chinese);
            }
            _categoryIndex[catName] = catMap;
        }
    }
    // 2. 从 cnItems 的数组值自动提取分类
    if (window.cnItems) {
        for (let key in window.cnItems) {
            let val = window.cnItems[key];
            if (Array.isArray(val) && val.length >= 2) {
                let chinese = val[0];
                let category = val[1];
                if (typeof chinese === 'string' && typeof category === 'string') {
                    if (!_categoryIndex[category]) {
                        _categoryIndex[category] = new Map();
                    }
                    let normKey = normalizeForMatching(key);
                    _categoryIndex[category].set(normKey, chinese);
                }
            }
        }
    }
}

// 检查原文是否属于指定分类，并返回翻译后的中文
function getCategoryTranslation(categoryName, rawValue) {
    if (!_categoryIndex[categoryName]) return null;
    let trimmed = rawValue.trim();
    let normValue = normalizeForMatching(trimmed);
    let catMap = _categoryIndex[categoryName];
    if (catMap.has(normValue)) return catMap.get(normValue);
    // 简单复数处理（如果以s结尾，尝试去掉s）
    if (trimmed.endsWith('s')) {
        let singular = trimmed.slice(0, -1);
        let normSingular = normalizeForMatching(singular);
        if (catMap.has(normSingular)) return catMap.get(normSingular);
    }
    return null;
}

// 检查是否为数字（整数或小数）
function isNumberString(str) {
    str = str.trim();
    if (str === '') return false;
    return /^[+-]?\d+(?:\.\d+)?$/.test(str);
}

// ============================================================
// 索引构建
// ============================================================
var _staticIndex = {};      // 标准化静态词条原文 -> 中文
var _templateList = [];     // 存储 { srcTemplate, translation, regex, varNames } 用于模板匹配
var _resourceNameIndex = {}; // 标准化资源名 -> 中文
var _transCache = {};       // cnItem 结果缓存
var _tagTargets = [];       // 预编译的 cnItemByTag 目标列表 [{ key, val }]

function rebuildIndices() {
    _staticIndex = {};
    _templateList = [];
    _tagTargets = [];
    _transCache = {};
    for (let key in window.cnItems) {
        let val = window.cnItems[key];
        if (Array.isArray(val)) {
            if (typeof val[0] === 'string') {
                let normKey = normalizeForMatching(key);
                _staticIndex[normKey] = val[0];
            }
            continue;
        }
        if (typeof val !== 'string') continue;
        if (key.indexOf('{{') !== -1) {
            let { regex, varNames } = templateToRegex(key);
            _templateList.push({ srcTemplate: key, translation: val, regex, varNames });
        } else {
            let normKey = normalizeForMatching(key);
            _staticIndex[normKey] = val;
        }
    }
    // 模板按精确度排序：固定前缀越长越优先
    _templateList.sort((a, b) => {
        let aPre = a.srcTemplate.indexOf('{{');
        let bPre = b.srcTemplate.indexOf('{{');
        if (aPre === -1) aPre = a.srcTemplate.length;
        if (bPre === -1) bPre = b.srcTemplate.length;
        return bPre - aPre;
    });
    // 预编译标签匹配目标列表
    for (let key in window.cnItems) {
        if (typeof window.cnItems[key] === "object" && !Array.isArray(window.cnItems[key])) {
            _tagTargets.push({ key, val: window.cnItems[key] });
        }
    }
    _resourceNameIndex = {};
    if (window.cnResourceNames) {
        for (let key in window.cnResourceNames) {
            let normKey = normalizeForMatching(key);
            _resourceNameIndex[normKey] = window.cnResourceNames[key];
        }
    }
    rebuildCategoryIndex();  // 自动从数组值构建分类索引
}

// ============================================================
// 模板匹配核心
// ============================================================
function templateToRegex(template) {
    let varNames = [];
    let escaped = '';
    let lastIndex = 0;
    while (true) {
        let start = template.indexOf('{{', lastIndex);
        if (start === -1) {
            escaped += template.slice(lastIndex).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            break;
        }
        let end = template.indexOf('}}', start);
        if (end === -1) break;
        escaped += template.slice(lastIndex, start).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let varName = template.slice(start+2, end);
        varNames.push(varName);
        if (varName === '*' || varName.startsWith('*|') || varName.includes('*|')) {
            escaped += '(.+)';
        } else {
            escaped += '(.+?)';
        }
        lastIndex = end + 2;
    }
    return { regex: new RegExp('^' + escaped + '$', window.cnConfig.ignoreCase ? 'i' : ''), varNames: varNames };
}

function parseListPlaceholder(varName) {
    let sepRegex = /\s*,\s*/;
    let joinStr = '、';
    if (varName === '*') return { sepRegex, joinStr };
    if (varName.startsWith('*|')) {
        let parts = varName.slice(2).split('|');
        let sepPart = parts[0] !== undefined ? parts[0] : '';
        let joinPart = parts[1] !== undefined ? parts[1] : '';
        if (sepPart !== '') {
            let regexMatch = sepPart.match(/^\/(.+)\/([gimuy]*)$/);
            if (regexMatch) {
                try {
                    sepRegex = new RegExp(regexMatch[1], regexMatch[2]);
                } catch(e) {
                    let escaped = sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    sepRegex = new RegExp('\\s*' + escaped + '\\s*');
                }
            } else {
                let escaped = sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                sepRegex = new RegExp('\\s*' + escaped + '\\s*');
            }
        }
        if (joinPart !== '') joinStr = joinPart;
    }
    return { sepRegex, joinStr };
}

function applyTemplateTranslation(sourceText, srcTemplate, tgtTemplate, node, precompiledRegex, precompiledVarNames) {
    let regex = precompiledRegex, varNames = precompiledVarNames;
    if (!regex) {
        let result = templateToRegex(srcTemplate);
        regex = result.regex;
        varNames = result.varNames;
    }
    let match = sourceText.match(regex);
    if (!match) return null;
    let values = {};
    for (let i = 0; i < varNames.length; i++) {
        let varName = varNames[i];
        let rawValue = match[i+1];
        if (rawValue === undefined) rawValue = '';

        // 处理列表占位符 {{*}} 或 {{*|...}}
        if (varName === '*' || varName.startsWith('*|')) {
            let { sepRegex, joinStr } = parseListPlaceholder(varName);
            let items = rawValue.split(sepRegex).map(s => s.trim()).filter(s => s);
            let translatedItems = items.map(item => cnItem(item, node));
            values[varName] = translatedItems.join(joinStr);
        }
        // 处理数字占位符 {{%d}}
        else if (varName === '%d') {
            if (!isNumberString(rawValue)) {
                return null;  // 不是数字，匹配失败
            }
            values[varName] = rawValue.trim();
        }
        // 处理分类占位符 {{分类名}}
        else {
            // 支持 {{分类名*}} 仅查分类(找不到保留原文)
            // 支持 {{分类名*|sep|join}} 分类限定列表解析
            let catName = varName;
            let categoryOnly = false;
            let listMode = false;
            let sepRegex = /\s*,\s*/;
            let joinStr = '、';

            let starIdx = catName.indexOf('*');
            if (starIdx !== -1) {
                categoryOnly = true;
                let suffix = catName.slice(starIdx);
                catName = catName.slice(0, starIdx);
                if (suffix.startsWith('*|')) {
                    listMode = true;
                    let parsed = parseListPlaceholder(suffix);
                    sepRegex = parsed.sepRegex;
                    joinStr = parsed.joinStr;
                }
            }

            if (listMode) {
                let items = rawValue.split(sepRegex).map(s => s.trim()).filter(s => s);
                let translatedItems = items.map(item => {
                    let t = getCategoryTranslation(catName, item);
                    return t !== null ? t : item.trim();
                });
                values[varName] = translatedItems.join(joinStr);
            } else {
                let translated = getCategoryTranslation(catName, rawValue);
                if (translated !== null) {
                    values[varName] = translated;
                } else if (categoryOnly) {
                    values[varName] = rawValue.trim();
                } else {
                    // 不是分类，则作为普通占位符（递归翻译）
                    let trimmed = rawValue ? rawValue.trim() : '';
                    values[varName] = cnItem(trimmed, node);
                }
            }
        }
    }
    let result = tgtTemplate.replace(/\{\{([^}]+)\}\}/g, (_, varName) => {
        if (values[varName] !== undefined) return values[varName];
        let idx = varNames.indexOf(varName);
        if (idx !== -1 && match[idx+1]) return match[idx+1].trim();
        return '';
    });
    return result;
}

// ============================================================
// 纯名词翻译（使用索引 O(1)）
// ============================================================
function translateNoun(text) {
    if (!window.cnResourceNames) return null;
    let trimmed = text.trim();
    if (trimmed === "") return null;
    // 精确原文匹配：先试原文（含尾部空格），再试trimmed
    if (window.cnResourceNames.hasOwnProperty(text)) {
        return window.cnResourceNames[text];
    }
    if (window.cnResourceNames.hasOwnProperty(trimmed)) {
        return window.cnResourceNames[trimmed];
    }
    let normKey = normalizeForMatching(trimmed);
    if (_resourceNameIndex.hasOwnProperty(normKey)) {
        return _resourceNameIndex[normKey];
    }
    // 简单复数处理
    if (trimmed.endsWith('s')) {
        let singular = trimmed.slice(0, -1);
        if (singular.endsWith('e')) {
            let candidate = singular.slice(0, -1);
            let normCandidate = normalizeForMatching(candidate);
            if (_resourceNameIndex.hasOwnProperty(normCandidate)) {
                return _resourceNameIndex[normCandidate];
            }
        }
        let normSingular = normalizeForMatching(singular);
        if (_resourceNameIndex.hasOwnProperty(normSingular)) {
            return _resourceNameIndex[normSingular];
        }
    }
    return null;
}

// ============================================================
// 资源数值自动翻译（使用索引）
// ============================================================
function autoTranslateResourceName(text) {
    if (!window.cnResourceNames) return null;
    let match1 = text.match(/^([A-Za-z][A-Za-z\s]+):\s*(.+)$/i);
    if (match1) {
        let resource = match1[1].trim();
        let value = match1[2];
        let normKey = normalizeForMatching(resource);
        if (_resourceNameIndex.hasOwnProperty(normKey)) {
            return _resourceNameIndex[normKey] + '：' + value;
        }
    }
    let match2 = text.match(/^([\+\-]\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
    if (match2) {
        let num = match2[1];
        let resource = match2[2].trim();
        let normKey = normalizeForMatching(resource);
        if (_resourceNameIndex.hasOwnProperty(normKey)) {
            return num + ' ' + _resourceNameIndex[normKey];
        }
    }
    let match3 = text.match(/^(\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
    if (match3) {
        let num = match3[1];
        let resource = match3[2].trim();
        let normKey = normalizeForMatching(resource);
        if (_resourceNameIndex.hasOwnProperty(normKey)) {
            return num + ' ' + _resourceNameIndex[normKey];
        }
    }
    return null;
}

// ============================================================
// cnItemByTag 保持不变
// ============================================================
function cnItemByTag(text, itemgroup, node, textori){
    for (let i in itemgroup){
        if (i[0] == '.') {
            let current_node = node;
            while (current_node){
                if (current_node.classList && current_node.classList.contains(i.substr(1))) return itemgroup[i];
                else if(current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                else break;
            }
        }
        else if (i[0] == '#') {
            let current_node = node;
            while (current_node){
                if (current_node.id == i.substr(1)) return itemgroup[i];
                else if(current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                else break;
            }
        }
        else if (i[0] == '$') {
            if (document.querySelector(i.substr(1)) != null) return itemgroup[i];
        }
        else if (i[0] == '*') {
            if (textori.includes(i.substr(1))) return itemgroup[i];
        }
        else CNITEM_DEBUG && console.log({text, itemgroup, dsc:"不识别的标签" + i});
    }
    return null;
}

// ============================================================
// 全局变量（兼容原有配置）
// ============================================================
window.cnItems = cnItems;
window.cnRegReplace = cnRegReplace;
window.cnResourceNames = cnResourceNames;
window.cnPrefix = cnPrefix;
window.cnPostfix = cnPostfix;
window.cnExcludeWhole = cnExcludeWhole;
window.cnExcludePostfix = cnExcludePostfix;
window.cnCategories = window.cnCategories || {};  // 可选手动分类

// ============================================================
// 主翻译函数（无缓存，使用索引）
// ============================================================
function cnItem(text, node) {
    if (typeof text !== "string") return text;
    if (_transCache.hasOwnProperty(text)) return _transCache[text];
    let textori = text;

    // 前缀处理
    let text_prefix = "";
    for (let prefix in window.cnPrefix) {
        if (text.length >= prefix.length) {
            let head = text.substr(0, prefix.length);
            if (ignoreFirstLetterCaseEqual(head, prefix)) {
                text_prefix += window.cnPrefix[prefix];
                text = text.substr(prefix.length);
            }
        }
    }

    // 后缀处理
    let text_postfix = "";
    for (let postfix in window.cnPostfix) {
        if (text.length >= postfix.length) {
            let tail = text.substr(-postfix.length);
            if (ignoreFirstLetterCaseEqual(tail, postfix)) {
                text_postfix = window.cnPostfix[postfix] + text_postfix;
                text = text.substr(0, text.length - postfix.length);
                break;
            }
        }
    }

    // 正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of window.cnExcludePostfix) {
        let ignoreCaseReg = addIgnoreCaseFlag(reg);
        let result = text.match(ignoreCaseReg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    // 排除规则
    for (let reg of window.cnExcludeWhole) {
        let ignoreCaseReg = addIgnoreCaseFlag(reg);
        if (ignoreCaseReg.test(text)) {
            return _transCache[textori] = text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 精确静态匹配（使用索引 O(1)）
    let normText = normalizeForMatching(text);
    if (_staticIndex.hasOwnProperty(normText)) {
        return _transCache[textori] = text_prefix + _staticIndex[normText] + text_reg_exclude_postfix + text_postfix;
    }

    // 正则替换
    for (let [key, value] of window.cnRegReplace.entries()) {
        let ignoreCaseKey = addIgnoreCaseFlag(key);
        if (ignoreCaseKey.test(text)) {
            let replaced;
            if (typeof value === 'function') {
                let match = text.match(ignoreCaseKey);
                replaced = value(match, text, node);
            } else {
                replaced = text.replace(ignoreCaseKey, value);
                replaced = cnItem(replaced, node);
            }
            return _transCache[textori] = text_prefix + replaced + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 模板匹配（使用预编译正则）
    for (let { srcTemplate, translation, regex, varNames } of _templateList) {
        let result = applyTemplateTranslation(text, srcTemplate, translation, node, regex, varNames);
        if (result !== null) {
            return _transCache[textori] = text_prefix + result + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 条件标签匹配（使用预编译目标列表）
    for (let { key, val } of _tagTargets) {
        let result = cnItemByTag(key, val, node, textori);
        if (result != null) {
            return _transCache[textori] = text_prefix + result + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 纯名词翻译
    let nounResult = translateNoun(text);
    if (nounResult !== null) {
        return _transCache[textori] = text_prefix + nounResult + text_reg_exclude_postfix + text_postfix;
    }

    // 资源数值自动翻译
    let autoResult = autoTranslateResourceName(text);
    if (autoResult !== null) {
        return _transCache[textori] = text_prefix + autoResult + text_reg_exclude_postfix + text_postfix;
    }

    // 未翻译收集
    if (!window.cnItems._OTHER_) window.cnItems._OTHER_ = [];
    let save_cfg = 1;
    let save_text = save_cfg ? text : textori;
    for (let i = 0; i < window.cnItems._OTHER_.length; i++) {
        if (save_text == window.cnItems._OTHER_[i]) {
            return _transCache[textori] = text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }
    if (window.cnItems._OTHER_.length < 10000) {
        window.cnItems._OTHER_.push(save_text);
        window.cnItems._OTHER_.sort();
    }
    CNITEM_DEBUG && console.log('有需要汉化的英文：', text);
    return _transCache[textori] = text_prefix + text + text_reg_exclude_postfix + text_postfix;
}

// ============================================================
// 辅助工具（支持重建索引和分类扩展）
// ============================================================
window.CN_Helper = {
    getUntranslatedList: () => window.cnItems._OTHER_ || [],
    exportUntranslated: function(filename = "untranslated.json") {
        let data = JSON.stringify(window.cnItems._OTHER_, null, 2);
        let blob = new Blob([data], {type: "application/json"});
        let url = URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        console.log(`已导出 ${window.cnItems._OTHER_.length} 个未翻译词条`);
    },
    addTranslations: function(translations) {
        for (let eng in translations) {
            window.cnItems[eng] = translations[eng];
        }
        rebuildIndices();
        console.log(`已添加 ${Object.keys(translations).length} 条翻译，索引已重建`);
    },
    extendResourceNames: function(more) {
        if (!window.cnResourceNames) window.cnResourceNames = {};
        Object.assign(window.cnResourceNames, more);
        rebuildIndices();
        console.log("资源名映射已扩展，索引已重建");
    },
    getResourceNames: () => window.cnResourceNames || {},
    rebuildIndex: rebuildIndices,
    setConfig: function(newConfig) {
        Object.assign(window.cnConfig, newConfig);
        rebuildIndices();
        console.log("匹配配置已更新:", JSON.stringify(window.cnConfig));
    },
    getConfig: function() { return Object.assign({}, window.cnConfig); },
    extendCategories: function(more) {
        if (!window.cnCategories) window.cnCategories = {};
        for (let catName in more) {
            if (!window.cnCategories[catName]) window.cnCategories[catName] = {};
            Object.assign(window.cnCategories[catName], more[catName]);
        }
        rebuildCategoryIndex();
        console.log("分类词典已扩展，分类索引已重建");
    },
    getCategories: () => window.cnCategories || {}
};

// ============================================================
// 页面汉化及 MutationObserver
// ============================================================
var transTaskMgr = {
    tasks: [],
    addTask: function(node, attr, text) { this.tasks.push({node, attr, text}); },
    doTask: function() { let task; while (task = this.tasks.pop()) task.node[task.attr] = task.text; }
};

function TransSubTextNode(node) {
    if (node.childNodes.length) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text, subnode);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || !subnode.childNodes.length) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text, subnode);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                } else {
                    TransSubTextNode(subnode);
                }
            }
        }
    }
}

!function() {
    rebuildIndices();
    console.log("加载汉化模块 (高性能稳定版 V0.8.2) - 支持自动分类匹配 (数组定义)");
    let observer_config = { attributes: false, characterData: true, childList: true, subtree: true };
    let targetNode = document.body;
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    let observer = new MutationObserver(function(e) {
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT"|| mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
            } else if (!mutation.target.childNodes || !mutation.target.childNodes.length) {
                if (mutation.target.innerText) mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
            } else if (mutation.addedNodes.length) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent, node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || !node.childNodes.length) {
                            if (node.innerText) node.innerText = cnItem(node.innerText, node);
                        } else {
                            TransSubTextNode(node);
                        }
                    }
                }
            }
        }
        transTaskMgr.doTask();
        observer.observe(targetNode, observer_config);
    });
    observer.observe(targetNode, observer_config);
}();
