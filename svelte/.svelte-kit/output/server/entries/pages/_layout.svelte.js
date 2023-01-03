import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-15lway2.svelte-15lway2{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#171c28;height:40px}l2.svelte-15lway2.svelte-15lway2{padding:8px;position:relative;left:1vw;float:left;font-family:'Roboto', sans-serif;font-size:20px;color:white;text-decoration:none}li.svelte-15lway2.svelte-15lway2{padding:10px;position:relative;left:85%;float:left;font-family:'Roboto', sans-serif;font-size:15px;color:white;text-decoration:none}a.svelte-15lway2.svelte-15lway2{color:white;text-decoration:none}li.svelte-15lway2 a.svelte-15lway2:hover{color:#765291}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><ul class="${"svelte-15lway2"}"><l2 class="${"svelte-15lway2"}"><a href="${"/"}" class="${"svelte-15lway2"}">CRUD App</a></l2>
        ${`<li class="${"svelte-15lway2"}"><a href="${"/register"}" class="${"svelte-15lway2"}">Register</a></li>
            <li class="${"svelte-15lway2"}"><a href="${"/login"}" class="${"svelte-15lway2"}">Login</a></li>`}</ul></nav>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
