// membuat object
// object literal
var mhs1 = {
    nama : "Syahdan Fuadi",
    nrp : "1239489290",
    email : "syahdanfuadi@gmail.com",
    jurusan : "Teknik Informatika" 
}

var mhs2 = {
    nama : "Fikri",
    nrp : "425771578",
    email : "fikrimuhammad@gmail.com",
    jurusan : "Teknik Sipil" 
}

// menggunkan function declaration
function buarObjectMahasiswa (nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buarObjectMahasiswa ('Acep', '628492968', 'acep@gmail.com', 'BKI')

// constructur
function Mahasiswa(nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Shafwan', '69286298', 'shafwan@gmail.com', 'Akpol');