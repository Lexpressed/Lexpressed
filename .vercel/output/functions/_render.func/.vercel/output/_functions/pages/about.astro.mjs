/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DYS5UENZ.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_mM0395dr.mjs';
import { $ as $$Card } from '../chunks/Card_Bwa6WQpr.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_X4RWzfrw.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const expertiseAreas = [
    {
      title: "Legal Research",
      description: "Developing innovative legal strategies for future impact litigation cases",
      icon: "\u2696\uFE0F"
    },
    {
      title: "Jurisprudence Analysis",
      description: "Conducting innovative research by analysing jurisprudence to support litigation",
      icon: "\u{1F4DA}"
    },
    {
      title: "Policy Analysis",
      description: "Identifying opportunities for legal intervention and strengthening policy frameworks which support impact litigation",
      icon: "\u{1F4CB}"
    },
    {
      title: "Impact Assessment",
      description: "Measuring and maximizing impact litigation outcomes",
      icon: "\u{1F4CA}"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "About Lexpressed", "description": "A student-led legal think tank dedicated to advancing strategic litigation and creating lasting social change through legal innovation." })} ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <div class="bg-white rounded-xl shadow-lg p-8 mb-12"> <h2 class="text-2xl font-bold text-lexpressed-blue mb-6">Who We Are</h2> <div class="space-y-4 text-gray-600 leading-relaxed"> <p>
Welcome to Lexpressed, a global collective of law students committed
          to reshaping the future of legal thought and advocacy. As a
          student-led think tank, we bring together passionate and driven
          individuals from diverse legal backgrounds to explore the intersection
          of law, policy, and social impact.
</p> <p>
At Lexpressed, we are a community driven by collaboration,
          intellectual curiosity, and a shared vision of using law as a force
          for good. Through our research projects, publications, and advocacy
          initiatives, we strive to make a tangible impact on society while
          empowering the next generation of legal professionals to think boldly
          and act decisively.
</p> <p>
Join us in our journey to explore new legal horizons and create a
          future where law serves as a powerful tool for justice and equity.
</p> </div> </div> <div class="mb-12"> <h2 class="text-2xl font-bold text-lexpressed-navy mb-6">
Our Output Areas
</h2> <div class="grid md:grid-cols-2 gap-6"> ${expertiseAreas.map((area) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": area.title, "description": area.description, "icon": area.icon })}`)} </div> </div> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Join Our Network", "description": "We're always looking for passionate law students and legal professionals to join our growing network. Whether you're interested in contributing to research, participating in strategic litigation projects, or sharing your expertise, there's a place for you at Lexpressed.", "primaryButton": {
    text: "Get Involved",
    href: "/contact"
  }, "secondaryButton": {
    text: "View Projects",
    href: "/projects"
  } })} </div> ` })}`;
}, "/Users/nicolasposa/Documents/projects/lexpressed2/Lexpressed/src/pages/about.astro", void 0);

const $$file = "/Users/nicolasposa/Documents/projects/lexpressed2/Lexpressed/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
