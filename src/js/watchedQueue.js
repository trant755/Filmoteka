import localStorageApi from './local-storage-api/local-storage-api';
import { generateLibraryContainer, logicLib } from './libraryCard';
import { refs } from './refs';
import Pagination from 'tui-pagination';
import { options } from './pagination-lib-options';

const LS_API = new localStorageApi();

export const currentLibraryPageEL = document.querySelector(
  '.library-header--list__link--active'
);

export let currentPage = '';

if (!refs.watched && !refs.queue) return;

export const paginationLib = new Pagination(
  refs.paginationLibContainer,
  options
);
let itemPerPage = 4;

refs.IPerPageInput.addEventListener('change', changeItemPerPage);

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
    refs.movieContentBlock.style.display = 'none';
    generateLibraryContainer(LS_API.getFilmsFromWatched, 1, itemPerPage);
  } else {
    refs.movieContentBlock.removeAttribute('style');
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
    refs.movieContentBlock.style.display = 'none';
    generateLibraryContainer(LS_API.getFilmsFromQueue, 1, itemPerPage);
  } else {
    refs.movieContentBlock.removeAttribute('style');
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
  paginationLib.movePageTo(paginationLib.getCurrentPage());
}

function clearMoviesContainer() {
  refs.trandingContainer.innerHTML = '';
}
function openModalLib() {
  refs.filmList.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;
    if (target.closest('.movie__link')) {
      document.addEventListener('keydown', listenerHandler);
    }
  });
}

const closeModalInLib = function () {
  refs.modalWindow.addEventListener('click', closeModalInLibCallBack);
};
function closeModalInLibCallBack(event) {
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
    document.removeEventListener('keydown', listenerHandler);
  }
}
function listenerHandler(event) {
  if (event.key === 'Escape') {
    refs.body.style.overflow = 'visible';
    if (currentPage === 'watched') {
      refreshWatchedPage();
    } else if (currentPage === 'queue') {
      refreshQueuePage();
    }
    document.removeEventListener('keydown', listenerHandler);
  }
}

openModalLib();
closeModalInLib();

function refreshWatchedPage() {
  clearMoviesContainer();
  if (
    logicLib(
      LS_API.getFilmsFromWatched,
      paginationLib.getCurrentPage(),
      itemPerPage
    ).length > 0
  ) {
    generateLibraryContainer(
      LS_API.getFilmsFromWatched,
      paginationLib.getCurrentPage(),
      itemPerPage
    );
  }

  if (
    logicLib(
      LS_API.getFilmsFromWatched,
      paginationLib.getCurrentPage(),
      itemPerPage
    ).length === 0
  ) {
    paginationLib.setTotalItems(LS_API.getFilmsFromWatched().length);

    paginationLib.movePageTo(paginationLib.getCurrentPage() - 1);

    generateLibraryContainer(
      LS_API.getFilmsFromWatched,
      paginationLib.getCurrentPage(),
      itemPerPage
    );
  }

  showEmptyWatchedNotify();
  hidePaginationForWatched();
}

function refreshQueuePage() {
  clearMoviesContainer();
  if (
    logicLib(
      LS_API.getFilmsFromQueue,
      paginationLib.getCurrentPage(),
      itemPerPage
    ).length > 0
  ) {
    generateLibraryContainer(
      LS_API.getFilmsFromQueue,
      paginationLib.getCurrentPage(),
      itemPerPage
    );
  }

  if (
    logicLib(
      LS_API.getFilmsFromQueue,
      paginationLib.getCurrentPage(),
      itemPerPage
    ).length === 0
  ) {
    paginationLib.setTotalItems(LS_API.getFilmsFromQueue().length);

    paginationLib.movePageTo(paginationLib.getCurrentPage() - 1);

    generateLibraryContainer(
      LS_API.getFilmsFromQueue,
      paginationLib.getCurrentPage(),
      itemPerPage
    );
  }

  showEmptyQueueNotify();
  hidePaginationForQueue();
}

function hidePaginationForWatched() {
  if (LS_API.getFilmsFromWatched().length <= itemPerPage) {
    refs.paginationLibContainer.style.display = 'none';
  } else if (refs.paginationLibContainer.style.display === 'none') {
    refs.paginationLibContainer.removeAttribute('style');
  }
}

function hidePaginationForQueue() {
  if (LS_API.getFilmsFromQueue().length <= itemPerPage) {
    refs.paginationLibContainer.style.display = 'none';
  } else if (refs.paginationLibContainer.style.display === 'none') {
    refs.paginationLibContainer.removeAttribute('style');
  }
}

function changeItemPerPage(e) {
  itemPerPage = e.target.value;
  paginationLib.setItemsPerPage(itemPerPage);
  paginationLib.reset();
  if (currentPage === 'watched') {
    refreshWatchedPage();
  } else if (currentPage === 'queue') {
    refreshQueuePage();
  }
}

function showEmptyWatchedNotify() {
  if (LS_API.getFilmsFromWatched().length === 0) {
    refs.movieContentBlock.removeAttribute('style');
  } else if (LS_API.getFilmsFromWatched().length !== 0) {
    refs.movieContentBlock.style.display = 'none';
  }
}

function showEmptyQueueNotify() {
  if (LS_API.getFilmsFromQueue().length === 0) {
    refs.movieContentBlock.removeAttribute('style');
  } else if (LS_API.getFilmsFromWatched().length !== 0) {
    refs.movieContentBlock.style.display = 'none';
  }
}
