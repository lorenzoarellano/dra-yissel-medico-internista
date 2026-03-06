const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [
            {
                "loc": "/",
                "priority": 1,
                "changefreq": "weekly",
                "lastmod": "2026-03-06T16:26:09.496Z",
                "images": [
                    {
                        "loc": "https://internistaenaguascalientes.com/hero.webp",
                        "title": "Dra. Yissel Mendoza — Médico Internista en Aguascalientes",
                        "caption": "Dra. Rosalba Yissel Mendoza González, Especialista en Medicina Interna"
                    },
                    {
                        "loc": "https://internistaenaguascalientes.com/acerca-de.webp",
                        "title": "Acerca de la Dra. Yissel Mendoza, Internista en Aguascalientes"
                    },
                    {
                        "loc": "https://internistaenaguascalientes.com/logo.webp",
                        "title": "Logo Dra. Yissel Mendoza Médico Internista Aguascalientes"
                    },
                    {
                        "loc": "https://internistaenaguascalientes.com/social-share-cover.jpg",
                        "title": "Dra. Yissel Mendoza — Consulta de Medicina Interna Aguascalientes"
                    }
                ]
            }
        ],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/",
                "images": [
                    {
                        "loc": "https://internistaenaguascalientes.com/liver.webp"
                    },
                    {
                        "loc": "https://internistaenaguascalientes.com/pulmon.webp"
                    },
                    {
                        "loc": "https://internistaenaguascalientes.com/kidneys.webp"
                    },
                    {
                        "loc": "https://internistaenaguascalientes.com/hero.webp"
                    },
                    {
                        "loc": "https://internistaenaguascalientes.com/acerca-de.webp"
                    },
                    {
                        "loc": "https://internistaenaguascalientes.com/top-footer.webp"
                    }
                ],
                "alternatives": [
                    {
                        "hreflang": "es-MX",
                        "href": "/"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
