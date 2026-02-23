<template>
  <div>
    <SectionsHero />
    <SectionsAbout />
    <SectionsServices />
    <SectionsTestimonials />
    <SectionsFaq />
    <SectionsContact />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes | Consulta Especializada',
  meta: [
    { name: 'description', content: 'Dra. Rosalba Yissel Mendoza González, Médico Internista certificada en Aguascalientes. Especialista en diabetes, hipertensión, enfermedades crónicas del adulto, valoración prequirúrgica y segunda opinión médica. Hospital MAC SUR, Torre C, Consultorio 201. Tel: 449-497-02-40.' },
    { name: 'keywords', content: 'medico internista aguascalientes, medicina interna aguascalientes, internista aguascalientes, dra yissel mendoza, diabetes aguascalientes, hipertension arterial aguascalientes, enfermedades cronicas adulto aguascalientes, valoracion preoperatoria aguascalientes, hospital mac sur aguascalientes' },
    { property: 'og:locale', content: 'es_MX' },
    { property: 'og:title', content: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes' },
    { property: 'og:description', content: 'Especialista en Medicina Interna en Aguascalientes. Diagnóstico y tratamiento de diabetes, hipertensión, padecimientos crónicos del adulto. Cédula 12193559. Hospital MAC SUR.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://internistaenaguascalientes.com/social-share-cover.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes' },
    { property: 'og:url', content: 'https://internistaenaguascalientes.com' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://internistaenaguascalientes.com/social-share-cover.jpg' },
    { name: 'twitter:title', content: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes' },
    { name: 'twitter:description', content: 'Especialista en Medicina Interna en Aguascalientes. Diagnóstico y tratamiento de diabetes, hipertensión, padecimientos crónicos del adulto.' },
    { name: 'geo.region', content: 'MX-AGU' },
    { name: 'geo.placename', content: 'Aguascalientes, México' },
    { name: 'geo.position', content: '21.8853;-102.2916' },
    { name: 'ICBM', content: '21.8853, -102.2916' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Physician',
        '@id': 'https://internistaenaguascalientes.com/#physician',
        name: 'Dra. Rosalba Yissel Mendoza González',
        alternateName: 'Dra. Yissel Mendoza',
        image: 'https://internistaenaguascalientes.com/social-share-cover.jpg',
        sameAs: [
          'https://www.instagram.com/dra.mendozainternista/',
          'https://www.cmmi.org.mx',
        ],
        description: 'Médico Internista certificada en Aguascalientes, especializada en diabetes, hipertensión, enfermedades crónicas del adulto, valoración preoperatoria y diagnóstico de patologías complejas. Ofrece consulta presencial en Hospital MAC SUR y consulta virtual por videollamada.',
        medicalSpecialty: 'Medicina Interna',
        url: 'https://internistaenaguascalientes.com',
        telephone: '+524494970240',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Blvrd. República de Perú 102, Torre C, Consultorio 201',
          addressLocality: 'Aguascalientes',
          addressRegion: 'Aguascalientes',
          postalCode: '20234',
          addressCountry: 'MX'
        },
        worksFor: {
          '@type': 'MedicalOrganization',
          name: 'Hospital MAC SUR Aguascalientes',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Blvrd. República de Perú 102',
            addressLocality: 'Aguascalientes',
            addressRegion: 'Aguascalientes',
            postalCode: '20234',
            addressCountry: 'MX'
          }
        },
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Cédula Profesional', identifier: '12193559' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Cédula de Especialidad', identifier: '14201115' }
        ],
        memberOf: {
          '@type': 'MedicalOrganization',
          name: 'Colegio Mexicano de Medicina Interna',
          alternateName: 'CMMI',
          url: 'https://www.cmmi.org.mx'
        },
        knowsAbout: [
          { '@type': 'MedicalCondition', name: 'Diabetes mellitus', '@id': 'https://www.wikidata.org/wiki/Q1474' },
          { '@type': 'MedicalCondition', name: 'Hipertensión arterial', '@id': 'https://www.wikidata.org/wiki/Q178523' },
          { '@type': 'MedicalSpecialty', name: 'Medicina Interna', '@id': 'https://www.wikidata.org/wiki/Q81938' },
          { '@type': 'MedicalCondition', name: 'Enfermedades crónicas del adulto' },
          { '@type': 'MedicalProcedure', name: 'Valoración preoperatoria' },
          { '@type': 'MedicalCondition', name: 'Enfermedad renal crónica', '@id': 'https://www.wikidata.org/wiki/Q373106' },
          { '@type': 'MedicalCondition', name: 'Hipotiroidismo', '@id': 'https://www.wikidata.org/wiki/Q193262' },
          { '@type': 'MedicalCondition', name: 'Dislipidemia', '@id': 'https://www.wikidata.org/wiki/Q1139130' },
          { '@type': 'MedicalCondition', name: 'Enfermedades cardiovasculares', '@id': 'https://www.wikidata.org/wiki/Q133823' },
          { '@type': 'MedicalCondition', name: 'Obesidad', '@id': 'https://www.wikidata.org/wiki/Q12174' },
          { '@type': 'MedicalProcedure', name: 'Segunda opinión médica' },
          { '@type': 'MedicalCondition', name: 'Enfermedades autoinmunes', '@id': 'https://www.wikidata.org/wiki/Q18123741' }
        ],
        areaServed: {
          '@type': 'City',
          name: 'Aguascalientes',
          containedInPlace: { '@type': 'State', name: 'Aguascalientes', containedInPlace: { '@type': 'Country', name: 'México' } }
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '14:00' }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://internistaenaguascalientes.com/#website',
        url: 'https://internistaenaguascalientes.com',
        name: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes',
        description: 'Sitio oficial de la Dra. Rosalba Yissel Mendoza González, Médico Internista certificada en Aguascalientes.',
        inLanguage: 'es-MX',
        publisher: { '@id': 'https://internistaenaguascalientes.com/#physician' },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.hero-text p', '#preguntas']
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Qué es un médico internista y en qué se diferencia de un médico general?',
            acceptedAnswer: { '@type': 'Answer', text: 'Un médico internista es especialista en el diagnóstico y tratamiento no quirórgico de enfermedades que afectan los órganos internos del adulto, especialmente padecimientos crónicos y complejos (diabetes, hipertensión, enfermedades renales, endocrinológicas, hematológicas). A diferencia del médico general, el internista tiene 3 años adicionales de formación hospitalaria de alta complejidad y está certificado por un consejo oficial.' }
          },
          {
            '@type': 'Question',
            name: '¿Cómo llego exactamente al consultorio de la Dra. Yissel Mendoza?',
            acceptedAnswer: { '@type': 'Answer', text: 'El consultorio se encuentra dentro del Hospital MAC SUR, Torre C, Consultorio 201, en Blvrd. República de Perú 102, Aguascalientes, Ags. C.P. 20234. Al llegar al hospital, dirígete a la Torre C o al área de Centro Oncológico y sube al nivel 2. Cuenta con estacionamiento propio y transporte público cercano.' }
          },
          {
            '@type': 'Question',
            name: '¿Qué padecimientos trata un médico internista en Aguascalientes?',
            acceptedAnswer: { '@type': 'Answer', text: 'La Dra. Yissel Mendoza trata: diabetes mellitus tipo 1 y tipo 2, hipertensión arterial, dislipidemias, enfermedad renal crónica, hipotiroidismo, hipertiroidismo, anemia, enfermedades pulmonares crónicas (EPOC, asma del adulto), enfermedades autoinmunes, obesidad mórbida y otras patologías internas del adulto.' }
          },
          {
            '@type': 'Question',
            name: '¿Necesito referencia médica para consultar con la Dra. Yissel?',
            acceptedAnswer: { '@type': 'Answer', text: 'No es necesaria una referencia médica previa. Puedes llamar directamente al 449-497-02-40 o contactar por WhatsApp para programar tu cita.' }
          },
          {
            '@type': 'Question',
            name: '¿Cuánto tiempo dura una consulta de medicina interna?',
            acceptedAnswer: { '@type': 'Answer', text: 'Una primera consulta dura aproximadamente 40 a 60 minutos. Las consultas de seguimiento duran entre 20 y 30 minutos para evaluar evolución y ajustar tratamiento.' }
          },
          {
            '@type': 'Question',
            name: '¿Qué debo llevar a mi primera consulta?',
            acceptedAnswer: { '@type': 'Answer', text: 'Te recomendamos traer: identificación oficial, estudios de laboratorio recientes, lista de medicamentos actuales, historial médico relevante y cualquier diagnóstico previo por escrito.' }
          },
          {
            '@type': 'Question',
            name: '¿La Dra. Yissel Mendoza trabaja con seguros médicos o planes de salud?',
            acceptedAnswer: { '@type': 'Answer', text: 'Para consultar la aceptación de tu seguro médico específico, comunícate directamente al 449-497-02-40 antes de tu cita. El pago particular también está disponible.' }
          },
          {
            '@type': 'Question',
            name: '¿Atiende pacientes pediátricos o adolescentes?',
            acceptedAnswer: { '@type': 'Answer', text: 'La Medicina Interna se especializa exclusivamente en la atención integral de pacientes adultos (mayores de 18 años). Para niños y adolescentes, lo ideal es acudir con un médico pediatra.' }
          },
          {
            '@type': 'Question',
            name: '¿Trata enfermedades autoinmunes o reumatológicas?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sí, el médico internista es el especialista primario para enfermedades autoinmunes sistémicas como lupus eritematoso, artritis reumatoide, vasculitis y sarcoidosis. La Dra. Yissel Mendoza realiza la evaluación clínica completa en Aguascalientes.' }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['MedicalBusiness', 'LocalBusiness'],
        '@id': 'https://internistaenaguascalientes.com/#localbusiness',
        name: 'Consultorio Dra. Yissel Mendoza — Médico Internista Aguascalientes',
        image: 'https://internistaenaguascalientes.com/social-share-cover.jpg',
        url: 'https://internistaenaguascalientes.com',
        telephone: '+524494970240',
        priceRange: '$$',
        currenciesAccepted: 'MXN',
        paymentAccepted: 'Efectivo, Tarjeta',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Blvrd. República de Perú 102, Torre C, Consultorio 201',
          addressLocality: 'Aguascalientes',
          addressRegion: 'AGU',
          postalCode: '20234',
          addressCountry: 'MX'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 21.8853,
          longitude: -102.2916
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '14:00' }
        ],
        sameAs: [
          'https://www.instagram.com/dra.mendozainternista/'
        ],
        hasMap: 'https://maps.google.com/maps?q=Hospital+MAC+Aguascalientes+Sur,+Blvrd+Rep%C3%BAblica+de+Per%C3%BA+102,+Aguascalientes,+M%C3%A9xico',
        medicalSpecialty: 'Medicina Interna',
        availableService: [
          {
            '@type': 'MedicalTherapy',
            name: 'Consulta presencial de Medicina Interna',
            description: 'Consulta médica especializada en Aguascalientes, Hospital MAC SUR, Torre C, Consultorio 201.',
            serviceLocation: {
              '@type': 'MedicalClinic',
              name: 'Hospital MAC SUR Aguascalientes',
              address: { '@type': 'PostalAddress', streetAddress: 'Blvrd. República de Perú 102, Torre C, Consultorio 201', addressLocality: 'Aguascalientes', addressCountry: 'MX' }
            }
          },
          {
            '@type': 'MedicalTherapy',
            name: 'Consulta virtual de Medicina Interna',
            description: 'Consulta médica por videollamada con la Dra. Yissel Mendoza. Ideal para seguimiento, revisión de estudios y segunda opinión desde cualquier lugar.',
            serviceType: 'Telemedicina'
          }
        ],
        isPartOf: {
          '@type': 'MedicalOrganization',
          name: 'Hospital MAC SUR Aguascalientes'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo agendar una cita con la Dra. Yissel Mendoza — Médico Internista en Aguascalientes',
        description: 'Pasos sencillos para reservar tu consulta de medicina interna con la Dra. Yissel Mendoza en Aguascalientes.',
        totalTime: 'PT10M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Elige tu vía de contacto',
            text: 'Llama al 449-497-02-40 o escríbenos por WhatsApp para consultar disponibilidad de citas.'
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Selecciona fecha y hora',
            text: 'Escoge una fecha de lunes a sábado entre las 9:00 y las 14:00 hrs en el Hospital MAC SUR, Torre C, Consultorio 201, Aguascalientes.'
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Confirma tu cita',
            text: 'Recibe confirmación por teléfono o WhatsApp. Anota la fecha, hora y cualquier instrucción especial.'
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Preséntate el día de tu consulta',
            text: 'Acude al Hospital MAC SUR (dentro del Centro Oncológico), Torre C, Consultorio 201. Trae identificación oficial, estudios de laboratorio o imagen recientes y lista de medicamentos actuales.'
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        '@id': 'https://internistaenaguascalientes.com/#webpage',
        url: 'https://internistaenaguascalientes.com',
        name: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes',
        description: 'Sitio oficial de la Dra. Rosalba Yissel Mendoza González, Médico Internista certificada en Aguascalientes. Especialista en diabetes, hipertensión, valoración preoperatoria y enfermedades crónicas del adulto.',
        inLanguage: 'es-MX',
        isPartOf: { '@id': 'https://internistaenaguascalientes.com/#website' },
        about: { '@id': 'https://internistaenaguascalientes.com/#physician' },
        lastReviewed: '2026-02-23',
        reviewedBy: { '@id': 'https://internistaenaguascalientes.com/#physician' },
        medicalAudience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patient',
          healthCondition: { '@type': 'MedicalCondition', name: 'Enfermedades crónicas del adulto' }
        },
        specialty: 'Medicina Interna'
      })
    }
  ]
})
</script>
