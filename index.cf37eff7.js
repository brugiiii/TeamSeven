!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},o=t.parcelRequired7c6;null==o&&((o=function(n){if(n in a)return a[n].exports;if(n in i){var t=i[n];delete i[n];var o={id:n,exports:{}};return a[n]=o,t.call(o.exports,o,o.exports),o.exports}var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(n,t){i[n]=t},t.parcelRequired7c6=o),o("dsadE"),o("9BNc1"),o("1RG4E");var e=o("8nrFW"),r=o("drCPS"),c=o("igxJ3"),s=o("9BNc1"),l=new(0,c.default);ї;var u=1,_=20,g="",p='<svg class="pagination__icon-left"></svg>',f='<svg class="pagination__icon-rigth"></svg>',d=document.querySelector(".pagination"),b=document.querySelector(".main-content");function v(){var n=document.querySelectorAll(".pagination__btn"),t=!0,a=!1,i=void 0;try{for(var o,e=function(n,t){var a=t.value;if(a.classList.contains("pagination__points"))return"continue";a.addEventListener("click",(function(n){var t;t=1*a.textContent,u=t,l.pageNum=u,y(),(0,s.ganreListProcessin)().then(w),m(),v(),h()}))},r=n[Symbol.iterator]();!(t=(o=r.next()).done);t=!0)e(0,o)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function h(){var n=document.querySelectorAll(".js-arrow"),t=!0,a=!1,i=void 0;try{for(var o,e=function(n,t){var a=t.value;a.addEventListener("click",(function(n){a.classList.contains("pagination__arrow-left")&&(u-=1,l.pageNum=u,y(),(0,s.ganreListProcessin)().then(w),m(),h(),v()),a.classList.contains("pagination__arrow-right")&&(u+=1,l.pageNum=u,y(),(0,s.ganreListProcessin)().then(w),m(),h(),v())}))},r=n[Symbol.iterator]();!(t=(o=r.next()).done);t=!0)e(0,o)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function w(t){try{l.fetchPopularMovies().then((function(a){var i=a.results.map((function(a){var i=function(n){var t=g.find((function(t){return t.id===p[n]}));f.push(t.name)},o=a.poster_path,r=a.original_title,c=a.genre_ids,l=a.release_date,u=a.id,_=l.slice(0,4);console.log(_);for(var g=n(e)(t.genres),p=c,f=[],d=0;d<p.length;d++)i(d);return{poster_path:o,original_title:r,currentGanre:f.length<s.numberOfGeneras?f.join(",  "):n(e)(f.slice(0,2)).concat(["Other"]).join(", "),date:_,id:u}})),o=(0,r.default)({mk:i});b.innerHTML=o}))}catch(n){console.error("Помилка під час отримання даних:",n)}}function m(){if(_<6){1!=u&&(g+='<button class="pagination__arrow-left js-arrow">'.concat(p,"</button>"));for(var n=1;n<=_;n++)console.log(_),g+=n===u?'<li class="pagination__btn pagination__btn-active ">'.concat(u,"</li>"):'<li class="pagination__btn ">'.concat(n,"</li>")}else if(u<4){1!=u&&(g+='<button class="pagination__arrow-left js-arrow">'.concat(p,"</button>"));for(var t=1;t<=u+2;t++)g+=t===u?'<li class="pagination__btn pagination__btn-active ">'.concat(u,"</li>"):'<li class="pagination__btn ">'.concat(t,"</li>");g+='<li class="pagination__btn pagination__points">...</li>',g+='<li class="pagination__btn ">'.concat(_,"</li>"),g+='<button class="pagination__arrow-right js-arrow">'.concat(f,"</button>")}else if(u>_-3){g+='<button class="pagination__arrow-left js-arrow">'.concat(p,"</button>"),g+='<li class="pagination__btn ">1</li>',g+='<li class="pagination__btn pagination__points">...</li>';for(var a=u-2;a<=_;a+=1)g+=a===u?'<li class="pagination__btn pagination__btn-active ">'.concat(u,"</li>"):'<li class="pagination__btn ">'.concat(a,"</li>");g+=_===u?'<button class="pagination__arrow-right js-arrow pagination__arrow-hiden">'.concat(f,"</button>"):'<button class="pagination__arrow-right js-arrow">'.concat(f,"</button>")}else if(u<=_-3){g+='<button class="pagination__arrow-left js-arrow">'.concat(p,"</button>"),g+='<li class="pagination__btn ">1</li>',g+='<li class="pagination__btn pagination__points">...</li>';for(var i=u-2;i<=u+2;i+=1)g+=i===u?'<li class="pagination__btn pagination__btn-active ">'.concat(u,"</li>"):'<li class="pagination__btn ">'.concat(i,"</li>");g+='<li class="pagination__btn pagination__points">...</li>',g+='<li class="pagination__btn ">'.concat(_,"</li>"),g+='<button class="pagination__arrow-right js-arrow">'.concat(f,"</button>")}d.innerHTML=g,g=""}function y(){d.innerHTML="",b.innerHTML=""}function L(){l.fetchPopularMovies().then((function(n){L=n.total_pages,_=L>500?500:L}))}L(),(0,s.ganreListProcessin)().then(w),m(),v(),h();var S,j=o("bpxeT"),x=(e=o("8nrFW"),o("2TvXO")),q=(c=o("igxJ3"),o("4p7m4")),M=new(0,(c=o("igxJ3")).default),T=(new(0,c.default),{searchForm:document.querySelector(".header__search"),main:document.querySelector(".main-content"),wrongSearchMess:document.querySelector(".wrong-search")}),k=1,E=20,N="",P='<svg class="pagination__icon-left"></svg>',O='<svg class="pagination__icon-rigth"></svg>',H=document.querySelector(".pagination");function C(){return F.apply(this,arguments)}function F(){return(F=n(j)(n(x).mark((function t(){var a,i,o;return n(x).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=JSON.parse(localStorage.getItem("ganre-List")),n.prev=1,localStorage.getItem("ganre-List")){n.next=9;break}return n.next=5,M.fetchGenresMovies();case 5:i=n.sent,a=i,o=JSON.stringify(i),localStorage.setItem("ganre-List",o);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("ganreListProcessin",n.t0);case 14:return n.abrupt("return",a);case 15:case"end":return n.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function G(n){return J.apply(this,arguments)}function J(){return(J=n(j)(n(x).mark((function t(a){return n(x).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.fetchSearchMoviesPages().then((function(t){var i=t.results;if(T.wrongSearchMess.classList.add("visually-hidden"),i.length){var o=i.map((function(t){var i=function(n){var t=u.find((function(t){return t.id===_[n]}));g.push(t.name)},o=t.title,r=t.release_date,c=t.poster_path,s=t.genre_ids,l=t.id;r=r.slice(0,4),c="https://image.tmdb.org/t/p/w500".concat(c);for(var u=n(e)(a.genres),_=s,g=[],p=0;p<_.length;p++)i(p);var f=n(e)(g.slice(0,2)).concat(["Other"]).join(" ");return g.length<4&&(f=n(e)(g).join(" ")),{title:o,release_date:r,currentGanre:f,poster_path:c,id:l}})),r=(0,q.default)({articleStore:o});T.main.innerHTML=r}else T.wrongSearchMess.classList.remove("visually-hidden")}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("createCards",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}function A(){var n=document.querySelectorAll(".pagination__btn"),t=!0,a=!1,i=void 0;try{for(var o,e=function(n,t){var a=t.value;if(a.classList.contains("pagination__points"))return"continue";a.addEventListener("click",(function(n){var t;t=1*a.textContent,k=t,M.pageNum=k,R(),C(M.query).then(G),I(),A(),D()}))},r=n[Symbol.iterator]();!(t=(o=r.next()).done);t=!0)e(0,o)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function D(){var n=document.querySelectorAll(".js-arrow"),t=!0,a=!1,i=void 0;try{for(var o,e=function(n,t){var a=t.value;a.addEventListener("click",(function(n){a.classList.contains("pagination__arrow-left")&&(k-=1,M.pageNum=k,R(),C(M.query).then(G),I(),D(),A()),a.classList.contains("pagination__arrow-right")&&(k+=1,M.pageNum=k,R(),C(M.query).then(G),I(),D(),A())}))},r=n[Symbol.iterator]();!(t=(o=r.next()).done);t=!0)e(0,o)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function I(){if(E<6){1!=k&&(N+='<button class="pagination__arrow-left js-arrow">'.concat(P,"</button>"));for(var n=1;n<=E;n++)N+=n===k?'<li class="pagination__btn pagination__btn-active ">'.concat(k,"</li>"):'<li class="pagination__btn ">'.concat(n,"</li>")}else if(k<4){1!=k&&(N+='<button class="pagination__arrow-left js-arrow">'.concat(P,"</button>"));for(var t=1;t<=k+2;t++)N+=t===k?'<li class="pagination__btn pagination__btn-active ">'.concat(k,"</li>"):'<li class="pagination__btn ">'.concat(t,"</li>");N+='<li class="pagination__btn pagination__points">...</li>',N+='<li class="pagination__btn ">'.concat(E,"</li>"),N+='<button class="pagination__arrow-right js-arrow">'.concat(O,"</button>")}else if(k>E-3){N+='<button class="pagination__arrow-left js-arrow">'.concat(P,"</button>"),N+='<li class="pagination__btn ">1</li>',N+='<li class="pagination__btn pagination__points">...</li>';for(var a=k-2;a<=E;a+=1)N+=a===k?'<li class="pagination__btn pagination__btn-active ">'.concat(k,"</li>"):'<li class="pagination__btn ">'.concat(a,"</li>");N+=E===k?'<button class="pagination__arrow-right js-arrow pagination__arrow-hiden">'.concat(O,"</button>"):'<button class="pagination__arrow-right js-arrow">'.concat(O,"</button>")}else if(k<=E-3){N+='<button class="pagination__arrow-left js-arrow">'.concat(P,"</button>"),N+='<li class="pagination__btn ">1</li>',N+='<li class="pagination__btn pagination__points">...</li>';for(var i=k-2;i<=k+2;i+=1)N+=i===k?'<li class="pagination__btn pagination__btn-active ">'.concat(k,"</li>"):'<li class="pagination__btn ">'.concat(i,"</li>");N+='<li class="pagination__btn pagination__points">...</li>',N+='<li class="pagination__btn ">'.concat(E,"</li>"),N+='<button class="pagination__arrow-right js-arrow">'.concat(O,"</button>")}H.innerHTML=N,N=""}function R(){H.innerHTML=""}function B(){M.fetchSearchMoviesPages(M.query).then((function(n){B=n.total_pages,E=B>500?500:B}))}T.searchForm.addEventListener("submit",(function(n){n.preventDefault(),function(n){M.query=n.currentTarget.elements.search.value,C().then(G)}(n),B(),R(),I(),A(),D()})),S=document.querySelector(".back-to-top"),window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>=300?S.classList.remove("btn-up_hide"):S.classList.add("btn-up_hide")})),S.addEventListener("click",(function(n){n.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.cf37eff7.js.map
