var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in n){var a=n[t];delete n[t];var o={id:t,exports:{}};return i[t]=o,a.call(o.exports,o,o.exports),o.exports}var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(t,i){n[t]=i},t.parcelRequired7c6=a),a("1VOaQ"),a("lxQoS");var o=a("gh9Wa");(new(0,a("fgrH9").default)).fetchPopularMovies().then((({results:t})=>{t.map((t=>{const{poster_path:i,original_title:n,genre_ids:a,release_date:e,id:l}=t,s=a.join(", "),_=e.slice(0,4),g=(0,o.default)({poster_path:i,original_title:n,genres:s,date:_,id:l});document.querySelector(".main-content").insertAdjacentHTML("beforeend",g)}))})),a("lcIK4");o=a("gh9Wa");(new(0,a("fgrH9").default)).fetchPopularMovies().then((({results:t})=>{t.map((t=>{const{poster_path:i,original_title:n,genre_ids:a,release_date:e,id:l}=t,s=a.join(", "),_=e.slice(0,4),g=(0,o.default)({poster_path:i,original_title:n,genres:s,date:_,id:l});document.querySelector(".main-content").insertAdjacentHTML("beforeend",g)}))}));const e=document.querySelector(".pagination");console.log(5);let l=e;let s="";!function(t,i,n){if(console.log(i<6)){1!=t&&(s+='<button class="pagination__arrow-left"><svg class="pagination__icon-left"></svg></button>');for(let n=1;n<=i;n++)s+=n===t?`<li class="pagination__btn pagination__btn-active ">${t}</li>`:`<li class="pagination__btn ">${n}</li>`}else{if(t<4){1!=t&&(s+='<button class="pagination__arrow-left"><svg class="pagination__icon-left"></svg></button>');for(let i=1;i<=t+2;i++)s+=i===t?`<li class="pagination__btn pagination__btn-active ">${t}</li>`:`<li class="pagination__btn ">${i}</li>`;s+='<li class="pagination__btn pagination__points">...</li>',s+=`<li class="pagination__btn ">${i}</li>`,s+='<button class="pagination__arrow-right "><svg class="pagination__icon-rigth"></svg></button>'}else if(t>i-3){s+='<button class="pagination__arrow-left"><svg class="pagination__icon-left"></svg></button>',s+='<li class="pagination__btn ">1</li>',s+='<li class="pagination__btn pagination__points">...</li>';for(let n=t-2;n<=i;n+=1)s+=n===t?`<li class="pagination__btn pagination__btn-active ">${t}</li>`:`<li class="pagination__btn ">${n}</li>`;s+=i===t?'<button class="pagination__arrow-right pagination__arrow-hiden"><svg class="pagination__icon-rigth"></svg></button>':'<button class="pagination__arrow-right "><svg class="pagination__icon-rigth"></svg></button>'}else if(t<=i-3){s+='<button class="pagination__arrow-left"><svg class="pagination__icon-left"></svg></button>',s+='<li class="pagination__btn ">1</li>',s+='<li class="pagination__btn pagination__points">...</li>';for(let i=t-2;i<=t+2;i+=1)s+=i===t?`<li class="pagination__btn pagination__btn-active ">${t}</li>`:`<li class="pagination__btn ">${i}</li>`;s+='<li class="pagination__btn pagination__points">...</li>',s+=`<li class="pagination__btn ">${i}</li>`,s+='<button class="pagination__arrow-right "><svg class="pagination__icon-rigth"></svg></button>'}l.innerHTML=s}}(5,20),liElItems[0].addEventListener("click",(t=>{const i=t.currentTarget;console.log(i),5===currentPage&&(i.classList.toggle("pagination__btn-active"),i.classList.contains("pagination__btn-active")&&i.classList.remove("pagination__btn-active"),i.classList.toggle("pagination__btn-active"))}));
//# sourceMappingURL=index.f53fa94a.js.map
