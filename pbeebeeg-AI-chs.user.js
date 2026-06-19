// ==UserScript==
// @name         PBeeBeeG 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 PBeeBeeG (https://pbeebeeg.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game PBeeBeeG.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://www.zed.city/icons/favicon.svg
// @license      MIT
// @include      *https://pbeebeeg.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/pbeebeeg-AI-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/pbeebeeg-AI-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/06/04 15:27
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
"\n                    Permanent solo-play mode. No player trading, no global market, and solo Swarms (guilds) only. This choice is ": "\n                    永久单人模式。无玩家交易、无全球市场，仅限单人蜂群（公会）。此选择是 ",
"\n                Begin Adventure\n            ": "\n                开始冒险\n            ",
"\n                Quick-start as a ": "\n                快速开始为 ",
"\n            Enter your email to receive a recovery link.\n        ": "\n            输入你的邮箱以接收恢复链接。\n        ",
". Your progress is cached locally on this device. No password needed, but data may be lost if browser cache is cleared.\n                ": "。你的进度缓存在此设备本地。无需密码，但清除浏览器缓存可能导致数据丢失。\n                ",
"Apprentice Account": "学徒账号",
"Confirm Password": "确认密码",
"Email Address": "邮箱地址",
"Enter Game": "进入游戏",
"Forgot Password?": "忘记密码？",
"Guest": "游客",
"NEW RECRUITS": "新兵招募",
"New Key": "新密钥",
"New Password": "新密码",
"PBeeBeeG Login": "PBeeBeeG 登录",
"Password": "密码",
"Recovery": "恢复",
"Reset Password": "重置密码",
"Return to Login": "返回登录",
"Send Link": "发送链接",
"Username or Email": "用户名或邮箱",
"permanent": "永久",
"⚓ Enable Ironbee Challenge": "⚓ 启用铁蜂挑战",
"⚠️ UNREGISTERED GUEST ⚠️": "⚠️ 未注册游客 ⚠️",
"\n                                        Level: ": "\n                                        等级：",
"\n                                        Risk\n                                    ": "\n                                        风险\n                                    ",
"\n                                    Apply\n                                ": "\n                                    应用\n                                ",
"\n                                    LEVEL ": "\n                                    等级 ",
"\n                                    Max Bee Level: ": "\n                                    蜜蜂最高等级：",
"\n                                  Confirm reassign all Bees (Actions menu)\n                              ": "\n                                  确认重新分配所有蜜蜂（操作菜单）\n                              ",
"\n                                \"The central soundboard amplifies the collective vibrations, aligning all worker bees in absolute temporal unity.\"\n                            ": "\n                                \"中央音板放大集体振动，使所有工蜂在绝对的时间统一中对齐。\"\n                            ",
"\n                                Bees recovering from expedition injuries. Recovery time varies based on expedition duration.\n                            ": "\n                                蜜蜂正在从远征伤势中恢复。恢复时间取决于远征时长。\n                            ",
"\n                                Change an existing bee's expedition role. Cost: ": "\n                                更改现有蜜蜂的远征角色。费用：",
"\n                                Duration: ": "\n                                持续时间：",
"\n                                Launch Modifiers (Max 2 - No duplicates)\n                            ": "\n                                发射修正器（最多2个 - 不可重复）\n                            ",
"\n                                Level up bees with full XP. Requires ": "\n                                为满经验的蜜蜂升级。需要",
"\n                                Lvl: ": "\n                                等级：",
"\n                                No bees selected\n                            ": "\n                                未选择蜜蜂\n                            ",
"\n                                Pop: ": "\n                                人口：",
"\n                                Reassign All\n                            ": "\n                                全部重新分配\n                            ",
"\n                                Reassign and upgrade bee traits. Traits can be leveled up to the level of your Bee Academy, with a current max of Level 5. Reassignment costs scale with Hive Level and has a 24h cooldown. Upgrades increase bonus by 1%.\n                            ": "\n                                重新分配并升级蜜蜂特性。特性最高可升到蜂学院的等级，当前最高5级。重新分配费用随蜂巢等级增长，冷却24小时。升级每次增加1%加成。\n                            ",
"\n                                Restore defeated bees to active duty. Cost: ": "\n                                恢复战败蜜蜂重新服役。费用：",
"\n                                Select Party (Max 6 Bees) - Only trained & healthy bees can be selected for Expeditions.\n                            ": "\n                                选择队伍（最多6只蜜蜂）- 只有训练有素且健康的蜜蜂才能被选入远征。\n                            ",
"\n                                Send Feedback\n                            ": "\n                                发送反馈\n                            ",
"\n                                Transform a Tradeskill Bee into a specialized role. Cost: ": "\n                                将技能蜜蜂转化为专精角色。费用：",
"\n                                ⏳ Calculating...\n                            ": "\n                                ⏳ 计算中……\n                            ",
"\n                             Payments processed securely via Stripe.": "\n                             支付通过Stripe安全处理。",
"\n                             ⚠️ Notice: All purchases are final. There are no refunds whatsoever. Virtual items/currency have no real-world value. Premium/QoL/\"Primal Resin\" features are subject to change at any time. In case of issues, contact jamminTheDev on ": "\n                             ⚠️ 注意：所有购买均为最终交易，概不退款。虚拟物品/货币没有现实世界价值。高级/QoL/\"原始树脂\"功能随时可能变更。如有问题，请联系jamminTheDev：",
"\n                            Currency: ": "\n                            货币：",
"\n                            Showing up to 100 most recent activities stored in your browser.\n                        ": "\n                            显示浏览器中存储的最近100条活动记录。\n                        ",
"\n                            Total Ticks: ": "\n                            总计跳数：",
"\n                            ⏱️ Active: ": "\n                            ⏱️ 激活：",
"\n                            🚀 Launch Expedition\n                        ": "\n                            🚀 发射远征\n                        ",
"\n                         🥚 Balance: ": "\n                         🥚 余额：",
"\n                        Store and consume powerful rare items found on expeditions. Launch modifiers are equipped during expedition setup, while worker consumables and trait enhancers are used directly from the satchel.\n                    ": "\n                        存储并使用远征中获得的强大稀有物品。发射修正器在远征设置时装备，工蜂消耗品和特性增强剂则直接从挎包中使用。\n                    ",
"\n                        ⚠️ HIVE INTEGRITY CRITICAL (0%) ⚠️": "\n                        ⚠️ 蜂巢完整性危急（0%）⚠️",
"\n                    Checked filters will ": "\n                    已选筛选器将",
"\n                Are you sure you want to proceed?\n            ": "\n                确定要继续吗？\n            ",
"\n                While you were away, your workers were busy! We've summarized ": "\n                在你离开期间，你的工蜂们忙个不停！我们总结了",
" - Chance to prevent bee injuries (up to 50%)\n                                ": " - 防止蜜蜂受伤的几率（最高50%）\n                                ",
" - Increase loot multipliers but add risk\n                                ": " - 提高战利品倍率但增加风险\n                                ",
" - Reduce expedition risk based on their level\n                                ": " - 根据等级降低远征风险\n                                ",
" - Save and apply complex hive-wide bee assignment configurations with one click": " - 一键保存并应用整个蜂巢的复杂蜜蜂分配配置",
" Assign bees to the Build Pool so they can construct expansions and upgrades. Builders consume 1 Cell per unit of progress. You can allocate builders to specific projects in the Hive or Peer Build menus. Remaining in the build pool (build-idle-build) will not reset the speed bonus.\n                                ": " 将蜜蜂分配到建筑池，使其能建造扩展和升级。建筑工每单位进度消耗1蜂巢单元。你可以在蜂巢或同伴建筑菜单中将建筑工分配到特定项目。留在建筑池中（建筑-空闲-建筑）不会重置速度加成。\n                                ",
" Assign bees to the Repair Pool to maintain hive integrity, fix structure damage, or contribute to swarm repair projects. Repairers consume Propolis resource when they are assigned to a task. Remaining in the repair pool (unassigned) will not reset the speed bonus.\n                                ": " 将蜜蜂分配到维修池以维护蜂巢完整性、修复结构损伤或为蜂群维修项目做贡献。维修工被分配任务时消耗蜂胶资源。留在维修池中（未分配）不会重置速度加成。\n                                ",
" Bees can be injured during expeditions. Injured bees cannot be used again until they recover (recovery time matches expedition duration).\n                            ": " 蜜蜂在远征中可能受伤。受伤蜜蜂在恢复前无法再次使用（恢复时间等于远征时长）。\n                            ",
" Consumes 1 Dirty Water and 1 Spores per unit of clean water produced.\n                                ": " 每生产1单位净水消耗1污水和1孢子。\n                                ",
" Consumes 1 Honey, 1 Water, 1 Cell, and 1 Propolis per unit of Royal Jelly produced.\n                                ": " 每生产1单位蜂王浆消耗1蜂蜜、1水、1蜂巢单元和1蜂胶。\n                                ",
" Consumes 1 Hornet Mandible, 1 Varroa Mite Shell, and 1 Mantis Claw per unit of Apex Lattice forged.\n                                ": " 每锻造1单位巅峰晶格消耗1大黄蜂下颚、1瓦螨壳和1螳螂爪。\n                                ",
" Consumes 1 Leaf Cutting and 1 Mud per unit of Cell produced.\n                                ": " 每生产1单位蜂巢单元消耗1叶片和1泥土。\n                                ",
" Consumes 1 Mud and 1 Tree Resin per unit of Propolis produced. Propolis is used to repair hive integrity.\n                                ": " 每生产1单位蜂胶消耗1泥土和1树脂。蜂胶用于修复蜂巢完整性。\n                                ",
" Consumes 1 Nectar and 1 Pollen per unit of honey produced.\n                                ": " 每生产1单位蜂蜜消耗1花蜜和1花粉。\n                                ",
" Deploying bees on expeditions will change their activity to \"expedition\". They will remember their previous activity and automatically return to it when the expedition completes. Your bees' speed bonuses and progress are preserved during expeditions.\n                                ": " 将蜜蜂部署到远征会将其活动更改为\"远征\"。它们会记住之前的活动并在远征完成时自动恢复。蜜蜂的速度加成和进度在远征期间保留。\n                                ",
" For Builders & Repairers\n                                ": " 适用于建筑工与维修工\n                                ",
" For Customers\n                                ": " 适用于顾客\n                                ",
" If your population exceeds the loadout's total, extra bees will be assigned to ": " 如果你的人口超过配置总数，多余的蜜蜂将被分配到",
" Ironbee players are restricted to solo play. You cannot participate in the Peer Build network.\n                        ": " 铁蜂玩家仅限单人游戏。你无法参与同伴建筑网络。\n                        ",
" Ironbee players are restricted to solo play. You cannot trade on the market.\n                    ": " 铁蜂玩家仅限单人游戏。你无法在市场上交易。\n                    ",
" Risk increases with expedition duration (2% per hour). Longer expeditions yield better rewards but have higher base risk. Tanks reduce risk significantly.\n                                ": " 风险随远征时长增加（每小时2%）。更长的远征产出更好的奖励但基础风险更高。坦克能显著降低风险。\n                                ",
" Risk is the chance each bee fails the expedition. \n                                ": " 风险是每只蜜蜂远征失败的几率。\n                                ",
" The longer a bee performs the same activity, the more efficient it becomes. A bee reaches ": " 蜜蜂执行同一活动时间越长，效率越高。蜜蜂在连续工作24小时后达到",
" Use the ": " 使用",
" When enabled (ON), bees that run out of required input resources will automatically switch to gathering the missing resource. This ensures constant productivity but ": " 启用时（开），耗尽所需输入资源的蜜蜂将自动切换为采集缺失资源。这确保持续生产力但",
" You cannot participate in the Peer Build system until you register a full account. \n                            ": " 在注册完整账号之前，你无法参与同伴建筑系统。\n                            ",
" after 24 hours of continuous work. Any change of activity will reset the speed bonus (ex: gather pollen to gather resin, or build to repair). Players with QoL active can set a max speed bonus % per bee. This can be useful for keeping inputs/outputs in balance. Note that lowering the max to below your current speed bonus will reduce that bee's speed immediately (extra speed above the cap will be lost).\n                                ": " 达到最高速度（4倍产出）。任何活动变更都会重置速度加成（例如：采集花粉改为采集树脂，或建筑改为维修）。激活QoL的玩家可以为每只蜜蜂设置最高速度加成百分比。这对保持输入/输出平衡很有用。注意将上限降低到当前速度加成以下会立即降低该蜜蜂的速度（超过上限的额外速度将丢失）。\n                                ",
" below.": " 如下。",
" consume your ": " 消耗你的",
" for that bee. Turn it OFF to maintain your speed multiplier while you manually refill resources.\n                            ": " 资源。关闭它以维持速度倍率，同时手动补充资源。\n                            ",
" grants 30 days of premium status with the following Quality of Life benefits:": " 提供30天高级状态，包含以下生活品质福利：",
" in the ": " 在",
" logs for you:\n            ": " 日志供你查看：\n            ",
" menu for more details). When the Expedition completes, you will get a Mail with the reward info.\n                                ": " 菜单查看详情）。远征完成后，你将收到包含奖励信息的邮件。\n                                ",
" menu.": " 菜单。",
" or ": " 或",
" rewards for every unit of work your bees contribute!": " 蜜蜂每贡献一单位工作都获得奖励！",
" tab to train your bees. First, promote a Tradeskill Bee into a specialized role (Warrior, Tank, or Healer) using Royal Jelly. Then ascend them to higher levels using trophies earned from expeditions to increase their power.\n                                ": " 标签页训练你的蜜蜂。首先用蜂王浆将技能蜜蜂晋升为专精角色（战士、坦克或治疗者）。然后用远征获得的战利品将其提升到更高等级以增强力量。\n                                ",
" those log types.\n                ": " 那些日志类型。\n                ",
" to add progress to others' projects.": " 为他人的项目增加进度。",
" to fix others' Hive Integrity.": " 修复他人的蜂巢完整性。",
" to players who help you. Set your ": " 给帮助你的玩家。设置你的",
" · Tax: ": " · 税率：",
" – Automatically replenishes Hive Water and Honey from your personal stash when they run low": " – 蜂巢水和蜂蜜不足时自动从个人库存补充",
" – Double your maximum offline progression time (up to 24 hours)": " – 离线进度时间翻倍（最高24小时）",
" – Each bee has individual max speed controls, allowing you to carefully balance inputs and outputs with full control.": " – 每只蜜蜂都有独立最高速度控制，让你能完全掌控输入输出的平衡。",
" – Pay 0% tax on all sales (normally 10%)": " – 所有销售支付0%税率（通常为10%）",
"% faster upgrades": "%更快升级",
"(+10% Bonus)": "（+10%加成）",
"(+33% Bonus)": "（+33%加成）",
"(+50% Bonus)": "（+50%加成）",
"(Equip on Deploy tab)": "（在部署标签页装备）",
"(Personal building wait times and progress requirements scaled by ": "（个人建筑等待时间和进度需求按",
"+ Add Attachment": "+ 添加附件",
"+ Post Order": "+ 发布订单",
"+Loot Multiplier": "+战利品倍率",
"-- Select Loadout --": "-- 选择配置 --",
"-- hours": "-- 小时",
"--Building--": "--建筑--",
"--Crafting--": "--制作--",
"--Gather--": "--采集--",
"--Special--": "--特殊--",
"-Risk Reduction": "-风险降低",
". Level and XP preserved. Cannot be changed while the bee is on an expedition.\n                            ": "。等级和经验保留。蜜蜂远征期间无法更改。\n                            ",
". XP and Level preserved.\n                            ": "。经验和等级保留。\n                            ",
"100 Primal Resin": "100原始树脂",
"100 Royal Jelly": "100蜂王浆",
"100% Marketplace Tax Exemption": "100%市场税费免除",
"12 hours": "12小时",
"1:1:1 trophy ratio": "1:1:1战利品比例",
"2h": "2小时",
"50 Royal Jelly": "50蜂王浆",
"A growing hive needs room to thrive.": "成长的蜂巢需要空间才能繁荣。",
"Account Limit:": "账号限制：",
"Account Security:": "账号安全：",
"Acquire Resin": "获取树脂",
"Actions": "操作",
"Activity Changes:": "活动变更：",
"Activity Loadout:": "活动配置：",
"Activity Loadouts": "活动配置",
"All mail (no attachments)": "所有邮件（无附件）",
"Amount:": "数量：",
"Apex Lattice:": "巅峰晶格：",
"Apiary Charter": "蜂场章程",
"Apothecary Satchel": "药剂挎包",
"Ascension": "升阶",
"Assign bees to the ": "将蜜蜂分配到",
"Assign your bees to different tasks.": "将蜜蜂分配到不同任务。",
"At any time, and for any reason, you can delete your account which will permanently delete all of this information from the server. This action can be completed under the in-game Options menu.": "你可以随时以任何理由删除账号，这将从服务器永久删除所有信息。此操作可在游戏内选项菜单中完成。",
"Attachments (Optional):": "附件（可选）：",
"Auto": "自动",
"Auto-Refill Hive Stores": "自动补充蜂巢储备",
"Auto-Revert": "自动恢复",
"Auto-Revert:": "自动恢复：",
"Auto-claimed after 30 days, then deleted.": "30天后自动领取，然后删除。",
"Available Projects": "可用项目",
"Away Gains": "离线收益",
"Battle Types:": "战斗类型：",
"Bee Academy": "蜂学院",
"Beekeepers": "养蜂人",
"Bees Sent:": "已派出蜜蜂：",
"Bug Exploitation:": "漏洞利用：",
"Build Pool": "建筑池",
"Build Pool:": "建筑池：",
"Builders": "建筑工",
"Buy Orders": "购买订单",
"Cancel": "取消",
"Charter Perks": "章程特权",
"Choose which resources to pin to the top bar dashboard (max 14).": "选择要固定到顶部栏仪表盘的资源（最多14个）。",
"Clear": "清除",
"Clear Log": "清除日志",
"Clear Selection": "清除选择",
"Click a loadout's name to rename it.": "点击配置名称可重命名。",
"Compose": "撰写",
"Confirm": "确认",
"Confirm Action": "确认操作",
"Contract Settings": "合约设置",
"Crafting Cells:": "制作蜂巢单元：",
"Creating Honey:": "制作蜂蜜：",
"Cross-trade guidance:": "跨游戏交易指引：",
"Dangers:": "危险：",
"Data": "数据",
"Delete Account": "删除账号",
"Deleted after 1 day": "1天后删除",
"Deleted after 12 hours": "12小时后删除",
"Deleted after 14 days": "14天后删除",
"Deleted after 5 days": "5天后删除",
"Deleting your account will permanently remove all your bees, resources, buildings, and swarm membership. This action cannot be undone.": "删除账号将永久移除你的所有蜜蜂、资源、建筑和蜂群成员资格。此操作不可撤销。",
"Deploy Expedition": "部署远征",
"Double Offline Progression": "双倍离线进度",
"Duration:": "持续时间：",
"Each player is permitted a maximum of two accounts": "每位玩家最多允许两个账号",
"Earn ": "赚取",
"Empty Slot": "空栏位",
"Enable a project in ": "启用项目于",
"Event": "事件",
"Expected Losses": "预期损失",
"Expected Rewards": "预期奖励",
"Expedition Rewards:": "远征奖励：",
"Fair Play:": "公平游戏：",
"Fill": "填充",
"Filters": "筛选器",
"For any questions, contact us by sending an email to ": "如有任何问题，请发送邮件至",
"For the purpose of maintaining game security and a fair environment for all users, the following information about users is collected (username, IP address, browser information, email address, game actions). This game also uses cookies to ensure that only authenticated users can perform game actions. This data will not be shared with any third parties, except as required by law or court order. This data is not used for marketing purposes. This game utilizes reasonable, industry standard mechanisms for protection of this information. Any users who have concerns should not create an account and play this game.": "为维护游戏安全和为所有用户提供公平环境，收集以下用户信息（用户名、IP地址、浏览器信息、邮箱地址、游戏操作）。本游戏还使用cookie确保只有已验证用户才能执行游戏操作。除法律或法院命令要求外，此数据不会与任何第三方共享。此数据不用于营销目的。本游戏使用合理且符合行业标准的机制保护此信息。有顾虑的用户不应创建账号并游玩此游戏。",
"Forge Apex Lattice:": "锻造巅峰晶格：",
"GLOBAL": "全局",
"Gather Tree Resin": "采集树脂",
"Global": "全局",
"HUD": "HUD",
"Harassment, hate speech, threats, or any form of abusive behavior towards other players or staff will not be tolerated. Keep all interactions respectful and constructive.": "对玩家或工作人员的骚扰、仇恨言论、威胁或任何形式的辱骂行为都不会被容忍。请保持所有互动尊重且富有建设性。",
"Harmonic Standing": "和谐声望",
"Healers": "治疗者",
"Healers:": "治疗者：",
"Help the hive grow! Report bugs or suggest new features here. Messages are sent directly to the Queen via Discord. Discord is best for two-way communication but for those not able to join Discord, this can be used to share feedback.": "帮助蜂巢成长！在此报告漏洞或建议新功能。消息通过Discord直接发送给女王。Discord最适合双向沟通，但无法加入Discord的玩家可使用此功能分享反馈。",
"Hibernation Hollow": "冬眠洞穴",
"Hide": "隐藏",
"Hide Info": "隐藏信息",
"Hist": "历史",
"Hive Expansion": "蜂巢扩展",
"Hive Honey": "蜂巢蜂蜜",
"Hive Water": "蜂巢水",
"Hornet Mandibles": "大黄蜂下颚",
"Hornet Mandibles, Varroa Shells, and Mantis Claws. These are used for bee ascension and crafting Apex Lattice for Swarm Buildings. Additionally, there is a small chance to find powerful Satchel rewards during expeditions (see the": "大黄蜂下颚、瓦螨壳和螳螂爪。用于蜜蜂升阶和制作蜂群建筑的巅峰晶格。此外，远征中还有小几率找到强大的挎包奖励（参见",
"Hornet Mandibles:": "大黄蜂下颚：",
"Inbox": "收件箱",
"Integrity": "完整性",
"Intentionally exploiting a bug, glitch, or loophole for personal gain is not allowed. If you discover a bug, please report it to the game staff immediately through the Discord.": "禁止故意利用漏洞、故障或空子谋取私利。如发现漏洞，请立即通过Discord向游戏工作人员报告。",
"It helps a lot to include screenshots of any issues or ideas (use links from your favorite screenshot sharing website).": "包含问题或想法的截图会很有帮助（使用你喜欢的截图分享网站链接）。",
"Loading account info...": "加载账号信息中……",
"Loading bees...": "加载蜜蜂中……",
"Loading global stats...": "加载全局统计中……",
"Loading listings...": "加载列表中……",
"Loading loadouts...": "加载配置中……",
"Loading market data...": "加载市场数据中……",
"Loading players...": "加载玩家中……",
"Loading swarm data...": "加载蜂群数据中……",
"Loading swarms...": "加载蜂群中……",
"Loadouts": "配置",
"MAIN CHAT": "主聊天",
"MAX": "最大",
"Mail with attachments": "带附件的邮件",
"Mailbox": "邮箱",
"Manage your saved bee assignment configurations. ": "管理你保存的蜜蜂分配配置。",
"Mantis Claws": "螳螂爪",
"Mantis Claws:": "螳螂爪：",
"Market Transaction": "市场交易",
"Mass Reassign:": "批量重新分配：",
"Membership Status": "会员状态",
"Message:": "消息：",
"My Listings": "我的列表",
"No Botting or Automation:": "禁止脚本或自动化：",
"No bees available": "无可用蜜蜂",
"No bees available for promotion": "无可晋升的蜜蜂",
"No bees available for retraining": "无可再训练的蜜蜂",
"No bees ready for ascension": "无准备好升阶的蜜蜂",
"No defeated bees to rehabilitate": "无需要康复的战败蜜蜂",
"No injured bees": "无受伤蜜蜂",
"No tick data found. Wait for a game tick to see your stats!": "未找到跳数据。等待游戏一跳以查看你的统计！",
"Notable Progress:": "显著进度：",
"Note:": "注意：",
"PBeeBeeG": "PBeeBeeG",
"Peer Activity History": "同伴活动历史",
"Peer Build Network": "同伴建筑网络",
"Peer builders allow you to complete expansions much faster than working alone!": "同伴建筑工让你比独自工作更快完成扩展！",
"Peer contract notifications": "同伴合约通知",
"Personal Buildings": "个人建筑",
"Pheromone Pantry": "信息素储藏室",
"Play fair and respect the spirit of the game. The game staff reserves the right to take action against any behavior deemed harmful to the game or its community, even if not explicitly listed here.": "公平游戏，尊重游戏精神。游戏工作人员保留对任何被认为对游戏或社区有害的行为采取行动的权利，即使此处未明确列出。",
"Players that choose to \"cross-trade\" with another game do so at their own risk.": "选择与其他游戏\"跨游戏交易\"的玩家需自行承担风险。",
"Pop: ": "人口：",
"Privacy Policy": "隐私政策",
"Progress is automatic as long as you have an active project and Resin to pay the peer.": "只要有活跃项目和树脂支付同伴，进度就会自动推进。",
"Projected resource flow based on your last server tick result. Net gain/loss extrapolated over time.": "基于上次服务器跳结果预测的资源流动。净收益/损失随时间推算。",
"Promotion": "晋升",
"Propolis Refinery": "蜂胶精炼厂",
"Purifying Water:": "净化水：",
"Quantity to Transact:": "交易数量：",
"Read mail (no attachments)": "已读邮件（无附件）",
"Recipient:": "收件人：",
"Recover trophies": "回收战利品",
"Refresh": "刷新",
"Register Now": "立即注册",
"Rehabilitation": "康复",
"Repair Hive": "修复蜂巢",
"Repair Pool:": "维修池：",
"Repairers": "维修工",
"Resources": "资源",
"Respectful Conduct:": "尊重行为：",
"Retrain Role": "再训练角色",
"Rev": "版本",
"Reward per Material": "每材料奖励",
"Risk & Duration:": "风险与持续时间：",
"Risk Explanation:": "风险说明：",
"Royal Jelly:": "蜂王浆：",
"SPLIT VIEW": "分屏视图",
"Save Chance": "安全几率",
"Save Current Activity": "保存当前活动",
"Save Description": "保存描述",
"Save Filters": "保存筛选器",
"Select a player to view their profile.": "选择玩家以查看其资料。",
"Select which projects you are willing to support in the ": "选择你愿意支持的项目于",
"Selectable Max Speed Bonus": "可选择最高速度加成",
"Sell Orders": "出售订单",
"Send": "发送",
"Send Message": "发送消息",
"Send your trained battle bees on dangerous expeditions to recover valuable trophies.": "派遣训练有素的战斗蜜蜂执行危险的远征，回收珍贵的战利品。",
"Sent": "已发送",
"Slot 1": "栏位1",
"Slot 2": "栏位2",
"Slot 3": "栏位3",
"Slot 4": "栏位4",
"Slot 5": "栏位5",
"Slot 6": "栏位6",
"Speed Mechanic:": "速度机制：",
"Split": "分割",
"Status Log": "状态日志",
"Status Log Filters": "状态日志筛选器",
"Status logs (Ticks/Events)": "状态日志（跳数/事件）",
"Support the game and unlock premium perks.": "支持游戏并解锁高级特权。",
"Swarm": "蜂群",
"Swarm Bank": "蜂群银行",
"Swarms": "蜂群",
"Sweet!": "棒极了！",
"TRADE": "交易",
"Take All 📦": "全部领取 📦",
"Tanks": "坦克",
"Tanks:": "坦克：",
"Team Analysis": "队伍分析",
"The Peer Build Network allows players to collaborate on large-scale construction and maintenance. Help others to earn rewards, or open contracts to accelerate your own growth.": "同伴建筑网络让玩家在大规模建设和维护中协作。帮助他人赚取奖励，或开放合约加速自身发展。",
"The Queen awaits your industry.": "女王等待你的勤劳。",
"The use of scripts, bots, macros, or any form of automation to play the game is forbidden. All actions must be performed manually by the player.": "禁止使用脚本、机器人、宏或任何形式的自动化来玩游戏。所有操作必须由玩家手动执行。",
"This description will be visible to other players when they view your profile. Keep it buzz-worthy! (Max 500 characters)": "此描述将在其他玩家查看你的资料时可见。保持精彩！（最多500字符）",
"This game is intended for users that are over 18 years of age. We do not knowingly collect information from users below this age.": "本游戏面向18岁以上用户。我们不会故意收集低于此年龄用户的信息。",
"Time Remaining:": "剩余时间：",
"Time Until Next Harmony Tier": "距离下一和谐等级时间",
"To ensure PBeeBeeG remains a fair and enjoyable experience for everyone, all players are expected to adhere to the following rules. Violations may result in temporary or permanent suspension of your account.": "为确保PBeeBeeG为所有人提供公平愉快的体验，所有玩家应遵守以下规则。违规可能导致账号暂时或永久封停。",
"Total bees performing each activity across active players (online in the last 7 days). Updates every 5 minutes.": "活跃玩家（最近7天在线）中执行各项活动的蜜蜂总数。每5分钟更新一次。",
"Trade": "交易",
"Training Bees:": "训练蜜蜂：",
"Trait Management": "特性管理",
"Trash Visible 🗑️": "显示垃圾 🗑️",
"Tree Resin 🌲": "树脂 🌲",
"Unpin all": "全部取消固定",
"Varroa Shells": "瓦螨壳",
"Varroa Shells:": "瓦螨壳：",
"View": "查看",
"Waggle Dance Floor": "摇摆舞地板",
"Warriors": "战士",
"Warriors:": "战士：",
"Waxen Archives": "蜡质档案馆",
"Welcome to the Hive": "欢迎来到蜂巢",
"You are responsible for the security of your own account. Do not share your password with anyone. Game staff will never ask for your password.": "你对自己的账号安全负责。不要与任何人分享密码。游戏工作人员绝不会索要你的密码。",
"You pay ": "你支付",
"Your Hive Level determines the maximum level of all other Personal Buildings.": "你的蜂巢等级决定所有其他个人建筑的最高等级。",
"Your Message:": "你的消息：",
"Your bees' maximum speed bonus is capped at 1.5x while the hive has 0 integrity. Repair it in the Hive menu or Peer Build menu!": "蜂巢完整性为0时，蜜蜂最高速度加成上限为1.5倍。在蜂巢菜单或同伴建筑菜单中修复它！",
"email": "邮箱",
"hide": "隐藏",
"maximum speed (4x yield)": "最高速度（4倍产出）",
"one normal account and one Ironbee account. These accounts must not interact with each other in any way. Creating multiple accounts of the same type (\"alts\") to gain an unfair advantage or bypass restrictions is strictly prohibited. If your household has more than one player, ensure that those accounts do not interact with each other (market trading or otherwise).": "一个普通账号和一个铁蜂账号。这些账号不得以任何方式相互交互。创建多个同类型账号（\"小号\"）以获取不公平优势或绕过限制是严格禁止的。如果你的家庭有多个玩家，请确保这些账号不会相互交互（市场交易或其他方式）。",
"one project active at a time).": "一次一个活跃项目）。",
"resets the speed bonus": "重置速度加成",
"to allow peers to assist with your construction or repairs (limit": "允许同伴协助你的建筑或维修（限制",
"© jamminTheDev LLC": "© jamminTheDev LLC",
"• 20% chance of defeat (bee reverts to tradeskill bee and must be re-trained)\n                            ": "• 20%几率战败（蜜蜂恢复为技能蜜蜂，需重新训练）\n                            ",
"• 80% chance of injury (bee recovers after 1 hour)\n                                ": "• 80%几率受伤（蜜蜂1小时后恢复）\n                                ",
"⚙️ Launch Modifiers ": "⚙️ 发射修正器",
"⚙️ Settings": "⚙️ 设置",
"⚙️ Settings & Account": "⚙️ 设置与账号",
"⚠️ Apprentice Account Restricted:": "⚠️ 学徒账号限制：",
"⚠️ Danger Zone": "⚠️ 危险区域",
"⚡ Active Efficiency: ": "⚡ 当前效率：",
"✨ Craft Royal Jelly": "✨ 制作蜂王浆",
"⬅️ Logout": "⬅️ 登出",
"⬡ Cells": "⬡ 蜂巢单元",
"⬡ Craft Cells": "⬡ 制作蜂巢单元",
"🌲 Gather Resin": "🌲 采集树脂",
"🌲 Tree Resin": "🌲 树脂",
"🌸 Gather Pollen": "🌸 采集花粉",
"🌼 Gather Nectar": "🌼 采集花蜜",
"🌿 Gather Leaves": "🌿 采集叶片",
"🍄 Gather Spores": "🍄 采集孢子",
"🍯 Create Honey": "🍯 制作蜂蜜",
"🎒 Apothecary Satchel": "🎒 药剂挎包",
"🎓 Bee Academy": "🎓 蜂学院",
"🎓 Bee Academy (Lvl 1)": "🎓 蜂学院（1级）",
"🎨 UI Preferences": "🎨 界面偏好",
"🏗️ Propolis Refinery (Lvl 1)": "🏗️ 蜂胶精炼厂（1级）",
"🏛️ Pheromone Pantry (Lvl 1)": "🏛️ 信息素储藏室（1级）",
"🏥 Injured Bees": "🏥 受伤蜜蜂",
"🏪 Market": "🏪 市场",
"🏰 Hive": "🏰 蜂巢",
"🏰 Swarm": "🏰 蜂群",
"🐝 Actions": "🐝 操作",
"👤 Personal Description": "👤 个人描述",
"👤 Profiles": "👤 资料",
"💃 Waggle Dance Floor (Lvl 1)": "💃 摇摆舞地板（1级）",
"💎 Forge Apex Lattice": "💎 锻造巅峰晶格",
"💤 Hibernation Hollow (Lvl 1)": "💤 冬眠洞穴（1级）",
"💧 Purify Water": "💧 净化水",
"💬 Discord": "💬 Discord",
"📅 Mail Retention Policy:": "📅 邮件保留政策：",
"📈 Stats": "📈 统计",
"📊 Global Activity": "📊 全局活动",
"📊 Global Bee Activity": "📊 全局蜜蜂活动",
"📋 Activity Loadouts": "📋 活动配置",
"📖 Game Guide": "📖 游戏指南",
"📚 Waxen Archives (Lvl 1)": "📚 蜡质档案馆（1级）",
"📜 Activity Log": "📜 活动日志",
"📜 Apiary Charter": "📜 蜂场章程",
"📜 Game Rules & Code of Conduct": "📜 游戏规则与行为准则",
"📜 Rules": "📜 规则",
"📣 Feedback": "📣 反馈",
"📦 Resources": "📦 资源",
"📬 Mailbox ": "📬 邮箱",
"🔄 Rev History": "🔄 版本历史",
"🔊 Resonant Soundboard": "🔊 共振音板",
"🔊 The Resonant Soundboard": "🔊 共振音板",
"🔶 Craft Propolis": "🔶 制作蜂胶",
"🔶 Propolis": "🔶 蜂胶",
"🗺️ Expeditions": "🗺️ 远征",
"🗺️ Expeditions ": "🗺️ 远征",
"🚀 Active Expedition": "🚀 活跃远征",
"🚀 Deploy": "🚀 部署",
"🛠️ Build Pool": "🛠️ 建筑池",
"🛡️ Ironbee Solo Restriction:": "🛡️ 铁蜂单人限制：",
"🟤 Gather Mud": "🟤 采集泥土",
"🤝 Network": "🤝 网络",
"🤝 Peer Build": "🤝 同伴建筑",
"🥃 Consumables & Elixirs": "🥃 消耗品与灵药",
"🥚 Get Primal Resin": "🥚 获取原始树脂",
"🧪 Gather Water": "🧪 采集水",
"🩹 Repair Pool": "🩹 维修池",
" The Queen welcomes you to the hive as an apprentice...": " 女王欢迎你作为学徒来到蜂巢……",
" Congrats": " 恭喜",
" Got my seventh bee!": " 得到第七只蜜蜂了！",
" Gz": " 恭喜",
" I don't doubt, guide is really nice!": " 我不怀疑，指南真的很棒！",
" I see a competing swarm was made": " 我看到一个竞争蜂群建立了",
" I'll run out of stuff before then xD": " 在那之前我就会用完物资 xD",
" Maaal": " Maaal",
" Mr Dev can you accept my application sir": " Dev先生能接受我的申请吗先生",
" OK I do see a bug there, i will fix that": " 好的我确实看到了一个bug，我会修复的",
" XD": " XD",
" again i didnt have time to mess with beta so I don't rly know how stuff progresses": " 再说一次我没有时间玩测试服所以我不太清楚东西怎么进展",
" all good i will end up doing it myself if noone takes it": " 没事如果没人接我就自己来",
" also getting a good start is what you want which is why i have made the starting guid for those players": " 而且良好的开局正是你想要的这就是为什么我为那些玩家制作了入门指南",
" also the fact that whenever game released, whoever was available/didn't face problems and knew what to do. not just because they began earlier lol": " 还有游戏发布时，当时谁在线/没遇到问题并且知道该做什么。不只是因为他们开始得早哈哈",
" and probably starved": " 而且可能饿死了",
" and the yellow tint and colors that are not really good on theeyes": " 还有黄色色调和颜色对眼睛不太友好",
" but a nicely stocked market, will be great": " 但一个库存充足的市场会很好",
" but we'll see o7": " 但我们走着瞧 o7",
" congratz": " 恭喜",
" cooldown of what": " 什么的冷却",
" damn builder bees can't make themselves useful after finishing a peer build >:o": " 该死的建筑蜜蜂完成同伴建筑后就没用了 >:o",
" don't repair your hive for a long time, your life will be much easier": " 长时间不修蜂巢，你的生活会轻松很多",
" dont have any repairers": " 没有任何维修工",
" early game for sure was rough. the market is \"almost\" established which will help new players. early days, you had to make all your own or trade via chat.": " 早期确实很艰难。市场\"几乎\"建立起来了，这会帮助新玩家。早期你得全部自己做或通过聊天交易。",
" ever": " 永远",
" every time you upgrade a building or hive, there's a forced cooldown each time that is higher each level": " 每次升级建筑或蜂巢，都会有一个强制冷却时间，每级都更高",
" feels bad": " 感觉不好",
" for repair?": " 用于维修？",
" hive repair you should start at the earliest when you have 11 bees preferable 12 bees anything sooner will hurt oyur self progress a lot": " 蜂巢维修最早应该在你有11只蜜蜂时开始，最好12只，更早会严重影响你的自我进度",
" i set it for 10 for sure": " 我确实设了10",
" i will say come up with a catch up mechanic that is doable and not punishing players that play longer and suggest it in discord": " 我会说想出一个可行的追赶机制，不惩罚玩得久的玩家，并在discord上建议",
" if anyone wants it": " 如果有人想要的话",
" if there's not, then thats another problem...": " 如果没有，那又是另一个问题……",
" it literally says 0 words about what it do": " 它完全没有说明它是干什么的",
" it should work for everyone, but if its a global boost, then thats not a catchup mechanic, its just a way to speed up the game for everyone the same": " 它应该对每个人都有效，但如果它是全局加成，那就不是追赶机制，只是以同样方式加速所有人的游戏",
" ive got a peer job up to have my hive repairs for 10": " 我开了个同伴任务修我的蜂巢给10",
" lemme see": " 让我看看",
" llo": " 你好",
" lol": " 哈哈",
" lol this repair too slo": " 哈哈这修复太慢了",
" me too": " 我也是",
" menu < resonant soundboard": " 菜单 < 共振音板",
" mh, it could be a good way to counter this if it didn't affect everyone equally, as in, for it to be a catch up mechanic": " 嗯，如果它不是对所有人平等生效的话，这可能是应对的好方法，也就是说，作为追赶机制",
" mostly always onto something else before the multiplier can kick in anyways": " 反正大多数时候在倍率生效前就换做别的事了",
" my builders reverted to crafting cells but I have auto-revert off... mods?!???": " 我的建筑工恢复成制作蜂巢单元了但我关了自动恢复……是mod吗？！？？",
" new player pops in, sees that no matter the effort they put in, they'll never be able to reach close to the people that started playing in the first weeks, and all the other things. add offline time to the mix, the only catch up mechanic is hoping the top quit": " 新玩家进来看到无论怎么努力都永远无法接近前几周开始玩的玩家，还有其他各种因素。加上离线时间，唯一的追赶机制就是希望头部玩家退游",
" no, its the game": " 不，是游戏本身",
" no, me": " 不，是我",
" not really what I said": " 不完全是那个意思",
" now add the offline time to the mix (it doesn't bother me, I can leave the game open)": " 现在再加上离线时间（这倒不困扰我，我可以挂着游戏）",
" o nice": " 哦不错",
" ok": " 好的",
" okay we will have to agree to disagree because my cat just told me it is nap time": " 好吧我们只能同意保留不同意见因为我的猫刚告诉我是午睡时间了",
" or did I miss a rev history update": " 还是我错过了版本历史更新",
" pretty much": " 差不多",
" probably best to DM bofra": " 最好私信bofra",
" says reward/mat 10 resin but its only giving ~3.14 per mat": " 显示奖励/材料是10树脂但实际只给约3.14每材料",
" since": " 因为",
" so cant help :P sorry": " 所以帮不了 :P 抱歉",
" so far it looks like you want to be able to rush things and if possible have all bees 100% fulltime on hive/buildings and trade the rest in or something just like we can never catch up in every other pbbg to the top guys we also cant catch up in this game even tho this game has some sort of soft catch up mechanic named resonant soundboard": " 目前看起来你想要能够速推，如果可能的话让所有蜜蜂100%全天候在蜂巢/建筑上然后交易剩余物资什么的。就像在其他所有PBBG中我们永远追不上顶尖玩家一样，我们在这游戏中也追不上，尽管这游戏有某种软追赶机制叫共振音板",
" so just legitimately asking/trying to understand that :P": " 所以只是诚恳地询问/试图理解 :P",
" so much for the hive being repaired": " 蜂巢修复也不过如此",
" so u cant ever reach the next level without going through that cooldown": " 所以你永远无法不经过那个冷却到达下一级",
" so why is there forced cooldowns?": " 那为什么要有强制冷却？",
" so you want to reward newer players and not players that have been here for longer?": " 所以你想奖励新玩家而不是玩了更久的玩家？",
" soundboard affect all players as far as i know": " 据我所知音板影响所有玩家",
" that doesn't sound correct xD": " 那听起来不对 xD",
" that is how they work.": " 它们就是这样工作的。",
" the big red warning is like a decoration to me": " 那个大红警告对我来说就像装饰品",
" the game doesnt?": " 游戏不会？",
" the repair orders are, weird?": " 维修订单有点奇怪？",
" there should be a base game below that": " 下面应该有一个基础游戏",
" this is a PBBG": " 这是一个PBBG",
" this is the first time since i started playing i have all 3 things functional lol": " 这是我开始玩以来第一次三个东西都正常运作哈哈",
" ty": " 谢谢",
" unless the soundboard thing does not affect the players ahead?": " 除非音板不影响前面的玩家？",
" upgrades": " 升级",
" ur thing finished": " 你的东西完成了",
" water, honey, and now hive": " 水、蜂蜜，现在还有蜂巢",
" wdym \"catch up\"?": " 你说\"追赶\"是什么意思？",
" well if anyone wants to repair my hive its there": " 如果有人想修我的蜂巢，它就在那里",
" well not really looking at the xtrade factor ofc": " 当然如果不考虑跨游戏交易因素的话",
" what you mean base game below it?": " 你说的下面有基础游戏是什么意思？",
" whats resonant soundboard": " 共振音板是什么",
" whoever starts earlier has the advantage over those that start later": " 谁开始得早就有优势",
" ye, just leaving mine like this": " 是啊，我的就这样放着",
" yea": " 是",
" yea but none of that will let them catch up due to cooldowns": " 是啊但由于冷却这些都不能让他们追上",
" yeah": " 对",
" you can't justify game design choices with that in mind. if you prevent xtrade, the issue would still be there": " 你不能用那个来证明游戏设计选择的合理性。如果你禁止跨游戏交易，问题依然存在",
" you did right yea": " 你做得对是的",
"EddieG:": "EddieG：",
"Hive": "蜂巢",
"ILLSTAFFER:": "ILLSTAFFER：",
"Market": "市场",
"Nightchildkota:": "Nightchildkota：",
"Peer Build": "同伴建筑",
"Profiles": "资料",
"Reff:": "Reff：",
"Rules": "规则",
"Stats": "统计",
"Think nikita's broke too, but because they're gathering resin i guess it never ends? [Peer] Your 2 bee(s) helped nikita build. Consumed -0.08 ⬡, Earned +0.84 🌲. (Est": "感觉nikita的也坏了，但因为他们一直在采集树脂我猜永远停不下来？[同伴] 你的2只蜜蜂帮助了nikita建筑。消耗 -0.08 ⬡，赚取 +0.84 🌲。（预估",
"Time Until Next Harmony Tier ⏳ 1d 2h 23m": "距离下一和谐等级 ⏳ 1天2小时23分",
"Trade ": "交易",
"Vapor:": "Vapor：",
"[22:35]Nightchildkota": "[22:35]Nightchildkota",
"[22:35][☀️Honeycomb☀️] Bofra": "[22:35][☀️Honeycomb☀️] Bofra",
"[☀️Honeycomb☀️] Bofra:": "[☀️Honeycomb☀️] Bofra：",
"[☀️Honeycomb☀️] Grys:": "[☀️Honeycomb☀️] Grys：",
"[☀️Honeycomb☀️] Infamous:": "[☀️Honeycomb☀️] Infamous：",
"[🍀Bumblebees🍀] jamminTheDev:": "[🍀Bumblebees🍀] jamminTheDev：",
"cooldown will become lower every week due to resonant soundboard its community wide so even new players get that bonus": "冷却每周会因共振音板降低，它是社区范围的所以新玩家也能获得加成",
"did you even read it?[22:36][☀️Honeycomb☀️] Bofra": "你读了吗？[22:36][☀️Honeycomb☀️] Bofra",
"nikita:": "nikita：",
"unoplank:": "unoplank：",
"❄️ Winter's Day ❄️": "❄️ 冬日 ❄️",
"2x Consumption": "2倍消耗",
"328.00 🍯/h": "328.00 🍯/小时",
"328.00 💧/h": "328.00 💧/小时",
"Actual Time Remaining:": "实际剩余时间：",
"Hourly Consumption:": "每小时消耗：",
"My Stash:": "我的库存：",
"Needed in Hive:": "蜂巢需求：",
"Refill Amount:": "补充量：",
"Total Hourly Usage:": "每小时总用量：",
"Total Stored:": "总储存量：",
"Usage / Bee / Hr:": "用量/蜜蜂/小时：",
"⏱️ 1-Hour Refill (Honey)": "⏱️ 1小时补充（蜂蜜）",
"⏱️ 1-Hour Refill (Water)": "⏱️ 1小时补充（水）",
"❄️ Winter Event": "❄️ 冬日事件",
"🍯 Hive Honey": "🍯 蜂巢蜂蜜",
"💧 Hive Water": "💧 蜂巢水",
"📥 Refill Honey": "📥 补充蜂蜜",
"Show": "显示",
" [Event] The Bear Attack event has begun!": " [事件] 熊攻击事件已开始！",
" [Event] The Winter's Day event has ended!": " [事件] 冬日事件已结束！",
"🐻 Bear Attack 🐻": "🐻 熊攻击 🐻",
    "🌟 Nectar Flow 🌟":"🌟花蜜涌流🌟",
    " [Event] The Mud Slide event has begun!":" [事件] 泥石流活动现已开启！",
    " [Event] The Nectar Flow event has ended!":" [事件] 花蜜涌流活动已结束！",
    "🌟 Mud Slide 🌟":"🌟泥石流🌟",
    " [Event] The Heavy Rain event has begun!":" [事件] 暴雨活动现已开启！",
    " [Event] The Mud Slide event has ended!":" [事件] 泥石流活动已结束！",
    "🌟 Heavy Rain 🌟":"🌟暴雨🌟",
