# 🩺 Dra. Yissel Mendoza — Médico Internista en Aguascalientes

> Sitio web oficial de la **Dra. Rosalba Yissel Mendoza González**, Médico Internista certificada en Aguascalientes, México.
> Stack: **Nuxt 3 · Vue 3 · Tailwind CSS · GSAP · Firebase Hosting**
> Optimizado para **SEO · AEO · LLMO · GEO**

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.13-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Hosting-Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com)
[![SSR](https://img.shields.io/badge/SSR-Enabled-success)](https://nuxt.com/docs/guide/concepts/rendering)
[![Schema.org](https://img.shields.io/badge/Schema.org-7%20tipos-blueviolet)](https://schema.org)
[![License](https://img.shields.io/badge/License-Privado-red)](#)

---

## 📑 Tabla de contenidos

- [Descripción del proyecto](#-descripción-del-proyecto)
- [Stack tecnológico](#-stack-tecnológico)
- [Arquitectura SEO completa](#-arquitectura-seo-completa)
  - [SEO Técnico](#1-seo-técnico)
  - [AEO — Answer Engine Optimization](#2-aeo--answer-engine-optimization)
  - [LLMO — Large Language Model Optimization](#3-llmo--large-language-model-optimization)
  - [GEO — Generative Engine Optimization](#4-geo--generative-engine-optimization)
- [Structured Data implementados](#-structured-data-implementados)
- [Core Web Vitals](#-core-web-vitals)
- [Comandos de desarrollo](#-comandos-de-desarrollo)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Deploy](#-deploy)

---

## 🏥 Descripción del proyecto

Sitio web de práctica médica privada para la **Dra. Rosalba Yissel Mendoza González**, especialista en Medicina Interna en Aguascalientes, México. La doctora atiende en el **Hospital MAC SUR, Torre C, Consultorio 201**.

**Servicios representados:**
- Control de enfermedades crónicas (diabetes, hipertensión, EPOC)
- Trastornos endocrinológicos y cardiovasculares
- Medicina preventiva y valoración prequirúrgica
- Diagnóstico complejo y segunda opinión médica
- Consulta virtual por videollamada

**Credenciales:**
- Cédula Profesional: `12193559`
- Cédula de Especialidad: `14201115`
- Miembro Activo: Colegio Mexicano de Medicina Interna (CMMI)

---

## 🛠 Stack tecnológico

| Capa | Tecnología | Propósito SEO |
|---|---|---|
| Framework | Nuxt 3 (SSR) | Renderizado server-side para Googlebot |
| UI | Vue 3 + Tailwind CSS | Estructura semántica HTML |
| Animaciones | GSAP 3 + ScrollTrigger | UX sin sacrificar CWV |
| Tipografías | Google Fonts (Inter + Outfit) | `font-display: swap` |
| Imágenes | `@nuxt/image` + `.webp` | Compresión + `width`/`height` para CLS 0 |
| Robots | `@nuxtjs/robots` | `robots.txt` con `Sitemap:` directive |
| Sitemap | `@nuxtjs/sitemap` v6 | XML + image sitemap automático |
| Analytics | GA4 (`G-CHW9GM0H0Z`) | Señales de comportamiento |
| Hosting | Firebase Hosting | CDN global + HTTPS |

---

## 🔍 Arquitectura SEO completa

### 1. SEO Técnico

#### ✅ Renderizado
- **SSR habilitado** (`ssr: true`) — Googlebot recibe HTML completamente renderizado, sin necesidad de ejecutar JS.
- **Canonical URL** declarada y confirmada por Google: `https://internistaenaguascalientes.com`

#### ✅ `<head>` optimizado

```html
<!-- Identidad de idioma y región -->
<html lang="es-MX">
<meta name="language" content="Spanish">
<meta name="geo.region" content="MX-AGU">
<meta name="geo.placename" content="Aguascalientes, México">
<meta name="geo.position" content="21.8853;-102.2916">
<meta name="ICBM" content="21.8853, -102.2916">

<!-- Control de rastreo -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="revisit-after" content="7 days">

<!-- Autoría y derechos -->
<meta name="author" content="Dra. Rosalba Yissel Mendoza González">
<meta name="copyright" content="Dra. Yissel Mendoza — Médico Internista en Aguascalientes">
```

#### ✅ Sitemap XML con imágenes

```js
// nuxt.config.ts — @nuxtjs/sitemap v6
sitemap: {
  urls: [{
    loc: '/',
    priority: 1.0,
    changefreq: 'weekly',
    images: [
      { loc: 'hero.webp',             title: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes' },
      { loc: 'acerca-de.webp',        title: 'Acerca de la Dra. Yissel Mendoza' },
      { loc: 'social-share-cover.jpg', title: 'Consulta de Medicina Interna Aguascalientes' },
    ]
  }]
}
```

#### ✅ robots.txt con directiva `Sitemap:`

```
# Generado por @nuxtjs/robots
User-agent: *
Allow: /

Sitemap: https://internistaenaguascalientes.com/sitemap.xml
```
> **Crítico:** Sin esta directiva, Google catalogó la URL como "Descubierta – No indexada" durante semanas.

#### ✅ Performance LCP

```html
<!-- Hero image — LCP element -->
<img
  src="/hero.webp"
  alt="Dra. Yissel Mendoza — Médico Internista en Aguascalientes"
  loading="eager"
  fetchpriority="high"
  width="600"
  height="720"
/>
```
- `loading="eager"` + `fetchpriority="high"` → el navegador descarga esta imagen primero
- `width` + `height` explícitos → elimina Cumulative Layout Shift (CLS = 0)
- Declarado también como `<link rel="preload" as="image" type="image/webp">` en `<head>`

#### ✅ Open Graph completo

```html
<meta property="og:title"        content="Dra. Yissel Mendoza — Médico Internista en Aguascalientes">
<meta property="og:description"  content="Especialista en diabetes, hipertensión, valoración preoperatoria...">
<meta property="og:image"        content="https://internistaenaguascalientes.com/social-share-cover.jpg">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type"   content="image/jpeg">
<meta property="og:image:secure_url" content="https://...social-share-cover.jpg">
<meta property="og:locale"       content="es_MX">
<meta property="og:type"         content="website">
<meta name="twitter:card"        content="summary_large_image">
```

#### ✅ hreflang para GEO local

```html
<link rel="alternate" hreflang="es-MX"    href="https://internistaenaguascalientes.com/">
<link rel="alternate" hreflang="x-default" href="https://internistaenaguascalientes.com/">
```

---

### 2. AEO — Answer Engine Optimization

> **AEO** = optimización para que Google (y otros motores) presenten el contenido directamente como respuesta en los **Featured Snippets**, **People Also Ask** y el **Knowledge Panel**.

#### Estrategia implementada

**a) FAQPage Schema — 9 preguntas de alta intención**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un médico internista y en qué se diferencia de un médico general?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un médico internista es especialista en el diagnóstico y tratamiento no quirúrgico de enfermedades que afectan los órganos internos del adulto..."
      }
    }
    // + 8 preguntas más con respuestas completas
  ]
}
```

Las preguntas cubren intenciones de búsqueda de alta frecuencia:
- `médico internista vs médico general`
- `qué enfermedades trata un internista`
- `cómo llegar al consultorio`
- `cuánto dura una consulta de medicina interna`
- `necesito referencia para ver un internista`

**b) HowTo Schema — proceso de agendamiento en 4 pasos**

```json
{
  "@type": "HowTo",
  "name": "Cómo agendar una cita con la Dra. Yissel Mendoza",
  "totalTime": "PT10M",
  "step": [/* 4 pasos detallados */]
}
```
Captura la intención `cómo agendar cita médico internista aguascalientes`.

**c) SpeakableSpecification — optimización para asistentes de voz**

```json
{
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", "h2", ".hero-text p", "#preguntas", "#acerca", "#servicios"]
}
```
Indica a Google Assistant, Siri y Alexa qué fragmentos narrar cuando el usuario hace búsquedas por voz.

---

### 3. LLMO — Large Language Model Optimization

> **LLMO** = estructurar y enriquecer el contenido para que modelos como **ChatGPT, Gemini, Claude y Perplexity** citen, recomienden y representen correctamente a la entidad cuando un usuario pregunta por médicos internistas en Aguascalientes.

#### Estrategia implementada

**a) Entidad inequívoca con identificadores únicos**

```json
{
  "@type": "Physician",
  "@id": "https://internistaenaguascalientes.com/#physician",
  "name": "Dra. Rosalba Yissel Mendoza González",
  "givenName": "Rosalba Yissel",
  "familyName": "Mendoza González",
  "honorificPrefix": "Dra.",
  "alternateName": [
    "Dra. Yissel Mendoza",
    "Dra. Yissel Mendoza González",
    "Internista Aguascalientes"
  ]
}
```
El `@id` con fragmento URI crea un **Knowledge Graph Node** propio, referenciable desde múltiples bloques de JSON-LD en el mismo documento.

**b) Grafo de conocimiento con enlaces a Wikidata**

```json
"alumniOf": [
  { "@type": "CollegeOrUniversity",
    "name": "Universidad de Guadalajara",
    "@id": "https://www.wikidata.org/wiki/Q3028163" },
  { "@type": "Hospital",
    "name": "Centro Médico Nacional de Occidente IMSS",
    "@id": "https://www.wikidata.org/wiki/Q4937718" }
],
"knowsAbout": [
  { "@type": "MedicalCondition", "name": "Diabetes mellitus",
    "@id": "https://www.wikidata.org/wiki/Q1474" },
  { "@type": "MedicalCondition", "name": "Hipertensión arterial",
    "@id": "https://www.wikidata.org/wiki/Q178523" },
  { "@type": "MedicalSpecialty",  "name": "Medicina Interna",
    "@id": "https://www.wikidata.org/wiki/Q81938" }
  // + 9 condiciones/procedimientos más con @id Wikidata
]
```
Los `@id` de Wikidata permiten que los LLMs **anclén la entidad a su conocimiento preentrenado**, aumentando dramáticamente la probabilidad de ser citada cuando responden sobre el tema.

**c) Credenciales verificables (E-E-A-T)**

```json
"hasCredential": [
  { "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Cédula Profesional",
    "identifier": "12193559" },
  { "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Cédula de Especialidad",
    "identifier": "14201115" }
],
"memberOf": {
  "@type": "MedicalOrganization",
  "name": "Colegio Mexicano de Medicina Interna",
  "alternateName": "CMMI",
  "url": "https://www.cmmi.org.mx"
}
```

**d) Red de `sameAs` entre plataformas**

```json
"sameAs": [
  "https://www.instagram.com/dra.mendozainternista/",
  "https://www.cmmi.org.mx",
  "https://www.wikidata.org/wiki/Q81938"
]
```
Conecta la entidad a fuentes externas de alta autoridad que los LLMs ya conocen.

**e) Contenido denso en HTML visible**

El texto visible en la página contiene repetidamente términos con alta densidad semántica que los LLMs usan para el entrenamiento y para la recuperación RAG:
- Nombre completo de la doctora + cédulas
- Condiciones médicas con nombres clínicos exactos
- Ubicación con dirección postal completa
- Horarios, teléfono y formas de contacto

---

### 4. GEO — Generative Engine Optimization

> **GEO** = optimizar para aparecer en las respuestas generadas por motores como **Perplexity AI, Google AI Overviews, Bing Copilot y ChatGPT Search** cuando usuarios hacen consultas conversacionales sobre salud local.

#### Estrategia implementada

**a) LocalBusiness + MedicalBusiness combinados**

```json
{
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": "https://internistaenaguascalientes.com/#localbusiness",
  "priceRange": "$$",
  "currenciesAccepted": "MXN",
  "paymentAccepted": "Efectivo, Tarjeta",
  "hasMap": "https://maps.google.com/maps?q=Hospital+MAC+Aguascalientes+Sur...",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.8853,
    "longitude": -102.2916
  }
}
```

**b) MedicalWebPage con revisión datada**

```json
{
  "@type": "MedicalWebPage",
  "lastReviewed": "2026-02-23",
  "datePublished": "2024-01-01",
  "dateModified": "2026-02-23",
  "reviewedBy": { "@id": "https://internistaenaguascalientes.com/#physician" },
  "specialty": "Medicina Interna"
}
```
Los motores GEO priorizan contenido médico **revisado por el propio especialista** con fechas explícitas.

**c) Horarios de atención en schema**

```json
"openingHoursSpecification": [{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  "opens": "09:00",
  "closes": "14:00"
}]
```

**d) Servicios médicos como entidades independientes**

```json
"availableService": [
  {
    "@type": "MedicalTherapy",
    "name": "Consulta presencial de Medicina Interna",
    "serviceLocation": { "@type": "MedicalClinic", "name": "Hospital MAC SUR Aguascalientes" }
  },
  {
    "@type": "MedicalTherapy",
    "name": "Consulta virtual de Medicina Interna",
    "serviceType": "Telemedicina"
  }
]
```

**e) BreadcrumbList para navegación estructurada**

```json
{
  "@type": "BreadcrumbList",
  "@id": "https://internistaenaguascalientes.com/#breadcrumb",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Médico Internista en Aguascalientes — Dra. Yissel Mendoza",
    "item": "https://internistaenaguascalientes.com/"
  }]
}
```

**f) ReserveAction en WebSite schema**

```json
{
  "@type": "WebSite",
  "potentialAction": [{
    "@type": "ReserveAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "tel:+524494970240" },
    "result": { "@type": "Reservation", "name": "Cita de Medicina Interna — Dra. Yissel Mendoza" }
  }]
}
```
Permite que asistentes como Google Assistant respondan directamente a: *"Agenda una cita con la internista en Aguascalientes"*.

---

## 📐 Structured Data implementados

| Schema | Tipo | Propósito |
|---|---|---|
| `Physician` | Entidad principal | Knowledge Panel + LLMO entity node |
| `MedicalBusiness` + `LocalBusiness` | Negocio local | Google Maps + AI Overviews locales |
| `FAQPage` | 9 preguntas | Featured Snippets + PAA boxes |
| `HowTo` | 4 pasos | Rich result "Cómo agendar" |
| `WebSite` + `ReserveAction` | Sitio + acción | Sitelinks Search Box + asistentes |
| `MedicalWebPage` | Página médica | E-E-A-T + GEO |
| `BreadcrumbList` | Navegación | Rich results de URL |

**Total: 7 tipos de schema** interconectados mediante `@id` (JSON-LD graph linking).

---

## ⚡ Core Web Vitals

| Métrica | Estrategia implementada |
|---|---|
| **LCP** (Largest Contentful Paint) | `loading="eager"` + `fetchpriority="high"` + `<link rel="preload">` en hero image |
| **CLS** (Cumulative Layout Shift) | `width` + `height` explícitos en todas las imágenes críticas |
| **INP** (Interaction to Next Paint) | GSAP con `will-change` controlado; sin bloqueo de hilo principal |
| **FCP** (First Contentful Paint) | SSR — HTML completo en primera respuesta HTTP |
| **TTFB** (Time to First Byte) | Firebase CDN + Nitro server optimizado |

---

## 💻 Comandos de desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo con hot-reload
npm run dev

# Build de producción (SSR)
npm run build

# Preview del build de producción
npm run preview

# Generación de sitio estático (alternativa)
npm run generate

# Linter
npm run lint
```

---

## 📁 Estructura del proyecto

```
dra-yissel-medico-internista/
├── app.vue                      # Entry point
├── nuxt.config.ts               # Config SEO: robots, sitemap, site, head
├── tailwind.config.ts
├── pages/
│   └── index.vue                # 7 bloques JSON-LD + meta tags completos
├── components/
│   ├── Navbar.vue
│   ├── Footer.vue
│   ├── CookieBanner.vue
│   ├── FloatingWhatsApp.vue
│   └── sections/
│       ├── Hero.vue             # LCP optimizado, H1, CTA
│       ├── About.vue            # E-E-A-T: cédulas, institución, certificación
│       ├── Services.vue         # 4 servicios con H3 semánticos
│       ├── Testimonials.vue     # Prueba social
│       ├── Faq.vue              # 9 preguntas AEO
│       └── Contact.vue          # NAP (Name, Address, Phone) consistente
├── public/
│   ├── hero.webp                # LCP — fetchpriority=high
│   ├── acerca-de.webp
│   ├── social-share-cover.jpg  # OG image 1200×630
│   ├── logo.webp
│   └── favicon.png
├── assets/css/main.css
└── plugins/gsap.client.ts
```

---

## 🚀 Deploy

El sitio se despliega en **Firebase Hosting** con SSR via Nitro.

```bash
# Build + deploy completo
npm run build
npx firebase deploy --only hosting
```

**Configuración Firebase (`firebase.json`):**
- Rewrite `**` → función SSR de Nitro
- Headers de caché para assets estáticos
- HTTPS forzado

---

## 🧩 Checklist SEO · AEO · LLMO · GEO

### SEO Técnico
- [x] SSR habilitado — Googlebot recibe HTML completo
- [x] Canonical URL declarada (`https://internistaenaguascalientes.com`)
- [x] `sitemap.xml` con image sitemap y `priority=1.0`
- [x] `robots.txt` con directiva `Sitemap:` explícita
- [x] `<html lang="es-MX">` correcto
- [x] `hreflang="es-MX"` + `hreflang="x-default"`
- [x] Meta description < 160 caracteres con keyword principal
- [x] Open Graph completo (título, desc, imagen 1200×630, tipo MIME)
- [x] Twitter Card `summary_large_image`
- [x] Coordenadas geográficas (`geo.position`, `ICBM`)
- [x] GA4 implementado

### Core Web Vitals
- [x] LCP: hero con `loading="eager"` + `fetchpriority="high"` + `preload`
- [x] CLS: dimensiones `width`/`height` en imágenes críticas
- [x] Imágenes en `.webp` (compresión ~30% menor que JPEG/PNG)
- [x] `font-display: swap` en Google Fonts
- [x] `preconnect` a dominios externos críticos

### AEO
- [x] `FAQPage` schema con 9 preguntas de alta intención local
- [x] `HowTo` schema para proceso de agendamiento
- [x] `SpeakableSpecification` con selectores ampliados
- [x] Preguntas visibles en HTML (no solo en JSON-LD)
- [x] Respuestas autocontenidas (no requieren clic para entenderse)

### LLMO
- [x] Entidad `Physician` con `@id` único y nombre canónico
- [x] `alternateName` como array con todas las variaciones de nombre
- [x] `alumniOf` con `@id` de Wikidata verificables
- [x] `knowsAbout` con 12 condiciones/procedimientos con `@id` Wikidata
- [x] `hasCredential` con números de cédula verificables
- [x] `memberOf` con CMMI y URL oficial
- [x] `sameAs` a Instagram + CMMI + Wikidata
- [x] Contenido HTML denso con términos médicos exactos
- [x] Nombre completo de la doctora visible en múltiples secciones

### GEO
- [x] `LocalBusiness` + `MedicalBusiness` combinados
- [x] `GeoCoordinates` exactas
- [x] `openingHoursSpecification` completo (Lun–Sáb 9:00–14:00)
- [x] `hasMap` con enlace a Google Maps
- [x] `MedicalWebPage` con `lastReviewed` + `dateModified`
- [x] `BreadcrumbList` implementado
- [x] `ReserveAction` en `WebSite` schema
- [x] NAP consistente en 3+ lugares del HTML (Header, Contacto, Footer)
- [x] `availableService` como entidades `MedicalTherapy` independientes
- [x] `priceRange` + `currenciesAccepted` + `paymentAccepted`

---

## 📄 Licencia

Proyecto privado — todos los derechos reservados.
**© 2024–2026 Dra. Rosalba Yissel Mendoza González**

---

<div align="center">

**[🌐 internistaenaguascalientes.com](https://internistaenaguascalientes.com)** &nbsp;·&nbsp;
**[📸 Instagram](https://www.instagram.com/dra.mendozainternista/)** &nbsp;·&nbsp;
**[📞 449-497-02-40](tel:4494970240)**

*Hospital MAC SUR · Torre C · Consultorio 201 · Aguascalientes, Ags.*

</div>
