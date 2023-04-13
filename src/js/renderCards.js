

import searchRenderBox from '../templates/searchRenger.hbs';

import NewApiService from './api-servis';
import { numberOfGeneras, ganreListProcessin, renderOnScreen } from './searchByKeyword';
import NewLoader from './loader';
const container = document.querySelector('.main-content');
const newApiService = new NewApiService();
const newLoader = new NewLoader();
ganreListProcessin().then(fetchData);

async function fetchData(genresBase) { 
  try { 
    newLoader.showLoader();
    await new Promise(resolve => setTimeout(resolve, 300));


    await newApiService.fetchPopularMovies().then(({ results }) => {
      renderOnScreen( results , genresBase);
    });

    newLoader.hideLoader();
    

  } catch (error) {
    console.error('Помилка під час отримання даних:', error);
  }
} 
