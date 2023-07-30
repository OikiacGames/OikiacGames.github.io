
//  TOD VIEW PRIVATE {{--START--}}

// Fungsi untuk menampilkan game dan menyembunyikan tombol
function showPrivateGameView() {
    // Menyembunyikan tombol play
    let privateButton = document.getElementById('privateButton');
    privateButton.style.display = 'none';

    // Menyembunyikan tombol about
    let nav = document.querySelector('nav');
    nav.style.display = 'none';

    // Menampilkan game
    let privateGameView = document.getElementById('privateTod');
    privateGameView.style.display = 'block';
}

//  TOD VIEW PRIVATE {{--END--}}


//  TOD VIEW PUBLIC {{--START--}}

// Fungsi untuk menampilkan game dan menyembunyikan tombol
function showGameView() {
    // Menyembunyikan tombol play
    let playButton = document.getElementById('playButton');
    playButton.style.display = 'none';

    // Tampilkan tombol back
    let backLink = document.getElementById('backLink');
    backLink.style.display = 'inline';

    let privateButton = document.getElementById('privateButton');
    privateButton.style.display = 'inline';

    // Menyembunyikan tombol about
    let nav = document.querySelector('nav');
    nav.style.display = 'none';

    // Menampilkan game
    let gameView = document.getElementById('game');
    gameView.style.display = 'block';
}
//  TOD VIEW PUBLIC {{--END--}}

// Fungsi untuk menampilkan konten 
function showPage() {
    let hash = window.location.hash; // Mendapatkan hash dari URL

    // Tampilkan tombol "play" dan sembunyikan tombol "back"
    let playButton = document.getElementById('playButton');
    playButton.style.display = 'inline';
    let backLink = document.getElementById('backLink');
    backLink.style.display = 'none';

    // Tampilkan tombol pada nav
    let nav = document.querySelector('nav');
    nav.style.display = 'block';

    // Sembunyikan semua konten
    let pages = document.querySelectorAll('#content > div');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // Menampilkan konten halaman yang sesuai berdasarkan hash
    let targetPage = document.getElementById(hash.substr(1)); // Mengabaikan karakter '#' di depan hash
    if (targetPage) {
        targetPage.style.display = 'block';
    } else if (hash === '#play') {
        // Jika hash adalah '#play', tampilkan tampilan game
        showGameView();
    } else if (hash === '#private'){
        showPrivateGameView();
    }
}

// Fungsi untuk mengatur event saat tombol play ditekan
function handlePlayButtonClick() {
    window.location.hash = '#play'; // Ubah hash pada URL menjadi '#play'
}

// Fungsi untuk mengatur event saat tombol kembali ditekan
function handleBackLinkClick() {
    window.location.hash = '#'; // Ubah hash pada URL kembali menjadi '#'
}

// Memanggil fungsi showPage() setiap kali hash pada URL berubah
window.addEventListener('hashchange', showPage);

// Memanggil fungsi showPage() saat halaman pertama kali dimuat
showPage();

// POPUP HOMEPAGE {{--START--}}

function openModal(page) {
    let modal = document.getElementById('modal');
    let modalContent = document.getElementById('modal-content');
    let pageContent = document.getElementById(page);

      modalContent.innerHTML = pageContent.innerHTML;
      modal.style.display = 'block';
  }

  // Fungsi untuk menutup popUp
  function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
  }


// POPUP HOMEPAGE {{--END--}}

// TRUTH OR DARE PUBLIC {{--START--}}

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

// TRUTH OR DARE PUBLIC {{--END--}}



// ADD TRUTH OR DARE POPUP {{--START--}}

function openForm(page) {
    let truthPopup = document.getElementById('truth-popup');
    let truthPopupContent = document.getElementById('truth-popup-content');
    let pageContent = document.getElementById(page);

      truthPopupContent.innerHTML = pageContent.innerHTML;
      truthPopup.style.display = 'block';
  }

  // Fungsi untuk menutup popUp
  function closePopup() {
    let truthPopup = document.getElementById('truth-popup');
    truthPopup.style.display = 'none';
  }

  // Memanggil fungsi closeTruthPopup saat pengguna mengklik luar popUp
  window.onclick = function(event) {
    let truthPopup = document.getElementById('truth-popup');
    if (event.target === truthPopup) {
      closePopup();
    }
  }

// ADD TRUTH OR DARE POPUP {{--END--}}

// TRUTH OR DARE PRIVATE {{--START--}}

// TRUTH PRIVATE
const truthPrivate = document.querySelector("#truthPrivate");


let dataAddTruth = [];

function addDataTruth() {
    const addTruth = document.getElementById("addTruth").value.trim();
    if (addTruth == "" || !addTruth) {
  	    alert("Silakan isi Truth terlebih dahulu")
    }else
        dataAddTruth.push(addTruth);
        document.getElementById("addTruth").value = "";
        closePopup();
    }
    let clickCountTruthPrivate = 0 ;
    function getRandomTruthPrivate() {
        clickCountTruthPrivate++; // Meningkatkan jumlah klik setiap kali tombol diklik
        
        if (clickCountTruthPrivate % 2 !== 0) { // Memeriksa apakah jumlah klik adalah bilangan ganjil
            let randomIndexPrivate = Math.floor(Math.random() * dataAddTruth.length); // Mendapatkan index acak dari array
            let randomTruthPrivate = dataAddTruth[randomIndexPrivate]; // Mendapatkan data acak dari array berdasarkan index
            console.log(randomTruthPrivate);
            truthPrivate.innerText = randomTruthPrivate;
        }
    }
    let buttonTruthPrivate = document.getElementById("cardTruthPrivate");
    buttonTruthPrivate.addEventListener("click", getRandomTruthPrivate); // Menambahkan event listener pada tombol untuk memanggil fungsi getRandomTruthPrivate saat diklik
    

// DARE PRIVATE
const darePrivate = document.querySelector("#darePrivate");

  let dataAddDare = [];

  function addDataDare() {
    const addDare = document.getElementById("addDare").value.trim();
    if (addDare == "" || !addDare) {
  	    alert("Silakan isi Dare terlebih dahulu")
    }else
        dataAddDare.push(addDare);
        document.getElementById("addDare").value = "";
        closePopup();
  }
  let clickCountDarePrivate = 0 ;
  function getRandomDarePrivate() {
    clickCountDarePrivate++; // Meningkatkan jumlah klik setiap kali tombol diklik
    
    if (clickCountDarePrivate % 2 !== 0) { // Memeriksa apakah jumlah klik adalah bilangan ganjil
        let randomIndexPrivate = Math.floor(Math.random() * dataAddDare.length); // Mendapatkan index acak dari array
        let randomDarePrivate = dataAddDare[randomIndexPrivate]; // Mendapatkan data acak dari array berdasarkan index
        console.log(randomDarePrivate);
        darePrivate.innerText = randomDarePrivate;
    }
  }

  let buttonDarePrivate = document.getElementById("cardDarePrivate");
  buttonDarePrivate.addEventListener("click", getRandomDarePrivate); // Menambahkan event listener pada tombol untuk memanggil fungsi getRandomDarePrivate saat diklik

// TRUTH OR DARE PRIVATE {{--END--}}

