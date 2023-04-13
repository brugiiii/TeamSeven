const addToWatchedBtn = document.querySelector('.modal-button__primary'); 
const addToQueueBtn = document.querySelector('.modal-button__secondary'); 

export { watchedBtnToRemuve, queueBtnToRemuve, remuveBtnToWatched, remuveBtnToQueue };

function watchedBtnToRemuve() {  
    addToWatchedBtn.addEventListener('click', watchedBtnToRemuve);
  addToWatchedBtn.textContent = 'Remove from watched';
};
 function queueBtnToRemuve() {  
    addToQueueBtn.addEventListener('click', queueBtnToRemuve);
  addToQueueBtn.textContent = 'Remove from queue';
};
function remuveBtnToWatched() {  
    addToWatchedBtn.addEventListener('click', remuveBtnToWatched);
  addToWatchedBtn.textContent = 'Add to watched';
};
 function remuveBtnToQueue() {  
    addToQueueBtn.addEventListener('click', remuveBtnToQueue);
  addToQueueBtn.textContent = 'Add to queue';
};