import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // This is the CRUCIAL line for GitHub Pages deployment
  // base: '/Pankaj-Portfolio/',

  plugins: [react()],

  // This tells Vite that your index.html and main source files are in the 'client' folder
  root: path.resolve(__dirname, 'client'),

  resolve: {
    // This allows you to use imports like `import Component from '@/components/...'`
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
    },
  },

  build: {
    // This ensures the build output goes to a 'dist' folder in the project root,
    // which is what the GitHub deployment action expects.
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
})