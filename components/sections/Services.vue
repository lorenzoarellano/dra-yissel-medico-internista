<template>
  <section id="servicios" class="py-24 bg-white/50 dark:bg-slate-900/50 relative">
    <!-- Decoración de fondo -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-info/5 dark:bg-info/10 rounded-full blur-[100px] -translate-y-1/2"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16 max-w-2xl mx-auto service-header opacity-0">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Mis Servicios Médicos</h2>
        <p class="text-slate-600 dark:text-slate-300">
          Enfoque especializado en el diagnóstico, tratamiento no quirúrgico y prevención de enfermedades en adultos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div v-for="(service, i) in services" :key="i" class="service-card opacity-0 glass-card p-8 group">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-info/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon :name="service.icon" class="w-8 h-8 text-primary dark:text-secondary" />
          </div>
          <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">{{ service.title }}</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed" v-html="service.description"></p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const services = [
  {
    icon: 'lucide:activity',
    title: 'Manejo de enfermedades crónicas',
    description: 'Tratamiento integral de <strong>diabetes</strong>, <strong>hipertensión arterial</strong>, enfermedades pulmonares y del riñón, buscando estabilizar su salud a largo plazo.'
  },
  {
    icon: 'lucide:heart-pulse',
    title: 'Atención a trastornos específicos',
    description: 'Abordaje experto de enfermedades <strong>endocrinológicas</strong>, renales, hematológicas y <strong>cardiovasculares</strong> con base en protocolos actualizados.'
  },
  {
    icon: 'lucide:shield-plus',
    title: 'Prevención médica',
    description: 'Realización de <strong>chequeos preventivos</strong>, tamizaje oportuno de enfermedades silenciosas y <strong>valoración preoperatoria</strong> de alta precisión.'
  },
  {
    icon: 'lucide:stethoscope',
    title: 'Atención especializada',
    description: 'Diagnóstico asertivo de patologías complejas, manejo integral de <strong>obesidad</strong> y <strong>segundas opiniones médicas</strong> para su tranquilidad y bienestar.'
  }
]

onMounted(() => {
  const { $gsap } = useNuxtApp()
  if ($gsap) {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: '#servicios',
        start: 'top 75%',
      }
    })
    
    tl.fromTo('.service-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo('.service-card', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
        '-=0.3'
      )
  }
})
</script>
