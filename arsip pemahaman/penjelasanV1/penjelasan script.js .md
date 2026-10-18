# Dokumentasi JavaScript Portfolio Mora-project-ui

## 1. Fungsi JavaScript dalam Website

JavaScript digunakan untuk mengatur perilaku interaktif website. Jika HTML bertugas membentuk struktur dan CSS mengatur tampilan, JavaScript memungkinkan elemen website merespons tindakan pengguna atau perubahan kondisi halaman.

Pada portfolio Mora-project-ui, JavaScript digunakan untuk:

1. Menampilkan animasi ketika elemen masuk ke area layar.
2. Mengubah tampilan header ketika halaman digulir.
3. Mengaktifkan dan menonaktifkan musik latar.
4. Membuka dan menutup menu navigasi.
5. Menghitung progres scroll halaman.

---

## 2. Scroll Reveal Animation

### Kode

```javascript
const animatedElements = document.querySelectorAll(
    ".project-card, .Technologies-list span, .contact-links span, .reveal-section"
);

if (animatedElements.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

    animatedElements.forEach((element) => {
        observer.observe(element);
    });

}
```

### Penjelasan

Bagian ini membuat elemen tertentu mendapatkan class `show` ketika masuk ke area yang terlihat pada layar.

#### a. Memilih elemen HTML

```javascript
const animatedElements = document.querySelectorAll(
    ".project-card, .Technologies-list span, .contact-links span, .reveal-section"
);
```

- `const` digunakan untuk mendeklarasikan variabel yang tidak dapat ditetapkan ulang.
- `document.querySelectorAll()` mencari semua elemen yang sesuai dengan selector CSS.
- `.project-card` memilih elemen dengan class `project-card`.
- `.Technologies-list span` memilih elemen `<span>` di dalam elemen dengan class `Technologies-list`.
- `.contact-links span` memilih elemen `<span>` di dalam `.contact-links`.
- `.reveal-section` memilih elemen yang menggunakan class tersebut.

Hasil pencarian disimpan dalam variabel `animatedElements`.

**Catatan:** selector `.Technologies-list` bersifat case-sensitive. Jika HTML menggunakan `.technologies-list` dengan huruf kecil, selector tersebut harus disesuaikan agar elemen dapat ditemukan.

#### b. Memeriksa jumlah elemen

```javascript
if (animatedElements.length > 0) {
```

`length` menunjukkan jumlah elemen yang ditemukan.

Pemeriksaan ini memastikan proses pembuatan observer hanya dijalankan jika setidaknya ada satu elemen yang akan diamati.

