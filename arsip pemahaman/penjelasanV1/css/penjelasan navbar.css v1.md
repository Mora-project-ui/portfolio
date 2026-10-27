# Dokumentasi CSS — Navbar, Music Button, dan Side Menu

## 1. CSS Navbar / Header

```css
/* =========================
   NAVBAR
========================= */

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    background: transparent;
    border-bottom: 1px solid transparent;

    transition:
        background 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

header.scrolled {
    background: rgba(13, 15, 18, 0.72);
    border-bottom-color: var(--border);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}
```

### Penjelasan

Kode ini mengatur tampilan header utama pada website. Header dibuat tetap berada di bagian atas layar ketika pengguna menggulir halaman. Awalnya, latar belakangnya transparan, tetapi dapat berubah menjadi gelap ketika elemen tersebut memiliki class `scrolled`.

### A. Selector `header`

```css
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    background: transparent;
    border-bottom: 1px solid transparent;

    transition:
        background 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}
```

- **`position: fixed;`** — membuat header tetap berada pada posisi yang sama terhadap viewport ketika halaman di-scroll.
- **`top: 0;`** — menempatkan header pada bagian paling atas viewport.
- **`left: 0;`** — menempatkan sisi kiri header pada batas kiri viewport.
- **`width: 100%;`** — membuat header memenuhi lebar area yang tersedia.
- **`z-index: 1000;`** — menentukan tingkat tumpukan header agar dapat berada di atas banyak elemen lain.
- **`background: transparent;`** — membuat latar belakang header transparan.
- **`border-bottom: 1px solid transparent;`** — membuat garis bawah setebal 1 piksel yang awalnya transparan.
- **`transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;`** — menghaluskan perubahan latar belakang, warna border, dan bayangan selama 0,3 detik.

Penggunaan `transition` membuat perubahan tampilan tidak terjadi secara mendadak. Browser akan menganimasikan perubahan nilai properti yang ditentukan.

### B. Selector `header.scrolled`

```css
header.scrolled {
    background: rgba(13, 15, 18, 0.72);
    border-bottom-color: var(--border);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}
```

Selector ini berlaku ketika elemen `header` memiliki class `scrolled`.

- **`background: rgba(13, 15, 18, 0.72);`** — memberikan latar belakang gelap dengan opasitas 72%.
- **`border-bottom-color: var(--border);`** — mengubah warna garis bawah menggunakan variabel CSS `--border`.
- **`box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);`** — menambahkan bayangan dengan pergeseran horizontal 0, pergeseran vertikal 8 piksel, blur 30 piksel, dan warna hitam dengan opasitas 15%.

Variabel `--border` harus sudah didefinisikan di CSS agar warna border sesuai dengan tema website.

Class `scrolled` tidak ditambahkan secara otomatis oleh CSS. JavaScript perlu mengaturnya berdasarkan posisi scroll halaman.

Contoh JavaScript:

```javascript
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
});
```

Cara kerjanya:

1. JavaScript mencari elemen `header`.
2. Event `scroll` dijalankan ketika posisi halaman berubah akibat scroll.
3. `window.scrollY > 20` memeriksa apakah halaman sudah digulir lebih dari 20 piksel.
4. `classList.toggle()` menambahkan class `scrolled` ketika kondisi bernilai benar dan menghapusnya ketika kondisi bernilai salah.
5. CSS mengubah tampilan header sesuai class yang aktif.

---

## 2. CSS Navigasi Navbar

```css
/* =========================
   NAV
========================= */

nav {
    position: relative;

    max-width: 1100px;

    margin: auto;

    padding: 18px 30px;

    display: flex;

    justify-content: space-between;

    align-items: center;
}

nav h2 {
    color: var(--accent);
}

nav a {
    color: var(--text);

    text-decoration: none;

    transition: 0.2s;
}

nav a:hover {
    color: var(--accent);
}
```

### Penjelasan

Bagian ini mengatur tata letak isi navbar, termasuk judul, tautan, dan elemen lain yang berada di dalam `nav`.

### A. Selector `nav`

