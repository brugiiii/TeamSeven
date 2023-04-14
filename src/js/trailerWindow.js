import { refs } from './refs';

refs.trailerBackdrop.addEventListener('click', onBackdropClose);

function onCloseVideo() {
  stopVideo();
  refs.modal.classList.toggle('visually-hidden');
  refs.trailerBackdrop.classList.toggle('visually-hidden');
  refs.backdropModalFilm.removeEventListener('click', onBackdropClose);
}

function onBackdropClose(e) {
  if (e.currentTarget === e.target) {
    onCloseVideo();
  }
}

function stopVideo() {
  const trailerVideo = document.querySelector('.trailer-video');
  trailerVideo.src = '';
}
