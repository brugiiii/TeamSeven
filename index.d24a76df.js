function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r("8emQL"),r("c9UGP");var i=r("c9UGP"),o=r("krGWQ"),s=r("gkCWX"),l=r("2shzp");var c=r("c72bu");!async function(){const e=(await(0,l.default)("https://api.themoviedb.org/3/genre/movie/list?api_key=90c7ff0c6a89140d8ec65b5296dfcca2")).data.genres;localStorage.setItem("genres",JSON.stringify(e))}(),(0,s.fetchTrendingMovies)().then(i.renderMoviesMarkup),o.refs.galleryList.addEventListener("click",c.onGalleryItemClick),r("lgntT");var d=r("iQIUW"),g=r("fb9GJ"),f=r("gjiCh"),p=(o=r("krGWQ"),r("8emQL"));o.refs.moviesSearchForm.addEventListener("submit",(async function(t){t.preventDefault(),(0,f.startLoader)(),u.resetPage();const{query:a}=t.target.elements,n=a.value.trim();if(u.query=n,""===n)return d.Notify.info("Enter something"),void(0,f.stopLoader)();{(0,f.startLoader)();try{u.fetchMoviesByName().then(r);new(e(g))("pagination",{totalItems:500,itemsPerPage:10,visiblePages:5,page:1}).on("beforeMove",(e=>{const t=e.page;u.page=t,u.fetchMoviesByName().then(r)}))}catch(i){console.log(i)}function r(e){try{pageNumber=e.data.page;const t=e.data.results,a=JSON.parse(localStorage.getItem("genres")),n=t.map((({poster_path:e,title:t,genre_ids:n,id:r,release_date:i})=>{const o=n.length,s=i.split("").splice(0,4).join("");let l="";const c=e?`https://image.tmdb.org/t/p/w500${e}`:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",d=e?`https://image.tmdb.org/t/p/w500${e} 1x, https://image.tmdb.org/t/p/w1280${e} 2x`:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg";return 1===o?l=m(a,n[0]):2===o?l=`${m(a,n[0])}, ${m(a,n[1])}`:o>2&&(l=`${m(a,n[0])}, ${m(a,n[1])}, Other`),`<li class="film-card" >\n      <a href="modal-film.html" class="film-card__link" >\n        <div class="film-card__img">\n          <img src="${c}" alt="${t}" srcset="${d}" loading="lazy" data-id="${r}"/>\n        </div>\n        <div class="film-card__info">\n          <p class="film-card__title">${t}</p>\n          <p class="film-card__description">${l} | ${s}</p>\n        </div>\n      </a>\n    </li>`})).join("");o.refs.galleryList.innerHTML=n,(0,f.stopLoader)()}catch(e){console.log(e)}}}}));function m(e,t){try{const a=e.find((e=>e.id===t));if(a)return a.name}catch(e){console.log(e)}}const u=new(0,p.MoviesServiceByName)({page:1,searchQuery:""});r("gjiCh"),r("dmm04"),r("ccluG"),r("1VOaQ"),r("hanWB"),r("4MLyg"),r("37v9V");
//# sourceMappingURL=index.d24a76df.js.map