#### c. Membuat IntersectionObserver

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
```

`IntersectionObserver` merupakan API browser yang memungkinkan JavaScript mengamati apakah suatu elemen beririsan dengan area pengamatan, biasanya viewport atau area layar pengguna.

- `entries` berisi hasil pengamatan elemen.
- `forEach()` menjalankan fungsi untuk setiap hasil pengamatan.
- `entry.isIntersecting` bernilai `true` ketika elemen beririsan dengan area pengamatan.
- `entry.target` menunjuk pada elemen yang sedang diamati.
- `classList.add("show")` menambahkan class `show` pada elemen tersebut.

Ketika elemen masuk ke area layar, class `show` ditambahkan. CSS kemudian dapat menggunakan class tersebut untuk mengubah opacity, posisi, atau properti visual lainnya.

#### d. Mengamati setiap elemen

```javascript
animatedElements.forEach((element) => {
    observer.observe(element);
});
```

Kode ini menjalankan `observer.observe()` untuk setiap elemen yang ditemukan.

Dengan begitu, browser dapat memberi tahu JavaScript ketika elemen-elemen tersebut mulai terlihat.

### Hubungan dengan CSS

Contoh aturan CSS yang dapat digunakan:

```css
.project-card,
.contact-links span,
.reveal-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.project-card.show,
.contact-links span.show,
.reveal-section.show {
    opacity: 1;
    transform: translateY(0);
}
```

Saat elemen belum memiliki class `show`, elemen dibuat transparan dan digeser ke bawah. Setelah class `show` ditambahkan, elemen menjadi terlihat dan kembali ke posisi normal.

**Catatan:** kode JavaScript ini tidak menghapus class `show` ketika elemen keluar dari layar. Karena itu, animasi biasanya berjalan sekali saat elemen pertama kali muncul, lalu elemen tetap terlihat.

---

## 3. Sticky Header

### Kode

```javascript
const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}
```

### Penjelasan

Bagian ini mengubah class header berdasarkan posisi scroll halaman.

#### a. Memilih elemen header

```javascript
const header = document.querySelector("header");
```

`document.querySelector("header")` mengambil elemen `<header>` pertama yang ditemukan.

#### b. Memastikan header tersedia

```javascript
if (header) {
```

Pemeriksaan ini mencegah kode mencoba mengubah class pada nilai `null` apabila halaman tidak memiliki elemen header.

#### c. Mendengarkan peristiwa scroll

```javascript
window.addEventListener("scroll", () => {
```

`addEventListener()` mendaftarkan fungsi yang akan dijalankan ketika peristiwa tertentu terjadi.

Dalam kasus ini, fungsi dipanggil ketika pengguna menggulir halaman.

#### d. Memeriksa posisi scroll

```javascript
if (window.scrollY > 50) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}
```

- `window.scrollY` menunjukkan posisi scroll vertikal halaman dalam piksel.
- Jika nilainya lebih besar dari 50, class `scrolled` ditambahkan.
- Jika nilainya 50 atau kurang, class `scrolled` dihapus.

### Hubungan dengan CSS

Class `scrolled` dapat digunakan untuk mengubah tampilan header, misalnya:

- Mengubah warna latar.
- Menambahkan efek blur.
- Menambahkan bayangan.
- Mengubah padding atau ukuran elemen.

JavaScript hanya mengatur kapan class ditambahkan atau dihapus. Perubahan visualnya ditentukan oleh CSS.

**Catatan:** meskipun namanya `Sticky Header`, kode JavaScript ini sendiri tidak membuat header menempel di layar. Untuk itu, CSS perlu menggunakan `position: sticky` atau `position: fixed`, sesuai desain yang diinginkan.

---

## 4. Background Music

### Kode

```javascript
const music = document.querySelector("#background-music");
const musicToggle = document.querySelector("#music-toggle");
const musicIcon = document.querySelector(".music-icon");

if (music && musicToggle && musicIcon) {

    musicToggle.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicIcon.textContent = "🔊";

            musicToggle.classList.add("playing");

        } else {

            music.pause();

            musicIcon.textContent = "🎵";

            musicToggle.classList.remove("playing");

        }

    });

}
```

### Penjelasan

Bagian ini menghubungkan tombol musik pada navbar dengan elemen audio di HTML.

#### a. Mengambil elemen HTML

```javascript
const music = document.querySelector("#background-music");
const musicToggle = document.querySelector("#music-toggle");
const musicIcon = document.querySelector(".music-icon");
```

- `music`: elemen `<audio>` yang memutar musik.
- `musicToggle`: tombol untuk mengaktifkan atau menghentikan musik.
- `musicIcon`: elemen yang menampilkan ikon status musik.

Selector dengan awalan `#` digunakan untuk mencari ID, sedangkan selector dengan awalan `.` digunakan untuk mencari class.

#### b. Memeriksa keberadaan elemen

```javascript
if (music && musicToggle && musicIcon) {
```

Kode hanya melanjutkan proses jika ketiga elemen tersedia.

Ini berguna ketika file JavaScript digunakan pada beberapa halaman yang tidak selalu memiliki semua elemen tersebut.

#### c. Merespons klik tombol

```javascript
musicToggle.addEventListener("click", () => {
```

Fungsi di dalam `addEventListener()` dijalankan ketika tombol musik diklik.

#### d. Memeriksa status audio

```javascript
if (music.paused) {
```

`music.paused` bernilai `true` jika audio sedang dijeda atau belum diputar.

Jika audio sedang dijeda, kode menjalankan:

```javascript
music.play();

musicIcon.textContent = "🔊";

musicToggle.classList.add("playing");
```

- `music.play()` meminta browser memulai pemutaran audio.
- `textContent` mengganti isi teks atau simbol pada ikon.
- `classList.add("playing")` menambahkan class yang bisa digunakan CSS untuk menampilkan status musik aktif.

Jika audio sedang diputar, bagian `else` menjalankan:

```javascript
music.pause();

musicIcon.textContent = "🎵";

musicToggle.classList.remove("playing");
```

