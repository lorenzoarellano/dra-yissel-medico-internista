const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
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
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
