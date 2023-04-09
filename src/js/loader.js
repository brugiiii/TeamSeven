const mainEl = document.querySelector('.main-content');

function showLoader() {
  const markUpLoader = `<div class="preloader">
  <div class='loader'></div>
    </div>`;
  mainEl.insertAdjacentHTML('afterbegin', markUpLoader);
}

// showLoader();
