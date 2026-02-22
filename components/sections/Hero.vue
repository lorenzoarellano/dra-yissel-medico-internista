<template>
  <section id="inicio" class="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
    <!-- Abstract Background Setup -->
    <div class="absolute inset-0 z-0">
      <!-- Decorativos de estilo Liquid / Glass -->
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 dark:bg-primary/20 blur-[100px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-info/10 dark:bg-secondary/20 blur-[120px] animate-pulse-slow" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-accent/10 dark:bg-accent/10 blur-[90px] animate-float"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="hero-text opacity-0">
          <div class="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 relative">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Medicina Interna en Aguascalientes</span>
          </div>

          <h1 class="text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
            <span class="text-slate-900 dark:text-white block">Atención médica</span>
            <span class="text-gradient block mt-2">integral y humana</span>
          </h1>

          <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
            Especializada en el abordaje y tratamiento de las <strong>enfermedades crónicas del adulto</strong> con información actualizada, integral y con calidad humana.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:4494970240" class="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all dark:bg-secondary dark:text-slate-900 dark:hover:bg-secondary/90 hover:-translate-y-1">
              <Icon name="lucide:calendar" class="w-5 h-5 mr-2" />
              Agendar Cita
            </a>
            <a href="#servicios" class="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-full text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-1">
              Conoce mis servicios
            </a>
          </div>
          
          <!-- Rating abstract / Social Proof -->
          <div class="mt-10 flex items-center gap-4">
            <div class="flex -space-x-2">
              <div class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700"></div>
              <div class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600"></div>
              <div class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-400 dark:bg-slate-500"></div>
            </div>
            <div class="text-sm">
              <div class="flex text-yellow-500 items-center">
                <Icon name="lucide:star" class="w-4 h-4 fill-current" v-for="i in 5" :key="i"/>
              </div>
              <p class="text-slate-500 dark:text-slate-400 mt-1">Más de 500+ pacientes atendidos</p>
            </div>
          </div>
        </div>

        <!-- Image Container -->
        <div class="hero-image opacity-0 relative h-[500px] lg:h-[700px] flex items-center justify-center">
          <div class="absolute inset-0 glass-card rounded-[2rem] transform rotate-3 scale-105 z-0"></div>
          <div class="relative z-10 w-full h-full glass-card rounded-[2rem] overflow-hidden group border-4 border-white/40 dark:border-slate-800/60">
            <!-- object-top maintains the face in view when cropping occurs -->
            <img src="/hero.webp" alt="Dra. Yissel Mendoza" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            
            <!-- Float Badges -->
            <div class="absolute bottom-8 -left-6 glass-card px-6 py-4 flex items-center gap-4 animate-float">
              <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Icon name="lucide:shield-check" class="w-6 h-6" />
              </div>
              <div>
                <p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Certificada por el</p>
                <p class="font-display font-bold text-slate-900 dark:text-white">Consejo Médico</p>
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
    const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.fromTo('.hero-text', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
    .fromTo('.hero-image',
      { x: 50, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 1 },
      '-=0.6'
    )
  }
})
</script>
