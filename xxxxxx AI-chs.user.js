// ==UserScript==
// @name         xxxx 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 xxxxx (https://www.xxxxx.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game xxxxx.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://www.zed.city/icons/favicon.svg
// @license      MIT
// @include      *https://www.xxxxx.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
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
    "": "",
    "": "",
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
