import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D1Yu4fn6.mjs';
import { defineComponent, mergeProps, ref, resolveComponent, withCtx, createVNode, computed, useSSRContext } from 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderTeleport } from 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/h3/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/ufo/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/destr/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/hookable/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/klona/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/defu/dist/defu.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/scule/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/unctx/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/radix3/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/consola/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/pathe/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/ipx/dist/index.mjs';
import './server.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/unhead/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/vue-router/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("logo.DjfCBo3g.webp");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = ref(false);
    const links = [
      { name: "Inicio", href: "#inicio" },
      { name: "Acerca de", href: "#acerca" },
      { name: "Servicios", href: "#servicios" },
      { name: "Preguntas", href: "#preguntas" },
      { name: "Contacto", href: "#contacto" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = resolveComponent("Icon");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none" }, _attrs))}><div class="container mx-auto px-4 py-4"><div class="glass-navbar rounded-2xl px-6 py-4 flex items-center justify-between pointer-events-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex-shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Dra. Yissel Mendoza Logo" class="h-10 w-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Dra. Yissel Mendoza Logo",
                class: "h-10 w-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex space-x-8"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-secondary transition-colors">${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--></nav><div class="flex items-center space-x-4"><button class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Cambiar tema">`);
      if (isDark.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:sun",
          class: "w-5 h-5 text-secondary"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:moon",
          class: "w-5 h-5 text-primary"
        }, null, _parent));
      }
      _push(`</button><a href="tel:4494970240" class="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"> Agendar Cita </a><button class="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"><span class="sr-only">Abrir men\xFA</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:menu",
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div></div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const activeModal = ref(null);
    const modalTitle = computed(() => {
      switch (activeModal.value) {
        case "privacy":
          return "Pol\xEDtica de Privacidad";
        case "terms":
          return "T\xE9rminos y Condiciones";
        case "cookies":
          return "Aviso de Cookies";
        default:
          return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8" }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"><div class="space-y-4"><img${ssrRenderAttr("src", _imports_0)} alt="Dra. Yissel Mendoza Logo" class="h-12 w-auto"><p class="text-sm text-slate-600 dark:text-slate-400"> Especializada en el abordaje y tratamiento de las enfermedades cr\xF3nicas del adulto con informaci\xF3n actualizada, integral y con calidad humana. </p><div class="flex space-x-4 pt-2"><a href="#" class="text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors" aria-label="Facebook">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:facebook",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a><a href="#" class="text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors" aria-label="Instagram">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:instagram",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a><a href="#" class="text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors" aria-label="LinkedIn">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:linkedin",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a></div></div><div><h3 class="font-display font-semibold text-slate-900 dark:text-white mb-4">Secciones</h3><ul class="space-y-3"><!--[-->`);
      ssrRenderList(["Inicio", "Acerca de", "Servicios", "Preguntas Frecuentes"], (link) => {
        _push(`<li><a${ssrRenderAttr("href", `#${link.toLowerCase().replace(" ", "")}`)} class="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">${ssrInterpolate(link)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="font-display font-semibold text-slate-900 dark:text-white mb-4">Contacto</h3><ul class="space-y-3"><li class="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map-pin",
        class: "w-5 h-5 flex-shrink-0 text-primary dark:text-secondary"
      }, null, _parent));
      _push(`<span>Hospital MAC SUR, Torre C, Cons. 201,<br>Aguascalientes, Ags.</span></li><li class="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:phone",
        class: "w-5 h-5 flex-shrink-0 text-primary dark:text-secondary"
      }, null, _parent));
      _push(`<a href="tel:4494970240" class="hover:text-primary dark:hover:text-secondary transition-colors">449-497-02-40</a></li></ul></div><div><h3 class="font-display font-semibold text-slate-900 dark:text-white mb-4">Legales</h3><ul class="space-y-3"><li><button class="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors text-left"> Pol\xEDtica de Privacidad </button></li><li><button class="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors text-left"> T\xE9rminos y Condiciones </button></li><li><button class="text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors text-left"> Aviso de Cookies </button></li></ul></div></div><div class="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Dra. Yissel Mendoza. Todos los derechos reservados.</p><p class="mt-4 md:mt-0 flex items-center"> Created by <a href="https://doctordigital.mx/" target="_blank" rel="noopener noreferrer" class="font-medium text-primary dark:text-secondary hover:underline ml-1">\u{1F47E}DoctorDigitalMx</a></p></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (activeModal.value) {
          _push2(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"><div class="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl p-6 md:p-8 shadow-2xl animate-scale-in"><div class="flex justify-between items-center mb-6"><h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white">${ssrInterpolate(modalTitle.value)}</h2><button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            class: "w-5 h-5"
          }, null, _parent));
          _push2(`</button></div><div class="prose dark:prose-invert max-w-none max-h-[60vh] overflow-y-auto pr-4">`);
          if (activeModal.value === "privacy") {
            _push2(`<p>Informaci\xF3n detallada sobre el tratamiento de sus datos personales. (Texto a completar por el \xE1rea legal conforme a las leyes de M\xE9xico).</p>`);
          } else {
            _push2(`<!---->`);
          }
          if (activeModal.value === "terms") {
            _push2(`<p>T\xE9rminos y condiciones del uso del sitio web y servicios m\xE9dicos prestados por la Dra. Yissel Mendoza.</p>`);
          } else {
            _push2(`<!---->`);
          }
          if (activeModal.value === "cookies") {
            _push2(`<p>Utilizamos cookies t\xE9cnicas necesarias y cookies anal\xEDticas para mejorar su experiencia. Al navegar consiente su uso.</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="mt-8 flex justify-end"><button class="px-6 py-2 bg-primary dark:bg-secondary text-white dark:text-slate-900 rounded-full font-medium hover:opacity-90 transition-opacity"> Cerrar </button></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FloatingWhatsApp",
  __ssrInlineRender: true,
  props: {
    phoneNumber: {
      type: String,
      default: "5214494970240"
      // Formato internacional
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none ring-4 ring-green-500/30",
        "aria-label": "Contactar por WhatsApp"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:message-circle",
        class: "w-7 h-7"
      }, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatingWhatsApp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$3;
      const _component_Footer = _sfc_main$2;
      const _component_FloatingWhatsApp = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary dark:selection:bg-secondary/20 dark:selection:text-secondary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<main class="flex-grow pt-20">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_FloatingWhatsApp, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CRrFRyn9.mjs.map
