import modalFilmCard from '../templates/movie-card.hbs';
import { currentLibraryPageEL, currentPage, currentPaginationPage} from './watchedQueue';
import generateLibraryContainer from './libraryCard';
import localStorageAPI from './local-storage-api/local-storage-api';
import { refs } from './refs';
// import Pagination from 'tui-pagination';
// import { options } from './options-of-pagination';

const API = new localStorageAPI();
// const pagination = new Pagination(refs.paginationContainer, options);

export let watchedStorageInclude = false;
export let queueStorageInclude = false;

function openModal() {
  refs.filmList.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;
    if (target.closest('.movie__link')) {
      refs.modalWindow.showModal();
      refs.body.style.overflow = 'hidden';
    
      getMovieID(target);
    }
  });
}

function closeModal() {
  refs.modalWindow.addEventListener('click', event => {
    let target = event.target;
    if (
      target.closest('.modal-window__close') ||
      target.matches('.modal-window')
    ) {
      refs.modalWindow.close();
      refs.body.style.overflow = 'visible';
    }

    if (currentLibraryPageEL) {
      if (currentPage === 'queue') {
        if (
          API.getFilmsFromQueue() &&
          API.getFilmsFromQueue().length > 0
        ) {
          clearMoviesContainer();
          refs.movieContentBlock.classList.add('none')
          console.log(currentPaginationPage);
          generateLibraryContainer(API.getFilmsFromQueue, currentPaginationPage);
        } else {
          refs.movieContentBlock.classList.remove('none');
        }
      }
      if (currentPage === 'watched') {
        if (
          API.getFilmsFromWatched() &&
          API.getFilmsFromWatched().length > 0
        ) {
          clearMoviesContainer();
          refs.movieContentBlock.classList.add('none');
          generateLibraryContainer(API.getFilmsFromWatched, currentPaginationPage);
        } else {
          refs.movieContentBlock.classList.remove('none');
        }
      }
    }
  });
}

function getMovieID(element) {
    let id = Number(element.closest('a[data-modal]').getAttribute('data-id'));
  getMovieById(id);
}

// function getMovieIdLib() {

// }

function getMovieById(id) {
    let film = null;
    
    if (!currentLibraryPageEL) {
        film = API.getTrendingFilmById(id);
      } else {
        if(currentPage === 'watched') {
            film = API.getFilmFromWathedById(id);
        }
        if(currentPage === 'queue') {
            film = API.getFilmFromQueueById(id);
        }
    }

  let genres = film.genre_ids.map(id => {
    if (film.genre_ids?.length === 0) return;
    let genresArray = API.getGeneresLS().genres?.find(obj => obj.id === id);

    return genresArray.name;
  });

  film.genres =
    genres.length > 3 ? genres.slice(0, 3).join(', ') : genres.join(', ');

  let markup = modalFilmCard(film);

  refs.modalWindowWrap.innerHTML = markup;

  const addToWatched = document.querySelector('#btn-add-to-watched');
  const addToQueue = document.querySelector('#btn-add-to-queue');

  includeTest(id);

  addToWatched.textContent = watchedStorageInclude
    ? 'Remove from watched'
    : 'Add to watched';
  addToQueue.textContent = queueStorageInclude
    ? 'Remove from queue'
    : 'Add to queue';

  onBtnClickFunction(addToWatched, addToQueue, id, film);
}

function includeTest(id) {
  if (API.getFilmFromQueueById(id)) {
    queueStorageInclude = true;
  } else {
    queueStorageInclude = false;
  }

  if (API.getFilmFromWathedById(id)) {
    watchedStorageInclude = true;
  } else {
    watchedStorageInclude = false;
  }
}

function onBtnClickFunction(addToWatched, addToQueue, id, data) {
  addToWatched.addEventListener('click', onWatchedClick);
  addToQueue.addEventListener('click', onQueueClick);

  function onWatchedClick() {
    if (watchedStorageInclude) {
      API.removeFilmFromWatched(id);
    }

    if (!watchedStorageInclude) {
      API.saveFilmToWathched(data);
    }

    watchedStorageInclude = watchedStorageInclude ? false : true;
    addToWatched.textContent = watchedStorageInclude
      ? 'Remove from watched'
      : 'Add to watched';
  }

  function onQueueClick() {
    if (queueStorageInclude) {
      API.removeFilmFromQueue(id);
    }
    if (!queueStorageInclude) {
      API.saveFilmToQueue(data);
    }

    queueStorageInclude = queueStorageInclude ? false : true;
    addToQueue.textContent = queueStorageInclude
      ? 'Remove from queue'
      : 'Add to queue';
  }
}

function clearMoviesContainer() {
  refs.trandingContainer.innerHTML = '';
}

openModal();
closeModal();
