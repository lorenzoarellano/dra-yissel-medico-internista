// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@nuxt/eslint',
        'nuxt-icon'
    ],

    googleFonts: {
        families: {
            Inter: [300, 400, 500, 600, 700],
            Outfit: [300, 400, 500, 600, 700],
        },
        display: 'swap',
    },

    site: {
        url: 'https://internistaenaguascalientes.com',
        name: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes',
        description: 'Médico Internista certificada en Aguascalientes. Especialista en diabetes, hipertensión, enfermedades crónicas del adulto.',
        defaultLocale: 'es-MX',
    },

    robots: {
        sitemap: ['https://internistaenaguascalientes.com/sitemap.xml'],
        groups: [
            {
                userAgent: ['*'],
                allow: ['/'],
            },
        ],
    },

    sitemap: {
        defaults: {
            changefreq: 'monthly',
            priority: 0.9,
            lastmod: new Date().toISOString(),
        },
        urls: [
            {
                loc: '/',
                priority: 1.0,
                changefreq: 'weekly',
                lastmod: new Date().toISOString(),
                images: [
                    { loc: 'https://internistaenaguascalientes.com/hero.webp',      title: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes', caption: 'Dra. Rosalba Yissel Mendoza González, Especialista en Medicina Interna' },
                    { loc: 'https://internistaenaguascalientes.com/acerca-de.webp', title: 'Acerca de la Dra. Yissel Mendoza, Internista en Aguascalientes' },
                    { loc: 'https://internistaenaguascalientes.com/logo.webp',      title: 'Logo Dra. Yissel Mendoza Médico Internista Aguascalientes' },
                    { loc: 'https://internistaenaguascalientes.com/social-share-cover.jpg', title: 'Dra. Yissel Mendoza — Consulta de Medicina Interna Aguascalientes' },
                ],
            },
        ],
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'es-MX',
            },
            title: 'Dra. Yissel Mendoza | Médico Internista en Aguascalientes | Medicina Interna',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Dra. Yissel Mendoza González — Médico Internista certificada en Aguascalientes. Tratamiento especializado de diabetes, hipertensión arterial, enfermedades crónicas, valoración preoperatoria y segunda opinión médica. Hospital MAC SUR, Aguascalientes, Ags. Tel: 449-497-02-40.' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#ffffff' },
                { name: 'author', content: 'Dra. Rosalba Yissel Mendoza González' },
                { name: 'copyright', content: 'Dra. Yissel Mendoza — Médico Internista en Aguascalientes' },
                { name: 'rating', content: 'general' },
                { name: 'language', content: 'Spanish' },
                { name: 'revisit-after', content: '7 days' },
                { property: 'og:locale', content: 'es_MX' },
                { property: 'og:site_name', content: 'Dra. Yissel Mendoza — Médico Internista' },
                { property: 'og:image:type', content: 'image/jpeg' },
                { property: 'og:image:secure_url', content: 'https://internistaenaguascalientes.com/social-share-cover.jpg' },
                { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
                { rel: 'canonical', href: 'https://internistaenaguascalientes.com' },
                { rel: 'alternate', hreflang: 'es-MX', href: 'https://internistaenaguascalientes.com/' },
                { rel: 'alternate', hreflang: 'x-default', href: 'https://internistaenaguascalientes.com/' },
                { rel: 'preload', as: 'image', href: '/hero.webp', type: 'image/webp' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.png' },
            ],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-CHW9GM0H0Z',
                    async: true,
                },
                {
                    innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CHW9GM0H0Z');`,
                },
            ]
        }
    },

    css: ['~/assets/css/main.css'],

    build: {
        transpile: ['gsap'],
    },
})
