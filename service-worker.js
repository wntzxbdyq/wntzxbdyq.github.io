if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const f=e=>s(e,d),o={module:{uri:d},exports:n,require:f};i[d]=Promise.all(c.map((e=>o[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/09/16/eggugh/index.html",revision:"152f5ab3d39da14c9877f5791256f934"},{url:"404.html",revision:"aa2d2e174737638c77652b4d9c05844f"},{url:"archives/2022/09/index.html",revision:"44987f02f1842a5b942960dff7ae2dcc"},{url:"archives/2022/index.html",revision:"ec567a31db60edbd6564d788c566ac05"},{url:"archives/index.html",revision:"647f9d755809d872814c4b0dc77c8e7a"},{url:"categories/index.html",revision:"e2e718b06c16bdecfa30b76fd51b7797"},{url:"css/custom.css",revision:"6dfbbf8cf79c40cd10902b3fce183fcb"},{url:"css/index.css",revision:"d27fe13e0dc16fec1d9b65d1ac59b9e4"},{url:"css/universe.css",revision:"64d924471ddf19905ea30ae8cbd664ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"3392e7003e6b1819393d2643b9d73933"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"tags/index.html",revision:"68c6957e357fc68a34654d8ebbeff21d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
