import { createRouter, createWebHistory } from 'vue-router';

// Menggunakan lazy loading untuk setiap halaman
const Home = () => import('../pages/Home.vue');
const Blog = () => import('../pages/Blog.vue');
const Event = () => import('../pages/EventPages.vue');
const EventDetail = () => import('../pages/EventDetail.vue');
const FktiPages = () => import('../pages/FktiPages.vue');
const KelascorePages = () => import('../pages/KelascorePages.vue');
const Team = () => import('../pages/MemberPages.vue');
const SeminarITPages = () => import('../pages/SeminarITPages.vue');
const PostDetail = () => import('../pages/PostDetail.vue');
const NotFound = () => import('../components/state/NotFound.vue');
const ComingSoon = () => import('../components/state/ComingSoon.vue');
const BlogSection = () => import('../components/Blog/BlogSection.vue');
const BlogDetail = () => import('../components/Blog/BlogDetail.vue');

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
    component: BlogSection,
  },

  // Detail Post (dengan validasi ID berupa angka)
  {
    path: '/post/:id(\\d+)',
    name: 'Post Detail',
    component: PostDetail,
    props: true,
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
    name: 'Event Detail',
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
    name: 'FKTI',
    component: FktiPages,
  },

  // Halaman Kelascore
  {
    path: '/kelascore',
    name: 'Kelascore',
    component: KelascorePages,
  },

  // Halaman Seminar IT
  {
    path: '/seminarit',
    name: 'Seminar IT',
    component: ComingSoon,
  },

  // Halaman 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound,
  },
  {
    path: '/blog/:id',
    name: 'Blog Detail',
    component: BlogDetail,
    props: true,
  },
];

const router = createRouter({
  // Gunakan HTML5 history mode
  history: createWebHistory(),

  // Daftar routes
  routes,

  // Gulir otomatis ke atas saat berpindah page
  scrollBehavior(to, from, savedPosition) {
    // Jika posisi tersimpan ada, gunakan itu
    if (savedPosition) {
      return savedPosition;
    }

    // Jika hash berubah di halaman yang sama
    if (to.path === from.path) {
      return { element: to.hash, behavior: 'smooth' };
    }

    // Jika navigasi ke hash di halaman lain
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }

    // Default: gulir ke atas halaman
    return { top: 0 };
  },
});

// Navigation Guards
router.beforeEach((to, from, next) => {
  // Set document title berdasarkan route
  document.title = `${to.name} - Himti Mercu Buana` || 'Himti Mercu Buana';

  // Tambahkan loading state jika diperlukan
  // store.commit('setLoading', true)

  next();
});

router.afterEach(async (to, from, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100);
});

export default router;
