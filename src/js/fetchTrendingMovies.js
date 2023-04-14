import axios from 'axios';
import { startLoader, stopLoader } from './loader';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const BASE_URL = 'https://api.themoviedb.org/';

let totalFilms = 0;

export async function fetchTrendingMovies(page = 1) {
  try {
    startLoader();
    const response = await axios(
      `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    totalFilms = await response.data.total_results;
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { totalFilms };
