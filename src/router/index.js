import { createRouter, createWebHistory } from 'vue-router'

// Menggunakan lazy loading untuk setiap halaman
const Home = () => import('../pages/Home.vue')
const Blog = () => import('../pages/Blog.vue')
const Event = () => import('../pages/EventPages.vue')
const EventDetail = () => import('../pages/EventDetail.vue')
// Tambahkan import halaman Program
const ProgramPage = () => import('../pages/ProgramPages.vue')
const FktiPages = () => import('../pages/FktiPages.vue')
const KelascorePages = () => import('../pages/KelascorePages.vue')
const Team = () => import('../pages/MemberPages.vue')
const SeminarITPages = () => import('../pages/SeminarITPages.vue')
const PostDetail = () => import('../pages/PostDetail.vue')
const NotFound = () => import('../components/state/NotFound.vue')
const ComingSoon = () => import('../components/state/ComingSoon.vue')
const AboutPages = () => import('../pages/AboutPages.vue')

const routes = [
  // Halaman Home
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  // Halaman About
  {
    path: '/about',
    name: 'About',
    component: AboutPages,
  },

  // Halaman Blog
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },

  // Detail Post (dengan validasi ID berupa angka)
  {
    path: '/post/:id(\\d+)',
    name: 'PostDetail',
    component: PostDetail,
    props: true,
  },

  // Halaman Program (List Semua Program)
  {
    path: '/program',
    name: 'Program',
    component: ProgramPage, // Pastikan file ProgramPages.vue sudah dibuat
  },

  // Halaman Event
  {
    path: '/event',
    name: 'Event',
    component: Event,
    props: (route) => ({
      category: route.query.category,
      type: route.query.type,
      search: route.query.search,
      date: route.query.date,
    }),
  },
  {
    path: '/event/:slug',
    name: 'EventDetail',
    component: EventDetail,
    props: true,
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

  // Halaman Kelascore (Detail Kelas Core)
  {
    path: '/program/kelas-core', // Saya ubah sedikit path-nya agar rapi, atau bisa tetap '/kelascore'
    name: 'KelascorePages',
    component: KelascorePages, // Menggunakan component asli, bukan ComingSoon
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
    if (savedPosition) {
      return savedPosition
    }
    if (to.path === from.path) {
      return { element: to.hash, behavior: 'smooth' }
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

// Navigation Guards
router.beforeEach((to, from, next) => {
  document.title = `${to.name} - Himti Mercu Buana` || 'Himti Mercu Buana'
  next()
})

router.afterEach(() => {})

export default router
