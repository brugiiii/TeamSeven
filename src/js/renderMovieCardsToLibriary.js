import {
  renderMovieCardsToQueue,
  renderMovieCardsToWatched,
} from './pagination';

const refs = {
  queueBtn: document.querySelectorAll('.header__btn-queue')[0],
  watchedBtn: document.querySelectorAll('.header__btn-watched')[0],
  watchedBtnMobile: document.querySelectorAll('.header__btn-watched')[1],
  queueBtnMobile: document.querySelectorAll('.header__btn-queue')[1],
};

refs.queueBtn.addEventListener('click', renderMovieCardsToQueueCategory);
refs.watchedBtn.addEventListener('click', renderMovieCardsToWatchedCategory);
refs.watchedBtnMobile.addEventListener(
  'click',
  renderMovieCardsToWatchedCategory
);
refs.queueBtnMobile.addEventListener('click', renderMovieCardsToQueueCategory);

renderMovieCardsToQueue();

function renderMovieCardsToQueueCategory() {
  refs.queueBtn.classList.add('header__btn-category--current');
  refs.watchedBtn.classList.remove('header__btn-category--current');
  refs.queueBtnMobile.classList.add('header__btn-category--current');
  refs.watchedBtnMobile.classList.remove('header__btn-category--current');
  renderMovieCardsToQueue();
}

function renderMovieCardsToWatchedCategory() {
  refs.queueBtn.classList.remove('header__btn-category--current');
  refs.watchedBtn.classList.add('header__btn-category--current');
  refs.queueBtnMobile.classList.remove('header__btn-category--current');
  refs.watchedBtnMobile.classList.add('header__btn-category--current');

  renderMovieCardsToWatched();
}
