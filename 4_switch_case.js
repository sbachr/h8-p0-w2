// Menggunakan Switch-Case
// Objectives
// Mengerti Cara Menggunakan Switch-Case
// Mengerti Logika Switch-Case
// Directions
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// var hari = 21; var bulan = 1; var tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi
// var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

function switchCase(tanggal, bulan, tahun) {
    if(tanggal < 1 || tanggal  >31)   return `Tanggal yang anda masukkan tidak valid`
   // if(bulan < 1 || bulan > 12)       return `Bulan yang anda masukkan tidak valid`
    if(tahun < 1900 || tahun > 2200)  return `Tahun yang anda masukkan tidak valid` 

    switch(bulan){
        case 1  : return `${tanggal} Januari ${tahun}`;
        case 2  : return `${tanggal} Februari ${tahun}`;
        case 3  : return `${tanggal} Maret ${tahun}`;
        case 4  : return `${tanggal} April ${tahun}`;
        case 5  : return `${tanggal} Mei ${tahun}`;
        case 6  : return `${tanggal} Juni ${tahun}`;
        case 7  : return `${tanggal} juli ${tahun}`;
        case 8  : return `${tanggal} Agustus ${tahun}`;
        case 9  : return `${tanggal} September ${tahun}`;
        case 10 : return `${tanggal} Oktober ${tahun}`;
        case 11 : return `${tanggal} November ${tahun}`;
        case 12 : return `${tanggal} Desember ${tahun}`;
        default : return `Bulan yang anda masukkan tidak valid`
    }    
}

console.log(switchCase( 0, 1, 1945))
console.log(switchCase( 2, 13, 1945))
console.log(switchCase(21, 1, 2201))
console.log(switchCase(5, 1, 1945))
console.log(switchCase(21, 11, 1989))