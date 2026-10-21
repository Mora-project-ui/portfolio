
### Dokumentasi CSS — Hero Section

### 1\. Mengatur Tampilan Utama Hero

```css
/* =========================
   HERO
========================= */

#hero {
    min-height: 85vh;

    display: flex;

    align-items: center;
}
```

### Penjelasan

Selector `#hero` memilih elemen HTML yang memiliki `id="hero"`. Bagian ini biasanya menjadi area utama yang pertama kali dilihat pengunjung ketika membuka website. Pada website profil pribadi, hero dapat berisi nama, deskripsi singkat, tombol navigasi, dan foto profil.

* `min-height: 85vh;` — menetapkan tinggi minimum elemen sebesar 85% dari tinggi viewport, yaitu area tampilan browser. Satuan `vh` berarti viewport height. Jika tinggi layar 800 piksel, maka 85vh setara dengan 680 piksel.

* `display: flex;` — mengaktifkan Flexbox agar elemen di dalam `#hero` dapat diatur menggunakan sistem tata letak yang fleksibel.

* `align-items: center;` — memusatkan elemen anak secara vertikal pada sumbu silang Flexbox. Karena arah Flexbox secara default adalah baris, properti ini membuat konten berada di tengah secara vertikal.

Perlu diketahui bahwa `min-height` menetapkan tinggi minimum, bukan tinggi yang selalu tetap. Jika konten membutuhkan ruang lebih besar, elemen dapat bertambah tinggi.

Contoh HTML:

```html
<section id="hero">
    <div class="hero-content">
        <!-- Teks dan foto profil -->
    </div>
</section>
```

Dengan struktur tersebut, `#hero` menjadi area utama yang membungkus konten hero.

### 2\. Mengatur Susunan Konten Hero

```css
.hero-content {
    width: 100%;

    display: grid;

    grid-template-columns:
        1fr 300px;

    align-items: center;

    gap: 80px;
}
```

Selector `.hero-content` mengatur wadah yang menampung teks dan gambar pada bagian hero.

* `width: 100%;` — membuat lebar wadah sebesar 100% dari lebar area yang tersedia pada elemen induknya.

* `display: grid;` — mengaktifkan CSS Grid untuk menyusun konten berdasarkan baris dan kolom.

* `grid-template-columns: 1fr 300px;` — membuat dua kolom dengan ukuran berbeda.

    * `1fr` — kolom pertama mengambil satu bagian dari ruang yang tersedia setelah memperhitungkan ukuran kolom tetap dan jarak.

    * `300px` — kolom kedua memiliki lebar tetap 300 piksel.

* `align-items: center;` — memusatkan item Grid secara vertikal di dalam area sel masing-masing.

* `gap: 80px;` — memberikan jarak 80 piksel antara kolom teks dan kolom gambar.

### Bagaimana cara kerja `1fr 300px`?

Misalnya, wadah memiliki lebar 1.100 piksel dan jarak antarkolom 80 piksel.

Kolom teks

### 720 px

1fr

80 px

Foto

### 300 px

Ilustrasi pembagian lebar: 720 + 80 + 300 = 1.100 piksel.

Kolom teks mendapatkan ruang yang tersisa, sedangkan kolom foto tetap memiliki ukuran 300 piksel. Karena itu, teks dan foto bisa tersusun berdampingan tanpa menggunakan pengaturan posisi manual.

### 3\. Membatasi Lebar Area Teks Hero

```css
.hero-text {
    max-width: 650px;
}
```

Selector `.hero-text` mengatur wadah yang berisi tulisan pada bagian hero.

\- `max-width: 650px;` — membatasi lebar maksimum area teks hingga 650 piksel. Jika ruang yang tersedia lebih sempit, lebarnya dapat menyesuaikan.

Properti ini berguna agar teks tidak terlalu melebar ke samping. Lebar baris yang terkontrol juga membuat judul dan deskripsi lebih nyaman dibaca.

Contoh HTML:

```html
<div class="hero-text">
    <p class="eyebrow">Hello, I'm</p>

    <h1>Mohammad Rama</h1>

    <h2>Linux Enthusiast</h2>

    <p class="hero-description">
        Building, learning, and experimenting.
    </p>
</div>
```

