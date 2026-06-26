<template>
  <main class="pka-page">
    <PkaBackground />

    <section class="pka-section roadmap-wrapper">
      <div class="top-bar">
        <RouterLink to="/cursos/python-aplicado" class="back-link">
          ← Volver a la ruta Python
        </RouterLink>

        <BrandBadge label="Ruta Python" />
      </div>

      <section class="course-hero roadmap-hero">
        <div class="course-hero-text">
          <span class="level-badge">Ruta activa</span>

          <h1>Python Aplicado</h1>

          <p class="subtitle">
            Avanza por una ruta práctica desde fundamentos de programación hasta
            automatización, archivos, datos, reportes y proyecto final.
          </p>

          <div class="hero-actions">
            <RouterLink to="/lesson/1" class="primary-btn">
              Continuar con Lección 1
            </RouterLink>

            <RouterLink to="/cursos/python-aplicado" class="secondary-btn">
              Ver descripción del curso
            </RouterLink>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-title section-title-left">
          <span class="level-badge">Mapa del curso</span>
          <h2>Contenido por módulos</h2>
          <p>
            Esta vista muestra el avance general de la ruta. Por ahora está habilitada
            la primera lección y el resto queda marcado como próximo contenido.
          </p>
        </div>

        <div class="roadmap-grid">
          <article
            v-for="module in modules"
            :key="module.id"
            class="roadmap-module glass-card"
            :class="{ 'roadmap-module-active': module.available }"
          >
            <div class="module-header">
              <span class="module-number">
                {{ String(module.id).padStart(2, '0') }}
              </span>

              <span
                class="module-status"
                :class="{ 'module-status-active': module.available }"
              >
                {{ module.available ? 'Disponible' : 'Próximamente' }}
              </span>
            </div>

            <h3>{{ module.title }}</h3>

            <p>
              {{ module.description }}
            </p>

            <div class="lesson-list">
              <RouterLink
                v-for="lesson in module.lessons"
                v-if="module.available"
                :key="lesson.id"
                :to="lesson.to"
                class="lesson-item lesson-item-active"
              >
                <span>{{ String(lesson.id).padStart(2, '0') }}</span>
                <strong>{{ lesson.title }}</strong>
              </RouterLink>

              <div
                v-for="lesson in module.lockedLessons"
                v-else
                :key="lesson.id"
                class="lesson-item lesson-item-locked"
              >
                <span>{{ String(lesson.id).padStart(2, '0') }}</span>
                <strong>{{ lesson.title }}</strong>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="final-card glass-card">
        <span class="level-badge">Siguiente paso</span>

        <h2>Empieza por la Lección 1.</h2>

        <p>
          La primera lección introduce variables, tipos de datos y operadores.
          Es el punto de partida antes de avanzar a entrada de datos, condiciones,
          ciclos y estructuras.
        </p>

        <div class="hero-actions hero-actions-center">
          <RouterLink to="/lesson/1" class="primary-btn">
            Iniciar Lección 1
          </RouterLink>

          <RouterLink to="/" class="secondary-btn">
            Regresar al Home
          </RouterLink>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import BrandBadge from '../components/BrandBadge.vue'
import PkaBackground from '../components/PkaBackground.vue'

const modules = [
  {
    id: 1,
    title: 'Módulo 1: Fundamentos',
    description:
      'Conceptos base para comenzar a programar con Python de forma ordenada.',
    available: true,
    lessons: [
      {
        id: 1,
        title: 'Variables, tipos y operadores',
        to: '/lesson/1',
      },
    ],
    lockedLessons: [],
  },
  {
    id: 2,
    title: 'Módulo 2: Archivos y automatización',
    description:
      'Lectura, escritura y organización de archivos para resolver tareas repetitivas.',
    available: false,
    lessons: [],
    lockedLessons: [
      {
        id: 8,
        title: 'Archivos TXT y CSV',
      },
      {
        id: 9,
        title: 'Automatización de carpetas',
      },
      {
        id: 10,
        title: 'Limpieza y organización de archivos',
      },
    ],
  },
  {
    id: 3,
    title: 'Módulo 3: Datos y reportes',
    description:
      'Procesamiento de información, limpieza de datos y generación de reportes.',
    available: false,
    lessons: [],
    lockedLessons: [
      {
        id: 13,
        title: 'Introducción a pandas',
      },
      {
        id: 14,
        title: 'Limpieza de datos',
      },
      {
        id: 15,
        title: 'Filtros y agrupaciones',
      },
    ],
  },
  {
    id: 4,
    title: 'Módulo 4: Proyecto final',
    description:
      'Construcción de un entregable aplicado con datos, archivos y automatización.',
    available: false,
    lessons: [],
    lockedLessons: [
      {
        id: 18,
        title: 'Proyecto ventas, clientes o inventario',
      },
      {
        id: 19,
        title: 'Reporte automático',
      },
      {
        id: 20,
        title: 'Entregable final',
      },
    ],
  },
]
</script>

<style scoped>
.roadmap-wrapper {
  position: relative;
}

.roadmap-hero {
  max-width: 860px;
}

.roadmap-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 22px;
}

.roadmap-module {
  border-radius: 24px;
  padding: 24px;
  min-height: 330px;
}

.roadmap-module-active {
  border-color: rgba(56, 189, 248, 0.48);
  background:
    linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(30, 41, 59, 0.76)),
    rgba(15, 23, 42, 0.72);
}

.module-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 18px;
}

.module-status {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #94a3b8;
  background: rgba(148, 163, 184, 0.12);
  font-size: 0.68rem;
  font-weight: 900;
  text-transform: uppercase;
}

.module-status-active {
  color: #020617;
  background: #67e8f9;
}

.roadmap-module h3 {
  margin-bottom: 10px;
}

.roadmap-module p {
  color: #cbd5e1;
  font-size: 0.9rem;
  line-height: 1.65;
}

.lesson-list {
  display: grid;
  gap: 10px;
  margin-top: 22px;
}

.lesson-item {
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 10px 12px;
  border-radius: 14px;
  text-decoration: none;
}

.lesson-item span {
  display: inline-flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 900;
}

.lesson-item strong {
  color: #e2e8f0;
  font-size: 0.88rem;
  line-height: 1.35;
}

.lesson-item-active {
  border: 1px solid rgba(56, 189, 248, 0.34);
  background: rgba(14, 165, 233, 0.13);
  transition: 0.2s ease;
}

.lesson-item-active span {
  color: #020617;
  background: #38bdf8;
}

.lesson-item-active:hover {
  transform: translateY(-1px);
  border-color: rgba(103, 232, 249, 0.55);
}

.lesson-item-locked {
  border: 1px solid rgba(148, 163, 184, 0.13);
  background: rgba(15, 23, 42, 0.42);
}

.lesson-item-locked span {
  color: #94a3b8;
  background: rgba(148, 163, 184, 0.14);
}

.lesson-item-locked strong {
  color: #94a3b8;
}

@media (max-width: 1040px) {
  .roadmap-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .roadmap-module {
    padding: 20px;
    min-height: auto;
  }

  .module-header {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>