# Dokumentasi HTML Halaman Projects — Mora-project-ui

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

Favicon merupakan ikon kecil yang biasanya muncul pada tab browser.

- `rel="icon"` menunjukkan bahwa file tersebut berfungsi sebagai ikon website.
- `href` menentukan lokasi gambar ikon.
- `type="image/png"` menunjukkan format gambar PNG.

Ikon diambil langsung dari repositori GitHub.

### D. Menghubungkan file CSS

```html
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/navbar.css">
<link rel="stylesheet" href="../css/projects.css">
<link rel="stylesheet" href="../css/responsive.css">
<link rel="stylesheet" href="../css/footer.css">
```

Setiap file CSS memiliki tanggung jawab yang berbeda:

- `style.css`: mengatur fondasi tampilan umum, seperti warna, tipografi, dan elemen global.
- `navbar.css`: mengatur tampilan navigasi.
- `projects.css`: mengatur tampilan khusus halaman Projects, termasuk kartu proyek.
- `responsive.css`: menyesuaikan tampilan berdasarkan ukuran layar.
- `footer.css`: mengatur tampilan bagian footer.

Jalur `../css/` berarti browser naik satu tingkat dari folder halaman Projects, kemudian masuk ke folder `css`.

Pemisahan file CSS membuat kode lebih terorganisasi dan memudahkan pengembangan di kemudian hari.

### E. Judul halaman

```html
<title>Projects — Mohammad Rama al-jannah</title>
```

Elemen `<title>` menentukan judul yang ditampilkan pada tab browser.

---

## 3. Bagian Body dan Scroll Progress

```html
<body>
    <div id="scroll-progress"></div>
```

Elemen `<body>` berisi komponen utama yang membentuk halaman.

Sementara itu, `scroll-progress` merupakan wadah indikator progres scroll. JavaScript dapat mengubah lebarnya berdasarkan seberapa jauh pengunjung menggulir halaman.

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

Nama proyek dibuat sebagai tautan menuju halaman utama portfolio.

Jalur `../index.html` berarti browser naik satu tingkat dari folder `pages`, lalu membuka file `index.html`.

### B. Tombol menu

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

JavaScript menangani aksi membuka menu, sedangkan CSS menentukan tampilannya.

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

Tombol ini digunakan untuk mengontrol musik latar.

- `music-toggle` merupakan ID tombol.
- `music-icon` menampung ikon musik.
- `equalizer` menampung tiga elemen `<i>` yang dapat diberi bentuk dan animasi melalui CSS.

JavaScript dapat mengubah ikon dan kelas tombol sesuai status pemutaran musik.

### D. Menu navigasi

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

Tombol tersebut digunakan untuk menutup menu yang sedang terbuka.

### E. Tautan navigasi

```html
<a href="../index.html">Home</a>
<a href="./about.html">About</a>
<a href="./projects.html">Projects</a>
<a href="./technologies.html">Technologies</a>
<a href="./contact.html">Contact</a>
```

Tautan tersebut mengarahkan pengunjung ke halaman utama, About, Projects, Technologies, dan Contact.

Pada halaman Projects, `./about.html` dan `about.html` sama-sama mengarah ke file About dalam folder yang sama. Awalan `./` secara eksplisit menunjukkan direktori saat ini.

Tautan repositori menggunakan URL eksternal:

```html
<a
    href="https://github.com/Mora-project-ui/portfolio"
    target="_blank"
>
    Web Repository
</a>
```

`target="_blank"` meminta browser membuka repositori pada tab baru.

Untuk praktik keamanan yang lebih baik, tautan eksternal dapat ditambahkan atribut `rel="noopener noreferrer"`.

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

- `id="background-music"` memungkinkan JavaScript memilih pemutar audio.
- `loop` membuat audio mengulang setelah selesai.
- `<source>` menentukan file audio yang akan diputar.
- `src` menunjukkan lokasi file `DoubleTake.mp3`.
- `type="audio/mpeg"` menunjukkan format audio MPEG/MP3.

Jalur `../assets/Backsound/DoubleTake.mp3` berarti browser naik satu tingkat dari folder halaman Projects, lalu masuk ke folder `assets/Backsound/`.

Musik tidak otomatis diputar hanya karena elemen audio tersedia. JavaScript menggunakan tombol musik untuk mengontrol pemutaran dan jeda.

---

## 6. Bagian Main Content

```html
<main>
    <section
        id="projects"
        class="reveal-section"
    >
        ...
    </section>
</main>
```

- `<main>` menandai konten utama halaman.
- `<section>` mengelompokkan konten yang membahas satu topik.
- `id="projects"` memberikan identitas unik pada bagian Projects.
- `class="reveal-section"` menandai bagian yang dapat diberi efek kemunculan melalui CSS dan JavaScript.

Agar efek animasi terlihat, kelas `reveal-section` harus memiliki aturan CSS yang sesuai.

### A. Judul Projects

```html
<h2>Projects</h2>
```

