import apiServer from './api-servis';
import searchRenderBox from '../templates/searchRenger.hbs';
import NewApiService from './api-servis';
const apiServise = new apiServer();
const newApiService = new NewApiService();

const numberOfGeneras = 4;
const refs = {
  searchForm: document.querySelector('.header__search'),
  main: document.querySelector('.main-content'),
  wrongSearchMess: document.querySelector('.wrong-search'),
};

let pageS = 1;
let totalS = 20;
let markupS = '';
const LEFT_ARROWS = `<svg class="pagination__icon-left"></svg>`;
const RIGHT_ARROWS = `<svg class="pagination__icon-rigth"></svg>`;
const pagePag = document.querySelector('.pagination');
//const pageMainContent = document.querySelector('.main-content');

refs.searchForm.addEventListener('submit', onClickSubmit);

function onClickSubmit(e) {
  e.preventDefault();
  onInputForm(e);
  totalAllS();
  reseterS();
  renderPaginationS(pageS, totalS);
  addListenerS();
  switchArrowS();
}

function onInputForm(e) {
  apiServise.query = e.currentTarget.elements.search.value;
  ganreListProcessin().then(createCards);
}

async function ganreListProcessin() {
  let comparisonList = JSON.parse(localStorage.getItem('ganre-List'));
  try {
    if (!localStorage.getItem('ganre-List')) {
      const ganres = await apiServise.fetchGenresMovies();
      comparisonList = ganres;
      const localStorageJson = JSON.stringify(ganres);
      localStorage.setItem('ganre-List', localStorageJson);
    }
  } catch (error) {
    console.log('ganreListProcessin', error);
  }
  return comparisonList;
}

//відбудова карток
async function createCards(genresBase) {
  try {
    await apiServise.fetchSearchMoviesPages().then(({ results }) => {
      refs.wrongSearchMess.classList.add('visually-hidden');
      if (!results.length) {
        refs.wrongSearchMess.classList.remove('visually-hidden');
        return;
      }
      const articleStore = results.map(
        ({ title, release_date, poster_path, genre_ids, id }) => {
          release_date = release_date.slice(0, 4);

          poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
          const genres = [...genresBase.genres];
          const genreIds = genre_ids;
          let genresNames = [];
          const other = 'Other';
          for (let i = 0; i < genreIds.length; i++) {
            const genre = genres.find(g => g.id === genreIds[i]);
            genresNames.push(genre.name);
          }
          let currentGanre = [...genresNames.slice(0, 2), other].join(' ');
          if (genresNames.length < numberOfGeneras) {
            currentGanre = [...genresNames].join(' ');
          }
          return { title, release_date, currentGanre, poster_path, id };
        }
      );
      const markup = searchRenderBox({ articleStore });
      refs.main.innerHTML = markup;
    });
  } catch (error) {
    console.log('createCards', error);
  }
}

//перемикач по кліку на цифри
function addListenerS() {
  const liElItemsS = document.querySelectorAll('.pagination__btn');
  for (const liElItem of liElItemsS) {
    if (liElItem.classList.contains('pagination__points')) {
      continue;
    }
    liElItem.addEventListener('click', e => {
      pageNum(liElItem.textContent * 1);
      apiServise.pageNum = pageS;
      reseterS();
      ganreListProcessin(apiServise.query).then(createCards);
      renderPaginationS(pageS, totalS);
      addListenerS();
      switchArrowS();
    });
  }
}

//перемикач по кліку на <>
function switchArrowS() {
  const jsBtnArrows = document.querySelectorAll('.js-arrow');

  for (const jsBtnArrow of jsBtnArrows) {
    jsBtnArrow.addEventListener('click', e => {
      if (jsBtnArrow.classList.contains('pagination__arrow-left')) {
        pageS = pageS - 1;
        apiServise.pageNum = pageS;
        reseterS();
        ganreListProcessin(apiServise.query).then(createCards);
        renderPaginationS(pageS, totalS);
        switchArrowS();
        addListenerS();
      }

      if (jsBtnArrow.classList.contains('pagination__arrow-right')) {
        pageS = pageS + 1;
        apiServise.pageNum = pageS;
        reseterS();
        ganreListProcessin(apiServise.query).then(createCards);
        renderPaginationS(pageS, totalS);
        switchArrowS();
        addListenerS();
      }
    });
  }
}

