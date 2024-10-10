import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  base: '/',
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      styles: '/src/assets/styles',
      fonts: '/src/assets/fonts',
    },
  },
});
