<template>
  <div class="brand-badge">
    <img
      src="https://ajsaavedra.com/assets/prisma-logo.png"
      alt="Logo PrismaKore"
      class="brand-badge__logo"
    >

    <span class="brand-badge__main">
      PrismaKore Academy
    </span>

    <span v-if="label" class="brand-badge__separator">
      •
    </span>

    <span v-if="label" class="brand-badge__label">
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.brand-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  max-width: 100%;
  padding: 9px 15px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.06);
  color: #e2e8f0;
  line-height: 1;
  white-space: nowrap;
}

.brand-badge__main {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.brand-badge__label {
  color: #cbd5e1;
  font-size: 0.75rem;
  font-weight: 500;
}

.brand-badge__logo {
  width: 18px;
  height: 18px;
  object-fit: contain;
  flex: 0 0 auto;
}

.brand-badge__separator {
  color: #cbd5e1;
  font-size: 0.75rem;
  opacity: 0.9;
}

@media (max-width: 560px) {
  .brand-badge {
    gap: 6px;
    padding: 9px 13px;
  }

  .brand-badge__logo {
    width: 16px;
    height: 16px;
  }

  .brand-badge__main,
  .brand-badge__separator,
  .brand-badge__label {
    font-size: 0.68rem;
  }
}
</style>