import NewApiService from './api-servis';
import modalTemplate from '../templates/modalTemplate.hbs';
import { storageKeys, load, save } from './localStorage';
import * as addingToStorage from './addToStorage';



const newApiService = new NewApiService();

const refs = {
  bodyEl: document.querySelector('body'),
  containerEl: document.querySelector('.main-content'),
  backdropEl: document.querySelector('.backdrop.cardModal'),


  modalEl: document.querySelector('.backdrop.cardModal .modal-content'),
  closeBtn: document.querySelector('.modal-button'),
}


refs.containerEl.addEventListener('click', onClick);

function onClick(evt) {
  const target = evt.target.nodeName;

  if (target !== 'IMG' && target !== 'P') {
    return;
  }

  const idDatas = evt.target.closest('.card-item');
  const idValue = idDatas.dataset.action;

  openModal(idValue);
}

function openModal(id) {
  newApiService.fetchPopularMovies().then(({ results }) => {
    const movie = results.find(result => result.id.toString() === id);
    if (!movie) {
      return;
    }

    const markup = modalTemplate(movie);

    refs.modalEl.innerHTML = markup;
    refs.backdropEl.classList.remove('is-hidden');

    refs.bodyEl.addEventListener('click', onBackdrop);
    refs.bodyEl.addEventListener('keydown', onEscBtn);

    refs.closeBtn.addEventListener('click', closeModal);

    const addToWatchedBtn = document.querySelector('.modal-button__primary');
    const addToQueueBtn = document.querySelector('.modal-button__secondary');
    addToWatchedBtn.addEventListener('click', evt => {
      saveDataMovie(evt, movie);
    });
  
    addToQueueBtn.addEventListener('click', evt => {
        saveDataMovie(evt, movie);
    });

  });
}

function onBackdrop(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
    refs.bodyEl.removeEventListener('click', onBackdrop);
  }
}

function onEscBtn(e) {
  if (e.code === 'Escape') {
    closeModal();

    refs.bodyEl.removeEventListener('keydown', onEscBtn);
  }
  console.log(1);
}

function closeModal() {
  refs.backdropEl.classList.add('is-hidden');
  refs.bodyEl.style.overflow = 'visible';
}

function saveDataMovie(evt, movie) {
  localStorage.setItem('modalMovieData', JSON.stringify(movie));
  addingToStorage.onBtnAddToLibrary(evt);
}