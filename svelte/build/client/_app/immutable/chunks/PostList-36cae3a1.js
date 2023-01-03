import{S as N,i as q,s as H,k as v,q as T,a as E,l as b,m as k,r as $,h as f,c as I,n as y,b as m,D as h,u as O,B as g,J as z,K as A,g as M,t as P,d as j,f as S,e as w,N as J,w as R,x as V,y as X,z as K,O as Y}from"./index-020402b1.js";function B(c){let e,o,t,l,r,a,n;return{c(){e=v("button"),o=T("X"),t=E(),l=v("button"),r=T("🔧"),this.h()},l(s){e=b(s,"BUTTON",{class:!0});var i=k(e);o=$(i,"X"),i.forEach(f),t=I(s),l=b(s,"BUTTON",{class:!0});var d=k(l);r=$(d,"🔧"),d.forEach(f),this.h()},h(){y(e,"class","svelte-1mozr5s"),y(l,"class","editButton svelte-1mozr5s")},m(s,i){m(s,e,i),h(e,o),m(s,t,i),m(s,l,i),h(l,r),a||(n=[z(e,"click",c[1]),z(l,"click",c[2])],a=!0)},p:g,d(s){s&&f(e),s&&f(t),s&&f(l),a=!1,A(n)}}}function F(c){let e,o,t=c[0].username+"",l,r,a,n=c[0].content+"",s,i,d=c[0].username==localStorage.getItem("CRUDAppUsername"),u=d&&B(c);return{c(){e=v("div"),o=v("h1"),l=T(t),r=E(),a=v("p"),s=T(n),i=E(),u&&u.c(),this.h()},l(p){e=b(p,"DIV",{class:!0});var _=k(e);o=b(_,"H1",{class:!0});var U=k(o);l=$(U,t),U.forEach(f),r=I(_),a=b(_,"P",{class:!0});var D=k(a);s=$(D,n),D.forEach(f),i=I(_),u&&u.l(_),_.forEach(f),this.h()},h(){y(o,"class","username svelte-1mozr5s"),y(a,"class","content svelte-1mozr5s"),y(e,"class","post svelte-1mozr5s")},m(p,_){m(p,e,_),h(e,o),h(o,l),h(e,r),h(e,a),h(a,s),h(e,i),u&&u.m(e,null)},p(p,[_]){_&1&&t!==(t=p[0].username+"")&&O(l,t),_&1&&n!==(n=p[0].content+"")&&O(s,n),_&1&&(d=p[0].username==localStorage.getItem("CRUDAppUsername")),d?u?u.p(p,_):(u=B(p),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:g,o:g,d(p){p&&f(e),u&&u.d()}}}function G(c,e,o){let{post:t}=e;function l(){if(t.username!=localStorage.getItem("CRUDAppUsername")){alert("You can't delete this post");return}fetch("/api/deletePost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:t.postId})}),window.location.reload()}function r(){let a=document.querySelector(".content");a.contentEditable=!0,a.focus();let n=document.querySelector(".editButton");n.innerHTML="✔️",n.onclick=async()=>{a.contentEditable=!1,n.innerHTML="🔧",await(await fetch("/api/editPost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:t.postId,content:a.innerHTML})})).json()&&window.location.reload()}}return c.$$set=a=>{"post"in a&&o(0,t=a.post)},[t,l,r]}class Q extends N{constructor(e){super(),q(this,e,G,F,H,{post:0})}}function C(c,e,o){const t=c.slice();return t[1]=e[o],t}function W(c){let e=[],o=new Map,t,l,r=c[0];const a=n=>n[1].postId;for(let n=0;n<r.length;n+=1){let s=C(c,r,n),i=a(s);o.set(i,e[n]=L(i,s))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=w()},l(n){for(let s=0;s<e.length;s+=1)e[s].l(n);t=w()},m(n,s){for(let i=0;i<e.length;i+=1)e[i].m(n,s);m(n,t,s),l=!0},p(n,s){s&1&&(r=n[0],M(),e=J(e,s,a,1,n,r,o,t.parentNode,Y,L,t,C),j())},i(n){if(!l){for(let s=0;s<r.length;s+=1)S(e[s]);l=!0}},o(n){for(let s=0;s<e.length;s+=1)P(e[s]);l=!1},d(n){for(let s=0;s<e.length;s+=1)e[s].d(n);n&&f(t)}}}function Z(c){let e,o;return{c(){e=v("p"),o=T("There are no posts yet")},l(t){e=b(t,"P",{});var l=k(e);o=$(l,"There are no posts yet"),l.forEach(f)},m(t,l){m(t,e,l),h(e,o)},p:g,i:g,o:g,d(t){t&&f(e)}}}function L(c,e){let o,t,l;return t=new Q({props:{post:e[1]}}),{key:c,first:null,c(){o=w(),R(t.$$.fragment),this.h()},l(r){o=w(),V(t.$$.fragment,r),this.h()},h(){this.first=o},m(r,a){m(r,o,a),X(t,r,a),l=!0},p(r,a){e=r;const n={};a&1&&(n.post=e[1]),t.$set(n)},i(r){l||(S(t.$$.fragment,r),l=!0)},o(r){P(t.$$.fragment,r),l=!1},d(r){r&&f(o),K(t,r)}}}function x(c){let e,o,t,l;const r=[Z,W],a=[];function n(s,i){return s[0]?1:0}return o=n(c),t=a[o]=r[o](c),{c(){e=v("div"),t.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var i=k(e);t.l(i),i.forEach(f),this.h()},h(){y(e,"class","postList svelte-nmi1u2")},m(s,i){m(s,e,i),a[o].m(e,null),l=!0},p(s,[i]){let d=o;o=n(s),o===d?a[o].p(s,i):(M(),P(a[d],1,1,()=>{a[d]=null}),j(),t=a[o],t?t.p(s,i):(t=a[o]=r[o](s),t.c()),S(t,1),t.m(e,null))},i(s){l||(S(t),l=!0)},o(s){P(t),l=!1},d(s){s&&f(e),a[o].d()}}}function ee(c,e,o){let{posts:t}=e;return c.$$set=l=>{"posts"in l&&o(0,t=l.posts)},[t]}class se extends N{constructor(e){super(),q(this,e,ee,x,H,{posts:0})}}export{se as P};