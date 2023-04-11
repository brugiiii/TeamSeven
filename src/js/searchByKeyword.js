import apiServer from './api-servis';
import searchRenderBox from '../templates/searchRenger.hbs'
const apiServise = new apiServer();

const refs = {
    searchForm: document.querySelector('.header__search'),
    main: document.querySelector('.main-content'),
};
// ======================================================
refs.searchForm.addEventListener('submit', onInputForm);
// =======================================================
  function onInputForm(e){
    e.preventDefault();
    apiServise.query = e.currentTarget.elements.search.value;
    // createCards().then(ganreListProcessin);

  //   const gangeList = ganreListProcessin();
    // createCards();
      ganreListProcessin().then(createCards);
     

}

async function ganreListProcessin(){
  let comparisonList = JSON.parse(localStorage.getItem('ganre-List'));
 
  try {
    // Проверяем наличия списка жанров. Если есть возвращаем. Есть нет создаем

    if(!localStorage.getItem('ganre-List')){
        //sorting out the list of ganres 
        // Запрашиваем список жанров 

       const  ganres =  await apiServise.fetchGenresMovies();
        // convert to a convenient list
        // Перемонтируем список в {id:жанр,}
    
       const ganreList = ganres.map(({id, name})=> {
          return {[id]:name,} ;
        });

        // Пишем список в передаваємую переменную по запросу
        comparisonList = ganreList;

        // parse in JSON
        //Парсим в JSON  файл
        const localStorageJson = JSON.stringify(ganreList);

        // sent to LocalStorage
        // Отправляем JSON в LocalStorage
        localStorage.setItem('ganre-List',localStorageJson);
    }
    
  } catch (error) {
    console.log("ganreListProcessin", error);
  }
  return comparisonList;
}

async function createCards(array){
    try{
     // console.log(array);
        await apiServise.fetchSearchMoviesPages().then(({results}) =>{

          console.log( typeof array);
        //  const val =  array.map(ar => console.log(ar));

            const articleStore = results.map(({title, release_date, poster_path, genre_ids}) =>{
                release_date = release_date.slice(0,4);
                poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
                // genre_ids = genre_ids.map((item) => {

                //   let value = toString(item);
                
                //   let val =[];
                //  return   push(array[value]);
                 
                //   // if(array[toString(item)]){
                //   //   console.log(array[toString(item)]);
                //   // }
                 
                // } );
                  
                
               return {title, release_date, poster_path, genre_ids};
               
            });
           
             const markup = searchRenderBox({articleStore});
             refs.main.innerHTML = markup;
          
        });    
    } catch (error) {
        console.log("createCards", error);
    }
    
}
