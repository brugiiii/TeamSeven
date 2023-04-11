import { refs } from './refs';
import * as renderingFromStorage from './renderFromStorage';


refs.btnWatched.addEventListener('click', renderingFromStorage.loadFromStorageWatched);
refs.btnQueue.addEventListener('click', renderingFromStorage.loadFromStorageQueue);