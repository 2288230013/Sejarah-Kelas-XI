
@echo off
title Nusantara Bangkit - Localhost Server
echo ==========================================================
echo   Nusantara Bangkit - Menjalankan di Localhost...
echo   Membuka peramban di http://localhost:8080
echo ==========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause

# PANDUAN PENGGUNAAN & FITUR
## Website Media Pembelajaran Sejarah Siswa SMA/SMK Kelas XI
### Tema: "Perlawanan Pribumi terhadap Kolonialisme"

Website ini dirancang khusus dengan konsep **"Museum Sejarah Digital + Media Pembelajaran Modern"**, menyajikan sejarah perjuangan bangsa Indonesia secara interaktif, visual, menyenangkan, dan berbobot akademis sesuai Capaian Pembelajaran Kurikulum Nasional.

---

### 🏛️ 1. Struktur Halaman & Fitur Utama

1. **🏠 Halaman Beranda (Home)**
   - **Judul:** *“Perlawanan Pribumi terhadap Kolonialisme”*
   - **Subjudul:** *“Belajar sejarah perjuangan rakyat Indonesia dengan cara yang lebih interaktif.”*
   - **Visual:** Lukisan museum sejarah berbingkai emas, armada kapal Portugis & VOC, benteng pertahanan Nusantara, tokoh-tokoh pahlawan, dan ornamen klasik.
   - **Tombol Navigasi Cepat:** 📚 *Mulai Belajar*, 🎮 *Mainkan Kuis*, ✏️ *Buat Materi*.
   - **Tiga Kartu Era Kolonialisme:**
     - **PORTUGIS:** Ternate, Demak, Aceh
     - **VOC (Kongsi Dagang Belanda):** Mataram, Sultan Hasanuddin
     - **PEMERINTAH HINDIA BELANDA:** Pattimura, Diponegoro, Palembang, Padri, Aceh, Sisingamangaraja XII, Bali, Banjar.

2. **📚 Halaman Materi (Pustaka Sejarah Interaktif)**
   - Menyajikan **13 topik perlawanan pribumi** lengkap yang dibagi dalam 3 era besar.
   - Setiap materi disajikan dalam format 6 langkah sistematis:
     1. **📜 Latar Belakang & Faktor Pemicu**
     2. **👤 Profil Tokoh Kunci & Pahlawan**
     3. **⚔️ Jalannya Perlawanan (Kronologi Langkah)**
     4. **🎯 Taktik & Strategi Peperangan**
     5. **🏁 Akhir Perlawanan**
     6. **🌟 Dampak & Makna Sejarah**
   - **Fitur Audio Narator (Text-to-Speech):** Siswa dapat mendengarkan materi dibacakan secara otomatis untuk mempermudah pemahaman.

3. **✏️ Fitur "Buat Materi" (Slide Studio mirip PowerPoint Sederhana)**
   - **Panel Kiri:** Daftar thumbnail slide (tambah, hapus, duplikasi, urutkan slide).
   - **Bagian Tengah:** Kanvas slide 16:9 interaktif dengan dukungan *drag-and-drop* posisi elemen.
   - **Panel Kanan:** Inspektur elemen (tambah judul, paragraf, kutipan heroik, foto tokoh, lencana, serta ubah ukuran teks, warna, dan tema background).
   - **8 Template Siap Pakai:**
     - Cover materi
     - Profil tokoh
     - Timeline
     - Peta perlawanan
     - Sebab dan akibat
     - Jalannya perlawanan
     - Dampak
     - Kesimpulan
   - **Mode Presentasi Layar Penuh (Slideshow):** Menampilkan presentasi layar penuh dengan transisi slide dan navigasi tombol keyboard panah.
   - **Penyimpanan Ganda:** Tersimpan aman di memori lokal (*localStorage*) dan dapat disinkronkan ke Google Spreadsheet.

4. **🎮 Game Edukatif: Kuis Perlawanan Nusantara**
   - Kuis interaktif berbasis kartu soal dengan progress bar dan penghitung nomor soal.
   - Pilihan ganda interaktif (A, B, C, D) dengan efek suara ceria (*Web Audio API*).
   - Umpan balik seketika: Jawaban benar ✅, Jawaban salah ❌, penjelasan singkat sejarah, dan tombol lanjut.
   - Layar hasil: Skor akhir (contoh: 80/100), jumlah benar/salah, predikat siswa, serta form pengiriman nilai siswa ke Google Spreadsheet guru.

5. **✏️ Editor Kuis (Panel Guru)**
   - Guru dapat menambah soal baru, mengedit teks pertanyaan, opsi A/B/C/D, menentukan kunci jawaban, menyertakan gambar ilustrasi, serta memberikan penjelasan jawaban.
   - Dilengkapi tombol reset ke bank soal kurikulum standar dan tombol simpan ke Google Spreadsheet.
   - **Fitur Baru Rekap Nilai Siswa:** Menampilkan daftar nilai siswa lengkap dari Google Sheets (*Tab Nilai_Siswa*).

6. **🗺️ Peta Palagan Nusantara Interaktif**
   - Peta visual kepulauan Indonesia berornamen navigasi kuno dengan titik-titik pin bersinar di Maluku, Jawa, Aceh, Minangkabau, Palembang, Bali, Banjar, Batak, dan Gowa Makassar.
   - Mengklik pin akan membuka panel ringkasan perlawanan, pahlawan, benteng, dan pemutar video sejarah YouTube.

7. **⏳ Timeline Sejarah Kronologis**
   - Rentang waktu kronologis dari tahun 1511 (Jatuhnya Malaka) hingga awal abad ke-20.
   - Filter era (Abad 16 Portugis, Abad 17 VOC, Abad 19 Hindia Belanda).

8. **👤 Gerbang Identitas Siswa**
   - Siswa yang pertama kali masuk website diwajibkan mengisi: **Nama Lengkap**, **Tingkat (X, XI, XII)**, **Jurusan (TPM, TKRO, MPLB, AKL, TJKT, PPLG)**, dan **Rombel Kelas (1 s.d. 4)**.
   - Nama dan kelas lengkap (contoh: *XI TPM 1*, *XI PPLG 2*) otomatis terpampang di badge navbar dan otomatis terisi saat pengiriman skor kuis.

9. **🔐 Mode Guru & Keamanan Administrator**
   - Siswa **tidak dapat mengotak-atik** menu pengeditan (Buat Slide Materi, Edit Kuis, Ganti Video YouTube, dan Pengaturan Spreadsheet).
   - Seluruh menu pengeditan terkunci dengan password resmi guru: **`010901`**.
   - Guru dapat login langsung saat pertama membuka website melalui tab **`🔐 Masuk Guru (Sandi)`** pada jendela identitas, atau melalui tombol **`🔐 Mode Guru`** di pojok kanan atas.

---

### ☁️ 2. Cara Mengaktifkan Google Apps Script & Spreadsheet

Website ini sudah dilengkapi backend file `Code.gs` untuk menyimpan materi slide, soal kuis guru, dan rekap nilai siswa secara online di Google Sheets.

**Langkah Pemasangan (Hanya 3 Menit):**
1. Buka [Google Sheets](https://sheets.new) di browser Anda.
2. Beri nama file Spreadsheet, misalnya: `Database Sejarah Kolonialisme`.
3. Klik menu **Ekstensi (Extensions) > Apps Script**.
4. Buka file `Code.gs` yang ada di folder proyek ini, salin seluruh kodenya, dan tempelkan ke editor Apps Script menggantikan kode lama.
5. Jalankan fungsi `setupDatabase()` sekali untuk membuat tabel secara otomatis.
6. Klik tombol biru **Terapkan (Deploy) > Penerapan Baru (New Deployment)**.
7. Pilih jenis **Aplikasi Web (Web App)**:
   - **Jalankan sebagai:** Saya (*Me*)
   - **Yang memiliki akses:** Siapa saja (*Anyone*)
8. Klik **Terapkan (Deploy)** dan salin **URL Aplikasi Web** yang didapat.
9. Buka Website Pembelajaran Sejarah, klik tombol **Google Sheets** di navbar, tempelkan URL tersebut, lalu klik **Simpan & Uji Koneksi**.

---

### 💻 3. Cara Menjalankan Website Secara Lokal

Anda dapat membuka file `index.html` langsung di browser mana saja (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari) atau menggunakan server lokal sederhana:

```bash
# Menggunakan Python (sudah terinstal):
python -m http.server 8080

# Lalu buka di browser:
http://localhost:8080/
```

# ⚔️ Nusantara Bangkit — Media Pembelajaran Sejarah Interaktif
> **Media Pembelajaran Sejarah Indonesia SMA/SMK Kelas XI**  
> **Tema:** Perlawanan Pribumi terhadap Kolonialisme Bangsa Barat (Portugis, VOC, dan Pemerintah Hindia Belanda)

[![GitHub Pages](https://img.shields.io/badge/Hosted%20With-GitHub%20Pages-2ea44f?style=for-the-badge&logo=github)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Apps Script](https://img.shields.io/badge/Backend-Google%20Sheets%20API-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)](https://developers.google.com/apps-script)

---

## 🌟 Tentang Proyek

**Nusantara Bangkit** adalah platform media pembelajaran sejarah berbasis web yang dirancang dengan estetika *Museum Digital Klasik*, menggabungkan kekayaan narasi perjuangan bangsa Indonesia dengan teknologi pembelajaran modern dan interaktif.

Proyek ini dibuat untuk mendukung kegiatan belajar mengajar siswa SMA/SMK Kelas XI agar memahami peristiwa sejarah perlawanan pribumi secara mendalam, visual, dan menyenangkan.

---

## 🚀 Fitur Unggulan

### 1. 🗺️ Peta 3D Relief Nusantara & Bioskop Video Sejarah
* Peta 3D relief pulau-pulau Indonesia dengan titik koordinat pahlawan di berbagai penjuru Nusantara (Aceh, Padri Sumbar, Palembang, Banten, Batavia/Mataram, Jawa Diponegoro, Bali, Gowa Makassar, dan Maluku Pattimura).
* **Pemutar Video YouTube Bioskop:** Klik titik pahlawan untuk langsung menonton video dokumenter sejarah dari YouTube.
* Guru dan siswa dapat mengganti link video YouTube untuk setiap pahlawan langsung melalui tombol pengaturan video.

### 2. 📚 Pustaka Materi Sejarah 3 Era
* Memuat 12+ modul sejarah lengkap mencakup:
  * **Era Portugis:** Ternate (Sultan Baabullah), Malaka, Demak.
  * **Era VOC:** Kesultanan Mataram (Sultan Agung), Banten (Sultan Ageng Tirtayasa), Gowa (Sultan Hasanuddin).
  * **Era Hindia Belanda:** Perang Saparua (Pattimura), Perang Jawa (Pangeran Diponegoro), Perang Padri (Tuanku Imam Bonjol), Perang Bali (I Gusti Ketut Jelantik), Perang Banjar (Pangeran Antasari), Perang Aceh (Cut Nyak Dhien), dan Perang Batak (Sisingamangaraja XII).
* **Audio Narator (Text-to-Speech):** Materi dapat dibacakan secara otomatis oleh narator suara AI peramban.

### 3. 🎮 Kuis Interaktif Nusantara & Input Nilai Siswa
* Bank soal pilihan ganda interaktif dengan efek suara (*Web Audio API*), umpan balik seketika, pembahasan mendalam, dan timer.
* Formulir pengiriman nilai siswa (*Nama & Kelas*) yang tersambung langsung ke database guru.

### 4. ✏️ Studio Pembuat Slide Materi (Mirip PowerPoint Sederhana)
* Guru dan siswa dapat merancang materi presentasi interaktif sendiri menggunakan 8 template presentasi siap pakai.
* Dukungan *drag & drop* elemen, inspektur gaya, serta mode tayangan layar penuh (*Fullscreen Presentation*).

### 5. 👤 Gerbang Identitas Siswa
* Siswa wajib melengkapi identitas sebelum memulai pembelajaran: **Nama Lengkap**, **Tingkat (X/XI/XII)**, **Jurusan (TPM, TKRO, MPLB, AKL, TJKT, PPLG)**, dan **Rombel Kelas (1 s.d. 4)**.
* Data tersimpan di perangkat siswa dan **otomatis terisi saat kuis selesai**, memudahkan pengiriman nilai ke database guru tanpa repot mengetik ulang (contoh format: `XI TPM 1`, `XI PPLG 2`).
* Badge identitas siswa terpampang rapi di navbar (`👤 Nama (XI TPM 1)`).

### 6. 🔐 Mode Guru / Administrator (Proteksi Menu)
* Dilengkapi sistem keamanan PIN/Password resmi: **`010901`** untuk mencegah siswa mengotak-atik konten website.
* Dilengkapi tab login langsung khusus guru pada modal gerbang masuk awal, sehingga guru dapat langsung login tanpa mengisi data siswa.
* Menu yang terkunci dan tersembunyi bagi siswa:
  * ✏️ **Buat Slide Materi** (Slide Studio)
  * ⚙️ **Edit Kuis** (Bank Soal & Pengaturan Kuis)
  * 📊 **Rekap Nilai Siswa** (Rekapitulasi Spreadsheet)
  * ⚙️ **Ganti Video YouTube Pahlawan** (Peta Interaktif)
  * ☁️ **Pengaturan Sinkronisasi Google Sheets**
* Guru dapat berpindah antara Mode Guru dan Mode Siswa kapan saja dengan sekali klik.

### 7. ⏳ Timeline Sejarah Kronologis
* Garis waktu kronologis peristiwa perjuangan nusantara dari abad ke-16 hingga awal abad ke-20 dengan filter era.

---

## 📂 Struktur Berkas

```text
📁 tugas-sejarah/
├── 📁 assets/                     # Koleksi gambar pahlawan, banner era, dan peta 3D relief
│   ├── peta_indonesia_3d_final.png
│   ├── hero_perlawanan.jpg
│   ├── perlawanan_portugis.jpg
│   ├── perlawanan_voc.jpg
│   ├── perlawanan_belanda.jpg
│   └── (foto potret pahlawan)
├── index.html                    # Halaman tunggal utama aplikasi (Single Page App)
├── style.css                     # Gaya CSS modern bertema Museum Nusantara
├── app.js                        # Seluruh logika interaksi, kuis, peta, audio, dan API
├── data.js                       # Data bank materi, soal kuis kurikulum, dan URL video
├── Code.gs                       # Backend Google Apps Script untuk Google Spreadsheet
├── PANDUAN_PENGGUNAAN.md         # Petunjuk lengkap penggunaan fitur untuk guru & siswa
└── README.md                     # Informasi dokumentasi repositori GitHub ini
```

---

## 🛠️ Panduan Menjalankan Secara Mandiri

### Opsi A: Jalankan di Komputer Lokal
Cukup klik ganda file `index.html` untuk membuka di browser apa saja (Chrome, Edge, Firefox, Safari).

Atau menggunakan server lokal sederhana:
```bash
python -m http.server 8080
```
Buka browser di: `http://localhost:8080`

### Opsi B: Akses Melalui GitHub Pages
Website ini dapat dihosting secara online dan gratis via GitHub Pages:
1. Masuk ke tab **Settings** di repositori GitHub ini.
2. Pilih menu **Pages** di sebelah kiri.
3. Atur Branch ke **`main`** / folder **`/(root)`** dan klik **Save**.
4. Website akan langsung aktif dalam 1-2 menit dengan tautan: `https://<username>.github.io/<nama-repo>/`.

---

## ☁️ Integrasi Google Spreadsheet

1. Buat Spreadsheet baru di [Google Sheets](https://sheets.new).
2. Pilih menu **Ekstensi > Apps Script**.
3. Salin seluruh isi file [`Code.gs`](./Code.gs) ke editor Apps Script.
4. Klik **Deploy (Terapkan) > New Deployment (Penerapan Baru)** dengan jenis **Web App** (Akses: *Anyone / Siapa saja*).
5. Salin URL Web App yang dihasilkan ke tombol **Sinkronisasi Google Sheets** di navbar aplikasi.

---

## 🎓 Hak Cipta & Kurikulum
Dirancang khusus untuk mendukung pembelajaran mata pelajaran **Sejarah Indonesia Kelas XI SMA/SMK** berdasarkan Capaian Pembelajaran Kurikulum Nasional.
Semoga bermanfaat dalam mengobarkan semangat nasionalisme dan literasi sejarah generasi muda bangsa! 🇮🇩

# Localhost Server Nusantara Bangkit
$port = 8080
$url = "http://localhost:$port/"
$folder = $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($folder)) {
    $folder = (Get-Location).Path
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
} catch {
    Write-Host "Port 8080 sedang digunakan, mencoba port 8000..."
    $port = 8000
    $url = "http://localhost:$port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    $listener.Start()
}

Write-Host "=========================================================="
Write-Host "Server Nusantara Bangkit Berjalan di: $url"
Write-Host "Folder: $folder"
Write-Host "Tekan Ctrl+C untuk menghentikan server."
Write-Host "=========================================================="

Start-Process $url

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".mp3"  = "audio/mpeg"
    ".wav"  = "audio/wav"
    ".webp" = "image/webp"
    ".md"   = "text/markdown; charset=utf-8"
    ".txt"  = "text/plain; charset=utf-8"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath
        if ($rawPath -eq "/" -or [string]::IsNullOrWhiteSpace($rawPath)) {
            $rawPath = "/index.html"
        }

        $decodedPath = [System.Uri]::UnescapeDataString($rawPath).TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($folder, $decodedPath)

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            $response.ContentType = $contentType
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.StatusCode = 200

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "[200 OK] $rawPath"
        } else {
            $response.StatusCode = 404
            $errContent = "<h1>404 Not Found</h1><p>File $rawPath tidak ditemukan.</p>"
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errContent)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            Write-Host "[404 Not Found] $rawPath"
        }

        $response.OutputStream.Close()
    }
} catch {
    Write-Host "Server dihentikan."
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}

/* =========================================================================
   NUSANTARA BANGKIT: MEDIA PEMBELAJARAN SEJARAH KELAS XI
   Tema Desain: Museum Sejarah Digital + Media Pembelajaran Modern
   Palet: Krem, Cokelat, Merah Marun, Emas, Biru Tua
   ========================================================================= */

:root {
  /* Palet Warna Utama */
  --bg-parchment: #FBF8F1;
  --bg-parchment-light: #FFFDF9;
  --bg-card: #FFFFFF;
  --bg-card-alt: #F5EFE6;
  --bg-card-hover: #FAF3EB;
  
  --text-primary: #2C1810;
  --text-secondary: #5C4738;
  --text-muted: #8C7565;
  --text-light: #FBF8F1;
  
  --maroon: #801616;
  --maroon-dark: #580B0B;
  --maroon-light: #9E1F1F;
  --maroon-soft: rgba(128, 22, 22, 0.08);
  
  --gold: #C59B27;
  --gold-light: #ECC94B;
  --gold-dark: #997415;
  --gold-glow: rgba(197, 155, 39, 0.25);
  
  --brown-deep: #3A2010;
  --brown-warm: #6B4226;
  --brown-soft: rgba(58, 32, 16, 0.06);
  
  --navy-deep: #16243E;
  --navy-dark: #0D1628;
  --navy-light: #2A4068;
  --navy-soft: rgba(22, 36, 62, 0.08);

  --success: #1E7E34;
  --success-bg: #E8F5E9;
  --danger: #C53030;
  --danger-bg: #FFEBEE;
  
  /* Border & Bayangan */
  --border-gold: rgba(197, 155, 39, 0.35);
  --border-subtle: rgba(92, 71, 56, 0.15);
  --border-maroon: rgba(128, 22, 22, 0.25);
  
  --shadow-sm: 0 2px 6px rgba(44, 24, 16, 0.06);
  --shadow-md: 0 6px 18px rgba(44, 24, 16, 0.09);
  --shadow-lg: 0 14px 35px rgba(44, 24, 16, 0.12);
  --shadow-gold: 0 8px 25px rgba(197, 155, 39, 0.3);
  --shadow-museum: 0 12px 40px rgba(22, 36, 62, 0.15);

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  
  /* Transisi */
  --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-bounce: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Reset & Dasar */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  color: var(--text-primary);
  background-color: var(--bg-parchment);
  background-image: 
    radial-gradient(var(--border-subtle) 1px, transparent 1px),
    linear-gradient(to bottom, #FFFDF9 0%, #F8F4EB 100%);
  background-size: 32px 32px, 100% 100%;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* Tipografi Bernuansa Sejarah */
h1, h2, h3, .font-serif, .hero-title, .era-tag, .materi-era-group-title {
  font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
  letter-spacing: 0.02em;
}

h1 { font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; line-height: 1.2; }
h2 { font-size: clamp(1.5rem, 2.5vw, 2.25rem); font-weight: 700; line-height: 1.3; }
h3 { font-size: clamp(1.2rem, 1.8vw, 1.6rem); font-weight: 700; }

a {
  color: inherit;
  text-decoration: none;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
}

/* =========================================================================
   NAVBAR (HEADER)
   ========================================================================= */
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 253, 249, 0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 2px solid var(--border-gold);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.navbar {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.brand-emblem {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--maroon), var(--brown-deep));
  border: 2px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-light);
  box-shadow: 0 4px 10px rgba(128, 22, 22, 0.25);
}

.brand-text h1 {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--maroon);
  line-height: 1.1;
  letter-spacing: 0.03em;
}

.brand-text p {
  font-size: 0.75rem;
  color: var(--gold-dark);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  list-style: none;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.95rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  cursor: pointer;
  border: 1px solid transparent;
}

.nav-link:hover {
  color: var(--maroon);
  background: var(--maroon-soft);
  border-color: rgba(128, 22, 22, 0.15);
}

.nav-link.active {
  color: var(--maroon);
  background: #FFF5F5;
  border-color: var(--border-maroon);
  box-shadow: inset 0 0 0 1px var(--maroon-light);
}

.nav-link svg {
  width: 18px;
  height: 18px;
  transition: transform var(--transition-fast);
}

.nav-link:hover svg {
  transform: scale(1.15);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-sync {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-md);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.btn-sync:hover {
  background: #FFFDF5;
  border-color: var(--gold);
  color: var(--brown-deep);
  transform: translateY(-1px);
}

.sync-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #9E9E9E;
  transition: background-color var(--transition-normal);
}

.sync-status-dot.connected {
  background: #2E7D32;
  box-shadow: 0 0 8px rgba(46, 125, 50, 0.6);
}

.mobile-toggle {
  display: none;
  background: none;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 0.5rem;
  cursor: pointer;
  color: var(--text-primary);
}

/* =========================================================================
   CONTAINER & LAYOUT UMUM
   ========================================================================= */
.main-content {
  flex: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.view-section {
  display: none;
  animation: fadeIn 0.35s ease-out;
}

.view-section.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2.5rem;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.85rem;
  background: var(--maroon-soft);
  color: var(--maroon);
  border: 1px solid var(--border-maroon);
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section-title {
  color: var(--brown-deep);
  margin-bottom: 0.75rem;
}

.section-desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
}

/* =========================================================================
   1. HALAMAN BERANDA
   ========================================================================= */
.hero-card {
  position: relative;
  background: linear-gradient(135deg, var(--brown-deep) 0%, var(--maroon-dark) 60%, var(--navy-dark) 100%);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 2px solid var(--border-gold);
  box-shadow: var(--shadow-museum);
  margin-bottom: 3.5rem;
}

.hero-media-wrapper {
  position: relative;
  width: 100%;
  height: 480px;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  filter: brightness(0.68) contrast(1.1);
  transition: transform 6s ease;
}

.hero-card:hover .hero-img {
  transform: scale(1.02);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(22, 36, 62, 0.4) 0%,
    rgba(58, 32, 16, 0.75) 60%,
    rgba(15, 11, 8, 0.95) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem 3.5rem;
  color: #FFFFFF;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(197, 155, 39, 0.2);
  border: 1px solid var(--gold-light);
  color: var(--gold-light);
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  width: fit-content;
  backdrop-filter: blur(8px);
}

.hero-title {
  color: #FFFFFF;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.7);
  margin-bottom: 0.85rem;
  max-width: 900px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #E6DFD5;
  margin-bottom: 2rem;
  max-width: 750px;
  line-height: 1.5;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Tombol Aksi */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.75rem 1.6rem;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: var(--brown-deep);
  border: 1px solid var(--gold-light);
  box-shadow: 0 4px 15px rgba(197, 155, 39, 0.35);
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--gold-light), var(--gold));
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(197, 155, 39, 0.5);
}

.btn-maroon {
  background: linear-gradient(135deg, var(--maroon), var(--maroon-dark));
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(128, 22, 22, 0.35);
}

.btn-maroon:hover {
  background: linear-gradient(135deg, var(--maroon-light), var(--maroon));
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(128, 22, 22, 0.5);
}

.btn-outline {
  background: rgba(255, 253, 249, 0.15);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: #FFFFFF;
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  background: var(--bg-card-alt);
  border-color: var(--border-gold);
  transform: translateY(-2px);
}

/* Statistik Pembelajaran */
.stats-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.stat-box {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.stat-box:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.stat-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--maroon-soft);
  color: var(--maroon);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.stat-num {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--brown-deep);
  font-family: 'Cinzel', serif;
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-top: 0.25rem;
}

/* Tiga Kartu Kategori Era Utama */
.era-categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.era-card {
  background: var(--bg-card);
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
}

.era-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-gold);
  border-color: var(--gold);
}

.era-card-media {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.era-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.era-card:hover .era-card-img {
  transform: scale(1.05);
}

.era-card-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(22, 36, 62, 0.88);
  color: var(--gold-light);
  border: 1px solid var(--gold);
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  backdrop-filter: blur(6px);
}

.era-card-body {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.era-card-title {
  color: var(--brown-deep);
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.era-card-period {
  font-size: 0.85rem;
  color: var(--maroon);
  font-weight: 700;
  margin-bottom: 1rem;
}

.era-card-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.era-topics-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.topic-chip {
  background: var(--bg-card-alt);
  color: var(--brown-deep);
  border: 1px solid var(--border-subtle);
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.topic-chip.interactive {
  cursor: pointer;
}

.topic-chip.interactive:hover {
  background: var(--maroon);
  color: #FFFFFF;
  border-color: var(--maroon);
  transform: translateY(-2px);
  box-shadow: 0 2px 6px rgba(128, 22, 22, 0.3);
}

.era-card-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

/* =========================================================================
   2. HALAMAN MATERI (3 BAGIAN BESAR)
   ========================================================================= */
.materi-controls {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  margin-bottom: 2.5rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.materi-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  background: var(--bg-card-alt);
  color: var(--maroon);
}

.filter-btn.active {
  background: var(--maroon);
  color: #FFFFFF;
  border-color: var(--maroon-dark);
  box-shadow: 0 2px 8px rgba(128, 22, 22, 0.3);
}

.materi-search-box {
  position: relative;
  min-width: 280px;
}

.materi-search-input {
  width: 100%;
  padding: 0.55rem 1rem 0.55rem 2.4rem;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  background: var(--bg-parchment-light);
  color: var(--text-primary);
  font-size: 0.9rem;
}

.materi-search-input:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px var(--gold-glow);
}

.search-icon {
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  pointer-events: none;
}

/* 3 Bagian Besar Materi */
.materi-era-group {
  margin-bottom: 3.5rem;
}

.materi-era-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--border-gold);
}

.materi-era-group-title {
  color: var(--brown-deep);
  font-size: 1.45rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.materi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.75rem;
}

.materi-item-card {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.materi-item-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--gold);
}

.materi-card-header {
  padding: 1.25rem 1.25rem 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
}

.materi-era-badge {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.materi-era-badge.portugis {
  background: #FFF3E0;
  color: #E65100;
  border: 1px solid #FFE0B2;
}

.materi-era-badge.voc {
  background: #E8F5E9;
  color: #1B5E20;
  border: 1px solid #C8E6C9;
}

.materi-era-badge.belanda {
  background: #FFEBEE;
  color: #B71C1C;
  border: 1px solid #FFCDD2;
}

.materi-period-badge {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 600;
}

.materi-card-body {
  padding: 0 1.25rem 1.25rem;
  flex: 1;
}

.materi-item-title {
  font-size: 1.2rem;
  color: var(--brown-deep);
  margin-bottom: 0.6rem;
  line-height: 1.3;
}

.materi-hero-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--maroon);
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.materi-region-line {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.85rem;
}

.materi-item-summary {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.materi-card-footer {
  padding: 1rem 1.25rem;
  background: var(--bg-card-alt);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.materi-card-footer span {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--maroon);
}

/* =========================================================================
   DETAIL MATERI (READER INTERAKTIF 6 LANGKAH)
   ========================================================================= */
.materi-detail-view {
  background: var(--bg-card);
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: 3rem;
}

.detail-hero-banner {
  position: relative;
  min-height: 320px;
  background: linear-gradient(135deg, var(--brown-deep), var(--maroon-dark));
  color: #FFFFFF;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 3px solid var(--gold);
}

.detail-hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.28;
  filter: blur(1px);
}

.detail-nav-back {
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  background: rgba(0, 0, 0, 0.45);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: all var(--transition-fast);
}

.detail-nav-back:hover {
  background: rgba(0, 0, 0, 0.75);
  border-color: var(--gold-light);
}

.detail-hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.detail-meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.detail-title {
  color: #FFFFFF;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  margin-bottom: 0.5rem;
}

.detail-hero-quote {
  font-size: 1.05rem;
  color: var(--gold-light);
  font-style: italic;
  margin-top: 0.75rem;
  border-left: 3px solid var(--gold);
  padding-left: 1rem;
}

.audio-narator-bar {
  background: var(--bg-card-alt);
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-gold);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.audio-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--brown-deep);
}

.audio-controls {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.detail-format-tabs {
  display: flex;
  overflow-x: auto;
  background: var(--bg-parchment-light);
  border-bottom: 2px solid var(--border-gold);
  padding: 0 1rem;
}

.format-tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.1rem 1.4rem;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-secondary);
  border: none;
  background: transparent;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  transition: all var(--transition-fast);
}

.format-tab-btn:hover {
  color: var(--maroon);
  background: var(--maroon-soft);
}

.format-tab-btn.active {
  color: var(--maroon);
  border-bottom-color: var(--maroon);
  background: #FFFFFF;
}

.detail-tab-content-area {
  padding: 2.5rem;
}

.tab-pane {
  display: block;
  animation: fadeIn 0.3s ease-out;
}

.detail-step-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
  flex-wrap: wrap;
  gap: 1rem;
}

.info-bullet-card {
  background: var(--bg-parchment-light);
  border-left: 4px solid var(--gold);
  border-radius: var(--radius-sm);
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  box-shadow: var(--shadow-sm);
  font-size: 1rem;
  color: var(--text-primary);
  line-height: 1.6;
}

.tokoh-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.tokoh-bio-card {
  background: var(--bg-parchment-light);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tokoh-name {
  font-size: 1.2rem;
  color: var(--maroon);
  font-family: 'Cinzel', serif;
}

.tokoh-role {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--gold-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tokoh-bio {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.timeline-step-list {
  position: relative;
  padding-left: 2rem;
}

.timeline-step-list::before {
  content: '';
  position: absolute;
  left: 9px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: var(--gold);
}

.timeline-step-item {
  position: relative;
  margin-bottom: 1.75rem;
}

.timeline-step-bullet {
  position: absolute;
  left: -2rem;
  top: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--maroon);
  border: 3px solid #FFFFFF;
  box-shadow: 0 0 0 2px var(--gold);
}

.timeline-step-text {
  background: var(--bg-parchment-light);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 1.2rem 1.5rem;
  box-shadow: var(--shadow-sm);
  font-size: 0.98rem;
  color: var(--text-primary);
  line-height: 1.6;
}

/* =========================================================================
   3. FITUR "BUAT MATERI" (SLIDE STUDIO SEPERTI POWERPOINT SEDERHANA)
   ========================================================================= */
.slide-studio-container {
  background: var(--bg-card);
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  min-height: 720px;
}

.studio-toolbar {
  background: var(--navy-deep);
  color: #FFFFFF;
  padding: 0.85rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  border-bottom: 2px solid var(--gold);
}

.studio-title-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.slide-title-input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--radius-sm);
  color: #FFFFFF;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  font-weight: 700;
  min-width: 260px;
}

.slide-title-input:focus {
  outline: none;
  border-color: var(--gold-light);
  background: rgba(255, 255, 255, 0.2);
}

.studio-actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

/* Bar Pilihan 8 Template Cepat */
.studio-templates-bar {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.65rem 1.5rem;
  background: var(--bg-card-alt);
  border-bottom: 1px solid var(--border-gold);
}

.template-pill-btn {
  padding: 0.35rem 0.85rem;
  background: #FFFFFF;
  border: 1px solid var(--border-gold);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--brown-deep);
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--transition-fast);
}

.template-pill-btn:hover {
  background: var(--maroon);
  color: #FFFFFF;
  border-color: var(--maroon);
  transform: translateY(-1px);
}

.studio-workspace {
  display: grid;
  grid-template-columns: 240px 1fr 310px;
  flex: 1;
  min-height: 600px;
}

.studio-left-panel {
  background: var(--bg-parchment-light);
  border-right: 1px solid var(--border-gold);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
  max-height: 650px;
}

.panel-header-title {
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.slide-thumb-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.slide-thumb-item {
  position: relative;
  background: #FFFFFF;
  border: 2px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.6rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.slide-thumb-item:hover {
  border-color: var(--gold);
  transform: translateY(-2px);
}

.slide-thumb-item.active {
  border-color: var(--maroon);
  box-shadow: 0 0 0 2px var(--maroon-light);
}

.slide-thumb-number {
  position: absolute;
  top: 4px;
  left: 6px;
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--text-muted);
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
}

.slide-thumb-preview {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--bg-card-alt);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-align: center;
  padding: 0.5rem;
  overflow: hidden;
}

.slide-thumb-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
  margin-top: 0.4rem;
}

.btn-icon-sm {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: color var(--transition-fast);
}

.btn-icon-sm:hover {
  color: var(--maroon);
  background: var(--maroon-soft);
}

.studio-center-panel {
  background: #2E2824;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
}

.slide-canvas-viewport {
  width: 100%;
  max-width: 860px;
  aspect-ratio: 16 / 9;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
  transition: background var(--transition-normal);
  user-select: none;
}

.slide-canvas-viewport.bg-maroon {
  background: linear-gradient(135deg, var(--maroon-dark), var(--maroon));
  color: #FFFFFF;
}
.slide-canvas-viewport.bg-navy {
  background: linear-gradient(135deg, var(--navy-dark), var(--navy-deep));
  color: #FFFFFF;
}
.slide-canvas-viewport.bg-parchment {
  background: #FDF9F0;
  color: var(--text-primary);
  border: 1px solid #E2D7C5;
}
.slide-canvas-viewport.bg-gold {
  background: linear-gradient(135deg, #F3E5AB, #E8C15A);
  color: var(--brown-deep);
}
.slide-canvas-viewport.bg-wood {
  background: linear-gradient(135deg, #4A2810, #2C1608);
  color: #FFFFFF;
}

.canvas-element {
  position: absolute;
  cursor: move;
  border: 1px dashed transparent;
  padding: 4px;
  transition: border-color var(--transition-fast);
}

.canvas-element:hover {
  border-color: rgba(197, 155, 39, 0.6);
}

.canvas-element.selected {
  border: 2px solid var(--gold) !important;
  box-shadow: 0 0 10px rgba(197, 155, 39, 0.5);
}

.studio-right-panel {
  background: var(--bg-parchment-light);
  border-left: 1px solid var(--border-gold);
  padding: 1.25rem;
  overflow-y: auto;
  max-height: 650px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.inspector-section {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.inspector-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
}

.tools-btn-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.tool-action-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.75rem;
  background: #FFFFFF;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tool-action-btn:hover {
  background: var(--bg-card-alt);
  border-color: var(--gold);
  color: var(--maroon);
}

.bg-presets-row {
  display: flex;
  gap: 0.5rem;
}

.bg-preset-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform var(--transition-fast);
}

.bg-preset-dot:hover {
  transform: scale(1.15);
}

/* =========================================================================
   4. GAME EDUKATIF: KUIS PERLAWANAN NUSANTARA
   ========================================================================= */
.quiz-wrapper {
  max-width: 820px;
  margin: 0 auto;
}

.quiz-top-bar {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.75rem;
  margin-bottom: 1.75rem;
  box-shadow: var(--shadow-sm);
}

.quiz-header-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.quiz-title-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--maroon);
  font-weight: 800;
  font-size: 1rem;
  font-family: 'Cinzel', serif;
}

.quiz-counter {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-secondary);
}

.quiz-progress-track {
  width: 100%;
  height: 10px;
  background: var(--bg-card-alt);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}

.quiz-progress-bar {
  height: 100%;
  width: 10%;
  background: linear-gradient(90deg, var(--gold), var(--maroon));
  border-radius: 20px;
  transition: width 0.4s ease;
}

.quiz-card {
  background: var(--bg-card);
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  box-shadow: var(--shadow-lg);
  margin-bottom: 2rem;
  animation: fadeIn 0.3s ease-out;
}

.quiz-media-wrapper {
  width: 100%;
  max-height: 240px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-gold);
}

.quiz-media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quiz-question-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--brown-deep);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.quiz-options-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.quiz-option-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.1rem 1.4rem;
  background: var(--bg-parchment-light);
  border: 2px solid var(--border-subtle);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.quiz-option-btn:hover:not(:disabled) {
  background: #FFFFFF;
  border-color: var(--gold);
  transform: translateX(4px);
  box-shadow: var(--shadow-sm);
}

.option-letter {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-card-alt);
  color: var(--brown-deep);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.quiz-option-btn.correct {
  background: var(--success-bg) !important;
  border-color: var(--success) !important;
  color: #145A25 !important;
}
.quiz-option-btn.correct .option-letter {
  background: var(--success);
  color: #FFFFFF;
  border-color: var(--success);
}

.quiz-option-btn.wrong {
  background: var(--danger-bg) !important;
  border-color: var(--danger) !important;
  color: #8C1D1D !important;
}
.quiz-option-btn.wrong .option-letter {
  background: var(--danger);
  color: #FFFFFF;
  border-color: var(--danger);
}

.quiz-explanation-box {
  display: none;
  background: #FFFDF0;
  border: 1px solid var(--gold);
  border-left: 5px solid var(--gold);
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  margin-top: 1.5rem;
  animation: fadeIn 0.3s ease-out;
}

.quiz-explanation-box.show {
  display: block;
}

.explanation-title {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--brown-deep);
  margin-bottom: 0.4rem;
}

.explanation-text {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.quiz-footer-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.75rem;
}

/* Layar Kuis Selesai */
.quiz-result-card {
  display: none;
  background: var(--bg-card);
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-xl);
  padding: 3.5rem 2.5rem;
  text-align: center;
  box-shadow: var(--shadow-museum);
  animation: fadeIn 0.4s ease-out;
}

.result-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.result-score-circle {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold-light), var(--gold));
  color: var(--brown-deep);
  border: 4px solid #FFFFFF;
  box-shadow: var(--shadow-gold);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
}

