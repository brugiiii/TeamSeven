import { load, storageKeys } from './localStorage';
import cardTemplate from '../templates/cardTemplate.hbs';

const container = document.querySelector('.main-content');

export const loadFromStorageWatched = () => {
  const results = load(storageKeys.WATCHED);
  console.log(results.length);
  if (results.length === 0) {
    container.innerHTML = `<div class = 'placeholder-library'><p class = 'text-library'> Currently, the list of movies in the "Watched" section is empty</p></div>`;
  } else {
    updateMarkupLibrary(results);
  }
};

export const loadFromStorageQueue = () => {
  const results = load(storageKeys.QUEUE);
  if (results.length === 0) {
    container.innerHTML = `<div class = 'placeholder-library'><p class = 'text-library'> Currently, the list of movies in the "Queue" section is empty</p></div>`;
  } else {
    updateMarkupLibrary(results);
  }
};

function updateMarkupLibrary(results) {
  const container = document.querySelector('.main-content');
  //console.log(container);
  container.innerHTML = '';
  results.map(result => {
    const { poster_path, original_title, genre_ids, release_date, id } = result;
    const genres = genre_ids; //.join(', ');
    const date = release_date.slice(0, 4);

    const mk = cardTemplate({ poster_path, original_title, genres, date, id });

    container.insertAdjacentHTML('beforeend', mk);
  });
}
