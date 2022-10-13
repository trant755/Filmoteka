import localStorageApi from './local-storage-api/local-storage-api';
import { generateLibraryContainer, logicLib } from './libraryCard';
import { refs } from './refs';
import { openModal } from './modalWindow';
import Pagination from 'tui-pagination';
import { options } from './pagination-lib-options';

const LS_API = new localStorageApi();

export const currentLibraryPageEL = document.querySelector(
  '.library-header--list__link--active'
);

export let currentPage = '';

if (!refs.watched && !refs.queue) return;

// closeModal();

export const paginationLib = new Pagination(
  refs.paginationLibContainer,
  options
);

export let currentPaginationPage = 1;

console.log(currentPaginationPage);

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
    generateLibraryContainer(LS_API.getFilmsFromWatched, 1);
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
    generateLibraryContainer(LS_API.getFilmsFromQueue, 1);
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
  // console.log(newCurrentPage);
  console.log(currentPage);
  if (currentPage === 'watched') {
    generateLibraryContainer(LS_API.getFilmsFromWatched, newCurrentPage);
    paginationLib.setTotalItems(LS_API.getFilmsFromWatched().length);
  } else if (currentPage === 'queue') {
    generateLibraryContainer(LS_API.getFilmsFromQueue, newCurrentPage);
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
          console.log('ok');
          if (currentPage === 'watched') {
            refreshWatchedPage();
          } else if (currentPage === 'queue') {
            refreshQueuePage()
          }
    }

  });
};

closeModalInLib();

function refreshWatchedPage() {
  console.log(paginationLib.getCurrentPage());
  clearMoviesContainer();
  if(logicLib(LS_API.getFilmsFromWatched, paginationLib.getCurrentPage()).length > 0) {
    generateLibraryContainer(LS_API.getFilmsFromWatched, paginationLib.getCurrentPage());
    console.log(11);
  }

  if (
    logicLib(LS_API.getFilmsFromWatched, paginationLib.getCurrentPage())
      .length === 0
  ) {
    console.log(22);

    paginationLib.setTotalItems(LS_API.getFilmsFromWatched().length);

    paginationLib.movePageTo(paginationLib.getCurrentPage() - 1);

    generateLibraryContainer(LS_API.getFilmsFromWatched, paginationLib.getCurrentPage());

  }

  showEmptyWatchedNotify();
  hidePaginationForWatched();
}

function refreshQueuePage() {
  console.log(paginationLib.getCurrentPage());
  clearMoviesContainer();
  if(logicLib(LS_API.getFilmsFromQueue, paginationLib.getCurrentPage()).length > 0) {
    generateLibraryContainer(LS_API.getFilmsFromQueue, paginationLib.getCurrentPage());
    console.log(11);
  }

  if (
    logicLib(LS_API.getFilmsFromQueue, paginationLib.getCurrentPage())
      .length === 0
  ) {
    console.log(22);

    paginationLib.setTotalItems(LS_API.getFilmsFromQueue().length);

    paginationLib.movePageTo(paginationLib.getCurrentPage() - 1);

    generateLibraryContainer(LS_API.getFilmsFromQueue, paginationLib.getCurrentPage());
  }
  
  showEmptyQueueNotify();
  hidePaginationForQueue();
}

function hidePaginationForWatched() {
  if(LS_API.getFilmsFromWatched().length < 3) {
    refs.paginationLibContainer.style.display = 'none';
  } else if(refs.paginationLibContainer.style.display === 'none') {
    refs.paginationLibContainer.removeAttribute('style');
  }
}

function hidePaginationForQueue() {
  if(LS_API.getFilmsFromQueue().length < 3) {
    refs.paginationLibContainer.style.display = 'none';
  } else if(refs.paginationLibContainer.style.display === 'none') {
    refs.paginationLibContainer.removeAttribute('style');
  }
}

function showEmptyWatchedNotify() {
  if(LS_API.getFilmsFromWatched().length === 0) {
    refs.movieContentBlock.classList.remove('none');
  } else if(LS_API.getFilmsFromWatched().length !== 0) {
    refs.movieContentBlock.classList.add('none');
  }
}

function showEmptyQueueNotify() {
  if(LS_API.getFilmsFromQueue().length === 0) {
    refs.movieContentBlock.classList.remove('none');
  } else if(LS_API.getFilmsFromWatched().length !== 0) {
    refs.movieContentBlock.classList.add('none');
  }
}