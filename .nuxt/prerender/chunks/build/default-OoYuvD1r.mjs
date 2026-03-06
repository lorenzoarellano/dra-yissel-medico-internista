import { c as __nuxt_component_0$1, d as _imports_3, _ as _imports_0, a as _imports_1, b as _imports_2 } from './server.mjs';
import __nuxt_component_0 from './index-Dw5aD4jo.mjs';
import { defineComponent, mergeProps, ref, withCtx, createVNode, computed, useSSRContext } from 'file://C:/projects/dra-yissel-medico-internista/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderTeleport } from 'file://C:/projects/dra-yissel-medico-internista/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/h3/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/ufo/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/destr/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/hookable/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/klona/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/defu/dist/defu.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/scule/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/radix3/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/consola/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/pathe/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/ipx/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/unstorage/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/projects/dra-yissel-medico-internista/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/unctx/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/unhead/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://C:/projects/dra-yissel-medico-internista/node_modules/@iconify/utils/lib/css/icon.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const links = [
      { name: "Inicio", href: "#inicio" },
      { name: "Acerca de", href: "#acerca" },
      { name: "Servicios", href: "#servicios" },
      { name: "Preguntas", href: "#preguntas" },
      { name: "Contacto", href: "#contacto" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none" }, _attrs))}><div class="container mx-auto px-4 py-4"><div class="glass-navbar rounded-2xl px-6 py-4 flex items-center justify-between pointer-events-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex-shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="Dra. Yissel Mendoza Logo" class="h-10 w-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3,
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
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-sm font-medium text-slate-700 hover:text-primary transition-colors">${ssrInterpolate(link.name)}</a>`);
      });
      _push(`<!--]--></nav><div class="flex items-center space-x-3"><a href="https://www.instagram.com/dra.mendozainternista?utm_source=qr&amp;igsh=MTV2eTBodmluc280Mg%3D%3D" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center justify-center w-8 h-8 rounded-full text-slate-500 hover:text-[#E1306C] transition-colors hover:bg-pink-50" aria-label="Instagram">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:instagram",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</a><a href="tel:4494970240" class="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full shadow-md text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%)" })}"> Agendar Cita </a><button class="md:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"${ssrRenderAttr("aria-expanded", isOpen.value)} aria-controls="mobile-menu"><span class="sr-only">${ssrInterpolate(isOpen.value ? "Cerrar men\xFA" : "Abrir men\xFA")}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isOpen.value ? "lucide:x" : "lucide:menu",
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div></div>`);
      if (isOpen.value) {
        _push(`<div id="mobile-menu" class="md:hidden mt-2 glass-navbar rounded-2xl px-6 py-5 pointer-events-auto"><nav class="flex flex-col space-y-1"><!--[-->`);
        ssrRenderList(links, (link) => {
          _push(`<a${ssrRenderAttr("href", link.href)} class="px-3 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-primary hover:bg-white/60 transition-colors">${ssrInterpolate(link.name)}</a>`);
        });
        _push(`<!--]--></nav><div class="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3"><a href="tel:4494970240" class="inline-flex items-center justify-center px-5 py-3 rounded-full shadow-md text-sm font-bold text-white transition-all focus:outline-none" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%)" })}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:calendar",
          class: "w-4 h-4 mr-2"
        }, null, _parent));
        _push(` Agendar Cita </a><a href="https://www.instagram.com/dra.mendozainternista?utm_source=qr&amp;igsh=MTV2eTBodmluc280Mg%3D%3D" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-600 bg-white/60 border border-slate-200 hover:text-[#E1306C] transition-colors">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:instagram",
          class: "w-4 h-4"
        }, null, _parent));
        _push(` Instagram </a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const navLinks = [
      { label: "Inicio", href: "#inicio" },
      { label: "Acerca de", href: "#acerca" },
      { label: "Servicios", href: "#servicios" },
      { label: "Preguntas Frecuentes", href: "#preguntas" }
    ];
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
      const _component_Icon = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white border-t border-slate-200 pt-16 pb-8 relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true"><img${ssrRenderAttr("src", _imports_0)} class="organ-f of-1 absolute w-20 select-none" style="${ssrRenderStyle({ "top": "-5%", "left": "5%", "filter": "drop-shadow(0 4px 20px rgba(19,47,87,0.40))" })}" alt="" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-f of-2 absolute w-28 select-none" style="${ssrRenderStyle({ "top": "10%", "right": "2%", "filter": "drop-shadow(0 4px 20px rgba(46,189,133,0.40))" })}" alt="" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-f of-3 absolute w-18 select-none" style="${ssrRenderStyle({ "bottom": "0%", "left": "2%", "filter": "drop-shadow(0 4px 20px rgba(240,170,36,0.40))" })}" alt="" loading="lazy"><img${ssrRenderAttr("src", _imports_0)} class="organ-f of-4 absolute w-14 select-none" style="${ssrRenderStyle({ "bottom": "0%", "right": "3%", "filter": "drop-shadow(0 4px 16px rgba(59,130,246,0.38))" })}" alt="" loading="lazy"><img${ssrRenderAttr("src", _imports_1)} class="organ-f of-5 absolute w-12 select-none" style="${ssrRenderStyle({ "top": "5%", "left": "90%", "filter": "drop-shadow(0 4px 14px rgba(19,47,87,0.35))" })}" alt="" loading="lazy"><img${ssrRenderAttr("src", _imports_2)} class="organ-f of-6 absolute w-16 select-none" style="${ssrRenderStyle({ "top": "0%", "left": "45%", "filter": "drop-shadow(0 4px 16px rgba(46,189,133,0.38))" })}" alt="" loading="lazy"></div><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"><div class="space-y-4"><img${ssrRenderAttr("src", _imports_3)} alt="Dra. Yissel Mendoza Logo" class="h-12 w-auto"><p class="text-sm text-slate-600"> Especializada en el abordaje y tratamiento de las enfermedades cr\xF3nicas del adulto con informaci\xF3n actualizada, integral y con calidad humana. </p><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white mt-1" style="${ssrRenderStyle({ "background": "linear-gradient(135deg,#132f57 0%,#1a6fa0 60%,#2ebd85 100%)" })}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:award",
        class: "w-3.5 h-3.5 flex-shrink-0"
      }, null, _parent));
      _push(` Miembro Activo CMMI </div><div class="flex space-x-4 pt-2"><a href="https://www.instagram.com/dra.mendozainternista?utm_source=qr&amp;igsh=MTV2eTBodmluc280Mg%3D%3D" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-primary transition-colors" aria-label="Instagram">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:instagram",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</a></div></div><div><h3 class="font-display font-semibold text-slate-900 mb-4">Secciones</h3><ul class="space-y-3"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.href)} class="text-sm text-slate-600 hover:text-primary transition-colors">${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="font-display font-semibold text-slate-900 mb-4">Contacto</h3><ul class="space-y-3"><li class="flex items-start space-x-3 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map-pin",
        class: "w-5 h-5 flex-shrink-0 text-primary"
      }, null, _parent));
      _push(`<span>Hospital MAC SUR, Torre C, Cons. 201,<br>Aguascalientes, Ags.</span></li><li class="flex items-center space-x-3 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:phone",
        class: "w-5 h-5 flex-shrink-0 text-primary"
      }, null, _parent));
      _push(`<a href="tel:4494970240" class="hover:text-primary transition-colors">449-497-02-40</a></li><li class="flex items-start space-x-3 text-sm text-slate-600">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:clock",
        class: "w-5 h-5 flex-shrink-0 text-primary"
      }, null, _parent));
      _push(`<span>Lun \u2013 S\xE1b: <strong>9:00 \u2013 14:00 hrs</strong><br><span class="text-slate-400">Domingo: Cerrado</span></span></li><li class="flex items-start space-x-3 text-sm">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:video",
        class: "w-5 h-5 flex-shrink-0 mt-0.5",
        style: { "color": "#2ebd85" }
      }, null, _parent));
      _push(`<a href="https://wa.me/5214494970240?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20virtual%20con%20la%20Dra.%20Yissel%20Mendoza." target="_blank" rel="noopener noreferrer" class="font-semibold transition-colors hover:opacity-80" style="${ssrRenderStyle({ "color": "#1fa870" })}">Consulta virtual disponible</a></li></ul></div><div><h3 class="font-display font-semibold text-slate-900 mb-4">Legales</h3><ul class="space-y-3"><li><button class="text-sm text-slate-600 hover:text-primary transition-colors text-left"> Pol\xEDtica de Privacidad </button></li><li><button class="text-sm text-slate-600 hover:text-primary transition-colors text-left"> T\xE9rminos y Condiciones </button></li><li><button class="text-sm text-slate-600 hover:text-primary transition-colors text-left"> Aviso de Cookies </button></li><li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" class="text-sm text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:map",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(` Mapa del sitio </a></li></ul></div></div><div class="border-t border-slate-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Dra. Yissel Mendoza. Todos los derechos reservados.</p><p class="mt-4 md:mt-0 flex items-center"> Created by <a href="https://doctordigital.mx/" target="_blank" rel="noopener noreferrer" class="font-medium text-primary hover:underline ml-1">\u{1F47E}DoctorDigitalMx</a></p></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (activeModal.value) {
          _push2(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"><div class="bg-white rounded-2xl w-full max-w-2xl p-6 md:p-8 shadow-2xl animate-scale-in"><div class="flex justify-between items-center mb-6"><h2 class="text-2xl font-display font-bold text-slate-900">${ssrInterpolate(modalTitle.value)}</h2><button class="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            class: "w-5 h-5"
          }, null, _parent));
          _push2(`</button></div><div class="prose max-w-none max-h-[60vh] overflow-y-auto pr-4 text-sm leading-relaxed">`);
          if (activeModal.value === "privacy") {
            _push2(`<div><p class="text-slate-500 text-xs mb-4">\xDAltima actualizaci\xF3n: febrero 2026 \u2022 Conforme a la Ley Federal de Protecci\xF3n de Datos Personales en Posesi\xF3n de los Particulares (LFPDPPP) y su Reglamento, M\xE9xico.</p><h3>1. Responsable del tratamiento</h3><p>La Dra. Rosalba Yissel Mendoza Gonz\xE1lez, con consultorio ubicado en Blvrd. Rep\xFAblica de Per\xFA 102, Torre C, Consultorio 201, Aguascalientes, Ags., C.P. 20234 (en adelante &quot;la Responsable&quot;), es la entidad responsable del tratamiento de sus datos personales.</p><h3>2. Datos personales recabados</h3><p>Para la prestaci\xF3n de servicios m\xE9dicos y de contacto, podemos recabar los siguientes datos:</p><ul><li><strong>Datos de identificaci\xF3n:</strong> nombre completo, fecha de nacimiento, CURP.</li><li><strong>Datos de contacto:</strong> n\xFAmero de tel\xE9fono, correo electr\xF3nico, domicilio.</li><li><strong>Datos de salud (categor\xEDa especial):</strong> historial cl\xEDnico, diagn\xF3sticos, tratamientos, resultados de estudios de laboratorio e imagen. Estos datos gozan de especial protecci\xF3n conforme al art\xEDculo 9 de la LFPDPPP.</li><li><strong>Datos de navegaci\xF3n:</strong> direcci\xF3n IP, tipo de navegador, p\xE1ginas visitadas (mediante cookies t\xE9cnicas y anal\xEDticas). Ver secci\xF3n de Cookies.</li></ul><h3>3. Finalidades del tratamiento</h3><p><strong>Finalidades primarias (necesarias):</strong> prestaci\xF3n de servicios m\xE9dicos, elaboraci\xF3n de expediente cl\xEDnico, comunicaci\xF3n para seguimiento de consultas, cumplimiento de obligaciones legales del ejercicio m\xE9dico.</p><p><strong>Finalidades secundarias (opcionales):</strong> env\xEDo de informaci\xF3n sobre servicios, recordatorios de citas, mejora de la experiencia en el sitio web.</p><h3>4. Transferencia de datos</h3><p>Sus datos personales no ser\xE1n transferidos a terceros sin su consentimiento, salvo en los casos previstos por la ley: autoridades de salud, judiciales o administrativas cuando sea legalmente requerido.</p><h3>5. Derechos ARCO</h3><p>Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de sus datos (derechos ARCO). Para ejercerlos, env\xEDe una solicitud con identificaci\xF3n oficial a: <strong>contacto@internistaenaguascalientes.com</strong> o al tel\xE9fono 449-497-02-40. La Responsable atender\xE1 su solicitud en un plazo m\xE1ximo de 20 d\xEDas h\xE1biles.</p><h3>6. Cambios al Aviso de Privacidad</h3><p>La Responsable se reserva el derecho de modificar este aviso. Cualquier cambio ser\xE1 publicado en este sitio web. El uso continuado del sitio implica la aceptaci\xF3n de las modificaciones.</p></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (activeModal.value === "terms") {
            _push2(`<div><p class="text-slate-500 text-xs mb-4">\xDAltima actualizaci\xF3n: febrero 2026 \u2022 Al utilizar este sitio web, usted acepta los presentes T\xE9rminos y Condiciones.</p><h3>1. Objeto</h3><p>El presente sitio web <strong>internistaenaguascalientes.com</strong> es propiedad de la Dra. Rosalba Yissel Mendoza Gonz\xE1lez y tiene como prop\xF3sito proporcionar informaci\xF3n sobre sus servicios m\xE9dicos de Medicina Interna en Aguascalientes, M\xE9xico, y facilitar el contacto para agendar consultas.</p><h3>2. Informaci\xF3n m\xE9dica general</h3><p>El contenido de este sitio tiene car\xE1cter <strong>informativo y divulgativo</strong>. En ning\xFAn caso sustituye la relaci\xF3n m\xE9dico-paciente, el diagn\xF3stico cl\xEDnico ni el tratamiento prescrito por un profesional de la salud. Consulte siempre a un especialista ante cualquier duda sobre su estado de salud.</p><h3>3. Propiedad intelectual</h3><p>Todos los textos, im\xE1genes, logotipos, dise\xF1os y elementos del presente sitio son propiedad exclusiva de la Dra. Yissel Mendoza o se usan con la debida autorizaci\xF3n. Queda prohibida su reproducci\xF3n total o parcial sin consentimiento escrito previo.</p><h3>4. Uso del sitio</h3><p>El usuario se compromete a utilizar el sitio de forma l\xEDcita, sin realizar actividades que puedan da\xF1ar, inutilizar o deteriorar el sitio o su reputaci\xF3n. Queda prohibido el uso del sitio para enviar comunicaciones no solicitadas.</p><h3>5. Limitaci\xF3n de responsabilidad</h3><p>La Responsable no garantiza la disponibilidad continua del sitio web y no se hace responsable por da\xF1os derivados del uso o imposibilidad de uso del mismo, ni por errores u omisiones en el contenido informativo.</p><h3>6. Citas y servicios m\xE9dicos</h3><p>La solicitud de cita a trav\xE9s de este sitio o por tel\xE9fono no representa un contrato de prestaci\xF3n de servicios m\xE9dicos. La relaci\xF3n m\xE9dico-paciente y los honorarios aplicables ser\xE1n establecidos directamente en el consultorio conforme a la normativa vigente en M\xE9xico.</p><h3>7. Cancelaci\xF3n de citas</h3><p>Se solicita cancelar o reprogramar con un m\xEDnimo de <strong>24 horas de anticipaci\xF3n</strong> para permitir la atenci\xF3n de otros pacientes.</p><h3>8. Legislaci\xF3n aplicable</h3><p>Los presentes T\xE9rminos se rigen por las leyes de los <strong>Estados Unidos Mexicanos</strong>. Para cualquier controversia, ambas partes se someten a la jurisdicci\xF3n de los tribunales competentes de la ciudad de Aguascalientes.</p></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (activeModal.value === "cookies") {
            _push2(`<div><p class="text-slate-500 text-xs mb-4">\xDAltima actualizaci\xF3n: febrero 2026</p><h3>\xBFQu\xE9 son las cookies?</h3><p>Las cookies son peque\xF1os archivos de texto que los sitios web almacenan en su dispositivo para recordar preferencias, mejorar la funcionalidad y recopilar informaci\xF3n estad\xEDstica an\xF3nima sobre el uso del sitio.</p><h3>Tipos de cookies que utilizamos</h3><ul><li><strong>Cookies t\xE9cnicas / esenciales:</strong> Necesarias para el funcionamiento b\xE1sico del sitio (tema visual, preferencias de idioma, seguridad de formularios). No requieren consentimiento.</li><li><strong>Cookies anal\xEDticas:</strong> Utilizamos Google Analytics de forma anonimizada para entender c\xF3mo los usuarios navegan por el sitio y mejorar el contenido. No identifican a personas f\xEDsicas.</li><li><strong>Cookies de terceros (Mapas):</strong> El mapa embebido de Google Maps puede establecer cookies propias de Google Inc. Consulte la pol\xEDtica de privacidad de Google para m\xE1s informaci\xF3n.</li></ul><h3>\xBFC\xF3mo administrar las cookies?</h3><p>Puede aceptar o rechazar las cookies no esenciales mediante el banner que aparece al ingresar al sitio, o configurarlas desde los ajustes de su navegador:</p><ul><li><strong>Chrome:</strong> Configuraci\xF3n \u2192 Privacidad y seguridad \u2192 Cookies</li><li><strong>Firefox:</strong> Opciones \u2192 Privacidad y seguridad</li><li><strong>Safari:</strong> Preferencias \u2192 Privacidad</li><li><strong>Edge:</strong> Configuraci\xF3n \u2192 Privacidad, b\xFAsqueda y servicios</li></ul><p>La desactivaci\xF3n de cookies t\xE9cnicas puede afectar el funcionamiento correcto del sitio.</p><h3>Vigencia</h3><p>Las cookies anal\xEDticas se conservan por un m\xE1ximo de 13 meses. Las cookies t\xE9cnicas persisten durante la sesi\xF3n o hasta que el usuario las elimine manualmente.</p></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="mt-8 flex justify-end"><button class="px-6 py-2 rounded-full font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:opacity-90" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%)" })}"> Cerrar </button></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none",
        "aria-label": "Agendar cita por WhatsApp con la Dra. Yissel Mendoza, M\xE9dico Internista en Aguascalientes"
      }, _attrs))}><span class="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping"></span><span class="absolute inline-flex h-[calc(100%+12px)] w-[calc(100%+12px)] rounded-full border-2 border-[#25D366]/40 animate-pulse"></span><svg class="relative z-10 w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg></button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatingWhatsApp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CookieBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const showBanner = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (showBanner.value) {
          _push2(`<div class="fixed bottom-6 left-6 z-[200] w-[calc(100%-3rem)] sm:w-auto sm:max-w-sm" role="dialog" aria-label="Preferencias de cookies"><div class="rounded-2xl overflow-hidden shadow-2xl" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.97)", "backdrop-filter": "blur(20px)", "border": "1px solid rgba(19,47,87,0.10)" })}"><div class="h-1 w-full" style="${ssrRenderStyle({ "background": "linear-gradient(90deg, #132f57 0%, #f0aa24 50%, #2ebd85 100%)" })}"></div><div class="p-4"><div class="flex items-start gap-3 mb-3"><div class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style="${ssrRenderStyle({ "background": "rgba(19,47,87,0.07)" })}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="${ssrRenderStyle({ "width": "1rem", "height": "1rem", "fill": "none", "stroke": "#132f57", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round" })}" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01"></path></svg></div><div class="flex-1"><p class="font-semibold text-slate-900 text-xs leading-tight mb-1">Este sitio usa cookies</p><p class="text-slate-500 text-xs leading-relaxed"> Usamos cookies esenciales y anal\xEDticas para mejorar tu experiencia. <button class="font-semibold hover:underline" style="${ssrRenderStyle({ "color": "#132f57" })}"> M\xE1s info </button></p></div></div><div class="flex gap-2"><button class="flex-1 py-2 text-xs font-semibold rounded-xl border transition-all hover:bg-slate-50" style="${ssrRenderStyle({ "border-color": "rgba(19,47,87,0.20)", "color": "#64748b" })}"> Solo esenciales </button><button class="flex-1 py-2 text-xs font-bold rounded-xl text-white transition-all hover:shadow-md hover:-translate-y-0.5" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #132f57 0%, #1a6fa0 55%, #2ebd85 100%)" })}"> Aceptar </button></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$4;
      const _component_Footer = _sfc_main$3;
      const _component_FloatingWhatsApp = _sfc_main$2;
      const _component_CookieBanner = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_FloatingWhatsApp, null, null, _parent));
      _push(ssrRenderComponent(_component_CookieBanner, null, null, _parent));
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
//# sourceMappingURL=default-OoYuvD1r.mjs.map
