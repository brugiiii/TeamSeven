import apiServer from './api-servis';
import searchRenderBox from '../templates/searchRenger.hbs'
const apiServise = new apiServer();
const numberOfGeneras = 4;
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

       const ganreList = ganres.map(({id, name})=> {
          return {[id]:name,} ;
        });

        comparisonList = ganreList;
        const localStorageJson = JSON.stringify(ganreList);
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
           
            const articleStore = results.map(({title, release_date, poster_path, genre_ids, id}) =>{
                release_date = release_date.slice(0,4);
                poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;

                const genres = [...genresBase.genres];

                const genreIds = genre_ids;
                let genresNames = [];
                
                const other ="Other"
                for (let i = 0; i < genreIds.length; i++) {
                  const genre = genres.find(g => g.id === genreIds[i]);
                  genresNames.push(genre.name);
                  
                }
               let currentGanre = [...genresNames.slice(0,2), other].join(' ');

                if( genresNames.length < numberOfGeneras ){
                  currentGanre = [...genresNames].join(' ');
                }
                  
               return {title, release_date, poster_path, currentGanre, id};
            });
             const markup = searchRenderBox({articleStore});
             refs.main.innerHTML = markup;       
        });    
    } catch (error) {
        console.log("createCards", error);
    }
    
}
