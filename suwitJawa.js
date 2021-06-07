var tanya = true;
while (tanya) {

    // menangkap pilihan player
    var p = prompt ('pilih : Gajah, Semut, Orang')
    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var comp =Math.random () ;
    if ( comp < 0.34 ) {
        comp = 'Gajah';
    }else if ( comp >= 0.34 && comp > 0.67) {
        comp = 'Semut';
    } else {
        comp = 'Orang';
    }
    var hasil = '';
    // menentuka rules
    if (p == comp){
        hasil = 'SERI!';
    } else if ( p == 'Gajah'){
        hasil = ( comp == 'Orang') ? 'MENANG!' : 'KALAH!' ;
    } else if ( p == 'Orang') {
        hasil = ( comp == 'Gajah') ? 'KALAH!' : 'MENANG!' ;
    } else if ( p == 'Semut') {
        hasil = ( comp == 'Orang') ? 'KALAH!' : 'MENANG!' ;
    } else {
        hasil = 'Memasukan Pilihan Yang Salah!';
    }

    // tampilkan hasilnya
    alert ('Kamu Memilih : ' + p + ' Dan Komputer Memilih : ' + comp + '\nMaka Hasilnya Kamu : ' + hasil);

    tanya = confirm ('Coba Lagi?');
}
alert ('Terimakasih Sudah Bermain');