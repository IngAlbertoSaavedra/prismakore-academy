<template>
  <main class="pka-page">
    <PkaBackground />

    <section v-if="course" class="pka-section course-wrapper">
      <div class="top-bar">
        <RouterLink to="/" class="back-link">
          ← Volver al inicio
        </RouterLink>

        <BrandBadge :label="course.title" />
      </div>

      <section class="course-hero">
        <div class="course-hero-text">
          <span class="level-badge">
            {{ course.badge }}
          </span>

          <h1>
            <span class="course-icon-inline">{{ course.icon }}</span>
            {{ course.title }}
          </h1>

          <p class="subtitle">
            {{ course.description }}
          </p>

          <div class="hero-actions">
            <RouterLink
              v-if="isPythonCourse"
              to="/ruta"
              class="primary-btn"
            >
              Entrar al curso
            </RouterLink>

            <span
              v-else
              class="disabled-btn"
            >
              Próximamente
            </span>

            <RouterLink to="/" class="secondary-btn">
              Ver otras rutas
            </RouterLink>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-title section-title-left">
          <span class="level-badge">Temario general</span>
          <h2>Contenido de la ruta</h2>
          <p>
            Estos son los bloques principales que forman la ruta de aprendizaje.
          </p>
        </div>

        <div class="modules-grid">
          <article
            v-for="(module, index) in course.modules"
            :key="module"
            class="module-card glass-card"
          >
            <span class="module-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <h3>{{ module }}</h3>

            <p>
              Bloque de aprendizaje enfocado en práctica, ejercicios y aplicación real.
            </p>
          </article>
        </div>
      </section>

      <section class="final-card glass-card">
        <span class="level-badge">
          {{ isPythonCourse ? 'Disponible ahora' : 'En preparación' }}
        </span>

        <h2>
          {{ isPythonCourse ? 'Comienza con Python Aplicado.' : 'Esta ruta estará disponible próximamente.' }}
        </h2>

        <p>
          {{ isPythonCourse
            ? 'Inicia la ruta activa y avanza desde fundamentos hasta proyectos aplicados.'
            : 'Estamos preparando esta ruta para integrarla al catálogo de PrismaKore Academy.'
          }}
        </p>

        <div class="hero-actions hero-actions-center">
          <RouterLink
            v-if="isPythonCourse"
            to="/ruta"
            class="primary-btn"
          >
            Iniciar ruta
          </RouterLink>

          <RouterLink to="/" class="secondary-btn">
            Regresar al Home
          </RouterLink>
        </div>
      </section>
    </section>

    <section v-else class="pka-section not-found glass-card">
      <RouterLink to="/" class="back-link">
        ← Volver al inicio
      </RouterLink>

      <h1>Ruta no encontrada</h1>

      <p>
        La ruta que estás buscando todavía no existe o cambió de dirección.
      </p>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BrandBadge from '../components/BrandBadge.vue'
import PkaBackground from '../components/PkaBackground.vue'
import { getCourseBySlug } from '../data/courses'

const route = useRoute()

const course = computed(() => {
  return getCourseBySlug(route.params.slug)
})

const isPythonCourse = computed(() => {
  return route.params.slug === 'python-aplicado'
})
</script>
