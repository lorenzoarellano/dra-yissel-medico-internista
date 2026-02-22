<template>
  <section id="preguntas" class="py-24 relative">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-16 faq-header opacity-0">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Preguntas Frecuentes</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item opacity-0 glass-card transition-all duration-300">
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            :aria-expanded="activeIndex === index"
          >
            <span class="font-semibold text-slate-800 dark:text-slate-100 pr-8">{{ faq.question }}</span>
            <div 
              class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300"
              :class="{ 'rotate-180 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary': activeIndex === index }"
            >
              <Icon name="lucide:chevron-down" class="w-5 h-5" />
            </div>
          </button>
          
          <div 
            v-show="activeIndex === index"
            class="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed origin-top"
          >
            <div class="pt-2 border-t border-slate-100 dark:border-slate-800">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Emergency Box -->
      <div class="mt-12 glass-card p-8 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20 faq-item opacity-0">
        <div class="flex items-start gap-4">
          <div class="p-3 bg-red-100 dark:bg-red-900/50 rounded-full text-red-600 dark:text-red-400">
            <Icon name="lucide:alert-triangle" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-slate-900 dark:text-white mb-2">Protocolo de Emergencias</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              Contamos con una línea especial destinada exclusivamente a situaciones médicas urgentes de pacientes ya valorados: 
              <br class="hidden sm:block"/>
              <a href="tel:3441041492" class="font-bold text-red-600 dark:text-red-400 hover:underline mt-2 inline-block">344-104-14-92</a>.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const activeIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: '¿Cómo llego exactamente al consultorio?',
    answer: 'Nos encontramos dentro del Centro Oncológico del Hospital MAC SUR. Al llegar, dirígete a la Torre C y sube al consultorio 201.'
  },
  {
    question: '¿Qué padecimientos trata un médico internista?',
    answer: 'Nos enfocamos en el diagnóstico y tratamiento no quirúrgico de enfermedades que afectan a los órganos internos de los adultos, especialmente <strong>padecimientos crónicos y complejos</strong> (como alteraciones metabólicas, problemas cardiovasculares o respiratorios profundos).'
  },
  {
    question: '¿Atiende pacientes pediátricos o adolescentes?',
    answer: 'La Medicina Interna se especializa exclusivamente en la atención integral de pacientes <strong>adultos</strong>. Para menores de edad lo ideal es acudir con un Pediatra.'
  }
]

onMounted(() => {
  const { $gsap } = useNuxtApp()
  if ($gsap) {
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: '#preguntas',
        start: 'top 80%',
      }
    })
    
    tl.fromTo('.faq-header', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo('.faq-item', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 },
        '-=0.2'
      )
  }
})
</script>
