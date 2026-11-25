const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const DATA_BUKU_AWAL = [
  {
    id: "BK-001",
    judul: "Biologi SMA/MA Kelas XI (Kurikulum Merdeka)",
    pengarang: "Bambang Haryanto, M.Si.",
    penerbit: "Penerbit Erlangga",
    kotaTerbit: "Jakarta",
    tahun: 2023,
    edisi: "Edisi Revisi Terbaru",
    isbn: "978-602-298-741-2",
    kategori: "Buku Pelajaran",
    kelas: "Kelas XI SMA",
    lokasiRak: "Rak Sains B-01 (Baris 2)",
    gedung: "Gedung Perpustakaan SMA Lt. 2",
    halaman: 348,
    bahasa: "Bahasa Indonesia",
    stok: 7,
    totalEksemplar: 15,
    deskripsi:
      "Buku teks pelajaran Biologi kelas XI SMA ini disusun berdasarkan Capaian Pembelajaran Kurikulum Merdeka. Membantu siswa memahami struktur sel, jaringan hewan dan tumbuhan, sistem organ tubuh manusia (sirkulasi, pencernaan, respirasi, ekskresi), serta keterkaitan bioproses dengan kesehatan tubuh.",
    babMateri: JSON.stringify([
      "Bab 1: Menjelajah Sel & Mikroskopis",
      "Bab 2: Struktur & Fungsi Jaringan Tumbuhan",
      "Bab 3: Struktur & Fungsi Jaringan Hewan",
      "Bab 4: Sistem Sirkulasi Darah & Imunologi",
      "Bab 5: Sistem Pencernaan & Nutrisi Remaja",
      "Bab 6: Sistem Ekskresi & Regulasi Tubuh",
    ]),
  },
  {
    id: "BK-002",
    judul: "Matematika Tingkat Lanjut SMA Kelas XII",
    pengarang: "Dr. Suparman, M.Pd.",
    penerbit: "Pusat Perbukuan Kemendikbudristek",
    kotaTerbit: "Jakarta Pusat",
    tahun: 2024,
    edisi: "Cetakan Ke-1",
    isbn: "978-602-244-890-5",
    kategori: "Buku Pelajaran",
    kelas: "Kelas XII SMA",
    lokasiRak: "Rak Mat C-03 (Baris 1)",
    gedung: "Gedung Perpustakaan SMA Lt. 2",
    halaman: 290,
    bahasa: "Bahasa Indonesia",
    stok: 0, // STOK KOSONG (Warna Merah di UI)
    totalEksemplar: 10,
    deskripsi:
      "Buku referensi Matematika Lanjutan untuk siswa peminatan MIPA kelas XII SMA. Berisi eksplorasi mendalam kalkulus diferensial dan integral lanjutan, geometri ruang dimensi tiga, vektor pada bidang dan ruang, serta matriks aljabar linier.",
    babMateri: JSON.stringify([
      "Bab 1: Vektor & Operasi Aljabar Ruang",
      "Bab 2: Matriks & Sistem Persamaan Linier",
      "Bab 3: Limit Fungsi Trigonometri",
      "Bab 4: Turunan Fungsi Tingkat Lanjut",
      "Bab 5: Integral Tak Tentu & Luas Daerah",
    ]),
  },
  {
    id: "BK-003",
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    penerbit: "Bentang Pustaka",
    kotaTerbit: "Yogyakarta",
    tahun: 2008,
    edisi: "Cetakan Ke-34",
    isbn: "978-979-3062-79-2",
    kategori: "Fiksi & Sastra",
    kelas: "Umum SMA (Semua Jenjang)",
    lokasiRak: "Rak Novel F-02 (Baris 3)",
    gedung: "Gedung Perpustakaan SMA Lt. 1 (Pojok Baca)",
    halaman: 529,
    bahasa: "Bahasa Indonesia",
    stok: 4,
    totalEksemplar: 8,
    deskripsi:
      "Novel sastra Indonesia legendaris yang menceritakan kegigihan sepuluh anak di Belitong dalam memperjuangkan hak pendidikan di tengah keterbatasan fasilitas sekolah. Penuh dengan nilai persahabatan, ketulusan guru, dan impian masa depan.",
    babMateri: JSON.stringify([
      "Bagian I: Sepuluh Murid Baru SD Muhammadiyah",
      "Bagian II: Sang Pemimpi & Kecerdasan Lintang",
      "Bagian III: Cerdas Cermat yang Bersejarah",
      "Bagian IV: Realitas Hidup & Jalan Takdir",
    ]),
  },
  {
    id: "BK-004",
    judul: "Master Bedah Soal UTBK & SNBT 2026",
    pengarang: "Tim Tentor Edukasi",
    penerbit: "Genta Smart Publisher",
    kotaTerbit: "Surabaya",
    tahun: 2025,
    edisi: "Edisi Platinum 2026",
    isbn: "978-623-6637-88-9",
    kategori: "Referensi & UTBK",
    kelas: "Kelas XII SMA",
    lokasiRak: "Rak Ref UTBK-05 (Baris 1)",
    gedung: "Gedung Perpustakaan SMA Lt. 2 (Ruang Referensi)",
    halaman: 640,
    bahasa: "Bahasa Indonesia & Inggris",
    stok: 0, // STOK KOSONG (Warna Merah di UI)
    totalEksemplar: 12,
    deskripsi:
      "Panduan lengkap persiapan menembus Perguruan Tinggi Negeri impian melalui jalur SNBT. Dilengkapi kupas tuntas Tes Potensi Skolastik (TPS), Penalaran Umum, Pengetahuan Kuantitatif, Pemahaman Bacaan, Literasi Bahasa Indonesia, serta Literasi Bahasa Inggris.",
    babMateri: JSON.stringify([
      "Modul 1: Kemampuan Penalaran Umum & Logika",
      "Modul 2: Pengetahuan & Pemahaman Umum",
      "Modul 3: Kemampuan Memahami Bacaan & Menulis",
      "Modul 4: Pengetahuan Kuantitatif & Trik Cepat",
      "Modul 5: Literasi Bahasa Indonesia & Bahasa Inggris",
      "Modul 6: Paket Tryout Prediksi Terakurat SNBT",
    ]),
  },
  {
    id: "BK-005",
    judul: "Fisika Terapan SMA: Mekanika & Termodinamika",
    pengarang: "Drs. Marthen Kanginan",
    penerbit: "Yrama Widya",
    kotaTerbit: "Bandung",
    tahun: 2022,
    edisi: "Edisi Ke-3",
    isbn: "978-602-374-450-1",
    kategori: "Buku Pelajaran",
    kelas: "Kelas X SMA",
    lokasiRak: "Rak Sains B-04 (Baris 2)",
    gedung: "Gedung Perpustakaan SMA Lt. 2",
    halaman: 412,
    bahasa: "Bahasa Indonesia",
    stok: 5,
    totalEksemplar: 10,
    deskripsi:
      "Buku panduan teori dan praktikum fisika terapan untuk mengasah keterampilan berpikir analitis siswa. Membahas besaran dan pengukuran, kinematika gerak lurus dan melingkar, dinamika hukum Newton, energi mekanik, momentum, hingga termodinamika dasar.",
    babMateri: JSON.stringify([
      "Bab 1: Pengukuran & Ketidakpastian Eksperimen",
      "Bab 2: Kinematika Partikel & Gerak Parabola",
      "Bab 3: Dinamika Gerak & Hukum-Hukum Newton",
      "Bab 4: Usaha, Energi, & Hukum Kekekalan Energi",
      "Bab 5: Momentum, Impuls, & Tumbukan",
      "Bab 6: Teori Kinetik Gas & Termodinamika",
    ]),
  },
  {
    id: "BK-006",
    judul: "Bumi Manusia",
    pengarang: "Pramoedya Ananta Toer",
    penerbit: "Lentera Dipantara",
    kotaTerbit: "Jakarta",
    tahun: 2005,
    edisi: "Cetakan Ke-21",
    isbn: "978-979-97312-3-4",
    kategori: "Fiksi & Sastra",
    kelas: "Umum SMA (Semua Jenjang)",
    lokasiRak: "Rak Sastra F-01 (Baris 1)",
    gedung: "Gedung Perpustakaan SMA Lt. 1",
    halaman: 535,
    bahasa: "Bahasa Indonesia",
    stok: 0, // STOK KOSONG (Warna Merah di UI)
    totalEksemplar: 6,
    deskripsi:
      "Karya monumental sastra Indonesia bagian pertama dari Tetralogi Buru. Mengisahkan kehidupan Minke, seorang pribumi terpelajar di HBS Surabaya era akhir abad ke-19, serta hubungannya dengan Annelies Mellema dan Nyai Ontosoroh dalam menghadapi ketidakadilan hukum kolonial.",
    babMateri: JSON.stringify([
      "Bagian I: Perjumpaan di Wonokromo",
      "Bagian II: Sosok Nyai Ontosoroh yang Mandiri",
      "Bagian III: Minke & Dunia Jurnalistik Pribumi",
      "Bagian IV: Pengadilan Putih & Perlawanan Moral",
    ]),
  },
  {
    id: "BK-007",
    judul: "Sejarah Indonesia Modern 1800-2024",
    pengarang: "M.C. Ricklefs",
    penerbit: "Serambi Ilmu Semesta",
    kotaTerbit: "Jakarta",
    tahun: 2021,
    edisi: "Edisi Pemutakhiran",
    isbn: "978-979-024-115-2",
    kategori: "Sejarah & Sosial",
    kelas: "Umum SMA",
    lokasiRak: "Rak IPS S-02 (Baris 3)",
    gedung: "Gedung Perpustakaan SMA Lt. 2",
    halaman: 720,
    bahasa: "Bahasa Indonesia",
    stok: 3,
    totalEksemplar: 6,
    deskripsi:
      "Rujukan ilmiah sejarah terlengkap yang merekam perjalanan bangsa Indonesia dari keruntuhan VOC, Perang Diponegoro, politik etis, pergerakan nasional, pendudukan Jepang, proklamasi kemerdekaan, era Orde Lama, Orde Baru, hingga era Reformasi.",
    babMateri: JSON.stringify([
      "Bab 1: Runtuhnya VOC & Tatanan Kolonial Hindia Belanda",
      "Bab 2: Kebangkitan Nasional & Lahirnya Kaum Terpelajar",
      "Bab 3: Masa Pendudukan Jepang & Menjelang Proklamasi",
      "Bab 4: Perang Kemerdekaan & Diplomasi Kedaulatan",
      "Bab 5: Dinamika Politik Indonesia Pasca Kemerdekaan",
    ]),
  },
  {
    id: "BK-008",
    judul: "Kimia Konseptual SMA Kelas X",
    pengarang: "Unggul Sudarmo",
    penerbit: "Erlangga",
    kotaTerbit: "Jakarta",
    tahun: 2023,
    edisi: "Kurikulum Merdeka",
    isbn: "978-602-434-219-8",
    kategori: "Buku Pelajaran",
    kelas: "Kelas X SMA",
    lokasiRak: "Rak Sains B-02 (Baris 1)",
    gedung: "Gedung Perpustakaan SMA Lt. 2",
    halaman: 310,
    bahasa: "Bahasa Indonesia",
    stok: 9,
    totalEksemplar: 15,
    deskripsi:
      "Membahas dasar-dasar ilmu kimia dengan pendekatan konseptual dan aplikasi kehidupan sehari-hari. Mulai dari metode ilmiah laboratorium, struktur atom, konfigurasi elektron, sistem periodik unsur, ikatan kimia, hingga stoikiometri perhitungan kimia sederhana.",
    babMateri: JSON.stringify([
      "Bab 1: Kimia Hijau dalam Pembangunan Berkelanjutan",
      "Bab 2: Model & Perkembangan Teori Atom",
      "Bab 3: Tabel Periodik & Sifat Keperiodikan Unsur",
      "Bab 4: Ikatan Kimia (Ionik, Kovalen, & Logam)",
      "Bab 5: Hukum Dasar Kimia & Perhitungan Reaksi",
    ]),
  },
];

async function main() {
  console.log("Memulai proses seeding database perpustakaan...");

  for (const item of DATA_BUKU_AWAL) {
    await prisma.buku.upsert({
      where: { id: item.id },
      update: item,
      create: item,
    });
    console.log(`✓ Buku berhasil disimpan ke database: [${item.id}] ${item.judul}`);
  }

  console.log("Seeding database selesai dengan sukses!");
}

main()
  .catch((e) => {
    console.error("Gagal melakukan seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
