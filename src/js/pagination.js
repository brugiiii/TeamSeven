//імпорт асинхронної функції феч з отриманням даних з сервера 
/* import NewApiService from './renderCards.js '; 
import NewApiService from './api-servis';
const newApiService = new NewApiService();
*/

const pageMain = document.querySelector('.pagination');
const pagePagLib = document.querySelector('.pagination-lib');


let page = 2;
let total = 5;
let cardOnPage = 20;
let pagePag = pageMain;

const LEFT_ARROW = `<svg class="pagination__icon-left"></svg>`;
const RIGHT_ARROW = `<svg class="pagination__icon-rigth"></svg>`;

let markup = '';


function renderPagination(page, total, now) {
  
  pagePag = now ? pageMain : pagePagLib;
  currentNow = now;

  if (console.log(total < 6)) {
    if (page != 1) {
      markup += `<button class="pagination__arrow-left">${LEFT_ARROW}</button>`;
    }
    for (let p = 1; p <= total; p++) {
      if (p === page) {
        markup += `<li class="pagination__btn pagination__btn-active ">${page}</li>`;
      } else {
      markup += `<li class="pagination__btn ">${p}</li>`
      } 
    }
  } else {
    if (page < 4) {
      if (page != 1) {
       markup += `<button class="pagination__arrow-left">${LEFT_ARROW}</button>`;
      }
      for (let p = 1; p <= page + 2; p++) {
        if (p === page) {
          markup += `<li class="pagination__btn pagination__btn-active ">${page}</li>`;
        } else {
        markup += `<li class="pagination__btn ">${p}</li>`
        }        
      }
      markup += `<li class="pagination__btn pagination__points">...</li>`;
      markup += `<li class="pagination__btn pagination__last">${total}</li>`;
      markup += `<button class="pagination__arrow-right ">${RIGHT_ARROW}</button>`;
    } else {
        if (page > total - 3) {
          markup += `<button class="pagination__arrow-left">${LEFT_ARROW}</button>`;
          markup += `<li class="pagination__btn ">1</li>`;
          markup += `<li class="pagination__btn pagination__points">...</li>`;
          for (let p = page-2; p <= total; p=p+1) {
            if (p === page) {
              markup += `<li class="pagination__btn pagination__btn-active ">${page}</li>`;
            } else {
            markup += `<li class="pagination__btn ">${p}</li>`;
              }        
          } if (total === page){
            markup += `<button class="pagination__arrow-right pagination__arrow-hiden">${RIGHT_ARROW}</button>`;
            } else {
            markup += `<button class="pagination__arrow-right ">${RIGHT_ARROW}</button>`;
              }
        } else {
          if (page <= total - 3) {
            markup += `<button class="pagination__arrow-left">${LEFT_ARROW}</button>`;
            markup += `<li class="pagination__btn ">1</li>`;
            markup += `<li class="pagination__btn pagination__points">...</li>`;
            for (let p = page-2; p <= page+2; p=p+1){
              if (p === page) {
                markup += `<li class="pagination__btn pagination__btn-active ">${page}</li>`;
              } else {
              markup += `<li class="pagination__btn ">${p}</li>`;
                }
            } markup += `<li class="pagination__btn pagination__points">...</li>`;
              markup += `<li class="pagination__btn pagination__last">${total}</li>`;
              markup += `<button class="pagination__arrow-right ">${RIGHT_ARROW}</button>`;   
          } 
        } 
      } 

  pagePag.innerHTML = markup;

  //add class active for <li>
  const liElItem = document.querySelectorAll('li');
  console.log(liElItem)
  if (page == markup) liEl.classList.add('pagination__item--active');

  liElItem.addEventListener('click', () => {
    currentPage = page
    displayList(postsData, rows, currentPage)

    let currentItemLi = document.querySelector('li.pagination__btn-active');
    currentItemLi.classList.remove('pagination__btn-active');

    liEl.classList.add('pagination__btn-active');
  });
  }}
    renderPagination(page, total)


