import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',                  // always root for Vercel
  plugins: [react()],
  root: path.resolve(__dirname, 'client'),  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'client', 'index.html'),
    },
  },
})
