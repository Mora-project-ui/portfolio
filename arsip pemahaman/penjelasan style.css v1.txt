# Dokumentasi CSS Portfolio Mora-project-ui

## 1. Root dan CSS Variables

```css
:root {
    --bg: #0d0f12;
    --card: #15181d;
    --border: #292e35;
    --text: #f1f1ee;
    --muted: #9da3ab;
    --accent: #c6a96b;

    --background:
        radial-gradient(
            circle at top right,
            rgba(198, 169, 107, 0.08),
            transparent 35%
        ),
        var(--bg);
}
```

`:root` merupakan selector yang menargetkan elemen akar dokumen HTML. Variabel CSS yang didefinisikan di dalamnya dapat digunakan oleh berbagai bagian website.

Variabel CSS ditandai dengan awalan `--` dan dipanggil menggunakan fungsi `var()`.

Fungsi setiap variabel:

- `--bg`: warna latar utama website.
- `--card`: warna latar untuk elemen berbentuk kartu.
- `--border`: warna garis pembatas.
- `--text`: warna teks utama.
- `--muted`: warna teks sekunder yang lebih redup.
- `--accent`: warna aksen untuk menonjolkan elemen tertentu.
- `--background`: kombinasi gradasi radial dan warna latar utama.

Nilai `#0d0f12` menghasilkan warna gelap, sedangkan `#c6a96b` menghasilkan warna emas kecokelatan yang digunakan sebagai aksen.

### Radial gradient

```css
--background:
    radial-gradient(
        circle at top right,
        rgba(198, 169, 107, 0.08),
        transparent 35%
    ),
    var(--bg);
```

`radial-gradient()` menghasilkan gradasi yang menyebar dari suatu titik atau area.

- `circle at top right`: menentukan bentuk lingkaran dengan posisi awal di kanan atas.
- `rgba(198, 169, 107, 0.08)`: warna emas dengan tingkat transparansi rendah.
- `transparent 35%`: menentukan titik gradasi menjadi transparan.
- `var(--bg)`: warna latar utama yang digunakan di bawah gradasi.

Variabel `--background` baru memberikan efek jika dipanggil pada properti CSS, misalnya `background: var(--background);`. Pada kode saat ini, elemen `body` menggunakan `var(--bg)`, sehingga gradasi dalam `--background` belum diterapkan melalui deklarasi tersebut.

## 2. Page Loader

```css
.page-loader {
    position: fixed;
    inset: 0;
    background: #050505;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 9999;

    animation: loaderFadeOut 1s ease 2s forwards;
}
```

`.page-loader` mengatur tampilan layar loading yang menutupi halaman.

Penjelasan properti:

- `position: fixed`: membuat elemen tetap berada pada posisi layar meskipun halaman digulir.
- `inset: 0`: menetapkan jarak atas, kanan, bawah, dan kiri menjadi nol.
- `background: #050505`: memberikan latar belakang hampir hitam.
- `display: flex`: menggunakan Flexbox untuk menyusun elemen di dalamnya.
- `flex-direction: column`: menyusun elemen secara vertikal.
- `justify-content: center`: menempatkan elemen di tengah secara vertikal.
- `align-items: center`: menempatkan elemen di tengah secara horizontal.
- `z-index: 9999`: memberikan tingkat tumpukan tinggi agar loader berada di atas banyak elemen lain.
- `animation`: menjalankan animasi `loaderFadeOut` selama satu detik, dengan jeda dua detik sebelum dimulai.
- `forwards`: mempertahankan nilai akhir animasi setelah animasi selesai.

### Bentuk spinner

```css
.loader {
    width: 50px;
    height: 50px;

    border: 4px solid rgba(255, 255, 255, 0.15);
    border-top-color: #d4af37;

    border-radius: 50%;

    animation: spin 0.8s linear infinite;
}
```

`.loader` membentuk indikator loading berbentuk lingkaran.

- `width` dan `height` menentukan ukuran lingkaran sebesar 50 × 50 piksel.
- `border` memberikan garis melingkar dengan ketebalan empat piksel.
- `border-top-color` memberikan warna emas pada sisi atas lingkaran.
- `border-radius: 50%` membulatkan elemen menjadi lingkaran.
- `animation: spin 0.8s linear infinite` membuat lingkaran berputar terus-menerus setiap 0,8 detik.

Perbedaan warna pada sisi atas dan sisi lainnya membuat gerakan putaran lebih mudah terlihat.

### Teks loading

```css
.page-loader p {
    margin-top: 20px;
    color: white;
    font-size: 14px;
}
```

Aturan ini mengatur paragraf di dalam loader.

- `margin-top: 20px`: memberi jarak antara spinner dan teks.
- `color: white`: membuat teks berwarna putih.
- `font-size: 14px`: menentukan ukuran teks.

### Animasi putaran

```css
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
```

`@keyframes` mendefinisikan tahapan animasi.

Pada animasi `spin`, elemen diputar hingga 360 derajat. Karena animasi menggunakan `infinite`, putaran akan terus berulang.

### Animasi menghilangkan loader

```css
@keyframes loaderFadeOut {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
```