```css
nav {
    position: relative;
    max-width: 1100px;
    margin: auto;
    padding: 18px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

- **`position: relative;`** — menjadikan elemen sebagai acuan posisi bagi anak yang menggunakan positioning tertentu.
- **`max-width: 1100px;`** — membatasi lebar maksimum navbar menjadi 1.100 piksel.
- **`margin: auto;`** — memusatkan navbar secara horizontal ketika tersedia ruang.
- **`padding: 18px 30px;`** — memberikan ruang dalam 18 piksel di atas dan bawah serta 30 piksel di kiri dan kanan.
- **`display: flex;`** — mengaktifkan Flexbox untuk mengatur posisi elemen anak.
- **`justify-content: space-between;`** — memberikan ruang di antara elemen sehingga elemen pertama dan terakhir dapat berada di sisi yang berlawanan.
- **`align-items: center;`** — menyelaraskan elemen anak secara vertikal di tengah.

Kombinasi Flexbox ini membuat judul navbar dapat berada di sisi kiri, sedangkan kontrol navigasi berada di sisi kanan.

### B. Selector `nav h2`

```css
nav h2 {
    color: var(--accent);
}
```

- **`nav h2`** — memilih elemen `<h2>` yang berada di dalam `nav`.
- **`color: var(--accent);`** — mengatur warna teks menggunakan variabel CSS `--accent`.

Warna aksen biasanya digunakan untuk menonjolkan elemen tertentu agar sesuai dengan identitas visual website.

### C. Selector `nav a`

```css
nav a {
    color: var(--text);
    text-decoration: none;
    transition: 0.2s;
}
```

- **`color: var(--text);`** — mengatur warna teks tautan menggunakan variabel `--text`.
- **`text-decoration: none;`** — menghilangkan garis bawah bawaan tautan.
- **`transition: 0.2s;`** — memberikan transisi selama 0,2 detik pada perubahan properti yang mendukung transisi.

### D. Selector `nav a:hover`

```css
nav a:hover {
    color: var(--accent);
}
```

Selector `:hover` aktif ketika kursor berada di atas tautan.

- **`color: var(--accent);`** — mengubah warna teks menjadi warna aksen saat tautan diarahkan oleh kursor.

Efek ini memberikan umpan balik visual bahwa tautan sedang diarahkan oleh pengguna.

---

## 3. CSS Nav Controls

```css
/* =========================
   NAV CONTROLS
========================= */

.nav-controls {
    display: flex;

    align-items: center;

    gap: 10px;
}
```

### Penjelasan

Class `.nav-controls` digunakan sebagai wadah untuk mengelompokkan kontrol navbar, seperti tombol menu dan tombol musik.

- **`display: flex;`** — menyusun elemen anak menggunakan Flexbox.
- **`align-items: center;`** — menempatkan elemen anak di tengah secara vertikal.
- **`gap: 10px;`** — memberikan jarak 10 piksel di antara elemen anak.

Dengan menggunakan `gap`, jarak antar tombol dapat diatur dari wadahnya tanpa perlu memberikan margin secara terpisah kepada setiap tombol.

---

## 4. CSS Menu Toggle

```css
/* =========================
   MENU TOGGLE
========================= */

#menu-toggle {
    background: transparent;

    border: none;

    color: var(--text);

    font-size: 24px;

    cursor: pointer;
}
```

### Penjelasan

Kode ini mengatur tampilan tombol dengan ID `menu-toggle`, yang dapat digunakan sebagai tombol untuk membuka menu navigasi.

- **`background: transparent;`** — membuat latar belakang tombol transparan.
- **`border: none;`** — menghilangkan border bawaan tombol.
- **`color: var(--text);`** — mengatur warna teks atau ikon menggunakan variabel `--text`.
- **`font-size: 24px;`** — mengatur ukuran karakter atau ikon berbasis teks menjadi 24 piksel.
- **`cursor: pointer;`** — mengubah tampilan kursor menjadi tangan ketika diarahkan ke tombol pada perangkat yang mendukung kursor.

CSS ini hanya mengatur tampilan tombol. Fungsi membuka menu tetap memerlukan JavaScript yang menambahkan class `open` ke elemen menu.

---

## 5. CSS Music Button

```css
/* =========================
   MUSIC BUTTON
========================= */

