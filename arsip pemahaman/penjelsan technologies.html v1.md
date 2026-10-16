# Dokumentasi HTML Halaman Technologies — Mora-project-ui

## 1. Struktur Dasar HTML

```html
<!DOCTYPE html>
<html lang="en">
```

- `<!DOCTYPE html>` memberi tahu browser bahwa dokumen menggunakan HTML5.
- `<html lang="en">` merupakan elemen utama HTML. Atribut `lang="en"` menandakan bahwa bahasa utama halaman adalah bahasa Inggris.

## 2. Bagian Head

Bagian `<head>` menyimpan metadata halaman, judul, dan tautan menuju file CSS yang digunakan.

### A. Pengaturan karakter

```html
<meta charset="UTF-8">
```

`UTF-8` memungkinkan browser menampilkan berbagai karakter, simbol, dan teks dengan benar.

### B. Pengaturan tampilan responsif

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

- `width=device-width` menyesuaikan lebar halaman dengan lebar perangkat.
- `initial-scale=1.0` menentukan skala awal halaman.

Pengaturan ini membantu halaman tampil dengan baik pada desktop maupun perangkat seluler.

### C. Favicon

```html
<link
    rel="icon"
    href="https://raw.githubusercontent.com/Mora-project-ui/portfolio/refs/heads/main/assets/icons/favicon/R-icon.png"
    type="image/png"
>
```

Favicon adalah ikon kecil yang biasanya muncul pada tab browser.

- `rel="icon"` menunjukkan fungsi file sebagai ikon website.
- `href` menentukan lokasi gambar ikon.
- `type="image/png"` menunjukkan format gambar PNG.

Ikon diambil dari repositori GitHub portfolio.

### D. Menghubungkan file CSS

```html
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/navbar.css">
<link rel="stylesheet" href="../css/technologies.css">
<link rel="stylesheet" href="../css/footer.css">
<link rel="stylesheet" href="../css/responsive.css">
```

Setiap file memiliki tanggung jawab berbeda:

- `style.css`: mengatur fondasi tampilan umum, seperti warna, tipografi, dan elemen global.
- `navbar.css`: mengatur tampilan navigasi.
- `technologies.css`: mengatur tampilan khusus halaman Technologies, termasuk daftar teknologi.
- `footer.css`: mengatur tampilan bagian footer.
- `responsive.css`: menyesuaikan tampilan berdasarkan ukuran layar.

Jalur `../css/` berarti browser naik satu tingkat dari folder halaman Technologies, kemudian masuk ke folder `css`.

Pemisahan file CSS membuat kode lebih terorganisasi dan lebih mudah dikembangkan.

### E. Judul halaman

```html
<title>Technologies — Mohammad Rama al-jannah</title>
```

Elemen `<title>` menentukan judul yang ditampilkan pada tab browser.

---

## 3. Bagian Body dan Scroll Progress

```html
<body>
    <div id="scroll-progress"></div>
```

Elemen `<body>` berisi komponen utama halaman.

Sementara itu, `scroll-progress` merupakan wadah indikator progres scroll. JavaScript dapat mengubah lebarnya berdasarkan posisi pengunjung saat menggulir halaman.

HTML menyediakan elemennya, sedangkan CSS dan JavaScript mengatur tampilan serta perilakunya.

---

## 4. Bagian Navigation

```html
<header>
    <nav>
        ...
    </nav>
</header>
```

- `<header>` menampung bagian kepala halaman.
- `<nav>` menandai kumpulan tautan navigasi.

### A. Nama proyek

```html
<a href="../index.html">
    <h2>Mora-project-ui</h2>
</a>
```

Nama proyek menjadi tautan menuju halaman utama portfolio.

Jalur `../index.html` berarti browser naik satu tingkat dari folder halaman, lalu membuka `index.html`.

### B. Tombol menu navigasi

```html
<button
    id="menu-toggle"
    aria-label="Toggle navigation menu"
>
    ☰
</button>
```

Tombol ini digunakan untuk membuka menu navigasi.

- `id="menu-toggle"` memungkinkan JavaScript menemukan tombol.
- `aria-label` memberikan nama yang dapat dikenali teknologi bantu.
- `☰` merupakan simbol menu.

### C. Tombol musik

