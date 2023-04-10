import cardTemplate from '../templates/cardTemplate.hbs';
import NewApiService from './api-servis';
const newApiService = new NewApiService();

newApiService.fetchPopularMovies().then(data => {
  const mk = cardTemplate(data);
  const container = document.querySelector('.main-content');
  container.insertAdjacentHTML('beforeend', mk);
});
