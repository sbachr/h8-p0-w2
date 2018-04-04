//Mengenal Penggunaan Function
function shoutOut() {
    console.log('Hallo Function');
  }
  shoutOut();

//function perkalian
function calculateMultiply(num1,num2) {

    return num1 * num2;
    
  }
  var num1 = 5;
  var num2 = 6;
  var hasilPerkalian = calculateMultiply(num1,num2)
  
  console.log(hasilPerkalian);

  //Nama Alamat 
  function processSentence(name,age,adress,hobby){
  
    return 'Nama saya ' + nama + ', umur saya ' + age + ' tahun, ' + 'alamat saya di ' + adress + ', dan saya punya hobby yaitu ' + hobby;
    
  }
  
  var nama = 'Agus';
  var age = 30;
  var adress = 'Jln. Malioboro, Yogyakarta';
  var hobby = 'gaming';
  
  var fullSentence = processSentence(name,age,adress,hobby);
  console.log(fullSentence);