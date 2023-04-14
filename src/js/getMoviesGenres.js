import axios from 'axios';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';

export async function getMoviesGenres() {
  const responce = await axios(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  const genres = responce.data.genres;

  localStorage.setItem('genres', JSON.stringify(genres));
}
