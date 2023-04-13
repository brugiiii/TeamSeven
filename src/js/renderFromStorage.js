import { load, storageKeys } from './localStorage';
import cardTemplate from '../templates/cardTemplate.hbs';

export const loadFromStorageWatched = () => {
  const results = load(storageKeys.WATCHED) || [];
  updateMarkupLibrary(results);

  //btn style
  document
    .querySelector('.library__btn-watched')
    .setAttribute('class', 'library__btn-watched button-active button');
  document
    .querySelector('.library__btn-queue')
    .setAttribute('class', 'library__btn-queue button-disabled button');

};

export const loadFromStorageQueue = () => {
  const results = load(storageKeys.QUEUE) || [];
  updateMarkupLibrary(results);

  //btn style
  document
    .querySelector('.library__btn-watched')
    .setAttribute('class', 'library__btn-watched button-disabled button');
  document
    .querySelector('.library__btn-queue')
    .setAttribute('class', 'library__btn-queue button-active button');

};

function updateMarkupLibrary(results){
  const container = document.querySelector('.main-content');
  //console.log(container);
  container.innerHTML = '';
  results.map(result => {
    const { poster_path, original_title, genre_ids, release_date, id } = result;
    const genres = genre_ids;//.join(', ');
    const date = release_date.slice(0, 4);

    const mk = cardTemplate({ poster_path, original_title, genres, date, id });

    container.insertAdjacentHTML('beforeend', mk);
  });
}