import 'preline/preline';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import { Icon } from '@iconify/vue/dist/iconify.js';
import FooterSection from './components/FooterSection.vue';

const app = createApp(App);

app.component('Icon', Icon).component('FooterSection', FooterSection);
app.use(router).mount('#app');

import('preline/dist/index.js');
