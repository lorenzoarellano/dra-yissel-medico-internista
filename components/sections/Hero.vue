<template>
  <section id="inicio" class="relative min-h-screen flex items-center pt-24 pb-0">
    <!-- Background extends from top of viewport behind the fixed navbar -->
    <div class="absolute inset-0 z-0" style="top: -6rem;">
      <!-- Decorativos de estilo Liquid / Glass -->
      <div class="absolute top-[5%] left-[-10%] w-[55%] h-[55%] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-info/10 blur-[120px] animate-pulse-slow" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-[25%] right-[10%] w-[30%] h-[40%] rounded-full bg-accent/10 blur-[90px] animate-float"></div>
    </div>

    <!-- Órganos decorativos flotantes -->
    <div class="absolute inset-0 z-[1] pointer-events-none overflow-hidden" style="top:-6rem;">
      <!-- liver -->
      <img src="/liver.webp"   class="organ-hero oh-1  absolute select-none" style="width:130px;top:8%;right:6%;"          alt="" aria-hidden="true" loading="lazy" />
      <img src="/liver.webp"   class="organ-hero oh-2  absolute select-none" style="width:72px; bottom:3%;left:-1%;"        alt="" aria-hidden="true" loading="lazy" />
      <img src="/liver.webp"   class="organ-hero oh-3  absolute select-none" style="width:96px; bottom:8%;left:33%;"        alt="" aria-hidden="true" loading="lazy" />
      <img src="/liver.webp"   class="organ-hero oh-4  absolute select-none" style="width:52px; top:72%;right:28%;"         alt="" aria-hidden="true" loading="lazy" />
      <img src="/liver.webp"   class="organ-hero oh-5  absolute select-none" style="width:120px;bottom:0%;left:2%;"           alt="" aria-hidden="true" loading="lazy" />
      <!-- pulmon -->
      <img src="/pulmon.webp"  class="organ-hero oh-6  absolute select-none" style="width:150px;top:30%;right:0%;"          alt="" aria-hidden="true" loading="lazy" />
      <img src="/pulmon.webp"  class="organ-hero oh-7  absolute select-none" style="width:60px; top:1%;left:5%;"           alt="" aria-hidden="true" loading="lazy" />
      <img src="/pulmon.webp"  class="organ-hero oh-8  absolute select-none" style="width:110px;top:1%;left:42%;"          alt="" aria-hidden="true" loading="lazy" />
      <img src="/pulmon.webp"  class="organ-hero oh-9  absolute select-none" style="width:80px; bottom:14%;right:18%;"      alt="" aria-hidden="true" loading="lazy" />
      <img src="/pulmon.webp"  class="organ-hero oh-10 absolute select-none" style="width:44px; top:82%;left:56%;"          alt="" aria-hidden="true" loading="lazy" />
      <!-- kidneys -->
      <img src="/kidneys.webp" class="organ-hero oh-11 absolute select-none" style="width:120px;bottom:16%;right:4%;"       alt="" aria-hidden="true" loading="lazy" />
      <img src="/kidneys.webp" class="organ-hero oh-12 absolute select-none" style="width:64px; top:82%;left:-2%;"           alt="" aria-hidden="true" loading="lazy" />
      <img src="/kidneys.webp" class="organ-hero oh-13 absolute select-none" style="width:140px;top:3%;right:22%;"          alt="" aria-hidden="true" loading="lazy" />
      <img src="/kidneys.webp" class="organ-hero oh-14 absolute select-none" style="width:56px; bottom:1%;left:20%;"       alt="" aria-hidden="true" loading="lazy" />
      <img src="/kidneys.webp" class="organ-hero oh-15 absolute select-none" style="width:88px; top:44%;right:14%;"         alt="" aria-hidden="true" loading="lazy" />
    </div>

    <!-- Fade inferior para fusionar con la sección siguiente -->
    <div class="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
      style="background: linear-gradient(to bottom, transparent, #eaf2fb);"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="hero-text opacity-0">
          <div class="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 relative">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span class="text-sm font-medium text-slate-700">Médico Internista en Aguascalientes, México</span>
          </div>

          <h1 class="text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
            <span class="text-slate-900 block">Tu médico internista</span>
            <span class="text-gradient block mt-2">en Aguascalientes</span>
          </h1>

          <p class="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Especialista certificada en el diagnóstico y tratamiento integral de <strong>enfermedades crónicas del adulto</strong>: diabetes, hipertensión, padecimientos renales, endocrinológicos y cardiovasculares. Atención médica de calidad en Aguascalientes, Ags.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:4494970240" class="inline-flex items-center justify-center px-8 py-4 rounded-full shadow-lg text-base font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" style="background: linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%);">
              <Icon name="lucide:calendar" class="w-5 h-5 mr-2" />
              Agendar Cita
            </a>
            <a href="#servicios" class="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 rounded-full text-base font-medium text-slate-700 hover:bg-slate-100 transition-all hover:-translate-y-1">
              Conoce mis servicios
            </a>
          </div>
          
          <!-- Key Indicators -->
          <div class="mt-10 flex flex-wrap items-center gap-3">
            <div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <span class="flex items-center justify-center w-7 h-7 rounded-full" style="background:linear-gradient(135deg,#132f57,#1a6fa0);">
                <Icon name="lucide:user-check" class="w-3.5 h-3.5 text-white" />
              </span>
              <span class="text-sm font-medium text-slate-700">Atención personalizada</span>
            </div>
            <div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-accent/15">
                <Icon name="lucide:stethoscope" class="w-3.5 h-3.5 text-accent" />
              </span>
              <span class="text-sm font-medium text-slate-700">Diagnóstico especializado</span>
            </div>
            <div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <span class="flex items-center justify-center w-7 h-7 rounded-full" style="background:rgba(240,170,36,0.15);">
                <Icon name="lucide:heart-pulse" class="w-3.5 h-3.5" style="color:#f0aa24;" />
              </span>
              <span class="text-sm font-medium text-slate-700">Seguimiento continuo</span>
            </div>
            <div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <span class="flex items-center justify-center w-7 h-7 rounded-full" style="background:rgba(19,47,87,0.10);">
                <Icon name="lucide:clock" class="w-3.5 h-3.5 text-primary" />
              </span>
              <span class="text-sm font-medium text-slate-700">Lun&ndash;Sáb &middot; 9:00&ndash;14:00 hrs</span>
            </div>
            <a href="https://wa.me/5214494970240?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20virtual%20con%20la%20Dra.%20Yissel%20Mendoza." target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style="background:linear-gradient(135deg,rgba(46,189,133,0.12),rgba(46,189,133,0.20));border:1px solid rgba(46,189,133,0.35);">
              <span class="flex items-center justify-center w-7 h-7 rounded-full" style="background:rgba(46,189,133,0.20);">
                <Icon name="lucide:video" class="w-3.5 h-3.5 text-accent" />
              </span>
              <span class="text-sm font-semibold" style="color:#1fa870;">Consulta virtual disponible</span>
            </a>
          </div>
        </div>

        <!-- Image Container -->
        <div class="hero-image opacity-0 relative flex items-end justify-center self-end">
          <div class="relative z-10 w-full overflow-hidden group">
            <img src="/hero.webp" alt="Dra. Yissel Mendoza" class="w-full h-auto object-contain object-bottom transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            
            <!-- Float Badges -->
            <div class="absolute bottom-8 -left-6 glass-card px-6 py-4 flex items-center gap-4 animate-float">
              <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Icon name="lucide:shield-check" class="w-6 h-6" />
              </div>
              <div>
                <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Certificada por el</p>
                <p class="font-display font-bold text-slate-900">Consejo Médico</p>
              </div>
            </div>
            <div class="absolute top-8 -right-4 glass-card px-5 py-3 flex items-center gap-3 animate-float" style="animation-delay:1.2s;">
              <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:linear-gradient(135deg,#132f57,#1a6fa0);">
                <Icon name="lucide:award" class="w-5 h-5 text-white" />
              </div>
              <div>
                <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Miembro Activo</p>
                <p class="font-display font-bold text-slate-900 text-sm">CMMI</p>
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
import { gsap as _gsap } from 'gsap'

// Static configs: [finalOpacity, initRotation, floatY, floatX, floatRot, duration, delay]
const ohConfig = [
  // liver
  [0.72, 14,  -32,  22,  14, 6.0, 0.7],   // oh-1
  [0.62,-22,   28, -18, -14, 8.2, 1.1],   // oh-2
  [0.58,-10,   26, -14,  14, 7.8, 1.5],   // oh-3
  [0.48, 18,   20,  12, -10, 9.4, 0.9],   // oh-4
  [0.68,-16,  -30,  20,  18, 6.8, 1.2],   // oh-5
  // pulmon
  [0.66,  9,   36, -26,  18, 7.5, 1.3],   // oh-6
  [0.52,-14,  -24,  16, -16, 9.0, 0.5],   // oh-7
  [0.62,  8,  -30,  20, -14, 5.8, 0.9],   // oh-8
  [0.55,-20,   22, -14,  12, 8.0, 1.4],   // oh-9
  [0.45, 22,  -18,  10, -10, 7.2, 0.6],   // oh-10
  // kidneys
  [0.72,-24,  -40, -20,  22, 6.5, 1.0],   // oh-11
  [0.58, 19,   32,  24, -18, 5.5, 0.8],   // oh-12
  [0.65,-12,  -28,  18,  20, 7.0, 1.3],   // oh-13
  [0.50, 16,   24, -12, -14, 8.8, 0.7],   // oh-14
  [0.60,-18,  -22,  16,  16, 6.2, 1.1],   // oh-15
]

onMounted(() => {
  const tl = _gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo('.hero-text',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.2 }
  )
  .fromTo('.hero-image',
    { x: 50, opacity: 0, scale: 0.95 },
    { x: 0, opacity: 1, scale: 1, duration: 1 },
    '-=0.6'
  )

  // Organ entrance: scale up from centre + fade + initial rotation
  ohConfig.forEach(([op, rot, , , , dur, delay], i) => {
    const el = `.oh-${i + 1}`
    _gsap.set(el, { opacity: 0, scale: 0.4, rotation: (rot as number) * 2 })
    _gsap.to(el, {
      opacity: op, scale: 1, rotation: rot as number,
      duration: dur as number, delay: (delay as number) + 0.6,
      ease: 'power3.out'
    })
  })

  // Organ perpetual float
  ohConfig.forEach(([, , fy, fx, fr, dur, delay], i) => {
    _gsap.to(`.oh-${i + 1}`, {
      y: fy as number, x: fx as number, rotation: `+=${fr}`,
      duration: dur as number,
      repeat: -1, yoyo: true, ease: 'sine.inOut',
      delay: (delay as number) + 2
    })
  })
})
</script>
