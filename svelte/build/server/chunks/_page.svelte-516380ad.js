import { c as create_ssr_component, v as validate_component, d as add_attribute } from './index-5c0598d4.js';

const css = {
  code: ".registerBack.svelte-1smq6la.svelte-1smq6la{display:flex;justify-content:center;align-items:center;height:100vh;background:#292E39}.register.svelte-1smq6la.svelte-1smq6la{width:400px;height:400px;padding:20px;border-radius:10px;flex-direction:column;display:flex;background-color:#353f54}.register.svelte-1smq6la input.svelte-1smq6la{color:white;width:390px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#171c28;font-size:20px;padding-left:10px}.register.svelte-1smq6la input.svelte-1smq6la::-moz-placeholder{color:#777;font-size:20px;padding-left:0px}.register.svelte-1smq6la input.svelte-1smq6la::placeholder{color:#777;font-size:20px;padding-left:0px}.register.svelte-1smq6la button.svelte-1smq6la{width:400px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#765291;color:white;font-size:20px;padding-left:10px}.register.svelte-1smq6la button.svelte-1smq6la:active{background-color:#765291;box-shadow:0 5px #353f54;transform:translateY(3px)}.register.svelte-1smq6la a.svelte-1smq6la{color:#FFF;text-decoration:none;font-size:10px;margin-top:50px;margin-left:5px}",
  map: null
};
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username;
  let email;
  let password;
  let confirmPassword;
  $$result.css.add(css);
  return `<div class="${"registerBack svelte-1smq6la"}"><div class="${"register svelte-1smq6la"}"><h1 style="${"color: #FFF;"}">Register</h1>
        <form><input type="${"text"}" placeholder="${"Username"}" key="${"username"}" class="${"svelte-1smq6la"}"${add_attribute("value", username, 0)}>
            <input type="${"text"}" placeholder="${"Email"}" key="${"password"}" class="${"svelte-1smq6la"}"${add_attribute("value", email, 0)}>
            <input type="${"password"}" placeholder="${"Password"}" key="${"password"}" class="${"svelte-1smq6la"}"${add_attribute("value", password, 0)}>
            <input type="${"password"}" placeholder="${"Confirm Password"}" class="${"svelte-1smq6la"}"${add_attribute("value", confirmPassword, 0)}>
            <button class="${"svelte-1smq6la"}">Register</button></form>
        <a href="${"/login"}" class="${"svelte-1smq6la"}">Already have an account?</a></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Register, "Register").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-516380ad.js.map
