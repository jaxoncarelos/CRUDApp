import{S as L,i as V,s as Z,k as f,q as F,a as R,l as _,m as A,r as O,h as b,c as I,p as H,n as a,b as K,D as n,I as y,J as S,B as j,K as M,w as G,x as Q,y as W,f as X,t as Y,z as x}from"../../../chunks/index-020402b1.js";function ee(i){let t,s,e,d,v,r,o,P,u,U,c,E,p,T,m,$,C,w,N,D,z;return{c(){t=f("div"),s=f("div"),e=f("h1"),d=F("Register"),v=R(),r=f("form"),o=f("input"),P=R(),u=f("input"),U=R(),c=f("input"),E=R(),p=f("input"),T=R(),m=f("button"),$=F("Register"),C=R(),w=f("a"),N=F("Already have an account?"),this.h()},l(l){t=_(l,"DIV",{class:!0});var g=A(t);s=_(g,"DIV",{class:!0});var k=A(s);e=_(k,"H1",{style:!0});var B=A(e);d=O(B,"Register"),B.forEach(b),v=I(k),r=_(k,"FORM",{});var h=A(r);o=_(h,"INPUT",{type:!0,placeholder:!0,key:!0,class:!0}),P=I(h),u=_(h,"INPUT",{type:!0,placeholder:!0,key:!0,class:!0}),U=I(h),c=_(h,"INPUT",{type:!0,placeholder:!0,key:!0,class:!0}),E=I(h),p=_(h,"INPUT",{type:!0,placeholder:!0,class:!0}),T=I(h),m=_(h,"BUTTON",{class:!0});var q=A(m);$=O(q,"Register"),q.forEach(b),h.forEach(b),C=I(k),w=_(k,"A",{href:!0,class:!0});var J=A(w);N=O(J,"Already have an account?"),J.forEach(b),k.forEach(b),g.forEach(b),this.h()},h(){H(e,"color","#FFF"),a(o,"type","text"),a(o,"placeholder","Username"),a(o,"key","username"),a(o,"class","svelte-ei6mdb"),a(u,"type","text"),a(u,"placeholder","Email"),a(u,"key","password"),a(u,"class","svelte-ei6mdb"),a(c,"type","password"),a(c,"placeholder","Password"),a(c,"key","password"),a(c,"class","svelte-ei6mdb"),a(p,"type","password"),a(p,"placeholder","Confirm Password"),a(p,"class","svelte-ei6mdb"),a(m,"class","svelte-ei6mdb"),a(w,"href","/login"),a(w,"class","svelte-ei6mdb"),a(s,"class","register svelte-ei6mdb"),a(t,"class","registerBack svelte-ei6mdb")},m(l,g){K(l,t,g),n(t,s),n(s,e),n(e,d),n(s,v),n(s,r),n(r,o),y(o,i[0]),n(r,P),n(r,u),y(u,i[1]),n(r,U),n(r,c),y(c,i[2]),n(r,E),n(r,p),y(p,i[3]),n(r,T),n(r,m),n(m,$),n(s,C),n(s,w),n(w,N),D||(z=[S(o,"input",i[5]),S(u,"input",i[6]),S(c,"input",i[7]),S(p,"input",i[8]),S(m,"click",i[4])],D=!0)},p(l,[g]){g&1&&o.value!==l[0]&&y(o,l[0]),g&2&&u.value!==l[1]&&y(u,l[1]),g&4&&c.value!==l[2]&&y(c,l[2]),g&8&&p.value!==l[3]&&y(p,l[3])},i:j,o:j,d(l){l&&b(t),D=!1,M(z)}}}function te(i,t,s){let e,d,v,r;const o=p=>String(p).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);async function P(){if(!(await fetch("/api/usernameCheck?username="+e).then(m=>m.json())).usernameAvailable){alert("Username is already taken");return}if(!o(d)){alert("Email is not valid");return}if(v!==r){alert("Passwords do not match");return}(await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:d,password:v})}).then(m=>m.json())).success?(alert("Successfully registered"),localStorage.setItem("CRUDAppUsername",e),localStorage.setItem("CRUDAppLoggedIn",!0),window.location.href="/"):alert("Something went wrong")}function u(){e=this.value,s(0,e)}function U(){d=this.value,s(1,d)}function c(){v=this.value,s(2,v)}function E(){r=this.value,s(3,r)}return[e,d,v,r,P,u,U,c,E]}class se extends L{constructor(t){super(),V(this,t,te,ee,Z,{})}}function ae(i){let t,s;return t=new se({}),{c(){G(t.$$.fragment)},l(e){Q(t.$$.fragment,e)},m(e,d){W(t,e,d),s=!0},p:j,i(e){s||(X(t.$$.fragment,e),s=!0)},o(e){Y(t.$$.fragment,e),s=!1},d(e){x(t,e)}}}class ne extends L{constructor(t){super(),V(this,t,null,ae,Z,{})}}export{ne as default};