<template>
  <section id="acerca" class="py-24 relative">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Acerca de la Dra. Yissel Mendoza</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div class="glass-card p-8 md:p-12 relative overflow-hidden group">
          <!-- Decorative element -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/20 rounded-full blur-3xl -mx-20 -my-20 transition-transform duration-700 group-hover:scale-150"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 items-center">
            
            <div class="md:col-span-5 flex justify-center">
              <div class="relative w-64 h-64 md:w-full md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-slate-800/50">
                <img src="/perfil-placeholder.webp" alt="Dra. Yissel Mendoza, Médico Internista" class="w-full h-full object-cover" loading="lazy">
              </div>
            </div>

            <div class="md:col-span-7 space-y-6">
              <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Perfil Profesional
              </h3>
              
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <Icon name="lucide:check-circle-2" class="w-5 h-5 text-accent" />
                  </div>
                  <p class="ml-3 text-slate-600 dark:text-slate-300">
                    Licenciatura como <strong>Médico, Cirujano y Partero</strong> por la Universidad de Guadalajara.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <Icon name="lucide:check-circle-2" class="w-5 h-5 text-accent" />
                  </div>
                  <p class="ml-3 text-slate-600 dark:text-slate-300">
                    <strong>Especialidad en Medicina Interna</strong> por la Universidad de Guadalajara.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <Icon name="lucide:check-circle-2" class="w-5 h-5 text-accent" />
                  </div>
                  <p class="ml-3 text-slate-600 dark:text-slate-300">
                    Egresada del <strong>Centro Médico Nacional de Occidente</strong>.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <Icon name="lucide:award" class="w-5 h-5 text-accent" />
                  </div>
                  <p class="ml-3 text-slate-600 dark:text-slate-300">
                    Cuenta con <strong>certificaciones del consejo médico</strong> vigente.
                  </p>
                </li>
              </ul>

              <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
                <div class="glass px-4 py-2 rounded-lg inline-flex items-center space-x-2">
                  <Icon name="lucide:file-text" class="w-4 h-4 text-primary dark:text-secondary" />
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">Cédula Prof: <strong>12193559</strong></span>
                </div>
                <div class="glass px-4 py-2 rounded-lg inline-flex items-center space-x-2">
                  <Icon name="lucide:file-badge" class="w-4 h-4 text-primary dark:text-secondary" />
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">Cédula Esp: <strong>14201115</strong></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const { $gsap } = useNuxtApp()
  if ($gsap) {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: '#acerca',
        start: 'top 80%',
      }
    })
    tl.fromTo('#acerca .glass-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
  }
})
</script>