```html
<button
    id="music-toggle"
    aria-label="Toggle background music"
>
    <span class="music-icon">🎵</span>

    <span class="equalizer">
        <i></i>
        <i></i>
        <i></i>
    </span>
</button>
```

Tombol ini menjadi kontrol musik latar.

- `music-toggle` merupakan ID tombol yang dipilih oleh JavaScript.
- `music-icon` menampung ikon musik yang dapat berubah.
- `equalizer` menampung tiga elemen `<i>` yang dapat diberi bentuk dan animasi melalui CSS.

JavaScript dapat mengubah ikon dan kelas tombol berdasarkan status pemutaran musik.

### D. Wadah menu navigasi

```html
<div class="nav-menu">
    ...
</div>
```

Kelas `nav-menu` mengelompokkan tautan navigasi yang dapat ditampilkan atau disembunyikan.

Tombol penutup menu menggunakan ID `menu-close`:

```html
<button
    id="menu-close"
    aria-label="Close navigation menu"
>
    ✕
</button>
```

Tombol ini digunakan untuk menutup menu yang sedang terbuka.

### E. Tautan navigasi internal

```html
<a href="../index.html">Home</a>
<a href="about.html">About</a>
<a href="projects.html">Projects</a>
<a href="technologies.html">Technologies</a>
<a href="contact.html">Contact</a>
```

Tautan tersebut mengarahkan pengunjung ke halaman Home, About, Projects, Technologies, dan Contact.

Karena halaman Technologies berada dalam folder yang sama dengan halaman About, Projects, dan Contact, jalur seperti `about.html` merujuk ke file dalam folder tersebut.

### F. Tautan repositori

```html
<a
    href="https://github.com/Mora-project-ui/portfolio"
    target="_blank"
>
    Web Repository
</a>
```

Tautan ini membuka repositori GitHub portfolio pada tab baru.

Atribut `target="_blank"` meminta browser membuka tautan dalam tab atau konteks penelusuran baru. Untuk praktik keamanan yang lebih baik, tautan eksternal dapat ditambahkan `rel="noopener noreferrer"`.

---

## 5. Bagian Background Music

```html
<audio id="background-music" loop>
    <source
        src="../assets/Backsound/DoubleTake.mp3"
        type="audio/mpeg"
    >
</audio>
```

Elemen `<audio>` menyediakan pemutar musik latar.

- `id="background-music"` memungkinkan JavaScript menemukan elemen audio.
- `loop` membuat audio mengulang setelah selesai.
- `<source>` menentukan file audio yang akan diputar.
- `src` menunjukkan lokasi file `DoubleTake.mp3`.
- `type="audio/mpeg"` menunjukkan format audio MPEG/MP3.

Jalur `../assets/Backsound/DoubleTake.mp3` berarti browser naik satu tingkat dari folder halaman Technologies, kemudian masuk ke folder `assets/Backsound/`.

Musik tidak otomatis diputar hanya karena elemen audio tersedia. JavaScript menggunakan tombol musik untuk mengontrol pemutaran dan jeda.

---

## 6. Bagian Main dan Technologies

```html
<main>
    <section
        id="Technologies"
        class="reveal-section"
    >
        ...
    </section>
</main>
```

- `<main>` menandai konten utama halaman.
- `<section>` mengelompokkan konten yang membahas satu topik.
- `id="Technologies"` memberikan identitas pada bagian Technologies.
- `class="reveal-section"` menandai bagian yang dapat diberi efek kemunculan melalui CSS dan JavaScript.

ID dan class memiliki fungsi berbeda. ID mengidentifikasi elemen tertentu, sedangkan class dapat digunakan oleh banyak elemen.

### A. Judul bagian

```html
<h2>Technologies</h2>
```

Elemen `<h2>` menampilkan judul bagian yang berisi daftar teknologi.

### B. Wadah daftar teknologi

```html
<div class="Technologies-list">
    ...
</div>
```

Kelas `Technologies-list` menjadi wadah bagi seluruh item teknologi.

CSS dapat menggunakan kelas ini untuk mengatur tata letak, jarak, ukuran ikon, warna, dan tampilan setiap item.

---

## 7. Struktur Item Teknologi

Setiap teknologi menggunakan pola HTML berikut:

```html
<span>
    <img
        src="lokasi-ikon.svg"
        alt="Nama Teknologi"
    >

    Nama Teknologi
</span>
```

Struktur tersebut memiliki dua komponen utama:

