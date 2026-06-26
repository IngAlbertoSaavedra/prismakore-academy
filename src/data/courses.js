export const courses = {
  'python-aplicado': {
    title: 'Python Aplicado',
    icon: '🐍',
    status: 'Activo',
    badge: 'Ruta activa',
    description:
      'Aprende Python resolviendo ejercicios reales de automatización, archivos, datos y reportes.',
    modules: [
      'Fundamentos de Python',
      'Archivos y automatización',
      'Datos y reportes',
      'Proyecto final aplicado',
    ],
  },

  'excel-profesional': {
    title: 'Excel Profesional',
    icon: '📊',
    status: 'Próximamente',
    badge: 'En preparación',
    description:
      'Domina Excel para análisis, reportes, automatización y trabajo administrativo real.',
    modules: [
      'Funciones esenciales',
      'Tablas y limpieza de datos',
      'Reportes y dashboards',
      'Automatización con macros',
    ],
  },

  'sql-reportes': {
    title: 'SQL para Reportes',
    icon: '🧩',
    status: 'Próximamente',
    badge: 'En preparación',
    description:
      'Aprende SQL para consultar, filtrar, agrupar y preparar información útil para reportes.',
    modules: [
      'Fundamentos de consultas SQL',
      'Filtros, ordenamientos y funciones',
      'Joins y relaciones entre tablas',
      'Consultas para reportes de negocio',
    ],
  },

  'power-bi': {
    title: 'Power BI',
    icon: '📈',
    status: 'Próximamente',
    badge: 'En preparación',
    description:
      'Crea dashboards, indicadores y visualizaciones para comunicar información de forma clara.',
    modules: [
      'Carga y transformación de datos',
      'Modelo de datos',
      'Visualizaciones e indicadores',
      'Dashboard final ejecutivo',
    ],
  },

  automatizacion: {
    title: 'Automatización',
    icon: '⚙️',
    status: 'Próximamente',
    badge: 'En preparación',
    description:
      'Automatiza tareas repetitivas con Python, n8n, archivos, correos y flujos de trabajo.',
    modules: [
      'Automatización de archivos',
      'Procesos con Python',
      'Flujos con n8n',
      'Proyecto de automatización completo',
    ],
  },
}

export const courseList = Object.entries(courses).map(([slug, course]) => ({
  slug,
  ...course,
  active: course.status === 'Activo',
}))

export function getCourseBySlug(slug) {
  return courses[slug] || null
}
