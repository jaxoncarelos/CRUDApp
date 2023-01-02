import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
/* empty css                                                   */const CreatePost_svelte_svelte_type_style_lang = "";
const Home_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "main.svelte-1sislso.svelte-1sislso{background-color:#292E39;height:100vh;width:100vw;color:white}main.svelte-1sislso div.svelte-1sislso{text-align:center;font-size:60px}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-dfqhed{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-dfqhed"}">${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
