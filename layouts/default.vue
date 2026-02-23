<template>
  <div class="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
    <Navbar />
    
    <main class="flex-grow">
      <slot />
    </main>

    <Footer />
    
    <FloatingWhatsApp />
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
// Base layout structure wrapping the entire page content.
</script>
