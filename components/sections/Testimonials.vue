<template>
  <section id="testimonios" class="py-24 relative overflow-hidden">

    <!-- Fondo oscuro animado (navy profundo) -->
    <div class="absolute inset-0 z-0"
      style="background: linear-gradient(135deg, #091830 0%, #132f57 40%, #0e2648 70%, #071220 100%);"></div>

    <!-- Órganos decorativos flotantes (blend: screen sobre fondo navy) -->
    <div class="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      <img src="/liver.webp"   class="organ-t ot-1 absolute w-24 select-none" style="top:5%;left:12%;mix-blend-mode:screen;filter:drop-shadow(0 0 28px rgba(240,170,36,0.6));"  alt="" aria-hidden="true" loading="lazy" />
      <img src="/liver.webp"   class="organ-t ot-2 absolute w-16 select-none" style="bottom:8%;right:14%;mix-blend-mode:screen;filter:drop-shadow(0 0 22px rgba(240,170,36,0.55));" alt="" aria-hidden="true" loading="lazy" />
      <img src="/pulmon.webp"  class="organ-t ot-3 absolute w-28 select-none" style="top:28%;right:2%;mix-blend-mode:screen;filter:drop-shadow(0 0 32px rgba(46,189,133,0.6));"   alt="" aria-hidden="true" loading="lazy" />
      <img src="/pulmon.webp"  class="organ-t ot-4 absolute w-14 select-none" style="bottom:20%;left:2%;mix-blend-mode:screen;filter:drop-shadow(0 0 20px rgba(46,189,133,0.55));" alt="" aria-hidden="true" loading="lazy" />
      <img src="/kidneys.webp" class="organ-t ot-5 absolute w-20 select-none" style="top:55%;left:42%;mix-blend-mode:screen;filter:drop-shadow(0 0 26px rgba(59,130,246,0.60));"  alt="" aria-hidden="true" loading="lazy" />
      <img src="/kidneys.webp" class="organ-t ot-6 absolute w-12 select-none" style="top:10%;right:30%;mix-blend-mode:screen;filter:drop-shadow(0 0 18px rgba(59,130,246,0.55));" alt="" aria-hidden="true" loading="lazy" />
      <img src="/liver.webp"   class="organ-t ot-7 absolute w-10 select-none" style="bottom:35%;left:22%;mix-blend-mode:screen;filter:drop-shadow(0 0 14px rgba(240,170,36,0.5));" alt="" aria-hidden="true" loading="lazy" />
    </div>

    <!-- Orbs animados via GSAP + decorativos -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="t-orb t-orb-1 absolute rounded-full"
        style="width: 600px; height: 600px; top: -15%; left: -8%;
               background: radial-gradient(circle at 40% 40%, rgba(240,170,36,0.35), transparent 70%);">
      </div>
      <div class="t-orb t-orb-2 absolute rounded-full"
        style="width: 500px; height: 500px; bottom: -20%; right: -5%;
               background: radial-gradient(circle at 60% 60%, rgba(46,189,133,0.30), transparent 70%);">
      </div>
      <div class="t-orb t-orb-3 absolute rounded-full"
        style="width: 350px; height: 350px; top: 40%; left: 55%;
               background: radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%);">
      </div>
      <!-- Dot grid decorativo -->
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;">
      </div>
    </div>

    <!-- Imagen doctora anclada abajo-derecha -->
    <div class="absolute bottom-0 right-0 z-[50] pointer-events-none select-none tf-img-wrap opacity-0"
      style="width:clamp(220px,22vw,340px);">
      <!-- Resplandor detrás -->
      <div class="absolute inset-x-0 bottom-0 pointer-events-none"
        style="height:85%;background:radial-gradient(ellipse 80% 60% at 60% 100%,rgba(46,189,133,0.28) 0%,rgba(19,47,87,0.18) 50%,transparent 75%);filter:blur(18px);"></div>
      <img src="/top-footer.webp"
        class="tf-doctor relative z-10 w-full h-auto object-contain object-bottom"
        alt="Dra. Yissel Mendoza González"
        loading="lazy" />
    </div>

    <!-- Contenido -->
    <div class="container mx-auto px-4 relative z-10">

      <!-- Header -->
      <div class="text-center mb-16 t-header opacity-0">
        <div class="inline-flex items-center space-x-2 mb-5 px-5 py-2 rounded-full"
          style="background: rgba(240,170,36,0.12); border: 1px solid rgba(240,170,36,0.30);">
          <Icon name="lucide:message-square-quote" class="w-4 h-4" style="color: #f0aa24;" />
          <span class="text-sm font-medium" style="color: #f0aa24;">Voces de nuestros pacientes</span>
        </div>

        <h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Lo que dicen quienes
          <span class="block mt-1"
            style="background: linear-gradient(90deg, #f0aa24, #2ebd85); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            nos han confiado su salud
          </span>
        </h2>

        <div class="w-28 h-1 mx-auto rounded-full mt-2"
          style="background: linear-gradient(90deg, #f0aa24, #2ebd85);"></div>

        <p class="text-slate-300 mt-6 max-w-lg mx-auto text-base leading-relaxed">
          Testimonios reales de pacientes de Aguascalientes que transformaron su salud
          con la atención de la Dra. Yissel Mendoza.
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="t-card opacity-0 rounded-3xl p-7 flex flex-col relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1"
          style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); backdrop-filter: blur(24px);">

          <!-- Glow interior al hacer hover -->
          <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="`background: radial-gradient(circle at 20% 20%, ${t.color}18, transparent 70%);`">
          </div>

          <!-- Icono de cita -->
          <div class="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0 relative"
            :style="`background: ${t.color}25; border: 1px solid ${t.color}40;`">
            <Icon name="lucide:quote" class="w-5 h-5" :style="`color: ${t.color};`" />
          </div>

          <!-- Estrellas -->
          <div class="flex mb-3 gap-0.5">
            <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:1rem;height:1rem;fill:#f0aa24;" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>

          <!-- Texto -->
          <p class="text-slate-200 leading-relaxed text-sm flex-1 italic mb-6 relative z-10">
            {{ t.text }}
          </p>

          <!-- Autor -->
          <div class="flex items-center gap-3 mt-auto pt-4 relative z-10"
            style="border-top: 1px solid rgba(255,255,255,0.08);">
            <div
              class="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
              :style="`background: linear-gradient(135deg, ${t.color}, ${t.color}99);`">
              {{ t.name.charAt(0) }}
            </div>
            <div>
              <p class="font-bold text-white text-sm">{{ t.name }}</p>
              <p class="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                <Icon name="lucide:map-pin" class="w-3 h-3" />
                {{ t.location }} · Aguascalientes, Ags.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Google Review -->
      <div class="text-center mt-14 t-footer opacity-0">
        <p class="text-slate-400 text-sm mb-4">¿Fuiste paciente? Tu opinión ayuda a más personas a encontrar atención de calidad</p>
        <a
          href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex flex-wrap items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style="background:#fff; color:#1a1a2e; box-shadow: 0 4px 24px rgba(0,0,0,0.25);">

          <!-- Google "G" logo SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:1.2rem;height:1.2rem;flex-shrink:0;" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>

          <!-- Estrellas Google amarillo -->
          <div class="flex gap-0.5 items-center">
            <svg v-for="s in 5" :key="s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:0.9rem;height:0.9rem;fill:#FBBC05;" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <span class="whitespace-nowrap">Deja tu reseña en Google</span>
          <Icon name="lucide:external-link" class="w-3.5 h-3.5 opacity-60 flex-shrink-0 transition-opacity group-hover:opacity-100" />
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap as _gsap } from 'gsap'

