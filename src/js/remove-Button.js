const addToWatchedBtn = document.querySelector('.modal-button__primary'); 
const addToQueueBtn = document.querySelector('.modal-button__secondary'); 

addToWatchedBtn.addEventListener('click', changeWatchedBtnToRemuve);
addToQueueBtn.addEventListener('click', changeQueueBtnToRemuve);

export function changeWatchedBtnToRemuve(){  
  addToWatchedBtn.textContent = 'Remove from watched';
};
export function changeQueueBtnToRemuve(){  
  addToWatchedBtn.textContent = 'Remove from queue';
};
