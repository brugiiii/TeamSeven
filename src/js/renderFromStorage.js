import { load, storageKeys } from './localStorage';
import cardTemplate from '../templates/cardTemplateLibrary.hbs';
import { numberOfGeneras, ganreListProcessin } from './searchByKeyword';
import NewLoader from './loader';

const newLoader = new NewLoader();

export const loadFromStorageWatched = () => {
  const results = load(storageKeys.WATCHED) || [];
  updateMarkupLibrary(results);
};

export const loadFromStorageQueue = () => {
  const results = load(storageKeys.QUEUE) || [];
  updateMarkupLibrary(results);
};

export function updateMarkupLibrary(results) {
  ganreListProcessin().then(response => {
    const genresBase = response;
    const container = document.querySelector('.main-content');
    container.innerHTML = '';

    try {
      newLoader.showLoader();
  
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
  });
}