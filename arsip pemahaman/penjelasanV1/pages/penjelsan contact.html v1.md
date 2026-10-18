# Dokumentasi HTML Halaman Contact — Mora-project-ui

## 1. Struktur Dasar HTML

```html
<!DOCTYPE html>
<html lang="en">
```

- `<!DOCTYPE html>` memberi tahu browser bahwa dokumen menggunakan HTML5.
- `<html lang="en">` merupakan elemen utama HTML. Atribut `lang="en"` menandakan bahwa bahasa utama halaman adalah bahasa Inggris.

## 2. Bagian Head

Bagian `<head>` berisi metadata dan tautan ke file pendukung yang digunakan halaman.

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
- `initial-scale=1.0` mengatur skala awal halaman.

Pengaturan ini membantu halaman tampil dengan baik pada desktop maupun perangkat seluler.

### C. Favicon

```html
<link
    rel="icon"
    href="https://raw.githubusercontent.com/Mora-project-ui/portfolio/refs/heads/main/assets/icons/favicon/R-icon.png"
    type="image/png"
>
```

Favicon adalah ikon kecil yang biasanya terlihat pada tab browser.

- `rel="icon"` menunjukkan fungsi file sebagai ikon website.
- `href` menentukan URL gambar ikon.
- `type="image/png"` menunjukkan format gambar PNG.

### D. Menghubungkan file CSS

```html
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/navbar.css">
<link rel="stylesheet" href="../css/contact.css">
<link rel="stylesheet" href="../css/footer.css">
<link rel="stylesheet" href="../css/responsive.css">
```

Setiap file memiliki tanggung jawab berbeda:

- `style.css`: fondasi tampilan umum, seperti warna, tipografi, dan elemen global.
- `navbar.css`: mengatur tampilan navigasi.
- `contact.css`: mengatur tampilan khusus halaman Contact.
- `footer.css`: mengatur tampilan bagian footer.
- `responsive.css`: menyesuaikan tampilan berdasarkan ukuran layar.

Jalur `../css/` berarti browser naik satu tingkat dari folder halaman Contact, kemudian masuk ke folder `css`.

Pemisahan CSS membuat struktur proyek lebih terorganisasi dan memudahkan pemeliharaan kode.

### E. Judul halaman

```html
<title>Contact — Mohammad Rama al-jannah</title>
```

Elemen `<title>` menentukan judul yang ditampilkan pada tab browser.

---

## 3. Bagian Body dan Scroll Progress

```html
<body>
    <div id="scroll-progress"></div>
```

Elemen `body` berisi komponen yang membentuk halaman.

Sementara itu, `scroll-progress` merupakan wadah untuk indikator progres scroll. JavaScript dapat mengubah lebarnya sesuai posisi pengunjung ketika menggulir halaman.

HTML hanya menyediakan elemennya. Tampilan dan perilakunya bergantung pada CSS dan JavaScript.

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

### A. Nama proyek dan tautan Home

```html
<a href="../index.html">
    <h2>Mora-project-ui</h2>
</a>
```

Elemen `<a>` membuat nama proyek dapat diklik untuk kembali ke halaman utama.

Jalur `../index.html` naik satu tingkat dari folder halaman Contact, kemudian membuka `index.html`.

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

- `music-toggle` adalah ID tombol yang dipilih oleh JavaScript.
- `music-icon` menampung ikon musik yang dapat diubah.
- `equalizer` menampung tiga elemen `<i>` yang dapat dibentuk menjadi batang animasi menggunakan CSS.

### D. Wadah menu navigasi

```html
<div class="nav-menu">
    ...
</div>
```

Kelas `nav-menu` mengelompokkan seluruh tautan navigasi.

#### Tombol menutup menu

```html
<button
    id="menu-close"
    aria-label="Close navigation menu"
>
    ✕
</button>
```

Tombol ini digunakan untuk menutup menu yang sedang terbuka. JavaScript memilihnya melalui ID `menu-close`.

#### Tautan halaman internal

```html
<a href="../index.html">Home</a>
<a href="about.html">About</a>
<a href="projects.html">Projects</a>
<a href="technologies.html">Technologies</a>
<a href="contact.html">Contact</a>
```

Tautan tersebut mengarahkan pengunjung ke halaman utama, About, Projects, Technologies, dan Contact.

Karena halaman Contact berada di dalam folder `pages`, tautan seperti `contact.html` merujuk ke file dalam folder yang sama.

#### Tautan repositori

```html
<a
    href="https://github.com/Mora-project-ui/portfolio"
    target="_blank"
>
    Web Repository
</a>
```

Tautan ini membuka repositori GitHub portfolio.

Atribut `target="_blank"` meminta browser membuka tautan di tab baru. Untuk praktik keamanan yang lebih baik, tautan eksternal dapat ditambahkan `rel="noopener noreferrer"`.

---

## 5. Bagian Background Music

