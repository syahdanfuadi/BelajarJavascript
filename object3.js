// This
var a = 10;
console.log(this);











// // membuat object

// // cara 1 pada declaration
// function halo (){
//     console.log ('halo');
// }
// halo();
// this mengembalikan object global.

// Cara 2 - object literal
// var obj = {};
// obj.halo = function (){
//     console.log ('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan


// Cara 3 - consructor
// function Halo(){
//     console.log ('halo');
// }
// new Halo();
// this mengembalikan object yang baru di buat