#music-toggle {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 5px;

    width: 58px;
    height: 34px;

    background: transparent;

    border: 1px solid var(--border);

    border-radius: 999px;

    color: var(--muted);

    cursor: pointer;

    transition:
        color 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
}

#music-toggle:hover {
    color: var(--accent);

    border-color: var(--accent);

    transform: translateY(-2px);
}

#music-toggle.playing {
    color: var(--accent);

    border-color: var(--accent);
}
```

### Penjelasan

Bagian ini mengatur tampilan tombol musik, termasuk ukuran, bentuk, warna, dan efek ketika kursor diarahkan ke tombol.

### A. Selector `#music-toggle`

```css
#music-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: 58px;
    height: 34px;

    background: transparent;
    border: 1px solid var(--border);
    border-radius: 999px;

    color: var(--muted);
    cursor: pointer;

    transition:
        color 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
}
```

- **`display: inline-flex;`** — membuat tombol berperilaku seperti elemen inline, sementara isi di dalamnya ditata menggunakan Flexbox.
- **`align-items: center;`** — menyelaraskan isi tombol secara vertikal di tengah.
- **`justify-content: center;`** — menempatkan isi tombol di tengah secara horizontal.
- **`gap: 5px;`** — memberikan jarak 5 piksel di antara elemen anak.
- **`width: 58px;`** — menetapkan lebar tombol sebesar 58 piksel.
- **`height: 34px;`** — menetapkan tinggi tombol sebesar 34 piksel.
- **`background: transparent;`** — membuat latar belakang tombol transparan.
- **`border: 1px solid var(--border);`** — membuat garis tepi setebal 1 piksel menggunakan variabel `--border`.
- **`border-radius: 999px;`** — membulatkan sudut tombol sehingga berbentuk seperti kapsul.
- **`color: var(--muted);`** — menggunakan warna teks sekunder atau warna yang lebih redup.
- **`cursor: pointer;`** — memberikan kursor tangan ketika tombol diarahkan oleh kursor.
- **`transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;`** — menghaluskan perubahan warna teks, warna border, dan posisi tombol selama 0,2 detik.

### B. Selector `#music-toggle:hover`

```css
#music-toggle:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
}
```

- **`color: var(--accent);`** — mengubah warna teks atau ikon menjadi warna aksen.
- **`border-color: var(--accent);`** — mengubah warna border menjadi warna aksen.
- **`transform: translateY(-2px);`** — menggeser tombol ke atas sejauh 2 piksel.

Efek tersebut membuat tombol sedikit terangkat ketika kursor berada di atasnya.

### C. Selector `#music-toggle.playing`

```css
#music-toggle.playing {
    color: var(--accent);
    border-color: var(--accent);
}
```

Selector ini berlaku ketika tombol memiliki dua hal sekaligus: ID `music-toggle` dan class `playing`.

- **`color: var(--accent);`** — mengubah warna teks atau ikon menjadi warna aksen.
- **`border-color: var(--accent);`** — mengubah warna border menjadi warna aksen.

Class `playing` dapat digunakan untuk menunjukkan kondisi musik yang sedang diputar. Namun, JavaScript perlu mengatur class tersebut agar sesuai dengan kondisi audio yang sebenarnya.

---

## 6. CSS Music Icon

```css
.music-icon {
    font-size: 15px;

    line-height: 1;
}
```

### Penjelasan

Class `.music-icon` digunakan untuk mengatur ukuran dan tinggi baris ikon musik.

- **`font-size: 15px;`** — mengatur ukuran karakter atau ikon berbasis teks menjadi 15 piksel.
- **`line-height: 1;`** — menetapkan tinggi baris sebesar satu kali ukuran font sehingga ruang vertikal tambahan dapat dikurangi.

Pengaturan ini membantu ikon berada lebih rapi di dalam tombol musik.

---

## 7. CSS Equalizer Animation

