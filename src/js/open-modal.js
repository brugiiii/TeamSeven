import modalTemplate from "../templates/modalTemplate.hbs";
import NewApiService from './api-servis';
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

    const {
      backdrop_path,
      original_title,
      vote_average,
      vote_count,
      popularity,
      genre_ids,
      overview,
    } = movie;
    const genres = genre_ids.join(", ");

    const mk = modalTemplate({ backdrop_path, original_title, vote_average, vote_count, popularity, genres, overview })
    container.insertAdjacentHTML('beforeend', mk);
  });
}
