import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    target: 'es2018',
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        arrows: true,
        drop_console: true,
        passes: 3,
      }
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/three') || id.includes('@react-three')) {
            return 'vendor-three';
          }
          if (id.includes('i18next') || id.includes('react-i18next')) {
            return 'vendor-i18n';
          }
          if (id.includes('framer-motion')) {
            return 'vendor-animation';
          }
        }
      }
    },
    server: {
      historyApiFallback: true,
    },
    preview: {
      historyApiFallback: true,
    }
  }
})
