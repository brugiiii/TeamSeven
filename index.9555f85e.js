!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},e=t.parcelRequired7c6;null==e&&((e=function(n){if(n in a)return a[n].exports;if(n in i){var t=i[n];delete i[n];var e={id:n,exports:{}};return a[n]=e,t.call(e.exports,e,e.exports),e.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,t){i[n]=t},t.parcelRequired7c6=e),e("dsadE"),e("9BNc1");var o=e("bpxeT"),r=e("8nrFW"),c=e("2TvXO"),s=e("drCPS"),l=e("igxJ3"),u=e("9BNc1"),_=e("kvC6y"),p=document.querySelector(".main-content"),g=new(0,l.default),f=new(0,_.default);function d(){return(d=n(o)(n(c).mark((function t(a){return n(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f.showLoader(),t.next=4,new Promise((function(n){return setTimeout(n,300)}));case 4:return t.next=6,g.fetchPopularMovies().then((function(t){var i=t.results.map((function(t){for(var i=function(n){var t=p.find((function(t){return t.id===g[n]}));f.push(t.name)},e=t.poster_path,o=t.original_title,c=t.genre_ids,s=t.release_date,l=t.id,_=s.slice(0,4),p=n(r)(a.genres),g=c,f=[],d=0;d<g.length;d++)i(d);return{poster_path:e,original_title:o,currentGanre:f.length<u.numberOfGeneras?f.join(",  "):n(r)(f.slice(0,2)).concat(["Other"]).join(", "),date:_,id:l}})),e=(0,s.default)({mk:i});p.innerHTML=e,f.hideLoader()}));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Помилка під час отримання даних:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}(0,u.ganreListProcessin)().then((function(n){return d.apply(this,arguments)})),e("1RG4E");s=e("drCPS");var b=new(0,(l=e("igxJ3")).default),v=1,h=20,w="",m='<svg class="pagination__icon-left"></svg>',y='<svg class="pagination__icon-rigth"></svg>',L=document.querySelector(".pagination"),S=document.querySelector(".main-content");function x(){var n=document.querySelectorAll(".pagination__btn"),t=!0,a=!1,i=void 0;try{for(var e,o=function(n,t){var a=t.value;if(a.classList.contains("pagination__points"))return"continue";a.addEventListener("click",(function(n){var t;t=1*a.textContent,v=t,b.pageNum=v,M(),q(),T(),x(),j()}))},r=n[Symbol.iterator]();!(t=(e=r.next()).done);t=!0)o(0,e)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function j(){var n=document.querySelectorAll(".js-arrow"),t=!0,a=!1,i=void 0;try{for(var e,o=function(n,t){var a=t.value;a.addEventListener("click",(function(n){a.classList.contains("pagination__arrow-left")&&(v-=1,b.pageNum=v,M(),q(),T(),j(),x()),a.classList.contains("pagination__arrow-right")&&(v+=1,b.pageNum=v,M(),q(),T(),j(),x())}))},r=n[Symbol.iterator]();!(t=(e=r.next()).done);t=!0)o(0,e)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function q(){document.querySelector(".main-content");b.fetchPopularMovies().then((function(n){n.results.map((function(n){var t=n.poster_path,a=n.original_title,i=n.genre_ids,e=n.release_date,o=n.id,r=i.join(", "),c=e.slice(0,4),l=(0,s.default)({poster_path:t,original_title:a,genres:r,date:c,id:o});document.querySelector(".main-content").insertAdjacentHTML("beforeend",l)}))}))}function T(){if(h<6){1!=v&&(w+='<button class="pagination__arrow-left js-arrow">'.concat(m,"</button>"));for(var n=1;n<=h;n++)console.log(h),w+=n===v?'<li class="pagination__btn pagination__btn-active ">'.concat(v,"</li>"):'<li class="pagination__btn ">'.concat(n,"</li>")}else if(v<4){1!=v&&(w+='<button class="pagination__arrow-left js-arrow">'.concat(m,"</button>"));for(var t=1;t<=v+2;t++)w+=t===v?'<li class="pagination__btn pagination__btn-active ">'.concat(v,"</li>"):'<li class="pagination__btn ">'.concat(t,"</li>");w+='<li class="pagination__btn pagination__points">...</li>',w+='<li class="pagination__btn ">'.concat(h,"</li>"),w+='<button class="pagination__arrow-right js-arrow">'.concat(y,"</button>")}else if(v>h-3){w+='<button class="pagination__arrow-left js-arrow">'.concat(m,"</button>"),w+='<li class="pagination__btn ">1</li>',w+='<li class="pagination__btn pagination__points">...</li>';for(var a=v-2;a<=h;a+=1)w+=a===v?'<li class="pagination__btn pagination__btn-active ">'.concat(v,"</li>"):'<li class="pagination__btn ">'.concat(a,"</li>");w+=h===v?'<button class="pagination__arrow-right js-arrow pagination__arrow-hiden">'.concat(y,"</button>"):'<button class="pagination__arrow-right js-arrow">'.concat(y,"</button>")}else if(v<=h-3){w+='<button class="pagination__arrow-left js-arrow">'.concat(m,"</button>"),w+='<li class="pagination__btn ">1</li>',w+='<li class="pagination__btn pagination__points">...</li>';for(var i=v-2;i<=v+2;i+=1)w+=i===v?'<li class="pagination__btn pagination__btn-active ">'.concat(v,"</li>"):'<li class="pagination__btn ">'.concat(i,"</li>");w+='<li class="pagination__btn pagination__points">...</li>',w+='<li class="pagination__btn ">'.concat(h,"</li>"),w+='<button class="pagination__arrow-right js-arrow">'.concat(y,"</button>")}L.innerHTML=w,w=""}function M(){L.innerHTML="",S.innerHTML=""}function k(){b.fetchPopularMovies().then((function(n){k=n.total_pages,h=k>500?500:k}))}k(),q(),T(),x(),j();o=e("bpxeT"),r=e("8nrFW"),c=e("2TvXO"),l=e("igxJ3");var E,N=e("4p7m4"),O=new(0,(l=e("igxJ3")).default),P=(new(0,l.default),{searchForm:document.querySelector(".header__search"),main:document.querySelector(".main-content"),wrongSearchMess:document.querySelector(".wrong-search")}),H=1,C=20,A="",F='<svg class="pagination__icon-left"></svg>',J='<svg class="pagination__icon-rigth"></svg>',G=document.querySelector(".pagination");function R(){return D.apply(this,arguments)}function D(){return(D=n(o)(n(c).mark((function t(){var a,i,e;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=JSON.parse(localStorage.getItem("ganre-List")),n.prev=1,localStorage.getItem("ganre-List")){n.next=9;break}return n.next=5,O.fetchGenresMovies();case 5:i=n.sent,a=i,e=JSON.stringify(i),localStorage.setItem("ganre-List",e);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("ganreListProcessin",n.t0);case 14:return n.abrupt("return",a);case 15:case"end":return n.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function I(n){return W.apply(this,arguments)}function W(){return(W=n(o)(n(c).mark((function t(a){return n(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.fetchSearchMoviesPages().then((function(t){var i=t.results;if(P.wrongSearchMess.classList.add("visually-hidden"),i.length){var e=i.map((function(t){var i=function(n){var t=u.find((function(t){return t.id===_[n]}));p.push(t.name)},e=t.title,o=t.release_date,c=t.poster_path,s=t.genre_ids,l=t.id;o=o.slice(0,4),c="https://image.tmdb.org/t/p/w500".concat(c);for(var u=n(r)(a.genres),_=s,p=[],g=0;g<_.length;g++)i(g);var f=n(r)(p.slice(0,2)).concat(["Other"]).join(" ");return p.length<4&&(f=n(r)(p).join(" ")),{title:e,release_date:o,currentGanre:f,poster_path:c,id:l}})),o=(0,N.default)({articleStore:e});P.main.innerHTML=o}else P.wrongSearchMess.classList.remove("visually-hidden")}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("createCards",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}function B(){var n=document.querySelectorAll(".pagination__btn"),t=!0,a=!1,i=void 0;try{for(var e,o=function(n,t){var a=t.value;if(a.classList.contains("pagination__points"))return"continue";a.addEventListener("click",(function(n){var t;t=1*a.textContent,H=t,O.pageNum=H,Y(),R(O.query).then(I),X(),B(),U()}))},r=n[Symbol.iterator]();!(t=(e=r.next()).done);t=!0)o(0,e)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function U(){var n=document.querySelectorAll(".js-arrow"),t=!0,a=!1,i=void 0;try{for(var e,o=function(n,t){var a=t.value;a.addEventListener("click",(function(n){a.classList.contains("pagination__arrow-left")&&(H-=1,O.pageNum=H,Y(),R(O.query).then(I),X(),U(),B()),a.classList.contains("pagination__arrow-right")&&(H+=1,O.pageNum=H,Y(),R(O.query).then(I),X(),U(),B())}))},r=n[Symbol.iterator]();!(t=(e=r.next()).done);t=!0)o(0,e)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function X(){if(C<6){1!=H&&(A+='<button class="pagination__arrow-left js-arrow">'.concat(LEFT_ARROW,"</button>"));for(var n=1;n<=C;n++)A+=n===H?'<li class="pagination__btn pagination__btn-active ">'.concat(H,"</li>"):'<li class="pagination__btn ">'.concat(n,"</li>")}else if(H<4){1!=H&&(A+='<button class="pagination__arrow-left js-arrow">'.concat(F,"</button>"));for(var t=1;t<=H+2;t++)A+=t===H?'<li class="pagination__btn pagination__btn-active ">'.concat(H,"</li>"):'<li class="pagination__btn ">'.concat(t,"</li>");A+='<li class="pagination__btn pagination__points">...</li>',A+='<li class="pagination__btn ">'.concat(C,"</li>"),A+='<button class="pagination__arrow-right js-arrow">'.concat(J,"</button>")}else if(H>C-3){A+='<button class="pagination__arrow-left js-arrow">'.concat(F,"</button>"),A+='<li class="pagination__btn ">1</li>',A+='<li class="pagination__btn pagination__points">...</li>';for(var a=H-2;a<=C;a+=1)A+=a===H?'<li class="pagination__btn pagination__btn-active ">'.concat(H,"</li>"):'<li class="pagination__btn ">'.concat(a,"</li>");A+=C===H?'<button class="pagination__arrow-right js-arrow pagination__arrow-hiden">'.concat(J,"</button>"):'<button class="pagination__arrow-right js-arrow">'.concat(J,"</button>")}else if(H<=C-3){A+='<button class="pagination__arrow-left js-arrow">'.concat(F,"</button>"),A+='<li class="pagination__btn ">1</li>',A+='<li class="pagination__btn pagination__points">...</li>';for(var i=H-2;i<=H+2;i+=1)A+=i===H?'<li class="pagination__btn pagination__btn-active ">'.concat(H,"</li>"):'<li class="pagination__btn ">'.concat(i,"</li>");A+='<li class="pagination__btn pagination__points">...</li>',A+='<li class="pagination__btn ">'.concat(C,"</li>"),A+='<button class="pagination__arrow-right js-arrow">'.concat(J,"</button>")}G.innerHTML=A,A=""}function Y(){G.innerHTML=""}function z(){O.fetchSearchMoviesPages(O.query).then((function(n){console.log(O.query),z=n.total_pages,C=z>500?500:z}))}P.searchForm.addEventListener("submit",(function(n){n.preventDefault(),function(n){O.query=n.currentTarget.elements.search.value,R().then(I)}(n),z(),Y(),X(),B(),U()})),E=document.querySelector(".back-to-top"),window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>=300?E.classList.remove("btn-up_hide"):E.classList.add("btn-up_hide")})),E.addEventListener("click",(function(n){n.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.9555f85e.js.map
