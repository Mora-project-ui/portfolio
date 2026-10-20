# Dokumentasi CSS — Footer

## 1. Mengatur Tampilan Footer

```css
/* =========================
   FOOTER
========================= */

footer {
    margin-top: 50px;

    padding:
        50px 30px 30px;

    border-top:
        1px solid var(--border);

    text-align: center;
}
```

### Penjelasan

Selector `footer` memilih elemen HTML `<footer>` dan mengatur tampilan area paling bawah website.

- **`margin-top: 50px;`** — memberikan jarak 50 piksel di luar bagian atas footer, sehingga footer tidak terlalu menempel dengan konten sebelumnya.
- **`padding: 50px 30px 30px;`** — memberikan ruang di dalam footer. Urutan nilainya adalah atas, kiri-kanan, lalu bawah.
  - `50px` untuk bagian atas.
  - `30px` untuk bagian kiri dan kanan.
  - `30px` untuk bagian bawah.
- **`border-top: 1px solid var(--border);`** — membuat garis pemisah setebal 1 piksel di bagian atas footer menggunakan warna dari variabel `--border`.
- **`text-align: center;`** — membuat teks dan elemen inline di dalam footer rata tengah.

Perlu dibedakan bahwa `margin` mengatur jarak di luar elemen, sedangkan `padding` mengatur ruang di dalam elemen.

---

## 2. Mengatur Lebar dan Posisi Konten Footer

```css
.footer-content {
    max-width: 1100px;

    margin: auto;
}
```

Selector `.footer-content` biasanya digunakan pada elemen pembungkus isi footer.

- **`max-width: 1100px;`** — membatasi lebar konten hingga maksimal 1100 piksel. Pada layar yang lebih sempit, lebarnya dapat menyesuaikan ruang yang tersedia.
- **`margin: auto;`** — membagi margin horizontal secara otomatis ketika masih ada ruang kosong, sehingga konten dengan lebar terbatas dapat berada di tengah.

Contoh HTML:

```html
<footer>
    <div class="footer-content">
        <!-- Isi footer -->
    </div>
</footer>
```

Dengan struktur tersebut, `.footer-content` menjadi pembungkus untuk elemen-elemen footer.

---

## 3. Mengatur Judul Footer

```css
.footer-content h3 {
    color: var(--text);

    font-size: 20px;

    margin-bottom: 8px;
}
```

Selector `.footer-content h3` memilih elemen `<h3>` yang berada di dalam `.footer-content`.

- **`color: var(--text);`** — menggunakan warna teks utama dari variabel CSS `--text`.
- **`font-size: 20px;`** — mengatur ukuran judul menjadi 20 piksel.
- **`margin-bottom: 8px;`** — memberikan jarak 8 piksel di bawah judul agar tidak terlalu dekat dengan tagline.

Contoh penggunaannya:

```html
<div class="footer-content">
    <h3>Mora-project-ui</h3>
</div>
```

Judul tersebut dapat digunakan untuk menampilkan nama proyek atau identitas website.

---

## 4. Mengatur Tagline Footer

```css
.footer-tagline {
    color: var(--muted);

    font-size: 14px;

    margin-bottom: 20px;
}
```

Selector `.footer-tagline` mengatur elemen yang memiliki class tersebut, biasanya berupa teks singkat di bawah judul footer.

- **`color: var(--muted);`** — menggunakan warna teks sekunder dari variabel `--muted`, sehingga tagline terlihat lebih lembut daripada judul.
- **`font-size: 14px;`** — mengatur ukuran teks menjadi 14 piksel.
- **`margin-bottom: 20px;`** — memberikan jarak 20 piksel di bawah tagline sebelum bagian berikutnya.

Contoh HTML:

```html
<p class="footer-tagline">
    Building • Learning • Experimenting
</p>
```

Tagline berfungsi sebagai kalimat singkat yang menggambarkan kegiatan atau identitas pemilik website.

---

## 5. Mengatur Susunan Tautan Footer

```css
.footer-links {
    display: flex;

    justify-content: center;

    gap: 20px;

    margin-bottom: 25px;
}
```

Selector `.footer-links` mengatur wadah yang berisi kumpulan tautan, misalnya GitHub, YouTube, dan Lynk.id.

