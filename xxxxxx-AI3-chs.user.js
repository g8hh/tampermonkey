// ==UserScript==
// @name         xxxx 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 xxxxx (https://www.xxxxx.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game xxxxx.高效汉化 + Canvas 2D 汉化，内置 DodecaDragons 翻译
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
            "Costs {{0}} gold": "花费{{0}}金币",
            "Level {{0}}": "等级{{0}}",
            "{{0}} x {{1}}": "{{0}} × {{1}}",

            // === 分类模板 ===
            "{{resource}}: {{0}}": "{{resource}}：{{0}}",
            "Get {{0}} {{resource*}}": "获得 {{0}} {{resource*}}",
            "Craft {{item*|,|和}}": "制作{{item*|,|和}}",

            // === 通用列表 ===
            "Items: {{*}}": "物品：{{*}}",
            "Mats: {{*|, |、}}": "材料：{{*|, |、}}",

            // === 数字占位符 ===
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
