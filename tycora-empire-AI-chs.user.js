// ==UserScript==
// @name         Tycora Empire 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Tycora Empire (https://tycora.io/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Tycora Empire.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://tycora.io/api/pb/api/files/pbc_3138706271/m91fzw406k2vuy9/logo_image_xhlknk8853.webp
// @license      MIT
// @include      *https://tycora.io/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/tycora-empire-AI-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/tycora-empire-AI-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/05/29 13:52
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
    "Cost: {{0}}": "消耗：{{0}}",
    "Next Improvement: {{0}}": "下次提升：{{0}}",
    "Level {{0}}": "等级{{0}}",
    "{{0}} x {{1}}": "{{0}} × {{1}}",
    "Unlocks at Level {{0}}": "在{{0}}级解锁",
    "{{0}}× Cash Out (prestige)": "{{0}}倍套现（声望）",
    "{{0}} venture operating": "{{0}}家企业运营中",
    "{{0}} ventures operating": "{{0}}家企业运营中",
    "${{0}} total earned": "累计收入${{0}}",
    "${{0}}/s each": "${{0}}/秒每个",
    "x{{0}} income for {{1}}m": "x{{0}}收入持续{{1}}分钟",
    "Need ♛ {{0}} more": "还需 ♛ {{0}}",
    "+{{0}}% idle income": "+{{0}}%离线收入",
    "${{0}} total earned": "累计收入 ${{0}}",
    "LVL {{0}}": "等级{{0}}",
    "{{0}} — {{1}}!": "{{0}} — {{1}}！",
    "${{0}}–${{1}}": "${{0}}–${{1}}",
    "{{0}}× tap value": "{{0}}倍点击价值",

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
    "HP: {{%d}}": "生命值：{{%d}}",
    "DMG: {{%d}}": "伤害：{{%d}}",
    "x{{%d}}": "x{{%d}}",
    "x{{%d}}.{{%d}}": "x{{%d}}.{{%d}}",
    "Lvl {{%d}}": "{{%d}} 级",
    "${{%d}}K": "${{%d}}K",
    "~${{%d}}K": "~${{%d}}K",
    "-${{%d}}K": "-${{%d}}K",
    "${{%d}}B": "${{%d}}B",
    "${{%d}}M": "${{%d}}M",
    "${{%d}}T": "${{%d}}T",
    "${{%d}}Qa": "${{%d}}Qa",
    "${{%d}}Qi": "${{%d}}Qi",
    "${{%d}}Oct": "${{%d}}Oct",
    "${{%d}}Sxt": "${{%d}}Sxt",
    "${{%d}}Spt": "${{%d}}Spt",
    "{{%d}}K": "{{%d}}K",
    "{{%d}}B": "{{%d}}B",
    "{{%d}}M": "{{%d}}M",
    "{{%d}}T": "{{%d}}T",
    "{{%d}}Qa": "{{%d}}Qa",
    "{{%d}}m ago": "{{%d}} 分钟前",
    "{{%d}}× income": "{{%d}}× 收入",
    "{{%d}}× Retail income": "{{%d}}× 零售收入",
    "{{%d}}× Retail sector income": "{{%d}}× 零售行业收入",
    "{{%d}} reached": "{{%d}} 达到",
    "Guest#{{%d}}": "游客#{{%d}}",
    "{{%d}}.{{%d}}× income": "{{%d}}.{{%d}}x 收入",
    "${{%d}}/s": "${{%d}}/秒",
    "${{%d}}.{{%d}}/s": "${{%d}}.{{%d}}/秒",
    "+${{%d}}.{{%d}}/s": "+${{%d}}.{{%d}}/秒",
    "${{%d}}.{{%d}}/s each": "${{%d}}.{{%d}}/秒 每个",
    "Reached level {{%d}}": "达到{{%d}}级",
    "reach Level {{%d}}": "达到{{%d}}级",
    "Reach Level {{%d}}": "达到{{%d}}级",
    "{{0}} / {{1}} left": "{{0}} / {{1}} 剩余",
    "{{0}} left": "{{0}} 剩余",
    "{{0}}% bust": "{{0}}%失败",
    "+{{0}} Public Trust.": "+{{0}} 公众信任。",
    "−{{0}} Public Trust. Ouch.": "−{{0}} 公众信任。痛。",
    "Spin · ♛ {{0}}": "旋转 · ♛ {{0}}",
    "Cashed out ♛ {{0}}": "套现 ♛ {{0}}",
    "Won ♛ {{0}}!": "赢得 ♛ {{0}}！",
    "Showing {{0}} of {{1}}": "显示{{1}}中的{{0}}",
    "${{0}} / hour": "${{0}} / 小时",
    "Dept. Store x{{0}} acquired!": "百货商店 x{{0}} 已收购！",
    "Fast Food Chain x{{0}} acquired!": "快餐连锁 x{{0}} 已收购！",
    "Boutique x{{0}} acquired!": "精品店 x{{0}} 已收购！",
    "Restaurant x{{0}} acquired!": "餐厅 x{{0}} 已收购！",
    "Coffee House x{{0}} acquired!": "咖啡馆 x{{0}} 已收购！",
    "Market Stall x{{0}} acquired!": "市场摊位 x{{0}} 已收购！",
    "Need ${{0}}": "需要 ${{0}}",
    "{{0}}x Retail income": "{{0}}x 零售收入",
    "{{0}}x Retail sector income": "{{0}}x 零售行业收入",
    "{{0}}x Tech income": "{{0}}x 科技收入",
    "{{0}}x Tech sector income": "{{0}}x 科技行业收入",
    "+${{0}} reward": "+${{0}} 奖励",
    "Hot Dog Stand x{{0}} acquired!": "热狗摊 x{{0}} 已收购！",
    "Lvl {{%d}}/{{%d}}": "等级 {{%d}}/{{%d}}",
    "{{%d}} installed · {{%d}} ready · {{%d}} sealed": "{{%d}} 已安装 · {{%d}} 就绪 · {{%d}} 已售",
    "{{%d}}x Food income": "{{%d}}x 食物收入",
    "{{%d}}x Food sector income": "{{%d}}x 食物行业收入",
    "{{%d}} types": "{{%d}} 类型",
    "{{%d}}m {{%d}}s": "{{%d}}分钟 {{%d}}秒",
    "{{%d}} ventures operating": "{{%d}} 企业运营中",
    "+{{0}} skill point": "+{{0}} 技能点",
    "+{{0}} skill points": "+{{0}} 技能点",
    "+{{0}}% of capital": "+{{0}}% 资本",
    "Top {{0}}%": "前 {{0}}%",
    "+{{0}} legacy shares": "+{{0}} 遗产股份",
    "+{{0}}% permanent income": "+{{0}}% 永久收入",
    "+{{%d}}% income": "+{{%d}}% 收入",
    "+{{0}}× income/s cash": "+{{0}}x 收入/秒现金",
    "LVL {{%d}}": "等级 {{%d}}",

    "Lean Operations unlocked!": "精益运营已解锁！",
    "AI Lab": "AI实验室",
    "App Studio": "应用工作室",
    "Cutting edge R&D": "前沿研发",
    "FAANG competitor": "FAANG竞争者",
    "Indie dev shop": "独立开发工作室",
    "Permanent Tech income boosts": "永久科技收入加成",
    "Recurring revenue": "经常性收入",
    "SaaS Platform": "SaaS平台",
    "Tech Giant": "科技巨头",
    "Tech Mastery": "科技精通",
    "Consolidate": "整合",
    " Your individual ": " 你的单个 ",
    " into one Conglomerate earning": " 为一个企业集团，产出",
    ". The sector becomes passive Conglomerate income.": "。该行业变为被动企业集团收入。",
    "Combines your ": "合并你的 ",
    "Keep my businesses": "保留我的企业",
    "Merge ": "合并 ",
    "Merge into Conglomerate": "合并为企业集团",
    "This is permanent.": "这是永久的。",
    "businesses are removed and ": "企业被移除且 ",
    "x footprint).": "倍足迹）。",
    "you can no longer buy or upgrade them": "你不能再购买或升级它们",
    " Conglomerate": " 企业集团",
    "Food merged into a Conglomerate!": "食品已合并为企业集团！",
    "Found a Company": "创立公司",
    "Global Expansion": "全球扩张",
    "Listed": "已上市",
    "Merged conglomerate - 2x throughput": "已合并企业集团 - 2倍产出",
    "Unlock Companies to found your own business and take it public via the IPO roadmap.": "解锁公司以创立自己的企业并通过IPO路线图将其上市。",
    "Unlock Global Expansion to open franchises in world cities and multiply your income.": "解锁全球扩张以在世界城市开设加盟店，倍增你的收入。",
    "× footprint": "× 足迹",
    " conglomerate into cities worldwide, permanently growing its footprint.": " 企业集团到全球城市，永久增长其足迹。",
    " to open a world map and expand your ": " 打开世界地图并扩展你的 ",
    "Buy the ": "购买 ",
    "Global Expansion lets you open franchises in cities around the world, each adding its own stream of income on top of your home districts. Pick a city, plant a franchise, and watch your reach multiply. The biggest empires are the ones spread across the map.": "全球扩张让你在世界各地城市开设加盟店，每个都在主区域之上增加独立的收入流。选择一个城市，开设加盟店，看着你的覆盖范围倍增。最大的帝国是那些遍布地图的帝国。",
    "Global License": "全球许可",
    "Go Global": "走向全球",
    "Industrialist": "实业家",
    "/ea": "/个",
    "Merge Into a Conglomerate": "合并为企业集团",
    "Merge at ": "合并于",
    "Once a sector is fully maxed, merge it into a single passive Conglomerate that pays out forever. It frees up the board and locks in that sector's earnings as permanent income. This is how you graduate from running businesses to owning an empire.": "当行业完全满级后，将其合并为一个永久产出的被动企业集团。它释放棋盘空间并将该行业收益锁定为永久收入。这就是你从经营企业升级为拥有帝国的方式。",
    "Bad headlines hit — revenue drops to 30%.": "负面头条冲击——收入降至30%。",
    "Deny Everything": "全盘否认",
    "Hire PR Firm": "雇佣公关公司",
    "Own it — win back the public, bruise your street cred.": "承认——赢回公众，但损害街头信誉。",
    "PR Scandal": "公关丑闻",
    "Pay to make it disappear — the cleanest recovery.": "花钱消灾——最干净的恢复方式。",
    "Public Apology": "公开道歉",
    "Stonewall — cheap, but the public turns on you.": "沉默应对——便宜，但公众转向反对你。",
    "Converting...": "兑换中……",
    "Not enough cash!": "现金不足！",
    " Ready — collect": " 就绪 — 领取",
    "cash collected": "现金已领取",
    "Retail Mastery": "零售精通",
    "a downturn is dragging income": "低迷拖累收入",
    "AL": "AL",
    "Aluna": "Aluna",
    "Apex": "Apex",
    "Baron": "Baron",
    "Emperor": "Emperor",
    "Highlord": "Highlord",
    "Jack Madrigal": "Jack Madrigal",
    "Stellarch": "Stellarch",
    "legolas": "legolas",
    "Charcoal": "Charcoal",
    "LA": "LA",
    "LawkJaw": "LawkJaw",
    "MO": "MO",
    "Maharaja": "Maharaja",
    "Mohan072": "Mohan072",
    "Powerhouse": "Powerhouse",
    "Zenith": "Zenith",
    "Loading profile…": "加载资料中……",
    " Public companies (": " 上市公司（",
    " Since ": " 自 ",
    "Alpha Founder": "Alpha创始人",
    "Collection": "收藏",
    "Company equity": "公司股权",
    "Conglomerates": "企业集团",
    "Holdings": "持股",
    "Market Shares": "市场份额",
    "No public companies yet.": "暂无上市公司。",
    " Chosen": " 已选择",
    "Responded - tap to view": "已回应 - 点击查看",
    "Response": "回应",
    "Your choice — closing shortly": "你的选择 — 即将截止",
    " In progress · ": " 进行中 · ",
    "Job taken — Midnight Courier Run": "已接任务 — 午夜信使跑腿",
    "Locked in": "已锁定",
    "cash": "现金",
    "Job taken — Skim the Books": "已接任务 — 账面揩油",
    " Keep earning to unlock ": " 继续赚取以解锁 ",
    "Food Mastery": "食品精通",
    "sector boost": "行业加成",
    "this upgrade": "此升级",
    "Adopt the rules — costly, but earns standing.": "遵守规则——成本高昂，但赢得声望。",
    "Comply": "遵守",
    "Fight it in the capitol — partial relief, mixed optics.": "在国会抗争——部分减免，观感混杂。",
    "Ignore": "无视",
    "Lobby": "游说",
    "New rules hit Tech — sector income at 25%.": "新规冲击科技——行业收入降至25%。",
    "Regulatory Crackdown": "监管打压",
    "Risk the fines — free, but clout takes the hit.": "冒险罚款——免费，但影响力受损。",
    "Not enough cash for that option": "现金不足无法选择该选项",
    "On Fire": "势不可挡",
    "Blazing": "炽热",
    "+50% income": "+50%收入",
    "Senior manager hired for Hot Dog Stand!": "热狗摊已雇佣高级经理！",
    "FRENZY": "狂潮",
    " earlier milestone": " 更早里程碑",
    " · Chief": " · 首席",
    " · Financier": " · 金融家",
    " · Industrialist": " · 实业家",
    " · Magnate": " · 巨头",
    " · Mogul": " · 大亨",
    " · Partner": " · 合伙人",
    " · Principal": " · 负责人",
    "Company (found & take public)": "公司（创立并上市）",
    "Global Expansion (franchises)": "全球扩张（加盟）",
    "Sector Merge (conglomerates)": "行业合并（企业集团）",
    "Aggressive Trading": "激进交易",
    "All In": "全押",
    "Bet the house — top gain, reputational risk.": "孤注一掷——最高收益，声望风险。",
    "Capital floods in — Finance income 3×.": "资本涌入——金融收入3倍。",
    "Gold Rush": "淘金热",
    "Lock in steady, low-risk gains.": "锁定稳定低风险收益。",
    "Safe Bets": "安全赌注",
    "Work the window hard for more.": "抓住时机争取更多。",
    " Lvl ": " 等级 ",
    "/sec": "/秒",
    "Buy assets cheap to claw back most of the lost income.": "低价购入资产以挽回大部分损失的收入。",
    "Career": "职业",
    "Choose your response": "选择你的应对方式",
    "Clout": "影响力",
    "Cred": "信誉",
    "Crisis": "危机",
    "Cut Costs": "削减成本",
    "Do Nothing": "什么都不做",
    "Empire": "帝国",
    "Exchange": "兑换",
    "GU": "GU",
    "Ideas": "创意",
    "Innovation": "创新",
    "Invest Counter-Cyclically": "逆周期投资",
    "Join our Discord": "加入我们的Discord",
    "LVL": "等级",
    "Lay off staff and slash spending to limit the bleed.": "裁员并削减开支以限制损失。",
    "Level": "等级",
    "Lifetime": "终身",
    "Loading your empire...": "加载你的帝国中……",
    "Loading…": "加载中……",
    "Magnate": "巨头",
    "Managers": "经理",
    "Market Recession": "市场衰退",
    "Markets tumble — passive revenue halved while it lasts.": "市场暴跌——被动收入在此期间减半。",
    "Maybe later": "稍后再说",
    "Mixed": "混合",
    "Net Worth": "净资产",
    "Next: ": "下一个：",
    "Premium": "高级",
    "Public": "公众",
    "Ranks": "排名",
    "Reputation": "声望",
    "Retail": "零售",
    "Ride it out and take the full hit.": "硬扛并承受全部冲击。",
    "Save progress": "保存进度",
    "Sectors": "行业",
    "Trust": "信任",
    "Tycora": "泰科拉",
    "Tycora Empire": "泰科拉帝国",
    "Tycora Gold": "泰科拉金币",
    "Unlocks at Level ": "在等级",
    "Ventures": "企业",
    "We've officially entered Alpha Stage  and it wouldn't have been possible without our incredible Pre-Alpha community.\n\nTo properly balance the economy and give every player a fair foundation, we had to perform a full reset of all Pre-Alpha progress. We know that stings, and we're genuinely sorry for having to do it.\n\nAs our thanks for being there from day one, you've been permanently granted the exclusive Pre-Alpha Founder Frame  a lifetime badge that marks you as one of the originals. No one else will ever earn it.\n\nCome join us on Discord to share feedback, report bugs, and build the game alongside us.\n": "我们已正式进入Alpha阶段，如果没有我们出色的Pre-Alpha社区，这是不可能实现的。\n\n为了合理平衡经济并给每位玩家一个公平的基础，我们不得不完全重置所有Pre-Alpha进度。我们知道这很痛，对此我们由衷抱歉。\n\n作为你从第一天起就在的感谢，你已永久获得专属Pre-Alpha创始人边框——一枚标记你是元老之一的终身徽章。没有其他人能获得它。\n\n来加入我们的Discord分享反馈、报告漏洞，与我们一起构建这个游戏。\n",
    "Welcome to the Tycora Alpha": "欢迎来到泰科拉 Alpha",
    "Wheel": "转盘",
    "s": "秒",
    " Active district": " 活跃区域",
    " Buy": " 购买",
    "/ tap": "/次点击",
    "/s": "/秒",
    "Acquire your first venture below": "在下方收购你的第一家企业",
    "Artisan brews": "精酿饮品",
    "Biotech": "生物科技",
    "Build": "建造",
    "Coffee House": "咖啡馆",
    "Corner cart classic": "经典街角餐车",
    "Defense": "国防",
    "District income": "区域收入",
    "Energy": "能源",
    "Fast Food Chain": "快餐连锁",
    "Finance": "金融",
    "Fine dining empire": "高端餐饮帝国",
    "Food": "食品",
    "Global franchise": "全球加盟",
    "Hot Dog Stand": "热狗摊",
    "Logistics": "物流",
    "Luxury": "奢侈品",
    "MAX": "最大",
    "Media": "媒体",
    "Metaverse": "元宇宙",
    "Property": "地产",
    "Restaurant": "餐厅",
    "Space": "太空",
    "T": "万亿",
    "Tap to earn": "点击赚取",
    "Tech": "科技",
    " is locked": " 已锁定",
    "Unlock requirements": "解锁条件",
    "$150K total earned": "累计收入$150K",
    "Reach Level 10": "达到10级",
    "$5M total earned": "累计收入$5M",
    "Reach Level 14": "达到14级",
    "$200M total earned": "累计收入$200M",
    "Reach Level 18": "达到18级",
    "$8B total earned": "累计收入$8B",
    "Reach Level 23": "达到23级",
    "$40B total earned": "累计收入$40B",
    "5× Cash Out (prestige)": "5倍套现（声望）",
    "Reach Level 25": "达到25级",
    "$35T total earned": "累计收入$35T",
    "15× Cash Out (prestige)": "15倍套现（声望）",
    "Reach Level 33": "达到33级",
    "$1.2T total earned": "累计收入$1.2T",
    "10× Cash Out (prestige)": "10倍套现（声望）",
    "Reach Level 29": "达到29级",
    "$560T total earned": "累计收入$560T",
    "30× Cash Out (prestige)": "30倍套现（声望）",
    "Reach Level 36": "达到36级",
    "$140T total earned": "累计收入$140T",
    "22× Cash Out (prestige)": "22倍套现（声望）",
    "Reach Level 35": "达到35级",
    "$2.24Qa total earned": "累计收入$2.24Qa",
    "38× Cash Out (prestige)": "38倍套现（声望）",
    "Reach Level 38": "达到38级",
    "$8.96Qa total earned": "累计收入$8.96Qa",
    "46× Cash Out (prestige)": "46倍套现（声望）",
    "Reach Level 40": "达到40级",
    "Add your email to keep your empire across devices. We'll send a one-time code — no password needed. Your current progress carries over.": "添加邮箱以跨设备保存你的帝国。我们将发送一次性验证码——无需密码。当前进度会保留。",
    "Email me a code": "发送验证码到邮箱",
    "Save your progress": "保存你的进度",
    "Sending...": "发送中……",
    " Resend code": " 重新发送验证码",
    "Change email": "更换邮箱",
    "Enter the 6-digit code we sent to ": "输入我们发送到",
    "Verify & save": "验证并保存",
    "likexiazai@qq.com": "likexiazai@qq.com",
    "Saving...": "保存中……",
    "Progress saved to your account!": "进度已保存到你的账号！",
    " Got it ": " 知道了 ",
    "Build Your Identity": "建立你的身份",
    "NOW UNLOCKED": "现已解锁",
    "Skip all": "全部跳过",
    "The Identity Studio lets you generate an AI portrait and equip the prestige avatar frames you have earned. Your look shows up across the leaderboard and on every profile, so make it count. It is the face of your empire, free to customize anytime.": "身份工作室让你生成AI肖像并装备你获得的声望头像框。你的外观会出现在排行榜和每个资料页上，所以要认真对待。这是你帝国的面孔，随时免费定制。",
    " Empire shape": " 帝国形态",
    " Level Progress": " 等级进度",
    " PR": " 公关",
    " Performance dossier": " 绩效档案",
    " Reputation": " 声望",
    " Titles & Ranks": " 头衔与排名",
    " earned": " 已赚取",
    " floor": " 地板",
    " merged": " 已合并",
    " target": " 目标",
    " · Automation ": " · 自动化",
    " · ROI ": " · 投资回报率",
    "+0% crisis resilience": "+0%危机韧性",
    "+0% prestige gain": "+0%声望获取",
    "+13.1% idle income": "+13.1%离线收入",
    "Active ": "活跃",
    "Beloved leader": "受人爱戴的领袖",
    "Bronze Band · P1": "青铜环 · P1",
    "Businesses": "企业",
    "CEO Operating Stats": "CEO运营数据",
    "CEO Profile": "CEO资料",
    "Cash Out (Sell the Empire)": "套现（出售帝国）",
    "Cashflow ": "现金流",
    "Clicks": "点击",
    "Details": "详情",
    "Dominant": "主导",
    "Each axis bends your economy — shown live below. Tap PR on any axis to see the exact cost and reputation a campaign buys before you commit.": "每个轴都会影响你的经济——实时显示如下。点击任何轴上的公关查看活动购买的具体成本和声望。",
    "Following trends": "追随趋势",
    "Founder": "创始人",
    "Industry Clout": "行业影响力",
    "Legacy Shares": "遗产股份",
    "Legacy tier": "遗产等级",
    "Level 0 reached": "已达成0级",
    "Level rank": "等级排名",
    "Need to level": "需要升级",
    "Next Portrait": "下一个肖像",
    "No owned sectors yet. Buy your first business to start building a footprint.": "尚未拥有任何行业。购买第一家企业开始建立足迹。",
    "No prestige yet": "暂无声望",
    "None": "无",
    "Prestige 1 to unlock": "声望1解锁",
    "Prestige Rank": "声望等级",
    "Public Trust": "公众信任",
    "Recognized": "知名",
    "Sector Footprint": "行业足迹",
    "Skill Points": "技能点",
    "Street Cred": "街头信誉",
    "Total Spent": "总支出",
    "Total earned": "总收入",
    "Unlock Cash Out to sell the empire for permanent Legacy Shares and a multiplier.": "解锁套现以出售帝国换取永久遗产股份和倍率。",
    "Unlocked sectors": "已解锁行业",
    "Unranked": "未排名",
    "View all titles": "查看所有头衔",
    "View operating stats": "查看运营数据",
    "Whispered about": "被悄悄议论",
    "Your Honors": "你的荣誉",
    "x": "x",
    "· active ": "· 活跃",
    "· next: ": "· 下一个：",
    "−0% buy costs": "−0%购买成本",
    " Recent changes": " 最近变化",
    "-2% idle income": "-2%离线收入",
    "A sweeping consumer survey reveals a sharp rebound in market-wide brand loyalty.": "一项广泛的消费者调查显示市场范围内的品牌忠诚度急剧回升。",
    "AI Director": "AI总监",
    "Corporate Governance Council praises sector compliance, lifting consumer trust.": "公司治理委员会赞扬行业合规，提升消费者信任。",
    "Global Inspection Reports Suggest Supply Chain Inefficiencies": "全球检查报告显示供应链效率低下",
    "Global Standards Union commends widespread upgrade of baseline employee safety protocols.": "全球标准联盟赞扬基本员工安全协议的广泛升级。",
    "National Consumer Advisory Council commends mainboard players for enhanced disclosures": "全国消费者咨询委员会赞扬主板公司加强信息披露",
    "Tycora Board Allocates Welfare Surplus; Workers Signal Resolution": "泰科拉董事会分配福利盈余；工人表示解决",
    " · must be unique": " · 必须唯一",
    "First rename is ": "首次重命名",
    "free": "免费",
    "G": "G",
    "GI": "GI",
    "Gityx": "Gityx",
    "Name updated": "名称已更新",
    " Managers unlock at Lvl ": " 经理在等级",
    "Expand": "扩展",
    "The Premium Hub": "高级中心",
    "The Premium hub is where you shop for powerful boosts, convert between cash and premium currency, and review your ledger. Premium currency survives prestige, so it is your most durable resource. Spend it on the boosts that fit your strategy and track every transaction here.": "高级中心是你购买强力加速、在现金和高级货币之间兑换以及查看账本的地方。高级货币在声望后保留，因此是你最持久的资源。将其花在适合你策略的加速上，并在此追踪每笔交易。",
    " Premium exchange": " 高级兑换",
    " Vault balance": " 金库余额",
    "+25% of capital in cash": "现金资本+25%",
    "1.5× all passive income for 30 minutes.": "1.5倍所有被动收入，持续30分钟。",
    "2× all passive income for 1 hour.": "2倍所有被动收入，持续1小时。",
    "2× all passive income for 4 hours — for when you step away.": "2倍所有被动收入，持续4小时——适合离开时使用。",
    "3× all passive income for 1 hour.": "3倍所有被动收入，持续1小时。",
    "5 curated premium offers": "5个精选高级优惠",
    "Cash Injection": "现金注入",
    "Convert": "兑换",
    "Income Surge": "收入激增",
    "Instantly add 25% of your current capital.": "立即增加当前资本的25%。",
    "Ledger": "账本",
    "Market Rally": "市场反弹",
    "Offers": "优惠",
    "Owned": "已拥有",
    "Power Hour": "强力一小时",
    "Premium vault": "高级金库",
    "Price": "价格",
    "Quick Boost": "快速加速",
    "Shop": "商店",
    "The gold currency of Tycora": "泰科拉的金币货币",
    "♛ 1 pays ~$800K (dynamic)": "♛ 1支付约$800K（动态）",
    " Spending power": " 消费力",
    " amount": " 数量",
    " available": " 可用",
    "$800K": "$800K",
    ". Each direction can be opened, closed, and priced independently by admins.": "。每个方向可由管理员独立开启、关闭和定价。",
    "Cash available": "可用现金",
    "Cash out for $800K": "套现获得$800K",
    "Currency desk": "货币柜台",
    "Exchange between cash and ": "在现金和",
    "Receive": "获得",
    "Spend": "花费",
    "♛ 1 pays ~$800K · scales with empire": "♛ 1支付约$800K · 随帝国规模变化",
    "Loading ledger": "加载账本",
    "Pulling premium movement from your account.": "从你的账户获取高级货币流水。",
    "No premium activity yet": "暂无高级活动",
    "Purchases, grants, jobs, and conversions will appear here.": "购买、赠予、工作和兑换将显示在此。",
    "Wheel unlocks at Level 4": "转盘在4级解锁",
    "Exchange unlocks at Level 14": "兑换在14级解锁",
    "Career unlocks at Level 5": "职业在5级解锁",
    "Starting up...": "启动中……",
    " Milestones": " 里程碑",
    " Unlocks ": " 解锁 ",
    " to go": " 剩余",
    " · Director": " · 总监",
    " · Executive": " · 高管",
    " · Founder": " · 创始人",
    " · Manager": " · 经理",
    " · Operator": " · 运营者",
    " · Proprietor": " · 业主",
    "% to ": "%到",
    "Based on total earned this run": "基于本轮总收入",
    "Managers (automation)": "经理（自动化）",
    "Next level": "下一等级",
    "Target to reach": "目标达到",
    "Total earned this run": "本轮总收入",
    "Upgrades": "升级",
    "Wheel of Fortune": "命运之轮",
    "You're here · ": "你在此 · ",
    "rises as run earnings climb the curve (each level needs about base× the span of the last). Your earned career rank and unlocked features are kept permanently, even after a prestige resets your run earnings.": "随本轮收入增长而提升（每级需要大约基准×上一级的跨度）。你获得的职业等级和解锁的功能永久保留，即使声望重置了你的本轮收入。",
    "Warming Up": "热身",
    " Tapping": " 点击",
    "At full combo (×2.00)": "满连击（×2.00）",
    "Click power": "点击力量",
    "Each tap banks the greater of a base amount or ": "每次点击获得基准值或该区域收入的一定百分比（取较大值）——因此随整个帝国规模增长。",
    "Lifetime taps": "终身点击数",
    "Per tap": "每次点击",
    "buy click upgrades to boost": "购买点击升级以提升",
    "s of this district's income — so it scales with your whole empire.": "",
    "2 — Proprietor!": "2 — 业主！",
    "Proprietor": "业主",
    "4.5× tap value": "4.5倍点击价值",
    "5.5× tap value": "5.5倍点击价值",
    "6× tap value": "6倍点击价值",
    "A breakthrough electrifies the floor — 5× tap value.": "一项突破震撼全场——5倍点击价值。",
    "Capitalize": "资本化",
    "Give it away — smaller boost, huge goodwill.": "免费开放——较小的提升，巨大的善意。",
    "Industry": "行业",
    "Lock down the IP for a strong, protected gain.": "锁定知识产权以获得强劲的受保护收益。",
    "Open Source": "开源",
    "Opportunity": "机遇",
    "Patent It": "申请专利",
    "Pour cash in to push the breakthrough hardest.": "投入资金最大程度推动突破。",
    "Street": "街头",
    "Tech Breakthrough": "科技突破",
    "from upgrades & skills": "来自升级与技能",
    "Heating Up": "升温",
    "3 — Operator!": "3 — 运营者！",
    "A Manager runs a business for you so it keeps earning whether you are tapping or asleep. Buy one for any business from its card, then move your attention to the next opportunity. This is the automation engine that turns active grinding into true passive income.": "经理为你运营企业，无论你在点击还是睡觉都能持续收益。从企业卡片购买经理，然后将注意力转向下一个机会。这是将主动肝转变为真正被动收入的自动化引擎。",
    "Hire": "雇佣",
    "Hire Managers, Stop Tapping": "雇佣经理，停止点击",
    "Junior": "初级",
    "Offline income": "离线收入",
    "Operator": "运营者",
    "Unlocked": "已解锁",
    " units owned": " 单位拥有",
    "3 reached": "3已达成",
    "Manager": "经理",
    "Milestone": "里程碑",
    " Delete account": " 删除账号",
    " How intrusive in-game crisis notifications get.": " 游戏内危机通知的侵扰程度。",
    " Install Tycora app": " 安装Tycora应用",
    " Sign out": " 登出",
    "6xwfepg56g2e2h2": "6xwfepg56g2e2h2",
    "Account": "账号",
    "Add Tycora to your home screen for a full-screen, app-like experience. Optional.": "将Tycora添加到主屏幕以获得全屏、类似应用的体验。可选。",
    "All crises": "所有危机",
    "App": "应用",
    "Auto-popup for every event": "每个事件自动弹窗",
    "Banner only, tap to act": "仅横幅，点击操作",
    "Calmer motion, fewer effects": "更平缓的动效，更少特效",
    "Coin chimes & UI clicks": "金币音效与界面点击",
    "Community, support & events": "社区、支持与活动",
    "Crisis alerts": "危机警报",
    "Feed only": "仅信息流",
    "Major only": "仅重大",
    "Mute haptics": "静音触觉",
    "Mute sound": "静音",
    "No alerts shown": "不显示警报",
    "Player ID": "玩家ID",
    "Popup high-priority only": "仅高优先级弹窗",
    "Preferences": "偏好设置",
    "Reduce animations": "减少动画",
    "Share your Player ID with support if you need help with your account.": "如需账号帮助，将你的玩家ID分享给客服。",
    "Vibration feedback": "振动反馈",
    " Connect Discord": " 连接Discord",
    " bonus the first time you link, plus": " 首次关联奖励，外加",
    " — earn ✦100 Gold": " — 赚取 ✦100金币",
    ", get DM alerts, and earn Discord roles.": "，获取私信提醒并赚取Discord角色。",
    "/daily": "/daily",
    "/me": "/me",
    "Get a ": "获得",
    "use ": "使用",
    "4 — Manager!": "4 — 经理！",
    " Tier ": " 等级 ",
    " live": " 在线",
    " managed": " 已管理",
    "/hr": "/小时",
    "Away income": "离线收入",
    "Junior manager hired for Hot Dog Stand!": "热狗摊已雇佣初级经理！",
    "Promote": "晋升",
    "Senior": "高级",
    "Live standings": "实时排名",
    "Partner": "合伙人",
    "Strong": "强劲",
    "Permanent Food income boosts": "永久食品收入加成",
    "Sector Upgrades": "行业升级",
    "19 active today": "今日19活跃",
    " Locked": " 已锁定",
    " earned this level": " 本等级已赚取",
    " more total earnings": " 更多总收入",
    "-10% costs": "-10%成本",
    "-10% on every purchase": "每次购买-10%",
    "-20% costs": "-20%成本",
    "-20% on every purchase": "每次购买-20%",
    "0 installed · 1 ready · 8 sealed": "0已安装 · 1就绪 · 8封印",
    "1.35x all passive income": "1.35倍所有被动收入",
    "1.35x passive income": "1.35倍被动收入",
    "1.6x all passive income": "1.6倍所有被动收入",
    "1.6x passive income": "1.6倍被动收入",
    "10x tap income": "10倍点击收入",
    "2.5x all passive income": "2.5倍所有被动收入",
    "2.5x passive income": "2.5倍被动收入",
    "2x all passive income": "2倍所有被动收入",
    "2x passive income": "2倍被动收入",
    "2x tap income": "2倍点击收入",
    "4x tap income": "4倍点击收入",
    "Active Loadout": "当前配置",
    "Bulk Procurement": "批量采购",
    "Diversification": "多元化",
    "Economic Singularity": "经济奇点",
    "Full Automation": "完全自动化",
    "Golden Touch": "点金术",
    "Growth": "增长",
    "Growth Portfolio": "增长组合",
    "Growth upgrades that boost income, Missions for extra cash, Skills, and your Legacy. Open a tab, spend your earnings, and watch every business pay out more. Reinvesting here is how a corner stand becomes a conglomerate.": "提升收入的增长升级、赚取额外现金的任务、技能和你的遗产。打开一个标签页，花掉你的收益，看着每个企业产出更多。在这里再投资正是街角摊位变成企业集团的方式。",
    "Lean Operations": "精益运营",
    "Legacy": "遗产",
    "Market Monopoly": "市场垄断",
    "Missions": "任务",
    "Next milestone · Level ": "下一里程碑 · 等级",
    "Precision Tapping": "精准点击",
    "Ready": "就绪",
    "Sector, market & bank upgrades live on their own screens.": "行业、市场和银行升级各自独立显示。",
    "Skills": "技能",
    "Stats": "统计",
    "This is mission control for everything you own": "这是你所拥有一切的指挥中心",
    "Unlock": "解锁",
    "Vertical Integration": "纵向整合",
    "Your Career Hub": "你的职业中心",
    "Your standing as chief executive.": "你作为CEO的地位。",
    "everything buffing your empire": "所有增益你帝国的因素",
    "passive": "被动",
    "tap": "点击",
    "1 installed · 0 ready · 8 sealed": "1已安装 · 0就绪 · 8封印",
    "Golden Touch unlocked!": "点金术已解锁！",
    "Installed": "已安装",
    "$8.67K / hour": "$8.67K / 小时",
    "& prestige rewards": "和声望奖励",
    "0 legacy shares": "0遗产股份",
    "Applied to each business's raw output. Reputation & crises swing with the world; everything else is yours to keep.": "应用于每个企业的原始产出。声望和危机随世界波动；其他一切由你保留。",
    "Career skills": "职业技能",
    "Crises & events": "危机与事件",
    "Crisis resilience": "危机韧性",
    "Income multiplier": "收入倍率",
    "Income multiplier ledger": "收入倍率账本",
    "Legacy perks": "遗产特权",
    "Legacy share bonus": "遗产股份加成",
    "Lifetime earned": "终身收入",
    "Live income": "实时收入",
    "Manager hiring": "经理雇佣",
    "Manager output": "经理产出",
    "Other money levers": "其他收入杠杆",
    "Ownership cap": "所有权上限",
    "Passive income": "被动收入",
    "Prestige": "声望",
    "Purchase cost": "购买成本",
    "Purchase costs": "购买成本",
    "Reputation effects": "声望效果",
    "Tap income": "点击收入",
    "Temp boost": "临时加速",
    "Unlock cost": "解锁费用",
    "Where it comes from": "收入来源",
    "Your multiplier": "你的倍率",
    "across this run": "本轮累计",
    "at next cash-out": "下次套现时",
    "cheaper buys": "更便宜的购买",
    "cheaper managers": "更便宜的经理",
    "every factor multiplying your passive income": "每个乘以你被动收入的因素",
    "how your standing bends the numbers": "你的地位如何影响数字",
    "income": "收入",
    "managed income": "管理收入",
    "per-tap value": "每次点击价值",
    "permanent edges beyond passive income": "超越被动收入的永久优势",
    "share of your gains": "你的收益份额",
    "stock float": "流通股",
    "upgrades & licenses": "升级与许可",
    "your bonuses, above baseline": "你的加成，高于基准",
    "× Economy baseline (balance knob)": "× 经济基准（平衡旋钮）",
    " Street Operations": " 街头运营",
    " jobs running": " 任务进行中",
    "$595–$1.49K": "$595–$1.49K",
    "10–25% of cash": "10–25%现金",
    "15m 00s": "15分00秒",
    "1h 0m": "1小时0分",
    "2% of cash": "2%现金",
    "2h 0m": "2小时0分",
    "5–12% of cash": "5–12%现金",
    "Active jobs": "活跃任务",
    "Bust": "失败",
    "Contracts": "合约",
    "Cook the ledgers for 5%–12% of your capital — but a bust bites hard.": "做假账获取5%–12%资本——但失败代价惨重。",
    "Daily": "每日",
    "Dark Web": "暗网",
    "Deals": "交易",
    "Midnight Courier Run": "午夜信使跑腿",
    "Move contraband across borders — 10%–25% of your capital, if it lands.": "跨境运送违禁品——成功则获得10%–25%资本。",
    "Off-the-books jobs & black-market deals. High risk, high reward — and the fastest way to earn": "地下任务与黑市交易。高风险高回报——最快的赚钱方式",
    "Pays": "支付",
    "Run a quiet package across town. Quick, low-risk — a small, guaranteed slice of your capital.": "在城里跑一趟安静包裹。快速低风险——一小份有保障的资本。",
    "Skim the Books": "账面揩油",
    "Slots": "栏位",
    "Smuggling Run": "走私行动",
    "Stake": "赌注",
    "Take the job": "接取任务",
    "Time": "时间",
    "Unlocks at Lvl 12": "12级解锁",
    "Unlocks at Lvl 8": "8级解锁",
    " High risk": " 高风险",
    "+10%–20% of capital": "+10%–20%资本",
    "+25%–50% of capital": "+25%–50%资本",
    "18% bust": "18%失败",
    "25% bust": "25%失败",
    "2×–5× income for 1 hour, no questions asked.": "2–5倍收入持续1小时，无需多问。",
    "2–x5": "2–5倍",
    "30% bust": "30%失败",
    "A \"sure thing\" — 25%–50% of capital in cash. Risky.": "一个\"稳赚\"——25%–50%现金资本。有风险。",
    "A whispered lead — 10%–20% of your capital in quick cash. Low stakes.": "小道消息——10%–20%资本快速变现。低风险。",
    "Black-Market Boost": "黑市加速",
    "Black-Market Vault": "黑市金库",
    "Insider Tip": "内幕消息",
    "Limited": "限量",
    "Stock": "库存",
    "Street Tip": "街头消息",
    "· limited, rotating stock": "· 限量，轮换库存",
    "Bite-sized daily objectives with cash & premium rewards are on the way. For now, work the contract board and the black-market vault.": "带有现金和高级奖励的轻量每日目标即将推出。目前，去合约板和黑市金库干活吧。",
    "Daily missions — coming soon": "每日任务——即将推出",
    "CEO Skill Tree": "CEO技能树",
    "Unlock the Skill Tree to spend skill points on permanent CEO perks.": "解锁技能树以花费技能点获得永久CEO特权。",
    "Legacy Perks": "遗产特权",
    "Unlock Legacy Perks to spend Legacy Shares on permanent cross-run upgrades.": "解锁遗产特权以花费遗产股份获得永久跨轮升级。",
    " Fortune Vault": " 命运金库",
    " Live winners": " 实时赢家",
    " The vault · every outcome": " 金库 · 每个结果",
    " Win chance": " 胜率",
    " prizes": " 奖品",
    " · hover a prize to preview it in the showcase": " · 悬停奖品可在展示中预览",
    "+1 legacy": "+1遗产",
    "+1 skill": "+1技能",
    "+5 reputation": "+5声望",
    "-6 reputation": "-6声望",
    "100% capital": "100%资本",
    "100% of your current capital! One-time mega windfall.": "当前资本的100%！一次性巨额意外之财。",
    "5 of 5": "5/5",
    "5% capital": "5%资本",
    "50% capital": "50%资本",
    "BL": "厄运",
    "Better Luck…": "下次好运……",
    "CD": "现金掉落",
    "Cash Drop": "现金掉落",
    "FF": "命运眷顾",
    "Fortune's Favor": "命运眷顾",
    "Free ready": "免费已就绪",
    "GP": "金币袋",
    "GV": "金币库",
    "Gold Pouch": "金币袋",
    "Gold Vault": "金币库",
    "Good Press": "正面新闻",
    "IS": "内幕消息",
    "Jackpot": "头奖",
    "LS": "遗产股份",
    "Legacy Share": "遗产股份",
    "Lucky": "幸运",
    "No spins yet — be the first to crack the vault.": "尚无旋转——成为第一个开启金库的人。",
    "Paid spins left": "剩余付费旋转",
    "Prizes": "奖品",
    "Rarest prize": "最稀有奖品",
    "SP": "技能点",
    "Scandal": "丑闻",
    "Skill Point": "技能点",
    "Spin Free": "免费旋转",
    "Spin cost": "旋转费用",
    "Spin daily for a shot at cash, premium, boosts — or a stroke of bad luck.": "每日旋转赢取现金、高级货币、加速——或一阵厄运。",
    "Spin the Wheel": "旋转命运之轮",
    "Status": "状态",
    "The Wheel of Fortune gives you a free spin every day plus paid extra spins for cash or premium, with prizes ranging from money to reputation. Claim your free spin daily and let the rewards stack up over time. It is the easiest bonus in the game.": "命运之轮每天提供一次免费旋转，外加付费额外旋转换取现金或高级货币，奖品从金钱到声望不等。每天领取免费旋转，让奖励随时间累积。这是游戏中最简单的奖励。",
    "Total odds weight ": "总赔率权重",
    "Try again": "再试一次",
    "x2 income for 1h": "2倍收入持续1小时",
    "+5% of your capital.": "+5%资本。",
    "Inspecting": "查看中",
    "A big premium payout.": "大额高级货币奖励。",
    "2× income for 1 hour.": "2倍收入持续1小时。",
    "+50% of your capital!": "+50%资本！",
    "A handful of premium currency.": "一把高级货币。",
    "A CEO skill point.": "一个CEO技能点。",
    "A prestige legacy share.": "一个声望遗产股份。",
    "No prize this time.": "这次没有奖品。",
    "Spinning…": "旋转中……",
    " Collect": " 领取",
    "Free spin result": "免费旋转结果",
    "Paid": "付费",
    "Paused": "已暂停",
    "Payout": "奖励",
    "Tycora Gold balance": "Tycora金币余额",
    "You just won": "你刚赢得",
    "next free spin": "下次免费旋转",
    "Not enough to spin": "不足旋转",
    " spent": " 已花费",
    "1 balance event": "1余额事件",
    "Just now": "刚刚",
    "Premium ledger": "高级账本",
    "Premium small": "小额高级",
    "Wheel spin": "转盘旋转",
    "Boutique": "精品店",
    "Curated fashion": "精选时尚",
    "Dept. Store": "百货商店",
    "E-Commerce": "电商",
    "Flea market hustle": "跳蚤市场生意",
    "Market Stall": "市场摊位",
    "Online empire": "线上帝国",
    "Permanent Retail income boosts": "永久零售收入加成",
    "Retail powerhouse": "零售巨头",
    "Climb the Global Ranks": "攀登全球排名",
    "Every player is ranked by their true net worth, recomputed live, so the board shows who is really winning. Tap any name to size up their empire, and chase the event prize tiers for real rewards. Getting to the top is the whole point.": "每位玩家按真实净资产排名，实时重新计算，所以排行榜显示谁真正领先。点击任何名字查看其帝国，追逐活动奖励等级获取真实奖励。登上顶峰是全部意义。",
    " Competitive ladder": " 竞技阶梯",
    " Leader": " 领袖",
    " Ranked CEOs ": " CEO排名",
    "All Time": "全部时间",
    "All-time standings ranked by true net worth (cash, bank, holdings & equity).": "全部时间排名按真实净资产（现金、银行、持股和权益）排序。",
    "Leaderboard": "排行榜",
    "Loading live standings...": "加载实时排名中……",
    "This Event": "本次活动",
    "Unclaimed": "未领取",
    "Absentia": "Absentia",
    "Aeon": "Aeon",
    "ApexMogul": "ApexMogul",
    "Apotheosis": "Apotheosis",
    "Archon": "Archon",
    "Autarch": "Autarch",
    "CEO": "CEO",
    "CH": "CH",
    "Chairman": "Chairman",
    "Champion": "Champion",
    "ChickyKnight118": "ChickyKnight118",
    "Chief": "首领",
    "Colossus": "Colossus",
    "Czar": "Czar",
    "Director": "总监",
    "Dominus": "Dominus",
    "Executive": "高管",
    "HE": "HE",
    "HO": "HO",
    "Hegemon": "Hegemon",
    "Hero": "Hero",
    "HolyTryst": "HolyTryst",
    "JA": "JA",
    "JR": "JR",
    "Jack": "Jack",
    "KI": "KI",
    "Kim": "Kim",
    "Kingpin": "Kingpin",
    "LE": "LE",
    "LU": "LU",
    "LUNAR": "LUNAR",
    "Legolass": "Legolass",
    "Leviathan": "Leviathan",
    "Lv ": "等级 ",
    "ME": "ME",
    "MH": "MH",
    "Mettlemod": "Mettlemod",
    "Mogul": "Mogul",
    "Omniarch": "Omniarch",
    "Pantheon": "Pantheon",
    "Paramount": "Paramount",
    "Primarch": "Primarch",
    "Principal": "Principal",
    "Rank": "排名",
    "Raziel": "Raziel",
    "Runner-up": "Runner-up",
    "SI": "SI",
    "SM": "SM",
    "Sinnerman": "Sinnerman",
    "SmiLe": "SmiLe",
    "TO": "TO",
    "TY": "TY",
    "Third": "Third",
    "Tony Stark": "Tony Stark",
    "Transcendent": "Transcendent",
    "Tycoon": "Tycoon",
    "TycoraPro": "TycoraPro",
    "WI": "WI",
    "WO": "WO",
    "Will": "Will",
    "WoS": "WoS",
    "leganes": "leganes",
    "Missions are off-the-books contracts and dark-web vault jobs that pay out far more than honest work, for far more risk. Take the jobs you can stomach, knowing a bust can cost you. High risk, high pay, and a fast way to fund your next big move.": "任务是地下合约和暗网金库工作，回报远超正当营生，风险也远高。接你能承受的任务，知道失败可能让你付出代价。高风险高回报，是资助你下一步大动作的快速途径。",
    "Off-the-Books Missions": "地下任务",
    "Bank the gains as they come.": "见好就收。",
    "Confidence surges — passive revenue doubled.": "信心飙升——被动收入翻倍。",
    "Economic Boom": "经济繁荣",
    "Go all-in for the biggest upside — risk overextension.": "全力押注最大收益——风险是过度扩张。",
    "Press Advantage": "乘胜追击",
    "Reinvest All": "全部再投资",
    "Spend to expand hard into the upswing.": "投入扩张以充分利用上升期。",
    "Stay Conservative": "保持保守",
    "Cult-like devotion": "狂热崇拜般的忠诚",
    " Loading more…": " 加载更多……",
    "NS": "NS",
    "NShadeIV": "NShadeIV",
    "Potentate": "Potentate",
    "YOU": "你",
    "A campaign goes viral — 3× revenue.": "一场营销活动走红——3倍收入。",
    "Cash in aggressively — max gain, public backlash.": "激进变现——最大收益，公众反弹。",
    "Keep it grounded — steady gain, public love.": "保持低调——稳定收益，公众喜爱。",
    "Lean in to stretch the moment further.": "顺势而为以延长时机。",
    "Monetize Hard": "强力变现",
    "Ride the Wave": "乘势而上",
    "Stay Humble": "保持谦逊",
    "Viral Marketing": "病毒式营销",
    "Build Fast":"快速营建",
    "Flip everything at the peak — max gain, trust dips.":"在鼎盛时期悉数抛售，收益拉满，信任度下降。",
    "Housing Boom":"住宅热潮",
    "Measured expansion you can hold.":"稳步扩张，局面可控。",
    "Property demand spikes — Real Estate income 4×.":"房产需求暴涨，地产收益提升至四倍。",
    "Rush new units to ride the demand.":"抓紧增建房源，把握行情。",
    "Sell High":"高价抛售",
    "Steady Growth":"稳健发展",
    "Crisis response":"危机应对",
    "Job complete":"任务完成",
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
var cnResourceNames = {};
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
