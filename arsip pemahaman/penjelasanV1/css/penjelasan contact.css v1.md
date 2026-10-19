# Dokumentasi CSS — Contact Links

## 1. Mengatur Layout Contact Links

```css
/* =========================
   CONTACT
========================= */

.contact-links {
    display: flex;

    flex-wrap: wrap;

    gap: 12px;
}
```

Bagian ini mengatur wadah yang menampung daftar kontak, seperti WhatsApp, Instagram, YouTube, GitHub, dan Lynk.id.

- **`display: flex;`** — menggunakan Flexbox agar item kontak tersusun secara fleksibel, biasanya berjajar mendatar.
- **`flex-wrap: wrap;`** — mengizinkan item pindah ke baris berikutnya ketika ruang tidak cukup. Ini membantu tampilan menyesuaikan layar yang lebih kecil.
- **`gap: 12px;`** — memberi jarak 12 piksel di antara item kontak, baik secara horizontal maupun vertikal ketika item membungkus ke baris baru.

## 2. Mengatur Tampilan Setiap Item Kontak

```css
.contact-links span {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    padding: 8px 14px;

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 999px;

    color: #c9ced6;

    font-size: 14px;

    font-weight: 500;

    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity 0.6s ease,
        transform 0.6s ease,
        color 0.2s ease,
        border-color 0.2s ease;
}
```

Selector `.contact-links span` memilih setiap elemen `<span>` yang berada di dalam wadah `.contact-links`.

### Penjelasan properti

- **`display: inline-flex;`** — membuat isi item, seperti ikon dan teks, tersusun menggunakan Flexbox sekaligus membuat item berperilaku seperti elemen inline-flex.
- **`align-items: center;`** — menyelaraskan ikon dan teks secara vertikal agar berada di tengah.
- **`gap: 8px;`** — memberi jarak 8 piksel antara elemen di dalam item, misalnya ikon dan teks.
- **`padding: 8px 14px;`** — memberi ruang di dalam item: 8 piksel atas-bawah dan 14 piksel kiri-kanan.
- **`background: var(--card);`** — menggunakan warna latar dari variabel CSS `--card`.
- **`border: 1px solid var(--border);`** — memberi garis tepi setebal 1 piksel menggunakan warna variabel `--border`.
- **`border-radius: 999px;`** — membuat sudut sangat membulat sehingga item tampak seperti kapsul atau pil.
- **`color: #c9ced6;`** — menentukan warna teks abu-abu kebiruan.
- **`font-size: 14px;`** — mengatur ukuran teks menjadi 14 piksel.
- **`font-weight: 500;`** — membuat teks sedikit lebih tebal daripada teks normal.

### Pengaturan animasi awal

- **`opacity: 0;`** — membuat item transparan pada keadaan awal.
- **`transform: translateY(30px);`** — menggeser item 30 piksel ke bawah dari posisi normalnya.
- **`transition`** — menentukan properti mana yang berubah secara halus dan berapa lama transisinya berlangsung.

Rinciannya:

| Properti | Durasi | Fungsi |
|---|---:|---|
| `opacity` | 0,6 detik | Menghaluskan perubahan transparansi |
| `transform` | 0,6 detik | Menghaluskan perubahan posisi |
| `color` | 0,2 detik | Menghaluskan perubahan warna teks |
| `border-color` | 0,2 detik | Menghaluskan perubahan warna garis tepi |

Durasi tersebut tidak berarti semua animasi pasti berjalan bersamaan. Animasi baru terlihat ketika nilai propertinya berubah.

---

## 3. Animasi Ketika Item Muncul

```css
.contact-links span.show {
    opacity: 1;

    transform: translateY(0);
}
```

Selector `.contact-links span.show` memilih elemen `<span>` di dalam `.contact-links` yang memiliki class `show`.

- **`opacity: 1;`** — membuat item terlihat sepenuhnya.
- **`transform: translateY(0);`** — mengembalikan item ke posisi normalnya.

Ketika JavaScript menambahkan class `show`, item berubah dari transparan dan bergeser ke bawah menjadi terlihat di posisi normal. Perubahan ini menghasilkan efek kemunculan yang halus.

**Catatan:** kode CSS ini tidak otomatis mendeteksi scroll. JavaScript harus menambahkan class `show` agar animasinya berjalan.

---

## 4. Efek Hover pada Item Kontak

```css
.contact-links span:hover {
    color: var(--text);

    border-color: var(--accent);

    transform: translateY(-2px);
}
```

Selector `:hover` aktif ketika pointer mouse berada di atas item.

- **`color: var(--text);`** — mengubah warna teks item menjadi warna dari variabel `--text`.
- **`border-color: var(--accent);`** — mengubah warna garis tepi menjadi warna aksen, misalnya warna emas jika variabel `--accent` menggunakan warna emas.
- **`transform: translateY(-2px);`** — menggeser item 2 piksel ke atas sehingga terasa sedikit terangkat.

Perubahan warna dan posisi akan mengikuti aturan `transition` yang sudah ditetapkan sebelumnya.

