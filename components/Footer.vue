<template>
  <footer class="bg-white border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
    <!-- Órganos decorativos flotantes -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <img src="/liver.webp"   class="organ-f of-1 absolute w-20 select-none" style="top:-5%;left:5%;filter:drop-shadow(0 4px 20px rgba(19,47,87,0.40));"   alt="" loading="lazy" />
      <img src="/pulmon.webp"  class="organ-f of-2 absolute w-28 select-none" style="top:10%;right:2%;filter:drop-shadow(0 4px 20px rgba(46,189,133,0.40));" alt="" loading="lazy" />
      <img src="/kidneys.webp" class="organ-f of-3 absolute w-18 select-none" style="bottom:0%;left:2%;filter:drop-shadow(0 4px 20px rgba(240,170,36,0.40));" alt="" loading="lazy" />
      <img src="/liver.webp"   class="organ-f of-4 absolute w-14 select-none" style="bottom:0%;right:3%;filter:drop-shadow(0 4px 16px rgba(59,130,246,0.38));" alt="" loading="lazy" />
      <img src="/pulmon.webp"  class="organ-f of-5 absolute w-12 select-none" style="top:5%;left:90%;filter:drop-shadow(0 4px 14px rgba(19,47,87,0.35));"     alt="" loading="lazy" />
      <img src="/kidneys.webp" class="organ-f of-6 absolute w-16 select-none" style="top:0%;left:45%;filter:drop-shadow(0 4px 16px rgba(46,189,133,0.38));"   alt="" loading="lazy" />
    </div>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="space-y-4">
          <img src="/logo.webp" alt="Dra. Yissel Mendoza Logo" class="h-12 w-auto" />
          <p class="text-sm text-slate-600">
            Especializada en el abordaje y tratamiento de las enfermedades crónicas del adulto con información actualizada, integral y con calidad humana.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white mt-1" style="background:linear-gradient(135deg,#132f57 0%,#1a6fa0 60%,#2ebd85 100%);">
            <Icon name="lucide:award" class="w-3.5 h-3.5 flex-shrink-0" />
            Miembro Activo CMMI
          </div>
          <div class="flex space-x-4 pt-2">
            <a href="https://www.instagram.com/dra.mendozainternista?utm_source=qr&igsh=MTV2eTBodmluc280Mg%3D%3D" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-primary transition-colors" aria-label="Instagram">
              <Icon name="lucide:instagram" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-display font-semibold text-slate-900 mb-4">Secciones</h3>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="text-sm text-slate-600 hover:text-primary transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-display font-semibold text-slate-900 mb-4">Contacto</h3>
          <ul class="space-y-3">
            <li class="flex items-start space-x-3 text-sm text-slate-600">
              <Icon name="lucide:map-pin" class="w-5 h-5 flex-shrink-0 text-primary" />
              <span>Hospital MAC SUR, Torre C, Cons. 201,<br/>Aguascalientes, Ags.</span>
            </li>
            <li class="flex items-center space-x-3 text-sm text-slate-600">
              <Icon name="lucide:phone" class="w-5 h-5 flex-shrink-0 text-primary" />
              <a href="tel:4494970240" class="hover:text-primary transition-colors">449-497-02-40</a>
            </li>
            <li class="flex items-start space-x-3 text-sm text-slate-600">
              <Icon name="lucide:clock" class="w-5 h-5 flex-shrink-0 text-primary" />
              <span>Lun – Sáb: <strong>9:00 – 14:00 hrs</strong><br/><span class="text-slate-400">Domingo: Cerrado</span></span>
            </li>
            <li class="flex items-start space-x-3 text-sm">
              <Icon name="lucide:video" class="w-5 h-5 flex-shrink-0 mt-0.5" style="color:#2ebd85;" />
              <a href="https://wa.me/5214494970240?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20virtual%20con%20la%20Dra.%20Yissel%20Mendoza." target="_blank" rel="noopener noreferrer" class="font-semibold transition-colors hover:opacity-80" style="color:#1fa870;">Consulta virtual disponible</a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="font-display font-semibold text-slate-900 mb-4">Legales</h3>
          <ul class="space-y-3">
            <li>
              <button @click="openModal('privacy')" class="text-sm text-slate-600 hover:text-primary transition-colors text-left">
                Política de Privacidad
              </button>
            </li>
            <li>
              <button @click="openModal('terms')" class="text-sm text-slate-600 hover:text-primary transition-colors text-left">
                Términos y Condiciones
              </button>
            </li>
            <li>
              <button @click="openModal('cookies')" class="text-sm text-slate-600 hover:text-primary transition-colors text-left">
                Aviso de Cookies
              </button>
            </li>
            <li>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" class="text-sm text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1.5">
                <Icon name="lucide:map" class="w-3.5 h-3.5" />
                Mapa del sitio
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>&copy; {{ new Date().getFullYear() }} Dra. Yissel Mendoza. Todos los derechos reservados.</p>
        <p class="mt-4 md:mt-0 flex items-center">
          Created by <a href="https://doctordigital.mx/" target="_blank" rel="noopener noreferrer" class="font-medium text-primary hover:underline ml-1">👾DoctorDigitalMx</a>
        </p>
      </div>
    </div>

    <!-- Modals (Simplified internal state for brevity) -->
    <Teleport to="body">
      <div v-if="activeModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" @click.self="closeModal">
        <div class="bg-white rounded-2xl w-full max-w-2xl p-6 md:p-8 shadow-2xl animate-scale-in">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-display font-bold text-slate-900">{{ modalTitle }}</h2>
            <button @click="closeModal" class="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Icon name="lucide:x" class="w-5 h-5" />
            </button>
          </div>
          <div class="prose max-w-none max-h-[60vh] overflow-y-auto pr-4 text-sm leading-relaxed">

            <!-- ===== POLÍTICA DE PRIVACIDAD ===== -->
            <div v-if="activeModal === 'privacy'">
              <p class="text-slate-500 text-xs mb-4">Última actualización: febrero 2026 &bull; Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, México.</p>
              <h3>1. Responsable del tratamiento</h3>
              <p>La Dra. Rosalba Yissel Mendoza González, con consultorio ubicado en Blvrd. República de Perú 102, Torre C, Consultorio 201, Aguascalientes, Ags., C.P. 20234 (en adelante "la Responsable"), es la entidad responsable del tratamiento de sus datos personales.</p>
              <h3>2. Datos personales recabados</h3>
              <p>Para la prestación de servicios médicos y de contacto, podemos recabar los siguientes datos:</p>
              <ul>
                <li><strong>Datos de identificación:</strong> nombre completo, fecha de nacimiento, CURP.</li>
                <li><strong>Datos de contacto:</strong> número de teléfono, correo electrónico, domicilio.</li>
                <li><strong>Datos de salud (categoría especial):</strong> historial clínico, diagnósticos, tratamientos, resultados de estudios de laboratorio e imagen. Estos datos gozan de especial protección conforme al artículo 9 de la LFPDPPP.</li>
                <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas (mediante cookies técnicas y analíticas). Ver sección de Cookies.</li>
              </ul>
              <h3>3. Finalidades del tratamiento</h3>
              <p><strong>Finalidades primarias (necesarias):</strong> prestación de servicios médicos, elaboración de expediente clínico, comunicación para seguimiento de consultas, cumplimiento de obligaciones legales del ejercicio médico.</p>
              <p><strong>Finalidades secundarias (opcionales):</strong> envío de información sobre servicios, recordatorios de citas, mejora de la experiencia en el sitio web.</p>
              <h3>4. Transferencia de datos</h3>
              <p>Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo en los casos previstos por la ley: autoridades de salud, judiciales o administrativas cuando sea legalmente requerido.</p>
              <h3>5. Derechos ARCO</h3>
              <p>Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de sus datos (derechos ARCO). Para ejercerlos, envíe una solicitud con identificación oficial a: <strong>contacto@internistaenaguascalientes.com</strong> o al teléfono 449-497-02-40. La Responsable atenderá su solicitud en un plazo máximo de 20 días hábiles.</p>
              <h3>6. Cambios al Aviso de Privacidad</h3>
              <p>La Responsable se reserva el derecho de modificar este aviso. Cualquier cambio será publicado en este sitio web. El uso continuado del sitio implica la aceptación de las modificaciones.</p>
            </div>

            <!-- ===== TÉRMINOS Y CONDICIONES ===== -->
            <div v-if="activeModal === 'terms'">
              <p class="text-slate-500 text-xs mb-4">Última actualización: febrero 2026 &bull; Al utilizar este sitio web, usted acepta los presentes Términos y Condiciones.</p>
              <h3>1. Objeto</h3>
              <p>El presente sitio web <strong>internistaenaguascalientes.com</strong> es propiedad de la Dra. Rosalba Yissel Mendoza González y tiene como propósito proporcionar información sobre sus servicios médicos de Medicina Interna en Aguascalientes, México, y facilitar el contacto para agendar consultas.</p>
              <h3>2. Información médica general</h3>
              <p>El contenido de este sitio tiene carácter <strong>informativo y divulgativo</strong>. En ningún caso sustituye la relación médico-paciente, el diagnóstico clínico ni el tratamiento prescrito por un profesional de la salud. Consulte siempre a un especialista ante cualquier duda sobre su estado de salud.</p>
              <h3>3. Propiedad intelectual</h3>
              <p>Todos los textos, imágenes, logotipos, diseños y elementos del presente sitio son propiedad exclusiva de la Dra. Yissel Mendoza o se usan con la debida autorización. Queda prohibida su reproducción total o parcial sin consentimiento escrito previo.</p>
              <h3>4. Uso del sitio</h3>
              <p>El usuario se compromete a utilizar el sitio de forma lícita, sin realizar actividades que puedan dañar, inutilizar o deteriorar el sitio o su reputación. Queda prohibido el uso del sitio para enviar comunicaciones no solicitadas.</p>
              <h3>5. Limitación de responsabilidad</h3>
              <p>La Responsable no garantiza la disponibilidad continua del sitio web y no se hace responsable por daños derivados del uso o imposibilidad de uso del mismo, ni por errores u omisiones en el contenido informativo.</p>
              <h3>6. Citas y servicios médicos</h3>
              <p>La solicitud de cita a través de este sitio o por teléfono no representa un contrato de prestación de servicios médicos. La relación médico-paciente y los honorarios aplicables serán establecidos directamente en el consultorio conforme a la normativa vigente en México.</p>
              <h3>7. Cancelación de citas</h3>
              <p>Se solicita cancelar o reprogramar con un mínimo de <strong>24 horas de anticipación</strong> para permitir la atención de otros pacientes.</p>
              <h3>8. Legislación aplicable</h3>
              <p>Los presentes Términos se rigen por las leyes de los <strong>Estados Unidos Mexicanos</strong>. Para cualquier controversia, ambas partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Aguascalientes.</p>
            </div>

            <!-- ===== AVISO DE COOKIES ===== -->
            <div v-if="activeModal === 'cookies'">
              <p class="text-slate-500 text-xs mb-4">Última actualización: febrero 2026</p>
              <h3>¿Qué son las cookies?</h3>
              <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo para recordar preferencias, mejorar la funcionalidad y recopilar información estadística anónima sobre el uso del sitio.</p>
              <h3>Tipos de cookies que utilizamos</h3>
              <ul>
                <li><strong>Cookies técnicas / esenciales:</strong> Necesarias para el funcionamiento básico del sitio (tema visual, preferencias de idioma, seguridad de formularios). No requieren consentimiento.</li>
                <li><strong>Cookies analíticas:</strong> Utilizamos Google Analytics de forma anonimizada para entender cómo los usuarios navegan por el sitio y mejorar el contenido. No identifican a personas físicas.</li>
                <li><strong>Cookies de terceros (Mapas):</strong> El mapa embebido de Google Maps puede establecer cookies propias de Google Inc. Consulte la política de privacidad de Google para más información.</li>
              </ul>
              <h3>¿Cómo administrar las cookies?</h3>
              <p>Puede aceptar o rechazar las cookies no esenciales mediante el banner que aparece al ingresar al sitio, o configurarlas desde los ajustes de su navegador:</p>
              <ul>
                <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad</li>
                <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios</li>
              </ul>
              <p>La desactivación de cookies técnicas puede afectar el funcionamiento correcto del sitio.</p>
              <h3>Vigencia</h3>
              <p>Las cookies analíticas se conservan por un máximo de 13 meses. Las cookies técnicas persisten durante la sesión o hasta que el usuario las elimine manualmente.</p>
            </div>

          </div>
          <div class="mt-8 flex justify-end">
            <button @click="closeModal" class="px-6 py-2 rounded-full font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:opacity-90" style="background: linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%);">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap as _gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// [finalOpacity, initRot, floatY, floatX, floatRot, dur, delay]
const ofConfig = [
  [0.62,  10, -28,  18,  14, 7.0, 0.0],
  [0.55,  -8,  32, -22, -16, 9.0, 0.2],
  [0.58,  14, -36, -18,  18, 8.0, 0.4],
  [0.50, -16,  26,  22, -16, 7.5, 0.1],
  [0.45,   8, -22, -14,  14, 8.5, 0.3],
  [0.55, -12,  28,  20, -18, 6.5, 0.5],
]

const navLinks = [
  { label: 'Inicio',              href: '#inicio' },
  { label: 'Acerca de',          href: '#acerca' },
  { label: 'Servicios',          href: '#servicios' },
  { label: 'Preguntas Frecuentes', href: '#preguntas' },
]

const activeModal = ref<string | null>(null)

const openModal = (type: string) => {
  activeModal.value = type
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeModal.value = null
  document.body.style.overflow = ''
}

const modalTitle = computed(() => {
  switch(activeModal.value) {
    case 'privacy': return 'Política de Privacidad'
    case 'terms': return 'Términos y Condiciones'
    case 'cookies': return 'Aviso de Cookies'
    default: return ''
  }
})

// Listen for event dispatched by CookieBanner
const handleLegalModal = (e: Event) => {
  openModal((e as CustomEvent).detail)
}

onMounted(() => {
  window.addEventListener('open-legal-modal', handleLegalModal)

  _gsap.registerPlugin(ScrollTrigger)

  // Organ entrance triggered by footer scroll into view
  ofConfig.forEach(([op, rot, , , , dur, delay], i) => {
    const el = `.of-${i + 1}`
    _gsap.set(el, { opacity: 0, scale: 0.5, rotation: (rot as number) * 2 })
    ScrollTrigger.create({
      trigger: 'footer',
      start: 'top 90%',
      once: true,
      onEnter: () => {
        _gsap.to(el, {
          opacity: op, scale: 1, rotation: rot as number,
          duration: dur as number, delay: delay as number,
          ease: 'power3.out'
        })
        _gsap.to(el, {
          y: ofConfig[i][2] as number, x: ofConfig[i][3] as number, rotation: `+=${ofConfig[i][4]}`,
          duration: ofConfig[i][5] as number,
          repeat: -1, yoyo: true, ease: 'sine.inOut',
          delay: (delay as number) + 1.2
        })
      }
    })
  })
})
onUnmounted(() => {
  window.removeEventListener('open-legal-modal', handleLegalModal)
})
</script>
