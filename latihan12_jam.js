// Konversi menit ke Jam
function konversiMenit(menit) {
  var jam;
  var hasilMenit;
  jam = menit / 60;
  hasilMenit = menit % 60;
  
  if (menit % 60 < 10) {
    hasilMenit = '0' + hasilMenit;
  } else {
    hasilMenit;
  }
  
  return Math.trunc(jam) + ':' + hasilMenit;
} 

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00