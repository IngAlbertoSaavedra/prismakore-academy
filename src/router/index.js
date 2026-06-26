import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LessonView from '../views/LessonView.vue'
import RoadmapView from '../views/RoadmapView.vue'
import CourseView from '../views/CourseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cursos/:slug',
      name: 'course',
      component: CourseView,
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: LessonView,
    },
    {
      path: '/ruta',
      name: 'roadmap',
      component: RoadmapView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
