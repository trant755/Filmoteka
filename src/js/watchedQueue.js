import localStorageApi from './local-storage-api/local-storage-api';
const LS_API = new localStorageApi();
import { refs } from './refs';

refs.watched.addEventListener('click', onClickWatched);
refs.queue.addEventListener('click', onClickQueue);

console.log(refs.movieContentBlock);

let currentPage = '';

onClickWatched();

function onClickWatched() {
  currentPage = 'watched';
  refs.watched.classList.add('library--btn--active');
  refs.queue.classList.remove('library--btn--active');

  if (LS_API.getFilmsFromWatched() && LS_API.getFilmsFromWatched.length > 0) {
    clearMoviesContainer();
    refs.movieContentBlock.classList.add('none');
  } else {
    refs.movieContentBlock.classList.remove('none');
  }
}

function onClickQueue() {
  currentPage = 'queue';
  refs.watched.classList.remove('library--btn--active');
  refs.queue.classList.add('library--btn--active');

  if (LS_API.getFilmsFromQueue && LS_API.getFilmsFromQueue.length > 0) {
    clearMoviesContainer();
    refs.movieContentBlock.classList.add('none');
  } else {
    refs.movieContentBlock.classList.remove('none');
  }
}

function clearMoviesContainer() {
  refs.trandingContainer.innerHTML = '';
}
