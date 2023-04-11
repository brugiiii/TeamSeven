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
    console.log(movie.backdrop_path);
    const {
      poster_path,
      original_title,
      vote_average,
      vote_count,
      popularity,
      title,
      genre_ids,
      overview,
    } = movie;

    const mk = `<div class='backdrop'>
  <div class='modal'>
    <button class='modal-button'>
      <svg class='icon-close'>
        <use href='./images/sprite.svg#icon-close'></use>
      </svg>
    </button>
    <div class='modal-content'>
      <div class='modal-left'>
        <div class='modal-content__image'>
          <img src='https://image.tmdb.org/t/p/w500${poster_path}' alt='${title}' />
        </div>
      </div>
      <div class='modal-right'>
        <div class='modal-content__info'>
          <p class='modal-content__name'>${original_title}</p>
          <ul class='modal-list'>
            <li class='modal-list__item'>
              <p>Vote/Votes</p>
              <p>Popularity</p>
              <p>Original Title</p>
              <p>Genre</p>
            </li>
            <li class='modal-list__item'>
              <p><span>${vote_average}</span> / ${vote_count}</p>
              <p>${popularity}</p>
              <p>${title}</p>
              <p>${genre_ids}</p>
            </li>
          </ul>
        </div>
        <div class='modal-content__about'>
          <p>ABOUT</p>
          <p>
            ${overview}
          </p>
        </div>
        <div class='modal-content__buttons'>
          <button class='button modal-button__primary'>Add To Watched</button>
          <button class='button modal-button__secondary'>Add To Queue</button>
        </div>
      </div>
    </div>
  </div>
</div>`;
    container.insertAdjacentHTML('beforeend', mk);
  });
}
