import NewLoader from './loader';
import * as renderingFromStorage from './renderFromStorage';
import { load, storageKeys } from './localStorage';
import cardTemplate from '../templates/cardTemplateLibrary.hbs';
import { numberOfGeneras, ganreListProcessin } from './searchByKeyword';

const newLoader = new NewLoader();

const refs = {
  btnWatched: document.querySelector('.library__btn-watched'),
  btnQueue: document.querySelector('.library__btn-queue'),
};

ganreListProcessin().then(fetchData);

refs.btnWatched.addEventListener('click', evt => {
  refs.btnWatched.classList.add('is-active');
  refs.btnQueue.classList.remove('is-active');
  renderingFromStorage.loadFromStorageWatched();
});

refs.btnQueue.addEventListener('click', evt => {
  refs.btnQueue.classList.add('is-active');
  refs.btnWatched.classList.remove('is-active');
  renderingFromStorage.loadFromStorageQueue();
});
//refs.btnWatched.addEventListener('click', renderingFromStorage.loadFromStorageWatched);
//refs.btnQueue.addEventListener('click', renderingFromStorage.loadFromStorageQueue);

async function fetchData(genresBase) {
  try {
    newLoader.showLoader();
    await new Promise(resolve => setTimeout(resolve, 300));

    const results = load(storageKeys.WATCHED) || [];
    const container = document.querySelector('.main-content');
    container.innerHTML = '';

    results.map(result => { 
      const { poster_path, original_title, genres, release_date, id } =
        result;
      const date = release_date.slice(0, 4);

      const genresArray = [...genresBase.genres];
      const genreIds = genres;
      let genresNames = [];
      const other = 'Other';
      for (let i = 0; i < genreIds.length; i++) {
        const genre = genresArray.find(g => g.id === genreIds[i].id); 
        genresNames.push(genre.name);
      } 
      let currentGanre = [...genresNames.slice(0, 2), other].join(', ');
      if (genresNames.length < numberOfGeneras) {
        currentGanre = [...genresNames].join(', ');
      }

      const mk = cardTemplate({
        poster_path,
        original_title,
        currentGanre,
        date,
        id,
      });

      container.insertAdjacentHTML('beforeend', mk);
    });
   
    newLoader.hideLoader();
  } catch (error) {
    console.error('Помилка під час отримання даних:', error);
  }
}