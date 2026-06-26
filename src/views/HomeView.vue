<template>
  <main class="home-page">
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

    <section class="home-hero">
      <div class="pk-badge">
        <img
          src="https://ajsaavedra.com/assets/prisma-logo.png"
          alt="Logo PrismaKore"
          class="pk-badge-logo"
        />

        <span>PrismaKore Academy</span>
        <span class="pk-badge-muted">• Tecnología aplicada</span>
      </div>

      <div class="hero-content">
        <div class="hero-text">
          <span class="level-badge">Academia práctica</span>

          <h1>
            Aprende creando proyectos reales.
          </h1>

          <p class="subtitle">
            Rutas de aprendizaje para desarrollar habilidades en programación,
            datos, reportes y automatización con práctica guiada.
          </p>

          <div class="hero-actions">
            <RouterLink to="/ruta" class="primary-btn">
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

    <section class="section-block">
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

    <section class="section-block">
      <div class="section-title section-title-left">
        <span class="level-badge">Rutas de aprendizaje</span>
        <h2>Una academia modular.</h2>
        <p>
          Python inicia la ruta. Las demás áreas se integrarán progresivamente.
        </p>
      </div>

      <div class="courses-grid">
        <article
          v-for="course in courses"
          :key="course.title"
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

          <RouterLink
            v-if="course.active"
            to="/ruta"
            class="course-link"
          >
            Entrar al curso
          </RouterLink>
        </article>
      </div>
    </section>

    <section class="section-block flow-section">
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

    <section class="final-card glass-card">
      <span class="level-badge">Comienza ahora</span>

      <h2>Inicia con Python Aplicado.</h2>

      <p>
        La primera ruta está enfocada en aprender Python desde fundamentos
        hasta proyectos aplicados con archivos, datos y automatización.
      </p>

      <div class="hero-actions hero-actions-center">
        <RouterLink to="/ruta" class="primary-btn">
          Iniciar ruta
        </RouterLink>

        <a href="/python/examen-python/" class="secondary-btn">
          Presentar examen
        </a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      courses: [
        {
          title: 'Python Aplicado',
          icon: '🐍',
          active: true,
          description:
            'Programación práctica con ejercicios, archivos, datos, automatización y reportes.',
        },
        {
          title: 'Excel Profesional',
          icon: '📊',
          active: false,
          description:
            'Funciones, tablas, reportes, análisis y automatización para trabajo real.',
        },
        {
          title: 'SQL para Reportes',
          icon: '🧩',
          active: false,
          description:
            'Consultas, filtros, joins, agrupaciones y reportes orientados a negocio.',
        },
        {
          title: 'Power BI',
          icon: '📈',
          active: false,
          description:
            'Dashboards, indicadores, visualización y análisis para toma de decisiones.',
        },
        {
          title: 'Automatización',
          icon: '⚙️',
          active: false,
          description:
            'Flujos automáticos con Python, n8n, archivos, correos y procesos.',
        },
      ],
      flow: [
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
      ],
    }
  },
}
</script>

<style scoped>
.home-page {
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
  transform: rotate(0deg);
}

.home-hero {
  margin-bottom: 46px;
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

.hero-content {
  display: grid;
  grid-template-columns: minmax(0, 680px) minmax(280px, 420px);
  gap: 48px;
  align-items: center;
  justify-content: space-between;
  margin-top: 42px;
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
  max-width: 660px;
  margin: 18px 0 12px;
  color: #f8fafc;
  font-size: clamp(2.2rem, 4.4vw, 3.7rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.subtitle {
  max-width: 640px;
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
.secondary-btn {
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

.primary-btn:hover,
.secondary-btn:hover,
.course-link:hover {
  transform: translateY(-1px);
}

.glass-card {
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
}

.hero-card {
  border-radius: 24px;
  padding: 26px;
}

.card-label {
  display: inline-flex;
  color: #94a3b8;
  font-size: 0.82rem;
  font-weight: 700;
}

.hero-card h2 {
  margin-top: 8px;
  color: #f8fafc;
  font-size: 1.7rem;
  line-height: 1.1;
}

.hero-card p {
  margin-top: 10px;
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 22px;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: 18px;
}

.stats-grid div {
  padding: 16px 10px;
  text-align: center;
  background: rgba(2, 6, 23, 0.28);
}

.stats-grid div + div {
  border-left: 1px solid rgba(56, 189, 248, 0.12);
}

.stats-grid strong {
  display: block;
  color: #38bdf8;
  font-size: 1.45rem;
  line-height: 1;
}

.stats-grid span {
  display: block;
  margin-top: 6px;
  color: #94a3b8;
  font-size: 0.78rem;
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

.method-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.card {
  border-radius: 22px;
  padding: 22px;
}

.step-number {
  display: inline-flex;
  margin-bottom: 16px;
  color: #38bdf8;
  font-size: 1rem;
  font-weight: 900;
}

.card h3,
.course-card h3 {
  color: #f8fafc;
  font-size: 1rem;
  line-height: 1.25;
}

.card p,
.course-card p {
  margin-top: 10px;
  color: #cbd5e1;
  font-size: 0.88rem;
  line-height: 1.62;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}

.course-card {
  min-height: 220px;
  border-radius: 22px;
  padding: 18px;
}

.course-card-active {
  border-color: rgba(56, 189, 248, 0.45);
  background:
    linear-gradient(135deg, rgba(14, 165, 233, 0.22), rgba(30, 41, 59, 0.72)),
    rgba(15, 23, 42, 0.72);
}

.course-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.course-status {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.12);
  color: #cbd5e1;
  font-size: 0.68rem;
  font-weight: 900;
}

.course-card-active .course-status {
  color: #020617;
  background: #67e8f9;
}

.course-icon {
  font-size: 1.35rem;
}

.course-link {
  display: inline-flex;
  margin-top: 14px;
  color: #67e8f9;
  font-size: 0.85rem;
  font-weight: 900;
  text-decoration: none;
}

.flow-section {
  border: 1px solid rgba(56, 189, 248, 0.18);
  border-radius: 28px;
  padding: 26px;
  background: rgba(2, 6, 23, 0.32);
}

.flow-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.flow-card {
  min-height: 92px;
  border-radius: 18px;
  padding: 16px;
  text-align: center;
}

.flow-card span {
  display: inline-flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 999px;
  color: #020617;
  background: #38bdf8;
  font-size: 0.85rem;
  font-weight: 900;
}

.flow-card p {
  color: #f8fafc;
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.35;
}

.final-card {
  max-width: 980px;
  margin: 0 auto;
  border-radius: 28px;
  padding: 34px;
  text-align: center;
}

.final-card h2 {
  margin-top: 12px;
  color: #f8fafc;
  font-size: clamp(1.5rem, 2.3vw, 2rem);
}

.final-card p {
  max-width: 680px;
  margin: 12px auto 0;
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.65;
}

@media (max-width: 1040px) {
  .hero-content,
  .method-grid,
  .flow-grid {
    grid-template-columns: 1fr;
  }

  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pk-prisma-bg {
    left: 42%;
    top: 12%;
    width: 520px;
    opacity: 0.07;
  }
}

@media (max-width: 620px) {
  .home-page {
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

  .hero-content {
    margin-top: 32px;
  }

  .hero-actions,
  .hero-actions-center {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid div + div {
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