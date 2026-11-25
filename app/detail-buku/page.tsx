"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition, Suspense } from "react";
import { ajukanPeminjamanBuku } from "./actions";
import "./page.css";

interface DetailBukuItem {
  id: string;
  judul: string;
  pengarang: string;
  penerbit: string;
  kotaTerbit: string;
  tahun: number;
  edisi: string;
  isbn: string;
  kategori: string;
  kelas: string;
  lokasiRak: string;
  gedung: string;
  halaman: number;
  bahasa: string;
  stok: number;
  totalEksemplar: number;
  deskripsi: string;
  babMateri: string[];
}

const DATABASE_BUKU: Record<string, DetailBukuItem> = {
  "BK-001": {
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
    babMateri: [
      "Bab 1: Menjelajah Sel & Mikroskopis",
      "Bab 2: Struktur & Fungsi Jaringan Tumbuhan",
      "Bab 3: Struktur & Fungsi Jaringan Hewan",
      "Bab 4: Sistem Sirkulasi Darah & Imunologi",
      "Bab 5: Sistem Pencernaan & Nutrisi Remaja",
      "Bab 6: Sistem Ekskresi & Regulasi Tubuh",
    ],
  },
  "BK-002": {
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
    stok: 0, // STOK KOSONG
    totalEksemplar: 10,
    deskripsi:
      "Buku referensi Matematika Lanjutan untuk siswa peminatan MIPA kelas XII SMA. Berisi eksplorasi mendalam kalkulus diferensial dan integral lanjutan, geometri ruang dimensi tiga, vektor pada bidang dan ruang, serta matriks aljabar linier.",
    babMateri: [
      "Bab 1: Vektor & Operasi Aljabar Ruang",
      "Bab 2: Matriks & Sistem Persamaan Linier",
      "Bab 3: Limit Fungsi Trigonometri",
      "Bab 4: Turunan Fungsi Tingkat Lanjut",
      "Bab 5: Integral Tak Tentu & Luas Daerah",
    ],
  },
  "BK-003": {
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
    babMateri: [
      "Bagian I: Sepuluh Murid Baru SD Muhammadiyah",
      "Bagian II: Sang Pemimpi & Kecerdasan Lintang",
      "Bagian III: Cerdas Cermat yang Bersejarah",
      "Bagian IV: Realitas Hidup & Jalan Takdir",
    ],
  },
  "BK-004": {
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
    stok: 0, // STOK KOSONG
    totalEksemplar: 12,
    deskripsi:
      "Panduan lengkap persiapan menembus Perguruan Tinggi Negeri impian melalui jalur SNBT. Dilengkapi kupas tuntas Tes Potensi Skolastik (TPS), Penalaran Umum, Pengetahuan Kuantitatif, Pemahaman Bacaan, Literasi Bahasa Indonesia, serta Literasi Bahasa Inggris.",
    babMateri: [
      "Modul 1: Kemampuan Penalaran Umum & Logika",
      "Modul 2: Pengetahuan & Pemahaman Umum",
      "Modul 3: Kemampuan Memahami Bacaan & Menulis",
      "Modul 4: Pengetahuan Kuantitatif & Trik Cepat",
      "Modul 5: Literasi Bahasa Indonesia & Bahasa Inggris",
      "Modul 6: Paket Tryout Prediksi Terakurat SNBT",
    ],
  },
  "BK-005": {
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
    babMateri: [
      "Bab 1: Pengukuran & Ketidakpastian Eksperimen",
      "Bab 2: Kinematika Partikel & Gerak Parabola",
      "Bab 3: Dinamika Gerak & Hukum-Hukum Newton",
      "Bab 4: Usaha, Energi, & Hukum Kekekalan Energi",
      "Bab 5: Momentum, Impuls, & Tumbukan",
      "Bab 6: Teori Kinetik Gas & Termodinamika",
    ],
  },
  "BK-006": {
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
    stok: 0, // STOK KOSONG
    totalEksemplar: 6,
    deskripsi:
      "Karya monumental sastra Indonesia bagian pertama dari Tetralogi Buru. Mengisahkan kehidupan Minke, seorang pribumi terpelajar di HBS Surabaya era akhir abad ke-19, serta hubungannya dengan Annelies Mellema dan Nyai Ontosoroh dalam menghadapi ketidakadilan hukum kolonial.",
    babMateri: [
      "Bagian I: Perjumpaan di Wonokromo",
      "Bagian II: Sosok Nyai Ontosoroh yang Mandiri",
      "Bagian III: Minke & Dunia Jurnalistik Pribumi",
      "Bagian IV: Pengadilan Putih & Perlawanan Moral",
    ],
  },
  "BK-007": {
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
    babMateri: [
      "Bab 1: Runtuhnya VOC & Tatanan Kolonial Hindia Belanda",
      "Bab 2: Kebangkitan Nasional & Lahirnya Kaum Terpelajar",
      "Bab 3: Masa Pendudukan Jepang & Menjelang Proklamasi",
      "Bab 4: Perang Kemerdekaan & Diplomasi Kedaulatan",
      "Bab 5: Dinamika Politik Indonesia Pasca Kemerdekaan",
    ],
  },
  "BK-008": {
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
    babMateri: [
      "Bab 1: Kimia Hijau dalam Pembangunan Berkelanjutan",
      "Bab 2: Model & Perkembangan Teori Atom",
      "Bab 3: Tabel Periodik & Sifat Keperiodikan Unsur",
      "Bab 4: Ikatan Kimia (Ionik, Kovalen, & Logam)",
      "Bab 5: Hukum Dasar Kimia & Perhitungan Reaksi",
    ],
  },
};

