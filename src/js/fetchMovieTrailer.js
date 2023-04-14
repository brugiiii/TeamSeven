import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';

export async function fetchVideoKey(id) {
  try {
    const response = await axios(
      `${BASE_URL}3/movie/${id}/videos?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
