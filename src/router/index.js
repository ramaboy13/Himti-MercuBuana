import { createRouter, createWebHistory } from 'vue-router'

// Menggunakan lazy loading untuk setiap halaman
const Home = () => import('../pages/Home.vue')
const Blog = () => import('../pages/Blog.vue')
const Event = () => import('../pages/Event.vue')
const FktiPages = () => import('../pages/FktiPages.vue')
const KelascorePages = () => import('../pages/KelascorePages.vue')
const Team = () => import('../pages/MemberPages.vue')
const SeminarITPages = () => import('../pages/SeminarITPages.vue')
const PostDetail = () => import('../pages/PostDetail.vue')
const NotFound = () => import('../components/state/NotFound.vue')
const ComingSoon = () => import('../components/state/ComingSoon.vue')

const routes = [
  // Halaman Home
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  // Halaman Blog
  {
    path: '/blog',
    name: 'Blog',
    component: ComingSoon,
  },

  // Detail Post (dengan validasi ID berupa angka)
  {
    path: '/post/:id(\\d+)',
    name: 'PostDetail',
    component: PostDetail,
    props: true, // Kirim parameter sebagai props ke komponen
  },

  // Halaman Event
  {
    path: '/event',
    name: 'Event',
    component: ComingSoon,
  },

  // Halaman Team
  {
    path: '/team',
    name: 'Team',
    component: Team,
  },

  // Halaman FKTI
  {
    path: '/fkti',
    name: 'FktiPages',
    component: ComingSoon,
  },

  // Halaman Kelascore
  {
    path: '/kelascore',
    name: 'KelascorePages',
    component: ComingSoon,
  },

  // Halaman Seminar IT
  {
    path: '/seminarit',
    name: 'SeminarITPages',
    component: ComingSoon,
  },

  // Halaman 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  // Gunakan HTML5 history mode
  history: createWebHistory(),

  // Daftar routes
  routes,

  // Gulir otomatis ke atas saat berpindah page
  scrollBehavior(to, from, savedPosition) {
    // Jika posisi tersimpan ada, gunakan itu
    if (savedPosition) {
      return savedPosition
    }

    // Jika hash berubah di halaman yang sama
    if (to.path === from.path) {
      return { element: to.hash, behavior: 'smooth' }
    }

    // Jika navigasi ke hash di halaman lain
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    // Default: gulir ke atas halaman
    return { top: 0 }
  },
})

export default router
