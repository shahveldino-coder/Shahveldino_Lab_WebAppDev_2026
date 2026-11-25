"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { tambahBukuKeDatabase, dapatkanIdBerikutnya } from "./actions";
import "./page.css";

const KATEGORI_LIST = [
  "Buku Pelajaran",
  "Fiksi & Sastra",
  "Referensi & UTBK",
  "Sejarah & Sosial",
  "Sains & Teknologi",
  "Ensiklopedia & Umum",
];

const KELAS_LIST = [
  "Kelas X SMA",
  "Kelas XI SMA",
  "Kelas XII SMA",
  "Umum SMA (Semua Jenjang)",
];

export default function FormTambahBukuPage() {
  const [isPending, startTransition] = useTransition();

  // State Form Isian Buku
  const [idBuku, setIdBuku] = useState("");
  const [judul, setJudul] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [kotaTerbit, setKotaTerbit] = useState("Jakarta");
  const [tahun, setTahun] = useState(2026);
  const [edisi, setEdisi] = useState("Edisi Kurikulum Merdeka");
  const [isbn, setIsbn] = useState("");
  const [kategori, setKategori] = useState("Buku Pelajaran");
  const [kelas, setKelas] = useState("Kelas X SMA");
  const [lokasiRak, setLokasiRak] = useState("Rak Sains B-03 (Baris 1)");
  const [gedung, setGedung] = useState("Gedung Perpustakaan SMA Lt. 2");
  const [halaman, setHalaman] = useState(280);
  const [bahasa, setBahasa] = useState("Bahasa Indonesia");
  const [stok, setStok] = useState(5);
  const [totalEksemplar, setTotalEksemplar] = useState(10);
  const [deskripsi, setDeskripsi] = useState("");
  const [babMateri, setBabMateri] = useState("");

  // Feedback State
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanError, setPesanError] = useState<string | null>(null);
  const [bukuBaruTersimpan, setBukuBaruTersimpan] = useState<any>(null);

  // Helper untuk auto-generate ID Buku
  const handleAutoId = async () => {
    const newId = await dapatkanIdBerikutnya();
    setIdBuku(newId);
  };

  // Helper untuk auto-generate ISBN Acak jika belum ada
  const handleAutoIsbn = () => {
    const acak = Math.floor(100000 + Math.random() * 900000);
    setIsbn(`978-602-${acak}-${Math.floor(Math.random() * 10)}`);
  };

  const resetForm = () => {
    setIdBuku("");
    setJudul("");
    setPengarang("");
    setPenerbit("");
    setKotaTerbit("Jakarta");
    setTahun(2026);
    setEdisi("Edisi Kurikulum Merdeka");
    setIsbn("");
    setKategori("Buku Pelajaran");
    setKelas("Kelas X SMA");
    setLokasiRak("Rak Sains B-03 (Baris 1)");
    setHalaman(280);
    setStok(5);
    setTotalEksemplar(10);
    setDeskripsi("");
    setBabMateri("");
    setPesanSukses(null);
    setPesanError(null);
    setBukuBaruTersimpan(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPesanError(null);
    setPesanSukses(null);

    if (!judul.trim() || !pengarang.trim() || !penerbit.trim() || !lokasiRak.trim()) {
      setPesanError("Harap isi semua kolom wajib (Judul, Pengarang, Penerbit, dan Lokasi Rak).");
      return;
    }

    startTransition(async () => {
      // Parse bab materi jika ada baris baru
      let formattedBab: string | undefined = undefined;
      if (babMateri.trim()) {
        const lines = babMateri
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        formattedBab = JSON.stringify(lines);
      }

      const hasil = await tambahBukuKeDatabase({
        id: idBuku || undefined,
        judul,
        pengarang,
        penerbit,
        kotaTerbit,
        tahun: Number(tahun),
        edisi,
        isbn: isbn || undefined as any,
        kategori,
        kelas,
        lokasiRak,
        gedung,
        halaman: Number(halaman),
        bahasa,
        stok: Number(stok),
        totalEksemplar: Number(totalEksemplar),
        deskripsi: deskripsi || `Buku ${judul} karya ${pengarang} untuk referensi belajar siswa SMA.`,
        babMateri: formattedBab,
      });

      if (hasil.success) {
        setPesanSukses(hasil.message);
        setBukuBaruTersimpan(hasil.buku);
      } else {
        setPesanError(hasil.message);
      }
    });
  };

  const isStokKosong = Number(stok) <= 0;

  return (
    <div className="form-tambah-container bg-slate-50 text-slate-800 antialiased pb-20">
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Kembali ke Daftar Buku</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-medium text-slate-500">
              Form Tambah Koleksi Buku
            </span>
          </div>

          <div>
            <Link
              href="/"
              className="text-xs font-medium text-slate-500 hover:text-blue-600 transition"
            >
              Beranda
            </Link>
          </div>
        </div>
      </header>

      {/* Main Form Content */}
      <main className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-5">
          <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-800">
            Database Perpustakaan SMA
          </span>
          <h1 className="mt-2 text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
            Tambah Buku ke Database
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Lengkapi isian data buku di bawah ini untuk mendaftarkan buku baru ke dalam katalog perpustakaan sekolah.
          </p>
        </div>

        {/* Notifikasi Sukses */}
        {pesanSukses && bukuBaruTersimpan && (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-lg">
                ✓
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-emerald-900">
                  {pesanSukses}
                </h3>
                <p className="mt-1 text-xs text-emerald-700">
                  ID Koleksi: <strong>{bukuBaruTersimpan.id}</strong> • Lokasi: <strong>{bukuBaruTersimpan.lokasiRak}</strong> • Stok Tersedia: <strong>{bukuBaruTersimpan.stok}</strong> eksemplar.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/daftar-buku"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                  >
                    <span>Lihat di Daftar Buku</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-xl border border-emerald-300 bg-white px-4 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-100/50 transition"
                  >
                    + Tambah Buku Lainnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifikasi Error */}
        {pesanError && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs text-red-800 flex items-center gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-white font-bold">
              !
            </span>
            <span>{pesanError}</span>
          </div>
        )}

        {/* Layout: Form Isian (Kiri) & Live Preview (Kanan) */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Kolom Kiri: Formulir Isian */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Bagian 1: Identitas Pokok Buku */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100 text-blue-700 text-xs font-bold">
                    1
                  </span>
                  Identitas Buku
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Kode Buku / ID */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                      <span>Kode / ID Buku</span>
                      <button
                        type="button"
                        onClick={handleAutoId}
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-800"
                      >
                        ⚡ Buat Otomatis
                      </button>
                    </label>
                    <input
                      type="text"
                      value={idBuku}
                      onChange={(e) => setIdBuku(e.target.value)}
                      placeholder="Contoh: BK-009"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                    <p className="mt-1 text-[11px] text-slate-400">
                      Kosongkan untuk penomoran otomatis database.
                    </p>
                  </div>

                  {/* ISBN */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                      <span>Nomor Standar ISBN *</span>
                      <button
                        type="button"
                        onClick={handleAutoIsbn}
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-800"
                      >
                        ⚡ Isi Acak
                      </button>
                    </label>
                    <input
                      type="text"
                      required
                      value={isbn}
                      onChange={(e) => setIsbn(e.target.value)}
                      placeholder="Contoh: 978-602-298-123-4"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Judul Buku */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-700">
                      Judul Lengkap Buku *
                    </label>
                    <input
                      type="text"
                      required
                      value={judul}
                      onChange={(e) => setJudul(e.target.value)}
                      placeholder="Contoh: Geografi Dinamika Litosfer & Atmosfer SMA Kelas XI"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Pengarang */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Pengarang / Penulis *
                    </label>
                    <input
                      type="text"
                      required
                      value={pengarang}
                      onChange={(e) => setPengarang(e.target.value)}
                      placeholder="Contoh: Dr. Gatot Harmanto"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Penerbit */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Penerbit Buku *
                    </label>
                    <input
                      type="text"
                      required
                      value={penerbit}
                      onChange={(e) => setPenerbit(e.target.value)}
                      placeholder="Contoh: Penerbit Yrama Widya"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Kota Terbit & Tahun */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Kota Terbit</label>
                    <input
                      type="text"
                      value={kotaTerbit}
                      onChange={(e) => setKotaTerbit(e.target.value)}
                      placeholder="Contoh: Bandung"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700">Tahun Terbit</label>
                    <input
                      type="number"
                      value={tahun}
                      onChange={(e) => setTahun(Number(e.target.value))}
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Bagian 2: Kategori & Lokasi Rak */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100 text-blue-700 text-xs font-bold">
                    2
                  </span>
                  Klasifikasi & Penempatan Perpustakaan
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Kategori */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Kategori Buku *</label>
                    <select
                      value={kategori}
                      onChange={(e) => setKategori(e.target.value)}
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:outline-none"
                    >
                      {KATEGORI_LIST.map((kat) => (
                        <option key={kat} value={kat}>
                          {kat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Jenjang Kelas */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Jenjang / Sasaran Siswa</label>
                    <select
                      value={kelas}
                      onChange={(e) => setKelas(e.target.value)}
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:outline-none"
                    >
                      {KELAS_LIST.map((kls) => (
                        <option key={kls} value={kls}>
                          {kls}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Lokasi Rak */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Lokasi Rak Koleksi *
                    </label>
                    <input
                      type="text"
                      required
                      value={lokasiRak}
                      onChange={(e) => setLokasiRak(e.target.value)}
                      placeholder="Contoh: Rak IPS S-03 (Baris 2)"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Ruang / Gedung */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Gedung / Ruangan</label>
                    <input
                      type="text"
                      value={gedung}
                      onChange={(e) => setGedung(e.target.value)}
                      placeholder="Contoh: Gedung Perpustakaan SMA Lt. 2"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Bagian 3: Stok & Jumlah Eksemplar */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100 text-blue-700 text-xs font-bold">
                    3
                  </span>
                  Data Stok & Ketersediaan
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Stok Tersedia Saat Ini *
                    </label>
                    <input
                      type="number"
                      min={0}
                      required
                      value={stok}
                      onChange={(e) => setStok(Number(e.target.value))}
                      className={`input-focus-effect mt-1 w-full rounded-xl border p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none font-bold ${
                        isStokKosong ? "border-red-400 bg-red-50 text-red-700" : "border-slate-300 bg-slate-50/50"
                      }`}
                    />
                    {isStokKosong && (
                      <p className="mt-1 text-[11px] text-red-600 font-semibold">
                        ⚠️ Stok 0 akan otomatis diberi tanda merah di katalog!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700">Total Eksemplar Fisik</label>
                    <input
                      type="number"
                      min={1}
                      value={totalEksemplar}
                      onChange={(e) => setTotalEksemplar(Number(e.target.value))}
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700">Jumlah Halaman</label>
                    <input
                      type="number"
                      value={halaman}
                      onChange={(e) => setHalaman(Number(e.target.value))}
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Bagian 4: Deskripsi & Ringkasan */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100 text-blue-700 text-xs font-bold">
                    4
                  </span>
                  Deskripsi & Daftar Bab
                </h2>

                <div className="mt-4 flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Sinopsis / Ringkasan Buku
                    </label>
                    <textarea
                      rows={3}
                      value={deskripsi}
                      onChange={(e) => setDeskripsi(e.target.value)}
                      placeholder="Tuliskan rangkuman singkat isi buku untuk membantu siswa mengetahui materi yang dibahas..."
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700">
                      Daftar Bab Pokok Bahasan (Opsional, pisahkan dengan baris baru)
                    </label>
                    <textarea
                      rows={3}
                      value={babMateri}
                      onChange={(e) => setBabMateri(e.target.value)}
                      placeholder="Contoh:&#10;Bab 1: Pengenalan Konsep Geografi&#10;Bab 2: Struktur Litosfer & Gempa Bumi&#10;Bab 3: Dinamika Atmosfer & Perubahan Iklim"
                      className="input-focus-effect mt-1 w-full rounded-xl border border-slate-300 bg-slate-50/50 p-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none font-mono text-[11px]"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Reset Isian
                </button>

                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg transition active:scale-95 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      <span>Menyimpan ke Database...</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Simpan Buku ke Database</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Kolom Kanan: Pratinjau Real-time Kartu Buku */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Pratinjau Kartu di Katalog
                </span>

                {/* Card Preview */}
                <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-xs">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                      {kategori}
                    </span>

                    {/* Preview Badge Stok */}
                    {isStokKosong ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-[10px] font-bold text-red-700 border border-red-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse"></span>
                        Stok Kosong (0)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                        Stok: {stok} Tersedia
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                    {judul || "Judul Buku Akan Ditampilkan di Sini"}
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Penulis: <span className="font-semibold text-slate-700">{pengarang || "Nama Penulis"}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Penerbit: {penerbit || "Nama Penerbit"} ({tahun})
                  </p>

                  <p className="mt-2 text-[11px] text-slate-600 line-clamp-2 italic">
                    {deskripsi || "Sinopsis ringkas akan muncul di kartu pencarian katalog..."}
                  </p>

                  <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-2 text-[10px] text-slate-500">
                    <span>📍 {lokasiRak}</span>
                    <span>🎓 {kelas}</span>
                  </div>
                </div>
              </div>

              {/* Panduan Input */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 text-xs text-blue-900">
                <h4 className="font-bold flex items-center gap-1.5">
                  <span>💡</span> Tips Pengisian Data:
                </h4>
                <ul className="mt-2 space-y-1.5 text-[11px] text-blue-800 list-disc list-inside">
                  <li>Pastikan penulisan judul dan pengarang sesuai dengan sampul buku asli.</li>
                  <li>Jika buku baru belum memiliki nomor rak, gunakan format standar seperti: <code>Rak Sains B-01</code>.</li>
                  <li>Jika stok diisi <strong>0</strong>, sistem akan menandai buku sebagai <strong>habis (merah)</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
