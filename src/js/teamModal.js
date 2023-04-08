const refs = {
  closeBtn: document.querySelector('.teamModal__closeBtn'),
  openBtn: document.querySelector('.team-text__link'),
  backdropEl: document.querySelector('.backdrop'),
};

refs.closeBtn.addEventListener('click', onCloseBtn);
refs.openBtn.addEventListener('click', onOpenModal);

function onCloseBtn() {
  refs.backdropEl.classList.add('is-hidden');
}

function onOpenModal() {
  refs.backdropEl.classList.remove('is-hidden');
}
