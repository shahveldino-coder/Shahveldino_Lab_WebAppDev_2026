import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/Daftar%20Buku",
        destination: "/daftar-buku",
        permanent: true,
      },
      {
        source: "/Daftar Buku",
        destination: "/daftar-buku",
        permanent: true,
      },
      {
        source: "/form%20tambah",
        destination: "/form-tambah",
        permanent: true,
      },
      {
        source: "/form tambah",
        destination: "/form-tambah",
        permanent: true,
      },
      {
        source: "/Detail%20Buku",
        destination: "/detail-buku",
        permanent: true,
      },
      {
        source: "/Detail Buku",
        destination: "/detail-buku",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
