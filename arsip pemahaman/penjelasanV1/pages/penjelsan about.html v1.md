# Dokumentasi HTML Halaman About — Mora-project-ui

## 1. Struktur Dasar HTML

```html
<!DOCTYPE html>
<html lang="en">
```

- `<!DOCTYPE html>` memberi tahu browser bahwa dokumen menggunakan HTML5.
- `<html lang="en">` merupakan elemen utama HTML. Atribut `lang="en"` menandakan bahwa bahasa utama halaman adalah bahasa Inggris.

## 2. Bagian Head

Bagian `<head>` menyimpan informasi tentang halaman web yang tidak langsung ditampilkan sebagai konten utama.

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
- `initial-scale=1.0` menentukan skala awal halaman saat dibuka.

Pengaturan ini membantu halaman tampil dengan baik di perangkat desktop maupun ponsel.

### C. Favicon

```html
<link
    rel="icon"
    href="https://raw.githubusercontent.com/Mora-project-ui/portfolio/refs/heads/main/assets/icons/favicon/R-icon.png"
    type="image/png"
>
```

Favicon adalah ikon kecil yang biasanya muncul di tab browser.

- `rel="icon"` menunjukkan bahwa file yang ditautkan berfungsi sebagai ikon website.
- `href` menentukan lokasi file ikon.
- `type="image/png"` menunjukkan format gambar yang digunakan.

Karena menggunakan URL GitHub, browser mengambil ikon dari repositori tersebut.

### D. Menghubungkan file CSS

```html
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/navbar.css">
<link rel="stylesheet" href="../css/about.css">
<link rel="stylesheet" href="../css/footer.css">
<link rel="stylesheet" href="../css/responsive.css">
```

Setiap file CSS bertanggung jawab atas bagian tampilan yang berbeda:

- `style.css`: fondasi tampilan umum, seperti warna, tipografi, dan elemen global.
- `navbar.css`: tampilan navigasi.
- `about.css`: tampilan khusus halaman About.
- `footer.css`: tampilan bagian footer.
- `responsive.css`: penyesuaian tampilan untuk berbagai ukuran layar.

Penulisan `../css/` berarti browser naik satu tingkat dari folder halaman saat ini, kemudian masuk ke folder `css`.

Pemisahan CSS membuat kode lebih terorganisasi dan lebih mudah dirawat.

### E. Judul halaman

```html
<title>About — Mohammad Rama al-jannah</title>
```

Elemen `<title>` menentukan judul yang ditampilkan pada tab browser dan digunakan sebagai judul halaman dalam berbagai konteks browser.

---

## 3. Bagian Body

Elemen `<body>` berisi komponen yang membentuk halaman dan berinteraksi dengan pengunjung.

### A. Indikator progres scroll

```html
<div id="scroll-progress"></div>
```

Elemen ini menjadi wadah untuk indikator progres ketika pengunjung menggulir halaman.

ID `scroll-progress` memungkinkan JavaScript memilih elemen tersebut dan mengubah lebarnya sesuai posisi scroll.

HTML hanya menyediakan elemennya. Tampilan dan pergerakannya ditentukan oleh CSS serta JavaScript.

---

## 4. Bagian Navigation

Navigasi berada di dalam elemen `<header>` dan `<nav>`.

```html
<header>
    <nav>
        ...
    </nav>
</header>
```

- `<header>` menampung bagian kepala halaman.
- `<nav>` menandai bagian yang berisi tautan navigasi.

### A. Tautan kembali ke halaman utama

```html
<a href="../index.html">
    <h2>Mora-project-ui</h2>
</a>
```

Elemen `<a>` membuat teks atau elemen di dalamnya menjadi tautan.

`href="../index.html"` mengarahkan pengunjung kembali ke halaman utama. Jalur relatif tersebut naik satu tingkat dari folder halaman About.

Elemen `<h2>` menampilkan nama proyek sebagai judul.

### B. Tombol menu navigasi

```html
<button
    id="menu-toggle"
    aria-label="Toggle navigation menu"
>
    ☰
</button>
```

Tombol ini digunakan untuk membuka menu navigasi, terutama pada tampilan yang membutuhkan menu ringkas.

- `id="menu-toggle"` memungkinkan JavaScript menemukan tombol.
- `aria-label` memberikan nama yang dapat dibaca teknologi bantu, seperti screen reader.
- `☰` merupakan simbol menu.

Tombol ini membutuhkan JavaScript untuk menjalankan aksi membuka menu.

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

Tombol ini menjadi kontrol untuk musik latar.

- `music-toggle` merupakan ID tombol yang dipilih oleh JavaScript.
- `music-icon` menampung ikon musik yang dapat diubah.
- `equalizer` menampung tiga elemen `<i>` yang bisa diberi animasi menyerupai equalizer audio.

Elemen `<i>` di sini tidak harus berfungsi sebagai ikon bawaan. CSS dapat mengubahnya menjadi garis atau batang animasi.

