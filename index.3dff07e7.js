var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in i){var a=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,a.call(o.exports,o,o.exports),o.exports}var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(n,t){i[n]=t},n.parcelRequired7c6=a),a("1VOaQ"),a("lxQoS");var o=a("gh9Wa"),e=a("fgrH9"),s=a("lxQoS"),l=a("gjiCh");const r=new(0,e.default),c=new(0,l.default);(0,s.ganreListProcessin)().then((async function(n){try{c.showLoader(),await new Promise((n=>setTimeout(n,300))),await r.fetchPopularMovies().then((({results:t})=>{t.map((t=>{const{poster_path:i,original_title:a,genre_ids:e,release_date:l,id:r}=t,c=l.slice(0,4),_=[...n.genres],g=e;let p=[];for(let n=0;n<g.length;n++){const t=_.find((t=>t.id===g[n]));p.push(t.name)}let u=[...p.slice(0,2),"Other"].join(" ");p.length<s.numberOfGeneras&&(u=[...p].join(" "));const d=(0,o.default)({poster_path:i,original_title:a,currentGanre:u,date:c,id:r});document.querySelector(".main-content").insertAdjacentHTML("beforeend",d)}))})),c.hideLoader()}catch(n){console.error("Помилка під час отримання даних:",n)}})),a("lcIK4");o=a("gh9Wa"),e=a("fgrH9"),s=a("lxQoS");const _=new(0,e.default);let g=1,p=20,u="";const d=document.querySelector(".pagination"),f=document.querySelector(".main-content"),b=document.querySelector(".header__search");function h(){const n=document.querySelectorAll(".pagination__btn");for(const t of n)t.classList.contains("pagination__points")||t.addEventListener("click",(n=>{j(1*t.textContent),_.pageNum=g,L(),v(),m(g,p),h(),w()}));b.addEventListener("submit",(n=>{j(1*liElItem.textContent),L(),(0,s.onInputForm)(),m(g,p),h(),w()}))}function w(){const n=document.querySelectorAll(".js-arrow");for(const t of n)t.addEventListener("click",(n=>{t.classList.contains("pagination__arrow-left")&&(g-=1,_.pageNum=g,L(),v(),m(g,p),w(),h()),t.classList.contains("pagination__arrow-right")&&(g+=1,_.pageNum=g,L(),v(),m(g,p),w(),h())}))}function v(){document.querySelector(".main-content");_.fetchPopularMovies().then((({results:n})=>{n.map((n=>{const{poster_path:t,original_title:i,genre_ids:a,release_date:e,id:s}=n,l=a.join(", "),r=e.slice(0,4),c=(0,o.default)({poster_path:t,original_title:i,genres:l,date:r,id:s});document.querySelector(".main-content").insertAdjacentHTML("beforeend",c)}))}))}function m(n,t){if(t<6){1!=n&&(u+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>');for(let i=1;i<=t;i++)console.log(t),u+=i===n?`<li class="pagination__btn pagination__btn-active ">${n}</li>`:`<li class="pagination__btn ">${i}</li>`}else if(n<4){1!=n&&(u+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>');for(let t=1;t<=n+2;t++)u+=t===n?`<li class="pagination__btn pagination__btn-active ">${n}</li>`:`<li class="pagination__btn ">${t}</li>`;u+='<li class="pagination__btn pagination__points">...</li>',u+=`<li class="pagination__btn ">${t}</li>`,u+='<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}else if(n>t-3){u+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>',u+='<li class="pagination__btn ">1</li>',u+='<li class="pagination__btn pagination__points">...</li>';for(let i=n-2;i<=t;i+=1)u+=i===n?`<li class="pagination__btn pagination__btn-active ">${n}</li>`:`<li class="pagination__btn ">${i}</li>`;u+=t===n?'<button class="pagination__arrow-right js-arrow pagination__arrow-hiden"><svg class="pagination__icon-rigth"></svg></button>':'<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}else if(n<=t-3){u+='<button class="pagination__arrow-left js-arrow"><svg class="pagination__icon-left"></svg></button>',u+='<li class="pagination__btn ">1</li>',u+='<li class="pagination__btn pagination__points">...</li>';for(let t=n-2;t<=n+2;t+=1)u+=t===n?`<li class="pagination__btn pagination__btn-active ">${n}</li>`:`<li class="pagination__btn ">${t}</li>`;u+='<li class="pagination__btn pagination__points">...</li>',u+=`<li class="pagination__btn ">${t}</li>`,u+='<button class="pagination__arrow-right js-arrow"><svg class="pagination__icon-rigth"></svg></button>'}d.innerHTML=u,u=""}function L(){d.innerHTML="",f.innerHTML=""}function j(n){g=n}function y(){_.fetchPopularMovies().then((n=>{y=n.total_pages,p=y>500?500:y}))}y(),v(),m(g,p),h(),w(),function(){let n=document.querySelector(".back-to-top");window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>=300?n.classList.remove("btn-up_hide"):n.classList.add("btn-up_hide")})),n.addEventListener("click",(n=>{n.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.3dff07e7.js.map
