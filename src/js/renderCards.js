import cardTemplate from "../templates/cardTemplate.hbs";
import NewApiService from './api-servis';
const newApiService = new NewApiService();

newApiService.fetchPopularMovies().then(({ results }) => {
  results.map(result => {
    const { poster_path, original_title, genre_ids, release_date } = result;
    const genres = genre_ids.join(", ");
    const date = release_date.slice(0, 4);

    const mk = cardTemplate({ poster_path, original_title, genres, date })

    const container = document.querySelector('.main-content');
    container.insertAdjacentHTML('beforeend', mk);
  });
});
