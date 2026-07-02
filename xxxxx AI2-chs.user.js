// ==UserScript==
// @name         xxxx 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 xxxxx (https://www.xxxxx.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game xxxxx.
// @author       好阳光的小锅巴 & 麦子、人民当家做主
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