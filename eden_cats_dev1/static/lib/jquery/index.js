!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=n.slice,i=n.concat,o=n.push,s=n.indexOf,a={},u=a.toString,l=a.hasOwnProperty,c={},f=e.document,p=function(e,t){return new p.fn.init(e,t)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,g=/-([\da-z])/gi,v=function(e,t){return t.toUpperCase()};p.fn=p.prototype={jquery:"2.1.3",constructor:p,selector:"",length:0,toArray:function(){return r.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:r.call(this)},pushStack:function(e){var t=p.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return p.each(this,e,t)},map:function(e){return this.pushStack(p.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:o,sort:n.sort,splice:n.splice},p.extend=p.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||p.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(p.isPlainObject(r)||(i=p.isArray(r)))?(i?(i=!1,o=n&&p.isArray(n)?n:[]):o=n&&p.isPlainObject(n)?n:{},s[t]=p.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},p.extend({expando:"jQuery"+("2.1.3"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===p.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!p.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===p.type(e)&&!e.nodeType&&!p.isWindow(e)&&!(e.constructor&&!l.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[u.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=p.trim(e))&&(1===e.indexOf("use strict")?(t=f.createElement("script"),t.text=e,f.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(h,"ms-").replace(g,v)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=m(e);if(n){if(s)for(;o>i&&(r=t.apply(e[i],n),!1!==r);i++);else for(i in e)if(r=t.apply(e[i],n),!1===r)break}else if(s)for(;o>i&&(r=t.call(e[i],i,e[i]),!1!==r);i++);else for(i in e)if(r=t.call(e[i],i,e[i]),!1===r)break;return e},trim:function(e){return null==e?"":(e+"").replace(d,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(m(Object(e))?p.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,n){var r,o=0,s=e.length,a=[];if(m(e))for(;s>o;o++)r=t(e[o],o,n),null!=r&&a.push(r);else for(o in e)r=t(e[o],o,n),null!=r&&a.push(r);return i.apply([],a)},guid:1,proxy:function(e,t){var n,i,o;return"string"==typeof t&&(n=e[t],t=e,e=n),p.isFunction(e)?(i=r.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(r.call(arguments)))}).guid=e.guid=e.guid||p.guid++,o):void 0},now:Date.now,support:c}),p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){a["[object "+t+"]"]=t.toLowerCase()});function m(e){var t=e.length,n=p.type(e);return"function"!==n&&!p.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}var y=function(e){var t,n,r,i,o,s,a,u,l,c,f,p,d,h,g,v,m,y,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,N=se(),k=se(),E=se(),S=function(e,t){return e===t&&(f=!0),0},D=1<<31,j={}.hasOwnProperty,A=[],L=A.pop,q=A.push,H=A.push,O=A.slice,F=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=M.replace("w","w#"),$="\\["+R+"*("+M+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+W+"))|)"+R+"*\\]",I=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+$+")*)|.*)\\)|)",B=new RegExp(R+"+","g"),_=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),z=new RegExp("^"+R+"*,"+R+"*"),X=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp("="+R+"*([^\\]'\"]*?)"+R+"*\\]","g"),V=new RegExp(I),Y=new RegExp("^"+W+"$"),G={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+$),PSEUDO:new RegExp("^"+I),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=/'|\\/g,ne=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),re=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},ie=function(){p()};try{H.apply(A=O.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){H={apply:A.length?function(e,t){q.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,r,i){var o,a,l,c,f,h,m,y,T,C;if((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,r=r||[],c=t.nodeType,"string"!=typeof e||!e||1!==c&&9!==c&&11!==c)return r;if(!i&&g){if(11!==c&&(o=Z.exec(e)))if(l=o[1]){if(9===c){if(!(a=t.getElementById(l))||!a.parentNode)return r;if(a.id===l)return r.push(a),r}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(l))&&x(t,a)&&a.id===l)return r.push(a),r}else{if(o[2])return H.apply(r,t.getElementsByTagName(e)),r;if((l=o[3])&&n.getElementsByClassName)return H.apply(r,t.getElementsByClassName(l)),r}if(n.qsa&&(!v||!v.test(e))){if(y=m=b,T=t,C=1!==c&&e,1===c&&"object"!==t.nodeName.toLowerCase()){for(h=s(e),(m=t.getAttribute("id"))?y=m.replace(te,"\\$&"):t.setAttribute("id",y),y="[id='"+y+"'] ",f=h.length;f--;)h[f]=y+ve(h[f]);T=ee.test(e)&&he(t.parentNode)||t,C=h.join(",")}if(C)try{return H.apply(r,T.querySelectorAll(C)),r}catch(e){}finally{m||t.removeAttribute("id")}}}return u(e.replace(_,"$1"),t,r,i)}function se(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ae(e){return e[b]=!0,e}function ue(e){var t=d.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){for(var n=e.split("|"),i=e.length;i--;)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function he(e){return e&&void 0!==e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,s=e?e.ownerDocument||e:w;return s!==d&&9===s.nodeType&&s.documentElement?(d=s,h=s.documentElement,(i=s.defaultView)&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",ie,!1):i.attachEvent&&i.attachEvent("onunload",ie)),g=!o(s),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(s.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=K.test(s.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!s.getElementsByName||!s.getElementsByName(b).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(ne,re);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(ne,re);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){return g?t.getElementsByClassName(e):void 0},m=[],v=[],(n.qsa=K.test(s.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+R+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||v.push(".#.+[+~]")}),ue(function(e){var t=s.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+R+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=K.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),v=v.length&&new RegExp(v.join("|")),m=m.length&&new RegExp(m.join("|")),t=K.test(h.compareDocumentPosition),x=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===s||e.ownerDocument===w&&x(w,e)?-1:t===s||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t];if(!i||!o)return e===s?-1:t===s?1:i?-1:o?1:c?F(c,e)-F(c,t):0;if(i===o)return ce(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;a[r]===u[r];)r++;return r?ce(a[r],u[r]):a[r]===w?-1:u[r]===w?1:0},s):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(U,"='$1']"),!(!n.matchesSelector||!g||m&&m.test(t)||v&&v.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&j.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:ae,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ne,re),e[3]=(e[3]||e[4]||e[5]||"").replace(ne,re),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ne,re).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(B," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",v=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!u&&!a;if(v){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===m:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){for(d=(l=(c=v[b]||(v[b]={}))[e]||[])[0]===T&&l[1],p=l[0]===T&&l[2],f=d&&v.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[T,d,p];break}}else if(y&&(l=(t[b]||(t[b]={}))[e])&&l[0]===T)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==m:1!==f.nodeType)||!++p||(y&&((f[b]||(f[b]={}))[e]=[T,p]),f!==t)););return(p-=i)===r||p%r==0&&p/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),s=o.length;s--;)r=F(e,o[s]),e[r]=!(n[r]=o[s])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=a(e.replace(_,"$1"));return r[b]?ae(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return oe(e,t).length>0}}),contains:ae(function(e){return e=e.replace(ne,re),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return Y.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(ne,re).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[0>n?n+t:n]}),even:de(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ge(){}ge.prototype=r.filters=r.pseudos,r.setFilters=new ge,s=oe.tokenize=function(e,t){var n,i,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);for(a=e,u=[],l=r.preFilter;a;){(!n||(i=z.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=X.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(_," ")}),a=a.slice(n.length));for(s in r.filter)!(i=G[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[T,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((a=(u=t[b]||(t[b]={}))[r])&&a[0]===T&&a[1]===o)return l[2]=a[2];if(u[r]=l,l[2]=e(t,n,s))return!0}}}function ye(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xe(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function be(e,t,n,r,i,o){return r&&!r[b]&&(r=be(r)),i&&!i[b]&&(i=be(i,o)),ae(function(o,s,a,u){var l,c,f,p=[],d=[],h=s.length,g=o||function(e,t,n){for(var r=0,i=t.length;i>r;r++)oe(e,t[r],n);return n}(t||"*",a.nodeType?[a]:a,[]),v=!e||!o&&t?g:xe(g,p,e,a,u),m=n?i||(o?e:h||r)?[]:s:v;if(n&&n(v,m,a,u),r)for(l=xe(m,d),r(l,[],a,u),c=l.length;c--;)(f=l[c])&&(m[d[c]]=!(v[d[c]]=f));if(o){if(i||e){if(i){for(l=[],c=m.length;c--;)(f=m[c])&&l.push(v[c]=f);i(null,m=[],l,u)}for(c=m.length;c--;)(f=m[c])&&(l=i?F(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else m=xe(m===s?m.splice(h,m.length):m),i?i(null,s,m,u):H.apply(s,m)})}function we(e){for(var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[" "],u=s?1:0,c=me(function(e){return e===t},a,!0),f=me(function(e){return F(t,e)>-1},a,!0),p=[function(e,n,r){var i=!s&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];o>u;u++)if(n=r.relative[e[u].type])p=[me(ye(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;o>i&&!r.relative[e[i].type];i++);return be(u>1&&ye(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(_,"$1"),n,i>u&&we(e.slice(u,i)),o>i&&we(e=e.slice(i)),o>i&&ve(e))}p.push(n)}return ye(p)}return a=oe.compile=function(e,t){var n,i=[],o=[],a=E[e+" "];if(!a){for(t||(t=s(e)),n=t.length;n--;)a=we(t[n]),a[b]?i.push(a):o.push(a);(a=E(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,s,a,u,c){var f,p,h,g=0,v="0",m=o&&[],y=[],x=l,b=o||i&&r.find.TAG("*",c),w=T+=null==x?1:Math.random()||.1,C=b.length;for(c&&(l=s!==d&&s);v!==C&&null!=(f=b[v]);v++){if(i&&f){for(p=0;h=e[p++];)if(h(f,s,a)){u.push(f);break}c&&(T=w)}n&&((f=!h&&f)&&g--,o&&m.push(f))}if(g+=v,n&&v!==g){for(p=0;h=t[p++];)h(m,y,s,a);if(o){if(g>0)for(;v--;)m[v]||y[v]||(y[v]=L.call(u));y=xe(y)}H.apply(u,y),c&&!o&&y.length>0&&g+t.length>1&&oe.uniqueSort(u)}return c&&(T=w,l=x),m};return n?ae(o):o}(o,i))).selector=e}return a},u=oe.select=function(e,t,i,o){var u,l,c,f,p,d="function"==typeof e&&e,h=!o&&s(e=d.selector||e);if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&n.getById&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(ne,re),t)||[])[0]))return i;d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=G.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[f=c.type]);)if((p=r.find[f])&&(o=p(c.matches[0].replace(ne,re),ee.test(l[0].type)&&he(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&ve(l)))return H.apply(i,o),i;break}}return(d||a(e,h))(o,t,!g,i,ee.test(e)&&he(t.parentNode)||t),i},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("div"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;return n?void 0:!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);p.find=y,p.expr=y.selectors,p.expr[":"]=p.expr.pseudos,p.unique=y.uniqueSort,p.text=y.getText,p.isXMLDoc=y.isXML,p.contains=y.contains;var x=p.expr.match.needsContext,b=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function T(e,t,n){if(p.isFunction(t))return p.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return p.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(w.test(t))return p.filter(t,e,n);t=p.filter(t,e)}return p.grep(e,function(e){return s.call(t,e)>=0!==n})}p.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?p.find.matchesSelector(r,e)?[r]:[]:p.find.matches(e,p.grep(t,function(e){return 1===e.nodeType}))},p.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(p(e).filter(function(){for(t=0;n>t;t++)if(p.contains(i[t],this))return!0}));for(t=0;n>t;t++)p.find(e,i[t],r);return(r=this.pushStack(n>1?p.unique(r):r)).selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&x.test(e)?p(e):e||[],!1).length}});var C,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(p.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(!(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:N.exec(e))||!n[1]&&t)return!t||t.jquery?(t||C).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof p?t[0]:t,p.merge(this,p.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:f,!0)),b.test(n[1])&&p.isPlainObject(t))for(n in t)p.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(r=f.getElementById(n[2]))&&r.parentNode&&(this.length=1,this[0]=r),this.context=f,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):p.isFunction(e)?void 0!==C.ready?C.ready(e):e(p):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),p.makeArray(e,this))}).prototype=p.fn,C=p(f);var k=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};p.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&p(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),p.fn.extend({has:function(e){var t=p(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(p.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=x.test(e)||"string"!=typeof e?p(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&p.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?p.unique(o):o)},index:function(e){return e?"string"==typeof e?s.call(p(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(p.unique(p.merge(this.get(),p(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function S(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}p.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return p.dir(e,"parentNode")},parentsUntil:function(e,t,n){return p.dir(e,"parentNode",n)},next:function(e){return S(e,"nextSibling")},prev:function(e){return S(e,"previousSibling")},nextAll:function(e){return p.dir(e,"nextSibling")},prevAll:function(e){return p.dir(e,"previousSibling")},nextUntil:function(e,t,n){return p.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return p.dir(e,"previousSibling",n)},siblings:function(e){return p.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return p.sibling(e.firstChild)},contents:function(e){return e.contentDocument||p.merge([],e.childNodes)}},function(e,t){p.fn[e]=function(n,r){var i=p.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=p.filter(r,i)),this.length>1&&(E[e]||p.unique(i),k.test(e)&&i.reverse()),this.pushStack(i)}});var D=/\S+/g,j={};p.Callbacks=function(e){var t,n,r,i,o,s,a=[],u=!(e="string"==typeof e?j[e]||function(e){var t=j[e]={};return p.each(e.match(D)||[],function(e,n){t[n]=!0}),t}(e):p.extend({},e)).once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(!1===a[s].apply(f[0],f[1])&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;!function t(n){p.each(n,function(n,r){var i=p.type(r);"function"===i?e.unique&&c.has(r)||a.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&p.each(arguments,function(e,t){for(var n;(n=p.inArray(t,a,n))>-1;)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?p.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=void 0,this},disabled:function(){return!a},lock:function(){return u=void 0,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},p.extend({Deferred:function(e){var t=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return p.Deferred(function(n){p.each(t,function(t,o){var s=p.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&p.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?p.extend(e,r):r}},i={};return r.pipe=r.then,p.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,i,o=0,s=r.call(arguments),a=s.length,u=1!==a||e&&p.isFunction(e.promise)?a:0,l=1===u?e:p.Deferred(),c=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?r.call(arguments):o,i===t?l.notifyWith(n,i):--u||l.resolveWith(n,i)}};if(a>1)for(t=new Array(a),n=new Array(a),i=new Array(a);a>o;o++)s[o]&&p.isFunction(s[o].promise)?s[o].promise().done(c(o,i,s)).fail(l.reject).progress(c(o,n,t)):--u;return u||l.resolveWith(i,s),l.promise()}});var A;p.fn.ready=function(e){return p.ready.promise().done(e),this},p.extend({isReady:!1,readyWait:1,holdReady:function(e){e?p.readyWait++:p.ready(!0)},ready:function(e){(!0===e?--p.readyWait:p.isReady)||(p.isReady=!0,!0!==e&&--p.readyWait>0||(A.resolveWith(f,[p]),p.fn.triggerHandler&&(p(f).triggerHandler("ready"),p(f).off("ready"))))}});function L(){f.removeEventListener("DOMContentLoaded",L,!1),e.removeEventListener("load",L,!1),p.ready()}p.ready.promise=function(t){return A||(A=p.Deferred(),"complete"===f.readyState?setTimeout(p.ready):(f.addEventListener("DOMContentLoaded",L,!1),e.addEventListener("load",L,!1))),A.promise(t)},p.ready.promise();var q=p.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===p.type(n)){i=!0;for(a in n)p.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,p.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(p(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};p.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function H(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=p.expando+H.uid++}H.uid=1,H.accepts=p.acceptData,H.prototype={key:function(e){if(!H.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=H.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,p.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(p.isEmptyObject(o))p.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,p.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{p.isArray(t)?r=t.concat(t.map(p.camelCase)):(i=p.camelCase(t),t in s?r=[t,i]:r=(r=i)in s?[r]:r.match(D)||[]),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!p.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var O=new H,F=new H,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function M(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(R,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:P.test(n)?p.parseJSON(n):n)}catch(e){}F.set(e,t,n)}else n=void 0;return n}p.extend({hasData:function(e){return F.hasData(e)||O.hasData(e)},data:function(e,t,n){return F.access(e,t,n)},removeData:function(e,t){F.remove(e,t)},_data:function(e,t,n){return O.access(e,t,n)},_removeData:function(e,t){O.remove(e,t)}}),p.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=F.get(o),1===o.nodeType&&!O.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=p.camelCase(r.slice(5)),M(o,r,i[r])));O.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){F.set(this,e)}):q(this,function(t){var n,r=p.camelCase(e);if(o&&void 0===t){if(void 0!==(n=F.get(o,e)))return n;if(void 0!==(n=F.get(o,r)))return n;if(void 0!==(n=M(o,r,void 0)))return n}else this.each(function(){var n=F.get(this,r);F.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&F.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){F.remove(this,e)})}}),p.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=O.get(e,t),n&&(!r||p.isArray(n)?r=O.access(e,t,p.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=p.queue(e,t),r=n.length,i=n.shift(),o=p._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){p.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return O.get(e,n)||O.access(e,n,{empty:p.Callbacks("once memory").add(function(){O.remove(e,[t+"queue",n])})})}}),p.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?p.queue(this[0],e):void 0===t?this:this.each(function(){var n=p.queue(this,e,t);p._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&p.dequeue(this,e)})},dequeue:function(e){return this.each(function(){p.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=p.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=O.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var W=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$=["Top","Right","Bottom","Left"],I=function(e,t){return e=t||e,"none"===p.css(e,"display")||!p.contains(e.ownerDocument,e)},B=/^(?:checkbox|radio)$/i;!function(){var e=f.createDocumentFragment().appendChild(f.createElement("div")),t=f.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),c.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",c.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var _="undefined";c.focusinBubbles="onfocusin"in e;var z=/^key/,X=/^(?:mouse|pointer|contextmenu)|click/,U=/^(?:focusinfocus|focusoutblur)$/,V=/^([^.]*)(?:\.(.+)|)$/;function Y(){return!0}function G(){return!1}function Q(){try{return f.activeElement}catch(e){}}p.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,d,h,g,v,m=O.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=p.guid++),(u=m.events)||(u=m.events={}),(s=m.handle)||(s=m.handle=function(t){return typeof p!==_&&p.event.triggered!==t.type?p.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(D)||[""]).length;l--;)a=V.exec(t[l])||[],h=v=a[1],g=(a[2]||"").split(".").sort(),h&&(f=p.event.special[h]||{},h=(i?f.delegateType:f.bindType)||h,f=p.event.special[h]||{},c=p.extend({type:h,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&p.expr.match.needsContext.test(i),namespace:g.join(".")},o),(d=u[h])||(d=u[h]=[],d.delegateCount=0,f.setup&&!1!==f.setup.call(e,r,g,s)||e.addEventListener&&e.addEventListener(h,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),p.event.global[h]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,d,h,g,v,m=O.hasData(e)&&O.get(e);if(m&&(u=m.events)){for(l=(t=(t||"").match(D)||[""]).length;l--;)if(a=V.exec(t[l])||[],h=v=a[1],g=(a[2]||"").split(".").sort(),h){for(f=p.event.special[h]||{},d=u[h=(r?f.delegateType:f.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)c=d[o],!i&&v!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));s&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,g,m.handle)||p.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)p.event.remove(e,h+t[l],n,r,!0);p.isEmptyObject(u)&&(delete m.handle,O.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,c,d,h,g=[r||f],v=l.call(t,"type")?t.type:t,m=l.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||f,3!==r.nodeType&&8!==r.nodeType&&!U.test(v+p.event.triggered)&&(v.indexOf(".")>=0&&(m=v.split("."),v=m.shift(),m.sort()),c=v.indexOf(":")<0&&"on"+v,t=t[p.expando]?t:new p.Event(v,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=m.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:p.makeArray(n,[t]),h=p.event.special[v]||{},i||!h.trigger||!1!==h.trigger.apply(r,n))){if(!i&&!h.noBubble&&!p.isWindow(r)){for(u=h.delegateType||v,U.test(u+v)||(s=s.parentNode);s;s=s.parentNode)g.push(s),a=s;a===(r.ownerDocument||f)&&g.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=g[o++])&&!t.isPropagationStopped();)t.type=o>1?u:h.bindType||v,d=(O.get(s,"events")||{})[t.type]&&O.get(s,"handle"),d&&d.apply(s,n),d=c&&s[c],d&&d.apply&&p.acceptData(s)&&(t.result=d.apply(s,n),!1===t.result&&t.preventDefault());return t.type=v,i||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(g.pop(),n)||!p.acceptData(r)||c&&p.isFunction(r[v])&&!p.isWindow(r)&&(a=r[c],a&&(r[c]=null),p.event.triggered=v,r[v](),p.event.triggered=void 0,a&&(r[c]=a)),t.result}},dispatch:function(e){e=p.event.fix(e);var t,n,i,o,s,a=[],u=r.call(arguments),l=(O.get(this,"events")||{})[e.type]||[],c=p.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(a=p.event.handlers.call(this,e,l),t=0;(o=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(s=o.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(s.namespace))&&(e.handleObj=s,e.data=s.data,i=((p.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u),void 0!==i&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(!0!==u.disabled||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?p(i,this).index(u)>=0:p.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||f,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[p.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=X.test(i)?this.mouseHooks:z.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new p.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=f),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==Q()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===Q()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&p.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return p.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=p.extend(new p.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?p.event.trigger(i,null,t):p.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},p.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},p.Event=function(e,t){return this instanceof p.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Y:G):this.type=e,t&&p.extend(this,t),this.timeStamp=e&&e.timeStamp||p.now(),void(this[p.expando]=!0)):new p.Event(e,t)},p.Event.prototype={isDefaultPrevented:G,isPropagationStopped:G,isImmediatePropagationStopped:G,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Y,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Y,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Y,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},p.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){p.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return(!r||r!==this&&!p.contains(this,r))&&(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),c.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){p.event.simulate(t,e.target,p.event.fix(e),!0)};p.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=O.access(r,t);i||r.addEventListener(e,n,!0),O.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=O.access(r,t)-1;i?O.access(r,t,i):(r.removeEventListener(e,n,!0),O.remove(r,t))}}}),p.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=G;else if(!r)return this;return 1===i&&(o=r,r=function(e){return p().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=p.guid++)),this.each(function(){p.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,p(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=G),this.each(function(){p.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){p.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?p.event.trigger(e,t,n,!0):void 0}});var J=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,K=/<([\w:]+)/,Z=/<|&#?\w+;/,ee=/<(?:script|style|link)/i,te=/checked\s*(?:[^=]|=\s*.checked.)/i,ne=/^$|\/(?:java|ecma)script/i,re=/^true\/(.*)/,ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,oe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};oe.optgroup=oe.option,oe.tbody=oe.tfoot=oe.colgroup=oe.caption=oe.thead,oe.th=oe.td;function se(e,t){return p.nodeName(e,"table")&&p.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ae(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ue(e){var t=re.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function le(e,t){for(var n=0,r=e.length;r>n;n++)O.set(e[n],"globalEval",!t||O.get(t[n],"globalEval"))}function ce(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(O.hasData(e)&&(o=O.access(e),s=O.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)p.event.add(t,i,l[i][n])}F.hasData(e)&&(a=F.access(e),u=p.extend({},a),F.set(t,u))}}function fe(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&p.nodeName(e,t)?p.merge([e],n):n}function pe(e,t){var n=t.nodeName.toLowerCase();"input"===n&&B.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}p.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=p.contains(e.ownerDocument,e);if(!(c.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||p.isXMLDoc(e)))for(s=fe(a),o=fe(e),r=0,i=o.length;i>r;r++)pe(o[r],s[r]);if(t)if(n)for(o=o||fe(e),s=s||fe(a),r=0,i=o.length;i>r;r++)ce(o[r],s[r]);else ce(e,a);return(s=fe(a,"script")).length>0&&le(s,!u&&fe(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],d=0,h=e.length;h>d;d++)if(i=e[d],i||0===i)if("object"===p.type(i))p.merge(f,i.nodeType?[i]:i);else if(Z.test(i)){for(o=o||c.appendChild(t.createElement("div")),s=(K.exec(i)||["",""])[1].toLowerCase(),a=oe[s]||oe._default,o.innerHTML=a[1]+i.replace(J,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild;p.merge(f,o.childNodes),(o=c.firstChild).textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",d=0;i=f[d++];)if((!r||-1===p.inArray(i,r))&&(u=p.contains(i.ownerDocument,i),o=fe(c.appendChild(i),"script"),u&&le(o),n))for(l=0;i=o[l++];)ne.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=p.event.special,s=0;void 0!==(n=e[s]);s++){if(p.acceptData(n)&&(i=n[O.expando],i&&(t=O.cache[i]))){if(t.events)for(r in t.events)o[r]?p.event.remove(n,r):p.removeEvent(n,r,t.handle);O.cache[i]&&delete O.cache[i]}delete F.cache[n[F.expando]]}}}),p.fn.extend({text:function(e){return q(this,function(e){return void 0===e?p.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){se(this,e).appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=se(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?p.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||p.cleanData(fe(n)),n.parentNode&&(t&&p.contains(n.ownerDocument,n)&&le(fe(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(p.cleanData(fe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return p.clone(this,e,t)})},html:function(e){return q(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ee.test(e)&&!oe[(K.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(J,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(p.cleanData(fe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,p.cleanData(fe(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=i.apply([],e);var n,r,o,s,a,u,l=0,f=this.length,d=this,h=f-1,g=e[0],v=p.isFunction(g);if(v||f>1&&"string"==typeof g&&!c.checkClone&&te.test(g))return this.each(function(n){var r=d.eq(n);v&&(e[0]=g.call(this,n,r.html())),r.domManip(e,t)});if(f&&(n=p.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(s=(o=p.map(fe(n,"script"),ae)).length;f>l;l++)a=n,l!==h&&(a=p.clone(a,!0,!0),s&&p.merge(o,fe(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,p.map(o,ue),l=0;s>l;l++)a=o[l],ne.test(a.type||"")&&!O.access(a,"globalEval")&&p.contains(u,a)&&(a.src?p._evalUrl&&p._evalUrl(a.src):p.globalEval(a.textContent.replace(ie,"")))}return this}}),p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){p.fn[e]=function(e){for(var n,r=[],i=p(e),s=i.length-1,a=0;s>=a;a++)n=a===s?this:this.clone(!0),p(i[a])[t](n),o.apply(r,n.get());return this.pushStack(r)}});var de,he={};function ge(t,n){var r,i=p(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:p.css(i[0],"display");return i.detach(),o}function ve(e){var t=f,n=he[e];return n||(n=ge(e,t),"none"!==n&&n||(de=(de||p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=de[0].contentDocument,t.write(),t.close(),n=ge(e,t),de.detach()),he[e]=n),n}var me=/^margin/,ye=new RegExp("^("+W+")(?!px)[a-z%]+$","i"),xe=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};function be(e,t,n){var r,i,o,s,a=e.style;return(n=n||xe(e))&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||p.contains(e.ownerDocument,e)||(s=p.style(e,t)),ye.test(s)&&me.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function we(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}!function(){var t,n,r=f.documentElement,i=f.createElement("div"),o=f.createElement("div");if(o.style){o.style.backgroundClip="content-box",o.cloneNode(!0).style.backgroundClip="",c.clearCloneStyle="content-box"===o.style.backgroundClip,i.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",i.appendChild(o);function s(){o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o.innerHTML="",r.appendChild(i);var s=e.getComputedStyle(o,null);t="1%"!==s.top,n="4px"===s.width,r.removeChild(i)}e.getComputedStyle&&p.extend(c,{pixelPosition:function(){return s(),t},boxSizingReliable:function(){return null==n&&s(),n},reliableMarginRight:function(){var t,n=o.appendChild(f.createElement("div"));return n.style.cssText=o.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",o.style.width="1px",r.appendChild(i),t=!parseFloat(e.getComputedStyle(n,null).marginRight),r.removeChild(i),o.removeChild(n),t}})}}(),p.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var Te=/^(none|table(?!-c[ea]).+)/,Ce=new RegExp("^("+W+")(.*)$","i"),Ne=new RegExp("^([+-])=("+W+")","i"),ke={position:"absolute",visibility:"hidden",display:"block"},Ee={letterSpacing:"0",fontWeight:"400"},Se=["Webkit","O","Moz","ms"];function De(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Se.length;i--;)if(t=Se[i]+n,t in e)return t;return r}function je(e,t,n){var r=Ce.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ae(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=p.css(e,n+$[o],!0,i)),r?("content"===n&&(s-=p.css(e,"padding"+$[o],!0,i)),"margin"!==n&&(s-=p.css(e,"border"+$[o]+"Width",!0,i))):(s+=p.css(e,"padding"+$[o],!0,i),"padding"!==n&&(s+=p.css(e,"border"+$[o]+"Width",!0,i)));return s}function Le(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=xe(e),s="border-box"===p.css(e,"boxSizing",!1,o);if(0>=i||null==i){if((0>(i=be(e,t,o))||null==i)&&(i=e.style[t]),ye.test(i))return i;r=s&&(c.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Ae(e,t,n||(s?"border":"content"),r,o)+"px"}function qe(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=O.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&I(r)&&(o[s]=O.access(r,"olddisplay",ve(r.nodeName)))):(i=I(r),"none"===n&&i||O.set(r,"olddisplay",i?n:p.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}p.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=be(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=p.camelCase(t),u=e.style;return t=p.cssProps[a]||(p.cssProps[a]=De(u,a)),s=p.cssHooks[t]||p.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:("string"===(o=typeof n)&&(i=Ne.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(p.css(e,t)),o="number"),void(null!=n&&n==n&&("number"!==o||p.cssNumber[a]||(n+="px"),c.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=p.camelCase(t);return t=p.cssProps[a]||(p.cssProps[a]=De(e.style,a)),(s=p.cssHooks[t]||p.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=be(e,t,r)),"normal"===i&&t in Ee&&(i=Ee[t]),""===n||n?(o=parseFloat(i),!0===n||p.isNumeric(o)?o||0:i):i}}),p.each(["height","width"],function(e,t){p.cssHooks[t]={get:function(e,n,r){return n?Te.test(p.css(e,"display"))&&0===e.offsetWidth?p.swap(e,ke,function(){return Le(e,t,r)}):Le(e,t,r):void 0},set:function(e,n,r){var i=r&&xe(e);return je(0,n,r?Ae(e,t,r,"border-box"===p.css(e,"boxSizing",!1,i),i):0)}}}),p.cssHooks.marginRight=we(c.reliableMarginRight,function(e,t){return t?p.swap(e,{display:"inline-block"},be,[e,"marginRight"]):void 0}),p.each({margin:"",padding:"",border:"Width"},function(e,t){p.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+$[r]+t]=o[r]||o[r-2]||o[0];return i}},me.test(e)||(p.cssHooks[e+t].set=je)}),p.fn.extend({css:function(e,t){return q(this,function(e,t,n){var r,i,o={},s=0;if(p.isArray(t)){for(r=xe(e),i=t.length;i>s;s++)o[t[s]]=p.css(e,t[s],!1,r);return o}return void 0!==n?p.style(e,t,n):p.css(e,t)},e,t,arguments.length>1)},show:function(){return qe(this,!0)},hide:function(){return qe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){I(this)?p(this).show():p(this).hide()})}});function He(e,t,n,r,i){return new He.prototype.init(e,t,n,r,i)}p.Tween=He,He.prototype={constructor:He,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(p.cssNumber[n]?"":"px")},cur:function(){var e=He.propHooks[this.prop];return e&&e.get?e.get(this):He.propHooks._default.get(this)},run:function(e){var t,n=He.propHooks[this.prop];return this.pos=t=this.options.duration?p.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):He.propHooks._default.set(this),this}},He.prototype.init.prototype=He.prototype,He.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=p.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){p.fx.step[e.prop]?p.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[p.cssProps[e.prop]]||p.cssHooks[e.prop])?p.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},He.propHooks.scrollTop=He.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},p.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},p.fx=He.prototype.init,p.fx.step={};var Oe,Fe,Pe=/^(?:toggle|show|hide)$/,Re=new RegExp("^(?:([+-])=|)("+W+")([a-z%]*)$","i"),Me=/queueHooks$/,We=[function(e,t,n){var r,i,o,s,a,u,l,c,f=this,d={},h=e.style,g=e.nodeType&&I(e),v=O.get(e,"fxshow");n.queue||(a=p._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,p.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=p.css(e,"display"),c="none"===l?O.get(e,"olddisplay")||ve(e.nodeName):l,"inline"===c&&"none"===p.css(e,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Pe.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||p.style(e,r)}else l=void 0;if(p.isEmptyObject(d))"inline"===("none"===l?ve(e.nodeName):l)&&(h.display=l);else{v?"hidden"in v&&(g=v.hidden):v=O.access(e,"fxshow",{}),o&&(v.hidden=!g),g?p(e).show():f.done(function(){p(e).hide()}),f.done(function(){var t;O.remove(e,"fxshow");for(t in d)p.style(e,t,d[t])});for(r in d)s=_e(g?v[r]:0,r,f),r in v||(v[r]=s.start,g&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}],$e={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Re.exec(t),o=i&&i[3]||(p.cssNumber[e]?"":"px"),s=(p.cssNumber[e]||"px"!==o&&+r)&&Re.exec(p.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do{a=a||".5",s/=a,p.style(n.elem,e,s+o)}while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function Ie(){return setTimeout(function(){Oe=void 0}),Oe=p.now()}function Be(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=$[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function _e(e,t,n){for(var r,i=($e[t]||[]).concat($e["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function ze(e,t,n){var r,i,o=0,s=We.length,a=p.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Oe||Ie(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;s>o;o++)l.tweens[o].run(r);return a.notifyWith(e,[l,r,n]),1>r&&s?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:p.extend({},t),opts:p.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Oe||Ie(),duration:n.duration,tweens:[],createTween:function(t,n){var r=p.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,i,o,s;for(n in e)if(r=p.camelCase(n),i=t[r],o=e[n],p.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=p.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}(c,l.opts.specialEasing);s>o;o++)if(r=We[o].call(l,e,c,l.opts))return r;return p.map(c,_e,l),p.isFunction(l.opts.start)&&l.opts.start.call(e,l),p.fx.timer(p.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}p.Animation=p.extend(ze,{tweener:function(e,t){p.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],$e[n]=$e[n]||[],$e[n].unshift(t)},prefilter:function(e,t){t?We.unshift(e):We.push(e)}}),p.speed=function(e,t,n){var r=e&&"object"==typeof e?p.extend({},e):{complete:n||!n&&t||p.isFunction(e)&&e,duration:e,easing:n&&t||t&&!p.isFunction(t)&&t};return r.duration=p.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in p.fx.speeds?p.fx.speeds[r.duration]:p.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){p.isFunction(r.old)&&r.old.call(this),r.queue&&p.dequeue(this,r.queue)},r},p.fn.extend({fadeTo:function(e,t,n,r){return this.filter(I).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=p.isEmptyObject(e),o=p.speed(t,n,r),s=function(){var t=ze(this,p.extend({},e),o);(i||O.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=p.timers,s=O.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Me.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&p.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=O.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=p.timers,s=r?r.length:0;for(n.finish=!0,p.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),p.each(["toggle","show","hide"],function(e,t){var n=p.fn[t];p.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Be(t,!0),e,r,i)}}),p.each({slideDown:Be("show"),slideUp:Be("hide"),slideToggle:Be("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){p.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),p.timers=[],p.fx.tick=function(){var e,t=0,n=p.timers;for(Oe=p.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||p.fx.stop(),Oe=void 0},p.fx.timer=function(e){p.timers.push(e),e()?p.fx.start():p.timers.pop()},p.fx.interval=13,p.fx.start=function(){Fe||(Fe=setInterval(p.fx.tick,p.fx.interval))},p.fx.stop=function(){clearInterval(Fe),Fe=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fn.delay=function(e,t){return e=p.fx?p.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=f.createElement("input"),t=f.createElement("select"),n=t.appendChild(f.createElement("option"));e.type="checkbox",c.checkOn=""!==e.value,c.optSelected=n.selected,t.disabled=!0,c.optDisabled=!n.disabled,(e=f.createElement("input")).value="t",e.type="radio",c.radioValue="t"===e.value}();var Xe,Ue=p.expr.attrHandle;p.fn.extend({attr:function(e,t){return q(this,p.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){p.removeAttr(this,e)})}}),p.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===_?p.prop(e,t,n):(1===o&&p.isXMLDoc(e)||(t=t.toLowerCase(),r=p.attrHooks[t]||(p.expr.match.bool.test(t)?Xe:void 0)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=p.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void p.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(D);if(o&&1===e.nodeType)for(;n=o[i++];)r=p.propFix[n]||n,p.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!c.radioValue&&"radio"===t&&p.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Xe={set:function(e,t,n){return!1===t?p.removeAttr(e,n):e.setAttribute(n,n),n}},p.each(p.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ue[t]||p.find.attr;Ue[t]=function(e,t,r){var i,o;return r||(o=Ue[t],Ue[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ue[t]=o),i}});var Ve=/^(?:input|select|textarea|button)$/i;p.fn.extend({prop:function(e,t){return q(this,p.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[p.propFix[e]||e]})}}),p.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e, t, n) {
	var r, i, o, s = e.nodeType;
	if (e && 3 !== s && 8 !== s && 2 !== s)
		return o = 1 !== s || !p.isXMLDoc(e), o && ( t = p.propFix[t] || t, i = p.propHooks[t]),
		void 0 !== n ? i && "set" in i &&
		void 0 !== ( r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== ( r = i.get(e, t)) ? r : e[t]
}, propHooks: { tabIndex: { get:function(e) {
			return e.hasAttribute("tabindex") || Ve.test(e.nodeName) || e.href ? e.tabIndex : -1
		}
	}
}}),
c.optSelected || (p.propHooks.selected = {
	get : function(e) {
		var t = e.parentNode;
		return t && t.parentNode && t.parentNode.selectedIndex, null
	}
}), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
	p.propFix[this.toLowerCase()] = this
});
var Ye = /[\t\r\n\f]/g;
p.fn.extend({
	addClass : function(e) {
		var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
		if (p.isFunction(e))
			return this.each(function(t) {
				p(this).addClass(e.call(this, t, this.className))
			});
		if (a)
			for ( t = (e || "").match(D) || []; l > u; u++)
				if ( n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ye, " ") : " ")) {
					for ( o = 0; i = t[o++]; )
						r.indexOf(" " + i + " ") < 0 && (r += i + " ");
					s = p.trim(r), n.className !== s && (n.className = s)
				}
		return this
	},
	removeClass : function(e) {
		var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
		if (p.isFunction(e))
			return this.each(function(t) {
				p(this).removeClass(e.call(this, t, this.className))
			});
		if (a)
			for ( t = (e || "").match(D) || []; l > u; u++)
				if ( n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ye, " ") : "")) {
					for ( o = 0; i = t[o++]; )
						for (; r.indexOf(" " + i + " ") >= 0; )
							r = r.replace(" " + i + " ", " ");
					s = e ? p.trim(r) : "", n.className !== s && (n.className = s)
				}
		return this
	},
	toggleClass : function(e, t) {
		var n = typeof e;
		return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(n) {
			p(this).toggleClass(e.call(this, n, this.className, t), t)
		} : function() {
			if ("string" === n)
				for (var t, r = 0, i = p(this), o = e.match(D) || []; t = o[r++]; )
					i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
			else
				(n === _ || "boolean" === n) && (this.className && O.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : O.get(this, "__className__") || "")
		})
	},
	hasClass : function(e) {
		for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
			if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ye, " ").indexOf(t) >= 0)
				return !0;
		return !1
	}
});
var Ge = /\r/g;
p.fn.extend({
	val : function(e) {
		var t, n, r, i = this[0];
		return arguments.length ? ( r = p.isFunction(e), this.each(function(n) {
			var i;
			1 === this.nodeType && ( i = r ? e.call(this, n, p(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && ( i = p.map(i, function(e) {
				return null == e ? "" : e + ""
			})), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set" in t &&
			void 0 !== t.set(this, i, "value") || (this.value = i))
		})) : i ? ( t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) && "get" in t &&
		void 0 !== ( n = t.get(i, "value")) ? n : "string" == typeof ( n = i.value) ? n.replace(Ge, "") : null == n ? "" : n :
		void 0
	}
}), p.extend({
	valHooks : {
		option : {
			get : function(e) {
				var t = p.find.attr(e, "value");
				return null != t ? t : p.trim(p.text(e))
			}
		},
		select : {
			get : function(e) {
				for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
					if ( n = r[u], !(!n.selected && u !== i || (c.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
						if ( t = p(n).val(), o)
							return t;
						s.push(t)
					}
				return s
			},
			set : function(e, t) {
				for (var n, r, i = e.options, o = p.makeArray(t), s = i.length; s--; )
					r = i[s], (r.selected = p.inArray(r.value, o) >= 0) && ( n = !0);
				return n || (e.selectedIndex = -1), o
			}
		}
	}
}), p.each(["radio", "checkbox"], function() {
	p.valHooks[this] = {
		set : function(e, t) {
			return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 :
			void 0
		}
	}, c.checkOn || (p.valHooks[this].get = function(e) {
		return null === e.getAttribute("value") ? "on" : e.value
	})
}), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
	p.fn[t] = function(e, n) {
		return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
	}
}), p.fn.extend({
	hover : function(e, t) {
		return this.mouseenter(e).mouseleave(t || e)
	},
	bind : function(e, t, n) {
		return this.on(e, null, t, n)
	},
	unbind : function(e, t) {
		return this.off(e, null, t)
	},
	delegate : function(e, t, n, r) {
		return this.on(t, e, n, r)
	},
	undelegate : function(e, t, n) {
		return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
	}
});
var Qe = p.now(), Je = /\?/;
p.parseJSON = function(e) {
	return JSON.parse(e + "")
}, p.parseXML = function(e) {
	var t, n;
	if (!e || "string" != typeof e)
		return null;
	try {
		n = new DOMParser, t = n.parseFromString(e, "text/xml")
	} catch(e) {
		t =
		void 0
	}
	return (!t || t.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + e), t
};
var Ke = /#.*$/, Ze = /([?&])_=[^&]*/, et = /^(.*?):[ \t]*([^\r\n]*)$/gm, tt = /^(?:GET|HEAD)$/, nt = /^\/\//, rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, it = {}, ot = {}, st = "*/".concat("*"), at = e.location.href, ut = rt.exec(at.toLowerCase()) || [];
function lt(e) {
	return function(t, n) {
		"string" != typeof t && ( n = t, t = "*");
		var r, i = 0, o = t.toLowerCase().match(D) || [];
		if (p.isFunction(n))
			for (; r = o[i++]; )
				"+" === r[0] ? ( r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
	}
}

function ct(e, t, n, r) {
	var i = {}, o = e === ot;
	function s(a) {
		var u;
		return i[a] = !0, p.each(e[a] || [], function(e, a) {
			var l = a(t, n, r);
			return "string" != typeof l || o || i[l] ? o ? !( u = l) :
			void 0 : (t.dataTypes.unshift(l), s(l), !1)
		}), u
	}
	return s(t.dataTypes[0]) || !i["*"] && s("*")
}

function ft(e, t) {
	var n, r, i = p.ajaxSettings.flatOptions || {};
	for (n in t)
	void 0 !== t[n] && ((i[n]?e:r||(r={}))[n] = t[n]);
	return r && p.extend(!0, e, r), e
}
p.extend({
	active : 0,
	lastModified : {},
	etag : {},
	ajaxSettings : {
		url : at,
		type : "GET",
		isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut[1]),
		global : !0,
		processData : !0,
		async : !0,
		contentType : "application/x-www-form-urlencoded; charset=UTF-8",
		accepts : {
			"*" : st,
			text : "text/plain",
			html : "text/html",
			xml : "application/xml, text/xml",
			json : "application/json, text/javascript"
		},
		contents : {
			xml : /xml/,
			html : /html/,
			json : /json/
		},
		responseFields : {
			xml : "responseXML",
			text : "responseText",
			json : "responseJSON"
		},
		converters : {
			"* text" : String,
			"text html" : !0,
			"text json" : p.parseJSON,
			"text xml" : p.parseXML
		},
		flatOptions : {
			url : !0,
			context : !0
		}
	},
	ajaxSetup : function(e, t) {
		return t ? ft(ft(e, p.ajaxSettings), t) : ft(p.ajaxSettings, e)
	},
	ajaxPrefilter : lt(it),
	ajaxTransport : lt(ot),
	ajax : function(e, t) {
		"object" == typeof e && ( t = e, e =
		void 0), t = t || {};
		var n, r, i, o, s, a, u, l, c = p.ajaxSetup({}, t), f = c.context || c, d = c.context && (f.nodeType || f.jquery) ? p(f) : p.event, h = p.Deferred(), g = p.Callbacks("once memory"), v = c.statusCode || {}, m = {}, y = {}, x = 0, b = "canceled", w = {
			readyState : 0,
			getResponseHeader : function(e) {
				var t;
				if (2 === x) {
					if (!o)
						for ( o = {}; t = et.exec(i); )
							o[t[1].toLowerCase()] = t[2];
					t = o[e.toLowerCase()]
				}
				return null == t ? null : t
			},
			getAllResponseHeaders : function() {
				return 2 === x ? i : null
			},
			setRequestHeader : function(e, t) {
				var n = e.toLowerCase();
				return x || ( e = y[n] = y[n] || e, m[e] = t), this
			},
			overrideMimeType : function(e) {
				return x || (c.mimeType = e), this
			},
			statusCode : function(e) {
				var t;
				if (e)
					if (2 > x)
						for (t in e)
						v[t] = [v[t], e[t]];
					else
						w.always(e[w.status]);
				return this
			},
			abort : function(e) {
				var t = e || b;
				return n && n.abort(t), T(0, t), this
			}
		};
		if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, c.url = ((e || c.url || at) + "").replace(Ke, "").replace(nt, ut[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = p.trim(c.dataType || "*").toLowerCase().match(D) || [""], null == c.crossDomain && ( a = rt.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ut[1] && a[2] === ut[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (ut[3] || ("http:" === ut[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = p.param(c.data, c.traditional)), ct(it, c, t, w), 2 === x)
			return w;
		( u = p.event && c.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !tt.test(c.type), r = c.url, c.hasContent || (c.data && ( r = c.url += (Je.test(r) ? "&" : "?") + c.data,
		delete c.data), !1 === c.cache && (c.url = Ze.test(r) ? r.replace(Ze, "$1_=" + Qe++) : r + (Je.test(r) ? "&" : "?") + "_=" + Qe++)), c.ifModified && (p.lastModified[r] && w.setRequestHeader("If-Modified-Since", p.lastModified[r]), p.etag[r] && w.setRequestHeader("If-None-Match", p.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + st + "; q=0.01" : "") : c.accepts["*"]);
		for (l in c.headers)
		w.setRequestHeader(l, c.headers[l]);
		if (c.beforeSend && (!1 === c.beforeSend.call(f, w, c) || 2 === x))
			return w.abort();
		b = "abort";
		for (l in {
			success : 1,
			error : 1,
			complete : 1
		})w[l](c[l]);
		if ( n = ct(ot, c, t, w)) {
			w.readyState = 1, u && d.trigger("ajaxSend", [w, c]), c.async && c.timeout > 0 && ( s = setTimeout(function() {
				w.abort("timeout")
			}, c.timeout));
			try {
				x = 1, n.send(m, T)
			} catch(e) {
				if (!(2 > x))
					throw e;
				T(-1, e)
			}
		} else
			T(-1, "No Transport");
		function T(e, t, o, a) {
			var l, m, y, b, T, C = t;
			2 !== x && ( x = 2, s && clearTimeout(s), n =
			void 0, i = a || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && ( b = function(e, t, n) {
				for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
					u.shift(),
					void 0 === r && ( r = e.mimeType || t.getResponseHeader("Content-Type"));
				if (r)
					for (i in a)
					if (a[i] && a[i].test(r)) {
						u.unshift(i);
						break
					}
				if (u[0] in n)
					o = u[0];
				else {
					for (i in n) {
						if (!u[0] || e.converters[i + " " + u[0]]) {
							o = i;
							break
						}
						s || ( s = i)
					}
					o = o || s
				}
				return o ? (o !== u[0] && u.unshift(o), n[o]) :
				void 0
			}(c, w, o)), b = function(e, t, n, r) {
				var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
				if (c[1])
					for (s in e.converters)
					l[s.toLowerCase()] = e.converters[s];
				for ( o = c.shift(); o; )
					if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && ( t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
						if ("*" === o)
							o = u;
						else if ("*" !== u && u !== o) {
							if (!( s = l[u + " " + o] || l["* " + o]))
								for (i in l)
								if ( a = i.split(" "), a[1] === o && ( s = l[u + " " + a[0]] || l["* " + a[0]])) {
									!0 === s ? s = l[i] : !0 !== l[i] && ( o = a[0], c.unshift(a[1]));
									break
								}
							if (!0 !== s)
								if (s && e.throws)
									t = s(t);
								else
									try {
										t = s(t)
									} catch(e) {
										return {
											state : "parsererror",
											error : s ? e : "No conversion from " + u + " to " + o
										}
									}
						}
				return {
					state : "success",
					data : t
				}
			}(c, b, w, l), l ? (c.ifModified && ( T = w.getResponseHeader("Last-Modified"), T && (p.lastModified[r] = T), T = w.getResponseHeader("etag"), T && (p.etag[r] = T)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : ( C = b.state, m = b.data, y = b.error, l = !y)) : ( y = C, (e || !C) && ( C = "error", 0 > e && ( e = 0))), w.status = e, w.statusText = (t || C) + "", l ? h.resolveWith(f, [m, C, w]) : h.rejectWith(f, [w, C, y]), w.statusCode(v), v =
			void 0, u && d.trigger( l ? "ajaxSuccess" : "ajaxError", [w, c, l ? m : y]), g.fireWith(f, [w, C]), u && (d.trigger("ajaxComplete", [w, c]), --p.active || p.event.trigger("ajaxStop")))
		}
		return w
	},
	getJSON : function(e, t, n) {
		return p.get(e, t, n, "json")
	},
	getScript : function(e, t) {
		return p.get(e,
		void 0, t, "script")
	}
}), p.each(["get", "post"], function(e, t) {
	p[t] = function(e, n, r, i) {
		return p.isFunction(n) && ( i = i || r, r = n, n =
		void 0), p.ajax({
			url : e,
			type : t,
			dataType : i,
			data : n,
			success : r
		})
	}
}), p._evalUrl = function(e) {
	return p.ajax({
		url : e,
		type : "GET",
		dataType : "script",
		async : !1,
		global : !1,
		throws : !0
	})
}, p.fn.extend({
	wrapAll : function(e) {
		var t;
		return p.isFunction(e) ? this.each(function(t) {
			p(this).wrapAll(e.call(this, t))
		}) : (this[0] && ( t = p(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
			for (var e = this; e.firstElementChild; )
				e = e.firstElementChild;
			return e
		}).append(this)), this)
	},
	wrapInner : function(e) {
		return this.each(p.isFunction(e) ? function(t) {
			p(this).wrapInner(e.call(this, t))
		} : function() {
			var t = p(this), n = t.contents();
			n.length ? n.wrapAll(e) : t.append(e)
		})
	},
	wrap : function(e) {
		var t = p.isFunction(e);
		return this.each(function(n) {
			p(this).wrapAll( t ? e.call(this, n) : e)
		})
	},
	unwrap : function() {
		return this.parent().each(function() {
			p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
		}).end()
	}
}), p.expr.filters.hidden = function(e) {
	return e.offsetWidth <= 0 && e.offsetHeight <= 0
}, p.expr.filters.visible = function(e) {
	return !p.expr.filters.hidden(e)
};
var pt = /%20/g, dt = /\[\]$/, ht = /\r?\n/g, gt = /^(?:submit|button|image|reset|file)$/i, vt = /^(?:input|select|textarea|keygen)/i;
function mt(e, t, n, r) {
	var i;
	if (p.isArray(t))
		p.each(t, function(t, i) {
			n || dt.test(e) ? r(e, i) : mt(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
	else if (n || "object" !== p.type(t))
		r(e, t);
	else
		for (i in t)mt(e + "[" + i + "]", t[i], n, r)
}
p.param = function(e, t) {
	var n, r = [], i = function(e, t) {
		t = p.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
	};
	if (
		void 0 === t && ( t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e))
		p.each(e, function() {
			i(this.name, this.value)
		});
	else
		for (n in e)mt(n, e[n], t, i);
	return r.join("&").replace(pt, "+")
}, p.fn.extend({
	serialize : function() {
		return p.param(this.serializeArray())
	},
	serializeArray : function() {
		return this.map(function() {
			var e = p.prop(this, "elements");
			return e ? p.makeArray(e) : this
		}).filter(function() {
			var e = this.type;
			return this.name && !p(this).is(":disabled") && vt.test(this.nodeName) && !gt.test(e) && (this.checked || !B.test(e))
		}).map(function(e, t) {
			var n = p(this).val();
			return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
				return {
					name : t.name,
					value : e.replace(ht, "\r\n")
				}
			}) : {
				name : t.name,
				value : n.replace(ht, "\r\n")
			}
		}).get()
	}
}), p.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest
	} catch(e) {
	}
};
var yt = 0, xt = {}, bt = {
	0 : 200,
	1223 : 204
}, wt = p.ajaxSettings.xhr();
e.attachEvent && e.attachEvent("onunload", function() {
	for (var e in xt)xt[e]()
}), c.cors = !!wt && "withCredentials" in wt, c.ajax = wt = !!wt, p.ajaxTransport(function(e) {
	var t;
	return c.cors || wt && !e.crossDomain ? {
		send : function(n, r) {
			var i, o = e.xhr(), s = ++yt;
			if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
				for (i in e.xhrFields)
				o[i] = e.xhrFields[i];
			e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
			for (i in n)
			o.setRequestHeader(i, n[i]);
			t = function(e) {
				return function() {
					t && (
					delete xt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(bt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
						text : o.responseText
					} :
					void 0, o.getAllResponseHeaders()))
				}
			}, o.onload = t(), o.onerror = t("error"), t = xt[s] = t("abort");
			try {
				o.send(e.hasContent && e.data || null)
			} catch(e) {
				if (t)
					throw e
			}
		},
		abort : function() {
			t && t()
		}
	} :
	void 0
}), p.ajaxSetup({
	accepts : {
		script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents : {
		script : /(?:java|ecma)script/
	},
	converters : {
		"text script" : function(e) {
			return p.globalEval(e), e
		}
	}
}), p.ajaxPrefilter("script", function(e) {
	void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
}), p.ajaxTransport("script", function(e) {
	if (e.crossDomain) {
		var t, n;
		return {
			send : function(r, i) {
				t = p("<script>").prop({
					async : !0,
					charset : e.scriptCharset,
					src : e.url
				}).on("load error", n = function(e) {
					t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
				}), f.head.appendChild(t[0])
			},
			abort : function() {
				n && n()
			}
		}
	}
});
var Tt = [], Ct = /(=)\?(?=&|$)|\?\?/;
p.ajaxSetup({
	jsonp : "callback",
	jsonpCallback : function() {
		var e = Tt.pop() || p.expando + "_" + Qe++;
		return this[e] = !0, e
	}
}), p.ajaxPrefilter("json jsonp", function(t, n, r) {
	var i, o, s, a = !1 !== t.jsonp && (Ct.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ct.test(t.data) && "data");
	return a || "jsonp" === t.dataTypes[0] ? ( i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ct, "$1" + i) : !1 !== t.jsonp && (t.url += (Je.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
		return s || p.error(i + " was not called"), s[0]
	}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
		s = arguments
	}, r.always(function() {
		e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Tt.push(i)), s && p.isFunction(o) && o(s[0]), s = o =
		void 0
	}), "script") :
	void 0
}), p.parseHTML = function(e, t, n) {
	if (!e || "string" != typeof e)
		return null;
	"boolean" == typeof t && ( n = t, t = !1), t = t || f;
	var r = b.exec(e), i = !n && [];
	return r ? [t.createElement(r[1])] : ( r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r.childNodes))
};
var Nt = p.fn.load;
p.fn.load = function(e, t, n) {
	if ("string" != typeof e && Nt)
		return Nt.apply(this, arguments);
	var r, i, o, s = this, a = e.indexOf(" ");
	return a >= 0 && ( r = p.trim(e.slice(a)), e = e.slice(0, a)), p.isFunction(t) ? ( n = t, t =
	void 0) : t && "object" == typeof t && ( i = "POST"), s.length > 0 && p.ajax({
		url : e,
		type : i,
		dataType : "html",
		data : t
	}).done(function(e) {
		o = arguments, s.html( r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
	}).complete(n &&
	function(e, t) {
		s.each(n, o || [e.responseText, t, e])
	}), this
}, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
	p.fn[t] = function(e) {
		return this.on(t, e)
	}
}), p.expr.filters.animated = function(e) {
	return p.grep(p.timers, function(t) {
		return e === t.elem
	}).length
};
var kt = e.document.documentElement;
function Et(e) {
	return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
}
p.offset = {
	setOffset : function(e, t, n) {
		var r, i, o, s, a, u, l = p.css(e, "position"), c = p(e), f = {};
		"static" === l && (e.style.position = "relative"), a = c.offset(), o = p.css(e, "top"), u = p.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? ( s = ( r = c.position()).top, i = r.left) : ( s = parseFloat(o) || 0, i = parseFloat(u) || 0), p.isFunction(t) && ( t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
	}
}, p.fn.extend({
	offset : function(e) {
		if (arguments.length)
			return
			void 0 === e ? this : this.each(function(t) {
				p.offset.setOffset(this, e, t)
			});
		var t, n, r = this[0], i = {
			top : 0,
			left : 0
		}, o = r && r.ownerDocument;
		return o ? ( t = o.documentElement, p.contains(t, r) ? ( typeof r.getBoundingClientRect !== _ && ( i = r.getBoundingClientRect()), n = Et(o), {
			top : i.top + n.pageYOffset - t.clientTop,
			left : i.left + n.pageXOffset - t.clientLeft
		}) : i) :
		void 0
	},
	position : function() {
		if (this[0]) {
			var e, t, n = this[0], r = {
				top : 0,
				left : 0
			};
			return "fixed" === p.css(n, "position") ? t = n.getBoundingClientRect() : ( e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || ( r = e.offset()), r.top += p.css(e[0], "borderTopWidth", !0), r.left += p.css(e[0], "borderLeftWidth", !0)), {
				top : t.top - r.top - p.css(n, "marginTop", !0),
				left : t.left - r.left - p.css(n, "marginLeft", !0)
			}
		}
	},
	offsetParent : function() {
		return this.map(function() {
			for (var e = this.offsetParent || kt; e && !p.nodeName(e, "html") && "static" === p.css(e, "position"); )
				e = e.offsetParent;
			return e || kt
		})
	}
}), p.each({
	scrollLeft : "pageXOffset",
	scrollTop : "pageYOffset"
}, function(t, n) {
	var r = "pageYOffset" === n;
	p.fn[t] = function(i) {
		return q(this, function(t, i, o) {
			var s = Et(t);
			return
			void 0 === o ? s ? s[n] : t[i] :
			void ( s ? s.scrollTo( r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
		}, t, i, arguments.length, null)
	}
}), p.each(["top", "left"], function(e, t) {
	p.cssHooks[t] = we(c.pixelPosition, function(e, n) {
		return n ? ( n = be(e, t), ye.test(n) ? p(e).position()[t] + "px" : n) :
		void 0
	})
}), p.each({
	Height : "height",
	Width : "width"
}, function(e, t) {
	p.each({
		padding : "inner" + e,
		content : t,
		"" : "outer" + e
	}, function(n, r) {
		p.fn[r] = function(r, i) {
			var o = arguments.length && (n || "boolean" != typeof r), s = n || (!0 === r || !0 === i ? "margin" : "border");
			return q(this, function(t, n, r) {
				var i;
				return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? ( i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) :
				void 0 === r ? p.css(t, n, s) : p.style(t, n, r, s)
			}, t, o ? r :
			void 0, o, null)
		}
	})
}), p.fn.size = function() {
	return this.length
}, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
	return p
});
var St = e.jQuery, Dt = e.$;
return p.noConflict=function(t){return e.$===p&&(e.$=Dt),t&&e.jQuery===p&&(e.jQuery=St),p},typeof t===_&&(e.jQuery=e.$=p),p});