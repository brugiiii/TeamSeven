var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("1VOaQ"),r("lxQoS"),r("lcIK4");const o={addToWatchedBtn:document.querySelector(".modal-button__primary"),addToQueueBtn:document.querySelector(".modal-button__secondary"),btnWatched:document.querySelector(".library__btn-watched"),btnQueue:document.querySelector(".library__btn-queue")},a={WATCHED:"watched",QUEUE:"queue"},d=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};var l=r("gh9Wa");function c(e){const t=document.querySelector(".main-content");t.innerHTML="",e.map((e=>{const{poster_path:n,original_title:r,genre_ids:o,release_date:a,id:d}=e,c=o,i=a.slice(0,4),u=(0,l.default)({poster_path:n,original_title:r,genres:c,date:i,id:d});t.insertAdjacentHTML("beforeend",u)}))}o.btnWatched.addEventListener("click",(()=>{c(d(a.WATCHED))})),o.btnQueue.addEventListener("click",(()=>{c(d(a.QUEUE))}));
//# sourceMappingURL=library.f1c2a99b.js.map