.result-score-val {
  font-size: 2.75rem;
  font-weight: 900;
  font-family: 'Cinzel', serif;
  line-height: 1;
}

.result-score-max {
  font-size: 0.85rem;
  font-weight: 700;
  opacity: 0.85;
}

.result-stats-row {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1.5rem 0 2rem;
  flex-wrap: wrap;
}

.result-stat-pill {
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.95rem;
}

.result-stat-pill.correct {
  background: var(--success-bg);
  color: var(--success);
}
.result-stat-pill.wrong {
  background: var(--danger-bg);
  color: var(--danger);
}
.result-stat-pill.neutral {
  background: var(--bg-card-alt);
  color: var(--brown-deep);
  border: 1px solid var(--border-gold);
}

.result-actions-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* =========================================================================
   5. EDITOR KUIS (GURU)
   ========================================================================= */
.quiz-editor-container {
  background: var(--bg-card);
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-xl);
  padding: 2rem;
  box-shadow: var(--shadow-md);
}

.editor-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-gold);
}

.editor-questions-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.question-edit-card {
  background: var(--bg-parchment-light);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.q-edit-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.q-number-badge {
  font-weight: 800;
  color: var(--maroon);
  font-size: 1.05rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-secondary);
}

.form-input, .form-textarea, .form-select {
  padding: 0.65rem 1rem;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  background: #FFFFFF;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.form-input:focus, .form-textarea:focus, .form-select:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 3px var(--gold-glow);
}

.options-edit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

/* =========================================================================
   6. PETA SEJARAH INTERAKTIF NUSANTARA
   ========================================================================= */
.map-page-wrapper {
  background: var(--bg-card);
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.map-viewport-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: radial-gradient(circle at 50% 50%, #163252 0%, #0d223a 50%, #081424 100%);
  overflow: hidden;
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-ocean-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.map-3d-stage {
  position: relative;
  width: 92%;
  max-width: 980px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.map-3d-img {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.85)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.6));
  user-select: none;
  pointer-events: none;
}

.map-pins-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.map-pin {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
  transition: transform var(--transition-fast);
  pointer-events: auto;
}

.map-pin:hover {
  transform: translate(-50%, -50%) scale(1.25);
  z-index: 30;
}

.pin-pulse {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(236, 201, 75, 0.45);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulsePin 2s infinite;
}

@keyframes pulsePin {
  0% { transform: translate(-50%, -50%) scale(0.6); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
}

.pin-core {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gold-light);
  border: 2px solid var(--maroon);
  box-shadow: 0 0 12px rgba(236, 201, 75, 0.9);
}

.pin-label {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: #FFFFFF;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
  pointer-events: none;
  border: 1px solid var(--gold);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  transition: all var(--transition-fast);
}

.map-pin.active .pin-label {
  background: var(--gold);
  color: #1A202C;
  border-color: #FFFFFF;
  font-weight: 800;
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.8);
}

.map-info-drawer {
  background: var(--bg-card);
  border-top: 3px solid var(--gold);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2rem;
  align-items: start;
}

.map-hero-profile-header {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  margin-bottom: 1rem;
}

.map-hero-avatar {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--gold);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.map-video-box {
  background: #0f172a;
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.map-video-header {
  padding: 0.75rem 1rem;
  background: linear-gradient(90deg, #1e293b, #0f172a);
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.map-video-header-title {
  color: var(--gold-light);
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.map-video-responsive {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
}

.map-video-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.map-video-footer {
  padding: 0.65rem 1rem;
  background: #0b1120;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.map-video-modal-box {
  max-width: 960px;
  width: 95vw;
  background: #0f172a !important;
  color: #fff !important;
  border: 2px solid var(--gold) !important;
}

.map-cinema-video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.8);
}

.map-cinema-video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* =========================================================================
   7. TIMELINE SEJARAH KRONOLOGIS
   ========================================================================= */
.timeline-container {
  max-width: 960px;
  margin: 0 auto;
  position: relative;
}

.timeline-axis-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, var(--gold), var(--maroon));
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-node {
  position: relative;
  margin-bottom: 3.5rem;
  width: 50%;
}

.timeline-node:nth-child(odd) {
  left: 0;
  padding-right: 3rem;
  text-align: right;
}

.timeline-node:nth-child(even) {
  left: 50%;
  padding-left: 3rem;
  text-align: left;
}

.timeline-marker-dot {
  position: absolute;
  top: 15px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--gold-light);
  border: 4px solid var(--maroon);
  box-shadow: 0 0 10px rgba(197, 155, 39, 0.5);
  z-index: 5;
}

.timeline-node:nth-child(odd) .timeline-marker-dot {
  right: -11px;
}
.timeline-node:nth-child(even) .timeline-marker-dot {
  left: -11px;
}

.timeline-card {
  background: var(--bg-card);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  display: inline-block;
  max-width: 420px;
  text-align: left;
  cursor: pointer;
}

.timeline-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--gold);
}

.timeline-year-tag {
  display: inline-block;
  background: var(--maroon);
  color: #FFFFFF;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.timeline-card-title {
  font-size: 1.15rem;
  color: var(--brown-deep);
  margin-bottom: 0.4rem;
}

.timeline-card-hero {
  font-size: 0.88rem;
  color: var(--gold-dark);
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.timeline-card-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* =========================================================================
   8. MODAL DIALOG STANDAR & PRESENTATION MODE
   ========================================================================= */
dialog {
  border: none;
  background: transparent;
  padding: 0;
  max-width: 90vw;
  max-height: 90vh;
  margin: auto;
}

dialog:not([open]) {
  display: none !important;
}

dialog::backdrop {
  background: rgba(15, 11, 8, 0.75);
  backdrop-filter: blur(5px);
}

.modal-content-box {
  background: var(--bg-card);
  border: 2px solid var(--border-gold);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-museum);
  width: 600px;
  max-width: 100%;
}

.modal-header {
  background: linear-gradient(135deg, var(--maroon), var(--brown-deep));
  color: #FFFFFF;
  padding: 1.25rem 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--gold);
}

.modal-title {
  font-size: 1.25rem;
  font-family: 'Cinzel', serif;
}

.modal-close-btn {
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
}

.modal-body {
  padding: 1.75rem;
  max-height: 70vh;
  overflow-y: auto;
}

.modal-footer {
  padding: 1rem 1.75rem;
  background: var(--bg-parchment-light);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

/* Modal Presentasi */
.presentation-modal {
  width: 95vw;
  height: 95vh;
  max-width: 1400px;
  max-height: 850px;
  background: #111111;
  border: 2px solid var(--gold);
  border-radius: var(--radius-xl);
  position: relative;
}

.presentation-modal[open] {
  display: flex !important;
  flex-direction: column;
}

.presentation-close-corner-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--gold);
  color: #FFFFFF;
  font-size: 1.8rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.presentation-close-corner-btn:hover {
  background: var(--maroon);
  color: #FFFFFF;
  transform: scale(1.1);
  border-color: #FFFFFF;
}

.presentation-stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.presentation-canvas {
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
}

.presentation-controls {
  background: rgba(22, 36, 62, 0.95);
  padding: 0.85rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFFFFF;
  border-top: 1px solid var(--border-gold);
}

/* Saved Materials List */
.saved-materi-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: var(--bg-parchment-light);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-md);
  margin-bottom: 0.75rem;
}

/* =========================================================================
   FOOTER
   ========================================================================= */
.site-footer {
  background: var(--brown-deep);
  color: #E6DFD5;
  border-top: 3px solid var(--gold);
  padding: 3rem 1.5rem 2rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  color: var(--gold-light);
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
}

.footer-links h4 {
  color: var(--gold-light);
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

/* =========================================================================
   RESPONSIVE DESIGN (TABLET & MOBILE)
   ========================================================================= */
@media (max-width: 1024px) {
  .studio-workspace {
    grid-template-columns: 200px 1fr;
  }
  .studio-right-panel {
    grid-column: 1 / -1;
    border-top: 1px solid var(--border-gold);
    border-left: none;
  }
  .timeline-axis-line {
    left: 20px;
  }
  .timeline-node {
    width: 100%;
    left: 0 !important;
    padding-left: 3.5rem !important;
    padding-right: 0 !important;
    text-align: left !important;
  }
  .timeline-marker-dot {
    left: 9px !important;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-card);
    border-bottom: 2px solid var(--border-gold);
    flex-direction: column;
    padding: 1rem;
    box-shadow: var(--shadow-lg);
  }
  .nav-menu.show {
    display: flex;
  }
  .mobile-toggle {
    display: block;
  }
  .hero-media-wrapper {
    height: 380px;
  }
  .hero-overlay {
    padding: 2rem 1.5rem;
  }
  .hero-title {
    font-size: 1.8rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .studio-workspace {
    grid-template-columns: 1fr;
  }
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .map-info-drawer {
    grid-template-columns: 1fr;
  }
}

/* =========================================================================
   SISTEM IDENTITAS SISWA & PROTEKSI MODE GURU / ADMIN
   ========================================================================= */

/* Sembunyikan item admin secara default jika bukan admin */
body:not(.is-admin) .admin-only-item {
  display: none !important;
}

body.is-admin .admin-only-item {
  display: inline-flex !important;
}

li.admin-only-item {
  display: list-item !important;
}
body:not(.is-admin) li.admin-only-item {
  display: none !important;
}

/* Badge Profil Siswa */
.btn-student-profile {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #1E40AF;
  padding: 0.42rem 0.85rem;
  border-radius: var(--radius-md);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.btn-student-profile:hover {
  background: #DBEAFE;
  border-color: #93C5FD;
  transform: translateY(-1px);
}

/* Tombol Mode Guru */
.btn-admin-mode {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--bg-card);
  border: 1px solid var(--border-maroon);
  color: var(--maroon);
  padding: 0.42rem 0.85rem;
  border-radius: var(--radius-md);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.btn-admin-mode:hover {
  background: var(--maroon-soft);
  transform: translateY(-1px);
}

.btn-admin-mode.logged-in {
  background: linear-gradient(135deg, #801616, #991B1B);
  color: #FFFFFF;
  border-color: var(--gold);
  box-shadow: 0 2px 8px rgba(128, 22, 22, 0.35);
}

.btn-admin-mode.logged-in:hover {
  background: linear-gradient(135deg, #6B1010, #801616);
}

/* Penyesuaian Responsif Nav-Actions */
@media (max-width: 992px) {
  .nav-actions {
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .btn-student-profile, .btn-admin-mode, .btn-sync {
    padding: 0.35rem 0.6rem;
    font-size: 0.75rem;
  }
}

/* Tab Pemilihan Peran di Modal Identitas (Siswa vs Guru) */
.role-tab-btn {
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.role-tab-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.6) !important;
  color: var(--brown-deep) !important;
}

#studentIdentityModal::backdrop,
#adminLoginModal::backdrop {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(4px);
}



/**
 * NUSANTARA BANGKIT: MEDIA PEMBELAJARAN SEJARAH KELAS XI
 * Logika Aplikasi Lengkap:
 * - Navigasi SPA & Routing
 * - Pustaka Materi 3 Bagian Besar (Portugis, VOC, Pemerintah Belanda) dengan 6 Langkah Terstruktur
 * - Slide Studio (PowerPoint sederhana) dengan 8 Template, Multi-simpanan, Drag & Drop
 * - Kuis Perlawanan Nusantara dengan Efek Suara, Feedback Seketika, dan Format Hasil Sesuai Panduan
 * - Editor Kuis Guru (CRUD Soal & Pengaturan Jumlah Soal)
 * - Peta Perlawanan Interaktif
 * - Timeline Kronologis dengan Dialog Detail
 * - Sinkronisasi Google Apps Script & Spreadsheet
 */

// =========================================================================
// 1. STATE & KONFIGURASI APLIKASI
// =========================================================================
const AppState = {
  activeView: 'beranda',
  previousView: 'beranda',
  isRouting: false,
  currentMateriId: 'ternate-portugis',
  currentMateriTab: 'latarBelakang',
  materiFilter: 'all',

  // Urutan 6 Langkah Materi
  materiSteps: ['latarBelakang', 'tokoh', 'jalannyaPerlawanan', 'strategi', 'akhirPerlawanan', 'dampak'],

  // Kuis
  quiz: {
    questions: [],
    sessionQuestions: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    isAnswered: false,
    selectedOption: null,
    sessionLimit: localStorage.getItem('nusantara_quiz_limit') || '10'
  },

  // Slide Studio ("Buat Materi")
  studio: {
    currentId: 'pres-' + Date.now(),
    title: 'Materi Perlawanan Pribumi',
    slides: [],
    activeSlideIndex: 0,
    selectedElementId: null,
    isDragging: false,
    dragElement: null,
    dragOffset: { x: 0, y: 0 },
    presentationIndex: 0
  },

  // Identitas Siswa
  student: {
    nama: '',
    tingkat: 'XI',
    jurusan: 'TPM',
    rombel: '1',
    kelasLengkap: ''
  },

  // Mode Guru / Administrator
  admin: {
    isLoggedIn: false,
    password: (localStorage.getItem('nusantara_admin_pw') && localStorage.getItem('nusantara_admin_pw') !== 'guru123') 
      ? localStorage.getItem('nusantara_admin_pw') 
      : '010901',
    pendingView: null
  },

  // Google Apps Script
  appsScript: {
    url: localStorage.getItem('apps_script_url') || 'https://script.google.com/macros/s/AKfycbyCKMMuf020J6ACpF5zSutnVh7_a02gIJ_ReHJMN8APLu5bk4PHm_7hxin6dQaVz_lRtg/exec',
    isConnected: false
  },

  // Text-To-Speech
  speech: {
    isSpeaking: false,
    synth: window.speechSynthesis || null,
    utterance: null
  }
};

// =========================================================================
// 2. AUDIO SYNTHESIZER (WEB AUDIO API)
// =========================================================================
const SoundFX = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error / user gesture needed", e);
    }
  },
  correct() {
    // Melodi C5 -> E5 -> G5 -> C6
    setTimeout(() => this.playTone(523.25, 'triangle', 0.1, 0.15), 0);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.1, 0.15), 90);
    setTimeout(() => this.playTone(783.99, 'triangle', 0.1, 0.15), 180);
    setTimeout(() => this.playTone(1046.50, 'triangle', 0.22, 0.18), 270);
  },
  wrong() {
    setTimeout(() => this.playTone(220, 'sawtooth', 0.2, 0.12), 0);
    setTimeout(() => this.playTone(175, 'sawtooth', 0.3, 0.12), 120);
  },
  click() {
    this.playTone(850, 'sine', 0.04, 0.05);
  },
  fanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5];
    const delays = [0, 110, 220, 330, 460, 600];
    notes.forEach((f, i) => {
      setTimeout(() => this.playTone(f, 'triangle', 0.2, 0.16), delays[i]);
    });
  }
};

// =========================================================================
// 3. INISIALISASI APLIKASI
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initAdminMode();
  initStudentProfile();
  initNavigation();
  initMateriView();
  initQuizSystem();
  initSlideStudio();
  initInteractiveMap();
  initTimelineView();
  initAppsScriptModal();
  checkAppsScriptStatus();

  window.addEventListener('hashchange', handleRoute);
  handleRoute();

  // Tutup dialog saat klik di luar kotak konten (backdrop)
  document.querySelectorAll('dialog').forEach(modal => {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        if (modal.id === 'presentationModal') {
          closePresentationMode();
        } else {
          modal.close();
        }
      }
    });
  });
});

// =========================================================================
// 4. NAVIGASI SPA & ROUTING
// =========================================================================
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetView = link.getAttribute('data-view');
      if (targetView) {
        e.preventDefault();
        if (targetView === 'materi') {
          AppState.materiFilter = 'all';
        }
        navigateTo(targetView);
        if (navMenu && navMenu.classList.contains('show')) {
          navMenu.classList.remove('show');
        }
      }
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
}

function handleRoute() {
  if (AppState.isRouting) return;
  const hash = window.location.hash.replace('#', '') || 'beranda';
  if (hash !== AppState.activeView) {
    navigateTo(hash, false);
  }
}

function navigateTo(viewName, updateHash = true) {
  stopSpeechNarration();

  // Proteksi Menu Khusus Guru / Admin (Buat Materi & Edit Kuis)
  if ((viewName === 'buat-materi' || viewName === 'edit-kuis') && (!AppState.admin || !AppState.admin.isLoggedIn)) {
    openAdminLoginModal(viewName);
    return;
  }

  const validViews = ['beranda', 'materi', 'materi-detail', 'buat-materi', 'kuis', 'edit-kuis', 'peta', 'timeline'];
  if (!validViews.includes(viewName)) {
    viewName = 'beranda';
  }

  const isNewView = (AppState.activeView !== viewName);
  if (isNewView && AppState.activeView !== 'materi-detail') {
    AppState.previousView = AppState.activeView;
  }

  AppState.activeView = viewName;
  if (updateHash && window.location.hash.replace('#', '') !== viewName) {
    AppState.isRouting = true;
    window.location.hash = viewName;
    setTimeout(() => { AppState.isRouting = false; }, 60);
  }

  // Sembunyikan semua section
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  // Tampilkan target section
  const targetSection = document.getElementById(`view-${viewName}`);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Update active status di navbar
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkView = link.getAttribute('data-view');
    if (linkView === viewName || (viewName === 'materi-detail' && linkView === 'materi')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hook spesifik per view
  if (viewName === 'materi') {
    const filterBtns = document.querySelectorAll('.materi-filters .filter-btn');
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter') === AppState.materiFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    renderMateriCards();
  } else if (viewName === 'kuis') {
    if (isNewView || !AppState.quiz.sessionQuestions || AppState.quiz.sessionQuestions.length === 0) {
      startQuiz();
    }
  } else if (viewName === 'edit-kuis') {
    renderQuizEditor();
  } else if (viewName === 'buat-materi') {
    renderSlideStudio();
  }
}

// Buka Materi dengan Filter Tertentu dari Beranda
function openMateriWithFilter(era) {
  AppState.materiFilter = era;
  navigateTo('materi');

  const filterBtns = document.querySelectorAll('.materi-filters .filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === era) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderMateriCards();
}

// =========================================================================
// 5. HALAMAN MATERI (3 BAGIAN BESAR & DETAIL 6 LANGKAH)
// =========================================================================
function initMateriView() {
  const filterBtns = document.querySelectorAll('.materi-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.materiFilter = btn.getAttribute('data-filter') || 'all';
      renderMateriCards();
    });
  });

  const searchInput = document.getElementById('materiSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderMateriCards(e.target.value.toLowerCase().trim());
    });
  }

  const formatTabBtns = document.querySelectorAll('.format-tab-btn');
  formatTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.getAttribute('data-tab');
      switchMateriTab(tabName);
    });
  });

  const backBtn = document.getElementById('btnBackToMateri');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stopSpeechNarration();
      const target = (AppState.previousView && AppState.previousView !== 'materi-detail') ? AppState.previousView : 'materi';
      navigateTo(target);
    });
  }

  const ttsBtn = document.getElementById('btnToggleNarator');
  if (ttsBtn) {
    ttsBtn.addEventListener('click', toggleSpeechNarration);
  }
}

