import Loader from './loader';

const loader = new Loader();

const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `0d7a3e0f2906a3f05e73804ba320517e`;

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPopularMovies() {
    loader.showLoader();

    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;

    const response = await fetch(url);
    const result = response.json();

    loader.hideLoader();

    return result;
  }

  async fetchSearchMovies() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&page=${this.page}&query=${this.searchQuery}`;

    const response = await fetch(url);
    const result = response.json();

    return result;
  }

  async fetchPopularMoviesPages() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&page=${this.page}`;

    const response = await fetch(url);
    const result = response.json();

    this.page += 1;

    return result;
  }

  async fetchSearchMoviesPages() {
    loader.showLoader();
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&page=${this.page}&query=${this.searchQuery}`;

    const response = await fetch(url);
    const result = response.json();

    loader.hideLoader();
    return result;
  }
  async fetchGenresMovies() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`;

    const response = await fetch(url);
    const result = response.json();

    return result;
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