### Catatan tentang animasi posisi

Efek `translateY(-2px)` juga mengubah properti `transform` yang digunakan untuk animasi kemunculan. Karena itu, efek hover dan animasi kemunculan bisa saling memengaruhi ketika keduanya aktif bersamaan.

---

## 5. Mengatur Link di Dalam Item

```css
.contact-links a {
    color: var(--text);

    text-decoration: none;
}

.contact-links a:hover {
    color: var(--accent);
}
```

Bagian ini mengatur tampilan elemen tautan `<a>`.

### `.contact-links a`

- **`color: var(--text);`** — menggunakan warna teks utama.
- **`text-decoration: none;`** — menghilangkan garis bawah bawaan pada tautan.

### `.contact-links a:hover`

- **`color: var(--accent);`** — mengubah warna teks tautan ketika pointer mouse berada di atasnya.

Jadi, ketika pengguna mengarahkan mouse ke tautan kontak, teksnya berubah mengikuti warna aksen website.

---

## 6. Mengatur Ukuran Ikon

```css
.contact-links img {
    width: 20px;
    height: 20px;

    object-fit: contain;
}
```

Selector ini memilih gambar di dalam daftar kontak.

- **`width: 20px;`** — menetapkan lebar ikon 20 piksel.
- **`height: 20px;`** — menetapkan tinggi ikon 20 piksel.
- **`object-fit: contain;`** — mempertahankan proporsi gambar agar seluruh ikon terlihat di dalam area 20 × 20 piksel tanpa terpotong.

Jika gambar aslinya tidak berbentuk persegi, ikon bisa menyisakan ruang kosong pada salah satu sisi karena proporsinya dipertahankan.

---

## 7. Mengatur Jeda Animasi Setiap Item

```css
/* =========================
   DELAY
========================= */

.contact-links span:nth-child(1) {
    transition-delay: 0.2s;
}

.contact-links span:nth-child(2) {
    transition-delay: 0.4s;
}

.contact-links span:nth-child(3) {
    transition-delay: 0.6s;
}

.contact-links span:nth-child(4) {
    transition-delay: 0.8s;
}

.contact-links span:nth-child(5) {
    transition-delay: 1s;
}
```

Bagian ini menggunakan pseudo-class `:nth-child()` untuk memilih item berdasarkan urutannya di antara elemen saudara dalam parent yang sama.

- **`span:nth-child(1)`** — memilih `<span>` yang merupakan anak pertama.
- **`span:nth-child(2)`** — memilih `<span>` yang merupakan anak kedua.
- Begitu seterusnya sampai anak kelima.

Properti `transition-delay` menentukan berapa lama browser menunggu sebelum memulai transisi.

| Urutan | Jeda |
|---|---:|
| Item 1 | 0,2 detik |
| Item 2 | 0,4 detik |
| Item 3 | 0,6 detik |
| Item 4 | 0,8 detik |
| Item 5 | 1 detik |

Dengan jeda yang bertambah, item kontak bisa muncul secara bergantian sehingga menghasilkan efek *staggered animation*.

### Hal penting tentang `transition-delay`

Jeda ini berlaku pada transisi properti yang diatur dalam selector terkait, bukan hanya pada animasi saat pertama kali muncul. Jadi, perubahan warna atau posisi saat hover juga dapat terkena jeda tersebut.

Selain itu, `:nth-child()` menghitung posisi elemen di antara seluruh anak parent, bukan menghitung `<span>` saja. Jika struktur HTML berubah dan ada elemen lain yang ikut menjadi anak langsung `.contact-links`, urutan yang dipilih bisa berbeda dari yang diharapkan.

---

## 8. Hubungan dengan HTML dan JavaScript

Contoh HTML sederhana:

```html
<div class="contact-links">
    <span>
        <img src="assets/icons/whatsapp.svg" alt="">
        <a href="https://wa.me/6281234567890">WhatsApp</a>
    </span>

    <span>
        <img src="assets/icons/github.svg" alt="">
        <a href="https://github.com/">GitHub</a>
    </span>
</div>
```

Dalam contoh tersebut:

- `.contact-links` menjadi wadah seluruh item.
- Setiap `<span>` menjadi item kontak.
- `<img>` menampilkan ikon.
- `<a>` menjadi tautan yang dapat diklik.

Untuk membuat item muncul ketika masuk ke area pandang, JavaScript dapat menambahkan class `show` menggunakan `IntersectionObserver`. CSS kemudian menangani animasi visualnya.

## Kesimpulan

CSS Contact Links mengatur daftar tautan kontak agar terlihat seperti kapsul, tersusun fleksibel, memiliki ikon yang rapi, dan merespons interaksi mouse. Sementara itu, `opacity`, `transform`, `transition`, `transition-delay`, dan class `show` bekerja sama untuk menghasilkan animasi kemunculan yang bertahap.

**Gampangnya:** Flexbox mengatur susunan, properti visual membentuk tampilannya, `:hover` menangani interaksi mouse, dan `transition` membuat perubahan terasa halus.