// [finalOpacity, initRot, floatY, floatX, floatRot, dur, delay]
const otConfig = [
  [0.75, 12,  -38,  28,  16, 7.0, 0.3],
  [0.65, -18,  32, -20, -16, 9.0, 0.7],
  [0.70,   7,  42, -28,  20, 8.0, 0.5],
  [0.60,  -9, -28,  18, -16, 7.5, 1.0],
  [0.68,  20, -36, -22,  22, 7.0, 0.4],
  [0.58, -14,  26,  20, -18, 8.5, 0.8],
  [0.50,  16, -22, -14,  14, 6.5, 0.6],
]

const testimonials = [
  {
    name: 'María Elena González',
    location: 'Col. Insurgentes',
    color: '#2ebd85',
    text: '"Llevaba años con la diabetes descontrolada y sin una explicación clara de mi padecimiento. La Dra. Yissel me dedicó el tiempo que necesitaba, me explicó todo con paciencia y hoy mi glucosa está perfectamente controlada. Una doctora extraordinaria y de gran calidad humana."'
  },
  {
    name: 'Roberto Martínez Ávalos',
    location: 'Col. Ojocaliente',
    color: '#3b82f6',
    text: '"Llegué con hipertensión severa y mucha preocupación. Desde la primera consulta me transmitió confianza y profesionalismo. Su tratamiento fue preciso y en pocas semanas mis cifras mejoraron notablemente. La recomiendo ampliamente con toda mi familia."'
  },
  {
    name: 'Laura Hernández de Lira',
    location: 'Fracc. Jardines de la Asunción',
    color: '#f0aa24',
    text: '"Me hice un chequeo preventivo y fue la mejor decisión de mi vida. Detectó a tiempo un problema tiroideo que yo ignoraba por completo. Su criterio clínico y trato humano son excepcionales. Le debo mucho a la Dra. Yissel."'
  },
  {
    name: 'Carlos Aguirre Ríos',
    location: 'Col. Morelos',
    color: '#e85d75',
    text: '"Necesitaba una valoración preoperatoria urgente y me atendieron con rapidez y gran profesionalismo. El reporte fue muy completo y el cirujano quedó muy satisfecho. Sin duda la mejor internista con la que he tenido la fortuna de consultar en Aguascalientes."'
  },
  {
    name: 'Gabriela Delgado Muñoz',
    location: 'Col. Primo Verdad',
    color: '#a855f7',
    text: '"Busqué una segunda opinión sobre un diagnóstico que me habían dado y la Dra. Yissel me brindó claridad total y mucha tranquilidad. Su conocimiento es impresionante y su calidez humana, invaluable. Ya toda mi familia es paciente suya."'
  }
]

