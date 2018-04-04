/*Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

Code
function xo(str) {
  // you can only write your code here!
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true */

var str = 'xoxoox';
var x = 0;
var o = 0;
var kata = str.length -1;

for (iX= 0; iX <= kata; iX++) {
  if (str[iX] === 'x'){
   x = x +1 ;
    
  } else { o = o +1 ;
} 
}
console.log(x === o);
console.log(o);
console.log(x);