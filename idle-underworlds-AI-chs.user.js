// ==UserScript==
// @name         Idle Underworlds 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Idle Underworlds (https://idleunderworlds.com?ref=gityx&planet=2) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Idle Underworlds.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://idleunderworlds.com/favicon.ico
// @license      MIT
// @include      *https://idleunderworlds.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/idle-underworlds-AI-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/idle-underworlds-AI-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/07/01 16:33
 * Author: guoba
 * View: https://www.gityx.com/
 * ---------------------------
 */

(function() {
    'use strict';

    // ============================================================
    // 内置默认配置（仅当页面未提供时生效）
    // ============================================================
    // 匹配配置
    if (!window.cnConfig || Object.keys(window.cnConfig).length === 0) {
        window.cnConfig = {
            //是否忽视大小写
            ignoreCase: true,
            //是否忽视首尾空格
            trimSpaces: true,

        };
    }

    // 分类名称注册表（供编辑器工具使用）
    window.cnCategoriesList = window.cnCategoriesList || [
        "resource",
        "item",
    ];

    // 主要翻译词条
    if (!window.cnItems || Object.keys(window.cnItems).length === 0) {
        window.cnItems = {
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
    "Decorator {{0}}": "装潢师 {{0}}",
    "Cost: {{0}}": "消耗：{{0}}",
    "Next Improvement: {{0}}": "下次提升：{{0}}",
    "Level {{0}}": "等级{{0}}",
    "{{0}} x {{1}}": "{{0}} × {{1}}",
    "{{0}} / {{1}}": "{{0}} / {{1}}",
    "{{0}}d, {{1}}h, {{2}}mn": "{{0}}天，{{1}}小时，{{2}}分钟",
    "{{0}}h, {{1}}mn": "{{0}}小时，{{1}}分钟",

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
    "{{%d}}": "{{%d}}",
    "Player Level {{%d}}": "玩家等级 {{%d}}",
    "📍 Sand ({{%d}})": "📍 沙子 ({{%d}})",
    "📍 Plain ({{%d}})": "📍 平原 ({{%d}})",
    "📍 Shallow Water ({{%d}})": "📍 浅水 ({{%d}})",
    "Tier {{%d}}": "层级 {{%d}}",
    "Upgrade to level {{%d}}": "升级到等级 {{%d}}",
    "Slot {{%d}}": "槽位 {{%d}}",
    " · Reach level {{%d}}.": " · 达到等级 {{%d}}.",
    " · Level {{%d}}": " · 等级 {{%d}}",
    "Changelog {{%d.}}": "更新日志 {{%d.}}",
    "+{{%d}} /h": "+{{%d}} /小时",
    "+{{%d}}% /h": "+{{%d}}% /小时",
    "+{{%d}}/h": "+{{%d}}/小时",
    "-{{%d}} /h": "-{{%d}} /小时",
    "+{{%d}} /d": "+{{%d}} /天",
    "+{{%d}}/d": "+{{%d}}/天",
    "+{{%d.}}k /d": "+{{%d.}}k /天",
    "Guest-{{%d}}": "游客-{{%d}}",
    ": {{%d}}h": ": {{%d}}小时",
    ": {{%d}}d": ": {{%d}}天",
    "{{%d}}mh": "{{%d}}mh",
    "{{%d}}mn": "{{%d}}mn",
    "({{%d}}mh)": "({{%d}}mh)",
    "({{%d}}d)": "({{%d}}天)",
    "Active ({{%d}}d)": "活跃 ({{%d}}天)",
    "({{%d}}h)": "({{%d}}小时)",
    "HP: {{%d}}": "生命值：{{%d}}",
    "DMG: {{%d}}": "伤害：{{%d}}",
    "{{%d.}}k": "{{%d.}}k",
    "{{%d.}} kg": "{{%d.}} kg",
    "{{%d.}}M": "{{%d.}}M",
    "Year {{0}} (current)": "年 {{0}} (当前)",
    "\n{{0}}Year {{1}} (day {{2}})\n{{3}}": "\n{{0}}年 {{1}} (天 {{2}})\n{{3}}",
    "\n{{0}}Proto Planet · {{1}}": "\n{{0}}原始星球 · {{1}}",
    "\n{{0}}Alpha Planet · {{1}}": "\n{{0}}阿尔法星球 · {{1}}",
    "\n{{0}}Visit this planet\n{{1}}": "\n{{0}}访问这个星球{{1}}",
    "\n{{0}}Join this planet\n{{1}}": "\n{{0}}加入这个星球{{1}}",
    "\n{{0}}See full ranking\n{{1}}": "\n{{0}}查看完整排行榜{{1}}",
    "\n{{0}}Destroy a building.\n{{1}}": "\n{{0}}摧毁一座建筑.{{1}}",
    "\n{{0}}Create a market offer.\n{{1}}": "\n{{0}}创建一个市场订单.{{1}}",
    "\n{{0}}Build a market.\n{{1}}": "\n{{0}}建造一个市场.{{1}}",
    "\n{{0}}Build an underworld portal.\n{{1}}": "\n{{0}}建造一个地下世界传送门.{{1}}",
    "\n{{0}}Generate {{1}} equipment.\n{{2}}": "\n{{0}}生成 {{1}} 装备.{{2}}",
    "\n{{0}}Generate {{1}} gold.\n{{2}}": "\n{{0}}生成 {{1}} 黄金.{{2}}",
    "\n{{0}}Generate {{1}} stone.\n{{2}}": "\n{{0}}生成 {{1}} 石头.{{2}}",
    "\n{{0}}Generate {{1}} wood.\n{{2}}": "\n{{0}}生成 {{1}} 木头.{{2}}",
    "\n{{0}}Generate {{1}} leather.\n{{2}}": "\n{{0}}生成 {{1}} 皮革.{{2}}",
    "\n{{0}}Generate {{1}} iron.\n{{2}}": "\n{{0}}生成 {{1}} 铁.{{2}}",
    "\n{{0}}Generate {{1}} food.\n{{2}}": "\n{{0}}生成 {{1}} 食物.{{2}}",
    "\n{{0}}Play {{1}} different days.\n{{2}}": "\n{{0}}玩 {{1}} 不同的天数.{{2}}",
    "\n{{0}}Build {{1}} roads.\n{{2}}": "\n{{0}}建造 {{1}} 道路.{{2}}",
    "\n{{0}}Build {{1}} buildings.\n{{2}}": "\n{{0}}建造 {{1}} 建筑.{{2}}",
    "\n{{0}}Stone\n{{1}}(production)\n{{2}}": "\n{{0}}石头\n{{1}}(生产)\n{{2}}",
    "\n{{0}}Wood\n{{1}}(production)\n{{2}}": "\n{{0}}木头\n{{1}}(生产)\n{{2}}",
    "\n{{0}}Food\n{{1}}(production)\n{{2}}": "\n{{0}}食物\n{{1}}(生产)\n{{2}}",
    "\n{{0}}Food\n{{1}}(consumption)\n{{2}}": "\n{{0}}食物\n{{1}}(消耗)\n{{2}}",
    "\n{{0}}Player Level {{1}}\n{{2}}({{3}} levels remaining)\n{{4}}": "\n{{0}}玩家等级 {{1}}\n{{2}}(剩余 {{3}} 等级)\n{{4}}",
    "\n{{0}}{{%d.}}{{1}}\n{{2}}": "\n{{0}}{{%d.}}{{1}}{{2}}",
    "\n{{0}}All Time\n{{1}}": "\n{{0}}所有时间{{1}}",
    "\n{{0}}← Back to planets\n{{1}}": "\n{{0}}← 返回星球{{1}}",
    "\n{{0}}This planet is not currently accepting new players. Feel free to chat with the community!\n{{1}}": "\n{{0}}目前该星球不接受新玩家加入，欢迎与社区成员交流！{{1}}",
    "\n{{0}}|\n{{1}}Running : ": "\n{{0}}|\n{{1}}运行 : ",
    "\n{{0}}Public : ": "\n{{0}}公开 : ",
    "\n{{0}}Multiply ": "\n{{0}}乘以",
    "\n{{0}}Loading the map... ": "\n{{0}}加载地图...",
    "\n{{0}}Loading moving carts... ": "\n{{0}}加载移动推车...",
    "\n{{0}}Building Level": "\n{{0}}建筑等级",
    "\n{{0}}Loading game... ": "\n{{0}}加载游戏...",
    "\n{{0}}Loading Underworld sessions... ": "\n{{0}}地下世界季节...",
    "\n{{0}}Loading chat... ": "\n{{0}}加载聊天...",
    "\n{{0}}Loading events... ": "\n{{0}}加载事件...",
    "\n{{0}}• Rare Collectible chance ": "\n{{0}}• 稀有收藏品几率 ",
    "\n{{0}}• Damage is spread ": "\n{{0}}• 伤害扩散 ",
    "\n{{0}}• Self-Sufficient bonus ": "\n{{0}}• 自给自足奖励 ",
    "\n{{0}}(B) Automatic Fight Resolution.": "\n{{0}}(B) 自动战斗解决。",
    "\n{{0}}• Unlock ": "\n{{0}}• 解锁 ",
    "\n\n{{0}}Destroy this building\n\n{{1}}": "\n\n{{0}}摧毁这个建筑\n\n{{1}}",
    " Underworld Runs\n{{0}}": "地下世界运行\n{{0}}",
    " Domain Size\n{{0}}": "领域规模\n{{0}}",
    " Locked, requires Town Center level {{0}}\n{{1}}": "已锁定，需要城镇中心 {{0}} 级\n{{1}}",
    "Enjoying the game? Invite friends and earn exclusive rewards.\n{{0}}": "喜欢游戏吗？邀请好友，赢取专属奖励。\n{{0}}",
    "\n{{0}}Year {{1}} (current)\n{{2}}": "\n{{0}}年 {{1}} (当前)\n{{2}}",
    "\n{{0}}Invalid terrain for this monument\n{{1}}(Sand)\n{{2}}": "\n{{0}}该纪念碑的地形无效{{1}}(沙子)\n{{2}}",
    "\n{{0}}Invalid terrain for this monument\n{{1}}(Hill)\n{{2}}": "\n{{0}}该纪念碑的地形无效{{1}}(山丘)\n{{2}}",
    "\n{{0}}Invalid terrain for this monument\n{{1}}(Hill, Mountain)\n{{2}}": "\n{{0}}该纪念碑的地形无效{{1}}(山丘, 高山)\n{{2}}",
    "\n{{0}}Invalid terrain for this monument\n{{1}}(Forest)\n{{2}}": "\n{{0}}该纪念碑的地形无效{{1}}(森林)\n{{2}}",
    "\n{{0}}Invalid terrain for this monument\n{{1}}(Mountain)\n{{2}}": "\n{{0}}该纪念碑的地形无效{{1}}(高山)\n{{2}}",
    "\n{{0}}Invalid terrain for this monument\n{{1}}(Mountain, Hill)\n{{2}}": "\n{{0}}该纪念碑的地形无效{{1}}(高山, 山丘)\n{{2}}",
    "\n{{0}}Score: {{1}}\n{{2}}·\n{{3}}\n{{4}}": "\n{{0}}分数: {{1}}\n{{2}}·\n{{3}}\n{{4}}",
"\n{{0}}Accumulate 10 total building expertise levels.\n{{1}}": "\n{{0}}累计积攒10点建筑专精等级\n{{1}}",
"\n{{0}}Build your first building after installing your Town Center.\n{{1}}": "\n{{0}}建造城镇中心后，修建你的第一座建筑\n{{1}}",
"\n{{0}}Buy resources on the market.\n{{1}}": "\n{{0}}在市场中购买资源\n{{1}}",
"\n{{0}}Claim a tile.\n{{1}}": "\n{{0}}占领一块地块\n{{1}}",
"\n{{0}}Collect 1,000 resources from abyssal surges.\n{{1}}": "\n{{0}}从深渊浪潮中收取1000份资源\n{{1}}",
"\n{{0}}Collect your first fishing catch.\n{{1}}": "\n{{0}}收获第一份渔获\n{{1}}",
"\n{{0}}Collect your first gathered specimen.\n{{1}}": "\n{{0}}采集首个野外样本\n{{1}}",
"\n{{0}}Collect your first hunting trophy.\n{{1}}": "\n{{0}}获取首个狩猎战利品\n{{1}}",
"\n{{0}}Collect your first prospecting find.\n{{1}}": "\n{{0}}勘探得到第一份矿石产出\n{{1}}",
"\n{{0}}Complete 1 automatic Underworld farm run.\n{{1}}": "\n{{0}}完成一次全自动地下世界农场探索\n{{1}}",
"\n{{0}}Complete a weekly Underworld challenge.\n{{1}}": "\n{{0}}完成一周地下世界周挑战\n{{1}}",
"\n{{0}}Do 1 underworld fight.\n{{1}}": "\n{{0}}进行一场地下世界战斗\n{{1}}",
"\n{{0}}Earn 1,000 resources from market sales.\n{{1}}": "\n{{0}}通过市场售卖赚取1000份资源\n{{1}}",
"\n{{0}}Gather 200,000,000 total resources (production + surges + treasure chests).\n{{1}}": "\n{{0}}累计采集2亿份资源（包含自产、浪潮、宝箱产出）\n{{1}}",
"\n{{0}}Generate 10,000 total resources across all types.\n{{1}}": "\n{{0}}各类资源累计产出一万份\n{{1}}",
"\n{{0}}Gift 10,000 resources.\n{{1}}": "\n{{0}}赠送一万份资源\n{{1}}",
"\n{{0}}Obtain your first Artefact.\n{{1}}": "\n{{0}}获得第一件古物\n{{1}}",
"\n{{0}}Own 3 different building types at the same time.\n{{1}}": "\n{{0}}同时拥有三种不同类型建筑\n{{1}}",
"\n{{0}}Play for 7 consecutive days.\n{{1}}": "\n{{0}}连续游玩7天\n{{1}}",
"\n{{0}}Reach 4 buildings in total.\n{{1}}": "\n{{0}}建筑总数达到4座\n{{1}}",
"\n{{0}}Reach expertise level 10 on any building.\n{{1}}": "\n{{0}}任意建筑专精等级升至10级\n{{1}}",
"\n{{0}}Reach expertise level 2 on any building.\n{{1}}": "\n{{0}}任意建筑专精等级升至2级\n{{1}}",
"\n{{0}}Reach heritage level 1.\n{{1}}": "\n{{0}}传承等级达到1级\n{{1}}",
"\n{{0}}Reach level {{1}}.\n{{2}}": "\n{{0}}角色等级升至{{1}}级\n{{2}}",
"\n{{0}}Fishing Spot\n{{1}}· Earthworm\n{{2}}": "\n{{0}}钓鱼点\n{{1}}· 蚯蚓\n{{2}}",
"\n{{0}}Hunting Ground\n{{1}}· Set a Trap\n{{2}}": "\n{{0}}狩猎场\n{{1}}· 设置陷阱\n{{2}}",
"\n{{0}}Reach upgrade level 3 on any building.\n{{1}}": "\n{{0}}任意建筑升级至3阶\n{{1}}",
"\n{{0}}Receive 1 present.\n{{1}}": "\n{{0}}收到一份礼物\n{{1}}",
"\n{{0}}Release a tile.\n{{1}}": "\n{{0}}释放一块已占领地块\n{{1}}",
"\n{{0}}Send {{1}} present.\n{{2}}": "\n{{0}}送出{{1}}份礼物\n{{2}}",
"\n{{0}}Send 10,000 resources to monuments.\n{{1}}": "\n{{0}}向纪念碑捐献一万份资源\n{{1}}",
"\n{{0}}Send 10,000 resources to the Maw.\n{{1}}": "\n{{0}}向深渊巨口投喂一万份资源\n{{1}}",
"\n{{0}}Spawn 10 planet events from the Void Shard Shop.\n{{1}}": "\n{{0}}虚空碎片商店触发10次星球事件\n{{1}}",
"\n{{0}}Terraform 10 tiles.\n{{1}}": "\n{{0}}改造10块地块地貌\n{{1}}",
"\n{{0}}Toggle a building on or off.\n{{1}}": "\n{{0}}开启/关闭任意一座建筑\n{{1}}",
"\n{{0}}Trade 10,000 total resources (bought + sold).\n{{1}}": "\n{{0}}累计交易一万份资源（买入+卖出合计）\n{{1}}",
"\n{{0}}Unlock all trophies.\n{{1}}": "\n{{0}}解锁全部成就奖杯\n{{1}}",
"\n{{0}}Upgrade a building.\n{{1}}": "\n{{0}}升级任意一座建筑\n{{1}}",
"\n{{0}}Win 1 underworld session.\n{{1}}": "\n{{0}}通关一次地下世界关卡\n{{1}}",
"\n{{0}}Win 100 Void Shards in the underworld.\n{{1}}": "\n{{0}}在地下世界获取100枚虚空碎片\n{{1}}",
"\n{{0}}Win 2 underworld fights.\n{{1}}": "\n{{0}}赢得两场地下世界战斗\n{{1}}",
"\n{{0}}Win an underworld session of difficulty 2.\n{{1}}": "\n{{0}}通关难度2的地下世界关卡\n{{1}}",
"\n{{0}}Invalid terrain for this monument\n{{1}}": "\n{{0}}该纪念碑的地形无效\n{{1}}",
"\n{{0}}Current upgrade level of this building\n{{1}}": "\n{{0}}该建筑当前的升级等级\n{{1}}",
"\n{{0}}urrent expertise level of this building\n{{1}}": "\n{{0}}该建筑当前的专业等级\n{{1}}",
"({{0}}mn)": "({{0}}mn)",
"{{0}}d, {{1}}h": "{{0}}天, {{1}}小时",
"{{0}}d, {{1}}mn": "{{0}}天, {{1}}分钟",

    // ===== Idle Underworlds 导航/菜单/标签 =====
    "Activities": "活动",
    "Artefacts": "古神器",
    "Base Game": "基础玩法",
    "Building List": "建筑列表",
    "Buildings": "建筑",
    "Calculator": "计算器",
    "Changelog": "更新日志",
    "Collecting & the Codex": "收集与典籍",
    "Domain": "领地",
    "Economy": "经济",
    "Game Activities": "游戏活动",
    "Game Guide": "游戏指南",
    "Guides": "指南",
    "Heritage": "传承",
    "Login": "登录",
    "Managing Your Domain": "管理你的领地",
    "Monuments": "纪念碑",
    "NEW planet": "新星球",
    "Overview": "概览",
    "Planet Events": "星球事件",
    "Planet Themes": "星球主题",
    "Play": "游玩",
    "Player": "玩家",
    "Reference": "参考",
    "Relics": "遗物",
    "Terrain Types": "地形类型",
    "The Abyssal Maw": "深渊之口",
    "The Underworld": "冥界",
    "Trading": "交易",
    "Treasure Chest Hunt": "宝箱狩猎",
    "Trophies": "奖杯",
    "Underworld": "冥界",
    "Units": "单位",
    "World Monuments": "世界纪念碑",
    "Years & Seasons": "年份与季节",
    // ===== Changelog分类标签 =====
    "BALANCE": "平衡性",
    "FIX": "修复",
    "GAME": "游戏",
    "PERF": "性能",
    "UI": "界面",
    "WEB": "网页",
    "Details": "详情",
    "Codex": "典籍",
    "READY!": "准备就绪！",
    "General": "通用",

    // ===== Changelog 条目 =====
    " and triggering ": "并触发",
    " available immediately; upgrade it to unlock ": "立即可用；升级以解锁",
    " that affect all of your other buildings.": "，影响你的所有其他建筑。",
    "\"Add to Home Screen\"": "\"添加到主屏幕\"",
    "+ Cannot build": "+ 无法建造",
    "AUTOFIGHT": "自动战斗",
    "Current stoc": "当前库存",
    "See all...": "查看全部…",
    "See rewards": "查看奖励",
    "add an ingame yearly random rule change, called Themes": "添加游戏内年度随机规则变更——名为主题",
    "add automatic underworld farm (strategic center level 6)": "添加冥界自动耕种（战略中心6级）",
    "add referral syste": "添加引荐系统",
    "add villagers wandering in your village": "添加村民在村庄游荡",
    "beacon bonus spots not counted": "信标奖励点未计入",
    "building spec display real effect with planet theme applied": "建筑专精显示应用星球主题后的实际效果",
    "display node history on underworld sessions leaderboard": "冥界出征排行榜显示节点历史",
    "do not display templates that you don't have access to": "不显示无权限使用的模板",
    "fix cost checker slow update": "修复成本检查器刷新缓慢",
    "gityx's story": "gityx的故事",
    "improve tick performance": "优化时钟周期性能",
    "minor UI changes": "小幅界面调整",
    "minor perf debug and fix": "小幅性能调试与修复",
    "minor wording and UI fixes": "小幅文本与界面修复",
    "no flags for locale on some windows": "部分窗口缺少语言标识",
    "prevent buying artefact dust in challenge mode": "阻止挑战模式购买古神器粉尘",
    "ratio": "比率",
    "try to use less RAM (tell me if this makes it more laggy)": "尝试减少内存占用（变卡请告知）",
    "underworld shop nodes can't change the next node to a shop": "冥界商店节点无法将下一节点变为商店",
    "(in 1d)": "（1天后）",

    // ===== 设置/账户界面 =====
    "Base rate": "基础倍率",
    "Build a Lumber Camp or Well (wood specialization)": "建造伐木场或水井（木材专精）",
    "Produce Wood": "生产木材",
    "Quick-access icons": "快捷访问图标",
    "Referral": "引荐",
    "Renaissance Monument": "文艺复兴纪念碑",
    "Return to planet list": "返回星球列表",
    "Settings (O)": "设置（O）",
    "Total": "总计",
    "Upgrade Town Center": "升级城镇中心",
    "Weekly Challenge (W)": "每周挑战（W）",
    "— None —": "— 无 —",
    "Best Underworld Score": "最佳地下世界分数",
    "Stone Produced": "产出石头",
    "Leather Produced": "产出皮革",
    "Equipment Produced": "产出装备",
    "Iron Produced": "产出铁",
    "Food Produced": "产出食物",
    "Wood Produced": "产出木头",
    "Gold Produced": "产出黄金",
    "Trade Volume": "交易量",
    "Collaborative Resources": "协作资源",
    "Total collected Void Shards": "总计收集虚空碎片",
    "Total Resources Gathered": "总计获得资源",
    "Season:": "赛季:",
    "All rankings on this page award Year titles to the top 10 players at the end of the current Year.": "本页所有排名均在当前年度结束时，为前10名玩家授予年度头衔。",
    "Leaderboards": "排行榜",
    "← Back to planets": "← 返回行星",
    "All Time": "所有时间",
    "\ncurrenteXpertIse等级ofthIsbuIldIng": "\n这个建筑当前专长等级",
    "\nbuIldIng等级": "\n建筑等级",
    "2 planets to choose from": "两颗星球可供选择",
    "A large empty world. Be who you want. Do what you want.": "广阔空旷的新世界，随心塑造自我，自由行事。",
    "A mysterious world awaits exploration... More friends means more resources, right ?": "神秘星球静待探索……好友越多，资源越丰厚，不是吗？",
    "Choose your planet": "选择你的星球",
    "Daily production": "每日产出",
    "Proto Planet": "原始星球",
    "See leaderboards": "查看排行榜",
    "your progression is tied to the planet": "你的成长进度与所选星球绑定",
    "\n                Welcome to Idle Underworlds, choose on which planet you'd like to play. You can join as many planets as you want, ": "\n                欢迎来到Idle Underworlds，选择你想玩的行星。你可以加入任意多个行星，",
    " Read the planet description to see if anything special is tied to it. Is this planet a hardcore desert ? Is this one a giant generous world ? Or a tiny planet to play with friends ?\n            ": "阅读行星描述，看看它是否有什么特别之处。这个行星是严酷的沙漠吗？还是一个慷慨巨大的世界？又或者是一个适合和朋友一起玩耍的小行星？",
    " |\n                        Joinable :\n                                                    ": " |\n                        可加入 :\n                                                    ",
    "Log out": "登出",
    "Players": "玩家",
    "Map size": "地图大小",
    "\n          Your account was successfully created ! You can now log in.\n        ": "您的账户已成功创建！现在可以登录了。",
    "\n                No account yet ? ": "还没有账户？",
    "Forgot your password?": "忘记密码？",
    "Jump back to your empire": "回到你的帝国",
    "Welcome back !": "欢迎回来！",
    "\n                Already have an account ? ": "已有账户？",
    "Referred by (optional)": "推荐人（可选）",
    "Pseudo": "昵称",
    " Site Français": "法语社区",
    " is now open ! You can join it right now ": "现已开放！即刻即可加入",
    "If a friend invited you, enter their pseudo. Both of you will earn exclusive rewards!": "若有好友邀请，请输入对方昵称，双方均可领取专属奖励！",
    "Join the Idle Underworlds adventure": "开启放置地下世界冒险之旅",
    "Create": "创建",
    "Create an account": "创建一个账户",
    "Email": "电子邮箱",
    "Play as guest": "以访客身份游戏",
    "Password confirmation": "确认密码",
    "Password": "密码",
    "here": "这里",
    "or": "或",
    "© 2026 Idle Underworlds - Independent game": "© 2026 Idle Underworlds - Independent game",
    "Equipment": "装备",
    "Food": "食物",
    "Level": "等级",
    "Market": "市场",
    "Owned Roads": "拥有道路",
    "Progress": "进度",
    "Send": "发送",
    "XP needed": "所需经验",
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

    // ===== 设置/通知/UI分类 =====
    "They see me rollin'": "他们看我一路飞驰",
    "Account": "账号",
    "All messages (default)": "全部消息（默认）",
    "Appearance": "外观",
    "Audio": "音频",
    "Border Color": "边框颜色",
    "Building list style": "建筑列表样式",
    "Cart deliveries": "推车配送",
    "Chat": "聊天",
    "Chest & activity spawns": "宝箱与活动生成",
    "Compact": "紧凑",
    "Economic View (E)": "经济视图（E）",
    "Explore the Underworld (U)": "探索冥界（U）",
    "Female": "女",
    "Game": "游戏",
    "Gender": "性别",
    "Gradient Style": "渐变样式",
    "Male": "男",
    "Market (M)": "市场（M）",
    "Mute": "静音",
    "Neutral": "中性",
    "Notifications": "通知",
    " by ": " by ",
    "！": "！",
    "✓": "✓",
    "下": "下",
    "不": "不",
    "中": "中",
    "主": "主",
    "人": "人",
    "做": "做",
    "全": "全",
    "共": "共",
    "减": "减",
    "制": "制",
    "加": "加",
    "动": "动",
    "去": "去",
    "口": "口",
    "只": "只",
    "右": "右",
    "增": "增",
    "复": "复",
    "大": "大",
    "家": "家",
    "小": "小",
    "已": "已",
    "度": "度",
    "开": "开",
    "当": "当",
    "待": "待",
    "所": "所",
    "打": "打",
    "拖": "拖",
    "据": "据",
    "数": "数",
    "整": "整",
    "无": "无",
    "暂": "暂",
    "未": "未",
    "条": "条",
    "民": "民",
    "玩": "玩",
    "窗": "窗",
    "等": "等",
    "级": "级",
    "经": "经",
    "翻": "翻",
    "角": "角",
    "词": "词",
    "译": "译",
    "调": "调",
    "载": "载",
    "进": "进",
    "部": "部",
    "重": "重",
    "需": "需",
    "验": "验",
    "\udccb": "\udccb",
    "\udccd": "\udccd",
    "\udcd6": "\udcd6",
    "\ud83d": "\ud83d",
    "\"": "\"",
    "&": "&",
    "'": "'",
    ",": ",",
    ";": ";",
    "~": "~",
    "×": "×",
    "—": "—",
    "›": "›",
    "≤": "≤",
    "ⓘ": "ⓘ",
    "━": "━",
    "✕": "✕",
    "。": "。",
    "（": "（",
    "）": "）",
    "，": "，",
    "：": "：",
    "!": "!",
    " !\n    ": " !\n    ",
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
    // ===== Idle Underworlds 系统/状态/数值 =====
    "Penalties depend on your ratio.": "惩罚取决于你的比率。",
    "Going over your capacity applies penalties": "超出容量会施加惩罚",
    "The number of tiles under your control within your domain.": "你领地内控制的格子数量。",
    "The number of roads you have built in the world.": "你在此世界建造的道路数量。",
    "Some actions may be slow or unresponsive": "部分操作可能较慢或无响应",

    // ===== 游戏玩法提示 =====
    "Click or tap any tile": "点击或点按任意格子",
    "Click this button to highlight your buildings. While highlighted, click a building tile to pause or unpause it.": "点击此按钮高亮你的建筑。高亮状态下，点击建筑格子可暂停或恢复。",
    "Click this button to highlight your domain. While highlighted, click a tile to claim or release it.": "点击此按钮高亮你的领地。高亮状态下，点击格子可宣告或释放。",
    "Click this button to highlight your roads. While highlighted, click a tile to build or destroy a road.": "点击此按钮高亮你的道路。高亮状态下，点击格子可修建或拆除道路。",
    "Pick a tile near those resources to settle and start building!": "选择靠近那些资源的格子安家并开始建造！",
    "Your production continues 100% while you're offline.": "你离线时生产100%持续进行。",
    "You are playing as guest. Your progress may be lost if you clear cookies or use private browsing. ": "你正在以游客身份游玩。清除Cookie或使用隐私浏览可能导致进度丢失。",
    "Already have an account ? Log in !": "已有账号？登录！",
    "You are currently playing as a guest. You can transform your account into a permanent account anytime by ": "你目前以游客身份游玩。你可以随时将账号转为永久账号，只需",
    "Come back anytime, your resources will be waiting for you.": "随时回来，你的资源会等着你。",
    "Everything in this world is ": "这个世界的一切都是",
    "This game is designed for ": "这款游戏专为",
    "mobile": "手机端",
    "short sessions": "短时游戏",

    // ===== 教程/目标 =====
    "Your first objectives :": "你的首要目标：",
    "This is where builds start to diverge. Choose your path.": "到了流派开始分化的地方。选择你的路线。",
    "Three powerful new buildings unlocked:": "三座强大的新建筑已解锁：",
    "New buildings available:": "新建筑可用：",
    "What you earn:": "你获得的：",
    "Effects:": "效果：",
    "Also unlocked:": "同时解锁：",
    "Two ways to spend them:": "两种花费方式：",
    "How combat works :": "战斗机制：",
    "Full combat guide": "完整战斗指南",
    "Help me find a good spot": "帮我找个好位置",
    "Select the tile where you want to start your story.": "选择你要开启故事的格子。",

    // ===== 教程提示片段 =====
    "Place your units on ": "将你的单位放在",
    "of the battleground, then start the fight. They will fight automatically following the rules of their role.": "战场上，然后开始战斗。它们将按照职业规则自动战斗。",
    "Take your time, read, and don't hesitate to ": "慢慢来，仔细阅读，如有疑问尽管",
    "ask questions in the chat": "在聊天中提问",
    "if something is unclear.": "不要犹豫。",
    "Tap the hex button at the bottom of the screen to ": "点击屏幕底部的六边形按钮",
    "claim tiles": "宣告格子",
    "and expand your territory.": "并扩张你的领土。",
    "To produce resources, look for:": "要生产资源，请寻找：",
    "food source": "食物来源",
    "wood sources": "木材来源",
    "rare ore": "珍稀矿石",
    "Build a ": "建造一座",
    " — produces ": "——生产",
    "double your production": "使产量翻倍",
    "While your Forge runs, try the ": "锻造厂运转期间，试试",
    " — your unique prestige building; ": "——你独特的声望建筑；",
    "Have a look at it, it can ": "看看它，它能",
    "Have a look at it, it can help getting that ": "看看它，它有助于获得那个",
    "everyone is talking about !": "大家都在谈论的东西！",
    "This is your gate to the Underworld. Start exploring and fighting!": "这是通往冥界的大门。开始探索和战斗吧！",
    "Feed it before the season change": "在季节变化前喂饱它",

    // ===== Void Shards =====
    "Void Shards are rare": "虚空碎片很稀有",
    " — earned from the Underworld Weekly Challenge and manual sessions. Spend them wisely.": "——通过冥界每周挑战和手动出征获得。明智地使用它们。",
    " — spend them on ": "——用于",
    "Void Shard Shop": "虚空碎片商店",
    "Rare Artefacts": "稀有古神器",
    " and:": "以及：",
    "also rewards Void Shards — don't miss it!": "也会奖励虚空碎片——别错过了！",

    // ===== Heritage =====
    " — change the terrain type of any tile in your Domain. Look for the new tab on your owned tiles.": "——改变领地中任意格子的地形类型。在你拥有的格子上查找新标签页。",

    // ===== Underworld =====
    "army templates": "军队模板",
    " — alter your next session (loot, difficulty, world events...)": "——改变你的下一次出征（战利品、难度、世界事件……）",
    "enemies": "敌人",
    "Pick a unit template, pay instantly, and dive in. Fight ": "选择单位模板，即时支付，潜入战场。战斗",
    "spread their actions": "分散行动",
    "on all available targets depending on their targeting type": "作用于所有可用目标，取决于其攻击类型",
    " — build them on your tiles to make ": "——将它们建在你的格子上以制造",
    "effects": "效果",
    "move towards the enemy": "向敌人移动",
    "when they have nothing else to do": "当它们无事可做时",
    "flanking": "侧翼攻击",
    "conquered": "已征服",
    ", the fight is won — an alternative to killing every enemy": "，则战斗胜利——消灭所有敌人的替代方案",
    "strong multipliers": "强力倍率",
    "bonus power multiplier": "额外战力倍率",
    "fight buildings": "战斗建筑",
    "when one of your units reaches the far end": "当你的某个单位到达远端时",
    "for detailed mechanics on stacks, damage spread, and victory conditions.": "了解叠加、伤害分摊和胜利条件的详细机制。",
    "Corridors :": "走廊：",
    "3 conquered corridors": "征服3条走廊",
    "| Average units lost : ": "| 平均损失单位：",
    "Score : ": "分数：",
    "Win chance : ": "胜率：",
    "Weekly Challenge": "每周挑战",

    // ===== 建筑相关 =====
    "Town Center to level 2": "城镇中心升至2级",
    ", required to upgrade your Town Center to ": "，升级城镇中心所需的",
    "Upgrade your Town Center": "升级你的城镇中心",
    " — it remembers your last planet and takes you straight there.": "——它会记住你上次的星球，直接带你前往。",
    "idleunderworlds.com/app": "idleunderworlds.com/app",
    "in your browser for a real app icon with automatic redirect on launch.": "浏览器中获取真正的应用图标，启动时自动跳转。",
    "badge on building details.": "建筑详情上的徽章。",
    "building administrative cost": "建筑行政成本",
    "depends on where it is built (inside or outside of your domain) and its type. It's displayed in this ": "取决于建造位置（领地内或外）及其类型。显示在此处",
    "now has access to its specialization.": "现已解锁其专精。",
    "also have their specializations unlocked.": "也已解锁其专精。",
    " — transform and experiment with resources": "——转化和试验资源",
    "boosts production": "提升产量",
    "across your entire Domain": "遍及整个领地",
    "icon above your experience bar is no longer green — your buildings are eating into your capacity.": "经验条上方的图标不再为绿色——你的建筑正在吃掉你的容量。",
    "If": "如果",
    "For": "对于",
    "to your experience gain, production and consumption.": "对你的经验获取、生产和消耗产生影响。",
    "for a full overview of all mechanics.": "了解所有机制的完整概览。",
    "tile-based": "基于格子",
    "pool resources": "汇集资源",
    "together to seal it": "一起将其封印",
    " — trigger world-wide events for everyone. Look for the ": "——触发面向所有人的世界事件。留意",
    "button near the planet events list.": "星球事件列表附近的按钮。",
    ", clear Acts, and claim ": "，清关章节，领取",
    "on the map to open its panel and see what's there.": "地图上的图标打开面板，查看其中内容。",
    "to buy and sell resources with other players.": "与其他玩家买卖资源。",
    "to raise your capacity — and later, Heritage also helps. Keep an eye on it.": "提升你的容量——之后传承也会有所帮助。留意它。",
    "when you reach 200 stone to unlock new content": "当你达到200石头时解锁新内容",
    "will unlock their first specialization. ": "将解锁第一个专精。",
    "At level 3, if you have Wells of the Deep, they unlock their second specialization row. ": "在等级3时，如果你有深渊之井，它们将解锁第二行专精。",
    "At level 10, most of your ": "在等级10时，你大部分的",
    " — a cooperative world event where all players ": "——一个合作性世界事件，所有玩家",
    ". There will be times with less to do, and that's completely normal. Take it easy.": "。有时会比较空闲，这是完全正常的。放轻松。",
    "You cannot start here because your domain crosses another player domain or building.": "你无法在此处开始，因为你的领地与另一位玩家的领地或建筑重叠。",
    "Set your domain": "设定你的领地",

    // ===== 提示/确认 =====
    "Congratulations !": "恭喜！",
    "A new adventure...": "一段新的冒险……",
    "Global EN": "全球（英文）",
    "Global FR": "全球（法文）",

    // ===== 生产相关条目（带模板的）=====
    "Production": "生产",
    "Production\n        (Abyssal Barge)": "产量\n        （深渊驳船）",
    "Production\n        (Barn)": "产量\n        （谷仓）",
    "Production\n        (Farm)": "产量\n        （农场）",
    "Production\n        (Fishing Port)": "产量\n        （渔港）",
    "Food production": "食物产量",
    "Gold production": "黄金产量",
    "Iron production": "铁产量",
    "Leather production": "皮革产量",
    "Stone production": "石头产量",
    "Wood production": "木材产量",
    "Equipment production": "装备产量",

    // ===== 季节/年份/事件 =====
    "Spring": "春季",
    "Windy": "多风",
    "Year of Craft": "工艺之年",
    "Year Balance Changes:": "年度平衡变化：",
    "Maw sealed": "深渊之口已封印",
    "You have collectively sealed the Abyssal Maw.": "你们合力封印了深渊之口。",
    "Stone production boost": "石头产量加成",
    "Food production boost": "食物产量加成",
    "Gold production boost": "黄金产量加成",
    "Iron production boost": "铁产量加成",
    "Leather production boost": "皮革产量加成",
    "Events": "事件",

    // ===== 时间段 =====
    "Will start in": "将于……后开始",
    "Remaining": "剩余",
    "Total duration": "总持续时长",
    "Triggered by ": "触发条件：",
    "Self-Sufficient bonus ": "自给自足加成",
    "Damage is spread ": "伤害分摊",
    "Rare Collectible chance ": "稀有收集品几率",
    "Mythic Collectible chance ": "神话收集品几率",
    "rather than weighted by remaining HP.": "而非按剩余生命值加权。",
    "equally across all targets": "平均分配给所有目标",

    // ===== 时长条目（含变量的用cnItems模板）=====
    "Total duration：": "总持续时长：",
    "Total duration：：28d": "总持续时长：28天",
    "Total duration：：7d": "总持续时长：7天",
    "Will start in：1d, 4h, 38mn": "将于1天4小时38分钟后开始",

    // ===== 负面惩罚 =====
    "×0 XP": "×0 经验",
    "×0.5 XP": "×0.5 经验",
    "×0.5 prod": "×0.5 产量",
    "×0.8 prod": "×0.8 产量",
    "×0.9 XP": "×0.9 经验",
    "×0.95 prod": "×0.95 产量",
    "×1.1 consum.": "×1.1 消耗",
    "×1.5 consum.": "×1.5 消耗",
    "×2 consum.": "×2 消耗",

    // ===== 比率区间 =====
    ">1 to ≤ 1.15": ">1 至 ≤ 1.15",
    ">1.15 to ≤ 1.3": ">1.15 至 ≤ 1.3",
    ">1.3 to ≤ 2": ">1.3 至 ≤ 2",
    "5% prod/consum per level (below lvl. 50)": "每级5%产量/消耗（50级以下）",

    // ===== 导航元素/小文本 =====
    "Domain Size (D)": "领地大小（D）",
    "Roads (R)": "道路（R）",
    "Administrative Pressure (P)": "行政压力（P）",
    "Unit count : ": "单位数量：",
    "Player Level": "玩家等级",
    "Fertile Plains": "肥沃平原",
    "Forest": "森林",
    "Water": "水域",
    "Alpha Planet": "阿尔法星球",
    "After ": "之后",
    "At ": "在",
    "Weighting : Knights = 0.5, Clerics = 0.3, others = 1;": "权重：骑士 = 0.5，牧师 = 0.3，其他 = 1；",
    "• ": "• ",
    "📌 Bookmark ": "📌 收藏",
    "? Tap ": "？点击",
    "The ": "",
    "Your ": "你的",
    " - A unit that reaches the end comes back as ": "——到达终点的单位将以",
    " - At ": "——在",
    " - Build a ": "——建造",
    " - Find ": "——找到",
    " - Units ": "——单位",
    " - Upgrade your ": "——升级你的",
    " - A corridor is ": "——走廊是",
    " (Farm or Fishing Port)": "（农场或渔港）",
    " (yellow border) with a ": "（黄色边框）搭配",
    " - Expand with more buildings and keep upgrading your Town Center": "——建造更多建筑并持续升级城镇中心",
    " These are ": "这些是",
    " to raise your capacity — and later, Heritage also helps. Keep an eye on it.": "提升容量——之后传承也能帮忙。留意它。",
    " weighted unit count, you start getting a score multiplier malus.": "加权单位数后，你开始获得分数倍率惩罚。",
    " for free bonus resources!": "获取免费奖励资源！",
    " when you reach 200 stone to unlock new content": "达到200石头时解锁新内容",
    " will unlock their first specialization. ": "将解锁第一个专精。",
    " production buildings": "生产建筑",
    " bonus power multiplier": "额外战力倍率",
    " upon reaching the far end of a corridor": "到达走廊远端时",
    " which produce ": "生产",
    " on your tiles to power your armies": "放在格子上为军队提供装备",
    " (rightmost tab, sword icon)": "（最右标签页，剑图标）",
    " from the ": "来自",
    " inside your domain from your own buildings": "你领地内自有建筑的",
    " that benefit everyone on the planet.": "惠及星球上所有人的。",
    " for a full overview of all mechanics.": "了解完整机制。",
    " — the fight is won when 3 corridors are conquered": "——征服3条走廊即获胜",
    " in the ": "在",
    " panel on your Town Center.": "城镇中心面板中。",

    // ===== 其余标签 =====
    "T1": "T1",
    "AC": "AC",
    "A1": "A1",
    "D1": "D1",
    "Act 1": "第1章",
    "Act 2": "第2章",
    "Act 3": "第3章",
    "EXP 1": "EXP 1",
    "LVL 1": "LVL 1",
    "x1": "×1",

    // ===== 聊天对话翻译 =====
    "🤖 Idle Underworlds - System Bot": "🤖 Idle Underworlds - 系统机器人",
    "Here stands before you a building owned by someone else. What can you do about it ? Nothing, just enjoy the view.": "你面前矗立着别人的建筑。你能做什么？什么都做不了，欣赏风景吧。",
    "I would connect your road to this road were I you": "如果我是你，我会把路连到这条路",
    "we do a bit of roading in my area": "我那片区域修了点路",
    "*can't": "*不能",
    "1st road on your own trade building, then extend as far toward their road as you can": "第一段路从你自己的贸易建筑开始，然后尽可能朝他们的路延伸",
    "Ah okay I see": "啊好的我明白了",
    "Although i'm starting to wish I didn't choose a location so far out from the majority. lol": "虽然我开始后悔选了个离大多数人都那么远的位置。哈哈",
    "Click your town centre, and in \"infos\" seek the trash can at the bottom": "点击你的城镇中心，在\"信息\"中找底部的垃圾桶",
    "Dang, already some Guests disapeared and roads as well :(": "糟糕，已经有些游客消失了，路也没了 :(",
    "Fair enough. lol": "有道理。哈哈",
    "I can work on that, but it might take a short bit to get set up, I just started.": "我可以着手做，但可能需要一点时间准备，我才刚开始。",
    "I see": "我明白了",
    "I suspect you are wrong": "我怀疑你搞错了",
    "Its also because within your borders a building will consume less administrative capacity": "也因为在你边界内的建筑会消耗更少的行政容量",
    "Ok. I'll make sure to keep an eye out for that when the time comes. Until then, we might just have some rather long leather supply trades. lol": "好的，到时候我会留意的。在那之前，我们可能只能做比较长的皮革供应交易了。哈哈",
    "Oof. I definitely feel like I made a mistake of being out in the middle of nowhere now. lol": "哎呀，我现在确实觉得选了个鸟不拉屎的地方是个错误。哈哈",
    "Roads are also used for cart travel only": "道路也仅供推车行驶",
    "So throw em all down, trying to connect to other peoples, and avoid mountains always, and avoid hills as much as possible": "所以全铺上吧，尽量连接到别人，始终避开山脉，尽量避免丘陵",
    "Sped up cart speed x2 !": "推车速度翻倍！",
    "They do, alongside a persons domain itself": "它们是，跟个人的领地一起算",
    "Who needs taxes we dont have a government": "谁需要税收，我们又没有政府",
    "Your contributions awesome though": "不过你的贡献太棒了",
    "ahh it makes sense": "啊，说得通了",
    "and you'll find your travels north greatly sped up": "然后你会发现向北的旅途大大加速了",
    "aw well": "唉好吧",
    "correct me if I am wrong but": "如果我错了请纠正，但",
    "diverting in this direction ": "朝这个方向绕路",
    "gonna have to wait until my carts headed to the monument complete": "得等我去纪念碑的推车完成才行",
    "i guess for time being the purpose of that border is so that someone else doesnt try and just surround someone else's town center so that person can put bldgs down": "我猜目前那个边界的作用是防止别人试图包围别人的城镇中心，这样那个人可以放置建筑",
    "i hope 1 or 2 people start to specialize in leather production, no one is selling leather": "我希望有一两个人开始专攻皮革生产，现在没有人在卖皮革",
    "if i build outside of my territory": "如果我在领地外建造",
    "its no problem with the heritage reset you can either keep your domain or relocate with the buffs, takes around 1 week": "传承重置没问题的，你可以保留领地或者带着增益搬家，大约需要一周",
    "my neighbor here and all of his buildings will vanish if he doesnt return": "我这边的邻居如果不回来的话，他和他的所有建筑都会消失",
    "oh nice": "哦不错",
    "oof": "哎哟",
    "perfectly balanced, as it should": "完美平衡，理所当然",
    "registering here": "在此注册",
    "sorry pressure not capacity": "抱歉是压力不是容量",
    "sure, give it a shot. You can always change your production with the heritage reset": "当然，试试吧。你随时可以通过传承重置来改变生产",
    "that would be useful for trading i assume": "我猜那对交易有用",
    "thats what I figured": "我也是这么想的",
    "this colony builder is less of being adversaries amongst each other, its more about being strategic of resource placement within your borders when applicable": "这个殖民地建造游戏更像是关于边界内资源布局的策略，而不是彼此对立",
    "this is some trial and error, of course": "这当然有些试错的过程",
    "those bldgs don't decay": "那些建筑不会腐朽",
    "unless they decay if a play is inactive for a period of time": "除非玩家一段时间不活跃才会腐朽",
    "without taxes, who's paving the roads??????": "没有税收，谁来铺路？？？？？？",
    "woah": "哇",
    "yes it makes sense now": "是的现在说得通了",
    "yes makes sense": "是的有道理",
    "you can place roads in other towns too": "你也可以在其他城镇放置道路",
    "yup": "对的",
    "your side": "己方",

    // ===== 坐标/位置 =====
    "📍 Hill (395,75)": "📍 丘陵 (395,75)",
    "📍 Fertile Plain (395,86)": "📍 肥沃平原 (395,86)",

    // ===== 虚影/玩家名 =====
    "Void Bearer Mikeh": "Void Bearer Mikeh",
    "Aiyaret": "Aiyaret",
    "Neuroclastys": "Neuroclastys",
    "Planetary Benefactor Atemi": "Planetary Benefactor Atemi",
    "PolishSausage": "PolishSausage",
    "Tsufull": "Tsufull",
    "Numenter": "Numenter",
    "Planetary Benefactor DerBastian": "Planetary Benefactor DerBastian",

    // ===== 设置/通知分类(续) =====
    "Artefacts (A)": "古神器（A）",
    "Border Style": "边框样式",
    "Buildings (build, destroy, upgrade)": "建筑（建造、拆除、升级）",
    "Clovers": "四叶草",
    "Current title": "当前头衔",
    "Dashed": "虚线",
    "Displayed title": "显示头衔",
    "Dotted": "点线",
    "Fight speed": "战斗速度",
    "Flat": "扁平",
    "Full (default)": "完整（默认）",
    "Heritage (H)": "传承（H）",
    "Information": "信息",
    "Linear": "线性",
    "Maintenance": "维护",
    "Major events (Heritage, Maw, Monuments)": "重大事件（传承、深渊之口、纪念碑）",
    "Max objectives displayed": "最多显示目标数",
    "Member since": "加入时间",
    "Muted": "已静音",
    "Notifications (trophies, objectives)": "通知（奖杯、目标）",
    "Pings only": "仅@提及",
    "Placement style": "放置样式",
    "Planet membership": "星球成员",
    "Player Color": "玩家颜色",
    "Radial": "径向",
    "Rewards (chests, collectibles, artefacts)": "奖励（宝箱、收集品、古神器）",
    "Solid": "实线",
    "Sound categories": "音效分类",
    "Sound on": "音量开启",
    "Surface": "地表",
    "Surges": "涌动",
    "Titles": "头衔",
    "Trophy": "奖杯",
    "Underworld (fights & sessions)": "冥界（战斗与出征）",
    "Unlocked titles 2": "已解锁头衔 2",
    "Username": "用户名",
    "Verbose (default)": "详细（默认）",
    "Volume": "音量",
    "l***@qq.co": "l***@qq.co",

    // ===== 引荐系统 =====
    "Applies only to ": "仅适用于",
    "Army": "军队",
    "Best Runs": "最佳记录",
    "Challenge": "挑战",
    "Cleric Relic": "牧师遗物",
    "Completion Rewards": "完成奖励",
    "Difficulty": "难度",
    "Entry Cost": "入场费用",
    "Explorer Ref": "探索者 Ref",
    "Free": "免费",
    "Leather": "皮革",
    "Start Challenge": "开始挑战",
    "Suboptimal": "非最优",
    "Terra": "大地",
    "Worst Scores": "最差成绩",
    "cleric power": "牧师战力",
    "fujiwar": "fujiwar",
    "l0lbed0": "l0lbed0",
    "your units": "你的单位",
    "\"Invited\" title (Uncommon)": "\"受邀者\"头衔（罕见）",
    "\"Mentor\" title (Rare)": "\"导师\"头衔（稀有）",
    "1000 Void Shards": "1000 虚空碎片",
    "1000 food, 1000 wood, 500 iron, 500 leather": "1000食物、1000木材、500铁、500皮革",
    "2000 Void Shards + 500 Artefact Dust": "2000虚空碎片 + 500古神器粉尘",
    "5 referees reach level 20": "5位受邀者达到20级",
    "500 Artefact Dust": "500古神器粉尘",
    "Copy": "复制",
    "Each referee": "每位受邀者",
    "Extra chest at Town Center level 2": "城镇中心2级时额外宝箱",
    "For you (referrer)": "你的奖励（邀请人）",
    "Founding Bond cosmetic": "创世纽带装饰",
    "Founding Bond cosmetic (special)": "创世纽带装饰（特别版）",
    "Mentor's Beacon cosmetic": "导师灯塔装饰",
    "Referee reaches Heritage 1": "受邀者达到传承1",
    "Referee reaches level 10": "受邀者达到10级",
    "Referee reaches level 20": "受邀者达到20级",
    "Starter bonus": "新手奖励",
    "Total referee Heritage = 10": "受邀者总计传承 = 10",
    "Total referee Heritage = 5": "受邀者总计传承 = 5",
    "What each player you invite receives": "你邀请的每位玩家获得",
    "You have not referred anyone yet. Share your referral link!": "你还没有邀请任何人。分享你的邀请链接！",
    "Your Referees": "你的受邀者",
    "Your Referral Lin": "你的邀请链接",
    "a new Wanderer (in your codex)": "一名新的漫游者（在你的典籍中）",

    // ===== 成就/头衔称号 =====
    "Alchemist ": "炼金术士 ",
    "Alchemist gityx": "炼金术士 gityx",
    "Almost Champion ": "准冠军 ",
    "Almost Champion gityx": "准冠军 gityx",
    "Ancient gityx": "远古者 gityx",
    "Angry ": "愤怒者 ",
    "Angry gityx": "愤怒者 gityx",
    "Apprentice Angler 1/3 ": "钓鱼学徒 1/3 ",
    "Apprentice Gatherer 1/3 ": "采集学徒 1/3 ",
    "Apprentice Hunter 1/3 ": "狩猎学徒 1/3 ",
    "Apprentice Producer gityx": "生产学徒 gityx",
    "Apprentice Prospector 1/3 ": "勘探学徒 1/3 ",
    "Archon of Riches gityx": "财富执政官 gityx",
    "Artefact Collector 1/4 ": "古神器收藏家 1/4 ",
    "Artefact Collector gityx": "古神器收藏家 gityx",
    "Artefact Division ": "古神器拆解 ",
    "Artefact Fusion ": "古神器融合 ",
    "Autonomous Commander 1/4 ": "自律指挥官 1/4 ",
    "Beyond All Limits ": "超越极限 ",
    "Blacksmith 1/5 ": "铁匠 1/5 ",
    "Botanist gityx": "植物学家 gityx",
    "Build your first building after installing your Town Center.": "在放置城镇中心后建造你的第一座建筑。",
    "Builder 1/5 ": "建造者 1/5 ",
    "Builder Apprentice 1/5 ": "建造学徒 1/5 ",
    "Casual gityx": "休闲玩家 gityx",
    "Challenger 1/5 ": "挑战者 1/5 ",
    "Challenger gityx": "挑战者 gityx",
    "Citizen gityx": "公民 gityx",
    "Collections": "收藏",
    "Collector ": "收藏家 ",
    "Collector gityx": "收藏家 gityx",
    "Combat": "战斗",
    "Completed": "已完成",
    "Construction": "建造",
    "Corrupt Initiate gityx": "腐化入门者 gityx",
    "Curator gityx": "馆长 gityx",
    "Curator's Find ": "馆长发现 ",
    "Decorator ": "装潢师 ",
    "Demolisher ": "拆迁者 ",
    "Discovery": "发现",
    "Diversification ": "多样化 ",
    "Donor gityx": "捐赠者 gityx",
    "Earth Shaper 1/3 ": "大地塑造者 1/3 ",
    "Earth Shaper gityx": "大地塑造者 gityx",
    "Expansion ": "扩张 ",
    "Expert Builder 1/5 ": "专家建造者 1/5 ",
    "Expertise ": "专长 ",
    "Explorer ": "探索者 ",
    "Explorer gityx": "探索者 gityx",
    "Farmer 1/5 ": "农夫 1/5 ",
    "Fight Mastery 1/5 ": "战斗精通 1/5 ",
    "Fighter 1/5 ": "战士 1/5 ",
    "First Offer ": "首次要约 ",
    "First Transaction ": "首次交易 ",
    "First steps ": "第一步 ",
    "Generous 1/3 ": "慷慨者 1/3 ",
    "Generous gityx": "慷慨者 gityx",
    "Gift Giver 1/3 ": "赠礼者 1/3 ",
    "Gift Receiver 1/3 ": "收礼者 1/3 ",
    "Gladiator gityx": "角斗士 gityx",
    "Gold Digger 1/5 ": "淘金者 1/5 ",
    "Handyman gityx": "多面手 gityx",
    "Harder sessions 1/3 ": "困难出征 1/3 ",
    "Heir gityx": "继承人 gityx",
    "Heritage 1/4 ": "传承 1/4 ",
    "Hungry ": "饥饿者 ",
    "Hungry gityx": "饥饿者 gityx",
    "I'm Exceptional ": "我很出色 ",
    "Insomniac ": "失眠者 ",
    "Insomniac gityx": "失眠者 gityx",
    "Land Claimer ": "土地宣称者 ",
    "Latest unlocks": "最近解锁",
    "Liberator ": "解放者 ",
    "Lucky Find 1/3 ": "幸运发现 1/3 ",
    "Lumberjack 1/5 ": "伐木工 1/5 ",
    "Market Earnings 1/5 ": "市场收益 1/5 ",
    "Maw Feeder 1/5 ": "深渊喂养者 1/5 ",
    "Maw Feeder gityx": "深渊喂养者 gityx",
    "Merchant Soul ": "商人之魂 ",
    "Merchant gityx": "商人 gityx",
    "Miner 1/5 ": "矿工 1/5 ",
    "Monument Donor 1/5 ": "纪念碑捐赠者 1/5 ",
    "Mythic Artefact ": "神话古神器 ",
    "Noble gityx": "贵族 gityx",
    "Planetary Benefactor 1/3 ": "行星恩人 1/3 ",
    "Planetary Benefactor gityx": "行星恩人 gityx",
    "Portal Opener ": "传送门开启者 ",
    "Producer 1/5 ": "生产者 1/5 ",
    "Quarryman 1/5 ": "采石工 1/5 ",
    "Reach expertise level 2 on any building.": "任意建筑达到专长等级2。",
    "Reach level 3.": "达到等级3。",
    "Recruit gityx": "新兵 gityx",
    "Road Builder 1/4 ": "道路建造者 1/4 ",
    "Statistics": "统计",
    "Streak 1/3 ": "连胜 1/3 ",
    "Surge Collector 1/5 ": "涌动收集者 1/5 ",
    "Switch Operator ": "开关操作员 ",
    "Tanner 1/5 ": "制革工 1/5 ",
    "Titled ": "有头衔者 ",
    "Trader 1/5 ": "交易者 1/5 ",
    "Treasure Seeker 1/4 ": "寻宝者 1/4 ",
    "Treasure Seeker 1/5 ": "寻宝者 1/5 ",
    "Treasure Seeker gityx": "寻宝者 gityx",
    "Trophy titles unlocked": "奖杯头衔已解锁",
    "Twisted Overlord gityx": "扭曲霸主 gityx",
    "Underworld Mastery 1/5 ": "冥界精通 1/5 ",
    "Upgrade ": "升级 ",
    "Upgrader 1/3 ": "升级者 1/3 ",
    "Veteran 1/4 ": "老兵 1/4 ",
    "Void Shard Scavenger gityx": "虚空碎片拾荒者 gityx",
    "Wealth Gatherer 1/2 ": "财富收集者 1/2 ",
    "Winner gityx": "胜利者 gityx",

    // ===== 漫游者(Wanderers) =====
    "Current wanderer": "当前漫游者",
    "Currently displayed": "当前展示",
    "Fishing": "钓鱼",
    "Gathering": "采集",
    "Hunting": "狩猎",
    "No wanderer selected": "未选择漫游者",
    "No wanderers yet — invite players to unlock them!": "暂无漫游者——邀请玩家来解锁！",
    "Nothing on display": "无展品",
    "Prospecting": "勘探",
    "Undiscovered": "未发现",
    "Wanderers": "漫游者",

    // ===== 玩家名（保持原名）=====
    "Alphan gityx": "Alphan gityx",
    "Architect puyo": "Architect puyo",
    "Colonist gityx": "Colonist gityx",
    "Colonist HiveCity": "Colonist HiveCity",
    "Insomniac newbebrandon": "Insomniac newbebrandon",
    "Kysume": "Kysume",
    "Master Builder fantonico": "Master Builder fantonico",
    "Merchant White": "Merchant White",
    "Noble Guest-1007": "Noble Guest-1007",
    "Sasha": "Sasha",
    "Slufu": "Slufu",
    "Trade Route Builder MonkeyMarkMario": "Trade Route Builder MonkeyMarkMario",
    "Void Bearer Kraspen": "Void Bearer Kraspen",
    "Abyssal Maw": "深渊巨口",
    "Administrative Capacity used by your buildings.": "建筑占用的行政容量",
    "Administrative Pressure": "行政压力",
    "Alchemist's Hut": "炼金小屋",
    "Bonus": "加成效果",
    "Carts travel faster": "运输车移动速度提升",
    "Connection lost, reconnecting...": "连接断开，正在重连……",
    "Current XP": "当前经验值",
    "Current ratio": "当前比例",
    "Current tiles": "已占领地块数量",
    "Current usage": "当前占用量",
    "Daily change": "每日变动量",
    "Domain management is now unlocked!": "领地管理功能现已解锁！",
    "Forge": "锻造工坊",
    "Hourly change": "每小时变动量",
    "Hourly consumption": "每小时消耗量",
    "Hourly production": "每小时产出量",
    "Max capacity": "容量上限",
    "Maximum roads": "道路上限",
    "Maximum tiles": "地块上限",
    "Read the Game Guide": "阅读游戏指南",
    "Roads": "道路",
    "See my Town Center": "查看我的城镇中心",
    "See the Abyssal Maw": "前往深渊巨口",
    "Statue": "雕像",
    "Strategic Center": "战略中心",
    "Switch world view": "切换世界视角",
    "Terraforming": "地貌改造",
    "The Underworld is now accessible!": "地下世界现已开放！",
    "Town Center": "城镇中心",
    "Trading is now unlocked!": "交易功能现已解锁！",
    "Void Shards": "虚空碎片",
    "XP per hour": "每小时经验",
    ", Mythic Collectible chance ": "神话藏品掉落概率",
    "Rewards": "奖励",
    // ===== 建筑/专精/管理 =====
    "Building expertise": "建筑专长",
    "Specializations": "专精",
    "Deep Resonance": "深层共鸣",
    "Infos": "信息",
    "Management": "管理",
    "Production & Consumption": "生产与消耗",
    "Gold Wellspring": "黄金源泉",
    "Iron Wellspring": "铁源泉",
    "Stone Wellspring": "石头源泉",
    "Timber Wellspring": "木材源泉",
    "Overflowing Well": "溢流之井",
    "Well of the Deep": "深渊之井",
    "Build": "建造",
    "Cosmetic": "装饰",
    "Barn": "谷仓",
    "Hunting Ground": "狩猎场",
    "Continue": "继续",
    "Active Maw event": "深渊之口活跃事件中",

    // ===== 建筑转化与专精 =====
    "加成效果：1% prod/consum per exp. level (below lvl. 50)": "加成效果：每经验等级1%产量/消耗（50级以下）",
    "Convert all food production to gold production": "将所有食物生产转化为黄金生产",
    "Convert all food production to iron production": "将所有食物生产转化为铁生产",
    "Convert all food production to stone production": "将所有食物生产转化为石头生产",
    "Convert all food production to wood production": "将所有食物生产转化为木材生产",
    "1% prod/consum per exp. level (below lvl. 50)": "每经验等级1%产量/消耗（50级以下）",
    "EXP ": "经验 ",
    "bac": "bac",
    "pause building": "暂停建筑",
    "Gain +15% production for each adjacent well of the deep and give +15% production to each of the": "为每个相邻深渊之井提供+15%产量，并给予每个相邻的",
    "Give ×1.25 production to each adjacent building at the cost of zeroing this building production": "以该建筑产量清零为代价，给予每个相邻建筑×1.25产量",
    "Produces equipment. Requires both food and iron to run.": "生产装备。运行需要食物和铁。",
    "Produces food and leather. (requires any type of Plains)": "生产食物和皮革。（需要任意类型平原）",
    "Summon resources from the Underworld. Modest production but universal. (requires Hills, Sand or Plain)": "从冥界召唤资源。产量一般但通用。（需要丘陵、沙地或平原）",

    // ===== 领地与城镇中心 =====
    "Your domain": "你的领地",
    "View my Town Center": "查看我的城镇中心",
    "Upgrade your Town Center to level 2 to unlock this upgrade": "将城镇中心升至2级以解锁此升级",
    "You cannot manage your domain yet, upgrade your Town Center to be able to claim and release tiles !": "你还不能管理领地，升级城镇中心以宣告和释放格子！",
    "Available Buildings": "可用建筑",
    "Unavailable Buildings": "不可用建筑",
    "Unavailable Monuments": "不可用纪念碑",
    "Project Cost (instant)": "项目费用（立即）",
    "Be careful, you can own only one monument. And you cannot cancel or destroy it.": "请注意，你只能拥有一座纪念碑，且无法取消或拆除。",
    "Buildings or domains nearby prevent construction (min. distance": "附近的建筑或领地阻挡了建造（最小距离",
    "Current Administrative Cost of this building, depends on type and if built on domain tile, counts toward Administrative Pressure": "该建筑当前行政成本，取决于类型及是否建在领地格子上，计入行政压力",

    // ===== 纪念碑名称 =====
    "Ancient Relics Counter": "上古遗物计数器",
    "Black Iron Citadel": "黑铁要塞",
    "Cartographer's Tower": "制图师之塔",
    "Continental Military Academy": "大陆军事学院",
    "Dawn Runic Forges": "黎明符文熔炉",
    "Depths Reliquary": "深渊圣物匣",
    "Eternal Champions' Coliseu": "永恒冠军斗兽场",
    "Grand Museum of Antiquities": "古代文物大博物馆",
    "Great Forge of the Five Kingdoms": "五王国大熔炉",
    "Imperial Road Networ": "帝国路网",
    "League Shipyards": "联盟造船厂",
    "Library of Lost Knowledge": "失落知识图书馆",
    "Master Artisans' Guild": "大师工匠公会",
    "Northern Collective Granaries": "北方集体粮仓",
    "The Ancestral Sawmills": "先祖锯木厂",
    "The Deep Mines": "深层矿井",
    "Thousand Wonders' Bazaar": "千奇集市",
    "United Guilds' Pact": "公会联合盟约",
    "Wanderers' Beacon": "漫游者灯塔",
    "Wild Beasts' Sanctuary": "野兽庇护所",

    // ===== 纪念碑描述 =====
    "A colossal forge built by the combined efforts of five great kingdoms, capable of producing legendary equipment.": "由五大王国合力建造的巨型熔炉，能够产出传奇装备。",
    "A fortified repository cataloguing every ancient relic discovered on the planet.": "加固的贮藏库，编录星球上发现的每一件上古遗物。",
    "A grand arena where the mightiest warriors clash for glory and honor.": "宏伟的竞技场，最强大的战士们在此为荣耀与名誉而战。",
    "A legendary marketplace where rare goods from every corner of the world are traded.": "传奇市场，世界各地的稀有商品在此交易。",
    "A lighthouse raised deep in the forest to guide wanderers and seekers of hidden things, its amber flame drawing treasure and life alike to the planet's surface.": "深入森林的灯塔，为漫游者和寻秘者指引方向，琥珀色的火焰将宝藏与生机一同引向星球表面。",
    "A majestic museum whose grand galleries draw scholars, explorers and treasure-hunters from across the world.": "宏伟的博物馆，壮丽的展厅吸引着世界各地的学者、探险家和寻宝者。",
    "A network of mines dug deeper than any before, extracting riches from the planet's core.": "比以往任何矿井都深的矿道网络，从星球核心开采财富。",
    "A prestigious academy training the finest warriors from across the continent.": "声名显赫的学院，培养来自大陆各地最优秀的战士。",
    "A prestigious guild hall where master craftsmen share secrets and techniques across all disciplines.": "声名显赫的公会大厅，各领域的大师工匠在此分享技艺与秘法。",
    "A protected reserve where the planet's rarest creatures roam free and thrive.": "受保护的自然保护区，星球上最稀有的生物在此自由繁衍。",
    "A sacred vault built deep underground, its mystical energies drawing hidden treasures up to the surface.": "深藏地下的神圣宝库，神秘能量将隐藏的宝藏引向地表。",
    "A solemn accord uniting the great guilds of the realm, pledging their combined strength to every cooperative endeavour.": "联合王国各大公会的庄严协定，承诺合力投入每一项合作事业。",
    "A towering fortress of dark iron, a symbol of unyielding defense and military might.": "黑铁铸就的高耸堡垒，不屈防御与军事力量的象征。",
    "A towering observatory from which master cartographers map the entire planet.": "高耸的天文台，制图大师在此绘制整个星球的舆图。",
    "A vast library preserving ancient texts and forgotten wisdom from civilizations past.": "宏大的图书馆，保存着上古文明的古老文献与失传智慧。",
    "A vast network of paved roads connecting every corner of the planet, enabling faster trade and communication.": "铺装道路的庞大网络，连接星球各处，加速贸易与通讯。",
    "Ancient forges powered by runic magic, capable of imbuing equipment with extraordinary properties.": "由符文魔法驱动的远古熔炉，能为装备赋予超凡属性。",
    "Colossal sawmills built from ancient timber, harnessing age-old techniques to produce lumber at an unmatched scale.": "用古老木材建造的巨型锯木厂，以古老技法无与伦比的规模生产木材。",
    "Enormous granaries built across the northern plains, storing surplus food for all.": "横跨北方平原的巨型粮仓，为所有人储备盈余的食物。",
    "Massive shipyards built along the coast, producing fleets that secure trade routes across the seas.": "沿海建造的大型造船厂，打造保障海上贸易路线的舰队。",

    // ===== 狩猎与探索 =====
    "Take Watch": "守候观察",
    "Tiny prints scatter across the dunes, erased and remade by the wind.": "细小的足迹散落在沙丘上，被风抹去又重塑。",
    "Trac": "足迹",
    "[Hold to choose]": "[长按选择]",
    "Deer Trophy!": "鹿角奖杯！",
    "New cosmetic building unlocked": "新装饰建筑已解锁",
    "Trophy unlocked": "奖杯已解锁",
    "First discovery!": "首次发现！",
    "Found on:": "发现于：",
    "Measurement": "尺寸",
    "Sand": "沙子",
    "Sand Lizard": "沙蜥蜴",
    "Share in chat": "在聊天中分享",

    // ===== 钓鱼 =====
    "A ripple betrays something lurking just below the surface.": "涟漪暴露出水面下潜伏的东西。",
    "Artificial Fly": "人造飞蝇",
    "Earthwor": "蚯蚓",
    "EarthworM": "蚯蚓",
    "Lure": "鱼饵",
    "Fishing Net!": "渔网！",
    "103 c": "103°C",
    "Active during:": "活跃时段：",
    "Silver Salmon": "银鲑鱼",
        };
    }

    // 资源名词翻译（备用）
    window.cnResourceNames = window.cnResourceNames || {};
    // 正则替换（备用）
    window.cnRegReplace = window.cnRegReplace || new Map();
    // 前缀/后缀（备用）
    window.cnPrefix = window.cnPrefix || {};
    window.cnPostfix = window.cnPostfix || {};
    // 排除规则（备用）
    window.cnExcludeWhole = window.cnExcludeWhole || [];
    window.cnExcludePostfix = window.cnExcludePostfix || [];
    // 分类详细数据（由 cnItems 数组值自动构建，此处仅声明）
    window.cnCategories = window.cnCategories || {};

    // ============================================================
    // 汉化核心逻辑（与之前版本一致，略作优化）
    // ============================================================
    var cnConfig = window.cnConfig;

    function normalizeForMatching(str) {
        if (typeof str !== 'string') return str;
        let result = str;
        if (cnConfig.trimSpaces) result = result.trim();
        return result.split(/\s+/).map(word => {
            if (word.length === 0) return word;
            if (cnConfig.ignoreCase) return word.toLowerCase();
            return word[0].toLowerCase() + word.slice(1);
        }).join(' ');
    }

    function ignoreFirstLetterCaseEqual(a, b) {
        if (a === b) return true;
        return normalizeForMatching(a) === normalizeForMatching(b);
    }

    function addIgnoreCaseFlag(regex) {
        if (!cnConfig.ignoreCase) return regex;
        if (!(regex instanceof RegExp)) return regex;
        if (regex.flags.includes('i')) return regex;
        return new RegExp(regex.source, regex.flags + 'i');
    }

    var _categoryIndex = {};
    function rebuildCategoryIndex() {
        _categoryIndex = {};
        if (window.cnCategories) {
            for (let catName in window.cnCategories) {
                let dict = window.cnCategories[catName];
                if (typeof dict !== 'object') continue;
                let catMap = new Map();
                for (let original in dict) {
                    let chinese = dict[original];
                    if (typeof chinese !== 'string') continue;
                    catMap.set(normalizeForMatching(original), chinese);
                }
                _categoryIndex[catName] = catMap;
            }
        }
        if (window.cnItems) {
            for (let key in window.cnItems) {
                if (!key) continue; // 忽略空键
                let val = window.cnItems[key];
                if (Array.isArray(val) && val.length >= 2) {
                    let chinese = val[0];
                    let category = val[1];
                    if (typeof chinese === 'string' && typeof category === 'string') {
                        if (!_categoryIndex[category]) _categoryIndex[category] = new Map();
                        _categoryIndex[category].set(normalizeForMatching(key), chinese);
                    }
                }
            }
        }
    }

    function getCategoryTranslation(categoryName, rawValue) {
        if (!_categoryIndex[categoryName]) return null;
        let trimmed = rawValue.trim();
        let normValue = normalizeForMatching(trimmed);
        let catMap = _categoryIndex[categoryName];
        if (catMap.has(normValue)) return catMap.get(normValue);
        if (trimmed.endsWith('s')) {
            let singular = trimmed.slice(0, -1);
            if (catMap.has(normalizeForMatching(singular))) return catMap.get(normalizeForMatching(singular));
        }
        return null;
    }

    function isNumberString(str) {
        str = str.trim();
        if (str === '') return false;
        return /^[+-]?\d+(?:\.\d+)?$/.test(str);
    }

    var _staticIndex = {};
    var _templateList = [];
    var _resourceNameIndex = {};
    var _transCache = {};
    var _tagTargets = [];

    function rebuildIndices() {
        _staticIndex = {};
        _templateList = [];
        _tagTargets = [];
        _transCache = {};
        for (let key in window.cnItems) {
            if (!key) continue; // 跳过空键
            let val = window.cnItems[key];
            if (Array.isArray(val)) {
                if (typeof val[0] === 'string') {
                    _staticIndex[normalizeForMatching(key)] = val[0];
                }
                continue;
            }
            if (typeof val !== 'string') continue;
            if (key.indexOf('{{') !== -1) {
                let { regex, varNames } = templateToRegex(key);
                _templateList.push({ srcTemplate: key, translation: val, regex, varNames });
            } else {
                _staticIndex[normalizeForMatching(key)] = val;
            }
        }
        _templateList.sort((a, b) => {
            let aPre = a.srcTemplate.indexOf('{{');
            let bPre = b.srcTemplate.indexOf('{{');
            if (aPre === -1) aPre = a.srcTemplate.length;
            if (bPre === -1) bPre = b.srcTemplate.length;
            return bPre - aPre;
        });
        for (let key in window.cnItems) {
            if (typeof window.cnItems[key] === "object" && !Array.isArray(window.cnItems[key])) {
                _tagTargets.push({ key, val: window.cnItems[key] });
            }
        }
        _resourceNameIndex = {};
        if (window.cnResourceNames) {
            for (let key in window.cnResourceNames) {
                _resourceNameIndex[normalizeForMatching(key)] = window.cnResourceNames[key];
            }
        }
        rebuildCategoryIndex();
    }

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
        return { regex: new RegExp('^' + escaped + '$', cnConfig.ignoreCase ? 'i' : ''), varNames: varNames };
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
                    try { sepRegex = new RegExp(regexMatch[1], regexMatch[2]); } catch(e) {
                        sepRegex = new RegExp('\\s*' + sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*');
                    }
                } else {
                    sepRegex = new RegExp('\\s*' + sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*');
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
            let rawValue = match[i+1] || '';
            if (varName === '*' || varName.startsWith('*|')) {
                let { sepRegex, joinStr } = parseListPlaceholder(varName);
                let items = rawValue.split(sepRegex).map(s => s.trim()).filter(s => s);
                let translatedItems = items.map(item => cnItem(item, node));
                values[varName] = translatedItems.join(joinStr);
            } else if (varName === '%d') {
                if (!isNumberString(rawValue)) return null;
                values[varName] = rawValue.trim();
            } else {
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
                        values[varName] = cnItem(rawValue ? rawValue.trim() : '', node);
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

    function translateNoun(text) {
        if (!window.cnResourceNames) return null;
        let trimmed = text.trim();
        if (trimmed === "") return null;
        if (window.cnResourceNames.hasOwnProperty(text)) return window.cnResourceNames[text];
        if (window.cnResourceNames.hasOwnProperty(trimmed)) return window.cnResourceNames[trimmed];
        let normKey = normalizeForMatching(trimmed);
        if (_resourceNameIndex.hasOwnProperty(normKey)) return _resourceNameIndex[normKey];
        if (trimmed.endsWith('s')) {
            let singular = trimmed.slice(0, -1);
            if (singular.endsWith('e')) {
                let candidate = singular.slice(0, -1);
                if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(candidate))) return _resourceNameIndex[normalizeForMatching(candidate)];
            }
            if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(singular))) return _resourceNameIndex[normalizeForMatching(singular)];
        }
        return null;
    }

    function autoTranslateResourceName(text) {
        if (!window.cnResourceNames) return null;
        let match1 = text.match(/^([A-Za-z][A-Za-z\s]+):\s*(.+)$/i);
        if (match1) {
            let resource = match1[1].trim();
            let value = match1[2];
            if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(resource))) {
                return _resourceNameIndex[normalizeForMatching(resource)] + '：' + value;
            }
        }
        let match2 = text.match(/^([\+\-]\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
        if (match2) {
            let num = match2[1];
            let resource = match2[2].trim();
            if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(resource))) return num + ' ' + _resourceNameIndex[normalizeForMatching(resource)];
        }
        let match3 = text.match(/^(\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
        if (match3) {
            let num = match3[1];
            let resource = match3[2].trim();
            if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(resource))) return num + ' ' + _resourceNameIndex[normalizeForMatching(resource)];
        }
        return null;
    }

    function cnItemByTag(text, itemgroup, node, textori) {
        for (let i in itemgroup) {
            if (i[0] == '.') {
                let current_node = node;
                while (current_node) {
                    if (current_node.classList && current_node.classList.contains(i.substr(1))) return itemgroup[i];
                    else if(current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                    else break;
                }
            } else if (i[0] == '#') {
                let current_node = node;
                while (current_node) {
                    if (current_node.id == i.substr(1)) return itemgroup[i];
                    else if(current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                    else break;
                }
            } else if (i[0] == '$') {
                if (document.querySelector(i.substr(1)) != null) return itemgroup[i];
            } else if (i[0] == '*') {
                if (textori.includes(i.substr(1))) return itemgroup[i];
            }
        }
        return null;
    }

    function cnItem(text, node) {
        if (typeof text !== "string") return text;
        if (_transCache.hasOwnProperty(text)) return _transCache[text];
        let textori = text;

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

        let text_reg_exclude_postfix = "";
        for (let reg of window.cnExcludePostfix) {
            let ignoreCaseReg = addIgnoreCaseFlag(reg);
            let result = text.match(ignoreCaseReg);
            if (result) {
                text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
                text = text.substr(0, text.length - result[0].length);
            }
        }

        for (let reg of window.cnExcludeWhole) {
            if (addIgnoreCaseFlag(reg).test(text)) {
                return _transCache[textori] = text_prefix + text + text_reg_exclude_postfix + text_postfix;
            }
        }

        let normText = normalizeForMatching(text);
        if (_staticIndex.hasOwnProperty(normText)) {
            return _transCache[textori] = text_prefix + _staticIndex[normText] + text_reg_exclude_postfix + text_postfix;
        }

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

        for (let { srcTemplate, translation, regex, varNames } of _templateList) {
            let result = applyTemplateTranslation(text, srcTemplate, translation, node, regex, varNames);
            if (result !== null) {
                return _transCache[textori] = text_prefix + result + text_reg_exclude_postfix + text_postfix;
            }
        }

        for (let { key, val } of _tagTargets) {
            let result = cnItemByTag(key, val, node, textori);
            if (result != null) {
                return _transCache[textori] = text_prefix + result + text_reg_exclude_postfix + text_postfix;
            }
        }

        let nounResult = translateNoun(text);
        if (nounResult !== null) {
            return _transCache[textori] = text_prefix + nounResult + text_reg_exclude_postfix + text_postfix;
        }

        let autoResult = autoTranslateResourceName(text);
        if (autoResult !== null) {
            return _transCache[textori] = text_prefix + autoResult + text_reg_exclude_postfix + text_postfix;
        }

        // 记录未翻译词条
        if (!window.cnItems._OTHER_) window.cnItems._OTHER_ = [];
        let save_text = text;
        if (window.cnItems._OTHER_.indexOf(save_text) === -1 && window.cnItems._OTHER_.length < 10000) {
            window.cnItems._OTHER_.push(save_text);
            window.cnItems._OTHER_.sort();
            if (window.__viewerUpdate) window.__viewerUpdate();
        }
        return _transCache[textori] = text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    // 工具挂载
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
        },
        addTranslations: function(translations) {
            for (let eng in translations) window.cnItems[eng] = translations[eng];
            rebuildIndices();
        },
        extendResourceNames: function(more) {
            if (!window.cnResourceNames) window.cnResourceNames = {};
            Object.assign(window.cnResourceNames, more);
            rebuildIndices();
        },
        getResourceNames: () => window.cnResourceNames || {},
        rebuildIndex: rebuildIndices,
        setConfig: function(newConfig) {
            Object.assign(cnConfig, newConfig);
            rebuildIndices();
        },
        getConfig: () => Object.assign({}, cnConfig),
        extendCategories: function(more) {
            if (!window.cnCategories) window.cnCategories = {};
            for (let catName in more) {
                if (!window.cnCategories[catName]) window.cnCategories[catName] = {};
                Object.assign(window.cnCategories[catName], more[catName]);
            }
            rebuildCategoryIndex();
        },
        getCategories: () => window.cnCategories || {}
    };

    // ============================================================
    // 悬浮窗查看器 (整合)
    // ============================================================
    function setupViewer() {
        if (document.querySelector('.cn-other-widget')) return;

        const style = document.createElement('style');
        style.textContent = `
.cn-other-widget{
    all:initial;
    font-family:"Microsoft YaHei","Consolas","PingFang SC",sans-serif;
    position:fixed;
    z-index:999999;
    right:20px;bottom:80px;
    width:420px;
    max-height:none;
    background:#fff;
    border:1px solid #e0e0e0;
    border-radius:12px;
    box-shadow:0 4px 24px rgba(0,0,0,0.1);
    color:#333;
    font-size:13px;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    transition:box-shadow 0.2s;
    user-select:none
}
.cn-other-widget:hover{box-shadow:0 6px 32px rgba(0,0,0,0.15)}
.cn-other-widget.collapsed{display:none}
.cn-other-ball{
    all:initial;
    position:fixed;
    z-index:999999;
    right:20px;bottom:80px;
    width:48px;height:48px;
    border-radius:50%;
    background:#d4a017;
    box-shadow:0 2px 12px rgba(212,160,23,0.3);
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:16px;
    color:#fff;
    font-weight:bold;
    user-select:none;
    transition:transform 0.15s
}
.cn-other-ball:hover{transform:scale(1.1)}
.cn-other-ball .badge{
    position:absolute;
    top:-4px;right:-4px;
    background:#e74c3c;
    color:#fff;
    font-size:10px;
    min-width:18px;height:18px;
    border-radius:9px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:0 4px
}
.cn-other-widget .cn-head{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:8px 14px;
    background:#f8f8f8;
    border-bottom:1px solid #eee;
    cursor:move;
    flex-shrink:0
}
.cn-other-widget .cn-head .cn-title{
    color:#d4a017;
    font-weight:bold;
    font-size:14px;
    display:flex;
    align-items:center;
    gap:6px
}
.cn-other-widget .cn-head .cn-btns{display:flex;gap:4px}
.cn-other-widget .cn-head .cn-btns button{
    background:none;border:1px solid #ddd;
    color:#666;width:26px;height:26px;
    border-radius:6px;cursor:pointer;font-size:13px;
    padding:0;display:flex;align-items:center;justify-content:center;
    transition:all 0.15s;line-height:1
}
.cn-other-widget .cn-head .cn-btns button:hover{
    background:#f0f0f0;border-color:#ccc;color:#333
}
.cn-other-widget .cn-body{
    padding:10px 14px;
    flex:1;
    display:flex;
    flex-direction:column;
    min-height:0
}
.cn-other-widget .cn-info{
    color:#999;
    font-size:11px;
    margin-bottom:8px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-shrink:0
}
.cn-other-widget .cn-info .cn-copy-all{
    color:#d4a017;
    cursor:pointer;
    font-size:12px;
    padding:3px 10px;
    border:1px solid #e8d5a0;
    border-radius:4px;
    transition:all 0.15s
}
.cn-other-widget .cn-info .cn-copy-all:hover{
    background:#d4a017;
    color:#fff;
    border-color:#d4a017
}
.cn-other-widget .cn-body textarea{
    width:100%;
    flex:1;
    min-height:280px;
    background:#fafafa;
    border:1px solid #e8e8e8;
    border-radius:6px;
    color:#444;
    font-size:12px;
    font-family:"Consolas","Courier New",monospace;
    line-height:1.7;
    padding:10px;
    resize:vertical;
    outline:none;
    box-sizing:border-box;
    white-space:pre;
    tab-size:4
}
.cn-other-widget .cn-body textarea:focus{border-color:#d4a017}
.cn-other-widget .cn-body .cn-emp{
    color:#bbb;
    text-align:center;
    padding:40px 0;
    font-style:italic;
    font-size:13px
}
.cn-other-widget .cn-foot{
    padding:5px 14px 8px;
    text-align:center;
    font-size:10px;
    color:#ccc;
    border-top:1px solid #f0f0f0;
    flex-shrink:0;
    position:relative
}
.cn-other-widget .cn-resize{
    position:absolute;
    right:0;bottom:0;
    width:16px;height:16px;
    cursor:nwse-resize;
    opacity:0.4;
    background:linear-gradient(135deg,transparent 50%,#bbb 50%,#bbb 54%,transparent 54%),
               linear-gradient(135deg,transparent 50%,#ddd 50%,#ddd 54%,transparent 54%);
    background-size:100% 100%,8px 8px;
    background-position:0 0,4px 4px;
    background-repeat:no-repeat
}
.cn-other-widget .cn-resize:hover{opacity:1}
`;
        document.head.appendChild(style);

        const ball = document.createElement('div');
        ball.className = 'cn-other-ball';
        ball.innerHTML = '译<span class="badge">0</span>';
        document.body.appendChild(ball);

        const w = document.createElement('div');
        w.className = 'cn-other-widget';
        w.innerHTML = [
            '<div class="cn-head">',
            '  <span class="cn-title">📋 未翻译词条 <span class="cn-badge" style="font-size:11px;color:#999;font-weight:normal">(0)</span></span>',
            '  <span class="cn-btns">',
            '    <button class="cn-fold" title="折叠/展开">━</button>',
            '    <button class="cn-close" title="关闭">✕</button>',
            '  </span>',
            '</div>',
            '<div class="cn-body">',
            '  <div class="cn-info">',
            '    <span class="cn-count">等待数据...</span>',
            '    <span class="cn-copy-all">📋 复制全部</span>',
            '  </div>',
            '  <textarea id="cn-ta" readonly wrap="off"></textarea>',
            '</div>',
            '<div class="cn-foot">拖动右下角调整窗口大小 | By：人民当家做主<div class="cn-resize" title="拖动右下角可调整窗口大小"></div></div>'
        ].join('');
        document.body.appendChild(w);

        const ta = w.querySelector('#cn-ta');
        const countEl = w.querySelector('.cn-count');
        const copyAll = w.querySelector('.cn-copy-all');
        const foldBtn = w.querySelector('.cn-fold');
        const closeBtn = w.querySelector('.cn-close');
        const headEl = w.querySelector('.cn-head');
        const badgeEl = w.querySelector('.cn-badge');
        const ballBadge = ball.querySelector('.badge');

        let wPos = { x: 0, y: 0 };
        try {
            const saved = localStorage.getItem('cn_viewer_pos2');
            if (saved) {
                wPos = JSON.parse(saved);
                w.style.left = wPos.x + 'px';
                w.style.top = wPos.y + 'px';
                w.style.right = 'auto';
                w.style.bottom = 'auto';
            }
        } catch(e) {}

        let wDrag = false, wSX, wSY, wOX, wOY;
        headEl.addEventListener('mousedown', e => {
            if (e.target.closest('.cn-btns')) return;
            e.preventDefault();
            wDrag = false;
            wSX = e.clientX; wSY = e.clientY;
            const r = w.getBoundingClientRect();
            wOX = r.left; wOY = r.top;
            const onMove = ev => {
                wDrag = true;
                wPos.x = wOX + ev.clientX - wSX;
                wPos.y = wOY + ev.clientY - wSY;
                w.style.left = wPos.x + 'px';
                w.style.top = wPos.y + 'px';
                w.style.right = 'auto';
                w.style.bottom = 'auto';
            };
            const onUp = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                localStorage.setItem('cn_viewer_pos2', JSON.stringify(wPos));
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });

        const resizeEl = w.querySelector('.cn-resize');
        let resizeStart = false, rSX, rSY, rW, rH;
        resizeEl.addEventListener('mousedown', function(e) {
            e.preventDefault(); e.stopPropagation();
            rSX = e.clientX; rSY = e.clientY;
            rW = w.offsetWidth; rH = w.offsetHeight;
            resizeStart = true;
            document.addEventListener('mousemove', resizeMove);
            document.addEventListener('mouseup', resizeUp);
        });
        function resizeMove(ev) {
            if (!resizeStart) return;
            w.style.width = Math.max(300, rW + ev.clientX - rSX) + 'px';
            w.style.height = Math.max(200, rH + ev.clientY - rSY) + 'px';
            w.style.maxHeight = 'none';
        }
        function resizeUp() {
            resizeStart = false;
            document.removeEventListener('mousemove', resizeMove);
            document.removeEventListener('mouseup', resizeUp);
        }

        let bDrag = false, bSX, bSY, bOX, bOY;
        ball.addEventListener('mousedown', function(e) {
            bDrag = false;
            bSX = e.clientX; bSY = e.clientY;
            bOX = ball.offsetLeft; bOY = ball.offsetTop;
            function onMove(ev) {
                bDrag = true;
                ball.style.left = (bOX + ev.clientX - bSX) + 'px';
                ball.style.top = (bOY + ev.clientY - bSY) + 'px';
                ball.style.right = 'auto';
                ball.style.bottom = 'auto';
            }
            function onUp() {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                if (!bDrag) expandFromBall();
            }
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });

        function collapseToBall() {
            const wr = w.getBoundingClientRect();
            w.classList.add('collapsed');
            ball.style.left = wr.left + 'px';
            ball.style.top = wr.top + 'px';
            ball.style.right = 'auto';
            ball.style.bottom = 'auto';
            ball.style.display = 'flex';
        }
        function expandFromBall() {
            const br = ball.getBoundingClientRect();
            w.classList.remove('collapsed');
            w.style.left = br.left + 'px';
            w.style.top = br.top + 'px';
            w.style.right = 'auto';
            w.style.bottom = 'auto';
            wPos.x = br.left;
            wPos.y = br.top;
            ball.style.display = 'none';
        }
        foldBtn.addEventListener('click', collapseToBall);
        closeBtn.addEventListener('click', () => { w.style.display = 'none'; });

        copyAll.addEventListener('click', () => {
            if (!ta.value) return;
            navigator.clipboard.writeText(ta.value).then(() => {
                const orig = copyAll.textContent;
                copyAll.textContent = '✅ 已复制 ' + ta.value.split('\n').length + ' 条';
                copyAll.style.borderColor = '#4caf50';
                copyAll.style.color = '#4caf50';
                setTimeout(() => {
                    copyAll.textContent = orig;
                    copyAll.style.borderColor = '#e8d5a0';
                    copyAll.style.color = '#d4a017';
                }, 1500);
            }).catch(() => {
                ta.select();
                document.execCommand('copy');
            });
        });

        function updateViewer() {
            const items = window.cnItems && Array.isArray(window.cnItems._OTHER_) ? window.cnItems._OTHER_ : [];
            const filtered = items.filter(s => typeof s === 'string' && s.length > 0 && /[a-zA-Z]/.test(s) && s.indexOf('By：') === -1);
            badgeEl.textContent = '(' + filtered.length + ')';
            ballBadge.textContent = filtered.length > 99 ? '99+' : filtered.length;
            if (filtered.length === 0) {
                countEl.textContent = '暂无未翻译词条';
                ta.value = '';
                return;
            }
            countEl.textContent = '共 ' + filtered.length + ' 条（已去重）';
            ta.value = filtered.map(s => '"' + s + '",').join('\n');
        }

        window.__viewerUpdate = updateViewer;
        updateViewer();

        document.addEventListener('keydown', function(e) {
            if (e.key === 'F8') {
                e.preventDefault();
                if (w.classList.contains('collapsed') || w.style.display === 'none' || ball.style.display === 'flex') {
                    ball.style.display = 'none';
                    w.classList.remove('collapsed');
                    w.style.display = '';
                    if (wPos.x && wPos.y) {
                        w.style.left = wPos.x + 'px';
                        w.style.top = wPos.y + 'px';
                    } else {
                        w.style.left = (window.innerWidth - 440) + 'px';
                        w.style.top = '100px';
                    }
                    w.style.right = 'auto';
                    w.style.bottom = 'auto';
                    w.style.width = '420px';
                    w.style.height = 'auto';
                    w.style.maxHeight = 'none';
                    updateViewer();
                } else {
                    collapseToBall();
                }
            }
        });

        ball.style.left = (window.innerWidth - 68) + 'px';
        ball.style.top = (window.innerHeight - 128) + 'px';
        ball.style.right = 'auto';
        ball.style.bottom = 'auto';
        ball.style.display = 'flex';
        w.classList.add('collapsed');
    }

    // ============================================================
    // 页面汉化启动
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

    function startHanhua() {
        if (!document.body) {
            setTimeout(startHanhua, 50);
            return;
        }
        rebuildIndices();
        setupViewer();
        console.log("锅巴汉化已启动 (V0.9.5) - 支持分类匹配、未翻译词条查看，内置示例翻译数据");
        TransSubTextNode(document.body);
        transTaskMgr.doTask();

        let observer_config = { attributes: false, characterData: true, childList: true, subtree: true };
        let targetNode = document.body;
        let observer = new MutationObserver(function(e) {
            observer.disconnect();
            for (let mutation of e) {
                if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
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
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startHanhua);
    } else {
        startHanhua();
    }
})();