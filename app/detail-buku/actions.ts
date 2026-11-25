"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function ajukanPeminjamanBuku(data: {
  bukuId: string;
  namaSiswa: string;
  nisn: string;
  kelas: string;
}) {
  try {
    const buku = await prisma.buku.findUnique({
      where: { id: data.bukuId },
    });

    if (!buku) {
      return { success: false, message: "Buku tidak ditemukan di database." };
    }

    if (buku.stok <= 0) {
      return { success: false, message: "Maaf, stok buku ini sudah habis." };
    }

    // Hitung tanggal batas kembali (7 hari dari sekarang)
    const batasKembali = new Date();
    batasKembali.setDate(batasKembali.getDate() + 7);

    // Catat peminjaman dan kurangi stok buku sebanyak 1
    const [peminjamanBaru, bukuUpdated] = await prisma.$transaction([
      prisma.peminjaman.create({
        data: {
          bukuId: data.bukuId,
          namaSiswa: data.namaSiswa.trim(),
          nisn: data.nisn.trim(),
          kelas: data.kelas,
          batasKembali,
          status: "DIPINJAM",
        },
      }),
      prisma.buku.update({
        where: { id: data.bukuId },
        data: {
          stok: {
            decrement: 1,
          },
        },
      }),
    ]);

    revalidatePath("/daftar-buku");
    revalidatePath("/detail-buku");

    return {
      success: true,
      message: `Peminjaman buku "${buku.judul}" oleh ${data.namaSiswa} berhasil dicatat di database!`,
      peminjaman: peminjamanBaru,
      sisaStok: bukuUpdated.stok,
    };
  } catch (error: any) {
    console.error("Gagal memproses peminjaman:", error);
    return {
      success: false,
      message: error.message || "Gagal menyimpan transaksi peminjaman ke database.",
    };
  }
}

export async function dapatkanTotalPeminjaman() {
  try {
    return await prisma.peminjaman.count();
  } catch (error) {
    return 0;
  }
}
