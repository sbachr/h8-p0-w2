var nama  = 'Agus';
var peran = 'kesatria';

if (nama === '' && peran === ''){
  console.log("Nama harus diisi!");
} else
  if (nama !== '' && peran === ''){
    console.log('Hallo ' + nama + ', Pilih peranmu untuk memulai game!');
  } else
    if (nama !== '' && peran === 'Kesatria' || peran === 'kesatria'){
      console.log('Selamat datang di Dunia Proxytia, ' + nama);
      console.log('Halo Kesatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
    } else
      if (nama !== '' && peran === 'Tabib' || peran === 'tabib'){
        console.log('Selamat datang di Dunia Proxytia, ' + nama);
        console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
      } else
        if (nama !== '' && peran === 'Penyihir' || peran === 'penyihir'){
          console.log('Selamat datang di Dunia Proxytia, ' + nama);
          console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu');
        } else 
          if(nama !== '' && peran !== 'Kesatria' || peran !== 'ksatria' || peran !== 'Tabib' || peran !== 'tabib' ||peran !== 'Penyihir' || peran !== 'penyihir'){
            console.log ('Maaf, Peranmu tidak ada dalam Game ini !!');
            console.log (nama + ' Silahkan pilih satu karakter diantara Ksatria, Tabib, atau Penyihir');
          }