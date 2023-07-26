const truthText = document.querySelector("#truth");
const dareText = document.querySelector("#dare");


let truths = ['Apa hal teraneh yang pernah kamu lakukan saat berada di tempat umum?',
              'Apa hal paling memalukan yang pernah terjadi padamu di sekolah?',
              'Jika kamu bisa menukar hidupmu dengan satu orang di dunia ini, siapa yang akan kamu pilih dan mengapa?',
              'Apa hal tergila yang pernah kamu lakukan demi mencuri perhatian seseorang yang kamu suka?',
              'Jika kamu bisa memiliki kekuatan super, apa yang ingin kamu miliki dan bagaimana kamu akan menggunakannya?',
              'Ceritakan pengalaman terburukmu saat kencan pertama!',
              'Hal paling menjengkelkan yang pernah kamu lakukan kepada saudara atau temanmu?',
              'Barang yang akan kamu bawa, jika terjebak disebuah pulau selama 1 bulan, dan kenapa barang barang itu (3)',
              'Ceritakan tentang kebohongan terbesar yang pernah kamu ceritakan kepada orang lain!',
              'Apa hal paling aneh atau mengerikan yang pernah kamu lihat di dalam mimpi?',
              'Siapa orang yang kamu sukai diam diam sekarang?',
              'Adakah orang yang menarik, tampan atau cantik yang kamu kagumi saat ini?',
              'Siapa orang yang terakhir kamu stalk di sosmed?',
              'Hal apa saja yang membuatmu insecure kepada diri sendiri atau orang lain?',
              'Bagaimana kesan pertama saat bertemu teman sebelahmu (Kanan, Kiri)',
              'Apa tontonan favoritmu saat kecil?',
              'Apakah kamu pernah ngeghosting cewe/cowo?',
              'Kapan terakhir kali kamu menangis?',
              'Kapan terakhir kali kamu kentut?',
              'Kapan terakhir kali kamu berbohong ke ortumu?',
              'Apa ketakutan terbesar yang pernah kamu bayangkan?',
              'Apa kebiasaan yang paling paling jorok atau aneh yang pernah kamu lakukan (ngaku aja)?',
              'Apakah kamu punya bakat terpendam, jika iya sebutkan bakat terpendam tersebut?',
              'Siapa selebriti/idol yang pertama kali bikin kamu naksir?',
              'Apakah kamu pernah melanggar hukum, jika iya sebutkan pelanggaran hukum yang pernah dilakukan?',
              'Tontonan(Film,Anime, or any) apa yang paling kamu sukai, sebut alasanya',
              'Apa hal yang membuatmu senang, tapi orangtuamu tidak mengetahuinya?',
              'Kalau kamu bisa jadi tidak terlihat, apa hal pertama yang akan kamu lakukan?',
              'Sebutkan orang yang kamu benci/tidak suka',
            ]; // Array data yang ingin ditampilkan secara acak

let dares = ['Tunjukkan chat terakhir kamu kepada pasangan / gebetan.',
              'Telepon temanmu secara acak lalu katakan, "ada yang bisa kami bantu?"',
              'Selfie lalu upload di Instastory kamu dengan gaya paling jelek yang bisa kamu lakukan',
              'Tepuk pundak orang yang lewat secara acak, lalu katakan, “Hai, bro!',
              'Minta foto ke orang yang kamu temui di jalan',
              'Relakan wajahmu untuk dirias secara acak',
              'Berdiri di luar lalu sapa semua orang yang kamu lihat',
              'Tunjukkan history pencarian kamu di media sosial.',
              'Kembali melanjutkan permainan sambil memegang dahi sampai ada orang lain yang kalah atau putaran ke 3',
              'Buat Instastory menggunakan filter yang paling tidak kamu sukai',
              'Chat orang ke-10 yang ada di daftar Instastory dengan mengatakan, "Aku tau rahasiamu!"',
              'Upload salah satu foto yang paling kamu sukai dari gebetanmu',
              'Jilat sikumu tanpa bantuan dari tangan lainnya',
              'Keluarkan semua isi tas dan dompetmu.',
              'Makan camilan tanpa menggunakan tangan',
              'Impersonate satu orang yang ada diantara kita, sampai ada yang bisa menebak',
              'Katakan "meong" di setiap akhir kalimat sampai giliranmu yang selanjutnya.',
              'Biarkan orang lain membuat status menggunakan akun sosial mediamu.',
              'Berikan ponselmu kepada salah satu di antara kita dan biarkan orang tersebut mengirim satu pesan kepada siapapun yang dia mau.',
              'Push up 20 kali.',
              'Plank selama 1 menit.',
              'Posting karakter fiksi yang kamu sukai dan tulis kamu mencintainya dan akan menikahinya.',
              'Tiru suara hewan yang ditentukan orang lain.',
              'Buat salah satu TikTok challenge yang lagi viral.',
              'Buat story Instagram ala Facebook.',
              'Tirukan emoji yang dipilih oleh teman-temanmu.',
              'Bicara dengan gaya sangat elit.',
              'Posting wajah crushmu di media sosial dan tuliskan kata-kata pujian.',
              'Pergi keluar dan berteriak sekeras yang kamu bisa.',
              'Coba berdiri jinjit selama 3 menit.',
          ]; // Array data yang ingin ditampilkan secara acak

let clickCountTruth = 0 ;
let clickCountDare = 0 ;

// FUNCTION FLIP CARD

document.addEventListener('DOMContentLoaded', function() {
    initCards();
});

function initCards() {
    let cards = document.querySelectorAll('.card');
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
        let randomIndex = Math.floor(Math.random() * truths.length); // Mendapatkan index acak dari array
        let randomTruth = truths[randomIndex]; // Mendapatkan data acak dari array berdasarkan index
        console.log(randomTruth);
        truthText.innerText = randomTruth;
    }
}

let buttonTruth = document.getElementById("cardTruth");
buttonTruth.addEventListener("click", getRandomTruth); // Menambahkan event listener pada tombol untuk memanggil fungsi getRandomTruth saat diklik

// FUNCTION DARE

function getRandomDare() {
    clickCountDare++;

    if (clickCountDare % 2 !== 0) {   
        let randomIndex = Math.floor(Math.random() * dares.length); // Mendapatkan index acak dari array
        let randomDare = dares[randomIndex]; // Mendapatkan data acak dari array berdasarkan index
        console.log(randomDare);
        dareText.innerText = randomDare;
    }
  
  }
  
  let buttonDare = document.getElementById("cardDare");
  buttonDare.addEventListener("click", getRandomDare); // Menambahkan event listener pada tombol untuk memanggil fungsi getRandomDare saat diklik