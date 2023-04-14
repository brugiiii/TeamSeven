const refs = {
  closeBtn: document.querySelector('.teamModal__closeBtn'),
  openBtn: document.querySelector('.about-team'),
  backdropEl: document.querySelector('.backdrop.teamModal'),
  bodyEl: document.querySelector('body'),
};

refs.closeBtn.addEventListener('click', closeModal);
refs.openBtn.addEventListener('click', onOpenBtn);

function onOpenBtn(e) {
  e.preventDefault();
  refs.backdropEl.classList.remove('is-hidden');
  console.log(refs.backdropEl.classList);

  refs.bodyEl.addEventListener('keydown', onEscBtn);
  refs.bodyEl.addEventListener('click', onBackdrop);
  refs.bodyEl.style.overflow = 'hidden';
}

function onBackdrop(e) {
  if (e.target.tagName !== 'IMG' && e.target.tagName !== 'SPAN') {
    closeModal();
    refs.bodyEl.removeEventListener('click', onBackdrop);
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
  refs.bodyEl.style.overflow = 'visible';
}
