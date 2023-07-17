const truthText = document.querySelector("#truth");
const dareText = document.querySelector("#dare");


var truths = ['Apa hal teraneh yang pernah kamu lakukan saat berada di tempat umum?',
              'Apa hal paling memalukan yang pernah terjadi padamu di sekolah?',
              'Jika kamu bisa menukar hidupmu dengan satu orang di dunia ini, siapa yang akan kamu pilih dan mengapa?',
              'Apa hal tergila yang pernah kamu lakukan demi mencuri perhatian seseorang yang kamu suka?',
              'Jika kamu bisa memiliki kekuatan super, apa yang ingin kamu miliki dan bagaimana kamu akan menggunakannya?',
              'Ceritakan pengalaman terburukmu saat kencan pertama!',
              'Apa hal paling menjengkelkan yang pernah kamu lakukan kepada saudara atau temanmu?',
              'Jika kamu terjebak di pulau terpencil selama sebulan dan hanya boleh membawa tiga hal, apa yang akan kamu bawa dan mengapa?',
              'Ceritakan tentang kebohongan terbesar yang pernah kamu ceritakan kepada orang tua atau guru!',
              'Apa hal paling aneh atau mengerikan yang pernah kamu lihat di dalam mimpi?',
            ]; // Array data yang ingin ditampilkan secara acak

var dares = ['Tunjukkan chat terakhir kamu kepada pasangan / gebetan.',
              'Telepon temanmu secara acak lalu katakan, “ada yang bisa kami bantu?',
              'Selfie lalu upload di Instastory kamu dengan gaya paling jelek yang bisa kamu lakukan',
              'Tepuk pundak orang yang lewat secara acak, lalu katakan, “Hai, bro!',
              'Minta foto ke orang yang kamu temui di jalan',
              'Relakan wajahmu untuk dirias secara acak',
              'Berdiri di luar lalu sapa semua orang yang kamu lihat',
              'Tunjukkan history pencarian kamu di media sosial.',
              'Kembali melanjutkan permainan sambil jongkok sampai ada orang lain yang kalah',
              'Buat Instastory menggunakan filter yang paling tidak kamu sukai',
              'Chat orang pertama yang ada di urutan pertama daftar Instastory dengan mengatakan, “Aku tahu rahasiamu selama ini',
              'Upload salah satu foto yang paling kamu sukai dari gebetanmu',
              'Jilat sikumu tanpa bantuan dari tangan lainnya',
              'Keluarkan semua isi tas dan dompetmu.',
              'Makan camilan tanpa menggunakan tangan',
          ]; // Array data yang ingin ditampilkan secara acak

var clickCountTruth = 0 ;
var clickCountDare = 0 ;

// FUNCTION FLIP CARD

document.addEventListener('DOMContentLoaded', function() {
    initCards();
});

function initCards() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
}

// FUNCTION TRUTH


function getRandomTruth() {
    clickCountTruth++; // Meningkatkan jumlah klik setiap kali tombol diklik
    
    if (clickCountTruth % 2 !== 0) { // Memeriksa apakah jumlah klik adalah bilangan ganjil
        var randomIndex = Math.floor(Math.random() * truths.length); // Mendapatkan index acak dari array
        var randomTruth = truths[randomIndex]; // Mendapatkan data acak dari array berdasarkan index
        console.log(randomTruth);
        truthText.innerText = randomTruth;
    }
}

var buttonTruth = document.getElementById("buttonTruth");
buttonTruth.addEventListener("click", getRandomTruth); // Menambahkan event listener pada tombol untuk memanggil fungsi getRandomTruth saat diklik

// FUNCTION DARE

function getRandomDare() {
    clickCountDare++;

    if (clickCountDare % 2 !== 0) {   
        var randomIndex = Math.floor(Math.random() * dares.length); // Mendapatkan index acak dari array
        var randomDare = dares[randomIndex]; // Mendapatkan data acak dari array berdasarkan index
        console.log(randomDare);
        dareText.innerText = randomDare;
    }
  
  }
  
  var buttonDare = document.getElementById("buttonDare");
  buttonDare.addEventListener("click", getRandomDare); // Menambahkan event listener pada tombol untuk memanggil fungsi getRandomDare saat diklik