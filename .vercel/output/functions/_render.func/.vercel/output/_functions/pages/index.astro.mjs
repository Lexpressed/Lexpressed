/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DYS5UENZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 text-center"> <div class="mb-12"> <img src="/logo5.png" alt="Lexpressed Logo" class="w-80 h-auto mx-auto" style="filter: brightness(0) saturate(100%) invert(45%) sepia(19%) saturate(1966%) hue-rotate(4deg) brightness(92%) contrast(89%);"> <h1 class="text-5xl font-bold text-lexpressed-navy mb-6">
Shaping the Future of Impact Litigation ⚖️
</h1> </div> <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
A global student-led think tank advancing strategic litigation to drive systemic change and social justice.
</p> <div class="flex justify-center gap-4"> <a href="/projects" class="bg-lexpressed-ochre text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
View Projects
</a> <a href="/about" class="bg-lexpressed-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition">
Learn More
</a> </div> </section> <section class="py-16 bg-white rounded-lg shadow-lg px-8 my-16"> <h2 class="text-3xl font-bold text-lexpressed-navy mb-8 text-center">
Our Focus Areas
</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <h3 class="text-xl font-bold text-lexpressed-ochre mb-4">Strategic Litigation</h3> <p class="text-gray-600">
Developing innovative legal strategies to achieve systemic change across key social issues.
</p> </div> <div class="text-center"> <h3 class="text-xl font-bold text-lexpressed-ochre mb-4">Legal Research</h3> <p class="text-gray-600">
Conducting groundbreaking research to support high-impact litigation cases.
</p> </div> <div class="text-center"> <h3 class="text-xl font-bold text-lexpressed-ochre mb-4">Knowledge Exchange</h3> <p class="text-gray-600">
Building global networks of legal innovators and practitioners in impact litigation.
</p> </div> </div> </section> ` })}`;
}, "/Users/nicolasposa/Documents/projects/lexpressed2/Lexpressed/src/pages/index.astro", void 0);

const $$file = "/Users/nicolasposa/Documents/projects/lexpressed2/Lexpressed/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
