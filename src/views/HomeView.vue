<template>
  <main class="pka-page">
    <PkaBackground />

    <section class="pka-section home-hero">
      <BrandBadge label="Tecnología aplicada" />

      <div class="hero-content">
        <div class="hero-text">
          <span class="level-badge">Academia práctica</span>

          <h1>Aprende creando proyectos reales.</h1>

          <p class="subtitle">
            Rutas de aprendizaje para desarrollar habilidades en programación,
            datos, reportes y automatización con práctica guiada.
          </p>

          <div class="hero-actions">
            <RouterLink to="/cursos/python-aplicado" class="primary-btn">
              Ver ruta de Python
            </RouterLink>

            <a href="/python/examen-python/" class="secondary-btn">
              Presentar examen
            </a>
          </div>
        </div>

        <aside class="hero-card glass-card">
          <span class="card-label">Ruta activa</span>

          <h2>Python Aplicado</h2>

          <p>
            Fundamentos, archivos, datos, automatización y reportes.
          </p>

          <div class="stats-grid">
            <div>
              <strong>20</strong>
              <span>Lecciones</span>
            </div>

            <div>
              <strong>60</strong>
              <span>Ejercicios</span>
            </div>

            <div>
              <strong>4</strong>
              <span>Mini proyectos</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="pka-section">
      <div class="section-title">
        <span class="level-badge">Metodología PKA</span>
        <h2>Aprender, practicar y construir.</h2>
        <p>
          La plataforma está pensada para avanzar por rutas claras, resolver ejercicios
          y medir el progreso con evaluaciones.
        </p>
      </div>

      <div class="method-grid">
        <article class="card glass-card">
          <span class="step-number">01</span>
          <h3>Ruta guiada</h3>
          <p>
            Cada curso sigue una secuencia progresiva para evitar temas sueltos
            y avanzar con claridad.
          </p>
        </article>

        <article class="card glass-card">
          <span class="step-number">02</span>
          <h3>Práctica aplicada</h3>
          <p>
            Los ejercicios se enfocan en problemas reales: archivos, datos,
            reportes, procesos y automatización.
          </p>
        </article>

        <article class="card glass-card">
          <span class="step-number">03</span>
          <h3>Evaluación</h3>
          <p>
            Las evaluaciones ayudan a revisar avance, detectar áreas débiles
            y reforzar conocimientos.
          </p>
        </article>
      </div>
    </section>

    <section class="pka-section">
      <div class="section-title section-title-left">
        <span class="level-badge">Rutas de aprendizaje</span>
        <h2>Una academia modular.</h2>
        <p>
          Python inicia la ruta. Las demás áreas se integrarán progresivamente.
        </p>
      </div>

      <div class="courses-grid">
        <RouterLink
          v-for="course in courses"
          :key="course.slug"
          :to="`/cursos/${course.slug}`"
          class="course-card glass-card"
          :class="{ 'course-card-active': course.active }"
        >
          <div class="course-header">
            <span class="course-status">
              {{ course.active ? 'Activo' : 'Próximamente' }}
            </span>

            <span class="course-icon">
              {{ course.icon }}
            </span>
          </div>

          <h3>{{ course.title }}</h3>

          <p>
            {{ course.description }}
          </p>

          <span class="course-link">
            Ver ruta
          </span>
        </RouterLink>
      </div>
    </section>

    <section class="pka-section flow-section">
      <div class="section-title">
        <span class="level-badge">Cómo funciona</span>
        <h2>Una ruta simple para avanzar.</h2>
      </div>

      <div class="flow-grid">
        <article
          v-for="step in flow"
          :key="step.number"
          class="flow-card glass-card"
        >
          <span>{{ step.number }}</span>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section class="pka-section final-card glass-card">
      <span class="level-badge">Comienza ahora</span>

      <h2>Inicia con Python Aplicado.</h2>

      <p>
        La primera ruta está enfocada en aprender Python desde fundamentos
        hasta proyectos aplicados con archivos, datos y automatización.
      </p>

      <div class="hero-actions hero-actions-center">
        <RouterLink to="/cursos/python-aplicado" class="primary-btn">
          Ver ruta de Python
        </RouterLink>

        <a href="/python/examen-python/" class="secondary-btn">
          Presentar examen
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import BrandBadge from '../components/BrandBadge.vue'
import PkaBackground from '../components/PkaBackground.vue'
import { courseList } from '../data/courses'

const courses = courseList

const flow = [
  {
    number: '1',
    text: 'Aprende el concepto',
  },
  {
    number: '2',
    text: 'Practica con ejercicios',
  },
  {
    number: '3',
    text: 'Resuelve retos',
  },
  {
    number: '4',
    text: 'Evalúa tu avance',
  },
  {
    number: '5',
    text: 'Construye proyectos',
  },
]
</script>
