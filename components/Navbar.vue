<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
    <div class="container mx-auto px-4 py-4">
      <div class="glass-navbar rounded-2xl px-6 py-4 flex items-center justify-between pointer-events-auto">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <img src="/logo.webp" alt="Dra. Yissel Mendoza Logo" class="h-10 w-auto" />
        </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-8">
          <a v-for="link in links" :key="link.name" :href="link.href" 
             class="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
            {{ link.name }}
          </a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center space-x-3">
          <!-- Social icons -->
          <a href="https://www.instagram.com/dra.mendozainternista?utm_source=qr&igsh=MTV2eTBodmluc280Mg%3D%3D"
            target="_blank" rel="noopener noreferrer"
            class="hidden sm:flex items-center justify-center w-8 h-8 rounded-full text-slate-500 hover:text-[#E1306C] transition-colors hover:bg-pink-50"
            aria-label="Instagram">
            <Icon name="lucide:instagram" class="w-4 h-4" />
          </a>

          <a href="tel:4494970240" class="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full shadow-md text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" style="background: linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%);">
            Agendar Cita
          </a>
          
          <!-- Mobile Menu Button -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
          >
            <span class="sr-only">{{ isOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
            <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Drawer -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isOpen"
          id="mobile-menu"
          class="md:hidden mt-2 glass-navbar rounded-2xl px-6 py-5 pointer-events-auto"
        >
          <nav class="flex flex-col space-y-1">
            <a
              v-for="link in links"
              :key="link.name"
              :href="link.href"
              @click="isOpen = false"
              class="px-3 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-primary hover:bg-white/60 transition-colors"
            >
              {{ link.name }}
            </a>
          </nav>
          <div class="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="tel:4494970240"
              class="inline-flex items-center justify-center px-5 py-3 rounded-full shadow-md text-sm font-bold text-white transition-all focus:outline-none"
              style="background: linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%);"
              @click="isOpen = false"
            >
              <Icon name="lucide:calendar" class="w-4 h-4 mr-2" />
              Agendar Cita
            </a>
            <a
              href="https://www.instagram.com/dra.mendozainternista?utm_source=qr&igsh=MTV2eTBodmluc280Mg%3D%3D"
              target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-600 bg-white/60 border border-slate-200 hover:text-[#E1306C] transition-colors"
              @click="isOpen = false"
            >
              <Icon name="lucide:instagram" class="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Acerca de', href: '#acerca' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Preguntas', href: '#preguntas' },
  { name: 'Contacto', href: '#contacto' },
]
</script>
