# Dokumentasi CSS — About dan Scroll Animation

## 1. CSS About

```css
/* =========================
   ABOUT
========================= */

#about p {
    max-width: 800px;

    margin-bottom: 15px;

    color: #b7bdc8;
}
```

### Penjelasan

Kode ini mengatur tampilan semua elemen paragraf (`<p>`) yang berada di dalam elemen dengan `id="about"`.

- **`#about p`** — memilih semua paragraf di dalam elemen `id="about"`. Simbol `#` digunakan untuk memilih ID, sedangkan `p` memilih elemen paragraf.
- **`max-width: 800px;`** — membatasi lebar paragraf hingga maksimal 800 piksel. Kalau ruang yang tersedia lebih sempit, paragraf tetap bisa menyesuaikan lebar layar.
- **`margin-bottom: 15px;`** — memberi jarak 15 piksel di bawah setiap paragraf agar teks tidak saling menempel.
- **`color: #b7bdc8;`** — mengatur warna teks menjadi abu-abu kebiruan yang lembut, sehingga cocok dengan tema gelap website.

### Contoh HTML yang cocok

```html
<section id="about">
    <h2>About Me</h2>

    <p>Halo, aku sedang belajar membuat website.</p>

    <p>Aku juga suka bereksperimen dengan Linux.</p>
</section>
```

Dengan CSS tersebut, kedua paragraf akan memiliki lebar maksimal 800 piksel, jarak bawah 15 piksel, dan warna teks yang sama.

---

## 2. CSS Scroll Animation

```css
/* =========================
   SCROLL ANIMATION
========================= */

.reveal-section {
    opacity: 0;

    transform:
        translateY(40px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.reveal-section.show {
    opacity: 1;

    transform:
        translateY(0);
}
```

### Penjelasan

Bagian ini membuat elemen dengan class `reveal-section` muncul secara bertahap melalui animasi. Efeknya berupa perubahan dari transparan dan sedikit berada di bawah menjadi terlihat pada posisi normal.

### A. Class `.reveal-section`

```css
.reveal-section {
    opacity: 0;

    transform: translateY(40px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}
```

- **`opacity: 0;`** — membuat elemen sepenuhnya transparan sehingga belum terlihat.
- **`transform: translateY(40px);`** — menggeser elemen sejauh 40 piksel ke bawah dari posisi normalnya.
- **`transition: opacity 0.8s ease, transform 0.8s ease;`** — membuat perubahan transparansi dan posisi berlangsung selama 0,8 detik dengan transisi yang halus.

### B. Class `.reveal-section.show`

```css
.reveal-section.show {
    opacity: 1;

    transform: translateY(0);
}
```

Selector ini berlaku ketika elemen memiliki **dua class sekaligus**, yaitu `reveal-section` dan `show`.

- **`opacity: 1;`** — membuat elemen terlihat sepenuhnya.
- **`transform: translateY(0);`** — mengembalikan elemen ke posisi normalnya.

Karena kedua properti tersebut berubah dari nilai awal, browser menjalankan animasi sesuai aturan `transition`.

### 3. Hubungan CSS dengan JavaScript

CSS ini hanya menentukan bagaimana animasinya terlihat. Agar class `show` ditambahkan ketika section masuk ke area pandang, JavaScript perlu mendeteksi posisi elemen.

Contoh JavaScript:

```javascript
const sections = document.querySelectorAll(".reveal-section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});
```

Cara kerjanya:

1. JavaScript mencari semua elemen dengan class `reveal-section`.
2. `IntersectionObserver` memantau apakah elemen masuk ke area pandang browser.
3. Saat elemen terlihat di area pandang, JavaScript menambahkan class `show`.
4. CSS mendeteksi perubahan class tersebut lalu menjalankan animasi.

**Catatan:** contoh JavaScript ini hanya menambahkan class `show`, bukan menghapusnya ketika elemen keluar dari layar. Jadi, setelah muncul, elemen tetap terlihat saat pengguna menggulir halaman kembali ke atas.

## Kesimpulan

CSS About berfungsi mengatur lebar, jarak, dan warna paragraf pada halaman About. Sementara itu, CSS Scroll Animation mengatur efek kemunculan section dengan transisi transparansi dan posisi.

Keduanya bekerja bersama untuk membuat halaman About lebih rapi, nyaman dibaca, dan terasa lebih hidup tanpa membutuhkan animasi yang terlalu rumit.
