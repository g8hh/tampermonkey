// ==UserScript==
// @name         Bigfoot Hunter 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Bigfoot Hunter (https://bigfoot-hunt.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Bigfoot Hunter.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/60727d4e8_logo.png
// @license      MIT
// @include      *https://bigfoot-hunt.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/07/15 12:51
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
    "You need to enable JavaScript to run this app.": "你需要启用JavaScript来运行这个应用程序。",
    "Lvl": "等级",
    "LVL": "等级",
    "HUNT": "狩猎",
    "XP": "经验值",
    "UPGRADES": "升级",
    "/hr": "/小时",
    "CHAT": "聊天",
    "Legendary": "传说",
    "common": "普通",
    "LEADERBOARD": "排行榜",
    "Drones": "无人机",
    "Research Lab": "研究实验室",
    "RESEARCH": "研究",
    "PRESTIGE": "声望",
    "Skill Points:": "技能点:",
    "SKILLS": "技能",
    "uncommon": "罕见",
    "UNLOCK:": "解锁:",
    "UNAVAILABLE": "不可用",
    "UPGRADES": "升级",
    "ALL PLAYERS": "所有玩家",
    "ACHIEVEMENTS": "成就",
    "+++ Idle Rate": "+++ 放置率",
    "++ Idle Rate": "++ 放置率",
    "+ Idle Rate": "+ 放置率",
    "+ Click Power": "+ 点击力量",
    "+ Crit Chance": "+ 暴击率",
    "+ Rare Chance": "+ 稀有率",
    "++ Rare Chance": "++ 稀有率",
    "+++ Rare Chance": "+++ 稀有率",
    "a 2X boost to Discoveries and XP for 1 HOUR!": "一个2倍的提升到发现和经验持续 1 小时！",
    "ACTIVE": "活跃的",
    "Analysts": "分析师",
    "ANCIENT GROVE": "古老的树林",
    "ARTIFACTS": "神器",
    "Assistants": "助手",
    "BEGINNER EXPEDITION": "初学者探险",
    "BIGFOOT HOMELAND": "大脚怪家园",
    "Bigfoot Hunter": "大脚怪猎人",
    "Build a Research Lab in the Upgrades tab to begin.": "在升级选项卡中建立一个研究实验室。",
    "DEEP WOODS": "森林深处",
    "Discoveries:": "发现:",
    "Equipment": "装备",
    "Evidence": "证据",
    "EXPEDITIONS": "探险",
    "Experts": "专家",
    "EXTREME EXPEDITION": "极限探险",
    "Footprints": "足迹",
    "footprint": "足迹",
    "FORBIDDEN PEAKS": "禁忌峰",
    "GLOBAL HUNT BOOST": "全局狩猎加成",
    "Grant": "授予",
    "HIDDEN CAVE": "隐秘洞穴",
    "HIGHER DISCOVERY RATES": "更高的发现率",
    "Idle Rate:": "放置率:",
    "LEGENDARY ENCOUNTER ZONE": "传说相遇区",
    "LOADING BIGFOOT DATA...": "正在加载大脚数据…",
    "MASSIVE 18-INCH PRINT IN MUD": "泥里有巨大的18英寸的指纹",
    "MISTY MOUNTAINS": "迷雾山脉",
    "MOUNTAIN PEAK": "山顶",
    "NO RECENT DISCOVERIES": "近期暂无发现",
    "PARTIAL PRINT ON ROCK": "岩石上的部分印痕",
    "PINE FOREST": "松林",
    "RECENT DISCOVERIES": "最近的发现",
    "RESEARCH LAB REQUIRED": "需要研究实验室",
    "Sighting": "目击",
    "Sightings": "目击",
    "STRANGE HOWL RECORDING": "怪嚎录音",
    "Territory": "领土",
    "THE ULTIMATE EXPEDITION": "终极探险",
    "Tracking Dogs": "追踪犬",
    "Trail Cams": "跟踪摄像头",
    "UNUSUAL NEST STRUCTURE": "不寻常的巢结构",
    "⚠️ TEMPORARILY DISABLED - TECHNICAL ISSUES": "⚠️暂时禁用 - 技术问题",
    "FOUND!": "已发现!",
    "HUGE SHADOW MOVING THROUGH TREES": "巨大的阴影穿过树林",
    "POINTS": "点数",
    "SEARCHING...": "搜索中...",
    "DEEP IMPRESSIONS IN SOFT EARTH": "软土上深深的印痕",
    "BIPEDAL CREATURE CROSSING CLEARING": "两足生物穿过空地",
    "ROCKY CANYON": "岩石峡谷",
    "🎯 CRITICAL FIND!": "🎯 暴击发现！",
    "ABANDONED CABIN": "废弃的小屋",
    "ARTIFACT COLLECTOR": "神器收藏家",
    "BIGFOOT WHISPERER": "大脚怪语者",
    "COLLECT 3 PIECES OF EVIDENCE": "收集3条证据",
    "COMPLETE 3 RESEARCH PROJECTS": "完成3个研究项目",
    "Complete Your First Prestige": "完成第一次声望",
    "CREEK VALLEY": "溪谷",
    "DISCOVER 5 DIFFERENT ARTIFACTS": "发现5个不同的神器",
    "DISCOVERY GOD": "发现之神",
    "DISCOVERY LORD": "发现之主",
    "DISCOVERY MASTER": "发现大师",
    "EQUIPMENT UPGRADER": "设备升级程序",
    "EVIDENCE COLLECTOR": "证据收集者",
    "EXPAND TERRITORY TO SIZE 3": "将领土扩大到3",
    "FIND 10 FOOTPRINTS": "找到10个足迹",
    "FIND 50 LEGENDARY ENCOUNTERS": "找到50个传奇遭遇",
    "FIND YOUR FIRST LEGENDARY ENCOUNTER": "找到你的第一次传奇遭遇",
    "FIRST CONTACT": "第一次接触",
    "FOOTPRINT HUNTER": "足迹猎人",
    "FRESH TRACKS LEADING NORTH": "新的足迹指向北方",
    "GIANT FOOTPRINT BY RIVER": "河边的巨大足迹",
    "HIRE 2 CRYPTOZOOLOGISTS": "雇佣两个神秘动物学家",
    "LEGENDARY HUNTER": "传说猎人",
    "LOADING ACHIEVEMENTS...": "加载成就…",
    "LOCKED": "未解锁",
    "MAKE YOUR FIRST DISCOVERY": "第一次发现",
    "MASTER HUNTER": "主猎人",
    "MAX OUT ALL SKILLS": "刷满所有技能",
    "PRESTIGE MASTER": "声望大师",
    "REACH 1,000 TOTAL DISCOVERIES": "发现总数达到1000个",
    "REACH 100 TOTAL DISCOVERIES": "发现总数达到100个",
    "REACH 100,000 TOTAL DISCOVERIES": "发现总数达到10万",
    "RECORD 5 SIGHTINGS": "记录5次目击",
    "RESEARCHER": "研究员",
    "REWARD:": "奖励:",
    "SEASONED HUNTER": "经验丰富的猎人",
    "SIGHTING EXPERT": "目击专家",
    "SKILL MASTER": "技能大师",
    "TEAM LEADER": "团队领导",
    "TERRITORY EXPANDER": "领土扩张者",
    "UNLOCKED": "解锁",
    "UNLOCKS BASIC TRACKING": "解锁基础追踪功能",
    "UPGRADE EQUIPMENT TO LEVEL 5": "升级装备到5级",
    "VETERAN HUNTER": "资深猎人",
    "FROZEN LAKE": "冰湖",
    "HEEL IMPRESSION IN SAND": "沙中脚跟印",
    "SWAMP EDGE": "沼泽边缘",
    "THUNDER FALLS": "打雷",
    "WEATHERED TRACKS IN CLAY": "风化的泥土痕迹",
    "Level:": "等级:",
    "UPGRADE (": "升级 (",
    "TRACKING": "追踪",
    "NEED": "需要",
    "ANALYSIS": "分析",
    "COLLECTED:": "已收集：",
    "% Discovery Rate": "% 发现率",
    "% Rare Chance": "% 稀有率",
    "% Skill Point Gain": "% 技能点增益",
    "PRESTIGE LEVEL": "声望等级",
    "PRESTIGE LOCKED": "未解锁声望",
    "Prestige Points": "声望点数",
    "PRESTIGE SHOP": "声望商店",
    "SKILL POINTS:": "技能点数:",
    "STEALTH": "潜行",
    "TECHNOLOGY": "技术",
    "BETTER SIGHTING OPPORTUNITIES": "更好的目击机会",
    "Continue hunting to find your first artifact!": "继续寻找你的第一件神器！",
    "CRYSTAL LUCK": "水晶运气",
    "Current Bonuses:": "当前加成：",
    "EQUIPMENT EFFECTIVENESS": "装备效能",
    "ETERNAL HUNTER": "永恒猎人",
    "FOCUSED INTENT": "集中意图",
    "HEAD START": "领先一步",
    "IMPROVES FOOTPRINT DISCOVERY": "提升足迹发现",
    "Keep Artifacts & Expeditions": "保留神器和探险",
    "LEADERSHIP": "领导力",
    "LEGENDARY VIGIL": "传奇守夜",
    "MORE EFFECTIVE EVIDENCE COLLECTION": "更有效的证据收集",
    "NO ARTIFACTS DISCOVERED": "暂未发现神器",
    "Permanently increases all discoveries gained.": "永久增加所有的发现增益。",
    "Permanently increases click power.": "永久提升点击力量",
    "Permanently increases idle discovery rate.": "永久增加放置发现几率",
    "Permanently increases the chance to find rare items.": "永久增加稀有物品的发现几率",
    "PRESTIGE POINTS AVAILABLE": "可用声望点数",
    "Start with more discoveries after prestiging.": "在声望之后，从更多的发现开始。",
    "TEAM EFFICIENCY BOOST": "团队效率提升",
    "TOTAL DISCOVERIES": "总计发现",
    "BROKEN TREE BRANCH 12 FEET HIGH": "折断的树枝有12英尺高",
    "evidence": "证据",
    "sighting": "目击",
    "GLOWING EYES IN DARKNESS": "GLOWING EYES IN DARKNESS",
    "CREATURE WATCHING FROM RIDGE": "山脊上的生物",
    "DARK PINE FOREST": "黑松林",
    "MOVEMENT IN THICK BRUSH": "粗刷移动",
    "DANGER ZONE": "危险区",
    "GAME SETTINGS": "游戏设置",
    "Hunter Level:": "狩猎等级:",
    "LOADING SETTINGS...": "设置加载中...",
    "RESET PROGRESS": "重置进度",
    "Reset all progress and start over. This action cannot be undone.": "重置所有进度并重新开始。此操作不能撤消。",
    "PLEASE LOGIN AND START A GAME": "请登录并开始游戏",
    "CHOOSE HOW YOU WANT TO PLAY": "选择你想玩的方式",
    "LOGIN / CREATE ACCOUNT": "登录 / 创建账号",
    "OR": "或",
    "PLAY AS GUEST": "以游客身份进行游戏",
    "BACK": "返回",
    "WELCOME TO BIGFOOT HUNTER": "欢迎来到大脚怪猎人",
    "GUEST MODE": "游客模式",
    "START AS GUEST": "用游客身份开玩",
    "WARNING: GUEST PROGRESS IS NOT SAVED!": "警告：游客的游戏进度不会保存！",
    "discoveries": "发现",
    "DISCOVERIES": "发现",
    "LOADING LEADERBOARD...": "加载排行榜...",
    "FOOTPRINTS": "足迹",
    "SIGHTINGS": "目击",
    "EVIDENCE": "证据",
    "TOP HUNTERS": "顶尖猎手",
    "LOGIN TO CHAT": "登录才能聊天",
    "LOADING CHAT...": "加载聊天...",
    "LOGIN TO CHAT WITH OTHER HUNTERS!": "登录与其他猎人聊天！",
    "JOIN THE CONVERSATION": "加入对话",
    "🏕️ GUEST MODE - PROGRESS NOT SAVED!": "🏕️ 游客模式 - 进度不会保存!",
    "CREATE ACCOUNT": "创建账号",
    "DARK SHAPE DISAPPEARING INTO FOREST": "黑暗的身影消失在森林里",
    "MASSIVE FIGURE BY WATERFALL": "瀑布形成的巨大雕像",
    "rare": "稀有",
    "BIGFOOT HUNTER CHAT": "大脚怪猎人聊天室",
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
    "": "",
    "PP)": "声望点)",
    "SP)": "技能点)",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "GITYX": "GITYX",
    "+": "+",
    "📍": "📍",
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
    [/^([\d\.,]+) TOTAL DISCOVERIES$/, '$1 总计发现'],
    [/^REACH HUNTER LEVEL ([\d\.,]+)$/, '达到猎人等级 $1'],
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