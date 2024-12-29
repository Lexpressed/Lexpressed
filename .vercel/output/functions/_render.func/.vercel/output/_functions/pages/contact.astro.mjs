/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_CqNM1uTQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DQWRk3BW.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CDGPClCV.mjs';
import { $ as $$Card } from '../chunks/Card_CNaVrsSO.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="contactForm"${addAttribute(`space-y-6 ${className}`, "class")}> <div class="grid md:grid-cols-2 gap-6"> <div> <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
First Name
</label> <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lexpressed-blue focus:border-transparent"> </div> <div> <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
Last Name
</label> <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lexpressed-blue focus:border-transparent"> </div> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
Email Address
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lexpressed-blue focus:border-transparent"> </div> <div> <label for="organization" class="block text-sm font-medium text-gray-700 mb-1">
Organization
</label> <input type="text" id="organization" name="organization" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lexpressed-blue focus:border-transparent"> </div> <div> <label for="inquiryType" class="block text-sm font-medium text-gray-700 mb-1">
Type of Inquiry
</label> <select id="inquiryType" name="inquiryType" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lexpressed-blue focus:border-transparent"> <option value="">Please select...</option> <option value="general">General Inquiry</option> <option value="collaboration">Project Collaboration</option> <option value="research">Research Opportunity</option> <option value="other">Other</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
Message
</label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lexpressed-blue focus:border-transparent"></textarea> <div> <button type="submit" id="submitButton" class="w-full md:w-auto px-8 py-3 bg-lexpressed-blue text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300">
Send Message
</button> <p id="formStatus" class="mt-2 text-sm"></p> </div> </div></form>`;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/components/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactMethods = [
    {
      title: "General Inquiries",
      description: "For general questions about Lexpressed and our work",
      icon: "\u{1F4E7}"
    },
    {
      title: "Project Collaboration",
      description: "Discuss potential partnerships and joint initiatives",
      icon: "\u{1F91D}"
    },
    {
      title: "Research Opportunities",
      description: "Join our research teams or propose new research areas",
      icon: "\u{1F50D}"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Contact Us", "description": "Get in touch with our team to discuss collaboration opportunities, research initiatives, or general inquiries." })} ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4"> <div class="grid md:grid-cols-3 gap-6 mb-12"> ${contactMethods.map((method) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...method })}`)} </div> <div class="bg-white rounded-xl shadow-lg p-8"> <h2 class="text-2xl font-bold text-lexpressed-navy mb-6">Send us a Message</h2> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </div> ` })}`;
}, "/Users/pradyunkrishnan/Desktop/Lexpressed/src/pages/contact.astro", void 0);

const $$file = "/Users/pradyunkrishnan/Desktop/Lexpressed/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
