<template>
  <section id="servicios" class="py-24 bg-white/50 relative overflow-hidden">
    <!-- Fade superior -->
    <div class="absolute top-0 left-0 right-0 h-36 z-20 pointer-events-none"
      style="background: linear-gradient(to bottom, #f8fafc, transparent);"></div>
    <!-- Fade inferior -->
    <div class="absolute bottom-0 left-0 right-0 h-36 z-20 pointer-events-none"
      style="background: linear-gradient(to top, #f8fafc, transparent);"></div>
    <!-- Decoración de fondo con orbs GSAP -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="s-orb s-orb-1 absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[80px] -translate-y-1/2"
        style="background: radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%);"></div>
      <div class="s-orb s-orb-2 absolute top-[10%] right-[5%] w-[380px] h-[380px] rounded-full blur-[90px]"
        style="background: radial-gradient(circle, rgba(46,189,133,0.07), transparent 70%);"></div>
      <div class="s-orb s-orb-3 absolute bottom-[5%] left-[5%] w-[320px] h-[320px] rounded-full blur-[70px]"
        style="background: radial-gradient(circle, rgba(240,170,36,0.06), transparent 70%);"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16 max-w-2xl mx-auto service-header opacity-0">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3">Medicina Interna &bull; Aguascalientes, Ags.</span>
        <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Servicios de Médico Internista en Aguascalientes</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-5"></div>
        <p class="text-slate-600 leading-relaxed">
          La Dra. Yissel Mendoza ofrece atención especializada de <strong>Medicina Interna</strong> en Aguascalientes para adultos que requieren diagnóstico preciso, tratamiento efectivo y seguimiento continuo de sus padecimientos crónicos y complejos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div v-for="(service, i) in services" :key="i" class="service-card opacity-0 glass-card p-8 group">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-info/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon :name="service.icon" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">{{ service.title }}</h3>
          <p class="text-slate-600 leading-relaxed" v-html="service.description"></p>
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
    title: 'Control de enfermedades crónicas',
    description: 'Tratamiento integral y seguimiento puntual de <strong>diabetes mellitus</strong>, <strong>hipertensión arterial sistémica</strong>, enfermedad renal crónica, EPOC y otras patologías de larga evolución, buscando la estabilización metabólica y la mejor calidad de vida.'
  },
  {
    icon: 'lucide:heart-pulse',
    title: 'Trastornos endocrinológicos y cardiovasculares',
    description: 'Abordaje experto de <strong>dislipidemias</strong>, <strong>hipotiroidismo e hipertiroidismo</strong>, insufficiency suprarrenal, arritmias, insuficiencia cardiaca y patologías hematológicas, con protocolos clínicos basados en evidencia.'
  },
  {
    icon: 'lucide:shield-plus',
    title: 'Medicina preventiva y valoración prequirúrgica',
    description: '<strong>Chequeo médico preventivo</strong> completo, tamizaje oportuno de enfermedades silenciosas como diabetes y hipertensión, y <strong>valoración preoperatoria</strong> certificada de alta precisión para cirugías electivas.'
  },
  {
    icon: 'lucide:stethoscope',
    title: 'Diagnóstico complejo y segunda opinión',
    description: 'Evaluación clínica detallada de <strong>síndromes de difícil diagnóstico</strong>, manejo integral de <strong>obesidad mórbida</strong>, enfermedades autoinmunes y <strong>segundas opiniones médicas</strong> respaldadas por criterios actualizados.'
  }
]

onMounted(() => {
  const { $gsap } = useNuxtApp()
  if ($gsap) {
    // Orbs en loop
    $gsap.to('.s-orb-1', {
      x: -60, y: 40, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut'
    })
    $gsap.to('.s-orb-2', {
      x: 50, y: 60, duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2
    })
    $gsap.to('.s-orb-3', {
      x: 70, y: -40, duration: 13, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1
    })

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
