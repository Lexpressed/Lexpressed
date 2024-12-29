import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, b as createAstro, g as renderHead, h as renderSlot } from './astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center"> <img src="/logo2.png" alt="Lexpressed Logo" class="h-16 w-auto" style="filter: brightness(0) saturate(100%) invert(45%) sepia(19%) saturate(1966%) hue-rotate(4deg) brightness(92%) contrast(89%);"> </div>`;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/components/Logo.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/mission", text: "Our Mission" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white shadow-lg"> <div class="max-w-7xl mx-auto px-4"> <div class="flex justify-between h-16"> <div class="flex"> <div class="flex-shrink-0 flex items-center"> <a href="/" class="flex items-center"> ${renderComponent($$result, "Logo", $$Logo, {})} <span class="text-xl font-bold text-lexpressed-navy">Lexpressed</span> </a> </div> </div> <!-- Desktop Navigation --> <div class="hidden md:flex md:items-center md:space-x-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="inline-flex items-center px-1 pt-1 text-sm font-medium text-lexpressed-navy hover:text-lexpressed-ochre transition-colors duration-200"> ${item.text} </a>`)} </div> <!-- Mobile Navigation Button --> <div class="flex items-center md:hidden"> <button type="button" id="mobileMenuButton" class="inline-flex items-center justify-center p-2 rounded-md text-lexpressed-navy hover:text-lexpressed-ochre focus:outline-none" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <!-- Icon when menu is closed --> <svg id="menuIcon" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <!-- Icon when menu is open --> <svg id="closeIcon" class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> </div> <!-- Mobile menu --> <div class="hidden md:hidden" id="mobileMenu"> <div class="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block px-3 py-2 rounded-md text-base font-medium text-lexpressed-navy hover:text-lexpressed-ochre hover:bg-gray-50 transition-colors duration-200"> ${item.text} </a>`)} </div> </div> </nav> `;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Lexpressed - Legal Think Tank focused on strategic litigation and climate justice"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Lexpressed</title>${renderHead()}</head> <body class="min-h-screen bg-gray-50"> ${renderComponent($$result, "Navigation", $$Navigation, {})} <main class="max-w-7xl mx-auto px-4 py-8"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-lexpressed-navy text-white py-8 mt-16"> <div class="max-w-7xl mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <h3 class="text-xl font-bold mb-4">Lexpressed</h3> <p class="text-gray-300">
A student-led think tank focused on strategic litigation.
</p> </div> <div> <h3 class="text-xl font-bold mb-4">Quick Links</h3> <ul class="space-y-2"> <li> <a href="/about" class="text-gray-300 hover:text-white">About Us</a> </li> <li> <a href="/projects" class="text-gray-300 hover:text-white">Projects</a> </li> <li> <a href="/contact" class="text-gray-300 hover:text-white">Contact</a> </li> </ul> </div> <div> <h3 class="text-xl font-bold mb-4">Connect</h3> <p class="text-gray-300 mb-4">
Stay updated with our latest research and projects.
</p> <div class="flex space-x-4 mt-4"> <a href="https://www.instagram.com/lex_pressed/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> <svg class="w-6 h-6 text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.27-3.29.542-.872.272-1.611.63-2.347 1.366-.736.736-1.094 1.475-1.366 2.347-.272.872-.484 2.009-.542 3.29-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.27 2.418.542 3.29.272.872.63 1.611 1.366 2.347.736.736 1.475 1.094 2.347 1.366.872.272 2.009.484 3.29.542 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.418-.27 3.29-.542.872-.272 1.611-.63 2.347-1.366.736-.736 1.094-1.475 1.366-2.347.272-.872.484-2.009.542-3.29.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.27-2.418-.542-3.29-.272-.872-.63-1.611-1.366-2.347-.736-.736-1.475-1.094-2.347-1.366-.872-.272-2.009-.484-3.29-.542-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.293 0-4.162-1.869-4.162-4.162s1.869-4.162 4.162-4.162 4.162 1.869 4.162 4.162-1.869 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"></path> </svg> </a> <a href="https://www.linkedin.com/company/lexpressed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <svg class="w-6 h-6 text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.268c.878-.805 2.021-1.268 3.25-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z"></path> </svg> </a> <a href="mailto:info.lexpressed@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"> <svg class="w-6 h-6 text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 12.713l11.985-7.713c-.011-.004-.021-.007-.032-.011-.011-.004-.021-.007-.032-.011l-11.921 7.676-11.921-7.676c-.011.004-.021.007-.032.011-.011.004-.021.007-.032.011l11.985 7.713zm0 1.287l-12-7.75v13.75c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13.75l-12 7.75zm-12-9.75l12 7.75 12-7.75v-2.75c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v2.75z"></path> </svg> </a> </div> </div> </div> <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Lexpressed. All rights reserved.
</p> </div> </div> </footer> ${renderComponent($$result, "Analytics", $$Index, {})} </body></html>`;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
