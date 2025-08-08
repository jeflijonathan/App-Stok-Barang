import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
    resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/common/components'),
      '@hooks': path.resolve(__dirname, 'src/common/hooks'),
      '@utils': path.resolve(__dirname, 'src/common/utils'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@types': path.resolve(__dirname, 'src/common/types'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },
});


