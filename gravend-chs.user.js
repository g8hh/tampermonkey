// ==UserScript==
// @name         Gravend 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Gravend (https://www.gravend.net/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Gravend.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @license      MIT
// @include      *https://www.gravend.net/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/11/10 16:40
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
    "Choose a slot to to start a new game, continue, or manage saves.": "选择一个插槽来开始一个新的游戏，继续，或管理保存。",
    "Continue": "继续",
    "Gravend": "Gravend",
    "New Game": "新游戏",
    "No save data": "暂无保存数据",
    "Open Wiki (new tab - Very Early Beta)": "打开Wiki（新选项卡-早期测试版）",
    "Sneak peek at the game in development.": "预览正在开发的游戏。",
    "“All that is gold does not glitter,\nNot all those who wander are lost;\nThe old that is strong does not wither,\nDeep roots are not reached by the frost.\n~ J.R.R. Tolkien, The Fellowship of the Ring": "“并非所有的金子都闪闪发光，并非所有的流浪者都迷失了方向；老而坚的树不会枯萎，深根霜也无法触及。\n~ J.R.R.托尔金，《魔戒现身》",
    "Damage:": "伤害:",
    "DEF": "防御",
    "Empty": "空",
    "disabled": "禁用",
    "HP:": "生命值:",
    "Coords:": "坐标:",
    "Crit chance:": "暴击率:",
    "Confirm Job": "确认工作",
    "Combat Log": "战斗日志",
    "Collapse All": "收起所有",
    "Clear Log": "清除日志",
    "Body": "身体",
    "Exits": "退出",
    "Gear": "装备",
    "Gold": "金币",
    "Head": "头部",
    "Help": "帮助",
    "hit chance:": "命中率:",
    "Legs": "腿部",
    "Lv": "等级",
    "Items": "物品",
    "XP:": "经验值:",
    "Weapon": "武器",
    "View Full Log": "查看完整日志",
    "STR": "力量",
    "Location": "位置",
    "Legs": "腿部",
    "Loading your save...": "正在加载你的进度...",
    "Cancel": "取消",
    "Import Save Code (Slot": "导入存档代码 (槽位",
    "Use Abilities": "使用能力",
    "Angler": "天使",
    "Equipped Gear": "已穿装备",
    "enabled": "启用",
    "Abilities:": "能力:",
    "Abilities": "能力",
    "Choose a job": "选择一个工作",
    "Active": "活跃",
    "Inventory": "库存",
    "⏳ Status Effects": "⏳ 状态影响",
    "A still, misty lake reflecting a pale sky.": "一个寂静的，有雾的湖映着苍白的天空。",
    "Active Abilities": "主动能力",
    "Burn the Path": "燃烧之路",
    "But the field does.": "但这个领域确实如此。",
    "Chemist": "化学家",
    "Choose What Remains": "选择剩余物品",
    "Cleanse The Nevergrave": "清理永无坟墓",
    "Compact grid": "紧凑网格",
    "Fast Recovery": "快速恢复",
    "Find a town": "找到一个小镇",
    "Full Step Log": "完整步骤日志",
    "Iron Lungs": "铁肺",
    "Job Memory:": "工作记忆:",
    "Job Trait:": "工作特点:",
    "Mind's Pass": "思维传递",
    "No active effects.": "没有主动效果。",
    "Passive": "被动",
    "Pick your class to begin the journey.": "选择你的班级开始你的旅程。",
    "Pile of Pebbles": "鹅卵石堆",
    "Progress:": "进度：",
    "Push On": "继续推进",
    "Quick Slots": "快捷栏",
    "Recent Activity": "近期活动",
    "Recovers faster and trades health for movement. Built to survive and press forward.": "恢复更快，用生命值换移动。为了生存和前进而建造。",
    "Reduce the corruption by culling its spawn. • A Hunter might be able to help.  Maybe find one in a town?": "通过剔除其后代来降低腐蚀。•猎人也许能帮上忙。也许能在镇上找到一个？",
    "Shield": "护盾",
    "Side Quests": "支线任务",
    "Slime Pit": "史莱姆坑",
    "Southern Lake": "南湖",
    "Starting Out": "开始",
    "Stat Growth per Level:": "每级属性成长：",
    "The map said there was a town to the north.": "地图上说北边有个小镇。",
    "The Nevergrave": "永无坟墓",
    "This Job shapes how your stats grow with each level and what you’re still capable of.": "这份工作决定了你的属性如何随着每一级而增长，以及你还能做什么。",
    "Tough Skin": "坚韧的皮肤",
    "Try switching to:": "尝试切换到：",
    "Tutorial Quests": "教程任务",
    "Wanderer": "漫游者",
    "Wanderer's damage increases by +1 for every 1000 steps taken as a Wanderer, up to a maximum of +999 damage.  This resets if you change jobs": "漫游者每走1000步，伤害增加+1，最高增加+999。如果你换了工作，这个会重置",
    "You can’t change it unless you reach a Temple. Do you remember where the Temples are?": "除非你到达神庙，否则你无法改变它。你还记得神庙在哪里吗？",
    "You don’t remember who you were.": "你不记得自己是谁了。",
    "Healing Potion, Slime Ball": "治疗药剂、史莱姆球",
    "Slime Ball": "史莱姆球",
    "You strangely feel a sense of calm wash over you. You still have your gear, items, and knowledge. Your wounds have been healed.": "你奇怪地感到一种平静的感觉笼罩着你。装备、道具、知识都还在。你的伤口已经愈合了。",
    "You wake again in the grass.\nNot a grave, but it should’ve been.\n\nThe Slimes stare with eyeless faces, familiar. You wonder how many tried to leave.": "你又在草丛中醒来。不是坟墓，但应该是。史莱姆们睁着眼睛盯着我，很熟悉。你想知道有多少人想离开。",
    "You will be able to donate your Experiences to the Temple and learn again.": "你可以将你的经验捐赠给圣殿，并再次学习。",
    "Your current job cannot gather here. You can only change your job in a Temple.": "你现在的工作不能在这里集合。只有在神殿中才能更换工作",
    "✕ Close": "✕ 关闭",
    "← Back": "← 返回",
    "every": "每",
    "Gain": "增益",
    "Gold:": "金币:",
    "defeated)": "被击败)",
    "Level:": "等级:",
    "Prestige:": "声望:",
    "Stats": "属性",
    "steps)": "步骤)",
    "Streak:": "连击:",
    "Wanderer Bonus:": "漫游者加成:",
    "temple": "寺庙",
    "Agility determines attack speed, accuracy, and thieving chances.": "敏捷决定攻击速度，精确度和偷窃几率。",
    "Attack Speed:": "攻击速度:",
    "CURRENTHP": "当前",
    "CURRENTMP": "当前",
    "Defeated Lurkers": "击败了潜水者",
    "Each 10 DEF reduces incoming physical damage by 1.": "每10点防御降低1点物理伤害。",
    "Evasion gives a chance to dodge normal (non-magical) enemy attacks. Higher EVA and slower enemies make dodging more likely.": "闪避有一定几率躲避普通（非魔法）敌人的攻击。更高的EVA和更慢的敌人更有可能躲闪。",
    "HP is your current health. Max HP = STA × 20.": "HP是你当前的生命值。最大生命值 = 耐力 × 20。",
    "Level Cap:": "等级上限:",
    "Magic affects your MP and magical effectiveness.": "魔法影响你的法力值和魔法效果。",
    "Magic defense reduces magical damage.": "魔法防御减少魔法伤害。",
    "Magic evasion helps avoid spells.": "魔法闪避有助于避免咒语。",
    "MP is used for special abilities. Max MP = MAG × 4.": "法力值用于特殊能力。法力值上限 = 法力 × 4。",
    "Resets when you switch jobs.": "当你切换工作时重置。",
    "Review Last Battle": "回顾上次战斗",
    "Stamina increases your max HP.": "耐力增加最大生命。",
    "steps taken as a Wanderer.": "作为一个流浪者所采取的步骤",
    "Strength increases physical attack damage.": "力量增加物理攻击伤害。",
    "Why are my stats this high/low?": "为什么我的属性会这么高/低？",
    "You should probably never need this, debugging tool for broken characters.  Warning.": "你可能永远都不需要这个调试工具。警告。",
    "Your memory is bound by the Lurkers you’ve vanquished. Base recollection is 3, plus 3 per lurker defeated (": "你的记忆被你打败的潜伏者所束缚。基础回忆值为3，每击败一个潜伏者加3 (",
    "(owned:": "(拥有:",
    "Auto-continue after fights": "战斗结束后自动继续",
    "Back Away": "后退",
    "one": "一个",
    "Pause": "暂停",
    "No enemies here.": "此处无敌人。",
    "respawn": "重生",
    "Slime": "史莱姆",
    "South": "南",
    "Resume": "返回",
    "Wraith Slime": "亡灵史莱姆",
    "Ice Slime": "冰系史莱姆",
    "Enter": "进入",
    "The ground squelches under your boots. The air smells faintly of vinegar. You probably shouldn't have come down here. How many just like you came back here, came back as the Slimes and oozed their way down here?": "地面在你的靴子下咯吱作响。空气中却充斥着醋的味道。你也许不该来这里。有多少像你一样的人回到这里，变成了史莱姆，一路渗透到这里？",
    "; the victory is still recorded.": "; 这场胜利至今仍被记录在案。",
    "(0 = none)": "(0 = 没有)",
    "(A skilled Tailor may one day craft a special bag to increase this limit.)": "（一个熟练的裁缝可能有一天会制作一种特殊的包来增加这个限制。）",
    "charge": "充能",
    "Choose one consumable to carry": "选择一种消耗品来携带",
    "consumable type (or none). Inventory is locked during the run; only your chosen item is available via quick slots.": "消耗品类型（或无）。运行期间，库存处于锁定状态；只有您选择的物品可以通过快捷栏获得。",
    "Death Quest Dungeon": "死亡任务地下城",
    "Death Quest:": "死亡任务:",
    "Encounter Chance:": "遭遇几率:",
    "Encounter Preview": "遭遇预览",
    "enemies back-to-back.": "敌人背靠背。",
    "Enter with no consumable": "不带消耗品入场",
    "Entry from": "来自",
    "Even if you defeat the final enemy, your run ends in death. You will immediately": "即使你打败了最后的敌人，你的奔跑也会以死亡告终。你将立即",
    "Healing Potion": "治疗药水",
    "No breaks and no mid-run stops.": "没有休息，没有中途停止。",
    "Quantity:": "数量:",
    "Standing at Slime Pit": "站在史莱姆矿坑",
    "You can carry up to": "你最多可以携带到",
    "You may bring": "你可以携带",
    "You will fight": "你将战斗",
    "(bag:": "(背包:",
    "Attack Timer": "攻击计时器",
    "Use": "使用",
    "Tier": "层级",
    "A Ice Slime appears!": "冰系史莱姆出现了！",
    "A Slime appears!": "史莱姆出现了！",
    "After DEF:": "防御后：",
    "Applies": "应用",
    "Charges": "充电",
    "Death Quest: only your chosen consumable is usable.": "死亡任务：只有你选择的消耗品是可用的。",
    "Encounter": "遭遇",
    "Freezing Ooze": "冰冻软泥",
    "Goo Punch": "粘拳",
    "Icy Jab": "冰刺",
    "It jiggles with frost. You can see your breath.": "它随着霜冻而颤动。你可以看到你的呼吸。",
    "It's full of goo.": "它充满了粘液。",
    "Max Hit:": "最大命中：",
    "Physical": "物理",
    "Player HP:": "玩家生命值：",
    "Player Speed:": "玩家速度：",
    "Poisoned": "中毒",
    "Possible Attacks:": "可能的攻击：",
    "Preparing": "准备中",
    "Slowed": "减速",
    "Speed:": "速度:",
    "Standing at The Nevergrave": "站在永无坟墓",
    "Status": "状态",
    "Status Effects": "状态效果",
    "Step Log": "前进日志",
    "The Slime evades your attack! (15% chance)": "史莱姆躲过了你的攻击！（15%几率）",
    "Toxic Sludge": "毒泥",
    "You have died once more, and have awakened at the Nevergrave.": "你又一次死去，在永无坟墓中醒来。",
    "Your hit chance:": "你的命中几率：",
    "Close": "关闭",
    "body": "身体",
    "Drops": "掉落",
    "Attacks": "攻击",
    "head": "头部",
    "HP": "生命值",
    "legs": "腿部",
    "Old Hunter": "老猎人",
    "People": "人们",
    "shield": "盾牌",
    "Speed": "速度",
    "Talk to": "对话",
    "Services": "服务",
    "Visit": "访问",
    "Unequip": "脱下",
    "weapon": "武器",
    "Walking North…": "向北行进…",
    "(Crafting stations unlock when you take on a crafting job.)": "（当你接受制作工作时，制作站就会解锁。）",
    "A small town, the faces of its people familiar.\nYou wonder how many tried to leave.": "一个小镇，人们熟悉的面孔。你想知道有多少人试图离开。",
    "A small town, the faces of its people familiar. You wonder how many tried to leave.": "一个小镇，人们熟悉的面孔。你想知道有多少人想离开。",
    "accessory": "配饰",
    "Acolyte Rynn": "助手林恩",
    "Activities": "活动",
    "Applies {poison} for 3 seconds": "施加{中毒}效果，持续3秒",
    "Barely better than nothing. Usable by anyone. +1 Strength.": "比没有强不了多少。任何人都可以使用。+1力量。",
    "Curio & Supply": "古玩与供应",
    "Elder Maeve": "老玛弗",
    "Find out what's going on": "弄清楚发生了什么",
    "Healing Potion (33%), Slime Ball (100%)": "治疗药剂（33%），史莱姆球（100%）",
    "Interact with someone in the town.": "与城镇中的人进行互动",
    "Scavenged Goods": "拾取物品",
    "Show only gear you can equip": "只显示你可以装备的装备",
    "The Slime evades your attack! (14% chance)": "史莱姆躲过了你的攻击！（14%几率）",
    "The slime spits toxic goo! You’re poisoned!": "粘液吐出有毒的黏液！你中毒了!",
    "The Stranger": "陌生人",
    "Threshold": "起点",
    "Threshold Armory": "起点军械库",
    "Town Gates": "城镇大门",
    "Wooden Stick": "木棍",
    "XP gained:": "获得经验:",
    "Town:": "小镇:",
    "While You Were Away…": "在你离开的时候...",
    "You haven’t been here yet.": "你还没来过这里。",
    "Wolf": "狼",
    "West": "西",
    "The Old Hunter": "老猎人",
    "— Tier": "— 层级",
    "East": "东",
    "Nice!": "不错!",
    "North": "北",
    "Start Hunting": "开始狩猎",
    "Stone": "石头",
    "Shops:": "商店:",
    "⚠ Autosave PAUSED": "⚠ 自动保存已暂停",
    "Main Quests": "主线任务",
    "Completed Quests": "已完成任务",
    "Choose a slot to start a new game, continue, or manage saves.": "选择一个槽位开始一个新的游戏，继续，或管理存档。",
    "A terrible presence remains. Face it. • A Hunter might be able to help.  Maybe find one in a town?": "一个可怕的存在依然存在。面对它。•猎人也许能帮上忙。也许能在镇上找到一个？",
    "Slime Hunt": "狩猎史莱姆",
    "Choose a slot to start a new game, continue, or manage saves.": "选择一个插槽开始一个新的游戏，继续，或管理保存。",
    "Cleanse the Temple": "清理神殿",
    "Cleansed": "已清理",
    "Confront Lurker": "对抗潜伏者",
    "Confront the Lurker in The Nevergrave": "在永无坟墓中对抗潜伏者",
    "Explore east of the Nevergrave.": "探索永无坟墓的东边。",
    "Find the temple": "找到神庙",
    "this tile is now cleansed.": "该瓷砖已清理完毕",
    "The corruption in The Nevergrave recedes...": "永无坟墓的腐败消退了...",
    "The hunter asked for 10 slime balls.": "猎人要了10个史莱姆球",
    "The hunter thanks you for your help.": "猎人感谢你的帮助。",
    "This area has been cleansed. You cannot hunt here.": "这个地区已经清理过了。你不能在这里狩猎。",
    "Trigger back-to-back fights": "触发背靠背的战斗",
    "Wraith Ward": "幽灵病房",
    "You accepted the quest to find the missing priest.": "你接受了寻找失踪牧师的任务。",
    "You couldn't use the Slime Ball.": "无法使用史莱姆球。",
    "You feel refreshed.": "你感到神清气爽。",
    "You walk twice as fast on cleansed tiles!": "你在干净的瓷砖上走得快了一倍！",
    "You would walk even faster if you built roads here with a Construction Job.": "如果你在这里修路，你会走得更快。",
    "Walking East…": "向东行进...",
    "Walking South": "向南行进...",
    "Blighted Expanse": "凋零苍穹",
    "Wraith": "幽灵",
    "The air is wrong here. Cold. The dead linger.": "这里的空气不对。冷。死者徘徊不去。",
    "Standing at Blighted Expanse": "站在凋零苍穹",
    "A ghostly figure that shrugs off physical blows.": "一个对身体打击不屑一顾的幽灵。",
    "A Wraith appears!": "幽灵出现了！",
    "Chilling Grasp": "寒蝉之握",
    "Cleanse Blighted Expanse": "清理凋零苍穹",
    "Cleanse Blighted Expanse": "清理凋零苍穹",
    "Reduce the corruption by culling its spawn.": "通过剔除其后代来降低腐蚀。",
    "Stop Hunting": "停止狩猎",
    "The Wraith evades your attack! (43% chance)": "亡灵躲过了你的攻击！（43%几率）",
    "Unsaved progress:": "未保存的进度：",
    "A Walking Roots appears!": "一个行走的树根出现了！",
    "一个行走的树根出现了！": "行走的树根",
    "Whipping Branches": "鞭打树枝",
    "You pulled something out of the earth. Now it wants it back.": "你从地里挖出了什么东西。现在它想要回它。",
    "You dodge Whipping Branches!": "你躲过了鞭打树枝！",
    "Bite": "撕咬",
    "Healing Potion (100%)": "治疗药水 (100%)",
    "⚠ This enemy can counterattack": "⚠ 这个敌人可以反击",
    "A lean, growling predator. Attacks when struck.": "一个瘦削的，咆哮的掠食者。被攻击时会反击。",
    "A Wolf appears!": "一只狼出现了！",
    "AP gained:": "获得AP：",
    "Cleanse Southern Lake": "清理南湖",
    "You dodge Goo Punch!": "你躲过了粘拳！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "DQD": "DQD",
    "(+P n)": "(+P n)",
    "STA": "耐力",
    "Acc.": "Acc.",
    "MEVA": "MEVA",
    "MDEF": "魔法防御",
    "MAG": "MAG",
    "EVA": "EVA",
    "AGI": "敏捷",
    "AP:": "AP:",
    "AP)": "AP)",
    "by FootoftheHare": "作者 FootoftheHare",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "–": "–",
    ": +": ": +",
    "?": "?",
    "(x": "(x",
    "/": "/",
    "% chance)": "% 几率)",
    "•": "•",
    "✕": "✕",
    "×": "×",
    "−": "−",
    ").": ").",
    "%)": "%)",
    "[": "[",
    "]": "]",
    "📜": "📜",
    "“": "“",
    "”": "”",
    "):": "):",
    "—": "—",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "High-Quality Tree: ": "高质量树瓷砖: ",
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
    "You found: ": "你发现了: ",
    "Progress: ": "进度: ",
    "Level Locked at ": "等级锁定在 ",
    "Hunt mode ended: ": "狩猎模式已结束: ",
    "Accepted quest: ": "已接受任务: ",
    "New side quest unlocked: ": "新的支线任务已解锁: ",
    "Wolf counterattacks for ": "狼反击了伤害 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    " (Exits)": " (退出)",
    "/phys hit)": "/物理攻击)",
    " (in combat)": " (战斗中)",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)k$/,
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
    /^\(\-([\d\.,]+)$/,
    /^× ([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+),([\d\.,]+)$/,
    /^([\d\.,]+),\-([\d\.,]+)$/,
    /^\-([\d\.,]+),\-([\d\.,]+)$/,
    /^\-([\d\.,]+),([\d\.,]+)$/,
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
    [/^You found (.+) gold!$/, '你发现了 $1 金币!'],
    [/^Defeat (.+) enemies in Southern Lake$/, '在 南湖 击败 $1 敌人'],
    [/^Defeat (.+) enemies in The Nevergrave$/, '在 永无坟墓 击败 $1 敌人'],
    [/^Defeat (.+) enemies in Blighted Expanse$/, '在 凋零苍穹 击败 $1 敌人'],
    [/^You were away for (.+)m (.+)s \((.+) ticks\) \(Limited to (.+) hour of offline time\).$/, '你离开了 $1分 $2秒 ($3 ticks) (限制为 $4 小时离线时间).'],
    [/^You were away for (.+)s \((.+) ticks\) \(Limited to (.+) hour of offline time\).$/, '你离开了 $1秒 ($2 ticks) (限制为 $3 小时离线时间).'],
    [/^You strike the Ice Slime for (.+) \(reduced to (.+)\) damage.$/, '你击中了 冰史莱姆，造成 $1（降低为 $2）伤害。'],
    [/^You strike the Walking Roots for (.+) \(reduced to (.+)\) damage.$/, '你击中了 行走的树根，造成 $1（降低为 $2）伤害。'],
    [/^You strike the Wolf for (.+) \(reduced to (.+)\) damage.$/, '你击中了 狼，造成 $1（降低为 $2）伤害。'],
    [/^You strike the Wraith for (.+) \(reduced to (.+)\) damage.$/, '你击中了 幽灵，造成 $1（降低为 $2）伤害。'],
    [/^You strike the Slime for (.+) damage.$/, '你击中了 史莱姆，造成 $1 伤害。'],
    [/^The slime punches you for (.+) \(reduced to (.+)\) damage.$/, '史莱姆 重击了你，造成 $1（降低为 $2）伤害。'],
    [/^The wolf bites for (.+) \(reduced to (.+)\) damage.$/, '狼 撕咬了你，造成 $1（降低为 $2）伤害。'],
    [/^The roots lash out for (.+) \(reduced to (.+)\) damage.$/, '树根猛烈地敲打了你，造成 $1（降低为 $2）伤害。'],
    [/^The wraith reaches out with a Chilling Grasp for (.+) \(reduced to (.+)\) damage.$/, '幽灵施放了 寒蝉之握，对你造成 $1（降低为 $2）伤害。'],
    [/^❄️ The Ice slime jabs you for (.+) \(reduced to (.+)\) damage.$/, '❄️ 冰系史莱姆 刺击了你，造成 $1（降低为 $2）伤害。'],
    [/^(.+) \— Wanderer \— Lv (.+) \— The Nevergrave$/, '$1 - 流浪者 - 等级 $2 - 永无坟墓'],
    [/^(.+) \— Wanderer \— Lv (.+) \— Threshold$/, '$1 - 流浪者 - 等级 $2 - 起点'],
    [/^(.+) \— Wanderer \— Lv (.+) \— Blighted Expanse$/, '$1 - 流浪者 - 等级 $2 - 凋零苍穹'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
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
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) entries$/, '$1 进入'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+)\n([\d\.,]+) lurkers defeated → \+([\d\.,]+) levels$/, '$1\n$2 潜伏者被击败 → +$3 等级'],
    [/^\+([\d\.,]+) flat damage"$/, '+$1 平攻伤害'],
    [/^\(next \+([\d\.,]+) in"$/, '(下一个 +$1 在'],
    [/^You gained ([\d\.,]+) AP.$/, '你获得了 $1 AP.'],
    [/^You gained ([\d\.,]+) XP.$/, '你获得了 $1 经验值.'],
    [/^You gained ([\d\.,]+) XP \(stored\).$/, '你获得了 $1 经验值 (已存储).'],
    [/^Restores ([\d\.,]+) HP.$/, '恢复 $1 生命值。'],
    [/^You take ([\d\.,]+) damage!$/, '你受到 $1 伤害!'],
    [/^for ([\d\.,]+) seconds$/, '持续 $1 秒'],
    [/^Slot ([\d\.,]+)$/, '槽位 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Recovered ([\d\.,]+) HP.$/, '恢复了 $1 生命值。'],
    [/^You awaken at the Nevergrave with ([\d\.,]+) HP and ([\d\.,]+) MP.$/, '你在 永无坟墓 中醒来，生命值为 $1，法力值为 $2。'],
    [/^Level Up! Lv ([\d\.,]+) → ([\d\.,]+)\n\+([\d\.,]+) STR, \+([\d\.,]+) STA, \+([\d\.,]+) AGI, \+([\d\.,]+) DEF$/, '升级了! 等级 $1 → $2\n+$3 力量, +$4 耐力, +$5 敏捷, +$6 防御'],
    [/^(.+) \— Wanderer \— Lv (.+) \— Southern Lake$/, '$1 — 流浪者 — 等级 $2 — 南湖'],
    [/^(.+) \— Wanderer \— Lv (.+) \— Slime Pit$/, '$1 — 流浪者 — 等级 $2 — 史莱姆坑'],
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