```css
.equalizer {
    display: flex;

    align-items: center;

    gap: 2px;

    height: 16px;
}

.equalizer i {
    display: block;

    width: 2px;
    height: 5px;

    background: currentColor;

    border-radius: 2px;

    animation:
        equalizer 0.8s ease-in-out infinite alternate;

    animation-play-state: paused;
}

.equalizer i:nth-child(1) {
    animation-delay: 0s;
}

.equalizer i:nth-child(2) {
    animation-delay: 0.2s;
}

.equalizer i:nth-child(3) {
    animation-delay: 0.1s;
}

#music-toggle.playing .equalizer i {
    animation-play-state: running;
}

@keyframes equalizer {
    0% {
        height: 4px;
    }

    100% {
        height: 15px;
    }
}
```

### Penjelasan

Bagian ini membuat tiga batang kecil yang dapat bergerak naik-turun menyerupai equalizer musik. Animasi dibuat menggunakan CSS tanpa harus mengubah tinggi batang secara manual melalui JavaScript.

### A. Class `.equalizer`

```css
.equalizer {
    display: flex;
    align-items: center;
    gap: 2px;
    height: 16px;
}
```

- **`display: flex;`** — menyusun batang equalizer secara horizontal.
- **`align-items: center;`** — menempatkan batang di tengah secara vertikal.
- **`gap: 2px;`** — memberikan jarak 2 piksel di antara batang.
- **`height: 16px;`** — menetapkan tinggi wadah equalizer sebesar 16 piksel.

### B. Selector `.equalizer i`

```css
.equalizer i {
    display: block;
    width: 2px;
    height: 5px;
    background: currentColor;
    border-radius: 2px;

    animation:
        equalizer 0.8s ease-in-out infinite alternate;

    animation-play-state: paused;
}
```

Selector ini memilih elemen `<i>` yang berada di dalam elemen dengan class `equalizer`.

- **`display: block;`** — membuat setiap batang tampil sebagai elemen blok.
- **`width: 2px;`** — menetapkan lebar batang sebesar 2 piksel.
- **`height: 5px;`** — menetapkan tinggi awal batang sebesar 5 piksel.
- **`background: currentColor;`** — menggunakan warna yang sama dengan nilai properti `color` elemen tersebut atau warna teks yang diwariskan.
- **`border-radius: 2px;`** — membulatkan sudut batang.
- **`animation: equalizer 0.8s ease-in-out infinite alternate;`** — menjalankan animasi bernama `equalizer` dengan durasi 0,8 detik, transisi `ease-in-out`, pengulangan tanpa batas, dan arah animasi bergantian.
- **`animation-play-state: paused;`** — membuat animasi dalam kondisi jeda secara default.

### C. Pengaturan delay animasi

```css
.equalizer i:nth-child(1) {
    animation-delay: 0s;
}

.equalizer i:nth-child(2) {
    animation-delay: 0.2s;
}

.equalizer i:nth-child(3) {
    animation-delay: 0.1s;
}
```

`nth-child()` memilih elemen berdasarkan urutannya di antara anak-anak dari elemen induk.

- **Batang pertama** memiliki jeda 0 detik.
- **Batang kedua** memiliki jeda 0,2 detik.
- **Batang ketiga** memiliki jeda 0,1 detik.

Perbedaan waktu ini membuat batang tidak bergerak secara serempak sehingga tampilannya lebih dinamis.

### D. Menjalankan animasi ketika musik aktif

```css
#music-toggle.playing .equalizer i {
    animation-play-state: running;
}
```

Selector ini memilih elemen `<i>` di dalam `.equalizer`, ketika `.equalizer` berada di dalam tombol `#music-toggle` yang memiliki class `playing`.

- **`animation-play-state: running;`** — menjalankan animasi yang sebelumnya berada dalam kondisi jeda.

Dengan demikian, JavaScript dapat menambahkan class `playing` ketika musik dimainkan dan menghapusnya ketika musik dihentikan.

### E. Definisi animasi `@keyframes`

```css
@keyframes equalizer {
    0% {
        height: 4px;
    }

    100% {
        height: 15px;
    }
}
```

- **`@keyframes equalizer`** — mendefinisikan tahapan animasi dengan nama `equalizer`.
- **`0%`** — menetapkan tinggi batang sebesar 4 piksel pada awal animasi.
- **`100%`** — menetapkan tinggi batang sebesar 15 piksel pada akhir animasi.