### D. Wadah menu navigasi

```html
<div class="nav-menu">
    ...
</div>
```

Kelas `nav-menu` menandai kumpulan tautan navigasi yang bisa ditampilkan atau disembunyikan melalui CSS dan JavaScript.

#### Tombol menutup menu

```html
<button
    id="menu-close"
    aria-label="Close navigation menu"
>
    ✕
</button>
```

Tombol ini digunakan untuk menutup menu yang sedang terbuka.

JavaScript memilihnya melalui ID `menu-close`, kemudian menghapus kelas yang menandakan menu sedang terbuka.

#### Tautan navigasi internal

```html
<a href="../index.html">Home</a>
<a href="about.html">About</a>
<a href="projects.html">Projects</a>
<a href="technologies.html">Technologies</a>
<a href="contact.html">Contact</a>
```

Setiap tautan mengarahkan pengunjung ke halaman tertentu.

- `../index.html`: kembali ke halaman utama.
- `about.html`: membuka halaman About.
- `projects.html`: membuka halaman Projects.
- `technologies.html`: membuka halaman Technologies.
- `contact.html`: membuka halaman Contact.

Tautan menggunakan jalur relatif. Browser akan mencari file berdasarkan lokasi halaman saat ini.

#### Tautan repositori GitHub

```html
<a
    href="https://github.com/Mora-project-ui/portfolio"
    target="_blank"
>
    Web Repository
</a>
```

Tautan ini membuka repositori GitHub portfolio.

`target="_blank"` meminta browser membuka tautan di tab atau konteks penelusuran baru.

Untuk praktik keamanan yang lebih baik, tautan eksternal yang memakai `target="_blank"` dapat ditambahkan atribut `rel="noopener noreferrer"`.

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

Elemen `<audio>` menyediakan pemutar audio HTML.

- `id="background-music"` memungkinkan JavaScript menemukan pemutar musik.
- `loop` membuat audio mengulang kembali setelah selesai.
- `<source>` menentukan file audio yang akan diputar.
- `src` berisi lokasi file `DoubleTake.mp3`.
- `type="audio/mpeg"` menunjukkan bahwa file audio menggunakan format MPEG/MP3.

Jalur `../assets/Backsound/DoubleTake.mp3` berarti browser naik satu tingkat dari folder halaman About, lalu masuk ke `assets/Backsound/`.

Musik tidak otomatis diputar hanya karena elemen audio tersedia. JavaScript pada proyek ini menggunakan tombol musik untuk memanggil fungsi pemutaran atau jeda.

---

## 6. Bagian Main dan About Me

```html
<main>
    <section id="about" class="reveal-section">
        ...
    </section>
</main>
```

- `<main>` menandai konten utama halaman.
- `<section>` mengelompokkan konten yang membahas satu topik.
- `id="about"` memberikan identitas unik pada bagian About.
- `class="reveal-section"` menandai bagian yang dapat diberi efek kemunculan melalui CSS dan JavaScript.

Kelas `reveal-section` harus memiliki aturan CSS yang sesuai agar efek animasinya terlihat.

### A. Judul bagian

```html
<h2>About Me</h2>
```

Elemen `<h2>` digunakan sebagai judul bagian yang menjelaskan isi halaman.

### B. Paragraf pertama

```html
<p>
    I'm a beginner developer who enjoys exploring Linux, web development,
    Android development, shell scripting, and GitHub. I learn mostly through hands-on projects,
    experimentation,and solving problems as they come.
</p>
```

Elemen `<p>` digunakan untuk menampilkan paragraf.

Paragraf ini memperkenalkan pemilik portfolio sebagai developer pemula yang tertarik mempelajari Linux, pengembangan web, Android, shell scripting, dan GitHub melalui praktik langsung.

Ada sedikit masalah format pada teks `experimentation,and`. Sebaiknya diberi spasi setelah koma menjadi `experimentation, and`.

### C. Paragraf kedua

```html
<p>
    My projects range from Linux customization and GRUB themes to websites, browser extensions,
    and Android experiments. I enjoy understanding how things work rather than simply making them work.
</p>
```

Paragraf ini menjelaskan jenis proyek yang dikerjakan dan pendekatan belajar yang digunakan: memahami cara kerja sesuatu, bukan sekadar membuatnya berfungsi.

### D. Paragraf ketiga

```html
<p>
    This portfolio documents the projects I've built, the experiments I've tried, and what I've learned along the way.
</p>
```

Paragraf ini menjelaskan tujuan portfolio, yaitu mendokumentasikan proyek, eksperimen, dan hasil pembelajaran.

Ketiga paragraf tersebut membentuk isi utama halaman About Me.

---

## 7. Bagian Footer

Footer merupakan bagian bawah halaman yang berisi identitas proyek, tautan eksternal, dan informasi hak cipta.

