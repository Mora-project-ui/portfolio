# Dokumentasi HTML Portfolio Mora-project-ui

## 1. Struktur Dasar HTML

```html
<!DOCTYPE html>
<html lang="en">
```

- `<!DOCTYPE html>` memberi tahu browser bahwa dokumen menggunakan HTML5.
- `<html lang="en">` merupakan elemen utama dokumen HTML. Atribut `lang="en"` menandakan bahwa bahasa utama halaman adalah bahasa Inggris.

## 2. Bagian Head

Elemen `<head>` berisi informasi tentang halaman web, seperti pengaturan karakter, tampilan responsif, ikon website, file CSS, dan judul halaman.

### Pengaturan karakter

```html
<meta charset="UTF-8">
```

`UTF-8` memungkinkan browser menampilkan berbagai karakter, simbol, dan teks dengan benar.

### Pengaturan tampilan responsif

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

Pengaturan ini membuat lebar halaman mengikuti lebar perangkat yang digunakan. Dengan demikian, website dapat menyesuaikan tampilannya pada layar desktop maupun smartphone.

### Favicon

```html
<link
    rel="icon"
    href="https://raw.githubusercontent.com/Mora-project-ui/portfolio/refs/heads/main/assets/icons/favicon/R-icon.png"
    type="image/png"
>
```

Favicon adalah ikon kecil yang biasanya terlihat pada tab browser. Atribut `href` menentukan lokasi gambar ikon, sedangkan `type="image/png"` menunjukkan format gambarnya.

### Menghubungkan file CSS

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="css/home.css">
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/responsive.css">
```

Setiap file CSS memiliki tanggung jawab masing-masing:

- `style.css`: gaya umum website.
- `navbar.css`: tampilan navigasi.
- `home.css`: tampilan halaman utama.
- `footer.css`: tampilan bagian footer.
- `responsive.css`: penyesuaian tampilan pada berbagai ukuran layar.

Pemisahan CSS membantu menjaga kode tetap terorganisasi dan memudahkan proses perbaikan.

### Judul halaman

```html
<title>Mohammad Rama al-jannah</title>
```

Elemen `<title>` menentukan judul halaman yang biasanya ditampilkan pada tab browser.

## 3. Page Loader

```html
<div class="page-loader">
    <div class="loader"></div>
    <p>Loading Bentar Ya...</p>
</div>
```

Bagian ini menyediakan tampilan loading ketika website sedang dipersiapkan.

- `.page-loader` adalah wadah utama loading.
- `.loader` merupakan elemen yang dapat dibentuk menjadi animasi loading menggunakan CSS.
- Teks `Loading Bentar Ya...` memberikan informasi kepada pengunjung bahwa halaman sedang dimuat.

HTML hanya menyediakan strukturnya. Animasi dan tampilan loading ditentukan oleh CSS, sedangkan proses menampilkan atau menyembunyikannya dapat dikendalikan oleh JavaScript.

## 4. Scroll Progress

```html
<div id="scroll-progress"></div>
```

Elemen ini digunakan sebagai indikator kemajuan scroll halaman.

CSS dapat menentukan bentuk, warna, dan posisinya. JavaScript dapat menghitung posisi scroll pengguna dan memperbarui lebar indikator agar menunjukkan seberapa jauh halaman telah digulir.

## 5. Header dan Navbar

```html
<header>
    <nav>
        <a href="https://mora-project-ui.github.io/portfolio/">
            <h2>Mora-project-ui</h2>
        </a>
    </nav>
</header>
```

- `<header>` merupakan bagian kepala halaman.
- `<nav>` menandai area navigasi.
- `<a>` membuat tautan yang dapat diklik.
- `<h2>` menampilkan nama website sebagai judul.

Karena judul berada di dalam elemen `<a>`, pengunjung dapat mengeklik nama website untuk kembali ke halaman portfolio.

### Tombol menu

```html
<div class="nav-controls">
    <button
        id="menu-toggle"
        aria-label="Toggle navigation menu"
    >
        ☰
    </button>
</div>
```

Tombol ini digunakan untuk membuka atau menampilkan menu navigasi.

- `id="menu-toggle"` memberikan identitas unik agar CSS atau JavaScript dapat menemukan tombol tersebut.
- `aria-label` menyediakan nama yang dapat dibaca teknologi bantu.
- Simbol `☰` merupakan ikon menu yang terlihat oleh pengguna.

Perilaku membuka dan menutup menu perlu diatur melalui JavaScript dan CSS.

### Tombol musik

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

- `.music-icon` menampilkan ikon musik.
- `.equalizer` merupakan wadah animasi visual yang menyerupai indikator suara.
- Tiga elemen `<i>` dapat dibentuk menjadi batang equalizer menggunakan CSS.

Tombol ini tidak otomatis memutar musik hanya karena HTML-nya tersedia. JavaScript perlu menghubungkannya dengan elemen audio dan mengatur status musik.

### Menu navigasi

```html
<div class="nav-menu">
    <button id="menu-close" aria-label="Close navigation menu">
        ✕
    </button>

    <a href="pages/about.html">About</a>
    <a href="pages/projects.html">Projects</a>
    <a href="pages/technologies.html">Technologies</a>
    <a href="pages/contact.html">Contact</a>

    <a
        href="https://github.com/Mora-project-ui/portfolio"
        target="_blank"
    >
        Web Repository
    </a>