// Render Materi ke dalam 3 Bagian Besar
function renderMateriCards(searchQuery = '') {
  const container = document.getElementById('materiSectionsContainer');
  if (!container) return;

  const sectionsConfig = [
    {
      key: 'portugis',
      title: 'A. PERLAWANAN TERHADAP PORTUGIS',
      desc: 'Perlawanan kesultanan maritim Nusantara mengusir dominasi dan monopoli rempah-rempah Portugis di Malaka dan Maluku.',
      badgeClass: 'portugis'
    },
    {
      key: 'voc',
      title: 'B. PERLAWANAN TERHADAP VOC',
      desc: 'Perlawanan kerajaan-kerajaan besar Jawa dan Sulawesi menolak monopoli dagang serikat Kompeni Belanda.',
      badgeClass: 'voc'
    },
    {
      key: 'belanda',
      title: 'C. PERLAWANAN TERHADAP PEMERINTAH BELANDA',
      desc: 'Perang semesta rakyat Indonesia di berbagai kepulauan menentang kembalinya penjajahan Hindia Belanda.',
      badgeClass: 'belanda'
    }
  ];

  let html = '';
  let matchCount = 0;

  sectionsConfig.forEach(sec => {
    // Lewati jika filter aktif tidak cocok
    if (AppState.materiFilter !== 'all' && AppState.materiFilter !== sec.key) {
      return;
    }

    let items = HISTORICAL_DATA.materi.filter(m => m.era === sec.key);

    if (searchQuery) {
      items = items.filter(m => 
        m.title.toLowerCase().includes(searchQuery) ||
        m.heroName.toLowerCase().includes(searchQuery) ||
        m.region.toLowerCase().includes(searchQuery) ||
        m.summary.toLowerCase().includes(searchQuery)
      );
    }

    if (items.length > 0) {
      matchCount += items.length;
      html += `
        <div class="materi-era-group" id="section-${sec.key}">
          <div class="materi-era-group-header">
            <div>
              <h3 class="materi-era-group-title">${sec.title}</h3>
              <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 0.25rem;">${sec.desc}</p>
            </div>
            <span class="materi-era-badge ${sec.badgeClass}">${items.length} Topik</span>
          </div>

          <div class="materi-grid">
            ${items.map((item, idx) => `
              <div class="materi-item-card" onclick="openMateriDetail('${item.id}')">
                <div class="materi-card-header">
                  <span class="materi-era-badge ${item.era}">${idx + 1}. ${item.title}</span>
                  <span class="materi-period-badge">⏳ ${item.period}</span>
                </div>
                <div class="materi-card-body">
                  <div class="materi-hero-line">
                    <span>👤</span>
                    <span>${item.heroName}</span>
                  </div>
                  <div class="materi-region-line">
                    <span>📍</span>
                    <span>${item.region}</span>
                  </div>
                  <p class="materi-item-summary">${item.summary}</p>
                </div>
                <div class="materi-card-footer">
                  <span>📖 Buka Materi Lengkap</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  if (matchCount === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 2px dashed var(--border-gold);">
        <p style="font-size: 1.2rem; color: var(--brown-deep); font-weight: 700; margin-bottom: 0.5rem;">Tidak ada topik yang sesuai dengan pencarian "${searchQuery}".</p>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Silakan gunakan kata kunci lain seperti nama pahlawan, wilayah, atau ganti filter era.</p>
      </div>
    `;
  } else {
    container.innerHTML = html;
  }
}

function openMateriDetail(materiId) {
  const item = HISTORICAL_DATA.materi.find(m => m.id === materiId);
  if (!item) return;

  AppState.currentMateriId = materiId;
  AppState.currentMateriTab = 'latarBelakang';

  document.getElementById('detailTitle').textContent = item.title;
  document.getElementById('detailHeroName').textContent = `${item.heroName} • ${item.heroTitle}`;
  document.getElementById('detailRegion').textContent = `📍 ${item.region} • ⏳ ${item.period}`;
  document.getElementById('detailEraBadge').textContent = item.eraLabel;
  document.getElementById('detailQuote').textContent = `"${item.quote}"`;

  const bannerImg = document.getElementById('detailHeroBg');
  if (bannerImg) {
    bannerImg.src = item.bannerImage || 'assets/hero_perlawanan.jpg';
  }

  const backBtn = document.getElementById('btnBackToMateri');
  if (backBtn) {
    let label = '← Kembali ke Pustaka Materi';
    if (AppState.previousView === 'peta') label = '← Kembali ke Peta Sejarah';
    else if (AppState.previousView === 'timeline') label = '← Kembali ke Timeline Sejarah';
    else if (AppState.previousView === 'beranda') label = '← Kembali ke Beranda';
    backBtn.innerHTML = `<span>${label}</span>`;
  }

  const watchVideoBtn = document.getElementById('btnWatchMateriVideo');
  if (watchVideoBtn) {
    const relatedPoint = (HISTORICAL_DATA.mapPoints && Array.isArray(HISTORICAL_DATA.mapPoints))
      ? HISTORICAL_DATA.mapPoints.find(p => p.topicId === materiId)
      : null;
    if (relatedPoint) {
      watchVideoBtn.style.display = 'inline-flex';
      watchVideoBtn.onclick = () => openMapVideoModal(relatedPoint.id);
    } else {
      watchVideoBtn.style.display = 'none';
    }
  }

  switchMateriTab('latarBelakang');
  navigateTo('materi-detail');
}

function switchMateriTab(tabKey) {
  AppState.currentMateriTab = tabKey;
  stopSpeechNarration();

  document.querySelectorAll('.format-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderMateriDetailTab(tabKey);
}

function renderMateriDetailTab(tabKey) {
  const item = HISTORICAL_DATA.materi.find(m => m.id === AppState.currentMateriId);
  const container = document.getElementById('detailTabContentArea');
  if (!item || !container) return;

  const data = item.sections[tabKey] || [];
  const currentStepIdx = AppState.materiSteps.indexOf(tabKey);
  const prevStepKey = currentStepIdx > 0 ? AppState.materiSteps[currentStepIdx - 1] : null;
  const nextStepKey = currentStepIdx < AppState.materiSteps.length - 1 ? AppState.materiSteps[currentStepIdx + 1] : null;

  let bodyContent = '';

  switch (tabKey) {
    case 'latarBelakang':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">📜 Latar Belakang & Faktor Pemicu</h3>
        ${data.map(point => `
          <div class="info-bullet-card">
            <p>${point}</p>
          </div>
        `).join('')}
      `;
      break;

    case 'tokoh':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">👤 Tokoh-Tokoh Kunci Perjuangan</h3>
        <div class="tokoh-cards-grid">
          ${data.map(tokoh => `
            <div class="tokoh-bio-card">
              <span class="tokoh-role">${tokoh.role}</span>
              <h4 class="tokoh-name">${tokoh.name}</h4>
              <p class="tokoh-bio">${tokoh.bio}</p>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case 'jalannyaPerlawanan':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.5rem;">⚔️ Jalannya Perlawanan (Kronologi)</h3>
        <div class="timeline-step-list">
          ${data.map(step => `
            <div class="timeline-step-item">
              <div class="timeline-step-bullet"></div>
              <div class="timeline-step-text">
                <p>${step}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case 'strategi':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">🎯 Strategi Perjuangan & Taktik Perang</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          ${data.map((strat, i) => `
            <div class="info-bullet-card" style="border-left-color: var(--maroon); background: #FFF9F9;">
              <div style="font-weight: 800; color: var(--maroon); margin-bottom: 0.4rem;">Taktik #${i + 1}</div>
              <p>${strat}</p>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case 'akhirPerlawanan':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">🏁 Akhir Perlawanan</h3>
        ${data.map(point => `
          <div class="info-bullet-card" style="border-left-color: var(--navy-deep); background: #F8FAFC;">
            <p>${point}</p>
          </div>
        `).join('')}
      `;
      break;

    case 'dampak':
      bodyContent = `
        <h3 style="color: var(--maroon); margin-bottom: 1.25rem;">🌟 Dampak & Nilai Sejarah</h3>
        ${data.map(point => `
          <div class="info-bullet-card" style="border-left-color: var(--gold-dark); background: #FFFCF2;">
            <p>${point}</p>
          </div>
        `).join('')}
      `;
      break;
  }

  // Step Navigation Buttons (Prev / Next Step)
  let stepNavHtml = `
    <div class="detail-step-nav">
      ${prevStepKey ? `
        <button class="btn btn-secondary" onclick="switchMateriTab('${prevStepKey}')">
          <span>← Langkah Sebelumnya</span>
        </button>
      ` : `<div></div>`}

      ${nextStepKey ? `
        <button class="btn btn-primary" onclick="switchMateriTab('${nextStepKey}')">
          <span>Langkah Berikutnya →</span>
        </button>
      ` : `
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-maroon" onclick="navigateTo('kuis')">
            <span>🎮 Uji Pemahaman di Kuis</span>
          </button>
          <button class="btn btn-primary" onclick="openNextMateriTopic()">
            <span>📖 Topik Selanjutnya →</span>
          </button>
        </div>
      `}
    </div>
  `;

  container.innerHTML = `
    <div class="tab-pane">
      ${bodyContent}
      ${stepNavHtml}
    </div>
  `;
}

function openNextMateriTopic() {
  const currentIndex = HISTORICAL_DATA.materi.findIndex(m => m.id === AppState.currentMateriId);
  if (currentIndex >= 0 && currentIndex < HISTORICAL_DATA.materi.length - 1) {
    openMateriDetail(HISTORICAL_DATA.materi[currentIndex + 1].id);
  } else {
    navigateTo('materi');
  }
}

// Text-to-Speech (TTS)
function toggleSpeechNarration() {
  if (!AppState.speech.synth) {
    alert("Browser ini tidak mendukung pembaca teks audio otomatis.");
    return;
  }

  const btn = document.getElementById('btnToggleNarator');

  if (AppState.speech.isSpeaking) {
    stopSpeechNarration();
  } else {
    const item = HISTORICAL_DATA.materi.find(m => m.id === AppState.currentMateriId);
    if (!item) return;

    let textToRead = `${item.title}. Pemimpin: ${item.heroName}. Wilayah: ${item.region}. `;
    const currentData = item.sections[AppState.currentMateriTab];
    if (Array.isArray(currentData)) {
      if (typeof currentData[0] === 'string') {
        textToRead += currentData.join('. ');
      } else if (typeof currentData[0] === 'object') {
        textToRead += currentData.map(t => `${t.name}, ${t.role}. ${t.bio}`).join('. ');
      }
    }

    AppState.speech.utterance = new SpeechSynthesisUtterance(textToRead);
    AppState.speech.utterance.lang = 'id-ID';
    AppState.speech.utterance.rate = 0.95;

    AppState.speech.utterance.onend = () => {
      AppState.speech.isSpeaking = false;
      if (btn) btn.innerHTML = `<span>🔊</span> Dengarkan Narasi Sejarah`;
    };

    AppState.speech.synth.speak(AppState.speech.utterance);
    AppState.speech.isSpeaking = true;
    if (btn) btn.innerHTML = `<span>⏹️</span> Hentikan Narasi`;
  }
}

function stopSpeechNarration() {
  if (AppState.speech.synth && AppState.speech.isSpeaking) {
    AppState.speech.synth.cancel();
    AppState.speech.isSpeaking = false;
    const btn = document.getElementById('btnToggleNarator');
    if (btn) btn.innerHTML = `<span>🔊</span> Dengarkan Narasi Sejarah`;
  }
}

// =========================================================================
// 6. GAME EDUKATIF: KUIS PERLAWANAN NUSANTARA
// =========================================================================
function initQuizSystem() {
  loadQuizQuestions();

  const nextBtn = document.getElementById('btnNextQuestion');
  if (nextBtn) {
    nextBtn.addEventListener('click', nextQuestion);
  }

  const restartBtn = document.getElementById('btnRestartQuiz');
  if (restartBtn) {
    restartBtn.addEventListener('click', startQuiz);
  }

  const learnBtn = document.getElementById('btnQuizToMateri');
  if (learnBtn) {
    learnBtn.addEventListener('click', () => navigateTo('materi'));
  }

  const scoreForm = document.getElementById('studentScoreForm');
  if (scoreForm) {
    scoreForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitStudentScore();
    });
  }
}

function loadQuizQuestions() {
  const saved = localStorage.getItem('nusantara_quiz_questions');
  if (saved) {
    try {
      AppState.quiz.questions = JSON.parse(saved);
    } catch (e) {
      AppState.quiz.questions = [...HISTORICAL_DATA.kuis];
    }
  } else {
    AppState.quiz.questions = [...HISTORICAL_DATA.kuis];
  }
}

function startQuiz() {
  loadQuizQuestions();

  const limitSetting = AppState.quiz.sessionLimit;
  let totalToPlay = 10;
  if (limitSetting === '5') totalToPlay = 5;
  else if (limitSetting === '15') totalToPlay = 15;
  else if (limitSetting === 'all') totalToPlay = AppState.quiz.questions.length;
  else totalToPlay = Math.min(10, AppState.quiz.questions.length);

  // Ambil soal sesuai limit
  AppState.quiz.sessionQuestions = AppState.quiz.questions.slice(0, totalToPlay);
  AppState.quiz.currentIndex = 0;
  AppState.quiz.score = 0;
  AppState.quiz.correctCount = 0;
  AppState.quiz.wrongCount = 0;
  AppState.quiz.isAnswered = false;
  AppState.quiz.selectedOption = null;

  document.getElementById('quizPlayArea').style.display = 'block';
  document.getElementById('quizResultArea').style.display = 'none';

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const qState = AppState.quiz;
  const total = qState.sessionQuestions.length;
  const currentQ = qState.sessionQuestions[qState.currentIndex];

  if (!currentQ || qState.currentIndex >= total) {
    finishQuiz();
    return;
  }

  document.getElementById('quizCounterText').textContent = `Soal ${qState.currentIndex + 1} dari ${total}`;
  const progressPercent = ((qState.currentIndex + 1) / total) * 100;
  document.getElementById('quizProgressBar').style.width = `${progressPercent}%`;

  document.getElementById('quizQuestionText').textContent = currentQ.soal;

  const imgWrapper = document.getElementById('quizImageWrapper');
  const imgTag = document.getElementById('quizQuestionImg');
  if (currentQ.gambar) {
    imgTag.src = currentQ.gambar;
    imgWrapper.style.display = 'block';
  } else {
    imgWrapper.style.display = 'none';
  }

  const optionsContainer = document.getElementById('quizOptionsList');
  const letters = ['A', 'B', 'C', 'D'];
  optionsContainer.innerHTML = currentQ.pilihan.map((opt, idx) => `
    <button class="quiz-option-btn" onclick="selectQuizOption(${idx})" id="opt-btn-${idx}">
      <span class="option-letter">${letters[idx]}</span>
      <span class="option-text">${opt}</span>
    </button>
  `).join('');

  const explanationBox = document.getElementById('quizExplanationBox');
  explanationBox.classList.remove('show');
  explanationBox.style.display = 'none';

  const nextBtn = document.getElementById('btnNextQuestion');
  nextBtn.style.display = 'none';
  nextBtn.disabled = true;

  // Ubah teks tombol jika soal terakhir
  if (qState.currentIndex === total - 1) {
    nextBtn.innerHTML = `<span>Selesai & Lihat Skor 🎉</span>`;
  } else {
    nextBtn.innerHTML = `<span>Lanjut ke Soal Berikutnya →</span>`;
  }

  qState.isAnswered = false;
  qState.selectedOption = null;
}

function selectQuizOption(index) {
  const qState = AppState.quiz;
  if (qState.isAnswered) return;

  qState.isAnswered = true;
  qState.selectedOption = index;

  const currentQ = qState.sessionQuestions[qState.currentIndex];
  const isCorrect = index === currentQ.jawabanBenar;

  document.querySelectorAll('.quiz-option-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.jawabanBenar) {
      btn.classList.add('correct');
      btn.querySelector('.option-letter').innerHTML = '✅';
    } else if (idx === index && !isCorrect) {
      btn.classList.add('wrong');
      btn.querySelector('.option-letter').innerHTML = '❌';
    }
  });

  if (isCorrect) {
    qState.correctCount++;
    SoundFX.correct();
  } else {
    qState.wrongCount++;
    SoundFX.wrong();
  }

  const explanationBox = document.getElementById('quizExplanationBox');
  document.getElementById('quizExplanationText').textContent = currentQ.penjelasan || "Pembahasan dapat dilihat pada modul pustaka materi sejarah.";
  explanationBox.style.display = 'block';
  explanationBox.classList.add('show');

  const nextBtn = document.getElementById('btnNextQuestion');
  nextBtn.style.display = 'inline-flex';
  nextBtn.disabled = false;
}

function nextQuestion() {
  AppState.quiz.currentIndex++;
  const total = AppState.quiz.sessionQuestions.length;

  if (AppState.quiz.currentIndex >= total) {
    finishQuiz();
  } else {
    renderCurrentQuestion();
  }
}

function finishQuiz() {
  const qState = AppState.quiz;
  const total = qState.sessionQuestions.length;
  const finalScore = Math.round((qState.correctCount / total) * 100);
  qState.score = finalScore;

  document.getElementById('quizPlayArea').style.display = 'none';
  document.getElementById('quizResultArea').style.display = 'block';

  // Format Tampilan Hasil Sesuai Panduan Prompt:
  // 🎉 Kuis Selesai!
  // Skor: 80/100
  // Benar: 8
  // Salah: 2
  // Nilai: 80
  document.getElementById('resultSkorText').textContent = `Skor: ${finalScore}/100`;
  document.getElementById('resultCorrectVal').textContent = `Benar: ${qState.correctCount}`;
  document.getElementById('resultWrongVal').textContent = `Salah: ${qState.wrongCount}`;
  document.getElementById('resultNilaiText').textContent = `Nilai: ${finalScore}`;

  let predicate = "Pejuang Pembelajar!";
  let emoji = "🎉";
  if (finalScore >= 80) {
    predicate = "Luar Biasa! Anda Sangat Menguasai Sejarah Perlawanan Pribumi!";
    emoji = "🏆";
  } else if (finalScore >= 60) {
    predicate = "Bagus! Terus Perdalam Pemahaman Taktik dan Peristiwa Sejarah!";
    emoji = "⭐";
  } else {
    predicate = "Mari Pelajari Kembali Materi untuk Mendapatkan Nilai Terbaik!";
    emoji = "📚";
  }

  document.getElementById('resultEmoji').textContent = emoji;
  document.getElementById('resultPredicate').textContent = predicate;

  // Auto-fill form pengiriman nilai kuis dengan data identitas siswa
  if (AppState.student && AppState.student.nama) {
    const nameInput = document.getElementById('studentNameInput');
    const classInput = document.getElementById('studentClassInput');
    if (nameInput) nameInput.value = AppState.student.nama;
    if (classInput) classInput.value = AppState.student.kelasLengkap || `${AppState.student.tingkat} ${AppState.student.jurusan}`.trim();
  }

  SoundFX.fanfare();
}

async function submitStudentScore() {
  const nameInput = document.getElementById('studentNameInput');
  const classInput = document.getElementById('studentClassInput');
  const submitBtn = document.getElementById('btnSubmitScore');
  const statusMsg = document.getElementById('scoreSubmitStatus');

  let studentName = nameInput.value.trim();
  let studentClass = classInput.value.trim();

  if (!studentName && AppState.student && AppState.student.nama) {
    studentName = AppState.student.nama;
    nameInput.value = studentName;
  }
  if (!studentClass && AppState.student && AppState.student.kelasLengkap) {
    studentClass = AppState.student.kelasLengkap;
    classInput.value = studentClass;
  }

  if (!studentName) {
    alert("Silakan lengkapi identitas Anda terlebih dahulu.");
    openStudentIdentityModal();
    return;
  }

  if (!AppState.appsScript.url) {
    statusMsg.innerHTML = `<span style="color: #D97706; font-weight: 600;">⚠️ URL Google Apps Script belum diisi di menu Google Sheets navbar. Nilai tetap tercatat di browser Anda.</span>`;
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Mengirim Nilai...";
  statusMsg.innerHTML = `<span style="color: var(--text-muted);">Sedang mencatat ke Google Spreadsheet guru...</span>`;

  try {
    const payload = {
      action: 'submitScore',
      nama: studentName,
      kelas: studentClass,
      nilai: AppState.quiz.score,
      benar: AppState.quiz.correctCount,
      salah: AppState.quiz.wrongCount,
      total: AppState.quiz.sessionQuestions.length
    };

    await fetch(AppState.appsScript.url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    statusMsg.innerHTML = `<span style="color: var(--success); font-weight: 700;">✅ Nilai berhasil dicatat ke Google Spreadsheet Guru!</span>`;
    submitBtn.textContent = "Terkirim!";
  } catch (error) {
    console.error("Gagal submit nilai:", error);
    statusMsg.innerHTML = `<span style="color: var(--danger);">Gagal mengirim: ${error.message}</span>`;
    submitBtn.disabled = false;
    submitBtn.textContent = "Kirim Ulang";
  }
}

// =========================================================================
// REKAP NILAI SISWA (DARI GOOGLE SHEETS TAB: Nilai_Siswa)
// =========================================================================
function escapeHtmlScore(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function openStudentScoresModal() {
  const modal = document.getElementById('studentScoresModal');
  if (!modal) return;
  modal.showModal();
  await loadStudentScores();
}

async function loadStudentScores() {
  const container = document.getElementById('studentScoresTableContainer');
  const countEl = document.getElementById('studentScoresCountSummary');
  if (!container) return;

  if (!AppState.appsScript.url) {
    container.innerHTML = `
      <div style="padding: 2.5rem 1rem; text-align: center; color: var(--danger);">
        <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">⚠️ URL Google Apps Script Belum Dikonfigurasi</p>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Silakan buka menu <b>Sinkronisasi Google Sheets</b> di pojok kanan atas untuk memasukkan URL backend Anda.</p>
      </div>
    `;
    if (countEl) countEl.textContent = 'Belum terhubung';
    return;
  }

  container.innerHTML = `
    <div style="padding: 2.5rem 1rem; text-align: center; color: var(--text-muted);">
      <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
      <p style="font-weight: 600; color: var(--brown-deep);">Mengambil data dari Google Sheets tab <i>"Nilai_Siswa"</i>...</p>
      <p style="font-size: 0.85rem;">Harap tunggu beberapa detik...</p>
    </div>
  `;
  if (countEl) countEl.textContent = 'Sedang menyinkronkan...';

  try {
    const res = await fetch(`${AppState.appsScript.url}?action=getScores`);
    const json = await res.json();

    if (json.success && Array.isArray(json.data)) {
      if (json.data.length === 0) {
        container.innerHTML = `
          <div style="padding: 3rem 1rem; text-align: center; color: var(--text-secondary);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📋</div>
            <p style="font-weight: 700; color: var(--brown-deep);">Belum ada data nilai di lembar "Nilai_Siswa"</p>
            <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 450px; margin: 0.25rem auto 0;">Siswa yang menyelesaikan kuis dan menekan tombol 'Kirim Nilai ke Guru' akan langsung tercatat otomatis di sini.</p>
          </div>
        `;
        if (countEl) countEl.textContent = 'Total: 0 siswa';
        return;
      }

      const totalSiswa = json.data.length;
      let totalNilai = 0;
      let tuntasCount = 0;

      json.data.forEach(item => {
        const val = Number(item.nilai) || 0;
        totalNilai += val;
        if (val >= 75) tuntasCount++;
      });
      const rerata = Math.round(totalNilai / totalSiswa);

      const dataReversed = [...json.data].reverse();

      let tableHtml = `
        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 140px; background: white; border: 1px solid var(--border-gold); border-radius: 8px; padding: 0.75rem 1rem; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Total Peserta</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--brown-deep);">${totalSiswa} Siswa</div>
          </div>
          <div style="flex: 1; min-width: 140px; background: white; border: 1px solid var(--border-gold); border-radius: 8px; padding: 0.75rem 1rem; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Rata-rata Nilai</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: #2563EB;">${rerata}</div>
          </div>
          <div style="flex: 1; min-width: 140px; background: white; border: 1px solid var(--border-gold); border-radius: 8px; padding: 0.75rem 1rem; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Tingkat Kelulusan</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: #059669;">${Math.round((tuntasCount / totalSiswa) * 100)}% (${tuntasCount}/${totalSiswa})</div>
          </div>
        </div>

        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 8px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; background: white;">
            <thead>
              <tr style="background: #F8FAFC; border-bottom: 2px solid #CBD5E1; color: #475569; text-align: left;">
                <th style="padding: 0.75rem 0.6rem; text-align: center; width: 40px;">No</th>
                <th style="padding: 0.75rem 0.6rem;">Waktu</th>
                <th style="padding: 0.75rem 0.6rem;">Nama Siswa</th>
                <th style="padding: 0.75rem 0.6rem;">Kelas</th>
                <th style="padding: 0.75rem 0.6rem; text-align: center;">Nilai</th>
                <th style="padding: 0.75rem 0.6rem; text-align: center;">Benar / Salah</th>
                <th style="padding: 0.75rem 0.6rem; text-align: center;">Status KKM</th>
              </tr>
            </thead>
            <tbody>
      `;

      dataReversed.forEach((item, idx) => {
        const val = Number(item.nilai) || 0;
        const isPassed = val >= 75;
        const bgRow = idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA';

        tableHtml += `
          <tr style="background: ${bgRow}; border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 0.65rem 0.6rem; text-align: center; color: var(--text-muted); font-weight: 600;">${idx + 1}</td>
            <td style="padding: 0.65rem 0.6rem; font-size: 0.8rem; color: #64748B; white-space: nowrap;">${escapeHtmlScore(item.waktu)}</td>
            <td style="padding: 0.65rem 0.6rem; font-weight: 700; color: #1E293B;">${escapeHtmlScore(item.nama)}</td>
            <td style="padding: 0.65rem 0.6rem; font-size: 0.85rem; color: #475569;">${escapeHtmlScore(item.kelas)}</td>
            <td style="padding: 0.65rem 0.6rem; text-align: center;">
              <span style="display: inline-block; padding: 0.2rem 0.6rem; border-radius: 6px; font-weight: 800; font-size: 0.95rem; background: ${isPassed ? '#DCFCE7' : '#FEE2E2'}; color: ${isPassed ? '#166534' : '#991B1B'};">
                ${val}
              </span>
            </td>
            <td style="padding: 0.65rem 0.6rem; text-align: center; font-size: 0.82rem; color: #475569;">
              <span style="color: #16A34A; font-weight: 700;">${item.benar}B</span> / 
              <span style="color: #DC2626; font-weight: 700;">${item.salah}S</span>
              <span style="color: #94A3B8; font-size: 0.75rem;">(dari ${item.total})</span>
            </td>
            <td style="padding: 0.65rem 0.6rem; text-align: center;">
              ${isPassed 
                ? '<span style="background: #10B981; color: white; padding: 0.2rem 0.55rem; border-radius: 999px; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.5px;">TUNTAS</span>' 
                : '<span style="background: #EF4444; color: white; padding: 0.2rem 0.55rem; border-radius: 999px; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.5px;">REMEDIAL</span>'}
            </td>
          </tr>
        `;
      });

      tableHtml += `
            </tbody>
          </table>
        </div>
      `;

      container.innerHTML = tableHtml;
      if (countEl) countEl.textContent = `Menampilkan ${totalSiswa} rekaman nilai siswa dari Google Sheets (Tab Nilai_Siswa).`;
    } else {
      container.innerHTML = `
        <div style="padding: 2rem 1rem; text-align: center; color: var(--danger);">
          Gagal memuat rekap nilai: ${json.error || 'Format respon tidak sesuai.'}
        </div>
      `;
      if (countEl) countEl.textContent = 'Gagal memuat';
    }
  } catch (err) {
    console.error("Error loadStudentScores:", err);
    container.innerHTML = `
      <div style="padding: 2rem 1rem; text-align: center; color: var(--danger);">
        <p style="font-weight: 700; margin-bottom: 0.35rem;">Terjadi kendala jaringan:</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">${err.message}</p>
      </div>
    `;
    if (countEl) countEl.textContent = 'Koneksi error';
  }
}

// =========================================================================
// 7. EDITOR KUIS (GURU DAPAT MENGEDIT KUIS)
// =========================================================================
function renderQuizEditor() {
  loadQuizQuestions();
  const listContainer = document.getElementById('editorQuestionsList');
  const totalCountEl = document.getElementById('totalQuestionsCountText');
  const limitSelect = document.getElementById('quizSessionLimitSelect');

  if (totalCountEl) totalCountEl.textContent = AppState.quiz.questions.length;
  if (limitSelect) {
    limitSelect.value = AppState.quiz.sessionLimit;
    limitSelect.onchange = (e) => {
      AppState.quiz.sessionLimit = e.target.value;
      localStorage.setItem('nusantara_quiz_limit', e.target.value);
    };
  }

  if (!listContainer) return;

  listContainer.innerHTML = AppState.quiz.questions.map((q, qIndex) => `
    <div class="question-edit-card" id="edit-card-${qIndex}">
      <div class="q-edit-header">
        <span class="q-number-badge">Pertanyaan #${qIndex + 1}</span>
        <button class="btn-icon-sm" onclick="deleteQuizQuestion(${qIndex})" title="Hapus Soal" style="color: var(--danger);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>

      <div class="form-group">
        <label class="form-label">Teks Pertanyaan:</label>
        <textarea class="form-textarea" rows="2" oninput="updateQuestionText(${qIndex}, this.value)">${q.soal}</textarea>
      </div>

      <div class="form-group">
        <label class="form-label">URL Gambar Ilustrasi (Opsional):</label>
        <input type="text" class="form-input" value="${q.gambar || ''}" placeholder="assets/... atau https://..." oninput="updateQuestionImage(${qIndex}, this.value)">
      </div>

      <div class="options-edit-grid">
        ${['A', 'B', 'C', 'D'].map((letter, optIdx) => `
          <div class="form-group">
            <label class="form-label" style="display: flex; justify-content: space-between;">
              <span>Pilihan ${letter}:</span>
              <label style="cursor: pointer; font-size: 0.8rem; color: var(--maroon); font-weight: 700;">
                <input type="radio" name="correct_${qIndex}" ${q.jawabanBenar === optIdx ? 'checked' : ''} onchange="updateQuestionCorrect(${qIndex}, ${optIdx})"> Kunci Benar
              </label>
            </label>
            <input type="text" class="form-input" value="${q.pilihan[optIdx] || ''}" oninput="updateQuestionOption(${qIndex}, ${optIdx}, this.value)">
          </div>
        `).join('')}
      </div>

      <div class="form-group">
        <label class="form-label">Penjelasan Jawaban:</label>
        <textarea class="form-textarea" rows="2" placeholder="Tuliskan penjelasan edukatif singkat..." oninput="updateQuestionExplanation(${qIndex}, this.value)">${q.penjelasan || ''}</textarea>
      </div>
    </div>
  `).join('');
}

function addNewQuizQuestion() {
  const newQ = {
    id: Date.now(),
    soal: "Pertanyaan baru: Tuliskan narasi pertanyaan sejarah di sini...",
    pilihan: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    jawabanBenar: 0,
    penjelasan: "Tuliskan penjelasan jawaban benar di sini...",
    gambar: "assets/hero_perlawanan.jpg"
  };

  AppState.quiz.questions.push(newQ);
  renderQuizEditor();
  SoundFX.click();

  // Scroll to bottom
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function deleteQuizQuestion(index) {
  if (confirm(`Apakah Anda yakin ingin menghapus soal #${index + 1}?`)) {
    AppState.quiz.questions.splice(index, 1);
    renderQuizEditor();
  }
}

function updateQuestionText(index, val) { AppState.quiz.questions[index].soal = val; }
function updateQuestionImage(index, val) { AppState.quiz.questions[index].gambar = val; }
function updateQuestionOption(qIndex, optIndex, val) { AppState.quiz.questions[qIndex].pilihan[optIndex] = val; }
function updateQuestionCorrect(qIndex, optIndex) { AppState.quiz.questions[qIndex].jawabanBenar = optIndex; }
function updateQuestionExplanation(index, val) { AppState.quiz.questions[index].penjelasan = val; }

async function saveQuizQuestions() {
  localStorage.setItem('nusantara_quiz_questions', JSON.stringify(AppState.quiz.questions));

  if (AppState.appsScript.url) {
    try {
      await fetch(AppState.appsScript.url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'saveKuis',
          questions: AppState.quiz.questions
        })
      });
      alert("✅ Bank Soal Kuis berhasil disimpan ke browser dan disinkronkan ke Google Spreadsheet Guru!");
    } catch (e) {
      alert("✅ Bank Soal Kuis berhasil disimpan di browser (localStorage)!");
    }
  } else {
    alert("✅ Bank Soal Kuis berhasil disimpan di browser (localStorage)!");
  }
}

function resetDefaultQuizQuestions() {
  if (confirm("Kembalikan seluruh bank soal ke bawaan kurikulum standar? Perubahan kustom Anda akan direset.")) {
    AppState.quiz.questions = JSON.parse(JSON.stringify(HISTORICAL_DATA.kuis));
    localStorage.removeItem('nusantara_quiz_questions');
    renderQuizEditor();
    alert("Bank soal berhasil direset ke standar.");
  }
}

// =========================================================================
// 8. FITUR "BUAT MATERI" (SLIDE STUDIO SEPERTI POWERPOINT SEDERHANA)
// =========================================================================
function initSlideStudio() {
  loadStudioSlides();

  document.getElementById('btnAddSlide')?.addEventListener('click', () => addSlideFromTemplate('cover'));
  document.getElementById('btnDuplicateSlide')?.addEventListener('click', duplicateActiveSlide);
  document.getElementById('btnDeleteSlide')?.addEventListener('click', deleteActiveSlide);
  document.getElementById('btnSaveStudio')?.addEventListener('click', saveStudioMaterials);
  document.getElementById('btnPreviewSlideShow')?.addEventListener('click', startPresentationMode);
  document.getElementById('btnOpenSavedModal')?.addEventListener('click', openSavedMaterialsModal);

  setupCanvasInteractions();
}

function loadStudioSlides() {
  const currentKey = localStorage.getItem('nusantara_active_pres_id');
  const savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');

  if (currentKey && savedList.length > 0) {
    const found = savedList.find(p => p.id === currentKey);
    if (found) {
      AppState.studio.currentId = found.id;
      AppState.studio.title = found.title;
      AppState.studio.slides = found.slides;
      AppState.studio.activeSlideIndex = 0;
      return;
    }
  }

  // Cek apakah ada data tunggal tersimpan lama
  const single = localStorage.getItem('nusantara_slides_data');
  if (single) {
    try {
      const parsed = JSON.parse(single);
      AppState.studio.title = parsed.title || 'Materi Perlawanan Pribumi';
      AppState.studio.slides = parsed.slides || [];
      AppState.studio.currentId = parsed.id || 'pres-1';
      AppState.studio.activeSlideIndex = 0;
      return;
    } catch (e) {}
  }

  initDefaultSlides();
}

function initDefaultSlides() {
  AppState.studio.currentId = 'pres-' + Date.now();
  AppState.studio.title = 'Materi Perlawanan Pribumi';
  AppState.studio.slides = [
    JSON.parse(JSON.stringify(HISTORICAL_DATA.slideTemplates[0])), // Cover
    JSON.parse(JSON.stringify(HISTORICAL_DATA.slideTemplates[1])), // Profil Tokoh
    JSON.parse(JSON.stringify(HISTORICAL_DATA.slideTemplates[4])), // Sebab Akibat
    JSON.parse(JSON.stringify(HISTORICAL_DATA.slideTemplates[7]))  // Kesimpulan
  ];
  AppState.studio.activeSlideIndex = 0;
}

function renderSlideStudio() {
  const studio = AppState.studio;
  if (!studio.slides || studio.slides.length === 0) {
    initDefaultSlides();
  }

  const titleInput = document.getElementById('slideTitleInput');
  if (titleInput) {
    titleInput.value = studio.title;
    titleInput.oninput = (e) => { studio.title = e.target.value; };
  }

  renderSlideThumbnails();
  renderSlideCanvas();
  renderInspectorProperties();
}

function renderSlideThumbnails() {
  const container = document.getElementById('slideThumbList');
  if (!container) return;

  const studio = AppState.studio;
  container.innerHTML = studio.slides.map((s, idx) => `
    <div class="slide-thumb-item ${idx === studio.activeSlideIndex ? 'active' : ''}" onclick="selectSlide(${idx})">
      <span class="slide-thumb-number">#${idx + 1}</span>
      <div class="slide-thumb-preview" style="background: ${getSlideBgColor(s.background)};">
        <span>${s.name || `Slide ${idx + 1}`}</span>
      </div>
      <div class="slide-thumb-actions">
        <button class="btn-icon-sm" onclick="event.stopPropagation(); duplicateSlideAt(${idx})" title="Duplikasi">📋</button>
        <button class="btn-icon-sm" onclick="event.stopPropagation(); deleteSlideAt(${idx})" title="Hapus">🗑️</button>
      </div>
    </div>
  `).join('');
}

function getSlideBgColor(bgKey) {
  switch (bgKey) {
    case 'maroon': return 'linear-gradient(135deg, #580B0B, #801616)';
    case 'navy': return 'linear-gradient(135deg, #0D1628, #16243E)';
    case 'gold': return 'linear-gradient(135deg, #F3E5AB, #E8C15A)';
    case 'wood': return 'linear-gradient(135deg, #4A2810, #2C1608)';
    default: return '#FDF9F0';
  }
}

function selectSlide(index) {
  AppState.studio.activeSlideIndex = index;
  AppState.studio.selectedElementId = null;
  renderSlideThumbnails();
  renderSlideCanvas();
  renderInspectorProperties();
}

function renderSlideCanvas() {
  const viewport = document.getElementById('slideCanvasViewport');
  if (!viewport) return;

  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide) return;

  viewport.className = `slide-canvas-viewport bg-${slide.background || 'parchment'}`;

  viewport.innerHTML = (slide.elements || []).map(el => {
    const isSelected = el.id === studio.selectedElementId;
    let innerContent = '';

    if (el.type === 'image') {
      innerContent = `<img src="${el.src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit; pointer-events: none;" alt="Gambar Slide">`;
    } else if (el.type === 'card' || el.type === 'hero-card') {
      innerContent = `
        <div style="padding: 1rem; border-radius: 8px; background: ${el.background || '#FFF'}; border: ${el.border || '1px solid #CCC'}; color: ${el.color || '#2C1810'}; pointer-events: none;">
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.35rem;">${el.title || ''}</h4>
          <p style="font-size: 0.85rem; line-height: 1.4; white-space: pre-line;">${el.text || ''}</p>
        </div>
      `;
    } else if (el.type === 'icon') {
      innerContent = `<div style="font-size: ${el.fontSize || '32px'}; pointer-events: none;">${el.text || '⭐'}</div>`;
    } else if (el.type === 'shape') {
      innerContent = `<div style="width: 100%; height: 100%; background: ${el.background || '#C59B27'}; border-radius: ${el.borderRadius || '0px'}; border: ${el.border || 'none'}; pointer-events: none;"></div>`;
    } else {
      innerContent = `<div style="white-space: pre-line; pointer-events: none;">${el.text || ''}</div>`;
    }

    const styleStr = `
      top: ${el.top || '10%'};
      left: ${el.left || '10%'};
      ${el.transform ? `transform: ${el.transform};` : ''}
      ${el.width ? `width: ${el.width};` : ''}
      ${el.height ? `height: ${el.height};` : ''}
      color: ${el.color || 'inherit'};
      font-size: ${el.fontSize || '16px'};
      font-weight: ${el.fontWeight || 'normal'};
      font-family: ${el.fontFamily || 'inherit'};
      text-align: ${el.textAlign || 'left'};
      font-style: ${el.fontStyle || 'normal'};
      border-radius: ${el.borderRadius || '0px'};
    `;

    return `
      <div 
        class="canvas-element ${isSelected ? 'selected' : ''}" 
        id="el-${el.id}" 
        data-el-id="${el.id}"
        style="${styleStr}"
        onmousedown="handleElementMouseDown(event, '${el.id}')"
        ontouchstart="handleElementTouchStart(event, '${el.id}')"
      >
        ${innerContent}
      </div>
    `;
  }).join('');
}

// Drag & Drop pada Kanvas (Mouse & Touch)
function setupCanvasInteractions() {
  const viewport = document.getElementById('slideCanvasViewport');
  if (!viewport) return;

  const handleMove = (clientX, clientY) => {
    const studio = AppState.studio;
    if (!studio.isDragging || !studio.dragElement) return;

    const rect = viewport.getBoundingClientRect();
    const x = clientX - rect.left - studio.dragOffset.x;
    const y = clientY - rect.top - studio.dragOffset.y;

    const percentX = Math.max(0, Math.min(88, (x / rect.width) * 100));
    const percentY = Math.max(0, Math.min(88, (y / rect.height) * 100));

    studio.dragElement.style.left = `${percentX.toFixed(1)}%`;
    studio.dragElement.style.top = `${percentY.toFixed(1)}%`;
    studio.dragElement.style.transform = 'none';

    const slide = studio.slides[studio.activeSlideIndex];
    if (slide && slide.elements) {
      const elModel = slide.elements.find(el => el.id === studio.selectedElementId);
      if (elModel) {
        elModel.left = `${percentX.toFixed(1)}%`;
        elModel.top = `${percentY.toFixed(1)}%`;
        elModel.transform = '';
      }
    }
  };

  viewport.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
  viewport.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  const stopDrag = () => {
    if (AppState.studio.isDragging) {
      AppState.studio.isDragging = false;
      AppState.studio.dragElement = null;
      renderSlideThumbnails();
    }
  };

  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchend', stopDrag);

  // Klik di area kosong kanvas untuk membatalkan seleksi elemen
  viewport.addEventListener('click', (e) => {
    if (e.target === viewport) {
      AppState.studio.selectedElementId = null;
      document.querySelectorAll('.canvas-element').forEach(el => el.classList.remove('selected'));
      renderInspectorProperties();
    }
  });
}

function handleElementMouseDown(e, elementId) {
  e.stopPropagation();
  const studio = AppState.studio;
  studio.selectedElementId = elementId;
  studio.isDragging = true;

  document.querySelectorAll('.canvas-element').forEach(el => el.classList.remove('selected'));
  const domEl = document.getElementById(`el-${elementId}`);
  if (domEl) {
    domEl.classList.add('selected');
    studio.dragElement = domEl;
    const elRect = domEl.getBoundingClientRect();
    studio.dragOffset = {
      x: e.clientX - elRect.left,
      y: e.clientY - elRect.top
    };
  }

  renderInspectorProperties();
}

function handleElementTouchStart(e, elementId) {
  if (!e.touches || !e.touches[0]) return;
  e.stopPropagation();
  const studio = AppState.studio;
  studio.selectedElementId = elementId;
  studio.isDragging = true;

  document.querySelectorAll('.canvas-element').forEach(el => el.classList.remove('selected'));
  const domEl = document.getElementById(`el-${elementId}`);
  if (domEl) {
    domEl.classList.add('selected');
    studio.dragElement = domEl;
    const elRect = domEl.getBoundingClientRect();
    studio.dragOffset = {
      x: e.touches[0].clientX - elRect.left,
      y: e.touches[0].clientY - elRect.top
    };
  }

  renderInspectorProperties();
}

function renderInspectorProperties() {
  const container = document.getElementById('elementPropertiesContainer');
  if (!container) return;

  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide) return;

  const selectedEl = slide.elements.find(el => el.id === studio.selectedElementId);

  if (!selectedEl) {
    container.innerHTML = `
      <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
        <p>💡 Klik salah satu elemen di dalam kanvas untuk mengedit teks, ukuran, atau warnanya.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="inspector-section">
      <label class="inspector-label">Edit Teks Konten:</label>
      <textarea class="form-textarea" rows="3" oninput="updateActiveElementProp('text', this.value)">${selectedEl.text || ''}</textarea>
    </div>

    ${(selectedEl.type === 'card' || selectedEl.type === 'hero-card') ? `
      <div class="inspector-section">
        <label class="inspector-label">Judul Kartu:</label>
        <input type="text" class="form-input" value="${selectedEl.title || ''}" oninput="updateActiveElementProp('title', this.value)">
      </div>
    ` : ''}

    ${selectedEl.type === 'image' ? `
      <div class="inspector-section">
        <label class="inspector-label">Sumber Gambar (Pilih / Tulis URL):</label>
        <input type="text" class="form-input" value="${selectedEl.src || ''}" oninput="updateActiveElementProp('src', this.value)">
        <div style="display: flex; gap: 0.3rem; margin-top: 0.4rem; flex-wrap: wrap;">
          <button class="template-pill-btn" onclick="updateActiveElementProp('src', 'assets/portrait_diponegoro.jpg')">Diponegoro</button>
          <button class="template-pill-btn" onclick="updateActiveElementProp('src', 'assets/portrait_pattimura.jpg')">Pattimura</button>
          <button class="template-pill-btn" onclick="updateActiveElementProp('src', 'assets/portrait_hasanuddin.jpg')">Hasanuddin</button>
          <button class="template-pill-btn" onclick="updateActiveElementProp('src', 'assets/portrait_cutnyakdhien.jpg')">Cut Nyak</button>
        </div>
      </div>
    ` : ''}

    <div class="inspector-section">
      <label class="inspector-label">Ukuran Teks / Elemen:</label>
      <select class="form-select" onchange="updateActiveElementProp('fontSize', this.value)">
        <option value="14px" ${selectedEl.fontSize === '14px' ? 'selected' : ''}>Kecil (14px)</option>
        <option value="16px" ${selectedEl.fontSize === '16px' ? 'selected' : ''}>Normal (16px)</option>
        <option value="20px" ${selectedEl.fontSize === '20px' ? 'selected' : ''}>Sedang (20px)</option>
        <option value="26px" ${selectedEl.fontSize === '26px' ? 'selected' : ''}>Besar (26px)</option>
        <option value="34px" ${selectedEl.fontSize === '34px' ? 'selected' : ''}>Judul (34px)</option>
        <option value="42px" ${selectedEl.fontSize === '42px' ? 'selected' : ''}>Sangat Besar (42px)</option>
      </select>
    </div>

    <div class="inspector-section">
      <label class="inspector-label">Warna Teks:</label>
      <input type="color" class="form-input" value="${selectedEl.color || '#2C1810'}" style="height: 40px; cursor: pointer;" onchange="updateActiveElementProp('color', this.value)">
    </div>

    ${(selectedEl.type === 'shape' || selectedEl.type === 'card') ? `
      <div class="inspector-section">
        <label class="inspector-label">Warna Background Elemen:</label>
        <input type="color" class="form-input" value="${selectedEl.background || '#FFFFFF'}" style="height: 40px; cursor: pointer;" onchange="updateActiveElementProp('background', this.value)">
      </div>
    ` : ''}

    <div style="margin-top: 1rem;">
      <button class="btn btn-secondary" onclick="deleteSelectedElement()" style="width: 100%; color: var(--danger); border-color: var(--danger);">
        🗑️ Hapus Elemen Ini
      </button>
    </div>
  `;
}

function updateActiveElementProp(prop, val) {
  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide) return;

  const el = slide.elements.find(e => e.id === studio.selectedElementId);
  if (el) {
    el[prop] = val;
    renderSlideCanvas();
  }
}

function deleteSelectedElement() {
  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide || !studio.selectedElementId) return;

  slide.elements = slide.elements.filter(e => e.id !== studio.selectedElementId);
  studio.selectedElementId = null;
  renderSlideCanvas();
  renderInspectorProperties();
}

function changeSlideBackground(bgName) {
  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (slide) {
    slide.background = bgName;
    renderSlideCanvas();
    renderSlideThumbnails();
  }
}

// Tambah Elemen Lengkap
function addElementToActiveSlide(type) {
  const studio = AppState.studio;
  const slide = studio.slides[studio.activeSlideIndex];
  if (!slide) return;

  const newId = `el-${Date.now()}`;
  let newEl = null;

  switch (type) {
    case 'title':
      newEl = { id: newId, type: 'title', text: "Judul Materi Sejarah", top: "30%", left: "15%", fontSize: "28px", fontWeight: "800", color: "#3A2010", fontFamily: "'Cinzel', serif" };
      break;
    case 'text':
      newEl = { id: newId, type: 'paragraph', text: "Tuliskan keterangan materi perlawanan di sini secara ringkas dan informatif.", top: "45%", left: "15%", fontSize: "16px", color: "#2C1810", width: "65%" };
      break;
    case 'quote':
      newEl = { id: newId, type: 'quote', text: "\"Kutipan heroisme dan tekad perjuangan pahlawan.\"", top: "65%", left: "15%", fontSize: "16px", fontStyle: "italic", color: "#801616" };
      break;
    case 'badge':
      newEl = { id: newId, type: 'badge', text: "📍 Palagan Pertempuran", top: "18%", left: "15%", fontSize: "13px", color: "#C59B27", fontWeight: "700" };
      break;
    case 'image':
      newEl = { id: newId, type: 'image', src: "assets/portrait_diponegoro.jpg", top: "25%", left: "60%", width: "190px", height: "190px", borderRadius: "10px" };
      break;
    case 'icon':
      newEl = { id: newId, type: 'icon', text: "⚔️", top: "25%", left: "15%", fontSize: "36px" };
      break;
    case 'shape':
      newEl = { id: newId, type: 'shape', top: "40%", left: "15%", width: "200px", height: "80px", background: "#D4AF37", borderRadius: "8px" };
      break;
    case 'timeline-box':
      newEl = { id: newId, type: 'card', title: "Tahun 1825: Pemasangan Patok", text: "Awal meletusnya Perang Jawa Diponegoro di Tegalrejo.", top: "35%", left: "15%", width: "40%", background: "#FFFFFF", border: "2px solid #801616" };
      break;
    case 'map-stamp':
      newEl = { id: newId, type: 'card', title: "📍 Benteng Somba Opu", text: "Pusat pertahanan maritim Kesultanan Gowa di Makassar.", top: "35%", left: "55%", width: "35%", background: "#FFFDF0", border: "2px solid #C59B27" };
      break;
    case 'hero-card':
      newEl = { id: newId, type: 'hero-card', title: "Sultan Baabullah (1570-1583)", text: "Penguasa 72 Pulau yang mengusir penjajah Portugis dari Maluku.", top: "30%", left: "15%", width: "45%", background: "#FFFFFF", border: "2px solid #C59B27" };
      break;
  }

  if (newEl) {
    slide.elements.push(newEl);
    studio.selectedElementId = newId;
    renderSlideCanvas();
    renderInspectorProperties();
  }
}

// 8 Template Slide
function addSlideFromTemplate(tplId) {
  const tpl = HISTORICAL_DATA.slideTemplates.find(t => t.id === tplId) || HISTORICAL_DATA.slideTemplates[0];
  const newSlide = JSON.parse(JSON.stringify(tpl));
  newSlide.name = `${tpl.name} (${AppState.studio.slides.length + 1})`;

  AppState.studio.slides.push(newSlide);
  AppState.studio.activeSlideIndex = AppState.studio.slides.length - 1;
  renderSlideStudio();
}

function duplicateActiveSlide() {
  duplicateSlideAt(AppState.studio.activeSlideIndex);
}

function duplicateSlideAt(index) {
  const studio = AppState.studio;
  const original = studio.slides[index];
  if (!original) return;

  const copy = JSON.parse(JSON.stringify(original));
  copy.name = `${original.name} (Salinan)`;
  studio.slides.splice(index + 1, 0, copy);
  studio.activeSlideIndex = index + 1;
  renderSlideStudio();
}

function deleteActiveSlide() {
  deleteSlideAt(AppState.studio.activeSlideIndex);
}

function deleteSlideAt(index) {
  const studio = AppState.studio;
  if (studio.slides.length <= 1) {
    alert("Minimal harus ada 1 slide presentasi.");
    return;
  }

  if (confirm(`Hapus Slide #${index + 1}?`)) {
    studio.slides.splice(index, 1);
    studio.activeSlideIndex = Math.max(0, index - 1);
    renderSlideStudio();
  }
}

// Multi-Simpanan Materi Guru ("Materi yang dibuat dapat diedit kembali")
async function saveStudioMaterials() {
  const studio = AppState.studio;
  const savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');

  const presentationData = {
    id: studio.currentId,
    title: studio.title || 'Materi Perlawanan Pribumi',
    date: new Date().toLocaleString('id-ID'),
    slides: studio.slides
  };

  const existingIdx = savedList.findIndex(p => p.id === studio.currentId);
  if (existingIdx >= 0) {
    savedList[existingIdx] = presentationData;
  } else {
    savedList.push(presentationData);
  }

  localStorage.setItem('nusantara_saved_presentations', JSON.stringify(savedList));
  localStorage.setItem('nusantara_active_pres_id', studio.currentId);
  localStorage.setItem('nusantara_slides_data', JSON.stringify(presentationData));

  if (AppState.appsScript.url) {
    try {
      await fetch(AppState.appsScript.url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'saveMateri',
          id: presentationData.id,
          title: presentationData.title,
          slides: presentationData.slides
        })
      });
      alert(`✅ Materi "${presentationData.title}" berhasil disimpan di browser dan disinkronkan ke Google Spreadsheet Guru!`);
    } catch (e) {
      alert(`✅ Materi "${presentationData.title}" berhasil disimpan di memori browser!`);
    }
  } else {
    alert(`✅ Materi "${presentationData.title}" berhasil disimpan di browser! Anda dapat membukanya kembali kapan saja.`);
  }
}

function openSavedMaterialsModal() {
  const modal = document.getElementById('savedMaterialsModal');
  const container = document.getElementById('savedMaterialsListContainer');
  if (!modal || !container) return;

  const savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');

  if (savedList.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted); background: #FFF; border-radius: 8px; border: 1px dashed var(--border-gold);">
        <p>Belum ada materi tersimpan. Klik "Simpan Materi" setelah menyusun slide Anda.</p>
      </div>
    `;
  } else {
    container.innerHTML = savedList.map(item => `
      <div class="saved-materi-item">
        <div>
          <h4 style="color: var(--brown-deep); font-size: 1.05rem; margin-bottom: 0.25rem;">${item.title}</h4>
          <span style="font-size: 0.8rem; color: var(--text-muted);">📄 ${item.slides.length} Slide • ⏳ ${item.date || 'Tersimpan'}</span>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-primary" onclick="loadSavedPresentation('${item.id}')" style="padding: 0.35rem 0.8rem; font-size: 0.82rem;">
            Buka & Edit
          </button>
          <button class="btn btn-secondary" onclick="deleteSavedPresentation('${item.id}')" style="padding: 0.35rem 0.6rem; font-size: 0.82rem; color: var(--danger);">
            🗑️
          </button>
        </div>
      </div>
    `).join('');
  }

  modal.showModal();
}

function loadSavedPresentation(id) {
  const savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');
  const found = savedList.find(p => p.id === id);
  if (found) {
    AppState.studio.currentId = found.id;
    AppState.studio.title = found.title;
    AppState.studio.slides = found.slides;
    AppState.studio.activeSlideIndex = 0;
    localStorage.setItem('nusantara_active_pres_id', found.id);
    renderSlideStudio();
    document.getElementById('savedMaterialsModal')?.close();
  }
}

function deleteSavedPresentation(id) {
  if (confirm("Hapus dokumen materi tersimpan ini?")) {
    let savedList = JSON.parse(localStorage.getItem('nusantara_saved_presentations') || '[]');
    savedList = savedList.filter(p => p.id !== id);
    localStorage.setItem('nusantara_saved_presentations', JSON.stringify(savedList));
    openSavedMaterialsModal();
  }
}

function createNewPresentation() {
  initDefaultSlides();
  renderSlideStudio();
  document.getElementById('savedMaterialsModal')?.close();
}

// Mode Presentasi Layar Penuh
function startPresentationMode() {
  const modal = document.getElementById('presentationModal');
  if (!modal) return;

  AppState.studio.presentationIndex = AppState.studio.activeSlideIndex;
  renderPresentationSlide();

  modal.style.display = 'flex';
  if (typeof modal.showModal === 'function') {
    try {
      modal.showModal();
    } catch (e) {
      modal.setAttribute('open', '');
    }
  } else {
    modal.setAttribute('open', '');
  }

  const keyHandler = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
      nextPresentationSlide();
    } else if (e.key === 'ArrowLeft') {
      prevPresentationSlide();
    } else if (e.key === 'Escape') {
      closePresentationMode();
    }
  };
  window.addEventListener('keydown', keyHandler);

  modal.addEventListener('close', () => {
    closePresentationMode();
    window.removeEventListener('keydown', keyHandler);
  }, { once: true });
}

function closePresentationMode() {
  const modal = document.getElementById('presentationModal');
  if (!modal) return;

  try {
    modal.close();
  } catch (e) {}
  modal.removeAttribute('open');
  modal.style.display = 'none';
}

function renderPresentationSlide() {
  const studio = AppState.studio;
  const slide = studio.slides[studio.presentationIndex];
  const stage = document.getElementById('presentationCanvas');
  const counter = document.getElementById('presentationCounter');

  if (!slide || !stage) return;

  counter.textContent = `Slide ${studio.presentationIndex + 1} dari ${studio.slides.length}`;
  stage.className = `presentation-canvas bg-${slide.background || 'parchment'}`;

  stage.innerHTML = (slide.elements || []).map(el => {
    let innerContent = '';
    if (el.type === 'image') {
      innerContent = `<img src="${el.src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;" alt="Slide Image">`;
    } else if (el.type === 'card' || el.type === 'hero-card') {
      innerContent = `
        <div style="padding: 1.25rem; border-radius: 8px; background: ${el.background || '#FFF'}; border: ${el.border || '1px solid #CCC'}; color: ${el.color || '#2C1810'};">
          <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.4rem;">${el.title || ''}</h4>
          <p style="font-size: 0.98rem; line-height: 1.5; white-space: pre-line;">${el.text || ''}</p>
        </div>
      `;
    } else if (el.type === 'icon') {
      innerContent = `<div style="font-size: ${el.fontSize || '42px'};">${el.text || '⭐'}</div>`;
    } else if (el.type === 'shape') {
      innerContent = `<div style="width: 100%; height: 100%; background: ${el.background || '#C59B27'}; border-radius: ${el.borderRadius || '0px'}; border: ${el.border || 'none'};"></div>`;
    } else {
      innerContent = `<div style="white-space: pre-line;">${el.text || ''}</div>`;
    }

    const styleStr = `
      position: absolute;
      top: ${el.top || '10%'};
      left: ${el.left || '10%'};
      ${el.transform ? `transform: ${el.transform};` : ''}
      ${el.width ? `width: ${el.width};` : ''}
      ${el.height ? `height: ${el.height};` : ''}
      color: ${el.color || 'inherit'};
      font-size: ${el.fontSize || '16px'};
      font-weight: ${el.fontWeight || 'normal'};
      font-family: ${el.fontFamily || 'inherit'};
      text-align: ${el.textAlign || 'left'};
      font-style: ${el.fontStyle || 'normal'};
      border-radius: ${el.borderRadius || '0px'};
    `;

    return `<div style="${styleStr}">${innerContent}</div>`;
  }).join('');
}

function nextPresentationSlide() {
  if (AppState.studio.presentationIndex < AppState.studio.slides.length - 1) {
    AppState.studio.presentationIndex++;
    renderPresentationSlide();
  }
}

function prevPresentationSlide() {
  if (AppState.studio.presentationIndex > 0) {
    AppState.studio.presentationIndex--;
    renderPresentationSlide();
  }
}

// =========================================================================
// 9. PETA SEJARAH INTERAKTIF NUSANTARA & PEMUTAR VIDEO SEJARAH YOUTUBE
// =========================================================================

/**
 * Mengubah berbagai varian URL YouTube menjadi format Embed yang valid
 * Mendukung format:
 * - https://www.youtube.com/watch?v=XXXXX
 * - https://youtu.be/XXXXX
 * - https://www.youtube.com/embed/XXXXX
 * - https://www.youtube.com/shorts/XXXXX
 * - ID 11 karakter langsung
 */
function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  url = url.trim();

  // Jika sudah berupa embed URL
  if (url.includes('youtube.com/embed/')) {
    const cleanId = url.split('youtube.com/embed/')[1].split('?')[0].split('&')[0];
    return `https://www.youtube-nocookie.com/embed/${cleanId}?rel=0`;
  }

  // youtu.be/<id>
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch && shortMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${shortMatch[1]}?rel=0`;
  }

  // watch?v=<id>
  const vMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (vMatch && vMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${vMatch[1]}?rel=0`;
  }

  // shorts/<id>
  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}?rel=0`;
  }

  // Jika user memasukkan 11 karakter ID video
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return `https://www.youtube-nocookie.com/embed/${url}?rel=0`;
  }

  return url;
}

