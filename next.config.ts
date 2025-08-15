import type { NextConfig } from "next";


const nextConfig : NextConfig = {
  output: 'export', // Генерация статических файлов
  distDir: 'out', // Папка для экспорта
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для статического экспорта
  },

  basePath: '', 

  trailingSlash: true,
};
export default nextConfig;