```html
<audio
    id="background-music"
    src="../assets/Backsound/DoubleTake.mp3"
    loop
></audio>
```

Elemen `<audio>` menyediakan pemutar musik latar.

- `id="background-music"` memungkinkan JavaScript menemukan elemen audio.
- `src` menentukan lokasi file musik.
- `loop` membuat musik mengulang setelah selesai.

File audio yang digunakan adalah `DoubleTake.mp3` di dalam folder `assets/Backsound/`.

Pada kode ini, lokasi audio ditulis langsung melalui atribut `src`. Ini berbeda dengan halaman About yang menggunakan elemen `<source>` di dalam `<audio>`. Keduanya merupakan cara yang valid untuk menentukan sumber audio.

Musik tidak otomatis diputar hanya karena elemen audio tersedia. JavaScript pada proyek ini menggunakan tombol musik untuk memanggil fungsi play dan pause.

---

## 6. Bagian Main dan Contact

```html
<main>
    <section
        id="contact"
        class="reveal-section"
    >
        ...
    </section>
</main>
```

- `<main>` menandai konten utama halaman.
- `<section>` mengelompokkan konten yang membahas satu topik.
- `id="contact"` memberikan identitas unik pada bagian Contact.
- `class="reveal-section"` menandai bagian yang dapat diberi efek kemunculan melalui CSS dan JavaScript.

Agar animasi terlihat, kelas `reveal-section` harus memiliki aturan CSS yang sesuai.

### A. Judul halaman Contact

```html
<h2>Contact</h2>
```

Elemen `<h2>` menampilkan judul bagian kontak.

### B. Teks pengantar

```html
<p>
    You can find me on:
</p>
```

Paragraf ini memberi tahu pengunjung bahwa mereka dapat menemukan pemilik portfolio melalui beberapa platform yang tersedia.

---

## 7. Bagian Contact Links

```html
<div class="contact-links">
    ...
</div>
```

Kelas `contact-links` merupakan wadah yang mengelompokkan seluruh tautan kontak.

Setiap tautan dibungkus dengan elemen `<span>`. Pengelompokan ini dapat membantu CSS mengatur posisi, jarak, dan animasi setiap item.

### A. WhatsApp

```html
<span>
    <a
        href="https://wa.me/6281553766601?text=Assalamualaikum"
        target="_blank"
    >
        <img
            src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/Social/whatsapp.svg"
            alt="WhatsApp"
        >
        WhatsApp
    </a>
</span>
```

Tautan ini mengarahkan pengunjung ke WhatsApp dengan format URL khusus.

- `wa.me` merupakan format tautan WhatsApp.
- Nomor pada URL menggunakan format internasional tanpa tanda `+` atau spasi.
- Parameter `text=Assalamualaikum` mengisi pesan awal secara otomatis.

Pengunjung tetap dapat memeriksa atau mengubah pesan sebelum mengirimkannya.

Elemen `<img>` menampilkan ikon WhatsApp, sedangkan `alt="WhatsApp"` menyediakan teks alternatif untuk gambar.

### B. Instagram

```html
<a
    href="https://instagram.com/mhmdramaaa._"
    target="_blank"
>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/Social/instagram.svg"
        alt="Instagram"
    >
    Instagram
</a>
```

Tautan ini mengarahkan pengunjung ke profil Instagram. Ikon diambil dari file SVG yang disimpan di repositori GitHub.

### C. YouTube

```html
<a
    href="https://www.youtube.com/@ramabws"
    target="_blank"
>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/Social/youtube.svg"
        alt="YouTube"
    >
    YouTube
</a>
```

Tautan ini mengarahkan pengunjung ke kanal YouTube. Elemen gambar digunakan untuk menampilkan ikon YouTube.

### D. GitHub

```html
<a
    href="https://github.com/Mora-project-ui"
    target="_blank"
>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/Social/github.svg"
        alt="GitHub"
    >
    GitHub
</a>
```

Tautan ini mengarahkan pengunjung ke profil GitHub yang berisi repositori dan proyek-proyek terkait.

### E. Lynk.id

```html
<a
    href="https://lynk.id/ramlvoe"
    target="_blank"
>
    <img
        src="https://raw.githubusercontent.com/Mora-project-ui/Mora-project-ui/refs/heads/main/Icons/Other/lynk%2Cid.svg"
        alt="Lynk,ID"
    >
    Lynk,ID
</a>
```

Tautan ini mengarahkan pengunjung ke halaman Lynk.id.

Pada URL ikon, `%2C` merupakan encoding untuk karakter koma. Dengan demikian, nama file yang mengandung koma dapat dirujuk melalui URL.

Teks `alt` menyediakan keterangan gambar apabila ikon tidak dapat ditampilkan atau dibaca menggunakan teknologi bantu.

### F. Mengapa tautan dibungkus elemen span?