function getCustomMapVideos() {
  try {
    return JSON.parse(localStorage.getItem('nusantara_custom_map_videos') || '{}');
  } catch (e) {
    return {};
  }
}

function getPointEffectiveVideo(point) {
  const customMap = getCustomMapVideos();
  const customUrl = customMap[point.id];
  if (customUrl) {
    return {
      url: customUrl,
      isCustom: true
    };
  }
  return {
    url: point.youtubeUrl || '',
    isCustom: false
  };
}

function initInteractiveMap() {
  // Sinkronisasi cache agar link video resmi dari guru langsung aktif
  if (localStorage.getItem('nusantara_map_video_sync') !== '2026-v2') {
    localStorage.removeItem('nusantara_custom_map_videos');
    localStorage.setItem('nusantara_map_video_sync', '2026-v2');
  }

  const container = document.getElementById('mapPinsContainer');
  if (!container) return;

  container.innerHTML = HISTORICAL_DATA.mapPoints.map(point => `
    <div class="map-pin" id="pin-${point.id}" style="left: ${point.coords.x}%; top: ${point.coords.y}%;" onclick="openMapPointDetail('${point.id}')">
      <div class="pin-pulse"></div>
      <div class="pin-core"></div>
      <span class="pin-label">${point.title}</span>
    </div>
  `).join('');

  // Tampilkan titik pertama secara default tanpa auto-scroll
  openMapPointDetail(HISTORICAL_DATA.mapPoints[0].id, false);

  // Pasang listener tombol tutup modal video cinema jika dialog ditutup
  const cinemaModal = document.getElementById('mapVideoModal');
  if (cinemaModal) {
    cinemaModal.addEventListener('close', () => {
      const iframe = document.getElementById('cinemaVideoIframe');
      if (iframe) iframe.src = '';
    });
  }
}

function openMapPointDetail(pointId, shouldScroll = true) {
  const point = HISTORICAL_DATA.mapPoints.find(p => p.id === pointId);
  const drawer = document.getElementById('mapInfoDrawer');
  if (!point || !drawer) return;

  // Highlight Pin Aktif
  document.querySelectorAll('.map-pin').forEach(pin => {
    pin.classList.remove('active');
    const core = pin.querySelector('.pin-core');
    if (core) {
      core.style.background = '#ECC94B';
      core.style.boxShadow = '0 0 10px rgba(236, 201, 75, 0.8)';
    }
  });
  const activePin = document.querySelector(`#pin-${pointId}`);
  if (activePin) {
    activePin.classList.add('active');
    const activePinCore = activePin.querySelector('.pin-core');
    if (activePinCore) {
      activePinCore.style.background = '#801616';
      activePinCore.style.boxShadow = '0 0 16px rgba(236, 201, 75, 1)';
    }
  }

  const videoData = getPointEffectiveVideo(point);
  const embedUrl = getYouTubeEmbedUrl(videoData.url);
  const videoTitle = point.videoTitle || `Sejarah Perjuangan ${point.hero}`;

  drawer.innerHTML = `
    <div>
      <div style="display: flex; gap: 0.6rem; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap;">
        <span class="materi-era-badge voc" style="font-size: 0.78rem;">📍 Titik Palagan Nusantara</span>
        <span style="font-weight: 700; color: var(--gold-dark); font-size: 0.85rem;">⏳ ${point.period}</span>
      </div>

      <div class="map-hero-profile-header">
        <img src="${point.heroImage || 'assets/portrait_diponegoro.jpg'}" alt="${point.hero}" class="map-hero-avatar">
        <div>
          <h3 style="color: var(--brown-deep); font-size: 1.45rem; line-height: 1.25; margin-bottom: 0.25rem;">${point.title}</h3>
          <p style="color: var(--maroon); font-weight: 700; font-size: 0.95rem; margin: 0;">👤 ${point.hero}</p>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Lawan: ${point.enemy}</span>
        </div>
      </div>

      <p style="font-size: 0.93rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${point.summary}</p>
      
      <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-bottom: 1.25rem; background: var(--bg-parchment-light); padding: 0.6rem 0.85rem; border-radius: 6px; border-left: 3px solid var(--gold);">
        🏰 Benteng / Lokasi Kunci: <span style="color: var(--brown-deep);">${point.fortress}</span>
      </div>

      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
        <button class="btn btn-maroon" onclick="openMateriDetail('${point.topicId}')" style="flex: 1; min-width: 170px;">
          📖 Baca Materi Lengkap
        </button>
        <button class="btn btn-secondary" onclick="openMapVideoModal('${point.id}')" style="flex: 1; min-width: 170px;">
          🎬 Layar Penuh (Bioskop)
        </button>
        <button class="btn btn-outline admin-only-item" onclick="openChangeVideoUrlModal('${point.id}')" style="padding: 0.5rem 0.75rem; font-size: 0.82rem;" title="Ubah Link Video YouTube (Khusus Guru)">
          ⚙️ Ganti Video
        </button>
      </div>
    </div>

    <!-- SISI KANAN: PEMUTAR VIDEO SEJARAH YOUTUBE -->
    <div class="map-video-box">
      <div class="map-video-header">
        <span class="map-video-header-title" title="${videoTitle}">
          <span>▶</span> ${videoTitle}
        </span>
        ${videoData.isCustom ? '<span style="font-size: 0.7rem; background: var(--gold); color: #000; padding: 2px 6px; border-radius: 4px; font-weight: 700;">★ Video Kustom Guru</span>' : ''}
      </div>

      <div class="map-video-responsive">
        ${embedUrl ? `
          <iframe 
            src="${embedUrl}" 
            title="${videoTitle}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        ` : `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #94A3B8; text-align: center; padding: 1rem;">
            <p>Video belum tersedia untuk titik ini.</p>
            <button class="btn btn-sm btn-outline-gold admin-only-item" onclick="openChangeVideoUrlModal('${point.id}')">Tambah Link YouTube</button>
          </div>
        `}
      </div>

      <div class="map-video-footer">
        <div style="color: #94A3B8;">
          📹 Video Sejarah Tokoh Perjuangan
        </div>
        <div>
          <a href="${videoData.url}" target="_blank" rel="noopener noreferrer" style="color: var(--gold-light); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.3rem;">
            <span>🔗 Buka di YouTube</span>
          </a>
        </div>
      </div>
    </div>
  `;

  if (shouldScroll) {
    drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * Membuka Modal Bioskop Layar Penuh untuk Video YouTube
 */
function openMapVideoModal(pointId) {
  const point = HISTORICAL_DATA.mapPoints.find(p => p.id === pointId);
  if (!point) return;

  const modal = document.getElementById('mapVideoModal');
  const iframe = document.getElementById('cinemaVideoIframe');
  const title = document.getElementById('mapVideoModalTitle');
  const subtitle = document.getElementById('cinemaVideoSubtitle');
  const source = document.getElementById('cinemaVideoSource');
  const directBtn = document.getElementById('cinemaYoutubeDirectBtn');
  if (!modal || !iframe) return;

  const videoData = getPointEffectiveVideo(point);
  const embedUrl = getYouTubeEmbedUrl(videoData.url);
  const videoTitle = point.videoTitle || `Sejarah Perjuangan ${point.hero}`;

  title.textContent = `🎬 Bioskop: ${point.title}`;
  subtitle.textContent = `${videoTitle} (${point.hero})`;
  source.textContent = `Palagan: ${point.fortress} • Musuh: ${point.enemy} • Periode: ${point.period}`;

  if (directBtn) {
    directBtn.href = videoData.url;
  }

  // Set src iframe dengan autoplay agar langsung berputar saat bioskop dibuka
  iframe.src = embedUrl ? `${embedUrl}&autoplay=1` : '';

  modal.showModal();
}

/**
 * Menutup Modal Bioskop dan mematikan suara video YouTube seketika
 */
function closeMapVideoModal() {
  const modal = document.getElementById('mapVideoModal');
  const iframe = document.getElementById('cinemaVideoIframe');
  if (iframe) {
    iframe.src = ''; // Menghentikan pemutaran audio/video seketika
  }
  if (modal && modal.open) {
    modal.close();
  }
}

/**
 * Membuka Dialog untuk Mengubah URL Video YouTube
 */
function openChangeVideoUrlModal(pointId) {
  if (!AppState.admin || !AppState.admin.isLoggedIn) {
    alert("🔒 Pengaturan video YouTube hanya dapat diakses oleh Guru / Administrator.");
    openAdminLoginModal();
    return;
  }

  const point = HISTORICAL_DATA.mapPoints.find(p => p.id === pointId);
  if (!point) return;

  const modal = document.getElementById('changeVideoUrlModal');
  const heroLabel = document.getElementById('editVideoHeroLabel');
  const pointIdInput = document.getElementById('editVideoPointId');
  const urlInput = document.getElementById('editVideoUrlInput');
  if (!modal) return;

  const videoData = getPointEffectiveVideo(point);

  if (heroLabel) heroLabel.textContent = `Tokoh: ${point.hero} (${point.title})`;
  if (pointIdInput) pointIdInput.value = point.id;
  if (urlInput) urlInput.value = videoData.url;

  modal.showModal();
}

/**
 * Menyimpan URL Video YouTube Kustom ke LocalStorage
 */
function saveCustomVideoUrl() {
  const pointIdInput = document.getElementById('editVideoPointId');
  const urlInput = document.getElementById('editVideoUrlInput');
  const modal = document.getElementById('changeVideoUrlModal');
  if (!pointIdInput || !urlInput) return;

  const pointId = pointIdInput.value;
  const newUrl = urlInput.value.trim();

  if (!newUrl) {
    alert('Mohon masukkan URL video YouTube yang valid.');
    return;
  }

  const embedUrl = getYouTubeEmbedUrl(newUrl);
  if (!embedUrl || (!newUrl.includes('youtube.com') && !newUrl.includes('youtu.be') && newUrl.length !== 11)) {
    alert('Format URL tidak dikenali sebagai link YouTube. Pastikan link berisi youtube.com atau youtu.be.');
    return;
  }

  const customMap = getCustomMapVideos();
  customMap[pointId] = newUrl;
  localStorage.setItem('nusantara_custom_map_videos', JSON.stringify(customMap));

  if (modal) modal.close();
  openMapPointDetail(pointId, false);
  alert('✅ URL Video YouTube berhasil diperbarui!');
}

/**
 * Mereset URL Video YouTube kembali ke bawaan sistem
 */
function resetVideoToDefault() {
  const pointIdInput = document.getElementById('editVideoPointId');
  const modal = document.getElementById('changeVideoUrlModal');
  if (!pointIdInput) return;

  const pointId = pointIdInput.value;
  const customMap = getCustomMapVideos();
  delete customMap[pointId];
  localStorage.setItem('nusantara_custom_map_videos', JSON.stringify(customMap));

  if (modal) modal.close();
  openMapPointDetail(pointId, false);
  alert('🔄 Video telah dikembalikan ke video pembelajaran bawaan.');
}

// =========================================================================
// 10. TIMELINE SEJARAH KRONOLOGIS (DENGAN MODAL DETAIL)
// =========================================================================
function initTimelineView() {
  renderTimelineList('all');

  const filterBtns = document.querySelectorAll('.timeline-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const era = btn.getAttribute('data-era') || 'all';
      renderTimelineList(era);
    });
  });
}

function renderTimelineList(eraFilter = 'all') {
  const container = document.getElementById('timelineNodesContainer');
  if (!container) return;

  let events = HISTORICAL_DATA.timeline;
  if (eraFilter !== 'all') {
    events = events.filter(e => e.era === eraFilter);
  }

  container.innerHTML = events.map((ev, index) => `
    <div class="timeline-node" onclick="openTimelineDetail(${index})">
      <div class="timeline-marker-dot"></div>
      <div class="timeline-card">
        <span class="timeline-year-tag">${ev.year}</span>
        <h4 class="timeline-card-title">${ev.title}</h4>
        <div class="timeline-card-hero">👤 ${ev.hero}</div>
        <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.5rem;">📍 ${ev.region}</div>
        <p class="timeline-card-desc">${ev.desc}</p>
        <div style="margin-top: 0.75rem; font-size: 0.82rem; font-weight: 700; color: var(--maroon);">
          🔍 Klik untuk detail peristiwa →
        </div>
      </div>
    </div>
  `).join('');
}

