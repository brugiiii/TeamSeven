function backToTop() {
  let button = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY >= 300) {
      button.classList.remove('btn-up_hide');
    } else {
      button.classList.add('btn-up_hide');
    }
  });

  button.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}
backToTop();
