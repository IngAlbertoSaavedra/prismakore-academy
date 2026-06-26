<template>
  <main class="course-page">
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

    <section v-if="course" class="course-wrapper">
      <RouterLink to="/" class="back-link">
        ← Volver al inicio
      </RouterLink>

      <div class="pk-badge">
        <img
          src="https://ajsaavedra.com/assets/prisma-logo.png"
          alt="Logo PrismaKore"
          class="pk-badge-logo"
        />

        <span>PrismaKore Academy</span>
        <span class="pk-badge-muted">• {{ course.category }}</span>
      </div>

      <section class="course-hero">
        <div class="course-hero-text">
          <span class="level-badge">
            {{ course.badge }}
          </span>

          <h1>
            <span class="course-icon">{{ course.icon }}</span>
            {{ course.title }}
          </h1>

          <p class="subtitle">
            {{ course.longDescription }}
          </p>

          <div class="hero-actions">
            <RouterLink
              v-if="course.primaryAction"
              :to="course.primaryAction.to"
              class="primary-btn"
            >
              {{ course.primaryAction.label }}
            </RouterLink>

            <a
              v-if="course.secondaryAction"
              :href="course.secondaryAction.href"
              class="secondary-btn"
            >
              {{ course.secondaryAction.label }}
            </a>

            <span
              v-if="!course.primaryAction"
              class="disabled-btn"
            >
              Próximamente
            </span>
          </div>
        </div>

        <aside class="course-summary glass-card">
          <span class="card-label">Estado</span>
          <strong>{{ course.status }}</strong>

          <p>
            {{ course.description }}
          </p>

          <div class="summary-list">
            <div>
              <span>Módulos</span>
              <strong>{{ course.modules.length }}</strong>
            </div>

            <div>
              <span>Proyecto</span>
              <strong>Final</strong>
            </div>

            <div>
              <span>Enfoque</span>
              <strong>Práctico</strong>
            </div>
          </div>
        </aside>
      </section>

      <section class="section-block">
        <div class="section-title section-title-left">
          <span class="level-badge">¿Para quién es?</span>
          <h2>Perfil recomendado</h2>
          <p>
            Esta ruta está pensada para personas que quieren aprender con práctica,
            ejemplos reales y una secuencia clara.
          </p>
        </div>

        <div class="audience-grid">
          <article
            v-for="item in course.audience"
            :key="item"
            class="mini-card glass-card"
          >
            {{ item }}
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-title section-title-left">
          <span class="level-badge">Temario general</span>
          <h2>Módulos de la ruta</h2>
        </div>

        <div class="modules-grid">
          <article
            v-for="module in course.modules"
            :key="module.title"
            class="module-card glass-card"
          >
            <h3>{{ module.title }}</h3>

            <ul>
              <li
                v-for="lesson in module.lessons"
                :key="lesson"
              >
                {{ lesson }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-title section-title-left">
          <span class="level-badge">Al finalizar</span>
          <h2>Lo que podrás construir</h2>
        </div>

        <div class="outcomes-grid">
          <article
            v-for="outcome in course.outcomes"
            :key="outcome"
            class="outcome-card glass-card"
          >
            {{ outcome }}
          </article>
        </div>
      </section>

      <section class="final-card glass-card">
        <span class="level-badge">Proyecto final</span>

        <h2>{{ course.project }}</h2>

        <p>
          La idea es que cada ruta termine con un entregable práctico que puedas
          mostrar, mejorar o adaptar a un caso real.
        </p>

        <div class="hero-actions hero-actions-center">
          <RouterLink
            v-if="course.primaryAction"
            :to="course.primaryAction.to"
            class="primary-btn"
          >
            {{ course.primaryAction.label }}
          </RouterLink>

          <RouterLink to="/" class="secondary-btn">
            Ver otras rutas
          </RouterLink>
        </div>
      </section>
    </section>

    <section v-else class="not-found glass-card">
      <h1>Ruta no encontrada</h1>
      <p>
        La ruta que estás buscando todavía no existe o cambió de dirección.
      </p>

      <RouterLink to="/" class="primary-btn">
        Volver al inicio
      </RouterLink>
    </section>
  </main>
</template>

<script>
import { getCourseBySlug } from '../data/courses'

export default {
  name: 'CourseView',
  computed: {
    course() {
      return getCourseBySlug(this.$route.params.slug)
    },
  },
}
</script>

<style scoped>
.course-page {
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
  left: 48%;
  top: 8%;
  width: 720px;
  opacity: 0.12;
  pointer-events: none;
}

.course-wrapper {
  position: relative;
}

.back-link {
  display: inline-flex;
  margin-bottom: 22px;
  color: #93c5fd;
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
}

.pk-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.06);
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.pk-badge-logo {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.pk-badge-muted {
  color: #cbd5e1;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 600;
}

.course-hero {
  display: grid;
  grid-template-columns: minmax(0, 720px) minmax(280px, 390px);
  gap: 48px;
  align-items: center;
  justify-content: space-between;
  margin-top: 42px;
  margin-bottom: 48px;
}

.level-badge {
  display: inline-flex;
  padding: 7px 13px;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.18);
  color: #38bdf8;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  max-width: 720px;
  margin: 18px 0 12px;
  color: #f8fafc;
  font-size: clamp(2.1rem, 4.2vw, 3.5rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.course-icon {
  margin-right: 8px;
}

.subtitle {
  max-width: 680px;
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}

.hero-actions-center {
  justify-content: center;
}

.primary-btn,
.secondary-btn,
.disabled-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 900;
  text-decoration: none;
  transition: 0.2s ease;
}

.primary-btn {
  color: #020617;
  background: linear-gradient(135deg, #38bdf8, #8b5cf6);
  box-shadow: 0 18px 45px rgba(14, 165, 233, 0.16);
}

.secondary-btn {
  color: #e0f2fe;
  border: 1px solid rgba(56, 189, 248, 0.35);
  background: rgba(15, 23, 42, 0.55);
}

.disabled-btn {
  color: #94a3b8;
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(15, 23, 42, 0.55);
  cursor: not-allowed;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.glass-card {
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
}

.course-summary {
  border-radius: 24px;
  padding: 26px;
}

.card-label {
  display: inline-flex;
  color: #94a3b8;
  font-size: 0.82rem;
  font-weight: 700;
}

.course-summary > strong {
  display: block;
  margin-top: 8px;
  color: #38bdf8;
  font-size: 1.6rem;
}

.course-summary p {
  margin-top: 10px;
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
}

.summary-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 22px;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: 18px;
}

.summary-list div {
  padding: 16px 10px;
  text-align: center;
  background: rgba(2, 6, 23, 0.28);
}

.summary-list div + div {
  border-left: 1px solid rgba(56, 189, 248, 0.12);
}

.summary-list span {
  display: block;
  color: #94a3b8;
  font-size: 0.75rem;
}

.summary-list strong {
  display: block;
  margin-top: 6px;
  color: #38bdf8;
  font-size: 1rem;
}

.section-block {
  margin-bottom: 46px;
}

.section-title {
  max-width: 760px;
  margin: 0 auto 22px;
  text-align: center;
}

.section-title-left {
  margin-left: 0;
  text-align: left;
}

.section-title h2 {
  margin-top: 12px;
  color: #f8fafc;
  font-size: clamp(1.5rem, 2.4vw, 2.1rem);
  line-height: 1.16;
  letter-spacing: -0.035em;
}

.section-title p {
  margin-top: 10px;
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.65;
}

.audience-grid,
.outcomes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.mini-card,
.outcome-card {
  border-radius: 18px;
  padding: 18px;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.45;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.module-card {
  border-radius: 22px;
  padding: 20px;
}

.module-card h3 {
  color: #f8fafc;
  font-size: 1rem;
  line-height: 1.25;
}

.module-card ul {
  display: grid;
  gap: 8px;
  margin: 14px 0 0;
  padding-left: 18px;
  color: #cbd5e1;
  font-size: 0.86rem;
  line-height: 1.45;
}

.final-card,
.not-found {
  max-width: 980px;
  margin: 0 auto;
  border-radius: 28px;
  padding: 34px;
  text-align: center;
}

.final-card h2,
.not-found h1 {
  margin-top: 12px;
  color: #f8fafc;
  font-size: clamp(1.5rem, 2.3vw, 2rem);
}

.final-card p,
.not-found p {
  max-width: 680px;
  margin: 12px auto 0;
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.65;
}

.not-found {
  margin-top: 80px;
}

@media (max-width: 1040px) {
  .course-hero,
  .modules-grid,
  .audience-grid,
  .outcomes-grid {
    grid-template-columns: 1fr;
  }

  .pk-prisma-bg {
    left: 42%;
    top: 12%;
    width: 520px;
    opacity: 0.07;
  }
}

@media (max-width: 620px) {
  .course-page {
    width: min(100% - 24px, 1180px);
    padding-top: 24px;
  }

  .pk-badge {
    padding: 9px 13px;
    font-size: 0.68rem;
  }

  .pk-badge-muted {
    display: none;
  }

  h1 {
    font-size: clamp(2rem, 10vw, 3rem);
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .course-hero {
    margin-top: 32px;
  }

  .hero-actions,
  .hero-actions-center {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn,
  .disabled-btn {
    width: 100%;
  }

  .summary-list {
    grid-template-columns: 1fr;
  }

  .summary-list div + div {
    border-left: none;
    border-top: 1px solid rgba(56, 189, 248, 0.12);
  }

  .pk-prisma-bg {
    display: none;
  }

  .section-title-left {
    text-align: center;
  }
}
</style>