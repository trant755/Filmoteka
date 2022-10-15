export const refs = {
  paginationContainer: document.querySelector('.tui-pagination'),
  paginationLibContainer: document.querySelector('#pagination-1'),
  trandingContainer: document.querySelector('#movie-container'),
  searchInput: document.querySelector('.header-search-form'),
  SearchErrMessage: document.querySelector('.header-message'),
  watched: document.querySelector('.library--btn__watched'),
  queue: document.querySelector('.library--btn__queue'),
  movieContentBlock: document.querySelector('.movie__notification'),
  loader: document.querySelector('.loader-container'),

  IPerPageInput: document.querySelector('[name="library-input"]'),

  //For footer-modal
  openModalBtn: document.querySelector('.footer__btn'),
  closeModalBtn: document.querySelector('.modal__close-btn'),
  footerModal: document.querySelector('.backdrop-modal'),

  // For modalWindow.js
  filmList: document.querySelector('#movie-container'),
  modalWindow: document.querySelector('.modal-window'),
  modalWindowWrap: document.querySelector('.modal-window__wrapper'),
  body: document.querySelector('body'),

  firstPagBtn: document.querySelector('.tui-first'),
  prevPagBtn: document.querySelector('.tui-prev'),
  nextPagBtn: document.querySelector('.tui-next'),
  lastPagBtn: document.querySelector('.tui-last'),
};
