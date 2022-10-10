import localStorageApi from './local-storage-api/local-storage-api';
const LS_API = new localStorageApi();
import { refs } from './refs';

refs.watched.addEventListener('click', onClickWatched);
refs.queue.addEventListener('click', onClickQueue);

function onClickWatched() {
  refs.watched.classList.add('library--btn--active');
  refs.queue.classList.remove('library--btn--active');

  console.log(LS_API.getFilmsFromWatched());
}

function onClickQueue() {
  refs.watched.classList.remove('library--btn--active');
  refs.queue.classList.add('library--btn--active');
}
