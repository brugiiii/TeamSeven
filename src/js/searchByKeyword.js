import apiServer from './api-servis';
import searchRenderBox from '../templates/searchRenger.hbs'
export{numberOfGeneras, ganreListProcessin}
const apiServise = new apiServer();


import Loader from './loader';
const loader = new Loader();


const numberOfGeneras = 4;

const refs = {
    searchForm: document.querySelector('.header__search'),
    main: document.querySelector('.main-content'),
    wrongSearchMess: document.querySelector('.wrong-search'),
};

refs.searchForm.addEventListener('submit', onInputForm);

  function onInputForm(e){
    e.preventDefault();
    apiServise.query = e.currentTarget.elements.search.value;
     ganreListProcessin().then(createCards);  

}

    async function ganreListProcessin(){
    let comparisonList = JSON.parse(localStorage.getItem('ganre-List'));
   
    try {
  
      if(!localStorage.getItem('ganre-List')){
  
         const  ganres =  await apiServise.fetchGenresMovies();     
          comparisonList = ganres;
           
          const localStorageJson = JSON.stringify(ganres);
          localStorage.setItem('ganre-List',localStorageJson);
      }
      
    } catch (error) {
      console.log("ganreListProcessin", error);
    }
    return comparisonList;
  }



async function createCards(genresBase){
    try{
        await apiServise.fetchSearchMoviesPages().then(({results}) =>{
          refs.wrongSearchMess.classList.add("visually-hidden")
            if(!results.length){
              refs.wrongSearchMess.classList.remove("visually-hidden");
              return;
            } 


async function createCards(array) {
  try {
    loader.showLoader();

    await new Promise(resolve => setTimeout(resolve, 1000));

    await apiServise.fetchSearchMoviesPages().then(({ results }) => {
      const articleStore = results.map(
        ({ title, release_date, poster_path, genre_ids, id }) => {
          release_date = release_date.slice(0, 4);
          poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
          return { title, release_date, poster_path, genre_ids, id };
        }
      );
      const markup = searchRenderBox({ articleStore });
      refs.main.innerHTML = markup;

      loader.hideLoader();
    });
  } catch (error) {
    console.log('createCards', error);
  }

}
