import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue'
import Blog from '../pages/Blog.vue' // Blog dari folder pages
import Event from '../pages/Event.vue' // Event dari folder pages
import Home from '../pages/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'Blog', component: Blog }, // Blog di blog
  { path: '/event', name: 'Event', component: Event }, // Event di event
  { path: '/about', name: 'About', component: About }, // About di about
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