</div>
```

`nav-menu` menampung tautan menuju halaman lain dan repositori GitHub.

- `pages/about.html`: halaman About.
- `pages/projects.html`: halaman Projects.
- `pages/technologies.html`: halaman Technologies.
- `pages/contact.html`: halaman Contact.
- Tautan Web Repository membuka repositori kode website.

Atribut `target="_blank"` meminta browser membuka tautan pada tab atau konteks baru. Untuk tautan eksternal seperti ini, atribut `rel="noopener noreferrer"` juga baik ditambahkan.

Tombol `menu-close` disediakan untuk menutup menu navigasi.

## 6. Background Music

```html
<audio id="background-music" loop>
    <source
        type="audio/mpeg"
    >
</audio>
```

Elemen `<audio>` menyediakan pemutar audio pada halaman.

- `id="background-music"` memungkinkan JavaScript mengakses elemen audio.
- `loop` membuat audio berulang ketika pemutaran mencapai akhir.
- `<source>` digunakan untuk menentukan sumber file audio.
- `type="audio/mpeg"` menunjukkan jenis audio MPEG, misalnya MP3.

**Catatan:** pada kode ini, atribut `src` belum aktif karena barisnya dikomentari. Akibatnya, browser belum memiliki lokasi file audio yang bisa diputar.

Contoh penulisan jika file musik tersedia:

```html
<source
    src="./assets/Backsound/DoubleTake.mp3"
    type="audio/mpeg"
>
```

Musik tetap perlu dikendalikan melalui JavaScript. Browser juga dapat membatasi pemutaran otomatis sampai pengguna melakukan interaksi.

## 7. Main Content dan Hero Section

```html
<main>
    <section id="hero">
        <div class="hero-content">
            ...
        </div>
    </section>
</main>
```

- `<main>` menampung konten utama halaman.
- `<section>` mengelompokkan bagian halaman yang memiliki tujuan tertentu.
- `id="hero"` memberikan identitas pada bagian hero.
- `.hero-content` menjadi wadah untuk mengatur susunan teks dan gambar.

Hero merupakan bagian utama yang pertama kali memperkenalkan pemilik portfolio kepada pengunjung.

### Teks perkenalan

```html
<div class="hero-text">
    <p class="eyebrow">Hello, I'm</p>

    <h1>Mohammad Rama</h1>

    <h2>Linux tinkerer & project builder</h2>

    <p class="hero-description">
        I build small projects, experiment with Linux, and learn by figuring things out hands-on.
        My work ranges from system customization and browser extensions to web and Android projects.
    </p>
</div>
```

Fungsi masing-masing elemen:

- `.hero-text`: wadah untuk semua teks perkenalan.
- `.eyebrow`: teks pendek sebagai pengantar sebelum nama.
- `<h1>`: judul utama halaman, yaitu nama pemilik portfolio.
- `<h2>`: menjelaskan fokus atau identitas pemilik portfolio.
- `.hero-description`: memberikan deskripsi lebih lanjut mengenai minat dan proyek yang dikerjakan.

Penggunaan kelas seperti `.hero-text` dan `.hero-description` memudahkan CSS memberikan gaya berbeda pada setiap bagian.

### Tombol hero

```html
<div class="hero-buttons">
    <a href="pages/about.html">About Me</a>
    <a href="pages/projects.html">My Projects</a>
    <a href="pages/technologies.html">My Tool</a>
    <a href="pages/contact.html">Contact</a>
    <a href="https://lynk.id/ramlvoe" target="_blank">ShortCut</a>
</div>
```

Bagian ini menyediakan akses cepat menuju halaman penting website dan layanan eksternal.

Elemen `<a>` digunakan karena setiap tombol mengarahkan pengunjung ke URL tertentu. Tampilan tautan dapat diubah melalui CSS agar terlihat seperti tombol.

### Gambar profil

```html
<div class="hero-image">
    <img
        src="assets/pp-gerak.gif"
        alt="Mohammad Rama"
    >
