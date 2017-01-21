﻿(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror"),require("./searchcursor"),require("../scroll/annotatescrollbar")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./searchcursor","../scroll/annotatescrollbar"],d):d(CodeMirror)})(function(d){function g(a,c,b,e){this.cm=a;this.options=e;var f={listenForChanges:!1},d;for(d in e)f[d]=e[d];f.className||(f.className="CodeMirror-search-match");this.annotation=a.annotateScrollbar(f);this.query=
c;this.caseFold=b;this.gap={from:a.firstLine(),to:a.lastLine()+1};this.matches=[];this.update=null;this.findMatches();this.annotation.update(this.matches);var g=this;a.on("change",this.changeHandler=function(a,b){g.onChange(b)})}function h(a,c,b){return a<=c?a:Math.max(c,a+b)}d.defineExtension("showMatchesOnScrollbar",function(a,c,b){"string"==typeof b&&(b={className:b});b||(b={});return new g(this,a,c,b)});g.prototype.findMatches=function(){if(this.gap){for(var a=0;a<this.matches.length;a++){var c=
this.matches[a];if(c.from.line>=this.gap.to)break;c.to.line>=this.gap.from&&this.matches.splice(a--,1)}for(var b=this.cm.getSearchCursor(this.query,d.Pos(this.gap.from,0),this.caseFold),e=this.options&&this.options.maxMatches||1E3;b.findNext();){c={from:b.from(),to:b.to()};if(c.from.line>=this.gap.to)break;this.matches.splice(a++,0,c);if(this.matches.length>e)break}this.gap=null}};g.prototype.onChange=function(a){var c=a.from.line,b=d.changeEnd(a).line,e=b-a.to.line;this.gap?(this.gap.from=Math.min(h(this.gap.from,
c,e),a.from.line),this.gap.to=Math.max(h(this.gap.to,c,e),a.from.line)):this.gap={from:a.from.line,to:b+1};if(e)for(a=0;a<this.matches.length;a++){var b=this.matches[a],f=h(b.from.line,c,e);f!=b.from.line&&(b.from=d.Pos(f,b.from.ch));f=h(b.to.line,c,e);f!=b.to.line&&(b.to=d.Pos(f,b.to.ch))}clearTimeout(this.update);var g=this;this.update=setTimeout(function(){g.updateAfterChange()},250)};g.prototype.updateAfterChange=function(){this.findMatches();this.annotation.update(this.matches)};g.prototype.clear=
function(){this.cm.off("change",this.changeHandler);this.annotation.clear()}});