Browser mengubah tinggi batang secara bertahap di antara kedua nilai tersebut.

**Catatan:** animasi ini hanya memberikan efek visual. Batang equalizer tidak otomatis mengikuti frekuensi atau volume musik yang sebenarnya. Untuk membuatnya bereaksi terhadap audio, diperlukan JavaScript dan Web Audio API.

---

## 8. CSS Side Menu

```css
/* =========================
   SIDE MENU
========================= */

.nav-menu {
    position: fixed;

    top: 0;
    right: 0;
    bottom: 0;

    width: 280px;

    max-width: 85vw;

    height: 100vh;
    height: 100dvh;

    padding: 100px 30px 30px;

    display: flex;

    flex-direction: column;

    gap: 0;

    background: rgba(13, 15, 18, 0.97);

    border-left: 1px solid var(--border);

    transform: translate3d(100%, 0, 0);

    transition: transform 0.3s ease;

    z-index: 1100;

    overflow-y: auto;

    overscroll-behavior: contain;
}

.nav-menu.open {
    transform: translate3d(0, 0, 0);
}
```

### Penjelasan

Class `.nav-menu` mengatur panel navigasi samping yang muncul dari sisi kanan layar. Secara default, panel digeser keluar dari viewport. Ketika class `open` ditambahkan, panel kembali ke posisi normal dengan transisi yang halus.

### A. Posisi dan ukuran panel

- **`position: fixed;`** — memosisikan panel relatif terhadap viewport sehingga tidak ikut bergerak mengikuti alur konten halaman.
- **`top: 0;`** — menempatkan bagian atas panel pada bagian atas viewport.
- **`right: 0;`** — menempelkan panel pada sisi kanan viewport.
- **`bottom: 0;`** — menempatkan bagian bawah panel pada bagian bawah viewport.
- **`width: 280px;`** — menetapkan lebar panel sebesar 280 piksel.
- **`max-width: 85vw;`** — membatasi lebar maksimum panel menjadi 85% dari lebar viewport.
- **`height: 100vh;`** — menetapkan tinggi panel sebesar 100% tinggi viewport.
- **`height: 100dvh;`** — menggunakan tinggi viewport dinamis. Pada browser yang mendukungnya, nilai ini dapat menyesuaikan area tampilan ketika antarmuka browser berubah, misalnya pada perangkat mobile.

Deklarasi `100vh` berfungsi sebagai cadangan jika browser tidak mendukung `100dvh`. Pada browser yang mendukung keduanya, deklarasi `100dvh` akan digunakan.

### B. Ruang dalam dan susunan isi

```css
padding: 100px 30px 30px;

display: flex;

flex-direction: column;

gap: 0;
```

- **`padding: 100px 30px 30px;`** — memberikan ruang dalam 100 piksel di atas, 30 piksel di kiri dan kanan, serta 30 piksel di bawah.
- **`display: flex;`** — mengaktifkan Flexbox untuk mengatur elemen anak panel.
- **`flex-direction: column;`** — menyusun elemen anak secara vertikal.
- **`gap: 0;`** — tidak menambahkan jarak melalui `gap` di antara elemen anak.

Padding atas yang besar memberikan ruang bagi tombol tutup atau elemen lain di bagian atas panel.

### C. Tampilan panel

```css
background: rgba(13, 15, 18, 0.97);

border-left: 1px solid var(--border);
```

- **`background: rgba(13, 15, 18, 0.97);`** — memberikan latar belakang gelap dengan opasitas 97%, sehingga panel hampir sepenuhnya menutupi konten di belakangnya.
- **`border-left: 1px solid var(--border);`** — menambahkan garis batas setebal 1 piksel di sisi kiri panel.

### D. Posisi awal panel

```css
transform: translate3d(100%, 0, 0);
```

Properti `transform` digunakan untuk mengubah posisi visual elemen tanpa mengubah posisi dasarnya dalam alur layout normal.

- **`translate3d(100%, 0, 0)`** — menggeser panel ke kanan sejauh 100% dari lebar panel, tanpa menggesernya secara vertikal atau pada sumbu kedalaman.

