// ==UserScript==
// @name         Eternals: Online 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Eternals: Online (https://eternalsonline.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Eternals: Online.
// @author       好阳光的小锅巴 & 麦子、人民当家做主
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://eternalsonline.com/favicon-32x32.png
// @license      MIT
// @include      *https://eternalsonline.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/eternals-online-AI2-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/eternals-online-AI2-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/07/04 09:12
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
            "Find {{0}} rare Thieving rewards.": "发现 {{0}} 稀有盗窃奖励.",
            "Find {{0}} skill pets.": "发现 {{0}} 技能宠物.",
            "Gather {{0}} resources.": "采集 {{0}} 资源.",
            "Defeat {{0}} Lemcrabs.": "击败 {{0}} 莱姆蟹.",
            "Defeat {{0}} enemies.": "击败 {{0}} 敌人.",
            "Defeat {{0}} bosses.": "击败 {{0}} Boss.",
            "Encounter {{0}} superior Slayer spawns.": "遇到 {{0}} 高级杀手刷出.",
            "Complete {{0}} skill actions.": "完成 {{0}} 技能行动.",
            "Complete {{0}} Slayer tasks.": "完成 {{0}} 杀手任务.",
            "Complete {{0}} master route Agility runs.": "完成 {{0}} 大师路线的敏捷行动.",
            "Complete {{0}} rooftop Agility runs.": "完成 {{0}} 屋顶的敏捷行动.",
            "Complete {{0}} hazard Agility runs.": "完成 {{0}} 危险的敏捷行动.",
            "Complete {{0}} successful Agility runs.": "完成 {{0}} 成功的敏捷行动.",
            "Complete {{0}} harvests.": "完成 {{0}} 收获.",
            "Complete {{0}} pickpockets.": "完成 {{0}} 小偷.",
            "Complete {{0}} farmer thefts.": "完成 {{0}} 农夫盗窃.",
            "Complete {{0}} stall thefts.": "完成 {{0}} 摊位盗窃.",
            "Collect {{0}} marks of grace.": "收集 {{0}} 恩典的印记.",
            "Cast {{0}} alchemy spells.": "施放 {{0}} 炼金法术.",
            "Cast {{0}} enchantment spells.": "施放 {{0}} 附魔法术.",
            "Clear {{0}} dungeons.": "清理 {{0}} 地牢.",
            "Burn {{0}} meals.": "烧焦 {{0}} 美食.",
            "Reduce magic damage by {{0}}.": "降低 魔法伤害 {{0}}.",
            "Reduce melee damage by {{0}}.": "降低 近战伤害 {{0}}.",
            "Reduce ranged damage by {{0}}.": "降低 远程伤害 {{0}}.",
            "Bury {{0}} meals.": "埋葬 {{0}} 美食.",
            "Bury {{0}} bones.": "埋葬 {{0}} 骨头.",
            "Catch {{0}} pets.": "捕捉 {{0}} 宠物.",
            "Cook {{0}} meals.": "烹饪 {{0}} 美食.",
            "Mine {{0}} Copper": "开采 {{0}} 铜",
            "Mine {{0}} Tin": "开采 {{0}} 锡",
            "Open {{0}} strongboxes.": "打开 {{0}} 保险箱.",
            "Open {{0}} reward boxes.": "打开 {{0}} 奖励箱.",
            "Reach level {{0}} Agility.": "达到 {{0}} 级 敏捷.",
            "Reach level {{0}} Attack.": "达到 {{0}} 级 攻击.",
            "Reach level {{0}} Cooking.": "达到 {{0}} 级 烹饪.",
            "Reach level {{0}} Crafting.": "达到 {{0}} 级 制作.",
            "Reach level {{0}} Defense.": "达到 {{0}} 级 防御.",
            "Reach level {{0}} Farming.": "达到 {{0}} 级 农业.",
            "Reach level {{0}} Fishing.": "达到 {{0}} 级 钓鱼.",
            "Reach level {{0}} Fletching.": "达到 {{0}} 级 造箭.",
            "Reach level {{0}} Herblore.": "达到 {{0}} 级 草药学.",
            "Reach level {{0}} Hitpoints.": "达到 {{0}} 级 生命值.",
            "Reach level {{0}} Slayer.": "达到 {{0}} 级 杀手.",
            "Reach level {{0}} Woodcutting.": "达到 {{0}} 级 伐木.",
            "Reach level {{0}} Thieving.": "达到 {{0}} 级 盗窃.",
            "Reach level {{0}} Taming.": "达到 {{0}} 级 驯养.",
            "Reach level {{0}} Runecrafting.": "达到 {{0}} 级 符文制作.",
            "Reach level {{0}} Ranged.": "达到 {{0}} 级 远程.",
            "Reach level {{0}} Smithing.": "达到 {{0}} 级 锻造.",
            "Reach level {{0}} Strength.": "达到 {{0}} 级 力量.",
            "Reach level {{0}} Prayer.": "达到 {{0}} 级 祈祷.",
            "Reach level {{0}} Mining.": "达到 {{0}} 级 采矿.",
            "Reach level {{0}} Magic.": "达到 {{0}} 级 魔法.",
            "Reach level {{0}} Firemaking.": "达到 {{0}} 级 生火.",
            "Reach level {{0}} Dice Games.": "达到 {{0}} 级 骰子游戏.",
            "Reach level {{0}} in every skill.": "达到 {{0}} 级 每个技能.",
            "Reach Runecrafting level {{0}}.": "符文制作 达到 {{0}} 级.",
            "Requires Woodcutting level {{0}}.": "要求 伐木 等级 {{0}}.",
            "Cost: {{0}}": "消耗：{{0}}",
            "Next Improvement: {{0}}": "下次提升：{{0}}",
            "Woodcutting Lv {{0}}": "伐木 等级 {{0}}",
            "Thieving Lv {{0}}": "盗窃 等级 {{0}}",
            "Attack Lv {{0}}": "攻击 等级 {{0}}",
            "Defense Lv {{0}}": "防御 等级 {{0}}",
            "Mining Lv {{0}}": "采矿 等级 {{0}}",
            "Fishing Lv {{0}}": "钓鱼 等级 {{0}}",
            "{{0}} Raw Shrimp": "{{0}} 生虾",
            "{{0}} Potato Seed": "{{0}} 土豆种子",
            "{{0}} Rune Essence": "{{0}} 符文精华",
            "{{0}} Shrimp": "{{0}} 虾",
            "{{0}} Common Box": "{{0}} 普通箱子",
            "+{{0}} Defense xp": "+{{0}} 防御经验",
            "+{{0}} Firemaking xp": "+{{0}} 生火经验",
            "{{0}}s ago": "{{0}} 秒前",
            "{{0}} to gather": "{{0}} 待采集",
            "{{0}} Logs": "{{0}} 原木",
            "{{0}} Gold": "{{0}} 黄金",
            "{{0}} Gold, {{1}} Grass Herb": "{{0}} 黄金, {{1}} 草药",
            "{{0}} Gold, {{1}} Rune Essence": "{{0}} 黄金, {{1}} 符文精华",
            "{{0}} Gold, {{1}} Bones": "{{0}} 黄金, {{1}} 骨头",
            "{{0}} Gold, {{1}} Logs": "{{0}} 黄金, {{1}} 木头",
            "{{0}} Starter Dagger, {{1}} Logs": "{{0}} 新手匕首, {{1}} 新手长袍",
            "{{0}}% · +{{1}} · have {{2}}": "{{0}}% · +{{1}} · 拥有 {{2}}",
            "+{{0}} · have {{1}}": "+{{0}} · 拥有 {{1}}",
            " · next Lv {{0}}": " · 下一级 {{0}}",
            "melee · {{0}} HP": "近战 · {{0}} 生命值",
            "ranged · {{0}} HP": "远程 · {{0}} 生命值",
            "{{0}} HP": "{{0}} 生命值",
            "Thieving · level {{0}}": "盗窃 · 等级 {{0}}",
            "entry {{0}} coins": "放入 {{0}} 金币",
            "reward {{0}} coins": "奖励 {{0}} 金币",
            "Roll over {{0}}": "掷出 {{0}} 以上",
            "Roll under {{0}}": "掷出 {{0}} 以下",
            "Emberfall - Combat Lv {{0}}": "余烬陨落 - 战斗等级 {{0}}",
            "Missed {{0}}.": "未命中 {{0}}.",
            "Ate Shrimp for {{0}} HP.": "吃下 虾 恢复了 {{0}} 生命值.",
            "Lv {{0}}": "等级 {{0}}",
            "Uses {{0}}": "使用 {{0}}",
            "Weight {{0}}": "重量 {{0}}",
            "Level {{0}}": "等级 {{0}}",
            "Hit {{0}} for {{1}}.": "攻击 {{0}} 并造成 {{1}} 伤害.",
            "{{0}} hit you for {{1}}.": "{{0}} 攻击了你并造成 {{1}} 伤害.",
            ": {{0}} Bronze Bar": ": {{0}} 青铜锭",
            ": {{0}} Potato": ": {{0}} 土豆",
            ": {{0}} Raw Seaweed": ": {{0}} 生海藻",
            ": {{0}} Raw Rugfish": ": {{0}} 生地毡鱼",
            ": {{0}} Raw Shrimp": ": {{0}} 生虾",
            ": {{0}} Cowhide": ": {{0}} 牛皮",
            ": {{0}} Ash": ": {{0}} 灰烬",
            ": {{0}} Plain Cloth": ": {{0}} 素布",
            ": {{0}} Grass Herb": ": {{0}} 草药",
            ": {{0}} Tin Ore": ": {{0}} 锡矿石",
            ": {{0}} Bones": ": {{0}} 骨头",
            ": {{0}} Logs": ": {{0}} 木头",
            ": {{0}} Bones, {{1}} Ash": ": {{0}} 骨头, {{1}} 灰烬",
            ": {{0}} Bronze Bar, {{1}} Logs": ": {{0}} 青铜锭, {{1}} 原木",
            ": {{0}} Copper Ore, {{1}} Tin Ore": ": {{0}} 铜矿石, {{1}} 锡矿石",
            "{{0}} x {{1}}": "{{0}} × {{1}}",
            "{{0}} Gold, {{1}}": "{{0}} 黄金, {{1}}",
            "{{0}} ticks": "{{0}} ticks",
            "{{0}} / {{1}}": "{{0}} / {{1}}",
            "{{0}}m {{1}}s": "{{0}}分 {{1}}秒",
            "{{0}}h {{1}}m": "{{0}}小时 {{1}}分",
            "\n{{0}}x{{1}}\n{{2}}": "\n{{0}}x{{1}}\n{{2}}",
            " - alchemy {{0}} gold": " - 炼金 {{0}} 黄金",
            "+{{0}} Attack XP · +{{1}} Strength XP": "+{{0}} 攻击经验 · +{{1}} 力量经验",
            "+{{0}} Logs · +{{1}} Woodcutting XP": "+{{0}} 木头 · +{{1}} 伐木经验",
            "+{{0}} gold · +{{1}} Bones": "+{{0}} 黄金 · +{{1}} 骨头",
            "+{{0}} Copper Ore · +{{1}} Mining XP": "+{{0}} 铜矿石 · +{{1}} 采矿经验",
            "+{{0}} Raw Shrimp · +{{1}} Fishing XP": "+{{0}} 生虾 · +{{1}} 钓鱼经验",
            "+{{0}} Logs": "+{{0}} 木头",
            "+{{0}} Bones": "+{{0}} 骨头",
            "+{{0}} Prayer XP": "+{{0}} 祈祷经验",
            "{{0}} Oak": "{{0}} 橡木",
            "{{0}} areas": "{{0}} 区域",
            "{{0}} traded": "{{0}} 交易",
            "{{0}}/h": "{{0}}/小时",

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
            "x{{%d}}": "x{{%d}}",
            "{{%d}}": "{{%d}}",
            "Slayer {{%d}}": "杀手 {{%d}}",
            "{{%d}}s": "{{%d}}秒",
            "{{%d}}/h": "{{%d}}/小时",
            "HP: {{%d}}": "生命值：{{%d}}",
            "DMG: {{%d}}": "伤害：{{%d}}",
            
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
            "A mud-spattered adventurer waves a torn map at you.": "满身泥污的冒险者朝你挥舞一张残破地图。",
            "Ancient Altar": "远古祭坛",
            "Build ": "建造",
            "Clean it": "清理",
            "Client update ready": "客户端更新就绪",
            "Give directions": "指引方向",
            "Help sort their battered pack.": "帮忙整理破旧行囊。",
            "Later": "稍后",
            "Lost Adventurer": "迷路冒险者",
            "Point them toward the nearest road.": "指引他前往最近的道路。",
            "Pray": "祈祷",
            "Random event": "随机事件",
            "Reload Eternals to fetch the latest client files.": "重启永恒纪元以加载最新客户端文件。",
            "Share supplies": "分享物资",
            "They need a quick answer before they wander off again.": "他马上就要离开，需要你快速给出答复。",
            "Training Agility": "敏捷训练",
            "Update": "更新",
            " Travel": " 旅行",
            " Gear": " 装备",
            " · Combat Lv ": " · 战斗等级 ",
            "Def": "防御",
            "Spd": "速度",
            "HP": "生命值",
            "Equip": "装备",
            "Clear": "清理",
            "weak ": "虚弱 ",
            "every ": "每 ",
            "kills": "击杀",
            "Thief": "小偷",
            "Win": "胜利",
            "XP/h": "经验/小时",
            "Hunting…": "狩猎中...",
            " · DEF ": " · 防御 ",
            "· weak ": "· 虚弱 ",
            "· ATK ": "· 攻击 ",
            "Gear": "装备",
            " - Body": " - 身体",
            "Speed": "速度",
            "miss": "未命中",
            "Game": "游戏",
            "Training Woodcutting": "训练伐木中",
            " tier": " 层级",
            " Spells": " 法术",
            " Lv ": " 等级 ",
            "+ Queue": "+ 队列",
            "Magic Lv ": "魔法等级 ",
            "Lv ": "等级 ",
            "◆ Active": "◆ 活跃",
            "casts": "施放",
            "min": "最小",
            "All": "全部",
            " to Lv ": " 到等级",
            " xp": " 经验值",
            "Coal": "煤",
            "Tin Ore": "锡矿石",
            "Silver Ore": "银矿石",
            "Start": "开始",
            "Target": "目标",
            "Ore": "矿石",
            "items": "物品",
            "XP ": "经验值 ",
            " caught ": " 捕获 ",
            " rare ": " 稀有 ",
            "/cycle": "/周期",
            "All Gear": "所有装备",
            " · Lv ": " · 等级 ",
            "Add a passkey after signup": "注册后添加通行密钥",
            "Adventurer name": "冒险者名称",
            "An idle realm of skills, spoils, and slow-burning legends.": "一片包含技艺、战利品与漫长史诗的放置国度。",
            "Choose your game mode": "选择游戏模式",
            "Continue with Apple": "通过苹果账号登录",
            "Continue with Google": "通过谷歌账号登录",
            "Continue with passkey": "使用通行密钥登录",
            "Create account": "创建账号",
            "Email": "电子邮箱",
            "Enter the realm": "进入国度",
            "Entering the realm…": "正在进入国度……",
            "Eternals": "永恒国度",
            "Guests get a real account instantly — link an email later from the game to keep your progress.": "游客可一键生成正式账号，后续可在游戏内绑定邮箱存档进度。",
            "Hardcore": "硬核模式",
            "I accept the ": "我同意",
            "Ironman": "铁人模式",
            "Log in": "登录",
            "Need help? ": "需要帮助？",
            "Online": "在线",
            "Password": "密码",
            "Play as Guest": "游客游玩",
            "Privacy Policy": "隐私政策",
            "Standard": "标准模式",
            "Support: ": "客服邮箱：",
            "Terms of Service": "服务条款",
            "Trade with other players and use the Grand Exchange.": "可与其他玩家交易、使用大型交易所。",
            "support@eternalsonline.com": "support@eternalsonline.com",
            "Continue": "继续",
            "Forgot password?": "忘记密码？",
            "and ": "和 ",
            "???": "???",
            "Gityx": "Gityx",
            "G8hh": "G8hh",
            "or": "或",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "⬜": "⬜",
            "⬛": "⬛",
            "✕": "✕",
            "☰": "☰",
            "▾": "▾",
            "━": "━",
            "·": "·",
            "^": "^",
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
            "Summoning your realm…": "正在召唤你的国度……",
            "About": "关于",
            "Adventure": "冒险",
            "Agility": "敏捷",
            "All Skills": "全部技能",
            "Bank": "仓库",
            "Chat": "聊天",
            "Choose a skill or a monster to begin your loop — progress continues while you're away.": "选择一个技能或怪物开始循环——即使离线，进度也会继续。",
            "Combat": "战斗",
            "Companions": "伙伴",
            "Cooking": "烹饪",
            "Crafting": "制作",
            "Dice Games": "骰子游戏",
            "Duel Arena": "决斗竞技场",
            "Equipment": "装备",
            "Farm": "农场",
            "Firemaking": "生火",
            "Fishing": "钓鱼",
            "Fletching": "制箭",
            "Grand Exchange": "大型交易所",
            "Guild": "公会",
            "Herblore": "草药学",
            "Hiscores": "排行榜",
            "Holdings": "领地",
            "Idle": "挂机",
            "Journey": "旅程",
            "Loading realm…": "正在加载国度……",
            "Locked": "锁定",
            "Menu": "菜单",
            "Mining": "采矿",
            "Off": "关闭",
            "Party": "队伍",
            "Pets": "宠物",
            "Play": "开始",
            "Prayer": "祈祷",
            "Profile": "个人资料",
            "Quest Journal": "任务日志",
            "Quests": "任务",
            "Radio": "广播",
            "Realm": "国度",
            "Runecrafting": "符文制作",
            "Shop": "商店",
            "Skills": "技能",
            "Slayer": "屠戮",
            "Smithing": "锻造",
            "Spellbook": "魔法书",
            "Thieving": "偷窃",
            "Total": "总计",
            "Trade": "交易",
            "Woodcutting": "伐木",
            "World Map": "世界地图",
            "· Online ·": "· 在线 ·",
            " complete": " 完成",
            " discoveries recorded in your journal.": " 条发现已记录在你的日志中。",
            " ready": " 就绪",
            "Arm Yourself": "武装自己",
            "Brew a Potion": "酿造药剂",
            "Brew a grass potion from the herbs you were given.": "用给你的草药酿造一瓶草草药剂。",
            "Burn a log to train Firemaking.": "燃烧原木来训练生火技能。",
            "Bury the Bones": "埋葬骨头",
            "Carve a Totem": "雕刻图腾",
            "Cast a Line": "抛钩钓鱼",
            "Catch a shrimp at the fishing spot.": "在钓鱼点捕获一只虾。",
            "Chop 5 logs — fuel for fires, totems, and bows.": "砍伐5根原木——用于生火、图腾和弓的材料。",
            "Chop logs": "砍伐原木",
            "Claim": "领取",
            "Complete the previous tutorial step.": "完成上一步教程。",
            "Cook a Meal": "烹饪一顿饭",
            "Cook a shrimp into food that heals in combat.": "将虾烹饪成战斗中恢复生命值的食物。",
            "Cut a batch of arrows from a log.": "用原木切割一批箭矢。",
            "Defeat one Rat in Lumby.": "在鲁姆比击败一只老鼠。",
            "Draw essence at the altar to begin Runecrafting.": "在祭坛抽取精华以开始符文制作。",
            "Equip the Starter Dagger from your kit.": "从工具包中装备新手匕首。",
            "Equip the Starter Tunic before training combat.": "在训练战斗前装备新手外衣。",
            "Fight": "战斗",
            "First Training Fight": "第一次训练战斗",
            "Fletch Arrows": "制作箭矢",
            "Follow the path to learn the realm and unlock its systems.": "沿着路径学习国度的知识并解锁其系统。",
            "Gather Logs": "收集原木",
            "Go fishing": "去钓鱼",
            "Grow a Crop": "种植作物",
            "Light a Fire": "点火",
            "Make fire": "生火",
            "Meet the Guide": "会见向导",
            "Mine 5 copper ore for your first bar.": "开采5块铜矿石，制作你的第一块锭。",
            "Mine 5 tin ore to pair with copper.": "开采5块锡矿石与铜配对。",
            "Mine copper": "开采铜矿",
            "Mine tin": "开采锡矿",
            "No random events recorded yet.": "尚未记录到随机事件。",
            "Not yet": "未完成",
            "Open agility": "打开敏捷",
            "Open cooking": "打开烹饪",
            "Open crafting": "打开制作",
            "Open equipment": "打开装备",
            "Open farm": "打开农场",
            "Open fletching": "打开制箭",
            "Open herblore": "打开草药学",
            "Open journal": "打开日志",
            "Open runecrafting": "打开符文制作",
            "Open smithing": "打开锻造",
            "Open thieving": "打开偷窃",
            "Pick a Pocket": "摸包行窃",
            "Pickpocket a citizen to learn Thieving.": "扒窃一个市民来学习偷窃技能。",
            "Plant a potato seed and harvest it on the Farm.": "在农场种植土豆种子并收割。",
            "Random Events": "随机事件",
            "Ready": "就绪",
            "Recent encounters": "最近遭遇",
            "Run a Course": "跑酷训练",
            "Run the Lumby rooftops to train Agility.": "在鲁姆比屋顶跑酷训练敏捷。",
            "Sift Essence": "筛滤精华",
            "Smelt 1 bronze bar at the Smithy.": "在铁匠铺熔炼1块青铜锭。",
            "Smelt Bronze": "熔炼青铜",
            "Speak with the Guide and take your starter kit.": "与向导交谈并领取新手装备包。",
            "Step Into Lumby": "踏入鲁姆比",
            "Train Prayer": "训练祈祷",
            "Tutorial Path": "教程之路",
            "Use bones for Prayer XP.": "使用骨头获取祈祷经验。",
            "View quests": "查看任务",
            "Wear Protection": "穿戴防护",
            "You've touched every craft — the wider realm opens up.": "你已经接触了每一门技艺——更广阔的国度向你敞开。",
            " Practice vs AI": " 对战AI",
            " Send Challenge": " 发起挑战",
            "Active Companion": "激活的伙伴",
            "Battle players turn-by-turn with your active companion's moves.": "使用激活伙伴的招式与玩家轮换对战。",
            "Entry": "参赛",
            "Incoming": "收到",
            "Loading challenges...": "正在加载挑战……",
            "Loading open challenges...": "正在加载公开挑战……",
            "No active companion": "没有激活的伙伴",
            "No outgoing pet challenges.": "没有发出的宠物挑战。",
            "No pet battle results yet.": "暂无宠物对战结果。",
            "Open": "开放",
            "Open Pet Battles": "打开宠物对战",
            "Open — anyone can accept": "公开——任何人可接受",
            "Opponent": "对手",
            "Outgoing": "发出",
            "Pet Battles": "宠物对战",
            "Pet Challenges": "宠物挑战",
            "Recent Pet Battles": "最近宠物对战",
            "Select an active companion on the Pets screen to battle.": "在宠物界面选择一个激活的伙伴来对战。",
            "Sent": "已发送",
            "Turn-based": "回合制",
            "World Log": "世界日志",
            " coins": " 金币",
            "No incoming pet challenges.": "没有收到的宠物挑战。",
            "No open pet battles.": "没有公开的宠物对战。",
            "defeated ": "击败了 ",
            "Attack": "攻击",
            "Defense": "防御",
            "Farming": "农业",
            "Hitpoints": "生命值",
            "Magic": "魔法",
            "Ranged": "远程",
            "Strength": "力量",
            "Taming": "驯养",
            "Train your trades and combat arts across the realm.": "在国度中训练你的技艺和战斗艺术。",
            " Magic xp per cast": " 每次施放魔法经验",
            " weak here": " 此处弱点",
            "+15% gold from kills": "击杀+15%金币",
            "+25% gold from kills": "击杀+25%金币",
            "+3% gathering success": "+3%采集成功率",
            "+5% gathering success": "+5%采集成功率",
            "20% chance to skip prayer drain": "20%几率跳过祈祷消耗",
            "30% chance to skip prayer drain": "30%几率跳过祈祷消耗",
            "A heavier combat enchantment": "更强的战斗附魔",
            "Acc ": "精准 ",
            "Active": "激活",
            "Alchemy": "炼金",
            "Amulet of Dominion": "统御护符",
            "Amulet of Power": "力量护符",
            "Amulet of the Acolyte": "侍僧护符",
            "Amulet of the Zealot": "狂热者护符",
            "Blast": "爆裂",
            "Blood Rune": "鲜血符文",
            "Bolt": "箭矢",
            "Chaos Rune": "混沌符文",
            "Death Rune": "死亡符文",
            "Earth": "地",
            "Earth Blast": "地爆裂",
            "Earth Bolt": "地箭矢",
            "Earth Strike": "地冲击",
            "Earth Wave": "地波浪",
            "Enchanting": "附魔",
            "Fire": "火",
            "Fire Blast": "火爆裂",
            "Fire Bolt": "火箭矢",
            "Fire Strike": "火冲击",
            "Fire Wave": "火波浪",
            "Four elements, four tiers — each tier gated by its catalyst rune. Casting a target's weakness element hits 45% harder.": "四大元素，四个等级——每个等级由其催化符文限制。施放目标弱点对应的元素，伤害提升45%。",
            "High Alchemy": "高级炼金",
            "Low Alchemy": "低级炼金",
            "Lumby": "鲁姆比",
            "Mind Rune": "精神符文",
            "Pow ": "威力 ",
            "Ring of Fortune": "幸运之戒",
            "Ring of Prospecting": "勘探之戒",
            "Ring of Wealth": "财富之戒",
            "Ring of the Surveyor": "测量者之戒",
            "Rune Pouch": "符文袋",
            "Strike": "冲击",
            "Supplies": "消耗品",
            "Turns an item into gold": "将物品转化为金币",
            "Utility": "实用",
            "Water": "水",
            "Water Blast": "水爆裂",
            "Water Bolt": "水箭矢",
            "Water Strike": "水冲击",
            "Water Wave": "水波浪",
            "Wave": "波浪",
            "Weak in ": "弱点：",
            "Wind": "风",
            "Wind Blast": "风爆裂",
            "Wind Bolt": "风箭矢",
            "Wind Strike": "风冲击",
            "Wind Wave": "风波浪",
            "You're not wielding a magic weapon — equip a wand or staff to cast. Spells can still be chosen here for later.": "你没有装备魔法武器——装备法杖或魔杖来施法。可以在此预先选择法术。",
            "Barren Ore": "荒芜矿石",
            "Blood Ore": "鲜血矿石",
            "Brimstone": "硫磺",
            "Bronze Pickaxe": "青铜镐",
            "Copper Ore": "铜矿石",
            "Corrupt Ore": "腐化矿石",
            "Etherment Ore": "以太矿石",
            "Gold Ore": "金矿石",
            "Holy Ore": "圣洁矿石",
            "Iron Ore": "铁矿石",
            "Iron Pickaxe": "铁镐",
            "Mithril Ore": "秘银矿石",
            "Mystic Ore": "神秘矿石",
            "Need materials": "需要材料",
            "Polyment Ore": "聚合矿石",
            "Pull ore from the rock.": "从岩石中挖掘矿石。",
            "Rekt Ore": "残毁矿石",
            "Uncut Diamond": "未切割钻石",
            "Uncut Emerald": "未切割绿宝石",
            "Uncut Ruby": "未切割红宝石",
            "Uncut Sapphire": "未切割蓝宝石",
            " Have materials": " 材料充足",
            "Armour": "护甲",
            "Astral Core": "星辰核心",
            "Barren Bar": "荒芜锭",
            "Barren Blackjack": "荒芜棍",
            "Barren Cloak": "荒芜披风",
            "Barren Cuirass": "荒芜胸甲",
            "Barren Gauntlets": "荒芜护手",
            "Barren Greaves": "荒芜腿甲",
            "Barren Harpoon": "荒芜鱼叉",
            "Barren Hatchet": "荒芜斧",
            "Barren Helm": "荒芜头盔",
            "Barren Kiteshield": "荒芜风筝盾",
            "Barren Longsword": "荒芜长剑",
            "Barren Pickaxe": "荒芜镐",
            "Barren Treads": "荒芜战靴",
            "Bars": "锭",
            "Blessed Silver Bar": "祝福银锭",
            "Blessed Silver Longsword": "祝福银长剑",
            "Blood Bar": "鲜血锭",
            "Blood Blackjack": "鲜血棍",
            "Blood Blade": "鲜血利刃",
            "Blood Cloak": "鲜血披风",
            "Blood Cuirass": "鲜血胸甲",
            "Blood Gauntlets": "鲜血护手",
            "Blood Greaves": "鲜血腿甲",
            "Blood Harpoon": "鲜血鱼叉",
            "Blood Hatchet": "鲜血斧",
            "Blood Helm": "鲜血头盔",
            "Blood Kiteshield": "鲜血风筝盾",
            "Blood Longsword": "鲜血长剑",
            "Blood Pickaxe": "鲜血镐",
            "Blood Treads": "鲜血战靴",
            "Brimstone Bar": "硫磺锭",
            "Bronze Bar": "青铜锭",
            "Bronze Cloak": "青铜披风",
            "Bronze Cuirass": "青铜胸甲",
            "Bronze Dagger": "青铜匕首",
            "Bronze Gauntlets": "青铜护手",
            "Bronze Greaves": "青铜腿甲",
            "Bronze Helm": "青铜头盔",
            "Bronze Kiteshield": "青铜风筝盾",
            "Bronze Longsword": "青铜长剑",
            "Bronze Platebody": "青铜板甲衣",
            "Bronze Treads": "青铜战靴",
            "Cave Relic": "洞穴圣物",
            "Colossus Heart": "巨像之心",
            "Colossus Plate": "巨像板甲",
            "Corrupt Bar": "腐化锭",
            "Corrupt Blackjack": "腐化棍",
            "Corrupt Cloak": "腐化披风",
            "Corrupt Cuirass": "腐化胸甲",
            "Corrupt Gauntlets": "腐化护手",
            "Corrupt Greaves": "腐化腿甲",
            "Corrupt Harpoon": "腐化鱼叉",
            "Corrupt Hatchet": "腐化斧",
            "Corrupt Helm": "腐化头盔",
            "Corrupt Kiteshield": "腐化风筝盾",
            "Corrupt Longsword": "腐化长剑",
            "Corrupt Pickaxe": "腐化镐",
            "Corrupt Treads": "腐化战靴",
            "Drake Core": "龙核",
            "Drake Platebody": "龙鳞板甲衣",
            "Drake Scale": "龙鳞",
            "Ember Blade": "余烬利刃",
            "Ember Core": "余烬核心",
            "Etherment Bar": "以太锭",
            "Etherment Blackjack": "以太棍",
            "Etherment Cloak": "以太披风",
            "Etherment Cuirass": "以太胸甲",
            "Etherment Gauntlets": "以太护手",
            "Etherment Greaves": "以太腿甲",
            "Etherment Harpoon": "以太鱼叉",
            "Etherment Hatchet": "以太斧",
            "Etherment Helm": "以太头盔",
            "Etherment Kiteshield": "以太风筝盾",
            "Etherment Longsword": "以太长剑",
            "Etherment Pickaxe": "以太镐",
            "Etherment Treads": "以太战靴",
            "Fae Bow": "妖精弓",
            "Fey Wing": "妖精之翼",
            "Gold Bar": "金锭",
            "Gold Blackjack": "金棍",
            "Gold Harpoon": "金鱼叉",
            "Gold Hatchet": "金斧",
            "Gold Pickaxe": "金镐",
            "Granite Core": "花岗岩核心",
            "Granite Shield": "花岗岩盾",
            "Grave Cloak": "墓穴披风",
            "Grave Dust": "墓尘",
            "Hoarder Coin": "囤积者硬币",
            "Hoarder Crown": "囤积者王冠",
            "Holy Dust": "圣洁之尘",
            "Iron Bar": "铁锭",
            "Iron Blackjack": "铁棍",
            "Iron Cloak": "铁披风",
            "Iron Cuirass": "铁胸甲",
            "Iron Gauntlets": "铁护手",
            "Iron Greaves": "铁腿甲",
            "Iron Harpoon": "铁鱼叉",
            "Iron Hatchet": "铁斧",
            "Iron Helm": "铁头盔",
            "Iron Helmet": "铁头盔",
            "Iron Kiteshield": "铁风筝盾",
            "Iron Longsword": "铁长剑",
            "Iron Sword": "铁剑",
            "Iron Treads": "铁战靴",
            "Leviathan Scepter": "利维坦权杖",
            "Material": "材料",
            "Mithril Bar": "秘银锭",
            "Mithril Blackjack": "秘银棍",
            "Mithril Harpoon": "秘银鱼叉",
            "Mithril Hatchet": "秘银斧",
            "Mithril Pickaxe": "秘银镐",
            "Mystic Bar": "神秘锭",
            "Mystic Blackjack": "神秘棍",
            "Mystic Cloak": "神秘披风",
            "Mystic Cuirass": "神秘胸甲",
            "Mystic Gauntlets": "神秘护手",
            "Mystic Greaves": "神秘腿甲",
            "Mystic Harpoon": "神秘鱼叉",
            "Mystic Hatchet": "神秘斧",
            "Mystic Helm": "神秘头盔",
            "Mystic Kiteshield": "神秘风筝盾",
            "Mystic Logs": "神秘原木",
            "Mystic Longsword": "神秘长剑",
            "Mystic Pickaxe": "神秘镐",
            "Mystic Treads": "神秘战靴",
            "Oak Logs": "橡木原木",
            "Poly Logs": "聚合原木",
            "Polyment Bar": "聚合锭",
            "Polyment Blackjack": "聚合棍",
            "Polyment Cloak": "聚合披风",
            "Polyment Cuirass": "聚合胸甲",
            "Polyment Gauntlets": "聚合护手",
            "Polyment Greaves": "聚合腿甲",
            "Polyment Harpoon": "聚合鱼叉",
            "Polyment Hatchet": "聚合斧",
            "Polyment Helm": "聚合头盔",
            "Polyment Kiteshield": "聚合风筝盾",
            "Polyment Longsword": "聚合长剑",
            "Polyment Pickaxe": "聚合镐",
            "Polyment Treads": "聚合战靴",
            "Prism Boots": "棱镜战靴",
            "Prism Shard": "棱镜碎片",
            "Rekt Bar": "残毁锭",
            "Relics": "圣物",
            "Royal Greaves": "王室腿甲",
            "Royal Seal": "王室印章",
            "Seraph Gauntlets": "炽天使护手",
            "Seraph Plume": "炽天使翎羽",
            "Silver Bar": "银锭",
            "Smelt bars and forge gear.": "熔炼锭并锻造装备。",
            "Steel Bar": "钢锭",
            "Steel Blackjack": "钢棍",
            "Steel Cloak": "钢披风",
            "Steel Cuirass": "钢胸甲",
            "Steel Gauntlets": "钢护手",
            "Steel Greaves": "钢腿甲",
            "Steel Harpoon": "钢鱼叉",
            "Steel Hatchet": "钢斧",
            "Steel Helm": "钢头盔",
            "Steel Kiteshield": "钢风筝盾",
            "Steel Longsword": "钢长剑",
            "Steel Pickaxe": "钢镐",
            "Steel Platebody": "钢板甲衣",
            "Steel Sword": "钢剑",
            "Steel Treads": "钢战靴",
            "Tide Amulet": "潮汐护符",
            "Tide Charm": "潮汐符咒",
            "Tide Pearl": "潮汐珍珠",
            "Tools": "工具",
            "Weapons": "武器",
            "Anglerfish": "鮟鱇鱼",
            "Blighted Anglerfish": "枯萎鮟鱇鱼",
            "Blighted Shark": "枯萎鲨鱼",
            "Blood Carp": "鲜血鲤鱼",
            "Bronze Harpoon": "青铜鱼叉",
            "Catfish": "鲶鱼",
            "Dark Crab": "暗黑蟹",
            "Demonfish": "恶魔鱼",
            "Dragonet": "小龙鱼",
            "Etherfish": "以太鱼",
            "Gracefish": "恩典鱼",
            "Haul fish from the tide.": "从潮水中拖网捕鱼。",
            "Leech": "水蛭",
            "Lobster": "龙虾",
            "Magickarp": "魔法鲤鱼",
            "Mullet": "鲻鱼",
            "Mystozop": "神秘佐普鱼",
            "Polycrab": "聚合蟹",
            "Polyfish": "聚合鱼",
            "Pupfish": "幼鱼",
            "Raw Anglerfish": "生鮟鱇鱼",
            "Raw Blighted Anglerfish": "生枯萎鮟鱇鱼",
            "Raw Blighted Shark": "生枯萎鲨鱼",
            "Raw Blood Carp": "生鲜血鲤鱼",
            "Raw Catfish": "生鲶鱼",
            "Raw Dark Crab": "生暗黑蟹",
            "Raw Demonfish": "生恶魔鱼",
            "Raw Dragonet": "生小龙鱼",
            "Raw Etherfish": "生以太鱼",
            "Raw Gracefish": "生恩典鱼",
            "Raw Leech": "生水蛭",
            "Raw Lobster": "生龙虾",
            "Raw Magickarp": "生魔法鲤鱼",
            "Raw Mullet": "生鲻鱼",
            "Raw Mystozop": "生神秘佐普鱼",
            "Raw Polycrab": "生聚合蟹",
            "Raw Polyfish": "生聚合鱼",
            "Raw Pupfish": "生幼鱼",
            "Raw Rugfish": "生地毯鱼",
            "Raw Sailfish": "生旗鱼",
            "Raw Salmon": "生鲑鱼",
            "Raw Seaweed": "生海藻",
            "Raw Shark": "生鲨鱼",
            "Raw Shrimp": "生虾",
            "Raw Skullcrab": "生骷髅蟹",
            "Raw Swordfish": "生剑鱼",
            "Raw Trout": "生鳟鱼",
            "Raw Tuna": "生金枪鱼",
            "Raw Yaqui Chub": "生雅基胖鱼",
            "Rugfish": "地毯鱼",
            "Sailfish": "旗鱼",
            "Salmon": "鲑鱼",
            "Seaweed": "海藻",
            "Shark": "鲨鱼",
            "Shrimp": "虾",
            "Skullcrab": "骷髅蟹",
            "Swordfish": "剑鱼",
            "Trout": "鳟鱼",
            "Tuna": "金枪鱼",
            "Waters": "水域",
            "Yaqui Chub": "雅基胖鱼",
            "Baked Potato": "烤土豆",
            "Barley": "大麦",
            "Bread": "面包",
            "Cook Anglerfish": "烹饪鮟鱇鱼",
            "Cook Blighted Anglerfish": "烹饪枯萎鮟鱇鱼",
            "Cook Blighted Shark": "烹饪枯萎鲨鱼",
            "Cook Blood Carp": "烹饪鲜血鲤鱼",
            "Cook Catfish": "烹饪鲶鱼",
            "Cook Dark Crab": "烹饪暗黑蟹",
            "Cook Demonfish": "烹饪恶魔鱼",
            "Cook Dragonet": "烹饪小龙鱼",
            "Cook Etherfish": "烹饪以太鱼",
            "Cook Gracefish": "烹饪恩典鱼",
            "Cook Leech": "烹饪水蛭",
            "Cook Lobster": "烹饪龙虾",
            "Cook Magickarp": "烹饪魔法鲤鱼",
            "Cook Mullet": "烹饪鲻鱼",
            "Cook Mystozop": "烹饪神秘佐普鱼",
            "Cook Polycrab": "烹饪聚合蟹",
            "Cook Polyfish": "烹饪聚合鱼",
            "Cook Pupfish": "烹饪幼鱼",
            "Cook Rugfish": "烹饪地毯鱼",
            "Cook Sailfish": "烹饪旗鱼",
            "Cook Salmon": "烹饪鲑鱼",
            "Cook Seaweed": "烹饪海藻",
            "Cook Shark": "烹饪鲨鱼",
            "Cook Shrimp": "烹饪虾",
            "Cook Skullcrab": "烹饪骷髅蟹",
            "Cook Swordfish": "烹饪剑鱼",
            "Cook Trout": "烹饪鳟鱼",
            "Cook Tuna": "烹饪金枪鱼",
            "Cook Yaqui Chub": "烹饪雅基胖鱼",
            "Cook raw fish into food.": "将生鱼烹饪为食物。",
            "Field Fare": "田间便餐",
            "Food": "食物",
            "Hearty Stew": "丰盛炖菜",
            "Potato": "土豆",
            "Pumpkin": "南瓜",
            "Pumpkin Pie": "南瓜派",
            "Wheat": "小麦",
            "Restart": "重新开始",
            "Stop": "停止",
            "Arctic Logs": "极地原木",
            "Barren Logs": "荒芜原木",
            "Blood Logs": "鲜血原木",
            "Bronze Hatchet": "青铜斧",
            "Cedar Logs": "雪松原木",
            "Ember Logs": "余烬原木",
            "Ether Logs": "以太原木",
            "Fell trees for logs.": "砍树伐木。",
            "Ironroot": "铁根木",
            "Logs": "原木",
            "Magic Logs": "魔法原木",
            "Maple Logs": "枫木原木",
            "Obsidian Logs": "黑曜原木",
            "Rekt Logs": "残毁原木",
            "Trees": "树木",
            "Willow Logs": "柳木原木",
            "Arrows": "箭矢",
            "Barren Bow": "荒芜弓",
            "Blessed Silver Arrows": "祝福银箭矢",
            "Blood Arrows": "鲜血箭矢",
            "Blood Bow": "鲜血弓",
            "Bows": "弓",
            "Carve logs into bows and arrows.": "将原木雕琢为弓和箭。",
            "Ether Bow": "以太弓",
            "Iron Arrows": "铁箭矢",
            "Magic Bow": "魔法弓",
            "Maple Bow": "枫木弓",
            "Mithril Arrows": "秘银箭矢",
            "Mystic Arrows": "神秘箭矢",
            "Mystic Bow": "神秘弓",
            "Oak Bow": "橡木弓",
            "Obsidian Bow": "黑曜弓",
            "Poly Bow": "聚合弓",
            "Polyment Arrows": "聚合箭矢",
            "Rekt Arrows": "残毁箭矢",
            "Shortbow": "短弓",
            "Steel Arrows": "钢箭矢",
            "140/h": "140/小时",
            "Arctic Ash": "极地灰烬",
            "Ash": "灰烬",
            "Barren Ash": "荒芜灰烬",
            "Blood Ash": "鲜血灰烬",
            "Bonfire": "篝火",
            "Burn Arctic Logs": "燃烧极地原木",
            "Burn Barren Logs": "燃烧荒芜原木",
            "Burn Blood Logs": "燃烧鲜血原木",
            "Burn Cedar Logs": "燃烧雪松原木",
            "Burn Ember Logs": "燃烧余烬原木",
            "Burn Ether Logs": "燃烧以太原木",
            "Burn Ironroot": "燃烧铁根木",
            "Burn Logs": "燃烧原木",
            "Burn Magic Logs": "燃烧魔法原木",
            "Burn Maple Logs": "燃烧枫木原木",
            "Burn Mystic Logs": "燃烧神秘原木",
            "Burn Oak Logs": "燃烧橡木原木",
            "Burn Obsidian Logs": "燃烧黑曜原木",
            "Burn Poly Logs": "燃烧聚合原木",
            "Burn Rekt Logs": "燃烧残毁原木",
            "Burn Willow Logs": "燃烧柳木原木",
            "Burn logs for warmth and ash.": "燃烧原木获取温暖和灰烬。",
            "Cedar Ash": "雪松灰烬",
            "Ember Ash": "余烬灰烬",
            "Ether Ash": "以太灰烬",
            "Ironroot Ash": "铁根灰烬",
            "Magic Ash": "魔法灰烬",
            "Maple Ash": "枫木灰烬",
            "Mystic Ash": "神秘灰烬",
            "Oak Ash": "橡木灰烬",
            "Obsidian Ash": "黑曜灰烬",
            "Poly Ash": "聚合灰烬",
            "Rekt Ash": "残毁灰烬",
            "Willow Ash": "柳木灰烬",
            "Air Rune": "空气符文",
            "Barley Seed": "大麦种子",
            "Barren Herb Seed": "荒芜草药种子",
            "Blood Herb Seed": "鲜血草药种子",
            "Bronze Blackjack": "青铜棍",
            "Coins": "金币",
            "Common Box": "普通箱子",
            "Crack Ascended Vault": "撬开升华金库",
            "Crack Blood Vault": "撬开鲜血金库",
            "Crack Coin Chest": "撬开钱币箱",
            "Crack Court Strongbox": "撬开宫廷保险箱",
            "Crack Market Lockbox": "撬开市场储物箱",
            "Crack Royal Vault": "撬开王室金库",
            "Earth Rune": "大地符文",
            "Farmers": "农夫",
            "Fire Rune": "火焰符文",
            "Funky Herb Seed": "奇异草药种子",
            "Goen Herb Seed": "戈恩草药种子",
            "Grass Herb Seed": "草草药种子",
            "Lilly Herb Seed": "百合草药种子",
            "Loot Archery Stall": "洗劫箭术摊位",
            "Loot Armoury Stall": "洗劫军械摊位",
            "Loot Blood Stall": "洗劫鲜血摊位",
            "Loot General Stall": "洗劫杂货摊位",
            "Loot Mage Stall": "洗劫法师摊位",
            "Loot Rune Stall": "洗劫符文摊位",
            "Loot War Camp Stall": "洗劫军营摊位",
            "Mystic Herb Seed": "神秘草药种子",
            "Opeth Herb Seed": "奥佩思草药种子",
            "Pickpocket Ascended Envoy": "扒窃升华使者",
            "Pickpocket Blood Courtier": "扒窃鲜血朝臣",
            "Pickpocket Citizen": "扒窃市民",
            "Pickpocket Farmhand": "扒窃农夫",
            "Pickpocket Guard": "扒窃守卫",
            "Pickpocket King": "扒窃国王",
            "Pickpocket Knight": "扒窃骑士",
            "Pickpocket Mage": "扒窃法师",
            "Pickpocket Merchant": "扒窃商人",
            "Pickpocket Noble": "扒窃贵族",
            "Pickpocket Warlord": "扒窃军阀",
            "Pickpocket coin from the wary.": "从警惕者身上扒窃金币。",
            "Pickpockets": "扒手",
            "Poly Herb Seed": "聚合草药种子",
            "Potato Seed": "土豆种子",
            "Pumpkin Seed": "南瓜种子",
            "Rare Box": "稀有箱子",
            "Rob Barren Gardener": "抢劫荒芜园丁",
            "Rob Blood Gardener": "抢劫鲜血园丁",
            "Rob Farmer": "抢劫农夫",
            "Rob Herbalist": "抢劫草药师",
            "Rob Master Farmer": "抢劫大师农夫",
            "Rob Mystic Gardener": "抢劫神秘园丁",
            "Rob Seed Merchant": "抢劫种子商人",
            "Rune Essence": "符文精华",
            "Sage Herb Seed": "贤者草药种子",
            "Seeds": "种子",
            "Stalls": "摊位",
            "Sticky Herb Seed": "粘性草药种子",
            "Stolen Relic": "被盗圣物",
            "Stolen Silk": "被盗丝绸",
            "Stolen Trinket": "被盗饰品",
            "Strongboxes": "保险箱",
            "Vaults": "金库",
            "Water Rune": "水流符文",
            "Wheat Seed": "小麦种子",
            "Ascension Causeway": "升华堤道",
            "Astral Rooftops": "星辰屋顶",
            "Barren Mirage Run": "荒芜幻影之路",
            "Bloodglass Run": "血玻璃之路",
            "Donald's Escape Route": "唐纳德逃生路线",
            "Emberfall Cinder Run": "余烬落尘之路",
            "Endgame routes": "终局路线",
            "Ethereal Catwalks": "虚幻步道",
            "Graceville Wallrun": "恩典城壁走",
            "Hazard Runs": "危险路段",
            "Highlands Ridge Run": "高地山脊之路",
            "Lumby Rooftops": "鲁姆比屋顶",
            "Mark of Grace": "恩典印记",
            "Master Routes": "大师路线",
            "Mountstone Scree Run": "山石碎石之路",
            "Mountstone Traverse": "山石穿越",
            "Mystic Canopy": "神秘天篷",
            "Polyzeal Prism Vault": "聚合棱镜宝库",
            "Risk runs": "风险跑酷",
            "Rooftops": "屋顶跑酷",
            "Royal Battlements": "王室城垛",
            "Run courses for grace and stamina.": "跑酷获取恩典和体力。",
            "Safe laps": "安全圈",
            "Stamina Shard": "耐力碎片",
            "Underworld Chain Run": "冥界锁链之路",
            "clear 92%": "完成92%",
            "Altar": "祭坛",
            "Bind essence into runes.": "将精华绑定为符文。",
            "Runes": "符文",
            "Abyssal Bulwark Gauntlets": "深渊壁垒护手",
            "Abyssal Bulwark Greaves": "深渊壁垒腿甲",
            "Abyssal Bulwark Harpoon": "深渊壁垒鱼叉",
            "Abyssal Bulwark Helm": "深渊壁垒头盔",
            "Abyssal Bulwark Plate": "深渊壁垒板甲",
            "Abyssal Bulwark Treads": "深渊壁垒战靴",
            "Apprentice Robe Boots": "学徒长袍靴",
            "Apprentice Robe Bottom": "学徒长袍裤",
            "Apprentice Robe Cape": "学徒长袍披肩",
            "Apprentice Robe Gloves": "学徒长袍手套",
            "Apprentice Robe Hat": "学徒长袍帽",
            "Apprentice Robe Top": "学徒长袍衣",
            "Arcane Cloth": "奥术布料",
            "Arcane Robe Boots": "奥术长袍靴",
            "Arcane Robe Bottom": "奥术长袍裤",
            "Arcane Robe Cape": "奥术长袍披肩",
            "Arcane Robe Gloves": "奥术长袍手套",
            "Arcane Robe Hat": "奥术长袍帽",
            "Arcane Robe Top": "奥术长袍衣",
            "Ascended Leather Body": "升华皮衣",
            "Ascended Leather Boots": "升华皮靴",
            "Ascended Leather Cape": "升华皮披风",
            "Ascended Leather Chaps": "升华皮护腿",
            "Ascended Leather Coif": "升华皮头巾",
            "Ascended Leather Vambraces": "升华皮护臂",
            "Ascended Shell": "升华甲壳",
            "Astral Cloth": "星辰布料",
            "Astral Robe Boots": "星辰长袍靴",
            "Astral Robe Bottom": "星辰长袍裤",
            "Astral Robe Cape": "星辰长袍披肩",
            "Astral Robe Gloves": "星辰长袍手套",
            "Astral Robe Hat": "星辰长袍帽",
            "Astral Robe Top": "星辰长袍衣",
            "Awakened Deep Shard": "觉醒深渊碎片",
            "Barren Battlestaff": "荒芜战斗法杖",
            "Blood Battlestaff": "鲜血战斗法杖",
            "Blood Cloth": "鲜血布料",
            "Blood Robe Boots": "鲜血长袍靴",
            "Blood Robe Bottom": "鲜血长袍裤",
            "Blood Robe Cape": "鲜血长袍披肩",
            "Blood Robe Gloves": "鲜血长袍手套",
            "Blood Robe Hat": "鲜血长袍帽",
            "Blood Robe Top": "鲜血长袍衣",
            "Blood Totem": "鲜血图腾",
            "Blue Partyhat": "蓝色派对帽",
            "Blue Partyhat Shard": "蓝色派对帽碎片",
            "Brim Totem": "硫磺图腾",
            "Broken Log Totem": "断木图腾",
            "Bronze Battlestaff": "青铜战斗法杖",
            "Carve totems from logs and bars.": "用原木和锭雕刻图腾。",
            "Charred Cloth": "焦炭布料",
            "Charred Robe Boots": "焦炭长袍靴",
            "Charred Robe Bottom": "焦炭长袍裤",
            "Charred Robe Cape": "焦炭长袍披肩",
            "Charred Robe Gloves": "焦炭长袍手套",
            "Charred Robe Hat": "焦炭长袍帽",
            "Charred Robe Top": "焦炭长袍衣",
            "Contraband Tools": "违禁工具",
            "Corrupt Battlestaff": "腐化战斗法杖",
            "Corrupted Totem": "腐化图腾",
            "Cowhide": "牛皮",
            "Crab Leather Body": "蟹皮衣",
            "Crab Leather Boots": "蟹皮靴",
            "Crab Leather Cape": "蟹皮披风",
            "Crab Leather Chaps": "蟹皮护腿",
            "Crab Leather Coif": "蟹皮头巾",
            "Crab Leather Vambraces": "蟹皮护臂",
            "Crab Shell": "蟹壳",
            "Crude Gold Totem": "粗糙金图腾",
            "Crude Iron Totem": "粗糙铁图腾",
            "Cut Diamond": "切割钻石",
            "Cut Emerald": "切割绿宝石",
            "Cut Ruby": "切割红宝石",
            "Cut Sapphire": "切割蓝宝石",
            "Dark Cloth": "黑暗布料",
            "Dark Robe Boots": "黑暗长袍靴",
            "Dark Robe Bottom": "黑暗长袍裤",
            "Dark Robe Cape": "黑暗长袍披肩",
            "Dark Robe Gloves": "黑暗长袍手套",
            "Dark Robe Hat": "黑暗长袍帽",
            "Dark Robe Top": "黑暗长袍衣",
            "Deepwatch Stalker Arbalest": "深渊守望追猎者弩",
            "Deepwatch Stalker Chaps": "深渊守望追猎者护腿",
            "Deepwatch Stalker Coif": "深渊守望追猎者头巾",
            "Deepwatch Stalker Grips": "深渊守望追猎者手套",
            "Deepwatch Stalker Jerkin": "深渊守望追猎者皮衣",
            "Deepwatch Stalker Striders": "深渊守望追猎者长靴",
            "Demon Hide": "恶魔兽皮",
            "Demon Leather Body": "恶魔皮衣",
            "Demon Leather Boots": "恶魔皮靴",
            "Demon Leather Cape": "恶魔皮披风",
            "Demon Leather Chaps": "恶魔皮护腿",
            "Demon Leather Coif": "恶魔皮头巾",
            "Demon Leather Vambraces": "恶魔皮护臂",
            "Diamond": "钻石",
            "Diamond Amulet": "钻石护符",
            "Dreamtide Cowl": "梦潮头罩",
            "Dreamtide Gloves": "梦潮手套",
            "Dreamtide Robes": "梦潮长袍",
            "Dreamtide Scepter": "梦潮权杖",
            "Dreamtide Slippers": "梦潮便鞋",
            "Dreamtide Wraps": "梦潮裹手",
            "Dummy Totem": "假人图腾",
            "Emerald": "绿宝石",
            "Emerald Amulet": "绿宝石护符",
            "Etherment Battlestaff": "以太战斗法杖",
            "Fence Ring": "销赃指环",
            "Gold Amulet": "金护符",
            "Gold Ring": "金戒指",
            "Green Partyhat": "绿色派对帽",
            "Green Partyhat Shard": "绿色派对帽碎片",
            "Hard Leather Body": "硬皮革衣",
            "Hard Leather Boots": "硬皮革靴",
            "Hard Leather Cape": "硬皮革披风",
            "Hard Leather Chaps": "硬皮革护腿",
            "Hard Leather Coif": "硬皮革头巾",
            "Hard Leather Vambraces": "硬皮革护臂",
            "Holy Symbol": "圣洁符纹",
            "Infernal Cloth": "地狱布料",
            "Infernal Robe Boots": "地狱长袍靴",
            "Infernal Robe Bottom": "地狱长袍裤",
            "Infernal Robe Cape": "地狱长袍披肩",
            "Infernal Robe Gloves": "地狱长袍手套",
            "Infernal Robe Hat": "地狱长袍帽",
            "Infernal Robe Top": "地狱长袍衣",
            "Iron Battlestaff": "铁战斗法杖",
            "Jeweled Blackjack": "宝石棍",
            "Jewellery": "珠宝",
            "Leather Body": "皮革衣",
            "Leather Boots": "皮革靴",
            "Leather Cape": "皮革披风",
            "Leather Chaps": "皮革护腿",
            "Leather Coif": "皮革头巾",
            "Leather Vambraces": "皮革护臂",
            "Maple Totem": "枫木图腾",
            "Mystic Battlestaff": "神秘战斗法杖",
            "Mystic Totem": "神秘图腾",
            "Nightpiercer Arbalest": "夜刺弩",
            "Nightpiercer Chaps": "夜刺护腿",
            "Nightpiercer Coif": "夜刺头巾",
            "Nightpiercer Grips": "夜刺手套",
            "Nightpiercer Jerkin": "夜刺皮衣",
            "Nightpiercer Striders": "夜刺长靴",
            "Oneiric Oracle Cowl": "梦幻神谕头罩",
            "Oneiric Oracle Gloves": "梦幻神谕手套",
            "Oneiric Oracle Robes": "梦幻神谕长袍",
            "Oneiric Oracle Scepter": "梦幻神谕权杖",
            "Oneiric Oracle Slippers": "梦幻神谕便鞋",
            "Oneiric Oracle Wraps": "梦幻神谕裹手",
            "Partyhats": "派对帽",
            "Pearl Totem": "珍珠图腾",
            "Phoenix Totem": "凤凰图腾",
            "Pink Partyhat": "粉色派对帽",
            "Pink Partyhat Shard": "粉色派对帽碎片",
            "Plain Cloth": "素布",
            "Poly Cloth": "聚合布料",
            "Poly Hide": "聚合兽皮",
            "Poly Leather Body": "聚合皮衣",
            "Poly Leather Boots": "聚合皮靴",
            "Poly Leather Cape": "聚合皮披风",
            "Poly Leather Chaps": "聚合皮护腿",
            "Poly Leather Coif": "聚合皮头巾",
            "Poly Leather Vambraces": "聚合皮护臂",
            "Poly Robe Boots": "聚合长袍靴",
            "Poly Robe Bottom": "聚合长袍裤",
            "Poly Robe Cape": "聚合长袍披肩",
            "Poly Robe Gloves": "聚合长袍手套",
            "Poly Robe Hat": "聚合长袍帽",
            "Poly Robe Top": "聚合长袍衣",
            "Polyment Battlestaff": "聚合战斗法杖",
            "Potto Hide": "波多兽皮",
            "Potto Leather Body": "波多皮衣",
            "Potto Leather Boots": "波多皮靴",
            "Potto Leather Cape": "波多皮披风",
            "Potto Leather Chaps": "波多皮护腿",
            "Potto Leather Coif": "波多皮头巾",
            "Potto Leather Vambraces": "波多皮护臂",
            "Rainbow Partyhat": "彩虹派对帽",
            "Red Partyhat": "红色派对帽",
            "Red Partyhat Shard": "红色派对帽碎片",
            "Reefguard Gauntlets": "暗礁守卫护手",
            "Reefguard Greaves": "暗礁守卫腿甲",
            "Reefguard Harpoon": "暗礁守卫鱼叉",
            "Reefguard Helm": "暗礁守卫头盔",
            "Reefguard Plate": "暗礁守卫板甲",
            "Reefguard Treads": "暗礁守卫战靴",
            "Relic Lockpick": "圣物撬锁器",
            "Ruby": "红宝石",
            "Ruby Ring": "红宝石戒指",
            "Sacred Mithril Totem": "神圣秘银图腾",
            "Sapphire": "蓝宝石",
            "Sapphire Ring": "蓝宝石戒指",
            "Screaming Totem": "尖啸图腾",
            "Shadow Hide": "暗影兽皮",
            "Shadow Leather Body": "暗影皮衣",
            "Shadow Leather Boots": "暗影皮靴",
            "Shadow Leather Cape": "暗影皮披风",
            "Shadow Leather Chaps": "暗影皮护腿",
            "Shadow Leather Coif": "暗影皮头巾",
            "Shadow Leather Vambraces": "暗影皮护臂",
            "Silver Amulet": "银护符",
            "Silver Ring": "银戒指",
            "Staves": "法杖",
            "Steel Battlestaff": "钢战斗法杖",
            "Terror Chitin": "恐惧甲壳",
            "Terror Chitin Body": "恐惧甲壳衣",
            "Terror Chitin Boots": "恐惧甲壳靴",
            "Terror Chitin Cape": "恐惧甲壳披风",
            "Terror Chitin Chaps": "恐惧甲壳护腿",
            "Terror Chitin Coif": "恐惧甲壳头巾",
            "Terror Chitin Vambraces": "恐惧甲壳护臂",
            "Thief's Charm": "窃贼护符",
            "Totems": "图腾",
            "Void Cloth": "虚空布料",
            "Void Robe Boots": "虚空长袍靴",
            "Void Robe Bottom": "虚空长袍裤",
            "Void Robe Cape": "虚空长袍披肩",
            "Void Robe Gloves": "虚空长袍手套",
            "Void Robe Hat": "虚空长袍帽",
            "Void Robe Top": "虚空长袍衣",
            "Waking Deep Shard": "苏醒深渊碎片",
            "Witches Totem": "女巫图腾",
            "Wolf Hide": "狼皮",
            "Yellow Partyhat": "黄色派对帽",
            "Yellow Partyhat Shard": "黄色派对帽碎片",
            "+10 all defence while active.": "激活时+10全防御。",
            "+12 magic accuracy and damage, +1% crit.": "+12魔法精准和伤害，+1%暴击率。",
            "+12 ranged accuracy and damage, +1% dodge.": "+12远程精准和伤害，+1%闪避。",
            "+14 magic accuracy and damage, +12 defence, +1% crit.": "+14魔法精准和伤害，+12防御，+1%暴击率。",
            "+14 melee accuracy and damage, +12 defence, +1% crit.": "+14近战精准和伤害，+12防御，+1%暴击率。",
            "+14 ranged accuracy and damage, +10 defence, +1% dodge.": "+14远程精准和伤害，+10防御，+1%闪避。",
            "+4 magic accuracy and damage while active.": "激活时+4魔法精准和伤害。",
            "+4 melee damage while active.": "激活时+4近战伤害。",
            "+4 ranged accuracy and damage while active.": "激活时+4远程精准和伤害。",
            "+6 all defence while active.": "激活时+6全防御。",
            "+8 magic accuracy and damage while active.": "激活时+8魔法精准和伤害。",
            "+8 melee accuracy, damage, and defence.": "+8近战精准、伤害和防御。",
            "+8 melee damage while active.": "激活时+8近战伤害。",
            "+8 ranged accuracy and damage while active.": "激活时+8远程精准和伤害。",
            "Ancient Bones": "古代骨头",
            "Ascended Bones": "升华骨头",
            "Ashes": "灰烬",
            "Augury": "预言",
            "Big Bones": "大骨头",
            "Blood Bones": "鲜血骨头",
            "Bones": "骨头",
            "Boost": "增益",
            "Burst of Strength": "力量爆发",
            "Bury Ancient Bones": "埋葬古代骨头",
            "Bury Ascended Bones": "埋葬升华骨头",
            "Bury Big Bones": "埋葬大骨头",
            "Bury Blood Bones": "埋葬鲜血骨头",
            "Bury Bones": "埋葬骨头",
            "Bury Demon Bones": "埋葬恶魔骨头",
            "Bury Dragon Bones": "埋葬龙骨",
            "Bury Royal Bones": "埋葬王室骨头",
            "Chivalry": "骑士精神",
            "Consecrate Ascended Bones": "祝圣升华骨头",
            "Consecrate Blood Bones": "祝圣鲜血骨头",
            "Consecrate Dragon Bones": "祝圣龙骨",
            "Consecrate Royal Bones": "祝圣王室骨头",
            "Consecrated": "已祝圣",
            "Demon Bones": "恶魔骨头",
            "Dragon Bones": "龙骨",
            "Eagle Eye": "雄鹰之眼",
            "Hawk Eye": "鹰眼",
            "Kindle Ancient Bones": "点燃古代骨头",
            "Kindle Ascended Bones": "点燃升华骨头",
            "Kindle Big Bones": "点燃大骨头",
            "Kindle Blood Bones": "点燃鲜血骨头",
            "Kindle Bones": "点燃骨头",
            "Kindle Demon Bones": "点燃恶魔骨头",
            "Kindle Dragon Bones": "点燃龙骨",
            "Kindle Royal Bones": "点燃王室骨头",
            "Kindled": "已点燃",
            "Magic Aegis": "魔法护盾",
            "Melee Aegis": "近战护盾",
            "Mystic Lore": "神秘学识",
            "Mystic Might": "神秘力量",
            "Mystic Will": "神秘意志",
            "Offer bones and ashes to raise Prayer. Unlocked prayers are activated during a fight on the Combat tab.": "献上骨头和灰烬以提升祈祷。已解锁的祈祷在战斗时可在战斗标签页激活。",
            "Offer bones for quiet combat protection.": "献上骨头以获得静默的战斗保护。",
            "Offerings": "祭品",
            "Piety": "虔诚",
            "Prayers": "祈祷",
            "Protect from Magic": "防护魔法",
            "Protect from Melee": "防护近战",
            "Protect from Ranged": "防护远程",
            "Ranged Aegis": "远程护盾",
            "Rigour": "严酷",
            "Royal Bones": "王室骨头",
            "Scatter Arctic Ash": "散播极地灰烬",
            "Scatter Barren Ash": "散播荒芜灰烬",
            "Scatter Blood Ash": "散播鲜血灰烬",
            "Scatter Cedar Ash": "散播雪松灰烬",
            "Scatter Ember Ash": "散播余烬灰烬",
            "Scatter Ether Ash": "散播以太灰烬",
            "Scatter Ironroot Ash": "散播铁根灰烬",
            "Scatter Magic Ash": "散播魔法灰烬",
            "Scatter Maple Ash": "散播枫木灰烬",
            "Scatter Mystic Ash": "散播神秘灰烬",
            "Scatter Oak Ash": "散播橡木灰烬",
            "Scatter Obsidian Ash": "散播黑曜灰烬",
            "Scatter Poly Ash": "散播聚合灰烬",
            "Scatter Rekt Ash": "散播残毁灰烬",
            "Scatter Willow Ash": "散播柳木灰烬",
            "Sharp Eye": "锐利之眼",
            "Steel Skin": "钢铁皮肤",
            "Stone Skin": "石头皮肤",
            "Superhuman Strength": "超人力量",
            "Unlocked": "已解锁",
            "Use": "使用",
            "Barren Herb": "荒芜草药",
            "Barren Potion": "荒芜药剂",
            "Blood Herb": "鲜血草药",
            "Blood Potion": "鲜血药剂",
            "Brew herbs into combat potions.": "用草药酿造战斗药剂。",
            "Funky Herb": "奇异草药",
            "Funky Potion": "奇异药剂",
            "Goen Herb": "戈恩草药",
            "Goen Potion": "戈恩药剂",
            "Grass Herb": "草草药",
            "Grass Potion": "草草药剂",
            "Lilly Herb": "百合草药",
            "Lilly Potion": "百合药剂",
            "Mystic Herb": "神秘草药",
            "Mystic Potion": "神秘药剂",
            "Opeth Herb": "奥佩思草药",
            "Opeth Potion": "奥佩思药剂",
            "Poly Herb": "聚合草药",
            "Poly Potion": "聚合药剂",
            "Potions": "药剂",
            "Sage Herb": "贤者草药",
            "Sage Potion": "贤者药剂",
            "Sticky Herb": "粘性草药",
            "Sticky Potion": "粘性药剂",
            "Weapon Poison": "武器毒药",
            "Armoury": "军械库",
            "Attack Roll (": "攻击掷骰（",
            "Blackjack": "棍",
            "Body": "衣",
            "Boots": "靴",
            "Cape": "披风",
            "Charm": "符咒",
            "Crit": "暴击",
            "Defence Roll": "防御掷骰",
            "Dodge": "闪避",
            "Equipped": "已装备",
            "Gloves": "手套",
            "Harpoon": "鱼叉",
            "Hatchet": "斧",
            "Legs": "腿",
            "Loadout": "配装",
            "Magic Defence": "魔法防御",
            "Max Health": "最大生命值",
            "Max Hit (": "最大伤害（",
            "Melee": "近战",
            "Melee Defence": "近战防御",
            "Pickaxe": "镐",
            "Ranged Defence": "远程防御",
            "Tap a slot to see what fits it, then equip from the armoury.": "点击槽位查看可装备物品，然后从军械库中装备。",
            "Unequip": "卸下",
            "Weapon": "武器",
            "Worn Gear": "穿戴装备",
            "+5% success": "+5%成功率",
            "Close": "关闭",
            "Common": "普通",
            "Effects": "效果",
            "Equipped tool adds 5% success": "装备的工具+5%成功率",
            "Free": "免费",
            "Gather +": "采集+",
            "New characters begin with this tool equipped": "新角色初始装备此工具",
            "No direct recipe or activity use listed.": "未列出直接配方或活动用途。",
            "Rarity: ": "稀有度：",
            "Requires": "需要",
            "Requires ": "需要 ",
            "Sources": "来源",
            "Starter kit": "新手装备包",
            "Tool": "工具",
            "Tool bonus": "工具加成",
            "Uses": "用途",
            "Value ": "价值 ",
            "+1 Starter Dagger": "+1 新手匕首",
            "+1 Starter Tunic": "+1 新手外衣",
            "Claimed": "已领取",
            "Hide completed": "隐藏已完成",
            "Account": "账号",
            "Add passkey": "添加通行密钥",
            "Apple": "苹果账号",
            "Change password": "修改密码",
            "Checking...": "正在检查……",
            "Cloud save active across your signed-in devices.": "云存档在已登录的设备间同步。",
            "Current password": "当前密码",
            "Delete account": "删除账号",
            "Google": "谷歌账号",
            "Link": "绑定",
            "Linked accounts": "已绑定账号",
            "Loading passkeys...": "正在加载通行密钥……",
            "Mobile app only": "仅限移动应用",
            "New password": "新密码",
            "No passkeys yet.": "暂无通行密钥。",
            "Not linked": "未绑定",
            "Passkey name": "通行密钥名称",
            "Passkeys": "通行密钥",
            "Permanently deletes your character, inventory, orders, chat, and notifications.": "永久删除你的角色、物品栏、订单、聊天记录和通知。",
            "Push notifications": "推送通知",
            "Push notifications are available in the iOS and Android apps.": "推送通知适用于iOS和Android应用。",
            "Save name": "存档名",
            "Secured": "安全",
            "Sign out": "退出登录",
            "Synced account": "已同步账号",
            "Type DELETE": "输入 DELETE",
            "Enable browser": "启用浏览器通知",
            "Mark read": "标记已读",
            "No unread notifications.": "没有未读通知。",
            "Unread": "未读",
            " Quests ": " 任务 ",
            " Titles": " 头衔",
            " earned": " 获得",
            " to ": " 到 ",
            "Arcane Alchemist": "奥术炼金师",
            "Ash-Tongued": "灰舌者",
            "Battle-Hardened": "身经百战",
            "Behemoth Bane": "巨兽克星",
            "Blood Sanctum Conqueror": "鲜血圣殿征服者",
            "Bone Burier": "埋骨者",
            "Boss Breaker": "破Boss者",
            "Boss Slayer": "Boss屠戮者",
            "Bosses felled": "击败的Boss",
            "Box Opener": "开箱者",
            "Boxes opened": "打开的箱子",
            "Brimstone Forge Conqueror": "硫磺熔炉征服者",
            "Caught Red-Handed": "当场抓获",
            "Chef": "厨师",
            "Chosen by Pets": "宠物选中的",
            "Claim 25 world boss rewards.": "领取25次世界Boss奖励。",
            "Clear Blood Sanctum.": "通关鲜血圣殿。",
            "Clear Brimstone Forge.": "通关硫磺熔炉。",
            "Clear Corruption Pit.": "通关腐化深渊。",
            "Clear Eternal Mountain.": "通关永恒山脉。",
            "Clear Gilded Vault.": "通关镀金宝库。",
            "Clear Goblin Cave.": "通关哥布林洞穴。",
            "Clear Mithril Sanctum.": "通关秘银圣殿。",
            "Clear Mystic Spire.": "通关神秘尖塔。",
            "Clear Phoenix Roost.": "通关凤凰巢穴。",
            "Clear Sunken Archive.": "通关沉没档案馆。",
            "Clear The Waking Deep on Easy Mode.": "在简单模式下通关觉醒深渊。",
            "Clear The Waking Deep on Hard Mode 10 times.": "在困难模式下通关觉醒深渊10次。",
            "Clear The Waking Deep on Hard Mode.": "在困难模式下通关觉醒深渊。",
            "Clear Wailing Crypt.": "通关哀嚎地穴。",
            "Clear Whispering Grove.": "通关低语密林。",
            "Clear Witch's Coven.": "通关女巫集会。",
            "Clear every dungeon.": "通关所有地牢。",
            "Companion Keeper": "伙伴守护者",
            "Corruption Pit Conqueror": "腐化深渊征服者",
            "Crop Lord": "庄稼领主",
            "Crypt Raider": "地穴掠夺者",
            "Deep Delver": "深渊探索者",
            "Deep Waker": "深渊唤醒者",
            "Degenerate": "堕落者",
            "Delver": "探索者",
            "Dice profit (gold)": "骰子利润（金币）",
            "Dream-Touched": "梦境触及者",
            "Dungeon Conquests": "地牢征服",
            "Dungeon Delver": "地牢探索者",
            "Dungeon Master": "地牢大师",
            "Dungeon clears": "地牢通关数",
            "Dungeons": "地牢",
            "Earn titles at level 99 and 120 in each skill and by clearing dungeons. Click an earned title to wear it next to your name in chat, leaderboards, and parties.": "通过每项技能达到99级和120级以及通关地牢来获得头衔。点击已获得的头衔可将其佩戴在名字旁，在聊天、排行榜和队伍中显示。",
            "Enchanter": "附魔师",
            "Eternal Grinder": "永恒刷子",
            "Eternal Mountain Conqueror": "永恒山脉征服者",
            "Farm Raider": "农场掠夺者",
            "Forge Master": "锻造大师",
            "Gatherer": "采集者",
            "Gilded Vault Conqueror": "镀金宝库征服者",
            "Goblin Cave Conqueror": "哥布林洞穴征服者",
            "Grace Collector": "恩典收集者",
            "Grace Runner": "恩典跑者",
            "Grandmaster of Agility": "敏捷宗师",
            "Grandmaster of Attack": "攻击宗师",
            "Grandmaster of Cooking": "烹饪宗师",
            "Grandmaster of Crafting": "制作宗师",
            "Grandmaster of Defense": "防御宗师",
            "Grandmaster of Dice Games": "骰子游戏宗师",
            "Grandmaster of Farming": "农业宗师",
            "Grandmaster of Firemaking": "生火宗师",
            "Grandmaster of Fishing": "钓鱼宗师",
            "Grandmaster of Fletching": "制箭宗师",
            "Grandmaster of Herblore": "草药学宗师",
            "Grandmaster of Hitpoints": "生命值宗师",
            "Grandmaster of Magic": "魔法宗师",
            "Grandmaster of Mining": "采矿宗师",
            "Grandmaster of Prayer": "祈祷宗师",
            "Grandmaster of Ranged": "远程宗师",
            "Grandmaster of Runecrafting": "符文制作宗师",
            "Grandmaster of Slayer": "屠戮宗师",
            "Grandmaster of Smithing": "锻造宗师",
            "Grandmaster of Strength": "力量宗师",
            "Grandmaster of Taming": "驯养宗师",
            "Grandmaster of Thieving": "偷窃宗师",
            "Grandmaster of Woodcutting": "伐木宗师",
            "Harvester": "收割者",
            "Hazard Survivor": "危险幸存者",
            "Legendary Reaper": "传奇收割者",
            "Lemcrab Bane": "莱姆蟹克星",
            "Lucky Handler": "幸运操控者",
            "Market Lifter": "市场掠夺者",
            "Master Chef": "烹饪大师",
            "Master Gatherer": "采集大师",
            "Master of Agility": "敏捷大师",
            "Master of Attack": "攻击大师",
            "Master of Cooking": "烹饪大师",
            "Master of Crafting": "制作大师",
            "Master of Defense": "防御大师",
            "Master of Dice Games": "骰子游戏大师",
            "Master of Farming": "农业大师",
            "Master of Firemaking": "生火大师",
            "Master of Fishing": "钓鱼大师",
            "Master of Fletching": "制箭大师",
            "Master of Herblore": "草药学大师",
            "Master of Hitpoints": "生命值大师",
            "Master of Magic": "魔法大师",
            "Master of Mining": "采矿大师",
            "Master of Prayer": "祈祷大师",
            "Master of Ranged": "远程大师",
            "Master of Runecrafting": "符文制作大师",
            "Master of Slayer": "屠戮大师",
            "Master of Smithing": "锻造大师",
            "Master of Strength": "力量大师",
            "Master of Taming": "驯养大师",
            "Master of Thieving": "偷窃大师",
            "Master of Woodcutting": "伐木大师",
            "Meet Sir Shrimpsalot.": "遇见虾多多爵士。",
            "Mithril Sanctum Conqueror": "秘银圣殿征服者",
            "Monsters slain": "击杀的怪物",
            "Mystic Spire Conqueror": "神秘尖塔征服者",
            "Net 10,000,000 gold of profit in dice games (wins minus losses).": "在骰子游戏中净赚10,000,000金币利润（赢减输）。",
            "Overview": "总览",
            "Pathfinder": "探路者",
            "Pet Whisperer": "宠物低语者",
            "Phoenix Roost Conqueror": "凤凰巢穴征服者",
            "Pickpocket": "扒手",
            "Prestige": "声望",
            "Rare Finder": "稀有发现者",
            "Reaper": "收割者",
            "Renown ": "声望 ",
            "Resources gathered": "采集的资源",
            "Roof Runner": "屋顶跑者",
            "Runebinder": "符文绑定者",
            "Skill Mastery": "技能精通",
            "Slayer Veteran": "屠戮老手",
            "Slayer tasks": "屠戮任务",
            "Smith": "铁匠",
            "Smith 10,000 items.": "锻造10,000件物品。",
            "Smith 100,000 items.": "锻造100,000件物品。",
            "Star Runner": "明星跑者",
            "Steady Hands": "沉稳之手",
            "Sunken Archive Conqueror": "沉没档案馆征服者",
            "Superior Hunter": "高级猎人",
            "Superior Stalker": "高级追踪者",
            "Surefooted": "步履稳健",
            "Systems": "系统",
            "Tame the pet boss of every area.": "驯服每个区域的宠物Boss。",
            "Taskmaster": "任务大师",
            "Thalassar's Bane": "萨拉撒的克星",
            "Tireless": "不知疲倦",
            "Transmuter": "转化者",
            "Treasure Cracker": "宝藏破解者",
            "Vault Picker": "金库撬锁者",
            "Wailing Crypt Conqueror": "哀嚎地穴征服者",
            "Whispering Grove Conqueror": "低语密林征服者",
            "Witch's Coven Conqueror": "女巫集会征服者",
            "World-Touched": "世界触及者",
            "caught": "捕获",
            "the Apex Tamer": "巅峰驯兽师",
            "the Eternal": "永恒者",
            "the Maxed": "满级者",
            "Lemcrab": "柠檬蟹",
            "Skip to content": "跳转到内容",
            "Last ": "上一个 ",
            " Combat ": " 战斗 ",
            "Artisan": "工匠",
            "Gathering": "采集",
            "Total XP ": "总经验值 ",
            "Total level ": "总等级 ",
            "Level ": "等级 ",
            "Next ": "下一 ",
            "Protection": "防护",
            "Gather ": "采集 ",
            "● Training": "● 训练中",
            "Training Mining": "训练采矿",
            "Training Fishing": "训练钓鱼",
            "Magic Armour": "魔法护甲",
            "Raid Gear": "突袭装备",
            "Ranged Armour": "远程护甲",
            "Astral Staff": "星辰法杖",
            "Blood Essence": "鲜血精华",
            "Void Ichor": "虚空灵液",
            " Altar": " 祭坛",
            " style": " 风格",
            " fall ": " 掉落 ",
            "Scatter Ash": "散播灰烬",
            "Tier ": "层级 ",
            " - Blackjack": " - 棍",
            "Fletch Arrows (logs)": "制作箭矢（原木）",
            "Fletch Arrows (magic)": "制作箭矢（魔法）",
            "Fletch Arrows (oak)": "制作箭矢（橡木）",
            "The Piiank Ninja": "皮安克忍者",
            "0xgingi": "0xgingi",
            "Aprotis": "Aprotis",
            "AresWar": "AresWar",
            "BlueBerryShadow": "BlueBerryShadow",
            "Btc": "Btc",
            "Canglang": "苍狼",
            "Core": "Core",
            "Epicycle": "Epicycle",
            "Ksami": "Ksami",
            "KurriKhans": "KurriKhans",
            "Sasune": "Sasune",
            "aarnii": "aarnii",
            "degen": "degen",
            "gren": "gren",
            "jinxz": "jinxz",
            "noimeloin": "noimeloin",
            " Roll Dice": " 掷骰子",
            " on ": " 于 ",
            "Challenge Player": "挑战玩家",
            "Closest to seven": "最接近七点",
            "Dice Challenges": "骰子挑战",
            "Dice rounds use in-game coin entries. Player challenges combine both entries into one coin pool.": "骰子回合使用游戏金币入场。玩家对战会将双方入场费合并为一个奖池。",
            "High roll": "高点者胜",
            "Loading dice challenges…": "正在加载骰子挑战…",
            "Loading open dice challenges...": "正在加载公开骰子挑战...",
            "No outgoing dice challenges.": "没有发出的骰子挑战。",
            "Open Dice": "公开骰子",
            "PvP Dice": "PvP 骰子",
            "Recent Dice": "最近骰子",
            "Send Dice Challenge": "发送骰子挑战",
            "Single-Player Dice": "单人骰子",
            "Single-player game": "单人游戏",
            "No incoming dice challenges.": "没有收到的骰子挑战。",
            "No open dice challenges.": "没有公开骰子挑战。",
            " coins · +": " 金币 · +",
            "Coin reward {{0}}": "金币奖励 {{0}}",
            "Coin reward 20": "金币奖励 20",
            "Dice rolled.": "骰子已掷。",
            "Rolled ": "掷出了 ",
            "rolled ": "掷出了 ",
            " Open Trade": " 开放交易",
            "Active Trades": "活跃交易",
            "Counterparty": "交易对方",
            "Direct offers between players.": "玩家之间的直接交易。",
            "Enter a player above to start trading, or pick an active trade on the left.": "在上方输入玩家名称开始交易，或从左侧选择活跃交易。",
            "History": "历史记录",
            "No active trades.": "没有活跃交易。",
            "No recent trades.": "没有最近交易。",
            "No trade open": "无开放交易",
            "Open a Trade": "发起交易",
            "Player Trading": "玩家交易",
            "Recent Trades": "最近交易",
            "All players": "所有玩家",
            "Anonymous": "匿名",
            "Area": "区域",
            "Coordinate hunts, travel, and quiet party chat.": "协调狩猎、旅行和安静的队伍聊天。",
            "Duel": "决斗",
            "Events": "事件",
            "Form Party": "组建队伍",
            "Form a group or enter an invite code from another adventurer.": "组建队伍或输入其他冒险者的邀请码。",
            "Gamba": "赌博",
            "Global": "全局",
            "Invite code": "邀请码",
            "Join": "加入",
            "No party yet": "暂无队伍",
            "Party": "队伍",
            "Send": "发送",
            "Mod": "版主",
            "Tracat": "Tracat",
            "bigmiao": "bigmiao",
            "luguo": "luguo",
            "tnn": "tnn",
            "yihesu": "yihesu",
            "11E46A06": "11E46A06",
            "Bonez": "Bonez",
            "DRGN": "DRGN",
            "Icarus": "Icarus",
            "IronSong": "IronSong",
            "KOL": "KOL",
            "NewDun": "NewDun",
            "Oxgingi": "Oxgingi",
            "Reils": "Reils",
            "ZIV": "ZIV",
            "cloudland": "cloudland",
            "eqyy380": "eqyy380",
            "fpsnug": "fpsnug",
            "tendyo": "tendyo",
            "Dev": "Dev",
            "Lemcrab's Beloved": "柠檬蟹的宠儿",
            "65 combat might take me a bit but ill get there!": "65级战斗可能需要点时间，但我会达到的！",
            "Afk": "挂机",
            "Ah I didn't know it posted in \"events\" each boss killed.": "啊，我不知道每杀一个Boss都会在\"事件\"里显示。",
            "Aha. Hopefully soon. The fourth boss is rude.": "啊哈，希望很快。第四个Boss很凶。",
            "As for the other world boss, that spawns each night, he doesn't deal damage either.": "至于另一个每晚刷新的世界Boss，它也不会造成伤害。",
            "Can't wait to see our characters and models of gear": "等不及看我们的角色和装备模型了",
            "ClemCrab sounds great though": "不过 ClemCrab 听起来很棒",
            "Combat Level = ⌊ 0.25 × (Defence + Hitpoints + 0.5 × Prayer) + 0.325 × MAX( Attack + Strength, 1.5 × Ranged, 1.5 × Magic ) ⌋": "战斗等级 = ⌊ 0.25 × (防御 + 生命值 + 0.5 × 祈祷) + 0.325 × MAX( 攻击 + 力量, 1.5 × 远程, 1.5 × 魔法 ) ⌋",
            "Come on guys! It only took me one week to reach 65 cb lvl, not that hard.": "加油兄弟们！我只花了一周就达到了65级战斗，不难的。",
            "Congrats on the raid DragonBorn, did you have three eligible members, and if not, what happened?": "恭喜 DragonBorn 成功突袭，你们凑够三个合格成员了吗？如果没有，发生了什么？",
            "Damn, glad you guys are liking it": "该死，很高兴你们喜欢",
            "Does it drop anything anyway?": "它到底掉不掉东西？",
            "Don't wipe!": "别清档！",
            "From Runescape, this rule works in this game as well.": "来自Runescape，这个规则在这游戏里也适用。",
            "He is kind, he is our god, he chooses not to attack us so that we may gain experience from him": "他是仁慈的，他是我们的神，他选择不攻击我们，让我们从他身上获得经验",
            "Hope to hear more tracks from Eternals radio in the future.": "希望以后能听到更多永恒国度电台的曲目。",
            "I don't know for sure, but not magic. I think its attack, strength, defense. Maybe HP but I don't think so.": "我不确定，但肯定不是魔法。我觉得是攻击、力量、防御。也许生命值也算，但我觉得不是。",
            "I have finished the first boss raid, and now the second one": "我已经完成了第一个Boss突袭，现在第二个",
            "I mean, it's pretty common/expected that a mmo wipes when it goes from in-development/alpha to release, we're talking like about a year away from official release, so who knows what we're actually going to do": "我的意思是，MMO从开发/测试到正式发布时清档是很常见/预期的，我们距正式发布大概还有一年，天知道到时候会怎样",
            "I remember getting 1 common and 1 rare chest from it, but can't remember what time": "我记得从里面拿到了1个普通和1个稀有宝箱，但不记得是什么时候了",
            "I think just a rare chest? I cant remember, its been so long": "我记得只有一个稀有宝箱？记不清了，太久了",
            "I would assume no rolls for drops. But to be eligible you just have to deal a certain amount of damage to the boss.": "我猜掉落不需要roll点。但要获得资格，你只需要对Boss造成一定量的伤害即可。",
            "IMBA": "不平衡",
            "If fewer than 3 people participate in the guild raid, what will happen?": "如果少于3人参加公会突袭，会发生什么？",
            "Im just keeping in my mind that afk is 12h without any upgrades and im looking on regular clock. And yes, i think that its reseting after each time we log in. Look in shop.": "我就记着挂机是12小时没有任何升级，我看普通时钟。是的，我觉得每次登录后就会重置。去商店看看。",
            "Is the developer odablock?": "开发者是odablock吗？",
            "It slowly moves, I don't know anymore. Probably around 1am ET": "它缓慢移动，我记不清了。大概是美东时间凌晨1点左右",
            "It's on the list 🙏": "在计划列表上了 🙏",
            "I’m going to Mixue Ice Cream & Tea to buy lemonade": "我要去蜜雪冰城买柠檬水",
            "Just update as he goes": "随他更新就行",
            "LemCrab for life": "柠檬蟹一生推",
            "LemCrab?": "柠檬蟹？",
            "Likes it's too good....": "喜欢，这太棒了……",
            "Magic is better now. It's IBMA (from the Dev)": "魔法现在更强了。是IBMA（来自开发者）",
            "Maybe Hp + the max of attack, range and magic, I guess": "可能是生命值 + 攻击、远程和魔法中的最大值，我猜",
            "Maybe, I'm just waiting for the third member to reach lvl 65 yet haha": "也许吧，我只是在等第三个成员升到65级哈哈",
            "Melvor Pro Max": "Melvor Pro Max",
            "Must mean the final boss gets stuck at 1hp until a 3rd joins.": "那肯定意味着最终Boss会卡在1血，直到第三个人加入。",
            "NIce, thanks.": "不错，谢谢。",
            "Need a redneck version. ClemCrab. Drops Marlboro reds and Busch lights": "需要一个红脖版本。ClemCrab。掉落万宝路红和白啤酒",
            "Never mind that my title says LemCrab's Beloved, he loves all of us devoted to his combat teachings.": "别管我头衔是柠檬蟹的宠儿，他爱所有专心于他战斗教导的人。",
            "Pretty much everything you do gives renown. Killing monsters, dungeons, your combat level, and quests completed": "几乎你做的一切都会给声望。杀怪、地下城、你的战斗等级、完成的任务",
            "Remember to vote for Eternals on Scapelikes. ☝️": "记得在Scapelikes上给永恒国度投票。☝️",
            "So I guess it makes the boss unkillable at 1 HP until a 3rd person becomes eligible in the raid": "所以我觉得这会让Boss在1血时无法被击杀，直到第三个人在突袭中获得资格",
            "So everytime we login does our timer restart? And where do we see it?": "那我们每次登录计时器会重置吗？在哪里能看到？",
            "Terrible, damn.": "太糟糕了，该死的。",
            "This game is tight tight tight": "这游戏太棒了太棒了太棒了",
            "This has to be the best idle game rn...": "这绝对是目前最好的挂机游戏……",
            "Timer of what?": "什么计时器？",
            "We've got 5 spots left in the guild! Come joint with invite code": "公会还有5个位置！用邀请码加入吧",
            "What combat level you should have to join world boss?": "加入世界Boss需要多少战斗等级？",
            "When I open the market page, I can’t tell which items are in stock and available for purchase at a glance. Has the author considered optimizing this?": "打开市场页面时，我一眼看不出哪些物品有库存可供购买。作者有没有考虑优化一下？",
            "Why does this Eternals radio actually slap? 🕺": "为什么这永恒国度电台这么上头？🕺",
            "Wish he didn't have to wipe it": "希望他不用清档",
            "Would have to ask Gingi or Degen": "得问 Gingi 或 Degen",
            "Wow 32 players online!": "哇，32个玩家在线！",
            "actually a lot better than melvor": "实际上比melvor好多了",
            "are macros allowed in dis game": "这游戏允许用宏吗",
            "aw thats heartbreakin": "啊，这太令人心碎了",
            "eqyy380 you have a trade offer": "eqyy380 你有一个交易请求",
            "got 8000gold and 4 waking deep shard": "拿到了8000金币和4个觉醒深渊碎片",
            "how is combat level calculated?": "战斗等级是怎么计算的？",
            "i need a search bar in guild bank, there are so many items...": "公会仓库需要一个搜索栏，东西太多了……",
            "i see a good person give me on corrupt blackjack haoren yisheng pingan": "我看到一个好心人给了我腐化黑杰克，好人一生平安",
            "is there any ways to buff the speed of mining?": "有没有什么方法可以提升采矿速度？",
            "nice thanks, no wonder my combat level seems stuck I've only been leveling magic": "好的谢谢，难怪我的战斗等级不动了，我只升级了魔法",
            "not at the moment": "目前没有",
            "only 2 people participate in the raid": "只有2个人参加了突袭",
            "should i focus on magic or ranged?": "我应该专注练魔法还是远程？",
            "they help with crafting stuff": "它们有助于制作物品",
            "until we update it": "直到我们更新它",
            "what time utc does the other world boss spawn?": "另一个世界Boss UTC几点刷新？",
            "who can sell me a Corrupt Blackjack i want to use 10000 gold to buy one": "谁能卖我一把腐化黑杰克，我想用10000金币买一把",
            "why would u need to macro an idle game": "挂机游戏为什么需要宏",
            "yeah world boss just drops like a rare box, it's something to kind of just ignore for now": "是的，世界Boss就掉个稀有宝箱之类的东西，目前基本可以忽略",
            "yeah, it resets when you login": "是的，每次登录就会重置",
            "Loading chat...": "正在加载聊天…",
            "Done": "完成",
            " · Melee": " · 近战",
            " - Harpoon": " - 鱼叉",
            " - Hatchet": " - 斧头",
            " - Pickaxe": " - 镐子",
            " - Weapon": " - 武器",
            "Accuracy": "精准",
            "Accurate": "精准",
            "Aggressive": "激进",
            "Balanced": "均衡",
            "Defensive": "防御",
            "Normal": "普通",
            "Risky": "冒险",
            "Survival": "生存",
            "Stance": "姿态",
            "Auto-eat": "自动进食",
            "Auto-sips when the buff fades · one potion lasts 10 fights.": "增益消失时自动饮用 · 一瓶药剂可持续10场战斗。",
            "Def roll": "防御骰",
            "Defense XP": "防御经验",
            "Enemy strike": "敌人打击",
            "Fighting Rat": "战斗中：老鼠",
            "Kills/h": "击杀/时",
            "Max hit": "最大伤害",
            "M·R·M def": "魔·远·近 防御",
            "Next strike": "下次打击",
            "Next strike · eating": "下次打击 · 进食中",
            "No direct source listed.": "未列出来源。",
            "None active": "无激活",
            "Rat missed.": "老鼠未命中。",
            "Retreat": "撤退",
            "Style presets": "风格预设",
            "Save current gear": "保存当前装备",
            "Swing": "挥击",
            "to win": "即可获胜",
            "Training Cooking": "训练烹饪",
            "Training Firemaking": "训练生火",
            "Training Prayer": "训练祈祷",
            "Mining reached level {{0}}!": "采矿达到{{0}}级！",
            "Cb {{0}}": "战斗 {{0}}",
            "Slayer {{0}}": "屠戮 {{0}}",
            " rations": " 口粮",
            " piece": " 件",
            "· Lumby": "· 鲁姆比",
            "Quarry": "采石场",
            "Cursed Rat": "诅咒老鼠",
            "Mire King": "泥沼之王",
            "Starter wetlands — rats, cows, and goblins prowl the tide fields.": "新手湿地——老鼠、奶牛和哥布林在潮汐地带出没。",
            "No preset — falls back to your worn gear (fists if your weapon isn't melee).": "无预设——回退到穿戴装备（非近战武器则为拳头）。",
            "No preset — unavailable in duels until you save one.": "无预设——保存后方可在决斗中使用。",
            "The Hunt": "狩猎",
                        "Split XP": "分配经验",
            "Cb 6": "战斗 6",
            "Slayer 15": "屠戮 15",
            " Travel to {{0}}": " 前往 {{0}}",
            " Need {{0}}": " 需要 {{0}}",
            " asks · {{0}}": " 卖单 · {{0}}",
            " bids · {{0}}": " 买单 · {{0}}",
            " items · {{0}}": " 物品 · {{0}}",
            " tamed · Taming {{0}}": " 驯服 · 驯兽 {{0}}",
            "+{{0}} foes": "+{{0}} 敌人",
            "+{{0}} Mark of Grace · +{{0}} Agility XP": "+{{0}} 优雅印记 · +{{0}} 敏捷经验",
            "{{0}} traded": "{{0}} 已交易",
            " Farming xp, +{{0}}": " 农耕经验, +{{0}}",
            " Woodcutting xp +{{0}}": " 伐木经验 +{{0}}",
            " logs, +{{0}}": " 原木, +{{0}}",
            "Defeat the {{0}}": "击败 {{0}}",
            "Found Guild · {{0}}": "已建公会 · {{0}}",
            "Found on Lv {{0}}": "发现于 {{0}} 级",
            "Founding costs {{0}}": "创建费用 {{0}}",
            "Harvest {{0}}": "收获 {{0}}",
            "Plot {{0}}": "地块 {{0}}",
            "Ranged Lv {{0}}": "远程 {{0}} 级",
            "Sits in the book until another {{0}}": "留在书中直到另一个 {{0}}",
            "Tree Patch {{0}}": "树田 {{0}}",
            "Where you stand among {{0}}": "你在 {{0}} 中的排名",
            "You have {{0}}": "你有 {{0}}",
            "Your gold {{0}}": "你的金币 {{0}}",
            "Farming Lv {{0}}": "农耕 {{0}} 级",
            "clear {{0}}%": "清除 {{0}}%",
            "Guide {{0}}": "指南 {{0}}",
            " {{0}} members": " {{0}} 成员",
            " {{0}} coins each": " {{0}} 金币/个",
            " · Taming {{0}}": " · 驯兽 {{0}}",
            "Legendary spoil from cracking Lemcrab, the world boss {{0}}": "击败世界Boss柠檬蟹的传奇战利品 {{0}}",
            "Ultra-rare find while training {{0}}": "训练 {{0}} 时发现的超稀有物品",
            " · thin market": " · 流通低",
            " Farming xp, +": " 农耕经验, +",
            " Woodcutting xp": " 伐木经验",
            " coins each": " 金币/个",
            " in Eternals.": " 在永恒国度。",
            " logs, +": " 原木, +",
            " matches it.": " 匹配。",
            " members": " 成员",
            " pet boss": " 宠物Boss",
            "+ foes": "+ 敌人",
            "+36 Agility XP": "+36 敏捷经验",
            "3,746 traded": "3,746 已交易",
            "needs arrows": "需要箭矢",
            "← Board": "← 面板",
            "· Astrals": "· 星界",
            "You can't afford that yet.": "你还买不起。",
            "Accept": "接受",
            "Ask": "卖单",
            "Bid": "买单",
            "Best": "最优",
            "Buy": "购买",
            "Sell": "出售",
            "Search": "搜索",
            "Live": "实时",
            "Max": "最大",
            "Quantity": "数量",
            "Listed only": "仅已列出",
            "Price Board": "报价板",
            "Price each": "单价",
            "Rest offer": "重置报价",
            "Post buy offer": "发布求购",
            "Post sell offer": "发布出售",
            "Your offers": "你的报价",
            "The market": "市场",
            "buyer": "买家",
            "seller": "卖家",
            "Click to wear": "点击穿戴",
            "Collection box": "收集箱",
            "Empty": "空",
            "Empty slot": "空栏位",
            "Asks above · bids below · click a price to set your offer": "上方为卖单 · 下方为买单 · 点击价格设置报价",
            "Filled trades land here.": "完成的交易显示在这里。",
            "No asks yet — be the first to sell.": "暂无卖单——成为第一个出售的。",
            "Open enrollment (anyone can join from the directory)": "公开招募（任何人都可从目录加入）",
            "Set offers in your slots, read the order wall, and strike deals across the counter.": "在你的栏位设置报价，查看挂单墙，然后达成交易。",
            "Guilds": "公会",
            "Active guilds": "活跃公会",
            "Guild name": "公会名称",
            "Tag (2-5 chars)": "标签（2-5个字符）",
            "Apply": "申请",
            "Directory": "目录",
            "Found a guild": "创建公会",
            "Founding costs ": "创建费用 ",
            "Knights of Lumby": "鲁姆比骑士团",
            "Band together with up to 30 adventurers — shared chat, ranks, and a banner of your own.": "与最多30位冒险者组队——共享聊天、等级和专属旗帜。",
            "Consulting the guild registry...": "正在查询公会注册表...",
            "PvP": "PvP",
            "Combat mode": "战斗模式",
            "Anything Goes": "无限制",
            "Practice": "练习",
            "Practice · Anything Goes": "练习 · 无限制",
            "Practice · Balanced": "练习 · 均衡",
            "Area Bosses": "区域Boss",
            "Boss Pets": "Boss宠物",
            "Skilling Pets": "技能宠物",
            "Combat Companions": "战斗伙伴",
            "Your Companions": "你的伙伴",
            "Untamed": "未驯服",
            "Menagerie": "动物园",
            "Duel Challenges": "决斗挑战",
            "Open Duels": "公开决斗",
            "Recent Duels": "最近决斗",
            "Loading challenges…": "正在加载挑战…",
            "Loading open challenges…": "正在加载公开挑战…",
            "No incoming challenges.": "没有收到的挑战。",
            "No outgoing challenges.": "没有发出的挑战。",
            "No duel results yet.": "暂无决斗结果。",
            "No companions yet. Defeat monsters for a chance to tame one.": "暂无伙伴。击败怪物有几率驯服一只。",
            "Spar the Sparring Golem": "与训练魔像对练",
            "vs": "对阵",
            "Spoils": "战利品",
            "Hardcore Ironman": "硬核铁人",
            "Safe": "安全",
            "soft": "软核",
            "Astral Devourer": "星界吞噬者",
            "Astral Imp": "星界小恶魔",
            "Astral Tyrant": "星界暴君",
            "Corrupt Paladin": "腐化圣骑士",
            "Warlock": "术士",
            "Wizard": "法师",
            "Wayfarer": "旅者",
            "Mortal": "凡人",
            "Ethereal": "虚灵",
            "Wealth": "财富",
            "Astrals": "星界",
            "Bloodlands": "血域",
            "Eastlands": "东部之地",
            "Emberfall": "灰烬瀑布",
            "Royal Realm": "皇室领域",
            "The Barrens": "荒芜之地",
            "Tidebound": "潮汐束缚",
            "Underworld": "冥界",
            "Donald's Cave": "唐纳德洞穴",
            "Mountstone": "山石镇",
            "Highlands": "高地",
            "Codex": "法典",
            "Ascension": "飞升",
            "Rune-storm skies infested with imps, warlocks, and corrupt paladins.": "符文风暴的天空被小恶魔、术士和腐化圣骑士侵扰。",
            "Challenge players with optional coin entries and fight in real time — flick prayers, swap style presets, and eat on the tick. Balanced hands both sides the same loadouts; Anything Goes uses your real gear, food, runes, and arrows.": "可选金币入场挑战玩家，实时对战——切换祈祷、更换风格预设、即时进食。均衡模式双方装备相同；无限制模式使用你的真实装备、食物、符文和箭矢。",
            "The same real-time duel against a training golem — no coins, no world log. Balanced hands both sides the standard loadouts; Anything Goes pits you against a mirror of your own gear and kit (your supplies still come from your bank and return after the fight).": "与训练魔像实时决斗——无金币，无世界日志。均衡模式双方标准装备；无限制模式对抗镜像的自己（补给仍从仓库消耗，战后返还）。",
            "Tamed at random when you defeat monsters — and each skill hides one ultra-rare pet for those who train it. Set one active for a combat bonus, and train it with gold.": "击败怪物时有几率驯服——每种技能隐藏着一只超稀有宠物。设置一只激活可获得战斗加成，用金币训练它。",
            "Scanning the realm...": "正在扫描领域...",
            "Allotment": "菜园",
            "Orchard": "果园",
            "Tree": "树木",
            "Tree Seed": "树种子",
            "Tree Patches": "树田",
            "Plots": "地块",
            "Herbs": "草药",
            "Ores": "矿石",
            "Growing": "生长中",
            "Harvest All": "全部收获",
            "Plant All": "全部种植",
            "Ironroot Tree Seed": "铁根树种子",
            "Magic Tree Seed": "魔法树种子",
            "Rekt Tree Seed": "残毁树种子",
            "No seeds — fight monsters or open loot boxes": "没有种子——击杀怪物或打开宝箱获取",
            "Plant seeds from drops and loot boxes, let them grow in real time, then harvest crops and herbs. Tree seeds shake loose while woodcutting and grow into bulk logs.": "从掉落和宝箱获得种子，实时种植生长，然后收获作物和草药。树种子在伐木时掉落，生长为大宗原木。",
            "Training Fletching": "训练制箭",
            "GUIDE": "指南",
            "Guide": "指南",
            "Anyone": "任何人",
            "Other": "其他",
            "Alpha": "Alpha",
            "Hi": "嗨",
            "Yo": "哟",
            "You": "你",
            "Hello there": "你好",
            "Happy freedom day": "自由日快乐",
            "Combat level must have something to do with PvP eventually": "战斗等级最终肯定会和PvP有关",
            "Cool!!!!": "酷！！！！",
            "Discord is the best way to keep in touch with us": "Discord是和我们保持联系的最佳方式",
            "I'm building a pure.": "我在练纯号。",
            "Is PvP combat bracket based?": "PvP是按战斗等级分段的吗？",
            "Is there a \"time to complete\" feature that can be enabled or will be added eventually?": "有没有\"预计完成时间\"功能可以开启，或者将来会加入？",
            "Is there a general merchant or similar npc to sell junk to or are the only options GE & alching?": "有没有普通商人可以卖垃圾，还是只能交易所和炼金？",
            "Np, sorry I didn't have more": "没关系，抱歉我没有更多了",
            "Only GE and alchemy": "只能交易所和炼金",
            "Praise be lemcrab": "赞美柠檬蟹",
            "Raid goes brrr": "突袭冲冲冲",
            "Sent all I had in a trade": "交易中把我所有的都发过去了",
            "So I can run a pure in this game?": "所以这游戏可以练纯号？",
            "Sorry I don't keep up with game chat much": "抱歉我不太关注游戏聊天",
            "That's one of my favorite also. Because it allows less active people to be relevant for multiplayer features. ^^": "这也是我最喜欢的之一。因为它让不那么活跃的玩家也能参与多人内容。^^",
            "The new visuals look pretty cool!": "新的视觉效果看起来很酷！",
            "This game is great so far, please keep it up! I especially love I can kill the crab while skilling haha": "这游戏目前很棒，请继续保持！我特别喜欢可以边练技能边打螃蟹哈哈",
            "This game is so good": "这游戏太好了",
            "Ur welcome @cloudland": "不客气 @cloudland",
            "With combat what does \"x% to win\" represent?": "战斗中\"x%胜率\"代表什么？",
            "Yo gamers, checkout the latest discord announcement 🙏": "哟玩家们，看看最新的Discord公告 🙏",
            "blueberryshadow thank you": "blueberryshadow 谢谢",
            "looking to buy tin and copper in the market. thanks": "想在市场买锡和铜，谢谢",
            "thanks for adding the search bar for guild bank :)": "感谢添加公会仓库搜索栏 :)",
            "4 people in 4 hours isn't bad Canglang, congrats": "4个人4小时不差了苍狼，恭喜",
            "@mortarion, that's percent chance of you winning the fight": "@mortarion，那是你赢得战斗的概率",
            "every adventurer": "所有冒险者",
            "its going to be more guild vs guild and faction based PvP with contested skill gathering areas": "将来会有更多公会vs公会和阵营PvP，争夺技能采集区域",
            "Th fourth boss is fucking rude. It takes 4 members 4 hours to beat this boss": "第四个Boss真他妈凶。4个人花了4小时才打过",
            "PvP hasn't really been added yet. There is a duel arena you can challenge and accept challenges": "PvP其实还没真正加入。目前有一个决斗场可以发起和接受挑战",
            "Agmm 7868": "Agmm 7868",
            "Baldir": "Baldir",
            "Blueberry ain't special 😈": "Blueberry 没什么特别的 😈",
            "Blueberry the most special": "Blueberry 是最特别的",
            "Boldon": "Boldon",
            "DRGONBORN": "DRGONBORN",
            "Gabikaz": "Gabikaz",
            "Ham": "Ham",
            "Hexorcist": "Hexorcist",
            "Kidian": "Kidian",
            "KingGreen": "KingGreen",
            "Lelldorin": "Lelldorin",
            "Marusafat": "Marusafat",
            "Mortarion": "Mortarion",
            "Myra": "Myra",
            "OpenClaw": "OpenClaw",
            "Ostaf": "Ostaf",
            "PatetaPt": "PatetaPt",
            "Polyzeal": "Polyzeal",
            "Quack Dealer": "呱呱商人",
            "RPGamer": "RPGamer",
            "Skillcheeze": "Skillcheeze",
            "gameboy": "gameboy",
            "ikhjbsfgijb": "ikhjbsfgijb",
            "nick": "nick",
            "po2026": "po2026",
            "Graceville": "Graceville",
            "+1 Mark of Grace · +36 Agility XP": "+1 优雅印记 · +36 敏捷经验",
            "Ranged Lv 1": "远程 1 级",
            "Farming Lv ": "农耕 等级 ",
            "Combat Lv ": "战斗等级 ",
            "Travel to ": "前往 ",
            "Harvest ": "收获 ",
            "Plot ": "地块 ",
            "Found Guild · ": "已建公会 · ",
            "Found on Lv ": "发现于 等级 ",
            "You have 0": "你有 0",
            "Your gold 24,735": "你的金币 24,735",
            "clear 100%": "清除 100%",
            "clear 84%": "清除 84%",
            "tamed · Taming ": "驯服 · 驯兽 ",
            "Sits in the book until another ": "留在书中直到另一个 ",
            "Ultra-rare find while training ": "训练时发现的超稀有物品 ",
            "Where you stand among ": "你的排名 ",
            " asks · ": " 卖单 · ",
            " bids · ": " 买单 · ",
            " items · ": " 物品 · ",
            "+{{0}} {{1}} · +{{2}} {{3}} XP": "+{{0}} {{1}} · +{{2}} {{3}} 经验",
            "+{{0}} {{1}}": "+{{0}} {{1}}",
            "{{0}} - {{1}} - {{2}} xp": "{{0}} - {{1}} - {{2}} 经验",
            "{{0}} Lv {{1}} - {{2}} - {{3}} xp": "{{0}} {{1}}级 - {{2}} - {{3}} 经验",
            "{{0}} Lv {{1}} - {{2}} - {{3}} xp -> {{4}}": "{{0}} {{1}}级 - {{2}} - {{3}} 经验 -> {{4}}",
            "{{0}} Lv {{1}} - {{2}} - {{3}} xp -> {{4}} {{5}}": "{{0}} {{1}}级 - {{2}} - {{3}} 经验 -> {{4}} {{5}}",
            "Area pet boss · battle level {{0}}": "区域宠物Boss · 战斗等级 {{0}}",
            "Area pet boss · tier {{0}} companion": "区域宠物Boss · {{0}}级伙伴",
            "Agility course · level {{0}}": "敏捷跑道 · 等级 {{0}}",
            "Combat {{0}}": "战斗 {{0}}",
            "{{0}} - Combat Lv {{1}}": "{{0}} - 战斗等级 {{1}}",
            "Rare ({{0}})": "稀有（{{0}}）",
            "Seed {{0}}": "种子率 {{0}}",
            "Fell for {{0}} logs + Farming & Woodcutting xp": "砍伐获得 {{0}} 原木 + 农耕与伐木经验",
            "Restores {{0}} HP": "恢复 {{0}} 生命",
            "{{0}} rolls per box": "每箱 {{0}} 次抽取",
            "{{0}} - {{1}} grow time": "{{0}} - {{1}} 生长时间",
            "missing inputs for {{0}}": "缺少制作 {{0}} 的材料",
            "Fighting {{0}}": "正在与{{0}}战斗",
            "Fletch Arrows ({{0}}) · {{1}}": "制箭（{{0}}）· {{1}}",
            " despawns ": " 消失倒计时 ",
            " In ": " 在 ",
            "Tree Patch ": "树田 ",
            "Need ": "需要 ",
            "gold · ": "金币 · ",
            "Legendary spoil from cracking Lemcrab, the world boss ": "击败世界Boss柠檬蟹的传奇战利品 ",
            "Requires Magic Lv ": "需要魔法等级 ",
            " - Ammo": " - 弹药",
            " Drop": " 掉落",
            " more": " 更多",
            " raiding": " 正在突袭",
            " stacks": " 堆叠",
            " · Ranged": " · 远程",
            "+2 Grass Herb": "+2 草药草",
            "1 Bronze Bar, 2": "1 青铜锭, 2",
            "1 Bronze Bar, 3": "1 青铜锭, 3",
            "2m ago": "2分钟前",
            "Activity stopped": "活动已停止",
            "Ammo": "弹药",
            "Android": "Android",
            "Apprentice Runecrafter": "符文学徒",
            "Artisan's Mark": "工匠印记",
            "Attack XP": "攻击经验",
            "Badger": "獾",
            "Bar": "锭",
            "Barren Maul": "荒芜重锤",
            "Bind 10 Water Runes at the altar.": "在祭坛绑定10个水符文。",
            "Blade Initiate": "剑刃学徒",
            "Blood Maul": "血之重锤",
            "Boss": "Boss",
            "Bosses": "Boss",
            "Bowyer's Path": "制弓师之路",
            "Bronze Maul": "青铜重锤",
            "Cache": "缓存",
            "Catch gracefish.": "捕获优雅鱼。",
            "Catch sailfish.": "捕获帆鱼。",
            "Chop ironroot.": "砍伐铁根树。",
            "Chop magic logs.": "砍伐魔法原木。",
            "Chop obsidian logs.": "砍伐黑曜石原木。",
            "Click an action pin to start": "点击操作图钉开始",
            "Click to attack": "点击攻击",
            "Click to challenge": "点击挑战",
            "Click to gather": "点击采集",
            "Click to run": "点击奔跑",
            "Click to steal": "点击偷窃",
            "Click to travel & attack": "点击前往攻击",
            "Click to travel & challenge": "点击前往挑战",
            "Click to travel & gather": "点击前往采集",
            "Click to travel & start": "点击前往开始",
            "Combat Boss": "战斗Boss",
            "Combat Bosses": "战斗Boss",
            "Coming soon": "即将推出",
            "Community": "社区",
            "Contract Hunter": "合约猎人",
            "Corrupt Maul": "腐化重锤",
            "Cow": "牛",
            "CrispLion": "CrispLion",
            "Ctao": "Ctao",
            "Daily Vote": "每日投票",
            "Defeat the ": "击败 ",
            "Desktop": "桌面",
            "Discord": "Discord",
            "Drop": "掉落",
            "Eat": "进食",
            "Ember Matriarch": "灰烬母皇",
            "Ember Tyrant": "灰烬暴君",
            "Empty a merchant's labelled herb seed rolls.": "清空商人的草药种子库存。",
            "Erik Frey": "Erik Frey",
            "Etherment Maul": "以太重锤",
            "Feng": "Feng",
            "Field Alchemist": "战场炼金师",
            "Field Work": "野外工作",
            "Fighting Rift Horror": "正在与裂隙恐魔战斗",
            "Fighting Skeleton": "正在与骷髅战斗",
            "Firemaking Lv 1 - 12s - 8 xp": "生火 1级 - 12秒 - 8 经验",
            "Flame Tender": "火焰看守者",
            "Fleece a merchant's travelling purse.": "扒窃商人的旅行钱袋。",
            "Fletcher's Arrow": "制箭师之箭",
            "Fletch Arrows (logs) · Fletching": "制箭（普通原木）· 制箭",
            "Fletch Arrows (magic) · Thieving": "制箭（魔法原木）· 偷窃",
            "Fletch Arrows (oak) · Fletching": "制箭（橡木）· 制箭",
            "Forum": "论坛",
            "Four elements, four tiers — each tier gated by its catalyst rune. Casting a target's weakness element hits 20% harder.": "四种元素，四个层级——每层由其催化符文解锁。对目标弱点元素施法伤害提升20%。",
            "Game page": "游戏页面",
            "Gambler's Ledger": "赌徒账本",
            "Goblin": "哥布林",
            "Graceville - Combat Lv 5": "Graceville - 战斗等级 5",
            "Grove Warden": "林地守卫",
            "Grow time": "生长时间",
            "Guaranteed x1": "保底 x1",
            "Gundam": "Gundam",
            "Healing": "治疗",
            "Hearthkeeper": "炉火守护者",
            "Henchman": "打手",
            "Here — click to attack": "此处 — 点击攻击",
            "Here — click to challenge": "此处 — 点击挑战",
            "Here — click to gather": "此处 — 点击采集",
            "Here — click to start": "此处 — 点击开始",
            "High Alchemy Death Rune": "高级炼金死亡符文",
            "honf": "honf",
            "IndieDB": "IndieDB",
            "Into the Depths": "深入深渊",
            "Iron Maul": "铁质重锤",
            "Keeper's Bond": "守护者之契",
            "Leap between rune-lit roofs in the Astrals.": "在星界的符文光芒屋顶间飞跃。",
            "Lifetime": "生涯",
            "Linux": "Linux",
            "Log": "原木",
            "Loot General Stall · Thieving": "搜刮杂货摊 · 偷窃",
            "Low Alchemy Air Rune": "低级炼金空气符文",
            "Magic utility": "魔法工具",
            "Master of the Anvil": "铁砧大师",
            "Mine iron ore.": "挖掘铁矿石。",
            "Mobile": "手机",
            "Mobs": "怪物群",
            "Monster": "怪物",
            "Mystic Maul": "神秘重锤",
            "Needs ammo": "需要弹药",
            "No current activity": "当前无活动",
            "One vote a day. ScapeLikes delivers a Rare Box automatically.": "每天一票。ScapeLikes自动发放稀有宝箱。",
            "Online players": "在线玩家",
            "Open ScapeLikes": "打开ScapeLikes",
            "Pet Bosses": "宠物Boss",
            "Pick a lockbox left behind a market counter.": "撬开市场柜台留下的锁箱。",
            "Plant": "种植",
            "Plant Tree Seed": "种植树种子",
            "Planting": "种植中",
            "Players": "玩家",
            "Polyment Maul": "聚合重锤",
            "Potion": "药水",
            "Power Trial": "力量试炼",
            "Prospector's Claim": "勘探者领地",
            "Rat": "老鼠",
            "Reddit": "Reddit",
            "Rift Binder": "裂隙束缚者",
            "Rising Threats": "崛起威胁",
            "Rooftop Runner": "屋顶跑者",
            "Rug": "地毯怪",
            "Rune": "符文",
            "ScapeLikes": "ScapeLikes",
            "Seed": "种子",
            "Shade": "暗影",
            "Shadow Hand": "暗影之手",
            "Shape the Current": "塑造潮流",
            "Shield Wall": "盾墙",
            "Shrine Keeper": "神龛看守者",
            "Shura": "Shura",
            "Skilling": "技能",
            "Social": "社交",
            "Source": "源头",
            "Spellbound": "咒缚者",
            "Starter Dagger": "入门匕首",
            "Steal basic ammunition from an archery stall.": "从箭术摊偷取基础弹药。",
            "Steel Maul": "钢质重锤",
            "Steward of the Fields": "田野管事",
            "Still Standing": "屹立不倒",
            "StrangeAce": "StrangeAce",
            "Strength XP": "力量经验",
            "Sundries": "杂项",
            "Superior Cow": "精英牛",
            "Superior Goblin": "精英哥布林",
            "Superior Rat": "精英老鼠",
            "Superior Rug": "精英地毯怪",
            "Superior Thief": "精英盗贼",
            "The Source": "源头",
            "Tidebound Angler": "潮缚钓鱼者",
            "Today": "今日",
            "Tomoe": "Tomoe",
            "Trade items on the Grand Exchange or alchemize one at a time.": "在交易所交易物品或逐个炼金。",
            "Training Crafting": "正在训练制作",
            "Training Herblore": "正在训练草药学",
            "Training Runecrafting": "正在训练符文制作",
            "Training Smithing": "正在训练锻造",
            "Training Thieving": "正在训练偷窃",
            "Tree is ready to harvest.": "树木可以收获了。",
            "Vault the broken walls around the rat-choked hamlet.": "翻越鼠患村庄周围的破墙。",
            "Vote daily": "每日投票",
            "Vote for Eternals on ScapeLikes": "在ScapeLikes为Eternals投票",
            "Vote now": "立即投票",
            "Wider Horizons": "更广阔的视野",
            "Wiki": "Wiki",
            "Windows": "Windows",
            "World Boss": "世界Boss",
            "Yield": "产出",
            "Yimmadin": "Yimmadin",
            "You need an active companion to challenge a pet boss.": "你需要激活一只伙伴才能挑战宠物Boss。",
            "Yours": "你的",
            "iOS TestFlight": "iOS TestFlight",
            "macOS": "macOS",
            "⛏️ Iron Ore": "⛏️ 铁矿石",
            "🌌 Astral Devourer": "🌌 星界吞噬者",
            "🌟 Rune Sprite": "🌟 符文精灵",
            "🎣 Gracefish": "🎣 优雅鱼",
            "🎣 Sailfish": "🎣 帆鱼",
            "🐀 Gnawlord": "🐀 啮噬领主",
            "🐁 Badger": "🐁 獾",
            "🛡️ Potate": "🛡️ Potate",
            "🤏 Crack Market Lockbox": "🤏 撬开市场锁箱",
            "🤏 Loot Archery Stall": "🤏 搜刮箭术摊",
            "🤏 Pickpocket Merchant": "🤏 扒窃商人",
            "🤏 Rob Seed Merchant": "🤏 抢劫种子商人",
            "🤸 Astral Rooftops": "🤸 星界屋顶",
            "🤸 Graceville Wallrun": "🤸 Graceville墙跑",
            "🪓 Ironroot": "🪓 铁根树",
            "🪓 Magic Logs": "🪓 魔法原木",
            "🪓 Obsidian Logs": "🪓 黑曜石原木",
            "No item output": "无物品产出",
            "Lumby": "鲁姆比",
            "Graceville": "Graceville",
            "Rift Horror": "裂隙恐魔",
            "Skeleton": "骷髅",
'Dec': '12月',
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