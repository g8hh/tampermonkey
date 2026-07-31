// ==UserScript==
// @name         Yuusha Idle 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Yuusha Idle (https://yuushaidle.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Yuusha Idle.高效汉化 + Canvas 2D 汉化，内置 DodecaDragons 翻译
// @author       好阳光的小锅巴 & 麦子、人民当家做主
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://yuushaidle.com/favicon-32.png
// @license      MIT
// @include      *https://yuushaidle.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/yuusha-idle-AI3-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/yuusha-idle-AI3-chs.user.js
// @run-at       document-end
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/07/07 17:32
 * Author: guoba
 * View: https://www.gityx.com/
 * ---------------------------
 */

(function() {
    'use strict';

    // ============================================================
    // 翻译数据配置
    // ============================================================
    if (!window.cnConfig || Object.keys(window.cnConfig).length === 0) {
        window.cnConfig = {
            ignoreCase: true,
            trimSpaces: true,
        };
    }

    window.cnCategoriesList = window.cnCategoriesList || ["resource", "item"];

    if (!window.cnItems || Object.keys(window.cnItems).length === 0) {
        window.cnItems = {
            // === 静态匹配 ===
            "Welcome": "欢迎",
            "Score": "分数",
            "Hello World": "你好世界",
            "Settings": "设置",

            // === 分类词条 [译文, 分类名] ===
            "gold": ["金币", "resource"],
            "wood": ["木材", "resource"],
            "stone": ["石头", "resource"],
            "iron": ["铁", "resource"],
            "sword": ["剑", "item"],
            "shield": ["盾牌", "item"],
            "helmet": ["头盔", "item"],

            // === 模板 {{0}} {{1}} ===
            "Cost: {{0}}": "消耗：{{0}}",
            "Costs {{0}}": "花费{{0}}",
            "Hits {{0}}×": "攻击 {{0}}x",
            "Costs {{0}} gold": "花费{{0}}金币",
            "See all {{0}}": "查看所有 {{0}}",
            "Favorites {{0}}": "收藏 {{0}}",
            "Required Lv {{0}}": "要求等级 {{0}}",
            "Requires {{0}} Intelligence": "要求 {{0}} 智力",
            "Gather {{0}} Mineral": "采集 {{0}} 矿物",
            "Level {{0}}": "等级 {{0}}",
            "Respec ({{0}} free)": "重置 ({{0}} 免费)",
            "Smithing Lv {{0}}": "锻造 等级 {{0}}",
            " · {{0}} · Lv {{1}}": " · {{0}} · 等级 {{1}}",
            "Ends in {{0}}": "剩余时间 {{0}}",
            "Buy · {{0}}": "购买 · {{0}}",
            "To +{{0}}": "到 +{{0}}",
            "Repair ({{0}} gold)": "修理 ({{0}} 金币)",
            "+{{0}}% drop chance": "+{{0}}% 掉落几率",
            "+{{0}}% gold": "+{{0}}% 金币",
            "+{{0}}% drop chance per rank": "+{{0}}% 掉落几率 每级",
            "+{{0}}% Max HP per rank": "+{{0}}% 最大生命值 每级",
            "+{{0}}% ATK per rank": "+{{0}}% 攻击 每级",
            "+{{0}}% M.ATK per rank": "+{{0}}% 魔法攻击 每级",
            "+{{0}}% DEF per rank": "+{{0}}% 防御 每级",
            "+{{0}}% Magic DEF per rank": "+{{0}}% 魔法防御 每级",
            "+{{0}}% gold per rank": "+{{0}}% 金币 每级",
            "+{{0}}% XP per rank": "+{{0}}% 暴击伤害 每级",
            "+{{0}}% Crit damage per rank": "+{{0}}% 暴击伤害 每级",
            "+{{0}} Max resource per rank": "+{{0}}% 最大资源 每级",
            "+{{0}} guild XP": "+{{0}}% 公会经验",
            "{{0}} epic to claim": "{{0}} 个史诗可领取",
            "{{0}} remaining": "剩余时间 {{0}}",
            "{{0}} in the bag": "包里有 {{0}}",
            "{{0}} contracts to accept": "{{0}} 合同可接受",
            "{{0}} cards": "{{0}} 卡牌",
            "{{0}} item(s)": "{{0}} 物品",
            "{{0}} days": "{{0}} 天",
            "{{0}} kills": "{{0}} 击杀",
            "{{0}} zone objectives open": "{{0}} 个区域目标已开放",
            "{{0}} rebirths": "{{0}} 重生",
            "{{0}} more to unlock the next row": "还需 {{0}} 以解锁下一行",
            "{{0}} adventurers active this week": "本周活跃冒险者 {{0}}",
            "{{0}} x {{1}}": "{{0}} × {{1}}",
            "Lv {{0}} → {{1}}": "等级 {{0}} → {{1}}",
            "{{0}} / {{1}} XP": "{{0}} / {{1}} 经验",
            "Favorites {{0}}/{{1}}": "收藏 {{0}}/{{1}}",
            "Page {{0}} / {{1}}": "{{0}} / {{1}} 页",
            "{{0}}/{{1}} discovered": "{{0}}/{{1}} 已发现",
            "Durability {{0}}/{{1}}": "耐久度 {{0}}/{{1}}",
            " · Total +{{0}}%": " · 总计 +{{0}}%",
            " · Total +{{0}}": " · 总计 +{{0}}",

            // === 分类模板 ===
            "{{resource}}: {{0}}": "{{resource}}：{{0}}",
            "Get {{0}} {{resource*}}": "获得 {{0}} {{resource*}}",
            "Craft {{item*|,|和}}": "制作{{item*|,|和}}",

            // === 通用列表 ===
            "Items: {{*}}": "物品：{{*}}",
            "Mats: {{*|, |、}}": "材料：{{*|, |、}}",

            // === 数字占位符 ===
            "Reach level {{%d}}": "达到等级 {{%d}}",
            "Lv {{%d}}": "等级 {{%d}}",
            "Tier {{%d}}": "层级 {{%d}}",
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
            "+1 Mineral · +1 Wood · +1 Fish · +1 Herb": "矿物+1 · 木材+1 · 渔获+1 · 草药+1",
            "Choose your epic — Forest of Beginnings": "自选史诗装备 — 起始之林",
            "Pick any piece of this zone. It's yours at epic rarity.": "任选该区域任意装备，直接获取史诗品级。",
            "Sell all": "查看全部",
            "Buying...": "购买中...",
            "Choose an item from your bags": "从背包选择物品",
            "Auction": "拍卖行",
            "Buy now": "立即购买",
            "Current": "当前价格",
            "List for sale": "上架出售",
            "Listing duration": "上架时长",
            "Listing fee (burned)": "上架手续费（消耗）",
            "Listing type": "上架类型",
            "Minimum price for this rarity": "该稀有度最低售价",
            "No sales history yet — it fills in as players trade.": "暂无交易记录，玩家产生交易后数据将会更新。",
            "Trend": "走势",
            "Volume": "成交量",
            "Suggested": "推荐价格",
            "On sale now": "正在售卖",
            "Bid": "出价",
            "Current bid": "当前出价",
            "Next min bid": "最低增量出价",
            "No bids yet": "暂无出价",
            "Max": "最高",
            "Min": "最低",
            "Avg": "均价",
            "Counters poison and restores vitality.": "反制毒物并恢复生命值。",
            "Antidote": "解毒剂",
            "Choose": "选择",
            "Maximum focus. Dangerous enemies.": "极致专注。危险的敌人。",
            "Bag near full": "背包快满了",
            "Restaura una pequeña cantidad de HP.": "恢复少量生命值。",
            "Cancel construction": "取消建造",
            "Crafted! Forge it up in the Forge tab.": "打造成功！前往锻造界面淬炼此物。",
            "Stun 2 turns": "眩晕2回合",
            "Yoke": "枷锁",
            "“It weaves its webs among the trees and waits, patient, for a prey's tremor.”": "“它在林间织网，静静蛰伏，静待猎物颤动的瞬间。”",
            "You fell before Glacier Titan, but the Guild honors anyone who dares raise a weapon against a beast far beyond them. Take these potions, recover your strength and return to the raid — next time you will last longer.": "你被冰川泰坦击败了，但公会会表彰任何敢于对抗远超自身实力的巨兽的人。拿起这些药剂，恢复你的力量，然后返回突袭 — 下次你将能坚持更久。",
            "Item claimed!": "物品已领取!",
            "Claimed": "已领取",
            "Confirm sell": "确认出售",
            "Contract complete!": "契约完成!",
            "Claim all": "全部领取",
            "Reach level 99 or prestige at least once to enter.": "达到99级或至少获得一次声望即可进入。",
            "All caught up": "全都搞定啦",
            "Post that we have room": "我们还有空位",
            "You": "你",
            "Leave party": "离开队伍",
            "Find someone": "邀请他人",
            "Cannot equip a shield with a two-handed weapon": "已装备双手武器时无法再装备副手装备",
            "Enhanced!": "已强化!",
            "Enhancing…": "强化中...",
            "Elite": "精英",
            "Boss": "Boss",
            "It pours all its power into overwhelming bursts, no matter how fragile it's left.": "它倾注全部力量，以压倒性的爆发形式展现，无论自身多么脆弱。",
            "Bag is full": "背包满了",
            "MP": "法力值",
            "Off Hand": "副手   ",
            "Reduce enemy ATK by 40% for 12s": "降低敌方40%攻击力，持续12秒",
            "Reduce enemy ATK by 40% for 15s": "降低敌方40%攻击力，持续15秒",
            "Reduce incoming damage by 50% for 10s": "受到伤害减少50%，持续10秒",
            "Reduce incoming damage by 50% for 12s": "受到伤害减少50%，持续12秒",
            "Reduce incoming damage by 60% for 6s": "受到伤害减少60%，持续6秒",
            "Reset all skill cooldowns": "重置全部技能冷却时间",
            "Restore 15% HP on kill": "击杀目标恢复15%生命值",
            "Restore 30% of max HP": "恢复30%最大生命值",
            "Restores mana with every blow you endure": "每次承受攻击时恢复魔力",
            "Runic Slash": "符文斩击",
            "Sanctuary": "圣界庇护",
            "Shadow Step": "暗影步",
            "Shield Counter": "盾击反击",
            "Smoke Screen": "烟雾帷幕",
            "Soul Sever": "灵魂割裂",
            "Spear Charge": "长矛冲锋",
            "Spellblade": "法术剑士",
            "Swordbreaker": "碎刃打击",
            "Target takes +50% damage for 15s": "目标承受伤害提升50%，持续15秒",
            "Throat Cut": "割喉",
            "Time Warp": "时间扭曲",
            "Two enchanted hits": "两次附魔攻击",
            "Two hybrid magic bolts": "两道混合魔法飞弹",
            "Two magic bolts at double power": "两道威力翻倍的魔法飞弹",
            "Vanish": "隐匿",
            "War Cry": "战吼",
            "War Hex": "战争诅咒",
            "Whirlwind": "旋风斩",
            "Backstab": "背刺",
            "Battle Magic": "战斗法术",
            "Battle Rage": "战斗狂怒",
            "Block all damage for 3s": "免疫所有伤害，持续3秒",
            "Blood Runes": "血之符文",
            "Caballero": "骑士",
            "Cataclysm": "灾变",
            "Chain Lightning": "连锁闪电",
            "Charge with your spear; if you outclass their defense, you shatter it": "持长矛冲锋；若你的攻击突破敌方防御，则粉碎其护甲",
            "Charging Strike": "冲锋猛击",
            "Cleave": "横斩",
            "Consecration": "神圣净化",
            "Counter with the last blow you took, or strike with your defense": "以遭受的最后一击进行反击，或是依托防御发起攻势",
            "Damage scales with your defense": "伤害数值随自身防御属性提升",
            "Death Mark": "死亡印记",
            "Divine Shield": "神圣护盾",
            "Divine Wrath": "神圣怒火",
            "Eldritch Barrage": "邪异弹幕",
            "Evasion": "闪避",
            "Eviscerate": "剔骨",
            "Execute": "处决",
            "Fire two magic bolts": "释放两道魔法飞弹",
            "Fireball": "火球术",
            "Fortify": "强化防御",
            "Frost Nova": "冰霜新星",
            "Guardián": "守护者",
            "Guerrero": "战士",
            "Heal 25% of all damage dealt for 10s": "10秒内，将造成伤害的25%转化为治疗",
            "Heavy Blow": "重击",
            "Hoja Arcana": "奥法之刃",
            "Holy Smite": "神圣惩戒",
            "Iron Resolve": "钢铁意志",
            "Jab": "突刺",
            "Last Stand": "绝境坚守",
            "Lay on Hands": "圣疗术",
            "Mago": "法师",
            "Mago de Guerra": "战斗法师",
            "Mana Shield": "魔力护盾",
            "Mana Surge": "魔力涌动",
            "Mana Ward": "魔力屏障",
            "Meteor Strike": "陨石冲击",
            "Paladín": "圣骑士",
            "Poison Blade": "淬毒之刃",
            "Pícaro": "盗贼",
            "Quick Draw": "速拔武器",
            "Quick Slash": "迅斩",
            "Raise your physical and magical defense by 60% for 30s": "物理、魔法防御提升60%，持续30秒",
            "Rampage": "狂乱",
            "Recover 25% max HP when below 30% HP": "生命值低于30%时，恢复25%最大生命值",
            "Reduce all damage by 40% for 10s": "所受全部伤害降低40%，持续10秒",
            "+120% damage, ignores 50% DEF": "伤害提升120%，无视50%防御",
            "+30% crit chance for 20s": "暴击几率提升30%，持续20秒",
            "+80% damage, pierces all DEF": "伤害提升80%，穿透全部防御",
            "Arquero": "弓箭手",
            "Disengage": "脱离战斗",
            "Eagle Eye": "鹰眼",
            "Loose two arrows in rapid succession": "连续射出两支箭矢",
            "Piercing Arrow": "穿刺箭",
            "Power Shot": "强力射击",
            "Reduce incoming damage by 50% for 8s": "受到伤害降低50%，持续8秒",
            "Volley": "箭雨",
            "+100% damage, ignores 60% DEF": "伤害提升100%，无视60%防御",
            "+100% damage, shatters enemy weapon": "伤害提升100%，击碎敌方武器",
            "+100% hybrid physical+magic damage": "物理与魔法混合伤害提升100%",
            "+100% magic-physical hybrid damage": "物理魔法混合伤害提升100%",
            "+120% damage, crushing strike": "伤害提升120%，重击",
            "+150% damage, ignores 80% DEF": "伤害提升150%，无视80%防御",
            "+180% magic damage burst": "魔法爆发伤害提升180%",
            "+20% magic damage, -50% enemy ATK for 8s": "魔法伤害提升20%，降低敌方50%攻击力，持续8秒",
            "+200% damage (vs enemies below 30% HP)": "伤害提升200%（对生命值低于30%的目标生效）",
            "+200% magic damage, pierces all DEF": "魔法伤害提升200%，穿透全部防御",
            "+250% damage from the shadows": "暗影伤害提升250%",
            "+30% ATK for 15s": "攻击力提升30%，持续15秒",
            "+300% damage, unstoppable": "伤害提升300%，无法被阻挡",
            "+300% magic damage": "魔法伤害提升300%",
            "+40% damage, applies poison over 9s": "伤害提升40%，9秒内持续施加毒素",
            "+40% instant strike": "瞬击伤害提升40%",
            "+400% hybrid damage, righteous": "神圣混合伤害提升400%",
            "+400% magic damage, pierces DEF": "魔法伤害提升400%，穿透防御",
            "+50% ATK for 20s": "攻击力提升50%，持续20秒",
            "+50% damage, converts HP to MP": "伤害提升50%，生命值转化为魔力",
            "+50% damage, deep wound": "伤害提升50%，造成深度创伤",
            "+50% damage, relentless sweep": "伤害提升50%，无情横扫",
            "+60% damage, ignores 40% DEF": "伤害提升60%，无视40%防御",
            "+60% damage, ignores 50% DEF": "伤害提升60%，无视50%防御",
            "+80% damage, fast strike": "伤害提升80%，快速打击",
            "+80% damage, hits wide": "伤害提升80%，大范围攻击",
            "+80% damage, quick jab": "伤害提升80%，迅猛突刺",
            "+80% damage, unstoppable charge": "伤害提升80%，势不可挡的冲锋",
            "+80% hybrid damage": "混合伤害提升80%",
            "+80% magic damage, pierces DEF": "魔法伤害提升80%，穿透防御",
            "Absorb incoming damage with MP for 8s": "8秒内消耗魔力抵挡受到的伤害",
            "Aegis": "神佑护盾",
            "Arcane Bulwark": "奥法壁垒",
            "Arcane Flurry": "奥法乱击",
            "Arcane Missiles": "奥法飞弹",
            "Arcane Surge": "奥法涌动",
            "Arcimago": "大法师",
            "Asesino": "刺客",
            "Attack twice in rapid succession": "连续发起两次攻击",
            "Heal 20% HP": "恢复20%生命值",
            "Sap": "树液",
            "“Living jelly that digests all it touches; villagers swear it remembers its victims.”": "“具备生命的凝胶，能够消化一切触碰到的事物；村民们坚信它会铭记所有受害者。”",
            "Active": "主动效果",
            "Choose consumables": "选择消耗品",
            "Create party": "创建队伍",
            "Find party": "寻找队伍",
            "Frost Axe": "冰霜巨斧",
            "Frost Bow": "冰霜长弓",
            "Frost Cloth Armor": "冰霜布甲",
            "Frost Cloth Boots": "冰霜布靴",
            "Frost Cloth Leggings": "冰霜布护腿",
            "Frost Dagger": "冰霜匕首",
            "Frost Leather Helmet": "冰霜皮盔",
            "Frost Mace": "冰霜钉锤",
            "Frost Plate Helmet": "冰霜板甲头盔",
            "Frost Plate Leggings": "冰霜板甲护腿",
            "Frost Spear": "冰霜长矛",
            "Frost Staff": "冰霜法杖",
            "Frost Sword": "冰霜长剑",
            "Frost Tome": "冰霜典籍",
            "Frost Wand": "冰霜魔杖",
            "Glacier Titan": "冰川泰坦",
            "In a party, everyone's loot lands in one bag and you divide it between you.": "组队状态下，所有人的战利品统一收纳至共用背包，由队员自行分配。",
            "No party": "暂无队伍",
            "Nobody posted yet.": "暂时没有招募信息。",
            "Post that I am looking": "发布求组队信息",
            "Raid board": "团队副本公告板",
            "Recruiting": "招募中",
            "Invite": "邀请",
            "NoweHoryzonty": "NoweHoryzonty",
            "Ask in": "申请入队",
            "(you)": "（你）",
            "Bumpf": "Bumpf",
            "Critical hits": "暴击次数",
            "Damage / min": "每分钟伤害",
            "Damage Ranking": "伤害排行榜",
            "Damage taken": "受到伤害",
            "Leave Raid": "退出团队副本",
            "Potion": "药水",
            "Rio Danthorn": "Rio Danthorn",
            "Session damage": "本次战斗总伤害",
            "Your progress": "你的进度",
            "grobon": "grobon",
            "ready": "就绪",
            "total damage": "总伤害",
            "your position": "你的名次",
            "Defense Down": "防御降低",
            "Novice's Resolve": "新手之志",
            "Close": "关闭",
            "Contribution": "贡献度",
            "Raid ended": "团队副本已结束",
            "Total damage": "总伤害",
            "Looking": "寻找",
            "Party": "队伍",
            "⚔ Join the Raid": "⚔ 加入突袭",
            "Raid available": "突袭可用",
            "Enter": "进入",
            "Completed": "已完成",
            "Dire Wolf": "恐狼",
            "“A coward alone, a terror in numbers — it strikes only when the odds favor it.”": "“独行时怯懦畏缩，成群则凶狂可怖——只在占据优势时发起袭击。”",
            "Next row unlocked": "已解锁下一栏",
            "Couldn't upgrade the building. Try again.": "建筑升级失败，请重试。",
            "Colmillo de Lobo": "狼牙",
            "Limo Gelatinoso": "黏滑凝胶",
            "Moneda Goblin": "哥布林钱币",
            "Pendiente del Errante": "流浪者吊坠",
            "Piel de Lobo": "狼皮",
            "Poción de HP Pequeña": "小型生命药水",
            "Seda de Araña": "蜘蛛丝",
            "Your equipment bag is full — make room (sell/discard) before crafting gear.": "装备背包已满，请腾出空间（出售/丢弃物品）后再打造装备。",
            "⛏ Collection": "⛏ 收藏",
            "Craft": "制作",
            "Forging…": "锻造中...",
            "Upgraded!": "已升级!",
            "Crafted!": "已制作!",
            "Upgrade in progress…": "升级进行中...",
            "Upgrading...": "升级中...",
            "Energy": "能量",
            "A single shot, steady and patient, that pierces anything.": "一记精准、沉稳而耐心的射击，穿透一切。",
            "Frost Amulet": "冰霜护符",
            "Frost Cloth Gloves": "冰霜布质手套",
            "Frost Cloth Helmet": "冰霜布质头盔",
            "Frost Cloth Pauldrons": "冰霜布质肩甲",
            "Frost Leather Armor": "冰霜皮甲",
            "Frost Leather Boots": "冰霜皮靴",
            "Frost Leather Gloves": "冰霜皮手套",
            "Frost Leather Leggings": "冰霜皮护腿",
            "Frost Leather Pauldrons": "冰霜皮肩甲",
            "Frost Plate Armor": "冰霜板甲",
            "Frost Plate Boots": "冰霜板靴",
            "Frost Plate Gloves": "冰霜板甲手套",
            "Frost Plate Pauldrons": "冰霜板甲肩甲",
            "Frost Ring": "冰霜戒指",
            "Frost Shield": "冰霜盾牌",
            "Premium Membership (30 days)": "高级会员（30天）",
            "Include older (7d+)": "显示较早记录（7天以上）",
            "My auctions": "我的拍卖",
            "My bids": "我的出价",
            "My buy orders": "我的买入订单",
            "My listings": "我的上架物品",
            "You have no active bids.": "暂无有效出价",
            "You have no buy orders.": "暂无买入订单",
            "You haven't listed anything yet.": "你尚未上架任何物品",
            "You haven't put anything up for auction.": "你还未发布任何拍卖",
            "You don't meet this skill's attribute requirement.": "未达到该技能属性需求",
            "Choose a consumable": "选择消耗品",
            "Cloth": "布甲",
            "Restores a small amount of HP.": "小幅恢复生命值",
            "Locked during adventure": "冒险期间锁定",
            "Not enough Herb": "草药数量不足",
            "Agility": "敏捷",
            "You cannot change weapons during an adventure. Stop it first.": "冒险途中无法更换武器，请先终止冒险。",
            "Earring": "耳饰",
            "Material": "材料",
            "Not enough Wood": "木材数量不足",
            "MP Regen": "魔力回复",
            "Intelligence": "智力",
            "Goblin King": "哥布林王",
            "Rarity": "稀有度",
            "Sort": "排序",
            "Strike": "猛击",
            "“Its howl empties the roads at dusk; it hunts for hunger and for sport.”": "“它的嚎鸣令黄昏道路空无一人；狩猎既是果腹，亦是玩乐。”",
            "+30% Max HP, −12% Speed": "最大生命值 +30%，移动速度 −12%",
            "Defeat this monster to discover it": "击败此怪物解锁该物品",
            "Goblin Warrior": "哥布林战士",
            "Taking…": "获取中……",
            "Abandon": "放弃",
            "Progress": "进度",
            "inventory.compare_vs": "物品对比",
            "More focus and tougher enemies.": "更高专注力，敌人强度提升",
            "All rarities": "全部稀有度",
            "All types": "全部类型",
            "Buy": "购买",
            "Loading the market…": "市场加载中……",
            "Most traded": "热门交易",
            "My orders": "我的订单",
            "Name": "名称",
            "Price ↑": "价格升序",
            "Price ↓": "价格降序",
            "Select an item to see its price history.": "选择物品查看价格走势",
            "Armor": "护甲",
            "Boots": "靴子",
            "Consumable": "消耗品",
            "Epic": "史诗",
            "Gloves": "手套",
            "Legs": "护腿",
            "Necklace": "项链",
            "Ring": "戒指",
            "Weapon": "武器",
            "Ancient Leather Armor": "远古皮甲",
            "Ancient Leather Boots": "远古皮靴",
            "Ancient Leather Helmet": "远古皮盔",
            "Ancient Leather Leggings": "远古皮护腿",
            "Ancient Plate Armor": "远古板甲",
            "Cursed Leather Gloves": "诅咒皮手套",
            "Luck": "幸运",
            "free": "免费",
            "🫁 Breathing": "🫁 呼吸",
            "⚔️ Combat": "⚔️ 战斗",
            "SPD": "速度",
            "Log will appear here...": "日志将显示于此...",
            "🏳️ Recall Hero": "🏳️ 召回英雄",
            "Forest Spider": "森林蜘蛛",
            "Adventure complete": "冒险任务完成",
            "Adventure finished": "冒险结束",
            "Claim & repeat": "领取奖励并再次挑战",
            "Hero fell": "英雄阵亡",
            "Sending your hero to gather also restores HP between fights.": "派遣英雄前去采集，也能在战斗间隙恢复生命值。",
            "XP earned": "获得经验值",
            "Your hero fell in battle and the adventure ended — needs better gear, potions, or more training before heading back.": "你的英雄在战斗中倒下，冒险终止。需要更好的装备、药剂或是进一步历练后再出发。",
            "Your hero fell in battle.": "你的英雄阵亡。",
            "⚰️ Your hero fell": "⚰️ 英雄陨落",
            "Discard": "丢弃",
            "Durability": "耐久度",
            "Leather": "皮革（护甲类型）",
            "Max MP": "最大魔力值",
            "Rare": "稀有品质",
            "Sell": "出售",
            "Shoulders": "肩甲",
            "Tradeable": "可交易",
            "Bound": "已绑定",
            "Common": "普通品质",
            "Plate": "板甲",
            "Trains": "训练项目",
            "Unequip": "卸下装备",
            "Enhance": "强化",
            "Enhancement": "强化系统",
            "Not enough Mineral": "矿石数量不足",
            "Not enough gold to repair.": "金币不足以修复装备。",
            "Equip": "装备",
            "Not enough Fish": "鱼类数量不足",
            "Cancel": "取消",
            "Equip & bind": "装备并绑定",
            "Equipping this binds it permanently — you won't be able to sell it on the Market.": "装备该物品后将永久绑定，无法在交易市场出售。",
            "Skill dmg": "技能伤害",
            "Continue": "继续",
            "Kills": "击杀",
            "Keep": "保留",
            "Slime": "史莱姆",
            "Took": "受到伤害",
            "XP/min": "经验/分钟",
            "kills": "击杀",
            "Combat log": "战斗日志",
            "DMG/min": "伤害/分钟",
            "Crits": "暴击",
            "Auto dmg": "自动伤害",
            "Lv": "等级",
            "→ E": "→ E",
            " HP": " 生命值",
            "60s cycle": "60 秒周期",
            "Gear": "装备",
            "Loading...": "加载中...",
            "All": "全部",
            "New skins": "新皮肤",
            "More": "更多",
            "Logout": "登出",
            "Language": "语言",
            "Guide": "指南",
            "View": "查看",
            "Discord": "Discord",
            "ES": "ES",
            "EN": "EN",
            "Workshop": "工坊",
            "World Map": "世界地图",
            "Zone": "区域",
            "Yuusha": "勇者",
            "XP": "经验",
            "Stats": "属性",
            "Talents": "天赋",
            "VIT": "活力",
            "STR": "力量",
            "M.DEF": "魔法防御",
            "M.ATK": "魔法攻击",
            "Idle": "放置",
            "Hero": "英雄",
            "INT": "智力",
            "HIT": "命中",
            "HP": "生命值",
            "Bag": "背包",
            "Registering...": "注册中...",
            "Create Hero": "创建英雄",
            "Hero name": "英雄名称",
            "Log out": "登出",
            "DEF": "防御",
            "DEX": "灵巧",
            "Collection": "收藏",
            "Character": "角色",
            "CRIT": "暴击",
            "Build": "建造",
            "Creating...": "创建中...",
            "Attributes": "属性",
            "Adventure": "冒险",
            "Abyss": "深渊",
            "ATK": "攻击",
            "ASPD": "攻击速度",
            "AGI": "敏捷",
            "Guild": "公会",
            "Cargando...": "加载中...",
            "Back": "返回",
            "Email": "电子邮箱",
            "Login": "登录",
            "Password": "密码",
            "Play as guest": "访客模式游玩",
            "Player Account": "玩家账号",
            "Register": "注册",
            "Your anonymous progress will be linked to this account.": "你的匿名游戏进度将会绑定至该账号。",
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
        "Wanderer": "旅者",
        "Dragon Guardian": "巨龙守护者",
        "Kitsune": "狐妖",
        "Dragon-blooded": "龙裔",
        "Nine-Tailed Spirit": "九尾灵体",
        "Dragon Knight": "龙骑士",
        "Dragon Maiden": "龙姬",
        "Grave Knight": "墓穴骑士",
        "Crimson Crusader": "绯红十字军",
        "Founder": "创立者",
        "Founder's Arcane Mantle": "创立者奥法斗篷",
        "Founder's Golden Regalia": "创立者黄金圣饰套装",
        "Founder's Shadow Aegis": "创立者暗影庇护盾",
        "Arcane Frame": "奥法构架",
        "Gray Frame": "灰影构架",
        "Obsidian Frame": "黑曜构架",
        "Kitsune Miko": "狐妖巫女",
        "Kitsune Ronin": "狐妖浪人",
        "Katana": "武士刀",
        "Spear & Shield": "枪盾",
        "Axe + Shield": "斧盾",
        "Axe + Axe": "双斧",
        "Dagger + Dagger": "双匕首",
        "Dagger + Shield": "匕首 + 盾",
        "Sword + Shield": "剑盾",
        "Sword + Tome": "剑 + 卷轴",
        "Wand + Shield": "法杖 + 盾",
        "Wand + Tome": "法杖 + 卷轴",
        "Mace + Shield": "权杖 + 盾",
        "Staff (2H)": "法杖 (双手)",
        "Greatsword": "大剑",
        "Bow": "弓",
        "Session · likexiazai@qq.com": "状态 · likexiazai@qq.com",
        "Wanderer's Strike": "旅者打击",
        "Wanderer's Luck": "旅者之幸",
        "Vagabond's End": "流浪者终焉",
        "Beginner's Luck": "新手好运",
        "Lucky Strike": "幸运一击",
        "Errante": "Errante",
        ". Their identity emerges through gameplay.": "。其身份将在游戏中逐渐显现。",
        "Your hero will start as a ": "你的英雄将以",
        "Only letters, numbers and spaces are allowed": "仅允许字母、数字和空格",
        "A fox spirit forged in foxfire and steel. Nine burning tails and a blade that cuts the soul.": "以狐火与钢铁铸就的狐狸精魂。九条燃烧之尾与斩魂之刃。",
        "Half dragon, storm scales. A bulwark that unleashes azure lightning on all who dare advance.": "半龙之躯，风暴鳞甲。一座向所有敢于前进者释放蔚蓝闪电的壁垒。",
        "See all 13 classes (plan a build)": "查看全部13个职业（规划构筑）",
        "Still learning the trade, and the world treats it gently in the meantime.": "仍在学习中，在此期间世界会对学徒温柔以待。",
        "Wanderer Plate Boots": "旅者板甲靴",
        "Customize your hero with skins and frames.": "使用皮肤和边框自定义你的英雄。",
        "END": "耐力",
        "LCK": "幸运",
        "Level": "等级",
        "Power": "战力",
        "Rage": "怒气",
        "Vitality": "活力",
        "Max HP": "最大生命",
        "Strength": "力量",
        "Dexterity": "敏捷",
        "Magic": "魔法",
        "Constitution": "体质",
        "Defense": "防御",
        "Speed": "速度",
        "Utility": "通用",
        "Refresh": "刷新",
        "Spent": "已分配",
        "Rank": "等级",
        "Minor": "次要",
        "Notable": "显著",
        " · Dexterity": " · 敏捷",
        " · Intelligence": " · 智力",
        " · Strength": " · 力量",
        "Male": "男",
        "Female": "女",
        "Forest of Beginnings": "起源森林",
        "Ancient Ruins": "古老废墟",
        "Arcane Abyss": "秘法深渊",
        "Catacombs": "地下墓穴",
        "Cursed Fortress": "诅咒堡垒",
        "Cursed Village": "诅咒村庄",
        "Dark Mountains": "暗黑山脉",
        "Kingdom of Shadows": "暗影王国",
        "Putrid Swamp": "腐臭沼泽",
        "Sanctuary of Evil": "邪恶圣殿",
        "Blacksmith": "铁匠铺",
        "Hunting Grounds": "猎场",
        "Library": "图书馆",
        "Magic Tower": "魔法塔",
        "Training Grounds": "训练场",
        "Vault": "宝库",
        "Loadout": "装备",
        "Loot": "战利品",
        "No pending loot": "无待领取战利品",
        "No village build running": "无正在进行的建筑",
        "Quick actions": "快捷操作",
        "Raid": "团队副本",
        "See in shop": "在商城查看",
        "Set your skills": "设置你的技能",
        "Start": "开始",
        "Start adventure": "开始冒险",
        "Village": "村庄",
        "What's New": "新内容",
        "New Skins": "新皮肤",
        "New skin": "新皮肤",
        "Skins": "皮肤",
        "Frames": "边框",
        "Preview": "预览",
        "Shop": "商城",
        "Buy Crystals": "购买水晶",
        "Not enough Crystals": "水晶不足",
        "Link with Google": "关联Google账号",
        "Patch Notes": "更新日志",
        "Report a Bug": "报告Bug",
        "Share my hero": "分享我的英雄",
        "Support us": "支持我们",
        "Apply": "应用",
        "Available": "可用",
        "Passive": "被动",
        "Ultimate": "终极",
        "Universal": "通用",
        "My Class": "我的职业",
        "Go to the Guild": "前往公会",
        "Consumables": "消耗品",
        "Equipment": "装备",
        "Materials": "材料",
        "Select an item to inspect it": "选择一个物品以检视详情",
        "Select a monster to see details": "选择一个怪物查看详情",
        "Claim": "领取",
        "Accept": "接受",
        "Available cap": "可用上限",
        "Claim 30 free": "领取30瓶免费",
        "Exp": "经验",
        "Gathering (optional)": "采集（可选）",
        "Hunt drop": "狩猎掉落",
        "Medium": "中等",
        "No extra risk. Base reward.": "无额外风险。基础奖励。",
        "No modifiers.": "无修正。",
        "Normal": "普通",
        "Plan Adventure": "计划冒险",
        "Risk": "风险",
        "Total duration": "总时长",
        "Aggressive": "激进",
        "Cautious": "谨慎",
        "Deaths": "死亡次数",
        "Monsters defeated": "击败怪物",
        "Active zone": "当前区域",
        "Bonus": "奖励",
        "Tap to choose a potion": "点击选择药水",
        "Crafting": "制造",
        "Crafting Mastery": "制造精通",
        "Fish": "鱼",
        "Forge": "锻造",
        "Gathering": "采集",
        "Herb": "草药",
        "Mineral": "矿物",
        "Resources": "资源",
        "Fishing": "钓鱼",
        "Herbalism": "草药学",
        "Lumberjack": "伐木",
        "Mining": "采矿",
        "Lv 1": "等级 1",
        "Bestiary": "魔物图鉴",
        "Cards": "卡牌",
        "Emblems": "徽章",
        "Recipes": "配方",
        "Zone Mastery": "区域精通",
        "5 more to unlock the next row": "再获得5个即可解锁下一行",
        "Complete each zone's objectives to earn its emblems.": "完成每个区域的目标即可获取其徽章。",
        "Defeat 50 of each monster": "每种怪物击败50只",
        "Discover every monster": "发现所有怪物",
        "Defeat monsters to obtain their cards.": "击败怪物以获得其卡牌。",
        "No cards yet": "暂无卡牌",
        "No recipes learned yet": "未学习任何配方",
        "A preview of emblems you'll be able to earn soon.": "即将可获得的徽章预览。",
        "Coming soon": "即将推出",
        "Loading the board…": "正在加载面板…",
        "a preview of what is coming.": "即将到来的内容预览。",
        "coming soon.": "即将推出。",
        "monsters grouped by zone, revealed as you defeat them.": "按区域分组的怪物，击败后解锁。",
        "the monster Bestiary, your learned recipes, emblems and cards.": "魔物图鉴、已学配方、徽章和卡牌。",
        "the ones you have learned.": "你已经学会的。",
        "The Collection screen gathers your progress in one place": "收藏界面汇总你的所有进度",
        "Descend": "深渊探索",
        "Descend deeper or stand to secure your loot. Dying returns you to the checkpoint.": "深入更深处或停下来保住战利品。死亡将返回检查点。",
        "HP persists within a floor. Each new floor heals you to full and saves a checkpoint.": "生命值在同一层内持续扣减。每进入新一层将满血并保存检查点。",
        "Turn-based card combat. Your collection is your arsenal.": "回合制卡牌战斗。你的收藏就是你的武器库。",
        "You enter with your whole collection. 5 random cards drawn per monster.": "你携带全部收藏进入。每场怪物战斗随机抽取5张卡牌。",
        "Your deepest floor": "你的最深楼层",
        "10 contracts to accept": "10份可接受契约",
        "30 free potions available today": "今日可领取30瓶免费药水",
        "8h": "8小时",
        "Active contract": "当前契约",
        "Adventure for 8h": "冒险 8小时",
        "Available contracts": "可用契约",
        "Buy and sell with adventurers": "与冒险者交易",
        "Discard these contracts and draw a new set — once a day": "放弃这些契约并抽取新的一组——每天一次",
        "Guild supplies": "公会补给",
        "Kill 1000 monsters": "击杀1000只怪物",
        "Kill 150 in Forest of Beginnings": "在起源森林击杀150只",
        "Market": "市场",
        "Next board reset": "下次面板重置",
        "Post new contracts": "发布新契约",
        "Take contract": "接受契约",
        "You have no active contract. Take one from the board to get started.": "你没有进行中的契约。从面板中接受一份来开始吧。",
        "What are you here for?": "你此行目的为何？",
        "Without them your hero dies and the run gets cut short.": "没有药水你的英雄会死亡，冒险将被中断。",
        "You are heading out with no potions": "你出发时没有携带药水",
        "⚔ Start Adventure": "⚔ 开始冒险",
        "Pick the item; its monster gets farmed · −90% XP.": "选择物品；对应的怪物将被刷取 · −90% 经验。",
        "This zone has no items to hunt.": "此区域没有可狩猎的物品。",
        "Small HP Potion": "小型生命药水",
        "Bone Amulet": "骨制护符",
        "Bone Axe": "骨斧",
        "Bone Bow": "骨弓",
        "Bone Cloth Armor": "骨制布甲",
        "Bone Cloth Boots": "骨制布靴",
        "Bone Cloth Gloves": "骨制布手套",
        "Bone Cloth Helmet": "骨制布头盔",
        "Bone Cloth Leggings": "骨制布护腿",
        "Bone Cloth Pauldrons": "骨制布肩甲",
        "Bone Dagger": "骨制匕首",
        "Bone Earring": "骨制耳环",
        "Bone Leather Armor": "骨制皮甲",
        "Bone Leather Boots": "骨制皮靴",
        "Bone Leather Gloves": "骨制皮手套",
        "Bone Leather Helmet": "骨制皮头盔",
        "Bone Leather Leggings": "骨制皮护腿",
        "Bone Leather Pauldrons": "骨制皮肩甲",
        "Bone Mace": "骨制钉锤",
        "Bone Plate Armor": "骨制板甲",
        "Bone Plate Boots": "骨制板甲靴",
        "Bone Plate Gloves": "骨制板甲手套",
        "Bone Plate Helmet": "骨制板甲头盔",
        "Bone Plate Leggings": "骨制板甲护腿",
        "Bone Plate Pauldrons": "骨制板甲肩甲",
        "Bone Ring": "骨制戒指",
        "Bone Shield": "骨盾",
        "Bone Spear": "骨矛",
        "Bone Staff": "骨制法杖",
        "Bone Sword": "骨剑",
        "Bone Tome": "骨制魔典",
        "Bone Wand": "骨制魔杖",
        "Wanderer 2h": "旅者双手武器",
        "Wanderer Amulet": "旅者护符",
        "Wanderer Axe": "旅者斧",
        "Wanderer Bow": "旅者弓",
        "Wanderer Cloth Armor": "旅者布甲",
        "Wanderer Cloth Boots": "旅者布靴",
        "Wanderer Cloth Gloves": "旅者布手套",
        "Wanderer Cloth Helmet": "旅者布头盔",
        "Wanderer Cloth Leggings": "旅者布护腿",
        "Wanderer Cloth Pauldrons": "旅者布肩甲",
        "Wanderer Dagger": "旅者匕首",
        "Wanderer Earring": "旅者耳环",
        "Wanderer Leather Armor": "旅者皮甲",
        "Wanderer Leather Boots": "旅者皮靴",
        "Wanderer Leather Gloves": "旅者皮手套",
        "Wanderer Leather Helmet": "旅者皮头盔",
        "Wanderer Leather Leggings": "旅者皮护腿",
        "Wanderer Leather Pauldrons": "旅者皮肩甲",
        "Wanderer Mace": "旅者钉锤",
        "Wanderer Plate Armor": "旅者板甲",
        "Wanderer Plate Gloves": "旅者板甲手套",
        "Wanderer Plate Helmet": "旅者板甲头盔",
        "Wanderer Plate Leggings": "旅者板甲护腿",
        "Wanderer Plate Pauldrons": "旅者板甲肩甲",
        "Wanderer Ring": "旅者戒指",
        "Wanderer Shield": "旅者盾牌",
        "Wanderer Spear": "旅者矛",
        "Wanderer Staff": "旅者法杖",
        "Wanderer Sword": "旅者剑",
        "Wanderer Tome": "旅者魔典",
        "Wanderer Wand": "旅者魔杖",
        "Gelatinous Slime": "凝胶史莱姆",
        "Goblin Coin": "哥布林硬币",
        "Spider Silk": "蜘蛛丝",
        "Wolf Fang": "狼牙",
        "Wolf Hide": "狼皮",
        "Defeated!": "已击败！",
        "Next raid in": "下次副本在",
        "Possible Drops": "可能掉落",
        "Recipes (10% · 1 random)": "配方（10% · 随机1个）",
        "Ancient Lich": "远古巫妖",
        "Warrior": "战士",
        "Knight": "骑士",
        "Paladin": "圣骑士",
        "Rogue": "盗贼",
        "Assassin": "刺客",
        "Archer": "弓箭手",
        "Wizard": "法师",
        "Berserker": "狂战士",
        "Guardian": "守护者",
        "War Mage": "战斗法师",
        "Apprentice": "学徒",
        "Master": "大师",
        "Archmage": "大法师",
        "Veteran": "老兵",
        "Colossus": "巨人",
        "Executioner": "处刑者",
        "Scholar": "学者",
        "Hybrid": "混合",
        "Sustain": "续航",
        "Tank": "坦克",
        "Physical · Balanced": "物理 · 均衡",
        "Physical · Burst": "物理 · 爆发",
        "Physical · Constant": "物理 · 持续",
        "Agility · Balanced": "敏捷 · 均衡",
        "Agility · Burst": "敏捷 · 爆发",
        "Agility · Constant": "敏捷 · 持续",
        "Magic · Balanced": "魔法 · 均衡",
        "Magic · Burst": "魔法 · 爆发",
        "Magic · Constant": "魔法 · 持续",
        "Annihilation": "湮灭",
        "Arcane Echo": "秘法回声",
        "Arcane Power": "秘法之力",
        "Assassinate": "暗杀",
        "Bastion": "堡垒",
        "Blade Dance": "剑刃之舞",
        "Bleed": "流血",
        "Bloodlust": "嗜血",
        "Brutal Strikes": "残暴打击",
        "Carnage": "屠戮",
        "Channeling": "引导",
        "Clear Mind": "明心",
        "Collector's Eye": "收藏家之眼",
        "Combustion": "燃烧",
        "Cuirass": "胸甲",
        "Deadly Strike": "致命一击",
        "Deep Mana": "深厚法力",
        "Drive": "驱动",
        "Eternal Bastion": "永恒堡垒",
        "Focus": "专注",
        "Fortitude": "坚韧",
        "Fortune": "幸运",
        "Frenzy": "狂暴",
        "Gatherer": "采集者",
        "Greed": "贪婪",
        "Guard": "守护",
        "Honed Edge": "磨砺之刃",
        "Keen Eye": "敏锐之眼",
        "Keystone": "基石",
        "Lethal Precision": "致命精准",
        "Light Step": "轻盈步伐",
        "Living Wall": "活体之墙",
        "Merchant": "商人",
        "Midas": "点金",
        "Overload": "超载",
        "Rampart": "壁垒",
        "Reflexes": "反射",
        "Reserve": "储备",
        "Retaliation": "反击",
        "Shadow Dance": "暗影之舞",
        "Stronghold": "要塞",
        "Taunt": "嘲讽",
        "Thorns": "荆棘",
        "Titan Skin": "泰坦之肤",
        "Treasure Hunter": "宝藏猎人",
        "Unbreakable": "不屈",
        "Vampiric Edge": "吸血之刃",
        "Vigor": "活力",
        "Wall": "铁壁",
        "War Hunger": "战欲",
        "Willpower": "意志",
        "Wisdom": "智慧",
        "Endurance": "耐久",
        "Adapt": "适应",
        "Arcane Barrier": "秘法屏障",
        "Arcane Blade": "秘法之刃",
        "Arcane Overload": "秘法过载",
        "Deadly Shot": "致命射击",
        "Enchanted Edge": "附魔之刃",
        "Feline Reflexes": "猫之反射",
        "Greatsword Blow": "大剑一击",
        "Mana Flow": "法力流动",
        "Precise Edge": "精准之刃",
        "Retribution": "惩戒",
        "Rising Fury": "升腾之怒",
        "Sustaining Light": "维系之光",
        "+3 Speed per rank": "每级 +3 速度",
        "+1% Crit per rank": "每级 +1% 暴击率",
        "+4 Speed per rank": "每级 +4 速度",
        "+12% Crit, +12% Speed, −18% HP": "+12% 暴击率, +12% 速度, −18% 生命",
        "+15% damage to enemies below 30% HP": "对生命低于30%的敌人 +15% 伤害",
        "+2 HIT per rank": "每级 +2 命中",
        "+2/s resource regen per rank": "每级 +2/秒 资源回复",
        "+1.5% Spell Crit per rank": "每级 +1.5% 法术暴击",
        "+3/s resource regen per rank": "每级 +3/秒 资源回复",
        "+30% M.ATK, +40% resource cost": "+30% 魔法攻击, +40% 资源消耗",
        "+2% Damage Reduction per rank": "每级 +2% 减伤",
        "+1.5% Damage Reduction per rank": "每级 +1.5% 减伤",
        "+20% to all your damage": "所有伤害 +20%",
        "+6% chance for an epic on a drop, per rank": "每级掉落史诗物品几率 +6%",
        "+1% drop chance per rank": "每级掉落率 +1%",
        "+2.5% of your DEF added to ATK per rank": "每级将防御的2.5%转化为攻击",
        "+20% skill damage.": "+20% 技能伤害。",
        "+35% basic attack damage.": "+35% 普攻伤害。",
        "+8% to attack, defense and health.": "攻击、防御和生命 +8%。",
        "Your hits apply bleed (4% ATK/s) per rank": "你的攻击每级施加流血（每秒4%攻击力伤害）",
        "Steal 1% of damage dealt as HP per rank": "每级将造成伤害的1%转化为生命偷取",
        "Every 4th hit is a guaranteed crit": "每第4次攻击必定暴击",
        "On kill, heal 4% of your HP per rank": "击杀时每级回复4%生命",
        "20% chance for your skills to cast twice": "20%几率技能施放两次",
        "Reflect 4% of damage taken per rank": "每级反弹4%所受伤害",
        "You cannot take more than 25% of your Max HP in a single hit": "单次承受伤害不会超过最大生命的25%",
        "Above 80% HP": "生命高于80%时",
        "15% chance to dodge a hit entirely.": "15%几率完全闪避一次攻击。",
        "Basic attacks deal extra magic damage.": "普攻造成额外魔法伤害。",
        "Crits less often, but each crit is devastating.": "暴击频率较低，但每次暴击伤害毁灭性。",
        "Fast hits that crit very often, though each crit hits a bit softer.": "攻击速度极快，暴击频繁，但每次暴击伤害稍低。",
        "Heals 12% of the damage you deal.": "治疗你造成伤害的12%。",
        "Returns 25% of the damage taken to the attacker.": "将所受伤害的25%返还给攻击者。",
        "Skills recharge 18% faster.": "技能冷却加快18%。",
        "Takes 15% less damage.": "受到的伤害减少15%。",
        "The lower its health, the harder it hits": "生命越低，攻击越强",
        "below a certain HP threshold its damage ramps up.": "低于一定的生命阈值后伤害大幅提升。",
        "Build to start DEX / AGI training": "建造以开始敏捷训练",
        "Build to start INT training": "建造以开始智力训练",
        "Build to start STR / VIT training": "建造以开始力量/体质训练",
        "Build to unlock passive skills": "建造以解锁被动技能",
        "Build to open the shop": "建造以开启商店",
        "Build to unlock item crafting": "建造以解锁物品制造",
        "Build it to safely store gear in this zone": "建造以在此区域安全存放装备",
        "420 adventurers active this week": "本周有 420 名冒险者活跃",
        "Loses 50% less when defeated.": "战败损失减少50%。",
        "Each monster is revealed in the Bestiary when you defeat it. The more times you defeat it, the more it comes alive — it unlocks a breathing animation, and after many more kills, a combat one.": "每种怪物击败后在图鉴中揭示。击败次数越多，它越栩栩如生——先解锁呼吸动画，多次击杀后解锁战斗动画。",
        "+100% item drop rate for next kill": "下次击杀物品掉落率 +100%",
        "+20% ATK per zone tier for 20s": "每区域层级 +20% 攻击，持续20秒",
        "+320% damage, the road's end": "+320% 伤害，旅途的终点",
        "A reliable strike from years on the road. +20% physical damage.": "多年旅途练就的可靠一击。+20% 物理伤害。",
        "Random +50% to +200% damage": "随机 +50% 至 +200% 伤害",
        "Restore 250 HP": "恢复 250 生命",
        "Available again in 14h 49m": "14小时49分钟后再次可用",
        "Bigger contribution means better loot chances.": "贡献越大，战利品机会越好。",
        "Damage you deal counts as contribution toward the loot.": "造成的伤害计入战利品贡献。",
        "Join the active raid and your hero auto-fights the boss.": "加入当前团队副本，你的英雄会自动与Boss战斗。",
        "Raids and adventures are mutually exclusive — stop one to start the other.": "团队副本和冒险互斥——需要停止一个才能开始另一个。",
        "Raids are cooperative global boss fights. The whole community chips away at one boss's huge health pool, and everyone who contributes shares the rewards.": "团队副本是合作性的全球Boss战。整个社区共同削减一名Boss的庞大生命值，所有贡献者共享奖励。",
        "Raids run on a schedule and don't give XP or gold — they accumulate contribution and can drop exclusive loot, including legendaries.": "团队副本按时间表进行，不给经验或金币——积累贡献并可掉落专属战利品，包括传说物品。",
        "Materials and consumables are always tradeable; equipment binds on use.": "材料和消耗品始终可交易；装备使用后绑定。",
        "Only unbound items can be sold — once you equip or enhance an item it's bound. Listings are anonymous.": "只有未绑定的物品才能出售——装备或强化后物品即绑定。挂单为匿名。",
        "The Market is where players buy and sell items for gold. Browse by name, type, rarity, set or zone, and check each item's price history and charts before trading.": "市场是玩家买卖物品的地方。可以按名称、类型、稀有度、套装或区域浏览，交易前查看每个物品的价格历史和图表。",
        "A random recipe you don't know yet drops on participation. Dimmed = already learned.": "参与后随机掉落一个你尚未学会的配方。灰色 = 已学会。",
        "+20% to the active gold contract's reward. Adventures give no gold.": "当前金币契约的奖励 +20%。冒险不给金币。",
        "+10% XP · −50% loot · −50% gathering.": "+10% 经验 · −50% 战利品 · −50% 采集。",
        "+10% loot · −30% XP.": "+10% 战利品 · −30% 经验。",
        "Respec (3 free)": "重置（3次免费）",
        "Upgrade ({{0}}) · {{1}} 🪙": "升级 ({{0}}) · {{1}} 🪙",
        "A preview of emblems you'll be able to earn soon.": "即将可获得的徽章预览。",
        "classes.weapon.spear + Shield": "枪 + 盾",
        "Loading recipes…": "正在加载配方…",
        "Claiming…": "正在领取…",
        "Refreshing…": "正在刷新…",
        "Loading ranking…": "正在加载排行榜…",
        "Loading your inbox…": "正在加载收件箱…",
        "You have no emails.": "你没有任何邮件。",
        "Adventures": "冒险",
        "Classes": "职业",
        "Collection & Bestiary": "收藏与图鉴",
        "Combat": "战斗",
        "Raids": "团队副本",
        "Skills": "技能",
        "PvP": "PvP",
        "Rebirths": "转生",
        "Deepest Zone": "最深区域",
        "Raid Damage": "副本伤害",
        "← Back": "← 返回",
        "Ranking": "排行榜",
        "Alchemy": "炼金术",
        "Smithing": "锻造",
        "Jewelcrafting": "珠宝加工",
        "Leatherworking": "制皮",
        "Tailoring": "裁缝",
        "Smithing Lv 0": "锻造 等级 0",
        "Uncommon": "精良",
        "Safe tier": "安全等级",
        "Recipe needed (drop)": "需要配方（掉落）",
        "Requires Blacksmith Lv 1": "需要铁匠铺 等级 1",
        "Forge your crafted pieces up a tier. Safe up to your tier, risky above (a piece can drop a tier or shatter).": "将已制造的装备锻造提升一个等级。安全锻造至你的锻造等级，超出则有风险（装备可能降级或破碎）。",
        "No pieces to forge yet — craft one in the Crafting tab first.": "还没有可锻造的装备——先在制造标签中制造一件。",
        "Available again in {{0}}": "{{0}}后再次可用",
        "Adventures are your main loop. You plan a sequence of blocks — combat in a zone, or gathering with a profession — and your hero runs them automatically, even while the game is closed.": "冒险是核心玩法。你规划一系列任务块——在区域中战斗，或用职业采集——即使关闭游戏，你的英雄也会自动执行。",
        "Combat blocks auto-fight the zone's monsters for XP, gold and loot. Gathering blocks collect resources. Each adventure runs for a set number of hours.": "战斗块自动攻击区域怪物获取经验、金币和战利品。采集块收集资源。每次冒险持续设定的时长。",
        "Combat earns XP, gold and item drops; gathering earns resources.": "战斗获得经验、金币和物品掉落；采集获得资源。",
        "Dying costs part of the gold earned that run, never your stored gold.": "死亡会损失当次冒险获得的部分金币，不会影响已储存的金币。",
        "Progress keeps running offline (up to the offline cap) — you collect it when you return.": "离线时进度继续运行（直至离线上限）——返回时即可领取。",
        "You can stop early anytime to claim what you've earned so far.": "你可以随时提前停止以领取当前已获得的收益。",
        "Attack power comes from Strength (melee) or Intelligence (magic), through your weapon.": "攻击力取决于力量（近战）或智力（魔法），通过武器发挥作用。",
        "Combat is fully automatic. Your hero attacks on a timer set by attack speed, and damage depends on your attack stat versus the enemy's defense.": "战斗全自动进行。英雄按攻击速度设定的计时器攻击，伤害取决于你的攻击属性与敌人防御的差值。",
        "Critical hits (from Luck) deal extra damage.": "暴击（基于幸运）造成额外伤害。",
        "Defense and Vitality reduce the damage you take and raise your HP.": "防御和活力减少所受伤害并提高生命值。",
        "Dying far above your level brings harsher penalties.": "远超自身等级时死亡会带来更严厉的惩罚。",
        "Equip active skills to fire special effects during the fight and passive skills for permanent bonuses. Potions auto-heal when your HP drops below a threshold.": "装备主动技能可在战斗中触发特殊效果，被动技能提供永久加成。药水在生命低于阈值时自动使用。",
        "Each class has an open passive tree — spend skill points from leveling for permanent stat boosts and build-defining perks.": "每个职业都有一套开放的被动技能树——花费升级获得的技能点来获得永久属性加成和定义构筑的核心天赋。",
        "Pick one of the 13 classes during character creation; you can't change it later (rebirth excluded), so plan ahead. Each class gains a unique set of skills and its own passive tree.": "在角色创建时从13个职业中选择一个；之后无法更改（转生除外），请提前规划。每个职业拥有独特的技能组合和被动树。",
        "damage, buffs, heals…).": "伤害、增益、治疗等）。",
        "passive (always-on bonuses you unlock with skill points) and active (special effects that fire automatically in combat).": "被动（消耗技能点解锁的常驻加成）和主动（战斗中自动触发的特殊效果）。",
        "spend skill points on a tree for permanent bonuses.": "消耗技能点解锁技能树上的永久加成。",
        "Skills are divided in two layers —": "技能分为两个层面——",
        "Each profession levels independently and gathers faster as it grows.": "每个专业独立升级，等级越高采集越快。",
        "Gathering lets your hero collect resources during adventures, as an alternative to combat — just add a gathering block to your adventure plan.": "采集让你的英雄在冒险中收集资源，是战斗的替代方案——只需在冒险计划中添加采集块即可。",
        "Gathering runs offline too, like combat.": "采集同样支持离线进行，和战斗一样。",
        "Mining → ore. Woodcutting → wood. Fishing → fish. Herbalism → herbs.": "采矿→矿石。伐木→木材。钓鱼→鱼。草药学→草药。",
        "Resources are spent enhancing gear at the Blacksmith.": "资源用于在铁匠铺强化装备。",
        "There are four gathering professions; each levels up as you gather and yields more over time. Resources feed crafting and gear enhancement.": "有四种采集专业；随采集升级，产量随时间增加。资源用于制造和装备强化。",
        "A piece starts as common and you raise its tier by forging it (step forging). Up to your Smithy's safe tier the push is guaranteed; above it, it's risky — the piece can drop a tier or shatter.": "装备起始为普通品质，通过逐步锻造提升品质。在铁匠铺安全等级内必定成功；超出则有风险——装备可能降级或破碎。",
        "Armor unlocks by Smithing level; weapons and jewelry need recipes obtained as drops.": "护甲通过锻造等级解锁；武器和珠宝需要掉落获得的配方。",
        "Crafting is instant and caps at epic (legendaries come from raids).": "制造为即时完成，最高史诗品质（传说品质来自团队副本）。",
        "Crafting turns your profession resources and drop materials into gear and consumables, with a guaranteed minimum rarity — unlike random drops, you know you won't get junk.": "制造将专业资源和掉落材料转化为装备和消耗品，有保证的最低稀有度——与随机掉落不同，你不会得到垃圾。",
        "Each push consumes materials, whether it succeeds or not.": "每次锻造尝试都会消耗材料，无论成功与否。",
        "Higher Smithing = better safe tier (common → uncommon → rare → epic).": "锻造等级越高，安全等级越高（普通→精良→稀有→史诗）。",
        "You can resume forging an already-crafted piece from 'Forgeable pieces'.": "你可以从「可锻造装备」中继续锻造已制造的装备。",
        "Higher Smithing = better guaranteed tier. Craft a base piece, then forge it up — safe up to your tier, risky above. Armor unlocks by Smithing level; weapons & jewelry need recipes (drops).": "锻造等级越高，保证品质越好。制造基础装备，然后逐步锻造——安全锻造至你的锻造等级，超出有风险。护甲通过锻造等级解锁；武器和珠宝需要配方（掉落获得）。",
        "Blacksmith — buy gear, enhance it, and repair durability (cheaper at higher levels).": "铁匠铺——购买装备、强化并修复耐久（等级越高越便宜）。",
        "Each training building lets you pick which of its two attributes to focus; reassigning the focus costs gold.": "每个训练建筑让你选择专注两者中的哪个属性；重新分配专注需要消耗金币。",
        "Hunting Grounds — trains Dexterity and Agility (ranged archetype).": "猎场——训练敏捷和灵巧（远程原型）。",
        "Library — trains Intelligence and Luck (magic archetype).": "图书馆——训练智力和幸运（魔法原型）。",
        "Magic Tower — unlocks passive bonuses.": "魔法塔——解锁被动加成。",
        "Shop — buy potions and consumables.": "商店——购买药水和消耗品。",
        "The village is your home base in each zone. You upgrade its buildings with gold, and each one unlocks or improves a system.": "村庄是你在每个区域的基地。用金币升级建筑，每个建筑解锁或改进一个系统。",
        "Training Field — trains Strength and Vitality (melee archetype).": "训练场——训练力量和活力（近战原型）。",
        "Vault — safe storage for your items, kept per zone.": "宝库——安全的物品存放处，每个区域独立。",
        "Bought items arrive in your Email; sale gold is paid to you instantly.": "购买的物品送达至你的邮箱；出售所得金币即时到账。",
        "Buy a specific item by its stats, or place a buy order by item + rarity.": "按属性购买特定物品，或按物品+稀有度下买单。",
        "Each rarity has a minimum price; items show real price charts.": "每种稀有度有最低价格；物品显示真实价格图表。",
        "List items for a fixed price, or place a buy order and let the order book match it. Selling pays a small commission and listing fee (both burned to keep gold healthy).": "以固定价格挂售物品，或下单购买让订单簿匹配。出售支付少量佣金和上架费（均销毁以维持金币经济健康）。",
        "Benzink2": "Benzink2",
        "Bueniann": "Bueniann",
        "Camilovib": "Camilovib",
        "ChikoMDF": "ChikoMDF",
        "Essential": "Essential",
        "Hecate": "Hecate",
        "IdkU": "IdkU",
        "Inorikae": "Inorikae",
        "Jeussn": "Jeussn",
        "Kakostappen": "Kakostappen",
        "Keru": "Keru",
        "Kubby": "Kubby",
        "Lelallo": "Lelallo",
        "Melman": "Melman",
        "Ness": "Ness",
        "Osckarito32": "Osckarito32",
        "Peo": "Peo",
        "RandomSt": "RandomSt",
        "SrExis": "SrExis",
        "Toops": "Toops",
        "Vanklar": "Vanklar",
        "Zaelot": "Zaelot",
        "dWatson": "dWatson",
        "hoholic": "hoholic",
        "piscolitaa": "piscolitaa",
        "A preview of emblems you’ll be able to earn soon.": "即将可获得的徽章预览。",
        "Tip": "提示",
        "Agility — attack speed and evasion. Trained at the Hunting Grounds.": "灵巧——攻击速度和闪避。在猎场训练。",
        "Dexterity — ranged and finesse attack power. Trained at the Hunting Grounds.": "敏捷——远程和灵巧攻击力。在猎场训练。",
        "How to train them": "如何训练",
        "Intelligence — magic attack power. Trained at the Library.": "智力——魔法攻击力。在图书馆训练。",
        "Luck — critical chance and drop luck. Trained at the Library.": "幸运——暴击率和掉落运气。在图书馆训练。",
        "Strength — physical attack power. Trained at the Training Field.": "力量——物理攻击力。在训练场训练。",
        "Vitality — max HP and survivability. Trained at the Training Field.": "活力——最大生命和生存能力。在训练场训练。",
        "Your hero has 6 attributes that drive combat and survival. They grow as you use them and through the training buildings in your village.": "你的英雄拥有6项决定战斗和生存的属性。使用武器和技能时会自然成长，也可通过村庄的训练建筑提升。",
        "each attribute is trained at a specific building, grouped by archetype. You also gain attribute XP from fighting with weapons and skills that scale that attribute, and you can spend prestige points after a rebirth.": "每项属性在特定建筑中训练，按原型分组。你还可以通过使用对应属性加成的武器和技能战斗获得属性经验，转生后可消耗声望点数。",
        "train the attributes your class actually uses — a Mage trains Intelligence and Luck at the Library, a Warrior trains Strength and Vitality at the Training Field.": "训练你的职业实际使用的属性——法师在图书馆训练智力和幸运，战士在训练场训练力量和活力。",
        "Active skills": "主动技能",
        "Passive skills": "被动技能",
        "Skills come in two kinds": "技能分为两种",
        "You can respec your skills for gold.": "你可以花费金币重置技能。",
        "You equip up to 4 active skills in slots. Each skill needs certain attribute levels, which should match your class’s archetype.": "你最多装备4个主动技能。每个技能需要一定的属性等级，应与你的职业原型匹配。",
        "auto-fire on cooldown during fights (damage, buffs, heals…).": "在战斗中冷却完成后自动施放（伤害、增益、治疗等）。",
        "A skill’s attribute requirement matches its class’s archetype.": "技能的属性需求与其职业原型匹配。",
        "A skill’s attribute requirement matches its class (e.g. a Berserker skill needs Strength).": "技能的属性需求与其职业匹配（例如狂战士技能需要力量）。",
        "Each class leans on an archetype": "每个职业基于一种原型",
        "Magic (wand/staff/tome) → Intelligence classes (Mage, Archmage, War Mage, Arcane Blade).": "魔法（魔杖/法杖/魔典）→ 智力职业（法师、大法师、战斗法师、秘法之刃）。",
        "Melee (axe/sword/mace + shield) → Strength classes (Warrior, Berserker, Knight, Paladin).": "近战（斧/剑/钉锤+盾牌）→ 力量职业（战士、狂战士、骑士、圣骑士）。",
        "Ranged/finesse (bow, daggers) → Dexterity classes (Archer, Assassin, Rogue).": "远程/灵巧（弓、匕首）→ 敏捷职业（弓箭手、刺客、盗贼）。",
        "Strength (melee), Dexterity (ranged/daggers) or Intelligence (magic). That archetype sets which attributes you train and which skills you can use.": "力量（近战）、敏捷（远程/匕首）或智力（魔法）。该原型决定了你训练哪些属性及可使用哪些技能。",
        "Your class is decided by the weapons you equip — there’s no class menu. Change your weapon combo and your identity changes with it.": "你的职业由所装备的武器决定——没有职业菜单。更换武器组合，你的身份随之改变。",
        "Bound = can’t be traded; unused gear can be sold on the Market.": "绑定=不可交易；未使用过的装备可在市场出售。",
        "Durability drops with use; a broken piece gives no stats until repaired.": "耐久在使用中下降；破损的装备在修复前不提供属性。",
        "Equip items to boost your stats — higher rarity means stronger bonuses. You can enhance gear at the Blacksmith for more power and repair its durability there too.": "装备物品以强化属性——稀有度越高加成越强。你可以在铁匠铺强化装备以获得更高战力，也可修复耐久。",
        "Equipped legendary and epic gear glows (gold and purple).": "已装备的传说和史诗装备会发光（金色和紫色）。",
        "Equipping or enhancing an item binds it to you permanently — bound items can’t be sold on the Market. Gear you’ve never used stays tradeable.": "装备或强化物品后会永久绑定——绑定物品不可在市场出售。从未使用过的装备保持可交易状态。",
        "Gear drops from combat with a rolled rarity (common to legendary) and random secondary stats, so two items of the same type can differ.": "装备从战斗中掉落，带有随机稀有度（普通至传说）和随机副属性，因此同类型的两件物品也可能不同。",
        "Rarity (common/uncommon/rare/epic/legendary) scales the item’s bonuses.": "稀有度（普通/精良/稀有/史诗/传说）决定物品的加成强度。",
        "Equip active skills to fire special effects during the fight and passive skills for permanent bonuses. Potions auto-heal when your HP runs low.": "装备主动技能可在战斗中触发特殊效果，被动技能提供永久加成。药水在生命值过低时自动使用。",
        "A skill's attribute requirement matches its class's archetype.": "技能的属性需求与其职业原型匹配。",
        "A skill's attribute requirement matches its class (e.g. a Berserker skill needs Strength).": "技能的属性需求与其职业匹配（例如狂战士技能需要力量）。",
        "Bound = can't be traded; unused gear can be sold on the Market.": "绑定=不可交易；未使用过的装备可在市场出售。",
        "Rarity (common/uncommon/rare/epic/legendary) scales the item's bonuses.": "稀有度（普通/精良/稀有/史诗/传说）决定物品的加成强度。",
        "You equip up to 4 active skills in slots. Each skill needs certain attribute levels, which should match your class's archetype.": "你最多装备4个主动技能。每个技能需要一定的属性等级，应与你的职业原型匹配。",
        "Your class is decided by the weapons you equip — there's no class menu. Change your weapon combo and your identity changes with it.": "你的职业由所装备的武器决定——没有职业菜单。更换武器组合，你的身份随之改变。",
        "Equipping or enhancing an item binds it to you permanently — bound items can't be sold on the Market. Gear you've never used stays tradeable.": "装备或强化物品后会永久绑定——绑定物品不可在市场出售。从未使用过的装备保持可交易状态。",
        };
    }

    window.cnResourceNames = window.cnResourceNames || {};
    window.cnRegReplace = window.cnRegReplace || new Map();
    window.cnPrefix = window.cnPrefix || {};
    window.cnPostfix = window.cnPostfix || {};
    window.cnExcludeWhole = window.cnExcludeWhole || [];
    window.cnExcludePostfix = window.cnExcludePostfix || [];
    window.cnCategories = window.cnCategories || {};

    // ============================================================
    // 核心翻译引擎
    // ============================================================
    var cnConfig = window.cnConfig;

    function normalizeForMatching(str) {
        if (typeof str !== 'string') return str;
        var result = str;
        if (cnConfig.trimSpaces) result = result.trim();
        return result.split(/\s+/).map(function(word) {
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
        if (regex.flags.indexOf('i') !== -1) return regex;
        return new RegExp(regex.source, regex.flags + 'i');
    }

    var _categoryIndex = {};
    function rebuildCategoryIndex() {
        _categoryIndex = {};
        if (window.cnCategories) {
            for (var catName in window.cnCategories) {
                var dict = window.cnCategories[catName];
                if (typeof dict !== 'object') continue;
                var catMap = new Map();
                for (var original in dict) {
                    var chinese = dict[original];
                    if (typeof chinese !== 'string') continue;
                    catMap.set(normalizeForMatching(original), chinese);
                }
                _categoryIndex[catName] = catMap;
            }
        }
        if (window.cnItems) {
            for (var key in window.cnItems) {
                if (!key) continue;
                var val = window.cnItems[key];
                if (Array.isArray(val) && val.length >= 2) {
                    var ch = val[0], cat = val[1];
                    if (typeof ch === 'string' && typeof cat === 'string') {
                        if (!_categoryIndex[cat]) _categoryIndex[cat] = new Map();
                        _categoryIndex[cat].set(normalizeForMatching(key), ch);
                    }
                }
            }
        }
    }

    function getCategoryTranslation(categoryName, rawValue) {
        if (!_categoryIndex[categoryName]) return null;
        var trimmed = rawValue.trim();
        var catMap = _categoryIndex[categoryName];
        var nv = normalizeForMatching(trimmed);
        if (catMap.has(nv)) return catMap.get(nv);
        if (trimmed.slice(-1) === 's') {
            var ns = normalizeForMatching(trimmed.slice(0, -1));
            if (catMap.has(ns)) return catMap.get(ns);
        }
        return null;
    }

    function isNumberString(str) {
        str = str.trim();
        return str !== '' && /^[+-]?\d+(?:\.\d+)?$/.test(str);
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
        for (var key in window.cnItems) {
            if (!key) continue;
            var val = window.cnItems[key];
            if (Array.isArray(val)) {
                if (typeof val[0] === 'string') _staticIndex[normalizeForMatching(key)] = val[0];
                continue;
            }
            if (typeof val !== 'string') continue;
            if (key.indexOf('{{') !== -1) {
                var tpl = templateToRegex(key);
                _templateList.push({ srcTemplate: key, translation: val, regex: tpl.regex, varNames: tpl.varNames });
            } else {
                _staticIndex[normalizeForMatching(key)] = val;
            }
        }
        _templateList.sort(function(a, b) {
            var aPre = a.srcTemplate.indexOf('{{'), bPre = b.srcTemplate.indexOf('{{');
            if (aPre === -1) aPre = a.srcTemplate.length;
            if (bPre === -1) bPre = b.srcTemplate.length;
            return bPre - aPre;
        });
        for (var k in window.cnItems) {
            if (typeof window.cnItems[k] === "object" && !Array.isArray(window.cnItems[k]))
                _tagTargets.push({ key: k, val: window.cnItems[k] });
        }
        _resourceNameIndex = {};
        if (window.cnResourceNames) {
            for (var rk in window.cnResourceNames)
                _resourceNameIndex[normalizeForMatching(rk)] = window.cnResourceNames[rk];
        }
        rebuildCategoryIndex();
    }

    function templateToRegex(template) {
        var varNames = [], escaped = '', lastIndex = 0;
        while (true) {
            var start = template.indexOf('{{', lastIndex);
            if (start === -1) { escaped += template.slice(lastIndex).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); break; }
            var end = template.indexOf('}}', start);
            if (end === -1) break;
            escaped += template.slice(lastIndex, start).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            var varName = template.slice(start + 2, end);
            varNames.push(varName);
            escaped += (varName === '*' || varName.indexOf('*|') === 0 || varName.indexOf('*|') !== -1) ? '(.+)' : '(.+?)';
            lastIndex = end + 2;
        }
        return { regex: new RegExp('^' + escaped + '$', cnConfig.ignoreCase ? 'i' : ''), varNames: varNames };
    }

    function parseListPlaceholder(varName) {
        var sepRegex = /\s*,\s*/, joinStr = '、';
        if (varName === '*') return { sepRegex: sepRegex, joinStr: joinStr };
        if (varName.indexOf('*|') === 0) {
            var parts = varName.slice(2).split('|');
            var sepPart = parts[0] !== undefined ? parts[0] : '';
            var joinPart = parts[1] !== undefined ? parts[1] : '';
            if (sepPart !== '') {
                var regexMatch = sepPart.match(/^\/(.+)\/([gimuy]*)$/);
                if (regexMatch) {
                    try { sepRegex = new RegExp(regexMatch[1], regexMatch[2]); }
                    catch (e) { sepRegex = new RegExp('\\s*' + sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*'); }
                } else {
                    sepRegex = new RegExp('\\s*' + sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*');
                }
            }
            if (joinPart !== '') joinStr = joinPart;
        }
        return { sepRegex: sepRegex, joinStr: joinStr };
    }

    function applyTemplateTranslation(sourceText, srcTemplate, tgtTemplate, node, pRegex, pVarNames) {
        var regex = pRegex, varNames = pVarNames;
        if (!regex) { var tpl = templateToRegex(srcTemplate); regex = tpl.regex; varNames = tpl.varNames; }
        var match = sourceText.match(regex);
        if (!match) return null;
        var values = {};
        for (var i = 0; i < varNames.length; i++) {
            var vn = varNames[i], raw = match[i + 1] || '';
            if (vn === '*' || vn.indexOf('*|') === 0) {
                var p = parseListPlaceholder(vn);
                var items = raw.split(p.sepRegex).map(function(s){return s.trim();}).filter(function(s){return s;});
                values[vn] = items.map(function(item){return cnItem(item, node);}).join(p.joinStr);
            } else if (vn === '%d') {
                if (!isNumberString(raw)) return null;
                values[vn] = raw.trim();
            } else {
                var catName = vn, catOnly = false, listMode = false, ls = /\s*,\s*/, lj = '、';
                var si = catName.indexOf('*');
                if (si !== -1) {
                    catOnly = true;
                    var sfx = catName.slice(si); catName = catName.slice(0, si);
                    if (sfx.indexOf('*|') === 0) { listMode = true; var lp = parseListPlaceholder(sfx); ls = lp.sepRegex; lj = lp.joinStr; }
                }
                if (listMode) {
                    var li = raw.split(ls).map(function(s){return s.trim();}).filter(function(s){return s;});
                    values[vn] = li.map(function(item){var t=getCategoryTranslation(catName,item);return t!==null?t:item.trim();}).join(lj);
                } else {
                    var ct = getCategoryTranslation(catName, raw);
                    values[vn] = ct !== null ? ct : (catOnly ? raw.trim() : cnItem(raw ? raw.trim() : '', node));
                }
            }
        }
        return tgtTemplate.replace(/\{\{([^}]+)\}\}/g, function(_, vn) {
            if (values[vn] !== undefined) return values[vn];
            var idx = varNames.indexOf(vn);
            return (idx !== -1 && match[idx + 1]) ? match[idx + 1].trim() : '';
        });
    }

    function translateNoun(text) {
        if (!window.cnResourceNames) return null;
        var trimmed = text.trim();
        if (trimmed === "") return null;
        if (window.cnResourceNames.hasOwnProperty(text)) return window.cnResourceNames[text];
        if (window.cnResourceNames.hasOwnProperty(trimmed)) return window.cnResourceNames[trimmed];
        var nk = normalizeForMatching(trimmed);
        if (_resourceNameIndex.hasOwnProperty(nk)) return _resourceNameIndex[nk];
        if (trimmed.slice(-1) === 's') {
            var ns = normalizeForMatching(trimmed.slice(0, -1));
            if (_resourceNameIndex.hasOwnProperty(ns)) return _resourceNameIndex[ns];
        }
        return null;
    }

    function autoTranslateResourceName(text) {
        if (!window.cnResourceNames) return null;
        var m = text.match(/^([A-Za-z][A-Za-z\s]+):\s*(.+)$/i);
        if (m) { var nk = normalizeForMatching(m[1].trim()); if (_resourceNameIndex.hasOwnProperty(nk)) return _resourceNameIndex[nk] + '：' + m[2]; }
        m = text.match(/^(\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
        if (m) { var nk2 = normalizeForMatching(m[2].trim()); if (_resourceNameIndex.hasOwnProperty(nk2)) return m[1] + ' ' + _resourceNameIndex[nk2]; }
        return null;
    }

    function cnItemByTag(text, itemgroup, node, textori) {
        for (var i in itemgroup) {
            if (i[0] === '.') {
                for (var cn = node; cn; cn = (cn.parentElement && cn.parentElement !== document.documentElement) ? cn.parentElement : null)
                    if (cn.classList && cn.classList.contains(i.substr(1))) return itemgroup[i];
            } else if (i[0] === '#') {
                for (var cn2 = node; cn2; cn2 = (cn2.parentElement && cn2.parentElement !== document.documentElement) ? cn2.parentElement : null)
                    if (cn2.id === i.substr(1)) return itemgroup[i];
            } else if (i[0] === '$') {
                if (document.querySelector(i.substr(1)) !== null) return itemgroup[i];
            } else if (i[0] === '*') {
                if (textori.indexOf(i.substr(1)) !== -1) return itemgroup[i];
            }
        }
        return null;
    }

    function cnItem(text, node) {
        if (typeof text !== "string") return text;
        if (_transCache.hasOwnProperty(text)) return _transCache[text];
        var textori = text, text_prefix = "", text_postfix = "", text_excl_post = "";

        for (var prefix in window.cnPrefix) {
            if (text.length >= prefix.length && ignoreFirstLetterCaseEqual(text.substr(0, prefix.length), prefix)) {
                text_prefix += window.cnPrefix[prefix]; text = text.substr(prefix.length);
            }
        }
        for (var postfix in window.cnPostfix) {
            if (text.length >= postfix.length && ignoreFirstLetterCaseEqual(text.substr(-postfix.length), postfix)) {
                text_postfix = window.cnPostfix[postfix] + text_postfix; text = text.substr(0, text.length - postfix.length); break;
            }
        }
        for (var ei = 0; ei < window.cnExcludePostfix.length; ei++) {
            var er = addIgnoreCaseFlag(window.cnExcludePostfix[ei]), erm = text.match(er);
            if (erm) { text_excl_post = erm[0] + text_excl_post; text = text.substr(0, text.length - erm[0].length); }
        }
        for (var xi = 0; xi < window.cnExcludeWhole.length; xi++)
            if (addIgnoreCaseFlag(window.cnExcludeWhole[xi]).test(text))
                return _transCache[textori] = text_prefix + text + text_excl_post + text_postfix;

        var normText = normalizeForMatching(text);
        if (_staticIndex.hasOwnProperty(normText))
            return _transCache[textori] = text_prefix + _staticIndex[normText] + text_excl_post + text_postfix;

        var regIter = window.cnRegReplace.entries(), rn = regIter.next();
        while (!rn.done) {
            var rk = rn.value[0], rv = rn.value[1], irk = addIgnoreCaseFlag(rk);
            if (irk.test(text)) {
                var rep = typeof rv === 'function' ? rv(text.match(irk), text, node) : cnItem(text.replace(irk, rv), node);
                return _transCache[textori] = text_prefix + rep + text_excl_post + text_postfix;
            }
            rn = regIter.next();
        }

        for (var ti = 0; ti < _templateList.length; ti++) {
            var tm = _templateList[ti], tr = applyTemplateTranslation(text, tm.srcTemplate, tm.translation, node, tm.regex, tm.varNames);
            if (tr !== null) return _transCache[textori] = text_prefix + tr + text_excl_post + text_postfix;
        }
        for (var gi = 0; gi < _tagTargets.length; gi++) {
            var tg = _tagTargets[gi], tgr = cnItemByTag(tg.key, tg.val, node, textori);
            if (tgr !== null) return _transCache[textori] = text_prefix + tgr + text_excl_post + text_postfix;
        }

        var nounR = translateNoun(text);
        if (nounR !== null) return _transCache[textori] = text_prefix + nounR + text_excl_post + text_postfix;
        var autoR = autoTranslateResourceName(text);
        if (autoR !== null) return _transCache[textori] = text_prefix + autoR + text_excl_post + text_postfix;

        if (!window.cnItems._OTHER_) window.cnItems._OTHER_ = [];
        if (window.cnItems._OTHER_.indexOf(text) === -1 && window.cnItems._OTHER_.length < 10000) {
            window.cnItems._OTHER_.push(text); window.cnItems._OTHER_.sort();
        }
        return _transCache[textori] = text_prefix + text + text_excl_post + text_postfix;
    }

    // ============================================================
    // 辅助工具
    // ============================================================
    window.CN_Helper = {
        getUntranslatedList: function() { return window.cnItems._OTHER_ || []; },
        exportUntranslated: function(filename) {
            filename = filename || "untranslated.json";
            var data = JSON.stringify(window.cnItems._OTHER_, null, 2);
            var blob = new Blob([data], { type: "application/json" });
            var url = URL.createObjectURL(blob);
            var a = document.createElement("a"); a.href = url; a.download = filename; a.click();
            URL.revokeObjectURL(url);
        },
        addTranslations: function(translations) {
            for (var eng in translations) window.cnItems[eng] = translations[eng];
            rebuildIndices();
        },
        extendResourceNames: function(more) {
            if (!window.cnResourceNames) window.cnResourceNames = {};
            for (var k in more) window.cnResourceNames[k] = more[k];
            rebuildIndices();
        },
        rebuildIndex: rebuildIndices,
        setConfig: function(cfg) { for (var k in cfg) cnConfig[k] = cfg[k]; rebuildIndices(); },
        getConfig: function() { var o = {}; for (var k in cnConfig) o[k] = cnConfig[k]; return o; },
        extendCategories: function(more) {
            if (!window.cnCategories) window.cnCategories = {};
            for (var catName in more) {
                if (!window.cnCategories[catName]) window.cnCategories[catName] = {};
                for (var k in more[catName]) window.cnCategories[catName][k] = more[catName][k];
            }
            rebuildCategoryIndex();
        }
    };

    // ============================================================
    // 页面汉化 + MutationObserver
    // ============================================================
    var transTaskMgr = {
        tasks: [],
        addTask: function(node, attr, text) { this.tasks.push({ node: node, attr: attr, text: text }); },
        doTask: function() { var t; while (t = this.tasks.pop()) { try { t.node[t.attr] = t.text; } catch(e) {} } }
    };

    function TransSubTextNode(node) {
        if (!node.childNodes || !node.childNodes.length) return;
        var children = node.childNodes;
        for (var i = 0; i < children.length; i++) {
            var sub = children[i];
            if (sub.nodeName === "#text") {
                var txt = sub.textContent, ct = cnItem(txt, sub);
                if (ct !== txt) transTaskMgr.addTask(sub, 'textContent', ct);
            } else if (sub.nodeName !== "SCRIPT" && sub.nodeName !== "STYLE" && sub.nodeName !== "TEXTAREA") {
                if (!sub.childNodes || !sub.childNodes.length) {
                    var it = sub.innerText, ci = cnItem(it, sub);
                    if (ci !== it) transTaskMgr.addTask(sub, 'innerText', ci);
                } else {
                    TransSubTextNode(sub);
                }
            }
        }
    }

    function startHanhua() {
        if (!document.body) { setTimeout(startHanhua, 50); return; }
        rebuildIndices();
        console.log("锅巴汉化 v1.0 已启动 — DOM + Canvas 2D 汉化");

        try { TransSubTextNode(document.body); transTaskMgr.doTask(); } catch(e) {}

        var obsCfg = { attributes: false, characterData: true, childList: true, subtree: true };
        var target = document.body;
        var observer = new MutationObserver(function(mutations) {
            observer.disconnect();
            for (var mi = 0; mi < mutations.length; mi++) {
                var m = mutations[mi];
                if (m.target.nodeName === "SCRIPT" || m.target.nodeName === "STYLE" || m.target.nodeName === "TEXTAREA") continue;
                if (m.target.nodeName === "#text") {
                    try { m.target.textContent = cnItem(m.target.textContent, m.target); } catch(e) {}
                } else if (!m.target.childNodes || !m.target.childNodes.length) {
                    try { if (m.target.innerText) m.target.innerText = cnItem(m.target.innerText, m.target); } catch(e) {}
                } else if (m.addedNodes && m.addedNodes.length) {
                    for (var ni = 0; ni < m.addedNodes.length; ni++) {
                        var node = m.addedNodes[ni];
                        if (node.nodeName === "#text") {
                            try { node.textContent = cnItem(node.textContent, node); } catch(e) {}
                        } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                            if (!node.childNodes || !node.childNodes.length) {
                                try { if (node.innerText) node.innerText = cnItem(node.innerText, node); } catch(e) {}
                            } else { TransSubTextNode(node); }
                        }
                    }
                }
            }
            transTaskMgr.doTask();
            observer.observe(target, obsCfg);
        });
        observer.observe(target, obsCfg);
    }

    // ============================================================
    // Canvas 2D 文本汉化钩子
    // ============================================================
    (function() {
        var origGetContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function() {
            var contextType = arguments[0];
            var ctx = origGetContext.apply(this, arguments);
            if (contextType === '2d' && ctx && !ctx.__cnHooked) {
                ctx.__cnHooked = true;
                var origFillText = ctx.fillText;
                var origStrokeText = ctx.strokeText;
                var origMeasureText = ctx.measureText;
                ctx.fillText = function(text, x, y, maxWidth) {
                    if (maxWidth !== undefined) return origFillText.call(this, cnItem(text), x, y, maxWidth);
                    return origFillText.call(this, cnItem(text), x, y);
                };
                ctx.strokeText = function(text, x, y, maxWidth) {
                    if (maxWidth !== undefined) return origStrokeText.call(this, cnItem(text), x, y, maxWidth);
                    return origStrokeText.call(this, cnItem(text), x, y);
                };
                ctx.measureText = function(text) {
                    return origMeasureText.call(this, cnItem(text));
                };
            }
            return ctx;
        };
    })();

    // ============================================================
    // 启动
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startHanhua);
    } else {
        startHanhua();
    }
})();
