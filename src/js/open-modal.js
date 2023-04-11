import NewApiService from './api-servis';
import modalTemplate from '../templates/modalTemplate.hbs';

const newApiService = new NewApiService();
const container = document.querySelector('.main-content');

container.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const idDatas = evt.target.closest('.card-item');
  const idValue = idDatas.dataset.action;

  openModal(idValue);
}

function openModal(id) {
  newApiService.fetchPopularMovies().then(({ results }) => {
    const movie = results.find(result => result.id.toString() === id);
    if (!movie) {
      return;
    }

    const markup = modalTemplate(movie);
    container.insertAdjacentHTML('beforeend', markup);
  });
}
