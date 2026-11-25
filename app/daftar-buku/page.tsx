"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import "./page.css";

export interface BukuItem {
  id: string;
  judul: string;
  pengarang: string;
  penerbit: string;
  tahun: number;
  kategori: string;
  kelas: string;
  lokasiRak: string;
  stok: number;
  deskripsi: string;
}

const DATA_BUKU_AWAL: BukuItem[] = [
  {
    id: "BK-001",
    judul: "Biologi SMA/MA Kelas XI (Kurikulum Merdeka)",
    pengarang: "Bambang Haryanto, M.Si.",
    penerbit: "Penerbit Erlangga",
    tahun: 2023,
    kategori: "Buku Pelajaran",
    kelas: "Kelas XI",
    lokasiRak: "Rak Sains B-01",
    stok: 7,
    deskripsi: "Buku materi biologi lengkap bab sel, metabolisme, dan sistem organ manusia sesuai kurikulum merdeka.",
  },
  {
    id: "BK-002",
    judul: "Matematika Tingkat Lanjut SMA Kelas XII",
    pengarang: "Dr. Suparman, M.Pd.",
    penerbit: "Pusat Perbukuan Kemendikbudristek",
    tahun: 2024,
    kategori: "Buku Pelajaran",
    kelas: "Kelas XII",
    lokasiRak: "Rak Mat C-03",
    stok: 0, // STOK KOSONG (Warna Merah)
    deskripsi: "Membahas konsep kalkulus, matriks tingkat lanjut, dan vektor untuk persiapan ujian akhir SMA.",
  },
  {
    id: "BK-003",
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    penerbit: "Bentang Pustaka",
    tahun: 2008,
    kategori: "Fiksi & Sastra",
    kelas: "Umum SMA",
    lokasiRak: "Rak Novel F-02",
    stok: 4,
    deskripsi: "Kisah inspiratif tentang perjuangan 10 anak di Belitong dalam mengejar pendidikan dan cita-cita.",
  },
  {
    id: "BK-004",
    judul: "Master Bedah Soal UTBK & SNBT 2026",
    pengarang: "Tim Tentor Edukasi",
    penerbit: "Genta Smart Publisher",
    tahun: 2025,
    kategori: "Referensi & UTBK",
    kelas: "Kelas XII",
    lokasiRak: "Rak Ref UTBK-05",
    stok: 0, // STOK KOSONG (Warna Merah)
    deskripsi: "Kumpulan soal TPS, Literasi Bahasa Indonesia, Bahasa Inggris, dan Penalaran Matematika terkini.",
  },
  {
    id: "BK-005",
    judul: "Fisika Terapan SMA: Mekanika & Termodinamika",
    pengarang: "Drs. Marthen Kanginan",
    penerbit: "Yrama Widya",
    tahun: 2022,
    kategori: "Buku Pelajaran",
    kelas: "Kelas X",
    lokasiRak: "Rak Sains B-04",
    stok: 5,
    deskripsi: "Panduan praktis eksperimen laboratorium fisika dan rumus terapan untuk siswa SMA.",
  },
  {
    id: "BK-006",
    judul: "Bumi Manusia",
    pengarang: "Pramoedya Ananta Toer",
    penerbit: "Lentera Dipantara",
    tahun: 2005,
    kategori: "Fiksi & Sastra",
    kelas: "Umum SMA",
    lokasiRak: "Rak Sastra F-01",
    stok: 0, // STOK KOSONG (Warna Merah)
    deskripsi: "Karya sastra legendaris Tetralogi Buru yang merekam perjuangan Minke di masa kolonial.",
  },
  {
    id: "BK-007",
    judul: "Sejarah Indonesia Modern 1800-2024",
    pengarang: "M.C. Ricklefs",
    penerbit: "Serambi Ilmu Semesta",
    tahun: 2021,
    kategori: "Sejarah & Sosial",
    kelas: "Umum SMA",
    lokasiRak: "Rak IPS S-02",
    stok: 3,
    deskripsi: "Referensi komprehensif perkembangan sejarah Indonesia dari masa kolonial hingga reformasi.",
  },
  {
    id: "BK-008",
    judul: "Kimia Konseptual SMA Kelas X",
    pengarang: "Unggul Sudarmo",
    penerbit: "Erlangga",
    tahun: 2023,
    kategori: "Buku Pelajaran",
    kelas: "Kelas X",
    lokasiRak: "Rak Sains B-02",
    stok: 9,
    deskripsi: "Materi struktur atom, ikatan kimia, dan stoikiometri dengan penyampaian visual interaktif.",
  },
];

const KATEGORI_OPSI = [
  "Semua Kategori",
  "Buku Pelajaran",
  "Fiksi & Sastra",
  "Referensi & UTBK",
  "Sejarah & Sosial",
];