onMounted(() => {
  // Organ entrance (drift in from blur + scale)
  otConfig.forEach(([op, rot, , , , dur, delay], i) => {
    const el = `.ot-${i + 1}`
    _gsap.set(el, { opacity: 0, scale: 0.3, rotation: (rot as number) * 2, filter: 'blur(12px)' })
    _gsap.to(el, {
      opacity: op, scale: 1, rotation: rot as number, filter: 'blur(0px)',
      duration: dur as number, delay: (delay as number) + 0.4,
      ease: 'expo.out'
    })
  })

  // Organ perpetual float
  otConfig.forEach(([, , fy, fx, fr, dur, delay], i) => {
    _gsap.to(`.ot-${i + 1}`, {
      y: fy as number, x: fx as number, rotation: `+=${fr}`,
      duration: dur as number,
      repeat: -1, yoyo: true, ease: 'sine.inOut',
      delay: (delay as number) + 1.5
    })
  })

  // Imagen doctora: sube desde abajo con fade
  _gsap.fromTo('.tf-img-wrap', { y: 80, opacity: 0 }, {
    y: 0, opacity: 1, duration: 1.3, ease: 'power3.out', delay: 0.5,
    scrollTrigger: { trigger: '#testimonios', start: 'top 75%' }
  })

  // Orb animation loops (continua, independiente del scroll)
  _gsap.to('.t-orb-1', {
    x: 90,
    y: 70,
    duration: 9,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
  _gsap.to('.t-orb-2', {
    x: -70,
    y: -90,
    duration: 11,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 1.5
  })
  _gsap.to('.t-orb-3', {
    x: -50,
    y: 60,
    duration: 13,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 3
  })

  // Entrada por scroll
  const tl = _gsap.timeline({
    scrollTrigger: {
      trigger: '#testimonios',
      start: 'top 75%',
    }
  })

  tl.fromTo('.t-header',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  )
  .fromTo('.t-card',
    { y: 70, opacity: 0, scale: 0.92 },
    { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.13, ease: 'power3.out' },
    '-=0.4'
  )
  .fromTo('.t-footer',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 },
    '-=0.2'
  )
})
</script>
