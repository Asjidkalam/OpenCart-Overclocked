﻿(function(n){"object"==typeof exports&&"object"==typeof module?n(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],n):n(CodeMirror)})(function(n){function v(a){return"[object Array]"==Object.prototype.toString.call(a)}function E(a){a=a.doc.modeOption;"sql"===a&&(a="text/x-sql");return n.resolveMode(a).keywords}function u(a){return"string"==typeof a?a:a.text}function y(a,c){v(c)&&(c={columns:c});
c.text||(c.text=a);return c}function F(a){var c={};if(v(a))for(var b=a.length-1;0<=b;b--){var d=a[b];c[u(d).toUpperCase()]=y(u(d),d)}else if(a)for(b in a)c[b.toUpperCase()]=y(b,a[b]);return c}function z(a){var c={},b;for(b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c}function A(a,c){var b=a.length,b=u(c).substr(0,b);return a.toUpperCase()===b.toUpperCase()}function r(a,c,b,d){if(v(b))for(var f=0;f<b.length;f++)A(c,b[f])&&a.push(d(b[f]));else for(f in b)if(b.hasOwnProperty(f)){var e=b[f],e=e&&!0!==
e?e.displayText?{text:e.text,displayText:e.displayText}:e.text:f;A(c,e)&&a.push(d(e))}}function G(a){"."==a.charAt(0)&&(a=a.substr(1));return a.replace(/`/g,"")}function w(a){for(var c=u(a).split("."),b=0;b<c.length;b++)c[b]="`"+c[b]+"`";c=c.join(".");if("string"==typeof a)return c;a=z(a);a.text=c;return a}function H(a,c,b,d){for(var f=!1,e=[],l=c.start,h=!0;h;)h="."==c.string.charAt(0),f=f||"`"==c.string.charAt(0),l=c.start,e.unshift(G(c.string)),c=d.getTokenAt(p(a.line,c.start)),"."==c.string&&
(h=!0,c=d.getTokenAt(p(a.line,c.start)));a=e.join(".");r(b,a,q,function(a){return f?w(a):a});r(b,a,k,function(a){return f?w(a):a});a=e.pop();var g=e.join("."),t=!1,m=g;q[g.toUpperCase()]||(e=g,g=B(g,d),g!==e&&(t=!0));(d=q[g.toUpperCase()])&&d.columns&&(d=d.columns);d&&r(b,a,d,function(a){var b=g;1==t&&(b=m);"string"==typeof a?a=b+"."+a:(a=z(a),a.text=b+"."+a.text);return f?w(a):a});return l}function I(a,c){if(a)for(var b=/[,;]/g,d=a.split(" "),f=0;f<d.length;f++)c(d[f]?d[f].replace(b,""):"")}function B(a,
c){for(var b=c.doc,d=b.getValue(),f=a.toUpperCase(),e="",l="",h=[],g=p(0,0),t=p(c.lastLine(),c.getLineHandle(c.lastLine()).length),m=d.indexOf(x.QUERY_DIV);-1!=m;)h.push(b.posFromIndex(m)),m=d.indexOf(x.QUERY_DIV,m+1);h.unshift(p(0,0));h.push(p(c.lastLine(),c.getLineHandle(c.lastLine()).text.length));for(var m=null,k=c.getCursor(),d=0;d<h.length;d++){if((null==m||0<C(k,m))&&0>=C(k,h[d])){g=m;t=h[d];break}m=h[d]}b=b.getRange(g,t,!1);for(d=0;d<b.length&&(I(b[d],function(a){var b=a.toUpperCase();b===
f&&q[e.toUpperCase()]&&(l=e);b!==x.ALIAS_KEYWORD&&(e=a)}),!l);d++);return l}var q,k,D,x={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},p=n.Pos,C=n.cmpPos;n.registerHelper("hint","sql",function(a,c){q=F(c&&c.tables);var b=c&&c.defaultTable,d=c&&c.disableKeywords;k=b&&q[b.toUpperCase()];D=E(a);b&&!k&&(k=B(b,a));k=k||[];k.columns&&(k=k.columns);var b=a.getCursor(),f=[],e=a.getTokenAt(b),l,h,g;e.end>b.ch&&(e.end=b.ch,e.string=e.string.slice(0,b.ch-e.start));e.string.match(/^[.`\w@]\w*$/)?(g=e.string,l=e.start,h=
e.end):(l=h=b.ch,g="");"."==g.charAt(0)||"`"==g.charAt(0)?l=H(b,e,f,a):(r(f,g,q,function(a){return a}),r(f,g,k,function(a){return a}),d||r(f,g,D,function(a){return a.toUpperCase()}));return{list:f,from:p(b.line,l),to:p(b.line,h)}})});