//відбудова кнопок
function renderPaginationS() {
  if (totalS < 6) {
    if (pageS != 1) {
      markupS += `<button class="pagination__arrow-left js-arrow">${LEFT_ARROWS}</button>`;
    }
    for (let p = 1; p <= totalS; p++) {
      if (p === pageS) {
        markupS += `<li class="pagination__btn pagination__btn-active ">${pageS}</li>`;
      } else {
        markupS += `<li class="pagination__btn ">${p}</li>`;
      }
    }
  } else {
    if (pageS < 4) {
      if (pageS != 1) {
        markupS += `<button class="pagination__arrow-left js-arrow">${LEFT_ARROWS}</button>`;
      }
      for (let p = 1; p <= pageS + 2; p++) {
        if (p === pageS) {
          markupS += `<li class="pagination__btn pagination__btn-active ">${pageS}</li>`;
        } else {
          markupS += `<li class="pagination__btn ">${p}</li>`;
        }
      }
      markupS += `<li class="pagination__btn pagination__points">...</li>`;
      markupS += `<li class="pagination__btn ">${totalS}</li>`;
      markupS += `<button class="pagination__arrow-right js-arrow">${RIGHT_ARROWS}</button>`;
    } else {
      if (pageS > totalS - 3) {
        markupS += `<button class="pagination__arrow-left js-arrow">${LEFT_ARROWS}</button>`;
        markupS += `<li class="pagination__btn ">1</li>`;
        markupS += `<li class="pagination__btn pagination__points">...</li>`;
        for (let p = pageS - 2; p <= totalS; p = p + 1) {
          if (p === pageS) {
            markupS += `<li class="pagination__btn pagination__btn-active ">${pageS}</li>`;
          } else {
            markupS += `<li class="pagination__btn ">${p}</li>`;
          }
        }
        if (totalS === pageS) {
          markupS += `<button class="pagination__arrow-right js-arrow pagination__arrow-hiden">${RIGHT_ARROWS}</button>`;
        } else {
          markupS += `<button class="pagination__arrow-right js-arrow">${RIGHT_ARROWS}</button>`;
        }
      } else {
        if (pageS <= totalS - 3) {
          markupS += `<button class="pagination__arrow-left js-arrow">${LEFT_ARROWS}</button>`;
          markupS += `<li class="pagination__btn ">1</li>`;
          markupS += `<li class="pagination__btn pagination__points">...</li>`;
          for (let p = pageS - 2; p <= pageS + 2; p = p + 1) {
            if (p === pageS) {
              markupS += `<li class="pagination__btn pagination__btn-active ">${pageS}</li>`;
            } else {
              markupS += `<li class="pagination__btn ">${p}</li>`;
            }
          }
          markupS += `<li class="pagination__btn pagination__points">...</li>`;
          markupS += `<li class="pagination__btn ">${totalS}</li>`;
          markupS += `<button class="pagination__arrow-right js-arrow">${RIGHT_ARROWS}</button>`;
        }
      }
    }
  }
  pagePag.innerHTML = markupS;
  markupS = '';
}

//оновлення нумерації по 'click'
function pageNum(newPage) {
  pageS = newPage;
}

//очистка
function reseterS() {
  pagePag.innerHTML = '';
}

//функція додавання № кінцевої сторінки
function totalAllS() {
  apiServise.fetchSearchMoviesPages(apiServise.query).then(res => {
    totalAllS = res.total_pages;
    totalPageS(totalAllS);
  });

  function totalPageS() {
    if (totalAllS > 500) {
      totalS = 500;
    } else {
      totalS = totalAllS;
    }
  }
}
