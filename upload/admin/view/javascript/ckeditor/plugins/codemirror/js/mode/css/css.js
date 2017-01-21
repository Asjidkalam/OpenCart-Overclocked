﻿(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],k):k(CodeMirror)})(function(k){function l(d){for(var e={},g=0;g<d.length;++g)e[d[g].toLowerCase()]=!0;return e}function m(d,e){for(var g=!1,k;null!=(k=d.next());){if(g&&"/"==k){e.tokenize=null;break}g="*"==k}return["comment","comment"]}k.defineMode("css",function(d,e){function g(a,c){K=c;return a}function l(a,c){var b=a.next();if(w[b]){var d=
w[b](a,c);if(!1!==d)return d}if("@"==b)return a.eatWhile(/[\w\\\-]/),g("def",a.current());if("\x3d"==b||("~"==b||"|"==b)&&a.eat("\x3d"))return g(null,"compare");if('"'==b||"'"==b)return c.tokenize=m(b),c.tokenize(a,c);if("#"==b)return a.eatWhile(/[\w\\\-]/),g("atom","hash");if("!"==b)return a.match(/^\s*\w*/),g("keyword","important");if(/\d/.test(b)||"."==b&&a.eat(/\d/))return a.eatWhile(/[\w.%]/),g("number","unit");if("-"===b){if(/[\d.]/.test(a.peek()))return a.eatWhile(/[\w.%]/),g("number","unit");
if(a.match(/^-[\w\\\-]+/))return a.eatWhile(/[\w\\\-]/),a.match(/^\s*:/,!1)?g("variable-2","variable-definition"):g("variable-2","variable");if(a.match(/^\w+-/))return g("meta","meta")}else return/[,+>*\/]/.test(b)?g(null,"select-op"):"."==b&&a.match(/^-?[_a-z][_a-z0-9-]*/i)?g("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(b)?g(null,b):"u"==b&&a.match(/rl(-prefix)?\(/)||"d"==b&&a.match("omain(")||"r"==b&&a.match("egexp(")?(a.backUp(1),c.tokenize=y,g("property","word")):/[\w\\\-]/.test(b)?(a.eatWhile(/[\w\\\-]/),
g("property","word")):g(null,null)}function m(a){return function(c,b){for(var d=!1,e;null!=(e=c.next());){if(e==a&&!d){")"==a&&c.backUp(1);break}d=!d&&"\\"==e}if(e==a||!d&&")"!=a)b.tokenize=null;return g("string","string")}}function y(a,c){a.next();a.match(/\s*[\"\')]/,!1)?c.tokenize=null:c.tokenize=m(")");return g(null,"(")}function r(a,c,b){this.type=a;this.indent=c;this.prev=b}function h(a,c,b,d){a.context=new r(b,c.indentation()+(!1===d?0:v),a.context);return b}function n(a){a.context.prev&&(a.context=
a.context.prev);return a.context.type}function q(a,c,b,d){for(d=d||1;0<d;d--)b.context=b.context.prev;return p[b.context.type](a,c,b)}function t(a){a=a.current().toLowerCase();f=F.hasOwnProperty(a)?"atom":E.hasOwnProperty(a)?"keyword":"variable"}var u=e.inline;e.propertyKeywords||(e=k.resolveMode("text/css"));var v=d.indentUnit,w=e.tokenHooks,z=e.documentTypes||{},A=e.mediaTypes||{},D=e.mediaFeatures||{},G=e.mediaValueKeywords||{},B=e.propertyKeywords||{},C=e.nonStandardPropertyKeywords||{},H=e.fontProperties||
{},I=e.counterDescriptors||{},E=e.colorKeywords||{},F=e.valueKeywords||{},x=e.allowNested,J=!0===e.supportsAtComponent,K,f,p={top:function(a,c,b){if("{"==a)return h(b,c,"block");if("}"==a&&b.context.prev)return n(b);if(J&&/@component/.test(a))return h(b,c,"atComponentBlock");if(/^@(-moz-)?document$/.test(a))return h(b,c,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/.test(a))return h(b,c,"atBlock");if(/^@(font-face|counter-style)/.test(a))return b.stateArg=a,"restricted_atBlock_before";
if(/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(a))return"keyframes";if(a&&"@"==a.charAt(0))return h(b,c,"at");if("hash"==a)f="builtin";else if("word"==a)f="tag";else{if("variable-definition"==a)return"maybeprop";if("interpolation"==a)return h(b,c,"interpolation");if(":"==a)return"pseudo";if(x&&"("==a)return h(b,c,"parens")}return b.context.type},block:function(a,c,b){if("word"==a){a=c.current().toLowerCase();if(B.hasOwnProperty(a))return f="property","maybeprop";if(C.hasOwnProperty(a))return f="string-2",
"maybeprop";if(x)return f=c.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block";f+=" error";return"maybeprop"}if("meta"==a)return"block";if(x||"hash"!=a&&"qualifier"!=a)return p.top(a,c,b);f="error";return"block"},maybeprop:function(a,c,b){return":"==a?h(b,c,"prop"):p[b.context.type](a,c,b)},prop:function(a,c,b){if(";"==a)return n(b);if("{"==a&&x)return h(b,c,"propBlock");if("}"==a||"{"==a)return q(a,c,b);if("("==a)return h(b,c,"parens");if("hash"==a&&!/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(c.current()))f+=
" error";else if("word"==a)t(c);else if("interpolation"==a)return h(b,c,"interpolation");return"prop"},propBlock:function(a,c,b){return"}"==a?n(b):"word"==a?(f="property","maybeprop"):b.context.type},parens:function(a,c,b){if("{"==a||"}"==a)return q(a,c,b);if(")"==a)return n(b);if("("==a)return h(b,c,"parens");if("interpolation"==a)return h(b,c,"interpolation");"word"==a&&t(c);return"parens"},pseudo:function(a,c,b){return"word"==a?(f="variable-3",b.context.type):p[b.context.type](a,c,b)},documentTypes:function(a,
c,b){return"word"==a&&z.hasOwnProperty(c.current())?(f="tag",b.context.type):p.atBlock(a,c,b)},atBlock:function(a,c,b){if("("==a)return h(b,c,"atBlock_parens");if("}"==a||";"==a)return q(a,c,b);if("{"==a)return n(b)&&h(b,c,x?"block":"top");if("interpolation"==a)return h(b,c,"interpolation");"word"==a&&(a=c.current().toLowerCase(),f="only"==a||"not"==a||"and"==a||"or"==a?"keyword":A.hasOwnProperty(a)?"attribute":D.hasOwnProperty(a)?"property":G.hasOwnProperty(a)?"keyword":B.hasOwnProperty(a)?"property":
C.hasOwnProperty(a)?"string-2":F.hasOwnProperty(a)?"atom":E.hasOwnProperty(a)?"keyword":"error");return b.context.type},atComponentBlock:function(a,c,b){if("}"==a)return q(a,c,b);if("{"==a)return n(b)&&h(b,c,x?"block":"top",!1);"word"==a&&(f="error");return b.context.type},atBlock_parens:function(a,c,b){return")"==a?n(b):"{"==a||"}"==a?q(a,c,b,2):p.atBlock(a,c,b)},restricted_atBlock_before:function(a,c,b){return"{"==a?h(b,c,"restricted_atBlock"):"word"==a&&"@counter-style"==b.stateArg?(f="variable",
"restricted_atBlock_before"):p[b.context.type](a,c,b)},restricted_atBlock:function(a,c,b){return"}"==a?(b.stateArg=null,n(b)):"word"==a?(f="@font-face"==b.stateArg&&!H.hasOwnProperty(c.current().toLowerCase())||"@counter-style"==b.stateArg&&!I.hasOwnProperty(c.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},keyframes:function(a,c,b){return"word"==a?(f="variable","keyframes"):"{"==a?h(b,c,"top"):p[b.context.type](a,c,b)},at:function(a,c,b){if(";"==a)return n(b);if("{"==
a||"}"==a)return q(a,c,b);"word"==a?f="tag":"hash"==a&&(f="builtin");return"at"},interpolation:function(a,c,b){if("}"==a)return n(b);if("{"==a||";"==a)return q(a,c,b);"word"==a?f="variable":"variable"!=a&&"("!=a&&")"!=a&&(f="error");return"interpolation"}};return{startState:function(a){return{tokenize:null,state:u?"block":"top",stateArg:null,context:new r(u?"block":"top",a||0,null)}},token:function(a,c){if(!c.tokenize&&a.eatSpace())return null;var b=(c.tokenize||l)(a,c);b&&"object"==typeof b&&(K=
b[1],b=b[0]);f=b;c.state=p[c.state](K,a,c);return f},indent:function(a,c){var b=a.context,d=c&&c.charAt(0),e=b.indent;"prop"!=b.type||"}"!=d&&")"!=d||(b=b.prev);if(b.prev)if("}"==d&&("block"==b.type||"top"==b.type||"interpolation"==b.type||"restricted_atBlock"==b.type))b=b.prev,e=b.indent;else if(")"==d&&("parens"==b.type||"atBlock_parens"==b.type)||"{"==d&&("at"==b.type||"atBlock"==b.type))e=Math.max(0,b.indent-v);return e},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace"}});
var y=["domain","regexp","url","url-prefix"],G=l(y),B="all aural braille handheld print projection screen tty tv embossed".split(" "),r=l(B),C="width min-width max-width height min-height max-height device-width min-device-width max-device-width device-height min-device-height max-device-height aspect-ratio min-aspect-ratio max-aspect-ratio device-aspect-ratio min-device-aspect-ratio max-device-aspect-ratio color min-color max-color color-index min-color-index max-color-index monochrome min-monochrome max-monochrome resolution min-resolution max-resolution scan grid orientation device-pixel-ratio min-device-pixel-ratio max-device-pixel-ratio pointer any-pointer hover any-hover".split(" "),
t=l(C),H="landscape portrait none coarse fine on-demand hover interlace progressive".split(" "),D=l(H),I="align-content align-items align-self alignment-adjust alignment-baseline anchor-point animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function appearance azimuth backface-visibility background background-attachment background-blend-mode background-clip background-color background-image background-origin background-position background-repeat background-size baseline-shift binding bleed bookmark-label bookmark-level bookmark-state bookmark-target border border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-decoration-break box-shadow box-sizing break-after break-before break-inside caption-side clear clip color color-profile column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns content counter-increment counter-reset crop cue cue-after cue-before cursor direction display dominant-baseline drop-initial-after-adjust drop-initial-after-align drop-initial-before-adjust drop-initial-before-align drop-initial-size drop-initial-value elevation empty-cells fit fit-position flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float float-offset flow-from flow-into font font-feature-settings font-family font-kerning font-language-override font-size font-size-adjust font-stretch font-style font-synthesis font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-ligatures font-variant-numeric font-variant-position font-weight grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-end grid-column-gap grid-column-start grid-gap grid-row grid-row-end grid-row-gap grid-row-start grid-template grid-template-areas grid-template-columns grid-template-rows hanging-punctuation height hyphens icon image-orientation image-rendering image-resolution inline-box-align justify-content left letter-spacing line-break line-height line-stacking line-stacking-ruby line-stacking-shift line-stacking-strategy list-style list-style-image list-style-position list-style-type margin margin-bottom margin-left margin-right margin-top marks marquee-direction marquee-loop marquee-play-count marquee-speed marquee-style max-height max-width min-height min-width move-to nav-down nav-index nav-left nav-right nav-up object-fit object-position opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-style overflow-wrap overflow-x overflow-y padding padding-bottom padding-left padding-right padding-top page page-break-after page-break-before page-break-inside page-policy pause pause-after pause-before perspective perspective-origin pitch pitch-range play-during position presentation-level punctuation-trim quotes region-break-after region-break-before region-break-inside region-fragment rendering-intent resize rest rest-after rest-before richness right rotation rotation-point ruby-align ruby-overhang ruby-position ruby-span shape-image-threshold shape-inside shape-margin shape-outside size speak speak-as speak-header speak-numeral speak-punctuation speech-rate stress string-set tab-size table-layout target target-name target-new target-position text-align text-align-last text-decoration text-decoration-color text-decoration-line text-decoration-skip text-decoration-style text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-height text-indent text-justify text-outline text-overflow text-shadow text-size-adjust text-space-collapse text-transform text-underline-position text-wrap top transform transform-origin transform-style transition transition-delay transition-duration transition-property transition-timing-function unicode-bidi user-select vertical-align visibility voice-balance voice-duration voice-family voice-pitch voice-range voice-rate voice-stress voice-volume volume white-space widows width word-break word-spacing word-wrap z-index clip-path clip-rule mask enable-background filter flood-color flood-opacity lighting-color stop-color stop-opacity pointer-events color-interpolation color-interpolation-filters color-rendering fill fill-opacity fill-rule image-rendering marker marker-end marker-mid marker-start shape-rendering stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-rendering baseline-shift dominant-baseline glyph-orientation-horizontal glyph-orientation-vertical text-anchor writing-mode".split(" "),
u=l(I),E="scrollbar-arrow-color scrollbar-base-color scrollbar-dark-shadow-color scrollbar-face-color scrollbar-highlight-color scrollbar-shadow-color scrollbar-3d-light-color scrollbar-track-color shape-inside searchfield-cancel-button searchfield-decoration searchfield-results-button searchfield-results-decoration zoom".split(" "),v=l(E),w=l("font-family src unicode-range font-variant font-feature-settings font-stretch font-weight font-style".split(" ")),F=l("additive-symbols fallback negative pad prefix range speak-as suffix symbols system".split(" ")),
J="aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkturquoise darkviolet deeppink deepskyblue dimgray dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray grey green greenyellow honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightpink lightsalmon lightseagreen lightskyblue lightslategray lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen".split(" "),
z=l(J),L="above absolute activeborder additive activecaption afar after-white-space ahead alias all all-scroll alphabetic alternate always amharic amharic-abegede antialiased appworkspace arabic-indic armenian asterisks attr auto avoid avoid-column avoid-page avoid-region background backwards baseline below bidi-override binary bengali blink block block-axis bold bolder border border-box both bottom break break-all break-word bullets button button-bevel buttonface buttonhighlight buttonshadow buttontext calc cambodian capitalize caps-lock-indicator caption captiontext caret cell center checkbox circle cjk-decimal cjk-earthly-branch cjk-heavenly-stem cjk-ideographic clear clip close-quote col-resize collapse color color-burn color-dodge column column-reverse compact condensed contain content content-box context-menu continuous copy counter counters cover crop cross crosshair currentcolor cursive cyclic darken dashed decimal decimal-leading-zero default default-button dense destination-atop destination-in destination-out destination-over devanagari difference disc discard disclosure-closed disclosure-open document dot-dash dot-dot-dash dotted double down e-resize ease ease-in ease-in-out ease-out element ellipse ellipsis embed end ethiopic ethiopic-abegede ethiopic-abegede-am-et ethiopic-abegede-gez ethiopic-abegede-ti-er ethiopic-abegede-ti-et ethiopic-halehame-aa-er ethiopic-halehame-aa-et ethiopic-halehame-am-et ethiopic-halehame-gez ethiopic-halehame-om-et ethiopic-halehame-sid-et ethiopic-halehame-so-et ethiopic-halehame-ti-er ethiopic-halehame-ti-et ethiopic-halehame-tig ethiopic-numeric ew-resize exclusion expanded extends extra-condensed extra-expanded fantasy fast fill fixed flat flex flex-end flex-start footnotes forwards from geometricPrecision georgian graytext grid groove gujarati gurmukhi hand hangul hangul-consonant hard-light hebrew help hidden hide higher highlight highlighttext hiragana hiragana-iroha horizontal hsl hsla hue icon ignore inactiveborder inactivecaption inactivecaptiontext infinite infobackground infotext inherit initial inline inline-axis inline-block inline-flex inline-grid inline-table inset inside intrinsic invert italic japanese-formal japanese-informal justify kannada katakana katakana-iroha keep-all khmer korean-hangul-formal korean-hanja-formal korean-hanja-informal landscape lao large larger left level lighter lighten line-through linear linear-gradient lines list-item listbox listitem local logical loud lower lower-alpha lower-armenian lower-greek lower-hexadecimal lower-latin lower-norwegian lower-roman lowercase ltr luminosity malayalam match matrix matrix3d media-controls-background media-current-time-display media-fullscreen-button media-mute-button media-play-button media-return-to-realtime-button media-rewind-button media-seek-back-button media-seek-forward-button media-slider media-sliderthumb media-time-remaining-display media-volume-slider media-volume-slider-container media-volume-sliderthumb medium menu menulist menulist-button menulist-text menulist-textfield menutext message-box middle min-intrinsic mix mongolian monospace move multiple multiply myanmar n-resize narrower ne-resize nesw-resize no-close-quote no-drop no-open-quote no-repeat none normal not-allowed nowrap ns-resize numbers numeric nw-resize nwse-resize oblique octal open-quote optimizeLegibility optimizeSpeed oriya oromo outset outside outside-shape overlay overline padding padding-box painted page paused persian perspective plus-darker plus-lighter pointer polygon portrait pre pre-line pre-wrap preserve-3d progress push-button radial-gradient radio read-only read-write read-write-plaintext-only rectangle region relative repeat repeating-linear-gradient repeating-radial-gradient repeat-x repeat-y reset reverse rgb rgba ridge right rotate rotate3d rotateX rotateY rotateZ round row row-resize row-reverse rtl run-in running s-resize sans-serif saturation scale scale3d scaleX scaleY scaleZ screen scroll scrollbar se-resize searchfield searchfield-cancel-button searchfield-decoration searchfield-results-button searchfield-results-decoration semi-condensed semi-expanded separate serif show sidama simp-chinese-formal simp-chinese-informal single skew skewX skewY skip-white-space slide slider-horizontal slider-vertical sliderthumb-horizontal sliderthumb-vertical slow small small-caps small-caption smaller soft-light solid somali source-atop source-in source-out source-over space space-around space-between spell-out square square-button start static status-bar stretch stroke sub subpixel-antialiased super sw-resize symbolic symbols table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group tamil telugu text text-bottom text-top textarea textfield thai thick thin threeddarkshadow threedface threedhighlight threedlightshadow threedshadow tibetan tigre tigrinya-er tigrinya-er-abegede tigrinya-et tigrinya-et-abegede to top trad-chinese-formal trad-chinese-informal translate translate3d translateX translateY translateZ transparent ultra-condensed ultra-expanded underline up upper-alpha upper-armenian upper-greek upper-hexadecimal upper-latin upper-norwegian upper-roman uppercase urdu url var vertical vertical-text visible visibleFill visiblePainted visibleStroke visual w-resize wait wave wider window windowframe windowtext words wrap wrap-reverse x-large x-small xor xx-large xx-small".split(" "),
A=l(L),y=y.concat(B).concat(C).concat(H).concat(I).concat(E).concat(J).concat(L);k.registerHelper("hintWords","css",y);k.defineMIME("text/css",{documentTypes:G,mediaTypes:r,mediaFeatures:t,mediaValueKeywords:D,propertyKeywords:u,nonStandardPropertyKeywords:v,fontProperties:w,counterDescriptors:F,colorKeywords:z,valueKeywords:A,tokenHooks:{"/":function(d,e){if(!d.eat("*"))return!1;e.tokenize=m;return m(d,e)}},name:"css"});k.defineMIME("text/x-scss",{mediaTypes:r,mediaFeatures:t,mediaValueKeywords:D,
propertyKeywords:u,nonStandardPropertyKeywords:v,colorKeywords:z,valueKeywords:A,fontProperties:w,allowNested:!0,tokenHooks:{"/":function(d,e){return d.eat("/")?(d.skipToEnd(),["comment","comment"]):d.eat("*")?(e.tokenize=m,m(d,e)):["operator","operator"]},":":function(d){return d.match(/\s*\{/)?[null,"{"]:!1},$:function(d){d.match(/^[\w-]+/);return d.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(d){return d.eat("{")?[null,"interpolation"]:!1}},name:"css",
helperType:"scss"});k.defineMIME("text/x-less",{mediaTypes:r,mediaFeatures:t,mediaValueKeywords:D,propertyKeywords:u,nonStandardPropertyKeywords:v,colorKeywords:z,valueKeywords:A,fontProperties:w,allowNested:!0,tokenHooks:{"/":function(d,e){return d.eat("/")?(d.skipToEnd(),["comment","comment"]):d.eat("*")?(e.tokenize=m,m(d,e)):["operator","operator"]},"@":function(d){if(d.eat("{"))return[null,"interpolation"];if(d.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/,
!1))return!1;d.eatWhile(/[\w\\\-]/);return d.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"\x26":function(){return["atom","atom"]}},name:"css",helperType:"less"});k.defineMIME("text/x-gss",{documentTypes:G,mediaTypes:r,mediaFeatures:t,propertyKeywords:u,nonStandardPropertyKeywords:v,fontProperties:w,counterDescriptors:F,colorKeywords:z,valueKeywords:A,supportsAtComponent:!0,tokenHooks:{"/":function(d,e){if(!d.eat("*"))return!1;e.tokenize=m;return m(d,e)}},name:"css",
helperType:"gss"})});
