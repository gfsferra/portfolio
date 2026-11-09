import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    // O layout raiz fica em app/[lang]: endereços que não casam com nenhuma rota (ex.: /pt/inexistente)
    // recebem app/global-not-found.tsx. Páginas que chamam notFound() usam app/[lang]/not-found.tsx.
    globalNotFound: true,
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
