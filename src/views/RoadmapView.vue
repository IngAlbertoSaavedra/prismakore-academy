<script setup>
  import modules from '../data/modules.json'
 import lesson from '../data/lesson.json'
  const lessons = [lesson]
</script>

<template>
  <div>
    <h1>Ruta de aprendizaje</h1>

    <div v-for="module in modules" :key="module.id">
      <h2>{{ module.title }}</h2>
      <p>{{ module.description }}</p>

      <ul>
        <li
          v-for="lesson in lessons.filter(l => l.moduleId === module.id)"
          :key="lesson.id"
        >
          {{ lesson.order }}. {{ lesson.title }}
        </li>
      </ul>
    </div>
  </div>
</template>