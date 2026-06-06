<template>
  <main class="lesson-page">
    <div class="pk-bg">
      <div class="pk-gradient"></div>
      <div class="pk-glow pk-glow-left"></div>
      <div class="pk-glow pk-glow-right"></div>

      <img
        src="https://ajsaavedra.com/assets/prisma-logo.png"
        alt=""
        class="pk-prisma-bg"
      />
    </div>

    <section class="lesson-hero">
       <BrandBadge label="Python Aplicado" />

      <RouterLink to="/" class="back-link">
        ← Volver al inicio
      </RouterLink>

      <div class="hero-content">
        <div class="hero-text">
          <span class="level-badge">{{ lesson.level }}</span>

          <h1>
            {{ lesson.id }}. {{ lesson.title }}
          </h1>

          <p class="subtitle">
            {{ lesson.subtitle }}
          </p>

          <div class="meta">
            <span>Duración: {{ lesson.duration }}</span>
            <span>{{ completed ? 'Completada' : lesson.status }}</span>
          </div>
        </div>

        <BaseButton
          type="button"
          variant="secondary"
          @click="toggleCompleted"
        >
          {{ completed ? 'Marcar como pendiente' : 'Marcar como completada' }}
        </BaseButton>
      </div>
    </section>

    <section class="content-grid">
      <div class="main-content">
        <article class="card glass-card">
          <h2>Objetivo</h2>
          <p>{{ lesson.objective }}</p>
        </article>

        <article class="card glass-card">
          <h2>{{ lesson.explanation.title }}</h2>
          <p>{{ lesson.explanation.content }}</p>

          <ul class="notes-list">
            <li v-for="note in lesson.explanation.notes" :key="note">
              {{ note }}
            </li>
          </ul>
        </article>

        <article class="card glass-card">
          <h2>{{ lesson.example.title }}</h2>
          <p>{{ lesson.example.description }}</p>

          <pre class="code-block"><code class="language-python">{{ lesson.example.code }}</code></pre>

          <details class="details-box">
            <summary>Ver salida esperada</summary>
            <pre class="code-block"><code class="language-python">{{ lesson.example.expectedOutput }}</code></pre>
          </details>
        </article>

        <article class="card glass-card">
          <h2>{{ lesson.practiceExample.title }}</h2>
          <p>{{ lesson.practiceExample.description }}</p>

          <pre class="code-block"><code class="language-python">{{ lesson.practiceExample.code }}</code></pre>
        </article>

        <article class="card glass-card">
          <h2>Ejercicios</h2>

          <div
            v-for="exercise in lesson.exercises"
            :key="exercise.id"
            class="exercise"
          >
            <div class="exercise-header">
              <h3>{{ exercise.id }}. {{ exercise.title }}</h3>
              <span>{{ exercise.difficulty }}</span>
            </div>

            <p>{{ exercise.instruction }}</p>

            <pre class="code-block"><code class="language-python">{{ exercise.starterCode }}</code></pre>

            <p class="hint">
              Pista: {{ exercise.hint }}
            </p>
          </div>
        </article>

        <article class="card glass-card">
          <h2>{{ lesson.solution.title }}</h2>
          <p>{{ lesson.solution.description }}</p>

          <details
            v-for="solution in lesson.solution.items"
            :key="solution.exerciseId"
            class="details-box"
          >
            <summary>
              Ver solución del ejercicio {{ solution.exerciseId }}
            </summary>

            <pre class="code-block"><code class="language-python">{{ solution.code }}</code></pre>
          </details>
        </article>

        <article class="card challenge-card">
          <h2>{{ lesson.challenge.title }}</h2>
          <p>{{ lesson.challenge.description }}</p>

          <ul class="notes-list">
            <li
              v-for="requirement in lesson.challenge.requirements"
              :key="requirement"
            >
              {{ requirement }}
            </li>
          </ul>

          <pre class="code-block"><code class="language-python">{{ lesson.challenge.starterCode }}</code></pre>
        </article>
      </div>

      <aside class="side-content">
        <article class="card glass-card sticky-card">
          <h2>Checklist</h2>

          <label
            v-for="item in lesson.checklist"
            :key="item"
            class="check-item"
          >
            <input
              type="checkbox"
              :checked="checklist[item]"
              @change="toggleChecklist(item)"
            >
            <span>{{ item }}</span>
          </label>
        </article>

        <article class="card glass-card">
          <h2>Resumen</h2>

          <ul class="summary-list">
            <li v-for="item in lesson.summary" :key="item">
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="card glass-card">
          <h2>Siguiente lección</h2>
          <p>{{ lesson.nextLesson.title }}</p>
          <span class="locked">Disponible próximamente</span>
        </article>
      </aside>
    </section>
  </main>
</template>

<script setup>
import { computed, reactive, onMounted, nextTick } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import BrandBadge from '../components/BrandBadge.vue'
import lesson from '../data/lesson.json'

import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-python'

  const completedLessons = reactive(
    JSON.parse(localStorage.getItem('completedLessons') || '{}')
  )

  const checklist = reactive(
    JSON.parse(localStorage.getItem(`checklist-${lesson.slug}`) || '{}')
  )

  const completed = computed(() => {
    return completedLessons[lesson.slug] === true
  })

  function saveCompletedLessons() {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
  }

  function saveChecklist() {
    localStorage.setItem(`checklist-${lesson.slug}`, JSON.stringify(checklist))
  }

  function toggleCompleted() {
    completedLessons[lesson.slug] = !completedLessons[lesson.slug]
    saveCompletedLessons()
  }

  function toggleChecklist(item) {
    checklist[item] = !checklist[item]
    saveChecklist()
  }

  onMounted(async () => {
    await nextTick()
    Prism.highlightAll()
  })
