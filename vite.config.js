import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    strictPort: true,
    port: 5020,
  },
  preview: {
    strictPort: true,
    port: 5020,
  },
  plugins: [vue()],
})
