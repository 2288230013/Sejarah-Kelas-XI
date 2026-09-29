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
