<template>
  <section id="contacto" class="py-24 relative overflow-hidden">

    <!-- Fondo gradiente animado (dorado/navy suave) -->
    <div class="absolute inset-0 z-0"
      style="background: linear-gradient(145deg, #fdf6e8 0%, #eef4fb 55%, #f5fbf8 100%);"></div>
    <!-- Fade superior SOLAMENTE -->
    <div class="absolute top-0 left-0 right-0 h-44 z-20 pointer-events-none"
      style="background: linear-gradient(to bottom, #f8fafc, transparent);"></div>

    <!-- Orbs GSAP + línea decorativa -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="c-orb c-orb-1 absolute rounded-full"
        style="width: 500px; height: 500px; top: -10%; right: -5%;
               background: radial-gradient(circle at 50% 50%, rgba(240,170,36,0.14), transparent 70%);"></div>
      <div class="c-orb c-orb-2 absolute rounded-full"
        style="width: 400px; height: 400px; bottom: -15%; left: -8%;
               background: radial-gradient(circle at 50% 50%, rgba(19,47,87,0.10), transparent 70%);"></div>
      <div class="c-orb c-orb-3 absolute rounded-full"
        style="width: 300px; height: 300px; top: 50%; left: 40%;
               background: radial-gradient(circle, rgba(46,189,133,0.09), transparent 70%);"></div>
      <!-- Línea decorativa superior -->
      <div class="absolute top-0 left-0 right-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(240,170,36,0.35), transparent);"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contact Info -->
        <div class="space-y-8 contact-item opacity-0">
          <div>
            <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Agenda tu cita con la Dra. Yissel &mdash; Medicina Interna, Aguascalientes</h2>
            <p class="text-lg text-slate-600">
              ¿Buscas médico internista en Aguascalientes? Concérta tu consulta hoy mismo. Atendemos <strong>diabetes, hipertensión, padecimientos renales, endocrinológicos</strong> y mucho más con el nivel de atención que mereces.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="lucide:map-pin" class="w-6 h-6 text-primary" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-slate-900">Ubicación</h3>
                <p class="text-slate-600 mt-1">
                  Hospital MAC SUR (Dentro del Centro Oncológico).
                  <br />República de Perú 102, Torre C, consultorio 201.
                  <br />Aguascalientes, Ags. C.P. 20234.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="lucide:clock" class="w-6 h-6 text-primary" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-slate-900">Horario de atención</h3>
                <p class="text-slate-600 mt-1">
                  Lunes a Sábado: <strong>9:00 – 14:00 hrs</strong><br />
                  Domingo: <span class="text-slate-400">Cerrado</span>
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="lucide:phone" class="w-6 h-6 text-primary" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-bold text-slate-900">Teléfonos</h3>
                <div class="mt-1 space-y-1">
                  <p class="text-slate-600">
                    Citas: <a href="tel:4494970240" class="font-bold text-primary hover:underline">449-497-02-40</a>
                  </p>
                  <p class="text-sm text-slate-500">
                    Emergencias (Uso restringido): <a href="tel:3441041492">344-104-14-92</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a href="tel:4494970240" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full shadow-lg text-base font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" style="background: linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%);">
            <Icon name="lucide:calendar-check" class="w-5 h-5 mr-2" />
            Llamar para agendar
          </a>

          <!-- Consulta Virtual -->
          <div class="mt-6 rounded-2xl p-5 flex items-start gap-4" style="background:linear-gradient(135deg,rgba(46,189,133,0.08) 0%,rgba(26,111,160,0.08) 100%);border:1px solid rgba(46,189,133,0.30);">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:linear-gradient(135deg,rgba(46,189,133,0.18),rgba(26,111,160,0.18));">
              <Icon name="lucide:video" class="w-6 h-6" style="color:#2ebd85;" />
            </div>
            <div class="flex-1">
              <h3 class="text-base font-bold text-slate-900">¿No puedes venir en persona?</h3>
              <p class="text-sm text-slate-600 mt-1 leading-relaxed">
                La Dra. Yissel también ofrece <strong>consulta virtual por videollamada</strong>. Ideal para seguimiento, revisión de estudios o segunda opinión desde cualquier lugar.
              </p>
              <a
                href="https://wa.me/5214494970240?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20virtual%20con%20la%20Dra.%20Yissel%20Mendoza."
                target="_blank" rel="noopener noreferrer"
                class="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style="background:linear-gradient(135deg,#1da462 0%,#2ebd85 100%);"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Agendar consulta virtual por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="contact-item opacity-0 flex flex-col gap-0 w-full">
          <!-- Header de mapa con branding -->
          <div class="rounded-t-3xl px-5 py-4 flex items-center gap-3"
            style="background: linear-gradient(135deg, #132f57 0%, #1a4a80 100%);">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style="background: rgba(240,170,36,0.20); border: 1px solid rgba(240,170,36,0.35);">
              <Icon name="lucide:map-pin" class="w-5 h-5" style="color: #f0aa24;" />
            </div>
            <div>
              <p class="text-white font-semibold text-sm leading-tight">Hospital MAC SUR &mdash; Torre C, Cons. 201</p>
              <p class="text-slate-300 text-xs mt-0.5">Blvrd. República de Perú 102 &bull; Aguascalientes, Ags. 20234</p>
            </div>
            <a href="https://maps.app.goo.gl/YourLink" target="_blank" rel="noopener noreferrer"
               class="ml-auto flex-shrink-0 flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5 transition-all hover:scale-105"
               style="background: rgba(240,170,36,0.18); border:1px solid rgba(240,170,36,0.40); color:#f0aa24;">
              <Icon name="lucide:external-link" class="w-3.5 h-3.5" />
              Ver ruta
            </a>
          </div>

          <!-- Mapa con overlay de color paleta -->
          <div class="relative h-[400px] lg:h-[540px] w-full overflow-hidden rounded-b-3xl"
            style="border: 1px solid rgba(19,47,87,0.15); border-top: none;">
            <!-- Color tint overlay usando mix-blend-mode -->
            <div class="absolute inset-0 z-10 pointer-events-none rounded-b-3xl"
              style="background: linear-gradient(180deg, rgba(19,47,87,0.06) 0%, rgba(46,189,133,0.04) 100%); mix-blend-mode: multiply;"></div>
            <!-- Borde decorativo inferior -->
            <div class="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
              style="background: linear-gradient(to top, rgba(19,47,87,0.12), transparent);"></div>
            <iframe 
              class="w-full h-full border-0 grayscale-[15%] contrast-110 brightness-105 transition-all duration-500 hover:grayscale-0 hover:contrast-100" 
              src="https://maps.google.com/maps?q=Hospital+MAC+Aguascalientes+Sur,+Blvrd+República+de+Perú+102,+Aguascalientes,+México&output=embed&hl=es" 
              allowfullscreen 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación del consultorio de la Dra. Yissel Mendoza, Médico Internista en Aguascalientes">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap as _gsap } from 'gsap'

onMounted(() => {
  // Orbs en loop
  _gsap.to('.c-orb-1', {
    x: -70, y: 50, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut'
  })
  _gsap.to('.c-orb-2', {
    x: 60, y: -50, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2
  })
  _gsap.to('.c-orb-3', {
    x: -40, y: 40, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1
  })

  const tl = _gsap.timeline({
    scrollTrigger: {
      trigger: '#contacto',
      start: 'top 75%',
    }
  })

  tl.fromTo('.contact-item',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
  )
})
</script>
