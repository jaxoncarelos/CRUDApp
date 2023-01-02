import { c as create_ssr_component } from './index-5c0598d4.js';

const css = {
  code: "ul.svelte-1t356ep.svelte-1t356ep{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#171c28;height:40px}l2.svelte-1t356ep.svelte-1t356ep{padding:8px;position:relative;left:1vw;float:left;font-family:'Roboto', sans-serif;font-size:20px;color:white;text-decoration:none}li.svelte-1t356ep.svelte-1t356ep{padding:10px;position:relative;left:92vw;float:left;font-family:'Roboto', sans-serif;font-size:15px;color:white;text-decoration:none}li.svelte-1t356ep a.svelte-1t356ep{color:white;text-decoration:none}li.svelte-1t356ep a.svelte-1t356ep:hover{color:#765291}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><ul class="${"svelte-1t356ep"}"><l2 class="${"svelte-1t356ep"}">CRUD App</l2>
        ${`<li class="${"svelte-1t356ep"}"><a href="${"/login"}" class="${"svelte-1t356ep"}">Login</a></li>`}</ul></nav>
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d78674d9.js.map
