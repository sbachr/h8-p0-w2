//1. Melakukan Looping Menggunakan While
var looping1 = 0;
var looping2 = 20;
var jumlah = 0;

while(looping1 < looping2) { 
  looping1 = looping1 + 2 ;
  console.log(looping1 +' - I love coding');
} while (looping2 > jumlah  ) {
  console.log(looping2 + ' I willbecome fullstack developer');
   looping2  = looping2 - 2;
}




//2. Melakukan Looping Menggunakan For
for(var looping = 1; looping <= 20; looping++){
    console.log(looping + ' I love Coding');
  
  } for ( var looping = 20; looping > 0; looping--) {
      console.log(looping + ' I willbecome fullstack developer');
    } 




 //3. Angka Ganjil dan Genap

     //a. Counter 100
     var limit = 100;

     for(var nomor = 1; nomor <= 100; nomor++){
        nomor = nomor++ ;
        console.log(nomor)}
 
     
     //b. Ganjil Genap
     for(var nomor = 1; nomor <= 100; nomor++){
       nomor = nomor++ ;
       if (nomor % 2 === 0) {
           console.log('Angka GENAP  ke: ' + nomor);
       } else if (nomor % 2 !== 0) {
           nomor = nomor++
           console.log('Angka GANJIL ke: ' + nomor); 
           nomor = nomor++ ;
         }}

      //c.Perulangan
      for(var cornter2 = 1; cornter2 < 100; cornter2 += 2) {
        console.log('Counter 2 ke : ' + cornter2);
      }  
      for(var cornter5 = 1; cornter5 < 100; cornter5 += 5) {
        console.log('Counter 5 ke : ' + cornter5);
      }  
      for(var counter9 = 1; counter9 < 100; counter9 += 9) {
        console.log('Counter 9 ke : ' + counter9);
      } 
         
 
     //c. Kelipatan 3
     for(var counter2 = 0; counter2 < 100; counter2 += 2) {
       if(counter2%3 === 0) {
            console.log('3 KELIPATAN 3 ke : ' + counter2);
       }}
       
    for(var counter5 = 1; counter5 < 100; counter5 += 5) {
        if(counter5%6 === 0) {
           console.log('Counter 5 ke : ' + counter5);
       }}  
       
    for(var counter9 = 1; counter9 < 100; counter9 += 9) {
        if(counter9%10 === 0) {
          console.log('6 KELIPATAN 6 ke : ' + counter9);
       }}      