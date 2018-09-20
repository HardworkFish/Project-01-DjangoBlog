/*! Copyright 2018, u3xyz.com锛沚uild time: 2018-04-07 */
webpackJsonp([3], [function (e, t) {
    e.exports = u3xyz_20b2fb0c19afd10a0379
}, function (e, t, n) {
    e.exports = n(0)(12)
}, function (e, t, n) {
    e.exports = n(0)(3)
}, function (e, t, n) {
    e.exports = n(0)(4)
}, function (e, t, n) {
    e.exports = n(0)(5)
}, function (e, t, n) {
    e.exports = n(0)(15)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.INIT_PAGI_DEFAULT = {size: 5, itemsPerPage: 10, curPageNum: 1, listNum: 0, list: []}, t.APP_TITLE = "鍙充笁鐨勫崥瀹�"
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.FETCH_ARTICLE_LIST = "FETCH_ARTICLE_LIST", t.RECEIVE_ARTICLE_LIST = "RECEIVE_ARTICLE_LIST", t.FETCH_ARTICLE_LIST_FAIL = "FETCH_ARTICLE_LIST_FAIL", t.FETCH_ARTICLE_DETAIL = "FETCH_ARTICLE_DETAIL", t.RECEIVE_ARTICLE_DETAIL = "RECEIVE_ARTICLE_DETAIL", t.RECEIVE_ARTICLE_DETAIL_NORMAL = "RECEIVE_ARTICLE_DETAIL_NORMAL", t.RECEIVE_ARTICLE_DETAIL_RICHTEXT = "RECEIVE_ARTICLE_DETAIL_RICHTEXT", t.RECEIVE_ARTICLE_DETAIL_MARKDOWN = "RECEIVE_ARTICLE_DETAIL_MARKDOWN", t.FETCH_ARTICLE_DETAIL_FAIL = "FETCH_ARTICLE_DETAIL_FAIL", t.ARTICLE_NOT_EXIST = "ARTICLE_NOT_EXIST", t.NAV_SELECTED_BY_INDEX = "NAV_SELECTED_BY_INDEX", t.NAV_SELECTED_BY_NAME = "NAV_SELECTED_BY_NAME", t.NAV_SELECTED_CLEAR = "NAV_SELECTED_CLEAR", t.SET_MK_TITLES = "SET_MK_TITLES", t.SET_MK_TITLES_LEN = "SET_MK_TITLES_LEN", t.UPDATE_MK_TITLE_HIGHLIGHT = "UPDATE_MK_TITLE_HIGHLIGHT", t.FETCH_COMMENT_LIST = "FETCH_COMMENT_LIST", t.RECEIVE_COMMENT_LIST = "RECEIVE_COMMENT_LIST", t.FETCH_COMMENT_FAIL = "FETCH_COMMENT_FAIL", t.SET_REPLAY_COMMENT = "SET_REPLAY_COMMENT"
}, function (e, t, n) {
    e.exports = n(0)(13)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(10), s = r(i), o = n(43), u = r(o), a = n(45), l = r(a), c = void 0;
    try {
        document.createElement && (c = "/cgi")
    } catch (e) {
        c = "http://127.0.0.1:8083/cgi"
    }
    s.default.defaults.baseURL = "/", s.default.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded", Array.isArray(l.default.request) && l.default.request.length && s.default.interceptors.request.use(l.default.request), Array.isArray(l.default.response) && l.default.response.length && s.default.interceptors.response.use(l.default.response);
    var h = new u.default({host: c});
    t.default = h.apis
}, function (e, t, n) {
    e.exports = n(0)(16)
}, function (e, t, n) {
    (function (t) {
        (function () {
            "use strict";

            function t(e) {
                this.tokens = [], this.tokens.links = {}, this.options = e || h.defaults, this.rules = f.normal, this.options.gfm && (this.options.tables ? this.rules = f.tables : this.rules = f.gfm)
            }

            function n(e, t) {
                if (this.options = t || h.defaults, this.links = e, this.rules = d.normal, this.renderer = this.options.renderer || new r, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                this.options.gfm ? this.options.breaks ? this.rules = d.breaks : this.rules = d.gfm : this.options.pedantic && (this.rules = d.pedantic)
            }

            function r(e) {
                this.options = e || {}
            }

            function i(e) {
                this.tokens = [], this.token = null, this.options = e || h.defaults, this.options.renderer = this.options.renderer || new r, this.renderer = this.options.renderer, this.renderer.options = this.options
            }

            function s(e, t) {
                return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }

            function o(e) {
                return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (e, t) {
                    return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                })
            }

            function u(e, t) {
                return e = e.source, t = t || "", function n(r, i) {
                    return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
                }
            }

            function a(e, t) {
                return p[" " + e] || (/^[^:]+:\/*[^\/]*$/.test(e) ? p[" " + e] = e + "/" : p[" " + e] = e.replace(/[^\/]*$/, "")), e = p[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t
            }

            function l() {
            }

            function c(e) {
                for (var t, n, r = 1; r < arguments.length; r++) {
                    t = arguments[r];
                    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }

            function h(e, n, r) {
                if (r || "function" == typeof n) {
                    r || (r = n, n = null), n = c({}, h.defaults, n || {});
                    var o, u, a = n.highlight, l = 0;
                    try {
                        o = t.lex(e, n)
                    } catch (e) {
                        return r(e)
                    }
                    u = o.length;
                    var f = function (e) {
                        if (e) return n.highlight = a, r(e);
                        var t;
                        try {
                            t = i.parse(o, n)
                        } catch (t) {
                            e = t
                        }
                        return n.highlight = a, e ? r(e) : r(null, t)
                    };
                    if (!a || a.length < 3) return f();
                    if (delete n.highlight, !u) return f();
                    for (; l < o.length; l++) !function (e) {
                        "code" !== e.type ? --u || f() : a(e.text, e.lang, function (t, n) {
                            return t ? f(t) : null == n || n === e.text ? --u || f() : (e.text = n, e.escaped = !0, void(--u || f()))
                        })
                    }(o[l])
                } else try {
                    return n && (n = c({}, h.defaults, n)), i.parse(t.lex(e, n), n)
                } catch (e) {
                    if (e.message += "\nPlease report this to https://github.com/chjj/marked.", (n || h.defaults).silent) return "<p>An error occurred:</p><pre>" + s(e.message + "", !0) + "</pre>";
                    throw e
                }
            }

            var f = {
                newline: /^\n+/,
                code: /^( {4}[^\n]+\n*)+/,
                fences: l,
                hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                nptable: l,
                lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                table: l,
                paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                text: /^[^\n]+/
            };
            f.bullet = /(?:[*+-]|\d+\.)/, f.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, f.item = u(f.item, "gm")(/bull/g, f.bullet)(), f.list = u(f.list)(/bull/g, f.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + f.def.source + ")")(), f.blockquote = u(f.blockquote)("def", f.def)(), f._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", f.html = u(f.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, f._tag)(), f.paragraph = u(f.paragraph)("hr", f.hr)("heading", f.heading)("lheading", f.lheading)("blockquote", f.blockquote)("tag", "<" + f._tag)("def", f.def)(), f.normal = c({}, f), f.gfm = c({}, f.normal, {
                fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
                paragraph: /^/,
                heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
            }), f.gfm.paragraph = u(f.paragraph)("(?!", "(?!" + f.gfm.fences.source.replace("\\1", "\\2") + "|" + f.list.source.replace("\\1", "\\3") + "|")(), f.tables = c({}, f.gfm, {
                nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
            }), t.rules = f, t.lex = function (e, n) {
                return new t(n).lex(e)
            }, t.prototype.lex = function (e) {
                return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
            }, t.prototype.token = function (e, t, n) {
                for (var r, i, s, o, u, a, l, c, h, e = e.replace(/^ +$/gm, ""); e;) if ((s = this.rules.newline.exec(e)) && (e = e.substring(s[0].length), s[0].length > 1 && this.tokens.push({type: "space"})), s = this.rules.code.exec(e)) e = e.substring(s[0].length), s = s[0].replace(/^ {4}/gm, ""), this.tokens.push({
                    type: "code",
                    text: this.options.pedantic ? s : s.replace(/\n+$/, "")
                }); else if (s = this.rules.fences.exec(e)) e = e.substring(s[0].length), this.tokens.push({
                    type: "code",
                    lang: s[2],
                    text: s[3] || ""
                }); else if (s = this.rules.heading.exec(e)) e = e.substring(s[0].length), this.tokens.push({
                    type: "heading",
                    depth: s[1].length,
                    text: s[2]
                }); else if (t && (s = this.rules.nptable.exec(e))) {
                    for (e = e.substring(s[0].length), a = {
                        type: "table",
                        header: s[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                        align: s[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: s[3].replace(/\n$/, "").split("\n")
                    }, c = 0; c < a.align.length; c++) /^ *-+: *$/.test(a.align[c]) ? a.align[c] = "right" : /^ *:-+: *$/.test(a.align[c]) ? a.align[c] = "center" : /^ *:-+ *$/.test(a.align[c]) ? a.align[c] = "left" : a.align[c] = null;
                    for (c = 0; c < a.cells.length; c++) a.cells[c] = a.cells[c].split(/ *\| */);
                    this.tokens.push(a)
                } else if (s = this.rules.lheading.exec(e)) e = e.substring(s[0].length), this.tokens.push({
                    type: "heading",
                    depth: "=" === s[2] ? 1 : 2,
                    text: s[1]
                }); else if (s = this.rules.hr.exec(e)) e = e.substring(s[0].length), this.tokens.push({type: "hr"}); else if (s = this.rules.blockquote.exec(e)) e = e.substring(s[0].length), this.tokens.push({type: "blockquote_start"}), s = s[0].replace(/^ *> ?/gm, ""), this.token(s, t, !0), this.tokens.push({type: "blockquote_end"}); else if (s = this.rules.list.exec(e)) {
                    for (e = e.substring(s[0].length), o = s[2], this.tokens.push({
                        type: "list_start",
                        ordered: o.length > 1
                    }), s = s[0].match(this.rules.item), r = !1, h = s.length, c = 0; c < h; c++) a = s[c], l = a.length, a = a.replace(/^ *([*+-]|\d+\.) +/, ""), ~a.indexOf("\n ") && (l -= a.length, a = this.options.pedantic ? a.replace(/^ {1,4}/gm, "") : a.replace(new RegExp("^ {1," + l + "}", "gm"), "")), this.options.smartLists && c !== h - 1 && (u = f.bullet.exec(s[c + 1])[0], o === u || o.length > 1 && u.length > 1 || (e = s.slice(c + 1).join("\n") + e, c = h - 1)), i = r || /\n\n(?!\s*$)/.test(a), c !== h - 1 && (r = "\n" === a.charAt(a.length - 1), i || (i = r)), this.tokens.push({type: i ? "loose_item_start" : "list_item_start"}), this.token(a, !1, n), this.tokens.push({type: "list_item_end"});
                    this.tokens.push({type: "list_end"})
                } else if (s = this.rules.html.exec(e)) e = e.substring(s[0].length), this.tokens.push({
                    type: this.options.sanitize ? "paragraph" : "html",
                    pre: !this.options.sanitizer && ("pre" === s[1] || "script" === s[1] || "style" === s[1]),
                    text: s[0]
                }); else if (!n && t && (s = this.rules.def.exec(e))) e = e.substring(s[0].length), this.tokens.links[s[1].toLowerCase()] = {
                    href: s[2],
                    title: s[3]
                }; else if (t && (s = this.rules.table.exec(e))) {
                    for (e = e.substring(s[0].length), a = {
                        type: "table",
                        header: s[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                        align: s[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: s[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                    }, c = 0; c < a.align.length; c++) /^ *-+: *$/.test(a.align[c]) ? a.align[c] = "right" : /^ *:-+: *$/.test(a.align[c]) ? a.align[c] = "center" : /^ *:-+ *$/.test(a.align[c]) ? a.align[c] = "left" : a.align[c] = null;
                    for (c = 0; c < a.cells.length; c++) a.cells[c] = a.cells[c].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                    this.tokens.push(a)
                } else if (t && (s = this.rules.paragraph.exec(e))) e = e.substring(s[0].length), this.tokens.push({
                    type: "paragraph",
                    text: "\n" === s[1].charAt(s[1].length - 1) ? s[1].slice(0, -1) : s[1]
                }); else if (s = this.rules.text.exec(e)) e = e.substring(s[0].length), this.tokens.push({
                    type: "text",
                    text: s[0]
                }); else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                return this.tokens
            };
            var d = {
                escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
                url: l,
                tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
                link: /^!?\[(inside)\]\(href\)/,
                reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
                br: /^ {2,}\n(?!\s*$)/,
                del: l,
                text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
            };
            d._inside = /(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/, d._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, d.link = u(d.link)("inside", d._inside)("href", d._href)(), d.reflink = u(d.reflink)("inside", d._inside)(), d.normal = c({}, d), d.pedantic = c({}, d.normal, {
                strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
            }), d.gfm = c({}, d.normal, {
                escape: u(d.escape)("])", "~|])")(),
                url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                del: /^~~(?=\S)([\s\S]*?\S)~~/,
                text: u(d.text)("]|", "~]|")("|", "|https?://|")()
            }), d.breaks = c({}, d.gfm, {
                br: u(d.br)("{2,}", "*")(),
                text: u(d.gfm.text)("{2,}", "*")()
            }), n.rules = d, n.output = function (e, t, r) {
                return new n(t, r).output(e)
            }, n.prototype.output = function (e) {
                for (var t, n, r, i, o = ""; e;) if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), o += i[1]; else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = s(":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1])), r = this.mangle("mailto:") + n) : (n = s(i[1]), r = n), o += this.renderer.link(r, null, n); else if (this.inLink || !(i = this.rules.url.exec(e))) {
                    if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : s(i[0]) : i[0]; else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(i, {
                        href: i[2],
                        title: i[3]
                    }), this.inLink = !1; else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
                        if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                            o += i[0].charAt(0), e = i[0].substring(1) + e;
                            continue
                        }
                        this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1
                    } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), o += this.renderer.strong(this.output(i[2] || i[1])); else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] || i[1])); else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), o += this.renderer.codespan(s(i[2].trim(), !0)); else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), o += this.renderer.br(); else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), o += this.renderer.del(this.output(i[1])); else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), o += this.renderer.text(s(this.smartypants(i[0]))); else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                } else e = e.substring(i[0].length), n = s(i[1]), r = n, o += this.renderer.link(r, null, n);
                return o
            }, n.prototype.outputLink = function (e, t) {
                var n = s(t.href), r = t.title ? s(t.title) : null;
                return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, s(e[1]))
            }, n.prototype.smartypants = function (e) {
                return this.options.smartypants ? e.replace(/---/g, "鈥�").replace(/--/g, "鈥�").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1鈥�").replace(/'/g, "鈥�").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1鈥�").replace(/"/g, "鈥�").replace(/\.{3}/g, "鈥�") : e
            }, n.prototype.mangle = function (e) {
                if (!this.options.mangle) return e;
                for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
                return n
            }, r.prototype.code = function (e, t, n) {
                if (this.options.highlight) {
                    var r = this.options.highlight(e, t);
                    null != r && r !== e && (n = !0, e = r)
                }
                return t ? '<pre><code class="' + this.options.langPrefix + s(t, !0) + '">' + (n ? e : s(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : s(e, !0)) + "\n</code></pre>"
            }, r.prototype.blockquote = function (e) {
                return "<blockquote>\n" + e + "</blockquote>\n"
            }, r.prototype.html = function (e) {
                return e
            }, r.prototype.heading = function (e, t, n) {
                return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
            }, r.prototype.hr = function () {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, r.prototype.list = function (e, t) {
                var n = t ? "ol" : "ul";
                return "<" + n + ">\n" + e + "</" + n + ">\n"
            }, r.prototype.listitem = function (e) {
                return "<li>" + e + "</li>\n"
            }, r.prototype.paragraph = function (e) {
                return "<p>" + e + "</p>\n"
            }, r.prototype.table = function (e, t) {
                return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
            }, r.prototype.tablerow = function (e) {
                return "<tr>\n" + e + "</tr>\n"
            }, r.prototype.tablecell = function (e, t) {
                var n = t.header ? "th" : "td";
                return (t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
            }, r.prototype.strong = function (e) {
                return "<strong>" + e + "</strong>"
            }, r.prototype.em = function (e) {
                return "<em>" + e + "</em>"
            }, r.prototype.codespan = function (e) {
                return "<code>" + e + "</code>"
            }, r.prototype.br = function () {
                return this.options.xhtml ? "<br/>" : "<br>"
            }, r.prototype.del = function (e) {
                return "<del>" + e + "</del>"
            }, r.prototype.link = function (e, t, n) {
                if (this.options.sanitize) {
                    try {
                        var r = decodeURIComponent(o(e)).replace(/[^\w:]/g, "").toLowerCase()
                    } catch (e) {
                        return n
                    }
                    if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return n
                }
                this.options.baseUrl && !_.test(e) && (e = a(this.options.baseUrl, e));
                var i = '<a href="' + e + '"';
                return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>"
            }, r.prototype.image = function (e, t, n) {
                this.options.baseUrl && !_.test(e) && (e = a(this.options.baseUrl, e));
                var r = '<img src="' + e + '" alt="' + n + '"';
                return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
            }, r.prototype.text = function (e) {
                return e
            }, i.parse = function (e, t, n) {
                return new i(t, n).parse(e)
            }, i.prototype.parse = function (e) {
                this.inline = new n(e.links, this.options, this.renderer), this.tokens = e.reverse();
                for (var t = ""; this.next();) t += this.tok();
                return t
            }, i.prototype.next = function () {
                return this.token = this.tokens.pop()
            }, i.prototype.peek = function () {
                return this.tokens[this.tokens.length - 1] || 0
            }, i.prototype.parseText = function () {
                for (var e = this.token.text; "text" === this.peek().type;) e += "\n" + this.next().text;
                return this.inline.output(e)
            }, i.prototype.tok = function () {
                switch (this.token.type) {
                    case"space":
                        return "";
                    case"hr":
                        return this.renderer.hr();
                    case"heading":
                        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                    case"code":
                        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                    case"table":
                        var e, t, n, r, i = "", s = "";
                        for (n = "", e = 0; e < this.token.header.length; e++) ({
                            header: !0,
                            align: this.token.align[e]
                        }), n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                            header: !0,
                            align: this.token.align[e]
                        });
                        for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                            for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                                header: !1,
                                align: this.token.align[r]
                            });
                            s += this.renderer.tablerow(n)
                        }
                        return this.renderer.table(i, s);
                    case"blockquote_start":
                        for (var s = ""; "blockquote_end" !== this.next().type;) s += this.tok();
                        return this.renderer.blockquote(s);
                    case"list_start":
                        for (var s = "", o = this.token.ordered; "list_end" !== this.next().type;) s += this.tok();
                        return this.renderer.list(s, o);
                    case"list_item_start":
                        for (var s = ""; "list_item_end" !== this.next().type;) s += "text" === this.token.type ? this.parseText() : this.tok();
                        return this.renderer.listitem(s);
                    case"loose_item_start":
                        for (var s = ""; "list_item_end" !== this.next().type;) s += this.tok();
                        return this.renderer.listitem(s);
                    case"html":
                        var u = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                        return this.renderer.html(u);
                    case"paragraph":
                        return this.renderer.paragraph(this.inline.output(this.token.text));
                    case"text":
                        return this.renderer.paragraph(this.parseText())
                }
            };
            var p = {}, _ = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
            l.exec = l, h.options = h.setOptions = function (e) {
                return c(h.defaults, e), h
            }, h.defaults = {
                gfm: !0,
                tables: !0,
                breaks: !1,
                pedantic: !1,
                sanitize: !1,
                sanitizer: null,
                mangle: !0,
                smartLists: !1,
                silent: !1,
                highlight: null,
                langPrefix: "lang-",
                smartypants: !1,
                headerPrefix: "",
                renderer: new r,
                xhtml: !1,
                baseUrl: null
            }, h.Parser = i, h.parser = i.parse, h.Renderer = r, h.Lexer = t, h.lexer = t.lex, h.InlineLexer = n, h.inlineLexer = n.output, h.parse = h, e.exports = h
        }).call(function () {
            return this || ("undefined" != typeof window ? window : t)
        }())
    }).call(t, n(8))
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = e.$options.pageTitle;
        if (t) return "function" == typeof t ? t.call(e) : t
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(6), s = {
        mounted: function () {
            var e = r(this);
            e && (document.title = e + " - " + i.APP_TITLE)
        }
    };
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.isFunction = void 0;
    var r = n(39), i = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r);
    t.default = {windowEvent: i.default};
    t.isFunction = function (e) {
        return "function" == typeof e
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var i = n(1), s = r(i), o = n(15), u = n(54), a = r(u), l = (0, o.createApp)(), c = l.app, h = l.router,
        f = l.store;
    s.default.mixin({
        beforeRouteUpdate: function (e, t, n) {
            var r = this.$options.asyncData;
            r ? r({store: this.$store, route: e}).then(n).catch(n) : n()
        }
    }), (0, a.default)(s.default), window.__INITIAL_STATE__ && f.replaceState(window.__INITIAL_STATE__), h.onReady(function () {
        h.beforeResolve(function (e, t, n) {
            var r = h.getMatchedComponents(e), i = h.getMatchedComponents(t), s = !1, o = r.filter(function (e, t) {
                return s || (s = i[t] !== e)
            }), u = o.map(function (e) {
                return e.asyncData
            }).filter(function (e) {
                return e
            });
            if (!u.length) return n();
            Promise.all(u.map(function (t) {
                return t({store: f, route: e})
            })).then(function () {
                n()
            }).catch(n)
        }), c.$mount("#app")
    }), setTimeout(function () {
        window.$tj()
    }, 1e3)
}, function (e, t, n) {
    "use strict";
    (function (e) {
        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function i(t) {
            var n = (0, l.createRouter)(), r = (0, c.createStore)();
            return e.U3 = {appTitle: f.APP_TITLE}, (0, h.sync)(r, n), {
                app: new o.default({
                    router: n,
                    store: r,
                    ssrContext: t,
                    render: function (e) {
                        return e(a.default)
                    }
                }), router: n, store: r
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.createApp = i;
        var s = n(1), o = r(s), u = n(16), a = r(u), l = n(36), c = n(40), h = n(50), f = n(6), d = n(51), p = r(d),
            _ = n(53), g = r(_);
        o.default.use(p.default), o.default.use(g.default)
    }).call(t, n(8))
}, function (e, t, n) {
    n(17);
    var r = n(4)(n(19), n(35), null, null);
    e.exports = r.exports
}, function (e, t, n) {
    var r = n(18);
    "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    n(3)("6fd35277", r, !0)
}, function (e, t, n) {
    t = e.exports = n(2)(), t.push([e.i, "", ""])
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, s = n(20), o = r(s), u = n(25), a = r(u), l = n(30), c = r(l), h = n(5);
    t.default = {
        components: {gHeader: o.default, gFooter: a.default, gBackToTop: c.default}, data: function () {
            return {backToTopShow: !1}
        }, methods: {}, computed: i({}, (0, h.mapGetters)(["gNav"])), created: function () {
            var e, t = this;
            this.scrollFn = function () {
                e && clearTimeout(e), e = setTimeout(function () {
                    t.backToTopShow = document.documentElement.scrollTop > 200
                }, 30)
            }
        }, mounted: function () {
            !this.systemInfo.isMobile && window.addEventListener("scroll", this.scrollFn)
        }, destroy: function () {
            !this.systemInfo.isMobile && window.removeEventListener("scroll", this.scrollFn)
        }
    }
}, function (e, t, n) {
    n(21);
    var r = n(4)(n(23), n(24), null, null);
    e.exports = r.exports
}, function (e, t, n) {
    var r = n(22);
    "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    n(3)("1c5adeab", r, !0)
}, function (e, t, n) {
    t = e.exports = n(2)(), t.push([e.i, "", ""])
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, i = n(5);
    t.default = {
        props: {
            nav: {
                type: Array, defaut: function () {
                    return []
                }
            }
        }, methods: r({}, (0, i.mapActions)(["selectNavItemByIndex"]), {
            routeTo: function (e) {
                this.selectNavItemByIndex(e), this.$router.push({path: this.nav[e].path})
            }
        })
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "c-header"}, [n("div", {staticClass: "g-layout header g-clearfix"}, [n("ul", {staticClass: "link"}, e._l(e.nav, function (t, r) {
                return n("li", {
                    class: {selected: t.selected}, on: {
                        click: function (t) {
                            e.routeTo(r)
                        }
                    }
                }, [e._v(e._s(t.text) + "\n      ")])
            })), e._v(" "), e._m(0)])])
        }, staticRenderFns: [function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "search"}, [n("input", {attrs: {type: "text", placeholder: "todo..."}})])
        }]
    }
}, function (e, t, n) {
    n(26);
    var r = n(4)(n(28), n(29), null, null);
    e.exports = r.exports
}, function (e, t, n) {
    var r = n(27);
    "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    n(3)("591dadda", r, !0)
}, function (e, t, n) {
    t = e.exports = n(2)(), t.push([e.i, "", ""])
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        data: function () {
            return {year: (new Date).getFullYear()}
        }
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "c-footer"}, [n("div", {staticClass: "g-layout footer"}, [n("span", [e._v("漏2017聽-聽" + e._s(e.year) + "聽")]), e._v(" "), n("span", [e._v("U3xyz.com聽鐗堟潈鎵€鏈�")]), e._v(" "), n("span", [e._v("聽绮CP澶�17013455鍙�")]), e._v(" "), e._m(0)])])
        }, staticRenderFns: [function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("dl", {staticClass: "friend-links"}, [n("dt", [e._v("閾炬帴锛�")]), e._v(" "), n("dd", [n("a", {
                attrs: {
                    href: "https://www.nihaoshijie.com.cn/",
                    title: "鍚曞皬楦ｅ墠绔崥瀹�",
                    target: "_blank"
                }
            }, [e._v("鍚曞皬楦ｅ墠绔崥瀹�")]), e._v(" "), n("a", {
                attrs: {
                    href: "https://refined-x.com/",
                    title: "鍓嶇璺笂",
                    target: "_blank"
                }
            }, [e._v("鍓嶇璺笂")])])])
        }]
    }
}, function (e, t, n) {
    n(31);
    var r = n(4)(n(33), n(34), null, null);
    e.exports = r.exports
}, function (e, t, n) {
    var r = n(32);
    "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    n(3)("2d62c930", r, !0)
}, function (e, t, n) {
    t = e.exports = n(2)(), t.push([e.i, "", ""])
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        props: {show: {required: !0, type: Boolean}},
        methods: {
            doBackToTop: function () {
                function e() {
                    var t = document.documentElement.scrollTop;
                    document.documentElement.scrollTop = t - .2 * t, document.documentElement.scrollTop > 0 && window.requestAnimationFrame(e)
                }

                e()
            }
        }
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("transition", {attrs: {name: "fade"}}, [e.show ? n("div", {
                staticClass: "c-back-top",
                on: {
                    click: function (t) {
                        e.doBackToTop()
                    }
                }
            }, [e._v("杩斿洖椤堕儴")]) : e._e()])
        }, staticRenderFns: []
    }
}, function (e, t) {
    e.exports = {
        render: function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "app",
                attrs: {id: "app"}
            }, [n("g-header", {attrs: {nav: e.gNav}}), e._v(" "), n("div", {staticClass: "views g-layout"}, [n("router-view")], 1), e._v(" "), n("g-footer"), e._v(" "), n("g-back-to-top", {attrs: {show: e.backToTopShow}})], 1)
        }, staticRenderFns: []
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function i() {
        return new a.default({
            mode: "history",
            fallback: !1,
            routes: [{
                path: "/index", name: "index", component: function () {
                    return n.e(1).then(n.bind(null, 55))
                }
            }, {
                path: "/detail/:aid", name: "detail", component: function () {
                    return n.e(0).then(n.bind(null, 56))
                }
            }, {
                path: "/about", name: "about", component: function () {
                    return n.e(2).then(n.bind(null, 57))
                }
            }, {path: "/", redirect: "/index"}]
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.createRouter = i;
    var s = n(1), o = r(s), u = n(37), a = r(u);
    n(38), o.default.use(a.default)
}, function (e, t, n) {
    e.exports = n(0)(14)
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        s.isSupportedEvtType(e) && s[e].push(t)
    }

    function i(e, t) {
        s.isSupportedEvtType(e) && s[e].splice(s[e].indexOf(t), 1)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = {
        resize: [], scroll: [], click: [], resizeTimer: null, scrollTimer: null, isSupportedEvtType: function (e) {
            return "resize|scroll|click".indexOf(e) > -1
        }, isInited: !1
    };
    t.default = {
        addWindowEvent: r, removeWindowEvent: i, init: function () {
            s.isInited || (s.isInited = !0, window.addEventListener("resize", function () {
                s.resizeTimer && clearTimeout(s.resizeTimer), s.resizeTimer = setTimeout(function () {
                    s.resize.forEach(function (e) {
                        return e()
                    })
                }, 50)
            }), window.addEventListener("scroll", function () {
                s.scrollTimer && clearTimeout(s.scrollTimer), s.scrollTimer = setTimeout(function () {
                    s.scroll.forEach(function (e) {
                        return e()
                    })
                }, 50)
            }), window.addEventListener("click", function (e) {
                s.click.forEach(function (t) {
                    return t(e)
                })
            }))
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function i() {
        return new a.default.Store({
            state: {appName: "appName", title: "home"},
            modules: {index: f.default, detail: p.default, about: g.default, app: c.default},
            strict: !1
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.createStore = i;
    var s = n(1), o = r(s), u = n(5), a = r(u), l = n(41), c = r(l), h = n(42), f = r(h), d = n(46), p = r(d),
        _ = n(49), g = r(_);
    o.default.use(a.default)
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i, s = n(7), o = {
        gNav: [{path: "/index", icon: "nav-goods", text: "棣栭〉", selected: !1}, {
            path: "/about",
            icon: "nav-order",
            text: "鍏充簬",
            selected: !1
        }]
    }, u = (i = {}, r(i, s.NAV_SELECTED_BY_INDEX, function (e, t) {
        e.gNav = e.gNav.map(function (e, n) {
            return e.selected = n === t, e
        })
    }), r(i, s.NAV_SELECTED_BY_NAME, function (e, t) {
        e.gNav = e.gNav.map(function (e) {
            return t === e.text ? e.selected = !0 : e.selected = !1, e
        })
    }), r(i, s.NAV_SELECTED_CLEAR, function (e) {
        e.gNav = e.gNav.map(function (e) {
            return e.selected = !1, e
        })
    }), i), a = {
        selectNavItemByIndex: function (e, t) {
            (0, e.commit)(s.NAV_SELECTED_BY_INDEX, t)
        }, selectNavItemByName: function (e, t) {
            (0, e.commit)(s.NAV_SELECTED_BY_NAME, t)
        }, clearNavItemSelect: function (e) {
            (0, e.commit)(s.NAV_SELECTED_CLEAR)
        }
    }, l = {
        gNav: function (e) {
            return e.gNav
        }
    };
    t.default = {state: o, actions: a, mutations: u, getters: l}
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i, s = n(7), o = n(6), u = n(9), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(u), l = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(function (e) {
        return {
            brief: "",
            content: "",
            id: "",
            title: "",
            read_num: "",
            tags: [""],
            publish_time: "",
            status: "",
            type: "",
            detailUrl: ""
        }
    }), c = {
        articleList: l,
        pagi: {total: 0, itemsPerPage: o.INIT_PAGI_DEFAULT.itemsPerPage, curPageNum: o.INIT_PAGI_DEFAULT.curPageNum},
        articleCgied: !1
    }, h = (i = {}, r(i, s.FETCH_ARTICLE_LIST, function (e, t) {
        e.pagi.curPageNum = t
    }), r(i, s.RECEIVE_ARTICLE_LIST, function (e, t) {
        e.articleList = t.articleList, e.pagi.total = t.total, e.articleCgied = !0
    }), r(i, s.FETCH_ARTICLE_LIST_FAIL, function (e) {
        e.articleList = l
    }), i), f = {
        getArticleList: function (e, t) {
            var n = e.state, r = e.commit;
            return r(s.FETCH_ARTICLE_LIST, t), a.default.getArticleList({
                data: {
                    size: n.pagi.itemsPerPage,
                    page: t
                }
            }).then(function (e) {
                var t = e.data, n = t.result.total, i = t.result.list.map(function (e) {
                    return e.detailUrl = "detail/" + e.id, e
                });
                r(s.RECEIVE_ARTICLE_LIST, {articleList: i, total: n})
            })
        }
    };
    t.default = {state: c, actions: f, mutations: h}
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), o = n(44), u = r(o), a = n(10), l = r(a), c = n(13), h = function () {
        function e(t) {
            i(this, e);
            var n = t.host;
            this.host = n, this.apisConf = u.default, this.apis = {}, this._setupApis()
        }

        return s(e, [{
            key: "_setupApis", value: function () {
                for (var e in this.apisConf) this.apis[e] = this._request({
                    url: "" + this.host + this.apisConf[e].url,
                    method: this.apisConf[e].method || "get"
                })
            }
        }, {
            key: "_request", value: function (e) {
                var t = this;
                return function (n) {
                    n = Object.assign({}, e, n);
                    var r = n, i = r.beforeRequest;
                    i && (0, c.isFunction)(i) && (n = i(n));
                    var s = n, o = s.url, u = s.method, a = s.data, h = {url: t._toRestfulUrl(o, a), method: u};
                    return "get" !== u && (h.data = a), (0, l.default)(h)
                }
            }
        }, {
            key: "_toRestfulUrl", value: function (e, t) {
                return -1 === e.indexOf(":") ? e : e.split("/:").map(function (e) {
                    return t[e] || e
                }).join("/")
            }
        }]), e
    }();
    t.default = h
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        getArticleList: {
            desc: "鍒嗛〉鏌ヨ鏂囩珷鍒楄〃",
            url: "/article/:page/:size",
            method: "get"
        },
        getArticleInfoById: {desc: "閫氳繃id鏌ヨ鏂囩珷璇︽儏", url: "/article/:id", method: "get"},
        addComment: {desc: "娣诲姞璇勮", url: "/comment", method: "put"},
        getCommentsByArticleId: {desc: "鑾峰彇鏂囩珷璇勮", url: "/comment/:id", method: "get"}
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
        request: [function (e) {
            return e
        }, function (e) {
            return Promise.reject(e)
        }], response: []
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s, o = n(7), u = n(9), a = r(u), l = n(11), c = r(l), h = n(47), f = r(h), d = n(48), p = r(d), _ = {
        type: -1,
        title: "",
        contents: [],
        markdown: "",
        richtext: "",
        mkTitles: [],
        mkTitlesLen: 0,
        mkTitleHighlight: {height: "0", top: "0", index: -1},
        currentAid: -1,
        comments: [],
        replay: {}
    }, g = (s = {}, i(s, o.FETCH_ARTICLE_DETAIL, function (e, t) {
        e.currentAid = t
    }), i(s, o.RECEIVE_ARTICLE_DETAIL, function (e, t) {
        var n = t.type, r = t.title;
        e.type = n, e.title = r
    }), i(s, o.RECEIVE_ARTICLE_DETAIL_NORMAL, function (e, t) {
        var n = t.contents;
        e.contents = n
    }), i(s, o.RECEIVE_ARTICLE_DETAIL_RICHTEXT, function (e, t) {
        var n = t.contents;
        e.richtext = n
    }), i(s, o.RECEIVE_ARTICLE_DETAIL_MARKDOWN, function (e, t) {
        var n = t.contents;
        e.markdown = n
    }), i(s, o.FETCH_ARTICLE_DETAIL_FAIL, function (e) {
        e.articleList = []
    }), i(s, o.ARTICLE_NOT_EXIST, function () {
        _.title = "鏂囩珷涓嶅瓨鍦�"
    }), i(s, o.SET_MK_TITLES, function (e, t) {
        e.mkTitles = t
    }), i(s, o.SET_MK_TITLES_LEN, function (e, t) {
        e.mkTitlesLen = t
    }), i(s, o.UPDATE_MK_TITLE_HIGHLIGHT, function (e, t) {
        e.mkTitleHighlight = t
    }), i(s, o.RECEIVE_COMMENT_LIST, function (e, t) {
        var n = t.comments;
        e.comments = n, e.commentsError = !1
    }), i(s, o.FETCH_COMMENT_FAIL, function (e) {
        e.commentsError = !0
    }), i(s, o.SET_REPLAY_COMMENT, function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e.replay = t
    }), s), m = {
        queryArticleById: function (e, t) {
            var n = (e.state, e.commit);
            return n(o.FETCH_ARTICLE_DETAIL, t), a.default.getArticleInfoById({data: {id: t}}).then(function (e) {
                if (0 === e.data.retcode) {
                    var t = e.data.result.article, r = t.type, i = t.title;
                    if (n(o.RECEIVE_ARTICLE_DETAIL, {
                            type: r,
                            title: i
                        }), "100" === t.type && n(o.RECEIVE_ARTICLE_DETAIL_NORMAL, {contents: JSON.parse(t.content)}), "200" === t.type && n(o.RECEIVE_ARTICLE_DETAIL_RICHTEXT, {contents: t.content}), "300" === t.type) {
                        n(o.RECEIVE_ARTICLE_DETAIL_MARKDOWN, {contents: t.content});
                        var s = (0, p.default)(t.content);
                        n(o.SET_MK_TITLES, s.nav), n(o.SET_MK_TITLES_LEN, s.length)
                    }
                } else n(o.ARTICLE_NOT_EXIST)
            })
        }, updateMKTitleHighlight: function (e, t) {
            e.state;
            (0, e.commit)(o.UPDATE_MK_TITLE_HIGHLIGHT, t)
        }, queryCommentsByAid: function (e, t) {
            var n = (e.state, e.commit);
            if (null != t) return a.default.getCommentsByArticleId({data: {id: t}}).then(function (e) {
                var t = e.data;
                0 === t.retcode ? n(o.RECEIVE_COMMENT_LIST, {comments: t.result.list}) : n(o.FETCH_COMMENT_FAIL)
            })
        }, addComment: function (e, t) {
            e.state, e.commit;
            return a.default.addComment({data: t}).then(function (e) {
                return e.data
            })
        }, setReplay: function (e, t) {
            e.state;
            (0, e.commit)(o.SET_REPLAY_COMMENT, t)
        }
    }, E = {
        markdownHtml: function (e) {
            var t = new c.default.Renderer, n = -1;
            return t.heading = function (e, t) {
                return "<h" + t + ' id="titleAnchor-' + n++ + '">' + e + "</h" + t + ">"
            }, (0, c.default)(e.markdown, {renderer: t})
        }, richTextHtml: function (e) {
            return f.default.decode(e.richtext)
        }
    };
    t.default = {state: _, actions: m, mutations: g, getters: E}
}, function (e, t, n) {
    "use strict";

    function r() {
        this.buffer = []
    }

    function i(e) {
        this._input = e, this._index = -1, this._buffer = []
    }

    function s(e) {
        this._input = e, this._index = -1, this._buffer = []
    }

    Object.defineProperty(t, "__esModule", {value: !0}), r.prototype.append = function (e) {
        return this.buffer.push(e), this
    }, r.prototype.toString = function () {
        return this.buffer.join("")
    };
    var o = {
        codex: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
            for (var t = new r, n = new i(e); n.moveNext();) {
                var s = n.current;
                n.moveNext();
                var o = n.current;
                n.moveNext();
                var u = n.current, a = s >> 2, l = (3 & s) << 4 | o >> 4, c = (15 & o) << 2 | u >> 6, h = 63 & u;
                isNaN(o) ? c = h = 64 : isNaN(u) && (h = 64), t.append(this.codex.charAt(a) + this.codex.charAt(l) + this.codex.charAt(c) + this.codex.charAt(h))
            }
            return t.toString()
        }, decode: function (e) {
            for (var t = new r, n = new s(e); n.moveNext();) {
                var i = n.current;
                if (i < 128) t.append(String.fromCharCode(i)); else if (i > 191 && i < 224) {
                    n.moveNext();
                    var o = n.current;
                    t.append(String.fromCharCode((31 & i) << 6 | 63 & o))
                } else {
                    n.moveNext();
                    var o = n.current;
                    n.moveNext();
                    var u = n.current;
                    t.append(String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & u))
                }
            }
            return t.toString()
        }
    };
    i.prototype = {
        current: Number.NaN, moveNext: function () {
            if (this._buffer.length > 0) return this.current = this._buffer.shift(), !0;
            if (this._index >= this._input.length - 1) return this.current = Number.NaN, !1;
            var e = this._input.charCodeAt(++this._index);
            return 13 == e && 10 == this._input.charCodeAt(this._index + 1) && (e = 10, this._index += 2), e < 128 ? this.current = e : e > 127 && e < 2048 ? (this.current = e >> 6 | 192, this._buffer.push(63 & e | 128)) : (this.current = e >> 12 | 224, this._buffer.push(e >> 6 & 63 | 128), this._buffer.push(63 & e | 128)), !0
        }
    }, s.prototype = {
        current: 64, moveNext: function () {
            if (this._buffer.length > 0) return this.current = this._buffer.shift(), !0;
            if (this._index >= this._input.length - 1) return this.current = 64, !1;
            var e = o.codex.indexOf(this._input.charAt(++this._index)),
                t = o.codex.indexOf(this._input.charAt(++this._index)),
                n = o.codex.indexOf(this._input.charAt(++this._index)),
                r = o.codex.indexOf(this._input.charAt(++this._index)), i = e << 2 | t >> 4, s = (15 & t) << 4 | n >> 2,
                u = (3 & n) << 6 | r;
            return this.current = i, 64 != n && this._buffer.push(s), 64 != r && this._buffer.push(u), !0
        }
    }, t.default = o
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = [], r = [], s = n(11), l = new s.Renderer;
        l.heading = function (e, n) {
            t.push({title: e, level: n, children: []}), -1 === r.indexOf(n) && 1 !== n && r.push(n)
        }, s(e, {renderer: l}), 1 === t[0].level && t.shift();
        var c = 0;
        t = t.map(function (e) {
            return e.index = c++, e
        }), r = r.sort();
        var h, f = [];
        return r.forEach(function (e) {
            h = i(t, {level: e}), 0 === f.length ? f = f.concat(h) : h.forEach(function (e) {
                e = Object.assign(e);
                var n = o(t, e.index);
                return u(f, n, e)
            })
        }), f = f.map(function (e) {
            return 0 === (e.children || []).length ? e : (e.children = a(e.children), e)
        }), {nav: f, navLevel: r, length: t.length}
    }

    function i(e, t) {
        return e.filter(function (e) {
            for (var n in t) if (t.hasOwnProperty(n) && t[n] !== e[n]) return !1;
            return !0
        })
    }

    function s(e, t) {
        var n = -1;
        return e.forEach(function (e, r) {
            for (var i in t) if (t.hasOwnProperty(i) && t[i] !== e[i]) return !1;
            n = r
        }), n
    }

    function o(e, t) {
        for (var n = t - 1; n >= 0; n--) if (e[t].level > e[n].level) return e[n].index
    }

    function u(e, t, n) {
        var r = s(e, {index: t});
        if (-1 === r) for (var i = void 0, o = 0; o < e.length; o++) i = e[o], i.children.length && u(i.children, t, n); else e[r].children = e[r].children.concat(n)
    }

    function a(e) {
        return !1 == (i(e, {level: e[0].level}).length !== e.length) ? e : e.map(function (e) {
            return e.index
        }).sort().map(function (t) {
            var n = i(e, {index: t});
            return (n.children || []).length > 1 && (n.children = a(n.children)), n[0]
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {}
}, function (e, t) {
    function n(e, t) {
        var r = {
            name: e.name,
            path: e.path,
            hash: e.hash,
            query: e.query,
            params: e.params,
            fullPath: e.fullPath,
            meta: e.meta
        };
        return t && (r.from = n(t)), Object.freeze(r)
    }

    t.sync = function (e, t, r) {
        var i = (r || {}).moduleName || "route";
        e.registerModule(i, {
            namespaced: !0, state: n(t.currentRoute), mutations: {
                ROUTE_CHANGED: function (t, r) {
                    e.state[i] = n(r.to, r.from)
                }
            }
        });
        var s, o = !1, u = e.watch(function (e) {
            return e[i]
        }, function (e) {
            var n = e.fullPath;
            n !== s && (null != s && (o = !0, t.push(e)), s = n)
        }, {sync: !0}), a = t.afterEach(function (t, n) {
            if (o) return void(o = !1);
            s = t.fullPath, e.commit(i + "/ROUTE_CHANGED", {to: t, from: n})
        });
        return function () {
            null != a && a(), null != u && u(), e.unregisterModule(i)
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(1), s = r(i), o = n(52), u = r(o), a = function (e, t) {
        return s.default.filter(e, t)
    };
    t.default = {
        install: function () {
            a("time", u.default), a("imgSrc", function (e) {
                var t = "//www.u3xyz.com";
                return /^\//.test(e) ? t + e : t + "/" + e
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
        var n = new Date(e), r = {0: "鏄熸湡鏃�", 1: "鏄熸湡涓€", 2: "鏄熸湡浜�", 3: "鏄熸湡涓�", 4: "鏄熸湡鍥�", 5: "鏄熸湡浜�", 6: "鏄熸湡鍏�"},
            i = {
                E: r[n.getDay() + ""],
                y: n.getFullYear(),
                M: n.getMonth() + 1,
                d: n.getDate(),
                h: n.getHours() % 12 == 0 ? 12 : n.getHours() % 12,
                H: n.getHours(),
                m: n.getMinutes(),
                s: n.getSeconds(),
                q: Math.floor((n.getMonth() + 3) / 3),
                S: n.getMilliseconds()
            };
        for (var s in i) t = t.replace(new RegExp(s + "+", "g"), function (e) {
            var t = "E" !== s ? "000" + i[s] : i[s];
            return t.substr(t.length - e.length >= 0 ? t.length - e.length : 0)
        });
        return t
    }
}, function (e, t, n) {
    e.exports = n(0)(35)
}, function (e, t, n) {
    "use strict";

    function r() {
        return !(!window.showModalDialog || !window.chrome)
    }

    function i() {
        return /QQBrowser/i.test(s)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = window.navigator.userAgent.toLowerCase(), o = window.navigator.platform.toLowerCase(), u = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
        isChrome: /chrome/.test(s) && /Google Inc/.test(window.navigator.vendor) && !r() && !i(),
        isFirefox: /firefox/.test(s),
        isIE: function () {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        }(),
        isEdge: /edge/.test(s),
        isIE11: /trident\/7/i.test(s) && /rv:11/i.test(s),
        is360: r(),
        isQQ: i(),
        isCanvasSupported: function () {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }(),
        isWindows: o.indexOf("win") > -1,
        isMac: o.indexOf("mac") > -1,
        isAndroid: s.indexOf("android") > -1,
        isIphone: /\biPhone\b|\biPod\b/i.test(s),
        isMobile: /\biPhone\b|\biPod\b|\bandroid\b/i.test(s)
    };
    t.default = function (e) {
        e.mixin({
            data: function () {
                return {systemInfo: u}
            }
        })
    }
}], [14]);