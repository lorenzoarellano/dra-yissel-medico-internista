import __nuxt_component_0 from "./index-Dw5aD4jo.js";
import { defineComponent, mergeProps, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_0$1, a as _imports_1, b as _imports_2, u as useHead } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "hookable";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "klona";
const _imports_3$1 = publicAssetsURL("/hero.webp");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "inicio",
        class: "relative min-h-screen flex items-center pt-24 pb-0"
      }, _attrs))}><div class="absolute inset-0 z-0" style="${ssrRenderStyle({ "top": "-6rem" })}"><div class="absolute top-[5%] left-[-10%] w-[55%] h-[55%] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow"></div><div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-info/10 blur-[120px] animate-pulse-slow" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}"></div><div class="absolute top-[25%] right-[10%] w-[30%] h-[40%] rounded-full bg-accent/10 blur-[90px] animate-float"></div></div><div class="absolute inset-0 z-[1] pointer-events-none overflow-hidden" style="${ssrRenderStyle({ "top": "-6rem" })}"><img${ssrRenderAttr("src", _imports_0$1)} class="organ-hero oh-1 absolute select-none" style="${ssrRenderStyle({ "width": "130px", "top": "8%", "right": "6%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_0$1)} class="organ-hero oh-2 absolute select-none" style="${ssrRenderStyle({ "width": "72px", "bottom": "3%", "left": "-1%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_0$1)} class="organ-hero oh-3 absolute select-none" style="${ssrRenderStyle({ "width": "96px", "bottom": "8%", "left": "33%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_0$1)} class="organ-hero oh-4 absolute select-none" style="${ssrRenderStyle({ "width": "52px", "top": "72%", "right": "28%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_0$1)} class="organ-hero oh-5 absolute select-none" style="${ssrRenderStyle({ "width": "120px", "bottom": "0%", "left": "2%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-hero oh-6 absolute select-none" style="${ssrRenderStyle({ "width": "150px", "top": "30%", "right": "0%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-hero oh-7 absolute select-none" style="${ssrRenderStyle({ "width": "60px", "top": "1%", "left": "5%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-hero oh-8 absolute select-none" style="${ssrRenderStyle({ "width": "110px", "top": "1%", "left": "42%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-hero oh-9 absolute select-none" style="${ssrRenderStyle({ "width": "80px", "bottom": "14%", "right": "18%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-hero oh-10 absolute select-none" style="${ssrRenderStyle({ "width": "44px", "top": "82%", "left": "56%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-hero oh-11 absolute select-none" style="${ssrRenderStyle({ "width": "120px", "bottom": "16%", "right": "4%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-hero oh-12 absolute select-none" style="${ssrRenderStyle({ "width": "64px", "top": "82%", "left": "-2%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-hero oh-13 absolute select-none" style="${ssrRenderStyle({ "width": "140px", "top": "3%", "right": "22%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-hero oh-14 absolute select-none" style="${ssrRenderStyle({ "width": "56px", "bottom": "1%", "left": "20%" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-hero oh-15 absolute select-none" style="${ssrRenderStyle({ "width": "88px", "top": "44%", "right": "14%" })}" alt="" aria-hidden="true" loading="lazy"></div><div class="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, transparent, #eaf2fb)" })}"></div><div class="container mx-auto px-4 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="hero-text opacity-0"><div class="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 relative"><span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span></span><span class="text-sm font-medium text-slate-700">Médico Internista en Aguascalientes, México</span></div><h1 class="text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"><span class="text-slate-900 block">Tu médico internista</span><span class="text-gradient block mt-2">en Aguascalientes</span></h1><p class="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"> Especialista certificada en el diagnóstico y tratamiento integral de <strong>enfermedades crónicas del adulto</strong>: diabetes, hipertensión, padecimientos renales, endocrinológicos y cardiovasculares. Atención médica de calidad en Aguascalientes, Ags. </p><div class="flex flex-col sm:flex-row gap-4"><a href="tel:4494970240" class="inline-flex items-center justify-center px-8 py-4 rounded-full shadow-lg text-base font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:calendar",
        class: "w-5 h-5 mr-2"
      }, null, _parent));
      _push(` Agendar Cita </a><a href="#servicios" class="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 rounded-full text-base font-medium text-slate-700 hover:bg-slate-100 transition-all hover:-translate-y-1"> Conoce mis servicios </a></div><div class="mt-10 flex flex-wrap items-center gap-3"><div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm"><span class="flex items-center justify-center w-7 h-7 rounded-full" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#132f57,#1a6fa0)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:user-check",
        class: "w-3.5 h-3.5 text-white"
      }, null, _parent));
      _push(`</span><span class="text-sm font-medium text-slate-700">Atención personalizada</span></div><div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm"><span class="flex items-center justify-center w-7 h-7 rounded-full bg-accent/15">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:stethoscope",
        class: "w-3.5 h-3.5 text-accent"
      }, null, _parent));
      _push(`</span><span class="text-sm font-medium text-slate-700">Diagnóstico especializado</span></div><div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm"><span class="flex items-center justify-center w-7 h-7 rounded-full" style="${ssrRenderStyle({ "background": "rgba(240,170,36,0.15)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:heart-pulse",
        class: "w-3.5 h-3.5",
        style: { "color": "#f0aa24" }
      }, null, _parent));
      _push(`</span><span class="text-sm font-medium text-slate-700">Seguimiento continuo</span></div><div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 shadow-sm"><span class="flex items-center justify-center w-7 h-7 rounded-full" style="${ssrRenderStyle({ "background": "rgba(19,47,87,0.10)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:clock",
        class: "w-3.5 h-3.5 text-primary"
      }, null, _parent));
      _push(`</span><span class="text-sm font-medium text-slate-700">Lun–Sáb · 9:00–14:00 hrs</span></div><a href="https://wa.me/5214494970240?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20virtual%20con%20la%20Dra.%20Yissel%20Mendoza." target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,rgba(46,189,133,0.12),rgba(46,189,133,0.20))", "border": "1px solid rgba(46,189,133,0.35)" })}"><span class="flex items-center justify-center w-7 h-7 rounded-full" style="${ssrRenderStyle({ "background": "rgba(46,189,133,0.20)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:video",
        class: "w-3.5 h-3.5 text-accent"
      }, null, _parent));
      _push(`</span><span class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "#1fa870" })}">Consulta virtual disponible</span></a></div></div><div class="hero-image opacity-0 relative flex items-end justify-center self-end"><div class="relative z-10 w-full overflow-hidden group"><img${ssrRenderAttr("src", _imports_3$1)} alt="Dra. Yissel Mendoza — Médico Internista en Aguascalientes" class="w-full h-auto object-contain object-bottom transition-transform duration-700 group-hover:scale-105" loading="eager" fetchpriority="high" width="600" height="720"><div class="absolute bottom-8 -left-6 glass-card px-6 py-4 flex items-center gap-4 animate-float"><div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div><p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Certificada por el</p><p class="font-display font-bold text-slate-900">Consejo Médico</p></div></div><div class="absolute top-8 -right-4 glass-card px-5 py-3 flex items-center gap-3 animate-float" style="${ssrRenderStyle({ "animation-delay": "1.2s" })}"><div class="w-10 h-10 rounded-full flex items-center justify-center" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#132f57,#1a6fa0)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:award",
        class: "w-5 h-5 text-white"
      }, null, _parent));
      _push(`</div><div><p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Miembro Activo</p><p class="font-display font-bold text-slate-900 text-sm">CMMI</p></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/acerca-de.webp");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "acerca",
        class: "py-24 relative overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 z-0" style="${ssrRenderStyle({ "background": "linear-gradient(145deg, #eaf2fb 0%, #e6f5ef 45%, #f0f7ff 100%)" })}"></div><div class="absolute inset-0 z-0 pointer-events-none overflow-hidden"><div class="a-orb a-orb-1 absolute rounded-full" style="${ssrRenderStyle({ "width": "550px", "height": "550px", "top": "-20%", "right": "-8%", "background": "radial-gradient(circle at 50% 50%,rgba(19,47,87,0.10),transparent 70%)" })}"></div><div class="a-orb a-orb-2 absolute rounded-full" style="${ssrRenderStyle({ "width": "420px", "height": "420px", "bottom": "-15%", "left": "-5%", "background": "radial-gradient(circle at 50% 50%,rgba(46,189,133,0.12),transparent 70%)" })}"></div><div class="a-orb a-orb-3 absolute rounded-full" style="${ssrRenderStyle({ "width": "280px", "height": "280px", "top": "35%", "left": "30%", "background": "radial-gradient(circle,rgba(240,170,36,0.08),transparent 70%)" })}"></div><div class="absolute top-0 left-0 right-0 h-px" style="${ssrRenderStyle({ "background": "linear-gradient(90deg,transparent,rgba(19,47,87,0.20),transparent)" })}"></div><div class="absolute bottom-0 left-0 right-0 h-px" style="${ssrRenderStyle({ "background": "linear-gradient(90deg,transparent,rgba(46,189,133,0.25),transparent)" })}"></div></div><div class="absolute top-0 left-0 right-0 h-36 z-20 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom,#f8fafc,transparent)" })}"></div><div class="absolute bottom-0 left-0 right-0 h-36 z-20 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to top,#f8fafc,transparent)" })}"></div><div class="container mx-auto px-4 relative z-10"><div class="max-w-5xl mx-auto"><div class="a-header text-center mb-16 opacity-0"><span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">Cédula Profesional 12193559 • Cédula Especialidad 14201115 • Miembro Activo CMMI</span><h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Dra. Rosalba Yissel Mendoza González — Médico Internista en Aguascalientes</h2><div class="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div><p class="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">Especialista en Medicina Interna con formación en el <strong>Centro Médico Nacional de Occidente</strong> y certificación vigente por el <strong>Consejo Mexicano de Medicina Interna</strong>. Atención dedicada a adultos con padecimientos crónicos y complejos en Aguascalientes, Ags.</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="a-image opacity-0 flex justify-center items-center"><div class="relative flex items-center justify-center" style="${ssrRenderStyle({ "width": "340px", "height": "340px" })}"><div class="absolute inset-0 rounded-full" style="${ssrRenderStyle({ "background": "radial-gradient(circle,rgba(46,189,133,0.18) 0%,rgba(19,47,87,0.10) 55%,transparent 75%)", "filter": "blur(18px)" })}"></div><div class="a-ring-outer absolute rounded-full" style="${ssrRenderStyle({ "width": "320px", "height": "320px", "border": "2px dashed rgba(19,47,87,0.18)" })}"></div><div class="a-ring-inner absolute rounded-full" style="${ssrRenderStyle({ "width": "268px", "height": "268px", "border": "2px solid transparent", "background": "linear-gradient(white,white) padding-box,\r\n                                     linear-gradient(135deg,#132f57,#2ebd85,#f0aa24,#132f57) border-box" })}"></div><img${ssrRenderAttr("src", _imports_0)} alt="Dra. Yissel Mendoza González, Médico Internista" class="a-photo relative z-10 select-none" style="${ssrRenderStyle({ "width": "256px", "height": "256px", "object-fit": "cover", "object-position": "top", "border-radius": "50%" })}" loading="lazy"><div class="a-badge-1 absolute -bottom-2 -right-4 glass-card px-4 py-2.5 flex items-center gap-2.5 shadow-xl opacity-0"><div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#132f57,#1a6fa0)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:award",
        class: "w-4 h-4 text-white"
      }, null, _parent));
      _push(`</div><div><p class="text-[10px] font-medium text-slate-500 uppercase tracking-wider leading-none mb-0.5">Miembro Activo</p><p class="text-xs font-bold text-slate-900 leading-none">CMMI</p></div></div><div class="a-badge-2 absolute -top-2 -left-4 glass-card px-4 py-2.5 flex items-center gap-2.5 shadow-xl opacity-0"><div class="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "w-4 h-4 text-accent"
      }, null, _parent));
      _push(`</div><div><p class="text-[10px] font-medium text-slate-500 uppercase tracking-wider leading-none mb-0.5">Certificada por el</p><p class="text-xs font-bold text-slate-900 leading-none">Consejo Médico</p></div></div></div></div><div class="a-text space-y-6"><h3 class="text-2xl font-bold text-slate-800">Perfil Profesional</h3><ul class="space-y-4"><li class="a-li flex items-start opacity-0"><div class="flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle-2",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><p class="ml-3 text-slate-600"> Licenciatura como <strong>Médico, Cirujano y Partero</strong> por la Universidad de Guadalajara — una de las escuelas de medicina de mayor prestigio en México. </p></li><li class="a-li flex items-start opacity-0"><div class="flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle-2",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><p class="ml-3 text-slate-600"><strong>Especialidad en Medicina Interna</strong> por la Universidad de Guadalajara en el Centro Médico Nacional de Occidente (IMSS), con enfoque en patología crónica del adulto. </p></li><li class="a-li flex items-start opacity-0"><div class="flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle-2",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><p class="ml-3 text-slate-600"><strong>Consultas especializadas</strong> realizadas en Aguascalientes, con resultados documentados en control metabólico y cardiovascular. </p></li><li class="a-li flex items-start opacity-0"><div class="flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:award",
        class: "w-5 h-5 text-accent"
      }, null, _parent));
      _push(`</div><p class="ml-3 text-slate-600"> Certificada vigente por el <strong>Consejo Mexicano de Medicina Interna (CMMI)</strong>, garantía de actualización continua y estándares de excelencia clínica. </p></li></ul><div class="pt-6 border-t border-slate-200 flex flex-wrap gap-3"><div class="glass px-4 py-2 rounded-lg inline-flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:file-text",
        class: "w-4 h-4 text-primary"
      }, null, _parent));
      _push(`<span class="text-sm font-medium text-slate-700">Cédula Prof: <strong>12193559</strong></span></div><div class="glass px-4 py-2 rounded-lg inline-flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:file-badge",
        class: "w-4 h-4 text-primary"
      }, null, _parent));
      _push(`<span class="text-sm font-medium text-slate-700">Cédula Esp: <strong>14201115</strong></span></div><div class="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-white text-sm font-semibold" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#132f57 0%,#1a6fa0 55%,#2ebd85 100%)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:award",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span>Miembro Activo — Colegio Mexicano de Medicina Interna</span></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        icon: "lucide:activity",
        title: "Control de enfermedades crónicas",
        description: "Tratamiento integral y seguimiento puntual de <strong>diabetes mellitus</strong>, <strong>hipertensión arterial sistémica</strong>, enfermedad renal crónica, EPOC y otras patologías de larga evolución, buscando la estabilización metabólica y la mejor calidad de vida."
      },
      {
        icon: "lucide:heart-pulse",
        title: "Trastornos endocrinológicos y cardiovasculares",
        description: "Abordaje experto de <strong>dislipidemias</strong>, <strong>hipotiroidismo e hipertiroidismo</strong>, insuficiencia suprarrenal, arritmias, insuficiencia cardiaca y patologías hematológicas, con protocolos clínicos basados en evidencia."
      },
      {
        icon: "lucide:shield-plus",
        title: "Medicina preventiva y valoración prequirúrgica",
        description: "<strong>Chequeo médico preventivo</strong> completo, tamizaje oportuno de enfermedades silenciosas como diabetes y hipertensión, y <strong>valoración preoperatoria</strong> certificada de alta precisión para cirugías electivas."
      },
      {
        icon: "lucide:stethoscope",
        title: "Diagnóstico complejo y segunda opinión",
        description: "Evaluación clínica detallada de <strong>síndromes de difícil diagnóstico</strong>, manejo integral de <strong>obesidad mórbida</strong>, enfermedades autoinmunes y <strong>segundas opiniones médicas</strong> respaldadas por criterios actualizados."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "servicios",
        class: "py-24 bg-white/50 relative overflow-hidden"
      }, _attrs))}><div class="absolute top-0 left-0 right-0 h-36 z-20 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, #f8fafc, transparent)" })}"></div><div class="absolute bottom-0 left-0 right-0 h-36 z-20 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to top, #f8fafc, transparent)" })}"></div><div class="absolute inset-0 overflow-hidden pointer-events-none"><div class="s-orb s-orb-1 absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[80px] -translate-y-1/2" style="${ssrRenderStyle({ "background": "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)" })}"></div><div class="s-orb s-orb-2 absolute top-[10%] right-[5%] w-[380px] h-[380px] rounded-full blur-[90px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, rgba(46,189,133,0.07), transparent 70%)" })}"></div><div class="s-orb s-orb-3 absolute bottom-[5%] left-[5%] w-[320px] h-[320px] rounded-full blur-[70px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, rgba(240,170,36,0.06), transparent 70%)" })}"></div></div><div class="container mx-auto px-4 relative z-10"><div class="text-center mb-16 max-w-2xl mx-auto service-header opacity-0"><span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3">Medicina Interna • Aguascalientes, Ags.</span><h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Servicios de Médico Internista en Aguascalientes</h2><div class="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-5"></div><p class="text-slate-600 leading-relaxed"> La Dra. Yissel Mendoza ofrece atención especializada de <strong>Medicina Interna</strong> en Aguascalientes para adultos que requieren diagnóstico preciso, tratamiento efectivo y seguimiento continuo de sus padecimientos crónicos y complejos. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"><!--[-->`);
      ssrRenderList(services, (service, i) => {
        _push(`<div class="service-card opacity-0 glass-card p-8 group"><div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-info/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: service.icon,
          class: "w-8 h-8 text-primary"
        }, null, _parent));
        _push(`</div><h3 class="text-2xl font-bold text-slate-800 mb-4">${ssrInterpolate(service.title)}</h3><p class="text-slate-600 leading-relaxed text-justify">${service.description ?? ""}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_3 = publicAssetsURL("/top-footer.webp");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        name: "María Elena González",
        location: "Col. Insurgentes",
        color: "#2ebd85",
        text: '"Llevaba años con la diabetes descontrolada y sin una explicación clara de mi padecimiento. La Dra. Yissel me dedicó el tiempo que necesitaba, me explicó todo con paciencia y hoy mi glucosa está perfectamente controlada. Una doctora extraordinaria y de gran calidad humana."'
      },
      {
        name: "Roberto Martínez Ávalos",
        location: "Col. Ojocaliente",
        color: "#3b82f6",
        text: '"Llegué con hipertensión severa y mucha preocupación. Desde la primera consulta me transmitió confianza y profesionalismo. Su tratamiento fue preciso y en pocas semanas mis cifras mejoraron notablemente. La recomiendo ampliamente con toda mi familia."'
      },
      {
        name: "Laura Hernández de Lira",
        location: "Fracc. Jardines de la Asunción",
        color: "#f0aa24",
        text: '"Me hice un chequeo preventivo y fue la mejor decisión de mi vida. Detectó a tiempo un problema tiroideo que yo ignoraba por completo. Su criterio clínico y trato humano son excepcionales. Le debo mucho a la Dra. Yissel."'
      },
      {
        name: "Carlos Aguirre Ríos",
        location: "Col. Morelos",
        color: "#e85d75",
        text: '"Necesitaba una valoración preoperatoria urgente y me atendieron con rapidez y gran profesionalismo. El reporte fue muy completo y el cirujano quedó muy satisfecho. Sin duda la mejor internista con la que he tenido la fortuna de consultar en Aguascalientes."'
      },
      {
        name: "Gabriela Delgado Muñoz",
        location: "Col. Primo Verdad",
        color: "#a855f7",
        text: '"Busqué una segunda opinión sobre un diagnóstico que me habían dado y la Dra. Yissel me brindó claridad total y mucha tranquilidad. Su conocimiento es impresionante y su calidez humana, invaluable. Ya toda mi familia es paciente suya."'
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonios",
        class: "py-24 relative overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 z-0" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #091830 0%, #132f57 40%, #0e2648 70%, #071220 100%)" })}"></div><div class="absolute inset-0 z-[1] pointer-events-none overflow-hidden"><img${ssrRenderAttr("src", _imports_0$1)} class="organ-t ot-1 absolute w-24 select-none" style="${ssrRenderStyle({ "top": "5%", "left": "12%", "mix-blend-mode": "screen", "filter": "drop-shadow(0 0 28px rgba(240,170,36,0.6))" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_0$1)} class="organ-t ot-2 absolute w-16 select-none" style="${ssrRenderStyle({ "bottom": "8%", "right": "14%", "mix-blend-mode": "screen", "filter": "drop-shadow(0 0 22px rgba(240,170,36,0.55))" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-t ot-3 absolute w-28 select-none" style="${ssrRenderStyle({ "top": "28%", "right": "2%", "mix-blend-mode": "screen", "filter": "drop-shadow(0 0 32px rgba(46,189,133,0.6))" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-t ot-4 absolute w-14 select-none" style="${ssrRenderStyle({ "bottom": "20%", "left": "2%", "mix-blend-mode": "screen", "filter": "drop-shadow(0 0 20px rgba(46,189,133,0.55))" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-t ot-5 absolute w-20 select-none" style="${ssrRenderStyle({ "top": "55%", "left": "42%", "mix-blend-mode": "screen", "filter": "drop-shadow(0 0 26px rgba(59,130,246,0.60))" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-t ot-6 absolute w-12 select-none" style="${ssrRenderStyle({ "top": "10%", "right": "30%", "mix-blend-mode": "screen", "filter": "drop-shadow(0 0 18px rgba(59,130,246,0.55))" })}" alt="" aria-hidden="true" loading="lazy"><img${ssrRenderAttr("src", _imports_0$1)} class="organ-t ot-7 absolute w-10 select-none" style="${ssrRenderStyle({ "bottom": "35%", "left": "22%", "mix-blend-mode": "screen", "filter": "drop-shadow(0 0 14px rgba(240,170,36,0.5))" })}" alt="" aria-hidden="true" loading="lazy"></div><div class="absolute inset-0 z-0 pointer-events-none overflow-hidden"><div class="t-orb t-orb-1 absolute rounded-full" style="${ssrRenderStyle({ "width": "600px", "height": "600px", "top": "-15%", "left": "-8%", "background": "radial-gradient(circle at 40% 40%, rgba(240,170,36,0.35), transparent 70%)" })}"></div><div class="t-orb t-orb-2 absolute rounded-full" style="${ssrRenderStyle({ "width": "500px", "height": "500px", "bottom": "-20%", "right": "-5%", "background": "radial-gradient(circle at 60% 60%, rgba(46,189,133,0.30), transparent 70%)" })}"></div><div class="t-orb t-orb-3 absolute rounded-full" style="${ssrRenderStyle({ "width": "350px", "height": "350px", "top": "40%", "left": "55%", "background": "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)" })}"></div><div class="absolute inset-0 opacity-[0.04]" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle, #fff 1px, transparent 1px)", "background-size": "28px 28px" })}"></div></div><div class="absolute bottom-0 right-0 z-[50] pointer-events-none select-none tf-img-wrap opacity-0" style="${ssrRenderStyle({ "width": "clamp(220px,22vw,340px)" })}"><div class="absolute inset-x-0 bottom-0 pointer-events-none" style="${ssrRenderStyle({ "height": "85%", "background": "radial-gradient(ellipse 80% 60% at 60% 100%,rgba(46,189,133,0.28) 0%,rgba(19,47,87,0.18) 50%,transparent 75%)", "filter": "blur(18px)" })}"></div><img${ssrRenderAttr("src", _imports_3)} class="tf-doctor relative z-10 w-full h-auto object-contain object-bottom" alt="Dra. Yissel Mendoza González" loading="lazy"></div><div class="container mx-auto px-4 relative z-10"><div class="text-center mb-16 t-header opacity-0"><div class="inline-flex items-center space-x-2 mb-5 px-5 py-2 rounded-full" style="${ssrRenderStyle({ "background": "rgba(240,170,36,0.12)", "border": "1px solid rgba(240,170,36,0.30)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:message-square-quote",
        class: "w-4 h-4",
        style: { "color": "#f0aa24" }
      }, null, _parent));
      _push(`<span class="text-sm font-medium" style="${ssrRenderStyle({ "color": "#f0aa24" })}">Voces de nuestros pacientes</span></div><h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-4"> Lo que dicen quienes <span class="block mt-1" style="${ssrRenderStyle({ "background": "linear-gradient(90deg, #f0aa24, #2ebd85)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent", "background-clip": "text" })}"> nos han confiado su salud </span></h2><div class="w-28 h-1 mx-auto rounded-full mt-2" style="${ssrRenderStyle({ "background": "linear-gradient(90deg, #f0aa24, #2ebd85)" })}"></div><p class="text-slate-300 mt-6 max-w-lg mx-auto text-base leading-relaxed"> Testimonios reales de pacientes de Aguascalientes que transformaron su salud con la atención de la Dra. Yissel Mendoza. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(testimonials, (t, i) => {
        _push(`<div class="t-card opacity-0 rounded-3xl p-7 flex flex-col relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.10)", "backdrop-filter": "blur(24px)" })}"><div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style="${ssrRenderStyle(`background: radial-gradient(circle at 20% 20%, ${t.color}18, transparent 70%);`)}"></div><div class="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0 relative" style="${ssrRenderStyle(`background: ${t.color}25; border: 1px solid ${t.color}40;`)}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:quote",
          class: "w-5 h-5",
          style: `color: ${t.color};`
        }, null, _parent));
        _push(`</div><div class="flex mb-3 gap-0.5"><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${ssrRenderStyle({ "width": "1rem", "height": "1rem", "fill": "#f0aa24" })}" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`);
        });
        _push(`<!--]--></div><p class="text-slate-200 leading-relaxed text-sm flex-1 italic mb-6 relative z-10">${ssrInterpolate(t.text)}</p><div class="flex items-center gap-3 mt-auto pt-4 relative z-10" style="${ssrRenderStyle({ "border-top": "1px solid rgba(255,255,255,0.08)" })}"><div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0" style="${ssrRenderStyle(`background: linear-gradient(135deg, ${t.color}, ${t.color}99);`)}">${ssrInterpolate(t.name.charAt(0))}</div><div><p class="font-bold text-white text-sm">${ssrInterpolate(t.name)}</p><p class="text-slate-400 text-xs flex items-center gap-1 mt-0.5">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:map-pin",
          class: "w-3 h-3"
        }, null, _parent));
        _push(` ${ssrInterpolate(t.location)} · Aguascalientes, Ags. </p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-14 t-footer opacity-0"><p class="text-slate-400 text-sm mb-4">¿Fuiste paciente? Tu opinión ayuda a más personas a encontrar atención de calidad</p><a href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" target="_blank" rel="noopener noreferrer" class="group inline-flex flex-wrap items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl" style="${ssrRenderStyle({ "background": "#fff", "color": "#1a1a2e", "box-shadow": "0 4px 24px rgba(0,0,0,0.25)" })}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${ssrRenderStyle({ "width": "1.2rem", "height": "1.2rem", "flex-shrink": "0" })}" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg><div class="flex gap-0.5 items-center"><!--[-->`);
      ssrRenderList(5, (s) => {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${ssrRenderStyle({ "width": "0.9rem", "height": "0.9rem", "fill": "#FBBC05" })}" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`);
      });
      _push(`<!--]--></div><span class="whitespace-nowrap">Deja tu reseña en Google</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:external-link",
        class: "w-3.5 h-3.5 opacity-60 flex-shrink-0 transition-opacity group-hover:opacity-100"
      }, null, _parent));
      _push(`</a></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Testimonials.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(0);
    const faqs = [
      {
        question: "¿Qué es un médico internista y en qué se diferencia de un médico general?",
        answer: "Un <strong>médico internista</strong> es especialista en el diagnóstico y tratamiento no quirúrgico de enfermedades que afectan los órganos internos del adulto, especialmente padecimientos crónicos y complejos (diabetes, hipertensión, enfermedades renales, endocrinológicas, hematológicas). A diferencia del médico general, el internista tiene 3 años adicionales de formación hospitalaria de alta complejidad y está certificado por un consejo oficial para manejar casos de mayor profundidad clínica."
      },
      {
        question: "¿Cómo llego exactamente al consultorio de la Dra. Yissel Mendoza?",
        answer: "El consultorio se encuentra dentro del <strong>Hospital MAC SUR, Torre C, Consultorio 201</strong>, en Blvrd. República de Perú 102, Aguascalientes, Ags. C.P. 20234. Al llegar al hospital, dirígete a la Torre C o al área de Centro Oncológico y sube al nivel 2. Cuenta con estacionamiento propio y transporte público cercano."
      },
      {
        question: "¿Qué padecimientos trata un médico internista en Aguascalientes?",
        answer: "La Dra. Yissel Mendoza trata un amplio espectro de padecimientos: <strong>diabetes mellitus tipo 1 y tipo 2</strong>, hipertensión arterial, dislipidemias, enfermedad renal crónica, hipotiroidismo, hipertiroidismo, anemia, enfermedades pulmonares crónicas (EPOC, asma del adulto), enfermedades autoinmunes, obesidad mórbida y muchas otras patologías internas del adulto."
      },
      {
        question: "¿Necesito referencia médica para consultar con la Dra. Yissel?",
        answer: 'No, <strong>no es necesaria una referencia médica previa</strong> para agendar tu consulta. Puedes llamar directamente al <a href="tel:4494970240" class="text-primary font-bold hover:underline">449-497-02-40</a> o contactar por WhatsApp para programar tu cita. Sin embargo, si tu médico general ya te realizó estudios, es recomendable llevarlos para optimizar la consulta.'
      },
      {
        question: "¿Cuánto tiempo dura una consulta de medicina interna?",
        answer: "Una primera consulta dura aproximadamente <strong>40 a 60 minutos</strong>, ya que implica historia clínica completa, revisión de estudios previos, exploración física y plan diagnóstico-terapéutico integral. Las consultas de seguimiento duran entre 20 y 30 minutos para evaluar evolución y ajustar tratamiento."
      },
      {
        question: "¿Qué debo llevar a mi primera consulta?",
        answer: "Para aprovechar al máximo tu primera consulta, te recomendamos traer: <strong>identificación oficial</strong>, estudios de laboratorio recientes (si tienes), lista de medicamentos que tomas actualmente, historial médico relevante y, en caso de alguna enfermedad específica, cualquier diagnóstico previo por escrito. No es indispensable, pero agiliza el proceso."
      },
      {
        question: "¿La Dra. Yissel Mendoza trabaja con seguros médicos o planes de salud?",
        answer: 'Para consultar la aceptación de tu seguro médico o plan de salud específico, te invitamos a comunicarte directamente al <a href="tel:4494970240" class="text-primary font-bold hover:underline">449-497-02-40</a> antes de tu cita. El pago particular también está disponible, garantizando atención ágil sin tiempos de espera prolongados.'
      },
      {
        question: "¿Atiende pacientes pediátricos o adolescentes?",
        answer: "La Medicina Interna se especializa exclusivamente en la atención integral de pacientes <strong>adultos (mayores de 18 años)</strong>. Para niños y adolescentes, lo ideal es acudir con un médico pediatra. Sin embargo, en casos de adolescentes con enfermedades crónicas complejas, puede evaluarse la pertinencia de una consulta."
      },
      {
        question: "¿Trata enfermedades autoinmunes o reumatológicas?",
        answer: "Sí, el médico internista es el especialista primario para el abordaje de <strong>enfermedades autoinmunes sistémicas</strong> como lupus eritematoso, artritis reumatoide, vasculitis, sarcoidosis y otras. En Aguascalientes, la Dra. Yissel Mendoza realiza la evaluación clínica completa y, cuando se requiere, continúa el manejo coordinado con otros especialistas."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "preguntas",
        class: "py-24 relative overflow-hidden"
      }, _attrs))}><div class="absolute top-0 left-0 right-0 h-36 z-10 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, #f8fafc, transparent)" })}"></div><div class="absolute bottom-0 left-0 right-0 h-36 z-10 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to top, #f8fafc, transparent)" })}"></div><div class="container mx-auto px-4 max-w-4xl"><div class="text-center mb-16 faq-header opacity-0"><span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3">Preguntas sobre Medicina Interna en Aguascalientes</span><h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2><div class="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div><p class="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">Resolvemos las dudas más comunes sobre la atención de medicina interna, consultas, diagnóstico y procedimientos de la Dra. Yissel Mendoza en Aguascalientes.</p></div><div class="space-y-4"><!--[-->`);
      ssrRenderList(faqs, (faq, index) => {
        _push(`<div class="faq-item opacity-0 glass-card transition-all duration-300"><button class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"${ssrRenderAttr("aria-expanded", activeIndex.value === index)}><span class="font-semibold text-slate-800 pr-8">${ssrInterpolate(faq.question)}</span><div class="${ssrRenderClass([{ "rotate-180 bg-primary/10 text-primary": activeIndex.value === index }, "flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-down",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div></button><div style="${ssrRenderStyle(activeIndex.value === index ? null : { display: "none" })}" class="px-6 pb-6 text-slate-600 leading-relaxed origin-top"><div class="pt-2 border-t border-slate-100"><p>${faq.answer ?? ""}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-12 glass-card p-8 border-l-4 border-l-red-500 bg-red-50/50 faq-item opacity-0"><div class="flex items-start gap-4"><div class="p-3 bg-red-100 rounded-full text-red-600">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:alert-triangle",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</div><div><h3 class="font-bold text-slate-900 mb-2">Protocolo de Emergencias</h3><p class="text-sm text-slate-600"> Contamos con una línea especial destinada exclusivamente a situaciones médicas urgentes de pacientes ya valorados: <br class="hidden sm:block"><a href="tel:3441041492" class="font-bold text-red-600 hover:underline mt-2 inline-block">344-104-14-92</a>. </p></div></div></div></div></section>`);
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
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contacto",
        class: "py-24 relative overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 z-0" style="${ssrRenderStyle({ "background": "linear-gradient(145deg, #fdf6e8 0%, #eef4fb 55%, #f5fbf8 100%)" })}"></div><div class="absolute top-0 left-0 right-0 h-44 z-20 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, #f8fafc, transparent)" })}"></div><div class="absolute inset-0 z-0 pointer-events-none overflow-hidden"><div class="c-orb c-orb-1 absolute rounded-full" style="${ssrRenderStyle({ "width": "500px", "height": "500px", "top": "-10%", "right": "-5%", "background": "radial-gradient(circle at 50% 50%, rgba(240,170,36,0.14), transparent 70%)" })}"></div><div class="c-orb c-orb-2 absolute rounded-full" style="${ssrRenderStyle({ "width": "400px", "height": "400px", "bottom": "-15%", "left": "-8%", "background": "radial-gradient(circle at 50% 50%, rgba(19,47,87,0.10), transparent 70%)" })}"></div><div class="c-orb c-orb-3 absolute rounded-full" style="${ssrRenderStyle({ "width": "300px", "height": "300px", "top": "50%", "left": "40%", "background": "radial-gradient(circle, rgba(46,189,133,0.09), transparent 70%)" })}"></div><div class="absolute top-0 left-0 right-0 h-px" style="${ssrRenderStyle({ "background": "linear-gradient(90deg, transparent, rgba(240,170,36,0.35), transparent)" })}"></div></div><div class="container mx-auto px-4 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="space-y-8 contact-item opacity-0"><div><h2 class="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Agenda tu cita con la Dra. Yissel — Medicina Interna, Aguascalientes</h2><p class="text-lg text-slate-600"> ¿Buscas médico internista en Aguascalientes? Concérta tu consulta hoy mismo. Atendemos <strong>diabetes, hipertensión, padecimientos renales, endocrinológicos</strong> y mucho más con el nivel de atención que mereces. </p></div><div class="space-y-6"><div class="flex items-start"><div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map-pin",
        class: "w-6 h-6 text-primary"
      }, null, _parent));
      _push(`</div><div class="ml-4"><h3 class="text-lg font-bold text-slate-900">Ubicación</h3><p class="text-slate-600 mt-1"> Hospital MAC SUR (Dentro del Centro Oncológico). <br>República de Perú 102, Torre C, consultorio 201. <br>Aguascalientes, Ags. C.P. 20234. </p></div></div><div class="flex items-start"><div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:clock",
        class: "w-6 h-6 text-primary"
      }, null, _parent));
      _push(`</div><div class="ml-4"><h3 class="text-lg font-bold text-slate-900">Horario de atención</h3><p class="text-slate-600 mt-1"> Lunes a Sábado: <strong>9:00 – 14:00 hrs</strong><br> Domingo: <span class="text-slate-400">Cerrado</span></p></div></div><div class="flex items-start"><div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:phone",
        class: "w-6 h-6 text-primary"
      }, null, _parent));
      _push(`</div><div class="ml-4"><h3 class="text-lg font-bold text-slate-900">Teléfonos</h3><div class="mt-1 space-y-1"><p class="text-slate-600"> Citas: <a href="tel:4494970240" class="font-bold text-primary hover:underline">449-497-02-40</a></p><p class="text-sm text-slate-500"> Emergencias (Uso restringido): <a href="tel:3441041492">344-104-14-92</a></p></div></div></div></div><a href="tel:4494970240" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full shadow-lg text-base font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:calendar-check",
        class: "w-5 h-5 mr-2"
      }, null, _parent));
      _push(` Llamar para agendar </a><div class="mt-6 rounded-2xl p-5 flex items-start gap-4" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,rgba(46,189,133,0.08) 0%,rgba(26,111,160,0.08) 100%)", "border": "1px solid rgba(46,189,133,0.30)" })}"><div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,rgba(46,189,133,0.18),rgba(26,111,160,0.18))" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:video",
        class: "w-6 h-6",
        style: { "color": "#2ebd85" }
      }, null, _parent));
      _push(`</div><div class="flex-1"><h3 class="text-base font-bold text-slate-900">¿No puedes venir en persona?</h3><p class="text-sm text-slate-600 mt-1 leading-relaxed"> La Dra. Yissel también ofrece <strong>consulta virtual por videollamada</strong>. Ideal para seguimiento, revisión de estudios o segunda opinión desde cualquier lugar. </p><a href="https://wa.me/5214494970240?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20virtual%20con%20la%20Dra.%20Yissel%20Mendoza." target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#1da462 0%,#2ebd85 100%)" })}"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> Agendar consulta virtual por WhatsApp </a></div></div></div><div class="contact-item opacity-0 flex flex-col gap-0 w-full"><div class="rounded-t-3xl px-5 py-4 flex items-center gap-3" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #132f57 0%, #1a4a80 100%)" })}"><div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="${ssrRenderStyle({ "background": "rgba(240,170,36,0.20)", "border": "1px solid rgba(240,170,36,0.35)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map-pin",
        class: "w-5 h-5",
        style: { "color": "#f0aa24" }
      }, null, _parent));
      _push(`</div><div><p class="text-white font-semibold text-sm leading-tight">Hospital MAC SUR — Torre C, Cons. 201</p><p class="text-slate-300 text-xs mt-0.5">Blvrd. República de Perú 102 • Aguascalientes, Ags. 20234</p></div><a href="https://maps.app.goo.gl/YourLink" target="_blank" rel="noopener noreferrer" class="ml-auto flex-shrink-0 flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5 transition-all hover:scale-105" style="${ssrRenderStyle({ "background": "rgba(240,170,36,0.18)", "border": "1px solid rgba(240,170,36,0.40)", "color": "#f0aa24" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:external-link",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(` Ver ruta </a></div><div class="relative h-[400px] lg:h-[540px] w-full overflow-hidden rounded-b-3xl" style="${ssrRenderStyle({ "border": "1px solid rgba(19,47,87,0.15)", "border-top": "none" })}"><div class="absolute inset-0 z-10 pointer-events-none rounded-b-3xl" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, rgba(19,47,87,0.06) 0%, rgba(46,189,133,0.04) 100%)", "mix-blend-mode": "multiply" })}"></div><div class="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to top, rgba(19,47,87,0.12), transparent)" })}"></div><iframe class="w-full h-full border-0 grayscale-[15%] contrast-110 brightness-105 transition-all duration-500 hover:grayscale-0 hover:contrast-100" src="https://maps.google.com/maps?q=Hospital+MAC+Aguascalientes+Sur,+Blvrd+República+de+Perú+102,+Aguascalientes,+México&amp;output=embed&amp;hl=es" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación del consultorio de la Dra. Yissel Mendoza, Médico Internista en Aguascalientes"></iframe></div></div></div></div></section>`);
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
      title: "Dra. Yissel Mendoza — Médico Internista en Aguascalientes | Consulta Especializada",
      meta: [
        { name: "description", content: "Dra. Rosalba Yissel Mendoza González, Médico Internista certificada en Aguascalientes. Especialista en diabetes, hipertensión, enfermedades crónicas del adulto, valoración prequirúrgica y segunda opinión médica. Hospital MAC SUR, Torre C, Consultorio 201. Tel: 449-497-02-40." },
        { name: "keywords", content: "medico internista aguascalientes, medicina interna aguascalientes, internista aguascalientes, dra yissel mendoza, diabetes aguascalientes, hipertension arterial aguascalientes, enfermedades cronicas adulto aguascalientes, valoracion preoperatoria aguascalientes, hospital mac sur aguascalientes" },
        { property: "og:locale", content: "es_MX" },
        { property: "og:title", content: "Dra. Yissel Mendoza — Médico Internista en Aguascalientes" },
        { property: "og:description", content: "Especialista en Medicina Interna en Aguascalientes. Diagnóstico y tratamiento de diabetes, hipertensión, padecimientos crónicos del adulto. Cédula 12193559. Hospital MAC SUR." },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://internistaenaguascalientes.com/social-share-cover.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Dra. Yissel Mendoza — Médico Internista en Aguascalientes" },
        { property: "og:url", content: "https://internistaenaguascalientes.com" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://internistaenaguascalientes.com/social-share-cover.jpg" },
        { name: "twitter:title", content: "Dra. Yissel Mendoza — Médico Internista en Aguascalientes" },
        { name: "twitter:description", content: "Especialista en Medicina Interna en Aguascalientes. Diagnóstico y tratamiento de diabetes, hipertensión, padecimientos crónicos del adulto." },
        { name: "geo.region", content: "MX-AGU" },
        { name: "geo.placename", content: "Aguascalientes, México" },
        { name: "geo.position", content: "21.8853;-102.2916" },
        { name: "ICBM", content: "21.8853, -102.2916" }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": "https://internistaenaguascalientes.com/#physician",
            name: "Dra. Rosalba Yissel Mendoza González",
            givenName: "Rosalba Yissel",
            familyName: "Mendoza González",
            honorificPrefix: "Dra.",
            alternateName: ["Dra. Yissel Mendoza", "Dra. Yissel Mendoza González", "Internista Aguascalientes"],
            image: [
              "https://internistaenaguascalientes.com/social-share-cover.jpg",
              "https://internistaenaguascalientes.com/acerca-de.webp"
            ],
            datePublished: "2024-01-01",
            dateModified: "2026-02-23",
            alumniOf: [
              { "@type": "CollegeOrUniversity", name: "Universidad de Guadalajara", "@id": "https://www.wikidata.org/wiki/Q3028163" },
              { "@type": "Hospital", name: "Centro Médico Nacional de Occidente IMSS", "@id": "https://www.wikidata.org/wiki/Q4937718" }
            ],
            sameAs: [
              "https://www.instagram.com/dra.mendozainternista/",
              "https://www.cmmi.org.mx",
              "https://www.wikidata.org/wiki/Q81938"
            ],
            description: "Médico Internista certificada en Aguascalientes, especializada en diabetes, hipertensión, enfermedades crónicas del adulto, valoración preoperatoria y diagnóstico de patologías complejas. Ofrece consulta presencial en Hospital MAC SUR y consulta virtual por videollamada.",
            medicalSpecialty: "Medicina Interna",
            url: "https://internistaenaguascalientes.com",
            telephone: "+524494970240",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Blvrd. República de Perú 102, Torre C, Consultorio 201",
              addressLocality: "Aguascalientes",
              addressRegion: "Aguascalientes",
              postalCode: "20234",
              addressCountry: "MX"
            },
            worksFor: {
              "@type": "MedicalOrganization",
              name: "Hospital MAC SUR Aguascalientes",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Blvrd. República de Perú 102",
                addressLocality: "Aguascalientes",
                addressRegion: "Aguascalientes",
                postalCode: "20234",
                addressCountry: "MX"
              }
            },
            hasCredential: [
              { "@type": "EducationalOccupationalCredential", credentialCategory: "Cédula Profesional", identifier: "12193559" },
              { "@type": "EducationalOccupationalCredential", credentialCategory: "Cédula de Especialidad", identifier: "14201115" }
            ],
            memberOf: {
              "@type": "MedicalOrganization",
              name: "Colegio Mexicano de Medicina Interna",
              alternateName: "CMMI",
              url: "https://www.cmmi.org.mx"
            },
            knowsAbout: [
              { "@type": "MedicalCondition", name: "Diabetes mellitus", "@id": "https://www.wikidata.org/wiki/Q1474" },
              { "@type": "MedicalCondition", name: "Hipertensión arterial", "@id": "https://www.wikidata.org/wiki/Q178523" },
              { "@type": "MedicalSpecialty", name: "Medicina Interna", "@id": "https://www.wikidata.org/wiki/Q81938" },
              { "@type": "MedicalCondition", name: "Enfermedades crónicas del adulto" },
              { "@type": "MedicalProcedure", name: "Valoración preoperatoria" },
              { "@type": "MedicalCondition", name: "Enfermedad renal crónica", "@id": "https://www.wikidata.org/wiki/Q373106" },
              { "@type": "MedicalCondition", name: "Hipotiroidismo", "@id": "https://www.wikidata.org/wiki/Q193262" },
              { "@type": "MedicalCondition", name: "Dislipidemia", "@id": "https://www.wikidata.org/wiki/Q1139130" },
              { "@type": "MedicalCondition", name: "Enfermedades cardiovasculares", "@id": "https://www.wikidata.org/wiki/Q133823" },
              { "@type": "MedicalCondition", name: "Obesidad", "@id": "https://www.wikidata.org/wiki/Q12174" },
              { "@type": "MedicalProcedure", name: "Segunda opinión médica" },
              { "@type": "MedicalCondition", name: "Enfermedades autoinmunes", "@id": "https://www.wikidata.org/wiki/Q18123741" }
            ],
            areaServed: {
              "@type": "City",
              name: "Aguascalientes",
              containedInPlace: { "@type": "State", name: "Aguascalientes", containedInPlace: { "@type": "Country", name: "México" } }
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "14:00" }
            ]
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://internistaenaguascalientes.com/#website",
            url: "https://internistaenaguascalientes.com",
            name: "Dra. Yissel Mendoza — Médico Internista en Aguascalientes",
            description: "Sitio oficial de la Dra. Rosalba Yissel Mendoza González, Médico Internista certificada en Aguascalientes. Especialista en diabetes, hipertensión, valoración peroperatoria y enfermedades crónicas del adulto.",
            inLanguage: "es-MX",
            publisher: { "@id": "https://internistaenaguascalientes.com/#physician" },
            potentialAction: [
              {
                "@type": "ReserveAction",
                target: { "@type": "EntryPoint", urlTemplate: "tel:+524494970240" },
                result: { "@type": "Reservation", name: "Cita de Medicina Interna — Dra. Yissel Mendoza Aguascalientes" }
              }
            ],
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".hero-text p", "#preguntas", "#acerca", "#servicios"]
            }
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es un médico internista y en qué se diferencia de un médico general?",
                acceptedAnswer: { "@type": "Answer", text: "Un médico internista es especialista en el diagnóstico y tratamiento no quirórgico de enfermedades que afectan los órganos internos del adulto, especialmente padecimientos crónicos y complejos (diabetes, hipertensión, enfermedades renales, endocrinológicas, hematológicas). A diferencia del médico general, el internista tiene 3 años adicionales de formación hospitalaria de alta complejidad y está certificado por un consejo oficial." }
              },
              {
                "@type": "Question",
                name: "¿Cómo llego exactamente al consultorio de la Dra. Yissel Mendoza?",
                acceptedAnswer: { "@type": "Answer", text: "El consultorio se encuentra dentro del Hospital MAC SUR, Torre C, Consultorio 201, en Blvrd. República de Perú 102, Aguascalientes, Ags. C.P. 20234. Al llegar al hospital, dirígete a la Torre C o al área de Centro Oncológico y sube al nivel 2. Cuenta con estacionamiento propio y transporte público cercano." }
              },
              {
                "@type": "Question",
                name: "¿Qué padecimientos trata un médico internista en Aguascalientes?",
                acceptedAnswer: { "@type": "Answer", text: "La Dra. Yissel Mendoza trata: diabetes mellitus tipo 1 y tipo 2, hipertensión arterial, dislipidemias, enfermedad renal crónica, hipotiroidismo, hipertiroidismo, anemia, enfermedades pulmonares crónicas (EPOC, asma del adulto), enfermedades autoinmunes, obesidad mórbida y otras patologías internas del adulto." }
              },
              {
                "@type": "Question",
                name: "¿Necesito referencia médica para consultar con la Dra. Yissel?",
                acceptedAnswer: { "@type": "Answer", text: "No es necesaria una referencia médica previa. Puedes llamar directamente al 449-497-02-40 o contactar por WhatsApp para programar tu cita." }
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo dura una consulta de medicina interna?",
                acceptedAnswer: { "@type": "Answer", text: "Una primera consulta dura aproximadamente 40 a 60 minutos. Las consultas de seguimiento duran entre 20 y 30 minutos para evaluar evolución y ajustar tratamiento." }
              },
              {
                "@type": "Question",
                name: "¿Qué debo llevar a mi primera consulta?",
                acceptedAnswer: { "@type": "Answer", text: "Te recomendamos traer: identificación oficial, estudios de laboratorio recientes, lista de medicamentos actuales, historial médico relevante y cualquier diagnóstico previo por escrito." }
              },
              {
                "@type": "Question",
                name: "¿La Dra. Yissel Mendoza trabaja con seguros médicos o planes de salud?",
                acceptedAnswer: { "@type": "Answer", text: "Para consultar la aceptación de tu seguro médico específico, comunícate directamente al 449-497-02-40 antes de tu cita. El pago particular también está disponible." }
              },
              {
                "@type": "Question",
                name: "¿Atiende pacientes pediátricos o adolescentes?",
                acceptedAnswer: { "@type": "Answer", text: "La Medicina Interna se especializa exclusivamente en la atención integral de pacientes adultos (mayores de 18 años). Para niños y adolescentes, lo ideal es acudir con un médico pediatra." }
              },
              {
                "@type": "Question",
                name: "¿Trata enfermedades autoinmunes o reumatológicas?",
                acceptedAnswer: { "@type": "Answer", text: "Sí, el médico internista es el especialista primario para enfermedades autoinmunes sistémicas como lupus eritematoso, artritis reumatoide, vasculitis y sarcoidosis. La Dra. Yissel Mendoza realiza la evaluación clínica completa en Aguascalientes." }
              }
            ]
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalBusiness", "LocalBusiness"],
            "@id": "https://internistaenaguascalientes.com/#localbusiness",
            name: "Consultorio Dra. Yissel Mendoza — Médico Internista Aguascalientes",
            image: "https://internistaenaguascalientes.com/social-share-cover.jpg",
            url: "https://internistaenaguascalientes.com",
            telephone: "+524494970240",
            priceRange: "$$",
            currenciesAccepted: "MXN",
            paymentAccepted: "Efectivo, Tarjeta",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Blvrd. República de Perú 102, Torre C, Consultorio 201",
              addressLocality: "Aguascalientes",
              addressRegion: "AGU",
              postalCode: "20234",
              addressCountry: "MX"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 21.8853,
              longitude: -102.2916
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "14:00" }
            ],
            sameAs: [
              "https://www.instagram.com/dra.mendozainternista/"
            ],
            hasMap: "https://maps.google.com/maps?q=Hospital+MAC+Aguascalientes+Sur,+Blvrd+Rep%C3%BAblica+de+Per%C3%BA+102,+Aguascalientes,+M%C3%A9xico",
            medicalSpecialty: "Medicina Interna",
            availableService: [
              {
                "@type": "MedicalTherapy",
                name: "Consulta presencial de Medicina Interna",
                description: "Consulta médica especializada en Aguascalientes, Hospital MAC SUR, Torre C, Consultorio 201.",
                serviceLocation: {
                  "@type": "MedicalClinic",
                  name: "Hospital MAC SUR Aguascalientes",
                  address: { "@type": "PostalAddress", streetAddress: "Blvrd. República de Perú 102, Torre C, Consultorio 201", addressLocality: "Aguascalientes", addressCountry: "MX" }
                }
              },
              {
                "@type": "MedicalTherapy",
                name: "Consulta virtual de Medicina Interna",
                description: "Consulta médica por videollamada con la Dra. Yissel Mendoza. Ideal para seguimiento, revisión de estudios y segunda opinión desde cualquier lugar.",
                serviceType: "Telemedicina"
              }
            ],
            isPartOf: {
              "@type": "MedicalOrganization",
              name: "Hospital MAC SUR Aguascalientes"
            }
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cómo agendar una cita con la Dra. Yissel Mendoza — Médico Internista en Aguascalientes",
            description: "Pasos sencillos para reservar tu consulta de medicina interna con la Dra. Yissel Mendoza en Aguascalientes.",
            totalTime: "PT10M",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Elige tu vía de contacto",
                text: "Llama al 449-497-02-40 o escríbenos por WhatsApp para consultar disponibilidad de citas."
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Selecciona fecha y hora",
                text: "Escoge una fecha de lunes a sábado entre las 9:00 y las 14:00 hrs en el Hospital MAC SUR, Torre C, Consultorio 201, Aguascalientes."
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Confirma tu cita",
                text: "Recibe confirmación por teléfono o WhatsApp. Anota la fecha, hora y cualquier instrucción especial."
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Preséntate el día de tu consulta",
                text: "Acude al Hospital MAC SUR (dentro del Centro Oncológico), Torre C, Consultorio 201. Trae identificación oficial, estudios de laboratorio o imagen recientes y lista de medicamentos actuales."
              }
            ]
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "@id": "https://internistaenaguascalientes.com/#webpage",
            url: "https://internistaenaguascalientes.com",
            name: "Dra. Yissel Mendoza — Médico Internista en Aguascalientes",
            description: "Sitio oficial de la Dra. Rosalba Yissel Mendoza González, Médico Internista certificada en Aguascalientes. Especialista en diabetes, hipertensión, valoración preoperatoria y enfermedades crónicas del adulto.",
            inLanguage: "es-MX",
            isPartOf: { "@id": "https://internistaenaguascalientes.com/#website" },
            about: { "@id": "https://internistaenaguascalientes.com/#physician" },
            lastReviewed: "2026-02-23",
            datePublished: "2024-01-01",
            dateModified: "2026-02-23",
            reviewedBy: { "@id": "https://internistaenaguascalientes.com/#physician" },
            breadcrumb: { "@id": "https://internistaenaguascalientes.com/#breadcrumb" },
            medicalAudience: {
              "@type": "MedicalAudience",
              audienceType: "Patient",
              healthCondition: { "@type": "MedicalCondition", name: "Enfermedades crónicas del adulto" }
            },
            specialty: "Medicina Interna"
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://internistaenaguascalientes.com/#breadcrumb",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Médico Internista en Aguascalientes — Dra. Yissel Mendoza",
                item: "https://internistaenaguascalientes.com/"
              }
            ]
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHero = _sfc_main$6;
      const _component_SectionsAbout = _sfc_main$5;
      const _component_SectionsServices = _sfc_main$4;
      const _component_SectionsTestimonials = _sfc_main$3;
      const _component_SectionsFaq = _sfc_main$2;
      const _component_SectionsContact = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHero, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsTestimonials, null, null, _parent));
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BcZy7BJH.js.map
