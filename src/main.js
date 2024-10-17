import 'preline/preline'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import router
import './style.css'

createApp(App)
  .use(router) // Gunakan router
  .mount('#app')