Struktur tersebut menunjukkan bahwa `.hero-text` membungkus beberapa elemen teks yang memiliki fungsi berbeda.

### 4\. Mengatur Teks Eyebrow

```css
#hero .eyebrow {
    color: var(--accent);

    font-size: 18px;

    margin-bottom: 10px;
}
```

Selector `#hero .eyebrow` memilih elemen yang memiliki class `eyebrow` dan berada di dalam elemen `id="hero"`.

Teks eyebrow merupakan tulisan pendek yang biasanya diletakkan di atas judul utama sebagai pengantar.

* `color: var(--accent);` — menggunakan warna aksen dari variabel CSS `--accent`. Warna ini bisa digunakan untuk menonjolkan bagian tertentu dalam desain.

* `font-size: 18px;` — menetapkan ukuran teks sebesar 18 piksel.

* `margin-bottom: 10px;` — memberikan jarak 10 piksel di bawah teks agar tidak terlalu dekat dengan judul utama.

Contoh HTML:

```html
<p class="eyebrow">Hello, I'm</p>
```

Tulisan tersebut menjadi pengantar sebelum pengunjung membaca nama yang ditampilkan dalam judul utama.

### 5\. Mengatur Judul Utama Hero

```css
#hero h1 {
    font-size:
        clamp(48px, 7vw, 80px);

    line-height: 1.05;

    margin-bottom: 15px;
}
```

Selector `#hero h1` memilih semua elemen `<h1>` yang berada di dalam elemen `#hero`.

Elemen `<h1>` biasanya digunakan untuk judul paling utama pada halaman, misalnya nama pemilik website.

* `font-size: clamp(48px, 7vw, 80px);` — mengatur ukuran huruf secara responsif menggunakan fungsi `clamp()`.

    * `48px` adalah ukuran minimum.

    * `7vw` adalah ukuran yang mengikuti 7% lebar viewport.

    * `80px` adalah ukuran maksimum.

    Artinya, ukuran huruf akan menyesuaikan lebar layar, tetapi tidak lebih kecil dari 48 piksel dan tidak lebih besar dari 80 piksel.

* `line-height: 1.05;` — mengatur tinggi baris sebesar 1,05 kali ukuran huruf. Nilai ini membuat jarak vertikal antarbaris relatif rapat, terutama ketika judul terbungkus menjadi beberapa baris.

* `margin-bottom: 15px;` — memberikan jarak 15 piksel di bawah judul.

### Bagaimana cara kerja `clamp()`?

Misalnya, ukuran huruf yang dihasilkan `7vw` adalah 35 piksel. Karena lebih kecil daripada batas minimum 48 piksel, ukuran yang digunakan adalah 48 piksel.

Jika hasil `7vw` adalah 60 piksel, ukuran yang digunakan adalah 60 piksel.

Jika hasil `7vw` adalah 100 piksel, ukuran yang digunakan dibatasi menjadi 80 piksel.

Jadi, `clamp()` menjaga agar judul tetap fleksibel sekaligus memiliki batas ukuran yang jelas.

### 6\. Mengatur Subjudul Hero

```css
#hero h2 {
    color: var(--muted);

    font-size: 25px;

    font-weight: normal;

    margin-bottom: 20px;
}
```

Selector `#hero h2` memilih elemen `<h2>` yang berada di dalam `#hero`. Subjudul ini biasanya menjelaskan peran, minat, atau bidang yang ditekuni pemilik website.

* `color: var(--muted);` — menggunakan warna teks sekunder dari variabel `--muted`. Warna ini biasanya lebih lembut daripada warna teks utama.

* `font-size: 25px;` — menetapkan ukuran huruf sebesar 25 piksel.

* `font-weight: normal;` — menggunakan ketebalan huruf normal, bukan tebal seperti tampilan bawaan banyak elemen heading.

* `margin-bottom: 20px;` — memberikan jarak 20 piksel di bawah subjudul sebelum deskripsi.

Contoh HTML:

```html
<h2>Linux Enthusiast & Developer</h2>
```

Subjudul membantu pengunjung memahami bidang yang diminati pemilik website setelah membaca nama utamanya.

### 7\. Mengatur Deskripsi Hero

