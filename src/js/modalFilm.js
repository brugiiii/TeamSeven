import { refs } from './refs';

refs.galleryList.addEventListener('click', onCardClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdropModalFilm.addEventListener('click', onBackdropClose);

function onCardClick(e) {
  e.preventDefault();

  if (e.target.nodeName === 'IMG' || e.target.nodeName === 'P') {
    refs.modal.classList.toggle('is-hidden');
    refs.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onEscKeyPress);
  }
}

//----- Закриття модалки
export function onCloseModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.body.style.overflow = '';
  document.removeEventListener('keydown', onEscKeyPress);
}
//----- Закриття модалки по бекдропу
function onBackdropClose(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
//----- Закриття модалки по Esc
function onEscKeyPress(e) {
  if (e.key === 'Escape') {
    onCloseModal();
  }
}
