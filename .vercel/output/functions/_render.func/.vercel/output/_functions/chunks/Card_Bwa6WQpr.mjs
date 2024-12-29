import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, description, icon, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`, "class")}> <div class="p-6"> ${icon && renderTemplate`<span class="text-2xl mb-4 block">${icon}</span>`} <h3 class="text-xl font-bold text-lexpressed-blue mb-3">${title}</h3> <p class="text-gray-600">${description}</p> </div> </div>`;
}, "/Users/nicolasposa/Documents/projects/lexpressed2/Lexpressed/src/components/Card.astro", void 0);

export { $$Card as $ };
