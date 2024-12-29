/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DQWRk3BW.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CDGPClCV.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DC1Fa7-k.mjs';
export { renderers } from '../renderers.mjs';

const $$Mission = createComponent(($$result, $$props, $$slots) => {
  const strategicPillars = [
    {
      title: "Strategic Litigation",
      current: "Identifying and researching pertinent cases in the field of strategic litigation.",
      future: "Create a repository of research projects which can be used in future cases."
    },
    {
      title: "Legal Innovation",
      current: "Developing novel approaches to complex social challenges through law.",
      future: "Create new paradigms for effective public interest litigation."
    },
    {
      title: "Knowledge Exchange",
      current: "Building networks between students, practitioners, and experts.",
      future: "Become the premier platform for strategic litigation collaboration."
    }
  ];
  const values = [
    {
      icon: "\u{1F3AF}",
      value: "Impact-Driven",
      description: "Every initiative aims to create meaningful social change"
    },
    {
      icon: "\u{1F504}",
      value: "Collaborative",
      description: "Success through partnership and knowledge sharing"
    },
    {
      icon: "\u{1F4A1}",
      value: "Innovative",
      description: "Breaking new ground in strategic litigation approaches"
    },
    {
      icon: "\u2696\uFE0F",
      value: "Evidence-Based",
      description: "Rigorous research supporting all our work"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Mission" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Our Mission", "description": "Transforming legal advocacy through innovative litigation strategies and collaborative action." })} ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <div class="bg-white rounded-xl shadow-lg p-8 mb-12"> <h2 class="text-3xl font-bold text-lexpressed-navy mb-6">Vision Statement</h2> <p class="text-xl text-gray-600 leading-relaxed">
At Lexpressed, our mission is to provide a platform for innovative legal research, critical analysis, and thought-provoking discussions on the most pressing issues facing our world.
</p></div> <div class="mb-16"> <h2 class="text-2xl font-bold text-lexpressed-navy mb-8">Strategic Pillars</h2> <div class="space-y-8"> ${strategicPillars.map((pillar) => renderTemplate`<div class="bg-white rounded-xl shadow-md p-6"> <h3 class="text-xl font-bold text-lexpressed-blue mb-4">${pillar.title}</h3> <div class="grid md:grid-cols-2 gap-6"> <div> <h4 class="font-semibold text-lexpressed-ochre mb-2">Current Focus</h4> <p class="text-gray-600">${pillar.current}</p> </div> <div> <h4 class="font-semibold text-lexpressed-blue mb-2">Future Vision</h4> <p class="text-gray-600">${pillar.future}</p> </div> </div> </div>`)} </div> </div> <div class="mb-16"> <h2 class="text-2xl font-bold text-lexpressed-navy mb-8">Our Values</h2> <div class="grid md:grid-cols-2 gap-6"> ${values.map((item) => renderTemplate`<div class="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4"> <span class="text-3xl">${item.icon}</span> <div> <h3 class="text-lg font-bold text-lexpressed-blue mb-2">${item.value}</h3> <p class="text-gray-600">${item.description}</p> </div> </div>`)} </div> </div> <div class="bg-gradient-to-br from-lexpressed-navy to-lexpressed-blue text-white p-8 rounded-xl shadow-lg mb-12"> <h2 class="text-2xl font-bold mb-4">2024-2025 Strategic Goals</h2> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <span class="text-lexpressed-ochre">①</span> <span>Launch five major strategic litigation initiatives across different social justice domains</span> </li> <li class="flex items-start space-x-3"> <span class="text-lexpressed-ochre">②</span> <span>Develop comprehensive impact litigation methodology framework</span> </li> <li class="flex items-start space-x-3"> <span class="text-lexpressed-ochre">③</span> <span>Create a digital platform for global strategic litigation collaboration</span> </li> </ul> </div> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Help Shape the Future of Strategic Litigation", "description": "Join us in our mission to transform how legal systems address societal challenges. Whether you're a student, practitioner, or supporter, your contribution matters.", "primaryButton": {
    text: "Join Our Mission",
    href: "/contact"
  }, "secondaryButton": {
    text: "View Our Imact",
    href: "/projects"
  } })} </div> ` })}`;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/pages/mission.astro", void 0);

const $$file = "/Users/pradyunkrishnan/Desktop/Lexpressed/src/pages/mission.astro";
const $$url = "/mission";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mission,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
