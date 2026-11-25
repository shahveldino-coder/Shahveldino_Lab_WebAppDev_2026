import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Pustaka<span className="text-blue-600">SMA</span>
              </span>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Layanan Perpustakaan & Peminjaman Buku Sekolah
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#tentang" className="transition hover:text-blue-600">
              Tentang
            </a>
            <a href="#fitur" className="transition hover:text-blue-600">
              Fitur Layanan
            </a>
            <a href="#alur" className="transition hover:text-blue-600">
              Alur Peminjaman
            </a>
            <a href="#ketentuan" className="transition hover:text-blue-600">
              Tata Tertib
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/daftar-buku"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
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
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <span>Daftar Buku</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Sistem Peminjaman Buku Online SMA
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Pusat Literasi & Informasi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Perpustakaan SMA
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base text-slate-600 sm:text-lg lg:text-xl leading-relaxed">
              Selamat datang di website resmi perpustakaan SMA. Platform ini
              disediakan untuk mempermudah seluruh siswa dan guru dalam mencari
              katalog buku referensi, mata pelajaran, sastra, hingga meminjam
              buku secara tertib, cepat, dan transparan.
            </p>

            {/* Main Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/daftar-buku"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 active:scale-95"
              >
                <span>Buka Halaman Daftar Buku</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <a
                href="#alur"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
              >
                <span>Cara Meminjam Buku</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Quick Stats Banner */}
            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-600">1.500+</p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  Judul Buku Koleksi SMA
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Pelajaran, UTBK, Fiksi & Referensi
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm text-center">
                <p className="text-3xl font-bold text-indigo-600">7 Hari</p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  Masa Peminjaman Standar
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Dapat diperpanjang sesuai ketentuan
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm text-center">
                <p className="text-3xl font-bold text-emerald-600">100% Bebas Biaya</p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  Khusus Siswa & Guru SMA
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Cukup gunakan Kartu Pelajar / NISN
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Tentang Website Perpustakaan */}
      <section id="tentang" className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Tentang Website Kami
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Solusi Modern untuk Peminjaman Buku Sekolah yang Terorganisir
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Website Perpustakaan SMA ini dirancang guna memfasilitasi kebutuhan literasi
                akademik dan non-akademik di lingkungan sekolah. Melalui platform digital ini,
                proses pencarian buku menjadi lebih efektif tanpa perlu mencari satu per satu
                di setiap rak secara manual.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Siswa dapat langsung melihat ketersediaan buku, membaca ringkasan informasi,
                dan merencanakan peminjaman buku sebelum datang ke meja layanan perpustakaan sekolah.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>Mendukung Kurikulum Nasional:</strong> Menyediakan buku teks pelajaran untuk kelas X, XI, dan XII SMA.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>Persiapan Ujian & PTN:</strong> Kumpulan bank soal, panduan UTBK/SNBT, dan modul olimpiade sains.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700">
                    <strong>Pojok Literasi & Fiksi:</strong> Novel sastra, antologi cerpen, komik edukasi, dan ensiklopedia umum.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 p-8 text-white shadow-xl">
              <div className="absolute top-4 right-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                Info Perpustakaan
              </div>
              <h3 className="text-2xl font-bold">Visi & Misi Perpustakaan</h3>
              <p className="mt-4 text-blue-100 text-sm leading-relaxed">
                Menciptakan ekosistem belajar yang mandiri, menyenangkan, dan berwawasan luas
                bagi seluruh civitas akademika SMA melalui kemudahan akses bahan bacaan bermutu.
              </p>

              <div className="mt-8 border-t border-white/20 pt-6">
                <h4 className="text-sm font-semibold tracking-wide uppercase text-blue-200">
                  Jam Buka Layanan Perpustakaan:
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-blue-50">
                  <li className="flex justify-between">
                    <span>Senin – Kamis</span>
                    <span className="font-semibold">07.30 – 15.30 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jumat</span>
                    <span className="font-semibold">07.30 – 11.30 & 13.00 – 15.00 WIB</span>
                  </li>
                  <li className="flex justify-between text-blue-200">
                    <span>Sabtu, Minggu & Libur Nasional</span>
                    <span className="font-semibold">Tutup</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 text-center">
                <Link
                  href="/daftar-buku"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-blue-700 shadow-md transition hover:bg-blue-50"
                >
                  <span>Cek Koleksi Buku Sekarang</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Fitur Utama */}
      <section id="fitur" className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Fasilitas & Keunggulan
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kemudahan Layanan Perpustakaan Digital
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Berbagai kemudahan yang dihadirkan untuk mendukung kenyamanan belajar dan peminjaman buku para pelajar SMA.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Pencarian Cepat
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Temukan buku berdasarkan judul, pengarang, mata pelajaran, atau kategori dengan cepat dan akurat.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Status Ketersediaan
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Cek langsung apakah buku yang kamu butuhkan sedang tersedia di rak atau sedang dipinjam siswa lain.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Tertib Pengembalian
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Jadwal peminjaman yang tercatat rapi membantu siswa disiplin mengembalikan buku tepat waktu.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Koleksi Beragam
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Mulai dari buku wajib Kurikulum Merdeka hingga ensiklopedia dan novel untuk hiburan edukatif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Alur Peminjaman Buku */}
      <section id="alur" className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Panduan Siswa
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              4 Langkah Mudah Meminjam Buku
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Ikuti tata cara berikut saat ingin meminjam koleksi buku perpustakaan SMA.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-base mb-4 shadow">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Pilih Buku di Katalog
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Buka menu <strong>Daftar Buku</strong>, cari buku yang kamu butuhkan dan periksa rincian serta status stoknya.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-base mb-4 shadow">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Siapkan Kartu Pelajar
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Pastikan kamu menyiapkan NISN / Kartu Pelajar SMA aktif sebagai bukti identitas peminjam resmi.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-base mb-4 shadow">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Kunjungi Meja Pustakawan
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Ambil buku di rak yang tertera atau konfirmasi judul buku kepada petugas pustakawan di lantai perpustakaan.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-base mb-4 shadow">
                4
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Kembalikan Tepat Waktu
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Rawat kondisi buku dan kembalikan sebelum masa 7 hari berakhir agar dapat dimanfaatkan oleh teman lain.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/daftar-buku"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 transition"
            >
              <span>Mulai Cari di Daftar Buku</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Tata Tertib & Ketentuan */}
      <section id="ketentuan" className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Peraturan Sekolah
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Ketentuan & Tata Tertib Peminjaman Buku
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Demi menjaga kelestarian buku dan kenyamanan bersama, seluruh peminjam wajib mematuhi aturan berikut:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Maksimal 3 Buku Sekaligus</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Setiap siswa diperbolehkan meminjam maksimal 3 eksemplar judul berbeda dalam satu masa pinjam.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Durasi Pinjam 7 Hari Kerja</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Buku dapat dipinjam selama 7 hari dan dapat diperpanjang 1 kali jika belum ada siswa lain yang memesan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Menjaga Keutuhan & Kebersihan</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Dilarang mencoret, melipat halaman, merobek, atau menumpahkan cairan ke buku perpustakaan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Tanggung Jawab Kehilangan</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Buku yang hilang atau rusak parah wajib diganti dengan judul dan edisi buku yang sama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
            Ingin Mencari Buku Pelajaran atau Bacaan Seru Hari Ini?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
            Kunjungi katalog lengkap perpustakaan kami dan temukan buku yang siap kamu pinjam sekarang.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/daftar-buku"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl transition hover:bg-blue-50 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
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
              <span>Buka Menu &ldquo;Daftar Buku&rdquo;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                P
              </div>
              <span className="text-base font-bold text-slate-800">
                Perpustakaan SMA PustakaKu
              </span>
            </div>

            <p className="text-xs text-slate-500 text-center sm:text-right">
              &copy; 2026 Perpustakaan SMA. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
