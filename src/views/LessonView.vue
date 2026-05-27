<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import lessons from '../data/lessons.json'

const route = useRoute()

const lesson = computed(() => {
  return lessons.find(item => item.slug === route.params.slug)
})

const solutionVisible = ref(false)
const completedLessons = ref([])

const storageKey = 'prismakore_academy_progress'

onMounted(() => {
  const savedProgress = localStorage.getItem(storageKey)

  if (savedProgress) {
    completedLessons.value = JSON.parse(savedProgress)
  }
})

const isCompleted = computed(() => {
  if (!lesson.value) return false
  return completedLessons.value.includes(lesson.value.id)
})

function toggleCompleted() {
  if (!lesson.value) return

  const lessonId = lesson.value.id

  if (completedLessons.value.includes(lessonId)) {
    completedLessons.value = completedLessons.value.filter(id => id !== lessonId)
  } else {
    completedLessons.value.push(lessonId)
  }

  localStorage.setItem(storageKey, JSON.stringify(completedLessons.value))
}

function toggleSolution() {
  solutionVisible.value = !solutionVisible.value
}
</script>

<template>
  <v-container class="py-6">
    <div v-if="lesson">
      <v-row>
        <v-col cols="12">
          <RouterLink to="/ruta" class="text-decoration-none">
            ← Volver a la ruta de aprendizaje
          </RouterLink>
        </v-col>
      </v-row>

      <v-row class="mt-2">
        <v-col cols="12" md="8">
          <v-chip color="primary" variant="tonal" class="mb-3">
            {{ lesson.level }}
          </v-chip>

          <h1 class="text-h4 font-weight-bold mb-2">
            {{ lesson.order }}. {{ lesson.title }}
          </h1>

          <p class="text-body-1 text-medium-emphasis mb-4">
            {{ lesson.summary }}
          </p>

          <div class="d-flex align-center ga-3 mb-6">
            <v-chip color="secondary" variant="tonal">
              Duración: {{ lesson.duration }}
            </v-chip>

            <v-chip
              :color="isCompleted ? 'green' : 'grey'"
              variant="tonal"
            >
              {{ isCompleted ? 'Completada' : 'Pendiente' }}
            </v-chip>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="d-flex align-start justify-md-end">
          <v-btn
            :color="isCompleted ? 'green' : 'primary'"
            size="large"
            @click="toggleCompleted"
          >
            {{ isCompleted ? 'Marcar como pendiente' : 'Marcar como completada' }}
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="8">
          <v-card class="mb-5" elevation="2">
            <v-card-title>
              Explicación
            </v-card-title>

            <v-card-text>
              <p class="text-body-1">
                {{ lesson.explanation }}
              </p>
            </v-card-text>
          </v-card>

          <v-card class="mb-5" elevation="2">
            <v-card-title>
              {{ lesson.example.title }}
            </v-card-title>

            <v-card-text>
              <pre class="pk-code-block"><code>{{ lesson.example.code }}</code></pre>
            </v-card-text>
          </v-card>

          <v-card class="mb-5" elevation="2">
            <v-card-title>
              Ejercicios
            </v-card-title>

            <v-card-text>
              <v-expansion-panels variant="accordion">
                <v-expansion-panel
                  v-for="exercise in lesson.exercises"
                  :key="exercise.id"
                >
                  <v-expansion-panel-title>
                    {{ exercise.title }}
                  </v-expansion-panel-title>

                  <v-expansion-panel-text>
                    <p class="mb-4">
                      {{ exercise.instructions }}
                    </p>

                    <pre class="code-block"><code>{{ exercise.starterCode }}</code></pre>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>

          <v-card class="mb-5" elevation="2">
            <v-card-title class="d-flex align-center justify-space-between">
              <span>Solución</span>

              <v-btn
                color="primary"
                variant="tonal"
                @click="toggleSolution"
              >
                {{ solutionVisible ? 'Ocultar solución' : 'Ver solución' }}
              </v-btn>
            </v-card-title>

            <v-card-text v-if="solutionVisible"> 
              <pre class="pk-code-block"><code>{{ lesson.solution }}</code></pre>
            </v-card-text>

            <v-card-text v-else>
              <p class="text-medium-emphasis">
                Intenta resolver los ejercicios antes de abrir la solución.
                Sí, ya sé que el botón está ahí tentando como dulce en caja registradora.
              </p>
            </v-card-text>
          </v-card>

          <v-card class="mb-5" elevation="2">
            <v-card-title>
              Reto
            </v-card-title>

            <v-card-text>
              <p>
                {{ lesson.challenge }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="2" class="sticky-card">
            <v-card-title>
              Checklist
            </v-card-title>

            <v-card-text>
              <v-list density="compact">
                <v-list-item
                  v-for="item in lesson.checklist"
                  :key="item"
                >
                  <template #prepend>
                    <v-icon color="green">
                      mdi-check-circle-outline
                    </v-icon>
                  </template>

                  <v-list-item-title>
                    {{ item }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <v-card v-else class="pa-6" elevation="2">
      <h1 class="text-h5 mb-3">
        Lección no encontrada
      </h1>

      <p class="mb-4">
        No se encontró la lección solicitada. Probablemente el slug no coincide,
        porque incluso las URLs tienen días malos.
      </p>

      <RouterLink to="/ruta">
        Volver a la ruta de aprendizaje
      </RouterLink>
    </v-card>
  </v-container>
</template>

<style scoped>
.code-block {
  background: #111827;
  color: #f9fafb;
  padding: 16px;
  border-radius: 12px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: pre-wrap;
}

.sticky-card {
  position: sticky;
  top: 24px;
}
</style>