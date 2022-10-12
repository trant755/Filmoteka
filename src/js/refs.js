export const refs = {
  paginationContainer: document.querySelector('.tui-pagination'),
  paginationLibContainer: document.querySelector('#pagination-1'),
  trandingContainer: document.querySelector('#movie-container'),
  searchInput: document.querySelector('.header-search-form'),
  SearchErrMessage: document.querySelector('.header-message'),
  watched: document.querySelector('.library--btn__watched'),
  queue: document.querySelector('.library--btn__queue'),
  movieContentBlock: document.querySelector('.no-movie'),

  // For add-to-library.js
  // addToQueue: document.querySelector('#btn-add-to-queue'),
  // addToWatched: document.querySelector('#btn-add-to-watched'),

  // For modalWindow.js
  filmList: document.querySelector('#movie-container'),
  modalWindow: document.querySelector('.modal-window'),
  modalWindowWrap: document.querySelector('.modal-window__wrapper'),
  body: document.querySelector('body'),
  controls: document.querySelector('.movie-card__controls'),
};
