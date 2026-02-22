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
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'es-MX',
            },
            title: 'Dra. Yissel Mendoza | Medicina Interna en Aguascalientes',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Especializada en el abordaje y tratamiento de las enfermedades crónicas del adulto con información actualizada, integral y con calidad humana.' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#ffffff' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },

    css: ['~/assets/css/main.css'],

    build: {
        transpile: ['gsap'],
    },
})
