import cardTemplate from '../templates/cardTemplate.hbs'
import NewApiService from './api-servis';
import { numberOfGeneras, ganreListProcessin } from './searchByKeyword';
import NewLoader from './loader';
const container = document.querySelector('.main-content');
const newApiService = new NewApiService();
const newLoader = new NewLoader();
ganreListProcessin().then(fetchData);

async function fetchData(genresBase) { 
  try { 
    newLoader.showLoader();
    await new Promise(resolve => setTimeout(resolve, 300));
    await newApiService.fetchPopularMovies().then(({ results }) => {
      const mk =  results.map(({ poster_path, original_title, genre_ids, release_date, id }) => {
       
         const date = release_date.slice(0, 4);
         const genres = [...genresBase.genres];
          const genreIds = genre_ids;
          let genresNames = [];
          const other = 'Other';

          for (let i = 0; i < genreIds.length; i++) {
            const genre = genres.find(g => g.id === genreIds[i]);
            genresNames.push(genre.name);
          }

          let currentGanre = null;
         if (genresNames.length < numberOfGeneras) {
               currentGanre = genresNames.join(',  ');
           } else {
            currentGanre = [...genresNames.slice(0, 2), other].join(', ');
           }
        return {poster_path, original_title, currentGanre,date, id};
       }
      );
        const marKup = cardTemplate({mk});
        container.innerHTML = marKup;
        newLoader.hideLoader();
     });
  } catch (error) {
    console.error('Помилка під час отримання даних:', error);
  }
} 
