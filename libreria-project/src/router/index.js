import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LibraryView from '@/views/LibraryView.vue'
import LoginView from '@/views/LoginView.vue'
import PdfDetailView from '@/views/PdfDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/library',
    name: 'library',
    component: LibraryView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/pdf/:id',
    name: 'pdf-detail',
    component: PdfDetailView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router