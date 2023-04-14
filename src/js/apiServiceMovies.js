import axios from 'axios';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from './refs';

import { renderMoviesMarkup } from './renderFilms';
import { startLoader, stopLoader } from './loader';

export class MoviesServiceByName {
  constructor(options) {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchMoviesByName() {
    const options = {
      BASE_URL: 'https://api.themoviedb.org/',
      API_KEY: '90c7ff0c6a89140d8ec65b5296dfcca2',
    };
    try {
      const response = await axios(
        `${options.BASE_URL}3/search/movie?api_key=${options.API_KEY}&include_adult=false&query=${this.searchQuery}&page=${this.page}`
      );
      if (response.data.results.length === 0) {
        Notify.info(`Nothing was found for your '${this.searchQuery}' request`);

        return;
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export class MoviesService {
  constructor(options) {
    this.page = 1;
  }
  async fetchTrendingMovies() {
    const options = {
      BASE_URL: 'https://api.themoviedb.org/',
      API_KEY: '90c7ff0c6a89140d8ec65b5296dfcca2',
    };
    try {
      const response = await axios.get(
        `${options.BASE_URL}3/trending/movie/day?api_key=${options.API_KEY}&page=${this.page}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