function DetailBukuContent() {
  const searchParams = useSearchParams();
  const idBuku = searchParams.get("id") || "BK-001";

  const [tampilkanModalPinjam, setTampilkanModalPinjam] = useState(false);
  const [namaPeminjam, setNamaPeminjam] = useState("");
  const [nisnPeminjam, setNisnPeminjam] = useState("");
  const [kelasPeminjam, setKelasPeminjam] = useState("X-1");
  const [berhasilPinjam, setBerhasilPinjam] = useState(false);
  const [pesanErrorPinjam, setPesanErrorPinjam] = useState<string | null>(null);
  const [isPendingPinjam, startTransitionPinjam] = useTransition();

  // Ambil data buku dari database berdasarkan ID
  const buku: DetailBukuItem =
    DATABASE_BUKU[idBuku] || DATABASE_BUKU["BK-001"];

  const [stokLive, setStokLive] = useState<number>(buku.stok);

  const isStokKosong = stokLive <= 0;

  const handleAjukanPinjam = (e: React.FormEvent) => {
    e.preventDefault();
    setPesanErrorPinjam(null);
    if (!namaPeminjam.trim() || !nisnPeminjam.trim()) {
      setPesanErrorPinjam("Mohon lengkapi Nama Siswa dan NISN terlebih dahulu!");
      return;
    }

    startTransitionPinjam(async () => {
      const hasil = await ajukanPeminjamanBuku({
        bukuId: buku.id,
        namaSiswa: namaPeminjam,
        nisn: nisnPeminjam,
        kelas: kelasPeminjam,
      });

      if (hasil.success) {
        setStokLive(hasil.sisaStok ?? (stokLive - 1));
        setBerhasilPinjam(true);
      } else {
        setPesanErrorPinjam(hasil.message);
      }
    });
  };

  return (
    <div className="detail-container bg-slate-50 text-slate-800 antialiased pb-16">
      {/* Top Navbar Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/daftar-buku"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Kembali ke Daftar Buku</span>
            </Link>

            <span className="hidden sm:inline text-slate-300">/</span>
            <span className="hidden sm:inline text-xs font-medium text-slate-500">
              Detail Buku #{buku.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xs font-medium text-slate-500 hover:text-blue-600 transition"
            >
              Beranda Perpustakaan
            </Link>
          </div>
        </div>
      </header>

      {/* Main Detail Content */}
      <main className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Info */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-800">
                {buku.kategori}
              </span>
              <span className="rounded-md bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                {buku.kelas}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl lg:text-4xl">
              {buku.judul}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Kode Registrasi Koleksi: <span className="font-mono font-bold text-slate-700">{buku.id}</span> • ISBN: {buku.isbn}
            </p>
          </div>

          {/* Sisa Stok Badge */}
          <div className="flex flex-col items-end">
            <span
              className={`stok-badge-detail ${
                isStokKosong ? "stok-habis-detail" : "stok-tersedia-detail"
              }`}
            >
              {isStokKosong ? (
                <>
                  <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse"></span>
                  <span>Stok Kosong (0 Eksemplar)</span>
                </>
              ) : (
                <>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  <span>Tersedia: {stokLive} dari {buku.totalEksemplar} Eksemplar</span>
                </>
              )}
            </span>
            <span className="mt-1 text-xs text-slate-400">
              Status Database Perpustakaan SMA
            </span>
          </div>
        </div>

        {/* 2-Column Detail Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Kolom Kiri: Cover Mockup & Aksi Pinjam */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sticky top-24">
              {/* Visual Cover Mockup */}
              <div className="book-cover-mockup aspect-[3/4] w-full max-w-[260px] mx-auto flex flex-col justify-between p-6 text-white text-center">
                <div className="book-spine"></div>
                <div className="pt-4">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    Perpustakaan SMA
                  </span>
                </div>
                <div className="my-auto px-2">
                  <p className="text-base font-extrabold leading-snug drop-shadow-md">
                    {buku.judul}
                  </p>
                  <p className="mt-2 text-xs font-medium text-blue-100">
                    {buku.pengarang}
                  </p>
                </div>
                <div className="border-t border-white/20 pt-2 text-[10px] text-blue-200">
                  {buku.penerbit}
                </div>
              </div>

              {/* Status Peminjaman Card */}
              <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Kondisi Fisik:</span>
                  <span className="font-semibold text-slate-800">Sangat Baik / Lengkap</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Maks. Peminjaman:</span>
                  <span className="font-semibold text-slate-800">7 Hari Kerja</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Lokasi Fisik:</span>
                  <span className="font-semibold text-blue-700">{buku.lokasiRak}</span>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="mt-6 flex flex-col gap-3">
                {isStokKosong ? (
                  <button
                    type="button"
                    disabled
                    className="w-full rounded-xl bg-slate-200 py-3 text-sm font-bold text-slate-400 cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Stok Sedang Kosong</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setBerhasilPinjam(false);
                      setTampilkanModalPinjam(true);
                    }}
                    className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/30 hover:bg-blue-700 hover:shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span>Ajukan Peminjaman Buku</span>
                  </button>
                )}

                <Link
                  href="/daftar-buku"
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 text-center text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Lihat Buku Lainnya
                </Link>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Rincian Metadata Database & Sinopsis */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Box 1: Sinopsis & Deskripsi */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Sinopsis & Ringkasan Buku
              </h2>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed sm:text-base">
                {buku.deskripsi}
              </p>

              {/* Pokok Bahasan / Daftar Bab */}
              {buku.babMateri && buku.babMateri.length > 0 && (
                <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/70 p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Pokok Materi & Daftar Bab Pembahasan:
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs text-slate-600">
                    {buku.babMateri.map((bab, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-[10px]">
                          {idx + 1}
                        </span>
                        <span className="truncate">{bab}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Box 2: Rincian Data Teknis Perpustakaan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Informasi Bibliografi & Database Buku
              </h2>

              <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                  <dt className="text-slate-400 font-medium">Judul Asli / Lengkap</dt>
                  <dd className="mt-1 font-bold text-slate-900">{buku.judul}</dd>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                  <dt className="text-slate-400 font-medium">Penulis / Pengarang</dt>
                  <dd className="mt-1 font-bold text-slate-900">{buku.pengarang}</dd>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                  <dt className="text-slate-400 font-medium">Penerbit & Kota</dt>
                  <dd className="mt-1 font-bold text-slate-900">
                    {buku.penerbit}, {buku.kotaTerbit}
                  </dd>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                  <dt className="text-slate-400 font-medium">Tahun Terbit & Edisi</dt>
                  <dd className="mt-1 font-bold text-slate-900">
                    Tahun {buku.tahun} ({buku.edisi})
                  </dd>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                  <dt className="text-slate-400 font-medium">Nomor Standar ISBN</dt>
                  <dd className="mt-1 font-mono font-bold text-slate-900">{buku.isbn}</dd>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                  <dt className="text-slate-400 font-medium">Kategori & Sasaran Kelas</dt>
                  <dd className="mt-1 font-bold text-slate-900">
                    {buku.kategori} • {buku.kelas}
                  </dd>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                  <dt className="text-slate-400 font-medium">Tebal Halaman & Bahasa</dt>
                  <dd className="mt-1 font-bold text-slate-900">
                    {buku.halaman} Halaman • {buku.bahasa}
                  </dd>
                </div>

                <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                  <dt className="text-slate-400 font-medium">Posisi Rak & Gedung</dt>
                  <dd className="mt-1 font-bold text-blue-700">
                    {buku.lokasiRak} ({buku.gedung})
                  </dd>
                </div>
              </dl>
            </div>

            {/* Box 3: Ketentuan Peminjaman Spesifik */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 shadow-xs">
              <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                  i
                </span>
                Ketentuan Peminjaman Buku Ini
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs text-blue-950 leading-relaxed list-disc list-inside">
                <li>Peminjaman hanya berlaku untuk siswa aktif & guru SMA dengan kartu pengenal sah.</li>
                <li>Masa waktu peminjaman adalah <strong>7 hari kalender</strong> sejak tanggal pengambilan buku.</li>
                <li>Dapat diperpanjang 1 kali selama buku belum dipesan oleh siswa lain.</li>
                <li>Dilarang memberi coretan pen/stabilo atau merusak barcode inventaris buku.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Simulasi Form Peminjaman Buku */}
      {tampilkanModalPinjam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Formulir Peminjaman Buku
              </h3>
              <button
                type="button"
                onClick={() => setTampilkanModalPinjam(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            {berhasilPinjam ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold mb-4">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Pengajuan Berhasil Dicatat!
                </h4>
                <p className="mt-2 text-xs text-slate-600 max-w-sm mx-auto">
                  Silakan tunjukkan Kartu Pelajar Anda di meja pustakawan di{" "}
                  <strong>{buku.lokasiRak}</strong> untuk mengambil buku.
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-3 text-left text-xs border border-slate-200">
                  <p><strong>Peminjam:</strong> {namaPeminjam} (NISN: {nisnPeminjam})</p>
                  <p><strong>Kelas:</strong> {kelasPeminjam}</p>
                  <p><strong>Buku:</strong> {buku.judul}</p>
                  <p><strong>Batas Kembali:</strong> 7 hari setelah pengambilan</p>
                </div>

                <button
                  type="button"
                  onClick={() => setTampilkanModalPinjam(false)}
                  className="mt-6 w-full rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white hover:bg-blue-700"
                >
                  Selesai & Tutup
                </button>
              </div>
            ) : (
              <form onSubmit={handleAjukanPinjam} className="mt-4 flex flex-col gap-3">
                {pesanErrorPinjam && (
                  <div className="rounded-lg bg-red-50 p-2.5 text-xs text-red-700 border border-red-200">
                    {pesanErrorPinjam}
                  </div>
                )}

                <div className="rounded-lg bg-blue-50 p-3 text-xs text-blue-900">
                  <strong>Buku yang Dipinjam:</strong> {buku.judul} ({buku.id})
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">Nama Lengkap Siswa</label>
                  <input
                    type="text"
                    required
                    value={namaPeminjam}
                    onChange={(e) => setNamaPeminjam(e.target.value)}
                    placeholder="Contoh: Muhammad Farhan"
                    className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">NISN Siswa</label>
                    <input
                      type="text"
                      required
                      value={nisnPeminjam}
                      onChange={(e) => setNisnPeminjam(e.target.value)}
                      placeholder="Contoh: 0061234567"
                      className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Kelas</label>
                    <select
                      value={kelasPeminjam}
                      onChange={(e) => setKelasPeminjam(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="X-1">Kelas X-1</option>
                      <option value="X-2">Kelas X-2</option>
                      <option value="XI-MIPA 1">Kelas XI-MIPA 1</option>
                      <option value="XI-IPS 1">Kelas XI-IPS 1</option>
                      <option value="XII-MIPA 1">Kelas XII-MIPA 1</option>
                      <option value="XII-IPS 1">Kelas XII-IPS 1</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex justify-end gap-2 border-t border-slate-100 pt-3">
                  <button
                    type="button"
                    onClick={() => setTampilkanModalPinjam(false)}
                    className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isPendingPinjam}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition active:scale-95 disabled:bg-slate-400"
                  >
                    {isPendingPinjam ? (
                      <>
                        <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                        <span>Mencatat ke Database...</span>
                      </>
                    ) : (
                      <span>Konfirmasi Pinjam</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-50 text-sm text-slate-500">
          Memuat data detail buku dari database...
        </div>
      }
    >
      <DetailBukuContent />
    </Suspense>
  );
}