```css
.hero-description {
    max-width: 600px;

    color: var(--muted);

    font-size: 18px;

    margin-bottom: 30px;
}
```

Selector `.hero-description` mengatur tampilan paragraf deskripsi pada hero.

* `max-width: 600px;` — membatasi lebar maksimum paragraf menjadi 600 piksel agar baris teks tidak terlalu panjang.

* `color: var(--muted);` — menggunakan warna teks sekunder.

* `font-size: 18px;` — menetapkan ukuran huruf sebesar 18 piksel.

* `margin-bottom: 30px;` — memberikan jarak 30 piksel di bawah deskripsi sebelum bagian tombol.

Contoh HTML:

```html
<p class="hero-description">
    I enjoy exploring Linux, building small projects,
    and learning through hands-on experimentation.
</p>
```

Deskripsi ini memberikan informasi tambahan mengenai pemilik website tanpa harus menggunakan paragraf yang terlalu panjang.

Perlu dibedakan bahwa `.hero-text` membatasi seluruh area teks, sedangkan `.hero-description` membatasi lebar paragraf secara khusus.

### 8\. Mengatur Susunan Tombol Hero

```css
.hero-buttons {
    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}
```

Selector `.hero-buttons` mengatur wadah yang berisi tombol atau tautan pada hero.

* `display: flex;` — menyusun tautan dalam satu baris secara default.

* `gap: 12px;` — memberikan jarak 12 piksel di antara setiap tautan.

* `flex-wrap: wrap;` — mengizinkan tautan berpindah ke baris berikutnya ketika ruang horizontal tidak mencukupi.

Properti `flex-wrap: wrap` berguna untuk menjaga agar tombol tidak terus memaksakan diri dalam satu baris pada layar yang sempit.

Contoh HTML:

```html
<div class="hero-buttons">
    <a href="#about">About Me</a>
    <a href="#projects">My Projects</a>
    <a href="https://github.com/">GitHub</a>
</div>
```

Dengan susunan tersebut, tautan akan berjajar secara horizontal selama ruangnya cukup dan dapat membungkus ke baris berikutnya jika diperlukan.

### 9\. Mengatur Tampilan Tombol Hero

```css
.hero-buttons a {
    padding:
        10px 18px;

    border:
        1px solid var(--border);

    border-radius: 8px;

    color: var(--text);

    text-decoration: none;

    transition: 0.2s;
}
```

Selector `.hero-buttons a` memilih seluruh elemen tautan `<a>` yang berada di dalam wadah `.hero-buttons`.

* `padding: 10px 18px;` — memberikan ruang di dalam tombol.

    * `10px` untuk bagian atas dan bawah.

    * `18px` untuk bagian kiri dan kanan.

* `border: 1px solid var(--border);` — membuat garis tepi setebal 1 piksel dengan jenis garis solid dan warna dari variabel `--border`.

* `border-radius: 8px;` — membulatkan sudut tombol sebesar 8 piksel.

* `color: var(--text);` — menggunakan warna teks utama.

* `text-decoration: none;` — menghilangkan garis bawah bawaan tautan.

* `transition: 0.2s;` — membuat perubahan properti yang mendukung transisi berlangsung selama 0,2 detik, sehingga perubahan tampilan terasa lebih halus.

Contoh HTML:

```html
<a href="#projects">My Projects</a>
```

Walaupun menggunakan elemen `<a>`, tautan tersebut dapat dibuat menyerupai tombol melalui kombinasi `padding`, `border`, `border-radius`, dan pengaturan teks.

Perlu diingat, elemen tersebut tetap merupakan tautan HTML, sehingga fungsi utamanya adalah membawa pengunjung ke alamat atau bagian halaman tertentu.

### 10\. Mengatur Efek Hover Tombol Hero

```css
.hero-buttons a:hover {
    border-color: var(--accent);

    color: var(--accent);

    transform:
        translateY(-2px);
}
```

Selector `.hero-buttons a:hover` menerapkan perubahan tampilan ketika pointer mouse berada di atas tautan.

* `border-color: var(--accent);` — mengubah warna garis tepi menjadi warna aksen.

* `color: var(--accent);` — mengubah warna teks tombol menjadi warna aksen.

