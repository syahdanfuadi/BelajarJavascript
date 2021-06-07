alert ('Selamat Datang');
var jmlhAngkot = 10;
var angkotberoprasi = 8;
var noAngkot = 1;

while (noAngkot <= angkotberoprasi){
    console.log ('Angkot No. ' + noAngkot + ' beroprasi dengan baik. ');
    noAngkot++;
}
for( var noAngkot=angkotberoprasi + 1; noAngkot<= jmlhAngkot; noAngkot++) {
    console.log ('Angkot No. ' + noAngkot + ' sedang tidak beroprasi. ');
}