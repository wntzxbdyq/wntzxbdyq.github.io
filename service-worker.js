if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const n=e=>s(e,d),a={module:{uri:d},exports:f,require:n};i[d]=Promise.all(c.map((e=>a[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/09/16/eggugh/index.html",revision:"bd9ac363a07c3812dc82e3c0f79834f6"},{url:"404.html",revision:"846b0e772d739dafd9ad014d029643ee"},{url:"archives/2022/09/index.html",revision:"a47278084213f07a48841dd5759a4734"},{url:"archives/2022/index.html",revision:"2e25332e040cac9c8b398956b5752eaf"},{url:"archives/index.html",revision:"712585de76d623615367e731d030c49d"},{url:"categories/index.html",revision:"208c098fec7eded29ccf1e2e64c82dc5"},{url:"comments/index.html",revision:"c7c407f0802aef72e04362e163753962"},{url:"css/cat.css",revision:"70e5e796b3aa139ef6e104f77f1be6f1"},{url:"css/custom.css",revision:"50d2a950eae4639417b4a482e5173040"},{url:"css/index.css",revision:"e6139a6127080889d405b0366193a3d2"},{url:"css/rightMenu.css",revision:"89af7d0ab63cdf87bc55267384ce3c8b"},{url:"css/universe.css",revision:"64d924471ddf19905ea30ae8cbd664ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"de914c36c8c3546f46f0d4a9114fb18b"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"8f48391fb8afa7c786045f7345c08968"},{url:"js/cat.js",revision:"9dde4d05525b11416a50df771506ff73"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/rightMenu.js",revision:"fcdb8d3f94f54d3e53894e814cf458b4"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"random.html",revision:"cd86e654940a457ffb379edf85c0f560"},{url:"tags/index.html",revision:"c6498fa11ce65ff664de9ddf105152d7"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
