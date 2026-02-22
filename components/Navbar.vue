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
             class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-secondary transition-colors">
            {{ link.name }}
          </a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <button @click="toggleTheme" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Cambiar tema">
            <Icon v-if="isDark" name="lucide:sun" class="w-5 h-5 text-secondary" />
            <Icon v-else name="lucide:moon" class="w-5 h-5 text-primary" />
          </button>
          
          <a href="tel:4494970240" class="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
            Agendar Cita
          </a>
          
          <!-- Mobile Menu Button Placeholder -->
          <button class="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
            <span class="sr-only">Abrir menú</span>
            <Icon name="lucide:menu" class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const links = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Acerca de', href: '#acerca' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Preguntas', href: '#preguntas' },
  { name: 'Contacto', href: '#contacto' },
]

onMounted(() => {
  // Check theme on mount
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // We default to light if they didn't specify, but here we read system pref or local storage
    if(localStorage.getItem('theme') === 'dark') {
      isDark.value = true
      document.documentElement.classList.add('dark')
    }
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
