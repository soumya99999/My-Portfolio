import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public/assets'),
    }
  },
  server: {
    open: true,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        // This will split large libraries into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      }
    },
    // Increase the chunk size warning limit if necessary
    chunkSizeWarningLimit: 1000, // Set to 1000kB (or adjust to your needs)
  }
});
