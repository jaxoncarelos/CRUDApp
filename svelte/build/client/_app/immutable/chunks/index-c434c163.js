function A(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t&&typeof t=="object"&&typeof t.then=="function"}function W(t){return t()}function J(){return Object.create(null)}function $(t){t.forEach(W)}function R(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let E;function $t(t,e){return E||(E=document.createElement("a")),E.href=e,t===E.href}function nt(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t,e,n){t.$$.on_destroy.push(rt(e,n))}function vt(t,e,n,r){if(t){const i=U(t,e,n,r);return t[0](i)}}function U(t,e,n,r){return t[1]&&r?tt(n.ctx.slice(),t[1](r(e))):n.ctx}function Et(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const u=[],c=Math.max(e.dirty.length,i.length);for(let a=0;a<c;a+=1)u[a]=e.dirty[a]|i[a];return u}return e.dirty|i}return e.dirty}function Nt(t,e,n,r,i,u){if(i){const c=U(e,n,r,u);t.p(c,i)}}function St(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let M=!1;function it(){M=!0}function ct(){M=!1}function lt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<e.length;s++){const _=e[s];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const s=e[l].claim_order,_=(i>0&&e[n[i]].claim_order<=s?i+1:lt(1,i,o=>e[n[o]].claim_order,s))-1;r[l]=n[_]+1;const d=_+1;n[d]=l,i=Math.max(d,i)}const u=[],c=[];let a=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(u.push(e[l-1]);a>=l;a--)c.push(e[a]);a--}for(;a>=0;a--)c.push(e[a]);u.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<u.length&&c[l].claim_order>=u[s].claim_order;)s++;const _=s<u.length?u[s]:null;t.insertBefore(c[l],_)}}function ut(t,e){if(M){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){M&&!n?ut(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function at(t){t.parentNode&&t.parentNode.removeChild(t)}function ot(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function At(){return z(" ")}function Mt(){return z("")}function Ct(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,r,i=!1){_t(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const a=t[c];if(e(a)){const l=n(a);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),a}}for(let c=t.claim_info.last_index-1;c>=0;c--){const a=t[c];if(e(a)){const l=n(a);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,a}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function dt(t,e,n,r){return V(t,i=>i.nodeName===e,i=>{const u=[];for(let c=0;c<i.attributes.length;c++){const a=i.attributes[c];n[a.name]||u.push(a.name)}u.forEach(c=>i.removeAttribute(c))},()=>r(e))}function Bt(t,e,n){return dt(t,e,n,ot)}function ht(t,e){return V(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>z(e),!0)}function Lt(t){return ht(t," ")}function Ot(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pt(t,e){t.value=e??""}function Tt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function zt(t,e){return new t(e)}let w;function g(t){w=t}function D(){if(!w)throw new Error("Function called outside component initialization");return w}function Dt(t){D().$$.on_mount.push(t)}function Ft(t){D().$$.after_update.push(t)}const x=[],K=[],S=[],Q=[],X=Promise.resolve();let P=!1;function Y(){P||(P=!0,X.then(F))}function Ht(){return Y(),X}function T(t){S.push(t)}const O=new Set;let N=0;function F(){const t=w;do{for(;N<x.length;){const e=x[N];N++,g(e),mt(e.$$)}for(g(null),x.length=0,N=0;K.length;)K.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];O.has(n)||(O.add(n),n())}S.length=0}while(x.length);for(;Q.length;)Q.pop()();P=!1,O.clear(),g(t)}function mt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const j=new Set;let b;function pt(){b={r:0,c:[],p:b}}function yt(){b.r||$(b.c),b=b.p}function H(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),b.c.push(()=>{j.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function It(t,e){const n=e.token={};function r(i,u,c,a){if(e.token!==n)return;e.resolved=a;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=a);const s=i&&(e.current=i)(l);let _=!1;e.block&&(e.blocks?e.blocks.forEach((d,o)=>{o!==u&&d&&(pt(),Z(d,1,1,()=>{e.blocks[o]===d&&(e.blocks[o]=null)}),yt())}):e.block.d(1),s.c(),H(s,1),s.m(e.mount(),e.anchor),_=!0),e.block=s,e.blocks&&(e.blocks[u]=s),_&&F()}if(et(t)){const i=D();if(t.then(u=>{g(i),r(e.then,1,e.value,u),g(null)},u=>{if(g(i),r(e.catch,2,e.error,u),g(null),!e.hasCatch)throw u}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Gt(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function Jt(t,e){Z(t,1,1,()=>{e.delete(t.key)})}function Kt(t,e,n,r,i,u,c,a,l,s,_,d){let o=t.length,m=u.length,h=o;const C={};for(;h--;)C[t[h].key]=h;const k=[],q=new Map,B=new Map;for(h=m;h--;){const f=d(i,u,h),p=n(f);let y=c.get(p);y?r&&y.p(f,e):(y=s(p,f),y.c()),q.set(p,k[h]=y),p in C&&B.set(p,Math.abs(h-C[p]))}const I=new Set,G=new Set;function L(f){H(f,1),f.m(a,_),c.set(f.key,f),_=f.first,m--}for(;o&&m;){const f=k[m-1],p=t[o-1],y=f.key,v=p.key;f===p?(_=f.first,o--,m--):q.has(v)?!c.has(y)||I.has(y)?L(f):G.has(v)?o--:B.get(y)>B.get(v)?(G.add(y),L(f)):(I.add(v),o--):(l(p,c),o--)}for(;o--;){const f=t[o];q.has(f.key)||l(f,c)}for(;m;)L(k[m-1]);return k}function Qt(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function gt(t,e,n,r){const{fragment:i,after_update:u}=t.$$;i&&i.m(e,n),r||T(()=>{const c=t.$$.on_mount.map(W).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),u.forEach(T)}function bt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(x.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,r,i,u,c,a=[-1]){const l=w;g(t);const s=t.$$={fragment:null,ctx:[],props:u,update:A,not_equal:i,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:J(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};c&&c(s.root);let _=!1;if(s.ctx=n?n(t,e.props||{},(d,o,...m)=>{const h=m.length?m[0]:o;return s.ctx&&i(s.ctx[d],s.ctx[d]=h)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](h),_&&xt(t,d)),o}):[],s.update(),_=!0,$(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){it();const d=ft(e.target);s.fragment&&s.fragment.l(d),d.forEach(at)}else s.fragment&&s.fragment.c();e.intro&&H(t.$$.fragment),gt(t,e.target,e.anchor,e.customElement),ct(),F()}g(l)}class Ut{$destroy(){bt(this,1),this.$destroy=A}$on(e,n){if(!R(n))return A;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ht as A,A as B,vt as C,ut as D,Nt as E,St as F,Et as G,kt as H,Pt as I,Ct as J,$ as K,It as L,Gt as M,K as N,Kt as O,Jt as P,$t as Q,Ut as S,At as a,jt as b,Lt as c,yt as d,Mt as e,H as f,pt as g,at as h,Rt as i,Ft as j,ot as k,Bt as l,ft as m,qt as n,Dt as o,Tt as p,z as q,ht as r,wt as s,Z as t,Ot as u,zt as v,Qt as w,Wt as x,gt as y,bt as z};