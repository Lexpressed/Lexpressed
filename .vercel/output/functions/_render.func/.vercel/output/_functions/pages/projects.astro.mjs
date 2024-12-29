/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DQWRk3BW.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CDGPClCV.mjs';
import 'clsx';
import { $ as $$CallToAction } from '../chunks/CallToAction_DC1Fa7-k.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, category, status, description, impact, link, stats } = Astro2.props;
  const statusColors = {
    Ongoing: "bg-green-100 text-green-800 border-green-200",
    Completed: "bg-blue-100 text-blue-800 border-blue-200",
    Upcoming: "bg-yellow-100 text-yellow-800 border-yellow-200"
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group"> <div class="p-8"> <!-- Header Section --> <div class="flex justify-between items-start mb-6"> <div class="space-y-4"> <h2 class="text-2xl font-bold text-lexpressed-navy group-hover:text-lexpressed-blue transition-colors duration-300"> ${link ? renderTemplate`<a${addAttribute(link, "href")} class="hover:text-lexpressed-ochre transition-colors duration-200 inline-flex items-center gap-2"> ${title} <svg class="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a>` : title} </h2> <div class="flex flex-wrap gap-3"> <span${addAttribute(`px-4 py-1.5 rounded-full text-sm font-medium ${statusColors[status]} border`, "class")}> ${status} </span> <span class="bg-lexpressed-ochre/10 text-lexpressed-ochre px-4 py-1.5 rounded-full text-sm font-medium border border-lexpressed-ochre/20"> ${category} </span> </div> </div> </div> <!-- Description Section --> <div class="space-y-6 mb-8"> <p class="text-gray-600 leading-relaxed">${description}</p> <div class="border-l-4 border-lexpressed-blue/20 pl-4"> <h3 class="text-lg font-semibold text-lexpressed-navy mb-2">Impact</h3> <p class="text-gray-600 leading-relaxed">${impact}</p> </div> </div> <!-- Action Section --> ${link && renderTemplate`<div class="flex flex-col sm:flex-row gap-4 items-center justify-end"> <a${addAttribute(link, "href")} class="w-full sm:w-auto px-6 py-3 bg-lexpressed-blue text-white rounded-lg hover:bg-lexpressed-ochre transition-colors duration-200 text-center">
Access Database
</a> <a${addAttribute(link, "href")} class="inline-flex items-center space-x-2 text-lexpressed-blue hover:text-lexpressed-ochre transition-colors duration-200 group-hover:translate-x-1 transform transition-transform"> <span>Learn More</span> <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div>`} </div> </div>`;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Climate Litigation Database",
      category: "Research",
      status: "Ongoing",
      description: "A comprehensive database of climate-related litigation cases worldwide, analyzing trends and outcomes.",
      impact: "Supporting legal practitioners and researchers with valuable case studies and precedents.",
      link: "/projects/climate-litigation-database",
      stats: {
        cases: 250,
        jurisdictions: 45,
        documents: 1200
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Our Projects", "description": "Explore our current and past projects focused on advancing strategic litigation." })}  ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8 mb-12"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Get Involved", "description": "We welcome collaboration from students, legal professionals, and organizations interested in contributing to our projects or proposing new initiatives.", "primaryButton": {
    text: "Contact Us",
    href: "/contact"
  }, "secondaryButton": {
    text: "Learn More",
    href: "/about"
  } })} ` })}`;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/pages/projects.astro", void 0);

const $$file = "/Users/pradyunkrishnan/Desktop/Lexpressed/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
