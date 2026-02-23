<template>
  <section id="acerca" class="py-24 relative overflow-hidden">

    <!-- Fondo gradiente animado -->
    <div class="absolute inset-0 z-0"
      style="background: linear-gradient(145deg, #eaf2fb 0%, #e6f5ef 45%, #f0f7ff 100%);"></div>

    <!-- Orbs GSAP -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="a-orb a-orb-1 absolute rounded-full"
        style="width:550px;height:550px;top:-20%;right:-8%;background:radial-gradient(circle at 50% 50%,rgba(19,47,87,0.10),transparent 70%);"></div>
      <div class="a-orb a-orb-2 absolute rounded-full"
        style="width:420px;height:420px;bottom:-15%;left:-5%;background:radial-gradient(circle at 50% 50%,rgba(46,189,133,0.12),transparent 70%);"></div>
      <div class="a-orb a-orb-3 absolute rounded-full"
        style="width:280px;height:280px;top:35%;left:30%;background:radial-gradient(circle,rgba(240,170,36,0.08),transparent 70%);"></div>
      <div class="absolute top-0 left-0 right-0 h-px"
        style="background:linear-gradient(90deg,transparent,rgba(19,47,87,0.20),transparent);"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px"
        style="background:linear-gradient(90deg,transparent,rgba(46,189,133,0.25),transparent);"></div>
    </div>

    <!-- Fades -->
    <div class="absolute top-0 left-0 right-0 h-36 z-20 pointer-events-none"
      style="background:linear-gradient(to bottom,#f8fafc,transparent);"></div>
    <div class="absolute bottom-0 left-0 right-0 h-36 z-20 pointer-events-none"
      style="background:linear-gradient(to top,#f8fafc,transparent);"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto">

        <!-- Header -->
        <div class="a-header text-center mb-16 opacity-0">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">Cédula Profesional 12193559 • Cédula Especialidad 14201115 • Miembro Activo CMMI</span>
          <h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Dra. Rosalba Yissel Mendoza González &mdash; Médico Internista en Aguascalientes</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p class="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">Especialista en Medicina Interna con formación en el <strong>Centro Médico Nacional de Occidente</strong> y certificación vigente por el <strong>Consejo Mexicano de Medicina Interna</strong>. Atención dedicada a adultos con padecimientos crónicos y complejos en Aguascalientes, Ags.</p>
        </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <!-- ── Imagen ── -->
            <div class="a-image opacity-0 flex justify-center items-center">
              <div class="relative flex items-center justify-center" style="width:340px;height:340px;">

                <!-- Resplandor de fondo -->
                <div class="absolute inset-0 rounded-full"
                  style="background:radial-gradient(circle,rgba(46,189,133,0.18) 0%,rgba(19,47,87,0.10) 55%,transparent 75%);filter:blur(18px);"></div>

                <!-- Anillo giratorio exterior -->
                <div class="a-ring-outer absolute rounded-full"
                  style="width:320px;height:320px;border:2px dashed rgba(19,47,87,0.18);"></div>

                <!-- Anillo giratorio interior -->
                <div class="a-ring-inner absolute rounded-full"
                  style="width:268px;height:268px;border:2px solid transparent;
                         background:linear-gradient(white,white) padding-box,
                                     linear-gradient(135deg,#132f57,#2ebd85,#f0aa24,#132f57) border-box;"></div>

                <!-- Foto circular sin fondo -->
                <img
                  src="/acerca-de.webp"
                  alt="Dra. Yissel Mendoza González, Médico Internista"
                  class="a-photo relative z-10 select-none"
                  style="width:256px;height:256px;object-fit:cover;object-position:top;border-radius:50%;"
                  loading="lazy"
                />

                <!-- Badge: CMMI -->
                <div class="a-badge-1 absolute -bottom-2 -right-4 glass-card px-4 py-2.5 flex items-center gap-2.5 shadow-xl opacity-0">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style="background:linear-gradient(135deg,#132f57,#1a6fa0);">
                    <Icon name="lucide:award" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p class="text-[10px] font-medium text-slate-500 uppercase tracking-wider leading-none mb-0.5">Miembro Activo</p>
                    <p class="text-xs font-bold text-slate-900 leading-none">CMMI</p>
                  </div>
                </div>

                <!-- Badge: Certificada -->
                <div class="a-badge-2 absolute -top-2 -left-4 glass-card px-4 py-2.5 flex items-center gap-2.5 shadow-xl opacity-0">
                  <div class="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="lucide:shield-check" class="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p class="text-[10px] font-medium text-slate-500 uppercase tracking-wider leading-none mb-0.5">Certificada por el</p>
                    <p class="text-xs font-bold text-slate-900 leading-none">Consejo Médico</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- ── Texto ── -->
            <div class="a-text space-y-6">
              <h3 class="text-2xl font-bold text-slate-800">Perfil Profesional</h3>

              <ul class="space-y-4">
                <li class="a-li flex items-start opacity-0">
                  <div class="flex-shrink-0 mt-1"><Icon name="lucide:check-circle-2" class="w-5 h-5 text-accent" /></div>
                  <p class="ml-3 text-slate-600">
                    Licenciatura como <strong>Médico, Cirujano y Partero</strong> por la Universidad de Guadalajara — una de las escuelas de medicina de mayor prestigio en México.
                  </p>
                </li>
                <li class="a-li flex items-start opacity-0">
                  <div class="flex-shrink-0 mt-1"><Icon name="lucide:check-circle-2" class="w-5 h-5 text-accent" /></div>
                  <p class="ml-3 text-slate-600">
                    <strong>Especialidad en Medicina Interna</strong> por la Universidad de Guadalajara en el Centro Médico Nacional de Occidente (IMSS), con enfoque en patología crónica del adulto.
                  </p>
                </li>
                <li class="a-li flex items-start opacity-0">
                  <div class="flex-shrink-0 mt-1"><Icon name="lucide:check-circle-2" class="w-5 h-5 text-accent" /></div>
                  <p class="ml-3 text-slate-600">
                    <strong>Consultas especializadas</strong> realizadas en Aguascalientes, con resultados documentados en control metabólico y cardiovascular.
                  </p>
                </li>
                <li class="a-li flex items-start opacity-0">
                  <div class="flex-shrink-0 mt-1"><Icon name="lucide:award" class="w-5 h-5 text-accent" /></div>
                  <p class="ml-3 text-slate-600">
                    Certificada vigente por el <strong>Consejo Mexicano de Medicina Interna (CMMI)</strong>, garantía de actualización continua y estándares de excelencia clínica.
                  </p>
                </li>
              </ul>

              <div class="pt-6 border-t border-slate-200 flex flex-wrap gap-3">
                <div class="glass px-4 py-2 rounded-lg inline-flex items-center space-x-2">
                  <Icon name="lucide:file-text" class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium text-slate-700">Cédula Prof: <strong>12193559</strong></span>
                </div>
                <div class="glass px-4 py-2 rounded-lg inline-flex items-center space-x-2">
                  <Icon name="lucide:file-badge" class="w-4 h-4 text-primary" />
                  <span class="text-sm font-medium text-slate-700">Cédula Esp: <strong>14201115</strong></span>
                </div>
                <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-white text-sm font-semibold"
                  style="background:linear-gradient(135deg,#132f57 0%,#1a6fa0 55%,#2ebd85 100%);">
                  <Icon name="lucide:award" class="w-4 h-4" />
                  <span>Miembro Activo &mdash; Colegio Mexicano de Medicina Interna</span>
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
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  _gsap.registerPlugin(ScrollTrigger)

  // ── Orbs en loop perpetuo ──
  _gsap.to('.a-orb-1', { x: 60,  y: 50,  duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  _gsap.to('.a-orb-2', { x: -50, y: -60, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 })
  _gsap.to('.a-orb-3', { x: 40,  y: -35, duration: 8,  repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })

  // ── Anillos giratorios perpetuos ──
  _gsap.to('.a-ring-outer', { rotation: 360,  duration: 28, repeat: -1, ease: 'none' })
  _gsap.to('.a-ring-inner', { rotation: -360, duration: 18, repeat: -1, ease: 'none' })

  // ── Scroll-triggered entrance ──
  const st = { trigger: '#acerca', start: 'top 78%' }

  // Header
  _gsap.fromTo('.a-header', { y: 40, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
    scrollTrigger: st
  })

  // Imagen: escala desde 0 + fade
  _gsap.fromTo('.a-image', { scale: 0.6, opacity: 0, rotation: -8 }, {
    scale: 1, opacity: 1, rotation: 0, duration: 1.1, ease: 'back.out(1.6)',
    delay: 0.2, scrollTrigger: st
  })

  // Foto: float perpetuo (inicia tras la entrada)
  _gsap.to('.a-photo', {
    y: -14, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.4
  })

  // Badges aparecen con rebote
  _gsap.fromTo('.a-badge-1', { scale: 0, opacity: 0, x: 20 }, {
    scale: 1, opacity: 1, x: 0, duration: 0.7, ease: 'back.out(2)',
    delay: 0.9, scrollTrigger: st
  })
  _gsap.fromTo('.a-badge-2', { scale: 0, opacity: 0, x: -20 }, {
    scale: 1, opacity: 1, x: 0, duration: 0.7, ease: 'back.out(2)',
    delay: 1.1, scrollTrigger: st
  })

  // Lista: stagger por ítem
  _gsap.fromTo('.a-li', { x: 30, opacity: 0 }, {
    x: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
    stagger: 0.13, delay: 0.5,
    scrollTrigger: st
  })
})
</script>