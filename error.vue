<template>
  <div class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    style="background: linear-gradient(145deg, #f0f6fe 0%, #eef4fb 55%, #f5fbf8 100%);">

    <!-- Decorative blobs -->
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/8 blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-accent/8 blur-[100px] pointer-events-none"></div>

    <!-- Organ decorativas sutiles -->
    <img src="/liver.webp"   class="absolute top-8 right-12 w-20 opacity-10 select-none pointer-events-none" alt="" aria-hidden="true" />
    <img src="/pulmon.webp"  class="absolute bottom-16 left-10 w-24 opacity-10 select-none pointer-events-none" alt="" aria-hidden="true" />
    <img src="/kidneys.webp" class="absolute top-1/2 right-6 w-16 opacity-10 select-none pointer-events-none" alt="" aria-hidden="true" />

    <div class="relative z-10 text-center px-6 max-w-lg">

      <!-- Logo -->
      <NuxtLink to="/" class="inline-block mb-10">
        <img src="/logo.webp" alt="Dra. Yissel Mendoza" class="h-14 w-auto mx-auto" />
      </NuxtLink>

      <!-- Error code -->
      <div class="mb-4">
        <span class="text-8xl font-display font-black text-transparent bg-clip-text"
          style="background-image: linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%);">
          {{ is404 ? '404' : error?.statusCode ?? '500' }}
        </span>
      </div>

      <!-- Title -->
      <h1 class="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
        {{ is404 ? 'Página no encontrada' : 'Algo salió mal' }}
      </h1>

      <!-- Description -->
      <p class="text-slate-500 mb-10 leading-relaxed">
        {{ is404
          ? 'La página que buscas no existe o fue movida. Puedes volver al inicio o agendar tu cita directamente.'
          : 'Ocurrió un error inesperado. Por favor intenta de nuevo o contáctanos directamente.'
        }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          style="background: linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%);"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Volver al inicio
        </NuxtLink>
        <a
          href="tel:4494970240"
          class="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-slate-700 border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all hover:-translate-y-0.5"
        >
          <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          449-497-02-40
        </a>
      </div>

      <!-- Quick nav links -->
      <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
        <a v-for="link in quickLinks" :key="link.href"
          :href="link.href"
          class="text-sm text-slate-400 hover:text-primary transition-colors"
        >{{ link.label }}</a>
      </div>

    </div>

    <!-- Footer minimal -->
    <p class="absolute bottom-6 text-xs text-slate-400">
      © {{ new Date().getFullYear() }} Dra. Yissel Mendoza González — Médico Internista en Aguascalientes
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  error: {
    type: Object,
    default: null
  }
})

const is404 = computed(() => props.error?.statusCode === 404 || !props.error?.statusCode)

const quickLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Preguntas frecuentes', href: '/#preguntas' },
  { label: 'Contacto', href: '/#contacto' },
]

useHead({
  title: is404.value
    ? 'Página no encontrada — Dra. Yissel Mendoza'
    : 'Error — Dra. Yissel Mendoza',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
