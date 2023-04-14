import { onCloseModal } from './modalFilm';
import { onGalleryItemClick } from './onGalleryItemClick';
import { refs } from './refs';
import {
  renderMovieCardsToQueue,
  renderMovieCardsToWatched,
} from './pagination';

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

refs.movieModal.addEventListener('click', onModalButtonClick);

const queueCategoryBtn = document.querySelectorAll('.header__btn-queue')[0];
const watchedCategoryBtn = document.querySelectorAll('.header__btn-watched')[0];

async function onModalButtonClick(e) {
  if (e.target.name !== 'watched' && e.target.name !== 'queue') {
    return;
  }

  const queueBtn = document.querySelector('.modal__btn-queue');
  const watchedBtn = document.querySelector('.modal__btn-watched');

  const buttonToAddOrRemoveMovie = e.target;
  const id = e.target.dataset.id;

  const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
  const movie = response.data;

  if (e.target.name === 'watched') {
    watchedBtn.classList.add('modal__btn--clicked');
    queueBtn.classList.remove('modal__btn--clicked');
    if (buttonToAddOrRemoveMovie.classList.contains('remove')) {
      removeMoveiFromLocalStorageItem(
        buttonToAddOrRemoveMovie,
        'watched',
        movie
      );
      if (
        document.querySelector('.libriary__gallery-list') &&
        watchedCategoryBtn.classList.contains('header__btn-category--current')
      ) {
        renderMovieCardsToWatched();
        if (
          !queueBtn.classList.contains('remove') &&
          !watchedBtn.classList.contains('remove')
        ) {
          onCloseModal();
        }
      }

      return;
    }
    addMovieToLocalStorageItem(buttonToAddOrRemoveMovie, 'watched', movie);
    if (
      document.querySelector('.libriary__gallery-list') &&
      watchedCategoryBtn.classList.contains('header__btn-category--current')
    ) {
      renderMovieCardsToWatched();
      if (
        !queueBtn.classList.contains('remove') &&
        !watchedBtn.classList.contains('remove')
      ) {
        onCloseModal();
      }
    }
  } else if (e.target.name === 'queue') {
    queueBtn.classList.add('modal__btn--clicked');
    watchedBtn.classList.remove('modal__btn--clicked');
    if (buttonToAddOrRemoveMovie.classList.contains('remove')) {
      removeMoveiFromLocalStorageItem(buttonToAddOrRemoveMovie, 'queue', movie);
      if (
        document.querySelector('.libriary__gallery-list') &&
        queueCategoryBtn.classList.contains('header__btn-category--current')
      ) {
        renderMovieCardsToQueue();
        if (
          !queueBtn.classList.contains('remove') &&
          !watchedBtn.classList.contains('remove')
        ) {
          onCloseModal();
        }
      }

      return;
    }
    addMovieToLocalStorageItem(buttonToAddOrRemoveMovie, 'queue', movie);
    if (
      document.querySelector('.libriary__gallery-list') &&
      queueCategoryBtn.classList.contains('header__btn-category--current')
    ) {
      renderMovieCardsToQueue();
      if (
        !queueBtn.classList.contains('remove') &&
        !watchedBtn.classList.contains('remove')
      ) {
        onCloseModal();
      }
    }
  }
}

function closeModal() {
  if (
    !queueBtn.classList.contains('remove') &&
    !watchedBtn.classList.contains('remove')
  ) {
    onCloseModal();
  }
}

function removeMoveiFromLocalStorageItem(
  clickedButton,
  localStorageItemName,
  selectedMovie
) {
  const arrOfMovies =
    JSON.parse(localStorage.getItem(localStorageItemName)) || [];

  const newArrOfMovies = arrOfMovies.filter(
    movieInLocalStoregeItem => selectedMovie.id !== movieInLocalStoregeItem.id
  );
  localStorage.setItem(localStorageItemName, JSON.stringify(newArrOfMovies));
  clickedButton.classList.remove('remove');
  clickedButton.textContent = `add to ${localStorageItemName}`;
}

function addMovieToLocalStorageItem(
  clickedButton,
  localStorageItemName,
  selectedMovie
) {
  const arrOfMovies =
    JSON.parse(localStorage.getItem(localStorageItemName)) || [];
  const arrOfMovieId = arrOfMovies.map(movie => movie.id);
  if (arrOfMovieId.includes(selectedMovie.id)) {
    clickedButton.textContent = `remove from ${localStorageItemName}`;
    clickedButton.classList.add('remove');
    return;
  }

  arrOfMovies.push(selectedMovie);
  localStorage.setItem(localStorageItemName, JSON.stringify(arrOfMovies));
  clickedButton.textContent = `remove from ${localStorageItemName}`;
  clickedButton.classList.add('remove');
}

export function checkIsMovieInLibrary(selectedMovieId, localStorageItemName) {
  const arrOfMoviesInQueue =
    JSON.parse(localStorage.getItem(localStorageItemName)) || [];
  const arrOfMovieIdInQueue = arrOfMoviesInQueue.map(movie => movie.id);
  let btnData = {
    text: `add to ${localStorageItemName}`,
    class: '',
  };

  if (arrOfMovieIdInQueue.includes(Number(selectedMovieId))) {
    btnData = {
      text: `remove from ${localStorageItemName}`,
      class: 'remove',
    };
  }

  return btnData;
}
