<template>
  <section id="contacto" class="py-24 relative overflow-hidden bg-white/30 dark:bg-slate-900/30">
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contact Info -->
        <div class="space-y-8 contact-item opacity-0">
          <div>
            <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Agenda tu cita</h2>
            <p class="text-lg text-slate-600 dark:text-slate-300">
              Estamos aquí para ayudarte. Contáctanos para programar una valoración integral de tu salud.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="lucide:map-pin" class="w-6 h-6 text-primary dark:text-secondary" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Ubicación</h3>
                <p class="text-slate-600 dark:text-slate-300 mt-1">
                  Hospital MAC SUR (Dentro del Centro Oncológico).
                  <br />República de Perú 102, Torre C, consultorio 201.
                  <br />Aguascalientes, Ags. C.P. 20234.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="lucide:phone" class="w-6 h-6 text-primary dark:text-secondary" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Teléfonos</h3>
                <div class="mt-1 space-y-1">
                  <p class="text-slate-600 dark:text-slate-300">
                    Citas: <a href="tel:4494970240" class="font-bold text-primary dark:text-secondary hover:underline">449-497-02-40</a>
                  </p>
                  <p class="text-sm text-slate-500 dark:text-slate-400">
                    Emergencias (Uso restringido): <a href="tel:3441041492">344-104-14-92</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonial CTA Booster -->
          <div class="glass-card p-6 border-l-4 border-l-secondary mt-12 bg-white/60 dark:bg-slate-800/60">
            <div class="flex text-yellow-500 mb-3">
              <Icon name="lucide:star" class="w-4 h-4 fill-current" v-for="i in 5" :key="i"/>
            </div>
            <p class="italic text-slate-700 dark:text-slate-300 text-sm mb-4">
              "Una doctora excelente, me explicó a detalle mi padecimiento y el tratamiento ha sido muy efectivo. Un trato totalmente humano."
            </p>
            <p class="text-sm font-bold text-slate-900 dark:text-white">- Paciente verificado</p>
          </div>
          
          <button class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all dark:bg-secondary dark:text-slate-900 dark:hover:bg-secondary/90 hover:-translate-y-1">
            <Icon name="lucide:calendar-check" class="w-5 h-5 mr-2" />
            Llamar para agendar
          </button>
        </div>

        <!-- Map -->
        <div class="contact-item opacity-0 h-[400px] lg:h-[600px] w-full glass-card overflow-hidden p-2">
          <!-- iframe para el mapa del MAC SUR Aguascalientes -->
          <iframe 
            class="w-full h-full rounded-[1.25rem] border-0 grayscale-[20%] contrast-125 dark:invert-[90%] dark:hue-rotate-180 transition-all duration-500 hover:grayscale-0 hover:contrast-100" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x842a00c60edb1fc5%3A0x633d3ab293e5e407!2sHospital%20MAC%20Aguascalientes%20Sur!5e0!3m2!1ses-419!2smx!4v1703200000000!5m2!1ses-419!2smx" 
            allowfullscreen 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
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
        trigger: '#contacto',
        start: 'top 75%',
      }
    })
    
    tl.fromTo('.contact-item', 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
    )
  }
})
</script>
