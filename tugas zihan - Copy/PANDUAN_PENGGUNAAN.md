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
