import type { NextConfig } from "next";


const nextConfig : NextConfig = {
  output: 'export', // Генерация статических файлов
  distDir: 'out', // Папка для экспорта
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для статического экспорта
  },

  assetPrefix: '/break-message-site/', // Критически важно для GitHub Pages
  basePath: '/break-message-site', // Добавляем basePath

  trailingSlash: true,
};
export default nextConfig;
