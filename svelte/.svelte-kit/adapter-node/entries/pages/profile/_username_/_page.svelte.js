import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../chunks/index.js";
/* empty css                                                         *//* empty css                                                        */import { p as page } from "../../../../chunks/stores.js";
const css = {
  code: "main.svelte-1af0t2o{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;width:100vw}button.svelte-1af0t2o{cursor:pointer;width:100px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#765291;color:white;font-size:20px;padding-left:10px}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username } = $$props;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  $$result.css.add(css);
  return `${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let username = $page.params.username;
  $$unsubscribe_page();
  return `${validate_component(Profile, "Profile").$$render($$result, { username }, {}, {})}`;
});
export {
  Page as default
};
