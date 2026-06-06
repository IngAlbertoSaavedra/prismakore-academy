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

    <section class="hero">
        <BrandBadge label="Python Aplicado" />

      <h1>
        Aprende Python resolviendo ejercicios reales.
      </h1>

      <p class="subtitle">
        Repasa los fundamentos con una lección guiada y después realiza una evaluación
        automática para conocer tu resultado.
      </p>

        <div class="hero-actions">
        <BaseButton to="/leccion/variables-tipos-operadores" variant="primary">
            Abrir lección 1
        </BaseButton>

        <BaseButton
            href="https://ajsaavedra.com/python/examen-python/"
            variant="secondary"
        >
            Ir a la evaluación
        </BaseButton>
        </div>
    </section>

    <section class="cards-grid">
      <article class="glass-card">
        <span class="step">01</span>
        <h2>Lección guiada</h2>
        <p>
          Revisa variables, tipos de datos y operadores con explicación breve,
          ejemplos, ejercicios y reto práctico.
        </p>
      </article>

      <article class="glass-card">
        <span class="step">02</span>
        <h2>Práctica</h2>
        <p>
          Resuelve ejercicios para comprobar que entiendes cómo guardar datos,
          operar valores y mostrar resultados en Python.
        </p>
      </article>

      <article class="glass-card">
        <span class="step">03</span>
        <h2>Evaluación</h2>
        <p>
          Contesta 20 preguntas. Al finalizar recibirás tu resultado y detalle
          de respuestas por correo.
        </p>
      </article>
    </section>
  </main>
</template>

<script setup>
    import BaseButton from '../components/BaseButton.vue'
    import BrandBadge from '../components/BrandBadge.vue'

</script>

<style scoped>
    .home-page {
        position: relative;
        min-height: 100vh;
        width: min(1120px, calc(100% - 32px));
        margin: 0 auto;
        padding: 48px 0 72px;
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
    left: 54%;
    top: 12%;
    width: 720px;
    opacity: 0.12;
    pointer-events: none;
    }

    .hero {
        max-width: 760px;
        margin: 0 auto;
        padding-top: 24px;
        text-align: center;
    }

    h1 {
        margin: 26px auto 18px;
        max-width: 760px;
        font-size: clamp(2.2rem, 4vw, 3rem);
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: #f8fafc;
    }

    .subtitle {
        max-width: 680px;
        margin: 0 auto;
        color: #cbd5e1;
        font-size: 1.05rem;
        line-height: 1.75;
    }

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin-top: 28px;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
        margin-top: 42px;
    }

    .glass-card {
    min-height: 190px;
    padding: 22px;
    border-radius: 22px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    background: rgba(15, 23, 42, 0.72);
    backdrop-filter: blur(10px);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
    }

    .step {
    display: inline-flex;
    margin-bottom: 18px;
    color: #38bdf8;
    font-weight: 900;
    letter-spacing: 0.08em;
    }

    .glass-card h2 {
        margin: 0 0 12px;
        color: #f8fafc;
        font-size: 1.25rem;
    }

    .glass-card p {
    margin: 0;
    color: #cbd5e1;
    line-height: 1.7;
    }

    @media (max-width: 900px) {
    .cards-grid {
        grid-template-columns: 1fr;
    }

    .pk-prisma-bg {
        left: 38%;
        top: 10%;
        width: 620px;
        opacity: 0.08;
    }
    }

    @media (max-width: 560px) {
    .home-page {
        width: min(100% - 24px, 1180px);
        padding-top: 32px;
    }

    h1 {
        font-size: clamp(2.8rem, 14vw, 4rem);
    }

    .subtitle {
        font-size: 1.05rem;
    }

    .hero-actions {
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .primary-btn,
    .secondary-btn {
        width: 100%;
    }

    .pk-prisma-bg {
        display: none;
    }
    }
</style>