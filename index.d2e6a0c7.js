var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in i){var a=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,a.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,t){i[n]=t},n.parcelRequired7c6=a),a("1VOaQ"),a("lxQoS"),a("lcIK4");var o=a("gh9Wa"),s=a("fgrH9"),e=a("lxQoS");const l=new(0,s.default);ї;let r=1,c=20,_="";const g=document.querySelector(".pagination"),p=document.querySelector(".main-content");function u(){const n=document.querySelectorAll(".pagination__btn");for(const t of n)t.classList.contains("pagination__points")||t.addEventListener("click",(n=>{var i;i=1*t.textContent,r=i,l.pageNum=r,h(),(0,e.ganreListProcessin)().then(b),d(),u(),f()}))}function f(){const n=document.querySelectorAll(".js-arrow");for(const t of n)t.addEventListener("click",(n=>{t.classList.contains("pagination__arrow-left")&&(r-=1,l.pageNum=r,h(),(0,e.ganreListProcessin)().then(b),d(),f(),u()),t.classList.contains("pagination__arrow-right")&&(r+=1,l.pageNum=r,h(),(0,e.ganreListProcessin)().then(b),d(),f(),u())}))}function b(n){try{l.fetchPopularMovies().then((({results:t})=>{const i=t.map((({poster_path:t,original_title:i,genre_ids:a,release_date:o,id:s})=>{const l=o.slice(0,4);console.log(l);const r=[...n.genres],c=a;let _=[];for(let n=0;n<c.length;n++){const t=r.find((t=>t.id===c[n]));_.push(t.name)}let g=null;return g=_.length<e.numberOfGeneras?_.join(",  "):[..._.slice(0,2),"Other"].join(", "),{poster_path:t,original_title:i,currentGanre:g,date:l,id:s}})),a=(0,o.default)({mk:i});p.innerHTML=a}))}catch(n){console.error("Помилка під час отримання даних:",n)}}function d(){if(c<6){1!=r&&(_+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>');for(let n=1;n<=c;n++)console.log(c),_+=n===r?`<li class="pagination__btn pagination__btn-active ">${r}</li>`:`<li class="pagination__btn ">${n}</li>`}else if(r<4){1!=r&&(_+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>');for(let n=1;n<=r+2;n++)_+=n===r?`<li class="pagination__btn pagination__btn-active ">${r}</li>`:`<li class="pagination__btn ">${n}</li>`;_+='<li class="pagination__btn pagination__points">...</li>',_+=`<li class="pagination__btn ">${c}</li>`,_+='<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}else if(r>c-3){_+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>',_+='<li class="pagination__btn ">1</li>',_+='<li class="pagination__btn pagination__points">...</li>';for(let n=r-2;n<=c;n+=1)_+=n===r?`<li class="pagination__btn pagination__btn-active ">${r}</li>`:`<li class="pagination__btn ">${n}</li>`;_+=c===r?'<button class="pagination__arrow-right js-arrow pagination__arrow-hiden"><svg class="pagination__icon-rigth"></svg></button>':'<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}else if(r<=c-3){_+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>',_+='<li class="pagination__btn ">1</li>',_+='<li class="pagination__btn pagination__points">...</li>';for(let n=r-2;n<=r+2;n+=1)_+=n===r?`<li class="pagination__btn pagination__btn-active ">${r}</li>`:`<li class="pagination__btn ">${n}</li>`;_+='<li class="pagination__btn pagination__points">...</li>',_+=`<li class="pagination__btn ">${c}</li>`,_+='<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}g.innerHTML=_,_=""}function h(){g.innerHTML="",p.innerHTML=""}function v(){l.fetchPopularMovies().then((n=>{v=n.total_pages,c=v>500?500:v}))}v(),(0,e.ganreListProcessin)().then(b),d(),u(),f();s=a("fgrH9");var w=a("5BiId");const m=new(0,(s=a("fgrH9")).default),L=(new(0,s.default),{searchForm:document.querySelector(".header__search"),main:document.querySelector(".main-content"),wrongSearchMess:document.querySelector(".wrong-search")});let y=1,S=20,j="";const $=document.querySelector(".pagination");async function q(){let n=JSON.parse(localStorage.getItem("ganre-List"));try{if(!localStorage.getItem("ganre-List")){const t=await m.fetchGenresMovies();n=t;const i=JSON.stringify(t);localStorage.setItem("ganre-List",i)}}catch(n){console.log("ganreListProcessin",n)}return n}async function M(n){try{await m.fetchSearchMoviesPages().then((({results:t})=>{if(L.wrongSearchMess.classList.add("visually-hidden"),!t.length)return void L.wrongSearchMess.classList.remove("visually-hidden");const i=t.map((({title:t,release_date:i,poster_path:a,genre_ids:o,id:s})=>{i=i.slice(0,4),a=`https://image.tmdb.org/t/p/w500${a}`;const e=[...n.genres],l=o;let r=[];for(let n=0;n<l.length;n++){const t=e.find((t=>t.id===l[n]));r.push(t.name)}let c=[...r.slice(0,2),"Other"].join(" ");return r.length<4&&(c=[...r].join(" ")),{title:t,release_date:i,currentGanre:c,poster_path:a,id:s}})),a=(0,w.default)({articleStore:i});L.main.innerHTML=a}))}catch(n){console.log("createCards",n)}}function T(){const n=document.querySelectorAll(".pagination__btn");for(const t of n)t.classList.contains("pagination__points")||t.addEventListener("click",(n=>{var i;i=1*t.textContent,y=i,m.pageNum=y,N(),q(m.query).then(M),H(),T(),E()}))}function E(){const n=document.querySelectorAll(".js-arrow");for(const t of n)t.addEventListener("click",(n=>{t.classList.contains("pagination__arrow-left")&&(y-=1,m.pageNum=y,N(),q(m.query).then(M),H(),E(),T()),t.classList.contains("pagination__arrow-right")&&(y+=1,m.pageNum=y,N(),q(m.query).then(M),H(),E(),T())}))}function H(){if(S<6){1!=y&&(j+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>');for(let n=1;n<=S;n++)j+=n===y?`<li class="pagination__btn pagination__btn-active ">${y}</li>`:`<li class="pagination__btn ">${n}</li>`}else if(y<4){1!=y&&(j+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>');for(let n=1;n<=y+2;n++)j+=n===y?`<li class="pagination__btn pagination__btn-active ">${y}</li>`:`<li class="pagination__btn ">${n}</li>`;j+='<li class="pagination__btn pagination__points">...</li>',j+=`<li class="pagination__btn ">${S}</li>`,j+='<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}else if(y>S-3){j+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>',j+='<li class="pagination__btn ">1</li>',j+='<li class="pagination__btn pagination__points">...</li>';for(let n=y-2;n<=S;n+=1)j+=n===y?`<li class="pagination__btn pagination__btn-active ">${y}</li>`:`<li class="pagination__btn ">${n}</li>`;j+=S===y?'<button class="pagination__arrow-right js-arrow pagination__arrow-hiden"><svg class="pagination__icon-rigth"></svg></button>':'<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}else if(y<=S-3){j+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>',j+='<li class="pagination__btn ">1</li>',j+='<li class="pagination__btn pagination__points">...</li>';for(let n=y-2;n<=y+2;n+=1)j+=n===y?`<li class="pagination__btn pagination__btn-active ">${y}</li>`:`<li class="pagination__btn ">${n}</li>`;j+='<li class="pagination__btn pagination__points">...</li>',j+=`<li class="pagination__btn ">${S}</li>`,j+='<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}$.innerHTML=j,j=""}function N(){$.innerHTML=""}function x(){m.fetchSearchMoviesPages(m.query).then((n=>{x=n.total_pages,S=x>500?500:x}))}L.searchForm.addEventListener("submit",(function(n){n.preventDefault(),function(n){m.query=n.currentTarget.elements.search.value,q().then(M)}(n),x(),N(),H(),T(),E()})),function(){let n=document.querySelector(".back-to-top");window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>=300?n.classList.remove("btn-up_hide"):n.classList.add("btn-up_hide")})),n.addEventListener("click",(n=>{n.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.d2e6a0c7.js.map
