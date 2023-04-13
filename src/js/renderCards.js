import cardTemplate from '../templates/cardTemplate.hbs';
import NewApiService from './api-servis';
import { numberOfGeneras, ganreListProcessin } from './searchByKeyword';

const newApiService = new NewApiService();

ganreListProcessin().then(fetchData);
async function fetchData(genresBase) {
  try {
    loader.showLoader();
    await new Promise(resolve => setTimeout(resolve, 500));
    const { results } = await newApiService.fetchPopularMovies();

    await results.map(result => {
      const { poster_path, original_title, genre_ids, release_date, id } =
        result;
      const date = release_date.slice(0, 4);

      const genres = [...genresBase.genres];
      const genreIds = genre_ids;
      let genresNames = [];
      const other = 'Other';
      for (let i = 0; i < genreIds.length; i++) {
        const genre = genres.find(g => g.id === genreIds[i]);
        genresNames.push(genre.name);
      }
      let currentGanre = [...genresNames.slice(0, 2), other].join(' ');
      if (genresNames.length < numberOfGeneras) {
        currentGanre = [...genresNames].join(' ');
      }

      const mk = cardTemplate({
        poster_path,
        original_title,
        currentGanre,
        date,
        id,
      });

      const container = document.querySelector('.main-content');

      container.insertAdjacentHTML('beforeend', mk);
    });
    loader.hideLoader();
  } catch (error) {
    console.error('Помилка під час отримання даних:', error);
  }
}
