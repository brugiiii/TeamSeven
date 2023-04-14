import { refs } from './refs';
import { fetchVideoKey } from './fetchMovieTrailer';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { onEscKeyPress } from './trailerWindow';
if (refs.trailerBtn) {
  refs.trailerBtn.addEventListener('click', onTrailerBtnClick);
}
let videoKey;

export async function onTrailerBtnClick(id) {
  const videoResponse = await fetchVideoKey(id);
  const obj = videoResponse.data.results;
  function getKey() {
    for (let i = 0; i < obj.length; i += 1) {
      if (
        obj[i].name === 'Official Trailer' ||
        obj[i].name.includes('Official Trailer') ||
        obj[i].name.includes('Trailer')
      ) {
        return obj[i].key;
      }
    }
    return null;
  }
  videoKey = getKey();
  if (videoKey) {
    const videoMarkup = `<iframe
        class="trailer-video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${videoKey}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
    refs.trailerWindow.innerHTML = videoMarkup;
    const trailerVideo = refs.trailerWindow.querySelector('.trailer-video');
    trailerVideo.src += '?autoplay=1';
    refs.backdropModalFilm.classList.toggle('visually-hidden');
    refs.trailerBackdrop.classList.toggle('visually-hidden');
    refs.body.style.overflow = 'hidden';
  } else {
    Notify.info(`Sorry. 👀 There is no trailer for this movie yet.`);
  }
}
