import localStorageApi from './local-storage-api/local-storage-api';
import { generateLibraryContainer, logicLib } from './libraryCard';
import { refs } from './refs';
import { openModal } from './modalWindow';
import Pagination from 'tui-pagination';
import { options } from './pagination-lib-options';
import 'tui-pagination/dist/tui-pagination.css';

const LS_API = new localStorageApi();

export const currentLibraryPageEL = document.querySelector(
  '.library-header--list__link--active'
);

export let currentPage = '';

if (!refs.watched && !refs.queue) return;

let itemPerPage = 4;
options.itemsPerPage = itemPerPage;

export const paginationLib = new Pagination(
  refs.paginationLibContainer,
  options
);

export let currentPaginationPage = 1;

refs.watched.addEventListener('click', onClickWatched);
refs.queue.addEventListener('click', onClickQueue);

onClickWatched();

function onClickWatched() {
  currentPage = 'watched';
  refs.watched.classList.add('library--btn--active');
  refs.queue.classList.remove('library--btn--active');

  clearMoviesContainer();

  if (LS_API.getFilmsFromWatched() && LS_API.getFilmsFromWatched().length > 0) {
    clearMoviesContainer();

    paginationLib.setTotalItems(LS_API.getFilmsFromWatched().length);
    paginationLib.reset();
    refs.movieContentBlock.classList.add('none');
    generateLibraryContainer(LS_API.getFilmsFromWatched, 1, itemPerPage);
  } else {
    refs.movieContentBlock.classList.remove('none');
  }

  hidePaginationForWatched();
}

function onClickQueue() {
  currentPage = 'queue';
  refs.watched.classList.remove('library--btn--active');
  refs.queue.classList.add('library--btn--active');

  clearMoviesContainer();

  if (LS_API.getFilmsFromQueue() && LS_API.getFilmsFromQueue().length > 0) {
    clearMoviesContainer();

    paginationLib.setTotalItems(LS_API.getFilmsFromQueue().length);
    paginationLib.reset();
    refs.movieContentBlock.classList.add('none');
    generateLibraryContainer(LS_API.getFilmsFromQueue, 1, itemPerPage);
  } else {
    refs.movieContentBlock.classList.remove('none');
  }

  hidePaginationForQueue();
}

refs.paginationContainer.addEventListener('click', renderNewPageOfLibraryFilms);

function renderNewPageOfLibraryFilms() {
  clearMoviesContainer();

  currentPaginationPage = paginationLib.getCurrentPage();
  const newCurrentPage = paginationLib.getCurrentPage();
  if (currentPage === 'watched') {
    generateLibraryContainer(
      LS_API.getFilmsFromWatched,
      newCurrentPage,
      itemPerPage
    );
    paginationLib.setTotalItems(LS_API.getFilmsFromWatched().length);
  } else if (currentPage === 'queue') {
    generateLibraryContainer(
      LS_API.getFilmsFromQueue,
      newCurrentPage,
      itemPerPage
    );
    paginationLib.setTotalItems(LS_API.getFilmsFromQueue().length);
  }
  // paginationLib.reset();
  paginationLib.movePageTo(paginationLib.getCurrentPage());
}

function clearMoviesContainer() {
  refs.trandingContainer.innerHTML = '';
}

const closeModalInLib = function () {
  refs.modalWindow.addEventListener('click', event => {
    let target = event.target;
    if (
      target.closest('.modal-window__close') ||
      target.matches('.modal-window')
    ) {
      refs.modalWindow.close();
      refs.body.style.overflow = 'visible';
      if (currentPage === 'watched') {
        refreshWatchedPage();
      } else if (currentPage === 'queue') {
        refreshQueuePage();
      }
    }
  });
};

closeModalInLib();

function refreshWatchedPage() {
  clearMoviesContainer();
  if (
    logicLib(LS_API.getFilmsFromWatched, paginationLib.getCurrentPage())
      .length > 0
  ) {
    generateLibraryContainer(
      LS_API.getFilmsFromWatched,
      paginationLib.getCurrentPage(),
      itemPerPage
    );
  }

  if (
    logicLib(LS_API.getFilmsFromWatched, paginationLib.getCurrentPage())
      .length === 0
  ) {
    paginationLib.setTotalItems(LS_API.getFilmsFromWatched().length);

    paginationLib.movePageTo(paginationLib.getCurrentPage() - 1);

    generateLibraryContainer(
      LS_API.getFilmsFromWatched,
      paginationLib.getCurrentPage(),
      itemPerPage
    );
  }

  hidePaginationForWatched();
}

function refreshQueuePage() {
  clearMoviesContainer();
  if (
    logicLib(LS_API.getFilmsFromQueue, paginationLib.getCurrentPage()).length >
    0
  ) {
    generateLibraryContainer(
      LS_API.getFilmsFromQueue,
      paginationLib.getCurrentPage(),
      itemPerPage
    );
  }

  if (
    logicLib(LS_API.getFilmsFromQueue, paginationLib.getCurrentPage())
      .length === 0
  ) {
    paginationLib.setTotalItems(LS_API.getFilmsFromQueue().length);

    paginationLib.movePageTo(paginationLib.getCurrentPage() - 1);

    generateLibraryContainer(
      LS_API.getFilmsFromQueue,
      paginationLib.getCurrentPage(),
      itemPerPage
    );
  }

  hidePaginationForQueue();
}

function hidePaginationForWatched() {
  if (LS_API.getFilmsFromWatched().length < 3) {
    refs.paginationLibContainer.style.display = 'none';
  } else if (refs.paginationLibContainer.style.display === 'none') {
    refs.paginationLibContainer.removeAttribute('style');
  }
}

function hidePaginationForQueue() {
  if (LS_API.getFilmsFromQueue().length < 3) {
    refs.paginationLibContainer.style.display = 'none';
  } else if (refs.paginationLibContainer.style.display === 'none') {
    refs.paginationLibContainer.removeAttribute('style');
  }
}
