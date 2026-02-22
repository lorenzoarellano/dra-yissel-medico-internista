<template>
  <div class="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary dark:selection:bg-secondary/20 dark:selection:text-secondary">
    <Navbar />
    
    <main class="flex-grow pt-20">
      <slot />
    </main>

    <Footer />
    
    <FloatingWhatsApp />
  </div>
</template>

<script setup lang="ts">
// Base layout structure wrapping the entire page content.
</script>
