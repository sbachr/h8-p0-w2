// Logic Challenge - X dan O
// Problem
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// Code
function xo(str) {
  var countO = 0; countX = 0;
  for (let a = 0; a < str.length; a++) {
    (str[a] == 'x' ? countX++ : countO++)
  }
  (countO == countX ? temp = true : temp = false)
  return temp
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true