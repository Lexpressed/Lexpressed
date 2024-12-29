import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { title, description, primaryButton, secondaryButton } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-br from-lexpressed-navy to-lexpressed-blue text-white p-8 rounded-xl shadow-lg"> <h2 class="text-2xl font-bold mb-4">${title}</h2> <p class="mb-6 text-gray-100 leading-relaxed"> ${description} </p> <div class="flex gap-4"> <a${addAttribute(primaryButton.href, "href")} class="bg-lexpressed-ochre text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"> ${primaryButton.text} </a> ${secondaryButton && renderTemplate`<a${addAttribute(secondaryButton.href, "href")} class="bg-white text-lexpressed-navy px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"> ${secondaryButton.text} </a>`} </div> </div>`;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/components/CallToAction.astro", void 0);

export { $$CallToAction as $ };
