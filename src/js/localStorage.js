<<<<<<< Updated upstream
import {watchedBtnToRemuve, queueBtnToRemuve, remuveBtnToWatched, remuveBtnToQueue} from './remove-Button';
=======
>>>>>>> Stashed changes
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    //return serializedState === null ? [] : JSON.parse(serializedState);
    return (serializedState = JSON.parse(serializedState) || undefined);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

<<<<<<< Updated upstream
const save = (key, value) => { 
    try { 
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set items error: ', error.message);
    }
=======

export const storageKeys = {
  WATCHED: 'watched',
  QUEUE: 'queue',
>>>>>>> Stashed changes
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove state error: ', error.message);
  }
};

export default {
  load,  
  save, 
  remove,
};