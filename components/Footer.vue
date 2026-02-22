<template>
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="space-y-4">
          <img src="/logo.webp" alt="Dra. Yissel Mendoza Logo" class="h-12 w-auto" />
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Especializada en el abordaje y tratamiento de las enfermedades crónicas del adulto con información actualizada, integral y con calidad humana.
          </p>
          <div class="flex space-x-4 pt-2">
            <a href="#" class="text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors" aria-label="Facebook">
              <Icon name="lucide:facebook" class="w-5 h-5" />
            </a>
            <a href="#" class="text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors" aria-label="Instagram">
              <Icon name="lucide:instagram" class="w-5 h-5" />
            </a>
            <a href="#" class="text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors" aria-label="LinkedIn">
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-display font-semibold text-slate-900 dark:text-white mb-4">Secciones</h3>
          <ul class="space-y-3">
            <li v-for="link in ['Inicio', 'Acerca de', 'Servicios', 'Preguntas Frecuentes']" :key="link">
              <a :href="`#${link.toLowerCase().replace(' ', '')}`" class="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-display font-semibold text-slate-900 dark:text-white mb-4">Contacto</h3>
          <ul class="space-y-3">
            <li class="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
              <Icon name="lucide:map-pin" class="w-5 h-5 flex-shrink-0 text-primary dark:text-secondary" />
              <span>Hospital MAC SUR, Torre C, Cons. 201,<br/>Aguascalientes, Ags.</span>
            </li>
            <li class="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
              <Icon name="lucide:phone" class="w-5 h-5 flex-shrink-0 text-primary dark:text-secondary" />
              <a href="tel:4494970240" class="hover:text-primary dark:hover:text-secondary transition-colors">449-497-02-40</a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="font-display font-semibold text-slate-900 dark:text-white mb-4">Legales</h3>
          <ul class="space-y-3">
            <li>
              <button @click="openModal('privacy')" class="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors text-left">
                Política de Privacidad
              </button>
            </li>
            <li>
              <button @click="openModal('terms')" class="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors text-left">
                Términos y Condiciones
              </button>
            </li>
            <li>
              <button @click="openModal('cookies')" class="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors text-left">
                Aviso de Cookies
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {{ new Date().getFullYear() }} Dra. Yissel Mendoza. Todos los derechos reservados.</p>
        <p class="mt-4 md:mt-0 flex items-center">
          Created by <a href="https://doctordigital.mx/" target="_blank" rel="noopener noreferrer" class="font-medium text-primary dark:text-secondary hover:underline ml-1">👾DoctorDigitalMx</a>
        </p>
      </div>
    </div>

    <!-- Modals (Simplified internal state for brevity) -->
    <Teleport to="body">
      <div v-if="activeModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" @click.self="closeModal">
        <div class="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl p-6 md:p-8 shadow-2xl animate-scale-in">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white">{{ modalTitle }}</h2>
            <button @click="closeModal" class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Icon name="lucide:x" class="w-5 h-5" />
            </button>
          </div>
          <div class="prose dark:prose-invert max-w-none max-h-[60vh] overflow-y-auto pr-4">
            <p v-if="activeModal === 'privacy'">Información detallada sobre el tratamiento de sus datos personales. (Texto a completar por el área legal conforme a las leyes de México).</p>
            <p v-if="activeModal === 'terms'">Términos y condiciones del uso del sitio web y servicios médicos prestados por la Dra. Yissel Mendoza.</p>
            <p v-if="activeModal === 'cookies'">Utilizamos cookies técnicas necesarias y cookies analíticas para mejorar su experiencia. Al navegar consiente su uso.</p>
          </div>
          <div class="mt-8 flex justify-end">
            <button @click="closeModal" class="px-6 py-2 bg-primary dark:bg-secondary text-white dark:text-slate-900 rounded-full font-medium hover:opacity-90 transition-opacity">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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
</script>