Animasi ini mengubah dua properti pada kondisi akhir:

- `opacity: 0`: membuat elemen transparan.
- `visibility: hidden`: menyembunyikan elemen dari tampilan dan interaksi pointer.

Berdasarkan pengaturan animasinya, loader mulai menghilang setelah jeda dua detik, lalu proses fade-out berlangsung selama satu detik.

Catatan: `forwards` mempertahankan keadaan akhir animasi, tetapi elemen loader tetap berada di dalam DOM. Jika diperlukan, JavaScript dapat menghapusnya setelah animasi selesai.

## 3. Global Styles

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Selector `*` menargetkan semua elemen HTML.

- `margin: 0`: menghapus margin bawaan.
- `padding: 0`: menghapus padding bawaan.
- `box-sizing: border-box`: membuat ukuran elemen mencakup konten, padding, dan border.

Pengaturan ini membantu membuat perhitungan ukuran elemen lebih konsisten dan mengurangi kejutan akibat ukuran bawaan browser.

### Pengaturan elemen HTML

```css
html {
    scroll-behavior: smooth;
    max-width: 100%;
    overflow-x: hidden;
}
```

- `scroll-behavior: smooth`: membuat perpindahan scroll menuju target tertentu berlangsung dengan halus.
- `max-width: 100%`: membatasi lebar maksimum elemen HTML.
- `overflow-x: hidden`: menyembunyikan konten yang melampaui batas horizontal viewport.

Pengaturan `overflow-x: hidden` dapat menyembunyikan elemen yang melebar keluar layar, tetapi tidak selalu menyelesaikan penyebab horizontal overflow. Jika ada elemen yang terlalu lebar, ukuran atau layout elemen tersebut tetap perlu diperiksa.

### Pengaturan body

```css
body {
    position: relative;

    font-family: Arial, sans-serif;

    background: var(--bg);
    color: var(--text);

    line-height: 1.6;

    max-width: 100%;
    overflow-x: hidden;
}
```

Penjelasan:

- `position: relative`: menetapkan body sebagai elemen dengan posisi relatif, yang dapat menjadi acuan untuk elemen anak yang menggunakan posisi tertentu.
- `font-family`: menggunakan Arial, dengan font sans-serif sebagai alternatif.
- `background: var(--bg)`: menggunakan variabel warna latar utama.
- `color: var(--text)`: menetapkan warna teks utama.
- `line-height: 1.6`: memberikan jarak antarbaris sebesar 1,6 kali ukuran font.
- `max-width: 100%`: membatasi lebar maksimum body.
- `overflow-x: hidden`: menyembunyikan konten yang melampaui sisi horizontal.

Variabel `--bg` dan `--text` berasal dari bagian `:root`, sehingga warna utama dapat diubah dari satu tempat.

## 4. Main Layout

```css
main {
    max-width: 1100px;

    margin: auto;

    padding: 70px 30px 0;
}
```

Aturan ini mengatur lebar dan jarak konten utama website.

- `max-width: 1100px`: membatasi lebar maksimum konten utama.
- `margin: auto`: membagi ruang kosong horizontal secara otomatis ketika lebar elemen lebih kecil daripada ruang yang tersedia.
- `padding: 70px 30px 0`: memberikan padding atas 70 piksel, padding kiri dan kanan 30 piksel, serta padding bawah nol.

Dengan pengaturan ini, konten utama memiliki batas lebar dan tidak menempel langsung pada sisi layar.

Padding atas juga memberi ruang sebelum konten utama dimulai, misalnya agar hero section tidak terlalu dekat dengan navbar.

## 5. Aurora Background

```css
body::before {
    content: "";

    position: fixed;

    inset: -30%;

    background:
        radial-gradient(
            ellipse at 20% 30%,
            rgba(198, 169, 107, 0.20),
            transparent 30%
        ),
        radial-gradient(
            ellipse at 80% 20%,
            rgba(90, 120, 190, 0.16),
            transparent 30%
        ),
        radial-gradient(
            ellipse at 50% 80%,
            rgba(150, 90, 170, 0.12),
            transparent 35%
        );

    filter: blur(55px);

    animation:
        auroraMove 12s ease-in-out infinite alternate;

    pointer-events: none;

    z-index: -1;
}
```

`body::before` adalah pseudo-element yang membuat elemen dekoratif tanpa perlu menambahkan elemen HTML baru.

### Fungsi properti

- `content: ""`: membuat pseudo-element tersedia.
- `position: fixed`: menjaga elemen dekoratif tetap terikat pada viewport.
- `inset: -30%`: memperluas batas pseudo-element ke luar area viewport.
- `background`: membuat tiga lapisan radial gradient.
- `filter: blur(55px)`: memberikan efek kabur sehingga warna terlihat lembut.
- `animation`: menjalankan animasi bernama `auroraMove`.
- `pointer-events: none`: mencegah lapisan dekoratif menghalangi klik atau interaksi pengguna.
- `z-index: -1`: menempatkan elemen pada lapisan tumpukan di belakang elemen lain sesuai konteks penumpukannya.

### Tiga lapisan gradasi

