if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const a=e=>s(e,d),f={module:{uri:d},exports:n,require:a};i[d]=Promise.all(c.map((e=>f[e]||a(e)))).then((e=>(r(...e),n)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/09/16/eggugh/index.html",revision:"a6ee15c49dee57b8353eb5c22df27ae2"},{url:"404.html",revision:"3c9752170a67617250300c5e9548893e"},{url:"archives/2022/09/index.html",revision:"ef073f8ca994c540825d4f43670608ff"},{url:"archives/2022/index.html",revision:"d36462f8d753beaa2c4c4be032fb6669"},{url:"archives/index.html",revision:"e8915679cc09bc2509a5f65e28f6a28d"},{url:"categories/index.html",revision:"ec6ed18c041e1fd45e15871f0aa1318e"},{url:"css/custom.css",revision:"b8cda7af382c83b7821a802b6a0c976a"},{url:"css/index.css",revision:"d27fe13e0dc16fec1d9b65d1ac59b9e4"},{url:"css/rightMenu.css",revision:"89af7d0ab63cdf87bc55267384ce3c8b"},{url:"css/universe.css",revision:"64d924471ddf19905ea30ae8cbd664ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"e6d89b023e0365a0ed6283ad00c980d6"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/rightMenu.js",revision:"fc2241ac6fe5bd6b9774e0f8cd6d4993"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"tags/index.html",revision:"e6d0b8284e539b9f2a49de24c4ddc92b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
