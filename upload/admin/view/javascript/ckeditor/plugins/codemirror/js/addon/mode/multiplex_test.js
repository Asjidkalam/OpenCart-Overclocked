﻿(function(){CodeMirror.defineMode("markdown_with_stex",function(){var a=CodeMirror.getMode({},"stex"),b=CodeMirror.getMode({},"markdown");return CodeMirror.multiplexingMode(b,{open:"$",close:"$",mode:a,delimStyle:"delim",innerStyle:"inner"})});var b=CodeMirror.getMode({},"markdown_with_stex");(function(a){test.mode(a,b,Array.prototype.slice.call(arguments,1),"multiplexing")})("stexInsideMarkdown","[strong **Equation:**] [delim\x26delim-open $][inner\x26tag \\pi][delim\x26delim-close $]")})();
