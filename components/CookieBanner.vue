<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-4 opacity-0"
    >
      <div
        v-if="showBanner"
        class="fixed bottom-6 left-6 z-[200] w-[calc(100%-3rem)] sm:w-auto sm:max-w-sm"
        role="dialog"
        aria-label="Preferencias de cookies"
      >
        <div
          class="rounded-2xl overflow-hidden shadow-2xl"
          style="background: rgba(255,255,255,0.97); backdrop-filter: blur(20px); border: 1px solid rgba(19,47,87,0.10);"
        >
          <!-- Brand gradient top bar -->
          <div class="h-1 w-full" style="background: linear-gradient(90deg, #132f57 0%, #f0aa24 50%, #2ebd85 100%);"></div>

          <div class="p-4">
            <!-- Icon + text row -->
            <div class="flex items-start gap-3 mb-3">
              <div class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style="background: rgba(19,47,87,0.07);">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:1rem;height:1rem;fill:none;stroke:#132f57;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;" aria-hidden="true">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                  <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01"/>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-slate-900 text-xs leading-tight mb-1">Este sitio usa cookies</p>
                <p class="text-slate-500 text-xs leading-relaxed">
                  Usamos cookies esenciales y analíticas para mejorar tu experiencia.
                  <button @click="openCookiePolicy" class="font-semibold hover:underline" style="color:#132f57;">
                    Más info
                  </button>
                </p>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex gap-2">
              <button
                @click="rejectOptional"
                class="flex-1 py-2 text-xs font-semibold rounded-xl border transition-all hover:bg-slate-50"
                style="border-color: rgba(19,47,87,0.20); color:#64748b;"
              >
                Solo esenciales
              </button>
              <button
                @click="acceptAll"
                class="flex-1 py-2 text-xs font-bold rounded-xl text-white transition-all hover:shadow-md hover:-translate-y-0.5"
                style="background: linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%);"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const COOKIE_KEY = 'cookie_consent'

onMounted(() => {
  const stored = localStorage.getItem(COOKIE_KEY)
  if (!stored) {
    setTimeout(() => { showBanner.value = true }, 1200)
  }
})

const acceptAll = () => {
  localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: true, timestamp: Date.now() }))
  showBanner.value = false
}

const rejectOptional = () => {
  localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: false, timestamp: Date.now() }))
  showBanner.value = false
}

const openCookiePolicy = () => {
  window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: 'cookies' }))
  showBanner.value = false
}
</script>
