import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../pages/Blog.vue' // Blog dari folder pages
import Event from '../pages/Event.vue' // Event dari folder pages
import FktiPages from '../pages/FktiPages.vue'
import Home from '../pages/Home.vue'
import KelascorePages from '../pages/KelascorePages.vue'
import Team from '../pages/MemberPages.vue'
import SeminarITPages from '../pages/SeminarITPages.vue'
import Test from '../pages/Test.vue'
import PostDetail from '../pages/PostDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/test', name: 'Test', component: Test },
  { path: '/blog', name: 'Blog', component: Blog }, // Blog di blog
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
  },
  { path: '/event', name: 'Event', component: Event }, // Event di event
  { path: '/team', name: 'Team', component: Team },
  { path: '/fkti', name: 'FktiPages', component: FktiPages },
  { path: '/kelascore', name: 'KelascorePages', component: KelascorePages },
  { path: '/seminarit', name: 'SeminarITPages', component: SeminarITPages },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
