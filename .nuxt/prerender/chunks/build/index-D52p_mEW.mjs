import { defineComponent, resolveComponent, mergeProps, ref, useSSRContext } from 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'file:///Users/lorenzoarellano/developer/dra-yissel/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useHead } from './vue.-sixQ7xP-BXTgS32W.mjs';
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

const _imports_0$1 = publicAssetsURL("/hero-placeholder.webp");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "inicio",
        class: "relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 z-0"><div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 dark:bg-primary/20 blur-[100px] animate-pulse-slow"></div><div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-info/10 dark:bg-secondary/20 blur-[120px] animate-pulse-slow" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}"></div><div class="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-accent/10 dark:bg-accent/10 blur-[90px] animate-float"></div></div><div class="container mx-auto px-4 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="hero-text opacity-0"><div class="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 relative"><span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span></span><span class="text-sm font-medium text-slate-700 dark:text-slate-300">Medicina Interna en Aguascalientes</span></div><h1 class="text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"><span class="text-slate-900 dark:text-white block">Atenci\xF3n m\xE9dica</span><span class="text-gradient block mt-2">integral y humana</span></h1><p class="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed"> Especializada en el abordaje y tratamiento de las <strong>enfermedades cr\xF3nicas del adulto</strong> con informaci\xF3n actualizada, integral y con calidad humana. </p><div class="flex flex-col sm:flex-row gap-4"><a href="tel:4494970240" class="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all dark:bg-secondary dark:text-slate-900 dark:hover:bg-secondary/90 hover:-translate-y-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:calendar",
        class: "w-5 h-5 mr-2"
      }, null, _parent));
      _push(` Agendar Cita </a><a href="#servicios" class="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-full text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-1"> Conoce mis servicios </a></div><div class="mt-10 flex items-center gap-4"><div class="flex -space-x-2"><div class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700"></div><div class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600"></div><div class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-400 dark:bg-slate-500"></div></div><div class="text-sm"><div class="flex text-yellow-500 items-center"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:star",
          class: "w-4 h-4 fill-current",
          key: i
        }, null, _parent));
      });
      _push(`<!--]--></div><p class="text-slate-500 dark:text-slate-400 mt-1">M\xE1s de 500+ pacientes atendidos</p></div></div></div><div class="hero-image opacity-0 relative lg:h-[600px] flex items-center justify-center"><div class="absolute inset-0 glass-card rounded-[2rem] transform rotate-3 scale-105 z-0"></div><div class="relative z-10 w-full h-full glass-card rounded-[2rem] overflow-hidden group"><img${ssrRenderAttr("src", _imports_0$1)} alt="Dra. Yissel Mendoza" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"><div class="absolute bottom-8 -left-6 glass-card px-6 py-4 flex items-center gap-4 animate-float"><div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div><p class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Certificada por el</p><p class="font-display font-bold text-slate-900 dark:text-white">Consejo M\xE9dico</p></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/perfil-placeholder.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "acerca",
        class: "py-24 relative"
      }, _attrs))}><div class="container mx-auto px-4"><div class="max-w-4xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Acerca de la Dra. Yissel Mendoza</h2><div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div></div><div class="glass-card p-8 md:p-12 relative overflow-hidden group"><div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/20 rounded-full blur-3xl -mx-20 -my-20 transition-transform duration-700 group-hover:scale-150"></div><div class="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 items-center"><div class="md:col-span-5 flex justify-center"><div class="relative w-64 h-64 md:w-full md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-slate-800/50"><img${ssrRenderAttr("src", _imports_0)} alt="Dra. Yissel Mendoza, M\xE9dico Internista" class="w-full h-full object-cover" loading="lazy"></div></div><div class="md:col-span-7 space-y-6"><h3 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2"> Perfil Profesional </h3><ul class="space-y-4"><li class="flex items-start"><div class="flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle-2",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><p class="ml-3 text-slate-600 dark:text-slate-300"> Licenciatura como <strong>M\xE9dico, Cirujano y Partero</strong> por la Universidad de Guadalajara. </p></li><li class="flex items-start"><div class="flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle-2",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><p class="ml-3 text-slate-600 dark:text-slate-300"><strong>Especialidad en Medicina Interna</strong> por la Universidad de Guadalajara. </p></li><li class="flex items-start"><div class="flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle-2",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><p class="ml-3 text-slate-600 dark:text-slate-300"> Egresada del <strong>Centro M\xE9dico Nacional de Occidente</strong>. </p></li><li class="flex items-start"><div class="flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:award",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><p class="ml-3 text-slate-600 dark:text-slate-300"> Cuenta con <strong>certificaciones del consejo m\xE9dico</strong> vigente. </p></li></ul><div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4"><div class="glass px-4 py-2 rounded-lg inline-flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:file-text",
        class: "w-4 h-4 text-primary dark:text-secondary"
      }, null, _parent));
      _push(`<span class="text-sm font-medium text-slate-700 dark:text-slate-200">C\xE9dula Prof: <strong>12193559</strong></span></div><div class="glass px-4 py-2 rounded-lg inline-flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:file-badge",
        class: "w-4 h-4 text-primary dark:text-secondary"
      }, null, _parent));
      _push(`<span class="text-sm font-medium text-slate-700 dark:text-slate-200">C\xE9dula Esp: <strong>14201115</strong></span></div></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        icon: "lucide:activity",
        title: "Manejo de enfermedades cr\xF3nicas",
        description: "Tratamiento integral de <strong>diabetes</strong>, <strong>hipertensi\xF3n arterial</strong>, enfermedades pulmonares y del ri\xF1\xF3n, buscando estabilizar su salud a largo plazo."
      },
      {
        icon: "lucide:heart-pulse",
        title: "Atenci\xF3n a trastornos espec\xEDficos",
        description: "Abordaje experto de enfermedades <strong>endocrinol\xF3gicas</strong>, renales, hematol\xF3gicas y <strong>cardiovasculares</strong> con base en protocolos actualizados."
      },
      {
        icon: "lucide:shield-plus",
        title: "Prevenci\xF3n m\xE9dica",
        description: "Realizaci\xF3n de <strong>chequeos preventivos</strong>, tamizaje oportuno de enfermedades silenciosas y <strong>valoraci\xF3n preoperatoria</strong> de alta precisi\xF3n."
      },
      {
        icon: "lucide:stethoscope",
        title: "Atenci\xF3n especializada",
        description: "Diagn\xF3stico asertivo de patolog\xEDas complejas, manejo integral de <strong>obesidad</strong> y <strong>segundas opiniones m\xE9dicas</strong> para su tranquilidad y bienestar."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "servicios",
        class: "py-24 bg-white/50 dark:bg-slate-900/50 relative"
      }, _attrs))}><div class="absolute inset-0 overflow-hidden pointer-events-none"><div class="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-info/5 dark:bg-info/10 rounded-full blur-[100px] -translate-y-1/2"></div></div><div class="container mx-auto px-4 relative z-10"><div class="text-center mb-16 max-w-2xl mx-auto service-header opacity-0"><h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Mis Servicios M\xE9dicos</h2><p class="text-slate-600 dark:text-slate-300"> Enfoque especializado en el diagn\xF3stico, tratamiento no quir\xFArgico y prevenci\xF3n de enfermedades en adultos. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"><!--[-->`);
      ssrRenderList(services, (service, i) => {
        var _a;
        _push(`<div class="service-card opacity-0 glass-card p-8 group"><div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-info/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: service.icon,
          class: "w-8 h-8 text-primary dark:text-secondary"
        }, null, _parent));
        _push(`</div><h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">${ssrInterpolate(service.title)}</h3><p class="text-slate-600 dark:text-slate-300 leading-relaxed">${(_a = service.description) != null ? _a : ""}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(0);
    const faqs = [
      {
        question: "\xBFC\xF3mo llego exactamente al consultorio?",
        answer: "Nos encontramos dentro del Centro Oncol\xF3gico del Hospital MAC SUR. Al llegar, dir\xEDgete a la Torre C y sube al consultorio 201."
      },
      {
        question: "\xBFQu\xE9 padecimientos trata un m\xE9dico internista?",
        answer: "Nos enfocamos en el diagn\xF3stico y tratamiento no quir\xFArgico de enfermedades que afectan a los \xF3rganos internos de los adultos, especialmente <strong>padecimientos cr\xF3nicos y complejos</strong> (como alteraciones metab\xF3licas, problemas cardiovasculares o respiratorios profundos)."
      },
      {
        question: "\xBFAtiende pacientes pedi\xE1tricos o adolescentes?",
        answer: "La Medicina Interna se especializa exclusivamente en la atenci\xF3n integral de pacientes <strong>adultos</strong>. Para menores de edad lo ideal es acudir con un Pediatra."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "preguntas",
        class: "py-24 relative"
      }, _attrs))}><div class="container mx-auto px-4 max-w-4xl"><div class="text-center mb-16 faq-header opacity-0"><h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Preguntas Frecuentes</h2><div class="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div></div><div class="space-y-4"><!--[-->`);
      ssrRenderList(faqs, (faq, index) => {
        var _a;
        _push(`<div class="faq-item opacity-0 glass-card transition-all duration-300"><button class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"${ssrRenderAttr("aria-expanded", activeIndex.value === index)}><span class="font-semibold text-slate-800 dark:text-slate-100 pr-8">${ssrInterpolate(faq.question)}</span><div class="${ssrRenderClass([{ "rotate-180 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary": activeIndex.value === index }, "flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-down",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div></button><div style="${ssrRenderStyle(activeIndex.value === index ? null : { display: "none" })}" class="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed origin-top"><div class="pt-2 border-t border-slate-100 dark:border-slate-800"><p>${(_a = faq.answer) != null ? _a : ""}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-12 glass-card p-8 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20 faq-item opacity-0"><div class="flex items-start gap-4"><div class="p-3 bg-red-100 dark:bg-red-900/50 rounded-full text-red-600 dark:text-red-400">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:alert-triangle",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div><h3 class="font-bold text-slate-900 dark:text-white mb-2">Protocolo de Emergencias</h3><p class="text-sm text-slate-600 dark:text-slate-300"> Contamos con una l\xEDnea especial destinada exclusivamente a situaciones m\xE9dicas urgentes de pacientes ya valorados: <br class="hidden sm:block"><a href="tel:3441041492" class="font-bold text-red-600 dark:text-red-400 hover:underline mt-2 inline-block">344-104-14-92</a>. </p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Faq.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = resolveComponent("Icon");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contacto",
        class: "py-24 relative overflow-hidden bg-white/30 dark:bg-slate-900/30"
      }, _attrs))}><div class="container mx-auto px-4 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="space-y-8 contact-item opacity-0"><div><h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Agenda tu cita</h2><p class="text-lg text-slate-600 dark:text-slate-300"> Estamos aqu\xED para ayudarte. Cont\xE1ctanos para programar una valoraci\xF3n integral de tu salud. </p></div><div class="space-y-6"><div class="flex items-start"><div class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map-pin",
        class: "w-6 h-6 text-primary dark:text-secondary"
      }, null, _parent));
      _push(`</div><div class="ml-4"><h3 class="text-lg font-bold text-slate-900 dark:text-white">Ubicaci\xF3n</h3><p class="text-slate-600 dark:text-slate-300 mt-1"> Hospital MAC SUR (Dentro del Centro Oncol\xF3gico). <br>Rep\xFAblica de Per\xFA 102, Torre C, consultorio 201. <br>Aguascalientes, Ags. C.P. 20234. </p></div></div><div class="flex items-start"><div class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:phone",
        class: "w-6 h-6 text-primary dark:text-secondary"
      }, null, _parent));
      _push(`</div><div class="ml-4"><h3 class="text-lg font-bold text-slate-900 dark:text-white">Tel\xE9fonos</h3><div class="mt-1 space-y-1"><p class="text-slate-600 dark:text-slate-300"> Citas: <a href="tel:4494970240" class="font-bold text-primary dark:text-secondary hover:underline">449-497-02-40</a></p><p class="text-sm text-slate-500 dark:text-slate-400"> Emergencias (Uso restringido): <a href="tel:3441041492">344-104-14-92</a></p></div></div></div></div><div class="glass-card p-6 border-l-4 border-l-secondary mt-12 bg-white/60 dark:bg-slate-800/60"><div class="flex text-yellow-500 mb-3"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:star",
          class: "w-4 h-4 fill-current",
          key: i
        }, null, _parent));
      });
      _push(`<!--]--></div><p class="italic text-slate-700 dark:text-slate-300 text-sm mb-4"> &quot;Una doctora excelente, me explic\xF3 a detalle mi padecimiento y el tratamiento ha sido muy efectivo. Un trato totalmente humano.&quot; </p><p class="text-sm font-bold text-slate-900 dark:text-white">- Paciente verificado</p></div><button class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-lg text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all dark:bg-secondary dark:text-slate-900 dark:hover:bg-secondary/90 hover:-translate-y-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:calendar-check",
        class: "w-5 h-5 mr-2"
      }, null, _parent));
      _push(` Llamar para agendar </button></div><div class="contact-item opacity-0 h-[400px] lg:h-[600px] w-full glass-card overflow-hidden p-2"><iframe class="w-full h-full rounded-[1.25rem] border-0 grayscale-[20%] contrast-125 dark:invert-[90%] dark:hue-rotate-180 transition-all duration-500 hover:grayscale-0 hover:contrast-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x842a00c60edb1fc5%3A0x633d3ab293e5e407!2sHospital%20MAC%20Aguascalientes%20Sur!5e0!3m2!1ses-419!2smx!4v1703200000000!5m2!1ses-419!2smx" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Inicio | Dra. Yissel Mendoza",
      meta: [
        { name: "description", content: "M\xE9dico internista en Aguascalientes." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHero = _sfc_main$5;
      const _component_SectionsAbout = _sfc_main$4;
      const _component_SectionsServices = _sfc_main$3;
      const _component_SectionsFaq = _sfc_main$2;
      const _component_SectionsContact = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHero, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsFaq, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsContact, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D52p_mEW.mjs.map
