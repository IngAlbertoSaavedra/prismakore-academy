import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RoadmapView from '../views/RoadmapView.vue'
import LessonView from '../views/LessonView.vue'
import ProgressView from '../views/ProgressView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ruta',
    name: 'roadmap',
    component: RoadmapView
  },
  {
    path: '/leccion/:slug',
    name: 'lesson',
    component: LessonView
  },
  {
    path: '/progreso',
    name: 'progress',
    component: ProgressView
  },
  {
    path: '/contacto',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router