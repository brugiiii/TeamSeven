const refs = {
  closeBtn: document.querySelector('.teamModal__closeBtn'),
  openBtn: document.querySelector('.team-text__link'),
  backdropEl: document.querySelector('.backdrop'),
  bodyEl: document.querySelector('body'),
};

refs.closeBtn.addEventListener('click', closeModal);
refs.openBtn.addEventListener('click', onOpenBtn);

function onOpenBtn(e) {
  e.preventDefault();
  refs.backdropEl.classList.remove('is-hidden');

  refs.bodyEl.addEventListener('keydown', onEscBtn);
  refs.bodyEl.addEventListener('click', onBackdrop);
}

function onBackdrop(e) {
  if (e.target.tagName !== 'IMG' && e.target.tagName !== 'A') {
    closeModal();
  }
}

function onEscBtn(e) {
  if (e.code === 'Escape') {
    closeModal();

    refs.bodyEl.removeEventListener('keydown', closeModalByEscBtn);
  }
}

function closeModal() {
  refs.backdropEl.classList.add('is-hidden');
}
