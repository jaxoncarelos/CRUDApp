import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const Register_svelte_svelte_type_style_lang = "";
const css = {
  code: ".registerBack.svelte-ei6mdb.svelte-ei6mdb{display:flex;justify-content:center;align-items:center;height:100vh;background:#292E39\r\n        \r\n    }.register.svelte-ei6mdb.svelte-ei6mdb{width:400px;height:400px;padding:20px;border-radius:10px;flex-direction:column;display:flex;background-color:#353f54}.register.svelte-ei6mdb input.svelte-ei6mdb{color:white;width:390px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#171c28;font-size:20px;padding-left:10px}.register.svelte-ei6mdb input.svelte-ei6mdb::placeholder{color:#777;font-size:20px;padding-left:0px}.register.svelte-ei6mdb button.svelte-ei6mdb{width:400px;height:40px;border-radius:5px;border:none;margin:5px 0;background-color:#765291;color:white;font-size:20px;padding-left:10px}.register.svelte-ei6mdb button.svelte-ei6mdb:active{background-color:#765291;box-shadow:0 5px #353f54;transform:translateY(3px)}.register.svelte-ei6mdb a.svelte-ei6mdb{color:#FFF;text-decoration:none;font-size:10px;margin-top:50px;margin-left:5px}",
  map: null
};
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"registerBack svelte-ei6mdb"}"><div class="${"register svelte-ei6mdb"}"><h1 style="${"color: #FFF;"}">Register</h1>
        <form><input type="${"text"}" placeholder="${"Username"}" key="${"username"}" class="${"svelte-ei6mdb"}">
            <input type="${"text"}" placeholder="${"Email"}" key="${"password"}" class="${"svelte-ei6mdb"}">
            <input type="${"password"}" placeholder="${"Password"}" key="${"password"}" class="${"svelte-ei6mdb"}">
            <input type="${"password"}" placeholder="${"Confirm Password"}" class="${"svelte-ei6mdb"}">
            <button class="${"svelte-ei6mdb"}">Register</button></form>
        <a href="${"/login"}" class="${"svelte-ei6mdb"}">Already have an account?</a></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Register, "Register").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
