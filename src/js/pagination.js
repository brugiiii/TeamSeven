//імпорт асинхронної функції феч з отриманням даних з сервера 
import cardTemplate from '../templates/cardTemplate.hbs';
import NewApiService from './api-servis';
const newApiService = new NewApiService();

newApiService.fetchPopularMovies().then(({ results }) => {
  results.map(result => {
    const { poster_path, original_title, genre_ids, release_date, id } = result;
    const genres = genre_ids.join(', ');
    const date = release_date.slice(0, 4);

    const mk = cardTemplate({ poster_path, original_title, genres, date, id });

    const container = document.querySelector('.main-content');
    container.insertAdjacentHTML('beforeend', mk);
  });
});

const pageMain = document.querySelector('.pagination');

let page = 2;
let total = 5;
let cardOnPage = 20;
let pagePag = pageMain;

const LEFT_ARROW = `<svg class="pagination__icon-left"></svg>`;
const RIGHT_ARROW = `<svg class="pagination__icon-rigth"></svg>`;

let markup = '';


function renderPagination(page, total, now) {
  
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
 
  }}
    renderPagination(page, total);



//add class active for <li> не працює
    const liElItem = document.querySelectorAll(".pagination__btn");
    //console.log(liElItem);
    
    let currentPage = page;
    //console.log(currentPage);
  
    if (page === currentPage) {
      liElItem.classList.add('pagination__item-active');
      
      liElItem.addEventListener('click', () => {
            
      renderPagination(); 

      let currentItemLi = document.querySelector('.pagination__btn-active');
      console.log(currentItemLi);
  
      currentItemLi.classList.remove('pagination__btn-active');
  
      liElItem.classList.add('pagination__btn-active');
    }); }
       
 //лічильник який маэ переключати номерацію при кліку на <>
const pageBtnArrow = document.querySelector('button');
  pageMain.addEventListener('click', () => {
   
  if (pageBtnArrow.classList.contains('pagination__arrow-left')) {currentPage = page - 1};

  if (pageBtnArrow.classList.contains('pagination__arrow-right')) {currentPage = page + 1};

   if (pageBtnArrow.classList.contains('pagination__btn')){
    currentPage = Number.textContent.pageBtnArrow
    
  } console.log( currentPage ) 
     
});
