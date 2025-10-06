import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/Pankaj-Portfolio/',  // MUST match your repo name exactly
  plugins: [react()],
  root: path.resolve(__dirname, 'client'),  // frontend folder
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),  // build at root/dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'client', 'index.html'),  // explicitly use client/index.html
    },
  },
})