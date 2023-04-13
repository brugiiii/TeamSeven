//імпорт асинхронної функції феч з отриманням даних з сервера 
import cardTemplate from '../templates/cardTemplate.hbs'
import NewApiService from './api-servis'
import {onInputForm} from './searchByKeyword'
const newApiService = new NewApiService()

let page = 1;
let total = 20;

let markup = '';
const LEFT_ARROW = `<svg class="pagination__icon-left"></svg>`;
const RIGHT_ARROW = `<svg class="pagination__icon-rigth"></svg>`;

const pagePag = document.querySelector('.pagination');
const pageMainContent = document.querySelector('.main-content');
const searchForm = document.querySelector('.header__search');

totalAll()
mainContent();
renderPagination(page, total);
addListener();
switchArrow();


//перемикач по кліку на цифри
 function addListener(){
  const liElItems = document.querySelectorAll(".pagination__btn");
  for (const liElItem of liElItems) {
    
    if (liElItem.classList.contains("pagination__points")){
      continue;
    }
    liElItem.addEventListener('click', (e) =>{
      pageNum(liElItem.textContent*1)
      newApiService.pageNum = page;
      reseter();
      mainContent();
      renderPagination(page, total);
      addListener(liElItems);
      switchArrow ();
    })
  }  searchForm.addEventListener('submit', (e) =>{ //перемикач по кліку на цифри, запуск пагінації після пошуку по слову
      pageNum(liElItem.textContent*1)
      newApiService.pageNum = page;
      reseter();
      onInputForm();
      renderPagination(page, total);
      addListener(liElItems);
      switchArrow ();
  }); 
}

//перемикач по кліку на <>
function switchArrow (){
  const jsBtnArrows = document.querySelectorAll(".js-arrow");
  
  for (const jsBtnArrow of jsBtnArrows){
    jsBtnArrow.addEventListener ('click', (e) => {
  
      if (jsBtnArrow.classList.contains("pagination__arrow-left")) {
        page = page - 1;
        newApiService.pageNum = page;
        reseter();
        mainContent();
        renderPagination(page, total);
        switchArrow ();
        addListener();
      };
      
      if (jsBtnArrow.classList.contains("pagination__arrow-right")) {
        page = page + 1
        newApiService.pageNum = page;
        reseter();
        mainContent();
        renderPagination(page, total);
        switchArrow ();
        addListener();
      };
    }); 
  }  
}

// відбудова карток
function mainContent () {
  const pageMainContent = document.querySelector('.main-content');
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
} 

//відбудова кнопок
function renderPagination(page, total) { 
  
  if (total < 6) {
    if (page != 1) {
      markup += `<button class="pagination__arrow-left js-arrow">${LEFT_ARROW}</button>`;
    }
    for (let p = 1; p <= total; p++) {
      console.log(total)
      if (p === page) {
        markup += `<li class="pagination__btn pagination__btn-active ">${page}</li>`;
      } else {
      markup += `<li class="pagination__btn ">${p}</li>`
      } 
    }
  } else {
    if (page < 4) {
      if (page != 1) {
       markup += `<button class="pagination__arrow-left js-arrow">${LEFT_ARROW}</button>`;
      }
      for (let p = 1; p <= page + 2; p++) {
        if (p === page) {
          markup += `<li class="pagination__btn pagination__btn-active ">${page}</li>`;
        } else {
        markup += `<li class="pagination__btn ">${p}</li>`
        }        
      }
      markup += `<li class="pagination__btn pagination__points">...</li>`;
      markup += `<li class="pagination__btn ">${total}</li>`;
      markup += `<button class="pagination__arrow-right js-arrow">${RIGHT_ARROW}</button>`;
    } else {
      if (page > total - 3) {
          markup += `<button class="pagination__arrow-left js-arrow">${LEFT_ARROW}</button>`;
          markup += `<li class="pagination__btn ">1</li>`;
          markup += `<li class="pagination__btn pagination__points">...</li>`;
        for (let p = page-2; p <= total; p=p+1) {
          if (p === page) {
            markup += `<li class="pagination__btn pagination__btn-active ">${page}</li>`;
          } else {
            markup += `<li class="pagination__btn ">${p}</li>`;
          }        
        } 
        if (total === page){
            markup += `<button class="pagination__arrow-right js-arrow pagination__arrow-hiden">${RIGHT_ARROW}</button>`;
        } else {
            markup += `<button class="pagination__arrow-right js-arrow">${RIGHT_ARROW}</button>`;
        }
      } else {
        if (page <= total - 3) {
            markup += `<button class="pagination__arrow-left js-arrow">${LEFT_ARROW}</button>`;
            markup += `<li class="pagination__btn ">1</li>`;
            markup += `<li class="pagination__btn pagination__points">...</li>`;
          for (let p = page-2; p <= page+2; p=p+1){
            if (p === page) {
              markup += `<li class="pagination__btn pagination__btn-active ">${page}</li>`;
            } else {
              markup += `<li class="pagination__btn ">${p}</li>`;
              }
          }
            markup += `<li class="pagination__btn pagination__points">...</li>`;
            markup += `<li class="pagination__btn ">${total}</li>`;
            markup += `<button class="pagination__arrow-right js-arrow">${RIGHT_ARROW}</button>`;   
        } 
      } 
    }
  }
  pagePag.innerHTML = markup
  markup = "";
}

//очистка
function reseter(){
  pagePag.innerHTML = '';
  pageMainContent.innerHTML = ''; 
}

//оновлення нумерації по 'click'
function pageNum(newPage) {
  page = newPage;
}

//функція додавання № кінцевої сторінки
function totalAll() {
  newApiService.fetchPopularMovies().then(res => {
    totalAll = res.total_pages;
    totalPage(totalAll)
  })

  function totalPage() {
    if (totalAll > 500) {
      total = 500
    } else {total = totalAll}
  }
} 

