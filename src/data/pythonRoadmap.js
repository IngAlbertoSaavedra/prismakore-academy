export const pythonRoadmap = [
  {
    id: 1,
    title: 'Módulo 1: Fundamentos de Python',
    description:
      'Conceptos base para comenzar a programar con Python de forma ordenada.',
    available: true,
    lessons: [
      {
        id: 1,
        title: 'Variables, tipos y operadores',
        to: '/lesson/1',
        available: true,
      },
      {
        id: 2,
        title: 'Entrada de datos y conversiones',
        to: '/lesson/2',
        available: false,
      },
      {
        id: 3,
        title: 'Condicionales',
        to: '/lesson/3',
        available: false,
      },
      {
        id: 4,
        title: 'Ciclos while y for',
        to: '/lesson/4',
        available: false,
      },
      {
        id: 5,
        title: 'Listas',
        to: '/lesson/5',
        available: false,
      },
      {
        id: 6,
        title: 'Diccionarios',
        to: '/lesson/6',
        available: false,
      },
      {
        id: 7,
        title: 'Funciones',
        to: '/lesson/7',
        available: false,
      },
    ],
  },

  {
    id: 2,
    title: 'Módulo 2: Archivos y automatización',
    description:
      'Lectura, escritura y organización de archivos para resolver tareas repetitivas.',
    available: false,
    lessons: [
      {
        id: 8,
        title: 'Archivos TXT y CSV',
        to: '/lesson/8',
        available: false,
      },
      {
        id: 9,
        title: 'Automatización de carpetas',
        to: '/lesson/9',
        available: false,
      },
      {
        id: 10,
        title: 'Limpieza y organización de archivos',
        to: '/lesson/10',
        available: false,
      },
      {
        id: 11,
        title: 'CSV aplicado a clientes y productos',
        to: '/lesson/11',
        available: false,
      },
      {
        id: 12,
        title: 'Mini sistema con archivos',
        to: '/lesson/12',
        available: false,
      },
    ],
  },

  {
    id: 3,
    title: 'Módulo 3: Interfaces con Tkinter',
    description:
      'Creación de ventanas, formularios y tablas visuales para construir aplicaciones de escritorio.',
    available: false,
    lessons: [
      {
        id: 13,
        title: 'Ventanas, etiquetas, entradas y botones',
        to: '/lesson/13',
        available: false,
      },
      {
        id: 14,
        title: 'Formularios visuales',
        to: '/lesson/14',
        available: false,
      },
      {
        id: 15,
        title: 'Messagebox, validaciones y limpieza',
        to: '/lesson/15',
        available: false,
      },
      {
        id: 16,
        title: 'Treeview y tablas',
        to: '/lesson/16',
        available: false,
      },
      {
        id: 17,
        title: 'Mini app visual con CSV',
        to: '/lesson/17',
        available: false,
      },
    ],
  },

  {
    id: 4,
    title: 'Módulo 4: Bases de datos con MySQL',
    description:
      'Conexión de Python con bases de datos MySQL para consultar, insertar, actualizar y eliminar información.',
    available: false,
    lessons: [
      {
        id: 18,
        title: 'Introducción a bases de datos',
        to: '/lesson/18',
        available: false,
      },
      {
        id: 19,
        title: 'Conexión Python con MySQL',
        to: '/lesson/19',
        available: false,
      },
      {
        id: 20,
        title: 'INSERT, SELECT, UPDATE y DELETE',
        to: '/lesson/20',
        available: false,
      },
      {
        id: 21,
        title: 'Formularios Tkinter conectados a MySQL',
        to: '/lesson/21',
        available: false,
      },
      {
        id: 22,
        title: 'Mini sistema CRUD con MySQL',
        to: '/lesson/22',
        available: false,
      },
    ],
  },

  {
    id: 5,
    title: 'Módulo 5: Datos, reportes y T-SQL',
    description:
      'Uso de consultas SQL Server y T-SQL para reportes, procedimientos básicos y conexión con Python.',
    available: false,
    lessons: [
      {
        id: 23,
        title: 'Introducción a SQL Server y T-SQL',
        to: '/lesson/23',
        available: false,
      },
      {
        id: 24,
        title: 'SELECT, WHERE, ORDER BY y filtros',
        to: '/lesson/24',
        available: false,
      },
      {
        id: 25,
        title: 'JOIN, GROUP BY y funciones de agregación',
        to: '/lesson/25',
        available: false,
      },
      {
        id: 26,
        title: 'Consultas para reportes',
        to: '/lesson/26',
        available: false,
      },
      {
        id: 27,
        title: 'Stored procedures básicos',
        to: '/lesson/27',
        available: false,
      },
      {
        id: 28,
        title: 'Exportar resultados y conectar con Python',
        to: '/lesson/28',
        available: false,
      },
    ],
  },

  {
    id: 6,
    title: 'Módulo 6: Proyecto final aplicado',
    description:
      'Construcción de una solución final integrando interfaz, base de datos, reportes y automatización.',
    available: false,
    lessons: [
      {
        id: 29,
        title: 'Diseño del caso práctico',
        to: '/lesson/29',
        available: false,
      },
      {
        id: 30,
        title: 'Base de datos del proyecto',
        to: '/lesson/30',
        available: false,
      },
      {
        id: 31,
        title: 'Interfaz visual',
        to: '/lesson/31',
        available: false,
      },
      {
        id: 32,
        title: 'Reportes automáticos',
        to: '/lesson/32',
        available: false,
      },
      {
        id: 33,
        title: 'Validaciones y mejoras',
        to: '/lesson/33',
        available: false,
      },
      {
        id: 34,
        title: 'Entregable final',
        to: '/lesson/34',
        available: false,
      },
    ],
  },
]

export function getAvailableLessons() {
  return pythonRoadmap.flatMap((module) =>
    module.lessons.filter((lesson) => lesson.available)
  )
}

export function getLessonById(id) {
  const lessonId = Number(id)

  for (const module of pythonRoadmap) {
    const lesson = module.lessons.find((item) => item.id === lessonId)

    if (lesson) {
      return {
        ...lesson,
        moduleId: module.id,
        moduleTitle: module.title,
      }
    }
  }

  return null
}