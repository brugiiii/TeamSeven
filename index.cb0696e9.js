var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("1VOaQ"),r("lxQoS");var o=r("gh9Wa");(new(0,r("fgrH9").default)).fetchPopularMovies().then((({results:e})=>{e.map((e=>{const{poster_path:t,original_title:n,genre_ids:r,release_date:i,id:l}=e,a=r.join(", "),d=i.slice(0,4),s=(0,o.default)({poster_path:t,original_title:n,genres:a,date:d,id:l});document.querySelector(".main-content").insertAdjacentHTML("beforeend",s)}))})),r("lcIK4");
//# sourceMappingURL=index.cb0696e9.js.map
