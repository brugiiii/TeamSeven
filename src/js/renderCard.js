import NewApiService from `./api-servis`;

const gallery = document.querySelector('.container');
console.log(gallery);

function renderCard(data) {
    const markup = movieTpl(data);

    gallery.insertAdjacentHTML('beforeend', markup);
}


