import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  root: 'src',
  base: './',
  publicDir: '../public',
  server: { port: 3000, host: true, fs: { allow: ['..'] } },
  build: { outDir: '../dist', emptyOutDir: true },
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
})
