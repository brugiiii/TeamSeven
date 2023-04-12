const mainEl = document.querySelector('.main-content');


export default class Loader {
  constructor() {
    this.mainEl = mainEl;
    this.preloaderEl = null;
  }

  showLoader() {
    const markUpLoader = `<div id='page-loader' class="preloader">
    <div class='loader'></div>
  </div>`;
    this.mainEl.insertAdjacentHTML('afterbegin', markUpLoader);

    this.preloaderEl = document.querySelector('.preloader');
  }
  hideLoader() {
    if (this.preloaderEl) {
      this.preloaderEl.remove();
      this.preloaderEl = null;
    }
  }

}

// showLoader();
