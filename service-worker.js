if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const n=e=>i(e,d),a={module:{uri:d},exports:f,require:n};s[d]=Promise.all(r.map((e=>a[e]||n(e)))).then((e=>(c(...e),f)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/09/16/eggugh/index.html",revision:"16f622a34a51f1abf37603678d770907"},{url:"404.html",revision:"ce3077c5f6683929a6d11e048e045fb9"},{url:"archives/2022/09/index.html",revision:"4fa650d9a224f00ea79c66b342613793"},{url:"archives/2022/index.html",revision:"7873be935331bc576eeffae75b39f74a"},{url:"archives/index.html",revision:"c96be6badd36eabc6164d625edbe3ee8"},{url:"categories/index.html",revision:"156ac42d779e604688d4f55d8178af97"},{url:"comments/index.html",revision:"08665ece6cfe2774ee8c6a05a7bbedf4"},{url:"css/cat.css",revision:"70e5e796b3aa139ef6e104f77f1be6f1"},{url:"css/custom.css",revision:"50d2a950eae4639417b4a482e5173040"},{url:"css/index.css",revision:"589252de48926ae4613b8d0616c4743b"},{url:"css/rightMenu.css",revision:"89af7d0ab63cdf87bc55267384ce3c8b"},{url:"css/universe.css",revision:"64d924471ddf19905ea30ae8cbd664ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"d0fd08817ee0cc9e371f8205e79f83f8"},{url:"js/cat.js",revision:"9dde4d05525b11416a50df771506ff73"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/rightMenu.js",revision:"fcdb8d3f94f54d3e53894e814cf458b4"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"tags/index.html",revision:"3f398813473ab1f90e445f66dfe75229"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
