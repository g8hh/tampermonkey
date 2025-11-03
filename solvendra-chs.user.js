// ==UserScript==
// @name         Solvendra 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Solvendra (https://www.solvendra.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Solvendra.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://www.solvendra.com/assets/solvendra-CYwpGft2.ico
// @license      MIT
// @include      *solvendra.com*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/solvendra-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/solvendra-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/11/03 14:54
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
    "Active Players:": "活跃玩家:",
    "Alchemy": "炼金",
    "Attack": "攻击",
    "Chat": "聊天",
    "Collections": "收藏品",
    "Combat": "战斗",
    "Defence": "防御",
    "Current Combat": "当前战斗",
    "Equipment": "装备",
    "Events": "活动",
    "fishing": "钓鱼",
    "Fishing": "钓鱼",
    "Guild": "指南",
    "Inventory": "库存",
    "Leaderboards": "排行榜",
    "leatherworking": "皮革加工",
    "Leatherworking": "皮革加工",
    "Lvl:": "等级:",
    "Logging": "伐木",
    "Mining": "采矿",
    "Magic": "魔法",
    "News": "新闻",
    "Other": "其他",
    "Premium": "会员",
    "Profile": "个人资料",
    "Range": "远程",
    "Range": "远程",
    "Skills": "技能",
    "runecarving": "符文雕刻",
    "Runecarving": "符文雕刻",
    "Total Level:": "总等级:",
    "weaponsmithing": "武器锻造",
    "Weaponsmithing": "武器锻造",
    "Character:": "角色:",
    "Game Guide": "游戏指南",
    "Alpha": "α",
    "Armorsmithing": "锻造盔甲",
    "Auction House": "拍卖行",
    "Bestiary": "动物寓言集",
    "Combat in your Area": "在你的区域战斗",
    "cooking": "烹饪",
    "Cooking": "烹饪",
    "fletching": "造箭",
    "Fletching": "造箭",
    " Hillside": "山坡",
    "Harvesting": "采集",
    "Health": "生命值",
    "Inactive": "不活跃",
    "Jewelry": "珠宝",
    "Melee": "近战",
    "Pets": "宠物",
    "Quests": "任务",
    "Relicarium": "遗物室",
    "Rodsmithing": "棒杖制造",
    "Rules": "规则",
    "Social": "社交",
    "Tailoring": "裁剪",
    "Vendor": "供应商",
    "Action Time:": "动作时间：",
    "Any": "任意",
    "Baquith Spices": "巴奎斯香料",
    "Bluebells": "蓝铃花",
    "Cave Lichen": "洞穴苔藓",
    "Current Experience:": "当前经验：",
    "Cursed Ambergris": "被诅咒的龙涎香",
    "Cursed Branch": "被诅咒的树枝",
    "Desert Ironwood": "沙漠铁木",
    "Dwarven Alloy": "矮人合金",
    "Elite": "精英",
    "Experience:": "经验:",
    "Firestone": "火石",
    "Gale Iron": "疾风铁",
    "Heka Rod": "赫卡棒",
    "High Carnation": "高级康乃馨",
    "Highgarden Dew": "高庭之露",
    "Huascaya Leaves": "梅花叶",
    "Lanceleaf": "兰斯叶",
    "Level:": "等级:",
    "Lotus Flower": "莲花",
    "Mithril": "秘银",
    "Mithril Staff": "秘银杖",
    "Normal": "普通",
    "Olive": "橄榄木",
    "Purple Petal Glass": "紫色花瓣玻璃",
    "Quality:": "品质：",
    "Red Chain": "红色链",
    "Red Oak": "红橡木",
    "rodsmithing": "棒材锻造",
    "Sunstone": "日长石",
    "Tier:": "层级：",
    "Underoot": "脚下",
    "Unlearned": "未学",
    "Wild Pine": "野松木",
    "Willow": "柳树",
    "XP:": "经验值：",
    "Time:": "时间:",
    "logging": "伐木",
    "Show only available": "仅显示可用",
    "Asira Desert": "亚西拉沙漠",
    "Highgarden": "高庭",
    "Nimbar's Gorge": "宁巴峡谷",
    "Region Travel": "区域旅行",
    "Roglaria Lake": "玫瑰花湖",
    "Skyreach Hollows": "天及空谷",
    "Armor:": "护甲：",
    "Attack Power:": "攻击力：",
    "Attributes": "属性",
    "Combat Style:": "战斗风格:",
    "Critical Chance:": "暴击率：",
    "Critical Damage:": "暴击伤害：",
    "Health:": "生命值:",
    "Olive Shortbow": "橄榄短弓",
    "Unequip": "脱下",
    "Amount:": "数量:",
    "Armor": "护甲",
    "Card": "卡牌",
    "Category:": "类别:",
    "Claim": "领取",
    "Cloth": "布料",
    "Essence": "精华",
    "Filter by Category:": "按类别筛选：",
    "Filter by name:": "按名称过滤：",
    "Fish": "鱼",
    "Food": "食物",
    "Gem": "宝石",
    "Herb": "药草",
    "Key": "钥匙",
    "Leather": "皮革",
    "Map": "地图",
    "Ore": "矿石",
    "Pet": "宠物",
    "Placeholder": "占位符",
    "Potion": "药水",
    "Reagent": "试剂",
    "Recipe": "配方",
    "Redbelly Minnow": "红腹鲦鱼",
    "Rose Rosemary": "玫瑰迷迭香",
    "Rosemary": "迷迭香",
    "Rune": "符文",
    "Sell": "出售",
    "Some say that lead is more valuable than gold.": "有人说铅比黄金更有价值。",
    "Tool": "工具",
    "Trophy": "奖杯",
    "Value:": "价值：",
    "Weapon": "武器",
    "Wood": "木头",
    "Combat Log": "战斗日志",
    "Healing": "治疗",
    "Healing Threshold": "治疗阈值",
    "Leave": "离开",
    "Not in Combat": "不在战斗中",
    "Training": "训练",
    "Training Attribute": "训练属性",
    "max": "最大",
    "min": "最小",
    "Requirements": "要求",
    "Required:": "需要:",
    "Open Combat": "开放战斗",
    "Dungeon": "地下城",
    "damage.": "伤害.",
    "deals": "造成",
    "Anvilwing": "铁砧",
    "Barky": "汪汪",
    "Beloren": "贝洛伦",
    "Bladebeak": "剑喙",
    "Bonuses": "加成",
    "Cauldra": "坩埚",
    "Cinnabun": "肉桂",
    "Collected:": "已收集：",
    "Crawlixir": "小爬虫",
    "Doughball": "面团团",
    "erboards": "板板",
    "Esmeray": "埃斯默里",
    "Floran": "弗洛伦",
    "Forgebeak": "忘喙",
    "Frank": "弗兰克",
    "Gemlin": "双叶藻",
    "Glimmor": "微光",
    "Guppy": "古比鱼",
    "hide": "隐藏",
    "jewelry": "珠宝",
    "Leafwhisker": "叶须",
    "Nimbri": "宁布里",
    "Nugget": "金块",
    "Pebble": "卵石",
    "Pet Bonuses": "宠物加成",
    "Quivren": "奎夫伦",
    "Runtra": "润特拉",
    "Sageclaw": "蒿子",
    "Scrolly": "滚动",
    "Selene": "月之女神",
    "Sharpil": "夏皮尔",
    "Solar Shard": "太阳能碎片",
    "Stitchclaw": "针线爪",
    "There are no pet bonuses yet.": "暂无宠物加成",
    "Yen": "银",
    "experience": "经验值",
    "Description": "介绍",
    "Available:": "可用:",
    "Begin Crafting": "开始制作",
    "Defence:": "防御:",
    "Range Level:": "远程等级:",
    "Attack Level:": "攻击等级:",
    "Defence Level:": "防御等级:",
    "Class:": "职业:",
    "Items to craft:": "制作物品：",
    "Melee Level:": "近战等级：",
    "armorsmithing": "锻造盔甲",
    "Bloodcloth": "血布",
    "Crafting Requirements": "制作要求",
    "Dwarven Armor Shard": "矮人盔甲碎片",
    "Giant Cobweb": "巨型蜘蛛网",
    "Luminous Brimstone": "发光的硫磺",
    "Moonshade Shell": "月影贝壳",
    "Equip": "装备",
    "Required Materials": "所需材料",
    "Cavefish": "洞穴鱼",
    "Completed Actions:": "完成的动作:",
    "Idle Session Results": "放置会话结果",
    "No experience gained yet.": "暂未获得经验。",
    "No Items obtained yet.": "暂未获得物品。",
    "Obtained Items": "获得的物品",
    "Rainbow Trout": "彩虹鳟",
    "Salmon": "大马哈鱼",
    "Session Information": "会话信息",
    "Earned Experience": "获得的经验值",
    "Crab": "螃蟹",
    "Pike": "梭鱼",
    "Trout": "鳟鱼",
    "Minnow": "鲦鱼",
    "HP:": "生命值:",
    "HP EXP:": "生命经验值:",
    "EXP:": "经验值:",
    "ATK:": "攻击:",
    "Details": "详情",
    "Name": "名称",
    "Show Details": "显示详情",
    "Show Loot": "显示战利品",
    "This enemy has no loot.": "这个敌人没有战利品。",
    "This enemy has no special abilities.": "这个敌人没有特殊能力。",
    "Region": "地区",
    "Adventure yourself into a dungeon to fight powerful foes and claim its treasures.": "冒险进入地下城，与强大的敌人战斗，并获得它的宝藏。",
    "Combat in": "战斗于",
    "Fight constantly with random enemies in the local area until you run out of health or the action time expires.": "持续与区域内的随机敌人战斗，直到生命耗尽或行动时间结束。",
    "begins.": "已开始。",
    "Combat against": "对抗",
    "has been defeated by": "被敌人击败了，对方是",
    "No Food": "无食物",
    "Wild Boar": "野猪",
    "No items available to disenchant into this essence.": "没有任何物品可以进入这个精华。",
    "receives": "获得",
    "has defeated": "击败了",
    "Too much effort involved for something this small...": "这么小的事情需要太多的努力...",
    "Total items:": "总计物品:",
    "Underoot Shortbow": "足下短弓",
    "Upper Hand": "占上风",
    "Wild Pine Shortbow": "野松短弓",
    "Willow Shortbow": "柳木短弓",
    "XP.": "经验值。",
    "Runic Essence": "符文精华",
    "Red Oak Shortbow": "红橡木短弓",
    "Nimbar's Leech": "宁巴尔的吸血魔",
    "Healing:": "治疗:",
    "seconds": "秒",
    "Disenchant All": "全部解除附魔",
    "Disenchant Selected": "解除选中",
    "Disenchanting": "解除附魔",
    "Rune of Attack": "攻击符文",
    "Rune of Critical": "暴击符文",
    "Rune of Defence": "防御符文",
    "The perfect weapon design for a soft, heavy metal.": "对于柔软的重金属来说，这是完美的武器设计。",
    "has obtained:": "获得了:",
    "heals for": "治疗了",
    "Health.": "生命值。",
    "Bandit Acolyte": "暗行者随从",
    "Bandit Ambusher": "暗行者伏兵",
    "Pale Scorpion": "苍白之蝎",
    "While being a calm zone, Golden Hillside hosts some dangerous fauna.": "虽然是一个平静的地区，但金色山坡上有一些危险的动物。",
    "Bandit Deadeye": "暗行者强盗",
    "Character Select": "角色选择",
    "Create": "创建",
    "Loading characters...": "角色加载中...",
    "Solvendra is an idle MMORPG fantasy game that combines idle mechanics with incremental and RPG elements. You can explore dungeons, hunt monsters, gather materials and craft items while you are away. Your character will continue to progress even when you are not actively playing.": "《索文德拉》是一款将空闲机制与增量和RPG元素结合在一起的MMORPG奇幻游戏。当你离开的时候，你可以探索地下城，猎杀怪物，收集材料和制作物品。即使你不积极地玩游戏，你的角色也会继续进步。",
    "Certain actions are now canceled when traveling to a new Region. The exceptions are:-Gathering actions where the gathered item is also present in the new region.-Crafting actions, which require no region.-Combat (Hunting and Dungeons) are both cancelled.": "当旅行到一个新的区域时，某些动作现在被取消。例外情况是：-收集行动，收集的物品也出现在新的区域。-制作行动，不需要区域。战斗（狩猎和地下城）都取消了",
    "Changes": "变更",
    "Features": "功能",
    "Fixes": "修复",
    "Added a close button to Region Travel and Crafting modals.": "增加了一个关闭按钮的区域旅行和锻造模式。",
    "Added a Relicarium progress bar. Now it shows the total obtained trophies and bonus time.": "增加了遗物馆进度条。现在它显示了获得的总奖杯和奖励时间。",
    "Added Changelog page and fixed its broken link on the side bar.": "增加了更改日志页面，并修复了它在侧栏上的断开链接。",
    "Alpha players will be rewarded on release for playing the game.": "Alpha玩家将在游戏发布后获得奖励。",
    "An introductory game guide can be found at:": "介绍性游戏指南可在以下网站找到：",
    "Combat log has been reworked and now also shows the loot.": "战斗记录已经重做，现在也显示战利品。",
    "Disenchanting Modal does not allow to disenchant items anymore if requirements are not fulfilled.": "解除附魔模式不允许解除物品的附魔，如果没有满足要求。",
    "Fixed Food Panel in Equipment missing its frame.": "修复了装备中食物面板缺少边框的问题。",
    "Fixed learned Recipes not being properly reported to the client.": "修正了习得的食谱没有正确地报告给客户端。",
    "Fixed new items being added into the last slot of the inventory. Now its ordered in their right place.": "修复了新物品被添加到背包的最后一个槽的问题。现在它被安排在了正确的位置。",
    "Fixed range/magic Leaderboards being swapped.": "修复了射程/魔法排行榜互换的问题。",
    "Game guide": "游戏指南",
    "Patch 0.25-alpha Notes": "补丁0.25-alpha说明",
    "Portal": "门户网站",
    "Reworked Disenchanting Modal to match other modals. Also, it displays a text when no items are available.": "重制了祛魅模式以匹配其他模式。此外，当没有可用的项目时，它会显示一个文本。",
    "Welcome to Solvendra!": "欢迎来到 索文德拉！",
    "Atop a hill surrounded by a field of flowers, Yen tends to watch over his loved ones. It also serves as the perfect place to take in and see the beauty of the night sky": "在被鲜花环绕的山顶上，甄子丹看护着他所爱的人。它也是观赏美丽夜空的理想场所",
    "Magic Level:": "魔法等级:",
    "This panda does more than just eat shoots and leaves! You will always find her home smelling of freshly made sweet and sticky buns. But be careful! Impatient fingers will get a righteous smack from her little paw!": "这只熊猫不只是吃嫩芽和树叶！你总能在她家闻到新鲜出炉的甜包子的味道。但是要小心！急躁的手指会得到她小爪子的正义拍打！",
    "Categories": "分类",
    "Level": "等级",
    "Level / XP": "等级 / 经验值",
    "UniqueTrophies": "独特奖杯",
    "Unique Trophies": "独特奖杯",
    "Total Trophies": "总计奖杯",
    "Cards": "卡牌",
    "Radiant Cards": "闪耀卡牌",
    "Gold": "金币",
    "Rank": "排名",
    "XP": "经验值",
    "Action Bar": "行动条",
    "Combat Skills": "战斗技能",
    "Combat Styles": "战斗风格",
    "Crafting": "制作",
    "Dungeon keys": "地下城钥匙",
    "Dungeons": "地下城",
    "FAQ": "常见问题",
    "Gathering": "采集",
    "General": "常规",
    "Travel": "旅行",
    "Please select a subcategory to obtain information.": "请选择一个子类别以获取信息。",
    "chance to spawn a miniboss enemy that has high chances of dropping a key or crafting materials.": "有机会产生一个小boss敌人，有很高的机会掉落一个钥匙或制造材料。",
    "Every region has an open combat hunting field where random monsters appear.": "每个区域都有一个开放的战斗狩猎场，在那里随机出现怪物。",
    "Open combat": "开放战斗",
    "Then the available combat options will be displayed, and the player must click on “Open Combat”.": "然后将显示可用的战斗选项，玩家必须点击”开放战斗”。",
    "There is a": "有一个",
    "To start defeating enemies, the player must go to “Combat in your area” on the sidebar.": "为了打败敌人，玩家必须进入侧边栏上的“战斗区域”。",
    "Defeated Enemies": "击败怪物",
    "A curved tusk, hardened from fierce battles over the years.": "一根弯曲的长牙，在多年的激烈战斗中变得更加坚硬。",
    "Aurivale Olives": "奥瑞维尔橄榄",
    "Lead": "铅",
    "Lead Mace": "铅狼牙棒",
    "The most renowned export of Golden Hillside.": "金色山坡最著名的出口产品。",
    "Price per unit:": "单价:",
    "Total value:": "总价值:",
    "Total:": "总计:",
    "After clicking on “Claim”, the claim view will be displayed with the details of the item that is about to be claimed. Finally, the player can confirm the claim by clicking “Claim” once again.": "点击“领取”后，将显示领取视图，显示即将领取的物品的详细信息。最后，玩家再次点击“领取”按钮，即可确认领取。",
    "After clicking on one crafting skill, the player will get the items details of the selected skill, it contains what item can be crafted and what resources are needed. To proceed to craft an item, the player must click on one item.": "在点击一项制作技能后，玩家将获得所选技能的道具细节，其中包含可以制作的道具以及所需的资源。为了继续制作道具，玩家必须点击一个道具。",
    "Defense:": "防御:",
    "Range:": "远程:",
    "Melee:": "近战:",
    "Magic:": "魔法:",
    "Attack:": "攻击:",
    "Combat styles": "战斗风格",
    "Combat skills": "战斗技能",
    "Changing a weapon will change the character's combat style, be aware that equipment is also tied to combat style. For example, a mage should use magic equipment, otherwise its bonuses won't be added to the character’s stats.": "改变武器将改变角色的战斗风格，请注意装备也与战斗风格联系在一起。例如，法师应该使用魔法装备，否则它的奖励不会添加到角色的属性中。",
    "Afterward, the item crafting details view will appear, and the player will have a detailed description (1) of what is required to craft the selected item.  Also, the player can select how many items to craft on the input bar (2) and start the action (3) with the “BEGIN CRAFTING” button.": "之后，将出现道具制作细节视图，玩家将看到制作所选道具所需的详细描述。此外，玩家可以在输入栏(2)选择制作多少物品，并通过“开始制作”按钮开始行动(3)。",
    "Afterward, the disenchanting view will be displayed, and the play must choose what equipment to disenchant. The “DISENCHANT ALL” button (1) will turn everything shown on the view into dust.": "之后，将显示解除附魔视图，并且玩家必须选择什么装备去解除附魔。“解除所有”按钮(1)将把视图上显示的所有东西都变成灰尘。",
    "If the player doesn't have any keys, please check “Dungeon entry key” on the game guide, otherwise the player can select (1) the amount of times that the dungeon can be run and start (2) the adventure.": "如果玩家没有任何钥匙，请在游戏指南中勾选“地下城进入钥匙”，否则玩家可以选择(1)地下城可以运行的次数并开始(2)冒险。",
    "The player can also decide what items to disenchant by selecting an item (2) which will get a blue selection border, then on the input box (2), the player can choose the amount of equipment to disenchant. To confirm, the player must click on the “CONFIRM” button (3).": "玩家还可以通过选择一个物品(2)来决定要解除哪些物品的附魔，它将得到一个蓝色的选择边界，然后在输入框(2)上，玩家可以选择解除附魔的装备数量。为了确认，玩家必须点击“确认”按钮(3)。",
    "The relicarium is a feature that allows the player to claim extra idle time in exchange for trophies, certain equipment and pets. The total idle time starts at 8 hours and is planned to be increased up to 24 hours.": "遗物是一种允许玩家用额外的空闲时间来换取奖杯、特定装备和宠物的功能。总放置时间从8小时开始，计划增加到24小时。",
    "To do": "待办",
    "ActionBar": "动作条",
    "After buying food or fishing and cooking the fish to obtain food, the player must equip it from the inventory view.": "在购买食物或捕鱼并烹饪鱼以获得食物后，玩家必须从库存视图中装备它。",
    "After equipping the food, it will be displayed on the equipment view or on the current combat view by clicking “threshold healing”.": "装备完食物后，点击“治疗阈值”会显示在装备视图或当前战斗视图上。",
    "Afterwards, the skill view will be displayed, and the player must choose a resource to gather.": "之后，将显示技能视图，玩家必须选择一种资源来收集。",
    "All regions have a different entry key, but all dungeons inside the same region shares the same entry key.": "所有区域都有不同的入口键，但同一区域内的所有地下城共享相同的入口键。",
    "Click on “buy keys”.": "点击“购买钥匙”。",
    "Current action bar is missing features.": "当前操作栏缺少功能。",
    "Current travel is temporary.": "目前的旅行是暂时的。",
    "Dungeon entry key": "地下城入口钥匙",
    "Each category has a counter of how many trophies have been claimed (1) and a total amount of time obtained per category (2).": "每个类别都有一个计数器，显示有多少奖杯被认领(1)，以及每个类别获得的总时间(2)。",
    "Every combat style has a bonus of 20% damage or penalization of 10% damage against enemies.": "每一种战斗风格都有20%伤害的加成或10%伤害的惩罚。",
    "Every region has 3 or more dungeons with different type of rewards.": "每个区域都有3个或更多带有不同类型奖励的地下城。",
    "Finally, on the “threshold healing” (1) in the combat view, the player can choose at what health to consume food by sliding the slide (2) bar or typing in the amount.": "最后，在战斗视图中的“治疗阈值”(1)中，玩家可以通过滑动滑动条(2)或输入数量来选择在什么生命值下消耗食物。",
    "Finally, the player can click on the “DISENCHANT SELECTED” button (5) to begin disenchanting.": "最后，玩家可以点击“解除附魔选择”按钮(5)开始解除附魔。",
    "First click on the item, select the amount and click on “Equip”.": "首先点击物品，选择数量，然后点击“装备”。",
    "Increases damage when wearing a magic weapon.": "佩戴魔法武器时增加伤害。",
    "Increases damage when wearing a melee weapon.": "佩戴近战武器时增加伤害。",
    "Increases damage when wearing a ranged weapon.": "佩戴远程武器时增加伤害。",
    "Increases the total health of the character by 10 every level.": "每升一级使角色的生命值增加10。",
    "Keep in mind that every region has different resources.": "记住，每个地区都有不同的资源。",
    "Needed to equip better equipment, necklaces or defense runes.": "需要装备更好的装备，项链或防御符文。",
    "Needed to equip better weapons, rings or attack/critical runes.": "需要装备更好的武器、戒指或攻击/暴击符文。",
    "Shortly after the combat options will be displayed and the player must click on the desired dungeon.": "在战斗选项出现后不久，玩家必须点击想要的地下城。",
    "Solvendra has 3 different combat styles which are melee, ranged and magic. This is applied to enemies and characters.": "索文德拉有3种不同的战斗风格，近战，远程和魔法。这适用于敌人和角色。",
    "That will update the total items (4) to disenchant on the select item that has been select.": "这将更新总物品(4)，以解除已选择物品上的魔法。",
    "The first way to obtain the key is to defeat enemies on the open combat hunting field. All monsters have a percentage to drop it.": "获得钥匙的第一种方法是在开放的战斗狩猎场上击败敌人。所有怪物都有一定的掉落百分比。",
    "The runecarving skill works a bit differently than the rest. It uses crafted equipment as resources to turn them into runic essences, which are used to craft powerful runes.": "符文雕刻技能的工作方式与其他技能略有不同。它使用精心制作的装备作为资源，将其转化为符文精华，用于制作强大的符文。",
    "The second way to obtain keys is to purchase them on the vendor or to buy them inside the dungeon, the option will be displayed after selecting a dungeon.": "第二种获得钥匙的方式是在供应商处购买或在地下城内购买，选择地下城后会显示该选项。",
    "Then the player will get the view to purchase them.": "然后玩家将获得购买它们的视图。",
    "There are 10 crafting skills: Tailoring, Leatherworking, Armorsmithing, Rodsmithing, Fletching, Weaponsmithing, Jewelry, Runecarving, Alchemy and Cooking.": "有10种工艺技能：剪裁，皮革加工，盔甲锻造，铁条锻造，造箭，武器锻造，珠宝，符文雕刻，炼金术和烹饪。",
    "There are 3 tiers of coloring, but only the bronze one rewards idle time. The silver and gold is for collection purposes.": "游戏中有3层颜色，但只有青铜色奖励放置时间。金银是用来收藏的。",
    "There are 4 resource gathering skills: harvesting, logging, mining and fishing.": "有4种资源收集技能：收获、伐木、采矿和捕鱼。",
    "This can be repeated for every equipment on the view.": "这可以在视图上的每个设备上重复。",
    "Those skills can be found on the sidebar, at the Skill category.": "这些技能可以在侧边栏的技能类别中找到。",
    "Those use resources gathered from gathering or hunting to create new items such as equipment, food, runes, trinkets, etc.": "他们使用从采集或狩猎中收集的资源来创造新道具，如装备，食物，符文，饰品等。",
    "To begin a dungeon the player must click on “Combat in your area” on the sidebar.": "要开始地下城，玩家必须点击侧边栏上的“战斗区域”。",
    "To claim a trophy, go to the inventory and click a claimable item. Afterward, a “Claim” button will appear.": "要领取奖杯，请前往库存并点击可领取物品。之后会出现“领取”按钮。",
    "To disenchant equipment, click on any runic essence displayed after getting into runecarving.": "要解除装备的附魔，点击进入符文雕刻后显示的任何符文精华。",
    "To gather those resources, first navigate to the sidebar, to the skills category and click on the desired one.": "要收集这些资源，首先导航到侧边栏，到技能类别，然后单击所需的一个。",
    "To see the current character combat style, the player must go to the equipment view.": "要查看当前角色的战斗风格，玩家必须进入装备视图。",
    " Tusk": "獠牙",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    " Staff": "杖",
    " Vase": "花瓶",
    " Toy": "玩具",
    " Spices": "香料",
    " Axe": "斧",
    " Spear": "矛",
    " Shortsword": "短剑",
    " Gladius": "单手剑",
    " Khopesh": "弯刀",
    " Mace": "狼牙棒",
    " Skin": "皮毛",
    " Helmet": "头盔",
    " Chestplate": "板甲",
    " Shoulders": "肩膀",
    " Legs": "腿",
    " Headgear": "头饰",
    " Ingot": "锭",
    " Wand": "魔杖",
    " Bow": "弓",
    " Ring": "戒指",
    " Necklace": "项链",
    " Coif": "头巾",
    " Leather": "皮",
    " Wrist Guard": "护腕",
    " Vest": "背心",
    " Shoulderguard": "护肩",
    " Tunic": "外衣",
    " Shawl": "披肩",
    " Leggings": "护腿",
    " Hat": "帽子",
    " Gloves": "手套",
    " Boots": "靴子",
    "Loading Solvendra...": "正在加载 索文德拉...",
    "Solvendra": "索文德拉",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "/": "/",
    "": "",
    "%": "%",
    "(+": "(+",
    "−": "",
    "likexiazai@qq.com": "likexiazai@qq.com",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "Linen": "亚麻",
    "Marauder": "掠夺者",
    "Osirian": "奥西里斯",
    "Wolf": "狼",
    "Wool": "羊毛",
    "Ruby": "红宝石",
    "Opal": "蛋白石",
    "Nimbari": "宁巴里",
    "Iron": "铁",
    "Steel": "钢",
    "Cobalt": "钴",
    "Copper": "铜",
    "Chromite": "铬铁矿",
    "Chromite": "铬铁矿",
    "Aetherial": "苍穹",
    "Baquith": "巴奎斯",
    "Barkin": "巴尔金",
    "Amethyst": "紫水晶",
    "Aquamarine": "海蓝宝石",
    "Nilecore": "尼罗岩心",
    "Sapphire": "Sapphire",
    "Thorin": "钍",
    "Darksteel": "暗钢",
    "Topaz": "黄玉",
    "Durgur": "杜尔瓜",
    "Mithril": "秘银",
    "Viperkin": "蝰蛇",
    "T1 Reagent": "T1试剂",
    "T2 Reagent": "T2试剂",
    "Troll": "巨魔",
    "Boar": "野猪",
    "Crocodile": "鳄鱼",
    "Deer": "鹿",
    "Goat": "山羊",
    "Khazar": "哈扎尔",
    "Salamander": "火蜥蜴",
    "Cooked ": "煮熟的",
    "Fine ": "上等",
    "Silk": "丝绸",
    "Klaun": "克洛恩",
    "Eldweave": "古老织物",
    "Cotton": "棉花",
    "Cashmere": "羊绒",
    "Dryad": "森林女神",
    "Fennali": "芬纳利",
    "Golden": "黄金",
    "Estia": "艾斯蒂亚",
    "wood": "木",
    "Wood Carved": "木雕",
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
    [/^([\d\.,]+) elves$/, '$1 精灵'],
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