Elemen `<h2>` menampilkan judul bagian yang berisi daftar proyek.

### B. Wadah daftar proyek

```html
<div class="project-list">
    ...
</div>
```

Kelas `project-list` menjadi wadah bagi seluruh kartu proyek.

CSS dapat menggunakan kelas ini untuk mengatur susunan kartu, jarak antarkartu, dan tata letak responsif.

---

## 7. Struktur Project Card

Setiap proyek menggunakan struktur utama berikut:

```html
<article class="project-card">
    <div class="project-image">
        <img src="..." alt="...">
    </div>

    <div class="project-content">
        <h3>Nama Proyek</h3>
        <p>Deskripsi proyek.</p>

        <div class="project-tags">
            <span>Linux</span>
            <span>GRUB</span>
        </div>

        <a href="..." target="_blank">
            View project →
        </a>
    </div>
</article>
```

Elemen `<article>` digunakan untuk membungkus satu unit konten proyek yang dapat dipahami secara mandiri.

Setiap kartu dibagi menjadi dua bagian utama:

- `project-image`: menampung gambar pratinjau proyek.
- `project-content`: menampung nama, deskripsi, tag teknologi, dan tautan proyek.

Pemisahan tersebut memudahkan CSS mengatur gambar dan konten secara terpisah.

---

## 8. Project Pertama — Fantasi GRUB Theme

### A. Gambar pratinjau

```html
<img
    src="https://raw.githubusercontent.com/Mora-project-ui/fantasi-grub-theme/refs/heads/main/preview.png"
    alt="Fantasi GRUB Theme"
>
```

Elemen `<img>` menampilkan gambar pratinjau dari repositori Fantasi GRUB Theme.

- `src` menentukan URL gambar.
- `alt` memberikan deskripsi alternatif jika gambar tidak dapat ditampilkan atau diakses melalui teknologi bantu.

Karena gambar diambil dari URL eksternal GitHub, browser membutuhkan koneksi internet untuk memuatnya.

### B. Nama proyek

```html
<h3>Fantasi Grub Theme</h3>
```

Elemen `<h3>` menampilkan nama proyek pada kartu.

### C. Deskripsi proyek

```html
<p>
    GRUB customization project for Linux systems.
</p>
```

Paragraf ini menjelaskan bahwa proyek berkaitan dengan kustomisasi GRUB pada sistem Linux.

GRUB merupakan bootloader yang dapat digunakan untuk memilih sistem operasi atau opsi boot sebelum sistem operasi dimulai.

### D. Tag proyek

```html
<div class="project-tags">
    <span>Linux</span>
    <span>GRUB</span>
    <span>Shell</span>
    <span>Private project</span>
</div>
```

Kelas `project-tags` menampung label yang memberikan informasi ringkas mengenai proyek.

- `Linux`: menunjukkan lingkungan sistem operasi yang berkaitan.
- `GRUB`: menunjukkan komponen bootloader yang dikustomisasi.
- `Shell`: menunjukkan keterkaitan dengan skrip shell.
- `Private project`: menunjukkan label status atau kategori proyek yang dipilih pemilik portfolio.

Setiap `<span>` mewakili satu label. CSS dapat menampilkannya sebagai badge kecil.

### E. Tautan proyek

```html
<a
    href="https://github.com/Mora-project-ui/fantasi-grub-theme/tree/main"
    target="_blank"
>
    View project →
</a>
```

Tautan ini mengarahkan pengunjung ke direktori proyek Fantasi GRUB Theme di GitHub.

Teks `View project →` berfungsi sebagai ajakan untuk melihat proyek lebih lanjut. Simbol panah merupakan bagian dari teks tautan.

---

## 9. Project Kedua — AntiGod-Grub-theme

### A. Gambar pratinjau

```html
<img
    src="https://raw.githubusercontent.com/Mora-project-ui/AntiGod-Grub-theme/refs/heads/main/Preview.png"
    alt="AntiGod-Grub-theme"
>
```

Elemen ini menampilkan gambar pratinjau proyek AntiGod-Grub-theme.

URL mengarah ke file `Preview.png` pada repositori GitHub proyek tersebut.

Atribut `alt` memberikan teks alternatif untuk gambar.

### B. Nama proyek

```html
<h3>AntiGod-Grub-theme</h3>
```

Elemen `<h3>` menampilkan nama proyek kedua.

### C. Deskripsi proyek

```html
<p>
    AntiGod is a custom GRUB bootloader theme created as a personal Linux customization project.
    It features an original visual design built to provide a distinctive boot menu experience.
    The theme is currently usable and continues to evolve as its design and features are refined.
</p>
```

Paragraf ini menjelaskan AntiGod sebagai proyek kustomisasi tema bootloader GRUB untuk Linux.

Deskripsi mencakup tiga hal:

1. Tujuan proyek, yaitu membuat tema GRUB kustom.
2. Fokus desain, yaitu memberikan tampilan menu boot yang berbeda.
3. Status proyek, yaitu sudah dapat digunakan dan masih dikembangkan.

