import localStorageApi from './local-storage-api/local-storage-api';
import generateLibraryContainer from './libraryCard';
const LS_API = new localStorageApi();
import { refs } from './refs';
import Pagination from 'tui-pagination';
import { options } from './pagination-lib-options';
import 'tui-pagination/dist/tui-pagination.css';

export const currentLibraryPageEL = document.querySelector('.library-header--list__link--active');
// console.log(currentLibraryPageEL);

export let currentPage = '';

if(!refs.watched && !refs.queue) return;

const paginationLib = new Pagination(refs.paginationLibContainer, options);

// export let currentPaginationPage = paginationLib.getCurrentPage();
export let currentPaginationPage = 1;

console.log(currentPaginationPage);
refs.watched.addEventListener('click', onClickWatched);
refs.queue.addEventListener('click', onClickQueue);

onClickWatched();

function onClickWatched() {
  currentPage = 'watched';
  refs.watched.classList.add('library--btn--active');
  refs.queue.classList.remove('library--btn--active');

  // clearMoviesContainer();

  if (LS_API.getFilmsFromWatched() && LS_API.getFilmsFromWatched().length > 0) {
      clearMoviesContainer();

      paginationLib.setTotalItems(LS_API.getFilmsFromWatched().length);
      paginationLib.reset();
    refs.movieContentBlock.classList.add('none');
    generateLibraryContainer(LS_API.getFilmsFromWatched, 1);
  } else {
    refs.movieContentBlock.classList.remove('none');
  }
}

function onClickQueue() {
  currentPage = 'queue';
  refs.watched.classList.remove('library--btn--active');
  refs.queue.classList.add('library--btn--active');

  // clearMoviesContainer();

  if (LS_API.getFilmsFromQueue() && LS_API.getFilmsFromQueue().length > 0) {
    clearMoviesContainer();

    paginationLib.setTotalItems(LS_API.getFilmsFromQueue().length);
    paginationLib.reset();
    refs.movieContentBlock.classList.add('none');
    generateLibraryContainer(LS_API.getFilmsFromQueue, 1);
  } else {
    refs.movieContentBlock.classList.remove('none');
  }
}

refs.paginationContainer.addEventListener(
  'click',
  renderNewPageOfLibraryFilms
);

function renderNewPageOfLibraryFilms() {
  clearMoviesContainer();

  currentPaginationPage = paginationLib.getCurrentPage();
  const newCurrentPage = paginationLib.getCurrentPage();
  // console.log(newCurrentPage);
  if (currentPage = 'watched') {
    generateLibraryContainer(LS_API.getFilmsFromWatched, newCurrentPage);
  } else if (currentPage = 'queue') {
    generateLibraryContainer(LS_API.getFilmsFromQueue, newCurrentPage);
  }
}

function clearMoviesContainer() {
  refs.trandingContainer.innerHTML = '';
}