"🌟 Artisan Frenzy 🌟": "🌟 工匠狂热 🌟",
" [Event] The Artisan Frenzy event has ended!": " [事件] 工匠狂热事件已结束！",
" [Event] The Winter's Day event has begun!": " [事件] 冬日事件已开始！",
" [Event] The Bear Attack event has ended! The bear wandered through the area but ultimately found no hives to raid and walked away.": " [事件] 熊攻击事件已结束！熊在区域中徘徊但最终没有找到蜂巢可掠夺，悻悻离去。",
" [Event] The Pollen Surge event has begun!": " [事件] 花粉激增事件已开始！",
"🌟 Pollen Surge 🌟": "🌟 花粉激增 🌟",
" [Event] The Nectar Flow event has begun!": " [事件] 花蜜流动事件已开始！",
" [Event] The Pollen Surge event has ended!": " [事件] 花粉激增事件已结束！",
" [Event] The Heavy Rain event has ended!": " [事件] 暴雨事件已结束！",
" [Event] The Sticky Situation event has begun!": " [事件] 黏糊困境事件已开始！",
"🌟 Sticky Situation 🌟": "🌟 黏糊困境 🌟",
" [Event] The Leaf Fall event has begun!": " [事件] 落叶事件已开始！",
" [Event] The Sticky Situation event has ended!": " [事件] 黏糊困境事件已结束！",
"🌟 Leaf Fall 🌟": "🌟 落叶 🌟",
" [Event] The Leaf Fall event has ended!": " [事件] 落叶事件已结束！",
" [Event] The Spore Bloom event has begun!": " [事件] 孢子绽放事件已开始！",
"🌟 Spore Bloom 🌟": "🌟 孢子绽放 🌟",
" [Event] The Artisan Frenzy event has begun!": " [事件] 工匠狂热事件已开始！",
" [Event] The Spore Bloom event has ended!": " [事件] 孢子绽放事件已结束！",
"(Full Storage)": "（仓库已满）",
" Apiary Charter Required\n                            ": " 需要蜂场章程\n                            ",
" 达到最高速度（4倍产出）。任何活动变更都会重置速度加成（例如：采集花粉改为采集树脂，或建筑改为维修）。激活QoL的玩家可以为每只蜜蜂设置最高速度加成百分比。这对保持输入/输出平衡很有用。注意将上限降低到当前速度加成以下会立即降低该蜜蜂的速度（超过上限的额外速度将丢失）。\n                                ": " 达到最高速度（4倍产出）。任何活动变更都会重置速度加成（例如：采集花粉改为采集树脂，或建筑改为维修）。激活QoL的玩家可以为每只蜜蜂设置最高速度加成百分比。这对保持输入/输出平衡很有用。注意将上限降低到当前速度加成以下会立即降低该蜜蜂的速度（超过上限的额外速度将丢失）。\n                                ",
"Loadouts 🔒": "配置 🔒",
"Lvl 0": "0级",
"制作Propolis:": "制作Propolis：",
"制作Royal Jelly:": "制作Royal Jelly：",
"🕸️ Forge Apex Lattice": "🕸️ 锻造巅峰晶格",
"\n                                Integrity decays over time. When Integrity reaches 0, the maximum bee speed bonus is capped at 1.5x until the Hive is repaired!\n                                ": "\n                                完整性随时间衰减。当完整性降到0时，蜜蜂最高速度加成上限为1.5倍，直到蜂巢被修复！\n                                ",
"\n                        Assign builders below to consume Cells and increase progress. Once both requirements are met, your population will increase to ": "\n                        分配下方建筑工消耗蜂巢单元并增加进度。两个条件都满足后，你的人口将增加到",
" Upgrade your Hive to Level 2 to continue.\n                            ": " 将蜂巢升到2级以继续。\n                            ",
"0.0 / 1,800 Cells": "0.0 / 1,800 蜂巢单元",
"0.5 🔶 / 2 seconds of Integrity": "0.5 🔶 / 2秒完整性",
"Build Progress: ": "建筑进度：",
"Builders Assigned:": "已分配建筑工：",
"Max Storage Cap": "最大存储上限",
"Maximum Level Reached.": "已达最高等级。",
"Repair": "修复",
"Repair cost: ": "修复费用：",
"Stores the sweet scent of progress.": "储存进度的甜美气息。",
"Time to unlock next upgrade: ": "解锁下一升级时间：",
"Update": "更新",
"🧱 Hive Integrity": "🧱 蜂巢完整性",
"Apex Lattice": "巅峰晶格",
"Cells": "蜂巢单元",
"Colony Stats": "殖民地统计",
"Current Storage Cap": "当前存储上限",
"Dirty Water": "污水",
"Expedition & Swarm Resources": "远征与蜂群资源",
"Foraged Goods": "采集品",
"Honey": "蜂蜜",
"Leaf Cuttings": "叶片",
"Mud": "泥土",
"Nectar": "花蜜",
"Pollen": "花粉",
"Population": "人口",
"Premium Items": "高级物品",
"Primal Resin": "原始树脂",
"Propolis": "蜂胶",
"Refined Products": "精炼产品",
"Royal Jelly": "蜂王浆",
"Spores": "孢子",
"Tree Resin": "树脂",
"Water": "水",
"\n                                        Update\n                                    ": "\n                                        更新\n                                    ",
"%Comp ": "%完成 ",
"Action": "操作",
"Active Listings": "活跃列表",
"Assigned": "已分配",
"BETA666": "BETA666",
"Bofra": "Bofra",
"DarkSide": "DarkSide",
"Jona": "Jona",
"Justo": "Justo",
"Player ": "玩家 ",
"Project ": "项目 ",
"Reward/Mat ": "奖励/材料 ",
"Vapor": "Vapor",
"jlpj": "jlpj",
"junig": "junig",
"Jona小时": "Jona小时",
"Your inbox is empty.": "你的收件箱为空。",
"No activity data available yet. Please check back in a few minutes.": "暂无活动数据。请几分钟后再查看。",
"Active Players (7d): ": "活跃玩家（7天）：",
"Total Bees: ": "蜜蜂总数：",
"⏳ 29m 10s left": "⏳ 剩余29分10秒",
"🌲 Resin": "🌲 树脂",
"🌸 Pollen": "🌸 花粉",
"🌼 Nectar": "🌼 花蜜",
"🌿 Leaves": "🌿 叶片",
"🍄 Spores": "🍄 孢子",
"🏗️ Build": "🏗️ 建筑",
"🟤 Mud": "🟤 泥土",
"🧪 Water": "🧪 水",
"🧼 Purify Water": "🧼 净化水",
"🩹 Repair": "🩹 维修",
"为确保PBeeBeeG为所有人提供公平愉快的体验，所有玩家应遵守以下规则。违规可能导致账号暂时或永久封停。": "为确保PBeeBeeG为所有人提供公平愉快的体验，所有玩家应遵守以下规则。违规可能导致账号暂时或永久封停。",
"为维护游戏安全和为所有用户提供公平环境，收集以下用户信息（用户名、IP地址、浏览器信息、邮箱地址、游戏操作）。本游戏还使用cookie确保只有已验证用户才能执行游戏操作。除法律或法院命令要求外，此数据不会与任何第三方共享。此数据不用于营销目的。本游戏使用合理且符合行业标准的机制保护此信息。有顾虑的用户不应创建账号并游玩此游戏。": "为维护游戏安全和为所有用户提供公平环境，收集以下用户信息（用户名、IP地址、浏览器信息、邮箱地址、游戏操作）。本游戏还使用cookie确保只有已验证用户才能执行游戏操作。除法律或法院命令要求外，此数据不会与任何第三方共享。此数据不用于营销目的。本游戏使用合理且符合行业标准的机制保护此信息。有顾虑的用户不应创建账号并游玩此游戏。",
"禁止故意利用漏洞、故障或空子谋取私利。如发现漏洞，请立即通过Discord向游戏工作人员报告。": "禁止故意利用漏洞、故障或空子谋取私利。如发现漏洞，请立即通过Discord向游戏工作人员报告。",
"⏳ 29m 8s left": "⏳ 剩余29分8秒",
" and ": " 和 ",
". Swarms start with a capacity of 5 members, which can be expanded by leveling up The Grand Broodnest.": "。蜂群初始容量为5名成员，可通过升级宏伟育幼巢来扩展。",
"10,000 Honey 🍯": "10,000 蜂蜜 🍯",
"10,000 Pollen 🌸": "10,000 花粉 🌸",
"A swarm provides a collaborative home for you and your fellow bees. Founding a new swarm requires ": "蜂群为你和同伴蜜蜂提供协作家园。创建新蜂群需要",
"Active Swarms": "活跃蜂群",
"Establish New Swarm (Restricted)": "建立新蜂群（受限）",
"Founder's Hall": "创建者大厅",
"No active swarms found. Be the first to found one!": "未找到活跃蜂群。成为第一个创建者吧！",
"\n                                    🍯 0.0% Tax\n                                ": "\n                                    🍯 0.0% 税率\n                                ",
"\n                            11h 29m\n                        ": "\n                            11小时29分\n                        ",
"\n                            Empty\n                        ": "\n                            空\n                        ",
"\n                            Full\n                        ": "\n                            满\n                        ",
"\n                    Last updated from tick log at 16:03:22\n                ": "\n                    最后从跳日志更新于 16:03:22\n                ",
"2 / 5 Beekeepers": "2 / 5 养蜂人",
"5 / 5 Beekeepers": "5 / 5 养蜂人",
"Full": "已满",
"No description.": "无描述。",
"Per Day ↕️": "每日 ↕️",
"Per Hour ↕️": "每小时 ↕️",
"Per Tick ↕️": "每跳 ↕️",
"Resource 🔼": "资源 🔼",
"Restricted": "受限",
"The first swarm!": "第一个蜂群！",
"Time Until ↕️": "剩余时间 ↕️",
"⏳ 29m 6s left": "⏳ 剩余29分6秒",
"⚓ Bumblebees": "⚓ 大黄蜂",
"⚓ Honeycomb": "⚓ 蜂巢",
"\n                            Register PBeeBeeG Account\n                        ": "\n                            注册PBeeBeeG账号\n                        ",
"\n                        Upgrade from Apprentice to protect your progress, secure your account, and use a custom username.\n                    ": "\n                        从学徒升级以保护进度、保障账号安全并使用自定义用户名。\n                    ",
"🏠 Become a Full Member": "🏠 成为正式会员",
"⏳ 29m 4s left": "⏳ 剩余29分4秒",
"Apprentice_111": "Apprentice_111",
"Apprentice_205": "Apprentice_205",
"Apprentice_209": "Apprentice_209",
"Apprentice_28": "Apprentice_28",
"Apprentice_29": "Apprentice_29",
"Apprentice_370": "Apprentice_370",
"Apprentice_38": "Apprentice_38",
"Apprentice_520": "Apprentice_520",
"Apprentice_549": "Apprentice_549",
"Apprentice_95": "Apprentice_95",
"Ashvek_Okami": "Ashvek_Okami",
"Awesomenator": "Awesomenator",
"Bee": "Bee",
"BuzzbuzzMF": "BuzzbuzzMF",
"Buzzzz": "Buzzzz",
"CaminaBuzzer": "CaminaBuzzer",
"Cat": "Cat",
"Catalyst": "Catalyst",
"Chimuzzz": "Chimuzzz",
"Demented": "Demented",
"Derenium": "Derenium",
"EddieG": "EddieG",
"Grethres": "Grethres",
"Grys": "Grys",
"ILLSTAFFER": "ILLSTAFFER",
"Infamous": "Infamous",
"JL__JL": "JL__JL",
"John_Beekeeper": "John_Beekeeper",
"Kadrak": "Kadrak",
"Kambio": "Kambio",
"KaosElf": "KaosElf",
"Knot": "Knot",
"Leo": "Leo",
"Loading profile...": "加载资料中……",
"Maliciousism": "Maliciousism",
"MoonCake": "MoonCake",
"Moshpit": "Moshpit",
"Multigrain": "Multigrain",
"Naam": "Naam",
"Nightchildkota": "Nightchildkota",
"Oaw117": "Oaw117",
"Rain": "Rain",
"Rapt": "Rapt",
"Reff": "Reff",
"RiggedyRekt": "RiggedyRekt",
"Spiritless": "Spiritless",
"SplaciK": "SplaciK",
"The_Lunchbox": "The_Lunchbox",
"Uluvyen": "Uluvyen",
"Unglued": "Unglued",
"Wtf": "Wtf",
"ZomBee": "ZomBee",
"Zythol": "Zythol",
"aasaconda": "aasaconda",
"aliez": "aliez",
"bagingle": "bagingle",
"bterreg": "bterreg",
"casinobears": "casinobears",
"dvora": "dvora",
"everywhere": "everywhere",
"helz": "helz",
"ipwnnoob": "ipwnnoob",
"jamminTheDev": "jamminTheDev",
"jamminTheDevCheat": "jamminTheDevCheat",
"jhons": "jhons",
"kukurbuu": "kukurbuu",
"nikita": "nikita",
"revlaw": "revlaw",
"setics": "setics",
"sirusi": "sirusi",
"unoplank": "unoplank",
"zusac": "zusac",
"⏳ 29m 2s left": "⏳ 剩余29分2秒",
"⚓ Anchor_Logit": "⚓ Anchor_Logit",
"⚓ Dashie": "⚓ Dashie",
"⚓ Iceshard": "⚓ Iceshard",
"⚓ Landstradd": "⚓ Landstradd",
"⚓ Sabonete": "⚓ Sabonete",
"⚓ Sion": "⚓ Sion",
"\n                            1d ago\n                        ": "\n                            1天前\n                        ",
"\n                    aasaconda\n                ": "\n                    aasaconda\n                ",
"Activity": "活动",
"Colony Members": "殖民地成员",
"Hive Level": "蜂巢等级",
"Last Online": "最后在线",
"Scout Sense": "侦察感知",
"Trait": "特性",
"create honey": "制作蜂蜜",
"leaves": "叶片",
"🏗️ Propolis Refinery": "🏗️ 蜂胶精炼厂",
"🏛️ Pheromone Pantry": "🏛️ 信息素储藏室",
"🐝 Tradeskill": "🐝 技能",
"💃 Waggle Dance Floor": "💃 摇摆舞地板",
"💤 Hibernation Hollow": "💤 冬眠洞穴",
"📚 Waxen Archives": "📚 蜡质档案馆",
"📬 Prepare Mail": "📬 准备邮件",
    "Current:":"当前:",
    "Hourly Decay:":"每小时衰减：",
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
"{{0}}h {{1}}m": "{{0}}小时{{1}}分",
"{{0}} Primal Resin ": "{{0}}原始树脂",
"Activate Charter (30 Days) - {{0}} ": "激活章程（30天）- {{0}}",
"+{{0}}h": "+{{0}}小时",
"{{0}}h {{1}}m)": "{{0}}小时{{1}}分）",
"{{0}}m {{1}}s)": "{{0}}分{{1}}秒）",
"{{0}}d {{1}}h {{2}}m": "{{0}}天{{1}}小时{{2}}分",
"{{0}}x)": "{{0}}倍）",
"{{0}}h": "{{0}}小时",
"{{0}} bees": "{{0}} 蜜蜂",
"+{{0}} 🌼, +{{1}} 🌸. Consumed -{{2}} 💧, -{{0}} 🍯.": "+{{0}} 🌼，+{{1}} 🌸。消耗 -{{2}} 💧，-{{3}} 🍯。",
"⏳ {{0}}d {{1}}h {{2}}m": "⏳ {{0}}天 {{1}}小时 {{2}}分",
"⏳ {{0}}d {{1}}": "⏳ {{0}}天 {{1}}",
"[Tick] Your {{0}} bee(s)": "[Tick] 你的 {{0}} 蜜蜂",
"🔭 L{{0}}": "🔭 {{0}}级",
"⏳ {{0}}m {{1}}s left": "⏳ 剩余{{0}}分{{1}}秒",
"🎓 Bee Academy (Lvl {{0}})": "🎓 蜂学院（{{0}}级）",
"🏗️ Propolis Refinery (Lvl {{0}})": "🏗️ 蜂胶精炼厂（{{0}}级）",
"🏛️ Pheromone Pantry (Level {{0}})": "🏛️ 信息素储藏室（{{0}}级）",
"🏺 Export Troughs (Lvl {{0}})": "🏺 出口槽（{{0}}级）",
"💃 Waggle Dance Floor (Lvl {{0}})": "💃 摇摆舞地板（{{0}}级）",
"📚 Waxen Archives (Lvl {{0}})": "📚 蜡质档案馆（{{0}}级）",
". Consumed -{{0}} 💧, -{{1}} 🍯.": "。消耗 -{{0}} 💧，-{{1}} 🍯。",
"\n                                    Bee #{{0}}\n                                    ": "\n                                    蜜蜂 #{{0}}\n                                    ",
"\n                                    Bee #{{0}}\n                                    ": "\n                                    蜜蜂 #{{0}}\n                                    ",
"(Pantry Lvl {{0}})": "（储藏室{{0}}级）",

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
    "The ": "",
    "gamemaster@idleartisan.com": "gamemaster@idleartisan.com",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "x)": "x)",
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
    "settings": "设置",
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
