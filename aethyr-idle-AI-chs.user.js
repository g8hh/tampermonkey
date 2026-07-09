// ==UserScript==
// @name         Aethyr Idle 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Aethyr Idle (https://aethyridle.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Aethyr Idle.
// @author       好阳光的小锅巴 & 麦子、人民当家做主
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://aethyridle.com/favicon.svg
// @license      MIT
// @include      *https://aethyridle.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/aethyr-idle-AI-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/aethyr-idle-AI-chs.user.js
// ==/UserScript==

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
            "Cost: {{0}}": "消耗：{{0}}",
            "Next Improvement: {{0}}": "下次提升：{{0}}",
            "T+{{0}}s": "T+{{0}}s",
            "T+{{0}}s": "T+{{0}}s",
            "Cast Vagrant Strike for {{0}} damage!": "施放流浪突刺，造成 {{0}} 伤害！",
            "Restores {{0}} HP": "恢复 {{0}} 生命值",
            "Restores {{0}} Mana": "恢复 {{0}} 法力值",
            "Restores {{0}} HP.": "恢复 {{0}} 生命值.",
            "Restores {{0}} Mana.": "恢复 {{0}} 法力值.",
            "Level {{0}}": "等级{{0}}",
            "Level {{0}}": "等级{{0}}",
            "CRIT! {{0}} damage": "暴击！{{0}} 伤害",
            "{{0}} x {{1}}": "{{0}} × {{1}}",
            "{{0}} MP / {{1}}%": "{{0}} 法力值 / {{1}}%",
            "{{0}} / {{1}} remaining": "{{0}} / {{1}} 剩余",
            "{{0}}/{{1}} left": "{{0}}/{{1}} 剩余",
            "Step {{0}} of {{1}}": "步骤 {{0}} / {{1}}",
            "Lvl {{0}}-{{1}}": "等级 {{0}}-{{1}}",

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
            "{{%d}}h ago": "{{%d}} 小时前",
            "Sell {{%d}}": "出售 {{%d}}",
            "Combat Level {{%d}}": "战斗 等级 {{%d}}",
            "Month {{%d}}": "月份 {{%d}}",
            "Requires Level {{%d}}": "要求等级 {{%d}}",
            "Lv. {{%d}} required": "要求等级 {{%d}}",
            " - Ring {{%d}}": " - 戒指 {{%d}}",
            "Slot {{%d}}": "槽位 {{%d}}",
            "Lvl {{%d}}": "等级 {{%d}}",
            "Depth {{%d}}+": "深度 {{%d}}+",
            "HP: {{%d}}": "生命值：{{%d}}",
            "DMG: {{%d}}": "伤害：{{%d}}",

            // --- Aethyr Idle 模板 ---
            "smithing Lv.{{0}} — requires {{1}}×": "锻造 等级 {{0}} — 需要 {{1}}×",
            "enchanting Lv.{{0}} — requires {{1}}×": "附魔 等级 {{0}} — 需要 {{1}}×",
            "alchemy Lv.{{0}} — requires {{1}}×": "炼金 等级 {{0}} — 需要 {{1}}×",
            "leatherworking Lv.{{0}} — requires {{1}}×": "皮革加工 等级 {{0}} — 需要 {{1}}×",
            "woodworking Lv.{{0}} — requires {{1}}×": "伐木 等级 {{0}} — 需要 {{1}}×",
            "cooking Lv.{{0}} — requires {{1}}×": "烹饪 等级 {{0}} — 需要 {{1}}×",
            "jewelry Lv.{{0}} — requires {{1}}×": "珠宝加工 等级 {{0}} — 需要 {{1}}×",
            "Crafting... ({{0}}%)": "制作中... ({{0}}%)",
            "{{0}}g (Lv.{{1}})": "{{0}}金币 (等级 {{1}})",
            "smithing (Lv.{{0}})": "锻造 (等级 {{0}})",
            "x{{0}}": "×{{0}}",
            "Lv.{{0}} ({{1}}% drop)": "等级 {{0}} ({{1}}% 掉落)",
            "Add to Queue (x{{0}})": "添加到队列 (x{{0}})",
            "{{0}} consecutive days on campaign": "连续 {{0}} 天参加活动",
            "+{{0}} more recipes...": "+{{0}} 更多的配方...",
            "+{{0}} more...": "+{{0}} 更多...",
            "{{0}} HP / {{0}}%": "{{0}} 生命值 / {{1}}%",
            "Gather {{0}} resources this week — the Outpost needs supplies.": "本周收集 {{0}} 份资源 —— 前哨站急需物资。",
            "Defeat {{0}} enemies this week.": "本周击败 {{0}} 敌人.",
            "Defeat {{0}} enemies in combat.": "在战斗中击败 {{0}} 敌人.",
            "\n{{0}}x{{1}}\n{{2}}": "\n{{0}}x{{1}}\n{{2}}",
            "Combat Level {{0}} Required ({{0}})": "需要达到 {{0}} 级战斗等级（{{1}}）",
            "\"Good. You can fight. Check your Inventory — enemies drop useful loot.\"": "\"不错。能打。检查背包——敌人会掉落有用的战利品。\"",
            "Null Gravity — your attack speed drops 22%, spells cost +40% mana, and you take +15% damage.": "归零重力——攻击速度降低22%，法术法力消耗+40%，承受伤害+15%。",
            "Nv. ": "等级 ",
            " - Lvl {{0}}": " - 等级 {{0}}",
            "LOCKED · Lvl {{0}}": "已锁定 · 等级 {{0}}",
            "{{0}} gems for €{{1}}": "{{0}} 宝石 €{{1}}",
            "While you were away, your hero channeled a Leyline, performing {{0}} actions.": "当你离开时，你的英雄引导了魔脉，完成了{{0}}次行动。",
            "Defeat all zone enemies ({{0}} remaining)": "击败区域内所有敌人（剩余{{0}}）",
            "Reach combat level {{0}} to ascend. (You are level {{1}}).": "达到{{0}}级战斗等级以飞升。（你当前{{1}}级）。",
            "{{0}}h {{1}}m {{2}}s": "{{0}}时{{1}}分{{2}}秒",
            "Lv.{{0}}": "等级 {{0}}",
            " ATK": " 攻击",
            " INT": " 智力",
            " MAGIC DMG": " 魔法伤害",
            " STR": " 力量",
            "% CRIT": "% 暴击率",
            "2 themes · 4 titles · or save toward a portrait": "2个主题 · 4个头衔 · 或攒着换头像",
            "2× more gems — one-time offer": "2倍宝石 — 限时优惠",
            "A live search box has been added to the leaderboard. Start typing a name and matching players appear as you go, even those ranked far outside the top 50. Pick one to open their full profile.": "排行榜新增实时搜索框。输入名字即可动态匹配玩家，包括前50名之外的。点击可查看完整资料。",
            "Aethyr Idle is coming to Steam, and adding it to your wishlist is the single biggest way you can help. A Wishlist button now sits in the top bar": "Aethyr Idle即将登陆Steam，加入愿望单是你最有力的支持方式。顶栏现已添加愿望单按钮",
            "Choose Your Destiny": "选择你的命运",
            "Class selected": "职业已选择",
            "Close — this offer will disappear permanently": "关闭 — 此优惠将永久消失",
            "Coming to Steam": "即将登陆Steam",
            "Crit · Poison · Dodge": "暴击 · 中毒 · 闪避",
            "Damage · Attack Speed · Block": "伤害 · 攻击速度 · 格挡",
            "Normal price": "原价",
            "One-time offer · Never shown again": "限时优惠 · 不再显示",
            "Power scales with Combat skill": "威力随战斗技能成长",
            "Power scales with Magic skill": "威力随魔法技能成长",
            "Power scales with Ranged skill": "威力随远程技能成长",
            "Progress capped at 8 hours.": "进度上限8小时。",
            "RANGER!": "游侠！",
            "Select Mage": "选择法师",
            "Select Ranger": "选择游侠",
            "Select Rogue": "选择盗贼",
            "Select Warrior": "选择战士",
            "Spells · Freeze · Attack Speed": "法术 · 冰冻 · 攻击速度",
            "Starter Pack": "新手礼包",
            "Starting Bonuses": "初始加成",
            "Talents": "天赋",
            "The best value in the game, available once.": "全游戏性价比最高，限购一次。",
            "The in-game Guide has been fully reviewed and updated. Some entries had fallen out of date as the game evolved, so a few numbers and descriptions no longer matched what actually happens in game. Everything has been checked against the live game, and the data is now accurate across every section.": "游戏内指南已全面复核更新。随着游戏迭代，部分数据曾与实机不符，现已逐一核对修正，所有条目准确无误。",
            "This choice is permanent and cannot be changed": "此选择为永久性，不可更改",
            "WISHLIST": "愿望单",
            "What you can get": "可获奖励",
            "You can now select any player on the leaderboard to open their profile. See their class and every level, their standing in each ranked category, and browse their full equipment with the same detailed tooltips as your own gear, right down to the spells and talents they run. The best way to study how the top players are built.": "现在可点击排行榜任意玩家查看资料。查看职业和各项等级、排名名次，并像看自己装备一样浏览他们的完整装备详情，含法术和天赋配置。研究顶尖构建的最佳方式。",
            "You've proven yourself, Vagabond. Now choose your specialization to unlock powerful talents and spells.": "你已证明自己，流浪者。现在选择专精方向，解锁强力天赋和法术。",
            "for": "兑换",
            "one click takes you straight to the Steam page. It costs nothing, it puts you there on day one, and it genuinely pushes Aethyr Idle in front of new players at launch. It would mean a lot.": "一键直达Steam页面。零成本，发售首日第一时间体验，更能切实帮助Aethyr Idle触达新玩家。这真的很重要。",
            "+1-2% base bonus. Noticeable but small.": "+1-2%基础加成。有感但微小。",
            "+12-18% bonus + a qualitative transformation tag (uncapped killstreak, overheal on combat start, account-wide damage growth, etc.).": "+12-18%加成 + 质变标签（无上限连杀、开战过量治疗、全账号伤害成长等）。",
            "+3-5% bonus. The Imperative starts being felt.": "+3-5%加成。律令效果开始显现。",
            "+50% damage.": "+50%伤害。",
            "+6-10% bonus + sometimes a secondary stat.": "+6-10%加成 + 偶尔附带次要属性。",
            "1.2k": "1.2k",
            "18.0k": "18.0k",
            "27.3k": "27.3k",
            "276.4k": "276.4k",
            "29.6k": "29.6k",
            "301.6k": "301.6k",
            "2 slots (the second starts locked and must be unlocked with Essence and gold).": "2个栏位（第二个初始锁定，需用精华和金币解锁）。",
            "A massive dwarven forge consumed by volcanic fire. The ancient machinery still churns, commanded by a mad elemental lord.": "被火山烈焰吞噬的宏伟矮人熔炉。古老机械仍在轰鸣，由疯狂元素领主操控。",
            "A network of abandoned mines now occupied by the Crimson Veil syndicate. Descend into darkness.": "深红帷幕集团占据的废弃矿道网络。深入黑暗。",
            "A submerged city claimed by the deep. Bioluminescent horrors stalk the crushing darkness.": "被深海吞噬的沉没之城。生物荧光怪物在碾压般的黑暗中潜行。",
            "Absolute Judgement — your damage falls 15%, your crit chance 18%, and you take +15% damage.": "绝对审判 — 伤害降低15%，暴击几率降低18%，承受伤害+15%。",
            "Ancient burial chambers beneath Gloomveil Forest, now awakened by dark Aethyr. The dead do not rest here.": "幽幕森林下的古代墓室，被暗之Aethyr唤醒。亡者在此不得安宁。",
            "Any Skystone-tier or higher item you craft is born with its first affix line already inscribed.": "制作天石级及以上物品时，出生即自带第一条词缀。",
            "Artisan's Vault Key - Lets crafting also draw from materials stored in your bank, in addition to your inventory.": "工匠宝库钥匙 - 制作时可同时使用背包和仓库中的材料。",
            "Ascension unlocks once you begin earning Ascension XP — which becomes possible after a combat skill (Melee, Ranged or Magic) reaches level 100. XP then flows automatically from Mythic+ dungeons, the Abyss, the Celestial Islands, and rune handling (insertion and fusion).": "战斗技能（近战、远程或魔法）达到100级后即可获得飞升经验，解锁飞升系统。经验自动从神话+地下城、深渊、天界岛屿和符文操作（镶嵌与融合）中获取。",
            "Ashblade's Sanctum": "灰刃圣所",
            "Auto-Eat": "自动进食",
            "Auto-Restart": "自动重启",
            "Berserker Rage": "狂战士之怒",
            "Boss Encounters": "Boss遭遇",
            "Bosses shift behaviour as the fight unfolds. Adapt your pace.": "Boss在战斗中改变行为。适应节奏。",
            "Cinderfall Forge": "烬落熔炉",
            "Completing a dungeon rewards you with gold and themed crafting resources (essences, scales, dusts...). These rewards are granted on completion": "通关地下城获得金币和主题制作资源（精华、鳞片、粉尘等）。奖励在通关时发放",
            "Completion rewards": "通关奖励",
            "Costs Abyssal Essence and gold, scaling quadratically with the current infusion level.": "消耗深渊精华和金币，花费随注入等级呈二次增长。",
            "Determines your maximum health pool. Levels up with each enemy defeated, gaining a fraction of your combat XP.": "决定最大生命值。击败敌人获得部分战斗经验来提升。",
            "Dragon's Lair": "龙巢",
            "Dungeons are sequences of back-to-back boss fights. There are 6 dungeons, each with an increasing level requirement:": "地下城是连续Boss战序列。共6个地下城，各有递增等级要求：",
            "ENTER DUNGEON": "进入地下城",
            "Each dungeon is a gauntlet of back-to-back boss fights, with no filler stages:": "每个地下城是连续Boss战考验，无填充关卡：",
            "Epic — true progression milestones, with stronger passives.": "史诗 — 真正的进阶里程碑，拥有更强被动。",
            "Every ten floors, an active Hazard is drawn at random from a shared pool — a passive condition that changes combat until the next draw. The first zone has no hazard; beyond it, any of the four hazards below can roll, regardless of the zone. Plan to adapt your build at each transition.": "每十层从共享池随机抽取一个危险效果——改变战斗的被动状态，持续至下轮抽取。首个区域无危险；之后任意区域都可能触发以下四种之一。每次切换规划好构建调整。",
            "Every tenth floor, a mega-boss blocks your path. These fights are more demanding, but their rewards are greatly increased": "每十层超级Boss挡路。战斗更具挑战，奖励大幅提升",
            "Familiar Passives": "使魔被动",
            "Gloomveil Catacombs": "幽幕地窟",
            "Good to know": "值得了解",
            "Great Vault": "大宝库",
            "Hand-crafted multi-phase encounters where each boss tests your preparation.": "精心设计的多阶段遭遇战，每个Boss考验你的准备。",
            "Higher tier keys require rarer materials (mithril, gold, thorium bars, essences, gems, etc.). All are crafted at Crafting level 90.": "高级钥匙需要更稀有材料（秘银、金、钍锭、精华、宝石等）。均需制作90级制作。",
            "Highest Mythic+ level completed, ranked per dungeon.": "各地下城最高神话+通关等级。",
            "Highest floor reached in the Celestial Islands.": "天界岛屿最高层数。",
            "Ironjaw": "铁颚",
            "Ironjaw blocks the passage with brutal force.": "铁颚以蛮力阻挡去路。",
            "Legendary and Mythic familiars hold the most dramatic ones, able to reshape your build and open doors to entirely new strategies.": "传说和神话使魔拥有最强大的被动，能重塑构建，开启全新策略之门。",
            "Legendary — among the most powerful unique passives, able to transform your builds.": "传说 — 最强大的独特被动之一，能改变构建。",
            "Loot is earned by clearing the dungeon, not by hitting every creature.": "战利品通关时获得，无需击杀每只怪物。",
            "Mastering an Apex affix unlocks the paired Apex Imperative. R4 capstones often REVERSE the Apex penalty (Mana Blight R4 grants +20% max mana, Crit Suppression R4 grants +15% crit chance).": "精通巅峰词缀解锁对应巅峰律令。R4顶点常反转巅峰惩罚（法力枯萎R4 +20%最大法力，暴击压制R4 +15%暴击几率）。",
            "Minor (T1), Lesser (T2), Greater (T3) and Supreme (T4). Higher tiers scale up significantly - a Supreme rune of the same family is worth up to ~16x a Minor for flat stats (the Precision family instead goes from +1% to +5%).": "次级(T1)、低级(T2)、高级(T3)、至高(T4)。高级大幅增长——同族至高符文固定属性约16倍于次级（精准系从+1%至+5%）。",
            "Mythic+ per Dungeon": "各地下城神话+",
            "New Challenge": "新挑战",
            "On defense, Light reduces incoming damage from the 4 base elements by 25% (×0.75); Shadow, however, takes them at full (×1.0).": "防御时，光属性减免4种基础元素25%伤害（×0.75）；暗属性承受全额（×1.0）。",
            "Phased fights": "分阶段战斗",
            "Pick a dungeon within your reach, survive every phase, and claim its completion reward.": "选择力所能及的地下城，存活每一阶段，赢取通关奖励。",
            "Powerful enemies with unique abilities. Hover over a boss stage to see its mechanics.": "拥有独特能力的强敌。悬停Boss关卡查看机制。",
            "Purchase cancelled.": "购买已取消。",
            "Pyre Crucible — all healing is nullified (lifesteal, regen, consumables) and you lose 0.2% max HP per second.": "烈焰熔炉 — 所有治疗无效（吸血、再生、消耗品），每秒损失0.2%最大生命值。",
            "Rare — stronger, and gifted with their first unique passive.": "稀有 — 更强，获得首个独特被动。",
            "Regenerates 1% HP per second.": "每秒恢复1%生命值。",
            "Reward XP": "奖励经验",
            "Shadow Recovery": "暗影恢复",
            "Starting from Rare rarity, every familiar carries a unique passive ability that goes beyond simple stat boosts. These effects grow stronger at higher tiers": "从稀有品质起，每只使魔携带独特被动能力，超越简单属性加成。高级效果更强",
            "Starting zone (Whispering Clouds) — no hazard, a peaceful training ground.": "起始区域（低语云层）— 无危险，和平训练场。",
            "The Abyssal Depths": "深渊之底",
            "The Convergence": "聚合之地",
            "The Hollowed Depths": "虚空深渊",
            "The Iron Bulwark": "铁壁堡垒",
            "The Outpost is a building system that grants permanent passive bonuses. Each building can be upgraded through 15 tiers, with each tier increasing the bonus effect.": "前哨站是提供永久被动加成的建筑系统。每座建筑可升级15级，每级提升加成效果。",
            "The heart of the volcano, where the ancient dragon sleeps on a hoard of unimaginable wealth.": "火山之心，远古巨龙安睡于惊世宝藏之上。",
            "Thunderhead Veil — you take +22% damage and 15% of your attacks miss.": "雷云帷幕 — 承受+22%伤害，15%攻击落空。",
            "Total power score of your equipped gear.": "已装备物品总战力评分。",
            "Triples damage below 40% HP.": "生命值低于40%时三倍伤害。",
            "Veil Strike": "帷幕打击",
            "Voren Ashblade (Depths)": "沃伦·灰刃（深渊）",
            "Voren Ashblade awaits at the helm of his stolen vessel.": "沃伦·灰刃在劫掠之船舵前等候。",
            "Where all realities meet and end. The final challenge.": "万象交汇与终结之地。终极挑战。",
            "Your HP and mana carry over from one boss to the next": "生命值和法力值在Boss间延续",
            "dungeon monsters and bosses do not drop items.": "地下城怪物和Boss不掉落物品。",
            "each victory (online or offline) grants Ascension XP equal to 20% of the defeated boss's combat XP.": "每次胜利（在线或离线）获得飞升经验，等于被击败Boss战斗经验的20%。",
            "gold ×5, XP ×3, and resources ×2. The familiar drop chance, however, is not boosted on these fights. They are the real stopping points of your climb, and the moments you will remember.": "金币×5，经验×3，资源×2。但使魔掉落率不提升。这些是你攀登的真正节点，值得铭记的时刻。",
            "reforging only rerolls the item's rarity — your inserted runes are kept. If the new rarity has fewer sockets, any excess runes are automatically returned to your inventory.": "重铸只重roll稀有度——已镶嵌符文保留。新稀有度孔位更少时，多余符文自动返还背包。",
            "there is no pause to heal, so set up Auto-Eat and Auto-Mana before entering.": "无暂停恢复机会，进入前设置好自动进食和自动法力。",
            "13.5k": "13.5k",
            "+{{0}}% HP Regen per rank.": "每级+{{0}}%生命恢复。",
            "+{{0}}% HP Regen/s": "+{{0}}%生命恢复/秒",
            "+{{0}}% Crit Chance per rank.": "每级+{{0}}%暴击率。",
            "+{{0}}% Damage per rank.": "每级+{{0}}%伤害。",
            "+{{0}}% Dodge Chance per rank.": "每级+{{0}}%闪避。",
            "+{{0}}% Triple Resource Chance per rank.": "每级+{{0}}%三倍资源几率。",
            "+{{0}}% Attack Speed per rank.": "每级+{{0}}%攻击速度。",
            "+{{0}}% Craft Speed per rank.": "每级+{{0}}%制作速度。",
            "+{{0}}% Double Craft Chance per rank.": "每级+{{0}}%双倍制作几率。",
            "+{{0}}% Double Resource Chance per rank.": "每级+{{0}}%双倍资源几率。",
            "+{{0}}% Gather Speed per rank.": "每级+{{0}}%采集速度。",
            "+{{0}}% Gold Find per rank.": "每级+{{0}}%金币获取。",
            "+{{0}}% Save Material Chance per rank.": "每级+{{0}}%节省材料几率。",
            "+{{0}}% Save Material Chance per rank (gathering).": "每级+{{0}}%节省材料几率（采集）。",
            "+{{0}}% XP Bonus (all skills) per rank.": "每级+{{0}}%经验加成（全部技能）。",
            "+{{0}}% Crafting XP per rank.": "每级+{{0}}%制作经验。",
            "+{{0}}% Gathering XP per rank.": "每级+{{0}}%采集经验。",
            "+{{0}}% Gold Find, +{{1}}% XP Bonus per rank.": "每级+{{0}}%金币获取，+{{1}}%经验加成。",
            "+{{0}}% Craft Speed, +{{1}}% Save Material per rank.": "每级+{{0}}%制作速度，+{{1}}%节省材料。",
            "+{{0}}% Craft Speed, +{{1}}% Gold Find per rank. Les objets se vendent plus cher.": "每级+{{0}}%制作速度，+{{1}}%金币获取。物品售价更高。",
            "+{{0}}% Crit Chance, +{{1}}% Crit Damage per rank.": "每级+{{0}}%暴击率，+{{1}}%暴击伤害。",
            "+{{0}}% Dodge Chance, +{{1}}% Attack Speed per rank.": "每级+{{0}}%闪避，+{{1}}%攻击速度。",
            "+{{0}}% Gold Find, +{{1}}% Double Resource per rank.": "每级+{{0}}%金币获取，+{{1}}%双倍资源。",
            "+{{0}}% Max HP, +{{1}}% HP Regen per rank.": "每级+{{0}}%最大生命值，+{{1}}%生命恢复。",
            "+{{0}}% Save Material, +{{1}}% Double Resource per rank. Endless supply of materials.": "每级+{{0}}%节省材料，+{{1}}%双倍资源。材料取之不尽。",
            "+{{0}}% Triple Resource, +{{1}}% Gold Find per rank.": "每级+{{0}}%三倍资源，+{{1}}%金币获取。",
            "+{{0}}% Double Craft, +{{1}}% Save Material per rank.": "每级+{{0}}%双倍制作，+{{1}}%节省材料。",
            "+{{0}}% Double Resource, +{{1}}% Triple Resource per rank.": "每级+{{0}}%双倍资源，+{{1}}%三倍资源。",
            "+{{0}}% Save Material, +{{1}}% Gathering XP per rank.": "每级+{{0}}%节省材料，+{{1}}%采集经验。",
            "+{{0}}% Craft Speed, +{{1}}% Crafting XP per rank.": "每级+{{0}}%制作速度，+{{1}}%制作经验。",
            "+{{0}}% Save Material, +{{1}}% Double Craft per rank.": "每级+{{0}}%节省材料，+{{1}}%双倍制作。",
            "+{{0}}% XP Bonus, +{{1}}% Gold Find per rank.": "每级+{{0}}%经验加成，+{{1}}%金币获取。",
            "+{{0}}% Gold Find, +{{1}}% Gather Speed per rank. Links harvest and trade.": "每级+{{0}}%金币获取，+{{1}}%采集速度。连接收获与交易。",
            "+{{0}}% Gold Find, +{{1}}% XP Bonus": "+{{0}}%金币获取，+{{1}}%经验加成",
            "+{{0}}% Gold Find, +{{1}}% XP Bonus. The sovereign of trade.": "+{{0}}%金币获取，+{{1}}%经验加成。贸易之王。",
            "+{{0}}% Craft Speed, +{{1}}% Double Craft. The pinnacle of craftsmanship.": "+{{0}}%制作速度，+{{1}}%双倍制作。工艺之巅。",
            "+{{0}}% Gather Speed, +{{1}}% Double Resource. L'apogée de la récolte.": "+{{0}}%采集速度，+{{1}}%双倍资源。收获之极。",
            "+{{0}}% Strengt": "+{{0}}%力量",
            "+{{0}} Strength in practice": "实战+{{0}}力量",
            "+{{0}}% Crit Chance": "+{{0}}%暴击率",
            "+{{0}}% Damage": "+{{0}}%伤害",
            "+{{0}}% Damage, +{{1}}% Attack Speed": "+{{0}}%伤害，+{{1}}%攻击速度",
            "+{{0}}% Damage, +{{1}}% Attack Speed.": "+{{0}}%伤害，+{{1}}%攻击速度。",
            "+{{0}}% Dodge Chance": "+{{0}}%闪避",
            "+{{0}}% Triple Resource": "+{{0}}%三倍资源",
            "+{{0}}% Defense": "+{{0}}%防御",
            "+{{0}}% Defense for {{1}} seconds.": "+{{0}}%防御，持续{{1}}秒。",
            "+{{0}}% Attack Speed": "+{{0}}%攻击速度",
            "+{{0}}% Crit Chance, +{{1}}% Crit Damage": "+{{0}}%暴击率，+{{1}}%暴击伤害",
            "+{{0}}% Dodge Chance, +{{1}}% Attack Speed": "+{{0}}%闪避，+{{1}}%攻击速度",
            "+{{0}}% Double Craft": "+{{0}}%双倍制作",
            "+{{0}}% Double Resource": "+{{0}}%双倍资源",
            "+{{0}}% Gold Find": "+{{0}}%金币获取",
            "+{{0}}% Gold Find, +{{1}}% Double Resource": "+{{0}}%金币获取，+{{1}}%双倍资源",
            "+{{0}}% Gold Find, +{{1}}% XP Bonus, +{{2}}% Max HP": "+{{0}}%金币获取，+{{1}}%经验加成，+{{2}}%最大生命值",
            "+{{0}}% Gold Find, +{{1}}% XP Bonus, +{{2}}% Max HP. The heart of your craftsmanship.": "+{{0}}%金币获取，+{{1}}%经验加成，+{{2}}%最大生命值。工艺之心。",
            "+{{0}}% Max HP, +{{1}}% HP Regen/s": "+{{0}}%最大生命值，+{{1}}%生命恢复/秒",
            "+{{0}}% Save Material": "+{{0}}%节省材料",
            "+{{0}}% Save Material, +{{1}}% Double Resource": "+{{0}}%节省材料，+{{1}}%双倍资源",
            "+{{0}}% Triple Resource, +{{1}}% Gold Find": "+{{0}}%三倍资源，+{{1}}%金币获取",
            "+{{0}}% XP Bonus": "+{{0}}%经验加成",
            "+{{0}}% Crafting XP": "+{{0}}%制作经验",
            "+{{0}}% Double Craft, +{{1}}% Save Material": "+{{0}}%双倍制作，+{{1}}%节省材料",
            "+{{0}}% Double Resource, +{{1}}% Triple Resource": "+{{0}}%双倍资源，+{{1}}%三倍资源",
            "+{{0}}% Gather Speed, +{{1}}% Craft Speed, +{{2}}% Gold Find, +{{3}}% XP Bonus. Master of all trades.": "+{{0}}%采集速度，+{{1}}%制作速度，+{{2}}%金币获取，+{{3}}%经验加成。全才大师。",
            "+{{0}}% Gathering XP": "+{{0}}%采集经验",
            "+{{0}}% Gold Find, -{{1}}% Gather Speed": "+{{0}}%金币获取，-{{1}}%采集速度",
            "+{{0}}% Save Material, +{{1}}% Gathering XP": "+{{0}}%节省材料，+{{1}}%采集经验",
            "+{{0}}% Save Material, +{{1}}% Double Craft": "+{{0}}%节省材料，+{{1}}%双倍制作",
            "+{{0}}% XP Bonus, +{{1}}% Gold Find": "+{{0}}%经验加成，+{{1}}%金币获取",
            "-{{0}}% Craft Speed, +{{1}}% Double Craft": "-{{0}}%制作速度，+{{1}}%双倍制作",
            "-{{0}}% Gather Speed, +{{1}}% Double Resource": "-{{0}}%采集速度，+{{1}}%双倍资源",
            "-{{0}}% Craft Speed": "-{{0}}%制作速度",
            "-{{0}}% Craft Speed, +{{1}}% Save Material": "-{{0}}%制作速度，+{{1}}%节省材料",
            "-{{0}}% Craft Speed, +{{1}}% Gold Find": "-{{0}}%制作速度，+{{1}}%金币获取",
            "-{{0}}% Gather Speed": "-{{0}}%采集速度",
            "-{{0}}% Gather Speed, -{{1}}% Craft Speed, +{{2}}% Gold Find, +{{3}}% XP Bonus": "-{{0}}%采集速度，-{{1}}%制作速度，+{{2}}%金币获取，+{{3}}%经验加成",
            "-{{0}}% Craft Speed, +{{1}}% Crafting XP": "-{{0}}%制作速度，+{{1}}%制作经验",
            "{{0}} / {{1}} talents": "{{0}} / {{1}} 天赋",
            "{{0}} ago": "{{0}}前",
            "Updated at {{0}} · auto-refresh every {{1}} min": "更新于 {{0}} · 每{{1}}分钟自动刷新",
            "Roll away from danger, absorbing {{0}}% of your max HP in damage.": "翻滚躲避危险，吸收{{0}}%最大生命值的伤害。",
            "Sets a trap that poisons the enemy ({{0}} stacks).": "布置陷阱使敌人中毒（{{0}}层）。",
            "Fire a venom-tipped arrow dealing damage and applying {{0}} poison stack.": "射出淬毒箭矢，造成伤害并施加{{0}}层中毒。",
            "Focus your aim, boosting Strength by {{0}}% for {{1}} seconds.": "凝神瞄准，提升{{0}}%力量，持续{{1}}秒。",

            "{{0}}s": "{{0}}秒",

        };
    }

    // 资源名词翻译（备用）
    window.cnResourceNames = window.cnResourceNames || {
        // ===== Aethyr Idle 首页/宣传文本 =====
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "A new version of the game is ready. Reload to get it.": "游戏的新版本已准备就绪，刷新即可获取。",
        "Reload": "重新加载",
        "Resource Baron!": "资源大亨！",
        "Update available": "更新可用",
        "3. Augmentée par les affixes de type Énergie par frappe.": "3. 每次攻击可通过能量类词缀提升效果。",
        "Énergie gagnée par auto-attaque. Base": "普通攻击获取能量（基础值）。",
        "Ironpeak Range (Lv.20+)": "铁峰旷野（20级及以上）",
        "The Sundered Fields (Lv.10+)": "破碎原野（10级及以上）",
        "Dedicated Gatherer!": "专职采集者！",
        "Reach combat level 100 to ascend. (You are level 4).": "战斗等级达到100级即可转生。（当前等级4）",
        "Resets in": "重置于",
        "g)": "金币)",
        " - Amulet": " - 护符",
        "Equipped:": "已装备:",
        "Kill": "击杀",
        "ring1": "戒指1",
        "Claim": "领取",
        "Campaign Log": "活动日志",
        "Weekly": "周常",
        "New recipes unlocked": "解锁全新配方",
        "Rune Carver!": "符文雕刻师！",
        "Leather Armor!": "皮甲！",
        "Blank Rune!": "空白符文！",
        "0 of 7 days sealed — complete the week to claim its bounty": "本周封印进度0/7，完成整周任务即可领取丰厚奖励",
        "Fill your coffers — earn 3334 gold from any source.": "积攒财富，通过任意途径获取3334金币",
        "✅ Daily quest reward claimed!": "✅ 已领取每日任务奖励！",
        "Journeyman Crafter!": "熟练工匠！",
        "Crafting stopped": "制作已暂停",
        "Out of materials": "材料不足",
        "Bronze Channeling Staff": "青铜引导法杖",
        "Bronze Helm": "青铜头盔",
        "Bronze Longbow": "青铜长弓",
        "Bronze Sword": "青铜剑",
        "+1% physical damage per point (melee and ranged). Does not affect Mage spells, which scale from Intelligence and Magic Damage instead. For Rangers, the Ranged Strength contribution is counted in this total and also shown separately below.": "每点基础伤害（近战和远程）增加1%。不适用于法师法术，法术的伤害由智力和魔法伤害决定。对于游侠而言，远程力量的贡献已计入此总值，并在下方单独列出。",
        " Aethyr Idle": " 以太秘境放置",
        "400+ recipes across smithing, alchemy, and woodworking. Gather, refine, forge, enchant. Master every profession.": "锻冶、炼金与木工涵盖400+配方。采集、精炼、锻造、附魔。精通每一门技艺。",
        "A full RPG, right in your browser.": "一款完整的RPG，就在你的浏览器中。",
        "A new endgame system awaits deep in the Abyss": "全新的终局系统在深渊深处等待着你",
        "A new ultra-rare chase comes to the deep dungeons": "全新超稀有追猎降临深层地牢",
        "Aethyr Idle is now fully playable on mobile. The whole interface has been reworked for the phone": "以太秘境放置现已全面适配手机，整个界面已为手机重新设计",
        "An endless descent with blessings to choose between floors. How deep can you go?": "无尽下潜，每层之间可选祝福。你能走多深？",
        "Arcane power. Elemental mastery.": "奥术之力。元素精通。",
        "Challenge yourself with escalating difficulty. Mythic+ scaling rewards the boldest adventurers.": "用不断攀升的难度挑战自我。大秘境+的强度增幅只为最勇敢的冒险者加冕。",
        "Choose Your Class": "选择你的职业",
        "Attack": "攻击",
        "Classes": "职业",
        "Cloud saves, offline progress, and cross-device play. Your adventure never stops.": "云端存档、离线进度、跨设备畅玩。你的冒险永不停歇。",
        "Continue Playing": "继续游戏",
        "Craft. Conquer. Ascend.": "铸造。征服。转生。",
        "Crafting no longer gives up when it runs out of materials. A new choice in the Production screen lets you keep the current recipe going": "制作系统不再因材料耗尽而放弃。制作界面新增选项，可让当前配方持续进行",
        "Deep Crafting": "深度铸造",
        "Depth at Every Turn": "处处皆深度",
        "Dimensional Rift": "次元裂隙",
        "Discord": "Discord",
        "Enchanted Forest": "魔法森林",
        "Used in:": "用于:",
        "Enemies": "敌人",
        "Enter Aethyr.": "进入以太秘境。",
        "Explore the World": "探索世界",
        "Forgot your password? You can now set a new one yourself. From the login screen, ask for a reset link and a secure message lands in your inbox to get you back into your account in moments.": "忘记密码？现在可自行重置。在登录界面索取重置链接，安全邮件将发送到你的收件箱，让你即时恢复账号访问。",
        "Four paths. Make them your own.": "四条道路。随心打造。",
        "From enchanted forests to volcanic wastelands — every zone holds new challenges.": "从魔法森林到火山废土——每个区域都蕴藏着新的挑战。",
        "Gaining a combat level now blooms a soft golden light around your hero's portrait, with a few rising motes of brass. A quiet flourish to mark each step of your progress.": "升级时英雄头像周围绽放柔和金光，伴随几缕升腾的铜色微粒。一抹静谧的点缀，铭刻你的每一步成长。",
        "Heavy armor. Devastating blows.": "厚重铠甲。毁灭一击。",
        "Hundreds of hours, built by hand.": "数百小时，纯手工打造。",
        "Imperative mastery now shows the progress you actually earn. Finishing a Mythic+ run gives a small amount of mastery, and until now it was rounded down so hard that it looked like nothing was happening. Mastery is now displayed with finer precision, and every run ends with a short notification telling you exactly how much mastery each affix gained.": "专精精通现在显示实际获得的进度。通关大秘境+可获得少量精通，之前因向下取整幅度过大，看起来毫无变化。如今精通以更高精度显示，且每次通关都会弹出简短通知，告知你每个词缀获得多少精通。",
        "Items": "物品",
        "Join the community on Discord": "加入Discord社区",
        "Latest Updates": "最新更新",
        "Legal Notice": "法律声明",
        "Bac": "Bac",
        "Mage": "法师",
        "Enter Aethyr": "进入以太秘境",
        "Forgot your password?": "忘记密码？",
        "Join the Aethyr": "加入以太秘境",
        "Need an account? Sign up": "暂无账号？前往注册",
        "Sign Up": "注册",
        "Invalid email or password. Please try again.": "邮箱或密码错误，请重新输入。",
        "Melee beats magic. Magic beats ranged. Master the triangle — your hero handles the rest.": "近战克魔法。魔法克远程。掌握克制三角——你的英雄会处理其余的一切。",
        "Mythic+ Dungeons": "大秘境地下城",
        "New password should be different from the old password.": "新密码应与旧密码不同。",
        "Overcharge. Push into high Mythic+ and you may bring back an Overcharge Card. Take it to the Affixes crafting screen and apply it to a weapon, a piece of armor or a jewel, even a Living Object, to open a brand-new prestige slot on that item. The slot grants a powerful, build-defining property that sits on top of the item's affixes and runes, things like extra damage to frozen or poisoned foes, a chance to strike twice, thorns, healing on kill, and more. Find more cards to reroll the slot and chase the property that fits your build. The cards are exceptionally rare, so every one is a real decision.": "超载。冲击高层大秘境+有机会带回超载卡牌。将其带到词缀制作界面，应用于武器、护甲、珠宝甚至鲜活造物上，为该物品开启全新巅峰插槽。该插槽提供强大、决定构筑的属性，叠加在物品词缀与符文之上——例如对冻结或中毒敌人造成额外伤害、双重打击概率、荆棘、击杀回血等。获取更多卡牌重骰插槽，追逐契合你构筑的属性。卡牌极为稀有，每一张都是真正的抉择。",
        "Play Anywhere": "随时随地畅玩",
        "Play Now": "立即游玩",
        "Precision strikes. Deadly range.": "精准打击。致命射程。",
        "Privacy Policy": "隐私政策",
        "Punchier Combat, Clearer Loot": "战斗更爽快，掉落更清晰",
        "Ranger": "游侠",
        "Recipes": "配方",
        "Back to login": "返回登录页",
        "Can't find it? Check your spam or junk folder — the email sometimes lands there.": "没收到邮件？请检查垃圾邮件箱，验证邮件有时会被拦截至此。",
        "Confirm your account": "验证账号",
        "Resend confirmation email": "重新发送验证邮件",
        "We've sent a confirmation link to likexiazai@qq.com. You must confirm your account before you can log in.": "我们已向 likexiazai@qq.com 发送验证链接，完成账号验证后方可登录。",
        "Lv.": "等级",
        "Rogue": "盗贼",
        "Roguelike Abyss": "类Rogue深渊",
        "Specialize your build and respec anytime. Every class plays differently.": "专精你的构筑，随时可重新分配。每个职业玩法迥然不同。",
        "Strategic Combat": "策略战斗",
        "Swift daggers. Critical hits.": "迅捷匕首。致命暴击。",
        "Talent Trees": "天赋树",
        "Terms of Service": "服务条款",
        "The Crucible of the Abyss": "深渊熔炉",
        "The Great Vault & The Climb to level 100": "大宝库与百级攀登之路",
        "The Great Vault opens. Run Mythic+ dungeons through the week and the Vault fills behind the scenes — one chamber for your first run, a second at four, a third at eight. At the start of each new week it seals shut, and you return to break the seals": "大宝库开启。全周挑战大秘境+地下城，宝库在后台自动填充——首次通关解锁第一间密室，四次通关解锁第二间，八次通关解锁第三间。新周开始时宝库封闭，由你归来揭开封印。",
        "The deepest floors of the Abyss are more rewarding. The rarest currencies now drop in greater quantities the further down you go, so pushing into the deep is worth the risk.": "深渊深层回报更为丰厚。下潜越深，最稀有货币的掉落量越大，深入险境物有所值。",
        "Touch controls now suit a phone. In your inventory and at the bank, tapping an item opens a menu with everything you can do with it, such as equip, use, deposit, withdraw, sell or pick a quantity, instead of acting on a single tap. In the talent trees you can scroll across the whole tree, and tapping a talent shows its full description with a button to confirm your choice.": "触屏操作现已适配手机。背包和仓库中，点击物品将打开菜单列出所有可用操作——装备、使用、存入、取出、出售或选择数量，而非单次点击即执行操作。天赋树中可滚动查看全树，点击天赋显示完整描述并有按钮确认选择。",
        "Volcanic Peaks": "火山山峰",
        " HP": " 生命值",
        "likexiazai@qq.com": "likexiazai@qq.com",
        "This name is already taken. Please choose another.": "设置",
        "Setting": "该昵称已被占用，请更换其他名称。",
        "Spell": "法术",
        "You have a quest waiting! Open the Quest Journal\nto see your objectives. Quests guide you through\nthe world and reward you with gold and XP.": "你有一项任务在等待！打开任务日志查看你的目标。任务将引导你穿越世界，并为你提供金币和经验值作为奖励。",
        "No active tas": "暂无可用任务",
        "The Convergence tore reality apart.\nThe leylines broke. The sky cracked.\nMonsters emerged from forgotten depths.\n\nYou woke at the edge of the Verdant Reach\nwith nothing but a blade and a pulse of Aethyr in your chest.\n\nThe old wanderer who found you whispered:\n'The Aethyr has chosen you.'": "时空聚合撕裂了现实。\n地脉崩断，天穹碎裂。\n魔物自遗忘的深渊涌现。\n\n你苏醒于翠境之域的边缘，\n身侧唯有一柄利刃，胸腔中涌动着以太之力。\n\n发现你的年迈旅者低声道：\n“以太选中了你。”曾是安宁边境，如今成为无家可归者最后的避难所\n\n屠戮者格鲁凡格肆虐沿路\n地精与穴居人不断劫掠幸存者\n\n但你与众不同，以太之力在你体内汹涌\n战斗、采集、锻造，在每一场厮杀中变强",
        "Beyond the Verdant Reach lies a fractured world —\ncursed forests, volcanic wastelands, shattered isles,\nand the Abyss itself.\n\nScholars call the path ahead the Nexus Trial.\nNo one has ever completed it.\n\nUntil now.": "翠境之域之外是支离破碎的世界——\n受诅咒的密林、火山荒原、破碎群岛，\n以及深渊本体。\n\n学者将前路称作枢纽试炼。\n从未有人完成过它。\n\n直到此刻。",
        "dps": "dps",
        "Bonus": "加成",
        "MP": "法力值",
        "Loading...": "加载中...",
        "Unlock": "解锁",
        "Bank": "银行",
        "Air Shard": "空气碎片",
        "Cast spells": "释放法术",
        "Combat started! Your turn.": "战斗开始！轮到你行动。",
        "Damage Report": "伤害统计",
        "Earth Shard": "大地碎片",
        "Expected Loot": "预估战利品",
        "Flee": "逃跑",
        "Kills": "击杀数",
        "Light Shard": "光辉碎片",
        "Live Feed": "实时战况",
        "No loot yet...": "暂无战利品……",
        "Recent Loot": "近期拾取",
        "Shadow Shard": "暗影碎片",
        "Ultra Rare": "超稀有",
        "moy. kill": "平均击杀",
        "Bronze Dagger": "青铜匕首",
        "Complete!": "完成！",
        "First Kill! Bronze Dagger found!": "首杀！获得青铜匕首！",
        "Loot Your Kill": "拾取击杀战利品",
        "Victory!": "胜利！",
        "You defeated your first enemy! Check your Inventory\nto see what dropped. Items are collected automatically\nand stored in your bag.": "你击败了首个敌人！打开背包查看掉落物品，道具会自动拾取并存放至背包。",
        "types": "类型",
        "9 new recipes discovered!": "解锁9个全新配方！",
        "First Blood!": "一血！",
        "COMPLETE": "完成",
        "Accept Quest": "接受任务",
        "Available Quests": "可接任务",
        "Completed Quests": "已完成任务",
        "Goblins have been raiding supplies near the camp. Kill 3 of them to thin their numbers.": "地精一直在营地周边劫掠物资，击杀3只地精削减它们的数量。",
        "Pest Control": "虫害清除",
        "Quest Completed": "任务完成",
        "Good. You can fight. Check your Inventory — enemies drop useful loot.": "很好，你拥有战斗能力。打开背包看看，怪物会掉落实用物资。",
        "Started": "进行中",
        "Seasoned Fighter!": "老练战士！",
        "Loading rankings...": "正在加载排行榜……",
        "Active this wee": "本周活跃",
        "Online now": "当前在线",
        "Founder's Pac": "创始礼包",
        "Ban": "封禁",
        "+1 Attack, +1 Strength, +1 Defense": "攻击+1、力量+1、防御+1",
        "Resources from the Celestial Islands": "天界群岛产出资源",
        "Unlocks at Combat Level 100 (Melee, Ranged or Magic depending on your class).": "战斗等级达到100级解锁（根据职业分为近战、远程或法术）。",
        "How to Unloc": "解锁途径",
        "Masterwor": "精工造物",
        "Aethyr Gems are the premium currency. You can purchase them to support the game's development.": "以太宝石为付费货币，你可购买以此支持游戏开发。",
        "Deposit/withdraw entire stac": "存入/取出整组道具",
        "Amplifies your poisons and bleeds.": "强化你的毒素与流血效果。",
        "Amplifies your spell damage. Does not affect auto-attacks.": "提升法术伤害，不影响普通攻击。",
        "At 100 energy, unleash a devastating strike (Atk ×6 + Str ×3).": "能量满100点时，释放毁灭性重击（攻击力×6 + 力量×3）。",
        "Choose how to convert your energy into an advantage.": "选择将能量转化为哪种增益效果。",
        "Combat Energy": "战斗能量",
        "Current energy:": "当前能量：",
        "Increases your attack speed.": "提升攻击速度。",
        "Increases your auto-attack damage.": "提升普通攻击伤害。",
        "Increases your critical strike chance.": "提升暴击几率。",
        "Steals a portion of damage dealt.": "窃取部分造成的伤害转化为自身生命值。",
        "Streak": "连击层数",
        "Auto-Spell Configuration": "自动法术设置",
        "Enabled": "已开启",
        "Auto-attacks": "普通攻击",
        "Defeat all zone enemies (5 remaining)": "清除该区域所有敌人（剩余5只）",
        "Fight resumes": "战斗继续",
        "Recovering": "恢复中",
        "Restore HP & Resume": "恢复生命值并继续作战",
        "You died! Combat stopped. Heal up and try again.": "你已阵亡！战斗中止，恢复状态后再次挑战。",
        "Restore HP": "恢复生命值",
        "New Recipe": "全新配方",
        "Oak Plank!": "橡木木板！",
        " and ": "并且",
        ", you both receive an exclusive ": "你们二人都能获得专属奖励",
        "Apply": "确认应用",
        "Have a referral code?": "拥有邀请码？",
        "Invite a friend to play — when they reach ": "邀请好友游玩，当其达到",
        "frame": "名望",
        "title": "称号",
        "Copied!": "复制成功！",
        "Bronze Bar!": "青铜条！",
        "Light Leather!": "轻皮！",
        "Shrimp!": "虾!",
        "Base weapon damage before Strength and multipliers are applied. Comes from your class level and equipped weapon.": "基础武器伤害，在应用力量和倍率之前。来源于你的职业等级和所装备的武器。",
        "Reduces incoming damage through a mitigation formula. Effectiveness decreases against higher-level attackers, and spells bypass 50% of your defense.": "通过减伤公式降低受到的伤害。对高等级攻击者效果降低，且法术可绕过你50%的防御。",
        "s Cooldown": "秒 冷却",
        "Requires": "需要",
        "Collect": "收集",
        "Rune Slots": "符文槽位",
        "left": "剩余",
        "+1% gold from combat per point. Half effect (50%) on gold earned from dungeons and quests.": "每点属性提升1%战斗金币获取，副本与任务金币收益仅生效一半（50%）。",
        "Higher rarity boosts stats and grants more enchantment slots. Level up Crafting for better odds!": "品质越高，属性加成越高，附魔槽位越多。提升制作等级可提高高品质产出概率！",
        "No item in this slot": "该栏位暂无装备",
        "Rarity Chances": "品质产出概率",
        "How to obtain:": "获取途径：",
        "Ranged Strength": "远程力量",
        "ranged Strength": "远程力量",
        "Crafting in progress...": "制作中...",
        "Crafting complete!": "制作完成！",
        "First Craft! Triple XP!": "首次制作！三倍经验！",
        "8 new recipes discovered!": "解锁8个全新配方！",
        "Apprentice Crafter!": "初级工匠！",
        "Auto": "自动",
        "Daily": "日常",
        "Classe": "职业",
        "Logged in a": "登录身份",
        "Create Hero": "创建英雄",
        "Gem": "宝石",
        "Enemie": "敌人",
        "Item": "物品",
        "Stat": "统计",
        "Warrior": "战士",
        "You can now change the build effect on a piece of armor you have already forged. Head to the reforge workshop, pick the head, chest or leg piece, and choose a new effect for some gold. No more re-forging the whole piece just to switch your specialization. (Unlocks at Crafting level 85.)": "现在可为已锻造的护甲更改构筑效果。前往重铸工坊，选择头部、胸部或腿部护甲，花费金币选择新效果。无需再为切换专长而重新锻造整件装备。（制作等级85解锁）",
        "Your account now has a home of its own. A new section in Settings lets you update your email, change your password, see which sign-in methods are linked to your account, and link or unlink Google and Discord whenever you like. And if you ever need to leave, you can permanently delete your account and all its data from there too.": "你的账号现在有了自己的管理页面。设置中新增板块让你可以更新邮箱、修改密码、查看已绑定的登录方式，并可随时绑定或解绑Google和Discord。若你想离开，也可永久删除账号及所有数据。",
        "a clear bottom navigation bar with readable icons, and every screen rebuilt to fit a small display, from character selection and the inventory to the bank, the talent trees, the dungeons and the crafting menu. Pop-ups now scroll properly so nothing gets cut off. You can finally play comfortably from your browser on a phone.": "清晰的底部导航栏配有易读图标，每个屏幕都针对小屏重建——从角色选择、背包到仓库、天赋树、地下城和制作菜单。弹窗现在可正常滚动，内容不再被截断。你终于可以在手机浏览器上舒适畅玩了。",
        "each chamber reveals a reward, and you keep only one. Every chamber has a chance to hold a Living relic, and otherwise grants a stash of endgame materials whose size grows with the highest key you cleared that week. Find it under Dungeons → Great Vault, once Mythic+ is unlocked.": "每间密室揭示一份奖励，且你只能保留一份。每间密室都有机会藏有鲜活遗物，否则将赋予一箱终局材料，其数量随着你当周清理的最高钥匙等级而增长。大秘境+解锁后，可在\"地下城 → 大宝库\"中找到。",
        "it now pauses and waits, then resumes on its own the moment the materials are back, instead of skipping ahead. Prefer the old behavior? Leave it on Continue queue and it moves to the next item as before.": "现在会暂停等待，材料恢复后自动继续，而非跳过。偏好旧行为？保持\"继续队列\"选项，它将一如既往地转移到下个物品。",
        "the Crucible. Once you reach Depth 150, a new tab appears on the Abyss screen. Feed the rarest spoils you bring back from the deep floors into the Crucible to forge Embers, then spend those Embers on permanent upgrade tracks that never stop growing. Some pour more gold, more essences and more experience into your deep runs, others grant lasting boosts to your damage and your maximum health. And the deeper you dive, the more fuel you carry back, so every descent feeds your long-term power. It is built to give your deepest runs something new to chase, with no ceiling.": "熔炉。到达150层深度后，深渊界面会新增一个标签页。将深层带回的最稀有战利品投入熔炉锻造余烬，然后花费余烬解锁永无止境的升级路线。部分升级为深层冒险注入更多金币、精华与经验，另一些则提供永久伤害与最大生命值加成。下潜越深，带回的燃料越多，所以每次下潜都会滋养你长期的力量。它专为你的深潜之旅打造一个无穷无尽的追逐目标。",
        "v": "v",
        "s)": "s)",
        "U": "U",
        "???": "???",
        "Gityx": "Gityx",
        "G8hh": "G8hh",
        "DPS": "DPS",
        "": "",
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
    "Guest Player": "游客玩家",
    "Language": "语言",
    "Log Out": "登出",
    "Logged in as": "已登录：",
    "Login": "登录",
    "Not logged in": "未登录",
    "Play as Guest": "游客模式",
    "Register": "注册",
    "Your progress is tied to this browser. ": "你的进度绑定到此浏览器。",
    "⚠️ GUEST ACCOUNT": "⚠️ 游客账号",
    "Back": "返回",
    "Loading Heroes...": "加载英雄中...",
    "Select Character": "选择角色",
    "Create Character": "创建角色",
    "Last played": "上次游玩",
    "Lvl": "等级",
    "vagabond": "流浪者",
    "Loading…": "加载中…",
    "Entrée dans Aethyr…": "进入以太秘境…",
    " · v": " · v",
    "1.9.7b": "1.9.7b",
    "and prevent data loss from patch updates or cache clearing.": "并防止补丁更新或缓存清除导致的数据丢失。",
    "Click here to link your account": "点击此处绑定账号",
    "Join Aethyr World": "加入以太秘境世界",
    "Aethyr Idle is a free game. If you want to support its development, you can buy cosmetics in the premium shop!": "以太秘境放置是一款免费游戏。如果你想支持开发，可以在会员商店购买装饰品！",
    "You are playing as a guest — your progress is not permanently saved.": "你正在以游客身份游玩——你的进度不会永久保存。",
    "Welcome Back!": "欢迎回来！",
    "While you were away, your hero gathered the resources of Aethyr, performing 317 actions.": "在你离开期间，你的英雄收集了以太秘境的资源，执行了317次行动。",
    "Save My Account": "保存我的账号",
    "Guest": "游客",
    "Link Account": "绑定账号",
    "Link your Account": "绑定你的账号",
    "Email": "邮箱",
    "Password": "密码",
    "Processing...": "处理中...",
    "or": "或",
    "Google": "Google",
    "Already have an account? Login": "已有账号？登录",
    "At least 8 characters": "至少8个字符",
    "A lowercase letter": "一个小写字母",
    "A number": "一个数字",
    "A symbol": "一个符号",
    "An uppercase letter": "一个大写字母",
    "Adventure": "冒险",
    "City": "城市",
    "Character": "角色",
    "Inventory": "背包",
    "Equipment": "装备",
    "Crafting": "制作",
    "Spells": "法术",
    "Combat": "战斗",
    "Gathering": "采集",
    "Quests": "任务",
    "Dungeons": "地下城",
    "Abyss": "深渊",
    "Shop": "商店",
    "Guide": "指南",
    "Leaderboard": "排行榜",
    "Settings": "设置",
    "Achievements": "成就",
    "Production": "制作队列",
    "Map": "地图",
    "Stats": "属性",
    "Imperatives": "要务",
    "Familiars": "使魔",
    "Ascension": "飞升",
    "Adventure Mode": "冒险模式",
    "Active Quests": "进行中的任务",
    "Story Quests": "主线任务",
    "Daily Quests": "每日任务",
    "Quest Journal": "任务日志",
    "REWARDS": "奖励",
    "IN PROGRESS": "进行中",
    "Tutorial": "教程",
    "Track your adventures across Aethyr": "追踪你在以太秘境的冒险旅程",
    "First Blood": "首次击杀",
    "Slay": "击杀",
    "A Frenzied Cockatrice is blocking the road ahead. You have a weapon — use it. Click on an enemy to start combat.": "一只狂暴石化蜥蜴挡住了前路。你有武器——用它。点击敌人即可开始战斗。",
    "Aethyr Gems": "以太秘境宝石",
    "Gems unlock cosmetics visible to all players in the leaderboard.": "宝石可解锁所有玩家在排行榜中可见的装饰品。",
    "Best Value": "最超值",
    "Handful": "少量",
    "Pouch": "一袋",
    "Hoard": "大量",
    "Vault": "宝库",
    "Support Development": "支持开发",
    "Aethyr is developed by an independent developer. Every premium purchase directly helps fund continued game development, new content, and server improvements. Thank you for your support!": "以太秘境由独立开发者开发。每笔高级购买都直接资助持续的游戏开发、新内容与服务器改进。感谢你的支持！",
    "The premium shop offers cosmetic items purchasable with Aethyr Gems. These items provide no in-game advantage and are purely aesthetic.": "会员商店提供可用以太秘境宝石购买的装饰品。这些物品不提供游戏内优势，纯属美化。",
    "Change the visual appearance of the game interface with unique themes.": "用独特的主题改变游戏界面的视觉外观。",
    "Choose a custom portrait to represent your character.": "选择自定义头像来代表你的角色。",
    "Decorate your portrait with exclusive frames visible in the leaderboard.": "用排行榜可见的专属边框装饰你的头像。",
    "Display a unique title under your name in the leaderboard.": "在排行榜中你的名字下方显示独特头衔。",
    "A Few Quiet Repairs in the Deep & a Stuck Relic Slot Fix": "深层静默修复与卡槽遗物修复",
    "Affixes QoL, Just Crafted Preview & Living Object Drop Fixes": "词缀优化、刚制作预览与活物掉落修复",
    "Bug Fixes": "Bug修复",
    "Bug Fixes, Translations & Crafting QoL": "Bug修复、翻译与制作优化",
    "Launch — Welcome to Aethyr": "上线——欢迎来到以太秘境",
    "Combat Fixes, Shop Overhaul & QoL": "战斗修复、商店重制与优化",
    "Cosmetics Rebuild — New Frames, New Titles, Painted Codex Polish": "装饰重建——新边框、新头衔、彩绘法典打磨",
    "Crafting Overhaul, Class Balance & QoL": "制作重制、职业平衡与优化",
    "Dungeon Rework, Crafting Overhaul, Augmentation System & Art Pass": "地下城重制、制作重制、增幅系统与美术通行",
    "Elements, New Spells & Shields": "元素、新法术与护盾",
    "Introducing the Celestial Islands, Familiars, Equipment Affixes & Mythic Relics Rework": "天界群岛、使魔、装备词缀与神话遗物重制上线",
    "Level-32 Affixes, Late Game Gates & Mobile Combat HUD": "32级词缀、终局门槛与手机战斗HUD",
    "Mobile Beta & Abyss drop improvements": "手机测试版与深渊掉落改进",
    "Mythic Empowerment, Infusion Tab, Bulk Selling & Big Loot Fixes": "神话强化、灌注标签、批量出售与重大掉落修复",
    "Mythic Keys, Adaptive XP, Offline Rework & Achievements": "神话钥匙、自适应经验、离线重制与成就",
    "Mythic+ Rework & Painted Codex Wraps the Game": "大秘境+重制与彩绘法典收官",
    "New Features": "新功能",
    "Quality of Life, Dungeon XP Rework, Loot Cleanup & Guest Account Banner": "生活品质、地下城经验重制、掉落清理与游客账号横幅",
    "Referral System & Landing Page": "邀请系统与落地页",
    "Spell Modifiers & Smart Rotations": "法术强化与智能轮换",
    "Spells & Build Diversity": "法术与构筑多样性",
    "Streamlined Navigation & Cleaner Notifications": "简化导航与更清晰的通知",
    "The Marketplace Reworked & Aethyr Patron": "市场重制与以太秘境赞助者",
    "Visual Overhaul — A Cleaner, More Consistent Aethyr": "视觉重制——更清爽、更统一的以太秘境",
    "Wipe Patch — Auto-Spells, Leylines Rework & Ability Scaling": "删档补丁——自动法术、地脉重制与技能缩放",
    "Latest Patch": "最新补丁",
    "Patch Notes": "补丁说明",
    "Full History": "完整历史",
    "Current version": "当前版本",
    "Fight": "战斗",
    "Balance": "平衡",
    "Improvements": "提升",
    "Upgrade": "升级",
    "Locked": "已锁定",
    "Loot": "战利品",
    "Rewards": "奖励",
    "Experience": "经验",
    "HP": "生命值",
    "DMG": "伤害",
    "DEF": "防御",
    "Mana": "法力",
    "Energy": "能量",
    "Hitpoints": "生命值",
    "Auto-Eat:": "自动进食：",
    "Auto-Mana": "自动法力",
    "Auto-Restart Combat": "自动重启战斗",
    "Auto-Spells": "自动法术",
    "Auto-combat": "自动战斗",
    "OFF": "关闭",
    "Vagabond": "流浪者",
    "Adventurer": "冒险者",
    "Highwayman": "侠盗",
    "Forest Mauler": "森林撕裂者",
    "Frenzied Cockatrice": "狂暴石化蜥蜴",
    "Goblin Prowler": "哥布林潜行者",
    "Grotto Shaman": "洞穴萨满",
    "Direwolf": "恐狼",
    "Grulfang the Ravager": "毁灭者格鲁尔之牙",
    "ZONE BOSS": "区域首领",
    "Defeat Arch-Lich Malachar": "击败大巫妖马拉查",
    "Defeat Captain Dredgemore": "击败德雷吉莫船长",
    "Defeat Elder Fire Drake": "击败长老火龙蜥",
    "Defeat Grulfang the Ravager": "击败毁灭者格鲁尔之牙",
    "Defeat Ignis the Molten": "击败熔火伊格尼斯",
    "Defeat Lord of the Nexus": "击败核心之主",
    "Defeat The Abomination of Gloomveil": "击败幽帷憎恶",
    "Defeat Voren Ashblade": "击败灰刃沃伦",
    "Defeat Warden of the Isles": "击败群岛看守者",
    "Defeat Warlord Gorthak": "击败军阀戈萨克",
    "Defeat all zone enemies (6 remaining)": "击败所有区域敌人（剩余6个）",
    "Melee": "近战",
    "Ranged": "远程",
    "Magic": "魔法",
    "Quest": "任务",
    "Resources": "资源",
    "System": "系统",
    "Plus": "增加",
    "Lvl ": "等级 ",
    "Lvl 11 BOSS": "等级11 BOSS",
    "Level": "等级",
    "Tier": "品阶",
    "Common": "普通",
    "Uncommon": "精良",
    "Rare": "稀有",
    "Epic": "史诗",
    "Legendary": "传说",
    "Mythic": "神话",
    "Very Rare": "非常稀有",
    "Clicks": "点击次数",
    "Total gathers": "总采集次数",
    "Total Kills": "总击杀数",
    "Total Crafts": "总制作次数",
    "Unique Recipes": "独特配方",
    "Unique Enemies": "独特敌人",
    "Zones Visited": "已访问区域",
    "Boss Kills": "首领击杀数",
    "Dungeon Clears": "地下城通关次数",
    "Gods Slain": "屠神次数",
    "Items Sold": "物品出售数",
    "Gold Earned": "金币获取量",
    "Play Time": "游戏时长",
    "Highest Skill": "最高技能",
    "Deepest Abyss": "最深深渊",
    "Milestones": "里程碑",
    "Combat Level 100 Required (1/100)": "需要战斗等级100（1/100）",
    "Combat Log": "战斗日志",
    "Last Fight": "上次战斗",
    "Last Death": "上次死亡",
    "No combat to display. Engage an enemy to populate the log.": "暂无战斗记录。与敌人交战以填充日志。",
    "Review your most recent fight or your last death.": "回顾你最近的战斗或上次死亡。",
    "Experience Gained": "获取的经验",
    "Resources Gained": "获取的资源",
    "Base XP": "基础经验",
    "Final": "最终",
    "Next Level": "下一级",
    "Next Tier": "下一阶",
    "Gather": "采集",
    "Fishing": "钓鱼",
    "Hunting": "狩猎",
    "Mining": "采矿",
    "Woodcutting": "伐木",
    "Cooking": "烹饪",
    "Smelting": "熔炼",
    "Leather": "皮革",
    "Alchemy": "炼金",
    "Enchanting": "附魔",
    "Smithing": "锻造",
    "Woodworking": "木工",
    "Jewelry": "珠宝",
    "Fusion": "融合",
    "Infusion": "灌注",
    "Augmentation": "增幅",
    "Reforge": "重铸",
    "Runes": "符文",
    "Affixes": "词缀",
    "Elements": "元素",
    "Living": "活物",
    "Resource": "资源",
    "Verdant Reach": "翠绿之境",
    "Gloomveil Forest": "幽帷森林",
    "Tanglewood Wilds": "盘木荒野",
"Dragon's Spine Ridge": "龙脊山脊",
    "Cinderfall Wastes": "烬落废土",
    "The Sundered Fields": "破碎平原",
    "Ironpeak Range": "铁峰山脉",
    "The Blighted Reach": "枯萎之域",
    "The Shattered Isles": "破碎群岛",
    "The Aetherial Rift": "以太裂隙",
    "The Aethyr Abyss": "以太秘境深渊",
    "The Aethyr Nexus": "以太秘境核心",
    "Celestial Islands": "天界群岛",
    "World Map": "世界地图",
    "Current Location": "当前位置",
    "Current Location:": "当前位置：",
    "YOU ARE HERE": "你在此处",
    "Travel between regions to discover new enemies, dungeons, and gathering resources.": "穿梭于区域之间，发现新敌人、地下城和采集资源。",
    "Travel into the wilds or descend into darkness.": "深入荒野，或坠入黑暗。",
    "A corrupted wasteland where necromantic Aethyr has twisted all life into undeath.": "一片被腐化的荒原，亡灵以太秘境将所有生命扭曲为不死之物。",
    "A cursed forest shrouded in perpetual twilight, where the restless dead walk among twisted trees.": "被永恒暮色笼罩的诅咒森林，不安的亡者在扭曲的树木间游荡。",
    "A dense, primordial jungle teeming with savage tribes, pirates, and ancient predators.": "一片茂密的原始丛林，充斥着野蛮部落、海盗和远古掠食者。",
    "A peaceful forest at the edge of civilization, where faint traces of Aethyr shimmer between the ancient trees.": "文明边缘的宁静森林，微弱的以太秘境微光在古树间闪烁。",
    "A realm beyond the Rift where reality has fully collapsed into void. Only the most powerful adventurers dare venture here to harvest its unique resources.": "裂隙之外的领域，现实已完全崩塌为虚空。只有最强大的冒险者才敢踏足此处，采集其独特资源。",
    "A tear in reality where raw Aethyr energy crystallizes into physical form. Accessed only by those who have mastered Mythic challenges.": "现实的裂痕，原始以太秘境能量结晶为实体。仅限掌握神话挑战者进入。",
    "A volcanic mountain range where dragonkin nest. The air crackles with primal fire and ancient magic.": "龙族筑巢的火山山脉。空气中弥漫着原始火焰与远古魔法的噼啪声。",
    "A volcanic wasteland where fire elementals roam and the earth bleeds molten rock.": "火元素游荡的火山废土，大地流淌着熔岩之血。",
    "Floating islands torn apart by raw Aethyr energy. Home to twisted magical creatures and unstable leylines.": "被原始以太秘境能量撕裂的浮空群岛。扭曲魔法生物与不稳定地脉的家园。",
    "Jagged mountain peaks where warlike clans and feral beasts clash beneath the crimson sky.": "崎岖山巅之上，好战部族与野蛮猛兽在深红天穹下鏖战。",
    "Once-fertile fields torn apart by the Convergence. The Crimson Veil syndicate thrives in the chaos, and the Aethyr bleeds freely from cracks in the earth.": "曾被「聚合」撕裂的肥沃田野。血色帷幕辛迪加在混乱中繁盛，以太秘境从大地裂隙中自由流淌。",
    "The source of all Aethyr energy. Reality itself is unstable here. Only the most powerful adventurers dare enter.": "一切以太秘境能量的源头。现实本身在此处并不稳定。只有最强大的冒险者才敢进入。",
    "Abyss Checkpoints — Resume Your Descent Without Starting Over": "深渊检查点——无需从头开始即可继续下潜",
    "Abyssal Darkwood": "深渊暗木",
    "Abyssal Hide": "深渊兽皮",
    "Abyssal Ore": "深渊矿石",
    "Adamantite Ore": "精金矿石",
    "Aetherial Ore": "以太矿石",
    "Bandit Medallion": "强盗徽章",
    "Beast Scraps": "野兽残片",
    "Copper Ore": "铜矿石",
    "Dark Iron Ore": "暗铁矿石",
    "Dark Oak Wood": "暗橡木",
    "Dragon Hide": "龙皮",
    "Dragonscale Ore": "龙鳞矿石",
    "Eternal Crystal": "永恒水晶",
    "Eternal Heartwood": "永恒心木",
    "Eternal Hide": "永恒兽皮",
    "Fire Shard": "火焰碎片",
    "Ice Shard": "寒冰碎片",
    "Light Hide": "轻皮",
    "Maple Wood": "枫木",
    "Mithril Ore": "秘银矿石",
    "Nexus Hide": "核心兽皮",
    "Nexus Ore": "核心矿石",
    "Pine Wood": "松木",
    "Plagued Hide": "瘟疫兽皮",
    "Plagued Wood": "瘟疫木",
    "Raptor Hide": "迅猛龙皮",
    "Rift Wood": "裂隙木",
    "Scorched Hide": "焦灼兽皮",
    "Scorched Wood": "焦灼木",
    "Shadow Hide": "暗影兽皮",
    "Skystone Ore": "天石矿石",
    "Spectral Crystal Ore": "灵晶矿石",
    "Spectral Hide": "灵质兽皮",
    "Storm Hide": "风暴兽皮",
    "Stormwood Log": "风暴木原木",
    "Teak Wood": "柚木",
    "Thorium Ore": "钍矿石",
    "Tin Ore": "锡矿石",
    "Tough Hide": "坚韧兽皮",
    "Void Crystal Ore": "虚空水晶矿石",
    "Void Darkwood": "虚空暗木",
    "Void Hide": "虚空兽皮",
    "Volcanic Log": "火山原木",
    "Oak Wood": "橡木",
    "Gold Ore": "金矿石",
    "Iron Ore": "铁矿石",
    "Spectral Twilight Wood": "灵质暮光木",
    "Raw Barracuda": "生梭鱼",
    "Raw Catfish": "生鲶鱼",
    "Raw Fire Fish": "生火焰鱼",
    "Raw Magma Fish": "生岩浆鱼",
    "Raw Nebula Salmon": "生星云鲑鱼",
    "Raw Pike": "生梭子鱼",
    "Raw Plagued Fish": "生瘟疫鱼",
    "Raw Salmon": "生鲑鱼",
    "Raw Shrimp": "生虾",
    "Raw Trout": "生鳟鱼",
    "Raw Void Trout": "生虚空鳟鱼",
    "Voidfish": "虚空鱼",
    "Copper Vein": "铜矿脉",
    "Tin Vein": "锡矿脉",
    "Iron Vein": "铁矿脉",
    "Dark Iron Vein": "暗铁矿脉",
    "Gold Vein": "金矿脉",
    "Mithril Vein": "秘银矿脉",
    "Thorium Vein": "钍矿脉",
    "Adamantite Vein": "精金矿脉",
    "Dragonscale Vein": "龙鳞矿脉",
    "Aetherial Vein": "以太矿脉",
    "Nexus Vein": "核心矿脉",
    "Void Crystal Vein": "虚空水晶矿脉",
    "Spectral Crystal Vein": "灵晶矿脉",
    "Skystone Vein": "天石矿脉",
    "Eternal Crystal Vein": "永恒水晶矿脉",
    "Abyssal Vein": "深渊矿脉",
    "Oak Tree": "橡树",
    "Pine Tree": "松树",
    "Maple Tree": "枫树",
    "Teak Tree": "柚树",
    "Dark Oak Tree": "暗橡树",
    "Scorched Tree": "焦灼树",
    "Plagued Tree": "瘟疫树",
    "Rift Tree": "裂隙树",
    "Stormwood Tree": "风暴木树",
    "Volcanic Tree": "火山树",
    "Reality Tree": "现实树",
    "Void Darkwood Tree": "虚空暗木树",
    "Spectral Twilight Tree": "灵质暮光树",
    "Eternal Tree": "永恒树",
    "Abyssal Darkwood Tree": "深渊暗木树",
    "Forest Game": "森林猎物",
    "Fly Fishing (Trout)": "飞蝇钓（鳟鱼）",
    "Fly Fishing (Salmon)": "飞蝇钓（鲑鱼）",
    "Small Net Spot": "小网钓点",
    "Fish": "鱼",
    "Mountain Stream": "山间溪流",
    "Murky Waters": "浑浊水域",
    "Tropical Coast": "热带海岸",
    "Toxic Waters": "毒水",
    "Lava Pool": "熔岩池",
    "Magma Pool": "岩浆池",
    "Abyssal Fishing": "深渊垂钓",
    "Void Fishing": "虚空垂钓",
    "Void Essence Pool": "虚空精华池",
    "Node": "节点",
    "Ore": "矿石",
    "Drops": "掉落",
    "Abyssal Bar": "深渊锭",
    "Adamantite Bar": "精金锭",
    "Aetherial Bar": "以太锭",
    "Bronze Bar": "青铜锭",
    "Copper Bar": "铜锭",
    "Dark Iron Bar": "暗铁锭",
    "Dragonscale Bar": "龙鳞锭",
    "Eternal Bar": "永恒锭",
    "Gold Bar": "金锭",
    "Iron Bar": "铁锭",
    "Mithril Bar": "秘银锭",
    "Nexus Bar": "核心锭",
    "Skystone Bar": "天石锭",
    "Spectral Bar": "灵质锭",
    "Thorium Bar": "钍锭",
    "Void Bar": "虚空锭",
    "Copper Band": "铜戒指",
"Copper Channeler's Band": "铜制导能者戒指",
"Copper Channeler's Pendant": "铜制导能者挂坠",
"Copper Hunter's Loop": "铜制猎人指环",
    "Copper Pendant": "铜挂坠",
"Vagabond's Rusty Sword": "流浪者的锈剑",
    "A rusty but serviceable blade. Better than nothing.": "一把生锈但可用的剑。聊胜于无。",
    "Sell value:": "售价：",
    "Craft:": "制作：",
    "Crafts x1": "制作 ×1",
    "Craft": "制作",
    "Continue queue": "继续队列",
    "On material shortage": "材料不足时",
    "skip a recipe that runs out of materials and craft the next one.": "跳过材料耗尽的配方，制作下一个。",
    "Required Materials": "所需材料",
    "Have Materials": "已有材料",
    "Missing Materials": "缺少材料",
"What It's For": "用途",
    "How to obtain": "获取方式",
    "View recipes": "查看配方",
    "Used in": "用于",
    "Verdant Reach (Lv.1+)": "翠绿之境（等级1+）",
    "woodworking Lv.1 — requires 2×": "木工Lv.1——需要2×",
    "Oak Plank": "橡木板",
    "Sturdy, common, and good for almost anything.": "坚固、常见，几乎什么都能做。",
    "+3 more recipes...": "+3更多配方…",
    "more...": "更多…",
    "All": "全部",
    "Mythic Keys": "神话钥匙",
    "Equipped Gear": "已装备",
    "Equipment Power": "装备强度",
    "Main Hand": "主手",
    "Off Hand": "副手",
    "Head": "头部",
    "Chest": "胸部",
    "Legs": "腿部",
    "Amulet": "护符",
    "Ring 1": "戒指1",
    "Ring 2": "戒指2",
    "Relic 1": "遗物1",
    "Relic 2": "遗物2",
    "Relic 3": "遗物3",
    "Familiar": "使魔",
    "No familiar equipped — open Celestial Islands": "未装备使魔——开启天界群岛",
    "Click an item to unequip it": "点击物品即可卸下",
    " - Main Hand": " - 主手",
    "(x": "（×",
    "Consumables": "消耗品",
    "Food": "食物",
    "Mana Potion": "法力药水",
    "Tip — Right-click an item for quick actions • Shift+click a consumable to use it instantly": "提示——右键物品可快速操作·Shift+点击消耗品可立即使用",
    "Sort": "排序",
    "Name (A–Z)": "名称（A–Z）",
    "Rarity (high → low)": "稀有度（高→低）",
    "Quantity (high → low)": "数量（高→低）",
    "Sell Value (high → low)": "售价（高→低）",
    "Smart": "智能",
    "Default": "默认",
    "Any Rarity": "任意稀有度",
    "Select": "选择",
    "Primary": "主属性",
    "Secondary": "副属性",
    "Defense": "防御",
    "Max HP": "最大生命值",
    "Max Mana": "最大法力",
    "Strength": "力量",
    "Intelligence": "智力",
    "Crit Chance": "暴击率",
    "Block Reduction": "格挡减免",
    "Life Steal": "生命偷取",
    "Magic Damage": "魔法伤害",
    "Statistics": "属性",
    "Character Stats": "角色属性",
    "Attack Speed": "攻击速度",
    "Crit Damage": "暴击伤害",
    "Double Hit": "双重打击",
    "Triple Hit": "三重打击",
    "Extra Hit on Crit": "暴击额外攻击",
    "Armor Pen": "护甲穿透",
    "Control": "控制",
    "Gold Find": "金币获取",
    "Progression": "进度",
    "Skills": "技能",
    "Class Spells": "职业技能",
    "Combat Effects": "战斗效果",
    "Total Level": "总等级",
    "Quests Completed": "已完成任务",
    "Quests Done": "已完成任务数",
    "Offensive": "进攻",
    "Economy": "经济",
    "Health": "健康",
    "+2 Max Mana and +0.5 Magic Damage per point. Primary scaling stat for Mage spells.": "每点+2最大法力与+0.5魔法伤害。法师法术的主要缩放属性。",
    "Chance to deal a critical hit. Critical strikes multiply damage by ×2 — on melee, ranged and spells alike. Each point above 100% adds +1% bonus critical damage.": "致命一击概率。暴击造成×2伤害——近战、远程与法术均适用。超过100%的每点+1%额外暴击伤害。",
    "Heals you for a percentage of the damage you deal. Capped at 10% of your Max HP per hit.": "按你所造成伤害的百分比治疗自己。上限为每击最大生命值的10%。",
    "Reduces the delay between your attacks. A 2000 ms base attack with +50% Attack Speed becomes ~1333 ms. Hard-capped at 300 ms (about +567% Attack Speed) — extra Attack Speed past that does nothing for auto-attacks.": "减少攻击间隔。2000毫秒基础攻击+50%攻击速度≈1333毫秒。硬上限300毫秒（约+567%攻击速度）——超过此值的攻击速度对自动攻击无效。",
    "Bonus damage on critical hits, on top of the base ×2 crit multiplier.": "暴击时额外伤害，叠加在基础×2暴击倍率之上。",
    "Chance that your attack strikes twice. Rolled after Triple Hit — only one multi-strike triggers per attack.": "攻击双重打击概率。在三重打击之后判定——每次攻击仅触发一次多重打击。",
    "Chance that your attack strikes three times. Takes priority over Double Hit — checked first.": "攻击三重打击概率。优先于双重打击——首先判定。",
    "Chance that a critical hit triggers a free bonus attack. The bonus attack can itself crit but does not chain further.": "暴击触发免费额外攻击的概率。额外攻击本身可以暴击但不会继续连锁。",
    "Percentage of enemy defense ignored before the mitigation formula is applied.": "在减免公式应用前忽略的敌方防御百分比。",
    "+1% to ALL damage dealt per point (not just spells). Also acts as secondary scaling for Mage spells.": "每点+1%所有伤害（不只是法术）。同时作为法师法术的次要缩放。",
    "g": "金币",
    "Skills determine your proficiency in various activities. Each skill levels up by practicing the corresponding activity.": "技能决定你在各项活动中的熟练度。每个技能通过练习相应活动来升级。",
    "Determines your accuracy and damage at range. Levels up by fighting with a bow.": "决定你的远程命中与伤害。通过使用弓战斗来升级。",
    "Determines your ability to create items. Levels up by crafting equipment, potions, and consumables.": "决定你制作物品的能力。通过制作装备、药水和消耗品来升级。",
    "Determines your damage and effectiveness in close-range combat. Levels up by fighting with a melee weapon.": "决定你近战中的伤害与效率。通过使用近战武器战斗来升级。",
    "Determines your efficiency at collecting resources. Levels up by chopping trees, mining ore, or fishing.": "决定你收集资源的效率。通过伐木、采矿或钓鱼来升级。",
    "Determines your maximum health pool. Levels up passively by taking damage in combat.": "决定你的最大生命值。通过在战斗中承受伤害被动升级。",
    "Determines your spellcasting power and spell effectiveness. Levels up by fighting with a staff or wand.": "决定你的施法强度与法术效果。通过用法杖或魔杖战斗来升级。",
    "crafting": "制作",
    "gathering": "采集",
    "hitpoints": "生命值",
    "melee": "近战",
    "ranged": "远程",
    "magic": "魔法",
    "Each class defines your combat style. You start as a Vagabond and choose your path at Level 10.": "每个职业定义了你的战斗风格。你以流浪者开局，等级10时选择你的道路。",
    "A wanderer with no formal training. Jack of all trades, master of none. Choose your true path at Level 10.": "无正规训练的漫游者。门门通，样样松。10级时选择你真正的道路。",
    "Cunning assassins who strike with deadly precision. Masters of stealth, poison, and burst damage.": "狡黠的暗杀者，以致命精准出击。潜行、毒药与爆发伤害的大师。",
    "Expert marksmen who strike from the shadows. Specializes in critical hits and precision damage.": "从暗影中出击的专家射手。专精暴击与精准伤害。",
    "Masters of melee combat, wielding heavy armor and devastating weapons. Excels at tanking and sustained damage.": "近战大师，挥舞重甲与毁灭武器。擅长坦克与持续伤害。",
    "Wielders of arcane magic, casting powerful spells from afar. Masters of burst damage and crowd control.": "奥术魔法的掌控者，自远处施放强力法术。爆发伤害与群控的大师。",
    "Gathering lets you collect raw materials from the world. Equip the right tool and select a node to start gathering.": "采集让你从世界中收集原始材料。装备正确的工具并选择一个节点即可开始采集。",
    "Gathered resources are needed to craft armor, weapons, and consumables that will help you progress through the game.": "采集的资源用于制作帮助你推进游戏的护甲、武器和消耗品。",
    "What are resources for?": "资源有什么用？",
    "Resource Gathering": "资源采集",
    "Collect raw materials for crafting.": "收集制作所需的原材料。",
    "Stop Action": "停止行动",
    "Time": "时间",
    "P Gain": "产量",
    "gathers/hr": "采集/小时",
    "p/hr": "/小时",
    "s": "s",
    "The Outpost is a building system that grants permanent passive bonuses. Each building can be upgraded through 10 tiers, with each tier increasing the bonus effect.": "前哨站是提供永久被动加成的建筑系统。每座建筑可升级至10阶，每阶提升加成效果。",
    "A rebuilt sawmill that improves resource gathering speed.": "重建的锯木厂，提升资源采集速度。",
    "The arcane tower channels magical energy and increases leyline production.": "奥术塔引导魔法能量，增加地脉产量。",
    "The barracks strengthens troops, increasing damage and defense in combat.": "兵营强化部队，增加战斗中的伤害与防御。",
    "The city forge speeds up crafting and improves crafted item quality.": "城市熔炉加速制作并提升制作物品品质。",
    "The fishery improves food healing and fishing yield.": "渔场提升食物治疗与钓鱼产量。",
    "The treasury attracts merchants and increases gold found in combat.": "金库吸引商人，增加战斗中获取的金币。",
    "The watchtower watches the surroundings and increases all experience gained (combat, gathering, crafting).": "瞭望塔监视四周，增加所有获取的经验（战斗、采集、制作）。",
    "Sawmill": "锯木厂",
    "Arcane Tower": "奥术塔",
    "Barracks": "兵营",
    "Forge": "铁匠铺",
    "Fishery": "渔场",
    "Treasury": "金库",
    "Watchtower": "瞭望塔",
    "Construction Costs": "建造成本",
    "Gathering Speed": "采集速度",
    "Crafting Speed": "制作速度",
    "All XP": "所有经验",
    "Leyline Production": "地脉产量",
    "Food Healing": "食物治疗量",
    "Fish Yield": "鱼获量",
    "Each upgrade costs metal bars, wood, and gold. Required materials progress with tier (copper -> bronze -> iron -> mithril -> etc.).": "每次升级消耗金属锭、木材和金币。所需材料随品阶递进（铜→青铜→铁→秘银→等）。",
    "tier": "阶",
    "Unlocks at Lvl": "解锁等级",
    "Game Settings": "游戏设置",
    "Account Management": "账号管理",
    "Display": "显示",
    "Audio": "音频",
    "Notifications": "通知",
    "Session": "会话",
    "Log Out to Title Screen": "登出到标题画面",
    "Save Now": "立即保存",
    "Cloud Save": "云端存档",
    "Cloud auto-saves every 90s while you play. Use this to force an immediate save (e.g. before closing the tab on a slow connection).": "游戏时每90秒自动云端存档。点击强制立即保存（如慢速连接下关闭标签页前）。",
    "Background Music": "背景音乐",
    "Play ambient music in the background": "在后台播放环境音乐",
    "Music Volume": "音乐音量",
    "Enable Notifications": "启用通知",
    "Floating Combat Numbers": "浮动战斗数字",
    "Show floating damage, heal, dodge and crit numbers above combatants. Disabling cleans up the screen during heavy fights.": "在战斗单位上方显示浮动伤害、治疗、闪避和暴击数字。禁用可在激烈战斗中保持屏幕清爽。",
    "Loot Notifications": "掉落通知",
    "Show floating loot feed on screen": "在屏幕上显示浮动掉落信息",
    "Loot Filter": "掉落筛选",
    "Automatically sells loot from the chosen categories below the minimum rarity to save inventory space.": "自动出售所选类别中低于最低稀有度的掉落物以节省背包空间。",
    "Enable auto-sell filter": "启用自动出售筛选",
    "Minor Notifications": "次要通知",
    "Hides repeating, low-importance toasts": "隐藏重复的低重要性提示",
    "Reduced Motion": "减少动画",
    "Disable animations for better performance or accessibility": "禁用动画以提升性能或改善无障碍体验",
    "Select Language": "选择语言",
    "English": "英语",
    "Français": "法语",
    "Referral Program": "邀请计划",
    "Create an account to access the referral program and earn exclusive cosmetics.": "创建账号以参与邀请计划并获得专属装饰品。",
    "notified": "已通知",
    "Parrainage": "推荐",
    "PARRAINAGE": "推荐",
    "double/triple harvests, gold while gathering, crafting completions, auto-eat/drink, leyline auto-collect, combat procs (gold-on-crit, Chronos, Storm Conduit), inventory micro-actions, and the recent-items feed on the right side. Important toasts (rare drops, full inventory, level up, boss kills, quest rewards, achievements) stay visible.": "双倍/三倍收获、采集金币、制作完成、自动进食/饮水、地脉自动收集、战斗触发效果（暴击金币、时之沙、风暴导管）、背包微操作以及右侧最近物品信息流。重要提示（稀有掉落、背包已满、升级、首领击杀、任务奖励、成就）保持可见。",
"Beginner's Guide": "新手指南",
    "Everything you need to know to master Aethyr.": "掌握以太秘境所需的一切知识。",
    "Forge Your Build": "铸造你的构筑",
    "Claim Rewards": "领取奖励",
    "Kill 100 enemies in this zone": "在此区域击杀100个敌人",
    "Reach Abyss Depth 51": "达到深渊51层",
    "The Hollowed Depths (Level 15)": "空洞深渊（等级15）",
    "Gloomveil Catacombs (Level 30)": "幽帷地下墓穴（等级30）",
    "Cinderfall Forge (Level 45)": "烬落熔炉（等级45）",
    "The Abyssal Depths (Level 65)": "深渊之底（等级65）",
"Dragon's Lair (Level 78)": "龙之巢穴（等级78）",
    "The Convergence (Level 92)": "聚合之地（等级92）",
    "Scavenge": "搜刮",
    "Scrounge for supplies, restoring health.": "搜刮补给，恢复生命值。",
    "Vagrant Strike": "流浪者一击",
    "A rough but effective attack.": "粗犷但有效的攻击。",
    "Opportunist Strike": "投机一击",
    "Survival Instinct": "生存本能",
    "Buff": "增益",
    "Buff Spell": "增益法术",
    "Heal": "治疗",
    "Heal Spell": "治疗法术",
    "Attack Spell": "攻击法术",
    "Damage": "伤害",
    "Execute": "处决",
    "Ultimate": "终极",
    "ULTIME": "终极",
    "Lv. 5 required": "需要等级5",
    "Pool · ": "池·",
    "CD": "冷却",
    "Family": "族系",
    "Power": "威力",
    "Ultime": "终极",
    "Devastating blow. x2 damage if enemy below 30% HP.": "毁灭一击。敌人HP低于30%时造成×2伤害。",
    "2 if enemy <30% HP": "敌人<30% HP时×2",
    "5.0s": "5.0秒",
    "Active rotation": "激活轮换",
    "Add spells from the list on the right →": "从右侧列表添加法术→",
    "Auto-Sort": "自动排序",
    "Available": "可用",
    "Add": "添加",
    "Click a slot to remove the spell": "点击槽位以移除法术",
    "Damage Rotation": "伤害轮换",
    "Drag to reorder. First spell has highest priority.": "拖拽重排。第一个法术具有最高优先级。",
"If a spell's conditions are not met, it is skipped and the next spell in line is cast.": "如果某个法术的条件不满足，则跳过并施放队列中的下一个法术。",
    "Disabled": "已禁用",
    "Healing": "治疗",
    "Buffs & Shields": "增益与护盾",
    "Reset to Defaults": "重置为默认",
    "Loadout (": "配置（",
    "No buff spells unlocked.": "未解锁增益法术。",
    "No healing spells unlocked.": "未解锁治疗法术。",
    "No spells in rotation": "轮换中无法术",
    "ignored during offline progress": "离线进度中忽略",
    "Configure the automatic rotation with the Auto-Spells button above.": "使用上方的自动法术按钮配置自动轮换。",
    "Cast when your HP drops below the threshold.": "当你的HP降至阈值以下时施放。",
    "Cast when your HP drops below the threshold. Set to 100% to keep the buff up permanently.": "当你的HP降至阈值以下时施放。设为100%可永久保持增益。",
    "Energy & Elements": "能量与元素",
    "Energy is a secondary combat resource (0–100) that fills with every auto-attack and powers up your chosen bonus at each threshold. It decays between fights, so managing it well is a key part of combat efficiency.": "能量是次要战斗资源（0–100），每次自动攻击充能，在每个阈值增强你所选的加成。它在战斗间隙衰减，合理管理是战斗效率的关键。",
    "Gain:": "获取：",
    "+3 energy per auto-attack that deals damage. Some affixes grant additional energy per hit.": "每次造成伤害的自动攻击+3能量。某些词缀提供额外每击能量。",
    "Decay:": "衰减：",
    "-3 energy every 2s while out of combat or between enemies.": "脱离战斗或敌人之间每2秒-3能量。",
    "Reset:": "重置：",
    "Energy resets to 0 on enemy death (except in multi-target Celestial rooms, where it persists between slots).": "敌人死亡时能量重置为0（多目标天界房间除外，在那里能量在槽位间持续保留）。",
    "How it works": "运作方式",
    "Your chosen bonus activates in stages. Reaching 50, 75, or 100 energy unlocks increasingly powerful effects. All three stages stack — at 100 you benefit from the 50 and 75 effects as well.": "你所选的加成逐阶段激活。达到50、75或100能量解锁越来越强大的效果。三个阶段叠加——在100时你也享有50和75的效果。",
"Your weapon's element (see the Elements guide) uses this same energy gauge for its passive thresholds. Higher energy means stronger elemental passives — the two systems are always in sync.": "你武器的元素（参见元素指南）使用相同的能量条作为被动阈值。能量越高意味着元素被动越强——两个系统始终同步。",
    "Tip": "提示",
    "some item affixes increase energy gained per hit — keep an eye on them when crafting.": "某些物品词缀增加每击能量获取——制作时请留意。",
    "Discharge": "爆发",
    "Discharge mode": "爆发模式",
"When Discharge is active, reaching 100 energy automatically triggers a massive strike (Atk ×6 + Str ×3) that ignores enemy defense — then resets energy to 0. The continuous passives don't apply in this mode; instead, an elemental one-shot fires alongside the strike if your weapon has an element.": "当爆发激活时，达到100能量自动触发一次无视敌方防御的巨力打击（攻击×6+力量×3）——然后重置能量为0。持续被动在此模式下不生效；转而随打击触发一次元素一击，前提是你武器拥有元素。",
    "Select one bonus from the Energy menu in combat. It applies whenever your energy is at or above the listed threshold.": "从战斗中的能量菜单中选择一个加成。每当你的能量达到或超过列出阈值时生效。",
    "Choose your bonus": "选择你的加成",
    "Active thresholds": "激活阈值",
    "Arcane Power": "奥术之力",
    "Brute Force": "蛮力",
    "Burning Venom": "灼烧毒液",
    "Frenzy": "狂乱",
"Predator's Eye": "掠食者之眼",
    "Ultimate strike": "终极一击",
    "Vital Drain": "生命汲取",
    "Elements add a strategic layer to combat": "元素为战斗增添策略层次",
"Your weapon's element interacts with the enemy's element. Multipliers apply to final damage.": "你武器的元素与敌方元素交互。倍率应用于最终伤害。",
    "How to Get a Weapon Element": "如何获取武器元素",
    "Every crafted main-hand weapon automatically receives a random element": "每把制作的主手武器自动获得一个随机元素",
    "All enemies can drop elemental shards": "所有敌人都可掉落元素碎片",
"24.5% chance each for Fire, Ice, Earth or Air, and 1% each for Light and Shadow. To change an existing weapon's element, go to the Elements tab in Crafting and spend 8 shards of the target element.": "火焰、寒冰、大地或空气各24.5%概率，光明与暗影各1%。要更改已有武器的元素，前往制作中的元素标签页，消耗8个目标元素碎片。",
"2% for Fire, Ice, Earth and Air; 0.1% for Light and Shadow. You need 8 of the target type to transmute a weapon's element.": "火焰、寒冰、大地、空气各2%；光明、暗影各0.1%。需要8个目标类型才能转换武器元素。",
    "Elemental Shards": "元素碎片",
    "Fire": "火焰",
    "Ice": "寒冰",
    "Air": "空气",
    "Earth": "大地",
    "Light": "光明",
    "Shadow": "暗影",
    "Elemental Passives & Energy Thresholds": "元素被动与能量阈值",
"Each element activates passive bonuses based on your current energy gauge percentage (0–100). In Discharge mode, energy resets on each trigger — continuous passives don't apply, but a one-shot elemental effect fires instead.": "每个元素根据你当前能量条百分比（0–100）激活被动加成。爆发模式下，每次触发能量重置——持续被动不适用，转而触发一次元素效果。",
    "Passives (normal mode):": "被动（普通模式）：",
    "Discharge effect:": "爆发效果：",
    "Type Interactions": "类型交互",
    "The 4 base elements resist Light and Shadow": "4种基础元素抵抗光明与暗影",
    "Strategic Tip": "策略提示",
    "Ice freezes, Earth shields, Light heals, Shadow executes. In normal mode, Fire excels on long sessions with stacking DoTs, while Air maximizes attack speed.": "寒冰冻结、大地护盾、光明治疗、暗影处决。普通模式下火焰凭借叠加持续伤害在长时作战中表现出色，而空气最大化攻击速度。",
    "Light and Shadow are versatile but rare. In Discharge mode, pick the most useful one-shot": "光明与暗影多功能但稀有。爆发模式下选择最实用的一击",
    "Leylines": "地脉",
    "Leyline": "地脉",
"Leylines are the passive Aethyr generation system. There is exactly one leyline per zone, tied to that zone's element and level. Channel a leyline to slowly harvest Aethyr Dust, Shards and Crystals in the background.": "地脉是被动以太秘境生成系统。每个区域恰好有一条地脉，与该区域的元素和等级绑定。引导地脉即可在后台缓慢收获以太秘境之尘、碎片和水晶。",
    "Active Leyline": "激活的地脉",
    "Available Leylines": "可用地脉",
    "Discovered Leylines": "已发现地脉",
    "Undiscovered": "未发现",
    "Discovery": "发现",
    "Collection": "收集",
    "Harvest Line": "收获线路",
    "Channel": "引导",
    "Channeling": "引导中",
    "Channel a leyline below to begin harvesting Aethyr.": "引导下方地脉以开始收获以太秘境。",
    "Most leylines must first be discovered by meeting a condition tied to their zone:": "大多数地脉必须先通过满足与该区域相关的条件来发现：",
"The starter zone's leyline (Sylvan Vein) is unlocked automatically as soon as you begin playing.": "起始区域的地脉（森林矿脉）在你开始游戏时自动解锁。",
    "Every other zone leyline unlocks after 100 enemy kills in that zone.": "其他每个区域的地脉在该区域击杀100个敌人后解锁。",
    "The final leyline (Abyssal Vein) is gated behind reaching Abyss depth 51.": "最终地脉（深渊矿脉）需达到深渊51层才能解锁。",
    "100 zone kills": "100区域击杀",
    "Abyss depth 51": "深渊第51层",
    "You can only channel one leyline at a time. The active leyline generates its full hourly production whether you are online, offline, or playing another system. Swapping leylines is free and automatically collects any pending resources first.": "你每次只能引导一条地脉。无论在线、离线还是玩其他系统，激活的地脉都会以其满额时产量运行。切换地脉免费，并自动先收集所有待领取资源。",
    "Leylines produce up to three different resources depending on their tier. Higher-level leylines unlock the rarer ones.": "地脉根据其品阶最多产出三种不同资源。更高级的地脉解锁更稀有的资源。",
    "Pending resources accumulate on the active leyline and are shown on the Leyline panel. Click Collect to move them into your inventory. Remember to collect regularly - an auto-collect upgrade is available in the late-game shop if you prefer to automate it.": "待领取资源在地脉面板中累积显示。点击收集将其移入你的背包。记得定期收集——如果你喜欢自动化，终局商店中提供自动收集升级。",
    "Auto-collect Leylines - Automatically collects your leyline resources (available late-game).": "自动收集地脉——自动收集你的地脉资源（后期可用）。",
    "What is Aethyr used for?": "以太秘境有什么用？",
"Aethyr Dust, Shards and Crystals feed into endgame crafting and the Ascension economy. Channel the highest leyline you have access to whenever you're not actively chasing a specific resource - leylines reward consistency more than micro-management.": "以太秘境之尘、碎片和水晶用于终局制作和飞升经济。在你不主动追逐特定资源时，引导你能访问的最高级地脉——地脉奖励的是持续而非微操。",
    "Aethyr Resources": "以太秘境资源",
    "Aethyr Dust": "以太秘境之尘",
    "Aethyr Shard": "以太秘境碎片",
    "Aethyr Crystal": "以太秘境水晶",
    "Base resource produced by every leyline. Used in the cheapest Aethyr recipes.": "每条地脉产出的基础资源。用于最便宜的以太秘境配方。",
    "Intermediate resource that starts appearing on mid-level leylines. Used for more advanced Aethyr crafts.": "中级地脉开始出现的中级资源。用于更高级的以太秘境制作。",
    "Rare resource reserved for high-level leylines. Required for endgame Aethyr recipes.": "保留给高级地脉的稀有资源。终局以太秘境配方所需。",
    "Dust": "之尘",
    "Generating...": "生成中...",
    "Dust/h": "尘/小时",
    "Shard/h": "碎片/小时",
    "Crystal/h": "水晶/小时",
    "Element": "元素",
    "arcane": "奥术",
    "fire": "火焰",
    "nexus": "核心",
    "primal": "原始",
    "shadow": "暗影",
    "void": "虚空",
    "Sylvan Vein": "森林矿脉",
    "Automatic (starter zone)": "自动（起始区域）",
    "Mountain Core": "山脉核心",
    "Blight Vein": "枯萎矿脉",
    "Magma Vein": "岩浆矿脉",
    "Shadow Thread": "暗影之线",
    "Jungle Surge": "丛林涌动",
    "Dragon Vein": "龙之矿脉",
    "Rift Pulse": "裂隙脉冲",
    "Nexus Core": "核心之心",
    "Nexus Conduit": "核心导管",
    "Affixes are powerful bonuses inscribed on your gear (extra damage, crit, lifesteal, defense, gold find and many more). They are the heart of endgame customization.": "词缀是刻在你的装备上的强大加成（额外伤害、暴击、吸血、防御、金币获取等更多）。它们是终局定制的核心。",
    "An item can never have the same affix twice. Each line is guaranteed to be a different bonus.": "一件物品永远不能拥有相同词缀两次。每行保证是不同的加成。",
    "Each affixable item has up to 3 affix lines. New items start with 1 line revealed; the 2nd and 3rd are unlocked using Unbinding Stones.": "每件可附加词缀的物品最多有3行词缀。新物品以揭示1行开始；第2行和第3行使用解绑石解锁。",
    "Only Skystone-tier items and above (the gear you start finding once you reach the higher zones) can carry affixes. Lower-tier gear cannot.": "仅天石品阶及以上物品（到达更高级区域后才能找到的装备）可以携带词缀。低级装备不能。",
    "Affix values are fixed": "词缀值是固定的",
    "rarity, infusion, augmentation and any other multiplier do NOT scale them. The only way to change an affix is to reroll it.": "稀有度、灌注、增幅等任何其他倍率不会缩放它们。改变词缀的唯一方式是重骰。",
    "Enchanting gathers every way you can refine your gear": "附魔汇集了所有精炼装备的方式",
    "runes, reforging, fusion, augmentation and infusion. Use it to turn solid equipment into endgame-ready gear.": "符文、重铸、融合、增幅和灌注。用它把坚实装备变成终局就绪的神器。",
    "Open all 3 lines, reroll until one of them is great, seal that line, then keep rerolling the others without losing your good roll. Repeat until your gear is perfect.": "打开全部3行，重骰到其中一行极佳，封印该行，然后继续重骰其他行而不丢失你的好骰子。重复直到你的装备完美。",
    "Recommended workflow": "推荐流程",
"Reforging Shard — rerolls every affix line that isn't sealed. Costs 20 shards per reroll, plus 20 extra per sealed line on the item.": "重铸碎片——重骰所有未封印的词缀行。每次重骰消耗20碎片，加上物品上每行已封印额外+20。",
    "Sealing Crystal — seals one affix line so it survives the next reroll. Costs 50 crystals per seal. Unsealing is free.": "封印水晶——封印一行词缀，使其在下次重骰中保留。每次封印消耗50水晶。解除封印免费。",
    "Unbinding Stone — opens an additional affix line on an item (25 stones for the 2nd line, 50 for the 3rd).": "解绑石——在物品上开启额外词缀行（第2行25石，第3行50石）。",
    "Common / Uncommon": "普通/精良",
    "1 slot.": "1个槽位。",
    "2 slots (the second starts locked and must be unlocked with Essence).": "2个槽位（第二个初始锁定，需要精髓解锁）。",
    "3 slots (some still locked, the best pieces come fully unlocked).": "3个槽位（部分仍锁定，最佳部件完全解锁）。",
    "4 slots, all unlocked.": "4个槽位，全部解锁。",
    "0 slots.": "0个槽位。",
"Reforging rerolls the item's rune sockets from scratch, so any inserted runes are lost. Always remove your runes before reforging a piece.": "重铸会从头重骰物品的符文插槽，因此所有已镶嵌符文都会丢失。重铸前务必取出符文。",
    "Runes & Families": "符文与族系",
    "Runes are gems you insert into equipment sockets to add permanent stats. They come in six families, each boosting a different stat:": "符文是嵌入装备插槽以添加永久属性的宝石。共分六族，各自提升不同属性：",
    "Might - Strength (+5 to +80).": "力量-力量（+5至+80）。",
    "Power - Attack (+5 to +80).": "威力-攻击（+5至+80）。",
    "Precision - Critical Hit Chance (+1% to +5%).": "精准-暴击率（+1%至+5%）。",
    "Guard - Defense (+5 to +80).": "守护-防御（+5至+80）。",
    "Vigor - Max HP (+25 to +400).": "活力-最大生命值（+25至+400）。",
    "Wisdom - Intelligence and Magic Damage (+3 to +50 each).": "智慧-智力和魔法伤害（各+3至+50）。",
"You insert runes into sockets on your equipment. The number of available sockets depends on the item's rarity:": "你将符文嵌入装备的插槽中。可用插槽数量取决于物品稀有度：",
    "Insertion & Rune Slots": "镶嵌与符文插槽",
    "Minor (T1), Lesser (T2), Greater (T3) and Supreme (T4). Higher tiers scale up significantly - a Supreme rune is roughly 16x stronger than a Minor one of the same family.": "低级（T1）、次级（T2）、高级（T3）和至尊（T4）。更高品阶大幅缩放——同族至尊符文大约是低级符文的16倍强度。",
    "Each rune exists in four tiers": "每个符文存在四个品阶",
    "Runes can be removed at any time to swap families, but doing so returns the rune to your inventory - nothing is destroyed.": "符文可随时移除以换族，但操作会将符文返回背包——不会销毁任何东西。",
"In the Crafting panel's Reforge tab, spend gold to reroll an equipped item's rarity. Higher Crafting levels improve the chance of rolling Epic, Legendary or Mythic.": "在制作面板的重铸标签页中，花费金币重骰装备物品的稀有度。更高制作等级提升骰出史诗、传说或神话的几率。",
    "Items crafted at the Legendary Forge are born with their first affix line already inscribed.": "在传说熔炉制作的物品天生自带第一行词缀。",
"In the Enchant panel's Fusion tab, combine 3 identical runes to craft a single rune of the next tier. This is the only way to obtain Greater and Supreme runes.": "在附魔面板的融合标签页中，合并3个相同符文以制作下一品阶的单个符文。这是获取高级和至尊符文的唯一途径。",
    "You simply need to gather 3 identical runes and the required gold to guarantee the tier-up.": "你只需收集3个相同符文和所需金币即可确保升阶。",
    "Fusion always succeeds": "融合永远成功",
    "there is no failure risk, your runes are never lost.": "没有失败风险，你的符文永远不会丢失。",
    "Each fusion costs gold (5,000g for T2, 20,000g for T3, 50,000g for T4).": "每次融合消耗金币（T2: 5,000金币，T3: 20,000金币，T4: 50,000金币）。",
    "Infusion is done directly on your character sheet": "灌注直接在角色面板上进行",
    "hover an equipped slot and click the Infuse button. It permanently empowers the slot itself rather than the current item.": "悬停在已装备槽位上点击灌注按钮。它永久强化的是槽位本身而非当前物品。",
    "The bonus belongs to the slot": "加成属于槽位",
    "Infusion level is permanent and cannot be removed — invest it in slots you intend to keep long-term.": "灌注等级是永久的，不可移除——将其投资于你打算长期保留的槽位。",
    "swap the item and the infusion level carries over to the new piece.": "更换物品，灌注等级会延续到新部件。",
    "Each level adds +5% to the base stats of whatever item is equipped in that slot.": "每级为该槽位中装备的任意物品增加+5%基础属性。",
    "Costs Essence and gold, scaling quadratically with the current infusion level.": "消耗精髓和金币，随当前灌注等级二次方增长。",
"Augmentation permanently enhances an equipped item, adding +5% base stats per level up to +10. Found in the Enchant panel's Augmentation tab.": "增幅永久增强装备物品，每级+5%基础属性，最高+10。位于附魔面板的增幅标签页。",
    "Costs scale with level, requiring Focus Crystals and gold (from 1 crystal + 500k gold at +1 up to 20 crystals + 10M gold at +10).": "消耗随等级缩放，需要专注水晶和金币（从+1的1水晶+50万金币到+10的20水晶+1000万金币）。",
    "+1 to +5 are guaranteed to succeed.": "+1至+5必定成功。",
    "+6 to +10 have decreasing success rates (80%, 65%, 50%, 35%, 25%). On failure, materials are still consumed but the level does not increase.": "+6至+10成功率递减（80%、65%、50%、35%、25%）。失败时材料仍被消耗但等级不提升。",
    "Each +1 level adds +5% to all base stats of the item, stacking with rune and infusion bonuses.": "每+1级为物品所有基础属性+5%，与符文和灌注加成叠加。",
    "The shop lets you buy equipment, consumables, and utility items with gold, and sell your surplus items.": "商店让你用金币购买装备、消耗品和实用物品，并出售多余物品。",
    "Browse available items by category. Some items have limited stock and can only be purchased a fixed number of times.": "按类别浏览可用物品。部分物品库存有限，只能购买固定次数。",
    "Sell items from your inventory to recover gold. Each item has a fixed sell value.": "出售背包物品以回收金币。每件物品有固定售价。",
    "Buy": "购买",
    "Sell": "出售",
    "Special Items": "特殊物品",
    "Expansions": "扩展",
    "You can buy inventory expansions (+10 slots) and bank expansions (+25 slots). The price doubles with each purchase.": "你可以购买背包扩展（+10格）和仓库扩展（+25格）。每次购买价格翻倍。",
    "P Scrolls - Temporarily increase XP gained in a skill.": "经验卷轴-暂时提升某项技能获取的经验。",
    "Extended Craft Queue - Increases your crafting queue size.": "扩展制作队列-增加你的制作队列容量。",
    "The bank is a storage space separate from your inventory. Deposit valuable items to free up bag space.": "仓库是与背包分离的存储空间。存入贵重物品以释放背包空间。",
    "Bank Expansion": "仓库扩展",
    "Buy bank expansions from the shop to increase your storage capacity by 25 slots (up to 4 expansions maximum).": "从商店购买仓库扩展以增加25格存储容量（最多4次扩展）。",
    "Deposit/withdraw 1 item": "存入/取出1个物品",
    "Deposit/withdraw entire stack": "存入/取出整堆",
    "Choose quantity": "选择数量",
    "Controls": "操作",
    "Clic": "单击",
    "Ctrl+Clic": "Ctrl+单击",
    "Shift+Clic": "Shift+单击",
    "Search and Filters": "搜索与筛选",
    "Use the search bar to find items by name. Filter by type (equipment, resource, consumable) or by rarity. Sort by name, rarity, or quantity.": "使用搜索栏按名称查找物品。按类型（装备、资源、消耗品）或稀有度筛选。按名称、稀有度或数量排序。",
    "Aethyr Patron": "以太秘境赞助者",
    "Aethyr Premium": "以太秘境高级",
"Aethyr's Boon": "以太秘境恩赐",
    "Aethyr Architect": "以太秘境建筑师",
    "Founder": "创始者",
"Founder's Pack": "创始者礼包",
"Founder's Legacy": "创始者遗赠",
    "Founder of Aethyr": "以太秘境创始者",
    "Patron": "赞助者",
    "Monthly": "每月",
    "Annual": "每年",
    "Lifetime": "终身",
    "Subscribe": "订阅",
    "Secure via Stripe": "通过Stripe安全支付",
    "4,99 € / mo": "4.99€/月",
    "49,90 € / yr": "49.90€/年",
    "500 premium gems": "500高级宝石",
    "from 0,99 €": "0.99€起",
    "gems": "宝石",
    "gems / mo": "宝石/月",
    "offline": "离线",
    "efficiency": "效率",
    "Cosmetics": "装饰品",
    "Frames": "边框",
    "Portraits": "头像",
    "Shards": "碎片",
    "Crystals": "水晶",
    "Titles": "头衔",
    "Themes": "主题",
    "Exclusive frame": "专属边框",
    "Exclusive theme": "专属主题",
    "Exclusive title": "专属头衔",
    "Discord role": "Discord身份组",
    "Loyalty Badges": "忠诚徽章",
    "Express yourself": "彰显自我",
    "Forge your legend — stand apart in the leaderboard": "铸造你的传说——在排行榜中脱颖而出",
    "Frames, titles, portraits and themes": "边框、头衔、头像与主题",
"Unlock the game's cosmetics": "解锁游戏的装饰品",
    "Browse": "浏览",
    "Equipped": "已装备",
    "Pack Exclusive": "礼包专属",
    "Exclusif": "专属",
    "Excl.": "专属",
    "Premium": "高级",
    "Supporter": "支持者",
    "Standard": "标准",
    "Limited Edition": "限量版",
    "Free": "免费",
    "Gratuit": "免费",
    "Simple": "简约",
    "Elite": "精英",
    "A living pact — comfort, time, and a continued presence in the Aethyr.": "一份活的契约——舒适、时间与在以太秘境中的持续存在。",
    "Each month of patronage unlocks a new, ever more epic badge — from the first Spark to the Avatar of Aethyr at twelve months. Earned for life": "每个月的赞助解锁一枚新的、越来越史诗的徽章——从第一个火花到十二个月时的以太秘境化身。终身拥有",
    "even if you pause, you keep the badge you reached.": "即使暂停，你已获得的徽章也会保留。",
    "A new, ever more epic loyalty badge every month (up to 12)": "每月一枚新的、越来越史诗的忠诚徽章（最多12枚）",
    "Unlimited inventory": "无限背包",
    "Second crafting queue": "第二制作队列",
    "Sanctuary — passive production tied to your progress": "庇护所——与你的进度挂钩的被动生产",
    "Gather two resources at once": "同时采集两种资源",
    "Archonte": "执政者",
    "Ascendant": "超越者",
"Avatar d'Aethyr": "以太秘境化身",
    "Conclave": "秘密会议",
    "Gardien": "守护者",
    "Lueur": "微光",
    "Serment": "誓言",
    "Souverain": "统治者",
    "Transcendance": "超越",
    "Veille": "守望",
    "Éclat": "闪耀",
    "Étincelle": "火花",
    "A worn wooden frame. You start from zero.": "磨损的木框。你从零开始。",
    "Simple polished gold. Discreet but recognisable.": "简约抛光金。低调但可辨认。",
    "A cold, sober silver frame.": "冷酷素雅的银色边框。",
    "Carved from volcanic obsidian. Impenetrable.": "火山黑曜石雕刻。坚不可摧。",
    "The border is flowing, undulating lava.": "边框是流动的、起伏的熔岩。",
    "Liquid gold shapes and reshapes the border.": "液态黄金不断塑造与重塑边框。",
    "Wreathed in eternal flames.": "被永恒火焰环绕。",
    "Hot embers float and burn out around you.": "炽热的余烬在你周围漂浮熄灭。",
    "Ice shards drift and shimmer.": "冰晶碎片漂移闪烁。",
    "The deep green of ancient forests.": "远古森林的深绿色。",
    "Petals and leaves drift gently around the frame.": "花瓣与叶子在边框周围轻轻飘浮。",
    "Cracks of reality crackle around the portrait. Dark fragments orbit, a violet gulf opens behind.": "现实的裂隙在头像周围爆裂。黑暗碎片环绕，紫色深渊在后方展开。",
    "The void pulses, slow and inexorable.": "虚空脉动，缓慢而无情。",
    "A beam of golden light crosses your portrait diagonally. Blessed.": "一道金色光束斜穿你的头像。祝福。",
    "A beam of light sweeps 360° around the portrait. When it passes, you light up.": "一束光线360°扫过头像。光芒掠过时，你被点亮。",
    "Golden sparks rise endlessly around the portrait.": "金色火花在头像周围无尽升腾。",
    "A double border, desynced, oozing toxin.": "双层边框，错步，渗出毒液。",
    "A frame crackling with violet energy.": "噼啪作响的紫色能量边框。",
    "A frame cut from dark ruby.": "暗红宝石切割的边框。",
    "A golden light flows along the border like a current.": "金色光芒如电流沿边框流动。",
    "A mystical, refined amethyst purple.": "神秘而精致的紫水晶色。",
    "An unfathomable sapphire blue.": "深不可测的蓝宝石色。",
    "An unstable, chaotic red pulse.": "不稳定、混沌的红色脉动。",
    "Black and violet smoke reforms endlessly.": "黑紫色烟雾无尽重塑。",
    "A coat of frost forms and reforms.": "霜层不断凝结又重塑。",
    "Under the blood moon, the frame beats slowly.": "血月之下，边框缓缓律动。",
    "Lightning runs in sequence around the frame.": "闪电沿边框依次奔流。",
    "Electric arcs flash at irregular intervals.": "电弧以不规律间隔闪烁。",
    "Three concentric rings rotate in opposite directions. At the centre, perfect calm in the heart of the cyclone.": "三重同心环向相反方向旋转。中心之处，气旋之心完美宁静。",
    "Multicolored cosmic fluid undulates around the portrait.": "五彩宇宙流体在头像周围波动。",
    "Seven stars orbit at different speeds, linked by the lines of a constellation. Behind the portrait, the firmament shimmers.": "七颗星以不同速度环绕，由星座线相连。头像背后，苍穹闪烁。",
    "Wisps of shadow escape the frame.": "暗影游丝逸出边框。",
    "The portrait floats. A crown of Aethyr crystals orbits. Golden particles converge toward the centre.": "头像悬浮。以太秘境水晶王冠环绕。金色粒子向中心汇聚。",
    "Vines grow from the four corners and bloom at the heart of the frame. The cycle starts again, endlessly.": "藤蔓从四角生长，在边框中心绽放。循环往复，永无止境。",
    "Four occult runes appear and fade around you. Sometimes, reality itself tears for the blink of an eye.": "四个神秘符文在你周围显现又消隐。有时，现实自身在一眨眼间撕裂。",
    "Reserved for true supporters of Aethyr Idle.": "献给以太秘境放置的真正支持者。",
    "Awarded for guiding a companion to the Aethyr.": "因引导同伴踏入以太秘境而获颁。",
    "Exclusive to founders. Four golden filigrees in the corners, six gilded fireflies orbiting endlessly, a radiant rim. Those who wrote the first page of the Aethyr.": "创始者专属。四角金色花丝，六只鎏金萤火虫无尽环绕，璀璨的边框。书写以太秘境第一页的人。",
    "Golden grains fall diagonally across the portrait. Hour-marks light up around the frame like a clock whose hand is turning. For those who defied Time.": "金色颗粒斜落过头像。时辰标记像转动的时钟指针一样在边框周围亮起。献给那些违逆时间的人。",
    "Cyan-lilac particles converge from the outside.": "青色-淡紫粒子自外汇聚。",
    "Your portrait receives a chromatic veil that drifts slowly.": "你的头像覆上一层缓缓漂移的彩色面纱。",
    "Frames appear around your portrait in the leaderboard — visible to every player.": "边框显示在排行榜中你的头像周围——对所有玩家可见。",
    "Abyssal Rift": "深渊裂隙",
    "Aethyr Ascended": "以太秘境转生",
    "Aethyr's Breath": "以太秘境之息",
    "Amethyst": "紫水晶",
    "Arcane Frost": "奥术冰霜",
    "Blood Moon": "血月",
    "Bond of Aethyr": "以太秘境羁绊",
    "Broken Hourglass": "破碎沙漏",
    "Celestial": "天界",
    "Chaos Realm": "混沌领域",
    "Chromatic Prism": "彩色棱镜",
    "Corrupted": "腐化",
    "Cosmic Nebula": "宇宙星云",
    "Crimson Flame": "深红烈焰",
    "Crown of Stars": "星辰王冠",
    "Divine Light": "神圣之光",
    "Dragonfire": "龙息烈焰",
    "Emerald": "祖母绿",
    "Eternal Crown": "永恒王冠",
    "Eternal Garden": "永恒花园",
    "Eye of the Storm": "风暴之眼",
    "Forest Spirit": "森林之灵",
    "Glacial Crystal": "冰川水晶",
    "Golden Radiance": "金色光辉",
    "Inferno": "炼狱",
    "Lighthouse of the Depths": "深渊灯塔",
    "Obsidian": "黑曜石",
    "Polished Gold": "抛光金",
    "Premier Folio": "首卷典藏",
    "Ruby": "红宝石",
    "Sapphire": "蓝宝石",
    "Seal of the Void": "虚空封印",
    "Shadow Realm": "暗影领域",
    "Silver": "白银",
    "Sky Thunder": "天雷",
    "Tempest": "暴风雨",
    "Venom": "毒液",
    "Void Edge": "虚空利刃",
    "Void Pulse": "虚空脉动",
    "Ascension XP progress.": "飞升经验进度。",
    "Crafting Level": "制作等级",
    "Deepest floor reached in the Abyss.": "深渊抵达的最深层数。",
    "Dungeons Cleared": "已通关地下城",
    "Highest Mythic+ level completed.": "完成的最高大秘境+等级。",
    "Number of achievements unlocked.": "已解锁的成就数。",
    "Podium": "领奖台",
    "Ranking Categories": "排名类别",
    "Sum of all your skill levels.": "所有技能等级之和。",
    "The leaderboard lets you compare your progress with other players. Climb the ranks by improving your skills and completing challenges.": "排行榜让你与其他玩家比较进度。通过提升技能和完成挑战来攀登排名。",
    "The top 3 players in each category appear on a special podium. Your rank is always visible even if outside the top 50.": "每个类别的前3名玩家出现在特殊领奖台上。你的排名始终可见，即使在前50名之外。",
    "Total number of dungeons completed.": "已完成地下城总数。",
    "Your crafting skill level.": "你的制作技能等级。",
    "Your portrait, frame, and title cosmetics are displayed next to your name in the leaderboard.": "你的头像、边框和头衔装饰品显示在排行榜中你的名字旁边。",
    "Join Discord": "加入Discord",
    "Got it": "知道了",
"Don't show until next patch": "下个补丁前不再显示",
    "Reality Log": "现实日志",
    "xp": "经验",
    "xp/h": "经验/小时",
    "g/h": "金币/小时",
    "more": "更多",
    "Channeling Completed:": "引导完成：",
    "Recently": "最近",
    "by": "来自",
    "Exit": "退出",
    "Close": "关闭",
    "File": "文件",
    "Edit": "编辑",
    "View": "视图",
    "Help": "帮助",
    "About": "关于",
    "Copy": "复制",
    "Paste": "粘贴",
    "Cut": "剪切",
    "Delete": "删除",
    "Save": "保存",
    "Open": "打开",
    "New": "新建",
    "No": "否",
    "Yes": "是",
    "Ok": "确认",
    "Cancel": "取消",
    "Confirm": "确认",
    "Are you sure?": "确定吗？",
    "Logout": "登出",
    "Profile": "个人资料",
    "Account": "账号",
    "Message": "消息",
    "Chat": "聊天",
    "Mail": "邮件",
    "Report": "举报",
    "Block": "屏蔽",
    "Search": "搜索",
    "Filter": "筛选",
    "Sort By": "排序方式",
    "Ascending": "升序",
    "Descending": "降序",
    "Page": "页",
    "Next": "下一步",
    "Previous": "上一步",
    "First": "首页",
    "Last": "末页",
    "Loading": "加载中",
    "Error": "错误",
    "Success": "成功",
    "Warning": "警告",
    "Info": "信息",
    "or higher": "或以上",
    "Total": "总计",
    "Remaining": "剩余",
    "Active": "激活",
    "Inactive": "未激活",
    "On": "开",
    "Off": "关",
    "Enable": "启用",
    "Disable": "禁用",
    "Show": "显示",
    "Hide": "隐藏",
    "Required": "必须",
    "Optional": "可选",
    "None": "无",
    "Unknown": "未知",
    "seconds": "秒",
    "minutes": "分钟",
    "hours": "小时",
    "days": "天",
    "hour": "小时",
    "min": "分钟",
    "sec": "秒",
    "day": "天",
    "week": "周",
    "month": "月",
    "year": "年",
    "Cooking the food or mana potion you already have equipped now tops up that equipped slot directly, instead of piling into your bag. It even works when your inventory is full.": "烹饪已装备的食物或法力药水现在直接补充该装备槽位，而非堆入背包。背包满时依然有效。",
    "Discovering a legendary relic in the Abyss now has a reveal screen worthy of the moment, restyled to fit the rest of the game.": "在深渊中发现传说遗物现在有一个配得上此刻的揭示画面，重新设计以匹配游戏的其余部分。",
    "Easier to follow what a crafted item is used for. When an item feeds many recipes, you can now open the full list and jump straight to any of them in one click, instead of only seeing the first few.": "更容易追踪制作物品的用途。当一件物品关联多个配方时，现在可一键打开完整列表并直接跳转到其中任意一个，而不只是看到前几个。",
    "If your purchased gems, Patron status or cosmetics fail to load when you sign in, the game now tells you instead of staying silent, so you know it is a temporary connection issue and not lost content.": "若登录时已购买的宝石、赞助者身份或装饰品加载失败，游戏现在会告诉你而非沉默，让你知道这只是暂时的连接问题，而非内容丢失。",
    "Legendary relics of the Abyss are now true discoveries. These permanent rewards from the Abyss mega-bosses used to drop often enough that a single deep dive could hand you the whole set. Their odds have been cut sharply and now rise the deeper you descend, so uncovering one is a rare and memorable moment again.": "深渊传说遗物现在是真正的发现。这些来自深渊巨型首领的永久奖励过去掉落频繁，一次深度下潜就能集齐整套。现在掉落几率大幅降低，随下潜深度增加而提升，让发现它们再次成为稀有的难忘时刻。",
"Loot pop-ups now use the same rarity colors as the rest of the game, so an item's rarity reads the same everywhere.": "掉落弹窗现在使用与游戏其他部分相同的稀有度颜色，让物品稀有度在任何地方都保持一致。",
    "On the Abyss screen, the Dive and Continue buttons now sit above the checkpoint selector and your saved blessings, so you can start a dive in one click without scrolling past a long list of blessings.": "深渊界面中，下潜和继续按钮现在位于检查点选择器和已保存祝福之上，让你一键即可开始下潜，无需滚过长长的祝福列表。",
    "Relics and living objects found while you were away are now showcased in their own highlighted section at the top of the welcome back screen, with their rarity colors, so a prized find can no longer slip by unnoticed.": "离线期间获得的遗物和活物现在在欢迎回来界面顶部以高亮专属区域展示，附有稀有度颜色，让珍贵发现不再被忽视。",
    "Relics now always come with their full set of four rune slots. Some relics were dropping with too few slots, or none at all; existing relics in your inventory, bank and equipment are repaired automatically, and any rune you had already socketed is kept in place.": "遗物现在始终带有完整的四个符文插槽。有些遗物之前掉落时插槽太少甚至没有；背包、仓库和装备中的现有遗物已自动修复，已镶嵌的符文保持原位。",
    "Several mobile layout fixes. The equipment screen now fits small phones without overflowing, pop-up dialogs keep a clean margin from the screen edges, and the quick action menu no longer overlaps the bottom navigation bar.": "多项手机布局修复。装备界面现在适配小屏手机不溢出，弹窗对话框与屏幕边缘保持干净边距，快捷操作菜单不再覆盖底部导航栏。",
    "Spectral Tier — New Gear Between Void and Eternal": "灵质品阶——虚空与永恒之间的新装备",
    "Starting a session is clearer. When you pick a character, a short loading screen now appears while your world is prepared, instead of a brief blank pause.": "开始游戏更清晰了。选择角色后会显示短暂的加载画面，而非简短的黑屏停顿。",
    "The Copper Band ring can now be crafted, just like its matching Copper Amulet.": "铜戒指现在可以制作了，就和配套的铜护符一样。",
    "The Soul Anchor relic now works. Its promise to let you survive a killing blow once per Abyss run was never actually taking effect. It now saves you as intended.": "灵魂锚遗物现在生效了。它承诺每轮深渊让你从一次致命攻击中存活，但之前从未真正生效。现在它如预期般拯救你。",
    "The game opens faster. The first load is lighter, so you reach the title screen and your characters more quickly.": "游戏启动更快了。首次加载更轻量，让你更快到达标题画面和角色。",
    "The leaderboard no longer gets stuck loading forever when the connection hiccups. If it cannot reach the rankings, it now shows a clear message with a button to try again.": "排行榜不再因连接波动而无限卡在加载中。若无法获取排名，现在会显示明确消息并提供重试按钮。",
    "The rogue talent Fifth Slash has been brought back in line. It was quietly outclassing every other choice at its tier and making the picks around it feel pointless. Its bonus now sits alongside its neighbors, so the other talents at that tier are real options again.": "盗贼天赋「第五斩」已回调平衡。它曾悄然碾压同阶所有其他选项，让周围的选择毫无意义。现在其加成与相邻天赋持平，同阶其他天赋再次成为真正的选择。",
    "You can now extract essence in bulk from your inventory. In selection mode, alongside selling or sending to the bank, a new Extract Essence action turns all the selected equipment into essence at once, so you no longer have to extract piece by piece.": "现在可以从背包批量提取精髓。选择模式下，除了出售或存入仓库，新增的「提取精髓」操作可一次性将所有选中装备转化为精髓，无需逐件提取。",
    "You can now reorder your crafting queue without cancelling anything. Drag a queued item to move it earlier or later, or use the arrows on touch screens, so you can slot in a priority craft without tearing down the rest of your list.": "现在可以重新排列制作队列而无需取消任何东西。拖拽队列中的物品来前移或后移，触屏设备上可用箭头操作，让你插入优先制作项而无需打乱整个列表。",
    "Your progress is better protected when the game updates. An out-of-date version of the game can no longer load and overwrite a save created by a more recent version, keeping your latest progress safe.": "游戏更新时你的进度得到更好保护。旧版本游戏不再能加载并覆盖新版本创建的存档，保护你最新的进度安全。",
    "Your progress is now saved to the cloud far more reliably. The game keeps saving even while its tab sits in the background, warns you on screen if your progress stops reaching the cloud so you can react before anything is lost, and now restores your most recent progress from this device if the online copy ever falls behind. If you use an antivirus or firewall, adding aethyridle.com to its exceptions helps your saves go through.": "你的进度现在更可靠地保存到云端。游戏即使标签页在后台也会持续保存，若进度停止上传云端则屏幕弹窗警告让你及时应对，如果在线副本落后则从此设备恢复最新进度。如果你使用杀毒软件或防火墙，将aethyridle.com加入例外有助于存档正常上传。",
    "Fights restart automatically": "战斗自动重启",
    "The Celestial Islands": "天界群岛",
    "Ascend": "转生",
    "Gems": "宝石",
    "Marketplace": "市场",
    "Premium Shop": "会员商店",
    "You were gone for": "你已离开",
    "Infinite Ascension": "无限飞升",
    "Reach combat level 100 to ascend. (You are level 1).": "达到战斗等级100以转生。（你当前等级为1）。",
    "The Celestial Islands are sealed.": "天界群岛已封锁。",
    " XP": " 经验",
    "Level ": "等级 ",
    "P": "P",
    "B": "B",
    "H": "H",
    "x": "x",
    "Relics": "遗物",
    " sorts": " 排序",
    "jewelry": "珠宝",
    "click to add": "点击添加",
    "eq": "装备",
    " CD": " 冷却",
    " mana": " 法力",
    " xp": " 经验",
    "3.00/h": "3.00/小时",
    "Amélioration": "升级",
    "Attaque": "攻击",
    "Build de Sorts": "法术配置",
    "Soin": "治疗",
"Sorts d'Attaque": "攻击法术",
    "Tous": "全部",
    "Verrouillés": "已锁定",
    "Basique": "基础",
    "Bouclier": "护盾",
    "Énergie par frappe": "每击能量",
    "Leg.": "传说",
    "Legendaire": "传说",
    "The \"Gather\" shortcut on a recipe's missing materials now actually takes you to the right place. It travels to the easiest region where the material can be gathered and highlights the exact node, instead of leaving you on the map you were already on. It only shows up for materials you can truly gather, and if travelling would interrupt a gathering already running, the game asks first.": "配方缺失材料的「采集」快捷方式现在真正带你到正确的地点。它会前往最容易采集该材料的区域并高亮显示确切的节点，而不是把你留在当前地图。仅对你可采集的材料显示，如果传送会中断正在进行的采集，游戏会先征询你的意见。",
    "+0 Defense in practice": "实际+0防御",
    "+15% Defense": "+15%防御",
    "+15% Defense for 8 seconds.": "+15%防御，持续8秒。",
    "1h 10m 28s": "1小时10分28秒",
    "Abyss Boss Kills": "深渊首领击杀",
    "Total Gathers": "总采集",
    "Outpost": "前哨站",
    "+10% dodge | ≥100%": "+10%闪避 | ≥100%",
    "+10% freeze chance | ≥100%": "+10%冻结概率 | ≥100%",
    "+100% attack speed for 2 s": "+100%攻速持续2秒",
    "+12% global damage": "+12%全局伤害",
    "+15% DoT damage | ≥75%": "+15%持续伤害 | ≥75%",
    "+20% double-hit chance": "+20%双重打击概率",
    "+4% lifesteal | ≥75%": "+4%吸血 | ≥75%",
    "+7% crit chance | ≥75%": "+7%暴击率 | ≥75%",
    "+8% attack speed | ≥75%": "+8%攻速 | ≥75%",
    "+8% block chance | ≥100%": "+8%格挡率 | ≥100%",
    "-20% damage taken": "-20%所受伤害",
    "-5% damage taken | ≥75%": "-5%所受伤害 | ≥75%",
    "5 ticks scaling off your attack damage": "基于攻击伤害的5跳伤害",
    "Direct execute if enemy is below 20% HP": "敌人HP低于20%时直接处决",
    "DoT ticks 2× faster | ≥100%": "持续伤害跳速×2 | ≥100%",
    "Freeze enemy for 2.5 s (attacks ×0.7, damage taken ×1.4)": "冻结敌人2.5秒（攻击×0.7，所受伤害×1.4）",
    "Heal 10% of your max HP": "恢复10%最大生命值",
    "Strong DoT on enemy": "对敌人施加强力持续伤害",
    "Temporary shield = 15% of your max HP": "临时护盾=15%最大生命值",
    "critical hits ignore 25% armor | ≥100%": "暴击无视25%护甲 | ≥100%",
    "each auto applies a mini-DoT (3 ticks scaling off your attack damage)": "每次普攻施加微型持续伤害（基于攻击伤害的3跳）",
    "enemy attacks slowed -10% | ≥75%": "敌人攻击减速-10% | ≥75%",
    "execute enemies below 20% HP": "处决HP低于20%的敌人",
    "frozen enemies take ×1.4 damage": "冻结敌人受到×1.4伤害",
    "heal 4% max HP on kill | ≥100%": "击杀恢复4%最大HP | ≥100%",
    "×0.75 in defense.": "防御×0.75。",
    "×1.3 against all base elements — ×1.0 against each other": "对抗所有基础元素×1.3——相互之间×1.0",
    "(mode)": "（模式）",
    "(spells only)": "（仅法术）",
    "+10% DoT": "+10%持续伤害",
    "+10% crit": "+10%暴击",
    "+10% damage": "+10%伤害",
    "+10% lifesteal": "+10%吸血",
    "+10% speed": "+10%速度",
    "+10% spells": "+10%法术",
    "+15% crit": "+15%暴击",
    "+15% damage": "+15%伤害",
    "+15% speed": "+15%速度",
    "+15% spells": "+15%法术",
    "+20% DoT": "+20%持续伤害",
    "+3% lifesteal": "+3%吸血",
    "+30% DoT": "+30%持续伤害",
    "+5% crit": "+5%暴击",
    "+5% damage": "+5%伤害",
    "+5% speed": "+5%速度",
    "+5% spells": "+5%法术",
    "+6% lifesteal": "+6%吸血",
    "A dedicated panel lets you browse every familiar in the game. Those you own appear in full color; those still locked show only silhouettes. Click any familiar to see its bonuses, follow its progression, or equip it in a single click. The promise of a complete collection is in your hands.": "专属面板让你浏览游戏中每一只使魔。已拥有的全彩显示，未解锁的仅显示剪影。点击任意使魔查看其加成、追踪进度或一键装备。完整收藏的承诺尽在你手中。",
    "A dedicated slot awaits your companion on the Equipment page, right next to your relics. Equip the one that fits your style, and its bonuses apply instantly to your character. You can only have one active at a time, so choose wisely.": "装备页面上的专属槽位等待你的伙伴，就在你的遗物旁边。装备最适合你风格的使魔，其加成立即应用于你的角色。每次只能激活一只，请谨慎选择。",
    "A familiar is a mystical creature you collect during your adventures in the Celestial Islands. Each one has its own personality": "使魔是你天界群岛冒险中收集的神秘生物。每只都有独特的个性",
    "Advice for New Players": "新玩家建议",
    "Common — easy to find, solid bonuses to start with.": "普通——容易找到，起步阶段的扎实加成。",
    "Do not wait for the perfect familiar — even a Common leveled up is far better than an empty slot.": "不要等待完美的使魔——即使一只普通使魔升满级也远好于空槽位。",
    "Epic — true progression milestones, clearly more powerful.": "史诗——真正的进度里程碑，明显更强。",
    "Equip a Familiar": "装备使魔",
    "Every familiar starts at Level 1 and can grow endlessly. Levels do not come from fighting — they feed on Celestial Spirit Essence, a resource that also drops in the Celestial Islands. The more you level up a familiar, the stronger its bonuses become. Keeping a rare companion relevant is a genuine long-term investment.": "每只使魔从等级1开始，可无限成长。等级不来自战斗——它们以天界精魂精华滋养，该资源同样在天界群岛掉落。使魔等级越高，加成越强。让稀有伙伴保持价值是真正的长期投资。",
    "Familiars appear as drops from the Celestial Islands. Every kill has a chance to reward you with one. The higher you climb, the better the creatures you may encounter — but the rarest ones will always be a true chase.": "使魔作为天界群岛的掉落物出现。每次击杀都有机会奖励你一只。爬得越高，遇到的生物越好——但最稀有的永远是真正的追逐目标。",
    "Familiars are loyal companions that fight at your side. Once bound, they grant you lasting bonuses and, at the highest tiers, unique abilities that reshape your entire playstyle.": "使魔是与你并肩作战的忠实伙伴。一旦绑定，它们为你提供持久的加成，最高品阶的使魔甚至拥有彻底改变你玩法风格的独特技能。",
    "Familiars come in six levels of rarity, each more powerful than the last:": "使魔分六个稀有度等级，一个比一个更强大：",
    "How to Obtain Them": "如何获取",
    "Keep your Celestial Spirit Essence for the familiar you use the most. Scattering levels across ten creatures is rarely worth it.": "把天界精魂精华留给你最常用的使魔。把等级分散到十个生物身上几乎不值。",
    "Legendary and Mythic Passives": "传说与神话被动",
    "Legendary — gifted with a unique passive that transforms your builds.": "传说——拥有改变你构筑的独特被动。",
    "Mythic — extremely rare, reserved for the most patient players. A sign of prestige.": "神话——极其稀有，属于最有耐心的玩家。声望的象征。",
    "Rare — stronger, with richer personalities.": "稀有——更强，个性更丰富。",
    "Starting from Legendary rarity, every familiar carries a unique passive ability that goes beyond simple stat boosts. These effects genuinely change how your build plays and open doors to entirely new strategies. Mythic familiars go even further — each is an event in itself.": "从传说稀有度起，每只使魔都带有一个超越简单属性加成的独特被动技能。这些效果真正改变你的构筑玩法，开启全新策略之门。神话使魔更进一步——每一只本身就是一个事件。",
    "The Collection": "图鉴",
    "The Six Rarities": "六种稀有度",
    "Uncommon — a welcome upgrade, a little more specialized.": "精良——受欢迎的升级，更专业一些。",
    "Up Your Companion": "培养你的伙伴",
    "What is a Familiar?": "什么是使魔？",
    "When you obtain a Legendary or Mythic, read its passive carefully": "获得传说或神话时，仔细阅读其被动",
    "it can completely reshape how you approach combat.": "它可以彻底重塑你应对战斗的方式。",
    "some strengthen your attacks, others reinforce your defenses, some find more gold, and others bring abilities unlike anything else in the game.": "有的强化你的攻击，有的增强你的防御，有的寻找更多金币，还有的带来游戏中独一无二的能力。",
    "Access": "进入",
    "Advice for New Climbers": "新攀登者建议",
    "Affix reagents — to reroll, lock, or unlock slots on your endgame gear.": "词缀材料——用于重骰、锁定或解锁终局装备的插槽。",
    "Astral Void — gravity warps your attacks and costs more mana to cast spells.": "星界虚空——重力扭曲你的攻击，施法消耗更多法力。",
    "Auto-Advance — each victory automatically chains to the next floor. Ideal to push your record as far as possible.": "自动推进——每场胜利自动进入下一层。适合尽可能刷新纪录。",
    "Because nothing is ever lost, you can freely travel to any floor you have already cleared. A chronology lists every step of your climb, so you can farm an earlier floor to gather resources, or push forward to chase a new record, at any moment.": "因为一切都不会丢失，你可以随时自由前往任何已通关的楼层。时间线列出了你攀登的每一步，让你可以随时回到较早楼层刷资源，或继续前进追逐新纪录。",
    "Celestial Spirit Essence — the resource that levels up your familiars.": "天界精魂精华——用于提升使魔等级的资源。",
    "Closing the game does not stop your ascension. Your character keeps fighting in the background, at a reduced rate, and a full summary greets you when you come back. Perfect for an idle game — the Islands never sleep.": "关闭游戏不会停止你的攀登。你的角色在后台以降低的速度继续战斗，回归时会看到完整总结。放置游戏的完美之选——群岛永不休眠。",
    "Divine Sanctum — a judgemental aura saps your offensive power. Only the most solid builds endure.": "神圣圣所——审判光环削弱你的攻击力。只有最坚固的构筑才能承受。",
    "Do not climb too fast. Every ten floors, a new Hazard arrives — take the time to adapt your build.": "不要爬得太快。每十层就有新的灾厄降临——花时间调整你的构筑。",
    "Each floor is a one-on-one fight against a unique boss. Defeat it, and the next floor opens. There is no final ceiling": "每层都是一场与独特首领的一对一战斗。击败它，下一层开启。没有天花板",
    "Every ten floors, the zone shifts and a new Hazard applies — a passive condition that changes the combat until the next zone. Plan to adapt your build at each transition.": "每十层，区域变换并施加新的灾厄——一种改变战斗的被动条件，持续到下一个区域。计划在每次过渡时调整你的构筑。",
    "Every tenth floor, a mega-boss blocks your path. These fights are more demanding, but the rewards are doubled": "每十层，巨型首领挡住去路。这些战斗要求更高，但奖励翻倍",
    "Every victory can grant several drops:": "每场胜利可掉落多种物品：",
    "Familiars of every rarity — the iconic reward of the Islands.": "各种稀有度的使魔——群岛的标志性奖励。",
    "Farm Current Floor — you stay on the same floor and loop through the fight. Ideal to gather resources or hunt for a specific familiar.": "刷当前层——你停留在同层循环战斗。适合收集资源或猎取特定使魔。",
    "Mega-bosses are genuine walls. If one blocks you, go back and polish your equipment or your affixes before trying again.": "巨型首领是真正的墙壁。如果被挡住，回去打磨你的装备或词缀再试。",
    "Mythic relics — but only on the highest floors, and with a truly rare chance.": "神话遗物——但仅限于最高层，几率极为稀有。",
    "Offline Progression": "离线进度",
    "Permanent Progression": "永久进度",
    "Stormpeaks — lightning harries you, some of your attacks miss.": "风暴之巅——闪电骚扰你，部分攻击会未命中。",
    "Sunscorched Heights — the heat drains your life, and healing no longer works. A true test of nerves.": "日灼高地——热浪消耗你的生命，治疗不再生效。真正的意志考验。",
    "The Celestial Islands are the great endgame of Aethyr — a vertical ascension where each floor is a solo boss fight, and where your progression is etched forever.": "天界群岛是以太秘境的终极终局——每层都是单人首领战的垂直攀登，你的进度永远铭刻。",
    "The Celestial Islands open at combat level 100. Before that, focus on the main adventure and your dungeons. When you are ready, a dedicated tab appears in the sidebar, under Adventure.": "天界群岛在战斗等级100时开启。在此之前，专注于主线冒险和地下城。准备就绪后，侧边栏冒险下方会出现专属标签页。",
    "The Farm mode is your best ally to obtain a specific familiar or gather essence. Patience pays off.": "刷图模式是获取特定使魔或收集精华的最佳盟友。耐心终有回报。",
    "Two Ways to Play": "两种玩法",
    "What is the Ascension?": "什么是攀登？",
    "Whispering Clouds — a peaceful starting ground, no active hazard.": "低语云层——平和的起点，无激活灾厄。",
    "You choose the rhythm of your ascension:": "你选择攀登的节奏：",
    "more resources, more gold, more experience. They are the real stopping points of your climb, and the moments you will remember.": "更多资源、更多金币、更多经验。它们是你攀登的真正驻足点，也是你会铭记的时刻。",
    "the ascension keeps going as long as you are willing to climb. Failing on a floor never sends you back — your highest floor reached is yours forever.": "只要你愿意攀登，攀登就会继续。在某层失败不会让你倒退——你到达的最高层数永远属于你。",
    "The Hazards": "灾厄",
    "The Mega-Bosses": "巨型首领",
    "The Rewards": "奖励",
    "(stat ": "（属性 ",
    "+0.05% max HP regen/s per rank (max 50).": "每级+0.05%最大HP回复/秒（最高50）。",
    "+0.5% all XP per rank (max 50).": "每级+0.5%所有经验（最高50）。",
    "+0.5% critical hit chance per rank (max 20).": "每级+0.5%暴击率（最高20）。",
    "+0.5% damage reduction per rank (max 20).": "每级+0.5%伤害减免（最高20）。",
    "+0.5% double hit chance per rank (max 20).": "每级+0.5%双重打击概率（最高20）。",
    "+0.5% double resource chance per rank (max 40).": "每级+0.5%双倍资源概率（最高40）。",
    "+0.5% lifesteal per rank (max 20).": "每级+0.5%吸血（最高20）。",
    "+0.5% loot quantity per rank (max 50).": "每级+0.5%掉落数量（最高50）。",
    "+0.5% material save chance per rank (max 40).": "每级+0.5%材料节约概率（最高40）。",
    "+0.5% rare drop chance per rank (max 40).": "每级+0.5%稀有掉落概率（最高40）。",
    "+0.8% attack speed per rank (max 25).": "每级+0.8%攻速（最高25）。",
    "+1% armor penetration per rank (max 25).": "每级+1%护甲穿透（最高25）。",
    "+1% damage per rank (max 100).": "每级+1%伤害（最高100）。",
    "+1% defense per rank (max 100).": "每级+1%防御（最高100）。",
    "+1% gold find per rank (max 100).": "每级+1%金币获取（最高100）。",
    "+1% max HP per rank (max 100).": "每级+1%最大HP（最高100）。",
    "+1% mythic essence drop rate per rank (max 50).": "每级+1%神话精髓掉率（最高50）。",
    "+1% shop discount per rank (max 25).": "每级+1%商店折扣（最高25）。",
    "+1.5% active-ability damage per rank (max 100). Dedicated late-game scaling path for spells and abilities, does not affect auto-attacks.": "每级+1.5%主动技能伤害（最高100）。法术和技能专属的终局缩放路线，不影响自动攻击。",
    "+10 XP per rune insertion into a gear slot, and +50 XP per successful rune fusion (tier upgrade).": "每嵌入符文到装备槽+10经验，每次符文融合成功（升阶）+50经验。",
    "+10 max mana per rank (max 50).": "每级+10最大法力（最高50）。",
    "+2% critical hit damage per rank (max 50).": "每级+2%暴击伤害（最高50）。",
    "-1% crafting time per rank (max 25).": "每级-1%制作时间（最高25）。",
    "-1% gathering time per rank (max 25).": "每级-1%采集时间（最高25）。",
    "20% bonus per rank.": "每级20%加成。",
    "50% bonus per rank.": "每级50%加成。",
    "Arcane Mastery": "奥术精通",
    "Ascension Points": "飞升点数",
    "Ascension XP Sources": "飞升经验来源",
    "Ascension XP is earned from the following activities. The deeper or higher you go, the more XP you earn per run:": "飞升经验从以下活动中获取。走得越深越高，每次获得的经验越多：",
    "Ascension unlocks once you begin earning Ascension XP. This happens automatically when you engage in Mythic+ dungeons, the Abyss, and rune handling (insertion and fusion).": "一旦你开始获取飞升经验，飞升即解锁。当你参与大秘境+地下城、深渊和符文操作（嵌入与融合）时自动发生。",
    "Bargain": "讨价还价",
    "Bloodthirst": "嗜血",
    "Boosts your gathering and crafting efficiency.": "提升采集与制作效率。",
    "Bounty": "赏金",
    "Diminishing Returns": "收益递减",
    "Each Ascension Level grants 1 Ascension Point. The XP required per level follows the formula": "每个飞升等级授予1飞升点数。每级所需经验遵循公式",
    "Each node applies diminishing returns at higher ranks to maintain balance:": "每个节点在高级时应用收益递减以维持平衡：",
    "Fortitude": "坚韧",
    "Fortune (Economy)": "财富（经济）",
    "Full bonus per rank.": "每级全额加成。",
    "Fury (Offensive)": "狂怒（攻击）",
    "How to Unlock": "如何解锁",
    "Improves your survivability through health, defense, and regeneration.": "通过生命、防御和回复提升你的生存能力。",
    "Increases your gold income, drop rates, and shop discounts.": "增加你的金币收入、掉率和商店折扣。",
    "Increases your raw damage output, critical strikes, and attack speed.": "增加你的原始伤害输出、暴击和攻击速度。",
    "Insight": "洞察",
    "Ironhide": "铁皮",
    "Lethality": "致命",
    "Level^1.8. You can allocate points freely across any node in the four categories. Points can be refunded at any time for free.": "等级^1.8。你可以在四个类别的任意节点中自由分配点数。点数可随时免费返还。",
    "Lucky": "幸运",
    "Masterwork": "杰作",
    "Mythic Affinity": "神话亲和",
    "Mythic+ Clears": "大秘境+通关",
    "Piercing": "穿透",
    "Precision": "精准",
    "Preservation": "保存",
    "Prosperity": "繁荣",
    "Ranks 1-10": "1-10级",
    "Ranks 11-50": "11-50级",
    "Ranks 51+": "51级以上",
    "Refunding Points": "返还点数",
    "Regeneration": "再生",
    "Resilience (Defensive)": "韧性（防御）",
    "Scavenger": "拾荒者",
    "Swift Hands": "快手",
    "Swiftness": "迅捷",
    "Tenacity": "顽强",
    "The Ascension system is the endgame progression path. It allows you to permanently enhance your character through powerful passive bonuses.": "飞升系统是终局成长路径。它通过强大的被动加成永久增强你的角色。",
    "Vitality": "活力",
    "Wisdom (Professions)": "智慧（职业）",
    "Wrath": "愤怒",
    "You can refund all your Ascension Points at any time for free. This resets your entire allocation, allowing you to redistribute points to different nodes.": "你可以随时免费返还所有飞升点数。这将重置所有分配，让你可以重新将点数分配到不同节点。",
    "each clear grants (100 + 60 * mythic level) * (1 + 0.3 * ln(mythic level + 1)) XP (e.g. M+1 = ~160, M+10 = ~1,200, M+20 = ~2,800). Normal dungeon clears do NOT grant Ascension XP.": "每次通关给予(100 + 60 × 神话等级) × (1 + 0.3 × ln(神话等级+1))经验（例：M+1≈160, M+10≈1,200, M+20≈2,800）。普通地下城通关不给予飞升经验。",
    "each cleared depth grants 100 + 10 per depth XP, with a +1,000 bonus every 10 depths and a +5,000 bonus every 50 depths.": "每通关一层给予100+10×深度经验，每10层+1,000奖励，每50层+5,000奖励。",
    "1 slot at M+5, 2 at M+10, 3 at M+20, then +1 every ~10 levels up to 6 regular + 4 Apex at M+100.": "M+5时1槽，M+10时2槽，M+20时3槽，之后约每10级+1，最高M+100时6常规+4巅峰。",
    "10M base × 1.35^(level-1). Boss damage": "1000万基础 × 1.35^(等级-1)。首领伤害",
    "25 regular affixes + 8 Apex affixes = 33 total. Each comes with its own Mythic Imperative (see the Imperatives tab).": "25常规词缀 + 8巅峰词缀 = 共33个。每个都有对应的神话要务（参见要务标签页）。",
    "30-60s per boss at a level matching your build. Higher levels stretch to 60-90s and demand sustain, not just burst.": "与构筑匹配的等级每首领30-60秒。更高级别延长至60-90秒，需要续航而不仅是爆发。",
    "80 base × 1.06^(level-1). No more step buffs — the curve is smooth.": "80基础 × 1.06^(等级-1)。不再有阶梯式增强——曲线平滑。",
    "A per-dungeon difficulty multiplier (1 to 6) modulates its Mythic+ scaling. It is currently 1 for every dungeon, so they all scale identically.": "每个地下城的难度倍率（1至6）调节其大秘境+缩放。目前每个地下城都是1，所以缩放相同。",
    "Aetherial Blossom": "以太之花",
    "Affix Loadout (auto-applied)": "词缀配置（自动应用）",
    "Affixes Pool": "词缀池",
    "Affixes are dungeon-wide modifiers that shape your run. There are no more tiers — all affixes share one pool and you choose which ones to use via the Imperatives panel.": "词缀是塑造你本轮的地下城全局修正。不再分阶——所有词缀共享一个池，你通过要务面板选择使用哪些。",
    "Apex affixes are brutal mechanics (Aetheric Veil, Phase Shift, Dispel, Devourer, etc.) that unlock at M+30, M+50, M+70, M+100. They counter pure stat-stacking with rotation-breaking effects.": "巅峰词缀是残酷的机制（以太帷幕、相位转换、驱散、吞噬者等），在M+30、M+50、M+70、M+100解锁。它们用打破轮换的效果来对抗纯属性堆积。",
    "Ascension XP": "飞升经验",
    "Auto-Eat & Auto-Mana": "自动进食与自动法力",
    "Bonus combat class XP": "额外战斗职业经验",
    "Boss": "首领",
    "Boss HP": "首领HP",
    "Completing a dungeon rewards you with unique loot found nowhere else. Each dungeon drops specific equipment and resources tied to its theme.": "通关地下城奖励你独一无二的战利品。每个地下城掉落与其主题相关的特定装备和资源。",
    "Dungeon Stages": "地下城阶段",
    "Dungeons are a challenge reserved for the most daring. Make sure you are well prepared before venturing in.": "地下城是留给最勇敢者的挑战。进入前确保做好充足准备。",
    "Dungeons consist of multiple stages and culminate in a boss fight. There are 6 dungeons, each with an increasing level requirement:": "地下城由多个阶段组成，最终以首领战收尾。共有6个地下城，每个等级要求递增：",
    "Each dungeon contains several stages of different types:": "每个地下城包含几种不同类型的阶段：",
    "Each week a Featured Combo is suggested. Use it as-is to earn +25% score and +25% mastery gain on your Imperatives.": "每周推荐一组精选组合。原样使用可获得+25%分数和+25%要务精通获取。",
"Entering any Mythic+ dungeon requires a Mythic Key, crafted in the Crafting panel under the 'Mythic Keys' tab:": "进入任何大秘境+地下城需要神话钥匙，在制作面板的「神话钥匙」标签页下制作：",
    "Fight regular enemies. Your HP and mana carry over between stages.": "与普通敌人战斗。你的HP和法力在阶段间延续。",
    "Grants bonus gold and loot.": "给予额外金币和战利品。",
    "Heals a portion of your HP between fights.": "战斗间恢复部分HP。",
    "Higher Mythic+ levels grant significantly better rewards :": "更高的大秘境+等级给予显著更好的奖励：",
    "Higher tier keys require rarer materials (mithril, gold, thorium bars, essences, gems, etc.) and a higher crafting level.": "更高品阶的钥匙需要更稀有材料（秘银、金、钍锭、精髓、宝石等）以及更高的制作等级。",
    "If your loadout has fewer pins than the slot count demands, the weekly Featured Combo fills the remainder.": "如果你的配置钉选少于槽位数要求，每周精选组合会填充剩余部分。",
    "Imperative mastery": "要务精通",
    "Instead of a per-run modal, your affix selection is now a saved loadout that applies automatically each time you enter Mythic+.": "不再每次弹窗选择，你的词缀选择现在是保存的配置，每次进入大秘境+时自动应用。",
    "Keys are grouped by tiers of 5 levels": "钥匙按5级一阶分组",
    "Mythic Essence": "神话精髓",
    "Mythic+ Mechanics": "大秘境+机制",
    "Mythic+ Rewards": "大秘境+奖励",
    "Mythic+ mode unlocks after clearing The Convergence (Level 92 dungeon). Once unlocked, every dungeon gains a Mythic+ selector — and the new Imperatives panel appears in the sidebar.": "大秘境+模式在通关聚合之地（92级地下城）后解锁。解锁后每个地下城都拥有大秘境+选择器——新的要务面板出现在侧边栏中。",
    "Mythic+ turns each dungeon into a real fight. Bosses scale aggressively in HP, with gentle damage growth — the goal is a 30-90 second fight per boss, not a one-shot exchange.": "大秘境+将每个地下城变成真正的战斗。首领HP激进缩放，伤害温和增长——目标是每首领30-90秒的战斗，而不是一击秒杀。",
    "One key is consumed each time you enter a Mythic+ dungeon.": "每次进入大秘境+地下城消耗一把钥匙。",
    "Order = priority. Lower numbers are picked first when slots are limited. Reorder with ▲/▼ on each pinned card.": "顺序 = 优先级。槽位有限时数字小的先被选。用每张钉选卡片上的▲/▼重新排序。",
    "Overview": "概述",
    "Per-Dungeon Leaderboard": "每个地下城排行榜",
    "Pin affixes in the Imperatives tab (✦ icon). Each pinned affix lives in your saved loadout.": "在要务标签页钉选词缀（✦图标）。每个钉选的词缀保存在你的配置中。",
    "Powerful enemies with unique abilities. Hover over boss stages to see their mechanics.": "拥有独特技能的强大敌人。悬停在首领阶段上可查看其机制。",
    "Rest": "休息",
    "Slot count grows with M+ level": "槽位数随M+等级增长",
    "Some quests require you to complete specific dungeons. Check your active quests to know which ones.": "某些任务要求你完成特定地下城。查看进行中的任务以知晓。",
    "Sorted by mythic level (highest first), then by clear time (fastest first). Two players at M+50 are ranked by who cleared faster.": "按神话等级排序（最高优先），然后按通关时间（最快优先）。两玩家同为M+50时按谁通关更快排名。",
    "Target fight duration": "目标战斗时长",
"The Leaderboard tab includes a 'Mythic+ per Dungeon' view — one ranking per dungeon, where the competitive metric is your highest level cleared + the time you took.": "排行榜标签页包含「每个地下城大秘境+」视图——每个地下城一个排名，竞技指标是你通关的最高等级+所用时间。",
    "The Victory screen shows ✦ New record badges when you beat your previous best level or time on a dungeon.": "胜利界面在你击败某个地下城的之前最佳等级或时间时显示✦新纪录徽章。",
    "Tier I covers M+1 to M+5, Tier II covers M+6 to M+10, up to Tier XX (M+96 to M+100).": "第I阶覆盖M+1至M+5，第II阶覆盖M+6至M+10，直到第XX阶（M+96至M+100）。",
    "Treasure": "宝箱",
    "Unlocking Mythic+": "解锁大秘境+",
    "Use the Auto-Eat and Auto-Mana sliders at the top of the Dungeons panel. When your HP or Mana drops below the set percentage, your equipped food or mana potion will be consumed automatically. Make sure to equip food and potions before entering.": "使用地下城面板顶部的自动进食和自动法力滑块。当你的HP或法力低于设定百分比时，装备的食物或法力药水将自动消耗。进入前确保装备好食物和药水。",
    "You can only attempt one level above your best clear. Beat M+1 to unlock M+2, and so on.": "你只能尝试比最佳通关高一级。击败M+1解锁M+2，以此类推。",
    "can drop from M+20 only, with a tiny chance — 0.02% at M+20, +0.004% per level, capped at 0.1%.": "仅从M+20掉落，概率极低——M+20为0.02%，每级+0.004%，上限0.1%。",
    "drops from M+5 and above, quantity increases with level.": "M+5及以上掉落，数量随等级增加。",
    "drops from M+5 and above.": "M+5及以上掉落。",
    "earned proportionally to the mythic level, used in endgame crafting.": "按神话等级比例获取，用于终局制作。",
    "every run grants mastery progress on each active affix, unlocking permanent global passives (see the Imperatives tab).": "每次通关给予每个激活词缀精通进度，解锁永久全局被动（参见要务标签页）。",
    "granted from every Mythic+ clear, scaling with level.": "每次大秘境+通关获得，随等级缩放。",
    "scales with mythic level.": "随神话等级缩放。",
    "+1-3% base bonus. Noticeable but small.": "+1-3%基础加成。显著但微小。",
    "+10-20% bonus + a qualitative transformation tag (uncapped killstreak, overheal on combat start, account-wide damage growth, etc.).": "+10-20%加成+质变标签（无限连杀、战斗开始过量治疗、账号级伤害成长等）。",
    "+3-7% bonus. The Imperative starts being felt.": "+3-7%加成。要务开始有感觉了。",
    "+6-12% bonus + sometimes a secondary stat.": "+6-12%加成+有时附带副属性。",
    "0.05% per run, multiplied by sqrt(score/1000). M+30 runs gain ~3× more mastery per run than M+5.": "每次0.05%，乘以sqrt(分数/1000)。M+30每次获得约3倍于M+5的精通。",
    "1 at M+30, 2 at M+50, 3 at M+70, 4 at M+100.": "M+30时1个，M+50时2个，M+70时3个，M+100时4个。",
    "100% gain rate below 50%, then 60% rate up to 75%, then 30% rate up to 100%. The last 25% are the hardest.": "50%以下获取速率100%，然后60%速率直至75%，然后30%速率直至100%。最后25%最困难。",
    "Aetheric Veil (boss immune 5s every 30s), Phase Shift (boss regen at 50% HP), Dispel (clears your buffs at 75/50/25%), Devourer (boss +2% HP every 5s).": "以太帷幕（首领每30秒免疫5秒）、相位转换（首领50%HP时回复）、驱散（在75/50/25%时清除你的增益）、吞噬者（首领每5秒+2%HP）。",
    "All bonuses are PERCENTAGE multipliers so they stay relevant whatever your build size.": "所有加成均为百分比倍率，无论你的构筑规模都保持相关性。",
"Apex 'Echo of the Void'": "巅峰「虚空回响」",
    "Apex Imperatives": "巅峰要务",
    "Apex Imperatives are hard to unlock (M+30+ only) but their R4 capstones reverse the Apex penalty — long-term high-value targets.": "巅峰要务难以解锁（仅M+30+），但其R4顶石逆转巅峰惩罚——长期高价值目标。",
    "Apex affixes are brutal mechanics that unlock at M+30+. They counter the uncapped-damage problem with rotation-breaking effects instead of stat compression.": "巅峰词缀是在M+30+解锁的残酷机制。它们用打破轮换的效果而非属性压缩来对抗无限伤害问题。",
    "Apex slot unlocks": "巅峰槽位解锁",
    "Base gain": "基础获取",
"Click 'Apply Featured Combo' to autofill your loadout with the week's combo — guarantees the +25% score bonus.": "点击「应用精选组合」自动填充本周组合——保证+25%分数加成。",
    "Concept": "概念",
    "Diminishing returns": "收益递减",
"Don't pin affixes you've already R4'd — they give 0 further mastery and just take up slot budget.": "不要钉选已经R4完成的词缀——它们不再提供精通，只占槽位配额。",
    "Each Imperative rank unlocks a permanent bonus. Magnitudes are conservative early and grow significantly toward R4 :": "每个要务等级解锁永久加成。幅度早期保守，向R4显著增长：",
    "Each M+ level has a slot count (e.g. M+10 = 2 regular, M+30 = 3 regular + 1 Apex). You can pin more than the slots — only the top-priority ones apply.": "每个M+等级有槽位数（如M+10=2常规，M+30=3常规+1巅峰）。你可以钉选超过槽位数——只有优先级最高的生效。",
    "Each completed Mythic+ run grants mastery on every active affix. The gain rate uses a formula that rewards higher M+ levels but slows down as you approach 100% on a single affix.": "每次大秘境+通关授予每个激活词缀精通。获取速率使用奖励更高M+等级但在单个词缀接近100%时减速的公式。",
    "Each of the 33 affixes (25 regular + 8 Apex) has a paired Imperative. Clearing M+ runs with an affix active progresses your mastery on that affix from 0% to 100%, unlocking 4 ranks (R1/R2/R3/R4) along the way.": "33个词缀各有一个配对的要务（25常规+8巅峰）。在激活词缀下通关M+将该词缀精通从0%推进至100%，途中解锁4级（R1/R2/R3/R4）。",
    "Examples": "示例",
    "Featured Combo bonus": "精选组合加成",
    "Focus on 3-5 Imperatives at first rather than spreading thin. Mastery scales sub-linearly so concentrated effort wins.": "先专注3-5个要务而非分散。精通亚线性缩放，集中努力最有回报。",
    "How Mastery Progresses": "精通如何进展",
    "Loadout & Priority": "配置与优先级",
    "Mastering an Apex affix unlocks the paired Apex Imperative. R4 capstones often REVERSE the Apex penalty (Mana Blight R4 becomes +50% max mana, Crit Suppression R4 becomes +50% crit chance).": "精通巅峰词缀解锁配对的巅峰要务。R4顶石通常逆转巅峰惩罚（法力枯竭R4变为+50%最大法力，暴击压制R4变为+50%暴击率）。",
"Mastery only progresses on affixes ACTIVE in your run — if you never run Tyrannical, you'll never unlock its Imperative.": "精通只在你本轮中激活的词缀上进展——如果你从不使用暴虐，你永远不会解锁它的要务。",
    "Mastery thresholds": "精通阈值",
    "Mythic Imperatives are permanent global passives unlocked by mastering Mythic+ affixes. They apply in ALL game content (M+, normal dungeons, Abyss, Celestial, open combat) — they are the long-term progression axis exclusive to M+.": "神话要务是通过精通大秘境+词缀解锁的永久全局被动。它们适用于所有游戏内容（M+、普通地下城、深渊、天界、野外战斗）——它们是大秘境+专属的长期成长轴。",
    "Order = priority. Pinned cards show #1, #2, #3... badges. Lower numbers are picked first when the M+ level has fewer slots than your pinned count.": "顺序=优先级。钉选卡片显示#1、#2、#3...徽章。当M+等级槽位少于钉选数量时数字小的优先。",
    "Pin / unpin via the ✦ button on each Imperative card.": "通过每个要务卡片上的✦按钮钉选/取消钉选。",
    "Pin affixes you want to focus mastery on. The loadout is auto-applied at every M+ run — no more pre-run modal.": "钉选你想专注精通的词缀。配置在每次M+中自动应用——不再有开打前弹窗。",
    "R1 (Awakening)": "R1（觉醒）",
    "R1 at 25%, R2 at 50%, R3 at 75%, R4 (capstone) at 100%.": "R1在25%，R2在50%，R3在75%，R4（顶石）在100%。",
    "R2 (Reinforcement)": "R2（强化）",
    "R3 (Mastery)": "R3（精通）",
    "R4 (Capstone)": "R4（顶石）",
    "Ranks & Capstones": "等级与顶石",
    "Strategy Tips": "策略建议",
"Use the Featured Combo when it includes affixes you're actively mastering — the +25% mastery bonus is huge over time.": "当精选组合包含你正在精通的词缀时使用它——+25%精通加成长期累积巨大。",
"if your loadout matches the week's Featured combo exactly, all mastery gains are multiplied by +25%.": "如果你的配置完全匹配本周精选组合，所有精通获取乘以+25%。",
    "when this Apex is in your run, mastery gains are halved (until you unlock its R4 capstone which inverts it to +25%).": "当此巅峰词缀在你的本轮中，精通获取减半（直到你解锁其R4顶石，反转为+25%）。",
    "your main-hand weapon gets a random element when crafted, and each element grants energy-scaled passives plus a special Discharge effect.": "你制作的主手武器获得随机元素，每个元素提供能量缩放被动以及特殊爆发效果。",
    "Mythic+": "大秘境+",
    "Combat is an essential part of your progression in Aethyr.": "战斗是你在以太秘境中进展的核心部分。",
    "Enemies drop resources needed for certain crafts. Fight to collect the materials you need.": "敌人掉落某些制作所需的资源。战斗来收集你需要的材料。",
    "Experience gained depends on the level gap between you and the enemy. Fighting enemies close to your level grants full XP. Beyond a 5-level gap (10 for bosses), XP received decreases progressively. The XP shown on each monster card updates in real time based on your current level": "获取的经验取决于你与敌人的等级差。与接近你等级的敌人战斗给予全额经验。超过5级差距（首领为10级），获取经验逐渐减少。怪物卡片上显示的经验根据你当前等级实时更新",
    "Poison": "毒药",
"Poison is more than a damage-over-time effect. Each hit has a chance to apply a stack (max 5), and a poisoned enemy takes +2% damage per stack — up to +10% on ALL your attacks and spells. That is where poison's real power lies": "毒药不仅仅是持续伤害效果。每次击中都有概率施加1层（最多5层），中毒敌人每层受到+2%伤害——最高+10%所有攻击和法术伤害。这才是毒药真正的力量所在",
    "Some quests require you to defeat specific enemies or bosses. Check your active quests to know what to fight.": "某些任务要求你击败特定敌人或首领。查看进行中的任务以知晓该打什么。",
    "The Auto-Spells button, available above the combat area and in the Class Spells section of your character sheet, opens the automatic rotation configuration. There you can set the priority order of your damage spells, the HP thresholds that trigger your healing spells, and the thresholds for your buffs and shields. Once enabled, your character automatically casts spells according to this configuration during combat and offline progress, with no manual input required.": "自动法术按钮位于战斗区域上方和角色面板职业技能区域，打开后即可配置自动轮换。你可以设置伤害法术的优先级顺序、触发治疗法术的HP阈值以及增益和护盾的阈值。启用后，你的角色在战斗和离线进度中自动按此配置施放法术，无需手动操作。",
    "To advance to the next zone, you must defeat the boss of your current zone. Make sure you have good equipment before facing it.": "要进入下一个区域，你必须击败当前区域的首领。确保在面对它之前拥有好装备。",
    "an amplification axis": "增幅轴",
    "green if you receive full XP, red with the remaining percentage if a penalty applies. To progress efficiently, always fight enemies suited to your power level.": "绿色表示全额经验，红色显示剩余百分比如果有惩罚。要高效推进，始终与适合你实力等级的敌人战斗。",
"it amplifies the rest of your damage. 'Damage vs Poisoned' weapon affixes (up to +20% each) stack on top and are worth roughly twice a flat damage affix precisely because they are conditional. The poison tick itself scales from one of your auto-attacks (not the enemy's HP) and can crit. As a result, poison shines on slow, hard-hitting builds, and especially once you reach the Attack Speed cap, where it is the only way to keep scaling your damage.": "它放大你的其余伤害。「对中毒伤害」武器词缀（每个最高+20%）在上面叠加，正因为有条件限制，价值约为两倍于固定伤害词缀。毒药跳伤本身根据你的一次自动攻击（而非敌人HP）缩放，可以暴击。因此毒药在慢速重击构筑中闪耀，特别是在你达到攻速上限后，它是继续缩放伤害的唯一途径。",
"it is therefore 'free' chip damage that adds on without costing a slot. Like poison, it scales from one of your auto-attacks and can crit. No need to build a whole setup around it — let it round out your direct damage.": "因此它是「免费」的额外碎伤，不占槽位。与毒药一样，它根据你的一次自动攻击缩放，可以暴击。无需围绕它搭建整套构筑——让它补足你的直接伤害。",
    "Bleed": "流血",
    "Bleed is a pure damage-over-time effect with no associated amplification. It comes from your talents and certain innate gear effects, never from a rollable affix": "流血是纯持续伤害效果，无关联增幅。它来自你的天赋和某些天生装备效果，永远不会来自可骰词缀",
    "Combat Resources": "战斗资源",
    "Adaptive XP": "自适应经验",
    "Name your Hero": "为你的英雄命名",
    "This name is permanent and globally unique.": "此名称永久且全局唯一。",
    "Checking...": "检查中...",
    "A World Shattered": "破碎的世界",
    "Continue →": "继续 →",
    "No active task": "无进行中的任务",
    "Skip Intro": "跳过序幕",
    "The Verdant Reach": "翠绿之境",
    "BEGIN YOUR JOURNEY": "踏上你的旅程",
    "Your Legend Begin": "你的传奇开启",
    "Lvl 11 BO": "Lvl 11 BO",
    "Skip tutorial": "跳过教程",
    "Step 1 of 9": "第1步，共9步",
    "Your First Quest": "你的首个任务",
    "ZONE BO": "ZONE BO",
    "9.0k": "9.0k",
    "6 new recipes discovered!": "发现了6个新配方！",
    "Faster gathering, better quality": "更快采集，更高品质",
    "Gatherer!": "采集者！",
    "Volcanic Pea": "火山山峰",
    "Defeat Warlord Gortha": "击败军阀戈萨",
    "Aethyr Flow": "以太秘境之流",
    "Aethyr builds up without you. Remember to collect it.": "以太秘境会在你离开时积累。记得收集。",
    "Each region holds its own vein to unlock.": "每个区域都有待解锁的矿脉。",
    "Fight a zone's creatures to awaken its leyline, then return to collect what it has woven.": "与区域生物战斗以唤醒其地脉，然后返回收集其所编织之物。",
    "One per zone": "每区域一个",
    "Passive production": "被动生产",
    "The Leyline": "地脉",
    "Veins of power that produce Aethyr continuously, even while offline.": "持续生产以太秘境的能量之脉，即使离线也不停歇。",
    "A collection of rare companions to awaken and empower.": "等待唤醒与强化的稀有伙伴图鉴。",
    "An endless climb of floors bathed in shifting hazards.": "沐浴在变幻灾厄中的无尽攀登。",
    "Celestial Ascent": "天界攀登",
    "Climb as high as your power allows. Along the way you will awaken familiars — companions that grow and follow you.": "攀登至你的力量所及之处。沿途你将唤醒使魔——成长并追随你的伙伴。",
    "Each tier renews its trials. No two climbs are alike.": "每层都会刷新试炼。没有两次攀登是相同的。",
    "Rotating hazard": "轮换灾厄",
    "Abyssal Plank": "深渊木板",
    "Dark Oak Plank": "暗橡木板",
    "Eternal Plank": "永恒木板",
    "Maple Plank": "枫木板",
    "Pine Plank": "松木板",
    "Plagued Plank": "瘟疫木板",
    "Reality Plank": "现实木板",
    "Rift Plank": "裂隙木板",
    "Sawing": "锯木",
    "Scorched Plank": "焦灼木板",
    "Spectral Plank": "灵质木板",
    "Stormwood Plank": "风暴木板",
    "Teak Plank": "柚木板",
    "Void Plank": "虚空木板",
    "Volcanic Plank": "火山木板",
    "Abyssal Leather": "深渊皮革",
    "Dragon Leather": "龙皮革",
    "Eternal Leather": "永恒皮革",
    "Light Leather": "轻皮革",
    "Nexus Leather": "核心皮革",
    "Plagued Leather": "瘟疫皮革",
    "Raptor Leather": "迅猛龙皮革",
    "Scorched Leather": "焦灼皮革",
    "Shadow Leather": "暗影皮革",
    "Spectral Leather": "灵质皮革",
    "Storm Leather": "风暴皮革",
    "Tanning": "制皮",
    "Tough Leather": "坚韧皮革",
    "Void Leather": "虚空皮革",
    "Abyssal Amulet": "深渊护符",
    "Abyssal Channeler's Band": "深渊导能者戒指",
    "Abyssal Channeler's Pendant": "深渊导能者挂坠",
    "Abyssal Cutthroat Charm": "深渊夺命符咒",
    "Abyssal Cutthroat Signet": "深渊夺命刻印",
    "Abyssal Hunter's Loop": "深渊猎人指环",
    "Abyssal Hunter's Talisman": "深渊猎人护符",
    "Abyssal Ring": "深渊戒指",
    "Adamantite Amulet": "精金护符",
    "Adamantite Channeler's Band": "精金导能者戒指",
    "Adamantite Channeler's Pendant": "精金导能者挂坠",
    "Adamantite Cutthroat Charm": "精金夺命符咒",
    "Adamantite Cutthroat Signet": "精金夺命刻印",
    "Adamantite Hunter's Loop": "精金猎人指环",
    "Adamantite Hunter's Talisman": "精金猎人护符",
    "Adamantite Ring": "精金戒指",
    "Aetherial Channeler's Band": "以太导能者戒指",
    "Aetherial Channeler's Pendant": "以太导能者挂坠",
    "Aetherial Cutthroat Charm": "以太夺命符咒",
    "Aetherial Cutthroat Signet": "以太夺命刻印",
    "Aetherial Hunter's Loop": "以太猎人指环",
    "Aetherial Hunter's Talisman": "以太猎人护符",
    "Aetherial Necklace": "以太项链",
    "Aetherial Seal": "以太刻印",
    "Ashblade": "灰刃",
    "Band of Living Flame": "活焰之戒",
    "Blight Relic": "枯萎遗物",
    "Blighted Loop": "枯萎指环",
    "Blightheart Pendant": "枯萎之心挂坠",
    "Bronze Amulet": "青铜护符",
    "Bronze Channeler's Band": "青铜导能者戒指",
    "Bronze Channeler's Pendant": "青铜导能者挂坠",
    "Bronze Cutthroat Charm": "青铜夺命符咒",
    "Bronze Cutthroat Signet": "青铜夺命刻印",
    "Bronze Hunter's Loop": "青铜猎人指环",
    "Bronze Hunter's Talisman": "青铜猎人护符",
    "Bronze Signet": "青铜刻印",
    "Captain's Amulet": "船长护符",
    "Captain's Seal": "船长刻印",
    "Cinderfall Sigil": "烬落之印",
    "Copper Cutthroat Charm": "铜制夺命符咒",
    "Copper Cutthroat Signet": "铜制夺命刻印",
    "Copper Hunter's Talisman": "铜制猎人护符",
    "Depths Medallion": "深渊徽章",
    "Depths Token": "深渊信物",
    "Dragonforged Amulet": "龙铸护符",
    "Dragonforged Band": "龙铸戒指",
    "Dragonforged Channeler's Band": "龙铸导能者戒指",
    "Dragonforged Channeler's Pendant": "龙铸导能者挂坠",
    "Dragonforged Cutthroat Charm": "龙铸夺命符咒",
    "Dragonforged Cutthroat Signet": "龙铸夺命刻印",
    "Dragonforged Hunter's Loop": "龙铸猎人指环",
    "Dragonforged Hunter's Talisman": "龙铸猎人护符",
    "Elemental Core Ring": "元素核心之戒",
    "Emberheart Amulet": "余烬之心护符",
    "Eternal Amulet": "永恒护符",
    "Eternal Channeler's Band": "永恒导能者戒指",
    "Eternal Channeler's Pendant": "永恒导能者挂坠",
    "Eternal Cutthroat Charm": "永恒夺命符咒",
    "Eternal Cutthroat Signet": "永恒夺命刻印",
    "Eternal Hunter's Loop": "永恒猎人指环",
    "Eternal Hunter's Talisman": "永恒猎人护符",
    "Eternal Ring": "永恒戒指",
    "Gloomveil Pendant": "幽帷挂坠",
    "Iron Channeler's Band": "铁导能者戒指",
    "Iron Channeler's Pendant": "铁导能者挂坠",
    "Iron Cutthroat Charm": "铁夺命符咒",
    "Iron Cutthroat Signet": "铁夺命刻印",
    "Iron Hunter's Loop": "铁猎人指环",
    "Iron Hunter's Talisman": "铁猎人护符",
    "Iron Ring": "铁戒指",
    "Iron Talisman": "铁护符",
    "Ironpeak Talisman": "铁峰护符",
    "Mithril Band": "秘银戒指",
    "Mithril Channeler's Band": "秘银导能者戒指",
    "Mithril Channeler's Pendant": "秘银导能者挂坠",
    "Mithril Cutthroat Charm": "秘银夺命符咒",
    "Mithril Cutthroat Signet": "秘银夺命刻印",
    "Mithril Hunter's Loop": "秘银猎人指环",
    "Mithril Hunter's Talisman": "秘银猎人护符",
    "Mithril Pendant": "秘银挂坠",
    "Nexus Voidband": "核心虚空之戒",
    "Nexus Voidchain": "核心虚空之链",
    "Ring": "戒指",
    "Runic Amulet": "符文护符",
    "Shadow Signet": "暗影刻印",
    "Skystone Amulet": "天石护符",
    "Skystone Channeler's Band": "天石导能者戒指",
    "Skystone Channeler's Pendant": "天石导能者挂坠",
    "Skystone Cutthroat Charm": "天石夺命符咒",
    "Skystone Cutthroat Signet": "天石夺命刻印",
    "Skystone Hunter's Loop": "天石猎人指环",
    "Skystone Hunter's Talisman": "天石猎人护符",
    "Skystone Ring": "天石戒指",
    "Spectral Amulet": "灵质护符",
    "Spectral Channeler's Band": "灵质导能者戒指",
    "Spectral Channeler's Pendant": "灵质导能者挂坠",
    "Spectral Cutthroat Charm": "灵质夺命符咒",
    "Spectral Cutthroat Signet": "灵质夺命刻印",
    "Spectral Hunter's Loop": "灵质猎人指环",
    "Spectral Hunter's Talisman": "灵质猎人护符",
    "Spectral Ring": "灵质戒指",
    "Sundered Ward": "破碎守卫",
    "Tanglewood Idol": "盘木圣像",
    "Thorium Amulet": "钍护符",
    "Thorium Channeler's Band": "钍导能者戒指",
    "Thorium Channeler's Pendant": "钍导能者挂坠",
    "Thorium Cutthroat Charm": "钍夺命符咒",
    "Thorium Cutthroat Signet": "钍夺命刻印",
    "Thorium Hunter's Loop": "钍猎人指环",
    "Thorium Hunter's Talisman": "钍猎人护符",
    "Thorium Ring": "钍戒指",
    "Trophy Necklace": "战利品项链",
    "Verdant Charm": "翠绿符咒",
    "Verdant Heart Amulet": "翠绿之心护符",
    "Void Amulet": "虚空护符",
    "Void Channeler's Band": "虚空导能者戒指",
    "Void Channeler's Pendant": "虚空导能者挂坠",
    "Void Cutthroat Charm": "虚空夺命符咒",
    "Void Cutthroat Signet": "虚空夺命刻印",
    "Void Hunter's Loop": "虚空猎人指环",
    "Void Hunter's Talisman": "虚空猎人护符",
    "Void Ring": "虚空戒指",
    "Abyssal Essence": "深渊精华",
    "Aetherial Potion": "以太药水",
    "Aethyr Mana Potion": "以太秘境法力药水",
    "Aethyr Oil": "以太秘境油",
    "Aethyr Potion": "以太秘境药水",
    "Common Gem": "普通宝石",
    "Essence of the Isles": "群岛精华",
    "Essence of the Nexus": "核心精华",
    "Essence of the Ridge": "山脊精华",
    "Flawless Gem": "无瑕宝石",
    "Greater Aethyr Mana Potion": "强效以太秘境法力药水",
    "Greater Aethyr Potion": "强效以太秘境药水",
    "Greater Essence": "强效精华",
    "Lesser Essence": "次级精华",
    "Minor Aethyr Mana Potion": "初级以太秘境法力药水",
    "Minor Aethyr Potion": "初级以太秘境药水",
    "Moderate Essence": "中效精华",
    "Nexus Shard": "核心碎片",
    "Perfect Gem": "完美宝石",
    "Potion": "药水",
    "Quality Gem": "品质宝石",
    "Shadow Gem": "暗影宝石",
    "Supreme Essence": "至高精华",
    "Cooked Abyssal Eel": "熟深渊鳗鱼",
    "Cooked Barracuda": "熟梭鱼",
    "Cooked Catfish": "熟鲶鱼",
    "Cooked Eel": "熟鳗鱼",
    "Cooked Fire Fish": "熟火焰鱼",
    "Cooked Magma Fish": "熟岩浆鱼",
    "Cooked Nebula Salmon": "熟星云鲑鱼",
    "Cooked Pike": "熟梭子鱼",
    "Cooked Plagued Fish": "熟瘟疫鱼",
    "Cooked Salmon": "熟鲑鱼",
    "Cooked Shrimp": "熟虾",
    "Cooked Trout": "熟鳟鱼",
    "Cooked Tuna": "熟金枪鱼",
    "Cooked Void Trout": "熟虚空鳟鱼",
    "Cooked Voidfish": "熟虚空鱼",
    "Mythic Key I": "神话钥匙 I",
    "Mythic Key II": "神话钥匙 II",
    "Mythic Key III": "神话钥匙 III",
    "Mythic Key IV": "神话钥匙 IV",
    "Mythic Key V": "神话钥匙 V",
    "Mythic Key VI": "神话钥匙 VI",
    "Mythic Key VII": "神话钥匙 VII",
    "Mythic Key VIII": "神话钥匙 VIII",
    "Mythic Key IX": "神话钥匙 IX",
    "Mythic Key X": "神话钥匙 X",
    "Mythic Key XI": "神话钥匙 XI",
    "Mythic Key XII": "神话钥匙 XII",
    "Mythic Key XIII": "神话钥匙 XIII",
    "Mythic Key XIV": "神话钥匙 XIV",
    "Mythic Key XV": "神话钥匙 XV",
    "Mythic Key XVI": "神话钥匙 XVI",
    "Mythic Key XVII": "神话钥匙 XVII",
    "Mythic Key XVIII": "神话钥匙 XVIII",
    "Mythic Key XIX": "神话钥匙 XIX",
    "Mythic Key XX": "神话钥匙 XX",
    "No living objects in inventory.": "背包中没有活物。",
    "Possible outcomes": "可能的结果",
    "Sacrifice 3 living objects to receive one attuned to your class. Items mismatched or duplicating an equipped slot are marked eligible.": "献祭3个活物以获取一件适配你职业的物品。不匹配或与已装备槽位重复的物品会被标记为合格。",
    "Select 3 items to sacrifice": "选择3件物品进行献祭",
    "Soul Transmutation": "灵魂转化",
    "for vagabond": "流浪者适用",
    "A well of power that follows your entire endgame.": "一座贯穿你整个终局的力量之井。",
    "Beyond the Forge": "超越熔炉",
    "Change your main-hand weapon's element by spending 8 shards of the target element.": "消耗目标元素的8个碎片，更改你主手武器的元素。",
    "Customization": "定制",
    "Elemental Transmutation": "元素转化",
    "Ongoing progression": "持续成长",
    "Push your gear beyond its raw form": "将你的装备推向超越原始形态",
    "Select a weapon": "选择武器",
    "Socket, infuse, rework. This is where two identical pieces become two different builds.": "镶嵌、灌注、重塑。在这里，两件相同的装备变成两种不同的构筑。",
    "Tailor each piece to your style rather than a standard.": "按你的风格定制每件装备，而非随波逐流。",
    "[Equipped]": "[已装备]",
    "runes, infusions and refined properties.": "符文、灌注与精炼属性。",
    "No affixable items in your inventory. Craft a Skystone-tier item or higher to get started.": "你的背包中没有可附加词缀的物品。制作一件天石品阶或更高物品以开始。",
    "Reforging Shard": "重铸碎片",
    "Sealing Crystal": "封印水晶",
    "Select an item": "选择物品",
    "Select an item to manage its affixes.": "选择物品以管理其词缀。",
    "Unbinding Stone": "解绑石",
    "Augmentation Locked": "增幅已锁定",
    "Current level:": "当前等级：",
    "Reach Combat Level 100 to unlock equipment augmentation.": "达到战斗等级100以解锁装备增幅。",
    "Infusion Locked": "灌注已锁定",
    "Reach Combat Level 100 to unlock equipment infusion.": "达到战斗等级100以解锁装备灌注。",
    "Combine exactly 3 identical runes and 1 Focus Crystal to create a higher tier rune.": "组合恰好3个相同符文和1个聚焦水晶以创造更高品阶符文。",
    "You don't have any runes in your inventory to fuse.": "你的背包中没有任何可融合的符文。",
    "Select an item to reforge.": "选择物品以重铸。",
    "Essence (Extract/Unlock)": "精髓（提取/解锁）",
    "Only items from Equipment or Inventory can be enchanted.": "只有装备栏或背包中的物品可以被附魔。",
    "Select Equipment": "选择装备",
    "Select an item to manage its runes": "选择物品以管理其符文",
    "Aethyr Catalyst": "以太秘境催化剂",
    "Aethyr Ink": "以太秘境墨水",
    "Blank Rune": "空白符文",
    "Consumable": "消耗品",
    "Focus Crystal": "聚焦水晶",
    "Greater Guard Rune": "强效守护符文",
    "Greater Might Rune": "强效力量符文",
    "Greater Power Rune": "强效威力符文",
    "Greater Precision Rune": "强效精准符文",
    "Greater Vigor Rune": "强效活力符文",
    "Greater Wisdom Rune": "强效智慧符文",
    "Lesser Guard Rune": "次级守护符文",
    "Lesser Might Rune": "次级力量符文",
    "Lesser Power Rune": "次级威力符文",
    "Lesser Precision Rune": "次级精准符文",
    "Lesser Vigor Rune": "次级活力符文",
    "Lesser Wisdom Rune": "次级智慧符文",
    "Minor Guard Rune": "初级守护符文",
    "Minor Might Rune": "初级力量符文",
    "Minor Power Rune": "初级威力符文",
    "Minor Precision Rune": "初级精准符文",
    "Minor Vigor Rune": "初级活力符文",
    "Minor Wisdom Rune": "初级智慧符文",
    "Pure Aethyr Essence": "纯净以太秘境精华",
    "Supreme Guard Rune": "至高守护符文",
    "Supreme Might Rune": "至高力量符文",
    "Supreme Power Rune": "至高威力符文",
    "Supreme Precision Rune": "至高精准符文",
    "Supreme Vigor Rune": "至高活力符文",
    "Supreme Wisdom Rune": "至高智慧符文",
    "A first blade, and it shows.": "初刃出鞘，锋芒毕露。",
    "Bits and pieces, useful to a tanner.": "零碎皮料，对制皮匠有用。",
    "A small seal for small jobs.": "小印章，办小事。",
    "Copper and tin, better together.": "铜与锡，相得益彰。",
    "Dull enough to pass unnoticed.": "钝得不起眼。",
    "Beginner's Thrill! +20% stats for 30s!": "新手之悦！全属性+20%，持续30秒！",
    "Small, and best not eaten raw.": "个头小，最好别生吃。",
    "Actions": "行动",
    "Détails": "详情",
    "Add to Queue (All)": "加入队列（全部）",
    "Queue": "队列",
    "Abyssal Cloth Hood": "深渊布兜帽",
    "Abyssal Cloth Leggings": "深渊布绑腿",
    "Abyssal Leather Hood": "深渊皮兜帽",
    "Abyssal Pants": "深渊裤子",
    "Abyssal Robe": "深渊长袍",
    "Abyssal Shadow Hood": "深渊暗影兜帽",
    "Abyssal Shadow Pants": "深渊暗影裤子",
    "Abyssal Shadow Vest": "深渊暗影马甲",
    "Abyssal Tunic": "深渊束腰外衣",
    "Aetherial Hood": "以太兜帽",
    "Aetherial Leggings": "以太绑腿",
    "Aetherial Pants": "以太裤子",
    "Aetherial Ranger Hood": "以太游侠兜帽",
    "Aetherial Robe": "以太长袍",
    "Aetherial Shadow Hood": "以太暗影兜帽",
    "Aetherial Shadow Pants": "以太暗影裤子",
    "Aetherial Shadow Vest": "以太暗影马甲",
    "Aetherial Tunic": "以太束腰外衣",
    "Assassin Hood": "刺客兜帽",
    "Assassin Pants": "刺客裤子",
    "Assassin Vest": "刺客马甲",
    "Blightweave Hood": "枯织兜帽",
    "Blightweave Leggings": "枯织绑腿",
    "Blightweave Robe": "枯织长袍",
    "Bonehide Hood": "骨皮兜帽",
    "Bonehide Pants": "骨皮裤子",
    "Bonehide Tunic": "骨皮束腰外衣",
    "Corsair Hood": "海盗兜帽",
    "Corsair Pants": "海盗裤子",
    "Corsair Vest": "海盗马甲",
    "Crimson Veil Mask": "绯红面纱面具",
    "Dragonforged Cloth Hood": "龙铸布兜帽",
    "Dragonforged Cloth Leggings": "龙铸布绑腿",
    "Dragonforged Leather Hood": "龙铸皮兜帽",
    "Dragonforged Pants": "龙铸裤子",
    "Dragonforged Robe": "龙铸长袍",
    "Dragonforged Shadow Hood": "龙铸暗影兜帽",
    "Dragonforged Shadow Pants": "龙铸暗影裤子",
    "Dragonforged Shadow Vest": "龙铸暗影马甲",
    "Dragonforged Tunic": "龙铸束腰外衣",
    "Emberweave Hood": "烬织兜帽",
    "Emberweave Leggings": "烬织绑腿",
    "Emberweave Robe": "烬织长袍",
    "Enchanted Hood": "附魔兜帽",
    "Enchanted Leggings": "附魔绑腿",
    "Enchanted Robe": "附魔长袍",
    "Eternal Cloth Leggings": "永恒布绑腿",
    "Eternal Cowl": "永恒罩帽",
    "Eternal Hood": "永恒兜帽",
    "Eternal Leather Pants": "永恒皮裤",
    "Eternal Robe": "永恒长袍",
    "Eternal Shadow Hood": "永恒暗影兜帽",
    "Eternal Shadow Pants": "永恒暗影裤子",
    "Eternal Shadow Vest": "永恒暗影马甲",
    "Eternal Tunic": "永恒束腰外衣",
    "Graveshroud Hood": "墓裹兜帽",
    "Graveshroud Pants": "墓裹裤子",
    "Graveshroud Vest": "墓裹马甲",
    "Ironpeak Banner": "铁峰旗帜",
    "Leather Armor": "皮甲",
    "Leather Cowl": "皮罩帽",
    "Nexus Cloth Hood": "核心布兜帽",
    "Nexus Cloth Leggings": "核心布绑腿",
    "Nexus Leather Hood": "核心皮兜帽",
    "Nexus Pants": "核心裤子",
    "Nexus Robe": "核心长袍",
    "Nexus Shadow Hood": "核心暗影兜帽",
    "Nexus Shadow Pants": "核心暗影裤子",
    "Nexus Shadow Vest": "核心暗影马甲",
    "Nexus Tunic": "核心束腰外衣",
    "Nightfang Hood": "夜牙兜帽",
    "Nightfang Pants": "夜牙裤子",
    "Nightfang Vest": "夜牙马甲",
    "Patchwork Horror": "缝皮惊骇",
    "Plainstrider Tunic": "平原行者束腰外衣",
    "Prowler Hood": "潜行者兜帽",
    "Prowler Pants": "潜行者裤子",
    "Prowler Vest": "潜行者马甲",
    "Raptor Hood": "迅猛龙兜帽",
    "Raptor Pants": "迅猛龙裤子",
    "Raptor Scale Armor": "迅猛龙鳞甲",
    "Raptor Tunic": "迅猛龙束腰外衣",
    "Scorched Hood": "焦痕兜帽",
    "Scorched Pants": "焦痕裤子",
    "Scorched Tunic": "焦痕束腰外衣",
    "Shadow Robe": "暗影长袍",
    "Shadowhide Hood": "影皮兜帽",
    "Shadowhide Pants": "影皮裤子",
    "Shadowhide Tunic": "影皮束腰外衣",
    "Silk Hood": "丝绸兜帽",
    "Silk Leggings": "丝绸绑腿",
    "Silk Robe": "丝绸长袍",
    "Skystone Cloth Hood": "天石布兜帽",
    "Skystone Cloth Leggings": "天石布绑腿",
    "Skystone Leather Hood": "天石皮兜帽",
    "Skystone Pants": "天石裤子",
    "Skystone Robe": "天石长袍",
    "Skystone Shadow Hood": "天石暗影兜帽",
    "Skystone Shadow Pants": "天石暗影裤子",
    "Skystone Shadow Vest": "天石暗影马甲",
    "Skystone Tunic": "天石束腰外衣",
    "Spectral Cloth Leggings": "灵质布绑腿",
    "Spectral Cowl": "灵质罩帽",
    "Spectral Hood": "灵质兜帽",
    "Spectral Leather Pants": "灵质皮裤",
    "Spectral Leggings": "灵质绑腿",
    "Spectral Robe": "灵质长袍",
    "Spectral Shadow Hood": "灵质暗影兜帽",
    "Spectral Shadow Pants": "灵质暗影裤子",
    "Spectral Shadow Vest": "灵质暗影马甲",
    "Spectral Tunic": "灵质束腰外衣",
    "Stalker Hood": "追猎者兜帽",
    "Stalker Pants": "追猎者裤子",
    "Stalker Tunic": "追猎者束腰外衣",
    "Toxicweave Hood": "毒织兜帽",
    "Toxicweave Pants": "毒织裤子",
    "Toxicweave Tunic": "毒织束腰外衣",
    "Venom Hood": "毒液兜帽",
    "Venom Pants": "毒液裤子",
    "Venom Vest": "毒液马甲",
    "Void Cloth Leggings": "虚空布绑腿",
    "Void Cowl": "虚空罩帽",
    "Void Hood": "虚空兜帽",
    "Void Leather Pants": "虚空皮裤",
    "Void Robe": "虚空长袍",
    "Void Shadow Hood": "虚空暗影兜帽",
    "Void Shadow Pants": "虚空暗影裤子",
    "Void Shadow Vest": "虚空暗影马甲",
    "Void Tunic": "虚空束腰外衣",
    "Wolf Cowl": "狼皮罩帽",
    "Wool Hood": "羊毛兜帽",
    "Wool Leggings": "羊毛绑腿",
    "Wool Robe": "羊毛长袍",
    "Abyssal Grimoire": "深渊魔典",
    "Abyssal Longbow": "深渊长弓",
    "Abyssal Quiver": "深渊箭袋",
    "Abyssal Staff": "深渊法杖",
    "Adamantite Staff": "精金法杖",
    "Adept Tome": "熟练典籍",
    "Aetherial Grimoire": "以太魔典",
    "Aetherial Longbow": "以太长弓",
    "Aetherial Quiver": "以太箭袋",
    "Aetherial Staff": "以太法杖",
    "Apprentice Tome": "学徒典籍",
    "Apprentice Wand": "学徒魔杖",
    "Apprentice Wand!": "学徒魔杖！",
    "Archmage Grimoire": "大法师魔典",
    "Blackwood": "黑木",
    "Bronze Quiver": "青铜箭袋",
    "Dark Iron Longbow": "暗铁长弓",
    "Dark Iron Staff": "暗铁法杖",
    "Dragonforged Bow": "龙铸弓",
    "Dragonforged Quiver": "龙铸箭袋",
    "Dragonforged Staff": "龙铸法杖",
    "Dragonforged Tome": "龙铸典籍",
    "Elite Quiver": "精英箭袋",
    "Eternal Grimoire": "永恒魔典",
    "Eternal Longbow": "永恒长弓",
    "Eternal Quiver": "永恒箭袋",
    "Eternal Staff": "永恒法杖",
    "Expert Tome": "专家典籍",
    "Gold Longbow": "金长弓",
    "Gold Quiver": "金箭袋",
    "Gold Staff": "金法杖",
    "Gold Tome": "金典籍",
    "Heavy Quiver": "重型箭袋",
    "Iron Longbow": "铁长弓",
    "Iron Quiver": "铁箭袋",
    "Iron-Bound Staff": "铁箍法杖",
    "Jungle Bow": "丛林弓",
    "Legendary Quiver": "传奇箭袋",
    "Master Tome": "大师典籍",
    "Mithril Longbow": "秘银长弓",
    "Mithril Staff": "秘银法杖",
    "Mithril Tome": "秘银典籍",
    "Nexus Grimoire": "核心魔典",
    "Nexus Quiver": "核心箭袋",
    "Nexus Voidchannel": "核心虚空之引",
    "Nexus Voidstriker": "核心虚空击者",
    "Reinforced Quiver": "强化箭袋",
    "Skystone Bow": "天石弓",
    "Skystone Quiver": "天石箭袋",
    "Skystone Staff": "天石法杖",
    "Skystone Tome": "天石典籍",
    "Spectral Grimoire": "灵质魔典",
    "Spectral Longbow": "灵质长弓",
    "Spectral Quiver": "灵质箭袋",
    "Spectral Staff": "灵质法杖",
    "Thorium Staff": "钍法杖",
    "Tomb Weaver Bow": "织墓者之弓",
    "Void Grimoire": "虚空魔典",
    "Void Longbow": "虚空长弓",
    "Void Quiver": "虚空箭袋",
    "Void Staff": "虚空法杖",
    "attack Style": "攻击风格",
    "vs. equipped Bronze Dagger": "对比已装备的青铜匕首",
    "Minor Essence": "初级精华",
    "Abyssal Chestplate": "深渊胸甲",
    "Abyssal Dagger": "深渊匕首",
    "Abyssal Greatsword": "深渊巨剑",
    "Abyssal Greaves": "深渊护胫",
    "Abyssal Helm": "深渊头盔",
    "Abyssal Offhand Dagger": "深渊副手匕首",
    "Abyssal Shield": "深渊盾牌",
    "Adamantite Bulwark": "精金壁垒",
    "Adamantite Dagger": "精金匕首",
    "Adamantite Greathelm": "精金巨盔",
    "Adamantite Greatsword": "精金巨剑",
    "Adamantite Greaves": "精金护胫",
    "Adamantite Offhand Dagger": "精金副手匕首",
    "Adamantite Platebody": "精金板甲",
    "Aetherial Dagger": "以太匕首",
    "Aetherial Fullplate": "以太全身板甲",
    "Aetherial Greatsword": "以太巨剑",
    "Aetherial Greaves": "以太护胫",
    "Aetherial Helm": "以太头盔",
    "Aetherial Offhand Dagger": "以太副手匕首",
    "Aetherial Ward": "以太守卫",
    "Aethyr Crown": "以太秘境王冠",
    "Aethyr Ward": "以太秘境守卫",
    "Bronze Breastplate": "青铜胸甲",
    "Bronze Leggings": "青铜绑腿",
    "Bronze Offhand Dagger": "青铜副手匕首",
    "Bronze Shield": "青铜盾牌",
    "Dark Iron Breastplate": "暗铁胸甲",
    "Dark Iron Dagger": "暗铁匕首",
    "Dark Iron Helm": "暗铁头盔",
    "Dark Iron Legguards": "暗铁腿甲",
    "Dark Iron Offhand Dagger": "暗铁副手匕首",
    "Dark Iron Shield": "暗铁盾牌",
    "Dark Iron Sword": "暗铁剑",
    "Dragonforged Blade": "龙铸利刃",
    "Dragonforged Dagger": "龙铸匕首",
    "Dragonforged Helm": "龙铸头盔",
    "Dragonforged Legguards": "龙铸腿甲",
    "Dragonforged Offhand Dagger": "龙铸副手匕首",
    "Dragonforged Platebody": "龙铸板甲",
    "Dragonforged Shield": "龙铸盾牌",
    "Eternal Bulwark": "永恒壁垒",
    "Eternal Chestplate": "永恒胸甲",
    "Eternal Dagger": "永恒匕首",
    "Eternal Greatsword": "永恒巨剑",
    "Eternal Greaves": "永恒护胫",
    "Eternal Helm": "永恒头盔",
    "Eternal Offhand Dagger": "永恒副手匕首",
    "Gold Dagger": "金匕首",
    "Gold Helm": "金头盔",
    "Gold Offhand Dagger": "金副手匕首",
    "Gold Platebody": "金板甲",
    "Gold Platelegs": "金板甲护腿",
    "Gold Shield": "金盾牌",
    "Gold Sword": "金剑",
    "Iron Breastplate": "铁胸甲",
    "Iron Dagger": "铁匕首",
    "Iron Helm": "铁头盔",
    "Iron Leggings": "铁绑腿",
    "Iron Offhand Dagger": "铁副手匕首",
    "Iron Shield": "铁盾牌",
    "Iron Sword": "铁剑",
    "Ironpeak Bulwark": "铁峰壁垒",
    "Ironpeak Chainmail": "铁峰锁子甲",
    "Magma Heart Shield": "熔心盾牌",
    "Mithril Dagger": "秘银匕首",
    "Mithril Helm": "秘银头盔",
    "Mithril Offhand Dagger": "秘银副手匕首",
    "Mithril Platebody": "秘银板甲",
    "Mithril Platelegs": "秘银板甲护腿",
    "Mithril Shield": "秘银盾牌",
    "Mithril Sword": "秘银剑",
    "Nexus Crown": "核心王冠",
    "Nexus Dagger": "核心匕首",
    "Nexus Void Dagger": "核心虚空匕首",
    "Nexus Voidgreaves": "核心虚空护胫",
    "Nexus Voidplate": "核心虚空板甲",
    "Nexus Voidreaver": "核心虚空掠夺者",
    "Nexus Voidwall": "核心虚空之墙",
    "Nightfang Dagger": "夜牙匕首",
    "Plague Ward": "瘟疫守卫",
    "Shadow Blade": "暗影利刃",
    "Skystone Blade": "天石利刃",
    "Skystone Dagger": "天石匕首",
    "Skystone Helm": "天石头盔",
    "Skystone Legguards": "天石腿甲",
    "Skystone Offhand Dagger": "天石副手匕首",
    "Skystone Platebody": "天石板甲",
    "Skystone Shield": "天石盾牌",
    "Spectral Blade": "灵质利刃",
    "Spectral Bulwark": "灵质壁垒",
    "Spectral Chestplate": "灵质胸甲",
    "Spectral Dagger": "灵质匕首",
    "Spectral Greatsword": "灵质巨剑",
    "Spectral Greaves": "灵质护胫",
    "Spectral Helm": "灵质头盔",
    "Spectral Offhand Dagger": "灵质副手匕首",
    "Thorium Blade": "钍利刃",
    "Thorium Breastplate": "钍胸甲",
    "Thorium Dagger": "钍匕首",
    "Thorium Helm": "钍头盔",
    "Thorium Legguards": "钍腿甲",
    "Thorium Offhand Dagger": "钍副手匕首",
    "Thorium Shield": "钍盾牌",
    "Void Bulwark": "虚空壁垒",
    "Void Chestplate": "虚空胸甲",
    "Void Dagger": "虚空匕首",
    "Void Greatsword": "虚空巨剑",
    "Void Greaves": "虚空护胫",
    "Void Helm": "虚空头盔",
    "Void Offhand Dagger": "虚空副手匕首",
    "Highland Prowler": "高地潜行者",
    "+350 ms": "+350 毫秒",
    "Armor Penetration": "护甲穿透",
    "Attack Speed & Multi-hit": "攻击速度与多重打击",
    "Bleed & Execute": "流血与处决",
    "Bleed Chance": "流血几率",
    "Bleed Power": "流血威力",
    "Block & Thorns": "格挡与荆棘",
    "Block Chance": "格挡几率",
    "Block Power": "格挡威力",
    "Bone Fragment": "碎骨",
    "Breaker": "破击者",
    "Bulwark": "壁垒",
    "Chain Crit": "连锁暴击",
    "Choose Build Effect": "选择构筑效果",
    "Cooldown Reduction": "冷却缩减",
    "Crit & Chain": "暴击与连锁",
    "Crit & Penetration": "暴击与穿透",
    "Critical Hits": "暴击",
    "Damage vs Frozen": "对冰冻目标伤害",
    "Damage vs Poisoned": "对中毒目标伤害",
    "Damage vs Stunned": "对眩晕目标伤害",
    "Deadeye": "神枪手",
    "Dodge Chance": "闪避几率",
    "Envenomed": "淬毒",
    "Evasion & Lifesteal": "闪避与生命偷取",
    "Execute Damage": "处决伤害",
    "Executioner": "处刑者",
    "Freeze": "冰冻",
    "Freeze & Bleed": "冰冻与流血",
    "Freeze Chance": "冰冻几率",
    "Glasshex": "玻璃咒",
    "Life Steal Cap": "生命偷取上限",
    "Low-HP Damage": "低生命伤害",
    "Mana & Lifesteal": "法力与生命偷取",
    "Mana Drain": "法力吸取",
    "Mana Regen": "法力回复",
    "Poison & Bleed": "中毒与流血",
    "Poison Chance": "中毒几率",
    "Poison Power": "毒伤威力",
    "Ravager": "掠夺者",
    "Reaver": "收割者",
    "Rimebound": "霜缚",
    "Shadowdance": "暗影之舞",
    "Siphon": "虹吸",
    "Snaresworn": "陷誓",
    "Speed & Crit": "速度与暴击",
    "Spell Cooldowns": "法术冷却",
    "Spell Damage": "法术伤害",
    "Spell Reset": "法术重置",
    "Stun": "眩晕",
    "Stun Chance": "眩晕几率",
    "Stun Duration": "眩晕时间",
    "Surgeweave": "涌动织法",
    "Swiftblade": "迅刃",
    "Thorns": "荆棘",
    "Venomous": "剧毒",
    "4 new recipes discovered!": "发现4种新配方！",
    "Abomination": "憎恶",
    "Shadow Essence": "暗影精华",
    "Raptor Scale": "迅猛龙鳞片",
    "Heart of the Abyss": "深渊之心",
    "Spectral Essence": "灵质精华",
    "Spectral Phantoms": "灵质幻影",
    "The Aethyr Abyss (Lv.100+)": "以太深渊（等级100+）",
    "Crystallized Spectral": "结晶灵质",
    "leatherworkin": "制皮",
    "Defias Cloth Fragment": "迪菲亚布片",
    "Essence of the Sundered Fields": "破碎原野精华",
    "Ironpeak Rock Fragment": "铁峰岩石碎片",
    "Ironpeak Insignia": "铁峰徽记",
    "✅ Weekly quest reward claimed!": "✅ 周常任务奖励已领取！",
    "Well Off!": "小康！",
    "Sorts de Buff": "增益法术",
    "A soft hide from forest game.": "来自森林猎物的柔软毛皮。",
    "Worthless alone, vital in an alloy.": "单独无用，合金必备。",
    "A small bite, and a small comfort.": "一小口，一份小安慰。",
    "Smelted and ready, if a little soft.": "已熔炼就绪，稍显柔软。",
    "A sturdy oak board.": "一块结实的橡木板。",
    "woodworkin": "木工",
    "A refined bronze bar, ready for smithing.": "精炼青铜锭，锻造就绪。",
    "A refined copper bar, ready for smithing.": "精炼铜锭，锻造就绪。",
    "A refined iron bar, ready for smithing.": "精炼铁锭，锻造就绪。",
    "A reliable cooked meal that restores health in a pinch.": "一份能应急恢复生命的可靠熟食。",
    "Adventurer\"": "冒险者",
    "Allows one free talent refund (no gold cost).": "允许一次免费天赋重置（无需金币）。",
    "Artisan Scroll": "工匠卷轴",
    "Artisan's Vault Key": "工匠宝库钥匙",
    "Buyback": "回购",
    "Crafting can use materials from your bank in addition to inventory.": "制作时除背包外还可使用仓库中的材料。",
    "Empowers a single affix. Earned from Mythic+ dungeons.": "强化单个词缀。通过史诗+地下城获取。",
    "Healing Potion": "治疗药水",
    "Leyline Attunement Stone": "地脉协调石",
    "Locks one affix so it survives the next reroll.": "锁定一个词缀，使其在下一次重掷中保留。",
    "Merchant's Daily Deal": "商人每日特惠",
    "Minor Healing Potion": "初级治疗药水",
    "Minor Mana Potion": "初级法力药水",
    "Nature Scroll": "自然卷轴",
    "Price": "价格",
    "Purchased": "已购买",
    "Refresh (free)": "刷新（免费）",
    "Rerolls every non-locked affix on an affixable item.": "重掷可附加词缀物品上的所有未锁定词缀。",
    "Token of Atonement": "赎罪令牌",
    "Unlocks an additional affix slot on an affixable item.": "解锁可附加词缀物品上的一个额外词缀槽位。",
    "Vault Extension Deed": "仓库扩展契约",
    "War Scroll": "战争卷轴",
    "materials": "材料",
    "special": "特殊",
    "utility": "工具",
    "Sell All": "全部出售",
    "Sell All Filtered": "全部出售（已筛选）",
    "Nothing to buy back. Items you sell appear here.": "无可回购物品。你出售的物品会显示在这里。",
    "Recover items you recently sold, for the gold you received. Oldest entries are dropped as you sell more.": "以你获得的金币回购近期出售的物品。出售越多，最早条目越先被移除。",
    "Plain, hot, and good enough.": "平淡、滚烫、凑合够用。",
    "Change email": "修改邮箱",
    "Change password": "修改密码",
    "Connected logins": "已关联登录",
    "Danger Zone": "危险区域",
    "Delete account": "删除账户",
    "Link": "关联",
    "This permanently deletes your account, all characters and progress. This cannot be undone.": "这将永久删除你的账户、所有角色及进度。此操作不可撤销。",
    "Verified": "已验证",
    "Your Referral Code": "你的推荐码",
    "Death in": "死亡倒计时",
    "leatherworking": "制皮",
    "Sort de Soin (1 max)": "治疗法术（最多1个）",
    "(15 HP min, or 2% Max HP — whichever is higher)": "（最低15生命值，或最大生命值的2%——取较高者）",
    "Restores 15 HP": "恢复15生命值",
    "+25% Combat XP for 30 minutes.": "+25%战斗经验，持续30分钟。",
    "+25% Crafting XP for 30 minutes.": "+25%制造经验，持续30分钟。",
    "+25% Gathering XP for 30 minutes.": "+25%采集经验，持续30分钟。",
    "Adds 10 inventory slots. (Max 10 purchases)": "增加10个背包槽位。（最多购买10次）",
    "Adds 25 bank slots. (Max 4 purchases)": "增加25个仓库槽位。（最多购买4次）",
    "Leyline resources are automatically collected every 5 minutes.": "地脉资源每5分钟自动收集一次。",
    "(30 HP min, or 3% Max HP — whichever is higher)": "（最低30生命值，或最大生命值的3%——取较高者）",
    "(30 Mana min, or 3% Max Mana — whichever is higher)": "（最低30法力值，或最大法力值的3%——取较高者）",
    "Share this code with friends. Both of you get exclusive cosmetics when they reach combat level 10!": "将此代码分享给好友。当他们达到战斗等级10时，双方均可获得独家外观！",
    "Adventurer\\\"": "冒险者",

        " HP%)": " HP%)",
        " pt": " 点",
        " pts": " 点",
        " stacks": " 层",
        "% PV max)": "% 最大生命)",
        "Absorbs": "吸收",
        "Aimed Shot": "瞄准射击",
        "Arrow Storm": "箭雨风暴",
        "Barrage": "弹幕射击",
        "Bow Mastery": "弓术精通",
        "Camouflage": "伪装",
        "Concussive Shot": "震荡射击",
        "Critical Eye": "锐利之眼",
        "Critical Eye or Evasion": "锐利之眼或闪避",
        "Death's Arrow": "死亡之箭",
        "Eagle Eye": "鹰眼",
        "Evasive Roll": "闪避翻滚",
        "Explosive Trap": "爆炸陷阱",
        "Fleet Feet": "疾风步",
        "Frost Arrow": "冰霜箭",
        "Hunter's Mark": "猎人印记",
        "Multi-Shot": "多重射击",
        "Nature's Mend": "自然治愈",
        "Nature's Wrat": "自然之怒",
        "Piercing Shot": "穿透射击",
        "Poison Trap": "毒液陷阱",
        "Poison Volley": "毒液齐射",
        "Quick Shot": "快速射击",
        "Quick Step": "快步",
        "Rain of Arrows": "箭雨",
        "Scatter Shot": "散射",
        "Serpent Arrow": "毒蛇箭",
        "Steady Aim": "稳定瞄准",
        "Tempest Shot": "暴风射击",
        "Wind Shot": "风之射击",
        "Trap": "陷阱",
        "Sharp Tools": "锋利工具",
        "Abundance": "丰饶",
        "Agility": "敏捷",
        "Aim": "瞄准",
        "Ambassador": "使者",
        "Choice": "抉择",
        "Choices": "抉择",
        "Conservation": "节约",
        "Crossroads": "十字路口",
        "Scout": "侦察兵",
        "Tracker": "追踪者",
        "Trapper": "陷阱师",
        "Windfall": "意外之财",
        "Breeding": "养殖",
        "Study": "研究",
        "Spent": "已花费",
        "Prodigy": "天才",
        "Preserver": "守护者",
        "Primordial": "太古",
        "Apex Conqueror": "顶点征服者",
        "Boss Slayer": "Boss杀手",
        "Dawnbringer": "黎明使者",
        "Dragonslayer": "屠龙者",
        "Dungeon Crawler": "地下城探索者",
        "Fortune Seeker": "财运追寻者",
        "Grandmaster": "宗师",
        "Master Artisan": "工艺大师",
        "Master Crafter": "制作大师",
        "Master Hammer": "锤锻大师",
        "Master Harvester": "采集大师",
        "Merchant King": "商业之王",
        "Mythic Sovereign": "神话主宰",
        "Overlord": "霸主",
        "Treasure Hunter": "宝藏猎人",
        "Zoologist": "动物学家",
        "Billionaire": "亿万富翁",
        "Inspired": "灵感迸发",
        "Invested": "投入",
        "Dazed and Confused": "晕头转向",
        "Beyond Wealt": "超越财富",
        "Gold Rus": "淘金热",
        "Lucky Find": "幸运发现",
        "Marked for Deat": "死亡标记",
        "Next Bonus": "下次加成",
        "Double Output": "双倍产出",
        "Double Output, Precision Work": "双倍产出，精密工艺",
        "Double Strike": "双重打击",
        "Double Strike, Experience": "双重打击，经验",
        "Experience, Windfall": "经验，意外之财",
        "Haggler": "砍价者",
        "Haggler, Fortune Seeker": "砍价者，财运追寻者",
        "Harvest Market, Supplyline": "丰收市场，补给线",
        "Prospector, Apprentice": "探矿者，学徒",
        "Precision Work": "精密工艺",
        "Prospector": "探矿者",
        "Supplyline": "补给线",
        "Efficient Crafting": "高效制作",
        "Gatherer's Eye": "采集者之眼",
        "Ancient Library": "远古图书馆",
        "Artisan's Market": "工匠市场",
        "Grand Bank": "大银行",
        "Harvest Market": "丰收市场",
        "Beyond the Void": "虚空之外",
        "The Endless": "无尽",
        "Change your mind freely": "随时更改选择",
        "Choices that matter": "有意义的选择",
        "Click to allocate": "点击分配天赋",
        "Ctrl+Click": "Ctrl+点击",
        "Shift+Click": "Shift+点击",
        "Collected from Leyline production": "由地脉产出自动收集",
        "Complete your foundation tree to unlock the specializations.": "完成基础天赋树以解锁专精。",
        "complete your foundation tree to unlock the specialization trees below.": "完成基础天赋树以解锁下方的专精树。",
        "Drag to the bank": "拖入仓库",
        "Explore this tree": "探索此树",
        "Every level grants points to invest in your class tree.": "每级获得天赋点，可投入职业树。",
        "Left Click to allocate talent points": "左键点击分配天赋点",
        "points can be redistributed.": "天赋点可重新分配。",
        "Reset anytime": "随时重置",
        "Select a player to view their profile": "选择玩家查看其资料",
        "Some branches are mutually exclusive. Build the version of your class that fits you.": "部分分支互斥。打造适合你的职业版本。",
        "Specializations locked": "专精已锁定",
        "Talents & Specialization": "天赋与专精",
        "Your Inventory": "你的背包",
        "Your Pat": "你的道路",
        "Your Standing": "你的声望",
        "The Last Name": "终末之名",
        "Deposit 1": "存入 1",
        "Deposit All Resources": "存入全部资源",
        "Deposit all": "全部存入",
        "Tanned light hide, suitable for basic armor.": "鞣制的轻皮，适合制作基础护甲。",
        "Residual magical dust found everywhere.": "随处可见的残余魔法粉尘。",
        "Stun your enemy with a precise shot, dealing damage and boosting your Defense.": "精准一击击晕敌人，造成伤害并提升防御。",
        "Call upon nature, restoring health and boosting speed.": "呼唤自然，恢复生命并提升速度。",
        "Carve your own path across the domains — no forced specialization, mix and match as you see fit.": "在各领域中开辟自己的道路——无强制专精，自由搭配。",
        "Lethal agility. Dodge queen and haste — untouchable on the battlefield.": "致命敏捷。闪避女王与急速——战场上无人能及。",
        "One shot, one freeze, one kill. Chained crits and critical-triggered bleed.": "一箭一冻一杀。连锁暴击与暴击触发出血。",
        "Poison decides who lives. Deadly DoT, long-term survivability.": "毒素决定生死。致命的持续伤害，长于生存。",
        "A devastating explosive trap dealing massive damage.": "毁灭性的爆炸陷阱，造成巨额伤害。",
        "A devastating shot that pierces deep.": "毁灭性的射击，穿透力极强。",
        "A precise shot dealing high damage.": "精准射击，造成高额伤害。",
        "Fire a volley of arrows dealing moderate damage.": "射出一阵箭雨，造成中等伤害。",
        "AresWar": "AresWar",
        "Aria": "Aria",
        "Artemis": "Artemis",
        "Bergitson": "Bergitson",
        "CTheD": "CTheD",
        "Chiws": "Chiws",
        "Chiwz": "Chiwz",
        "Clarksfield": "Clarksfield",
        "Crampus": "Crampus",
        "Cyrail": "Cyrail",
        "Dejmo": "Dejmo",
        "Dondo": "Dondo",
        "Dumpler": "Dumpler",
        "Dylon": "Dylon",
        "Ezzmir": "Ezzmir",
        "FRAG_Corri": "FRAG_Corri",
        "FRAG_Ezzmir": "FRAG_Ezzmir",
        "GeoffyBooBoo": "GeoffyBooBoo",
        "Gergitson": "Gergitson",
        "Glynn": "Glynn",
        "Gr33nLant": "Gr33nLant",
        "GrandMasterViper": "GrandMasterViper",
        "Kaiple": "Kaiple",
        "Kergitson": "Kergitson",
        "Khellen": "Khellen",
        "Killbee": "Killbee",
        "Ludway": "Ludway",
        "MakarOFF": "MakarOFF",
        "Mames": "Mames",
        "Milo": "Milo",
        "Milow": "Milow",
        "Morta": "Morta",
        "Muffin": "Muffin",
        "Nemesis": "Nemesis",
        "Neo": "Neo",
        "Paladinus": "Paladinus",
        "RazenhaxD": "RazenhaxD",
        "RustleSeeker": "RustleSeeker",
        "Shenji": "Shenji",
        "Sophorom": "Sophorom",
        "Tiny": "Tiny",
        "Torn": "Torn",
        "Viperian": "Viperian",
        "Void Monarc": "Void Monarc",
        "Zathrot": "Zathrot",
        "Zilj": "Zilj",
        "Zyak": "Zyak",
        "amaralzn": "amaralzn",
        "cva": "cva",
        "deathwalker": "deathwalker",
        "gunt": "gunt",
        "jonas": "jonas",
        "jos": "jos",
        "mcrt": "mcrt",
        "mhew": "mhew",
        "vemon": "vemon",
        "Sir Cadogan": "卡多根爵士",

        "Deeper in the tree you will commit to a specialization that defines your playstyle. Nothing is permanent — you can reset later.": "深入天赋树后，你将选择定义你玩法的专精。一切皆非永久——之后可以重置。",

    };
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