* `transform: translateY(-2px);` — menggeser tampilan tombol sejauh 2 piksel ke atas pada sumbu Y.

Karena tombol sebelumnya memiliki `transition: 0.2s`, perubahan warna dan posisi yang mendukung transisi akan terlihat lebih halus.

### Perbedaan `:hover` dan `transition`

* `:hover` menentukan tampilan ketika pointer berada di atas elemen.

* `transition` mengatur seberapa halus perubahan dari satu tampilan ke tampilan lainnya.

Keduanya saling melengkapi untuk menghasilkan efek interaktif yang lebih nyaman dilihat.

### 11\. Mengatur Posisi Gambar Hero

```css
.hero-image {
    display: flex;

    justify-content: center;
}
```

Selector `.hero-image` mengatur wadah gambar profil pada bagian hero.

* `display: flex;` — mengaktifkan Flexbox di dalam wadah gambar.

* `justify-content: center;` — memusatkan gambar secara horizontal di dalam wadah.

Karena arah Flexbox secara default adalah baris, `justify-content: center` mengatur posisi gambar di tengah sumbu horizontal.

Contoh HTML:

```html
<div class="hero-image">
    <img src="profile.jpg" alt="Foto profil">
</div>
```

Wadah `.hero-image` berfungsi sebagai pengatur posisi, sedangkan ukuran, bentuk, dan efek visual gambar ditentukan oleh selector `.hero-image img`.

### 12\. Mengatur Ukuran dan Bentuk Gambar Hero

```css
.hero-image img {
    width: 260px;
    height: 260px;

    object-fit: cover;

    border-radius: 50%;

    border:
        3px solid var(--accent);

    box-shadow:
        0 0 40px rgba(198, 169, 107, 0.12);
}
```

Selector `.hero-image img` memilih elemen gambar `<img>` yang berada di dalam `.hero-image`.

* `width: 260px;` — menetapkan lebar gambar sebesar 260 piksel.

* `height: 260px;` — menetapkan tinggi gambar sebesar 260 piksel. Dengan lebar dan tinggi yang sama, gambar memiliki wadah berbentuk persegi.

* `object-fit: cover;` — membuat gambar memenuhi seluruh area yang ditentukan tanpa merusak rasio aslinya. Jika proporsi foto berbeda dari wadah, sebagian gambar dapat terpotong.

* `border-radius: 50%;` — membuat sudut gambar membulat hingga berbentuk lingkaran karena lebar dan tingginya sama.

* `border: 3px solid var(--accent);` — menambahkan garis tepi setebal 3 piksel dengan warna aksen.

* `box-shadow: 0 0 40px rgba(198, 169, 107, 0.12);` — menambahkan bayangan di sekitar gambar.

Nilai `box-shadow` terdiri dari beberapa bagian:

| Nilai                     | Fungsi                                      |
| ------------------------- | ------------------------------------------- |
| 0                         | Pergeseran horizontal bayangan              |
| 0                         | Pergeseran vertikal bayangan                |
| 40px                      | Tingkat blur atau penyebaran halus bayangan |
| rgba(198, 169, 107, 0.12) | Warna bayangan beserta transparansinya      |

Fungsi `rgba()` menggunakan nilai merah, hijau, biru, dan alpha. Angka alpha `0.12` berarti tingkat opasitas sekitar 12%, sehingga bayangan terlihat lembut.

Dengan pengaturan ini, foto profil berbentuk lingkaran dengan garis tepi dan efek cahaya tipis yang mengikuti warna aksen website.

### Dokumentasi CSS — Hero Intro

Bagian kedua pada kode mengatur animasi ketika konten hero pertama kali ditampilkan. Berbeda dari bagian sebelumnya yang berfokus pada tata letak dan tampilan, bagian ini mengatur bagaimana teks dan foto muncul di layar.

### 13\. Memberikan Animasi pada Teks Hero

```css
/* =========================
   HERO INTRO
========================= */

.hero-text {
    animation:
        heroText 0.8s ease forwards;
}
```

Selector `.hero-text` memberikan animasi pada seluruh wadah teks hero.

Properti `animation` di atas merupakan bentuk singkat dari beberapa pengaturan animasi CSS.