</script>

<style scoped>
.lesson-page {
  position: relative;
  min-height: 100vh;
  width: min(1240px, calc(100% - 32px));
  margin: 0 auto;
  padding: 36px 0 64px;
  color: #f8fafc;
  isolation: isolate;
}

.pk-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: #020617;
}

.pk-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 5% 5%, rgba(14, 165, 233, 0.26), transparent 28%),
    radial-gradient(circle at 95% 85%, rgba(124, 58, 237, 0.26), transparent 32%),
    linear-gradient(135deg, rgba(3, 105, 161, 0.28), #020617 42%, rgba(88, 28, 135, 0.22));
}

.pk-glow {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 999px;
  filter: blur(70px);
}

.pk-glow-left {
  top: -120px;
  left: -120px;
  background: rgba(14, 165, 233, 0.22);
}

.pk-glow-right {
  right: -120px;
  bottom: -120px;
  background: rgba(124, 58, 237, 0.24);
}

.pk-prisma-bg {
  position: absolute;
  left: 50%;
  top: 12%;
  width: 720px;
  opacity: 0.12;
  pointer-events: none;
  transform: rotate(0deg);
}

.lesson-hero {
  margin-bottom: 28px;
}

.back-link {
  display: block;
  width: fit-content;
  margin: 24px 0 16px;
  color: #a78bfa;
  text-decoration: none;
  font-weight: 700;
}

.back-link:hover {
  color: #c4b5fd;
}

.hero-content {
  display: grid;
  grid-template-columns: minmax(0, 760px) minmax(220px, 320px);
  gap: 48px;
  align-items: start;
  justify-content: center;
}
.level-badge {
  display: inline-flex;
  padding: 7px 13px;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.18);
  color: #38bdf8;
  font-size: 0.9rem;
  font-weight: 800;
}

h1 {
  margin: 18px 0 12px;
  max-width: 760px;
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  line-height: 0.98;
  color: #f8fafc;
  letter-spacing: -0.045em;
}

.subtitle {
  max-width: 760px;
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.75;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

.meta span {
  padding: 8px 13px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-size: 0.92rem;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 760px) 320px;
  gap: 24px;
  align-items: start;
  justify-content: center;
}

.main-content,
.side-content {
  display: grid;
  gap: 20px;
}

.card {
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 22px;
  padding: 24px;
}

.glass-card {
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
}

.card h2 {
  margin: 0 0 14px;
  color: #f8fafc;
  font-size: 1.35rem;
}

.card h3 {
  margin: 0;
  color: #f8fafc;
}

.card p {
  color: #cbd5e1;
  line-height: 1.75;
}

.notes-list,
.summary-list {
  margin: 16px 0 0;
  padding-left: 20px;
  color: #cbd5e1;
  line-height: 1.85;
}

.code-block {
  margin: 18px 0 0;
  padding: 18px;
  border-radius: 16px;
  background: #020617 !important;
  border: 1px solid rgba(56, 189, 248, 0.22);
  overflow-x: auto;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.03),
    0 18px 40px rgba(2, 6, 23, 0.45);
}

.code-block code {
  display: block;
  color: #e2e8f0;
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 0.96rem;
  line-height: 1.75;
  white-space: pre;
  text-align: left;
}

.code-block[class*="language-"] {
  background: #020617 !important;
}

pre[class*="language-"] {
  background: #020617 !important;
}

.details-box {
  margin-top: 16px;
  border-radius: 16px;
  background: rgba(30, 41, 59, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.18);
  padding: 14px;
  color: #e2e8f0;
}

.details-box summary {
  cursor: pointer;
  font-weight: 800;
  color: #93c5fd;
}

.exercise {
  padding: 20px 0;
  border-top: 1px solid rgba(148, 163, 184, 0.18);
}

.exercise:first-of-type {
  border-top: none;
}

.exercise-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.exercise-header span {
  padding: 6px 11px;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.14);
  color: #86efac;
  font-size: 0.8rem;
  font-weight: 800;
}

.hint {
  margin-top: 12px;
  color: #fde68a !important;
}

.challenge-card {
  border: 1px solid rgba(168, 85, 247, 0.35);
  border-radius: 22px;
  padding: 24px;
  background:
    linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(88, 28, 135, 0.36));
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
}

.sticky-card {
  position: sticky;
  top: 24px;
}

.check-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 10px 0;
  color: #cbd5e1;
  line-height: 1.5;
}

.check-item input {
  margin-top: 4px;
  accent-color: #22c55e;
}

.locked {
  display: inline-block;
  margin-top: 10px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.12);
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 800;
}

@media (max-width: 980px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .complete-btn {
    width: 100%;
  }

  .content-grid {
    grid-template-columns: 1fr;
    justify-content: stretch;
  }

  .sticky-card {
    position: static;
  }

  .pk-prisma-bg {
    left: 42%;
    top: 12%;
    width: 520px;
    opacity: 0.07;
  }
}

@media (max-width: 560px) {
  .lesson-page {
    width: min(100% - 24px, 1180px);
    padding-top: 24px;
  }

  
  h1 {
    font-size: clamp(2.1rem, 12vw, 3.2rem);
  }

  .subtitle {
    font-size: 1rem;
  }

  .card,
  .challenge-card {
    padding: 18px;
    border-radius: 18px;
  }

  .exercise-header {
    align-items: flex-start;
    flex-direction: column;
  }

  pre {
    padding: 14px;
  }

  code {
    font-size: 0.85rem;
  }

  .pk-prisma-bg {
    display: none;
  }
}
</style>