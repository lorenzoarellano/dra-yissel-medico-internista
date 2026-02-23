<template>
  <section id="preguntas" class="py-24 relative overflow-hidden">
    <!-- Fade superior -->
    <div class="absolute top-0 left-0 right-0 h-36 z-10 pointer-events-none"
      style="background: linear-gradient(to bottom, #f8fafc, transparent);"></div>
    <!-- Fade inferior -->
    <div class="absolute bottom-0 left-0 right-0 h-36 z-10 pointer-events-none"
      style="background: linear-gradient(to top, #f8fafc, transparent);"></div>
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-16 faq-header opacity-0">
        <span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3">Preguntas sobre Medicina Interna en Aguascalientes</span>
        <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2>
        <div class="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
        <p class="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">Resolvemos las dudas más comunes sobre la atención de medicina interna, consultas, diagnóstico y procedimientos de la Dra. Yissel Mendoza en Aguascalientes.</p>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item opacity-0 glass-card transition-all duration-300">
          <button 
            @click="toggleFaq(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            :aria-expanded="activeIndex === index"
          >
            <span class="font-semibold text-slate-800 pr-8">{{ faq.question }}</span>
            <div 
              class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300"
              :class="{ 'rotate-180 bg-primary/10 text-primary': activeIndex === index }"
            >
              <Icon name="lucide:chevron-down" class="w-5 h-5" />
            </div>
          </button>
          
          <div 
            v-show="activeIndex === index"
            class="px-6 pb-6 text-slate-600 leading-relaxed origin-top"
          >
            <div class="pt-2 border-t border-slate-100">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Emergency Box -->
      <div class="mt-12 glass-card p-8 border-l-4 border-l-red-500 bg-red-50/50 faq-item opacity-0">
        <div class="flex items-start gap-4">
          <div class="p-3 bg-red-100 rounded-full text-red-600">
            <Icon name="lucide:alert-triangle" class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-slate-900 mb-2">Protocolo de Emergencias</h3>
            <p class="text-sm text-slate-600">
              Contamos con una línea especial destinada exclusivamente a situaciones médicas urgentes de pacientes ya valorados: 
              <br class="hidden sm:block"/>
              <a href="tel:3441041492" class="font-bold text-red-600 hover:underline mt-2 inline-block">344-104-14-92</a>.
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
    question: '¿Qué es un médico internista y en qué se diferencia de un médico general?',
    answer: 'Un <strong>médico internista</strong> es especialista en el diagnóstico y tratamiento no quirúrgico de enfermedades que afectan los órganos internos del adulto, especialmente padecimientos crónicos y complejos (diabetes, hipertensión, enfermedades renales, endocrinológicas, hematológicas). A diferencia del médico general, el internista tiene 3 años adicionales de formación hospitalaria de alta complejidad y está certificado por un consejo oficial para manejar casos de mayor profundidad clínica.'
  },
  {
    question: '¿Cómo llego exactamente al consultorio de la Dra. Yissel Mendoza?',
    answer: 'El consultorio se encuentra dentro del <strong>Hospital MAC SUR, Torre C, Consultorio 201</strong>, en Blvrd. República de Perú 102, Aguascalientes, Ags. C.P. 20234. Al llegar al hospital, dirígete a la Torre C o al área de Centro Oncológico y sube al nivel 2. Cuenta con estacionamiento propio y transporte público cercano.'
  },
  {
    question: '¿Qué padecimientos trata un médico internista en Aguascalientes?',
    answer: 'La Dra. Yissel Mendoza trata un amplio espectro de padecimientos: <strong>diabetes mellitus tipo 1 y tipo 2</strong>, hipertensión arterial, dislipidemias, enfermedad renal crónica, hipotiroidismo, hipertiroidismo, anemia, enfermedades pulmonares crónicas (EPOC, asma del adulto), enfermedades autoinmunes, obesidad mórbida y muchas otras patologías internas del adulto.'
  },
  {
    question: '¿Necesito referencia médica para consultar con la Dra. Yissel?',
    answer: 'No, <strong>no es necesaria una referencia médica previa</strong> para agendar tu consulta. Puedes llamar directamente al <a href="tel:4494970240" class="text-primary font-bold hover:underline">449-497-02-40</a> o contactar por WhatsApp para programar tu cita. Sin embargo, si tu médico general ya te realizó estudios, es recomendable llevarlos para optimizar la consulta.'
  },
  {
    question: '¿Cuánto tiempo dura una consulta de medicina interna?',
    answer: 'Una primera consulta dura aproximadamente <strong>40 a 60 minutos</strong>, ya que implica historia clínica completa, revisión de estudios previos, exploración física y plan diagnóstico-terapéutico integral. Las consultas de seguimiento duran entre 20 y 30 minutos para evaluar evolución y ajustar tratamiento.'
  },
  {
    question: '¿Qué debo llevar a mi primera consulta?',
    answer: 'Para aprovechar al máximo tu primera consulta, te recomendamos traer: <strong>identificación oficial</strong>, estudios de laboratorio recientes (si tienes), lista de medicamentos que tomas actualmente, historial médico relevante y, en caso de alguna enfermedad específica, cualquier diagnóstico previo por escrito. No es indispensable, pero agiliza el proceso.'
  },
  {
    question: '¿La Dra. Yissel Mendoza trabaja con seguros médicos o planes de salud?',
    answer: 'Para consultar la aceptación de tu seguro médico o plan de salud específico, te invitamos a comunicarte directamente al <a href="tel:4494970240" class="text-primary font-bold hover:underline">449-497-02-40</a> antes de tu cita. El pago particular también está disponible, garantizando atención ágil sin tiempos de espera prolongados.'
  },
  {
    question: '¿Atiende pacientes pediátricos o adolescentes?',
    answer: 'La Medicina Interna se especializa exclusivamente en la atención integral de pacientes <strong>adultos (mayores de 18 años)</strong>. Para niños y adolescentes, lo ideal es acudir con un médico pediatra. Sin embargo, en casos de adolescentes con enfermedades crónicas complejas, puede evaluarse la pertinencia de una consulta.'
  },
  {
    question: '¿Trata enfermedades autoinmunes o reumatológicas?',
    answer: 'Sí, el médico internista es el especialista primario para el abordaje de <strong>enfermedades autoinmunes sistémicas</strong> como lupus eritematoso, artritis reumatoide, vasculitis, sarcoidosis y otras. En Aguascalientes, la Dra. Yissel Mendoza realiza la evaluación clínica completa y, cuando se requiere, continúa el manejo coordinado con otros especialistas.'
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