- `<img>` menampilkan ikon teknologi.
- Teks setelah gambar menampilkan nama teknologi.

Elemen `<span>` membungkus ikon dan teks agar keduanya dapat ditata sebagai satu item.

Berikut penjelasan setiap teknologi yang tercantum pada halaman.

### A. Linux

```html
<span>
    <img
        src="./../assets/icons/Operatingsystem/linux.svg"
        alt="Linux"
    >
    Linux
</span>
```

Item ini menampilkan ikon dan nama Linux.

File SVG diambil dari folder `assets/icons/Operatingsystem/` dalam proyek portfolio.

Jalur `./../` juga berarti naik satu tingkat dari direktori saat ini. Penulisannya dapat disederhanakan menjadi `../assets/icons/Operatingsystem/linux.svg`.

### B. VS Code

```html
<span>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/portfolio/refs/heads/main/assets/icons/FrontendDevelopment/vscode.svg"
        alt="VS Code"
    >
    VS Code
</span>
```

Item ini menampilkan ikon Visual Studio Code, yaitu editor kode yang dapat digunakan untuk menulis dan mengelola berbagai jenis proyek.

Ikonnya diambil dari URL GitHub, bukan dari jalur relatif lokal.

### C. Git

```html
<span>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/Other/git.svg"
        alt="Git"
    >
    Git
</span>
```

Item ini menampilkan ikon dan nama Git.

Git merupakan sistem kontrol versi yang digunakan untuk mencatat perubahan berkas, membandingkan revisi, dan membantu mengelola riwayat pengembangan proyek.

### D. Kotlin

```html
<span>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/MobileAppDevelopment/kotlin.svg"
        alt="Kotlin"
    >
    Kotlin
</span>
```

Item ini menampilkan ikon dan nama Kotlin, bahasa pemrograman yang dapat digunakan dalam pengembangan aplikasi Android dan berbagai kebutuhan pemrograman lainnya.

### E. Android Development

```html
<span>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/MobileAppDevelopment/android.svg"
        alt="Android"
    >
    Android Development
</span>
```

Item ini mewakili pengembangan aplikasi Android.

Ikonnya menggunakan file SVG yang diambil dari repositori GitHub. Teks `Android Development` menjelaskan bidang pengembangan yang dimaksud, bukan nama bahasa pemrograman.

### F. HTML

```html
<span>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/FrontendDevelopment/html.svg"
        alt="HTML"
    >
    HTML
</span>
```

Item ini menampilkan ikon dan nama HTML.

HTML digunakan untuk menyusun struktur dan konten halaman web, seperti judul, paragraf, gambar, tautan, dan bagian navigasi.

### G. CSS

```html
<span>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/portfolio/refs/heads/main/assets/icons/FrontendDevelopment/css3.svg"
        alt="CSS"
    >
    CSS
</span>
```

Item ini menampilkan ikon dan nama CSS.

CSS digunakan untuk mengatur tampilan halaman web, termasuk warna, ukuran, tata letak, responsivitas, dan animasi.

---

## 8. Cara Kerja Ikon Teknologi

Setiap ikon menggunakan elemen `<img>` dengan atribut `src` dan `alt`.

- `src` menentukan lokasi gambar yang akan dimuat.
- `alt` memberikan teks alternatif untuk gambar.

Pada halaman ini, sumber ikon menggunakan dua pola:

1. **Jalur relatif**, misalnya `../assets/icons/Operatingsystem/linux.svg`.
2. **URL GitHub**, misalnya URL yang diawali `https://raw.githubusercontent.com/`.

Jalur relatif mengambil file dari struktur folder proyek. Sementara itu, URL GitHub meminta browser mengambil file dari alamat eksternal.

Jika ikon tidak muncul, beberapa hal yang perlu diperiksa adalah URL, nama file, huruf besar-kecil pada nama folder, serta ketersediaan file di repositori.

---

## 9. Bagian Footer

```html
<footer>
    <div class="footer-content">
        ...
    </div>
</footer>
```

Footer merupakan bagian bawah halaman yang menampilkan identitas proyek, tautan eksternal, dan informasi hak cipta.

### A. Nama proyek

```html
<h3>Mora-project-ui</h3>
```

Menampilkan nama proyek pada bagian footer.

### B. Tagline

```html
<p class="footer-tagline">
    Building • Learning • Experimenting
</p>
```

