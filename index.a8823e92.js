!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r),r("dsadE"),r("9BNc1");var i=r("drCPS");(new(0,r("igxJ3").default)).fetchPopularMovies().then((function(e){e.results.map((function(e){var n=e.poster_path,t=e.original_title,r=e.genre_ids,o=e.release_date,d=e.id,l=r.join(", "),a=o.slice(0,4),f=(0,i.default)({poster_path:n,original_title:t,genres:l,date:a,id:d});document.querySelector(".main-content").insertAdjacentHTML("beforeend",f)}))})),r("1RG4E")}();
//# sourceMappingURL=index.a8823e92.js.map