export default function Page() {
  const [kataKunci, setKataKunci] = useState("");
  const [kategoriDipilih, setKategoriDipilih] = useState("Semua Kategori");
  const [hanyaTersedia, setHanyaTersedia] = useState(false);

  // Filter buku berdasarkan pencarian kata kunci, kategori, dan ketersediaan stok
  const bukuTersaring = useMemo(() => {
    return DATA_BUKU_AWAL.filter((buku) => {
      const cocokKataKunci =
        buku.judul.toLowerCase().includes(kataKunci.toLowerCase()) ||
        buku.pengarang.toLowerCase().includes(kataKunci.toLowerCase()) ||
        buku.penerbit.toLowerCase().includes(kataKunci.toLowerCase()) ||
        buku.lokasiRak.toLowerCase().includes(kataKunci.toLowerCase());

      const cocokKategori =
        kategoriDipilih === "Semua Kategori" || buku.kategori === kategoriDipilih;

      const cocokStok = hanyaTersedia ? buku.stok > 0 : true;

      return cocokKataKunci && cocokKategori && cocokStok;
    });
  }, [kataKunci, kategoriDipilih, hanyaTersedia]);

  const jumlahStokHabis = DATA_BUKU_AWAL.filter((b) => b.stok === 0).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Top Navbar */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40 shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition text-sm font-medium mr-2"
              title="Kembali ke Beranda"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Beranda</span>
            </Link>
            <span className="text-slate-300">/</span>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                📚
              </div>
              <h1 className="text-lg font-bold text-slate-900">Daftar Buku Perpustakaan</h1>
            </div>
          </div>

          {/* Button Tambah Buku */}
          <div>
            <Link
              href="/form-tambah"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg transition active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span>Tambah Buku</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Page Info & Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
              Katalog & Ketersediaan Buku SMA
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Cari buku yang kamu inginkan, periksa ketersediaan stok, dan klik tombol Detail untuk melihat informasi lengkap.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
              Total: {DATA_BUKU_AWAL.length} Judul
            </span>
            <span className="rounded-lg bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 border border-red-200">
              {jumlahStokHabis} Stok Kosong
            </span>
          </div>
        </div>

        {/* Bar Pencarian & Filter */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Input Cari Buku */}
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={kataKunci}
                onChange={(e) => setKataKunci(e.target.value)}
                placeholder="Cari buku berdasarkan judul, pengarang, penerbit, atau rak..."
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
              />
              {kataKunci && (
                <button
                  type="button"
                  onClick={() => setKataKunci("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                  title="Hapus pencarian"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Filter Kategori & Stok */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={kategoriDipilih}
                onChange={(e) => setKategoriDipilih(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                {KATEGORI_OPSI.map((kat) => (
                  <option key={kat} value={kat}>
                    {kat}
                  </option>
                ))}
              </select>

              <label className="inline-flex items-center gap-2 cursor-pointer select-none text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl hover:bg-slate-100 transition">
                <input
                  type="checkbox"
                  checked={hanyaTersedia}
                  onChange={(e) => setHanyaTersedia(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span>Hanya Tersedia</span>
              </label>
            </div>
          </div>

          {/* Info Status Pencarian */}
          {(kataKunci || kategoriDipilih !== "Semua Kategori" || hanyaTersedia) && (
            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
              <span>
                Menampilkan <strong>{bukuTersaring.length}</strong> dari total{" "}
                <strong>{DATA_BUKU_AWAL.length}</strong> buku
              </span>
              <button
                type="button"
                onClick={() => {
                  setKataKunci("");
                  setKategoriDipilih("Semua Kategori");
                  setHanyaTersedia(false);
                }}
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Daftar Buku (Grid Cards) */}
        {bukuTersaring.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 text-2xl">
              🔍
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-800">
              Buku Tidak Ditemukan
            </h3>
            <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
              Tidak ada buku yang sesuai dengan kata kunci &quot;{kataKunci}&quot;. Coba gunakan kata kunci lain atau reset filter pencarian.
            </p>
            <button
              type="button"
              onClick={() => {
                setKataKunci("");
                setKategoriDipilih("Semua Kategori");
                setHanyaTersedia(false);
              }}
              className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
            >
              Tampilkan Semua Buku
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bukuTersaring.map((buku) => {
              const isKosong = buku.stok <= 0;

              return (
                <div
                  key={buku.id}
                  className={`card-buku flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-xs transition-all ${
                    isKosong
                      ? "border-red-200 ring-1 ring-red-100"
                      : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Header Card: Kategori & Status Stok */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        {buku.kategori}
                      </span>

                      {/* WARNA STOK: Berubah Merah apabila stok buku di perpustakaan kosong */}
                      <span
                        className={`stok-badge ${
                          isKosong ? "stok-habis" : "stok-tersedia"
                        }`}
                      >
                        {isKosong ? (
                          <span className="flex items-center gap-1.5 font-bold">
                            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                            Stok Kosong (0)
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 font-semibold">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            Stok: {buku.stok} Tersedia
                          </span>
                        )}
                      </span>
                    </div>

                    {/* Judul Buku */}
                    <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                      {buku.judul}
                    </h3>

                    {/* Pengarang & Penerbit */}
                    <p className="mt-2 text-xs font-medium text-slate-500">
                      Penulis:{" "}
                      <span className="text-slate-700 font-semibold">{buku.pengarang}</span>
                    </p>
                    <p className="text-xs text-slate-500">
                      Penerbit: {buku.penerbit} ({buku.tahun})
                    </p>

                    {/* Ringkasan Deskripsi */}
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {buku.deskripsi}
                    </p>

                    {/* Info Rak & Jenjang Kelas */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        📍 {buku.lokasiRak}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        🎓 {buku.kelas}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer: Detail Button */}
                  <div className="mt-5 border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div className="text-xs">
                      {isKosong ? (
                        <span className="text-red-600 font-medium">Tidak dapat dipinjam</span>
                      ) : (
                        <span className="text-emerald-600 font-medium">Bisa dipinjam</span>
                      )}
                    </div>

                    {/* Button Detail yang menuju ke page Detail Buku */}
                    <Link
                      href={`/detail-buku?id=${encodeURIComponent(buku.id)}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-blue-600 bg-blue-50/60 px-3.5 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition active:scale-95"
                    >
                      <span>Detail</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
