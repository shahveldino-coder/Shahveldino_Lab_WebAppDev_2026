"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface InputBukuBaru {
  id?: string;
  judul: string;
  pengarang: string;
  penerbit: string;
  kotaTerbit?: string;
  tahun: number;
  edisi?: string;
  isbn: string;
  kategori: string;
  kelas: string;
  lokasiRak: string;
  gedung?: string;
  halaman?: number;
  bahasa?: string;
  stok: number;
  totalEksemplar: number;
  deskripsi: string;
  babMateri?: string;
}

export async function dapatkanIdBerikutnya(): Promise<string> {
  try {
    const totalBuku = await prisma.buku.count();
    const nomorBerikutnya = (totalBuku + 1).toString().padStart(3, "0");
    return `BK-${nomorBerikutnya}`;
  } catch (error) {
    console.error("Gagal mendapatkan ID:", error);
    return `BK-00${Math.floor(Math.random() * 900) + 100}`;
  }
}

export async function tambahBukuKeDatabase(data: InputBukuBaru) {
  try {
    // Generate id jika tidak disediakan
    let finalId = data.id?.trim();
    if (!finalId) {
      finalId = await dapatkanIdBerikutnya();
    }

    // Pastikan ISBN unik atau generate fallback jika kosong
    let finalIsbn = data.isbn?.trim();
    if (!finalIsbn) {
      finalIsbn = `978-602-${Math.floor(100000 + Math.random() * 900000)}-${Math.floor(Math.random() * 10)}`;
    }

    const bukuBaru = await prisma.buku.create({
      data: {
        id: finalId,
        judul: data.judul.trim(),
        pengarang: data.pengarang.trim(),
        penerbit: data.penerbit.trim(),
        kotaTerbit: data.kotaTerbit?.trim() || "Jakarta",
        tahun: Number(data.tahun) || new Date().getFullYear(),
        edisi: data.edisi?.trim() || "Edisi Reguler",
        isbn: finalIsbn,
        kategori: data.kategori || "Buku Pelajaran",
        kelas: data.kelas || "Kelas X SMA",
        lokasiRak: data.lokasiRak.trim(),
        gedung: data.gedung?.trim() || "Gedung Perpustakaan SMA Lt. 2",
        halaman: Number(data.halaman) || 250,
        bahasa: data.bahasa?.trim() || "Bahasa Indonesia",
        stok: Number(data.stok) || 0,
        totalEksemplar: Number(data.totalEksemplar) || 1,
        deskripsi: data.deskripsi.trim(),
        babMateri: data.babMateri?.trim() || null,
      },
    });

    revalidatePath("/daftar-buku");
    return {
      success: true,
      message: `Buku "${bukuBaru.judul}" berhasil disimpan ke database perpustakaan!`,
      buku: bukuBaru,
    };
  } catch (error: any) {
    console.error("Gagal menyimpan buku ke database:", error);
    let pesanError = "Terjadi kesalahan saat menyimpan data ke database.";
    if (error.code === "P2002") {
      pesanError = "Nomor ISBN atau ID Buku sudah terdaftar di database. Gunakan kode lain.";
    }
    return {
      success: false,
      message: pesanError,
    };
  }
}
