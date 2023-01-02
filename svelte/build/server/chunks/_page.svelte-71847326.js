import { c as create_ssr_component, v as validate_component, d as add_attribute } from './index-5c0598d4.js';

const css = {
  code: ".loginBack.svelte-e6cd22.svelte-e6cd22{display:flex;justify-content:center;align-items:center;height:100vh;background:#292E39\r\n        \r\n    }.login.svelte-e6cd22.svelte-e6cd22{width:400px;height:300px;padding:20px;border-radius:10px;flex-direction:column;display:flex;background-color:#353f54}.login.svelte-e6cd22 input.svelte-e6cd22{color:white;width:390px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#171c28;font-size:20px;padding-left:10px}.login.svelte-e6cd22 input.svelte-e6cd22::placeholder{color:#777;font-size:20px;padding-left:0px}.login.svelte-e6cd22 button.svelte-e6cd22{cursor:pointer;z-index:-1;width:400px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#765291;color:white;font-size:20px;padding-left:10px}.login.svelte-e6cd22 button.svelte-e6cd22:active{background-color:#765291;box-shadow:0 5px #353f54;transform:translateY(3px)}.login.svelte-e6cd22 a.svelte-e6cd22{color:#FFF;text-decoration:none;font-size:10px;margin-top:50px;margin-left:5px}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username;
  let password;
  $$result.css.add(css);
  return `<div class="${"loginBack svelte-e6cd22"}"><div class="${"login svelte-e6cd22"}"><h1 style="${"color: #FFF;"}">Login</h1>
        <form><input type="${"text"}" placeholder="${"Username"}" key="${"username"}" class="${"svelte-e6cd22"}"${add_attribute("value", username, 0)}>
            <input type="${"password"}" placeholder="${"Password"}" key="${"password"}" class="${"svelte-e6cd22"}"${add_attribute("value", password, 0)}>
            <button class="${"svelte-e6cd22"}">Login</button></form>
        <a href="${"/register"}" class="${"svelte-e6cd22"}">Don&#39;t have an account?</a></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-71847326.js.map
