﻿(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror"),require("../fold/xml-fold")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../fold/xml-fold"],d):d(CodeMirror)})(function(d){function f(a){a.state.tagHit&&a.state.tagHit.clear();a.state.tagOther&&a.state.tagOther.clear();a.state.tagHit=a.state.tagOther=null}function e(a){a.state.failedTagMatch=!1;a.operation(function(){f(a);if(!a.somethingSelected()){var b=a.getCursor(),c=a.getViewport();
c.from=Math.min(c.from,b.line);c.to=Math.max(b.line+1,c.to);if(b=d.findMatchingTag(a,b,c))a.state.matchBothTags&&(c="open"==b.at?b.open:b.close)&&(a.state.tagHit=a.markText(c.from,c.to,{className:"CodeMirror-matchingtag"})),(b="close"==b.at?b.open:b.close)?a.state.tagOther=a.markText(b.from,b.to,{className:"CodeMirror-matchingtag"}):a.state.failedTagMatch=!0}})}function g(a){a.state.failedTagMatch&&e(a)}d.defineOption("matchTags",!1,function(a,b,c){c&&c!=d.Init&&(a.off("cursorActivity",e),a.off("viewportChange",
g),f(a));b&&(a.state.matchBothTags="object"==typeof b&&b.bothTags,a.on("cursorActivity",e),a.on("viewportChange",g),e(a))});d.commands.toMatchingTag=function(a){var b=d.findMatchingTag(a,a.getCursor());b&&(b="close"==b.at?b.open:b.close)&&a.extendSelection(b.to,b.from)}});