// Menampilkan detail kartu timeline sesuai poin #7:
// Tahun, Peristiwa, Tokoh, Wilayah, Penjelasan singkat
function openTimelineDetail(index) {
  const ev = HISTORICAL_DATA.timeline[index];
  const modal = document.getElementById('timelineDetailModal');
  const body = document.getElementById('timelineModalBody');
  const btnMateri = document.getElementById('btnTimelineToMateri');

  if (!ev || !modal || !body) return;

  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="timeline-year-tag" style="font-size: 1rem; padding: 0.35rem 1rem;">Tahun: ${ev.year}</span>
        <span class="materi-era-badge ${ev.era}">${ev.era.toUpperCase()}</span>
      </div>

      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Peristiwa:</div>
        <h3 style="color: var(--brown-deep); font-size: 1.4rem; margin-top: 0.2rem;">${ev.title}</h3>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--bg-parchment-light); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-gold);">
        <div>
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--gold-dark); text-transform: uppercase;">👤 Tokoh:</div>
          <div style="font-weight: 700; color: var(--maroon); margin-top: 0.2rem;">${ev.hero}</div>
        </div>
        <div>
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--gold-dark); text-transform: uppercase;">📍 Wilayah:</div>
          <div style="font-weight: 700; color: var(--brown-deep); margin-top: 0.2rem;">${ev.region}</div>
        </div>
      </div>

      <div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Penjelasan Singkat:</div>
        <p style="font-size: 1rem; color: var(--text-primary); line-height: 1.6; background: #FFF; padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-subtle);">${ev.desc}</p>
      </div>
    </div>
  `;

  if (btnMateri) {
    btnMateri.onclick = () => {
      modal.close();
      if (ev.topicId) {
        openMateriDetail(ev.topicId);
      } else {
        navigateTo('materi');
      }
    };
  }

  modal.showModal();
}

// =========================================================================
// 11. SINKRONISASI GOOGLE APPS SCRIPT
// =========================================================================
function initAppsScriptModal() {
  const modal = document.getElementById('appsScriptModal');
  const openBtn = document.getElementById('btnOpenSyncModal');
  const closeBtn = document.getElementById('btnCloseSyncModal');
  const saveUrlBtn = document.getElementById('btnSaveAppsScriptUrl');
  const testPingBtn = document.getElementById('btnTestAppsScriptPing');
  const inputUrl = document.getElementById('appsScriptUrlInput');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      if (!AppState.admin || !AppState.admin.isLoggedIn) {
        alert("🔒 Pengaturan sinkronisasi Google Sheets dilindungi untuk Guru / Admin.");
        openAdminLoginModal();
        return;
      }
      if (inputUrl) inputUrl.value = AppState.appsScript.url;
      modal.showModal();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  if (saveUrlBtn && inputUrl) {
    saveUrlBtn.addEventListener('click', () => {
      const url = inputUrl.value.trim();
      AppState.appsScript.url = url;
      localStorage.setItem('apps_script_url', url);
      checkAppsScriptStatus();
      alert("✅ URL Google Apps Script disimpan!");
    });
  }

  if (testPingBtn && inputUrl) {
    testPingBtn.addEventListener('click', async () => {
      const url = inputUrl.value.trim();
      const statusEl = document.getElementById('syncPingResult');
      if (!url) {
        alert("Silakan masukkan URL Aplikasi Web Google Apps Script terlebih dahulu.");
        return;
      }

      statusEl.innerHTML = `<span style="color: var(--text-muted);">Sedang menguji koneksi ke Google Spreadsheet...</span>`;

      try {
        const res = await fetch(`${url}?action=ping`);
        const json = await res.json();
        if (json.success) {
          statusEl.innerHTML = `<span style="color: var(--success); font-weight: 700;">✅ Terhubung! Server Google Apps Script Aktif & Terhubung ke Spreadsheet.</span>`;
          AppState.appsScript.isConnected = true;
          updateSyncBadge(true);
        } else {
          statusEl.innerHTML = `<span style="color: var(--danger);">⚠️ Server merespons: ${json.error || 'Gagal'}</span>`;
        }
      } catch (err) {
        statusEl.innerHTML = `<span style="color: #D97706;">ℹ️ URL tersimpan. Pastikan pada Apps Script dipilih "Siapa saja (Anyone)" memiliki akses agar dapat disinkronkan.</span>`;
        AppState.appsScript.isConnected = true;
        updateSyncBadge(true);
      }
    });
  }
}

async function checkAppsScriptStatus() {
  if (!AppState.appsScript.url) {
    updateSyncBadge(false);
    return;
  }

  try {
    const res = await fetch(`${AppState.appsScript.url}?action=ping`);
    const json = await res.json();
    updateSyncBadge(json.success);
  } catch (e) {
    updateSyncBadge(AppState.appsScript.url.length > 25);
  }
}

function updateSyncBadge(isConnected) {
  const dot = document.getElementById('syncStatusDot');
  const text = document.getElementById('syncStatusText');
  if (dot && text) {
    if (isConnected) {
      dot.classList.add('connected');
      text.textContent = 'Google Sheets Aktif';
    } else {
      dot.classList.remove('connected');
      text.textContent = 'Mode Lokal';
    }
  }
}

// =========================================================================
// 12. PENGELOLAAN IDENTITAS SISWA & LOGIN GURU DI AWAL
// =========================================================================
function initStudentProfile() {
  const saved = localStorage.getItem('nusantara_siswa');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data && data.nama) {
        AppState.student = data;
        updateStudentNavBadge();
        return;
      }
    } catch (e) {
      console.warn("Gagal mem-parse data siswa tersimpan:", e);
    }
  }

  // Jika belum ada identitas siswa tersimpan dan bukan guru yang login, tampilkan modal gerbang masuk setelah 600ms
  setTimeout(() => {
    if (!AppState.admin.isLoggedIn) {
      openStudentIdentityModal(true);
    }
  }, 600);
}

function updateStudentNavBadge() {
  const badgeText = document.getElementById('navStudentNameText');
  const btn = document.getElementById('btnStudentProfile');
  if (!badgeText) return;

  if (AppState.admin.isLoggedIn) {
    badgeText.textContent = '👨‍🏫 Guru / Admin';
    if (btn) btn.title = 'Mode Guru Aktif (Akses Penuh Pengeditan)';
    return;
  }

  if (AppState.student && AppState.student.nama) {
    const shortName = AppState.student.nama.split(' ')[0];
    const kelasInfo = AppState.student.kelasLengkap || `${AppState.student.tingkat} ${AppState.student.jurusan}`.trim();
    badgeText.textContent = `${shortName} (${kelasInfo})`;
    if (btn) btn.title = `Profil: ${AppState.student.nama} • ${kelasInfo} (Klik untuk mengubah)`;
  } else {
    badgeText.textContent = 'Isi Identitas Siswa';
    if (btn) btn.title = 'Klik untuk melengkapi/mengubah identitas Anda';
  }
}

function openStudentIdentityModal(isMandatory = false) {
  const modal = document.getElementById('studentIdentityModal');
  const closeBtn = document.getElementById('btnCloseStudentModal');
  if (!modal) return;

  // Buka dalam tab siswa secara default
  switchIdentityRole('siswa');

  const nameInput = document.getElementById('inputStudentFullName');
  const levelSelect = document.getElementById('selectStudentLevel');
  const majorSelect = document.getElementById('selectStudentMajor');
  const rombelSelect = document.getElementById('selectStudentRombel');

  if (nameInput) nameInput.value = AppState.student.nama || '';
  if (levelSelect) levelSelect.value = AppState.student.tingkat || 'XI';
  if (majorSelect) majorSelect.value = AppState.student.jurusan || 'TPM';
  if (rombelSelect) rombelSelect.value = AppState.student.rombel || '1';

  if (closeBtn) {
    closeBtn.style.display = 'block';
  }

  modal.showModal();
}

function closeStudentModalSafe() {
  const modal = document.getElementById('studentIdentityModal');
  if (!modal) return;
  modal.close();
}

function switchIdentityRole(role) {
  const tabSiswa = document.getElementById('tabRoleSiswa');
  const tabGuru = document.getElementById('tabRoleGuru');
  const formSiswa = document.getElementById('studentIdentityForm');
  const formGuru = document.getElementById('guruIdentityLoginForm');
  const title = document.getElementById('studentIdentityTitle');
  const subtitle = document.getElementById('studentIdentitySubtitle');
  const iconBox = document.getElementById('studentIdentityIconBox');
  const errEl = document.getElementById('modalGuruErrorMsg');
  const pwInput = document.getElementById('inputModalGuruPassword');

  if (errEl) {
    errEl.style.display = 'none';
    errEl.textContent = '';
  }
  if (pwInput) pwInput.value = '';

  if (role === 'guru') {
    if (tabSiswa) {
      tabSiswa.classList.remove('active');
      tabSiswa.style.background = 'transparent';
      tabSiswa.style.color = 'var(--text-secondary)';
      tabSiswa.style.boxShadow = 'none';
    }
    if (tabGuru) {
      tabGuru.classList.add('active');
      tabGuru.style.background = 'white';
      tabGuru.style.color = 'var(--maroon)';
      tabGuru.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
    if (formSiswa) formSiswa.style.display = 'none';
    if (formGuru) formGuru.style.display = 'block';

    if (title) title.textContent = 'Login Khusus Guru';
    if (subtitle) subtitle.textContent = 'Akses Kelola Materi, Bank Soal, dan Rekap Nilai';
    if (iconBox) {
      iconBox.textContent = '🔐';
      iconBox.style.background = 'rgba(185, 28, 28, 0.25)';
      iconBox.style.borderColor = 'var(--maroon)';
      iconBox.style.color = '#FCA5A5';
    }

    setTimeout(() => {
      if (pwInput) pwInput.focus();
    }, 100);
  } else {
    // Mode Siswa
    if (tabGuru) {
      tabGuru.classList.remove('active');
      tabGuru.style.background = 'transparent';
      tabGuru.style.color = 'var(--text-secondary)';
      tabGuru.style.boxShadow = 'none';
    }
    if (tabSiswa) {
      tabSiswa.classList.add('active');
      tabSiswa.style.background = 'white';
      tabSiswa.style.color = 'var(--brown-deep)';
      tabSiswa.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
    if (formGuru) formGuru.style.display = 'none';
    if (formSiswa) formSiswa.style.display = 'block';

    if (title) title.textContent = 'Identitas Siswa';
    if (subtitle) subtitle.textContent = 'Media Pembelajaran Sejarah Nusantara Kelas XI';
    if (iconBox) {
      iconBox.textContent = 'ID';
      iconBox.style.background = 'rgba(212, 175, 55, 0.2)';
      iconBox.style.borderColor = 'var(--gold)';
      iconBox.style.color = 'var(--gold)';
    }

    const nameInput = document.getElementById('inputStudentFullName');
    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 100);
  }
}

function submitModalGuruLogin(event) {
  if (event) event.preventDefault();

  const pwInput = document.getElementById('inputModalGuruPassword');
  const errEl = document.getElementById('modalGuruErrorMsg');
  const modal = document.getElementById('studentIdentityModal');

  const enteredPw = pwInput ? pwInput.value.trim() : '';

  if (enteredPw === AppState.admin.password) {
    AppState.admin.isLoggedIn = true;
    sessionStorage.setItem('nusantara_admin_logged', 'true');
    applyAdminModeUI(true);

    if (modal) modal.close();
    SoundFX.fanfare();

    alert("🎉 Login Guru Berhasil!\n\nSelamat datang, Bapak/Ibu Guru. Mode Guru telah aktif, seluruh menu pengeditan materi, bank soal, dan sinkronisasi spreadsheet nilai telah terbuka.");

    if (AppState.admin.pendingView) {
      const nextView = AppState.admin.pendingView;
      AppState.admin.pendingView = null;
      navigateTo(nextView);
    }
  } else {
    if (errEl) {
      errEl.textContent = 'Sandi guru salah! Silakan coba lagi (Sandi resmi: 010901).';
      errEl.style.display = 'block';
    }
    SoundFX.wrong();
    if (pwInput) pwInput.focus();
  }
}

function saveStudentIdentity(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('inputStudentFullName');
  const levelSelect = document.getElementById('selectStudentLevel');
  const majorSelect = document.getElementById('selectStudentMajor');
  const rombelSelect = document.getElementById('selectStudentRombel');
  const modal = document.getElementById('studentIdentityModal');

  const nama = nameInput ? nameInput.value.trim() : '';
  const tingkat = levelSelect ? levelSelect.value.trim() : 'XI';
  const jurusan = majorSelect ? majorSelect.value.trim() : 'TPM';
  const rombel = rombelSelect ? rombelSelect.value.trim() : '1';

  if (!nama) {
    alert("Silakan masukkan nama lengkap Anda.");
    if (nameInput) nameInput.focus();
    return;
  }

  const kelasLengkap = `${tingkat} ${jurusan} ${rombel}`.trim();

  AppState.student = {
    nama,
    tingkat,
    jurusan,
    rombel,
    kelasLengkap
  };

  localStorage.setItem('nusantara_siswa', JSON.stringify(AppState.student));
  updateStudentNavBadge();

  // Sinkronkan ke formulir kirim nilai kuis
  const quizNameInput = document.getElementById('studentNameInput');
  const quizClassInput = document.getElementById('studentClassInput');
  if (quizNameInput) quizNameInput.value = nama;
  if (quizClassInput) quizClassInput.value = kelasLengkap;

  if (modal) modal.close();
  SoundFX.correct();
}

// =========================================================================
// 13. MODE GURU & KEAMANAN ADMINISTRATOR (PROTEKSI MENU)
// =========================================================================
function initAdminMode() {
  // Pastikan default sandi disesuaikan dengan 010901 jika belum diubah atau masih bawaan sebelumnya
  if (!localStorage.getItem('nusantara_admin_pw') || localStorage.getItem('nusantara_admin_pw') === 'guru123') {
    localStorage.setItem('nusantara_admin_pw', '010901');
    AppState.admin.password = '010901';
  }
  const isLogged = sessionStorage.getItem('nusantara_admin_logged') === 'true';
  AppState.admin.isLoggedIn = isLogged;
  applyAdminModeUI(isLogged);
}

function applyAdminModeUI(isLoggedIn) {
  const btn = document.getElementById('btnAdminMode');
  const lockIcon = document.getElementById('adminLockIcon');
  const btnText = document.getElementById('adminBtnText');

  if (isLoggedIn) {
    document.body.classList.add('is-admin');
    if (btn) btn.classList.add('logged-in');
    if (lockIcon) lockIcon.textContent = '👨‍🏫';
    if (btnText) btnText.textContent = 'Mode Guru (Keluar)';
  } else {
    document.body.classList.remove('is-admin');
    if (btn) btn.classList.remove('logged-in');
    if (lockIcon) lockIcon.textContent = '🔐';
    if (btnText) btnText.textContent = 'Mode Guru';
  }

  updateStudentNavBadge();
}

function handleAdminModeClick() {
  if (AppState.admin.isLoggedIn) {
    const confirmLogout = confirm("Apakah Anda ingin keluar dari Mode Guru dan kembali ke Mode Siswa?");
    if (confirmLogout) {
      AppState.admin.isLoggedIn = false;
      sessionStorage.removeItem('nusantara_admin_logged');
      applyAdminModeUI(false);

      // Jika sedang membuka halaman guru yang terkunci, alihkan ke beranda
      if (AppState.activeView === 'buat-materi' || AppState.activeView === 'edit-kuis') {
        navigateTo('beranda');
      }
    }
  } else {
    openAdminLoginModal();
  }
}

function openAdminLoginModal(targetView = null) {
  AppState.admin.pendingView = targetView;
  const modal = document.getElementById('adminLoginModal');
  const errEl = document.getElementById('adminLoginError');
  const pwInput = document.getElementById('inputAdminPassword');

  if (errEl) {
    errEl.style.display = 'none';
    errEl.textContent = '';
  }
  if (pwInput) pwInput.value = '';

  if (modal) modal.showModal();
}

function submitAdminLogin(event) {
  if (event) event.preventDefault();

  const pwInput = document.getElementById('inputAdminPassword');
  const errEl = document.getElementById('adminLoginError');
  const modal = document.getElementById('adminLoginModal');

  const enteredPw = pwInput ? pwInput.value.trim() : '';

  if (enteredPw === AppState.admin.password) {
    AppState.admin.isLoggedIn = true;
    sessionStorage.setItem('nusantara_admin_logged', 'true');
    applyAdminModeUI(true);

    if (modal) modal.close();
    SoundFX.fanfare();

    if (AppState.admin.pendingView) {
      const nextView = AppState.admin.pendingView;
      AppState.admin.pendingView = null;
      navigateTo(nextView);
    }
  } else {
    if (errEl) {
      errEl.textContent = 'Sandi salah! Silakan periksa kembali sandi guru Anda (Sandi resmi: 010901).';
      errEl.style.display = 'block';
    }
    SoundFX.wrong();
    if (pwInput) pwInput.focus();
  }
}

function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}



/**
 * =========================================================================
 * GOOGLE APPS SCRIPT BACKEND
 * MEDIA PEMBELAJARAN SEJARAH KELAS XI: PERLAWANAN PRIBUMI
 * =========================================================================
 * 
 * CARA MEMASANG / DEPLOY:
 * 1. Buka Google Spreadsheet baru di Google Drive (https://sheets.new).
 * 2. Beri nama Spreadsheet, misalnya: "Database Sejarah Kolonialisme".
 * 3. Klik menu: Ekstensi (Extensions) > Apps Script.
 * 4. Hapus semua kode bawaan di editor Apps Script, lalu salin dan tempel SELURUH KODE ini.
 * 5. Jalankan fungsi `setupDatabase()` satu kali untuk membuat lembar (sheets) dan header otomatis.
 * 6. Klik tombol biru "Terapkan" (Deploy) > "Penerapan Baru" (New Deployment).
 * 7. Pilih Jenis: "Aplikasi Web" (Web App).
 * 8. Konfigurasi:
 *    - Deskripsi: "API Database Sejarah Pribumi"
 *    - Jalankan sebagai: "Saya" (Me)
 *    - Yang memiliki akses: "Siapa saja" (Anyone) -> PENTING agar web siswa & guru bisa menyimpan/membaca data!
 * 9. Klik "Terapkan" (Deploy), lalu Salin "URL Aplikasi Web" (Web App URL).
 * 10. Buka Website Pembelajaran Sejarah, klik ikon "Awan / Sinkronisasi Google Sheets" di navbar,
 *     lalu tempelkan URL tersebut dan klik "Simpan & Uji Koneksi".
 */

// 1. FUNGSI SETUP OTOMATIS SPREADSHEET
function setupDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Sheet 1: Materi & Slide Custom
  let sheetMateri = ss.getSheetByName("Materi_Slides");
  if (!sheetMateri) {
    sheetMateri = ss.insertSheet("Materi_Slides");
    sheetMateri.appendRow(["ID", "Judul_Materi", "Tanggal_Dibuat", "Data_JSON_Slide"]);
    sheetMateri.getRange("A1:D1").setFontWeight("bold").setBackground("#D4AF37");
  }
  
  // Sheet 2: Soal Kuis Guru
  let sheetKuis = ss.getSheetByName("Soal_Kuis");
  if (!sheetKuis) {
    sheetKuis = ss.insertSheet("Soal_Kuis");
    sheetKuis.appendRow(["ID", "Soal", "Pilihan_A", "Pilihan_B", "Pilihan_C", "Pilihan_D", "Jawaban_Benar", "Penjelasan", "Gambar_URL", "Terakhir_Diubah"]);
    sheetKuis.getRange("A1:J1").setFontWeight("bold").setBackground("#801616").setFontColor("#FFFFFF");
  }
  
  // Sheet 3: Rekap Nilai Siswa
  let sheetNilai = ss.getSheetByName("Nilai_Siswa");
  if (!sheetNilai) {
    sheetNilai = ss.insertSheet("Nilai_Siswa");
    sheetNilai.appendRow(["Waktu", "Nama_Siswa", "Kelas", "Nilai_Akhir", "Jumlah_Benar", "Jumlah_Salah", "Total_Soal"]);
    sheetNilai.getRange("A1:G1").setFontWeight("bold").setBackground("#16243E").setFontColor("#FFFFFF");
  }

  // Hapus Sheet1 kosong bawaan Google Sheets agar pengguna langsung melihat data utama
  const defaultSheet = ss.getSheetByName("Sheet1") || ss.getSheetByName("Sheet 1");
  if (defaultSheet && defaultSheet.getLastRow() <= 1 && ss.getSheets().length > 1) {
    try {
      ss.deleteSheet(defaultSheet);
    } catch (e) {}
  }

  // Set lembar Nilai_Siswa sebagai lembar aktif di depan
  if (sheetNilai) {
    try {
      ss.setActiveSheet(sheetNilai);
    } catch (e) {}
  }
  
  return "Database berhasil disiapkan dengan 3 sheets: Materi_Slides, Soal_Kuis, dan Nilai_Siswa.";
}

// 2. MENERIMA REQUEST GET (MEMBACA DATA)
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "ping";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let result = {};

  try {
    if (action === "ping") {
      result = {
        success: true,
        message: "Server Google Apps Script Aktif & Terhubung ke Spreadsheet!",
        timestamp: new Date().toISOString()
      };
    } 
    else if (action === "getMateri") {
      const sheet = ss.getSheetByName("Materi_Slides");
      if (!sheet) {
        result = { success: true, data: [] };
      } else {
        const rows = sheet.getDataRange().getValues();
        const data = [];
        for (let i = 1; i < rows.length; i++) {
          if (rows[i][0]) {
            let slides = [];
            try {
              slides = JSON.parse(rows[i][3]);
            } catch (err) {
              slides = [];
            }
            data.push({
              id: rows[i][0],
              title: rows[i][1],
              date: rows[i][2],
              slides: slides
            });
          }
        }
        result = { success: true, data: data };
      }
    } 
    else if (action === "getKuis") {
      const sheet = ss.getSheetByName("Soal_Kuis");
      if (!sheet || sheet.getLastRow() <= 1) {
        result = { success: true, data: [] };
      } else {
        const rows = sheet.getDataRange().getValues();
        const data = [];
        for (let i = 1; i < rows.length; i++) {
          if (rows[i][1]) {
            data.push({
              id: rows[i][0] || i,
              soal: rows[i][1],
              pilihan: [rows[i][2], rows[i][3], rows[i][4], rows[i][5]],
              jawabanBenar: parseInt(rows[i][6]) || 0,
              penjelasan: rows[i][7] || "",
              gambar: rows[i][8] || ""
            });
          }
        }
        result = { success: true, data: data };
      }
    } 
    else if (action === "getScores") {
      const sheet = ss.getSheetByName("Nilai_Siswa");
      if (!sheet) {
        result = { success: true, data: [] };
      } else {
        const rows = sheet.getDataRange().getValues();
        const data = [];
        for (let i = 1; i < rows.length; i++) {
          if (rows[i][0]) {
            data.push({
              waktu: rows[i][0],
              nama: rows[i][1],
              kelas: rows[i][2],
              nilai: rows[i][3],
              benar: rows[i][4],
              salah: rows[i][5],
              total: rows[i][6]
            });
          }
        }
        result = { success: true, data: data };
      }
    } 
    else {
      result = { success: false, message: "Aksi tidak dikenali: " + action };
    }
  } catch (error) {
    result = { success: false, error: error.toString() };
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// 3. MENERIMA REQUEST POST (MENYIMPAN DATA)
function doPost(e) {
  let result = {};
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  try {
    let payload = {};
    if (e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      payload = e.parameter;
    }

    const action = payload.action;

    // SIMPAN MATERI & SLIDE
    if (action === "saveMateri") {
      let sheet = ss.getSheetByName("Materi_Slides");
      if (!sheet) {
        setupDatabase();
        sheet = ss.getSheetByName("Materi_Slides");
      }
      
      const id = payload.id || "materi-" + new Date().getTime();
      const title = payload.title || "Materi Tanpa Judul";
      const dateStr = new Date().toLocaleString("id-ID");
      const slidesJson = JSON.stringify(payload.slides || []);

      // Cek apakah ID sudah ada, jika ada update baris
      const rows = sheet.getDataRange().getValues();
      let rowIndex = -1;
      for (let i = 1; i < rows.length; i++) {
        if (rows[i][0] == id) {
          rowIndex = i + 1;
          break;
        }
      }

      if (rowIndex > 0) {
        sheet.getRange(rowIndex, 1, 1, 4).setValues([[id, title, dateStr, slidesJson]]);
      } else {
        sheet.appendRow([id, title, dateStr, slidesJson]);
      }

      result = { success: true, message: "Materi berhasil disimpan ke Google Sheets!", id: id };
    }

    // SIMPAN KUMPULAN SOAL KUIS GURU
    else if (action === "saveKuis") {
      let sheet = ss.getSheetByName("Soal_Kuis");
      if (!sheet) {
        setupDatabase();
        sheet = ss.getSheetByName("Soal_Kuis");
      }

      // Hapus data soal lama (kecuali header) untuk refresh seluruh bank soal
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        sheet.deleteRows(2, lastRow - 1);
      }

      const questions = payload.questions || [];
      const dateStr = new Date().toLocaleString("id-ID");

      questions.forEach((q, idx) => {
        sheet.appendRow([
          q.id || (idx + 1),
          q.soal || "",
          (q.pilihan && q.pilihan[0]) ? q.pilihan[0] : "",
          (q.pilihan && q.pilihan[1]) ? q.pilihan[1] : "",
          (q.pilihan && q.pilihan[2]) ? q.pilihan[2] : "",
          (q.pilihan && q.pilihan[3]) ? q.pilihan[3] : "",
          q.jawabanBenar !== undefined ? q.jawabanBenar : 0,
          q.penjelasan || "",
          q.gambar || "",
          dateStr
        ]);
      });

      result = { success: true, message: "Bank Soal Kuis berhasil disimpan ke Google Sheets!", total: questions.length };
    }

    // SIMPAN HASIL KUIS SISWA
    else if (action === "submitScore") {
      let sheet = ss.getSheetByName("Nilai_Siswa");
      if (!sheet) {
        setupDatabase();
        sheet = ss.getSheetByName("Nilai_Siswa");
      }

      const waktu = new Date().toLocaleString("id-ID");
      const nama = payload.nama || "Siswa Belajar";
      const kelas = payload.kelas || "XI";
      const nilai = payload.nilai || 0;
      const benar = payload.benar || 0;
      const salah = payload.salah || 0;
      const total = payload.total || 10;

      sheet.appendRow([waktu, nama, kelas, nilai, benar, salah, total]);

      result = { success: true, message: "Hasil kuis siswa berhasil dicatat di Google Sheets!" };
    }

    else {
      result = { success: false, message: "Aksi POST tidak valid: " + action };
    }

  } catch (error) {
    result = { success: false, error: error.toString() };
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * DATA SEJARAH PERLAWANAN PRIBUMI TERHADAP KOLONIALISME
 * Media Pembelajaran Sejarah Siswa SMA/SMK Kelas XI
 * Kurikulum Merdeka / K13
 */

const HISTORICAL_DATA = {
  // 1. DATA MATERI PEMBELAJARAN
  materi: [
    // ==========================================
    // A. PERLAWANAN TERHADAP PORTUGIS
    // ==========================================
    {
      id: "ternate-portugis",
      title: "Perlawanan Kesultanan Ternate",
      period: "1570 – 1575 M",
      era: "portugis",
      eraLabel: "Perlawanan terhadap Portugis",
      region: "Maluku (Kepulauan Maluku Utara)",
      heroName: "Sultan Baabullah",
      heroTitle: "Penguasa 72 Pulau (Sultan Ternate)",
      heroImage: "assets/portrait_pattimura.jpg", // Fallback / hero portrait
      bannerImage: "assets/perlawanan_portugis.jpg",
      quote: "Portugis datang membawa salib dan janji dagang, namun membalas persahabatan kami dengan pengkhianatan dan pembunuhan.",
      summary: "Perlawanan heroik rakyat Ternate dan Maluku di bawah komando Sultan Baabullah untuk mengusir penjajah Portugis yang memonopoli rempah-rempah dan membunuh Sultan Khairun secara licik.",
      sections: {
        latarBelakang: [
          "Kedatangan Portugis pertama kali di Maluku pada tahun 1512 di bawah pimpinan Fransisco Serrao disambut hangat oleh Kesultanan Ternate untuk bersekutu melawan Tidore.",
          "Portugis mulai memaksakan monopoli perdagangan cengkeh dan pala dengan harga yang merugikan rakyat pribumi secara drastis.",
          "Portugis ikut campur dalam urusan politik internal istana Kesultanan Ternate dan melakukan penyebaran agama secara paksa yang memicu ketegangan budaya.",
          "Puncaknya, pada tahun 1570, Gubernur Portugis Lopez de Mesquita membunuh Sultan Khairun (ayah Sultan Baabullah) secara licik di dalam Benteng Santo Paulo saat menghadiri undangan perundingan damai."
        ],
        tokoh: [
          {
            name: "Sultan Baabullah",
            role: "Pemimpin Utama Perlawanan",
            bio: "Putra Sultan Khairun yang bersumpah mengusir Portugis dari seluruh tanah Maluku. Dijuluki 'Penguasa 72 Pulau' karena berhasil menyatukan kerajaan-kerajaan Maluku hingga Papua."
          },
          {
            name: "Sultan Khairun",
            role: "Sultan Ternate ke-23",
            bio: "Ayahanda Baabullah yang berjuang gigih menegakkan kedaulatan Ternate sebelum dibunuh secara khianat oleh Portugis di Benteng Santo Paulo."
          },
          {
            name: "Lopez de Mesquita",
            role: "Gubernur Portugis di Ternate",
            bio: "Pemimpin militer Portugis yang mendalangi pembunuhan licik Sultan Khairun hingga memicu perang semesta rakyat Maluku."
          }
        ],
        jalannyaPerlawanan: [
          "1570: Menyusul gugurnya Sultan Khairun, Sultan Baabullah dinobatkan dan langsung mengobarkan 'Perang Jihad Semesta' untuk mengusir Portugis.",
          "1571 – 1574: Pasukan Ternate mengepung rapat Benteng Santo Paulo (Benteng Gamlamo) selama 5 tahun berturut-turut, memutus pasokan makanan, air, dan bantuan laut.",
          "Sultan Baabullah mengerahkan ratusan armada perahu perang kora-kora untuk berpatroli ketat di perairan Maluku, memburu kapal-kapal suplai Portugis dari Malaka.",
          "Desember 1575: Pasukan Portugis di dalam benteng kelaparan dan kehabisan amunisi, akhirnya menyerah tanpa syarat tanpa perlu ada pertumpahan darah di dalam benteng."
        ],
        strategi: [
          "Strategi Blokade Total: Memutus jalur logistik makanan dan air benteng lawan dari darat maupun laut melalui patroli kora-kora.",
          "Diplomasi Persatuan Nusantara: Membentuk aliansi kuat antarkerajaan (Ternate, Tidore, Bacan, Jailolo, hingga Buton dan kepulauan sekitar).",
          "Kemanusiaan Beradab: Mengizinkan orang Portugis yang menyerah untuk pergi meninggalkan Ternate dengan selamat ke Malaka atau Ambon."
        ],
        akhirPerlawanan: [
          "Pada 28 Desember 1575, bendera Portugis diturunkan dan garnisun Portugis terusir sepenuhnya dari pulau Ternate.",
          "Sisa kekuatan Portugis yang terusir menyingkir ke Ambon dan kemudian pindah ke Timor Timur (Timor Leste)."
        ],
        dampak: [
          "Kesultanan Ternate mencapai puncak kejayaan keemasan di bawah Sultan Baabullah yang menguasai wilayah membentang hingga Filipina Selatan dan Papua Barat.",
          "Monopoli rempah-rempah Portugis di Maluku Utara runtuh sepenuhnya.",
          "Menjadi bukti sejarah bahwa persatuan kerajaan pribumi mampu menaklukkan kekuatan bangsa Eropa bersenjata modern."
        ]
      }
    },
    {
      id: "demak-portugis",
      title: "Perlawanan Kesultanan Demak",
      period: "1512 – 1527 M",
      era: "portugis",
      eraLabel: "Perlawanan terhadap Portugis",
      region: "Selat Malaka & Sunda Kelapa (Jawa)",
      heroName: "Pati Unus & Fatahillah",
      heroTitle: "Pangeran Sabrang Lor & Panglima Fatahillah",
      heroImage: "assets/portrait_diponegoro.jpg",
      bannerImage: "assets/perlawanan_portugis.jpg",
      quote: "Selat Malaka adalah pintu gerbang Nusantara. Sekali bangsa asing menguasainya, kedaulatan seluruh pulau terancam!",
      summary: "Ekspedisi laut maritim raksasa Kesultanan Demak menyerang kedudukan Portugis di Malaka, disusul keberhasilan gemilang Fatahillah merebut Sunda Kelapa dan mengubah namanya menjadi Jayakarta.",
      sections: {
        latarBelakang: [
          "Jatuhnya pelabuhan strategis Malaka ke tangan armada Portugis di bawah Alfonso de Albuquerque pada tahun 1511.",
          "Dampak jatuhnya Malaka merusak jaringan perdagangan internasional para saudagar Islam dan kerajaan-kerajaan maritim di Nusantara, termasuk Demak.",
          "Kekhawatiran Demak bahwa Portugis akan berekspansi ke Pulau Jawa, terbukti dengan adanya perjanjian persekutuan dagang antara Portugis dan Kerajaan Pajajaran di Sunda Kelapa (1522)."
        ],
        tokoh: [
          {
            name: "Raden Patah",
            role: "Sultan Demak Pertama",
            bio: "Pendiri Kesultanan Demak yang merestui dan mempersiapkan armada perang laut untuk merebut Malaka."
          },
          {
            name: "Pati Unus (Pangeran Sabrang Lor)",
            role: "Panglima Laut & Putra Mahkota",
            bio: "Pemimpin ekspedisi laut legendaris ke Selat Malaka. Julukan 'Sabrang Lor' didapat karena keberaniannya menyeberang lautan ke utara (Malaka)."
          },
          {
            name: "Fatahillah (Faletehan)",
            role: "Panglima Perang Demak & Cirebon",
            bio: "Ulama dan ahli strategi militer asal Pasai yang memimpin pasukan gabungan Demak-Cirebon membebaskan Sunda Kelapa dari ancaman Portugis."
          }
        ],
        jalannyaPerlawanan: [
          "1512 – 1513: Ekspedisi I dipimpin Pati Unus membawa 100 kapal dan sekitar 12.000 prajurit menyerbu Malaka. Meriam Portugis dari benteng A Famosa memukul mundur sebagian armada.",
          "1521: Ekspedisi II dilancarkan kembali oleh Pati Unus dengan kekuatan 375 kapal perang. Terjadi pertempuran laut dahsyat; Pati Unus gugur syahid di atas kapalnya.",
          "1526 – 1527: Portugis mengirim armada di bawah Francisco de Sa untuk membangun benteng di Sunda Kelapa.",
          "22 Juni 1527: Pasukan gabungan Demak dan Cirebon dipimpin Fatahillah berhasil menggagalkan pendaratan Portugis dan merebut pelabuhan Sunda Kelapa secara mutlak."
        ],
        strategi: [
          "Membangun armada jung kapal perang raksasa berbobot ratusan ton dari galangan kapal Semarang dan Jepara.",
          "Menjalin aliansi segitiga Demak, Cirebon, dan Banten untuk mengamankan seluruh pesisir utara Pulau Jawa.",
          "Pencegahan dini (preemptive strike) sebelum Portugis sempat mendirikan benteng permanen di Jawa Barat."
        ],
        akhirPerlawanan: [
          "Meskipun gagal merebut kembali Malaka, Demak sukses mutlak menghentikan ekspansi dan hegemoni Portugis di Pulau Jawa.",
          "Sunda Kelapa dibersihkan dari Portugis dan diganti namanya menjadi 'Jayakarta' (Kemenangan yang Sempurna) pada 22 Juni 1527."
        ],
        dampak: [
          "Kawasan Selat Sunda dan Laut Jawa tetap aman di bawah kendali kesultanan-kesultanan Islam Nusantara.",
          "Lahirnya kota Jayakarta (kini Jakarta) yang diperingati setiap tanggal 22 Juni sebagai hari lahir ibukota.",
          "Portugis terisolasi hanya di Malaka dan kepulauan timur Nusantara."
        ]
      }
    },
    {
      id: "aceh-portugis",
      title: "Perlawanan Kesultanan Aceh",
      period: "1520 – 1629 M",
      era: "portugis",
      eraLabel: "Perlawanan terhadap Portugis",
      region: "Aceh & Selat Malaka",
      heroName: "Sultan Iskandar Muda",
      heroTitle: "Sultan Mahkota Alam Kesultanan Aceh",
      heroImage: "assets/portrait_cutnyakdhien.jpg",
      bannerImage: "assets/perlawanan_portugis.jpg",
      quote: "Haram hukumnya bagi kapal kafir imperialis menguasai Selat Malaka yang menjadi nadi kehormatan umat Nusantara!",
      summary: "Perlawanan gigih Kesultanan Aceh Darussalam selama lebih dari satu abad melawan Portugis, mencapai puncak kekuatan maritim di era Sultan Iskandar Muda dengan armada kapal cakra donya.",
      sections: {
        latarBelakang: [
          "Jatuhnya Malaka (1511) menyebabkan para pedagang muslim mengalihkan rute pelayarannya ke pelabuhan Aceh Darussalam.",
          "Aceh berkembang pesat menjadi pusat perdagangan lada dan pusat penyebaran agama Islam yang menyaingi Malaka.",
          "Portugis melihat kemajuan Aceh sebagai ancaman militer dan ekonomi yang harus dihancurkan.",
          "Kapal-kapal dagang Aceh kerap diserang dan dibajak oleh kapal perang Portugis di Selat Malaka."
        ],
        tokoh: [
          {
            name: "Sultan Ali Mughayat Syah",
            role: "Pendiri Kesultanan Aceh",
            bio: "Berhasil membebaskan wilayah Daya, Pedir, dan Pasai dari cengkeraman pengaruh awal Portugis (1520-an)."
          },
          {
            name: "Sultan Alauddin Riayat Syah al-Kahar",
            role: "Diplomat Maritim Ulung",
            bio: "Mengirim utusan ke Kesultanan Utsmaniyah (Turki Ottoman) di Konstantinopel untuk meminta bantuan militer, ahli meriam, dan artileri."
          },
          {
            name: "Sultan Iskandar Muda",
            role: "Sultan Terbesar Aceh (1607–1636)",
            bio: "Membangun armada laut terkuat di Asia Tenggara, menaklukkan benteng-benteng sekutu Portugis, dan melancarkan pengepungan legendaris ke Malaka."
          }
        ],
        jalannyaPerlawanan: [
          "1537, 1547, 1568: Aceh melancarkan gelombang serangan langsung ke benteng Portugis di Malaka namun benteng tersebut sangat kuat.",
          "1567: Datang bantuan persenjataan meriam dan ratusan instruktur militer dari Kesultanan Turki Utsmani memperkuat artileri Aceh.",
          "1629: Sultan Iskandar Muda mengirim armada ekspedisi laut terbesar dalam sejarah Nusantara, beranggotakan ratusan kapal perang termasuk kapal induk raksasa 'Espanto del Mundo' (Cakra Donya).",
          "Pertempuran laut sengit berbulan-bulan di perairan Malaka membuat garnisun Portugis terdesak hebat hingga titik nadir."
        ],
        strategi: [
          "Membeli senjata dan mendatangkan ahli meriam dari Turki Utsmani, Calicut (India), dan Jepara.",
          "Menempatkan armada pengawal bersenjata lengkap pada kapal dagang lada Aceh.",
          "Memblokade rute pasokan logistik bahan makanan dari pulau Jawa dan pesisir Sumatera menuju Malaka."
        ],
        akhirPerlawanan: [
          "Meskipun serangan tahun 1629 tidak berhasil meruntuhkan total benteng Malaka akibat datangnya bantuan armada sekutu Portugis dari Johor, pertahanan Portugis di Malaka melemah permanen.",
          "Kelemahan Portugis akibat gempuran Aceh membuka jalan bagi VOC Belanda untuk merebut Malaka pada 1641."
        ],
        dampak: [
          "Aceh berhasil mempertahankan kedaulatan mutlaknya dan memperluas pengaruh di pesisir barat dan timur Sumatera serta Semenanjung Malaya.",
          "Portugis tidak pernah mampu menjajah atau menaklukkan tanah Aceh sedikit pun."
        ]
      }
    },

    // ==========================================
    // B. PERLAWANAN TERHADAP VOC (VEREENIGDE OOSTINDISCHE COMPAGNIE)
    // ==========================================
    {
      id: "mataram-voc",
      title: "Perlawanan Kesultanan Mataram",
      period: "1628 – 1629 M",
      era: "voc",
      eraLabel: "Perlawanan terhadap VOC",
      region: "Batavia (Jakarta) & Jawa Tengah",
      heroName: "Sultan Agung Hanyokrokusumo",
      heroTitle: "Raja Terbesar Mataram Islam",
      heroImage: "assets/portrait_hasanuddin.jpg",
      bannerImage: "assets/perlawanan_voc.jpg",
      quote: "Pulau Jawa adalah satu kesatuan tanah air leluhur. Kehadiran kongsi dagang Kompeni di Batavia adalah racun yang mengancam persatuan Nusantara.",
      summary: "Dua kali ekspedisi militer akbar Kesultanan Mataram di bawah pimpinan Sultan Agung mengepung markas besar VOC di Batavia untuk mewujudkan cita-cita penyatuan Pulau Jawa.",
      sections: {
        latarBelakang: [
          "Cita-cita Sultan Agung untuk menyatukan seluruh tanah Jawa di bawah naungan Kesultanan Mataram Islam.",
          "VOC di bawah Gubernur Jenderal Jan Pieterszoon Coen mendirikan benteng Batavia (1619) dan bertindak sewenang-wenang membajak kapal dagang Mataram.",
          "VOC menolak mengakui kedaulatan Mataram dan mengabaikan izin dagang yang ditetapkan kesultanan.",
          "Keberadaan markas VOC di Batavia dianggap sebagai penghalang utama bagi kemakmuran dan hegemoni maritim Mataram."
        ],
        tokoh: [
          {
            name: "Sultan Agung Hanyokrokusumo",
            role: "Raja Kesultanan Mataram (1613–1645)",
            bio: "Pemimpin visioner, budayawan pencipta penanggalan Jawa-Hijriyah, sekaligus jenderal perang pemberani yang memusuhi VOC tanpa kompromi."
          },
          {
            name: "Tumenggung Baurekso",
            role: "Panglima Pasukan Pertama",
            bio: "Bupati Kendal yang memimpin serbuan gelombang pertama prajurit Mataram ke Batavia pada tahun 1628."
          },
          {
            name: "Jan Pieterszoon Coen",
            role: "Gubernur Jenderal VOC",
            bio: "Pemimpin kolonial VOC yang mempertahankan Batavia dari kepungan Mataram. Meninggal mendadak saat pengepungan kedua (1629)."
          }
        ],
        jalannyaPerlawanan: [
          "Agustus 1628: Pasukan Mataram (10.000 prajurit) dipimpin Tumenggung Baurekso tiba di Batavia dan mengepung benteng VOC dari darat dan laut.",
          "Pertempuran berlangsung sengit di Sungai Ciliwung. Pasukan Mataram berusaha membendung sungai untuk memutus sumber air bersih benteng VOC.",
          "Mei 1629: Sultan Agung melancarkan serangan kedua dengan 14.000 prajurit dipimpin Dipati Ukur dan Pangeran Juminah, dilengkapi lumbung-lumbung padi di Karawang dan Cirebon.",
          "Mata-mata VOC berhasil menemukan dan membakar lumbung-lumbung logistik padi Mataram, menyebabkan pasukan Mataram mengalami kelaparan dan wabah penyakit pes."
        ],
        strategi: [
          "Membangun benteng tanah dan parit pengepungan mengelilingi Batavia.",
          "Membangun jaringan lumbung perbekalan beras di Karawang, Tegal, dan Cirebon untuk menjaga pasokan jarak jauh.",
          "Membendung dan mencemari aliran Sungai Ciliwung yang menyebabkan krisis sanitasi di kubu Batavia hingga menewaskan J.P. Coen."
        ],
        akhirPerlawanan: [
          "Kedua serangan belum berhasil merebut Batavia karena faktor jarak tempuh ribuan kilometer, kekurangan pangan akibat dibakarnya lumbung, dan persenjataan meriam benteng VOC yang unggul.",
          "Pasukan Mataram ditarik mundur kembali ke pedalaman Jawa."
        ],
        dampak: [
          "VOC menyadari bahwa Mataram adalah kekuatan militer darat terkuat di Nusantara yang tidak boleh diremehkan.",
          "Kematian J.P. Coen memberikan pukulan psikologis besar bagi pihak Kompeni.",
          "Banyak prajurit Mataram yang tidak kembali lalu menetap di kawasan Jawa Barat (Karawang, Priangan, Bekasi), memperkaya percampuran budaya dan teknik bercocok tanam."
        ]
      }
    },
    {
      id: "hasanuddin-voc",
      title: "Perlawanan Sultan Hasanuddin (Perang Makassar)",
      period: "1666 – 1669 M",
      era: "voc",
      eraLabel: "Perlawanan terhadap VOC",
      region: "Makassar & Laut Flores (Sulawesi Selatan)",
      heroName: "Sultan Hasanuddin",
      heroTitle: "Ayam Jantan dari Timur (I Mallombasi Daeng Mattawang)",
      heroImage: "assets/portrait_hasanuddin.jpg",
      bannerImage: "assets/perlawanan_voc.jpg",
      quote: "Bumi dan lautan diciptakan Tuhan untuk dinikmati bersama oleh seluruh umat manusia, bukan untuk dimonopoli oleh segelintir kompeni asing!",
      summary: "Perang laut dan darat terdahsyat di Indonesia Timur antara Kerajaan Gowa-Tallo melawan VOC yang bersekutu dengan Aru Palaka, memuncak pada pertahanan legendaris Benteng Somba Opu.",
      sections: {
        latarBelakang: [
          "Pelabuhan Somba Opu milik Gowa menerapkan kebijakan 'Laut Bebas' (Mare Liberum) yang mengizinkan seluruh bangsa berdagang tanpa monopoli.",
          "VOC berambisi memonopoli jalur perdagangan rempah-rempah dari Maluku yang melewati perairan Makassar.",
          "Penolakan keras Sultan Hasanuddin terhadap tuntutan VOC agar kapal-kapal Makassar dilarang berlayar ke Maluku.",
          "VOC menjalankan politik adu domba (Devide et Impera) dengan memanfaatkan perselisihan antara Gowa dan Kerajaan Bone yang dipimpin Aru Palaka."
        ],
        tokoh: [
          {
            name: "Sultan Hasanuddin",
            role: "Raja Gowa ke-16",
            bio: "Pemimpin karismatik yang berani dan pantang menyerah. Julukan 'De Haantjes van het Oosten' (Ayam Jantan dari Timur) diberikan langsung oleh Belanda karena keberaniannya."
          },
          {
            name: "Cornelis Speelman",
            role: "Laksamana Armada VOC",
            bio: "Komandan ekspedisi militer Belanda yang memimpin puluhan kapal perang bersenjata meriam berat menggempur Makassar."
          },
          {
            name: "Aru Palaka",
            role: "Pangeran Kerajaan Bone",
            bio: "Tokoh Bugis yang bersekutu dengan VOC untuk membebaskan rakyat Bone dari dominasi Kerajaan Gowa."
          }
        ],
        jalannyaPerlawanan: [
          "1666: Speelman bersama 21 kapal perang dan ribuan tentara gabungan menyerang pelabuhan Makassar.",
          "Terjadi pertempuran laut sengit di perairan Buton dan pesisir Makassar. Pasukan Hasanuddin bertahan mati-matian.",
          "1667: Terdesak oleh kepungan darat dan laut, Sultan Hasanuddin dipaksa menandatangani perjanjian damai bersyarat, yaitu 'Perjanjian Bongaya' (18 November 1667).",
          "1668 – 1669: Merasa isi perjanjian sangat merugikan martabat rakyat, Hasanuddin kembali mengobarkan pertempuran. Benteng Somba Opu digempur ribuan peluru meriam selama berbulan-bulan hingga akhirnya runtuh."
        ],
        strategi: [
          "Membangun jaringan benteng pertahanan batu kokoh di sepanjang pesisir (Benteng Somba Opu, Ujung Pandang, Panakkukang).",
          "Pengerahan perahu perang gesit dan taktik perang gerilya di labirin kepulauan spermonde.",
          "Menjaga prinsip hukum maritim internasional bahwa laut adalah milik bersama seluruh umat."
        ],
        akhirPerlawanan: [
          "Benteng Somba Opu jatuh ke tangan VOC pada 24 Juni 1669 setelah pertahanan terakhir diruntuhkan dengan ledakan mesiu.",
          "Sultan Hasanuddin meletakkan takhta demi menolak tunduk kepada penjajah, dan wafat pada 12 Juni 1670."
        ],
        dampak: [
          "Monopoli dagang VOC mencengkeram kuat seluruh Indonesia bagian timur.",
          "Benteng Ujung Pandang direbut dan diubah namanya menjadi 'Fort Rotterdam'.",
          "Banyak pelaut dan pejuang Bugis-Makassar yang mengembara ke Jawa, Sumatera, dan Riau (seperti Karaeng Galesong) melanjutkan perlawanan membantu Trunajaya."
        ]
      }
    },

    // ==========================================
    // C. PERLAWANAN TERHADAP PEMERINTAH HINDIA BELANDA
    // ==========================================
    {
      id: "pattimura-maluku",
      title: "Perlawanan Pattimura di Maluku",
      period: "1817 M",
      era: "belanda",
      eraLabel: "Perlawanan terhadap Pemerintah Hindia Belanda",
      region: "Pulau Saparua & Ambon (Maluku)",
      heroName: "Kapitan Pattimura",
      heroTitle: "Thomas Matulessy & Christina Martha Tiahahu",
      heroImage: "assets/portrait_pattimura.jpg",
      bannerImage: "assets/perlawanan_belanda.jpg",
      quote: "Pattimura-Pattimura tua boleh dihancurkan, tetapi kelak akan bangkit Pattimura-Pattimura muda yang meneruskan perjuangan!",
      summary: "Pemberontakan serentak rakyat Maluku merebut Benteng Duurstede dan menewaskan Residen Van den Berg, menentang kembalinya penindasan kerja paksa dan penyerahan wajib Hindia Belanda.",
      sections: {
        latarBelakang: [
          "Peralihan kekuasaan dari Inggris kembali ke tangan Belanda berdasarkan Konvensi London 1814.",
          "Pemerintah kolonial Hindia Belanda memberlakukan kembali sistem tanam paksa, kerja rodi (kerja rodi), dan penyerahan wajib rempah-rempah yang sangat menindas.",
          "Rakyat dipaksa menyediakan perahu orambai dan uang kertas diganti secara curang oleh Belanda.",
          "Pemecatan dan tidak dibayarnya para pemuda Maluku yang sebelumnya menjadi serdadu militer Inggris."
        ],
        tokoh: [
          {
            name: "Thomas Matulessy (Kapitan Pattimura)",
            role: "Panglima Tertinggi Perlawanan",
            bio: "Mantan sersan militer Inggris berjiwa ksatria yang diangkat oleh para tetua adat dan kapitan di Saparua untuk memimpin perang melawan Belanda."
          },
          {
            name: "Christina Martha Tiahahu",
            role: "Srikandi Pejuang Maluku",
            bio: "Gadis remaja berusia 17 tahun putri Kapitan Paulus Tiahahu yang ikut terjun langsung ke medan tempur mengangkat parang dan tombak."
          },
          {
            name: "Anthonie Rhebok & Philip Latumahina",
            role: "Perwira Pembantu Pattimura",
            bio: "Sahabat setia Pattimura yang memimpin sektor pertahanan darat dan laut Saparua."
          }
        ],
        jalannyaPerlawanan: [
          "14 Mei 1817: Rapat rahasia para pemuka rakyat Maluku di Hutan Tiouw merencanakan penyerbuan pos Belanda.",
          "15 – 16 Mei 1817: Pasukan Pattimura menyerbu Benteng Duurstede di Saparua. Seluruh garnisun Belanda dihancurkan dan Residen Van den Berg tewas.",
          "Belanda mengirim pasukan bala bantuan pimpinan Mayor Beetjes (300 prajurit). Pasukan ini disergap Pattimura di pantai Saparua dan dihancurkan.",
          "Belanda kemudian mendatangkan armada kapal perang besar dari Batavia dengan taktik bumi hangus dan sayembara hadiah 1.000 gulden untuk menangkap Pattimura."
        ],
        strategi: [
          "Penyergapan amfibi kilat saat fajar di pantai dan perbukitan.",
          "Koordinasi lintas pulau antara Saparua, Haruku, Nusalaut, Seram, dan Hitu.",
          "Pemanfaatan kondisi bentang alam pulau tropis yang berbukit dan berhutan lebat."
        ],
        akhirPerlawanan: [
          "Karena dikhianati oleh Raja Booi yang membocorkan tempat persembunyiannya, Pattimura tertangkap pada November 1817 di Siri Sori.",
          "Pada 16 Desember 1817, Kapitan Pattimura bersama Philip Latumahina dan Anthonie Rhebok gugur di tiang gantungan di Benteng Victoria Ambon.",
          "Christina Martha Tiahahu wafat di atas kapal Evertsen saat akan dibuang ke Jawa dan jasadnya dilarung di Laut Banda."
        ],
        dampak: [
          "Mengobarkan api nasionalisme dan semangat juang yang abadi bagi seluruh generasi penerus Maluku dan Indonesia.",
          "Membuktikan bahwa rakyat pulau-pulau kecil memiliki keteguhan moral dan keberanian menantang kekuatan militer kolonial."
        ]
      }
    },
    {
      id: "diponegoro-jawa",
      title: "Perang Diponegoro (Perang Jawa)",
      period: "1825 – 1830 M",
      era: "belanda",
      eraLabel: "Perlawanan terhadap Pemerintah Hindia Belanda",
      region: "Jawa Tengah & D.I. Yogyakarta",
      heroName: "Pangeran Diponegoro",
      heroTitle: "Bendara Pangeran Harya Dipanegara",
      heroImage: "assets/portrait_diponegoro.jpg",
      bannerImage: "assets/perlawanan_belanda.jpg",
      quote: "Perang ini bukan sekadar urusan tanah atau takhta, melainkan perang suci (Jihad) menegakkan martabat budi pekerti luhur dan mengusir kedurhakaan penjajah!",
      summary: "Perang terbesar yang pernah dihadapi pemerintah kolonial Belanda di Pulau Jawa, menguras kas kerajaan Belanda hingga bangkrut dan menelan 200.000 korban jiwa rakyat Jawa.",
      sections: {
        latarBelakang: [
          "Campur tangan kolonial Belanda yang semakin merusak tatanan adat dan tata krama keraton Kesultanan Yogyakarta.",
          "Penderitaan rakyat akibat beban pajak yang amat banyak (pajak jalan, pintu gerbang, ternak, hingga tanah).",
          "Kekecewaan kaum bangsawan karena Belanda melarang penyewaan tanah partikelir oleh bangsawan kepada swasta.",
          "Pemicu langsung: Residen Belanda Smissaert dan Patih Danureja memasang patok-patok pembangunan jalan di atas tanah makam leluhur Pangeran Diponegoro di Tegalrejo tanpa izin."
        ],
        tokoh: [
          {
            name: "Pangeran Diponegoro",
            role: "Pemimpin Spiritual & Panglima Tertinggi",
            bio: "Putra sulung Sultan Hamengkubuwana III yang hidup dekat dengan rakyat jelata dan santri di Tegalrejo, bergelar Sultan Abdulhamid Erucakra Kabirul Mukminin."
          },
          {
            name: "Kiai Mojo",
            role: "Penasihat Spiritual & Ulama Besar",
            bio: "Tokoh agama kharismatik yang memimpin barisan ulama dan ribuan santri dari Surakarta mendukung perjuangan suci Diponegoro."
          },
          {
            name: "Sentot Alibasya Prawirodirdjo",
            role: "Panglima Kavaleri Berkuda",
            bio: "Panglima muda brilian (berusia awal 20-an) yang memimpin pasukan gerilya kavaleri berkuda tak terkalahkan."
          },
          {
            name: "Jenderal Hendrik Merkus de Kock",
            role: "Panglima Militer Belanda",
            bio: "Komandan tentara Hindia Belanda yang mencetuskan strategi Benteng Stelsel untuk menjepit pergerakan Diponegoro."
          }
        ],
        jalannyaPerlawanan: [
          "Juli 1825: Kediaman Diponegoro di Tegalrejo diserang dan dibakar Belanda. Diponegoro menyingkir ke Selarong dan mendirikan markas gerilya.",
          "1825 – 1827: Diponegoro menguasai hampir seluruh wilayah pedalaman Jawa Tengah dan Yogyakarta. Pasukan Belanda kocar-kacir menghadapi serangan kilat gerilya.",
          "1827: De Kock menerapkan strategi 'Benteng Stelsel' (membangun ratusan benteng kecil yang saling terhubung pos jalan dan kavaleri patroli).",
          "1829: Tokoh-tokoh kunci mulai terpisah; Kiai Mojo ditangkap di Pajang, Sentot Alibasya dipaksa berunding karena terjepit.",
          "28 Maret 1830: Belanda mengundang Diponegoro berunding damai di Wisma Karesidenan Magelang pada bulan Ramadhan, namun secara licik menangkapnya saat perundingan berlangsung."
        ],
        strategi: [
          "Taktik Perang Gerilya (Hit and Run): Menyerang konvoi Belanda di saat hujan atau malam hari, lalu menghilang ke lereng gunung dan hutan jati.",
          "Perang Semesta Rakyat & Santri: Menyatukan kaum bangsawan, ulama pesantren, dan petani dalam satu barisan.",
          "Respons Belanda: Benteng Stelsel yang membatasi ruang gerak dan membelah konsentrasi pasukan Diponegoro."
        ],
        akhirPerlawanan: [
          "Diponegoro ditangkap di Magelang lalu diasingkan ke Manado dan dipindahkan ke Benteng Rotterdam Makassar hingga wafat pada 8 Januari 1855.",
          "Perang Jawa resmi berakhir pada tahun 1830."
        ],
        dampak: [
          "Kas pemerintah kolonial Belanda terkuras habis hingga di ambang kebangkrutan nasional.",
          "Untuk menutup hutang kas perang tersebut, Gubernur Jenderal van den Bosch menciptakan sistem 'Tanam Paksa' (Cultuurstelsel) pada 1830.",
          "Kekuasaan keraton-keraton di Jawa dipersempit dan sepenuhnya berada di bawah cengkeraman kekuasaan politik Batavia."
        ]
      }
    },
    {
      id: "palembang-belanda",
      title: "Perlawanan Kesultanan Palembang",
      period: "1811 – 1821 M",
      era: "belanda",
      eraLabel: "Perlawanan terhadap Pemerintah Hindia Belanda",
      region: "Palembang & Sungai Musi (Sumatera Selatan)",
      heroName: "Sultan Mahmud Badaruddin II",
      heroTitle: "Sultan Kesultanan Palembang Darussalam",
      heroImage: "assets/portrait_diponegoro.jpg",
      bannerImage: "assets/perlawanan_belanda.jpg",
      quote: "Sungai Musi adalah urat nadi kehidupan rakyat kami. Tak setetes pun airnya rela kami serahkan di bawah tapak penjajah!",
      summary: "Perang Menteng dan pertempuran air sengit di Sungai Musi dipimpin Sultan Mahmud Badaruddin II dalam mempertahankan kedaulatan tanah tambang timah dan lada Palembang.",
      sections: {
        latarBelakang: [
          "Kekayaan tambang timah di Pulau Bangka dan Belitung yang menjadi incaran monopoli bangsa-bangsa Barat (Inggris dan Belanda).",
          "Ambisi Belanda untuk kembali menduduki loji sungai dan menguasai jalur perdagangan Sungai Musi setelah hengkangnya Inggris.",
          "Ketegasan Sultan Mahmud Badaruddin II menolak kedaulatan Hindia Belanda atas tanah Palembang."
        ],
        tokoh: [
          {
            name: "Sultan Mahmud Badaruddin II (SMB II)",
            role: "Sultan Palembang Darussalam",
            bio: "Pemimpin bijaksana, ahli sastra pengarang Syair Perang Menteng, sekaligus komandan perang yang tangguh menguasai seluk-beluk Sungai Musi."
          },
          {
            name: "Komisaris Muntinghe",
            role: "Utusan Pemerintah Belanda",
            bio: "Pejabat Belanda yang memimpin ekspedisi bersenjata menggempur benteng-benteng Palembang (dikenal sebagai Perang Menteng)."
          },
          {
            name: "Jenderal de Kock",
            role: "Panglima Ekspedisi Belanda",
            bio: "Memimpin ekspedisi kedua berkekuatan ribuan serdadu untuk mematahkan pertahanan Benteng Kuto Besak."
          }
        ],
        jalannyaPerlawanan: [
          "12 Juni 1819: Meletus Perang Menteng. Pasukan Muntinghe yang berlayar di Sungai Musi dihujani tembakan meriam dari Benteng Kuto Besak dan rakit-rakit api pejuang.",
          "Pasukan Muntinghe menderita kekalahan telak dan terpaksa mundur kembali ke Batavia.",
          "1821: Belanda mengirim ekspedisi pembalasan berkekuatan masif dipimpin Jenderal de Kock.",
          "Setelah pertempuran sengit selama berminggu-minggu di Pulau Kemaro dan Sungai Musi, pertahanan Palembang akhirnya dapat ditembus Belanda."
        ],
        strategi: [
          "Pertahanan benteng kembar terapung dan baterai meriam di tepi sungai (Kuto Besak dan Benteng Tambak Bayo).",
          "Taktik perahu perun (rakit kayu yang dibakar dan dihanyutkan) untuk membakar kapal-kapal perang Belanda di tengah sungai.",
          "Rantai besi penghalang yang dipasang melintang di dasar Sungai Musi untuk merusak lunas kapal musuh."
        ],
        akhirPerlawanan: [
          "Pada Juli 1821, Sultan Mahmud Badaruddin II dan keluarganya ditangkap setelah pertahanan terakhir Kuto Besak tak mampu lagi menahan gempuran meriam berat.",
          "Belanda mengasingkan SMB II ke Ternate hingga akhir hayatnya pada 1852.",
          "Kesultanan Palembang resmi dihapuskan Belanda pada tahun 1823."
        ],
        dampak: [
          "Wilayah Sumatera Selatan dan tambang timah Bangka-Belitung sepenuhnya jatuh ke tangan monopoli pemerintah kolonial Hindia Belanda.",
          "Kisah heroik perjuangan diabadikan dalam karya sastra agung 'Syair Perang Menteng'."
        ]
      }
    },
    {
      id: "padri-sumbar",
      title: "Perang Padri",
      period: "1821 – 1838 M",
      era: "belanda",
      eraLabel: "Perlawanan terhadap Pemerintah Hindia Belanda",
      region: "Minangkabau (Sumatera Barat)",
      heroName: "Tuanku Imam Bonjol",
      heroTitle: "Petto Syarif / Pemimpin Kaum Padri",
      heroImage: "assets/portrait_diponegoro.jpg",
      bannerImage: "assets/perlawanan_belanda.jpg",
      quote: "Menyesal kita pernah terpecah belah. Kini bersatulah Kaum Adat dan Kaum Agama, sebab musuh sejati kita bersama adalah Kompeni Belanda!",
      summary: "Perang panjang di ranah Minangkabau yang berawal dari pertentangan Kaum Padri dan Kaum Adat, berujung pada persatuan agung kedua kubu untuk mengusir penjajah Belanda hingga Benteng Bonjol runtuh.",
      sections: {
        latarBelakang: [
          "Pertentangan awal antara Kaum Padri (ulama pembaharu Islam) yang ingin membersihkan masyarakat dari kebiasaan judi, sabung ayam, dan minuman keras, melawan Kaum Adat.",
          "Kaum Adat yang terdesak meminta bantuan militer kepada pihak Hindia Belanda pada tahun 1821 dengan imbalan penyerahan sebagian wilayah Minangkabau.",
          "Belanda memanfaatkan situasi untuk menancapkan kuku penjajahan di ranah Minang.",
          "Kaum Adat akhirnya sadar bahwa Belanda hanya berniat memperbudak dan memeras tanah air mereka, sehingga berbalik bersatu dengan Kaum Padri."
        ],
        tokoh: [
          {
            name: "Tuanku Imam Bonjol (Muhammad Syahab)",
            role: "Pemimpin Tertinggi Kaum Padri",
            bio: "Ulama kharismatik, arsitek benteng pertahanan Bukit Tajadi (Benteng Bonjol), yang mengobarkan persatuan Adat dan Syara'."
          },
          {
            name: "Tuanku Tambusai & Tuanku Rao",
            role: "Panglima Perang Padri",
            bio: "Pemimpin perlawanan Padri di wilayah utara (Tapanuli Selatan dan Mandailing)."
          },
          {
            name: "Jenderal Cochius",
            role: "Panglima Zeni Belanda",
            bio: "Perwira Belanda yang memimpin pengepungan benteng tanah bertingkat Bonjol menggunakan artileri berat."
          }
        ],
        jalannyaPerlawanan: [
          "Fase I (1821 – 1825): Belanda menyerang wilayah pedalaman Minangkabau. Kaum Padri memukul mundur Belanda dalam berbagai pertempuran hutan.",
          "Gencatan Senjata Masang (1825): Belanda terpaksa berdamai sementara dengan Padri karena sedang menghadapi Perang Diponegoro di Jawa.",
          "Fase II (1830 – 1837): Setelah Perang Jawa usai, Belanda mengerahkan seluruh pasukannya ke Minangkabau. Lahir 'Plakat Puncak Pato' yang menyatukan Kaum Adat dan Kaum Padri (Adat Basandi Syarak, Syarak Basandi Kitabullah).",
          "Benteng Bonjol di Bukit Tajadi dikepung selama 6 bulan berturut-turut oleh pasukan zeni tempur Belanda."
        ],
        strategi: [
          "Membangun benteng pertahanan bertingkat dari tanah liat setebal beberapa meter yang dikelilingi parit berduri dan bambu runcing alami.",
          "Taktik gerilya lembah dan ngarai khas Minangkabau yang menyulitkan pergerakan artileri kuda Belanda.",
          "Deklarasi rekonsiliasi adat-agama yang memperkokoh persaudaraan seluruh lapisan rakyat Minang."
        ],
        akhirPerlawanan: [
          "Pada 16 Agustus 1837, Benteng Bonjol akhirnya berhasil dijebol Belanda setelah pemboman artileri tanpa henti.",
          "Tuanku Imam Bonjol diundang berunding di Palupuh pada Oktober 1837, namun Belanda kembali berkhianat dan menangkapnya.",
          "Imam Bonjol diasingkan ke Cianjur, Ambon, dan terakhir ke Lotak, Minahasa hingga wafat pada 1864."
        ],
        dampak: [
          "Kekuasaan Hindia Belanda mencengkeram seluruh wilayah pedalaman Sumatera Barat.",
          "Lahirnya konsensus filosofis luhur masyarakat Minangkabau yang kekal hingga kini: 'Adat Basandi Syarak, Syarak Basandi Kitabullah'.",
          "Menjadi teladan persatuan nasional atas bahaya politik adu domba penjajah."
        ]
      }
    },
    {
      id: "perang-aceh",
      title: "Perang Aceh",
      period: "1873 – 1904 M",
      era: "belanda",
      eraLabel: "Perlawanan terhadap Pemerintah Hindia Belanda",
      region: "Tanah Rencong (Aceh)",
      heroName: "Cut Nyak Dhien & Teuku Umar",
      heroTitle: "Srikandi Perang Gerilya & Panglima Teuku Umar",
      heroImage: "assets/portrait_cutnyakdhien.jpg",
      bannerImage: "assets/perlawanan_belanda.jpg",
      quote: "Selama hayat dikandung badan, kami pantang menyerah kepada kaphee Belanda! Darah syahid adalah kehormatan kami!",
      summary: "Perang paling berdarah, terlama, dan paling menguras tenaga bagi imperialis Belanda di Nusantara, dipimpin para sultan, ulama, dan pahlawan wanita yang pantang tunduk hingga titik darah penghabisan.",
      sections: {
        latarBelakang: [
          "Traktat Sumatera 1871 antara Inggris dan Belanda: Inggris mengizinkan Belanda memperluas kekuasaan di Aceh tanpa campur tangan Inggris.",
          "Belanda ingin menguasai perdagangan di Selat Malaka setelah Terusan Suez dibuka pada 1869.",
          "Aceh menolak mengakui kedaulatan Hindia Belanda dan memperkuat hubungan diplomatik dengan Turki, Italia, dan Amerika Serikat.",
          "Pada 26 Maret 1873, Belanda secara resmi menyatakan perang terhadap Kesultanan Aceh."
        ],
        tokoh: [
          {
            name: "Teuku Umar",
            role: "Panglima Perang Gerilya Aceh",
            bio: "Tokoh cerdik yang menerapkan taktik sandiwara berpura-pura menyerah kepada Belanda untuk mencuri senjata dan uang sebelum berbalik menyerang."
          },
          {
            name: "Cut Nyak Dhien",
            role: "Srikandi Pejuang Gerilya",
            bio: "Istri Teuku Umar yang meneruskan perlawanan di hutan rimba Meulaboh meski didera sakit dan kebutaan, menjadi simbol keteguhan wanita Nusantara."
          },
          {
            name: "Teungku Chik di Tiro",
            role: "Ulama Kharismatik Perang Sabil",
            bio: "Pemimpin spiritual yang mengobarkan Hikayat Perang Sabil hingga menyulut keberanian ribuan pemuda Aceh melawan penjajah."
          },
          {
            name: "Jenderal J.H.R. Kohler",
            role: "Panglima Ekspedisi Pertama Belanda",
            bio: "Tewas tertembak tepat di dada oleh penembak jitu Aceh di depan Masjid Raya Baiturrahman pada April 1873."
          },
          {
            name: "Dr. Snouck Hurgronje",
            role: "Penasihat Kolonial Belanda",
            bio: "Orientalis Belanda yang menyamar menjadi muslim untuk memetakan titik lemah masyarakat Aceh dan menyarankan operasi pemisahan ulama dari kaum uleebalang."
          }
        ],
        jalannyaPerlawanan: [
          "Ekspedisi I (1873): Pasukan Belanda dipukul hancur; Jenderal Kohler tewas di halaman Masjid Raya Baiturrahman.",
          "Ekspedisi II (1874): Belanda dipimpin Jenderal van Swieten berhasil merebut kraton, namun Sultan Mahmud Syah dan rakyat menyingkir ke pedalaman bergerilya.",
          "1893: Teuku Umar berpura-pura menyerah kepada Belanda (Teuku Djohan Pahlawan), mendapatkan 800 pucuk senapan dan dana besar, lalu melarikan senjata tersebut untuk pejuang Aceh pada 1896.",
          "1899: Teuku Umar gugur dalam pertempuran malam di Suak Ujong Kalak Meulaboh. Cut Nyak Dhien memimpin sisa pasukan gerilya di hutan belantara selama bertahun-tahun."
        ],
        strategi: [
          "Perang Gerilya Semesta di rawa dan hutan lebat yang tak kenal waktu beristirahat.",
          "Kekuatan spiritual Hikayat Perang Sabil yang menggelorakan syahid fi sabilillah.",
          "Strategi Belanda: Membentuk korps serdadu khusus marsose (Maréchaussée) dan menerapkan nasihat Snouck Hurgronje untuk menghabisi para ulama tanpa ampun."
        ],
        akhirPerlawanan: [
          "Pada 1904, sebagian besar pimpinan perlawanan telah gugur atau tertangkap; Cut Nyak Dhien ditangkap dalam kondisi buta dan diasingkan ke Sumedang, Jawa Barat.",
          "Meskipun benteng keraton jatuh, bara perlawanan gerilya rakyat Aceh sesungguhnya tak pernah padam sepenuhnya hingga proklamasi kemerdekaan Republik Indonesia."
        ],
        dampak: [
          "Menjadi perang termahal dan paling mematikan bagi kerajaan Belanda, menewaskan puluhan ribu serdadu dan jenderal terbaiknya.",
          "Menjadikan Aceh sebagai 'Daerah Modal' yang berjiwa merdeka dan tak pernah dapat dijinakkan sepenuhnya oleh imperialisme kolonial."
        ]
      }
    },
    {
      id: "sisingamangaraja-toba",
      title: "Perlawanan Sisingamangaraja XII",
      period: "1878 – 1907 M",
      era: "belanda",
      eraLabel: "Perlawanan terhadap Pemerintah Hindia Belanda",
      region: "Tanah Batak & Toba (Sumatera Utara)",
      heroName: "Sisingamangaraja XII",
      heroTitle: "Patuan Bosar Ompu Pulo Batu / Raja Toba",
      heroImage: "assets/portrait_pattimura.jpg",
      bannerImage: "assets/perlawanan_belanda.jpg",
      quote: "Lebih baik gugur bermandikan darah di tanah pusaka leluhur daripada tunduk menyerahkan kemerdekaan bangsa Batak kepada penjajah!",
      summary: "Perlawanan gigih selama 29 tahun mempertahankan kemerdekaan Tanah Batak dari penetrasi militer Belanda yang ingin menganeksasi wilayah Toba dan Silindung.",
      sections: {
        latarBelakang: [
          "Belanda berniat menguasai seluruh Tanah Batak untuk memperluas perkebunan tembakau dan karet serta mengamankan perbatasan dengan Aceh.",
          "Penolakan keras Raja Sisingamangaraja XII terhadap penempatan pasukan Belanda di wilayah Toba dan Silindung.",
          "Belanda memanfaatkan misi pekabaran Injil dan pos zending Rheinische Missionsgesellschaft (RMG) sebagai dalih intervensi militer politik.",
          "Tindakan Belanda membakar lumbung dan perkampungan rakyat Batak di sekitar Danau Toba."
        ],
        tokoh: [
          {
            name: "Sisingamangaraja XII (Patuan Bosar)",
            role: "Raja-Imam Tanah Batak",
            bio: "Pemimpin spiritual dan panglima perang rakyat Batak yang memimpin perlawanan bersenjata selama hampir tiga dasawarsa."
          },
          {
            name: "Kapten Hans Christoffel",
            role: "Komandan Pasukan Khusus Marsose Belanda",
            bio: "Pemimpin regu pelacak Marsose Belanda yang memburu Sisingamangaraja XII di hutan lebat Dairi."
          },
          {
            name: "Lopian & Patuan Nagari",
            role: "Putri & Putra Sisingamangaraja XII",
            bio: "Anak-anak pemberani yang setia mendampingi ayahanda hingga gugur bersama di medan tempur."
          }
        ],
        jalannyaPerlawanan: [
          "Februari 1878: Belanda menyerang pos pertahanan Batak di Silindung. Sisingamangaraja XII menyatakan perang terbuka.",
          "1883 – 1889: Pasukan Batak menyerbu tangsi-tangsi Belanda di Tarutung, Balige, dan Uluan, serta menjalin kerja sama militer dengan pejuang Aceh.",
          "1894: Pasukan Belanda di bawah von Daalen melancarkan operasi pembersihan besar-besaran dan membakar istana Bakkara.",
          "17 Juni 1907: Pasukan Marsose Christoffel mengepung rapat persembunyian Sisingamangaraja XII di pinggir jurang Si Onom Hudon, Dairi."
        ],
        strategi: [
          "Taktik perang gerilya di perbukitan cadas dan hutan lebat pegunungan Bukit Barisan.",
          "Menjalin aliansi lintas wilayah dengan para pejuang Perang Aceh di perbatasan Gayo dan Alas.",
          "Membentengi desa-desa dengan pagar bambu berduri tebal yang sulit ditembus kavaleri kuda musuh."
        ],
        akhirPerlawanan: [
          "Pada 17 Juni 1907, Sisingamangaraja XII gugur setelah peluru Marsose mengenai dadanya saat memeluk putrinya Lopian yang telah gugur terlebih dahulu.",
          "Kedua putranya, Patuan Nagari dan Patuan Anggi, juga gugur syahid dalam pertempuran tersebut.",
          "Jenazah sang pahlawan dimakamkan di Tarutung sebelum dipindahkan ke Makam Pahlawan Nasional Balige."
        ],
        dampak: [
          "Seluruh wilayah Tanah Batak resmi dimasukkan ke dalam wilayah administrasi Hindia Belanda (Gouvernement van Sumatra's Westkust/Oostkust).",
          "Semangat pantang menyerah Sisingamangaraja XII menjadi lambang kehormatan, keteguhan hati, dan harga diri masyarakat Batak."
        ]
      }
    },
    {
      id: "bali-puputan",
      title: "Perlawanan Kerajaan-Kerajaan di Bali (Perang Puputan)",
      period: "1846 – 1908 M",
      era: "belanda",
      eraLabel: "Perlawanan terhadap Pemerintah Hindia Belanda",
      region: "Buleleng, Jembrana, Klungkung, Badung (Pulau Bali)",
      heroName: "I Gusti Ketut Jelantik",
      heroTitle: "Patih Agung Kerajaan Buleleng",
      heroImage: "assets/portrait_diponegoro.jpg",
      bannerImage: "assets/perlawanan_belanda.jpg",
      quote: "Selama ada sehelai ujung kuku, kerajaan ini tak akan pernah mengakui kedaulatan Belanda! Kematian dalam perang mempertahankan kehormatan tanah pusaka adalah Puputan!",
      summary: "Perlawanan heroik kerajaan-kerajaan di Bali mempertahankan tradisi Hak Tawan Karang, berujung pada perang habis-habisan (Puputan) di Buleleng, Jagaraga, Badung, dan Klungkung.",
      sections: {
        latarBelakang: [
          "Pemberlakuan hukum adat 'Hak Tawan Karang' oleh raja-raja Bali, yakni hak menyita kapal asing yang terdampar di perairan pantai Bali beserta seluruh isinya.",
          "Pemerintah Hindia Belanda menuntut agar hak adat tersebut dihapus dan raja-raja Bali tunduk mengakui kekuasaan Belanda.",
          "Penolakan tegas para raja Bali, dipimpin oleh Patih I Gusti Ketut Jelantik dari Kerajaan Buleleng.",
          "Kapal Belanda dirampas rakyat di pantai Prancak (Jembrana) dan Buleleng memicu Belanda mengirim ultimatum militer."
        ],
        tokoh: [
          {
            name: "I Gusti Ketut Jelantik",
            role: "Patih Kerajaan Buleleng",
            bio: "Panglima perang legendaris perancang benteng parit bertingkat Jagaraga yang bersumpah melawan Belanda hingga sehelai bulu kuku pun tersisa."
          },
          {
            name: "I Gusti Ngurah Made Agung",
            role: "Raja Badung",
            bio: "Memimpin perang Puputan Badung (1906), berjalan kaki memakai busana serba putih bersama seluruh keluarga keraton menyongsong peluru meriam Belanda."
          },
          {
            name: "Dewa Agung Istri Kanya",
            role: "Ratu Pejuang Klungkung",
            bio: "Pemimpin perang Kusamba (1849) yang berhasil menewaskan jenderal Belanda Mayor Jenderal A.V. Michiels."
          }
        ],
        jalannyaPerlawanan: [
          "1846 & 1848: Belanda melancarkan ekspedisi I dan II menyerbu Buleleng. Pasukan Jelantik berhasil memukul mundur ekspedisi kedua Belanda di Benteng Jagaraga.",
          "1849: Ekspedisi III Belanda dipimpin Jenderal Michiels mengerahkan armada besar. Terjadi Perang Jagaraga dan Perang Kusamba yang menewaskan Jenderal Michiels.",
          "1906: Perang Puputan Badung. Seluruh keluarga istana dan ribuan rakyat bersenjata keris menerjang barisan meriam Belanda.",
          "1908: Perang Puputan Klungkung menjadi babak penutup perlawanan heroik rakyat Bali."
        ],
        strategi: [
          "Membangun Benteng Supit Urang Jagaraga dengan sistem jebakan parit bertingkat yang membingungkan pasukan infanteri musuh.",
          "Menerapkan konsep perang suci 'Puputan' (berjuang habis-habisan hingga tetes darah terakhir demi kehormatan kasta kesatria dan tanah air).",
          "Mobilisasi massal seluruh rakyat bersama para raja dan pemangku adat."
        ],
        akhirPerlawanan: [
          "Patih I Gusti Ketut Jelantik gugur dalam pertempuran di perbukitan Gunung Batur Kintamani pada 1849.",
          "Dengan runtuhnya Kerajaan Klungkung pada Puputan 1908, seluruh Pulau Bali resmi berada di bawah cengkeraman Hindia Belanda."
        ],
        dampak: [
          "Runtuhnya kedaulatan kerajaan-kerajaan berdaulat di Bali.",
          "Tragedi Puputan mengundang kecaman moral keras dari pers internasional di Eropa terhadap kekejaman militer Belanda.",
          "Nilai kesetiaan, keberanian, dan pengorbanan suci Puputan abadi dalam identitas kebudayaan Bali."
        ]
      }
    },
    {
      id: "banjar-antasari",
      title: "Perlawanan Kesultanan Banjar (Perang Banjar)",
      period: "1859 – 1905 M",
      era: "belanda",
      eraLabel: "Perlawanan terhadap Pemerintah Hindia Belanda",
      region: "Kalimantan Selatan & Kalimantan Tengah",
      heroName: "Pangeran Antasari",
      heroTitle: "Panembahan Amiruddin Khalifatul Mukminin",
      heroImage: "assets/portrait_hasanuddin.jpg",
      bannerImage: "assets/perlawanan_belanda.jpg",
      quote: "Haram Manyarah Waja Sampai Kaputing! (Pantang menyerah, berjuang teguh sampai titik darah penghabisan!)",
      summary: "Perang rakyat Banjar dan Dayak di bawah komando Pangeran Antasari melawan kolonialisme Belanda yang mencaplok tambang batu bara dan menghapus Kesultanan Banjar.",
      sections: {
        latarBelakang: [
          "Campur tangan Belanda dalam suksesi takhta Kesultanan Banjar dengan mengangkat Pangeran Tamjidillah yang pro-Belanda dan dibenci rakyat.",
          "Belanda menyingkirkan Pangeran Hidayatullah yang sesungguhnya berhak atas takhta dan dicintai rakyat.",
          "Belanda ingin menguasai sumber daya alam tambang batu bara 'Oranje Nassau' di Pengaron.",
          "Penderitaan rakyat akibat beban pajak tanah dan kerja rodi yang kejam."
        ],
        tokoh: [
          {
            name: "Pangeran Antasari",
            role: "Pemimpin Perang & Khalifah",
            bio: "Bangsawan keraton yang bersumpah mengusir penjajah dengan semboyan legendaris 'Haram Manyarah Waja Sampai Kaputing'."
          },
          {
            name: "Pangeran Hidayatullah",
            role: "Sultan Pilihan Rakyat",
            bio: "Mangkubumi Banjar yang bersekutu dengan Antasari sebelum akhirnya ditangkap secara tipu muslihat dan diasingkan ke Cianjur."
          },
          {
            name: "Kyai Demang Lehman",
            role: "Panglima Perang Lapangan",
            bio: "Panglima kepercayaan yang berhasil merebut benteng Tabanio dan menenggelamkan kapal perang Belanda Onrust."
          }
        ],
        jalannyaPerlawanan: [
          "28 April 1859: Pasukan Pangeran Antasari (300 prajurit) menyerang dan membakar tambang batu bara Oranje Nassau di Pengaron.",
          "Desember 1859: Pasukan Demang Lehman menenggelamkan kapal perang Belanda 'Onrust' di Sungai Barito.",
          "1860: Pemerintah Hindia Belanda secara sepihak mengumumkan penghapusan Kesultanan Banjar, memicu kemarahan seluruh suku Banjar dan Dayak.",
          "Maret 1862: Pangeran Antasari dinobatkan sebagai pemimpin tertinggi dengan gelar Panembahan Amiruddin Khalifatul Mukminin."
        ],
        strategi: [
          "Perang gerilya sungai dan rimba sepanjang aliran Sungai Barito, Kapuas Murung, dan Pegunungan Meratus.",
          "Persatuan erat antara etnis Banjar dan suku Dayak pedalaman (Dayak Bakumpai, Siang, Murung).",
          "Membangun benteng-benteng tanah tersembunyi di bukit-bukit pedalaman."
        ],
        akhirPerlawanan: [
          "Pangeran Antasari wafat pada 11 Oktober 1862 di pedalaman Bayan Begok akibat sakit cacar air tanpa pernah tertangkap oleh Belanda.",
          "Perjuangan dilanjutkan oleh putranya, Sultan Muhammad Seman, hingga gugur di Benteng Baras Kuning pada tahun 1905."
        ],
        dampak: [
          "Belanda menguasai seluruh wilayah tambang batu bara dan perkebunan di Kalimantan Selatan.",
          "Semboyan 'Haram Manyarah Waja Sampai Kaputing' menjadi semboyan resmi Provinsi Kalimantan Selatan dan doktrin semangat juang bangsa."
        ]
      }
    }
  ],

  // 2. DATA KUIS PERLAWANAN NUSANTARA (DEFAULT)
  kuis: [
    {
      id: 1,
      soal: "Siapakah tokoh yang memimpin rakyat Maluku Utara mengusir penjajah Portugis setelah ayahnya, Sultan Khairun, dibunuh secara licik di Benteng Santo Paulo?",
      pilihan: [
        "Sultan Agung",
        "Sultan Baabullah",
        "Pattimura",
        "Sultan Hasanuddin"
      ],
      jawabanBenar: 1, // B (0-indexed: 1)
      penjelasan: "Sultan Baabullah adalah putra Sultan Khairun yang dinobatkan menjadi Sultan Ternate dan berhasil mengepung Benteng Santo Paulo selama 5 tahun hingga Portugis menyerah dan terusir pada tahun 1575.",
      gambar: "assets/perlawanan_portugis.jpg"
    },
    {
      id: 2,
      soal: "Putra mahkota Kesultanan Demak yang mendapat julukan 'Pangeran Sabrang Lor' karena memimpin ratusan kapal perang menyerang Portugis di Selat Malaka adalah...",
      pilihan: [
        "Raden Patah",
        "Fatahillah",
        "Pati Unus",
        "Sultan Trenggana"
      ],
      jawabanBenar: 2, // C
      penjelasan: "Pati Unus dijuluki Pangeran Sabrang Lor (Pangeran yang menyeberang ke utara) karena memimpin ekspedisi laut maritim raksasa Demak menyeberangi Laut Jawa dan Selat Malaka untuk menggempur Portugis.",
      gambar: "assets/perlawanan_portugis.jpg"
    },
    {
      id: 3,
      soal: "Pada 22 Juni 1527, Fatahillah berhasil merebut Sunda Kelapa dari ancaman Portugis dan mengubah namanya menjadi 'Jayakarta' yang bermakna...",
      pilihan: [
        "Kota Pelabuhan Megah",
        "Kemenangan yang Sempurna",
        "Tanah yang Diberkahi",
        "Benteng Pertahanan Kuat"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Jayakarta berasal dari kata Sansekerta/Arab yang berarti 'Kemenangan yang Sempurna' (Fathan Mubiina) untuk memperingati keberhasilan mengusir Portugis dari Sunda Kelapa.",
      gambar: "assets/hero_perlawanan.jpg"
    },
    {
      id: 4,
      soal: "Apa faktor utama yang menyebabkan kegagalan serangan kedua Kesultanan Mataram di bawah Sultan Agung ke Batavia pada tahun 1629?",
      pilihan: [
        "Pasukan Mataram tersesat di hutan Jawa Barat",
        "Lumbung-lumbung perbekalan beras di Karawang dan Cirebon dibakar mata-mata VOC",
        "Sultan Agung diculik oleh Kompeni",
        "Banjir besar yang menenggelamkan seluruh meriam Mataram"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Mata-mata VOC berhasil menemukan dan membakar lumbung perbekalan beras prajurit Mataram di Karawang dan Cirebon, mengakibatkan pasukan Mataram kelaparan dan diserang wabah penyakit.",
      gambar: "assets/perlawanan_voc.jpg"
    },
    {
      id: 5,
      soal: "Raja Gowa ke-16 yang dijuluki Belanda sebagai 'Ayam Jantan dari Timur' karena keberaniannya menentang monopoli perdagangan VOC adalah...",
      pilihan: [
        "Aru Palaka",
        "Karaeng Galesong",
        "Sultan Hasanuddin",
        "Sultan Mahmud Badaruddin"
      ],
      jawabanBenar: 2, // C
      penjelasan: "Sultan Hasanuddin dijuluki 'De Haantjes van het Oosten' (Ayam Jantan dari Timur) oleh Belanda karena keteguhan dan keberaniannya yang luar biasa dalam memimpin Perang Makassar melawan VOC.",
      gambar: "assets/portrait_hasanuddin.jpg"
    },
    {
      id: 6,
      soal: "Perjanjian berat yang terpaksa ditandatangani oleh Sultan Hasanuddin pada 18 November 1667 akibat terdesak persekutuan VOC dan Bone adalah...",
      pilihan: [
        "Perjanjian Tuntang",
        "Perjanjian Bongaya",
        "Perjanjian Giyanti",
        "Perjanjian Salatiga"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Perjanjian Bongaya memuat pasal-pasal yang sangat merugikan Gowa, termasuk kewajiban mengakui monopoli VOC dan penyerahan Benteng Ujung Pandang yang kemudian dinamai Fort Rotterdam.",
      gambar: "assets/perlawanan_voc.jpg"
    },
    {
      id: 7,
      soal: "Benteng pertahanan Belanda di Pulau Saparua yang berhasil direbut dan dikuasai oleh pasukan Kapitan Pattimura pada 16 Mei 1817 adalah...",
      pilihan: [
        "Benteng Duurstede",
        "Benteng Victoria",
        "Benteng Fort de Kock",
        "Benteng Marlborough"
      ],
      jawabanBenar: 0, // A
      penjelasan: "Pasukan rakyat Maluku di bawah Kapitan Pattimura menyerbu Benteng Duurstede di Saparua, menewaskan Residen Van den Berg dan menduduki benteng tersebut.",
      gambar: "assets/portrait_pattimura.jpg"
    },
    {
      id: 8,
      soal: "Pemicu langsung (casus belli) meletusnya Perang Jawa (1825–1830) yang dipimpin oleh Pangeran Diponegoro adalah...",
      pilihan: [
        "Belanda memenjarakan Sultan Hamengkubuwana V",
        "Pemasangan patok jalan oleh Belanda yang menerobos makam leluhur Diponegoro di Tegalrejo",
        "Penutupan pesantren Kiai Mojo oleh komandan Belanda",
        "Penerapan sistem tanam paksa di tanah Kasultanan"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Pemasangan patok pembangunan jalan oleh pihak Belanda dan Patih Danureja di atas makam leluhur Diponegoro di Tegalrejo tanpa izin memicu kemarahan besar sang pangeran dan rakyat.",
      gambar: "assets/portrait_diponegoro.jpg"
    },
    {
      id: 9,
      soal: "Strategi militer yang diterapkan oleh Jenderal de Kock untuk mempersempit ruang gerak pasukan gerilya Pangeran Diponegoro adalah...",
      pilihan: [
        "Strategi Perang Parit",
        "Strategi Benteng Stelsel",
        "Strategi Konsentrasi Pasukan",
        "Strategi Devide et Impera"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Benteng Stelsel adalah taktik mendirikan ratusan benteng kecil di wilayah strategis yang saling dihubungkan jalur patroli kavaleri cepat, sehingga pasukan Diponegoro terkurung dan terputus komunikasinya.",
      gambar: "assets/perlawanan_belanda.jpg"
    },
    {
      id: 10,
      soal: "Konsensus agung yang menyatukan Kaum Adat dan Kaum Padri di Minangkabau untuk bersama-sama mengusir penjajah Belanda dituangkan dalam prinsip...",
      pilihan: [
        "Bhinneka Tunggal Ika",
        "Adat Basandi Syarak, Syarak Basandi Kitabullah",
        "Haram Manyarah Waja Sampai Kaputing",
        "Rawe-rawe rantas malang-malang putung"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Prinsip 'Adat Basandi Syarak, Syarak Basandi Kitabullah' lahir dari Piagam Puncak Pato ketika Kaum Adat dan Kaum Padri sadar bahwa Belanda sedang mengadu domba mereka demi mencaplok ranah Minangkabau.",
      gambar: "assets/perlawanan_belanda.jpg"
    },
    {
      id: 11,
      soal: "Jenderal Belanda yang tewas tertembak tepat di dada di depan Masjid Raya Baiturrahman pada ekspedisi pertama Perang Aceh (1873) adalah...",
      pilihan: [
        "Jenderal van Swieten",
        "Jenderal J.H.R. Kohler",
        "Jenderal van Heutsz",
        "Jenderal de Kock"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Jenderal Kohler tewas tertembak oleh penembak jitu pejuang Aceh di bawah pohon di halaman Masjid Raya Baiturrahman pada 14 April 1873, memaksa Belanda menarik mundur pasukannya.",
      gambar: "assets/portrait_cutnyakdhien.jpg"
    },
    {
      id: 12,
      soal: "Hak adat raja-raja di Bali untuk menyita kapal asing yang karam di pantainya beserta seluruh muatannya disebut...",
      pilihan: [
        "Hak Veto Maritim",
        "Hak Tawan Karang",
        "Hak Ulayat Pantai",
        "Hak Puputan"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Hak Tawan Karang adalah hukum adat maritim di Bali yang memberi wewenang kepada raja lokal untuk menawan kapal asing yang terdampar di pantainya.",
      gambar: "assets/perlawanan_belanda.jpg"
    },
    {
      id: 13,
      soal: "Semboyan perjuangan terkenal dari Pangeran Antasari dalam memimpin Perang Banjar adalah...",
      pilihan: [
        "Merdeka atau Mati!",
        "Haram Manyarah Waja Sampai Kaputing!",
        "Sekali Merdeka Tetap Merdeka!",
        "Pattimura Muda Akan Bangkit!"
      ],
      jawabanBenar: 1, // B
      penjelasan: "'Haram Manyarah Waja Sampai Kaputing' bermakna pantang menyerah, berjuang dengan tekad sekuat baja sampai akhir hayat atau tujuan tercapai.",
      gambar: "assets/hero_perlawanan.jpg"
    },
    {
      id: 14,
      soal: "Pahlawan nasional wanita dari Aceh yang tetap gigih memimpin perlawanan gerilya di pedalaman hutan Meulaboh meski dalam keadaan didera sakit dan kebutaan adalah...",
      pilihan: [
        "R.A. Kartini",
        "Cut Nyak Meutia",
        "Cut Nyak Dhien",
        "Christina Martha Tiahahu"
      ],
      jawabanBenar: 2, // C
      penjelasan: "Cut Nyak Dhien melanjutkan perjuangan suaminya, Teuku Umar, dengan memimpin pasukan gerilya di hutan belantara hingga akhirnya ditangkap dan diasingkan ke Sumedang.",
      gambar: "assets/portrait_cutnyakdhien.jpg"
    },
    {
      id: 15,
      soal: "Raja-Imam Tanah Batak yang gugur pada 17 Juni 1907 di Dairi bersama putrinya Lopian setelah 29 tahun mempertahankan kemerdekaan rakyat Batak dari serbuan Marsose Belanda adalah...",
      pilihan: [
        "Sisingamangaraja X",
        "Sisingamangaraja XII",
        "Sultan Thaha Syaifuddin",
        "Raja Datu Pulungan"
      ],
      jawabanBenar: 1, // B
      penjelasan: "Sisingamangaraja XII (Patuan Bosar Ompu Pulo Batu) memimpin perlawanan tanpa kenal menyerah hingga gugur tertembak dalam pertempuran terakhir melawan Marsose pimpinan Kapten Christoffel.",
      gambar: "assets/portrait_pattimura.jpg"
    }
  ],

  // 3. DATA TIMELINE PERISTIWA SEJARAH
  timeline: [
    {
      year: "1511",
      title: "Jatuhnya Malaka ke Tangan Portugis",
      era: "portugis",
      topicId: "demak-portugis",
      hero: "Sultan Mahmud Syah & Pelaut Nusantara",
      region: "Selat Malaka",
      desc: "Alfonso de Albuquerque menaklukkan pelabuhan internasional Malaka, memicu gelombang perlawanan dari kerajaan maritim di Nusantara."
    },
    {
      year: "1513",
      title: "Ekspedisi Laut Pati Unus ke Malaka",
      era: "portugis",
      topicId: "demak-portugis",
      hero: "Pati Unus (Pangeran Sabrang Lor)",
      region: "Demak & Selat Malaka",
      desc: "Kesultanan Demak mengirim 100 kapal perang menggempur benteng A Famosa Portugis di Malaka untuk memulihkan kedaulatan maritim muslim."
    },
    {
      year: "1527",
      title: "Pembebasan Sunda Kelapa (Jayakarta)",
      era: "portugis",
      topicId: "demak-portugis",
      hero: "Fatahillah",
      region: "Sunda Kelapa (Jakarta)",
      desc: "Fatahillah mengalahkan armada Portugis dan menggagalkan pembangunan benteng kolonial di Sunda Kelapa, lalu menamai kota tersebut Jayakarta pada 22 Juni 1527."
    },
    {
      year: "1575",
      title: "Kemenangan Sultan Baabullah Mengusir Portugis",
      era: "portugis",
      topicId: "ternate-portugis",
      hero: "Sultan Baabullah",
      region: "Ternate (Maluku Utara)",
      desc: "Setelah 5 tahun dikepung total di Benteng Santo Paulo, Portugis menyerah tanpa syarat dan terusir untuk selamanya dari bumi Ternate."
    },
    {
      year: "1628 - 1629",
      title: "Serbuan Akbar Mataram Menyerang Batavia",
      era: "voc",
      topicId: "mataram-voc",
      hero: "Sultan Agung Hanyokrokusumo",
      region: "Batavia (Jakarta)",
      desc: "Dua gelombang pasukan akbar Mataram mengepung markas besar VOC di Batavia; Gubernur Jenderal Jan Pieterszoon Coen tewas dalam pengepungan ini."
    },
    {
      year: "1667 - 1669",
      title: "Perang Makassar & Pertahanan Somba Opu",
      era: "voc",
      topicId: "hasanuddin-voc",
      hero: "Sultan Hasanuddin",
      region: "Gowa (Sulawesi Selatan)",
      desc: "Sultan Hasanuddin mempertahankan kebebasan bernavigasi di laut lepas melawan armada VOC sebelum Benteng Somba Opu runtuh setelah pemboman hebat."
    },
    {
      year: "1817",
      title: "Pemberontakan Pattimura & Perebutan Benteng Duurstede",
      era: "belanda",
      topicId: "pattimura-maluku",
      hero: "Kapitan Pattimura & Christina Martha Tiahahu",
      region: "Saparua (Maluku)",
      desc: "Rakyat Maluku mengangkat senjata menghancurkan garnisun Belanda di Benteng Duurstede menentang kembalinya kerja paksa kolonial."
    },
    {
      year: "1819",
      title: "Perang Menteng di Sungai Musi",
      era: "belanda",
      topicId: "palembang-belanda",
      hero: "Sultan Mahmud Badaruddin II",
      region: "Palembang (Sumatera Selatan)",
      desc: "Pasukan Palembang menghancurkan armada sungai Belanda pimpinan Muntinghe dengan taktik rakit perun dan tembakan artileri Kuto Besak."
    },
    {
      year: "1825 - 1830",
      title: "Perang Diponegoro (Perang Jawa)",
      era: "belanda",
      topicId: "diponegoro-jawa",
      hero: "Pangeran Diponegoro, Kiai Mojo, Sentot Alibasya",
      region: "Jawa Tengah & Yogyakarta",
      desc: "Perang gerilya terdahsyat yang menguras kas Hindia Belanda hingga bangkrut dan memicu diterapkannya sistem Tanam Paksa (Cultuurstelsel)."
    },
    {
      year: "1821 - 1837",
      title: "Perang Padri & Pertahanan Benteng Bonjol",
      era: "belanda",
      topicId: "padri-sumbar",
      hero: "Tuanku Imam Bonjol",
      region: "Minangkabau (Sumatera Barat)",
      desc: "Persatuan agung Kaum Adat dan Kaum Padri bertempur bahu membahu mempertahankan tanah pusaka Minangkabau dari gempuran artileri Belanda."
    },
    {
      year: "1849",
      title: "Perang Jagaraga & Kusamba di Bali",
      era: "belanda",
      topicId: "bali-puputan",
      hero: "I Gusti Ketut Jelantik & Dewa Agung Istri Kanya",
      region: "Buleleng & Klungkung (Bali)",
      desc: "Pertahanan gigih Benteng Supit Urang Jagaraga dan tewasnya Jenderal Belanda Michiels di Kusamba dalam mempertahankan Hak Tawan Karang."
    },
    {
      year: "1859 - 1862",
      title: "Perang Banjar Membakar Tambang Pengaron",
      era: "belanda",
      topicId: "banjar-antasari",
      hero: "Pangeran Antasari & Demang Lehman",
      region: "Barito (Kalimantan Selatan)",
      desc: "Serbuan rakyat Banjar membakar tambang batu bara Belanda dan menenggelamkan kapal perang Onrust di Sungai Barito."
    },
    {
      year: "1873 - 1904",
      title: "Perang Semesta Rakyat Aceh",
      era: "belanda",
      topicId: "perang-aceh",
      hero: "Teuku Umar, Cut Nyak Dhien, Teungku Chik di Tiro",
      region: "Tanah Rencong (Aceh)",
      desc: "Perang terlama dan terberdarah Belanda di Hindia Timur; Jenderal Kohler tewas dan Cut Nyak Dhien bergerilya tanpa henti di hutan rimba."
    },
    {
      year: "1907",
      title: "Pertempuran Terakhir Sisingamangaraja XII",
      era: "belanda",
      topicId: "sisingamangaraja-toba",
      hero: "Sisingamangaraja XII",
      region: "Dairi (Sumatera Utara)",
      desc: "Gugurnya sang Raja-Imam Tanah Batak di tebing Si Onom Hudon setelah 29 tahun mempertahankan kedaulatan tanah leluhur."
    }
  ],

  // 4. DATA TITIK PETA INTERAKTIF (DIKALIBRASI DENGAN PETA 3D RELIEF NUSANTARA)
  mapPoints: [
    {
      id: "map-aceh",
      topicId: "perang-aceh",
      title: "Aceh (Tanah Rencong)",
      coords: { x: 6.9, y: 11.1 }, // Ujung Barat Laut Sumatera pada peta 3D
      hero: "Cut Nyak Dhien & Teuku Umar",
      enemy: "Pemerintah Hindia Belanda",
      period: "1873 – 1904 M",
      fortress: "Masjid Raya Baiturrahman & Benteng Kutaraja",
      summary: "Perang terlama dan paling mematikan bagi Belanda. Jenderal Kohler tewas dan perlawanan berlanjut dengan taktik gerilya di hutan belantara.",
      youtubeUrl: "https://youtu.be/xK7qllwNGqA?si=qdwC5D9wTWOwhQPw",
      videoTitle: "Kisah Perlawanan Rakyat Aceh Melawan Kolonialisme",
      heroImage: "assets/portrait_cutnyakdhien.jpg"
    },
    {
      id: "map-batak",
      topicId: "sisingamangaraja-toba",
      title: "Sumatera Utara (Tanah Batak)",
      coords: { x: 10.3, y: 25.0 }, // Wilayah Toba Sumatera Utara pada peta 3D
      hero: "Sisingamangaraja XII",
      enemy: "Pemerintah Hindia Belanda",
      period: "1878 – 1907 M",
      fortress: "Istana Bakkara & Perbukitan Dairi",
      summary: "Perlawanan heroik 29 tahun mempertahankan Danau Toba dan kehormatan adat Batak dari penetrasi militer Belanda.",
      youtubeUrl: "https://www.youtube.com/watch?v=W53nQ_c2N1s",
      videoTitle: "Kisah Kepahlawanan Raja Sisingamangaraja XII di Tanah Batak",
      heroImage: "assets/portrait_pattimura.jpg"
    },
    {
      id: "map-padri",
      topicId: "padri-sumbar",
      title: "Sumatera Barat (Minangkabau)",
      coords: { x: 13.8, y: 41.7 }, // Bukit Barisan Minangkabau pada peta 3D
      hero: "Tuanku Imam Bonjol",
      enemy: "Pemerintah Hindia Belanda",
      period: "1821 – 1838 M",
      fortress: "Benteng Tanah Bonjol (Bukit Tajadi)",
      summary: "Bersatunya Kaum Adat dan Kaum Padri melahirkan prinsip luhur 'Adat Basandi Syarak, Syarak Basandi Kitabullah' melawan kelicikan kompeni.",
      youtubeUrl: "https://youtu.be/3wABQwUPHzI?si=Uvt8yIaL37_y1sqe",
      videoTitle: "Sejarah Perang Padri Sumatera Barat & Tuanku Imam Bonjol",
      heroImage: "assets/portrait_diponegoro.jpg"
    },
    {
      id: "map-palembang",
      topicId: "palembang-belanda",
      title: "Palembang (Sumatera Selatan)",
      coords: { x: 19.0, y: 61.1 }, // Sumatera Selatan pada peta 3D
      hero: "Sultan Mahmud Badaruddin II",
      enemy: "Hindia Belanda & Inggris",
      period: "1811 – 1821 M",
      fortress: "Benteng Kuto Besak & Sungai Musi",
      summary: "Perang Menteng yang dahsyat di Sungai Musi mempertahankan kedaulatan tambang timah Bangka Belitung dan kemandirian kesultanan.",
      youtubeUrl: "https://youtu.be/T8u1FBq0cKw?si=E4HZuImCnVFJGr7y",
      videoTitle: "Sejarah Perlawanan Kesultanan Palembang (SMB II)",
      heroImage: "assets/portrait_diponegoro.jpg"
    },
    {
      id: "map-jawa",
      topicId: "diponegoro-jawa",
      title: "Jawa Tengah & D.I. Yogyakarta",
      coords: { x: 30.2, y: 66.7 }, // Pulau Jawa Tengah pada peta 3D
      hero: "Pangeran Diponegoro & Sultan Agung",
      enemy: "VOC & Pemerintah Hindia Belanda",
      period: "1628 M & 1825 – 1830 M",
      fortress: "Goa Selarong, Plered & Batavia",
      summary: "Pusat perlawanan Sultan Agung menyerbu Batavia dan Perang Jawa Pangeran Diponegoro yang menguras habis kas kerajaan Belanda.",
      youtubeUrl: "https://youtu.be/jF-TLUhCglY?si=1AftiuQhV8uRUrbF",
      videoTitle: "Sejarah Perang Diponegoro (Perang Jawa) Jawa Tengah",
      heroImage: "assets/portrait_diponegoro.jpg"
    },
    {
      id: "map-banjar",
      topicId: "banjar-antasari",
      title: "Kalimantan Selatan (Kesultanan Banjar)",
      coords: { x: 32.8, y: 38.9 }, // Kalimantan Selatan pada peta 3D
      hero: "Pangeran Antasari & Demang Lehman",
      enemy: "Pemerintah Hindia Belanda",
      period: "1859 – 1905 M",
      fortress: "Tambang Pengaron & Sungai Barito",
      summary: "Semboyan 'Haram Manyarah Waja Sampai Kaputing' membakar semangat persatuan suku Banjar dan Dayak mengusir penjajah tambang batu bara.",
      youtubeUrl: "https://www.youtube.com/watch?v=8V7Zk0u_B4s",
      videoTitle: "Haram Manyarah Waja Sampai Kaputing: Kisah Pangeran Antasari",
      heroImage: "assets/portrait_hasanuddin.jpg"
    },
    {
      id: "map-gowa",
      topicId: "hasanuddin-voc",
      title: "Sulawesi Selatan (Gowa Makassar)",
      coords: { x: 44.1, y: 48.9 }, // Semenanjung Selatan Sulawesi pada peta 3D
      hero: "Sultan Hasanuddin (Ayam Jantan dari Timur)",
      enemy: "VOC Belanda",
      period: "1666 – 1669 M",
      fortress: "Benteng Somba Opu & Ujung Pandang",
      summary: "Mempertahankan kedaulatan laut terbuka melawan monopoli rempah-rempah VOC dalam perang laut dan darat terbesar di Nusantara Timur.",
      youtubeUrl: "https://youtu.be/kQvhwZpkMH4?si=FeLKENd68SeqnffE",
      videoTitle: "Perlawanan Kesultanan Gowa Melawan VOC (Sultan Hasanuddin)",
      heroImage: "assets/portrait_hasanuddin.jpg"
    },
    {
      id: "map-bali",
      topicId: "bali-puputan",
      title: "Bali (Buleleng, Badung & Klungkung)",
      coords: { x: 38.8, y: 77.8 }, // Pulau Bali pada peta 3D
      hero: "I Gusti Ketut Jelantik & Dewa Agung Istri Kanya",
      enemy: "Pemerintah Hindia Belanda",
      period: "1846 – 1908 M",
      fortress: "Benteng Jagaraga & Kusamba",
      summary: "Perang Puputan mempertahankan tradisi Hak Tawan Karang hingga tetes darah penghabisan dengan keberanian ksatria yang mengguncang dunia.",
      youtubeUrl: "https://youtu.be/u76Y-jh1Bx0?si=cjXjWqTalRHMs_1D",
      videoTitle: "Perlawanan Kerajaan di Bali terhadap Kolonial Belanda",
      heroImage: "assets/portrait_diponegoro.jpg"
    },
    {
      id: "map-maluku",
      topicId: "ternate-portugis",
      title: "Kepulauan Maluku (Ternate & Saparua)",
      coords: { x: 60.3, y: 44.4 }, // Kepulauan Maluku pada peta 3D
      hero: "Sultan Baabullah & Kapitan Pattimura",
      enemy: "Portugis & Pemerintah Hindia Belanda",
      period: "1570 M & 1817 M",
      fortress: "Benteng Santo Paulo & Benteng Duurstede",
      summary: "Pusat rempah cengkeh dan pala dunia. Kemenangan Sultan Baabullah mengusir Portugis 1575 dan Kapitan Pattimura merebut Benteng Duurstede 1817.",
      youtubeUrl: "https://youtu.be/FvNgqV7ZTKA?si=J5pjt8beI1liBTfx",
      videoTitle: "Sejarah Perlawanan Rakyat Kepulauan Maluku",
      heroImage: "assets/portrait_pattimura.jpg"
    }
  ],

  // 5. TEMPLATE SLIDE UNTUK FITUR "BUAT MATERI"
  slideTemplates: [
    {
      id: "cover",
      name: "Cover Materi",
      desc: "Judul besar dengan nama materi, subjudul, dan bingkai ornamen museum.",
      background: "maroon",
      elements: [
        {
          id: "el-1",
          type: "badge",
          text: "MEDIA PEMBELAJARAN SEJARAH KELAS XI",
          top: "14%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ECC94B",
          fontSize: "14px",
          textAlign: "center"
        },
        {
          id: "el-2",
          type: "title",
          text: "PERLAWANAN PRIBUMI TERHADAP KOLONIALISME",
          top: "26%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#FFFFFF",
          fontSize: "32px",
          fontWeight: "800",
          fontFamily: "'Cinzel', serif",
          textAlign: "center"
        },
        {
          id: "el-3",
          type: "subtitle",
          text: "Meneladani Heroisme dan Strategi Perjuangan Bangsa Menghadapi Bangsa Penjajah",
          top: "52%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#E2D9CF",
          fontSize: "18px",
          textAlign: "center"
        },
        {
          id: "el-4",
          type: "author",
          text: "Disusun oleh: Guru Sejarah Indonesia • SMA / SMK Kelas XI",
          top: "76%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#D4AF37",
          fontSize: "15px",
          textAlign: "center"
        }
      ]
    },
    {
      id: "profil-tokoh",
      name: "Profil Tokoh",
      desc: "Foto pahlawan, nama, gelar kehormatan, dan rangkuman riwayat perjuangan.",
      background: "parchment",
      elements: [
        {
          id: "el-1",
          type: "badge",
          text: "TOKOH PERJUANGAN NUSANTARA",
          top: "8%",
          left: "8%",
          color: "#801616",
          fontSize: "13px",
          fontWeight: "700"
        },
        {
          id: "el-2",
          type: "title",
          text: "PANGERAN DIPONEGORO (1785 – 1855)",
          top: "16%",
          left: "8%",
          color: "#3A2010",
          fontSize: "26px",
          fontWeight: "800",
          fontFamily: "'Cinzel', serif"
        },
        {
          id: "el-3",
          type: "image",
          src: "assets/portrait_diponegoro.jpg",
          top: "30%",
          left: "8%",
          width: "220px",
          height: "220px",
          borderRadius: "12px",
          border: "3px solid #C59B27"
        },
        {
          id: "el-4",
          type: "paragraph",
          text: "Gelar: Sultan Abdulhamid Erucakra Kabirul Mukminin\n\nPeran: Pemimpin tertinggi Perang Jawa (1825–1830) yang mengguncang kekuasaan Hindia Belanda. Menggunakan strategi gerilya kilat dan menyatukan seluruh ulama, santri, dan bangsawan tanah Jawa.",
          top: "30%",
          left: "48%",
          width: "44%",
          color: "#2C1810",
          fontSize: "16px",
          lineHeight: "1.6"
        },
        {
          id: "el-5",
          type: "quote",
          text: "\"Perang suci ini demi tegaknya martabat budi pekerti luhur dan kebebasan rakyat jelata dari penindasan.\"",
          top: "76%",
          left: "48%",
          width: "44%",
          color: "#801616",
          fontSize: "15px",
          fontStyle: "italic"
        }
      ]
    },
    {
      id: "timeline",
      name: "Timeline Sejarah",
      desc: "Alur waktu kronologis peristiwa perjuangan.",
      background: "parchment",
      elements: [
        {
          id: "el-1",
          type: "title",
          text: "KRONOLOGI JALANNYA PERJUANGAN",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#801616",
          fontSize: "24px",
          fontWeight: "800",
          fontFamily: "'Cinzel', serif",
          textAlign: "center"
        },
        {
          id: "el-2",
          type: "card",
          title: "Tahap 1: Latar Belakang & Pemicu",
          text: "Pemasangan patok jalan Belanda di Tegalrejo memicu perlawanan terbuka rakyat pedalaman.",
          top: "26%",
          left: "6%",
          width: "26%",
          background: "#FFFFFF",
          border: "2px solid #C59B27"
        },
        {
          id: "el-3",
          type: "card",
          title: "Tahap 2: Perang Gerilya",
          text: "Pasukan gerilya menyerang konvoi pos kompeni secara kilat di lereng pegunungan dan hutan jati.",
          top: "26%",
          left: "37%",
          width: "26%",
          background: "#FFFFFF",
          border: "2px solid #801616"
        },
        {
          id: "el-4",
          type: "card",
          title: "Tahap 3: Akhir Pertahanan",
          text: "Belanda menerapkan taktik Benteng Stelsel dan perundingan licik di Karesidenan Magelang.",
          top: "26%",
          left: "68%",
          width: "26%",
          background: "#FFFFFF",
          border: "2px solid #3A2010"
        }
      ]
    },
    {
      id: "peta-perlawanan",
      name: "Peta Perlawanan",
      desc: "Peta wilayah dan titik lokasi benteng serta palagan pertempuran.",
      background: "navy",
      elements: [
        {
          id: "el-1",
          type: "title",
          text: "PETA WILAYAH PERLAWANAN NUSANTARA",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ECC94B",
          fontSize: "24px",
          fontWeight: "800",
          fontFamily: "'Cinzel', serif",
          textAlign: "center"
        },
        {
          id: "el-2",
          type: "paragraph",
          text: "Perlawanan rakyat pribumi membentang dari ujung barat Aceh, Selat Sunda, tanah Jawa, Maluku, hingga kepulauan Sulawesi dan Kalimantan.",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#E2D9CF",
          fontSize: "15px",
          textAlign: "center",
          width: "70%"
        },
        {
          id: "el-3",
          type: "badge",
          text: "📍 Titik Strategis: Maluku, Jawa, Aceh, Minangkabau, Makassar, Bali, Banjar, Palembang",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#FFFFFF",
          background: "rgba(197, 155, 39, 0.3)",
          fontSize: "16px",
          padding: "12px 24px",
          borderRadius: "30px"
        },
        {
          id: "el-4",
          type: "paragraph",
          text: "Benteng utama: Benteng Duurstede (Saparua), Benteng Somba Opu (Makassar), Benteng Kuto Besak (Palembang), Benteng Jagaraga (Bali).",
          top: "60%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ECC94B",
          fontSize: "16px",
          textAlign: "center",
          width: "60%"
        }
      ]
    },
    {
      id: "sebab-akibat",
      name: "Sebab dan Akibat",
      desc: "Format perbandingan dua kolom antara faktor penyebab dan akibat perlawanan.",
      background: "parchment",
      elements: [
        {
          id: "el-1",
          type: "title",
          text: "FAKTOR SEBAB DAN AKIBAT PERLAWANAN",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#801616",
          fontSize: "24px",
          fontWeight: "800",
          fontFamily: "'Cinzel', serif",
          textAlign: "center"
        },
        {
          id: "el-2",
          type: "card",
          title: "⚡ Sebab-Sebab Perlawanan",
          text: "1. Monopoli perdagangan rempah yang merugikan rakyat.\n2. Campur tangan politik dalam suksesi takhta istana.\n3. Beban pajak yang sangat mencekik dan kerja rodi.\n4. Penghinaan terhadap norma adat dan agama leluhur.",
          top: "24%",
          left: "8%",
          width: "40%",
          background: "#FFF5F5",
          border: "2px solid #801616",
          color: "#2C1810"
        },
        {
          id: "el-3",
          type: "card",
          title: "🎯 Akibat & Konsekuensi",
          text: "1. Kerugian finansial dan militer yang amat parah bagi kolonial.\n2. Lahirnya taktik Benteng Stelsel dan Tanam Paksa.\n3. Runtuhnya hegemoni Portugis dan kebangkrutan VOC.\n4. Mengobarkan api persatuan nasional Indonesia.",
          top: "24%",
          left: "52%",
          width: "40%",
          background: "#F7FAF0",
          border: "2px solid #2F6F32",
          color: "#2C1810"
        }
      ]
    },
    {
      id: "jalannya-perlawanan",
      name: "Jalannya Perlawanan",
      desc: "Rangkaian pertempuran, strategi militer, dan dinamika medan perang.",
      background: "parchment",
      elements: [
        {
          id: "el-1",
          type: "title",
          text: "JALANNYA PERLAWANAN & STRATEGI PERANG",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#3A2010",
          fontSize: "24px",
          fontWeight: "800",
          fontFamily: "'Cinzel', serif",
          textAlign: "center"
        },
        {
          id: "el-2",
          type: "paragraph",
          text: "Perang Gerilya Semesta: Pasukan rakyat memanfaatkan keunggulan penguasaan medan perbukitan, hutan lebat, dan sungai-sungai besar untuk melakukan serangan kilat mendadak.",
          top: "24%",
          left: "10%",
          width: "80%",
          color: "#2C1810",
          fontSize: "16px",
          lineHeight: "1.6"
        },
        {
          id: "el-3",
          type: "paragraph",
          text: "Taktik Penjajah: Menggunakan politik adu domba (Devide et Impera), benteng stelsel, dan tipu muslihat undangan perundingan damai palsu untuk menangkap para pemimpin.",
          top: "50%",
          left: "10%",
          width: "80%",
          color: "#801616",
          fontSize: "16px",
          lineHeight: "1.6"
        }
      ]
    },
    {
      id: "dampak",
      name: "Dampak Perlawanan",
      desc: "Ulasan dampak politik, ekonomi, dan sosial bagi bangsa Indonesia.",
      background: "maroon",
      elements: [
        {
          id: "el-1",
          type: "title",
          text: "DAMPAK DAN PENGARUH BAGI NUSANTARA",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ECC94B",
          fontSize: "26px",
          fontWeight: "800",
          fontFamily: "'Cinzel', serif",
          textAlign: "center"
        },
        {
          id: "el-2",
          type: "card",
          title: "Dampak Politik",
          text: "Kekuasaan kesultanan-kesultanan tradisional mulai dibatasi dan diikat perjanjian kolonial.",
          top: "28%",
          left: "8%",
          width: "26%",
          background: "rgba(255,255,255,0.95)"
        },
        {
          id: "el-3",
          type: "card",
          title: "Dampak Ekonomi",
          text: "Belanda memeras kekayaan pribumi lewat Tanam Paksa untuk menutupi biaya perang.",
          top: "28%",
          left: "37%",
          width: "26%",
          background: "rgba(255,255,255,0.95)"
        },
        {
          id: "el-4",
          type: "card",
          title: "Dampak Kejuangan",
          text: "Menjadi warisan heroisme dan inspirasi persatuan nasional bagi generasi kemerdekaan 1945.",
          top: "28%",
          left: "66%",
          width: "26%",
          background: "rgba(255,255,255,0.95)"
        }
      ]
    },
    {
      id: "kesimpulan",
      name: "Kesimpulan",
      desc: "Rangkuman akhir dan refleksi pembelajaran sejarah.",
      background: "gold",
      elements: [
        {
          id: "el-1",
          type: "title",
          text: "REFLEKSI DAN KESIMPULAN BELAJAR",
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#3A2010",
          fontSize: "28px",
          fontWeight: "800",
          fontFamily: "'Cinzel', serif",
          textAlign: "center"
        },
        {
          id: "el-2",
          type: "paragraph",
          text: "1. Perlawanan sebelum abad ke-20 masih bersifat kedaerahan dan dipimpin oleh tokoh karismatik.\n\n2. Politik devide et impera berhasil memecah belah persatuan karena belum adanya rasa kebangsaan yang utuh.\n\n3. Pengorbanan para pahlawan adalah pondasi lahirnya tekad kebangkitan nasional pada awal abad ke-20.",
          top: "30%",
          left: "15%",
          width: "70%",
          color: "#2C1810",
          fontSize: "17px",
          lineHeight: "1.8",
          fontWeight: "500"
        },
        {
          id: "el-3",
          type: "quote",
          text: "\"Bangsa yang besar adalah bangsa yang menghargai jasa para pahlawannya.\" — Ir. Soekarno",
          top: "76%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#801616",
          fontSize: "16px",
          fontStyle: "italic",
          textAlign: "center",
          width: "80%"
        }
      ]
    }
  ]
};

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perlawanan Pribumi terhadap Kolonialisme | Media Pembelajaran Sejarah SMA/SMK Kelas XI</title>
  <meta name="description" content="Platform pembelajaran interaktif sejarah perlawanan rakyat Indonesia terhadap Portugis, VOC, dan Hindia Belanda untuk siswa SMA/SMK Kelas XI. Dilengkapi studio pembuat materi, kuis edukatif, peta interaktif, dan timeline.">
  
  <!-- Google Fonts: Cinzel, Playfair Display & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚔️</text></svg>">
  
  <!-- Open Graph / WhatsApp Preview Meta Tags -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Nusantara Bangkit - Media Pembelajaran Sejarah SMA/SMK Kelas XI">
  <meta property="og:description" content="Media Pembelajaran Interaktif: Perlawanan Pribumi terhadap Kolonialisme Portugis, VOC, dan Hindia Belanda. Dilengkapi Peta 3D Relief, Video Sejarah, Kuis, dan Integrasi Spreadsheet.">
  <meta property="og:image" content="assets/hero_perlawanan.jpg">
  
  <!-- Stylesheet Utama -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- =========================================================================
       NAVIGASI UTAMA (HEADER)
       ========================================================================= -->
  <header class="navbar-wrapper">
    <nav class="navbar" aria-label="Navigasi Utama">
      <div class="nav-brand" data-nav-target="beranda" onclick="navigateTo('beranda')">
        <div class="brand-emblem" aria-hidden="true">
          <!-- Emblem Benteng / Mahkota Kesultanan -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 20h20"></path>
            <path d="M5 20V8l3-2 4 3 4-3 3 2v12"></path>
            <path d="M9 14h6"></path>
            <path d="M10 20v-3a2 2 0 0 1 4 0v3"></path>
          </svg>
        </div>
        <div class="brand-text">
          <h1>NUSANTARA BANGKIT</h1>
          <p>Sejarah Perlawanan Pribumi • Kelas XI</p>
        </div>
      </div>

      <ul class="nav-menu" id="navMenu">
        <li>
          <a class="nav-link active" data-view="beranda" href="#beranda">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Beranda</span>
          </a>
        </li>
        <li>
          <a class="nav-link" data-view="materi" href="#materi">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <span>Materi</span>
          </a>
        </li>
        <li>
          <a class="nav-link" data-view="kuis" href="#kuis">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>Kuis</span>
          </a>
        </li>
        <li>
          <a class="nav-link" data-view="peta" href="#peta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
            <span>Peta</span>
          </a>
        </li>
        <li>
          <a class="nav-link" data-view="timeline" href="#timeline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Timeline</span>
          </a>
        </li>

        <!-- MENU KHUSUS GURU / ADMIN (Terkunci & Tersembunyi dari Siswa) -->
        <li class="admin-only-item">
          <a class="nav-link" data-view="buat-materi" href="#buat-materi">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            <span>✏️ Buat Materi</span>
          </a>
        </li>
        <li class="admin-only-item">
          <a class="nav-link" data-view="edit-kuis" href="#edit-kuis">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            <span>⚙️ Edit Kuis</span>
          </a>
        </li>
      </ul>

      <div class="nav-actions">
        <!-- Identitas Siswa Aktif -->
        <button class="btn-student-profile" id="btnStudentProfile" onclick="openStudentIdentityModal()" title="Klik untuk melengkapi/mengubah identitas Anda">
          <span style="font-size: 1.05rem;">👤</span>
          <span id="navStudentNameText">Isi Identitas Siswa</span>
        </button>

        <!-- Tombol Masuk Guru / Admin -->
        <button class="btn-admin-mode" id="btnAdminMode" onclick="handleAdminModeClick()" title="Akses Khusus Guru & Administrator">
          <span id="adminLockIcon">🔐</span>
          <span id="adminBtnText">Mode Guru</span>
        </button>

        <!-- Tombol Sinkronisasi Google Apps Script (Khusus Guru / Admin) -->
        <button class="btn-sync admin-only-item" id="btnOpenSyncModal" title="Pengaturan Sinkronisasi Google Apps Script / Google Sheets">
          <span class="sync-status-dot" id="syncStatusDot"></span>
          <span id="syncStatusText">Sheets</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
        </button>

        <button class="mobile-toggle" id="mobileMenuToggle" aria-label="Buka Menu Navigasi">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  </header>

  <!-- =========================================================================
       KONTEN UTAMA APLIKASI (VIEWS)
       ========================================================================= -->
  <main class="main-content">

    <!-- =======================================================================
         VIEW 1: HALAMAN BERANDA
         ======================================================================= -->
    <section class="view-section active" id="view-beranda">
      
      <!-- HERO BANNER MUSEUM SEJARAH DIGITAL -->
      <div class="hero-card">
        <div class="hero-media-wrapper">
          <img src="assets/hero_perlawanan.jpg" alt="Lukisan Pahlawan dan Perlawanan Pribumi Nusantara terhadap Penjajah" class="hero-img">
          <div class="hero-overlay">
            <div class="hero-badge">
              <span>🏛️ Museum Sejarah Digital • Kelas XI SMA/SMK</span>
            </div>
            <h1 class="hero-title">Perlawanan Pribumi terhadap Kolonialisme</h1>
            <p class="hero-subtitle">Belajar sejarah perjuangan rakyat Indonesia dengan cara yang lebih interaktif.</p>
            <div class="hero-cta-group">
              <button class="btn btn-primary" onclick="navigateTo('materi')">
                <span>📚</span>
                <span>Mulai Belajar</span>
              </button>
              <button class="btn btn-maroon" onclick="navigateTo('kuis')">
                <span>🎮</span>
                <span>Mainkan Kuis</span>
              </button>
              <button class="btn btn-gold" onclick="navigateTo('peta')" style="background: linear-gradient(135deg, #D4AF37, #AA820A); color: white; border: none;">
                <span>🗺️</span>
                <span>Peta Palagan</span>
              </button>
              <button class="btn btn-outline admin-only-item" onclick="navigateTo('buat-materi')">
                <span>✏️</span>
                <span>Buat Materi (Guru)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- STRIP STATISTIK PEMBELAJARAN -->
      <div class="stats-strip">
        <div class="stat-box">
          <div class="stat-icon">⚔️</div>
          <div>
            <div class="stat-num">13</div>
            <div class="stat-label">Palagan Perlawanan Nusantara</div>
          </div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">👑</div>
          <div>
            <div class="stat-num">3 Era</div>
            <div class="stat-label">Portugis, VOC, & Hindia Belanda</div>
          </div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">👤</div>
          <div>
            <div class="stat-num">15+</div>
            <div class="stat-label">Pahlawan & Pemimpin Agung</div>
          </div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">✨</div>
          <div>
            <div class="stat-num">100%</div>
            <div class="stat-label">Interaktif & Visual Bermakna</div>
          </div>
        </div>
      </div>

      <!-- TIGA KARTU KATEGORI ERA KOLONIALISME -->
      <div class="section-header">
        <span class="section-tag">Jelajahi Kronik Sejarah</span>
        <h2 class="section-title">Tiga Babak Perlawanan Pribumi</h2>
        <p class="section-desc">Pilihlah salah satu era di bawah ini untuk langsung mempelajari strategi, latar belakang, dan heroisme para leluhur bangsa.</p>
      </div>

      <div class="era-categories-grid">
        <!-- KATEGORI 1: PORTUGIS -->
        <article class="era-card" onclick="openMateriWithFilter('portugis')">
          <div class="era-card-media">
            <img src="assets/perlawanan_portugis.jpg" alt="Lukisan Sultan Baabullah Mengusir Portugis di Ternate" class="era-card-img">
            <span class="era-card-badge">Abad 16 (1511 – 1575 M)</span>
          </div>
          <div class="era-card-body">
            <h3 class="era-card-title">PORTUGIS</h3>
            <p class="era-card-period">Monopoli Rempah & Perang Benteng</p>
            <p class="era-card-desc">Kedatangan Portugis di Malaka dan Maluku memicu perlawanan sengit kesultanan-kesultanan maritim untuk merebut kembali hegemoni niaga dan kedaulatan tanah air.</p>
            <div class="era-topics-list">
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('ternate-portugis')">Ternate</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('demak-portugis')">Demak</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('aceh-portugis')">Aceh</span>
            </div>
            <div class="era-card-footer">
              <span style="font-weight: 700; color: var(--maroon);">Buka Materi Portugis (3 Topik) →</span>
            </div>
          </div>
        </article>

        <!-- KATEGORI 2: VOC -->
        <article class="era-card" onclick="openMateriWithFilter('voc')">
          <div class="era-card-media">
            <img src="assets/perlawanan_voc.jpg" alt="Lukisan Sultan Hasanuddin dan Sultan Agung Melawan VOC" class="era-card-img">
            <span class="era-card-badge">Abad 17 (1602 – 1799 M)</span>
          </div>
          <div class="era-card-body">
            <h3 class="era-card-title">VOC</h3>
            <p class="era-card-period">Hegemoni Batavia & Perang Makassar</p>
            <p class="era-card-desc">Serbuan akbar Mataram mengepung Batavia serta perang laut terhebat Sultan Hasanuddin di Makassar menolak cengkeraman monopoli serikat dagang Kompeni.</p>
            <div class="era-topics-list">
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('mataram-voc')">Mataram</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('hasanuddin-voc')">Sultan Hasanuddin</span>
            </div>
            <div class="era-card-footer">
              <span style="font-weight: 700; color: var(--maroon);">Buka Materi VOC (2 Topik) →</span>
            </div>
          </div>
        </article>

        <!-- KATEGORI 3: PEMERINTAH HINDIA BELANDA -->
        <article class="era-card" onclick="openMateriWithFilter('belanda')">
          <div class="era-card-media">
            <img src="assets/perlawanan_belanda.jpg" alt="Lukisan Pangeran Diponegoro, Pattimura, dan Pejuang Hindia Belanda" class="era-card-img">
            <span class="era-card-badge">Abad 19 – Awal Abad 20</span>
          </div>
          <div class="era-card-body">
            <h3 class="era-card-title">PEMERINTAH BELANDA</h3>
            <p class="era-card-period">Perang Semesta & Benteng Stelsel</p>
            <p class="era-card-desc">Gelombang perlawanan rakyat nusantara dari Sabang sampai Merauke yang menguras kas kerajaan kolonial dan memicu lahirnya heroisme tanpa akhir.</p>
            <div class="era-topics-list">
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('pattimura-maluku')">Pattimura</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('diponegoro-jawa')">Diponegoro</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('palembang-belanda')">Palembang</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('padri-sumbar')">Padri</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('perang-aceh')">Aceh</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('sisingamangaraja-toba')">Sisingamangaraja</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('bali-puputan')">Bali</span>
              <span class="topic-chip interactive" onclick="event.stopPropagation(); openMateriDetail('banjar-antasari')">Banjar</span>
            </div>
            <div class="era-card-footer">
              <span style="font-weight: 700; color: var(--maroon);">Buka Materi Pemerintah Belanda (8 Topik) →</span>
            </div>
          </div>
        </article>
      </div>

    </section>

    <!-- =======================================================================
         VIEW 2: HALAMAN MATERI LENGKAP (DAFTAR TOPIK 3 BAGIAN BESAR)
         ======================================================================= -->
    <section class="view-section" id="view-materi">
      <div class="section-header">
        <span class="section-tag">Kurikulum Sejarah Kelas XI</span>
        <h2 class="section-title">Pustaka Materi Perlawanan Pribumi</h2>
        <p class="section-desc">Materi dibagi menjadi tiga bagian besar. Klik kartu mana saja untuk membaca format terstruktur: Latar Belakang → Tokoh → Jalannya Perlawanan → Strategi → Akhir Perlawanan → Dampak.</p>
      </div>

      <!-- KONTROL FILTER & PENCARIAN -->
      <div class="materi-controls">
        <div class="materi-filters">
          <button class="filter-btn active" data-filter="all">Semua Era (13 Topik)</button>
          <button class="filter-btn" data-filter="portugis">🛡️ Portugis (3 Topik)</button>
          <button class="filter-btn" data-filter="voc">⚓ VOC (2 Topik)</button>
          <button class="filter-btn" data-filter="belanda">⚔️ Hindia Belanda (8 Topik)</button>
        </div>
        <div class="materi-search-box">
          <span class="search-icon">🔍</span>
          <input type="text" class="materi-search-input" id="materiSearchInput" placeholder="Cari tokoh, wilayah, atau benteng...">
        </div>
      </div>

      <!-- KONTEN MATERI (DIBAGI 3 BAGIAN BESAR) -->
      <div id="materiSectionsContainer">
        <!-- Rendered by app.js dengan struktur Bagian A, B, C -->
      </div>
    </section>

    <!-- =======================================================================
         VIEW 2B: DETAIL MATERI (INTERACTIVE READER DENGAN AUDIO & TABS)
         ======================================================================= -->
    <section class="view-section" id="view-materi-detail">
      <div class="materi-detail-view">
        <!-- HEADER DETAIL -->
        <div class="detail-hero-banner">
          <img src="assets/hero_perlawanan.jpg" id="detailHeroBg" class="detail-hero-bg" alt="Banner Topik">
          
          <button class="detail-nav-back" id="btnBackToMateri">
            <span>← Kembali ke Pustaka Materi</span>
          </button>

          <div class="detail-hero-content">
            <div class="detail-meta-tags">
              <span class="materi-era-badge voc" id="detailEraBadge">Perlawanan</span>
              <span id="detailRegion" style="font-size: 0.88rem; font-weight: 600; opacity: 0.9;">📍 Wilayah</span>
            </div>
            <h2 class="detail-title" id="detailTitle">Judul Materi</h2>
            <div style="font-size: 1.15rem; font-weight: 700; color: var(--gold-light);" id="detailHeroName">Tokoh Pahlawan</div>
            <p class="detail-hero-quote" id="detailQuote">"Kutipan Tokoh"</p>
          </div>
        </div>

        <!-- BAR KONTROL AUDIO NARATOR -->
        <div class="audio-narator-bar">
          <div class="audio-info">
            <span>🎧 Media Pendengaran Siswa:</span>
            <span style="color: var(--text-muted);">Dengarkan ringkasan materi dibacakan secara otomatis untuk mempermudah belajar.</span>
          </div>
          <div class="audio-controls" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-secondary" id="btnToggleNarator" style="padding: 0.45rem 1rem; font-size: 0.88rem;">
              <span>🔊</span>
              <span>Dengarkan Narasi Sejarah</span>
            </button>
            <button class="btn btn-maroon" id="btnWatchMateriVideo" style="padding: 0.45rem 1rem; font-size: 0.88rem;">
              <span>🎬</span>
              <span>Tonton Video YouTube</span>
            </button>
          </div>
        </div>

        <!-- TABS FORMAT 6 LANGKAH -->
        <div class="detail-format-tabs" role="tablist">
          <button class="format-tab-btn active" data-tab="latarBelakang">📜 1. Latar Belakang</button>
          <button class="format-tab-btn" data-tab="tokoh">👤 2. Tokoh</button>
          <button class="format-tab-btn" data-tab="jalannyaPerlawanan">⚔️ 3. Jalannya Perlawanan</button>
          <button class="format-tab-btn" data-tab="strategi">🎯 4. Strategi</button>
          <button class="format-tab-btn" data-tab="akhirPerlawanan">🏁 5. Akhir Perlawanan</button>
          <button class="format-tab-btn" data-tab="dampak">🌟 6. Dampak</button>
        </div>

        <!-- AREA KONTEN TAB & STEP NAVIGATION -->
        <div class="detail-tab-content-area" id="detailTabContentArea">
          <!-- Rendered by app.js -->
        </div>
      </div>
    </section>

    <!-- =======================================================================
         VIEW 3: FITUR "BUAT MATERI" (SLIDE STUDIO SEPERTI POWERPOINT SEDERHANA)
         ======================================================================= -->
    <section class="view-section" id="view-buat-materi">
      <div class="section-header">
        <span class="section-tag">Studio Presentasi Interaktif</span>
        <h2 class="section-title">Buat Materi Pembelajaran Mandiri</h2>
        <p class="section-desc">Guru dan siswa dapat menyusun lembar materi bergaya PowerPoint sederhana. Pilih template, tambahkan teks, gambar, ikon, atau bentuk, lalu geser dengan drag and drop.</p>
      </div>

      <div class="slide-studio-container">
        <!-- TOP TOOLBAR STUDIO -->
        <div class="studio-toolbar">
          <div class="studio-title-box">
            <span style="font-size: 1.2rem;">📁</span>
            <input type="text" class="slide-title-input" id="slideTitleInput" value="Materi Perlawanan Pribumi" title="Nama Dokumen Slide">
          </div>

          <div class="studio-actions">
            <button class="btn btn-secondary" id="btnOpenSavedModal" style="padding: 0.45rem 0.9rem; font-size: 0.85rem;" title="Buka Materi yang Pernah Disimpan">
              <span>📂 Buka Simpanan</span>
            </button>
            <button class="btn btn-secondary" id="btnAddSlide" style="padding: 0.45rem 0.9rem; font-size: 0.85rem;" title="Tambah Slide Kosong">
              <span>➕ Slide Baru</span>
            </button>
            <button class="btn btn-secondary" id="btnDuplicateSlide" style="padding: 0.45rem 0.9rem; font-size: 0.85rem;" title="Duplikasi Slide Aktif">
              <span>📋 Duplikasi</span>
            </button>
            <button class="btn btn-secondary" id="btnDeleteSlide" style="padding: 0.45rem 0.9rem; font-size: 0.85rem; color: #FFCDD2;" title="Hapus Slide Aktif">
              <span>🗑️ Hapus</span>
            </button>
            <button class="btn btn-primary" id="btnPreviewSlideShow" style="padding: 0.45rem 1.1rem; font-size: 0.85rem;" title="Lihat Tampilan Layar Penuh">
              <span>👁️ Preview</span>
            </button>
            <button class="btn btn-maroon" id="btnSaveStudio" style="padding: 0.45rem 1.1rem; font-size: 0.85rem;" title="Simpan ke Browser & Google Apps Script">
              <span>💾 Simpan Materi</span>
            </button>
          </div>
        </div>

        <!-- BAR PILIHAN 8 TEMPLATE CEPAT -->
        <div class="studio-templates-bar">
          <span style="font-size: 0.8rem; font-weight: 800; color: var(--maroon); align-self: center; white-space: nowrap;">Template Slide:</span>
          <button class="template-pill-btn" onclick="addSlideFromTemplate('cover')">+ Cover Materi</button>
          <button class="template-pill-btn" onclick="addSlideFromTemplate('profil-tokoh')">+ Profil Tokoh</button>
          <button class="template-pill-btn" onclick="addSlideFromTemplate('timeline')">+ Timeline</button>
          <button class="template-pill-btn" onclick="addSlideFromTemplate('peta-perlawanan')">+ Peta Perlawanan</button>
          <button class="template-pill-btn" onclick="addSlideFromTemplate('sebab-akibat')">+ Sebab dan Akibat</button>
          <button class="template-pill-btn" onclick="addSlideFromTemplate('jalannya-perlawanan')">+ Jalannya Perlawanan</button>
          <button class="template-pill-btn" onclick="addSlideFromTemplate('dampak')">+ Dampak</button>
          <button class="template-pill-btn" onclick="addSlideFromTemplate('kesimpulan')">+ Kesimpulan</button>
        </div>

        <!-- WORKSPACE 3-PANEL -->
        <div class="studio-workspace">
          <!-- PANEL KIRI: DAFTAR SLIDE THUMBNAIL -->
          <aside class="studio-left-panel">
            <div class="panel-header-title">Urutan Slide (Kanvas)</div>
            <div class="slide-thumb-list" id="slideThumbList">
              <!-- Rendered by app.js -->
            </div>
          </aside>

          <!-- PANEL TENGAH: KANVAS SLIDE 16:9 INTERAKTIF -->
          <main class="studio-center-panel">
            <div class="slide-canvas-viewport bg-parchment" id="slideCanvasViewport">
              <!-- Rendered by app.js -->
            </div>
            <div style="margin-top: 1rem; color: #E6DFD5; font-size: 0.82rem; display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center;">
              <span>💡 <b>Tips:</b> Klik dan seret (drag) elemen di dalam kanvas untuk memindahkannya.</span>
              <span>✏️ Klik elemen untuk mengatur teks, ukuran, atau warna di panel kanan.</span>
            </div>
          </main>

          <!-- PANEL KANAN: INSPEKTUR ELEMEN & TEMA -->
          <aside class="studio-right-panel">
            <div class="inspector-section">
              <div class="inspector-label">Tambah Elemen ke Slide</div>
              <div class="tools-btn-grid">
                <button class="tool-action-btn" onclick="addElementToActiveSlide('title')">
                  <span>🔤</span> Teks Judul
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('text')">
                  <span>📝</span> Paragraf
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('quote')">
                  <span>💬</span> Kutipan
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('badge')">
                  <span>🏷️</span> Lencana
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('image')">
                  <span>🖼️</span> Gambar
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('icon')">
                  <span>⭐</span> Ikon
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('shape')">
                  <span>⬛</span> Bentuk
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('timeline-box')">
                  <span>⏳</span> Timeline
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('map-stamp')">
                  <span>🗺️</span> Peta
                </button>
                <button class="tool-action-btn" onclick="addElementToActiveSlide('hero-card')">
                  <span>👤</span> Tokoh
                </button>
              </div>
            </div>

            <div class="inspector-section">
              <div class="inspector-label">Warna Background Slide</div>
              <div class="bg-presets-row">
                <div class="bg-preset-dot" style="background: #FDF9F0;" onclick="changeSlideBackground('parchment')" title="Parchment Krem"></div>
                <div class="bg-preset-dot" style="background: #801616;" onclick="changeSlideBackground('maroon')" title="Merah Marun Museum"></div>
                <div class="bg-preset-dot" style="background: #16243E;" onclick="changeSlideBackground('navy')" title="Biru Samudra Tua"></div>
                <div class="bg-preset-dot" style="background: #D4AF37;" onclick="changeSlideBackground('gold')" title="Emas Keagungan"></div>
                <div class="bg-preset-dot" style="background: #3A2010;" onclick="changeSlideBackground('wood')" title="Kayu Jati Kuno"></div>
              </div>
            </div>

            <div id="elementPropertiesContainer">
              <!-- Rendered by app.js saat elemen dipilih -->
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- =======================================================================
         VIEW 4: GAME EDUKATIF (KUIS PERLAWANAN NUSANTARA)
         ======================================================================= -->
    <section class="view-section" id="view-kuis">
      <div class="quiz-wrapper">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <span class="section-tag">Uji Pemahaman Siswa</span>
          <h2 class="section-title">Kuis Perlawanan Nusantara</h2>
          <p class="section-desc">Uji pengetahuan sejarah perjuangan pribumi melawan bangsa imperialis dengan menjawab soal-soal interaktif berikut ini.</p>
        </div>

        <!-- TOP BAR PROGRESS -->
        <div class="quiz-top-bar">
          <div class="quiz-header-info">
            <div class="quiz-title-badge">
              <span>🎮</span>
              <span>KUIS PERLAWANAN NUSANTARA</span>
            </div>
            <div class="quiz-counter" id="quizCounterText">Soal 1 dari 10</div>
          </div>
          <div class="quiz-progress-track">
            <div class="quiz-progress-bar" id="quizProgressBar"></div>
          </div>
        </div>

        <!-- AREA BERMAIN KUIS -->
        <div id="quizPlayArea">
          <div class="quiz-card">
            <!-- Media Ilustrasi Soal -->
            <div class="quiz-media-wrapper" id="quizImageWrapper">
              <img src="assets/hero_perlawanan.jpg" id="quizQuestionImg" class="quiz-media-img" alt="Ilustrasi Soal">
            </div>

            <!-- Teks Pertanyaan -->
            <h3 class="quiz-question-text" id="quizQuestionText">Pertanyaan sedang dimuat...</h3>

            <!-- Opsi Pilihan A, B, C, D -->
            <div class="quiz-options-list" id="quizOptionsList">
              <!-- Rendered by app.js -->
            </div>

            <!-- Kotak Penjelasan Jawaban (Muncul setelah memilih) -->
            <div class="quiz-explanation-box" id="quizExplanationBox">
              <div class="explanation-title">💡 Penjelasan Sejarah:</div>
              <p class="explanation-text" id="quizExplanationText">Penjelasan jawaban benar...</p>
            </div>

            <!-- Tombol Lanjut Soal -->
            <div class="quiz-footer-actions">
              <button class="btn btn-primary" id="btnNextQuestion" style="display: none;">
                <span>Lanjut ke Soal Berikutnya →</span>
              </button>
            </div>
          </div>
        </div>

        <!-- LAYAR HASIL SELESAI KUIS SESUAI PERSIS DENGAN FORMAT SOAL -->
        <div class="quiz-result-card" id="quizResultArea">
          <div class="result-emoji" id="resultEmoji">🎉</div>
          <h2 style="font-size: 2.2rem; color: var(--brown-deep); font-family: 'Cinzel', serif;">🎉 Kuis Selesai!</h2>
          <p id="resultPredicate" style="font-size: 1.15rem; color: var(--maroon); font-weight: 700; margin-top: 0.5rem;">Pakar Sejarah Nusantara</p>

          <div class="result-stats-row">
            <span class="result-stat-pill neutral" id="resultSkorText">Skor: 80/100</span>
            <span class="result-stat-pill correct" id="resultCorrectVal">Benar: 8</span>
            <span class="result-stat-pill wrong" id="resultWrongVal">Salah: 2</span>
            <span class="result-stat-pill neutral" id="resultNilaiText" style="background: #FFFDF0; border-color: var(--gold); font-weight: 800;">Nilai: 80</span>
          </div>

          <!-- FORM PENGIRIMAN NILAI KE GOOGLE SHEETS -->
          <div style="background: var(--bg-parchment-light); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.5rem; max-width: 480px; margin: 0 auto 2rem;">
            <h4 style="color: var(--brown-deep); margin-bottom: 0.5rem; font-size: 1rem;">📝 Kirim Nilai ke Rekap Guru:</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">Hasil kuis akan dicatat otomatis ke Google Spreadsheet yang terhubung.</p>
            <form id="studentScoreForm" style="display: flex; flex-direction: column; gap: 0.75rem;">
              <input type="text" class="form-input" id="studentNameInput" placeholder="Nama Lengkap Siswa" required>
              <input type="text" class="form-input" id="studentClassInput" placeholder="Kelas (Contoh: XI MIPA 1)" required>
              <button type="submit" class="btn btn-maroon" id="btnSubmitScore" style="padding: 0.6rem;">
                <span>Kirim Nilai ke Guru</span>
              </button>
              <div id="scoreSubmitStatus" style="font-size: 0.85rem; margin-top: 0.4rem;"></div>
            </form>
          </div>

          <div class="result-actions-row">
            <button class="btn btn-secondary" id="btnRestartQuiz">
              <span>🔄 Ulangi Kuis</span>
            </button>
            <button class="btn btn-primary" id="btnQuizToMateri">
              <span>📚 Pelajari Materi</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- =======================================================================
         VIEW 5: EDITOR KUIS (GURU DAPAT MENAMBAH & MENGEDIT SOAL)
         ======================================================================= -->
    <section class="view-section" id="view-edit-kuis">
      <div class="section-header">
        <span class="section-tag">Panel Guru Sejarah</span>
        <h2 class="section-title">✏️ Edit Kuis</h2>
        <p class="section-desc">Guru dapat menambah soal, menghapus soal, mengedit soal, mengedit pilihan A, B, C, D, menentukan jawaban benar, menambahkan penjelasan jawaban, dan mengatur jumlah soal.</p>
      </div>

      <div class="quiz-editor-container">
        <div class="editor-toolbar">
          <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
            <div style="font-weight: 700; color: var(--brown-deep);">
              Kumpulan Soal Aktif (<span id="totalQuestionsCountText">15</span> soal)
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <label for="quizSessionLimitSelect" style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);">Jumlah Soal per Kuis:</label>
              <select id="quizSessionLimitSelect" class="form-select" style="padding: 0.3rem 0.6rem; font-size: 0.85rem;">
                <option value="5">5 Soal</option>
                <option value="10" selected>10 Soal (Standar)</option>
                <option value="15">15 Soal</option>
                <option value="all">Semua Soal</option>
              </select>
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-gold" onclick="openStudentScoresModal()" style="background: linear-gradient(135deg, #10B981, #059669); color: white; border: none; font-weight: 700; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">
              <span>📊 Rekap Nilai Siswa</span>
            </button>
            <button class="btn btn-secondary" onclick="resetDefaultQuizQuestions()">
              <span>🔄 Reset Standar</span>
            </button>
            <button class="btn btn-secondary" onclick="addNewQuizQuestion()">
              <span>+ Tambah Soal</span>
            </button>
            <button class="btn btn-maroon" onclick="saveQuizQuestions()">
              <span>💾 Simpan Kuis</span>
            </button>
          </div>
        </div>

        <div class="editor-questions-list" id="editorQuestionsList">
          <!-- Rendered by app.js -->
        </div>
      </div>
    </section>

    <!-- =======================================================================
         VIEW 6: PETA SEJARAH INTERAKTIF NUSANTARA
         ======================================================================= -->
    <section class="view-section" id="view-peta">
      <div class="section-header">
        <span class="section-tag">Geografi Sejarah Nusantara</span>
        <h2 class="section-title">Peta Perlawanan</h2>
        <p class="section-desc">Peta Indonesia dengan titik wilayah perlawanan. Klik salah satu titik untuk menampilkan informasi singkat mengenai perlawanan tersebut.</p>
      </div>

      <div class="map-page-wrapper">
        <!-- VIEWPORT PETA 3D RELIEF NUSANTARA -->
        <div class="map-viewport-container">
          <!-- Backdrop Samudra & Dekorasi Bahari Kuno -->
          <svg class="map-ocean-backdrop" viewBox="0 0 1000 560" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="seaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(212, 175, 55, 0.06)" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="1000" height="560" fill="url(#seaGrid)"/>

            <!-- Kompas Kuno Nusantara -->
            <g transform="translate(80, 480) scale(0.65)" opacity="0.4">
              <circle cx="0" cy="0" r="50" fill="none" stroke="#D4AF37" stroke-width="2"/>
              <circle cx="0" cy="0" r="42" fill="none" stroke="rgba(212, 175, 55, 0.4)" stroke-width="1" stroke-dasharray="4,4"/>
              <path d="M 0 -60 L 15 0 L 0 60 L -15 0 Z" fill="#D4AF37"/>
              <path d="M -60 0 L 0 15 L 60 0 L 0 -15 Z" fill="#ECC94B"/>
              <text x="0" y="-68" fill="#FFF" font-size="16" font-family="'Cinzel', serif" text-anchor="middle" font-weight="bold">U</text>
            </g>

            <!-- Ilustrasi Kapal Layar Kuno Pinisi -->
            <g transform="translate(850, 75) scale(0.4)" opacity="0.35" fill="#D4AF37">
              <path d="M 0 50 C 50 70 120 70 180 50 C 140 100 40 100 0 50 Z"/>
              <path d="M 60 45 L 60 -40 L 10 -10 Z"/>
              <path d="M 120 45 L 120 -60 L 70 -25 Z"/>
            </g>
          </svg>

          <!-- STAGE PETA 3D RELIEF INDONESIA & PIN INTERAKTIF -->
          <div class="map-3d-stage">
            <img src="assets/peta_indonesia_3d_final.png" alt="Peta 3D Relief Indonesia" class="map-3d-img">
            
            <!-- Pin Interaktif Pahlawan & Daerah Perlawanan -->
            <div id="mapPinsContainer" class="map-pins-layer">
              <!-- Rendered by app.js -->
            </div>
          </div>
        </div>

        <!-- DRAWER INFORMASI TITIK PETA -->
        <div class="map-info-drawer" id="mapInfoDrawer">
          <!-- Rendered by app.js -->
        </div>
      </div>
    </section>

    <!-- =======================================================================
         VIEW 7: TIMELINE SEJARAH KRONOLOGIS
         ======================================================================= -->
    <section class="view-section" id="view-timeline">
      <div class="section-header">
        <span class="section-tag">Kronik Jejak Waktu</span>
        <h2 class="section-title">Timeline Sejarah</h2>
        <p class="section-desc">Menunjukkan perkembangan perlawanan secara kronologis. Klik kartu tahun/peristiwa di bawah ini untuk melihat detail lengkap perlawanan.</p>
      </div>

      <!-- FILTER TIMELINE -->
      <div class="materi-controls" style="justify-content: center; margin-bottom: 3rem;">
        <div class="materi-filters timeline-filters">
          <button class="filter-btn active" data-era="all">Semua Abad</button>
          <button class="filter-btn" data-era="portugis">Abad 16 (Portugis)</button>
          <button class="filter-btn" data-era="voc">Abad 17 (VOC)</button>
          <button class="filter-btn" data-era="belanda">Abad 19 – 20 (Hindia Belanda)</button>
        </div>
      </div>

      <!-- KONTEN TIMELINE -->
      <div class="timeline-container">
        <div class="timeline-axis-line"></div>
        <div id="timelineNodesContainer">
          <!-- Rendered by app.js -->
        </div>
      </div>
    </section>

  </main>

  <!-- =========================================================================
       MODAL DETAIL TIMELINE KRONOLOGIS (KETIKA KARTU TIMELINE DIKLIK)
       ========================================================================= -->
  <dialog id="timelineDetailModal" closedby="any" aria-labelledby="timelineModalTitle">
    <div class="modal-content-box timeline-modal-box">
      <div class="modal-header">
        <h3 class="modal-title" id="timelineModalTitle">Peristiwa Sejarah</h3>
        <button class="modal-close-btn" onclick="document.getElementById('timelineDetailModal').close()">&times;</button>
      </div>
      <div class="modal-body" id="timelineModalBody">
        <!-- Rendered by app.js -->
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="document.getElementById('timelineDetailModal').close()">Tutup</button>
        <button class="btn btn-maroon" id="btnTimelineToMateri">Buka Materi Terkait</button>
      </div>
    </div>
  </dialog>

  <!-- =========================================================================
       MODAL BUKA MATERI TERSIMPAN (SLIDE STUDIO)
       ========================================================================= -->
  <dialog id="savedMaterialsModal" closedby="any" aria-labelledby="savedMaterialsModalTitle">
    <div class="modal-content-box" style="width: 650px;">
      <div class="modal-header">
        <h3 class="modal-title" id="savedMaterialsModalTitle">📂 Daftar Materi Tersimpan</h3>
        <button class="modal-close-btn" onclick="document.getElementById('savedMaterialsModal').close()">&times;</button>
      </div>
      <div class="modal-body">
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
          Pilih salah satu materi presentasi yang pernah Anda simpan untuk diedit kembali, atau buat presentasi baru:
        </p>
        <div id="savedMaterialsListContainer" style="display: flex; flex-direction: column; gap: 0.75rem; max-height: 400px; overflow-y: auto;">
          <!-- Rendered by app.js -->
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="createNewPresentation()">➕ Buat Presentasi Baru</button>
        <button class="btn btn-outline" onclick="document.getElementById('savedMaterialsModal').close()" style="color: var(--text-primary);">Tutup</button>
      </div>
    </div>
  </dialog>

  <!-- =========================================================================
       MODAL PRESENTATION MODE (SLIDESHOW PENUH)
       ========================================================================= -->
  <dialog id="presentationModal" class="presentation-modal" closedby="any" aria-label="Mode Presentasi Layar Penuh">
    <!-- Tombol Tutup Cepat di Pojok Kanan Atas -->
    <button class="presentation-close-corner-btn" onclick="closePresentationMode()" title="Tutup Mode Presentasi (Esc)">
      &times;
    </button>
    <div class="presentation-stage">
      <div class="presentation-canvas" id="presentationCanvas">
        <!-- Rendered by app.js -->
      </div>
    </div>
    <div class="presentation-controls">
      <div style="font-weight: 700; font-size: 0.9rem;" id="presentationCounter">Slide 1 dari 1</div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="btn btn-secondary" onclick="prevPresentationSlide()" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;">
          <span>← Slide Sebelumnya</span>
        </button>
        <button class="btn btn-primary" onclick="nextPresentationSlide()" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;">
          <span>Slide Berikutnya →</span>
        </button>
      </div>
      <div>
        <button class="btn btn-outline" onclick="closePresentationMode()" style="padding: 0.4rem 1rem; font-size: 0.85rem; color: #FFF; border-color: rgba(255,255,255,0.4);">
          <span>✕ Tutup (Esc)</span>
        </button>
      </div>
    </div>
  </dialog>

  <!-- =========================================================================
       MODAL SINKRONISASI GOOGLE APPS SCRIPT
       ========================================================================= -->
  <dialog id="appsScriptModal" closedby="any" aria-labelledby="appsScriptModalTitle">
    <div class="modal-content-box">
      <div class="modal-header">
        <h3 class="modal-title" id="appsScriptModalTitle">☁️ Sinkronisasi Google Sheets (Apps Script)</h3>
        <button class="modal-close-btn" id="btnCloseSyncModal">&times;</button>
      </div>
      <div class="modal-body">
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">
          Website ini dilengkapi backend <b>Google Apps Script</b> sehingga seluruh materi slide, kumpulan soal kuis guru, serta rekap nilai siswa dapat disimpan langsung ke <b>Google Spreadsheet</b> secara gratis tanpa biaya server.
        </p>

        <div class="form-group" style="margin-bottom: 1.25rem;">
          <label class="form-label">URL Aplikasi Web Google Apps Script:</label>
          <input type="url" class="form-input" id="appsScriptUrlInput" value="https://script.google.com/macros/s/AKfycbyCKMMuf020J6ACpF5zSutnVh7_a02gIJ_ReHJMN8APLu5bk4PHm_7hxin6dQaVz_lRtg/exec" placeholder="https://script.google.com/macros/s/.../exec">
        </div>

        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
          <button class="btn btn-secondary" id="btnTestAppsScriptPing" style="flex: 1; padding: 0.5rem;">
            <span>🔍 Uji Koneksi</span>
          </button>
          <button class="btn btn-maroon" id="btnSaveAppsScriptUrl" style="flex: 1; padding: 0.5rem;">
            <span>💾 Simpan Pengaturan</span>
          </button>
        </div>

        <div id="syncPingResult" style="font-size: 0.88rem; margin-bottom: 1.5rem;"></div>

        <!-- Panduan Pemasangan Singkat -->
        <div style="background: var(--bg-parchment-light); border-left: 4px solid var(--gold); padding: 1rem; border-radius: 4px; font-size: 0.85rem; line-height: 1.6;">
          <b style="color: var(--brown-deep);">Petunjuk Singkat untuk Guru:</b>
          <ol style="margin-left: 1.25rem; margin-top: 0.4rem;">
            <li>Buka file <code>Code.gs</code> yang sudah disediakan di folder proyek ini.</li>
            <li>Buat Google Spreadsheet baru di Drive Anda, pilih menu <i>Ekstensi &gt; Apps Script</i>, lalu salin seluruh isi <code>Code.gs</code>.</li>
            <li>Klik <b>Deploy (Terapkan) &gt; New Deployment (Penerapan Baru)</b>, pilih Web App, atur akses ke <b>Anyone (Siapa Saja)</b>.</li>
            <li>Salin URL hasil deploy ke dalam kotak input di atas!</li>
          </ol>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="document.getElementById('appsScriptModal').close()">Selesai</button>
      </div>
    </div>
  </dialog>

  <!-- =========================================================================
       MODAL BIOSKOP VIDEO SEJARAH (YOUTUBE FULL MODAL)
       ========================================================================= -->
  <dialog id="mapVideoModal" closedby="any" aria-label="Bioskop Video Sejarah Pahlawan">
    <div class="modal-content-box map-video-modal-box">
      <div class="modal-header" style="background: #111827; border-bottom: 1px solid var(--border-gold);">
        <div>
          <span class="materi-era-badge voc" style="font-size: 0.75rem;">🎬 Bioskop Sejarah Nusantara</span>
          <h3 class="modal-title" id="mapVideoModalTitle" style="margin-top: 0.25rem; color: var(--gold-light);">Video Sejarah Pahlawan</h3>
        </div>
        <button class="modal-close-btn" onclick="closeMapVideoModal()" title="Tutup Video">&times;</button>
      </div>
      <div class="modal-body" style="padding: 1.25rem; background: #0b0f19;">
        <div class="map-cinema-video-wrapper">
          <iframe 
            id="cinemaVideoIframe" 
            src="" 
            title="Video Sejarah Pahlawan" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
        <div style="margin-top: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <p id="cinemaVideoSubtitle" style="color: var(--gold-light); font-size: 0.95rem; font-weight: 700; margin: 0;"></p>
            <p id="cinemaVideoSource" style="color: #94A3B8; font-size: 0.82rem; margin: 0.25rem 0 0 0;"></p>
          </div>
          <div style="display: flex; gap: 0.6rem;">
            <a id="cinemaYoutubeDirectBtn" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.45rem 0.9rem;">
              <span>🔗 Buka di YouTube</span>
            </a>
            <button class="btn btn-maroon" onclick="closeMapVideoModal()" style="font-size: 0.85rem; padding: 0.45rem 1.1rem;">
              <span>✕ Tutup Bioskop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </dialog>

  <!-- =========================================================================
       MODAL GANTI URL VIDEO YOUTUBE (GURU & SISWA)
       ========================================================================= -->
  <dialog id="changeVideoUrlModal" closedby="any" aria-labelledby="changeVideoUrlTitle">
    <div class="modal-content-box" style="width: 560px;">
      <div class="modal-header">
        <h3 class="modal-title" id="changeVideoUrlTitle">⚙️ Atur URL Video YouTube</h3>
        <button class="modal-close-btn" onclick="document.getElementById('changeVideoUrlModal').close()">&times;</button>
      </div>
      <div class="modal-body">
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">
          Anda dapat menyematkan video YouTube sejarah pilihan Anda untuk titik pahlawan ini (misal video animasi buatan sendiri, dokumenter TV, atau channel edukasi):
        </p>
        <input type="hidden" id="editVideoPointId">
        <div class="form-group" style="margin-bottom: 1rem;">
          <label class="form-label" id="editVideoHeroLabel">Tokoh Pahlawan: </label>
          <input type="url" class="form-input" id="editVideoUrlInput" placeholder="Contoh: https://www.youtube.com/watch?v=... atau https://youtu.be/...">
          <small style="color: var(--text-muted); display: block; margin-top: 0.35rem;">
            Mendukung link YouTube standar (<code>watch?v=...</code>), link singkat (<code>youtu.be/...</code>), maupun embed URL.
          </small>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline" onclick="resetVideoToDefault()" style="color: var(--maroon); border-color: var(--maroon); font-size: 0.85rem;">
          🔄 Reset Video Bawaan
        </button>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-secondary" onclick="document.getElementById('changeVideoUrlModal').close()">Batal</button>
          <button class="btn btn-maroon" onclick="saveCustomVideoUrl()">💾 Simpan Video</button>
        </div>
      </div>
    </div>
  </dialog>

  <!-- =========================================================================
       MODAL REKAP NILAI SISWA DARI GOOGLE SHEETS
       ========================================================================= -->
  <dialog id="studentScoresModal" closedby="any" aria-labelledby="studentScoresModalTitle">
    <div class="modal-content-box" style="width: 820px; max-width: 95vw;">
      <div class="modal-header" style="background: linear-gradient(135deg, #16243E, #1F3A60); color: white;">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span style="font-size: 1.5rem;">📊</span>
          <div>
            <h3 class="modal-title" id="studentScoresModalTitle" style="color: white; margin: 0;">Rekap Nilai Siswa Real-time</h3>
            <span style="font-size: 0.78rem; color: var(--gold-light);">Tersinkronisasi otomatis dengan Google Spreadsheet (Tab: Nilai_Siswa)</span>
          </div>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('studentScoresModal').close()" style="color: white;">&times;</button>
      </div>

      <div class="modal-body" style="padding: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem; background: var(--bg-parchment-light); padding: 0.85rem 1rem; border-radius: 8px; border: 1px solid var(--border-gold);">
          <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
            💡 <b>Catatan Guru:</b> Data nilai berikut disimpan langsung di tab <b style="color: var(--brown-deep);">"Nilai_Siswa"</b> pada Google Sheets Anda.
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary" onclick="loadStudentScores()" style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">
              <span>🔄 Segarkan Data</span>
            </button>
            <a href="https://docs.google.com/spreadsheets" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">
              <span>📂 Buka Sheets</span>
            </a>
          </div>
        </div>

        <div id="studentScoresTableContainer" style="min-height: 200px; max-height: 55vh; overflow-y: auto;">
          <!-- Loaded dynamically by app.js -->
        </div>
      </div>

      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <span id="studentScoresCountSummary" style="font-size: 0.85rem; color: var(--text-muted);">Memuat data...</span>
        <button class="btn btn-maroon" onclick="document.getElementById('studentScoresModal').close()">Tutup Rekap</button>
      </div>
    </div>
  </dialog>

  <!-- =========================================================================
       MODAL 1: FORM PENGISIAN IDENTITAS SISWA & LOGIN GURU (WAJIB DI AWAL)
       ========================================================================= -->
  <dialog id="studentIdentityModal" aria-labelledby="studentIdentityTitle">
    <div class="modal-content-box" style="width: 520px; max-width: 95vw; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.35);">
      <div class="modal-header" style="background: linear-gradient(135deg, #16243E, #23385E); color: white; padding: 1.25rem 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div id="studentIdentityIconBox" style="background: rgba(212, 175, 55, 0.2); border: 1px solid var(--gold); border-radius: 8px; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; font-weight: 800; color: var(--gold);">
            ID
          </div>
          <div>
            <h3 class="modal-title" id="studentIdentityTitle" style="color: white; margin: 0; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.5px;">Identitas Siswa</h3>
            <span id="studentIdentitySubtitle" style="font-size: 0.8rem; color: var(--gold-light);">Media Pembelajaran Sejarah Nusantara Kelas XI</span>
          </div>
        </div>
        <button class="modal-close-btn" id="btnCloseStudentModal" onclick="closeStudentModalSafe()" style="color: white; font-size: 1.4rem;" title="Tutup">&times;</button>
      </div>

      <!-- Tab Pilihan: Siswa atau Guru -->
      <div style="padding: 0.85rem 1.5rem 0.5rem 1.5rem; background: #F8FAFC; border-bottom: 1px solid #E2E8F0;">
        <div style="display: flex; background: #E2E8F0; border-radius: 8px; padding: 4px; gap: 4px;">
          <button type="button" id="tabRoleSiswa" class="role-tab-btn active" onclick="switchIdentityRole('siswa')" style="flex: 1; padding: 0.55rem 0.8rem; border: none; border-radius: 6px; font-weight: 700; font-size: 0.88rem; cursor: pointer; transition: all 0.2s; background: white; color: var(--brown-deep); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            👤 Masuk Siswa
          </button>
          <button type="button" id="tabRoleGuru" class="role-tab-btn" onclick="switchIdentityRole('guru')" style="flex: 1; padding: 0.55rem 0.8rem; border: none; border-radius: 6px; font-weight: 700; font-size: 0.88rem; cursor: pointer; transition: all 0.2s; background: transparent; color: var(--text-secondary);">
            🔐 Masuk Guru (Sandi)
          </button>
        </div>
      </div>

      <!-- BAGIAN 1: FORMULIR IDENTITAS SISWA -->
      <form id="studentIdentityForm" onsubmit="saveStudentIdentity(event)">
        <div class="modal-body" style="padding: 1.25rem 1.5rem;">
          <div style="background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 0.75rem 1rem; border-radius: 4px; font-size: 0.85rem; color: #1E40AF; margin-bottom: 1.25rem; line-height: 1.5;">
            👋 <b>Halo Siswa Pembelajar!</b> Silakan lengkapi identitas Anda di bawah ini agar riwayat belajar dan skor kuis sejarah Anda dapat tercatat langsung ke daftar nilai guru.
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="inputStudentFullName" style="font-weight: 700; color: var(--brown-deep);">Nama Lengkap Siswa: <span style="color: red;">*</span></label>
            <input type="text" class="form-input" id="inputStudentFullName" placeholder="Contoh: Muhammad Erwin" required style="font-size: 0.95rem;">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1.3fr 0.9fr; gap: 0.75rem; margin-bottom: 1rem;">
            <div class="form-group">
              <label class="form-label" for="selectStudentLevel" style="font-weight: 700; color: var(--brown-deep); font-size: 0.85rem;">Tingkat: <span style="color: red;">*</span></label>
              <select class="form-select" id="selectStudentLevel" required style="font-size: 0.88rem; padding: 0.5rem 0.6rem;">
                <option value="XI" selected>Kelas XI</option>
                <option value="X">Kelas X</option>
                <option value="XII">Kelas XII</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="selectStudentMajor" style="font-weight: 700; color: var(--brown-deep); font-size: 0.85rem;">Jurusan: <span style="color: red;">*</span></label>
              <select class="form-select" id="selectStudentMajor" required style="font-size: 0.88rem; padding: 0.5rem 0.6rem;">
                <option value="TPM" selected>TPM (Pemesinan)</option>
                <option value="TKRO">TKRO (Otomotif)</option>
                <option value="MPLB">MPLB (Perkantoran)</option>
                <option value="AKL">AKL (Akuntansi)</option>
                <option value="TJKT">TJKT (Jaringan Komputer)</option>
                <option value="PPLG">PPLG (Rekayasa Perangkat Lunak)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="selectStudentRombel" style="font-weight: 700; color: var(--brown-deep); font-size: 0.85rem;">Rombel: <span style="color: red;">*</span></label>
              <select class="form-select" id="selectStudentRombel" required style="font-size: 0.88rem; padding: 0.5rem 0.6rem;">
                <option value="1" selected>Rombel 1</option>
                <option value="2">Rombel 2</option>
                <option value="3">Rombel 3</option>
                <option value="4">Rombel 4</option>
              </select>
            </div>
          </div>

          <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">
            🔒 Data tersimpan otomatis di perangkat Anda dan digunakan untuk pengiriman nilai kuis ke Google Spreadsheet Guru.
          </div>
        </div>

        <div class="modal-footer" style="padding: 1rem 1.5rem; background: #F8FAFC; display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;">
          <button type="button" onclick="switchIdentityRole('guru')" style="background: none; border: none; color: var(--maroon); font-size: 0.85rem; font-weight: 700; cursor: pointer; text-decoration: underline;">
            👨‍🏫 Masuk sebagai Guru (Sandi) &raquo;
          </button>
          <button type="submit" class="btn btn-maroon" style="padding: 0.6rem 1.5rem; font-weight: 700; font-size: 0.95rem; border-radius: 8px;">
            <span>🚀 Simpan & Mulai Belajar</span>
          </button>
        </div>
      </form>

      <!-- BAGIAN 2: FORMULIR LOGIN GURU DENGAN SANDI -->
      <form id="guruIdentityLoginForm" onsubmit="submitModalGuruLogin(event)" style="display: none;">
        <div class="modal-body" style="padding: 1.5rem;">
          <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 0.85rem 1rem; border-radius: 6px; font-size: 0.85rem; color: #92400E; margin-bottom: 1.25rem; line-height: 1.5;">
            🔐 <b>Area Khusus Guru & Administrator</b><br>
            Siswa tidak dapat mengakses menu pengeditan materi, bank soal, dan sinkronisasi nilai. Masukkan sandi guru untuk membuka akses penuh.
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="inputModalGuruPassword" style="font-weight: 700; color: var(--brown-deep); display: flex; justify-content: space-between; align-items: center;">
              <span>Sandi Guru: <span style="color: red;">*</span></span>
              <span style="font-weight: 600; font-size: 0.78rem; color: var(--maroon); background: #FEE2E2; padding: 2px 8px; border-radius: 4px;">Sandi: 010901</span>
            </label>
            <div style="position: relative;">
              <input type="password" class="form-input" id="inputModalGuruPassword" placeholder="Masukkan sandi guru (010901)" required style="padding-right: 42px; font-size: 1.05rem; letter-spacing: 2px;">
              <button type="button" onclick="togglePasswordVisibility('inputModalGuruPassword')" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1.1rem;" title="Lihat Sandi">👁️</button>
            </div>
            <div id="modalGuruErrorMsg" style="color: var(--danger); font-size: 0.84rem; margin-top: 0.5rem; display: none; font-weight: 700;"></div>
          </div>

          <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; background: #F1F5F9; padding: 0.65rem 0.85rem; border-radius: 6px;">
            🛡️ Masukkan sandi <b>010901</b> untuk membuka fitur Buat Materi Baru, Edit Bank Soal Kuis, Rekap Nilai Siswa, dan Pengaturan Spreadsheet Guru.
          </div>
        </div>

        <div class="modal-footer" style="padding: 1rem 1.5rem; background: #F8FAFC; display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;">
          <button type="button" onclick="switchIdentityRole('siswa')" style="background: none; border: none; color: var(--text-secondary); font-size: 0.85rem; font-weight: 600; cursor: pointer;">
            &laquo; Kembali ke Mode Siswa
          </button>
          <button type="submit" class="btn btn-maroon" style="padding: 0.6rem 1.5rem; font-weight: 700; font-size: 0.95rem; border-radius: 8px;">
            <span>🔓 Buka Kunci Guru</span>
          </button>
        </div>
      </form>
    </div>
  </dialog>

  <!-- =========================================================================
       MODAL 2: LOGIN AKSES GURU / ADMIN DENGAN PASSWORD
       ========================================================================= -->
  <dialog id="adminLoginModal" aria-labelledby="adminLoginTitle">
    <div class="modal-content-box" style="width: 440px; max-width: 95vw; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.35);">
      <div class="modal-header" style="background: linear-gradient(135deg, #801616, #991B1B); color: white; padding: 1.25rem 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="background: rgba(255, 255, 255, 0.2); border-radius: 8px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
            🔐
          </div>
          <div>
            <h3 class="modal-title" id="adminLoginTitle" style="color: white; margin: 0; font-size: 1.15rem;">Akses Guru / Admin</h3>
            <span style="font-size: 0.78rem; color: var(--gold-light);">Kelola Materi, Bank Soal, dan Rekap Nilai</span>
          </div>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('adminLoginModal').close()" style="color: white; font-size: 1.4rem;" title="Tutup">&times;</button>
      </div>

      <form id="adminLoginForm" onsubmit="submitAdminLogin(event)">
        <div class="modal-body" style="padding: 1.5rem;">
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
            Menu pengeditan dilindungi agar siswa tidak dapat mengotak-atik materi, soal, dan database. Silakan masukkan sandi khusus guru:
          </p>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label" for="inputAdminPassword" style="font-weight: 700; color: var(--brown-deep);">Sandi Guru / Admin:</label>
            <div style="position: relative;">
              <input type="password" class="form-input" id="inputAdminPassword" placeholder="Masukkan sandi guru" required style="padding-right: 40px; font-size: 0.95rem; letter-spacing: 2px;">
              <button type="button" onclick="togglePasswordVisibility('inputAdminPassword')" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1rem;" title="Lihat Sandi">👁️</button>
            </div>
            <div id="adminLoginError" style="color: var(--danger); font-size: 0.82rem; margin-top: 0.5rem; display: none; font-weight: 600;"></div>
          </div>

          <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 0.65rem 0.85rem; border-radius: 4px; font-size: 0.8rem; color: #92400E; line-height: 1.4;">
            🔒 <i>Hanya untuk Guru & Administrator yang memiliki sandi resmi.</i>
          </div>
        </div>

        <div class="modal-footer" style="padding: 1rem 1.5rem; background: #F8FAFC; display: flex; justify-content: space-between; align-items: center;">
          <button type="button" class="btn btn-secondary" onclick="document.getElementById('adminLoginModal').close()">Batal</button>
          <button type="submit" class="btn btn-maroon" style="padding: 0.55rem 1.3rem; font-weight: 700;">
            <span>🔓 Buka Kunci Guru</span>
          </button>
        </div>
      </form>
    </div>
  </dialog>

  <!-- =========================================================================
       FOOTER
       ========================================================================= -->
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>NUSANTARA BANGKIT</h3>
        <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">
          Media Pembelajaran Sejarah Interaktif untuk Siswa SMA/SMK Kelas XI. Mengangkat tema <b>Perlawanan Pribumi terhadap Kolonialisme</b> dengan semangat patriotisme, kearifan sejarah, dan teknologi pembelajaran modern.
        </p>
        <p style="font-size: 0.85rem; color: var(--gold-light);">
          Dirancang untuk pembelajaran sejarah yang menyenangkan, bernilai, dan berdaya guna.
        </p>
      </div>

      <div class="footer-links">
        <h4>Menu Pembelajaran</h4>
        <ul>
          <li><a href="#beranda" onclick="navigateTo('beranda')">Beranda</a></li>
          <li><a href="#materi" onclick="navigateTo('materi')">Pustaka Materi</a></li>
          <li><a href="#kuis" onclick="navigateTo('kuis')">Kuis Nusantara</a></li>
          <li class="admin-only-item"><a href="#buat-materi" onclick="navigateTo('buat-materi')">Buat Slide Materi (Guru)</a></li>
          <li class="admin-only-item"><a href="#edit-kuis" onclick="navigateTo('edit-kuis')">Editor Soal Kuis (Guru)</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Eksplorasi</h4>
        <ul>
          <li><a href="#peta" onclick="navigateTo('peta')">Peta Palagan Nusantara</a></li>
          <li><a href="#timeline" onclick="navigateTo('timeline')">Timeline Kronologis</a></li>
          <li class="admin-only-item"><a href="#appsScriptModal" onclick="document.getElementById('appsScriptModal').showModal()">Integrasi Spreadsheet</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Nusantara Bangkit — Media Pembelajaran Sejarah Interaktif SMA/SMK Kelas XI • Kurikulum Nasional</p>
    </div>
  </footer>

  <!-- Script Data & Logika Aplikasi -->
  <script src="data.js"></script>
  <script src="app.js"></script>
</body>
</html>
