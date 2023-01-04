import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
const Login_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loginBack.svelte-1o3lvs9.svelte-1o3lvs9{display:flex;justify-content:center;align-items:center;height:100vh;background:#292E39}.login.svelte-1o3lvs9.svelte-1o3lvs9{width:400px;height:300px;padding:20px;border-radius:10px;flex-direction:column;display:flex;background-color:#353f54}.login.svelte-1o3lvs9 input.svelte-1o3lvs9{color:white;width:390px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#171c28;font-size:20px;padding-left:10px}.login.svelte-1o3lvs9 input.svelte-1o3lvs9::-moz-placeholder{color:#777;font-size:20px;padding-left:0px}.login.svelte-1o3lvs9 input.svelte-1o3lvs9::placeholder{color:#777;font-size:20px;padding-left:0px}.login.svelte-1o3lvs9 button.svelte-1o3lvs9{cursor:pointer;z-index:-1;width:400px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#765291;color:white;font-size:20px;padding-left:10px}.login.svelte-1o3lvs9 button.svelte-1o3lvs9:active{background-color:#765291;box-shadow:0 5px #353f54;transform:translateY(3px)}.login.svelte-1o3lvs9 a.svelte-1o3lvs9{color:#FFF;text-decoration:none;font-size:10px;margin-top:50px;margin-left:5px}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username;
  let password;
  $$result.css.add(css);
  return `<div class="${"loginBack svelte-1o3lvs9"}"><div class="${"login svelte-1o3lvs9"}"><h1 style="${"color: #FFF;"}">Login</h1>
        <form><input type="${"text"}" placeholder="${"Username"}" key="${"username"}" class="${"svelte-1o3lvs9"}"${add_attribute("value", username, 0)}>
            <input type="${"password"}" placeholder="${"Password"}" key="${"password"}" class="${"svelte-1o3lvs9"}"${add_attribute("value", password, 0)}>
            <button class="${"svelte-1o3lvs9"}">Login</button></form>
        <a href="${"/register"}" class="${"svelte-1o3lvs9"}">Don&#39;t have an account?</a></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
