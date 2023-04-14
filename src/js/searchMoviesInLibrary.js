import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../sass/components/_my-library.scss';
import '../sass/components/_img-library.scss';
import { refs } from './refs';

const librarySearchFormRef = document.querySelector('#library_submit');

const paginationElement = document.getElementById('pagination');

const queueBtn = document.querySelector('.header__btn-queue');
const watchedBtn = document.querySelector('.header__btn-watched');

const arrOfMoviesInQueue = JSON.parse(localStorage.getItem('queue')) || [];

if (arrOfMoviesInQueue.length === 0) {
  librarySearchFormRef.elements[0].disabled = true;
  librarySearchFormRef.elements[1].disabled = true;
}

document.addEventListener('click', checkIsFormMustBeDisabled);

export function checkIsFormMustBeDisabled() {
  const librarySearchFormRef = document.querySelector('#library_submit');
  const arrOfMoviesInQueue = JSON.parse(localStorage.getItem('queue')) || [];
  const arrOfMoviesInWatched =
    JSON.parse(localStorage.getItem('watched')) || [];
  if (
    queueBtn.classList.contains('header__btn-category--current') &&
    arrOfMoviesInQueue.length !== 0
  ) {
    librarySearchFormRef.elements[0].disabled = false;
    librarySearchFormRef.elements[1].disabled = false;
  } else if (
    watchedBtn.classList.contains('header__btn-category--current') &&
    arrOfMoviesInWatched.length !== 0
  ) {
    librarySearchFormRef.elements[0].disabled = false;
    librarySearchFormRef.elements[1].disabled = false;
  } else {
    librarySearchFormRef.elements[0].disabled = true;
    librarySearchFormRef.elements[1].disabled = true;
  }
}

librarySearchFormRef.addEventListener('submit', onLibrarySearchFormSubmit);

function onLibrarySearchFormSubmit(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.query.value;

  if (queueBtn.classList.contains('header__btn-category--current')) {
    searchMovieInLibrary(searchQuery, 'queue');
  } else if (watchedBtn.classList.contains('header__btn-category--current')) {
    searchMovieInLibrary(searchQuery, 'watched');
  }
  refs.moviesSearchForm.reset();
}

function searchMovieInLibrary(searchQuery, localStorageItem) {
  const arrOfMoviesInLibrary =
    JSON.parse(localStorage.getItem(localStorageItem)) || [];
  const arrOfQueryMovies = arrOfMoviesInLibrary.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  refs.galleryList.innerHTML = `<li class="img-library"><span class="text-library">there are no similar films in this category</span></li>`;

  if (searchQuery.trim() === '') {
    paginationElement.style.display = 'none';
    refs.galleryList.innerHTML = `<li class="img-library"><span class="text-library">The search query should not be empty</span></li>`;
    return;
  }

  if (arrOfQueryMovies.length === 0) {
    paginationElement.style.display = 'none';
    refs.galleryList.innerHTML = `<li class="img-library"><span class="text-library">There are no similar movies in this category</span></li>`;
    return;
  }

  renderMovieCards(arrOfQueryMovies);
  paginationElement.style.display = 'flex';
}

function renderMovieCards(arrOfQueryMovies) {
  let arrOfMovies = arrOfQueryMovies || [];

  if (arrOfMovies.length === 0) {
    const ul = document.querySelector('.gallery-list');
    const markup = `<li class="img-library"><span class="text-library">Please select a movie on the main page</span></li>`;
    ul.innerHTML = markup;
  } else {
    const DEFAULT_POSTER_URL =
      'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

    const itemsPerPage = 20;
    const totalItems = arrOfMovies.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const ul = document.querySelector('.gallery-list');

    // Create the pagination instance and attach the event listener
    const paginationElement = document.getElementById('pagination');

    const pagination = new Pagination(paginationElement, {
      totalItems: totalItems,
      itemsPerPage: itemsPerPage,
      visiblePages: 5,
      page: 1,
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',

        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
      usageStatistics: false,
    });
    pagination.on('afterMove', function (eventData) {
      ul.innerHTML = '';

      const startIdx = (eventData.page - 1) * itemsPerPage;
      const endIdx = startIdx + itemsPerPage;

      const data = arrOfMovies;

      const moviesArray = data.slice(startIdx, endIdx);

      const IMG_URL = 'https://image.tmdb.org/t/p/w500';
      const markup = moviesArray
        .map(({ poster_path, title, genres, id, release_date }) => {
          const date = release_date.split('').splice(0, 4).join('');
          let genresToShow = '';
          const genresCount = genres.length;
          const posterUrl = poster_path
            ? `${IMG_URL}${poster_path}`
            : DEFAULT_POSTER_URL;

          if (genresCount === 1) {
            genresToShow = `${genres[0].name}`;
          } else if (genresCount === 2) {
            genresToShow = `${genres[0].name}, ${genres[1].name}`;
          } else if (genresCount > 2) {
            genresToShow = `${genres[0].name}, ${genres[1].name}, other`;
          }

          return `<li class="film-card">
      <a href="modal-film.html" class="film-card__link" >
        <div class="film-card__img">
          <img src="${posterUrl}" alt="${title}" loading="lazy" data-id="${id}"/>
        </div>
        <div class="film-card__info">
          <p class="film-card__title">${title}</p>
          <p class="film-card__description">${genresToShow} | ${date}</p>
        </div>
      </a>
    </li>`;
        })
        .join('');

      refs.galleryList.innerHTML = markup;
    });

    // Load the first page when the page is loaded
    pagination.movePageTo(1);
  }
}
