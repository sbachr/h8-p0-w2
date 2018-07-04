// Logic Challenge - Balik Kata
// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

// Code
// solution 1
function balikKata(kata) {
  var result = ''

  for(let a=0; a<kata.length; a++){
      result = kata[a] + result
  }
  return result
}

// solution 2
// function balikKata(kata) {
//   result = ''

//   for(let a=kata.length-1; a>=0; a--){
//     result += kata[a];
//   }
//   return result
// }


// TEST CASES
// console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(balikKata('John Doe')); // eoD nhoJ
// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS