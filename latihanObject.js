// Membuat Object Angkot
function Angkot(sopir, treck, penumpang, kas){
    this.sopir = sopir;
    this.treck = true;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik =function (namaPenumpang) {
        this.penumpang.push (namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang,bayar) {
        if ( this.penumpang.length === 0 ) {
            alert ('angkot masih kosong!');
            return false;
        }


        for ( var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }

    }

}

var Angkot1 = new Angkot ('Syahdan', ['cicaheum','cibiru'], [], 0);

var Angkot2 = new Angkot ('Fikri', ['antapani','buah batu'], [], 0);
