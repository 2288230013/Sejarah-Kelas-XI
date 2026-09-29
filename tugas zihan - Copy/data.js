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