Musik dijeda, ikon dikembalikan, dan class `playing` dihapus.

### Hubungan dengan HTML dan CSS

HTML menyediakan elemen audio, tombol, dan ikon. JavaScript mengubah status audio serta class tombol, sementara CSS mengatur tampilan tombol dan animasi equalizer.

**Catatan penting:** `music.play()` menghasilkan Promise yang dapat gagal, misalnya jika sumber audio tidak tersedia. Kode ini juga langsung mengubah ikon sebelum memastikan pemutaran berhasil. Untuk implementasi yang lebih tangguh, status ikon sebaiknya disinkronkan dengan keberhasilan pemutaran atau peristiwa audio seperti `play` dan `pause`.

---

## 5. Navigation Menu

### Kode

```javascript
const menuToggle = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#menu-close");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.add("open");
    });

}

if (menuClose && navMenu) {

    menuClose.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });

}
```

### Penjelasan

Bagian ini mengatur pembukaan dan penutupan menu navigasi.

#### a. Mengambil elemen

```javascript
const menuToggle = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#menu-close");
const navMenu = document.querySelector(".nav-menu");
```

- `menuToggle`: tombol pembuka menu.
- `menuClose`: tombol penutup menu.
- `navMenu`: wadah daftar navigasi.

#### b. Membuka menu

```javascript
if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.add("open");
    });
}
```

Ketika tombol menu diklik, class `open` ditambahkan pada `.nav-menu`.

CSS dapat menggunakan class ini untuk mengubah menu dari keadaan tertutup menjadi terbuka.

#### c. Menutup menu

```javascript
if (menuClose && navMenu) {
    menuClose.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
}
```

Ketika tombol tutup diklik, class `open` dihapus sehingga CSS dapat mengembalikan menu ke keadaan tertutup.

### Hubungan dengan CSS

Contoh sederhana:

```css
.nav-menu {
    transform: translateX(100%);
    transition: transform 0.3s ease;
}

.nav-menu.open {
    transform: translateX(0);
}
```

Dalam contoh ini, menu awalnya digeser ke luar layar. Ketika class `open` ditambahkan, menu kembali ke posisi normal dengan transisi.

Hasil sebenarnya bergantung pada aturan CSS lengkap, termasuk `position`, ukuran menu, dan pengaturan responsif.

**Catatan:** kode JavaScript yang diberikan hanya menangani klik tombol buka dan tutup. Belum ada penanganan khusus untuk tombol Escape, klik di luar menu, atau penutupan setelah tautan menu dipilih.

---

## 6. Scroll Progress

### Kode

```javascript
const scrollProgress = document.querySelector("#scroll-progress");

if (scrollProgress) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        if (documentHeight <= 0) {

            scrollProgress.style.width = "0%";

            return;

        }

        const scrollPercent =
            (scrollTop / documentHeight) * 100;

        scrollProgress.style.width =
            `${scrollPercent}%`;

    });

}
```

### Penjelasan

Bagian ini menghitung seberapa jauh halaman telah digulir dan memperbarui lebar indikator scroll.

#### a. Mengambil elemen indikator

```javascript
const scrollProgress = document.querySelector("#scroll-progress");
```

JavaScript mencari elemen dengan ID `scroll-progress`, yang sudah disediakan dalam HTML.

#### b. Mendengarkan scroll

```javascript
window.addEventListener("scroll", () => {
```

Setiap kali pengguna menggulir halaman, fungsi perhitungan progres dijalankan.

#### c. Mengambil posisi scroll

```javascript
const scrollTop = window.scrollY;
```

`window.scrollY` menunjukkan jarak scroll vertikal dari bagian paling atas halaman dalam piksel.

#### d. Menghitung tinggi area yang dapat digulir

```javascript
const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
```

- `document.documentElement.scrollHeight`: tinggi total dokumen, termasuk bagian yang tidak terlihat.
- `window.innerHeight`: tinggi viewport yang terlihat.

Hasil pengurangan menunjukkan jarak maksimum scroll vertikal yang tersedia.

#### e. Menangani halaman yang tidak perlu digulir

```javascript
if (documentHeight <= 0) {
    scrollProgress.style.width = "0%";
    return;
}
```

Jika tinggi dokumen tidak melebihi tinggi viewport, halaman tidak memiliki jarak scroll vertikal yang berarti.

