import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from './astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative "> <div class="absolute inset-0  opacity-10"></div> <div class="max-w-4xl mx-auto py-12 px-4 relative"> <h1 class="text-5xl font-bold text-lexpressed-navy mb-4">${title}</h1> ${description && renderTemplate`<p class="text-xl text-gray-600 max-w-2xl"> ${description} </p>`} </div> </div>`;
}, "/Users/nicolasposa/Documents/projects/lexpressed2/Lexpressed/src/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