</div>
```

- `.hero-image` menjadi wadah gambar.
- `<img>` menampilkan gambar atau GIF.
- `src` menentukan lokasi file gambar.
- `alt` memberikan deskripsi alternatif apabila gambar tidak dapat ditampilkan dan membantu pengguna pembaca layar.

File `pp-gerak.gif` merupakan gambar profil bergerak yang disimpan di dalam folder `assets`.

## 8. Footer

```html
<footer>
    <div class="footer-content">
        <h3>Mora-project-ui</h3>

        <p class="footer-tagline">
            Building • Learning • Experimenting
        </p>

        <div class="footer-links">
            ...
        </div>

        <p class="footer-copyright">
            © 2026 Mohammad Rama al-jannah
        </p>
    </div>
</footer>
```

Footer adalah bagian penutup halaman yang biasanya berisi identitas website, tautan eksternal, dan informasi hak cipta.

### Tagline

```html
<p class="footer-tagline">
    Building • Learning • Experimenting
</p>
```

Tagline menggambarkan prinsip pengembangan proyek: membuat sesuatu, belajar, dan bereksperimen.

### Tautan footer

Bagian `.footer-links` berisi tautan menuju GitHub, YouTube, dan Lynk.id.

Tautan ini memudahkan pengunjung menemukan profil dan platform lain milik pemilik portfolio.

### Hak cipta

```html
<p class="footer-copyright">
    © 2026 Mohammad Rama al-jannah
</p>
```

Bagian ini menampilkan simbol hak cipta, tahun, dan nama pemilik portfolio.

## 9. Menghubungkan JavaScript

```html
<script src="js/script.js"></script>
```

Baris ini menghubungkan file JavaScript eksternal ke halaman HTML.

File `js/script.js` dapat digunakan untuk mengatur perilaku interaktif, seperti:

- Membuka dan menutup menu navigasi.
- Mengaktifkan atau menonaktifkan musik latar.
- Mengubah indikator scroll.
- Mengendalikan tampilan page loader.
- Menjalankan animasi atau interaksi lain.

Karena skrip diletakkan menjelang akhir elemen `<body>`, browser telah memproses sebagian besar struktur HTML sebelum menjalankan skrip tersebut.

## 10. Hubungan HTML, CSS, JavaScript, dan Assets

Keempat komponen ini memiliki tugas yang berbeda tetapi saling berhubungan.

**HTML — Struktur**

Menentukan elemen yang tersedia, seperti navbar, tombol, teks, gambar, audio, dan footer.

**CSS — Tampilan**

Mengatur warna, ukuran, posisi, jarak, layout, animasi visual, dan responsivitas website.

**JavaScript — Perilaku**

Mengatur apa yang terjadi ketika pengguna mengeklik tombol, menggulir halaman, mengaktifkan musik, atau berinteraksi dengan menu.

**Assets — Sumber daya**

Menyimpan atau menyediakan gambar, GIF, ikon, font, audio, dan file lain yang digunakan website.

Contoh hubungan keempatnya pada tombol musik:

1. HTML membuat tombol `music-toggle` dan elemen audio `background-music`.
2. CSS mengatur bentuk tombol dan animasi equalizer.
3. JavaScript mengatur pemutaran audio ketika tombol ditekan.
4. File MP3 menjadi sumber suara yang diputar.

## 11. Hal yang Perlu Diperhatikan

- Pastikan jalur file CSS, JavaScript, gambar, dan halaman HTML sesuai dengan struktur folder repositori.
- Perhatikan perbedaan path relatif dan URL absolut. Path seperti `css/style.css` dihitung relatif terhadap lokasi halaman HTML saat ini.
- Elemen audio pada kode saat ini belum mempunyai sumber aktif karena atribut `src` masih dikomentari.
- `id` sebaiknya unik pada satu halaman, sedangkan `class` dapat digunakan berulang kali.
- Jangan hanya mengandalkan CSS untuk interaksi tombol; perilaku seperti membuka menu atau memutar musik membutuhkan JavaScript.
- Periksa tampilan pada desktop dan smartphone untuk memastikan layout tetap nyaman digunakan.
- Pastikan file eksternal dan aset yang dipakai dapat diakses, terutama jika website di-hosting melalui GitHub Pages.

## Kesimpulan

HTML portfolio Mora-project-ui berfungsi sebagai kerangka utama website. Dokumen ini menyusun informasi halaman, menghubungkan file CSS, menyediakan navbar dan kontrol musik, menampilkan hero section, serta menambahkan footer dan JavaScript.

Pemisahan struktur, tampilan, perilaku, dan aset membuat proyek lebih mudah dikelola. Jika suatu elemen tidak tampil sesuai harapan, pemeriksaan dapat dimulai dari HTML untuk memastikan elemennya tersedia, CSS untuk memastikan tampilannya benar, lalu JavaScript untuk memeriksa perilakunya.