* `heroText` — nama animasi yang akan dijalankan. Nama ini harus sesuai dengan nama pada aturan `@keyframes`.

* `0.8s` — menentukan durasi animasi selama 0,8 detik.

* `ease` — mengatur kecepatan animasi agar perubahan terasa lebih lambat di awal dan akhir dibandingkan bagian tengahnya.

* `forwards` — membuat elemen mempertahankan nilai properti pada tahap akhir animasi setelah animasi selesai.

Animasi yang digunakan didefinisikan pada bagian `@keyframes heroText`.

Dengan demikian, teks hero akan muncul menggunakan gerakan dari kiri ke posisi akhirnya, bukan langsung tampil pada posisi tersebut.

### 14\. Memberikan Animasi pada Gambar Hero

```css
.hero-image {
    animation:
        heroImage 0.8s ease 0.15s forwards;

    opacity: 0;
}
```

Selector `.hero-image` memberikan animasi pada wadah foto profil.

* `animation: heroImage 0.8s ease 0.15s forwards;` — menjalankan animasi bernama `heroImage` selama 0,8 detik, menggunakan kurva kecepatan `ease`, dengan penundaan 0,15 detik sebelum dimulai, lalu mempertahankan keadaan akhir animasi.

* `opacity: 0;` — membuat elemen sepenuhnya transparan sebelum animasi dimulai.

Urutan nilai `animation` pada kode tersebut adalah:

* `heroImage` — nama animasi.

* `0.8s` — durasi animasi.

* `ease` — pola perubahan kecepatan.

* `0.15s` — jeda sebelum animasi dimulai.

* `forwards` — mempertahankan tampilan akhir animasi.

Jeda 0,15 detik membuat foto mulai muncul sedikit setelah animasi teks dimulai. Efek ini menciptakan urutan visual yang membuat perhatian pengunjung tertuju pada teks terlebih dahulu, lalu pada gambar.

Catatan: `opacity: 0` membuat gambar tidak terlihat, tetapi elemen tersebut masih menempati ruang dalam layout. Jadi, foto tidak menghilang dari susunan Grid hanya karena transparan.

### 15\. Mendefinisikan Animasi Teks dengan `@keyframes`

```css
@keyframes heroText {

    from {
        opacity: 0;

        transform:
            translateX(-30px);
    }

    to {
        opacity: 1;

        transform:
            translateX(0);
    }
}
```

Aturan `@keyframes heroText` mendefinisikan perubahan tampilan dari awal hingga akhir animasi teks.

Berbeda dengan selector biasa, `@keyframes` menjelaskan tahapan perubahan properti selama animasi berlangsung.

### Tahap awal: `from`

```css
from {
    opacity: 0;

    transform:
        translateX(-30px);
}
```

* `opacity: 0;` — membuat teks sepenuhnya transparan.

* `transform: translateX(-30px);` — menggeser tampilan teks sejauh 30 piksel ke kiri dari posisi normalnya.

### Tahap akhir: `to`

```css
to {
    opacity: 1;

    transform:
        translateX(0);
}
```

* `opacity: 1;` — membuat teks terlihat sepenuhnya.

* `transform: translateX(0);` — mengembalikan tampilan teks ke posisi horizontal normalnya.

### Bagaimana prosesnya?

Awal

Transisi selama 0,8 detik

Teks bergerak ke kanan sambil berubah dari transparan menjadi terlihat.

Akhir

Hasil akhirnya adalah teks yang muncul secara bertahap dari arah kiri menuju posisi normalnya.

Perlu dipahami bahwa `translateX()` menggeser tampilan elemen tanpa mengubah posisi dasarnya dalam alur layout. Karena itu, animasi ini tidak membuat elemen lain ikut bergeser seperti yang dapat terjadi jika ukuran atau margin layout diubah.

### 16\. Mendefinisikan Animasi Gambar dengan `@keyframes`

```css
@keyframes heroImage {

    from {
        opacity: 0;

        transform:
            translateX(30px);
    }

    to {
        opacity: 1;

        transform:
            translateX(0);
    }
}
```

Aturan `@keyframes heroImage` mendefinisikan tahapan animasi untuk wadah gambar hero.

