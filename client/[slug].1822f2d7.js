import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c,b as l,f as h,g as u,h as f,j as m,k as d,l as p,n as v}from"./client.d1a121cb.js";function g(t){let s,a,g,j,b,x,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(E),b=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=h(g);j=u(s,E),s.forEach(r),b=c(t),x=l(t,"DIV",{class:!0}),h(x).forEach(r),this.h()},h(){f(x,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,g,s),d(g,j),m(t,b,s),m(t,x,s),x.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&p(j,E),1&a&&H!==(H=t[0].html+"")&&(x.innerHTML=H)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(b),t&&r(x)}}}async function j({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function b(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,b,g,a,{post:0})}}export{j as preload};
