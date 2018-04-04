var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];



for (i = 0; i <= input[0].length - 1; i++) {
if ( i === 0) { 
id = i  + input[0][0];

} else
if ( i === 1) { 
nama = i + input[0][1];
} else 
if ( i === 2) {
ttl = i + input[0][2]+' '+input[0][3];
} else {
hobi = i + input[0][4];
}
}
console.log("Nomor ID : " + id); 
console.log("Nama     : " + nama); 
console.log('TTL      : ' + ttl);
console.log('hobi     : ' + hobi);


