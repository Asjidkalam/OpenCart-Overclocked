﻿(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)})(function(a){a.registerHelper("fold","indent",function(b,e){var g=b.getOption("tabSize"),f=b.getLine(e.line);if(/\S/.test(f)){for(var k=a.countColumn(f,null,g),c=null,d=e.line+1,l=b.lastLine();d<=l;++d){var h=b.getLine(d);if(a.countColumn(h,null,g)>k)c=d;else if(/\S/.test(h))break}if(c)return{from:a.Pos(e.line,f.length),
to:a.Pos(c,b.getLine(c).length)}}})});
