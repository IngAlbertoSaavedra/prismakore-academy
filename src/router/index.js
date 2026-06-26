import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LessonView from '../views/LessonView.vue'
import RoadmapView from '../views/RoadmapView.vue'
import CourseView from '../views/CourseView.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ruta",
    name: "roadmap",
    component: RoadmapView,
  },
  {
    path: "/leccion/variables-tipos-operadores",
    name: "lesson",
    component: LessonView,
  },
  {
    path: "/cursos/:slug",
    name: "course",
    component: CourseView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router