import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DK2btt_J.mjs';
import { manifest } from './manifest_BZ7XlNc6.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/mission.astro.mjs');
const _page4 = () => import('./pages/projects/climate-litigation-database.astro.mjs');
const _page5 = () => import('./pages/projects.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/mission.astro", _page3],
    ["src/pages/projects/climate-litigation-database.astro", _page4],
    ["src/pages/projects.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8c5135bc-d5d5-4325-986b-6a5b570a62d1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
