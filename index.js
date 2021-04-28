var converter = require('number-to-words');
console.log(converter.toWords(1000000)); // => “thirteen”

var letra = require('numalet')({unidad:'M.N',mayus:false});
console.log(letra(987.5));