Tagline ini menggambarkan aktivitas utama proyek: membangun, belajar, dan bereksperimen.

### C. Tautan eksternal

```html
<div class="footer-links">
    ...
</div>
```

Wadah ini mengelompokkan tautan ke GitHub, YouTube, dan Lynk.id.

Setiap tautan menggunakan `target="_blank"` untuk meminta browser membukanya di tab baru.

### D. Informasi hak cipta

```html
<p class="footer-copyright">
    © 2026 Mohammad Rama al-jannah
</p>
```

Menampilkan simbol hak cipta, tahun, dan nama yang dicantumkan sebagai pemilik portfolio.

---

## 10. Menghubungkan JavaScript

```html
<script src="../js/script.js"></script>
```

Baris ini menghubungkan halaman Technologies dengan file JavaScript utama.

JavaScript tersebut dapat menangani interaksi yang digunakan bersama halaman lain, seperti:

- Membuka dan menutup menu navigasi.
- Mengontrol musik latar.
- Menambahkan kelas animasi ketika elemen muncul saat scroll.
- Mengubah tampilan header ketika halaman digulir.
- Memperbarui indikator progres scroll.

Script diletakkan di akhir `<body>` agar elemen HTML utama tersedia ketika JavaScript dijalankan.

---

## 11. Hubungan HTML, CSS, dan JavaScript

| Teknologi | Peran pada halaman Technologies |
|---|---|
| HTML | Menyusun daftar teknologi, ikon, dan nama setiap item |
| CSS | Mengatur ukuran ikon, jarak, tata letak, warna, dan responsivitas |
| JavaScript | Menangani navigasi, musik, scroll, dan interaksi lainnya |

Sebagai contoh, HTML menyediakan item Linux dengan gambar dan teks. CSS mengatur bagaimana item tersebut terlihat dan tersusun di layar. JavaScript dapat memberikan efek kemunculan saat item masuk ke area pandang pengunjung.

Ketiganya bekerja bersama untuk membentuk halaman Technologies.

---

## 12. Catatan Perbaikan

Beberapa hal yang dapat diperiksa atau ditingkatkan:

1. **Konsistensi penamaan:** `id="Technologies"` dan `class="Technologies-list"` menggunakan huruf kapital. Nama tersebut valid, tetapi sebaiknya dipertimbangkan menggunakan `technologies` dan `technologies-list` agar konsisten dengan kebiasaan penamaan class dan ID di proyek web.
2. **Periksa selector JavaScript:** selector CSS seperti `.Technologies-list` peka terhadap huruf besar-kecil. Jika JavaScript menggunakan `.Technologies-list`, penulisannya harus sama persis dengan class HTML.
3. **Penyederhanaan jalur:** `./../assets/...` dapat ditulis sebagai `../assets/...`.
4. **Sumber ikon:** ikon yang berasal dari URL GitHub bergantung pada ketersediaan file dan koneksi internet. Menyimpan aset secara lokal dapat membantu mengurangi ketergantungan pada sumber eksternal.
5. **Aksesibilitas ikon:** jika nama teknologi sudah tersedia sebagai teks di samping ikon, pertimbangkan `alt=""` untuk ikon yang hanya bersifat dekoratif agar screen reader tidak membacakan informasi yang sama dua kali.
6. **Keamanan tautan eksternal:** pertimbangkan menambahkan `rel="noopener noreferrer"` pada tautan yang menggunakan `target="_blank"`.
7. **Animasi:** pastikan `.reveal-section` memiliki aturan CSS yang sesuai agar efek kemunculan berjalan seperti yang diharapkan.

## Kesimpulan

HTML halaman Technologies pada portfolio Mora-project-ui digunakan untuk menampilkan daftar teknologi yang berkaitan dengan aktivitas pengembangan proyek.

Setiap item memiliki ikon dan nama teknologi. Daftar tersebut mencakup Linux, VS Code, Git, Kotlin, Android Development, HTML, dan CSS.

Struktur menggunakan elemen `<span>` sebagai wadah item serta `<img>` untuk menampilkan ikon. CSS mengatur tampilan daftar, sedangkan JavaScript menangani interaksi umum halaman.

Dokumentasi ini dapat digunakan sebagai arsip pemahaman kode dan referensi saat menambahkan teknologi baru ke portfolio di masa mendatang.
