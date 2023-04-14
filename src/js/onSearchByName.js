import Notiflix from 'notiflix';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { renderMoviesMarkup } from './renderFilms';
import { startLoader, stopLoader } from './loader';
import { refs } from './refs';
import { MoviesServiceByName } from './apiServiceMovies';

Notiflix.Notify.init({ position: 'center-top' });
refs.moviesSearchForm.addEventListener('submit', onFormSubmit);

const moviesServiceByName = new MoviesServiceByName({
  page: 1,
  searchQuery: '',
});

export async function onFormSubmit(e) {
  e.preventDefault();
  startLoader();
  moviesServiceByName.resetPage();

  const { query } = e.target.elements;
  const searchQuery = query.value.trim();

  moviesServiceByName.query = searchQuery;

  if (searchQuery === '') {
    Notiflix.Notify.info('Enter something');
    stopLoader();
    return;
  } else {
    startLoader();
    try {
      moviesServiceByName.fetchMoviesByName().then(renderMoviesMarkup);

      const pagination = new Pagination('pagination', {
        totalItems: 500,
        itemsPerPage: 10,
        visiblePages: 5,
        page: 1,
      });
      pagination.on('beforeMove', event => {
        const currentPage = event.page;
        moviesServiceByName.page = currentPage;
        moviesServiceByName.fetchMoviesByName().then(renderMoviesMarkup);
      });
      refs.moviesSearchForm.reset();
    } catch (error) {
      console.log(error);
    }
  }
}
