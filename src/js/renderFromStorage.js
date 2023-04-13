import { load, storageKeys } from './localStorage';
import cardTemplate from '../templates/cardTemplate.hbs';
import Loader from './loader';

const loader = new Loader();

export const loadFromStorageWatched = () => {
  const results = load(storageKeys.WATCHED);
  console.log(results);
  updateMarkupLibrary(results);
};

export const loadFromStorageQueue = () => {
  const results = load(storageKeys.QUEUE);
  updateMarkupLibrary(results);
};

async function updateMarkupLibrary(results) {
  const container = document.querySelector('.main-content');
  //console.log(container);
  container.innerHTML = '';
  loader.showLoader();
  await new Promise(resolve => setTimeout(resolve, 1000));

  await results.map(result => {
    const { poster_path, original_title, genre_ids, release_date, id } = result;
    const genres = genre_ids; //.join(', ');
    const date = release_date.slice(0, 4);

    const mk = cardTemplate({ poster_path, original_title, genres, date, id });

    container.insertAdjacentHTML('beforeend', mk);
    loader.hideLoader();
  });
}
