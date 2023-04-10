const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `0d7a3e0f2906a3f05e73804ba320517e`;

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

fetchPopularMovies() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }

  fetchSearchMovies() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }

  fetchPopularMoviesPages() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}{this.page}`;
    return fetch(url).then(response => response.json());
  }

  fetchSearchMoviesPages() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url).then(response => response.json());
  }
  fetchGenresMovies() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }
  
  
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get pageNum() {
    return this.page;
  }
  set pageNum(newPage) {
    this.page = newPage;
  }
}