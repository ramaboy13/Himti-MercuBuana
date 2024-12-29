import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // register vueDevTools before createHtmlPlugin
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