Akibatnya, panel berada di luar sisi kanan layar saat menu tertutup.

### E. Transisi panel

```css
transition: transform 0.3s ease;
```

Properti ini membuat perubahan `transform` berlangsung selama 0,3 detik dengan transisi `ease`.

Ketika posisi panel berubah, browser menganimasikan perpindahannya sehingga panel terlihat masuk atau keluar secara halus.

### F. Tingkat tumpukan

```css
z-index: 1100;
```

Properti ini menentukan tingkat tumpukan panel.

Nilai `1100` lebih tinggi daripada nilai `1000` pada header. Dalam konteks penumpukan yang sesuai, panel dapat tampil di atas header.

### G. Scroll di dalam panel

```css
overflow-y: auto;

overscroll-behavior: contain;
```

- **`overflow-y: auto;`** — memungkinkan panel memiliki scroll vertikal ketika isinya lebih tinggi daripada ruang yang tersedia.
- **`overscroll-behavior: contain;`** — membatasi penerusan efek scroll berlebih ke area lain, seperti halaman di belakang panel.

Pengaturan ini berguna ketika daftar navigasi cukup panjang atau layar perangkat berukuran kecil.

### H. Class `.nav-menu.open`

```css
.nav-menu.open {
    transform: translate3d(0, 0, 0);
}
```

Selector ini berlaku ketika elemen memiliki dua class sekaligus, yaitu `nav-menu` dan `open`.

- **`transform: translate3d(0, 0, 0);`** — mengembalikan panel ke posisi horizontal normalnya.

Karena terdapat `transition` pada `.nav-menu`, perubahan dari `translate3d(100%, 0, 0)` menjadi `translate3d(0, 0, 0)` menghasilkan animasi panel yang bergerak dari kanan ke dalam layar.

JavaScript perlu menambahkan atau menghapus class `open` untuk mengendalikan kondisi menu.

---

## 9. CSS Tautan Side Menu

```css
.nav-menu a {
    padding: 16px 0;

    color: var(--text);

    text-decoration: none;

    font-size: 16px;

    border-bottom: 1px solid var(--border);

    transition:
        color 0.2s ease,
        padding-left 0.2s ease;
}

.nav-menu a:hover {
    color: var(--accent);

    padding-left: 8px;
}
```

### Penjelasan

Bagian ini mengatur tampilan tautan yang berada di dalam panel navigasi samping.

### A. Selector `.nav-menu a`

- **`padding: 16px 0;`** — memberikan ruang dalam 16 piksel di atas dan bawah serta 0 piksel di kiri dan kanan.
- **`color: var(--text);`** — mengatur warna teks tautan menggunakan variabel `--text`.
- **`text-decoration: none;`** — menghilangkan garis bawah bawaan tautan.
- **`font-size: 16px;`** — menetapkan ukuran teks sebesar 16 piksel.
- **`border-bottom: 1px solid var(--border);`** — menambahkan garis pemisah di bawah setiap tautan.
- **`transition: color 0.2s ease, padding-left 0.2s ease;`** — menghaluskan perubahan warna dan padding kiri selama 0,2 detik.

Padding vertikal membuat area tautan lebih lapang dan lebih mudah disentuh pada perangkat mobile.

### B. Selector `.nav-menu a:hover`

```css
.nav-menu a:hover {
    color: var(--accent);
    padding-left: 8px;
}
```

- **`color: var(--accent);`** — mengubah warna teks tautan menjadi warna aksen ketika kursor berada di atasnya.
- **`padding-left: 8px;`** — menambahkan padding kiri sebesar 8 piksel sehingga isi tautan tampak bergeser ke kanan.

Efek tersebut memberikan umpan balik visual saat pengguna mengarahkan kursor ke salah satu tautan.

---

## 10. CSS Close Button

```css
/* =========================
   CLOSE BUTTON
========================= */

#menu-close {
    align-self: flex-end;

    background: transparent;

    border: none;

    color: var(--text);

    font-size: 24px;

    cursor: pointer;

    margin-bottom: 20px;
}

#menu-close:hover {
    color: var(--accent);
}
```