Dalam kondisi ini, lebar indikator diatur menjadi nol, lalu `return` menghentikan fungsi agar perhitungan tidak dilanjutkan.

#### f. Menghitung persentase progres

```javascript
const scrollPercent =
    (scrollTop / documentHeight) * 100;
```

Rumus ini membagi posisi scroll saat ini dengan jarak scroll maksimum, lalu mengalikannya dengan 100.

Sebagai contoh, jika posisi scroll sudah mencapai setengah dari jarak scroll maksimum, hasil perhitungannya sekitar 50%.

#### g. Memperbarui lebar indikator

```javascript
scrollProgress.style.width =
    `${scrollPercent}%`;
```

Template literal menggunakan tanda backtick memungkinkan nilai variabel dimasukkan ke dalam string.

Hasilnya menjadi nilai seperti `50%`, lalu diterapkan sebagai lebar elemen indikator melalui `style.width`.

CSS sebelumnya menetapkan posisi, tinggi, dan warna indikator. JavaScript mengubah lebarnya sesuai progres scroll.

---

## 7. Ringkasan Alur Kerja JavaScript

| Fitur | Pemicu | Perubahan |
|---|---|---|
| Scroll reveal | Elemen masuk ke area pengamatan | Class `show` ditambahkan |
| Header | Halaman digulir | Class `scrolled` ditambah atau dihapus |
| Musik | Tombol musik diklik | Audio diputar atau dijeda |
| Navbar | Tombol buka/tutup diklik | Class `open` ditambah atau dihapus |
| Scroll progress | Halaman digulir | Lebar indikator diperbarui |

## 8. Hubungan JavaScript, HTML, dan CSS

Ketiga teknologi tersebut bekerja bersama:

**HTML** menyediakan elemen yang dapat dipilih melalui ID atau class.

**JavaScript** memilih elemen tersebut menggunakan `querySelector()` atau `querySelectorAll()`, kemudian merespons peristiwa atau mengubah class dan properti elemen.

**CSS** menentukan bagaimana elemen terlihat sebelum dan sesudah perubahan tersebut.

Contoh pada menu navigasi:

1. HTML membuat elemen `.nav-menu` dan tombol `#menu-toggle`.
2. JavaScript menemukan kedua elemen tersebut.
3. Ketika tombol diklik, JavaScript menambahkan class `open`.
4. CSS menggunakan `.nav-menu.open` untuk menampilkan menu.

Dengan pola ini, struktur, perilaku, dan tampilan dipisahkan sehingga lebih mudah dikembangkan serta diperbaiki.

## 9. Catatan Pemeriksaan

- Pastikan selector `.Technologies-list span` sesuai dengan penulisan class pada HTML. Nama class dengan huruf besar dan kecil yang berbeda tidak dianggap sama.
- Pastikan CSS menyediakan aturan untuk class `show`, `scrolled`, `playing`, dan `open` sesuai fungsi masing-masing.
- Pastikan elemen audio memiliki sumber file yang valid sebelum menguji tombol musik.
- Ingat bahwa kode scroll reveal ini menambahkan class `show` tanpa menghapusnya ketika elemen keluar dari viewport.
- Ingat bahwa kode header hanya mengatur class `scrolled`; efek sticky atau fixed tetap harus ditentukan oleh CSS.
- Pertimbangkan penggunaan `requestAnimationFrame()` atau strategi pembatasan frekuensi pembaruan jika event scroll terasa terlalu sering dijalankan pada perangkat tertentu.
- Uji setiap fitur pada desktop dan smartphone agar menu, animasi, dan indikator scroll tetap berfungsi dengan baik.

## Kesimpulan

JavaScript portfolio Mora-project-ui bertugas menghubungkan interaksi pengguna dengan perubahan pada elemen HTML dan CSS. Kode menggunakan DOM selection untuk mencari elemen, event listener untuk merespons tindakan, IntersectionObserver untuk mendeteksi elemen yang masuk ke area layar, serta class dan inline style untuk mengubah tampilan.

Pemahaman alur tersebut membantu proses debugging: periksa apakah elemen HTML tersedia, apakah selector JavaScript cocok, apakah event berjalan, dan apakah CSS memiliki aturan untuk perubahan yang dilakukan JavaScript.
