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
