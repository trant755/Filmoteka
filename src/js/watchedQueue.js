import localStorageApi from './local-storage-api/local-storage-api';
const LS_API = new localStorageApi();
import { refs } from './refs';

refs.watched.addEventListener('click', onClickWatched);
refs.queue.addEventListener('click', onClickQueue);

onClickWatched();

function onClickWatched() {
  refs.watched.classList.add('library--btn--active');
  refs.queue.classList.remove('library--btn--active');

  if (LS_API.getFilmsFromWatched() && LS_API.getFilmsFromWatched.length > 0) {
    clearMoviesContainer();
    refs.movieContentBlock.styles.display = 'none';
  }
}

function onClickQueue() {
  refs.watched.classList.remove('library--btn--active');
  refs.queue.classList.add('library--btn--active');
}

function clearMoviesContainer() {
  refs.trandingContainer.innerHTML = '';
}
