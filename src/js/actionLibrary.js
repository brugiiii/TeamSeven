import * as renderingFromStorage from './renderFromStorage';

const refs = {
  btnWatched: document.querySelector('.library__btn-watched'),
  btnQueue: document.querySelector('.library__btn-queue'),
};

refs.btnWatched.addEventListener('click', renderingFromStorage.loadFromStorageWatched);
refs.btnQueue.addEventListener('click', renderingFromStorage.loadFromStorageQueue);