### Penjelasan

Kode ini mengatur tampilan tombol tutup yang berada di dalam side menu.

### A. Selector `#menu-close`

- **`align-self: flex-end;`** — menempatkan tombol di ujung kanan pada sumbu silang Flexbox. Karena panel memakai `flex-direction: column`, tombol akan berada di sisi kanan.
- **`background: transparent;`** — membuat latar belakang tombol transparan.
- **`border: none;`** — menghilangkan border bawaan tombol.
- **`color: var(--text);`** — mengatur warna teks atau ikon menggunakan variabel `--text`.
- **`font-size: 24px;`** — menetapkan ukuran karakter atau ikon sebesar 24 piksel.
- **`cursor: pointer;`** — menampilkan kursor tangan saat tombol diarahkan oleh kursor.
- **`margin-bottom: 20px;`** — memberikan jarak 20 piksel di bawah tombol.

### B. Selector `#menu-close:hover`

```css
#menu-close:hover {
    color: var(--accent);
}
```

- **`color: var(--accent);`** — mengubah warna tombol menjadi warna aksen ketika kursor berada di atasnya.

CSS ini mengatur tampilan tombol tutup. Agar tombol benar-benar menutup menu, JavaScript perlu menghapus class `open` dari elemen `.nav-menu`.

---

## 11. Hubungan CSS dengan HTML dan JavaScript

CSS navbar ini bekerja bersama HTML dan JavaScript. Ketiganya memiliki tanggung jawab yang berbeda.

### A. HTML

HTML menyediakan struktur elemen yang akan ditampilkan, seperti:

- `header` sebagai wadah navbar.
- `nav` sebagai wadah navigasi.
- `#menu-toggle` sebagai tombol pembuka menu.
- `#music-toggle` sebagai tombol musik.
- `.equalizer` sebagai wadah animasi batang musik.
- `.nav-menu` sebagai panel navigasi samping.
- `#menu-close` sebagai tombol penutup panel.

Nama class dan ID pada HTML harus sesuai dengan selector yang digunakan oleh CSS.

### B. CSS

CSS mengatur tampilan dan animasi, antara lain:

- Posisi header yang tetap saat halaman di-scroll.
- Perubahan tampilan header melalui class `scrolled`.
- Susunan isi navbar menggunakan Flexbox.
- Warna dan efek hover pada tombol serta tautan.
- Animasi batang equalizer ketika class `playing` aktif.
- Pergerakan panel menu melalui class `open`.

### C. JavaScript

JavaScript mengatur perubahan keadaan elemen berdasarkan interaksi pengguna atau kondisi halaman.

Contohnya:

- Menambahkan class `scrolled` ketika halaman digulir.
- Menambahkan atau menghapus class `open` ketika tombol menu digunakan.
- Menambahkan atau menghapus class `playing` sesuai kondisi musik.
- Menghubungkan tombol musik dengan pemutaran audio yang sebenarnya.

**Catatan:** CSS tidak otomatis menjalankan fungsi-fungsi tersebut. Implementasi JavaScript dan struktur HTML yang lengkap diperlukan agar seluruh interaksi bekerja sesuai tujuan.

## Kesimpulan

CSS Navbar mengatur header yang tetap berada di bagian atas layar, sedangkan class `scrolled` mengubah tampilan header ketika halaman digulir. CSS Nav mengatur posisi judul dan tautan menggunakan Flexbox, sementara Nav Controls mengatur jarak antarkontrol.

Music Button mengatur tampilan tombol musik beserta efek hover dan status aktifnya. Equalizer Animation membuat batang kecil bergerak naik-turun menggunakan `@keyframes`, sedangkan Side Menu menggunakan `transform` dan `transition` untuk menghasilkan panel navigasi yang masuk dari sisi kanan layar. Close Button mengatur tampilan tombol untuk menutup panel.

Secara keseluruhan, CSS ini memisahkan pengaturan tampilan dari logika interaksi. CSS bertanggung jawab terhadap visual, HTML menyediakan struktur, dan JavaScript mengendalikan perubahan keadaan seperti scroll, pembukaan menu, serta pemutaran musik.
