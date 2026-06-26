<template>
  <main class="pka-page">
    <PkaBackground />

    <section class="pka-section course-wrapper">
      <div class="top-bar">
        <RouterLink to="/" class="back-link">
          ← Volver al inicio
        </RouterLink>

        <BrandBadge label="Ruta Python" />
      </div>

      <section class="course-hero">
        <div class="course-hero-text">
          <span class="level-badge">Ruta activa</span>

          <h1>Ruta de aprendizaje Python Aplicado</h1>

          <p class="subtitle">
            Vista general de módulos y lecciones de la ruta de Python Aplicado.
          </p>

          <div class="hero-actions">
            <RouterLink to="/lesson/1" class="primary-btn">
              Iniciar lección 1
            </RouterLink>

            <RouterLink to="/cursos/python-aplicado" class="secondary-btn">
              Ver descripción del curso
            </RouterLink>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-title section-title-left">
          <span class="level-badge">Módulos</span>
          <h2>Contenido de la ruta</h2>
        </div>

        <div class="modules-grid">
          <article
            v-for="module in modules"
            :key="module.id"
            class="module-card glass-card"
          >
            <span class="module-number">
              {{ String(module.id).padStart(2, '0') }}
            </span>

            <h3>{{ module.title }}</h3>
            <p>{{ module.description }}</p>

            <RouterLink
              v-if="module.id === lesson.moduleId"
              to="/lesson/1"
              class="course-link"
            >
              {{ lesson.order }}. {{ lesson.title }}
            </RouterLink>

            <span v-else class="locked">
              Próximamente
            </span>
          </article>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import BrandBadge from '../components/BrandBadge.vue'
import PkaBackground from '../components/PkaBackground.vue'
import modules from '../data/modules.json'
import lesson from '../data/lesson.json'
</script>
