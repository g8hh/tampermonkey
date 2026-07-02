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
    "{{%d}}m": "{{%d}}分钟",
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
    // ===== 第四批：科技名称 =====
    "Adaptive locomotion": "自适应移动",
    "Armor plating": "装甲镀层",
    "Bio-endurance": "生物耐力",
    "Biomass efficiency": "生物质效率",
    "Biomass sustenance": "生物质供养",
    "Command structure": "指挥结构",
    "Counter-espionage": "反间谍",
    "Diplomacy": "外交",
    "Espionage techniques": "间谍技术",
    "Exploration knowledge": "探索知识",
    "Exploration logistics": "探索后勤",
    "Fortified line": "强化防线",
    "Imperial expansion": "帝国扩张",
    "Infiltration networks": "渗透网络",
    "Kinetic penetration": "动能穿透",
    "Predator adaptation": "掠食者适应",
    "Regenerative symbiosis": "再生共生",
    "Research link": "研究链接",
    "Salvage techniques": "回收技术",
    "Scavenger networks": "拾荒者网络",
    "Shock tactics": "冲击战术",
    "Signature cloaking": "特征隐形",
    "Structural integrity": "结构完整性",
    "Support operations": "支援行动",
    "Symbiotic storage": "共生存储",
    "Trading knowledge": "贸易知识",
    "Utility advancements": "通用升级",
    // ===== 科技描述 =====
    "Advanced understanding of administration and logistics, allowing for the control of more territories. Each level increases the territory limit by 1. At some point, administration becomes the real enemy.": "对行政与后勤的深入理解，得以掌控更多领地。每级增加1个领地上限。终有一日，行政管理本身会成为真正的敌人。",
    "Builds the covert supply and ambush infrastructure infiltrators rely on. Increases attack and cargo capacity of Infiltrator-capable units. Behind every line is a quieter one.": "建立渗透者所依赖的秘密补给与伏击基础设施。提升渗透者单位的攻击力和货运容量。每一条战线背后都有一条更安静的后方。",
    "Connects research institutes across territories. Each level links an additional institute, summing their levels for a global research speed bonus. Level 1 links the top 2 institutes. Synchronized research across colonies. Breakthroughs propagate to all connected facilities.": "连接各领地研究所。每级连接一个额外研究所，将其等级求和获得全局研究速度加成。1级连接等级最高的2个研究所。跨殖民地同步研究。突破成果传播至所有已连接的设施。",
    "Cultivates symbiotic regrowth tissue in regenerative units, raising the chance that battle-damaged forces seal their wounds between rounds. Heal first. Mourn later.": "在再生单位中培养共生再生组织，提升战损部队在回合间修复伤口的几率。先治疗。哀悼靠后。",
    "Establishes battlefield salvage routes so wreck-feeding units carry more and move faster. Increases cargo capacity and speed of Salvage and Instant-Salvage units. The dead deliver, if you know who to ask.": "建立战场回收路线，使以残骸为食的单位载量更大、移动更快。提升回收与即时回收单位的货运容量和速度。死去的会送货，只要你知道该问谁。",
    "Establishes encrypted communication protocols linking allied colonies across the surface. Each level adds +1 alliance member slot (larger coalitions) and expands coordinated Multi-Party Attacks": "建立加密通信协议，连接地表各同盟殖民地。每级增加+1同盟成员槽位（扩大联盟规模），并扩展协同多方攻击",
    "Improves defense against enemy spies. Each level increases spy defense by 1%. If they can watch you, you can watch them watching you.": "增强对敌方间谍的防御。每级提升1%间谍防御。如果他们能监视你，你也能监视正在监视你的他们。",
    "Improves negotiation outcomes with certain neutral parties. Reduces the chance of being deceived in hostage exchanges by 3% per level. The hostage-holders remember something about negotiation. Playing along reduces the chance they forget mid-deal.": "改善与特定中立方的谈判结果。每级降低3%人质交换中被欺骗的几率。人质持有者对谈判有所记忆。配合行事可降低他们在交易中途遗忘的几率。",
    "Improves the bioshield of units by 3% per level. Biological energy barriers adapted from native lifeforms. They regenerate, which is the whole point.": "每级提升单位生物护盾3%。从本土生命形态改编的生物能量屏障。它们会再生，这正是关键所在。",
    "Improves the effectiveness of offensive systems by 3% per level. Weapons modeled after the planet's apex predators. If ExoSiege breeds killers, we study them.": "每级提升攻击系统效能3%。模仿行星顶端掠食者的武器。如果远征围攻孕育杀手，我们就研究它们。",
    "Improves the overall structural integrity (health) of units by 3% per level. Ossian-reinforced frameworks. Units survive longer, which matters when replacements take days.": "每级提升单位整体结构完整性（生命值）3%。骨石强化框架。单位存活更久，这在补充需要数天时至关重要。",
    "Improves the resilience of defensive plating by 3% per level. The planet's own armor compounds, processed and turned against its creatures.": "每级提升防御镀层韧性3%。行星自身的装甲化合物，经加工后反过来对付它的造物。",
    "Increases production of buildings for Fiber, Crystal, and Biomass by 5% per level. Also grants a 50% capacity bonus per level for resources of this tier. Basic materials are everywhere. Processing them efficiently is what separates a colony from a campsite.": "每级提升纤维、水晶和生物质生产建筑产量5%。同时每级为该层级资源提供50%容量加成。基础材料无处不在，高效加工才是区分殖民地与营地的关键。",
    "Increases the cargo capacity of all units by 3% per level. Bio-organic containment that grows with the load. The planet's own tissue, repurposed to carry what we take from it.": "每级提升所有单位货运容量3%。随负载增长的生物有机容器。行星自身的组织，被改用来装载我们从它身上夺走的东西。",
    "Increases the maximum duration an exploration mission can spend at the destination. +1 hour per level. Longer missions mean deeper into unknown territory. Supply lines matter when the ground moves.": "增加探索任务在目的地可停留的最大时长。每级+1小时。更长的任务意味着深入未知领地。当地面移动时，补给线至关重要。",
    "Increases the maximum number of army movements that can be active simultaneously. +1 per level. Coordinating multiple armies across shifting terrain. The communication lag alone would break lesser operations.": "增加可同时活跃的军队移动数量上限。每级+1。在变动地形中协调多支军队。光是通信延迟就足以击垮稍逊一筹的行动。",
    "Increases the speed of all units by 2% per level. The ground shifts, buckles, and fights back. Units trained in adaptive movement learn to move with it, not against it.": "每级提升所有单位速度2%。地面移动、弯曲、反击。训练有素的自适应移动学会顺势而行，而非逆势而动。",
    "Lays the path to recruiting your army and to research new combat technology to strengthen units. Colony survival required learning fast. This covers the basics.": "为招募军队和研发新战斗科技以强化单位铺平道路。殖民地生存需要快速学习。这涵盖基础知识。",
    "Mastery of deep-field construction and self-sustaining habitation modules. Level 3 unlocks the first outpost, Level 6 the second, Level 9 the third. Each level grants +1 development slot. The planet treats outposts as foreign bodies and tries to reject them.": "精通深空建造与自维持居住模块。3级解锁第一个前哨站，6级解锁第二个，9级解锁第三个。每级授予+1发展槽位。行星视前哨站为异物并试图排斥它们。",
    "Old Void Architect techniques for folding matter into rift pockets. Increases total Rift Vault capacity by 5,000 units per level. The instruments hum even when off.": "古老的虚空建筑师折叠物质入裂隙口袋的技术。每级增加裂隙宝库总容量5,000单位。仪器即使关机仍在嗡嗡作响。",
    "Optimizes biomass distribution to stationed units and defenses. Each level covers 75 biomass upkeep per hour for free on each territory and outpost.": "优化对驻军单位和防御设施的生物质分配。每级为每个领地与前哨站免费覆盖每小时75生物质维护。",
    "Reduces biomass consumption of all units during travel by 3% per level. Minimum consumption is 25% of base. Biomass fuels everything organic on ExoSiege. Using less means surviving longer between resupply.": "每级降低所有单位行进中生物质消耗3%。最低消耗为基础值的25%。生物质为远征围攻中一切有机活动提供燃料。消耗更少意味着补给间隔更长。",
    "Refines initiative-based combat doctrine. Raises the activation cap and kill ceiling of First Strike-capable units. Striking first means surviving second.": "精进基于先发制人的战斗教条。提升先手打击单位的激活上限与击杀上限。先发制人方能后发生存。",
    "Refines stealth-signature dampening so cloaked units strike harder before their position is registered. Damage them before they know you exist. Everything after is bookkeeping.": "精进隐形特征抑制，使隐形单位在位置暴露前造成更大伤害。在他们意识到你的存在之前重创他们。之后一切都只是记账。",
    "Refines the support infrastructure that keeps an empire moving and fed. Increases cargo capacity of Transport units, the speed multiplier Pullers grant their formation, and the resource yield of stationed Farming units. Logistics, traction, and harvest": "精进维持帝国运转和供给的支援基础设施。提升运输单位的货运容量、牵引者赋予编队的速度倍率以及驻扎农耕单位的资源产量。后勤、牵引与收割",
    "Sharpens armor-piercing kinetics so Piercing Shot units bypass more of an enemy's defensive stack. Armor exists to be measured, then defeated.": "锐化穿甲动能，使穿透射击单位绕过更多敌方防御层。装甲的存在就是为了被衡量，然后被击穿。",
    "Strengthens the Repair Station": "强化维修站",
    "Trains bulwark units to absorb fire on behalf of their formation. Increases the redirect chance of Taunt-capable units. The line holds because someone agreed to take the hits.": "训练壁垒单位为其编队吸收火力。提升嘲讽单位的引火几率。战线之所以稳固，是因为有人同意扛下炮火。",
    "Unlocks Settler units and increases the maximum number of territories a player can own by 1 per level. Claiming territory on a living planet requires anchoring hard enough that the ground stops rejecting you.": "解锁定居者单位，每级增加玩家可拥有的领地上限1个。在活体行星上占领领地需要锚定得足够稳固，直到地面停止排斥你。",
    "Unlocks buildings for Ferrite, Conduit, and Psigem production. Increases their production by 5% per level. Also grants a 50% capacity bonus per level for resources of this tier. Metallic dust and psi-resonant crystals from the middle layers. Extraction gets personal at this depth.": "解锁磁铁矿、导管和灵能宝石生产建筑。每级提升其产量5%。同时每级为该层级资源提供50%容量加成。来自中间层的金属粉尘与灵能共振晶体。这个深度的提取变得私人化。",
    "Unlocks buildings for Lattice, Voidium, and Isotope production. Increases their production by 5% per level. Also grants a 50% capacity bonus per level for resources of this tier. Harvesting from vital organs. The planet definitely notices. Worth it.": "解锁晶格、虚空素和同位素生产建筑。每级提升其产量5%。同时每级为该层级资源提供50%容量加成。从生命器官中收获。行星绝对注意到了。值得。",
    "Unlocks buildings for Resin, Chitin, and Ossian production. Increases their production by 5% per level. Also grants a 50% capacity bonus per level for resources of this tier. Deeper harvesting means tapping the planet's secretions and creature armor. It notices, eventually.": "解锁树脂、甲壳素和骨石生产建筑。每级提升其产量5%。同时每级为该层级资源提供50%容量加成。更深的收获意味着汲取行星的分泌物和生物装甲。它最终会察觉。",
    "Unlocks buildings for Xalloy, Sparkdust, and Vitrium production. Increases their production by 5% per level. Also grants a 50% capacity bonus per level for resources of this tier. Alien alloys and reactive compounds from tissue the planet actually uses. Handle with care.": "解锁异合金、火花尘和琉璃质生产建筑。每级提升其产量5%。同时每级为该层级资源提供50%容量加成。来自行星实际使用组织的外星合金与反应性化合物。小心处理。",
    "Unlocks early defensive structures, enhances bunker capacity and expands Hidden Sanctum slots. The planet has moods. Being ready for the bad ones is not optional.": "解锁早期防御建筑，增强地堡容量并扩展隐秘圣所槽位。行星有情绪。为糟糕时刻做好准备并非选项。",
    "Unlocks exploration missions and increases the maximum number of concurrent exploration movements. +1 slot every 2 levels. The surface shifts constantly. Proper training keeps expeditions from walking into the planet's gut.": "解锁探索任务并增加可同时进行的探索移动数量上限。每2级+1槽位。地表不断变化。适当的训练可防止远征队走入行星的内脏。",
    "Unlocks spy units and improves espionage capabilities. Each level increases spy strength by 1%. Information is the only resource the planet can't absorb.": "解锁间谍单位并提升间谍能力。每级增加1%间谍强度。信息是行星唯一无法吸收的资源。",
    "Unlocks the ability to provide support to NPCs in exchange for resources. +1 support slot every 2 levels. Payment bonus of 5% per level. Some inhabitants respond to sustained presence. Station troops long enough and they start cooperating.": "解锁向NPC提供支援以换取资源的能力。每2级+1支援槽位。每级5%报酬加成。一些居民对持续存在作出反应。驻军足够久，他们便开始合作。",
    "Unlocks the ability to take on more complex Salvage Jobs. Each level allows access to higher-tier jobs and increases salvage yield by 3%. Nothing on ExoSiege stays wrecked for long. Harvest it before the planet reclaims it.": "解锁承接更复杂回收工作的能力。每级可接触更高等级工作并提升3%回收产出。远征围攻上没有什么会长期处于破损状态。在行星回收之前将其收获。",
    "Unlocks the ability to trade with NPCs and improves exchange rates by 3% per level. The transformed traders remember commerce by instinct. Learning their patterns pays off.": "解锁与NPC贸易的能力，并每级改善3%交易汇率。转化商人凭本能记得商业。学习他们的模式会得到回报。",
    "each level adds 5% to its defense capacity, shortens the Rift Recovery of the defenses it shelters, and grants a small free rebuild roll (3% per level, from 0%) for the destroyed defenses it could not shelter. The Repair Station does the heavy lifting. This research squeezes more out of every battle.": "每级增加其防御容量5%，缩短其庇护防御设施的裂隙恢复时间，并为其未能庇护的已摧毁防御设施提供小额免费重建掷骰（每级3%，从0%起步）。维修站承担繁重工作。这项研究从每场战斗中榨取更多价值。",
    "three quiet levers, one loud effect.": "三根安静的杠杆，一个响亮的效果。",
    // ===== 科技UI属性 =====
    "Effect": "效果",
    "Global unit stat": "全局单位属性",
    "Research Cost": "研究成本",
    "Research Time": "研究时间",
    "Free biomass upkeep per hour": "每小时免费生物质维护",
    "T1 Resources (Fiber, Crystal, Biomass) Prod.": "T1资源（纤维、水晶、生物质）产量",
    "T1 Resources (Fiber, Crystal, Biomass) Storage": "T1资源（纤维、水晶、生物质）存储",
    "Max Armies": "军队上限",
    "Exploration Slots (per 2 Levels)": "探索槽位（每2级）",
    "Salvage Yield": "回收产出",
    "Base time": "基础时间",
    "Effective time": "有效时间",
    "Research Lab": "研究实验室",
    "CURRENT": "当前",
    "Research Speed": "研究速度",
    "Tech Cost Reduction": "科技成本降低",
    "Recruitment Speed": "招募速度",
    "Colonize Slots": "殖民槽位",
    "Farming Slots": "农耕槽位",
    "Salvage Slots": "回收槽位",
    "Spy Slots": "间谍槽位",
    "Transport Slots": "运输槽位",
    "Upkeep Reduction": "维护减免",
    "Defense Production Speed": "防御生产速度",
    "Structure Build Speed": "建筑建造速度",
    "Unit Production Speed": "单位生产速度",
    "Defense Build Speed": "防御建造速度",
    "Increase for this level": "此级增量",
    "ETA": "预计到达",
    "Missing": "缺失",
    // ===== 资源产出率 =====
    "Biomass/hr": "生物质/时",
    "Chitin/hr": "甲壳素/时",
    "Ossian/hr": "骨石/时",
    "Resin/hr": "树脂/时",
    "Ferrite/hr": "磁铁矿/时",
    "Conduit/hr": "导管/时",
    "Psi-gem/hr": "灵能宝石/时",
    "Xalloy/hr": "异合金/时",
    "Sparkdust/hr": "火花尘/时",
    "Vitrium/hr": "琉璃质/时",
    "Lattice/hr": "晶格/时",
    "Voidium/hr": "虚空素/时",
    "Isotope/hr": "同位素/时",
    // ===== 生物转化室 =====
    " and Biomass ": " 和生物质 ",
    " it runs at full. Adjust it freely. There is no cooldown.": " 以全速运行。自由调整。无冷却时间。",
    " shrink together. At ": " 一起收缩。在 ",
    " the chamber is paused (consumes nothing, produces nothing). At ": " 反应室暂停（不消耗，不产出）。在 ",
    "Biomass Output/hr": "生物质产出/时",
    "Conversion throttle:": "转化节流：",
    "Crystal Consumption/hr": "水晶消耗/时",
    "Fiber Consumption/hr": "纤维消耗/时",
    "Set how hard the chamber runs. The throttle scales the conversion proportionally. Fiber and Crystal ": "设定反应室运行强度。节流按比例缩放转化。纤维和水晶 ",
    "consumption": "消耗",
    "output": "产出",
    // ===== 珊瑚尖塔/世界塑造 =====
    "Bunker Capacity": "地堡容量",
    " chance per mutation tick (every 6h) to reshape toward the target. When the spire's own tile sits on the target biome, that biome's production bonus is additionally amplified by ": " 每变异周期（每6小时）有几率朝目标重塑。当尖塔自身地块处于目标生物群系时，该生物群系产量加成额外增幅 ",
    " per level (up to +": " 每级（最高+",
    "). Changing the target has a ": "）。更改目标有 ",
    "Biome Flip Chance / Tick": "生物群系翻转几率/周期",
    "Choose a target biome. Each level gives every owned or neutral tile in this spire's 5×5 surroundings a ": "选择目标生物群系。每级赋予该尖塔5×5范围内每个己方或中立地块 ",
    "Target biome:": "目标生物群系：",
    "Target-Biome Production Amp": "目标生物群系产量增幅",
    "h cooldown.": "小时冷却。",
    // ===== 裂隙宝库/导管 =====
    "Protected Storage (% of Max Capacity)": "受保护存储（最大容量百分比）",
    "Unlocks Rift Vault Access": "解锁裂隙宝库访问",
    "Vault Fill Rate (/10 min)": "宝库填充率（/10分钟）",
    "Defense Repair Capacity": "防御修复容量",
    // ===== 前哨/巨构 =====
    "Spawns a forward outpost on an adjacent empty position": "在相邻空位生成前进哨站",
    "Allied Army Slots": "盟军槽位",
    " (Level ": "（等级",
    "5min": "5分钟",
    // ===== 任务/目标 =====
    "Objectives": "目标",
    "Build the Institute.": "建造研究所。",
    "Off-world tech degrades fast down here. The planet sees metal as a wound. Build a Research Institute to level 2 to slow the rot and unlock new technologies.": "离世界科技在这里退化很快。行星将金属视为伤口。将研究所升至2级以减缓腐化并解锁新科技。",
    "Raise a Research Institute to open the Research tab.": "建造研究所以打开研究标签页。",
    "Research is empire wide.": "研究作用于整个帝国。",
    "Unlike a building, a finished technology benefits all of your colonies at once.": "与建筑不同，已完成科技即刻惠及你所有殖民地。",
    "Unlock Research": "解锁研究",
    "Go to Research Institute": "前往研究所",
    "No active modifiers.": "无活跃修正。",
    "Reward for \"Establish Basic Production\" is ready to claim!": "任务\"搭建基础生产设施\"的奖励可领取！",
    "Reward for \"{{0}}\" is ready to claim!": "任务\"{{0}}\"的奖励可领取！",
    // ===== 模板（第四批）=====
    "{{0}} lets you combine {{1}} armies into one synchronized strike (your own armies, your allies', and attached forces), rising by 1 army per level up to {{2}}. Without this research you can only attack with a single army.": "{{0}}级可协同{{1}}支军队发起同步打击（己方、盟友及附属部队），每级增加1支，上限{{2}}支。未研究此科技时，你只能以单支军队攻击。",
    "Own any 3 of 6 Tier I technologies ({{0}}/3)": "拥有6种I级科技中的任意3种（{{0}}/3）",
    "Own any 4 of 7 Tier II technologies ({{0}}/4)": "拥有7种II级科技中的任意4种（{{0}}/4）",
    "Own any 5 of 10 Tier III technologies ({{0}}/5)": "拥有10种III级科技中的任意5种（{{0}}/5）",
    "Own any 6 of 11 Tier IV technologies ({{0}}/6)": "拥有11种IV级科技中的任意6种（{{0}}/6）",
    "Research (Lvl {{0}})": "研究（等级{{0}}）",
    "Salvage Techniques Lvl {{0}}": "回收技术 等级{{0}}",
    "Biomass Cultivator Lvl {{0}}": "生物质培养器 等级{{0}}",
    "Crystal Extractor Lvl {{0}}": "水晶提取器 等级{{0}}",
    "Fiber Harvester Lvl {{0}}": "纤维采集器 等级{{0}}",
    "Warehouse Lvl {{0}}": "仓库 等级{{0}}",
    "{{0}} minutes {{1}} seconds": "{{0}} 分 {{1}} 秒",
    "{{0}} minute {{1}} seconds": "{{0}} 分 {{1}} 秒",
    "{{0}} minutes {{1}} second": "{{0}} 分 {{1}} 秒",
    "{{0}} seconds": "{{0}} 秒",
    "{{0}} second": "{{0}} 秒",
    "{{0}} minutes": "{{0}} 分",
    "{{0}} minute": "{{0}} 分",
    // ===== 第五批：教程/技术分类/战斗通知 =====
    "{{0}} important, {{1}} total unread": "{{0}}条重要，共{{1}}条未读",
    "Combat Research takes a while. Fill the queue, then spend a Research Impulse to skip ahead.": "战斗科技研究需要时间。填满队列，然后使用研究脉冲跳过等待。",
    "Instinct alone will not stop the transformed. Research Combat Technologies to sharpen your forces before you take the fight to them. Combat research takes a while, so fill the queue and spend a Research Rift Impulse to collapse the wait.": "仅凭本能无法阻止转化者。研究战斗科技以在出击前磨砺部队。战斗研究需要时间，因此填满队列并使用研究裂隙脉冲来缩短等待。",
    "Learn to Fight": "学习战斗",
    "Queue the research.": "将研究排入队列。",
    "Stronger units survive longer, and a survivor is far cheaper than a replacement.": "更强的单位存活更久，幸存者比重招新兵便宜得多。",
    "Why it matters.": "为何重要。",
    "Go to Combat Technologies": "前往战斗科技",
    "Tier ": "层级 ",
    "Alliance capacity and coordination": "同盟容量与协调",
    "Unit stats, movement slots and combat improvements": "单位属性、移动槽位与战斗强化",
    "Territory expansion and settler units": "领地扩张与定居者单位",
    "Defensive structures and bunker upgrades": "防御建筑与地堡升级",
    "Exploration mission slots and duration": "探索任务槽位与时长",
    "Outpost development and build slots": "前哨发展与建造槽位",
    "Boosts resource production and unlocks production buildings": "提升资源产量并解锁生产建筑",
    "Global research speed bonuses": "全局研究速度加成",
    "Rift Vault capacity upgrades": "裂隙宝库容量升级",
    "Salvage job access and yield improvements": "回收工作权限与产出提升",
    "Espionage capabilities and spy defense": "间谍能力与间谍防御",
    "NPC support missions and reward bonuses": "NPC支援任务与奖励加成",
    "NPC trading and negotiation improvements": "NPC贸易与谈判提升",
    "Scrapmaws": "废铁嘴",
    "Primitive Scavenger. Pries open wreckage before the planet swallows it back.": "原始拾荒者。在行星吞回残骸之前将其撬开。",
    "No structures found": "未找到建筑",
    "Starts": "开始",
    "2 important, 8 total unread": "2条重要，共8条未读",
    "Bandit Raiders Defeated": "土匪掠夺者已击败",
    "Important": "重要",
    "Incoming Bandit Raid. Tier 2.": "土匪袭击来袭。层级2。",
    "Raid Repelled": "袭击已击退",
    "Units killed": "击杀单位",
    "Arrival: ": "到达：",
    "Bandit Raiders": "土匪掠夺者",
    "Critical": "紧急",
    "Estimated strength: ": "预估战力：",
    "Medium": "中等",
    "Raiding Forces:": "袭击部队：",
    "Multi-select mode": "多选模式",
    "Target": "目标",
    " round": " 回合",
    "Alive": "存活",
    "Attacker": "攻击方",
    "Cragwall": "峭壁墙",
    "Damage Details": "伤害详情",
    "Defender": "防守方",
    "Healed": "已治疗",
    "Hurt": "受伤",
    "Lost": "损失",
    "Plundered": "已掠夺",
    "Round-by-Round Details": "逐回合详情",
    "Share combat": "分享战斗",
    "Skyray": "天魟",
    "Spinefly": "脊刺蝇",
    "Start": "开始",
    "Stationed Ally": "驻扎盟友",
    "VS": "对决",
    "Victory": "胜利",
    "at": "在",
    "from": "来自",
    "Rewards already claimed.": "奖励已领取。",
    "Refresh": "刷新",
    "Disable grouping": "取消分组",
    "Mark all as read & close": "全部标为已读并关闭",
    "Research for Combat Technologies complete! (Origin)": "战斗科技研究完成！（起源）",
    "Build a Training Camp while they march.": "在部队行军期间建造训练营。",
    "Claim your Daily Reward": "领取每日奖励",
    "Claim your Daily Reward.": "领取每日奖励。",
    "Defeat the bandit camp on the map": "击败地图上的土匪营地",
    "It drops fresh units into your ranks, enough to make this first fight a safe win. Come back each day for more.": "它会向你的队伍投放新单位，足以让你在首战中稳操胜券。每天回来领取更多。",
    "Open the map and attack.": "打开地图发起攻击。",
    "Some stranded mutants have already joined your ranks. Claim your Daily Reward to reinforce them, then gather a small army. It's time to meet the planet's forces. Open the map, tap the bandit camp marked with the golden ring, and send your units. They take a while to reach the camp. In the meantime, build a Training Camp so you can raise more units of your own.": "一些滞留的变种人已加入你的队伍。领取每日奖励来增援他们，然后集结一支小部队。是时候面对行星的力量了。打开地图，点击金环标记的土匪营地，派出你的单位。他们需要一段时间才能到达营地。在此期间，建造训练营以培养更多自己的单位。",
    "Take the Fight to Them": "向他们出击",
    "Tap the bandit camp with the golden ring, choose the Attack mission, and send your units. Match archetypes against the defenders. The right counter beats brute force.": "点击金环土匪营地，选择攻击任务，派出你的单位。用克制原型对位防守方。正确的克制胜过蛮力。",
    "Your army takes real time to reach the camp. Use the wait to build a Training Camp so you can raise more units of your own.": "你的部队确实需要时间才能抵达营地。利用这段等待时间建造训练营，培养更多你自己的单位。",
    "Go to Claim your Daily Reward": "前往领取每日奖励",
    "Go to Defeat the bandit camp on the map": "前往击败地图上的土匪营地",
    "Go to Training Camp": "前往训练营",
    // ===== 第六批：资源/地图/军队/单位 =====
    "%/h": "%/时",
    "Decays at ": "衰减于 ",
    "From: ": "来源：",
    "Total: ": "总计：",
    "{{0}}, {{1}}": "{{0}}、{{1}}",
    "Active (< 24 hrs)": "活跃（<24小时）",
    "Base": "基地",
    "Bookmark Location": "收藏地点",
    "Created by: ": "创建者：",
    "Endless rolling plains where the planet's flesh is thinnest. Quiet, ordinary, and the place every colony first puts down roots.": "无尽绵延的平原，行星肌体最薄之处。宁静、平凡，每个殖民地最初扎根的地方。",
    "Resources:": "资源：",
    "Status": "状态",
    "Territory & Wreckage Info": "领地与残骸信息",
    "Wreckage": "残骸",
    "Vacant": "空置",
    "Auto-Config & send salvage army, no panel": "自动配置并派遣回收部队，无面板",
    "Bandit Raid": "土匪袭击",
    "The dust knows your name. Do not give it more reasons to use it.": "尘土知道你的名字。别给它们更多理由去利用它。",
    "{{0}} units total": "共 {{0}} 个单位",
    "{{0}}h": "{{0}}小时",
    "{{0}}h": "{{0}}小时",
    "Blastmite": "爆裂螨",
    "Bogtrotter": "沼泽行者",
    "Discovered": "已发现",
    "NPC Info": "NPC信息",
    "Plunderable": "可掠夺",
    "Reserved for you. Only you can attack this camp.": "为你保留。只有你能攻击此营地。",
    "Resonating": "共鸣中",
    "Scrapknight": "废铁骑士",
    "Total Army Strength": "总军力",
    "Vanishes": "消失",
    "A fresh camp reforms nearby once when destroyed. Endless target, but the new camp may be tough to clear if the first fight cost you heavily.": "被摧毁后会在附近重新形成一个新营地。无尽目标，但如果首战让你损失惨重，新营地可能很难清理。",
    "NPC Presence": "NPC存在",
    "No Utility": "无功能",
    "Target Info: ": "目标信息：",
    "1.50x": "1.50倍",
    "Each Puller accelerates one other (slower) army unit to 1.5x speed, assigned slowest-first. Speed multiplier improved by Utility Advancements research.": "每个牵引者将另一（较慢）部队单位加速至1.5倍速度，优先分配给最慢的单位。速度倍率可通过通用升级研究提升。",
    "Puller Speed": "牵引速度",
    "Calculating...": "计算中...",
    "Save Preset": "保存预设",
    "This army is likely too weak. Expect heavy or total losses.": "这支军队可能太弱了。预计会遭受重大或全部损失。",
    "Warning": "警告",
    "(Min. Prep)": "（最短准备）",
    " Army Limit Reached": " 已达军队上限",
    "). Upgrade Command Structure for more slots.": "）。升级指挥结构以获得更多槽位。",
    "5 minutes": "5分钟",
    "Army launched to {{0}}! ETA": "军队已出发前往 {{0}}！预计到达",
    "Army limit reached (": "已达军队上限（",
    "/hr": "/时",
    "A battlefield scavenger, durable enough to survive the fight, then strips the wreckage immediately.": "战场拾荒者，足够坚韧能在战斗中存活，随后立即清理残骸。",
    "A resilient construct that farms and self-repairs. Produces 25 Biomass per hour when stationed in a territory.": "坚韧的构造体，可耕种并自我修复。驻扎在领地时每小时产出25生物质。",
    "A stealth flanker, invisible on most scans, slightly more rounded than a pure striker.": "潜行侧翼单位，大多数扫描下不可见，比纯输出型更加全面。",
    "Archetype": "原型",
    "Armored transport, tough enough to protect its cargo, devastating payload capacity.": "装甲运输单位，足够坚固来保护货物，毁灭性的载荷能力。",
    "Ashglider": "灰烬滑翔者",
    "Blastoad": "爆裂蟾",
    "Bobawoll": "波巴沃尔",
    "Boomburp": "轰鸣嗝",
    "Build Defenses": "建造防御",
    "Bypass": "绕过",
    "Current Army:": "当前军队：",
    "Drillhand": "钻手",
    "Durable bruiser whose attacks partially ignore enemy armor. Slow, but hard to kill.": "耐打的猛击者，攻击可部分忽略敌方护甲。速度慢，但很难被击杀。",
    "Elite glass cannon": "精英玻璃大炮",
    "Eyestilt": "眼柄怪",
    "Farming": "农耕",
    "Fast, well-rounded elite with first strike and army-pulling capabilities. The premier T4 support fighter.": "快速、全面的精英单位，拥有先手打击和军队牵引能力。T4级别的顶级支援战士。",
    "First Strike": "先手打击",
    "Ghostweft": "幽织者",
    "Gnashvoid": "啃噬虚空",
    "Grizzcruncher": "灰咬者",
    "Group": "分组",
    "Infiltrator": "渗透者",
    "Instant Salvage": "即时回收",
    "Kamikaze": "神风",
    "Kapuke": "卡普克",
    "Looks handsome, but is the most dangerous swarm unit known to exokind. Balanced elite fighter that strips armor and salvages the aftermath.": "外表俊美，却是人类已知最危险的蜂群单位。攻守兼备的精英战士，能剥离护甲并在战后回收残骸。",
    "Mobile sustain unit": "移动续航单位",
    "Monkfarmer": "僧农",
    "Own any 3 of 5 Tier IV unit types ({{0}}/3)": "拥有5种IV级单位中的任意3种（{{0}}/3）",
    "Own any 3 of 6 Tier III unit types ({{0}}/3)": "拥有6种III级单位中的任意3种（{{0}}/3）",
    "Own any 4 of 7 Tier II unit types ({{0}}/4)": "拥有7种II级单位中的任意4种（{{0}}/4）",
    "Packbray": "驮鸣者",
    "Patchcore": "补丁核",
    "Piercing Shot": "穿透射击",
    "Primitive hauler. Nobody bolted the exhaust-stack on. It grew that way.": "原始搬运者。没人给它拧上排气管——它自己长出来的。",
    "Psionic first striker with strong mental shielding. Hits before the enemy can react.": "灵能先手打击者，拥有强效精神护盾。在敌人反应之前出击。",
    "Pure colonization specialist, almost useless in direct combat.": "纯殖民专家，在直接战斗中几乎无用。",
    "Pure glass cannon striker": "纯玻璃大炮输出",
    "Recruit": "招募",
    "Recruit Units": "招募单位",
    "Recyclingworm": "回收蠕虫",
    "Regenerative": "再生",
    "Riceballrobot": "饭团机器人",
    "Rocketcow": "火箭牛",
    "Scorpraider": "蝎袭者",
    "Slips past fortified frontlines to strike at vulnerable targets behind the wall of meat.": "绕过坚固前线，攻击肉墙后方的脆弱目标。",
    "Soilkin": "土族",
    "Spy unit. Sees too much, says nothing useful. Send it where you cannot go yourself.": "间谍单位。看到太多，却不说任何有用的话。把它派去你无法亲自前往的地方。",
    "Stealth": "潜行",
    "Stealth assassin with high bioshield, hard to detect, resistant to psionic attacks, moves fast.": "潜行刺客，高生物护盾，难以探测，抵抗灵能攻击，移动迅速。",
    "Stealth transport unit, well-armored to protect its cargo, invisible until it strikes.": "潜行运输单位，重甲保护货物，在攻击前不可见。",
    "Tanktrotter": "坦克漫步者",
    "Tends the wild flora between watches. Produces 5 Biomass per hour when stationed in a territory.": "在守望之余照料野生植物。驻扎在领地时每小时产出5生物质。",
    "The blast tears through the fabric of space, bypassing all obstacles to strike first and strike hard.": "爆炸撕裂空间结构，绕过一切障碍，先发制人，重创敌人。",
    "The heaviest tank in existence": "现存最厚重的坦克",
    "The ultimate frontline tank": "终极前线坦克",
    "The ultimate kamikaze": "终极神风",
    "The ultimate offensive assassin": "终极进攻刺客",
    "Tier": "层级",
    "Titan": "泰坦",
    "Too full of volatile pressure to stop walking. Explodes on impact, destroying a random enemy unit. Fast enough to reach targets before they react.": "充满不稳定压力，无法停下脚步。撞击爆炸，摧毁随机敌方单位。速度快到在目标反应之前抵达。",
    "Trades combat power for massive cargo capacity. Strips wreckage during a raid, burrows away when defending.": "以战斗力换取巨大货运容量。突袭时清理残骸，防守时遁地逃脱。",
    "Vaultcradle": "宝库摇篮",
    "Veinslip": "脉遁者",
    "Wagawoo": "瓦嘎呜",
    "devastating first strike with armor-piercing attacks, but falls quickly under sustained fire.": "毁灭性先手打击配合穿甲攻击，但在持续火力下迅速倒下。",
    "enormous HP and defense, draws all enemy fire to protect your army.": "极高生命值与防御力，吸引所有敌方火力以保护你的部队。",
    "enormous attack, regenerates after self-destructing, but fragile if not detonating. It never quite understands what happens next.": "极高攻击力，自毁后可再生，但若不引爆则极为脆弱。它永远无法完全理解接下来会发生什么。",
    "extreme HP and defense, draws all fire, extremely slow.": "极致生命值与防御力，吸引所有火力，极慢速。",
    "high attack and speed, but fragile armor.": "高攻击力和速度，但护甲脆弱。",
    "hits hard, pierces armor and vanishes. When defending, it phases out of existence entirely. Fragile for its tier.": "重击穿甲后消失。防守时完全遁入虚无。同级中较为脆弱。",
    "lower HP than a tank but regenerates after destruction. Fast and cost-efficient.": "生命值低于坦克，但被摧毁后可再生。快速且成本效益高。",
    "Beings of mental or psionic power. Bypass the raw strength of Titans, but their focused attacks are lost in swarms.": "精神或灵能之力的存在。绕过泰坦的原始力量，但其集中攻击在蜂群中难以奏效。",
    "Biomass Consumption": "生物质消耗",
    "Build Cost": "建造成本",
    "Recruit ": "招募 ",
    "Speed": "速度",
    "{{0}} minutes {{1}} seconds": "{{0}}分{{1}}秒",
    "This unit does not belong to a specific archetype.": "此单位不属于特定原型。",
    "Masses of small, coordinated individuals. Overwhelm Psionics with their numbers but are vulnerable to the area attacks and armor of Constructs.": "大量小型协同个体。以数量压制灵能，但易受构造体的范围攻击和护甲克制。",
    " Stats:": " 属性：",
    "Capabilities:": "能力：",
    "Costs & Time:": "成本与时间：",
    "Quantity: ": "数量：",
    "Upkeep: ": "维护：",
    "0.1 Biomass/hr per unit. Total for 1": "每单位0.1 生物质/时。1个总计",
    "0.1/hr": "0.1/时",
    "Total Recruit Costs for 1": "招募1个的总成本",
    "Formless, adaptable entities. Effective against the rigid forms of Constructs but vulnerable to the overwhelming power of Titans.": "无形、可变的实体。克制构造体的刚性形态，但易受泰坦压倒性力量的打击。",
    " Lvl ": " 等级 ",
    " against the strong archetype. This same swing drives the ": " 对抗克制原型。同样的波动也推动着 ",
    " against the weak archetype,": " 对抗被克原型，",
    " as fuel, deducted once at departure based on travel time and each unit's hourly consumption rate. Allied stationing costs 3x fuel.": " 作为燃料，出发时根据行程时间和每单位每小时消耗率一次性扣除。盟友驻扎消耗3倍燃料。",
    " base + ": " 基础 + ",
    " building. They fight alongside your garrison when attacked. The ": " 建筑。它们在被攻击时与守军并肩作战。",
    " damage": " 伤害",
    " movement (faster than units, shortened by": " 移动（比单位快，可通过",
    " per Repair Services level).": " 每维修服务等级缩短）。",
    " research). Destroyed defenses beyond that capacity get a small free rebuild roll (": " 研究）。超出容量的摧毁防御设施获得小额免费重建掷骰（",
    " shown for Exploration encounters, so a force that counters you reads stronger than its raw stats suggest.": " 在探索遭遇中显示，因此克制你的部队读起来比其原始属性显示的更强。",
    // ===== 第七批：科技加成/原型/战斗机制 =====
    "+1% per level": "每级+1%",
    "+2% per level": "每级+2%",
    "+3% Attack / Lvl": "每级+3%攻击",
    "+3% Bioshield / Lvl": "每级+3%生物护盾",
    "+3% Defense / Lvl": "每级+3%防御",
    "+3% Health / Lvl": "每级+3%生命值",
    "+3% per level": "每级+3%",
    "+3% rebuild / Lvl, +capacity, faster recovery": "每级+3%重建/级，+容量，更快恢复",
    "-20% region-wide": "全区域-20%",
    "-3% per level": "每级-3%",
    ". Cost and research time scale per level, so progress slows naturally over time. Probability-based bonuses (Taunt, First Strike, Piercing, Regen) are clamped at 100%.": "。成本和研究时间随等级扩展，因此进度自然随时间放缓。基于概率的加成（嘲讽、先手打击、穿透、再生）上限为100%。",
    "10% of a destroyed NPC unit's resource cost becomes wreckage (same T4/T5 dampening). Bandit-raid & camp wreckage is further scaled down the stronger you are relative to the server.": "被摧毁NPC单位资源成本的10%变为残骸（T4/T5衰减同理）。土匪袭击和营地残骸会根据你相对于服务器的实力进一步缩小。",
    "120 base, 1.3x per level. Slots are reserved for the costliest lost units first. Regenerative units are not eligible (they have their own regeneration roll). Saved units return via a Rift Recovery movement (2-24 h, scaled by total value).": "基础120，每级×1.3。槽位优先预留给损失中成本最高的单位。再生单位不符合条件（它们有自己的再生掷骰）。被救单位通过裂隙回收移动返回（2-24小时，按总价值缩放）。",
    "15% per Round": "每回合15%",
    "25% Survival Chance": "25%生存几率",
    "25% chance to self-regenerate after being lost in combat. Regeneration chance improved by Regen Symbiosis research. Units with this capability cannot be saved by a Bunker. They rely on their own regeneration roll instead and never take a bunker slot.": "战斗中损失后有25%几率自我再生。再生几率可通过再生共生研究提升。具有此能力的单位无法被地堡救回。它们依赖自身的再生掷骰，永远不占用槽位。",
    "3 Spy, 1 Colonize, 30 Transport, 30 Salvage, 30 Farming slots. Infiltrator units are not affected by the sanctum.": "3间谍、1殖民、30运输、30回收、30农耕槽位。渗透者单位不受圣所影响。",
    "3 Spy, 1 Colonize, 30 Transport, 30 Salvage, 30 Farming. Hidden units skip combat entirely.": "3间谍、1殖民、30运输、30回收、30农耕。隐藏单位完全跳脱战斗。",
    "32% of a destroyed T1–T3 player unit's resource cost becomes wreckage. High-tier units yield less": "被摧毁T1–T3玩家单位资源成本的32%变为残骸。高级单位产出更少",
    "35% Ignore Taunt": "35%忽略嘲讽",
    "35% chance to ignore Taunt. This unit may slip past taunting enemies to strike at vulnerable targets behind the frontline.": "35%几率忽略嘲讽。此单位可能绕过嘲讽敌人，攻击前线后方的脆弱目标。",
    "35% of enemy army": "敌方军队的35%",
    "{{0}} minutes {{1}} seconds": "{{0}}分{{1}}秒",
    "50% of wreckage": "残骸的50%",
    "55% Redirect Chance": "55%引火几率",
    "55% chance to force enemy units to focus on this unit before other units can be attacked. Redirect chance improved by Fortified Line research.": "55%几率迫使敌方单位在其他单位可被攻击前先攻击此单位。引火几率可通过强化防线研究提升。",
    "6 Rounds": "6回合",
    "60 base, 1.3x per level. Shelters the costliest destroyed defenses and reforms them via a Rift Recovery movement, faster than units. Defenses beyond the capacity instead get the Repair Services free rebuild roll.": "基础60，每级×1.3。庇护损失中最昂贵的防御设施，并通过裂隙回收移动重新形成，比单位更快。超出容量的防御设施则获得维修服务的免费重建掷骰。",
    "Ability to colonize new, unclaimed territories.": "殖民新的、无人占领领地的能力。",
    "Ability to harvest wreckage fields left after combat. Cargo capacity and speed improved by Scavenger Networks research.": "收获战斗后残留残骸场的能力。货运容量和速度可通过拾荒者网络研究提升。",
    "Ability to salvage wreckage fields immediately after a battle. Cargo capacity and speed improved by Scavenger Networks research.": "战斗后立即回收残骸场的能力。货运容量和速度可通过拾荒者网络研究提升。",
    "Ability to spy on enemy territory.": "对敌方领地进行间谍活动的能力。",
    "Adaptive units effective vs Constructs, vulnerable to Titans": "适应型单位克构造体，弱泰坦",
    "Affected Capabilities": "受影响的能力",
    "Affected Units (": "受影响单位（",
    "All units consume ": "所有单位消耗 ",
    "Archetype System": "原型系统",
    "Archetypes are rock-paper-scissors. Bring units that counter what you expect to face.": "原型遵循石头剪刀布法则。携带克制你预期对手的单位。",
    "Armor Tech": "装甲科技",
    "Armored units that break Swarms, vulnerable to Shifters": "装甲单位克蜂群，弱变形者",
    "Attack bonus (Infiltrator units)": "攻击加成（渗透者单位）",
    "Attacking another player lets you loot up to 50% of their": "攻击其他玩家最多可掠夺其50%的",
    "Battles resolve in rounds. Composition and archetype matchups usually matter more than raw numbers.": "战斗以回合结算。编成和原型克制通常比单纯的数量更重要。",
    "Battles resolve over multiple rounds. Each round, units deal damage based on their attack stat, archetype matchups, special capabilities, and your combat technologies, while the defender's Defense stat reduces incoming damage. A fight ends when one side is eliminated or the round cap is reached. The sections below break each piece down.": "战斗以多个回合结算。每回合中，单位根据其攻击属性、原型克制、特殊能力及你的战斗科技造成伤害，同时防守方的防御属性减免所受伤害。当一方被消灭或达到回合上限时战斗结束。以下各节逐项分解。",
    "Beating back a bandit raid leaves a wreckage field on the map. Send a salvage mission to collect it. The richer you are relative to the server, the smaller that field.": "击退土匪袭击后在地图上留下残骸场。派遣回收任务收集它。你相对于服务器越富有，该残骸场就越小。",
    "Bioshiel": "生物护盾",
    "Bioshield Regen": "生物护盾再生",
    "Bunker Protection": "地堡防护",
    "Bypass Chance": "绕过几率",
    "Bypass-capable units have a 35% chance to slip past taunting enemies. Not improved by research.": "具有绕过能力的单位有35%几率越过嘲讽敌人。无法通过研究提升。",
    "Bypasses Titan strength with focus, vulnerable to Swarms": "以集中攻击绕过泰坦之力，弱蜂群",
    "Capabilities and combat tech (piercing, first strike, taunt, regeneration, armor) tilt fights.": "能力和战斗科技（穿透、先手打击、嘲讽、再生、装甲）左右战局。",
    "Cargo bonus (Infiltrator units)": "货运加成（渗透者单位）",
    "Cargo bonus (Salvage units)": "货运加成（回收单位）",
    "Cargo bonus (Transport units)": "货运加成（运输单位）",
    "Colossal units that shatter Shifters, vulnerable to Psionics": "巨像单位克变形者，弱灵能",
    "Combat Doctrines": "战斗教条",
    "Combat ends after 6 rounds if neither side is eliminated.": "若双方均未被消灭，战斗在6回合后结束。",
    "Conceals Utility Units": "隐藏功能单位",
    "Conceals utility units": "隐藏功能单位",
    "Damage Mechanics": "伤害机制",
    "Damage Reduction": "伤害减免",
    "Defender only": "仅防守方",
    "Defense Structures": "防御建筑",
    "Defense stat reduces incoming damage with diminishing returns. Maximum 60% reduction.": "防御属性以递减收益减免所受伤害。最高60%减免。",
    "Defense structures are stationary defenses built at territories via the ": "防御建筑是在领地通过",
    "Doctrines are advanced research nodes that buff specific unit capabilities. Each level adds a small percentage bonus to the affected mechanic. There is ": "教条是强化特定单位能力的高级研究节点。每级为所影响的机制增加小额百分比加成。",
    "Drillhand, Ghostweft, Veinslip": "钻手、幽织者、脉遁者",
    "Each unit has an archetype that determines combat advantages.": "每个单位都有一个决定战斗优势的原型。",
    "Each unit regenerates 15% of max bioshield every combat round.": "每个单位每战斗回合再生15%最大生物护盾。",
    "First Strike Activation": "先手打击激活",
    "First Strike Kill Cap": "先手打击击杀上限",
    "First Strike activation cap": "先手打击激活上限",
    "First Strike kill ceiling": "先手打击击杀上限",
    "First Strike phase can eliminate at most 35% of the enemy army. Improved by Shock Tactics research.": "先手打击阶段最多可消灭35%的敌方军队。可通过冲击战术研究提升。",
    "First Strike-capable units roll once per battle to act before all others. Minimum 40%, maximum 50%. Improved by Shock Tactics research.": "具有先手打击能力的单位每场战斗掷骰一次，可在所有其他单位之前行动。最低40%，最高50%。可通过冲击战术研究提升。",
    "First combat round damage (Stealth attackers)": "首轮战斗伤害（潜行攻击者）",
    "Frenbait, Cragwall, Vaultcradle": "诱饵怪、峭壁墙、宝库摇篮",
    "Fuel & Stationing": "燃料与驻扎",
    "Fuel Consumption": "燃料消耗",
    "Gov Edict": "治理法令",
    "How Combat Works": "战斗机制",
    "Hull Tech": "壳体科技",
    "Ignores 8% Defense": "忽略8%防御",
    "Ignores 8% of the target's Defense. Defense ignored improved by Kinetic Penetration research.": "忽略目标8%防御。忽略防御可通过动能穿透研究提升。",
    "Invisible on radars, strategically valuable. When attacking, deals bonus damage in the first combat round (improved by Signature Cloaking research).": "雷达不可见，具有战略价值。攻击时在首轮战斗中造成额外伤害（可通过特征隐形研究提升）。",
    "Loot & Wreckage": "战利品与残骸",
    "Loss & Recovery": "损失与恢复",
    "Losses are not always permanent. Bunkers and repair systems bring some back.": "损失并非总是永久的。地堡和维修系统可将部分救回。",
    "Master of first contact. Up to 50% chance to attack before all other units (rolled per battle). Can eliminate at most 35% of the enemy army in the First Strike phase. Activation chance and kill cap improved by Shock Tactics research.": "首触大师。最高50%几率在所有其他单位之前攻击（每场战斗掷骰）。在先手打击阶段最多可消灭35%的敌方军队。激活几率和击杀上限可通过冲击战术研究提升。",
    "Max Combat Rounds": "最大战斗回合",
    "Missions": "任务",
    "NPC camps can be fully plundered, your cargo capacity is the only limit": "NPC营地可被完全掠夺，唯一限制是你的货运容量",
    "Neutral": "中立",
    "No archetype bonus or penalty": "无原型加成或惩罚",
    "No level cap. Diminishing returns come from cost and time scaling.": "无等级上限。递减收益来自成本和时间的扩展。",
    "Nothing on ExoSiege dies willingly": "远征围攻上没有什么会心甘情愿地死去",
    "Overwhelms Psionics with numbers, vulnerable to Constructs": "以数量压倒灵能，弱构造体",
    "Packbray, Tanktrotter, Spoolhand, Rocketcow, Monkfarmer, Wagawoo": "驮鸣者、坦克漫步者、线轴手、火箭牛、僧农、瓦嘎呜",
    "Patchcore, Riceballrobot, Wagawoo": "补丁核、饭团机器人、瓦嘎呜",
    "Per level adds hidden slots": "每级增加隐藏槽位",
    "Piercing Shot defense ignore": "穿透射击忽略防御",
    "Plunder Percentage (NPC)": "掠夺百分比（NPC）",
    "Plunder Percentage (PvP)": "掠夺百分比（PvP）",
    "Prerequisites": "前置条件",
    "Production bonus (Farming units)": "产量加成（农耕单位）",
    "Protects": "保护",
    "Puller speed multiplier bonus": "牵引者速度倍率加成",
    "Pulls non-combat utility units (Spy/Colonize/Transport/Salvage/Farming) out of combat before it starts. Per level": "在战斗开始前将非战斗功能单位（间谍/殖民/运输/回收/农耕）拉出战斗。每级",
    "Pure offensive unit. When on the defending side, this unit phases out of existence. It cannot be attacked and does not participate in combat. It also takes no bunker space. Attack and cargo capacity improved by Infiltration Networks research.": "纯进攻单位。在防守方时，此单位遁入虚无。它无法被攻击且不参与战斗。也不占用槽位。攻击和货运容量可通过渗透网络研究提升。",
    "Recyclingworm, Gnashvoid": "回收蠕虫、啃噬虚空",
    "Reduces the biomass burned as travel fuel (down to a minimum of 25% of base)": "减少作为行进燃料燃烧的生物质（最低至基准的25%）",
    "Regeneration": "再生",
    "Regeneration chance": "再生几率",
    "Regional Unit Maintenance Reduction edict": "区域单位维护减免法令",
    "Repelled Raid Wreckage": "击退袭击残骸",
    "Required": "必需",
    "Rift Recovery": "裂隙回收",
    "Salvage it": "回收它",
    "Saves Defenses, Rift Recovery": "救护防御设施，裂隙回收",
    "Saves Units, Rift Recovery": "救护单位，裂隙回收",
    "Scrapmaws, Recyclingworm, Grizzcruncher, Bobawoll, Vaultcradle": "废铁嘴、回收蠕虫、灰咬者、波巴沃尔、宝库摇篮",
    "Self-destructive unit that guarantees losses on the enemy side in an attack. Ineffective for defense.": "自毁单位，攻击时保证敌方有损失。防守无效。",
    "Separate defense pool (does NOT share the Bunker's slots). Capacity": "独立防御池（不与地堡共享槽位）。容量",
    "Shelters defenses, most valuable first": "庇护防御设施，最昂贵的优先",
    "Shelters units, most valuable first": "庇护单位，最昂贵的优先",
    "Shields a share of your stored resources from plunder, growing with each level. Only protects you against player and bandit raids.": "将你存储资源的一部分隔离防止掠夺，随等级增长。仅保护你免受玩家和土匪袭击。",
    "Shields a share of your stored resources from plunder. The protected share grows with each level (around 1% at level 1, climbing faster as you build it up).": "将你存储资源的一部分隔离防止掠夺。受保护份额随等级增长（1级约1%，积累越多增长越快）。",
    "Skyray, Ashglider, Rocketcow, Boomburp": "天魟、灰烬滑翔者、火箭牛、轰鸣嗝",
    "Speed bonus (Salvage units, when slowest in army)": "速度加成（回收单位，军队中最慢时）",
    "Spinefly, Ashglider, Bobawoll, Gnashvoid": "脊刺蝇、灰烬滑翔者、波巴沃尔、啃噬虚空",
    "Stationed units with this capability generate resources over time for the territory they are in. Production yield improved by Utility Advancements research.": "具有此能力的驻扎单位会随时间为其所在领地产出资源。产量可通过通用升级研究提升。",
    "T4 ≈ 25%, T5 ≈ 15% of cost.": "T4≈25%、T5≈15%成本。",
    "Taunt Redirect": "嘲讽引火",
    "Taunt redirect chance": "嘲讽引火几率",
    "Taunt-capable units force enemy fire onto themselves before other units can be attacked. Improved by Fortified Line research.": "具有嘲讽能力的单位在其他单位可被攻击前，迫使敌方火力集中到自己身上。可通过强化防线研究提升。",
    "Tec": "科技",
    "Tech Bonuses": "科技加成",
    "Territory Defense": "领地防御",
    "The Bunker's UNIT pool. Slots are reserved for the most expensive lost units first. Regenerative units are not eligible (they have their own regeneration roll). Saved units do NOT return instantly. They travel back through a Rift Recovery movement that takes 2-24 hours depending on the total value rescued. Capacity scales 1.3x per building level.": "地堡的单位池。槽位优先预留给损失中最昂贵的单位。再生单位不符合条件（它们有自己的再生掷骰）。被救单位不会瞬间返回。它们通过裂隙回收移动返回，根据救回总价值需2-24小时。容量每建筑等级×1.3。",
    "The defense-side twin of the Bunker, with its OWN separate capacity pool (units and defenses never share slots). Shelters the most valuable destroyed defenses and reforms them through a Rift Recovery movement that is faster than units and shortened further by Repair Services research. Capacity scales 1.3x per building level. Destroyed defenses beyond the capacity instead get a small free rebuild roll.": "防御版的地堡，拥有自己的独立容量池（单位和防御设施永不共享槽位）。庇护最昂贵的被摧毁防御设施，并通过裂隙回收移动重新形成，比单位更快，可通过维修服务研究进一步缩短。容量每建筑等级×1.3。超出容量的摧毁防御设施则获得小额免费重建掷骰。",
    "This unit can be used to mass-transport resources. Cargo capacity improved by Utility Advancements research.": "此单位可用于大规模运输资源。货运容量可通过通用升级研究提升。",
    "Unit": "单位",
    "Unit Capabilities": "单位能力",
    "Unit pool. Capacity": "单位池。容量",
    "Units with Instant Salvage collect 50% of wreckage during combat": "具有即时回收能力的单位在战斗中收集50%残骸",
    "Units with Regeneration have a 25% chance to survive lethal damage (1 HP). Improved by Regen Symbiosis research. These units rely on this roll instead of the Bunker and are never sheltered by it.": "具有再生能力的单位有25%几率从致命伤害中存活（1HP）。可通过再生共生研究提升。这些单位依赖此掷骰而非地堡，且永远不会被地堡庇护。",
    "Units with this capability bypass 8% of target's defense. Improved by Kinetic Penetration research.": "具有此能力的单位忽略目标8%防御。可通过动能穿透研究提升。",
    "Unlocks defense construction. +2% defense build speed per level": "解锁防御建造。每级+2%防御建造速度",
    "Up to 50% per battle": "每场战斗最高50%",
    "Up to 60%": "最高60%",
    "Wreckage (NPC Units)": "残骸（NPC单位）",
    "Wreckage (Player Units)": "残骸（玩家单位）",
    "effective enemy strength": "有效敌方战力",
    "is the defense-side twin of the Bunker": "是防御版的地堡",
    "it has its own capacity pool that shelters the most valuable defenses you lose and reforms them through a": "它拥有自己的容量池，庇护你损失中最昂贵的防御设施，并通过",
    "no level cap": "无等级上限",
    "raises the Repair Station's defense capacity (+5% per level), speeds up its Rift Recovery for sheltered defenses, and gives the destroyed defenses it could NOT shelter a free rebuild roll (0% base + 3% per level). The Repair Station is the main protection; this research strengthens it on every axis.": "提升维修站的防御容量（每级+5%），加速其对受庇护防御设施的裂隙回收，并为其未能庇护的已摧毁防御设施提供免费重建掷骰（基础0%+每级3%）。维修站是主要防护；此研究在各个方面强化它。",
    "scout the target, then build a force that counters its defenders.": "侦察目标，然后组建克制其防守者的部队。",
    "the creatures you fight and the ones you command were both shaped by the planet, the difference is that yours listen.": "你战斗的对象和你指挥的生物都由行星塑造，区别只在于你的会听命。",
    // ===== 第八批：移动/军队/NPC/防御/队列/招募 =====
    " A bandit camp raiding your territory or outpost. Red for territories, orange for outposts.": " 袭击你领地或前哨的土匪营地。领地红色，前哨橙色。",
    " A hostile player army approaching your territory. Triggers attack warning notifications.": " 接近你领地的敌方玩家部队。触发攻击警告通知。",
    " An alliance member sending defensive support to your territory.": " 同盟成员向你的领地发送防御支援。",
    " An initiator creates an attack group and invites allies. All participating armies synchronize their arrival time to the slowest army. The invitation window closes automatically, and all armies strike simultaneously. Combined forces fight as one side in combat.": " 发起人创建攻击组并邀请盟友。所有参战部队同步到达时间至最慢部队。邀请窗口自动关闭，所有部队同时出击。联合部队作为一方参与战斗。",
    " NPC armies delivering payouts or other rewards.": " NPC部队运送报酬或其他奖励。",
    " NPC for hourly resource rewards. Requires ": " NPC获取每小时资源奖励。需要 ",
    " Rift Recovery": " 裂隙回收",
    " as fuel for the journey, deducted at departure based on travel time.": " 作为旅程燃料，根据行程时间在出发时扣除。",
    " as the colony's initial garrison (no need for a separate follow-up march)": " 作为殖民地的初始守军（无需另行行军跟进）",
    " at any time (useful when an outpost needs to relocate or the slot is otherwise blocked), but the rescued forces are then permanently lost. A confirmation modal warns before the abandon goes through.": " 随时（当前哨需要迁移或槽位被阻塞时很有用），但被救回的部队将永久损失。放弃前会弹出确认提示。",
    " building at the target territory (+1 allied army slot per level).": " 目标领地的建筑（每级+1同盟部队槽位）。",
    " cancelled": " 已取消",
    " capability (Scrapmaws, Recyclingworm).": " 能力（废铁嘴、回收蠕虫）。",
    " compared to normal movements": " 与普通移动相比",
    " level versus the target's": " 等级对比目标的",
    " movement, scaled by the total resource value rescued (more valuable saves take longer). Unit recoveries take between 2 and 24 hours; defense recoveries are faster and are shortened further by": " 移动，按救回总资源价值缩放（价值越高耗时越长）。单位恢复需2-24小时；防御恢复更快，且可通过",
    " or ": " 或 ",
    " per level), which also unlocks higher-tier salvage jobs": " 每级），同时解锁更高级回收工作",
    " per level).": " 每级）。",
    " per tech level.": " 每科技等级。",
    " research. The movement appears in your active-army list and deposits the forces when it arrives. Recovery movements can be": " 研究。移动显示在你的活跃部队列表中，到达后交付部队。回收移动可被",
    " section for damage mechanics.": " 节了解伤害机制。",
    " section for full details.": " 节了解完整详情。",
    " tech (+1 hour per level).": " 科技（每级+1小时）。",
    " tech (+1 per level)": " 科技（每级+1）",
    " tech (+1 per level) and ": " 科技（每级+1）和 ",
    " tech (+1 slot per 2 levels). Maximum exploration hours increased by ": " 科技（每2级+1槽位）。最大探索时长增加 ",
    " tech, +": " 科技，+",
    " tech, +1 per level). Units consume ": " 科技，每级+1）。单位消耗 ",
    " to allow for preparation. If the calculated travel time is shorter, the army will take the minimum instead.": " 以留出准备时间。若计算行程时间更短，部队将以最短时间为准。",
    " to found the colony": " 建立殖民地",
    " too (up to army cargo). They are delivered to the new colony": " 也一样（最高以部队货运为限）。它们被运送到新殖民地",
    " upon arrival": " 到达时",
    " while en route, ": " 在途中，",
    "(on-site)": "（就地）",
    "(outbound)": "（出征）",
    "+25% region-wide": "全区域+25%",
    "-hour colonization protection": "小时殖民保护",
    ". Each army consumes one of your available army slots (increased by ": "。每支部队消耗一个可用槽位（可通过",
    ". See the ": "。参见 ",
    ". The mission fails if the location is already claimed upon arrival.": "。若到达时位置已被占领，任务失败。",
    "1.5x speed": "1.5倍速度",
    "3x fuel": "3倍燃料",
    ": raises Salvage and Instant-Salvage cargo capacity and speed (the speed bonus only applies when the salvager is the slowest unit in the army).": "：提升回收和即时回收的货运容量和速度（速度加成仅在回收者是部队中最慢单位时生效）。",
    ": raises Transport-unit cargo capacity, the speed multiplier Puller units grant to slower companions, and the resource yield of stationed Farming units.": "：提升运输单位货运容量、牵引者赋予较慢同伴的速度倍率，以及驻扎农耕单位的资源产量。",
    "After any mission, armies automatically return home.": "任何任务完成后，部队自动返回。",
    "After completing a mission, armies automatically return to their origin. Displayed as a dashed line with reduced opacity on the map.": "完成任务后，部队自动返回出发地。在地图上以降低透明度的虚线显示。",
    "All movements have a ": "所有移动都有 ",
    "Allied Support.": "同盟支援。",
    "Allied stationing costs ": "同盟驻扎消耗 ",
    "Armies can be dispatched from ": "部队可从",
    "Army Origins": "部队来源",
    "Army gathers until cargo is full or the target is depleted": "部队收集直到货运满了或目标耗尽",
    "Army moves at the speed of its slowest unit": "部队以最慢单位的速度移动",
    "Army speed is set by the slowest unit. Puller units can raise the whole army's pace.": "部队速度由最慢单位决定。牵引者可提升整支部队的步伐。",
    "Attack and Multi-Party Attack against player territories": "攻击和多方联合攻击玩家领地",
    "Bandit Raid.": "土匪袭击。",
    "Bio Forge Nexus": "生物锻造核心",
    "Bring any other units along. They are ": "带上任何其他单位。它们 ",
    "Can be recalled at any time by either the sender or the host": "发送方或接收方可随时召回",
    "Claim an empty position as a new territory. The army needs at least one ": "占领空地作为新领地。部队至少需要一名 ",
    "Collect resources from a Wreckage Field or Lost Ruin. Requires units with the ": "从残骸场或失落废墟收集资源。需要具有 ",
    "Covert intelligence-gathering on an enemy territory, outpost, or scoutable NPC (Bandit Camp, Scientist, Warmonger Camp). Success depends on your ": "对敌方领地、前哨或可侦察NPC（土匪营地、科学家、战争贩子营地）的秘密情报收集。成功取决于你的 ",
    "Deploy units at an ally's territory to provide defensive support. Requires a ": "将单位部署到盟友领地以提供防御支援。需要 ",
    "Each unit has a base speed stat (SPD)": "每个单位有基础速度属性（SPD）",
    "Espionage": "间谍",
    "Every army consumes one of your limited slots and burns biomass as fuel on departure.": "每支部队消耗一个有限槽位，并在出发时消耗生物质作为燃料。",
    "Expansion": "扩张",
    "Exploration slots are limited by ": "探索槽位受 ",
    "Exploring": "探索中",
    "Incoming Attack.": "来袭攻击。",
    "Intel": "情报",
    "Load ": "装载 ",
    "Logistics": "后勤",
    "Mechanics": "机制",
    "Movement-Relevant Doctrines": "与移动相关的教条",
    "Moving across ExoSiege is not like crossing a map.": "穿越远征围攻不像是跨越一张地图。",
    "Moving resources or units to your own territories, outposts, NPC Traders, Hostages, Corebloom Lithocyte, or governance tiles (candidacy deposits). Cargo capacity is determined by unit type (improved by ": "将资源或单位运送至你的领地、前哨、NPC商人、人质、核芯绽放岩石细胞或治理地块（候选人押金）。货运容量由单位类型决定（可通过",
    "Multi-Party Attack:": "多方联合攻击：",
    "Neutral Movement.": "中立移动。",
    "New territories receive ": "新领地获得 ",
    "Normal Movements": "普通移动",
    "Offense": "进攻",
    "Once arrived, the army actively explores. Duration determines the tier of events encountered (longer = higher tier rewards).": "到达后部队主动探索。时长决定遭遇事件等级（越长=越高等级奖励）。",
    "One Soilkin is ": "一名土族 ",
    "PVP Attacks": "PVP攻击",
    "PVP attacks have a longer minimum travel time, giving defenders time to react.": "PVP攻击有更长的最短行程时间，给防守方反应时间。",
    "Per unit type": "每种单位类型",
    "Pick the right mission type": "选择正确的任务类型",
    "Preparation Time": "准备时间",
    "Puller Capability": "牵引能力",
    "Puller units (Spoolhand, Rocketcow) each speed up one slower unit, assigned to the slowest first. Bring roughly one Puller per slow unit to lift the whole army's pace.": "牵引者单位（线轴手、火箭牛）各加速一个较慢单位，优先分配给最慢的。大致每有一个慢速单位就带一个牵引者，以提升整军步伐。",
    "Recovers the field's full contents, limited only by your army's cargo space": "回收场地全部内容，仅受部队货运空间限制",
    "Regional Army Speed Boost edict": "区域军队速度加成法令",
    "Returning Armies": "返回中的部队",
    "Salvage Tech": "回收科技",
    "Send your army to attack an enemy territory, outpost, Bandit Camp, Scientist, or Warmonger Camp. Combat resolves on arrival. See the ": "派遣部队攻击敌方领地、前哨、土匪营地、科学家或战争贩子营地。到达时结算战斗。参见 ",
    "Sending Armies": "派遣部队",
    "Slowest unit": "最慢单位",
    "Speed & Timing": "速度与时间",
    "Speed Factors": "速度因素",
    "Spy Tech": "间谍科技",
    "Station (Allied)": "驻扎（同盟）",
    "Station (NPC Support)": "驻扎（NPC支援）",
    "Station (Own Territory / Outpost)": "驻扎（己方领地/前哨）",
    "Station (Raid)": "驻扎（突袭）",
    "Station units at a ": "将单位驻扎在 ",
    "Station units at your own territory or outpost. Units and resources are deposited directly into the target on arrival and the army is disbanded.": "将单位驻扎在己方领地或前哨。单位和资源到达时直接存入目标，部队解散。",
    "Stationed": "驻扎中",
    "Stationed units fight alongside the defender if the territory is attacked": "领地受攻击时，驻扎单位与防守方并肩作战",
    "Stationing Pending": "驻扎待定",
    "Stationing at a Warmonger Fort or Hidden Lab during the collection phase automatically joins the raid. Multiple players station their armies. Once the phase ends, combat triggers automatically.": "在收集阶段于战争贩子要塞或隐秘实验室驻扎将自动加入突袭。多名玩家驻扎其部队。阶段结束后自动触发战斗。",
    "Status: ": "状态：",
    "Technology bonus to all army movement": "全部队移动的科技加成",
    "Territory cap": "领地上限",
    "The longer PVP preparation time gives defenders a window to react to incoming attacks. Return trips are not affected by this minimum.": "更长的PVP准备时间给防守方留出应对来袭攻击的窗口。回程不受此最短时间影响。",
    "Threats": "威胁",
    "Transport, Explore, Colonize, Salvage, Spy, Station, NPC attacks": "运输、探索、殖民、回收、间谍、驻扎、NPC攻击",
    "Two Combat-Research doctrines also reshape army logistics. Full mechanics and per-level values are documented in the Combat section.": "两项战斗研究教条也重塑军队后勤。完整机制和每级数值记录在战斗章节中。",
    "Use these to grow your footprint and scout new ground.": "用这些来扩大版图和探索新土地。",
    "Use these to learn what an enemy or a position holds.": "用这些来了解敌人或某位置的虚实。",
    "Use these to move resources and units or feed support locations.": "用这些来运送资源和单位或补给支援点。",
    "Use these to take resources or break an enemy.": "用这些来夺取资源或击溃敌人。",
    "When a Bunker saves units, or a Repair Station saves defenses, from a defensive combat, those forces do not snap back to your territory or outpost instantly. They travel home through the rift as a dedicated ": "当地堡救回单位，或维修站救回防御设施时，这些部队不会瞬间回到你的领地或前哨。它们通过裂隙作为专用",
    "Yield raised by ": "产量提升 ",
    "Your army travels to the target location. No discoveries during transit. Cannot target governance tiles.": "你的部队前往目标位置。行进中无发现。不能以治理地块为目标。",
    "armies can attack, haul resources, reinforce allies, explore, colonize, salvage, or spy.": "部队可攻击、运送资源、增援盟友、探索、殖民、回收或侦察。",
    "consumed": "已消耗",
    "increased by": "提升于",
    "minimum travel time": "最短行程时间",
    "stationed": "驻扎中",
    "tech (0 slots without it, +1 slot per 2 levels once unlocked). Payment bonus": "科技（无此科技则0槽位，解锁后每2级+1槽位）。报酬加成",
    // ===== 第九批：单位图鉴/防御NPC/队列/招募 =====
    " (piercing, regeneration, bunker protection, and more). How those resolve in a fight, the damage math, and the full capability list all live in the Combat article.": "（穿透、再生、地堡防护等）。这些在战斗中的结算方式、伤害计算以及完整能力列表均在战斗文章中有详述。",
    " as ongoing upkeep, drawn from the territory they sit in. ": " 作为持续维护，从其所在的领地提取。",
    " or": " 或",
    " research covers a flat amount for free, and a Recycler lowers the rest. If a territory's stored biomass hits zero it becomes ": " 研究免费覆盖固定数量，回收器降低其余。若领地存储生物质归零则变为 ",
    " shortens recruitment time, and a ": " 缩短招募时间，",
    " speeds it up further. The Workshop only affects defense construction.": " 进一步加速。工坊仅影响防御建造。",
    " until biomass is back in the black. Speed and cargo are not affected. Check each unit's consumption rate when planning army composition.": " 直到生物质恢复正值。速度和货运不受影响。规划部队编制时请查看各单位的消耗率。",
    " with rock-paper-scissors matchups, and many carry special ": " 拥有石头剪刀布的克制关系，许多还携带特殊的 ",
    "/hr upkeep": "/时 维护",
    "1 Defenses": "1 防御设施",
    "1 NPC Units": "1 NPC单位",
    "1 Units": "1 单位",
    "2 Defenses": "2 防御设施",
    "2 NPC Units": "2 NPC单位",
    "2 Units": "2 单位",
    "3 Defenses": "3 防御设施",
    "3 NPC Units": "3 NPC单位",
    "3 Units": "3 单位",
    "33% of its attack, defense, health, and bioshield": "其攻击、防御、生命值和生物护盾的33%",
    "4 Defenses": "4 防御设施",
    "4 NPC Units": "4 NPC单位",
    "4 Units": "4 单位",
    "5 Defenses": "5 防御设施",
    "5 NPC Units": "5 NPC单位",
    "5 Units": "5 单位",
    ": nothing dies, but every unit and defense there fights at only ": "：无单位死亡，但每个单位和防御设施仅以",
    "A bizarre insectoid beast known only for its lethality.": "一种仅以致命性著称的怪异昆虫野兽。",
    "A grim construct designed to drain vital fluids from its victims.": "一具阴森的构造体，专门汲取受害者的生命体液。",
    "A terrifying beast seemingly made of metal and teeth, consuming everything that breathes.": "一头看似由金属和牙齿构成的恐怖野兽，吞噬一切呼吸之物。",
    "A walking fortress of flesh and metal, bristling with weaponry and seemingly impervious to harm.": "一座由血肉和金属构成的移动堡垒，布满武器，看似对伤害免疫。",
    "Adapted for swamps and hardier than it appears.": "适应沼泽，比外表更坚韧。",
    "Approaching hostiles lose coordination before they reach the perimeter.": "逼近的敌人到达边界前就失去了协调。",
    "Archetypes & Capabilities": "原型与能力",
    "Biomass Upkeep": "生物质维护",
    "Blightbomber": "枯萎轰炸者",
    "Brankuv": "布兰库夫",
    "Build a Training Camp to recruit faster.": "建造训练营以加速招募。",
    "Burrows through the earth and erupts amidst enemy lines to cause chaos and devastation.": "钻穿大地，在敌军阵线中爆裂而出，制造混乱与毁灭。",
    "Cargo": "货运",
    "Charges headlong into enemy lines and detonates on impact, trading its life for guaranteed destruction.": "一头冲进敌阵并碰击引爆，以生命换取确保的毁灭。",
    "Chitinpike": "甲壳矛",
    "Colony scouts learned early": "殖民地侦察兵很早就学到了",
    "Core Stats": "核心属性",
    "Corescorch": "核焦",
    "Crawwl": "爬行者",
    "Crystal Tower": "水晶塔",
    "Damage dealt per round": "每回合造成伤害",
    "Damage reduction (diminishing returns)": "伤害减免（递减收益）",
    "Defenses": "防御设施",
    "Detonmite": "引爆螨",
    "Doomspore": "末日孢子",
    "Doomweevil": "末日象甲",
    "Each one carries enough volatile matter to level a fortification. They do not survive deployment. Nothing near them does either.": "每个携带的不稳定物质足以夷平一座防御工事。它们不会在部署后存活。它们附近的也一样。",
    "Eclipsewing": "蚀翼",
    "Effective against light armor.": "对轻甲有效。",
    "Every unit belongs to an ": "每个单位属于一种 ",
    "Every unit has an archetype and special capabilities that set its role in combat.": "每个单位都有决定其战斗角色的原型和特殊能力。",
    "Everything on the wrong side takes sustained damage from dimensional bleed.": "站错边的一切都会承受持续的维度渗流伤害。",
    "Fast-moving, its strikes stun targets and bypass armor.": "快速移动，攻击可击晕目标并绕过护甲。",
    "Feeding schedule": "喂养计划",
    "Fires once per engagement. The crater stays warm for weeks.": "每场交战只发射一次。弹坑会温暖数周。",
    "Flickers in and out of phase, making it a disorienting and elusive foe on the battlefield.": "忽隐忽现，使其成为战场上令人晕眩和难以捉摸的敌人。",
    "Generates a short-lived gravitational collapse on a single target. The heavier they are, the worse it gets.": "对单个目标产生短暂的引力坍缩。目标越重，后果越糟。",
    "Ghostveil Generator": "鬼幕生成器",
    "Goliath": "哥利亚",
    "Gravmaw": "引力喉",
    "Hardened chitin stakes punch clean through plate armor.": "硬化甲壳桩可干净利落地贯穿板甲。",
    "Hit points before the unit is destroyed": "单位被摧毁前的生命值",
    "Hostile creatures the planet spawns. You cannot recruit them, you only meet them in combat": "行星孕育的敌对生物。你无法招募它们，只能在战斗中遭遇",
    "How combat works": "战斗机制",
    "Individually weak, collectively it makes everything else hit harder.": "个体弱小，群体上它让其他一切打得更狠。",
    "Isotope Bomb Silo": "同位素炸弹井",
    "Its massive form draws enemy fire with an unnatural magnetic pull.": "其庞大身躯以非自然的磁性拉力吸引敌方火力。",
    "Its silent passing is a harbinger of a swift and certain doom, striking from the shadows.": "它无声的经过是迅速且确定厄运的预兆，从阴影中出击。",
    "Its singular purpose is to close distance and rupture, dissolving enemy armor in a cascade of toxic detonation.": "它唯一的目的就是接近并爆裂，以一连串有毒爆炸溶解敌方护甲。",
    "Known for surprise attacks from below. When captured, its alien biology demands constant sustenance and cannot be maintained for free.": "以来自地下的突袭著称。捕获后，其异星生物学需要持续供给，无法免费维持。",
    "Materializes only at the moment it strikes.": "仅在攻击瞬间具现。",
    "Max Defense Queue": "最大防御队列",
    "Max Recruitment Queue": "最大招募队列",
    "Most units cost biomass per hour. Let a territory run dry and everything there fights at reduced power.": "大多数单位每小时消耗生物质。让领地枯竭，那里的一切将以削弱战力作战。",
    "Most units, and some defenses, consume ": "大多数单位及部分防御设施消耗 ",
    "Movement speed on the map": "地图上的移动速度",
    "NPC Units": "NPC单位",
    "Neural Scrambler": "神经扰乱器",
    "Nexlung": "奈克斯肺",
    "Once called a peacekeeper in the old world. Nobody knows how many are left.": "曾在旧世界被称为维和者。没人知道还剩多少。",
    "Overview": "概述",
    "Per territory": "每个领地",
    "Player Units": "玩家单位",
    "Prismrake": "棱镜耙",
    "Projects a psi-field that bends perception. Other defenses nearby gain a chance to be overlooked entirely on first contact.": "投射扭曲感知的灵能场。附近的其他防御设施在首次接触时有几率被完全忽略。",
    "Psi-Ward": "灵能护罩",
    "Psionic attackers get their own signal reflected back at amplified strength.": "灵能攻击者的信号以放大强度反射回去。",
    "Queue Mechanics": "队列机制",
    "Recruit units to form armies for attack, defense, exploration, espionage, and transport. Build defenses to protect your territories. Each unit type has unique stats, an archetype, and special capabilities that determine its role in combat.": "招募单位组成军队，用于攻击、防御、探索、间谍和运输。建造防御设施保护领地。每类单位有独特属性、原型和决定其战斗中角色的特殊能力。",
    "Recruiting": "招募中",
    "Recruitment": "招募",
    "Regenerating barrier (absorbs damage first)": "再生屏障（优先吸收伤害）",
    "Reliable, brutal, draws power straight from the planet's metabolism.": "可靠、凶猛，直接从行星代谢中汲取能量。",
    "Resonant Obelisk": "谐振方尖碑",
    "Resource carrying capacity for transport": "资源运输承载容量",
    "Rooclad": "鲁克拉德",
    "Shockmite": "冲击螨",
    "Spectre": "幽灵",
    "Spits corrosive acid that melts through basic armor.": "吐出融化基本护甲的腐蚀性酸液。",
    "Spitter Turret": "喷吐炮塔",
    "Spore Minefield": "孢子雷区",
    "Swarm units disintegrate. Single targets can dodge.": "蜂群单位瓦解。单个目标可以闪避。",
    "Terraforming Maw": "地貌改造之喉",
    "The planet breeds its own soldiers, every unit biomass made sentient, every defense a root system turned lethal.": "行星培育自己的士兵，每个单位生物质化为感知体，每座防御设施变成致命的根系。",
    "The planet keeps growing it back, which saves on maintenance.": "行星会持续让它长回来，省了维护的功夫。",
    "The pulse hits everything in range. Heavy, slow to build, hard to ignore.": "脉冲击中范围内一切。沉重、建造缓慢、难以忽视。",
    "Though not powerful, its resilience is noteworthy.": "虽不算强大，其韧性值得注意。",
    "Unit Catalog": "单位目录",
    "Units are recruited at a specific territory. Build time scales linearly with quantity. A ": "单位在特定领地招募。建造时间随数量线性增长。",
    "Units at a Glance": "单位一览",
    "Units form your armies for attack, defense, exploration, espionage, and transport. Defenses guard territories.": "单位组成你的军队，用于攻击、防御、探索、间谍和运输。防御设施守护领地。",
    "Units you can recruit and field in your own armies.": "你可招募并投入己方军队中的单位。",
    "Vitalsipper": "生命吮吸者",
    "Void Rift Emitter": "虚空裂隙发射器",
    "Voidmaw": "虚空喉",
    "Warphound": "跃迁猎犬",
    "Weavespine": "编织脊",
    "archetype": "原型",
    "bandit camps, raids, and other PvE encounters.": "土匪营地、袭击和其他PvE遭遇。",
    "biomass per hour": "生物质/时",
    "field a small balanced army before you specialise.": "在专精化之前组建一支小型均衡部队。",
    "the planet's flora explodes if you step wrong.": "行星的植物群会在你踏错时爆发。",
    "undersupplied": "补给不足",
    "whenever something steps on it.": "当有东西踩到它时。",
    "4 minutes": "4分钟",
    "{{0}}m": "{{0}}分钟",
    "Clear the reformed camp.": "清理重新形成的营地。",
    "Counter picks win": "克制选择制胜",
    "Do it while the army marches. It leaves you at the level your next tech needs, so nothing sits idle.": "在部队行军期间做。它会让你刚好达到下一科技需要的等级，不闲置任何东西。",
    "Finish What You Started": "完成你开始的",
    "Raise the Research Institute to 3.": "将研究所升至3级。",
    "Recruit 5 Scrapmaws": "招募5只废铁嘴",
    "Recruit 5 Scrapmaws.": "招募5只废铁嘴。",
    "Scrapmaws are scavengers that pry open battlefield wreckage before the planet swallows it. Raise a salvage crew now so you are ready to strip this camp's remains the moment it falls.": "废铁嘴是在行星吞回之前撬开战场残骸的拾荒者。现在就组建一支回收小队，这样你就能在营地陷落时立即清理其残骸。",
    "The camp reformed nearby. Nothing stays dead on ExoSiege. Clear the new bandit camp (golden ring) for good. The fight buys you time, so use it": "营地已在附近重新形成。远征围攻上没有什么会永远死去。彻底清理新的土匪营地（金环）。战斗为你争取了时间，好好利用它",
    "each archetype is strong against one and weak against another, up to fifty percent damage either way.": "每个原型克制一种并被另一种克制，伤害波动最高可达50%。",
    "raise your Research Institute to level 3, and recruit 5 Scrapmaws. Scrapmaws are scavengers that pry open battlefield wreckage before the planet swallows it, so this camp's remains will be yours to strip next.": "将研究所升至3级，招募5只废铁嘴。废铁嘴是在行星吞回之前撬开战场残骸的拾荒者，因此这个营地的残留将是你接下来要获取的。",
    "Go to Recruit 5 Scrapmaws": "前往招募5只废铁嘴",
    "Own any 4 of 7 Tier II unit types ({{0}}/4)": "拥有7种II级单位中的任意4种（{{0}}/4）",
    "Go to Espionage techniques": "前往间谍技术",
    "Prerequisites not met.": "前置条件未满足。",
    "Go to Training camp": "前往训练营",
    "0.2 Biomass/hr per unit. Total for 1": "每单位0.2 生物质/时。1个总计",
    "0.2/hr": "0.2/时",
    "Archetype:": "原型：",
    "1 important, 6 total unread": "1条重要，共6条未读",
    " Wreckage": " 残骸",
    " killed": " 已击杀",
    "1 return": "1 返回",
    "{{0}} quests, {{1}} quests": "{{0}}个任务，{{1}}个任务",
    "42m": "42分钟",
    "Nearby Bandit Camp Destroyed": "附近土匪营地已摧毁",
    "Resources gained": "获得资源",
    "WIN": "胜利",
    "COMBAT": "战斗",
    "": "",
    "": "",
    "": "",
    "": "",

    // ===== 第十批：教程引导/社交链接/通知 =====
    "Logistical Support": "后勤支援",
    "Reward:": "奖励：",
    "Semi-transformed group that still cooperates if you maintain a presence. Station troops and they'll share surface materials.": "半转化群体，只要你保持存在就会合作。驻派部队，它们会分享地表材料。",
    "Total Healt": "总生命值",
    "Loading Unit & Defense Data...": "正在加载单位与防御数据……",
    "Not enough resources for this quantity.": "资源不足以支撑此数量。",
    "-> Origin": "-> 来源",
    "Army Returned": "军队已返回",
    "Army Returned from Attack": "军队攻击归来",
    "Army has safely returned. Units": "军队已安全返回。单位",
    "Low": "低",
    "Units:": "单位：",
    "Today": "今天",
    "No unread notifications.": "没有未读通知。",
    "Arriving...": "正在抵达……",
    "Be careful": "小心",
    "This is ExoSiege": "这是远征围攻",
    "don't lose your small army.": "别丢掉你的小部队。",
    "the others around here will be much stronger. Now you will have some time to prepare": "附近其他的会强大得多。现在你有一些时间来准备",
    "Connect your account for alerts": "连接账号以获取警报",
    "Join the Signal": "加入信号",
    "Later": "以后再说",
    "Link Discord.": "链接Discord。",
    "Link your Discord account": "链接你的Discord账号",
    "Other ExoSiegers gather off-world. Join the Discord": "其他远征围攻者在星球外交汇。加入Discord",
    "and pull the colony into the wider signal.": "并将殖民地拉入更广阔的信号网。",
    "coordination and a small reward. You can skip this one.": "协调配合与一份小额奖励。你可以跳过这一步。",
    "link your account": "链接你的账号",
    "social": "社交",
    "Go to Link your Discord account": "前往链接你的Discord账号",
    "/link": "/link",
    "1. Click \"Generate Code\" below": "1. 点击下方的\"生成代码\"",
    "2. Copy the code": "2. 复制代码",
    "3. Go to the ExoSiege Discord server": "3. 前往远征围攻Discord服务器",
    "4. Type ": "4. 输入",
    "Copy": "复制",
    "Discord-DMs and PWA push notifications are available after linking. Configure in": "链接后可使用Discord私信和PWA推送通知。配置于",
    "Free Linking Bonus": "免费链接奖励",
    "Generate Code": "生成代码",
    "How it works:": "操作说明：",
    "Join Discord Server": "加入Discord服务器",
    "Link your Discord account to claim these free resources:": "链接你的Discord账号以领取这些免费资源：",
    "Settings → Notifications → Channels": "设置 → 通知 → 频道",
    "attacked?": "被攻击了？",
    "https://discord.gg/gNrccFVQxD": "https://discord.gg/gNrccFVQxD",
    "in chat": "在聊天中",
    "then paste your code into the token field": "然后将代码粘贴到令牌字段",
    " and:": " 以及：",
    " field": " 字段",
    " in any channel": " 在任意频道中",
    "1. Type ": "1. 输入",
    "2. Paste your code into the ": "2. 将代码粘贴到",
    "Discord does not allow pasting slash commands directly.": "Discord不允许直接粘贴斜杠命令。",
    "ExoSiege Discord": "远征围攻 Discord",
    "New Code": "新代码",
    "Your linking code:": "你的链接代码：",
    "token": "令牌",
    "Click to copy": "点击复制",
    "Remind me after my second colony": "在我建立第二个殖民地后提醒我",

    // ===== 第十一批：任务名称与描述（A-D）=====
    "A New Horizon": "新地平线",
    "A Rift Support Force materialises a temporary garrison at your territory or outpost. Activate one and feel the slot fill up.": "裂隙支援部队会在你的领地或前哨具现一支临时驻军。激活一个，感受槽位被填满。",
    "A salvage run takes time. Spend it researching Command Structure to level 1 so you can lead a second army at once. Your Research Institute is already level 3": "回收行动需要时间。利用这段时间把指挥结构研究到1级，这样你就能同时率领第二支军队。你的研究所已经是3级了",
    "Advanced Combat Doctrine": "高级战斗教条",
    "Advanced Materials": "高级材料",
    "Alliance Member": "同盟成员",
    "Alliances build Megastructures together": "同盟共同建造巨构",
    "Allies defend each other.": "盟友互相保护。",
    "An army is only as good as its equipment. Build a Workshop to unlock defensive capabilities.": "军队的实力取决于装备。建造工坊以解锁防御能力。",
    "Avatar": "头像",
    "Avatar Border": "头像边框",
    "Battlefield wreckage you can already strip with your Scrapmaws. Lost Ruins are a different story": "你已经可以用废铁嘴清理的战场残骸。但失落废墟则是另一回事",
    "Biomass Efficiency Expert": "生物质效率专家",
    "Break the Silence": "打破沉默",
    "Call the Cavalry": "召唤骑兵",
    "Complete an exploration mission": "完成一次探索任务",
    "Completed": "已完成",
    "Contain the Outbreak": "遏制疫情",
    "Corebloom tribute": "核芯绽放献祭",
    "Counter Intelligence": "反间谍",
    "Deeper expeditions pay more and threaten more. Match the army to the tier.": "更深的远征回报更高，威胁也更大。让军队匹配层级。",
    "Defeat a Scientist on the map": "在地图上击败一名科学家",
    "Defeat a Warmonger on the map": "在地图上击败一名战争贩子",
    "Dimensional Gateway": "次元之门",
    "Diplomatic Channels": "外交渠道",
    "Drone Swarm Protocol": "蜂群无人机协议",
    "During a Corebloom event": "在核芯绽放事件期间",
    "Each colony has its own queues. Build orders keep many colonies from becoming a chore.": "每个殖民地都有各自的队列。建造指令让管理多个殖民地不至于变成苦差。",
    "Each ruin holds a limited haul": "每座废墟的收获量有限",
    "Each tier gates the next.": "每层都封锁着下一层。",
    "Earlier ExoSieger colonies litter the surface. Some of their tech still works. Send Scrapmaws to a Lost Ruin and pull what is left out before the planet finishes covering it.": "早期远征围攻者的殖民地遍布地表。它们某些科技仍能运作。派废铁嘴去失落废墟，在行星彻底掩埋之前把残留的东西拉出来。",
    "Early on": "早期",

    // ===== 模板（第十批变量）=====
    "Bandit Camp ({{0}})": "土匪营地（{{0}}）",
    "Click to recruit {{0}} Scrapmaws": "点击招募{{0}}只废铁嘴",
    "Qty {{0}}": "数量{{0}}",
    "{{0}} quests": "{{0}}个任务",
    "{{0}} types.": "{{0}}种类型。",
    "Position ({{0}})": "位置（{{0}}）",
    "View {{0}} on map": "在地图上查看{{0}}",
    "{{0}} - Cycle {{1}}": "{{0}} - 周期{{1}}",
    "Recruitment of {{0}}x Scrapmaws complete! (Origin)": "招募{{0}}只废铁嘴完成！（起源）",
    "{{0}} vs {{1}}": "{{0}} 对决 {{1}}",
    "{{0}}x": "{{0}}个",
    "Expires in {{0}}": "{{0}}后过期",
    "{{0}}min": "{{0}}分钟",

    // ===== 第十二批：任务名称与描述（E-P）=====
    "Eight Dominions": "八大领地",
    "Eight territories. Eight pieces of the surface that answer to you. The planet has stopped pretending it has not noticed.": "八块领地。八个回应你的地表区域。行星已经不再假装没有察觉到你。",
    "Elite Training Grounds": "精英训练场",
    "Even the most settled territories fall to a surprise raid. Research Emergency Preparation to shield what you hold.": "即使最稳固的领地也会在突袭中沦陷。研究紧急战备以保护你所拥有的一切。",
    "Exotic Compounds": "异星化合物",
    "Expan": "扩张",
    "Expand your Rift Vault's dimensional capacity to its limits. Research Dimensional Compression to level 5.": "将裂隙宝库的次元容量扩展到极限。将次元压缩研究到5级。",
    "Expeditions run for a while. While your units are out": "远征会持续一段时间。在你的单位外出期间",
    "Eyes on the Horizon": "预见未来",
    "Feed the Nexus": "喂养核心",
    "Find a Lost Ruin.": "找到一座失落废墟。",
    "Five Pillars of Empire": "帝国五大支柱",
    "Five simultaneous army operations. Your tactical mastery is unmatched. Research Command Structure to level 5.": "五支军队同时行动。你的战术掌握无人能及。将指挥结构研究到5级。",
    "Five territories under your control. The transformed nearby start avoiding your routes.": "五个领地在你的掌控之下。附近的转化者开始避开你的行军路线。",
    "Fortify Your Position": "巩固阵地",
    "Forward Operating Base": "前进作战基地",
    "Found or join an alliance.": "创建或加入一个同盟。",
    "Half the swarm is built": "蜂群已完成一半",
    "Harden your forces. Research both Armor Technology and Bioshield Technology to level 3.": "强化你的部队。将装甲科技和生物护盾科技都研究到3级。",
    "Hostage situations require a delicate touch. Find a Hostages NPC on the map and negotiate an exchange": "人质局势需要细腻手腕。在地图上找到人质NPC并进行交换谈判",
    "Hostile": "敌对",
    "Into the Shifting Wild": "深入变幻荒野",
    "Iron Carapace": "铁甲壳",
    "It is temporary.": "这只是暂时的。",
    "It opens Tier 2 resources and the structures that need them.": "它解锁T2资源以及需要这些资源的建筑。",
    "It unlocks expedition missions into the unknown.": "它解锁通往未知的远征任务。",
    "It unlocks salvage on ancient ruins": "它解锁对远古废墟的回收",
    "It unlocks the ability to anchor a second colony.": "它解锁建立第二个殖民地的能力。",
    "Keep the queue busy.": "保持队列忙碌。",
    "Knowledge Network": "知识网络",
    "Knowledge is the only thing the planet does not absorb. Research Spy Technology to unlock the scout pipeline.": "知识是行星唯一无法吸收的东西。研究间谍科技以解锁侦察通道。",
    "Link your Research Institutes across territories. Research the Research Link technology for synchronized breakthroughs.": "跨领地连接你的研究所。研究科研链接科技以实现协同突破。",
    "Loot funds the next push.": "战利品为下一次推进提供资金。",
    "Masters of Recovery": "回收大师",
    "Mutual Benefits": "互利双赢",
    "Nanite Supremacy": "纳米至尊",
    "Negotiate with Hostages": "与人质谈判",
    "No ExoSieger lasts alone. The transformation is slower in groups. Open the Alliance panel and found your own": "没有远征围攻者能独自持久。在群体中，转化速度会变慢。打开同盟面板，创建你自己的",
    "Not all battles are won with firepower. Research Diplomacy to gain leverage in negotiations and hostage situations.": "并非所有战斗都靠火力取胜。研究外交术以在谈判和人质局势中获得筹码。",
    "Not everything can be taken by force. Find a Trader on the map and complete a trade": "并非一切都能武力夺取。在地图上找到商人并完成一次交易",
    "Not ready to link?": "还没准备好链接？",
    "One territory is a foothold. Two is a colony. The planet starts caring about you in earnest at three. Research Colonization to start claiming ground.": "一块领地是立足点。两个是殖民地。到了三个，行星才真正开始关注你。研究殖民术以开始扩张地盘。",
    "Open the Alliance tab and pick one that already stands": "打开同盟标签页，选择一个已存在的同盟",
    "Open the Support Forces picker and call a garrison to defend or reinforce a colony.": "打开支援部队选择器，召唤驻军来防守或增援殖民地。",
    "Open the chat.": "打开聊天。",
    "Open the map": "打开地图",
    "Optimize every drop of biomass. Research Biomass Efficiency to level 5 for maximum army endurance.": "优化每一滴生物质。将生物质效率研究到5级，最大化军队耐久力。",
    "Outpost Deployed": "前哨已部署",
    "Outpost Network": "前哨网络",
    "Pick the wreckage field next to your home and send a salvage mission to claim the haul before the planet reclaims it.": "选择你基地旁的残骸场，派遣回收任务，在行星将其收回之前夺取收获。",
    "Pinnacle of Science": "科学巅峰",

    // ===== 第十三批：任务名称与描述（P-Z前半）=====
    "Place your second colony.": "放置你的第二个殖民地。",
    "Processing Power": "处理能力",
    "Project power beyond your borders. Research Outpost Engineering to deploy mobile bases across the galaxy.": "将力量投射到境外。研究前哨工程以在银河系部署移动基地。",
    "Quest Log": "任务日志",
    "Rare Materials": "稀有材料",
    "Refined Ambitions": "精炼野心",
    "Refined Beginnings": "精炼开端",
    "Relationships": "关系",
    "Replace drones with nanites. Build a Nanite Swarm facility for the ultimate construction speed.": "用纳米机器人取代无人机。建造纳米蜂群设施，获得终极建造速度。",
    "Research Colonization.": "研究殖民术。",
    "Research Command Structure.": "研究指挥结构。",
    "Research Exploration Knowledge.": "研究探索知识。",
    "Research Resource Processing II.": "研究资源加工II。",
    "Research Salvage Tech.": "研究回收科技。",
    "Resources that can't be stored are resources wasted. Upgrade your Warehouse to level 5.": "无法储存的资源就是浪费。将仓库升级到5级。",
    "Risk scales with depth.": "风险随深度增加。",
    "Ruins run dry.": "废墟终会枯竭。",
    "Salvage a Lost Ruin on the map": "在地图上回收一座失落废墟",
    "Salvage taught you what's left behind. Now learn to find what's still out there. Research Exploration Knowledge to unlock expedition missions.": "回收让你了解了留下的东西。现在学会去发现还在外面的东西。研究探索知识以解锁远征任务。",
    "Salvage the wreckage field": "回收残骸场",
    "Scavenge the Ancients": "搜刮远古遗迹",
    "Send Scrapmaws.": "派遣废铁嘴。",
    "Send a Soilkin to an empty position and anchor a new colony. Not too close (shared resources)": "派一名土族到空地位置并锚定新殖民地。不要太近（资源会共享）",
    "Send a message in chat": "在聊天中发送一条消息",
    "Send a single message into the open channel. Global is fine": "在公共频道发送一条消息。全局频道就行",
    "Send an exploration mission.": "派遣一次探索任务。",
    "Skin and bone are not enough. Reach into the planet's secretions. Upgrade your Resin Syphon": "皮肤和骨头远远不够。深入行星分泌物。升级你的树脂虹吸器",
    "Social": "社交",
    "Station at Support Services": "驻派支援服务",
    "Stationed allied forces can hold your colony while you sleep.": "驻扎的盟友部队可以在你睡觉时守住殖民地。",
    "Stockpile Supremacy": "囤积至尊",
    "Strength in Numbers": "数量优势",
    "Strip the Battlefield": "清空战场",
    "Study the planet's apex predators. Research Predator Adaptation to level 3 and arm your forces with bio-engineered firepower.": "研究行星的顶级掠食者。将掠食者适应研究到3级，用生物工程火力武装你的部队。",
    "Summon a Rift Support Force": "召唤裂隙支援部队",
    "Summon support.": "召唤支援。",
    "Summoned forces hold for a while": "召唤的部队会持续一段时间",
    "Support Services NPCs offer ongoing rewards in exchange for stationed troops. Find one on the map and station your army there to start receiving resources.": "支援服务NPC提供持续奖励，以换取驻扎部队。在地图上找到一个，将你的军队驻扎那里，开始接收资源。",
    "Supreme Commander": "最高指挥官",
    "T4 is closer to organs than minerals. Most ExoSiegers never get the equipment to refine them. Research T4 Processing to join the few who do.": "T4更接近器官而非矿物。大多数远征围攻者从未获得提炼它们的设备。研究T4加工，成为少数能做到的人。",

    // ===== 第十四批：任务名称与描述（T-Z后半）=====
    "Talk is leverage.": "话语就是筹码。",
    "Tame the busywork.": "驯服繁琐事务。",
    "Territory Border": "领地边框",
    "The Art of the Deal": "交易的艺术",
    "The Lattice Crucible crystallizes the rarest substances known. You command the pinnacle of material science.": "晶格坩埚熔炼了已知最稀有的物质。你掌控着材料科学的巅峰。",
    "The Negotiator": "谈判者",
    "The Rift Conduit bends space itself. Build one to level 3 to access the global resource vault.": "裂隙导管扭曲了空间本身。将其建造到3级以访问全球资源宝库。",
    "The Soilkin needs time to travel and anchor. While it is out": "土族需要时间出行和锚定。在它外出期间",
    "The Third Frontier": "第三边疆",
    "The Xalloy Fabricator glows with rift energy. The alloy it spits out should not exist by surface chemistry. Build it anyway.": "异合金制造器闪耀着裂隙能量。它吐出的合金按地表化学本不应存在。不管它，造就是了。",
    "The bandits left a wreckage field next to your home. Send your Scrapmaws on a salvage mission to claim the loot before the planet eats it. A salvage run takes time": "土匪在你的基地旁留下了残骸场。派你的废铁嘴执行回收任务，在行星吞掉它之前夺取战利品。回收行动需要时间",
    "The best defense against spies is better spies. Research Counter Espionage to shield your operations.": "对抗间谍最好的防御是更优秀的间谍。研究反间谍技术以保护你的行动。",
    "The deeper materials need different tools. Research Advanced Processing to reach what most ExoSiegers never touch.": "更深的材料需要不同的工具。研究高级加工以获取大多数远征围攻者从未触及的东西。",
    "The endgame is shared.": "终局是共享的。",
    "The planet's secretions and creature armor are useful when processed. Research Refined Processing to tap T2 resources.": "行星分泌物和生物装甲经过加工后十分有用。研究精炼加工以开发T2资源。",
    "The surface hides more than ruins. Send an army on an exploration mission and see what the planet reveals.": "地表隐藏的不只是废墟。派一支军队执行探索任务，看看行星会揭示什么。",
    "The trek to a ruin takes time. While your units are out": "前往废墟的路途需要时间。在你的单位外出期间",
    "The universe's rarest materials bend to your will. Research T5 Resource Processing to harness exotic energies.": "宇宙最稀有的材料屈从于你的意志。研究T5资源加工以驾驭异星能量。",
    "Three Outposts form a strategic network across the galaxy. Your mobile bases project power everywhere.": "三个前哨构成横跨银河的战略网络。你的移动基地将力量投射至各处。",
    "Title": "头衔",
    "Tools of War": "战争工具",
    "Trade with a Trader on the map": "在地图上与商人交易",
    "Twelve Stars": "十二星辰",
    "Twelve territories shine under your banner. A true galactic emperor commands no less.": "十二块领地在你的旗帜下闪耀。真正的银河皇帝不掌权于此之下。",
    "Two territories are just the beginning. Establish a third colony to expand your resource network.": "两块领地只是开始。建立第三个殖民地以扩展你的资源网络。",
    "Unlock Refined": "解锁精炼",
    "Vault Mastery": "宝库掌控",
    "Vault:": "宝库：",
    "Warmonger's End": "战争贩子的终结",
    "Weapons of Annihilation": "湮灭武器",
    "What you started with is too small. Research Imperial Expansion to claim ground past your first cluster.": "你起点太小了。研究帝国扩张以超越你的初始集群夺取土地。",
    "When Warmonger forces invade": "当战争贩子部队入侵时",
    "When a Contamination world event strikes": "当污染世界事件爆发时",
    "Whispers in the Void": "虚空低语",
    "You are not the only mind still awake on this surface. Other ExoSiegers hold their own ground out there": "你并非这颗地表上唯一清醒的意识。其他远征围攻者在外头守着自己的阵地",
    "You climb the planet one layer at a time. There are no shortcuts past a tier.": "你一层一层地攀爬这颗行星。超越层级没有捷径。",
    "Your Reac": "你的反应",
    "Your Training Camp grows more sophisticated. Upgrade it to level 5 to unlock advanced unit production.": "你的训练营变得更加先进。将其升级到5级以解锁高级单位生产。",
    "Your first Ferrite Synthesizer hums with power. Advanced materials are now within reach.": "你的第一台磁铁矿合成器嗡嗡作响。高级材料现已触手可及。",
    "Your first Resin Syphon is operational. The era of refined resources has begun.": "你的第一台树脂虹吸器投入运行。精炼资源的时代已经开启。",
    "Your first mobile base stands ready beyond your borders": "你的第一个移动基地已在境外整装待命",
    "Your predator adaptation research reaches its pinnacle. Push to level 10 for devastating bio-engineered firepower.": "你的掠食者适应研究达到巅峰。推进到10级，获得毁灭性的生物工程火力。",
    "[Unknown]": "[未知]",
    "a beacon of your expanding influence.": "你不断扩张影响的灯塔。",
    "and Ossian Workshop to level 3.": "和骨石工坊升至3级。",
    "and choose Explore.": "然后选择探索。",
    "and send a Soilkin to colonize.": "然后派遣土族去殖民。",
    "and send a salvage mission.": "然后派遣回收任务。",
    "anyone can read it.": "任何人都能阅读。",
    "before you spread yourself thin across new ground.": "在你在新地盘上摊得太薄之前。",
    "choose an empty position": "选择一个空位",
    "deliver the tribute they demand to free the captives.": "交付他们要求的贡品以解救俘虏。",
    "friendship and conflict out here begins with a single word. Open the chat and send your first message into the open channel.": "这里的友谊与冲突都始于一句话。打开聊天，向公共频道发送你的第一条消息。",
    "friendships and conflicts all start with a first message. Make yours now.": "友谊和冲突都始于第一条消息。现在发送你的吧。",
    "half grew on its own. Build a Drone Hive to speed every construction job you queue.": "一半是自己长出来的。建造无人机巢穴以加速你排队的每一个建造任务。",
    "keep upgrading buildings and researching so nothing sits idle.": "持续升级建筑和研究，别让任何东西闲置。",
    "listening for any signal that is not the planet. Every relationship": "聆听任何非行星发出的信号。每一段关系",
    "locked behind ancient salvage techniques. Research Salvage Tech to gain access.": "被远古回收技术封锁。研究回收科技以获得权限。",
    "not just battlefield wreckage.": "不仅仅是战场残骸。",
    "not too far (supply lines).": "不要太远（补给线）。",
    "or join one that already stands": "或加入一个已存在的",
    "or raise your own.": "或建立你自己的。",
    "pick a destination": "选择一个目的地",
    "pick a ruin": "选一座废墟",
    "quest avatar 1": "任务头像1",
    "quest avatar 2": "任务头像2",
    "quest border 1": "任务边框1",
    "quest border 2": "任务边框2",
    "research Command Structure to level 1 and learn to lead a second army at once.": "将指挥结构研究到1级，学会同时率领第二支军队。",
    "rogue Scientists threaten the region. Defeat a Scientist NPC to help contain the toxic threat.": "叛变科学家威胁着这个区域。击败一名科学家NPC以帮助遏制毒素威胁。",
    "salvage is a faster faucet than mining. Strip every field you make.": "回收是比采矿更快的获取方式。清理你制造的每一块残骸场。",
    "send an army with resources to exchange for what you need.": "派一支军队携带资源去交换你需要的东西。",
    "so it is ready to build.": "这样它就可以准备建造了。",
    "so put it to use": "那就派上用场吧",
    "the Lithocyte at the center craves resources. Deliver a tribute to the Corebloom Nexus to fuel the bloom and earn your share of its bounty.": "中心的岩石细胞渴求资源。向核芯绽放核心献上贡品，为绽放提供燃料，赢取你应得的赏金份额。",
    "the closest anyone gets to conquering the planet.": "这是任何人距离征服这颗行星最近的一次。",
    "their camps must be destroyed. Defeat a Warmonger Camp during a Warmonger world event to prove your military might.": "他们的营地必须被摧毁。在战争贩子世界事件期间击败一个战争贩子营地，证明你的军事力量。",
    "then fade back into the rift. Time them for a threat.": "然后消退回裂隙中。为应对威胁选好时机。",
    "then it collapses back into the surface.": "然后它坍塌回地表之下。",
    "Army returned! ({{0}})": "军队已返回！（{{0}}）",
    "Connect your account for alerts": "绑定账号以接收通知",
    "Join the Signal": "加入信号频道",
    "Later": "稍后再弄",
    "Link Discord.": "关联Discord",
    "Link your Discord account": "绑定你的Discord账号",
    "Loading Unit & Defense Data...": "正在加载部队与防御数据……",
    "Other ExoSiegers gather off-world. Join the Discord": "其他域外围城者在星球外集结。加入Discord社群，",
    "and pull the colony into the wider signal.": "将你的殖民地接入全域信号网络，",
    "coordination and a small reward. You can skip this one.": "可获得协作便利与一份小额奖励，你也可以跳过此步骤。",
    "link your account": "绑定账号",
    "social": "社交板块",
    "Open Notes": "打开备忘录",
    "Go to Link your Discord account": "前往绑定Discord账号页面",
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
var cnRegReplace = new Map([
    [/^([A-Za-z]{3}) (\d{1,2}), (\d{2}:\d{2}) (AM|PM)$/, function(match) {
        var months = {Jan:'1月',Feb:'2月',Mar:'3月',Apr:'4月',May:'5月',Jun:'6月',Jul:'7月',Aug:'8月',Sep:'9月',Oct:'10月',Nov:'11月',Dec:'12月'};
        return (months[match[1]]||match[1]) + match[2] + '日 ' + match[3] + ' ' + match[4];
    }],
]);
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
