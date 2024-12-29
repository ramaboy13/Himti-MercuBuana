import 'preline/preline'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { Icon } from '@iconify/vue/dist/iconify.js'

const app = createApp(App)

app.component('Icon', Icon)
app.use(router).mount('#app')
