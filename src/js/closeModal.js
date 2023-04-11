import modalTemplate from '../templates/modalTemplate.hbs'

const refs = {
openModal: document.querySelector('main'),
closeBtn: document.querySelector('.modal-button'),
backdrop: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
};



// refs.closeBtn.addEventListener('click', closeModal);
refs.openModal.addEventListener('click', onCardOpen);

function onCardOpen(e) {
    if (e.target.nodeName === 'IMG' || 'h2' || 'p') {
        const card = e.target.parentNode.parentNode;
        const id = card.dataset.action;
        // console.log(id);
        // console.log('Відкриття модалки');
       
        fetchMovies(id).then(data => {
            console.log(data)
            const markup = modalTemplate(data);

            refs.body.insertAdjacentHTML('beforeend', markup);

  });
    } 

    async function fetchMovies(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0d7a3e0f2906a3f05e73804ba320517e&language=en-US`;

    const response = await fetch(url);
    const result = await response.json();
    
    return result;
};
   
  
// refs.backdrop.classList.remove('is-hidden');
    

  refs.body.addEventListener('keydown', onEscBtn);
  refs.body.addEventListener('click', onBackdrop);
}

function onBackdrop(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function onEscBtn(e) {
  if (e.code === 'Escape') {
    closeModal();

    refs.body.removeEventListener('keydown', closeModalByEscBtn);
  }
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
}