Gradasi pertama menggunakan warna emas, gradasi kedua menggunakan warna biru, dan gradasi ketiga menggunakan warna ungu.

Posisi dan transparansi tiap gradasi berbeda sehingga menghasilkan kombinasi warna yang menyerupai aurora atau cahaya lembut di latar belakang.

Efek blur membuat batas gradasi tidak terlihat tajam.

### Animasi aurora

```css
@keyframes auroraMove {
    0% {
        transform:
            translate(-8%, -5%)
            rotate(0deg)
            scale(1);
    }

    50% {
        transform:
            translate(8%, 5%)
            rotate(10deg)
            scale(1.12);
    }

    100% {
        transform:
            translate(-5%, 8%)
            rotate(-8deg)
            scale(1.18);
    }
}
```

Animasi `auroraMove` mengubah posisi, rotasi, dan ukuran lapisan latar.

- `translate()` menggeser elemen.
- `rotate()` memutar elemen.
- `scale()` memperbesar atau memperkecil elemen.

Pada tahap 0%, elemen berada pada transformasi awal. Pada 50%, elemen bergeser, berputar, dan membesar. Pada 100%, transformasinya berubah kembali ke posisi lain.

Pengaturan `12s ease-in-out infinite alternate` berarti animasi berlangsung selama 12 detik, menggunakan percepatan dan perlambatan yang halus, lalu bergerak bolak-balik secara berulang.

Karena animasi terus berjalan dan memakai blur, efek ini dapat menggunakan sumber daya grafis. Performa sebaiknya diuji pada perangkat yang menjadi target website.

## 6. Scroll Progress

```css
#scroll-progress {
    position: fixed;

    top: 0;
    left: 0;

    width: 0%;
    height: 2px;

    background: var(--accent);

    z-index: 2000;
}
```

Selector `#scroll-progress` menargetkan elemen HTML yang memiliki ID `scroll-progress`.

- `position: fixed`: menjaga indikator tetap berada di posisi layar.
- `top: 0` dan `left: 0`: menempatkan indikator di pojok kiri atas viewport.
- `width: 0%`: menetapkan lebar awal menjadi nol.
- `height: 2px`: memberikan ketebalan dua piksel.
- `background: var(--accent)`: menggunakan warna aksen dari variabel CSS.
- `z-index: 2000`: menempatkan indikator di atas banyak elemen halaman lainnya.

Elemen ini dirancang sebagai garis tipis di bagian atas layar. JavaScript dapat mengubah `width` dari 0% hingga 100% berdasarkan progres scroll.

Tanpa JavaScript atau aturan lain yang mengubah lebarnya, indikator akan tetap memiliki lebar awal nol.

## 7. Section

```css
section {
    padding: 100px 0;
}
```

Selector `section` menargetkan seluruh elemen `<section>` pada halaman.

`padding: 100px 0` memberikan padding atas dan bawah masing-masing 100 piksel, sedangkan padding kiri dan kanan bernilai nol.

Tujuannya adalah memberikan ruang vertikal antarbagiannya agar konten tidak terlihat terlalu rapat.

### Judul langsung di dalam section

```css
section > h2 {
    margin-bottom: 30px;
    color: var(--accent);
    font-size: 32px;
}
```

Selector `section > h2` hanya menargetkan elemen `<h2>` yang menjadi anak langsung dari `<section>`.

- `margin-bottom: 30px`: memberikan jarak 30 piksel di bawah judul.
- `color: var(--accent)`: menggunakan warna aksen.
- `font-size: 32px`: menetapkan ukuran teks judul menjadi 32 piksel.

Selector ini berbeda dari `section h2`, yang juga dapat menargetkan `<h2>` di dalam elemen turunan section.

## 8. Hubungan Antarbagiannya

CSS ini membagi tampilan website menjadi beberapa lapisan:

1. **Root variables** menyediakan nilai warna dan gradasi yang bisa digunakan kembali.
2. **Page loader** menampilkan animasi loading dan menghilang setelah jeda.
3. **Global styles** mengatur margin, padding, font, warna, dan perilaku dasar halaman.
4. **Main layout** membatasi lebar konten dan menentukan jarak dari tepi.
5. **Aurora background** memberikan efek cahaya dekoratif yang bergerak.
6. **Scroll progress** menyediakan garis indikator scroll di bagian atas layar.
7. **Section styles** mengatur jarak vertikal antarbagiannya dan tampilan judul section.

## Kesimpulan

CSS ini berfungsi sebagai fondasi tampilan visual portfolio Mora-project-ui. Variabel CSS membantu menjaga konsistensi warna, loader memberikan indikator pemuatan halaman, global styles mengatur dasar layout, aurora memberikan efek dekoratif, scroll progress menyediakan tempat untuk indikator scroll, dan section styles mengatur jarak serta judul bagian halaman.

Beberapa efek memerlukan dukungan JavaScript atau aturan CSS lain agar berfungsi sepenuhnya. Contohnya, indikator scroll membutuhkan pembaruan lebar, sedangkan loader hanya menghilang secara visual dan tidak otomatis dihapus dari DOM.
