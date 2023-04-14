import { renderMoviesMarkup } from './renderFilms';
import { refs } from './refs';
import { fetchTrendingMovies } from './fetchTrendingMovies';
import { getMoviesGenres } from './getMoviesGenres';
import { onGalleryItemClick } from './onGalleryItemClick';

getMoviesGenres();
fetchTrendingMovies().then(renderMoviesMarkup);

refs.galleryList.addEventListener('click', onGalleryItemClick);
