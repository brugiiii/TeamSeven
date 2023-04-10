import NewApiService from './api-servis';
const newApiService = new NewApiService();

newApiService.fetchPopularMovies().then(({ results }) => {
  results.map(result => {
    const { poster_path, original_title, genre_ids, release_date } = result;

    const mk = `
    <div class="card-item">
        <div class="card-img">
            <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="card-img-top" alt="${original_title}">
        </div> 
        <div class="card-body">
            <p class="card-title">${original_title}</p>
            <p class="card-text">${genre_ids.join(", ")} | ${release_date.slice(0, 4)}</p>
        </div>
    </div>
    `
    const container = document.querySelector('.main-content');
    container.insertAdjacentHTML('beforeend', mk);
  });
});