```html
<footer>
    <div class="footer-content">
        ...
    </div>
</footer>
```

- `<footer>` menandai bagian penutup halaman.
- `footer-content` mengelompokkan seluruh isi footer agar mudah diatur melalui CSS.

### A. Nama proyek

```html
<h3>Mora-project-ui</h3>
```

Menampilkan nama proyek atau identitas portfolio pada bagian bawah halaman.

### B. Tagline

```html
<p class="footer-tagline">
    Building • Learning • Experimenting
</p>
```

Menampilkan tagline yang menggambarkan aktivitas utama proyek: membangun, belajar, dan bereksperimen.

Kelas `footer-tagline` memungkinkan CSS memberikan tampilan khusus pada teks ini.

### C. Tautan eksternal

```html
<div class="footer-links">
    ...
</div>
```

Wadah `footer-links` mengelompokkan tautan menuju platform lain.

Tautan yang digunakan:

- **GitHub:** menuju profil GitHub.
- **YouTube:** menuju kanal YouTube.
- **Lynk.id:** menuju halaman Lynk.id.

Setiap tautan menggunakan `target="_blank"` agar dibuka di tab baru.

Catatan: teks `Lynk,ID` dapat diperbaiki menjadi `Lynk.id` agar penulisannya konsisten dengan nama layanan.

### D. Informasi hak cipta

```html
<p class="footer-copyright">
    © 2026 Mohammad Rama al-jannah
</p>
```

Simbol `©` merupakan simbol hak cipta. Paragraf ini menampilkan tahun dan nama yang dicantumkan sebagai pemilik portfolio.

---

## 8. Menghubungkan JavaScript

```html
<script src="../js/script.js"></script>
```

Baris ini menghubungkan halaman About dengan file JavaScript utama.

Jalur `../js/script.js` berarti browser naik satu tingkat dari folder halaman About, lalu mencari file `script.js` di folder `js`.

JavaScript tersebut menangani interaksi yang digunakan bersama halaman lain, seperti:

- Membuka dan menutup menu navigasi.
- Mengontrol musik latar.
- Menambahkan kelas ketika elemen muncul saat scroll.
- Mengubah tampilan header ketika halaman digulir.
- Mengatur lebar indikator progres scroll.

Script ditempatkan menjelang akhir `<body>` agar elemen HTML utama sudah tersedia ketika JavaScript dijalankan.

---

## 9. Hubungan HTML, CSS, dan JavaScript

Ketiga teknologi ini bekerja bersama, tetapi memiliki tugas yang berbeda.

| Teknologi | Tugas utama |
|---|---|
| HTML | Menyusun struktur dan konten halaman |
| CSS | Mengatur warna, ukuran, posisi, responsivitas, dan animasi visual |
| JavaScript | Mengatur interaksi, perubahan kelas, kontrol audio, dan respons terhadap scroll |

Contohnya, tombol menu dibuat menggunakan HTML, tampilan menu terbuka diatur oleh CSS, sedangkan JavaScript menambahkan atau menghapus kelas `open`.

Dengan pembagian tersebut, struktur, tampilan, dan perilaku halaman dapat dikelola secara terpisah.

---

## 10. Catatan Perbaikan

Beberapa hal yang dapat diperiksa atau ditingkatkan:

1. **Konsistensi bahasa:** `lang="en"` sudah sesuai karena konten halaman ditulis dalam bahasa Inggris.
2. **Spasi teks:** perbaiki `experimentation,and` menjadi `experimentation, and`.
3. **Keamanan tautan eksternal:** pertimbangkan `rel="noopener noreferrer"` untuk tautan yang menggunakan `target="_blank"`.
4. **Aksesibilitas menu:** pastikan status buka/tutup menu juga dapat dikenali teknologi bantu, misalnya dengan memperbarui `aria-expanded` melalui JavaScript.
5. **Aksesibilitas audio:** pastikan tombol musik memberi informasi status yang benar dan pengguna bisa menjeda audio.
6. **Jalur file:** pastikan seluruh file CSS, JavaScript, gambar, dan audio benar-benar tersedia pada lokasi yang dirujuk.
7. **Efek animasi:** pastikan kelas `reveal-section` memiliki aturan CSS yang sesuai dan konten tetap bisa diakses apabila animasi tidak berjalan.

## Kesimpulan

HTML halaman About pada portfolio Mora-project-ui bertugas menampilkan informasi tentang pemilik proyek, menyediakan navigasi ke halaman lain, menghubungkan musik latar, serta menampilkan footer.

Struktur ini memanfaatkan elemen HTML semantik, atribut ID dan class untuk menghubungkan elemen dengan CSS maupun JavaScript, serta jalur relatif untuk mengakses file dalam repositori.

Dokumentasi ini dapat digunakan sebagai arsip untuk memahami struktur halaman dan sebagai referensi ketika mengembangkan atau memperbaiki portfolio di kemudian hari.
