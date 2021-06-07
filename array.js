// 1.Menampilkan array

// var arr = [];

// arr [0] = "Syahdan";
// arr [1] = "Fuadi";
// arr [2] = "Aku";
// arr [2] = "Aku";
// arr [3] = "Kamu";

// 2.console.log (arr);

// cara menghapus manual
// var arr = ["syahdan", "Fuadi", "aku", "kamu"];
// arr [1] = undefined;

// console.log(arr);

// 3.Menampilkan isi Array

// var arr = ["syahdan", "Fuadi", "aku", "kamu", "kenangan"];

// for ( var i = 0; i < arr.length; i++ ) {
//     console.log('mahasiswa ke-' + (i+1) + ' : ' + arr [i]);
// }

// 4.Method pada array 
// 1.Join

// var arr = ["syahdan", "Fuadi", "aku", "kamu", "kenangan"];
// console.log(arr.join());

// 2.Push & pop

// arr.push('Kenangan', 'you');
// arr.pop ();
// arr.pop ();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift ('Kenangan');
// console.log(arr.join(' - '));

// 4.Slice & splice
// splice (indexAwal,mau di hapus berapa,elemenbaru1, elemenbaru2,...)
// var arr = ["syahdan", "Fuadi", "aku", "kamu"];
// arr.splice(2, 0, 'Kenangan', 'you');
// console.log(arr.join());

// 5. slice
// slice (awal,akhir);
// var arr = ["syahdan", "Fuadi", "aku", "kamu", "kenangan"];

// var arr2 = arr.slice(1,3);
// console.log(arr2.join());

// 6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Syahdan', 'Fuadi', 'Kamu'];
// // angka.forEach (function(e) {
// //     console.log(e);
// // })

// nama.forEach (function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + 'Adalah :' + e);
// })

// 7. map
// var angka = [2,3,5,6,2,1,4,5,8];
// var angka2 = angka.map (function(e){
//     return e * 2 ;
// });
// console.log (angka2.join ());

//8. sort

// var angka = [1,2,4,10,6,3,20,5,8,30,7];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join());

// 9. filter & find
// var angka = [1,2,4,10,6,3,20,5,8,30,7];
// var angka2 = angka.filter (function(x){
//     return x > 5;
// })
// console.log(angka2.join());

// var angka = [1,2,4,10,6,3,20,5,8,30,7];
// var angka2 = angka.find (function(x){
//     return x > 5;
// })
// console.log(angka2);

