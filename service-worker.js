if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const f=e=>s(e,d),n={module:{uri:d},exports:a,require:f};i[d]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(c(...e),a)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/09/16/eggugh/index.html",revision:"04713baf61f7a772381ec6157a561f00"},{url:"404.html",revision:"ae4da343eab73487f819d5919e90f93f"},{url:"archives/2022/09/index.html",revision:"0a96e6cce4a52674e10f2ca57fb0a80f"},{url:"archives/2022/index.html",revision:"e1aac7d333be4b9410ce46a51a6d66cc"},{url:"archives/index.html",revision:"76a88977fb9440f50bbf24dad8288799"},{url:"categories/index.html",revision:"56dedab1f1f0b5767d13fb705d9d8d6a"},{url:"comments/index.html",revision:"a7d6735ea4789bc620f56772559d1783"},{url:"css/cat.css",revision:"70e5e796b3aa139ef6e104f77f1be6f1"},{url:"css/custom.css",revision:"50d2a950eae4639417b4a482e5173040"},{url:"css/index.css",revision:"589252de48926ae4613b8d0616c4743b"},{url:"css/rightMenu.css",revision:"89af7d0ab63cdf87bc55267384ce3c8b"},{url:"css/universe.css",revision:"64d924471ddf19905ea30ae8cbd664ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f6f685e09f9a7cce69275ff0866d9459"},{url:"js/cat.js",revision:"9dde4d05525b11416a50df771506ff73"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/rightMenu.js",revision:"fcdb8d3f94f54d3e53894e814cf458b4"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"random.html",revision:"3e4ee9bf4b9af47d5840cc71c2721eca"},{url:"tags/index.html",revision:"aaa9fc47aaada66fb36adddc809f2395"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