```html
<span>
    <a href="...">
        <img src="..." alt="...">
        Nama Platform
    </a>
</span>
```

Struktur ini memisahkan setiap item kontak ke dalam wadah tersendiri.

CSS dapat menggunakan `.contact-links span` untuk mengatur jarak, animasi, atau tampilan masing-masing item. JavaScript juga dapat memilih elemen tersebut untuk memberikan efek saat muncul di layar.

---

## 8. Bagian Footer

```html
<footer>
    <div class="footer-content">
        ...
    </div>
</footer>
```

Footer merupakan bagian bawah halaman yang berisi identitas proyek, tautan eksternal, dan informasi hak cipta.

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

Tagline ini menggambarkan aktivitas utama proyek, yaitu membangun, belajar, dan bereksperimen.

Kelas `footer-tagline` memungkinkan CSS memberikan tampilan khusus pada teks tersebut.

### C. Tautan eksternal

```html
<div class="footer-links">
    ...
</div>
```

Wadah ini mengelompokkan tautan ke GitHub, YouTube, dan Lynk.id.

Tautan tersebut juga menggunakan `target="_blank"` untuk meminta browser membukanya di tab baru.

### D. Informasi hak cipta

```html
<p class="footer-copyright">
    © 2026 Mohammad Rama al-jannah
</p>
```

Simbol `©` merupakan simbol hak cipta. Paragraf ini menampilkan tahun dan nama yang dicantumkan sebagai pemilik portfolio.

---

## 9. Menghubungkan JavaScript

```html
<script src="../js/script.js"></script>
```

Baris ini menghubungkan halaman Contact dengan file JavaScript utama di folder `js`.

JavaScript yang sama dapat menangani interaksi yang digunakan pada beberapa halaman, seperti:

- Membuka dan menutup menu navigasi.
- Mengontrol musik latar.
- Menambahkan kelas animasi ketika elemen muncul saat scroll.
- Mengubah tampilan header ketika halaman digulir.
- Memperbarui lebar indikator progres scroll.

Script diletakkan di bagian akhir `<body>` agar elemen HTML utama sudah tersedia ketika JavaScript dijalankan.

---

## 10. Hubungan HTML, CSS, dan JavaScript

| Teknologi | Peran pada halaman Contact |
|---|---|
| HTML | Menyusun struktur navigasi, audio, daftar kontak, dan footer |
| CSS | Mengatur warna, tata letak, ukuran ikon, responsivitas, dan animasi |
| JavaScript | Menangani menu, musik, scroll, dan interaksi lainnya |

Sebagai contoh, HTML membuat daftar tautan kontak, CSS mengatur tampilannya, dan JavaScript dapat menambahkan kelas untuk memunculkan item saat pengunjung menggulir halaman.

Ketiganya bekerja bersama untuk membentuk halaman yang terstruktur dan interaktif.

---

## 11. Catatan Perbaikan

Beberapa hal yang dapat diperiksa atau ditingkatkan:

1. **Keamanan tautan eksternal:** pertimbangkan `rel="noopener noreferrer"` untuk tautan yang menggunakan `target="_blank"`.
2. **Aksesibilitas menu:** perbarui atribut `aria-expanded` melalui JavaScript agar status menu lebih mudah dikenali teknologi bantu.
3. **Aksesibilitas ikon:** `alt` pada ikon sudah membantu. Jika ikon hanya dekoratif dan nama tautannya sudah tersedia sebagai teks, `alt=""` juga dapat dipertimbangkan untuk menghindari pembacaan berulang oleh screen reader.
4. **Aksesibilitas musik:** pastikan tombol musik memberikan informasi status yang benar dan pengguna dapat menjeda audio.
5. **Jalur aset:** pastikan seluruh file CSS, JavaScript, dan audio tersedia di lokasi yang dirujuk.
6. **Efek animasi:** pastikan `.reveal-section` dan `.contact-links span` memiliki aturan CSS yang sesuai dengan JavaScript.
7. **Konsistensi penamaan:** pertimbangkan menuliskan nama layanan sebagai `Lynk.id` secara konsisten pada teks dan atribut `alt`.
8. **Privasi kontak:** tautan WhatsApp langsung mencantumkan nomor telepon dalam HTML publik. Pastikan memang ingin menjadikan nomor tersebut dapat diakses oleh siapa saja.

## Kesimpulan

HTML halaman Contact pada portfolio Mora-project-ui menyediakan navigasi, musik latar, daftar tautan kontak, dan footer.

Halaman ini memanfaatkan elemen HTML semantik, atribut `id` dan `class` untuk menghubungkan HTML dengan CSS serta JavaScript, dan URL eksternal untuk mengakses ikon serta profil media sosial.

Dokumentasi ini dapat digunakan sebagai arsip untuk memahami struktur halaman Contact dan sebagai referensi saat memperbaiki atau mengembangkan portfolio di masa mendatang.
