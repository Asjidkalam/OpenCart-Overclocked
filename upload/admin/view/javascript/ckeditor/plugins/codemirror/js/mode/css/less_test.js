﻿(function(){function a(a){test.mode(a,b,Array.prototype.slice.call(arguments,1),"less")}var b=CodeMirror.getMode({indentUnit:2},"text/x-less");a("variable","[variable-2 @base]: [atom #f04615];","[qualifier .class] {","  [property width]: [variable percentage]([number 0.5]); [comment // returns `50%`]","  [property color]: [variable saturate]([variable-2 @base], [number 5%]);","}");a("amp","[qualifier .child], [qualifier .sibling] {","  [qualifier .parent] [atom \x26] {","    [property color]: [keyword black];",
"  }","  [atom \x26] + [atom \x26] {","    [property color]: [keyword red];","  }","}");a("mixin","[qualifier .mixin] ([variable dark]; [variable-2 @color]) {","  [property color]: [atom darken]([variable-2 @color], [number 10%]);","}","[qualifier .mixin] ([variable light]; [variable-2 @color]) {","  [property color]: [atom lighten]([variable-2 @color], [number 10%]);","}","[qualifier .mixin] ([variable-2 @_]; [variable-2 @color]) {","  [property display]: [atom block];","}","[variable-2 @switch]: [variable light];",
"[qualifier .class] {","  [qualifier .mixin]([variable-2 @switch]; [atom #888]);","}");a("nest","[qualifier .one] {","  [def @media] ([property width]: [number 400px]) {","    [property font-size]: [number 1.2em];","    [def @media] [attribute print] [keyword and] [property color] {","      [property color]: [keyword blue];","    }","  }","}");a("interpolation",".@{[variable foo]} { [property font-weight]: [atom bold]; }")})();
