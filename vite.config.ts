import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isGitHubPages = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isGitHubPages ? '/Pankaj-Portfolio/' : '/',  // GitHub vs local
  plugins: [react()],
  root: path.resolve(__dirname, 'client'),           // frontend folder
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),         // root/dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'client', 'index.html'),  // explicit input
    },
  },
})