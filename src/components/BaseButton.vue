<template>
  <component
    :is="to ? RouterLink : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :target="href ? target : undefined"
    :type="!to && !href ? type : undefined"
    class="base-button"
    :class="[
      `base-button--${variant}`,
      {
        'base-button--block': block
      }
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_self'
  },
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  block: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 0.92rem;
  cursor: pointer;
  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease,
    box-shadow 0.18s ease;
}

.base-button--block {
  width: 100%;
}

/* Igual al botón principal del examen */
.base-button--primary {
  background: #0ea5e9;
  color: #ffffff;
  box-shadow: none;
}

.base-button--primary:hover {
  background: #38bdf8;
}

.base-button--primary:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(125, 211, 252, 0.8);
}

/* Igual al estilo oscuro/glass del examen */
.base-button--secondary {
  background: rgba(15, 23, 42, 0.6);
  color: #e2e8f0;
  border-color: rgba(255, 255, 255, 0.1);
}

.base-button--secondary:hover {
  border-color: rgba(56, 189, 248, 0.85);
  color: #ffffff;
}

.base-button--secondary:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(125, 211, 252, 0.65);
}

.base-button--success {
  background: #10b981;
  color: #ffffff;
}

.base-button--success:hover {
  background: #34d399;
}

.base-button--ghost {
  background: rgba(30, 41, 59, 0.8);
  color: #e2e8f0;
  border-color: rgba(255, 255, 255, 0.08);
}

.base-button--ghost:hover {
  background: rgba(51, 65, 85, 0.9);
}

@media (max-width: 560px) {
  .base-button {
    width: 100%;
    min-height: 46px;
  }
}
</style>