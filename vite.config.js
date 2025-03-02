import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // register vueDevTools before createHtmlPlugin
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
