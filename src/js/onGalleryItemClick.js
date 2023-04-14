import { checkIsMovieInLibrary } from './addMovieToLibriary';
import { refs } from './refs';
import axios from 'axios';
import { onTrailerBtnClick } from './trailer';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const IMG_URL_RETINA = 'https://image.tmdb.org/t/p/w1280';

const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

refs.galleryList.addEventListener('click', onGalleryItemClick);
async function onGalleryItemClick(e) {
  try {
    if (e.target.nodeName !== 'P' && e.target.nodeName !== 'IMG') {
      return;
    }

    const id = e.target.closest('IMG').dataset.id;
    const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
    const {
      poster_path,
      title,
      vote_average,
      vote_count,
      popularity,
      original_title,
      genres,
      overview,
    } = response.data;
    const posterUrl = poster_path
      ? `${IMG_URL}${poster_path}`
      : DEFAULT_POSTER_URL;
    const srcsetChecked = poster_path
      ? `${IMG_URL}${poster_path} 1x, ${IMG_URL_RETINA}${poster_path} 2x`
      : DEFAULT_POSTER_URL;
    const movieMarkup = `<div class="modal__card-thumb">
    <img class="modal__image" src="${posterUrl}" srcset="${srcsetChecked}" alt="film-image" />
    <div class="trailer-overlay">
    <button
      class="trailer-btn"
      type="button"
    ></button>
  </div>
</div>
<div class="modal__info">
  <h2 class="modal__title">${title}</h2>
  
    <ul class="modal__list">
      <li class="modal__item">
        <p class="modal__list--first-list">Vote / Votes</p>
        <p>
          <span class="vote-average">${vote_average}</span><span class="modal__slash"> / </span><span
            class="vote-count"
            >${vote_count}</span
          >
        </p>
      </li>
      <li class="modal__item">
        <p class="modal__list--first-list">Popularity</p>
        <p>${popularity}</p>
      </li>
      <li class="modal__item">
        <p class="modal__list--first-list">Original Title</p>
        <p>${original_title}</p>
      </li>
      <li class="modal__item">
        <p class="modal__list--first-list">Genre</p>
        <p>${genres.map(genre => genre.name).join(', ')}</p>
      </li>
    </ul>
  
  <div>
    <h3 class="modal__subtitle">About</h3>
    <p class="modal__text">${overview}</p>
  </div>
  <div class="modal__buttons">
    <button class="modal__btn modal__btn-watched ${
      checkIsMovieInLibrary(id, 'watched').class
    }" type="button"  name="watched" data-id="${id}">
      ${checkIsMovieInLibrary(id, 'watched').text}
    </button>
    <button class="modal__btn modal__btn-queue ${
      checkIsMovieInLibrary(id, 'queue').class
    }" type="button" name="queue" data-id="${id}">
      ${checkIsMovieInLibrary(id, 'queue').text}
    </button>
  </div>
</div>
`;
    refs.movieModal.innerHTML = movieMarkup;
    const trailerBtn = refs.movieModal.querySelector('.trailer-btn');
    trailerBtn.addEventListener('click', () => onTrailerBtnClick(id));
  } catch (error) {
    console.log(error);
  }
}

export { onGalleryItemClick };
