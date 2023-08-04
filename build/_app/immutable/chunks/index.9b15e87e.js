var A=Object.defineProperty;var C=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,h as b,i as j,j as E,k as B,l as w,m as L,p as D,q as N,v as I,w as M,x as O}from"./scheduler.63274e7e.js";let $=!1;function P(){$=!0}function T(){$=!1}function q(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function H(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=a?l+1:q(1,l,_=>t[n[_]].claim_order,a))-1;i[r]=n[o]+1;const c=o+1;n[c]=r,l=Math.max(c,l)}const f=[],s=[];let u=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(f.push(t[r-1]);u>=r;u--)s.push(t[u]);u--}for(;u>=0;u--)s.push(t[u]);f.reverse(),s.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<s.length;r++){for(;a<f.length&&s[r].claim_order>=f[a].claim_order;)a++;const o=a<f.length?f[a]:null;e.insertBefore(s[r],o)}}function z(e,t){if($){for(H(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function te(){return x(" ")}function ne(){return x("")}function ie(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function re(e){return function(t){return t.preventDefault(),e.call(this,t)}}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return e.dataset.svelteH}function le(e){let t;return{p(...n){t=n,t.forEach(i=>e.push(i))},r(){t.forEach(n=>e.splice(e.indexOf(n),1))}}}function ue(e){return e===""?null:+e}function W(e){return Array.from(e.childNodes)}function F(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,l=!1){F(e);const f=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const u=e[s];if(t(u)){const r=n(u);return r===void 0?e.splice(s,1):e[s]=r,l||(e.claim_info.last_index=s),u}}for(let s=e.claim_info.last_index-1;s>=0;s--){const u=e[s];if(t(u)){const r=n(u);return r===void 0?e.splice(s,1):e[s]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,u}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function G(e,t,n,i){return S(e,l=>l.nodeName===t,l=>{const f=[];for(let s=0;s<l.attributes.length;s++){const u=l.attributes[s];n[u.name]||f.push(u.name)}f.forEach(s=>l.removeAttribute(s))},()=>i(t))}function fe(e,t,n){return G(e,t,n,V)}function J(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ce(e){return J(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t){e.value=t??""}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function me(e,t){return new e(t)}const m=new Set;let d;function he(){d={r:0,c:[],p:d}}function $e(){d.r||h(d.c),d=d.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function pe(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e){e&&e.c()}function xe(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),w(()=>{const f=e.$$.on_mount.map(I).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),l.forEach(w)}function U(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(M.push(e),O(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,l,f,s,u=[-1]){const r=D;N(e);const a=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:l,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:b(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};s&&s(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(c,_,...v)=>{const g=v.length?v[0]:_;return a.ctx&&l(a.ctx[c],a.ctx[c]=g)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](g),o&&X(e,c)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){P();const c=W(t.target);a.fragment&&a.fragment.l(c),c.forEach(R)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),T(),j()}N(r)}class ge{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){U(this,1),this.$destroy=y}$on(t,n){if(!E(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{de as A,ie as B,re as C,ue as D,ge as S,ee as a,$e as b,ce as c,K as d,ne as e,R as f,V as g,fe as h,ve as i,W as j,ae as k,_e as l,x as m,J as n,oe as o,he as p,me as q,ye as r,te as s,pe as t,xe as u,Q as v,U as w,z as x,le as y,se as z};