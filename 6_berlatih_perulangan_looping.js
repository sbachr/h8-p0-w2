// Looping
// Soal looping ini memiliki 3 nomor.

// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

// Output
// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer                                                                              
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer
// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

// Hints
// Operator ++ disebut dengan operator Increment Operator -- disebut dengan operator Decrement

// Output
// LOOPING PERTAMA
// 1 - I love coding
// 2 - I love coding
// 3 - I love coding
// 4 - I love coding
// 5 - I love coding 
// 6 - I love coding
// 7 - I love coding
// 8 - I love coding
// 9 - I love coding
// 10 - I love coding
// 11 - I love coding
// 12 - I love coding 
// 13 - I love coding
// 14 - I love coding
// 15 - I love coding
// 16 - I love coding
// 17 - I love coding
// 18 - I love coding
// 19 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 19 - I will become fullstack developer
// 18 - I will become fullstack developer
// 17 - I will become fullstack developer
// 16 - I will become fullstack developer
// 15 - I will become fullstack developer
// 14 - I will become fullstack developer
// 13 - I will become fullstack developer
// 12 - I will become fullstack developer
// 11 - I will become fullstack developer
// 10 - I will become fullstack developer
// 9 - I will become fullstack developer
// 8 - I will become fullstack developer
// 7 - I will become fullstack developer
// 6 - I will become fullstack developer
// 5 - I will become fullstack developer
// 4 - I will become fullstack developer
// 3 - I will become fullstack developer
// 2 - I will become fullstack developer
// 1 - I will become fullstack developer

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3" dan seterusnya.
// output
// //contoh - ganjil genap
// //counter sekarang = 1,
// //output
// "GANJIL"
// //counter sekarang = 2,
// //output
// "GENAP"
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 2
// //counter sekarang = 1, 
// //output
// "" 
// //counter sekarang = 3, 
// //output
// "3 KELIPATAN 3" 
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 5
// //counter sekarang = 1, 
// //output
// "" 
// //counter sekarang = 6, 
// //output
// "6 KELIPATAN 6" 
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 9
// //counter sekarang = 1, 
// //output
// "" 
// //counter sekarang = 10, 
// //output
// "10 KELIPATAN 10" 
// // dan seterusnya :)

function looping(num) {
    return `${loopingWhile(num)}${loopingFor(num)}`
}

function loopingWhile(num){
    var genap1  = '';
    var counter = 2;
    while( counter <= num ){
        genap1 += `${counter} - I love coding\n`;
        counter += 2
    } 
    result1 = `LOOPING PERTAMA \n${genap1}`;
   
    var genap2 = ''
    while( counter > 2 ){
        counter -= 2
        genap2 += `${counter} - I will become fullstack developer\n`;
    } 
    result2 = (`LOOPING KEDUA \n${genap2}`);
    return `${result1}${result2}\n`
}
function loopingFor(num) {
    var genap1 = '';
    for (let a = 1; a <= num; a++) {
        genap1 += `${a} - I love coding\n`;
    } result1 = (`LOOPING PERTAMA \n${genap1}`);
    
    var genap2 = ''
    for (let a = num; a > 1; a--) {
        genap2 += `${a} - I will become fullstack developer \n`;
    } result2 = (`LOOPING KEDUA \n${genap2}`);
    return `${result1}${result2}\n`
}
function ganjilGenap(num) {
    var result = ''
    for(let a=1; a<=num; a++){
        if(a%2==0) result += `${a} : GENAP\n`
        else result += `${a} : GANJIL\n`
    } output1 = `GANJIL GENAP \n${result}\n`
    var kelipatan3 = ''
    for(let a=1; a<=num; a+=2){
        if(a%3==0) kelipatan3 += `${a} KELIPATAN 3\n`
    } output2 = `PERTAMBAHAN 2 \n${kelipatan3}\n`

    var kelipatan6 = ''
    for(let a=1; a<=num; a+=5){
        if(a%6==0) kelipatan6 += `${a} KELIPATAN 6\n`
    } output3 = `PERTAMBAHAN 5 \n${kelipatan6}\n`

    var kelipatan10 = ''
    for(let a=1; a<=num; a+=9){
        if(a%10==0) kelipatan10 += `${a} KELIPATAN 10\n` 
    } output4 = `PERTAMBAHAN 9 \n${kelipatan10}\n`
    return `${output1}${output2}${output3}${output4}`
}
console.log(looping(20));
console.log(ganjilGenap(100));
