const mainEl = document.querySelector('.main-content');

export default class Loader {
  constructor() {
    this.mainEl = mainEl;
    this.preloaderEl = null;
  }

  showLoader() {
    const markUpLoader = `<div id='page-loader' class="preloader preloader__home">
    <div class='loader loader__home'></div>
  </div>`;
    this.mainEl.insertAdjacentHTML('afterbegin', markUpLoader);

    // showLoader();
    this.preloaderEl = document.querySelector('.preloader');
  }
  hideLoader() {
    console.log(this.preloaderEl);
    if (this.preloaderEl) {
      this.preloaderEl.remove();
      this.preloaderEl = null;
    }
  }
}
