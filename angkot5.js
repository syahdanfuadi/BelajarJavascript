var jmlhAngkot = 10;
var angkotberoprasi = 8;

for (var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {

    if (noAngkot <= 6 && noAngkot !== 5 ) {
        console.log ('Angkot No ' + noAngkot + ' beroprasi dengan baik.' );
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ) {
        console.log ('Angkot No. ' + noAngkot +' Sedang Lembur.');
    } else {
        console.log ('Angkot No ' + noAngkot + ' tidak beroprasi dengan baik.' );
    }

}