- **`display: flex;`** — menggunakan Flexbox untuk menyusun tautan dalam satu baris secara default.
- **`justify-content: center;`** — memusatkan kumpulan tautan secara horizontal di dalam wadah.
- **`gap: 20px;`** — memberikan jarak 20 piksel di antara setiap tautan.
- **`margin-bottom: 25px;`** — memberikan jarak 25 piksel di bawah kumpulan tautan sebelum bagian copyright.

Contoh HTML:

```html
<div class="footer-links">
    <a href="https://github.com/">GitHub</a>
    <a href="https://youtube.com/">YouTube</a>
    <a href="https://lynk.id/">Lynk.id</a>
</div>
```

Karena `display: flex` secara default menyusun item dalam baris, tautan akan berjajar mendatar. Namun, jika ruang layar terlalu sempit, tautan bisa membutuhkan pengaturan tambahan seperti `flex-wrap: wrap;` agar dapat berpindah ke baris berikutnya.

---

## 6. Mengatur Tampilan Tautan Footer

```css
.footer-links a {
    color: var(--muted);

    text-decoration: none;

    transition: 0.2s;
}

.footer-links a:hover {
    color: var(--accent);
}
```

### Selector `.footer-links a`

Memilih semua elemen tautan `<a>` di dalam wadah `.footer-links`.

- **`color: var(--muted);`** — memberikan warna teks sekunder.
- **`text-decoration: none;`** — menghilangkan garis bawah bawaan tautan.
- **`transition: 0.2s;`** — membuat perubahan properti yang mendukung transisi berlangsung selama 0,2 detik.

### Selector `.footer-links a:hover`

- **`color: var(--accent);`** — mengubah warna tautan ketika pointer mouse berada di atasnya.

Dengan begitu, tautan footer memiliki warna yang lebih lembut dalam keadaan normal dan berubah menjadi warna aksen saat diarahkan dengan mouse.

---

## 7. Mengatur Teks Copyright

```css
.footer-copyright {
    color: var(--muted);

    font-size: 13px;
}
```

Selector `.footer-copyright` mengatur tampilan teks copyright pada bagian bawah footer.

- **`color: var(--muted);`** — menggunakan warna teks sekunder.
- **`font-size: 13px;`** — membuat teks berukuran 13 piksel, sedikit lebih kecil daripada tagline.

Contoh HTML:

```html
<p class="footer-copyright">
    © 2026 Mohammad Rama al-jannah
</p>
```

Copyright berfungsi sebagai informasi kepemilikan atau atribusi pada website. Penulisan tahun dapat disesuaikan dengan kebutuhan proyek.

---

## 8. Hubungan Struktur HTML dengan CSS Footer

Contoh struktur HTML yang sesuai dengan seluruh selector di atas:

```html
<footer>
    <div class="footer-content">
        <h3>Mora-project-ui</h3>

        <p class="footer-tagline">
            Building • Learning • Experimenting
        </p>

        <div class="footer-links">
            <a href="https://github.com/">GitHub</a>
            <a href="https://youtube.com/">YouTube</a>
            <a href="https://lynk.id/">Lynk.id</a>
        </div>

        <p class="footer-copyright">
            © 2026 Mohammad Rama al-jannah
        </p>
    </div>
</footer>
```

Struktur tersebut menunjukkan hubungan antara HTML dan CSS:

- `<footer>` menjadi area utama di bagian bawah halaman.
- `.footer-content` membatasi lebar dan membungkus seluruh konten.
- `<h3>` menampilkan identitas atau judul.
- `.footer-tagline` menampilkan tagline.
- `.footer-links` mengatur susunan tautan.
- `.footer-copyright` menampilkan informasi copyright.

CSS menentukan bagaimana setiap bagian ditampilkan, sedangkan HTML menentukan struktur dan isi yang akan ditampilkan.

## Kesimpulan

CSS Footer mengatur jarak, garis pemisah, lebar konten, tipografi, susunan tautan, efek hover, dan teks copyright. Kombinasi properti tersebut membuat bagian bawah website terlihat lebih terstruktur dan konsisten dengan desain keseluruhan.

**Intinya:** footer bukan hanya bagian penutup halaman, tetapi juga tempat untuk menampilkan identitas proyek, tautan penting, dan informasi kepemilikan website.