### D. Tag proyek

```html
<div class="project-tags">
    <span>Linux</span>
    <span>Shell</span>
    <span>GRUB</span>
    <span>Private project</span>
</div>
```

Tag ini menunjukkan kategori dan teknologi yang berkaitan dengan AntiGod-Grub-theme.

Strukturnya sama dengan tag pada kartu pertama, sehingga kedua kartu dapat menggunakan aturan CSS yang seragam.

### E. Tautan proyek

```html
<a
    href="https://github.com/Mora-project-ui/AntiGod-Grub-theme"
    target="_blank"
>
    View project →
</a>
```

Tautan ini mengarahkan pengunjung ke repositori utama AntiGod-Grub-theme.

Dengan adanya tautan ini, pengunjung dapat melihat isi repositori, dokumentasi, dan berkas proyek yang tersedia secara publik.

---

## 10. Bagian Footer

```html
<footer>
    <div class="footer-content">
        ...
    </div>
</footer>
```

Footer merupakan bagian bawah halaman yang menampilkan identitas proyek dan tautan eksternal.

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

## 11. Menghubungkan JavaScript

```html
<script src="../js/script.js"></script>
```

Baris ini menghubungkan halaman Projects dengan file JavaScript utama.

JavaScript tersebut dapat menangani interaksi yang digunakan bersama halaman lain, seperti:

- Membuka dan menutup menu navigasi.
- Mengontrol musik latar.
- Menambahkan kelas animasi saat elemen muncul di layar.
- Mengubah tampilan header ketika halaman digulir.
- Memperbarui indikator progres scroll.

Script ditempatkan di bagian akhir `<body>` agar elemen HTML utama sudah tersedia ketika JavaScript dijalankan.

Kartu proyek menggunakan kelas `project-card`, sehingga dapat dipilih oleh JavaScript untuk diberi efek kemunculan saat scroll apabila selector pada script mencakup kelas tersebut.

---

## 12. Hubungan HTML, CSS, dan JavaScript

| Teknologi | Peran pada halaman Projects |
|---|---|
| HTML | Menyusun struktur daftar proyek, gambar, deskripsi, tag, dan tautan |
| CSS | Mengatur tata letak kartu, gambar, badge, warna, responsivitas, dan animasi |
| JavaScript | Menangani navigasi, musik, scroll, dan interaksi lainnya |

Sebagai contoh, HTML menyediakan kartu proyek. CSS mengatur bagaimana kartu terlihat dan tersusun di layar. JavaScript dapat menambahkan kelas untuk menampilkan kartu ketika masuk ke area pandang pengunjung.

Ketiga teknologi ini bekerja bersama untuk membentuk halaman Projects yang terstruktur dan interaktif.

---

## 13. Catatan Perbaikan

Beberapa hal yang dapat diperiksa atau ditingkatkan:

1. **Keamanan tautan eksternal:** pertimbangkan menambahkan `rel="noopener noreferrer"` pada tautan yang menggunakan `target="_blank"`.
2. **Aksesibilitas navigasi:** pastikan status menu terbuka atau tertutup dapat dikenali teknologi bantu, misalnya melalui atribut `aria-expanded`.
3. **Aksesibilitas gambar:** pastikan nilai `alt` menjelaskan isi gambar secara relevan.
4. **Konsistensi nama:** pertimbangkan menyeragamkan penulisan nama proyek, misalnya `Fantasi GRUB Theme` dan `AntiGod GRUB Theme`.
5. **Tag proyek:** pastikan label `Private project` sesuai dengan status atau maksud yang ingin ditampilkan kepada pengunjung.
6. **Jalur aset:** pastikan seluruh file CSS, JavaScript, dan audio tersedia di lokasi yang dirujuk.
7. **Pemuatan gambar:** gambar pratinjau diambil dari GitHub. Jika gambar tidak muncul, periksa URL, nama file, huruf besar-kecil, dan status repositori.
8. **Animasi:** pastikan `.reveal-section` dan `.project-card` memiliki aturan CSS yang sesuai dengan JavaScript.
9. **Performa gambar:** apabila gambar pratinjau berukuran besar, pertimbangkan mengoptimalkan ukurannya agar halaman lebih cepat dimuat.

## Kesimpulan

HTML halaman Projects pada portfolio Mora-project-ui digunakan untuk menampilkan daftar proyek dalam bentuk kartu. Setiap kartu memiliki gambar pratinjau, nama proyek, deskripsi, tag teknologi, dan tautan menuju repositori.

Halaman ini mendokumentasikan dua proyek kustomisasi GRUB, yaitu Fantasi GRUB Theme dan AntiGod-Grub-theme. Struktur kartu yang seragam membuat proyek baru dapat ditambahkan dengan mengikuti pola HTML yang sama.

Dokumentasi ini dapat digunakan sebagai arsip pemahaman kode dan referensi ketika menambahkan proyek baru atau mengembangkan tampilan portfolio di kemudian hari.
