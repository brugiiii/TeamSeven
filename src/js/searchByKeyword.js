import apiServer from './api-servis';
import searchRenderBox from '../templates/searchRenger.hbs'
const apiServise = new apiServer();

const refs = {
    searchForm: document.querySelector('.header__search'),
    main: document.querySelector('.main-content'),
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

async function createCards(array){
    try{
      refs.main.innerHTML ="";  
        await apiServise.fetchSearchMoviesPages().then(({results}) =>{
            const articleStore = results.map(({title, release_date, poster_path, genre_ids}) =>{
                release_date = release_date.slice(0,4);
                poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
                
               return {title, release_date, poster_path, genre_ids};
            });
             const markup = searchRenderBox({articleStore});
             refs.main.innerHTML = markup;
          
        })    
    } catch (error) {
        console.log("createCards", error);
    }
    
}
