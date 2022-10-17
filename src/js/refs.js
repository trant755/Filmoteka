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

  //For button to top
  toTopBtn: document.querySelector('.button-to-top'),
  svgIcon: document.querySelector('.to-top-icon'),

  //For theme-switcher
  body: document.querySelector('body'),
  switcher: document.querySelector('.switcher'),
  switcherHome: document.querySelector('.switcher-home'),
  roller: document.querySelector('.roller'),
  sunSvg: document.querySelector('.sun-svg'),
  moonSvg: document.querySelector('.moon-svg'),

  //For footer-modal
  openModalBtn: document.querySelector('.footer__btn'),
  closeModalBtn: document.querySelector('.modal__close-btn'),
  footerModal: document.querySelector('.backdrop-modal'),

  // For modalWindow.js
  filmList: document.querySelector('#movie-container'),
  modalWindow: document.querySelector('.modal-window'),
  modalWindowWrap: document.querySelector('.modal-window__wrapper'),
  body: document.querySelector('body'),
  trailerContainer: document.querySelector('.modal-trailer-container'),
  youtube: document.querySelector('.youtube'),

  firstPagBtn: document.querySelector('.tui-first'),
  prevPagBtn: document.querySelector('.tui-prev'),
  nextPagBtn: document.querySelector('.tui-next'),
  lastPagBtn: document.querySelector('.tui-last'),
};
