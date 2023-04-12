import { storageKeys, load, save } from './localStorage';

export const onBtnAddToLibrary = event => { 
    const watchedMoviesArray = load(storageKeys.WATCHED) || [];
    const queueMoviesArray = load(storageKeys.QUEUE) || [];
    
    if (event.target.innerText === 'ADD TO WATCHED') {
      saveToStorage(
        watchedMoviesArray,
        storageKeys.WATCHED,
        'WATCHED',
        event
      );
    } else if (event.target.innerText === 'REMOVE FROM WATCHED') {
      deleteFromStorage(
        watchedMoviesArray,
        storageKeys.WATCHED,
        'WATCHED',
        event
      );
    } else if (event.target.innerText === 'ADD TO QUEUE') {
      saveToStorage(queueMoviesArray, storageKeys.QUEUE, 'QUEUE', event);
    } else if (event.target.innerText === 'REMOVE FROM QUEUE') {
      deleteFromStorage(
        queueMoviesArray,
        storageKeys.QUEUE,
        'QUEUE',
        event
      );
    }
};
  
function saveToStorage(array, key, keyValue, event) {
    const movie = JSON.parse(localStorage.getItem('modalMovieData'));
    array.push(movie);
    save(key, array);
    event.target.innerText = `REMOVE FROM ${keyValue}`;
}

function deleteFromStorage(array, key, keyValue, event) {
    const movie = JSON.parse(localStorage.getItem('modalMovieData'));
    const movieId = movie.id; 
    const filteredMovie = array.filter(movie => movie.id !== movieId);
    save(key, filteredMovie);
    event.target.innerText = `ADD TO ${keyValue}`;
}
  