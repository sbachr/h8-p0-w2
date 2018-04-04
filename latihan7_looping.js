//1. Menyusun Barisan Bintang
var row;

for(row = 1; row <= 5; row++) { 
      console.log('*');
    }

//2. Menyusun 5 Bintang
var row;
var col;
var limit = 5;
var star = '*';
var hasil= "";

for (row = 1; row <= limit; row++){
  for (col = 1; col <= limit; col++){
  hasil += star;
  }  hasil += '\n';

} console.log(hasil);



//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var star = '*';
var row = 1;
var starHasil = '';

for(row ; row <= 1; row++) {
  starHasil = starHasil + star;
  console.log(starHasil);
  
  for(row; row <= 2; row++){
    starHasil = starHasil + star;
    console.log(starHasil);
    
    for(row; row <= 3; row++){
      starHasil = starHasil + star;
      console.log(starHasil);
    }
  }
} 

  //3a. Cara ke 2
  var row;
  var col;
  var star = '*';
  var hasil= "";
  
  for (row = 0; row < 5; row++) {
    for (col = 0; col <= row; col++) {
    hasil += star;
    }  hasil += '\n';
  
  } console.log(hasil);



