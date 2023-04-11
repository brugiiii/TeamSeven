import cardTemplate from '../templates/cardTemplate.hbs';
import NewApiService from './api-servis';
import Loader from './loader';

const loader = new Loader();
const newApiService = new NewApiService();

newApiService.fetchPopularMovies().then(({ results }) => {
  results.map(result => {
    const { poster_path, original_title, genre_ids, release_date, id } = result;
    const genres = genre_ids.join(', ');
    const date = release_date.slice(0, 4);

    const mk = cardTemplate({ poster_path, original_title, genres, date, id });

    const container = document.querySelector('.main-content');
    container.insertAdjacentHTML('beforeend', mk);
  });
});