### Tahap awal: `from`

```css
from {
    opacity: 0;

    transform:
        translateX(30px);
}
```

* `opacity: 0;` — membuat gambar sepenuhnya transparan.

* `transform: translateX(30px);` — menggeser tampilan gambar sejauh 30 piksel ke kanan dari posisi normalnya.

### Tahap akhir: `to`

```css
to {
    opacity: 1;

    transform:
        translateX(0);
}
```

* `opacity: 1;` — membuat gambar terlihat sepenuhnya.

* `transform: translateX(0);` — mengembalikan gambar ke posisi normalnya.

### Apa perbedaannya dengan animasi teks?

Perbedaan utamanya terdapat pada arah pergerakan:

| Bagian             | Posisi awal        | Posisi akhir  |
| ------------------ | ------------------ | ------------- |
| Teks (heroText)    | 30 piksel ke kiri  | Posisi normal |
| Gambar (heroImage) | 30 piksel ke kanan | Posisi normal |

Keduanya menggunakan durasi 0,8 detik dan kurva kecepatan `ease`. Namun, gambar memiliki penundaan 0,15 detik melalui properti `animation` pada selector `.hero-image`.

Hasilnya, teks dan foto bergerak dari arah yang berlawanan menuju posisi masing-masing, sehingga tampilan hero terasa lebih dinamis.

### 17\. Hubungan CSS dengan Struktur HTML Hero

Berikut contoh struktur HTML sederhana yang sesuai dengan selector pada kode CSS di atas.

```html
<section id="hero">
    <div class="hero-content">

        <div class="hero-text">
            <p class="eyebrow">Hello, I'm</p>

            <h1>Mohammad Rama</h1>

            <h2>Linux Enthusiast</h2>

            <p class="hero-description">
                Building, learning, and experimenting
                with Linux and open-source projects.
            </p>

            <div class="hero-buttons">
                <a href="#about">About Me</a>
                <a href="#projects">My Projects</a>
            </div>
        </div>

        <div class="hero-image">
            <img src="profile.jpg" alt="Foto profil">
        </div>

    </div>
</section>
```

Struktur tersebut menunjukkan hubungan antara HTML dan CSS:

* `#hero` menjadi area utama hero dan mengatur tinggi minimum serta perataan kontennya.

* `.hero-content` menyusun teks dan gambar dalam dua kolom.

* `.hero-text` membungkus tulisan sekaligus menerima animasi masuk dari kiri.

* `.eyebrow`, `h1`, `h2`, dan `.hero-description` mengatur masing-masing bagian teks.

* `.hero-buttons` menyusun tautan yang berfungsi sebagai tombol.

* `.hero-image` mengatur posisi foto sekaligus menerima animasi masuk dari kanan.

* `.hero-image img` menentukan ukuran, bentuk, garis tepi, dan bayangan foto.

HTML menentukan elemen dan struktur konten, sedangkan CSS mengatur tampilan, tata letak, dan animasinya.

### Kesimpulan

CSS Hero pada kode ini memiliki dua fungsi utama.

Pertama, mengatur layout dan desain hero. Bagian ini menentukan tinggi area utama, pembagian kolom, ukuran teks, tampilan tombol, serta bentuk foto profil. Kombinasi Flexbox dan CSS Grid membuat teks dan gambar tersusun berdampingan, sementara `clamp()` membantu ukuran judul menyesuaikan lebar layar.

Kedua, menambahkan animasi saat halaman dibuka. Teks muncul dari kiri dan gambar muncul dari kanan. Keduanya bergerak menuju posisi normal sambil berubah dari transparan menjadi terlihat. Animasi gambar dimulai 0,15 detik setelah animasi teks.

Intinya: hero adalah bagian pengenalan utama website. CSS ini membuatnya bukan hanya informatif, tetapi juga memiliki susunan visual yang jelas dan efek animasi yang halus.

Catatan tambahan: kode yang diberikan belum menyertakan aturan media query untuk layar kecil. Karena kolom foto tetap 300 piksel dan jarak antarkolom 80 piksel, layout sebaiknya dilengkapi pengaturan responsif agar teks dan foto tidak terlalu sempit pada ponsel.
