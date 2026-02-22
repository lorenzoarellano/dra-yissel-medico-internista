<template>
  <button 
    @click="handleClick"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none ring-4 ring-green-500/30"
    aria-label="Contactar por WhatsApp"
  >
    <Icon name="lucide:message-circle" class="w-7 h-7" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  phoneNumber: {
    type: String,
    default: '5214494970240' // Formato internacional
  }
})

const handleClick = async () => {
  const whatsappUrl = `https://wa.me/${props.phoneNumber}?text=${encodeURIComponent('Hola, me gustaría agendar una cita con la Dra. Yissel Mendoza.')}`
  
  // Track logic
  try {
    const clicksStr = localStorage.getItem('wa_clicks')
    const clicks = clicksStr ? JSON.parse(clicksStr) : []
    const now = new Date()
    
    // Clean old clicks (> 10 mins)
    const validClicks = clicks.filter((time: string) => {
      return (now.getTime() - new Date(time).getTime()) < (10 * 60 * 1000)
    })
    
    if (validClicks.length < 3) {
      // Registrar e incrementar
      validClicks.push(now.toISOString())
      localStorage.setItem('wa_clicks', JSON.stringify(validClicks))
      
      // Enviar a Cyberbot
      fetchCyberbot()
    } else {
      console.warn('Rate limit para track de API excedido, abriendo WA normal.')
    }
  } catch(e) {
    console.error('Error in handling wa click tracking', e)
  }

  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank')
}

const fetchCyberbot = async () => {
  try {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const hora = `${hours}:${minutes}:${seconds}`;
    const mensaje = `Click sitio web Dra. Yissel Mendoza en el boton agendar cita a las: ${hora}`;

    await $fetch('https://cybertbot.com/masivo', {
      method: 'POST',
      body: {
        number: "4494970240",
        message: mensaje
      }
    });
    console.log("Tracking registrado ok");
  } catch (error) {
    console.error("Error en la petición de tracking:", error);
  }
}
</script>
