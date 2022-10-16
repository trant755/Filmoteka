import modalFilmCard from '../templates/movie-card.hbs';
import { currentLibraryPageEL, currentPage } from './watchedQueue';
// import generateLibraryContainer from './libraryCard';
import localStorageAPI from './local-storage-api/local-storage-api';
import { refs } from './refs';
import MovieApiService from './fetchModule';

const API = new localStorageAPI();
const FetchAPI = new MovieApiService();

export let watchedStorageInclude = false;
export let queueStorageInclude = false;

export const openModal = function () {
  refs.filmList.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;
    if (target.closest('.movie__link')) {
      refs.modalWindow.showModal();
      if (!refs.trailerContainer.classList.contains('is-hidden')) {
        refs.trailerContainer.classList.add('is-hidden');
      }

      getMovieID(target);
      scrollLock();
      escListener(true);
    }
  });
};
function closeModal() {
  refs.modalWindow.addEventListener('click', event => {
    let target = event.target;
    if (
      target.classList.contains('close-btn') ||
      target.parentNode.classList.contains('close-btn') ||
      target.classList.contains('modal-window')
    ) {
      if (!refs.trailerContainer.classList.contains('is-hidden')) {
        refs.trailerContainer.classList.add('is-hidden');
        refs.trailerContainer.nextSibling.nextSibling.firstElementChild.removeAttribute(
          'style'
        );
        refs.youtube.src = '';
        return;
      }
    }
    if (
      target.closest('.modal-window__close') ||
      target.matches('.modal-window')
    ) {
      refs.modalWindow.close();
      scrollLock();
      escListener(false);
    }
  });
}

function scrollLock() {
  refs.modalWindow.hasAttribute('open')
    ? (refs.body.style.overflow = 'hidden')
    : (refs.body.style.overflow = 'visible');
}

function escListener(bool) {
  if (bool === true) {
    document.addEventListener('keydown', listenerHandler);
  }
  if (bool === false) {
    document.removeEventListener('keydown', listenerHandler);
  }
}

function listenerHandler(event) {
  if (event.key === 'Escape') {
    refs.body.style.overflow = 'visible';
    document.removeEventListener('keydown', listenerHandler);
  }
}

function getMovieID(element) {
  let id = Number(element.closest('a[data-modal]').getAttribute('data-id'));
  getMovieById(id);
}

function getMovieById(id) {
  let film = null;

  if (!currentLibraryPageEL) {
    film = API.getTrendingFilmById(id);
  } else {
    if (currentPage === 'watched') {
      film = API.getFilmFromWathedById(id);
    }
    if (currentPage === 'queue') {
      film = API.getFilmFromQueueById(id);
    }
  }

  if (String(film.vote_average).length > 3) {
    film.vote_average = String(film.vote_average).slice(0, 3);
  }

  let genres = film.genre_ids.map(id => {
    if (film.genre_ids?.length === 0) return;
    let genresArray = API.getGeneresLS().genres?.find(obj => obj.id === id);

    return genresArray.name;
  });

  film.genres = genres.length > 0 ? genres.join(', ') : 'No info';
  let markup = modalFilmCard(film);
  refs.modalWindowWrap.innerHTML = markup;

  const addToWatched = document.querySelector('#btn-add-to-watched');
  const addToQueue = document.querySelector('#btn-add-to-queue');
  const trailerBtn = document.querySelector('.trailer-btn');

  includeTest(id);
  addToWatched.textContent = watchedStorageInclude
    ? 'Remove from watched'
    : 'Add to watched';
  addToQueue.textContent = queueStorageInclude
    ? 'Remove from queue'
    : 'Add to queue';
  if (watchedStorageInclude) {
    addToWatched.classList.remove('movie-card__btn--active');
  } else {
    addToWatched.classList.add('movie-card__btn--active');
  }
  if (queueStorageInclude) {
    addToQueue.classList.remove('movie-card__btn--active');
  } else {
    addToQueue.classList.add('movie-card__btn--active');
  }
  onBtnClickFunction(addToWatched, addToQueue, id, film);

  trailerBtn.addEventListener('click', async () => {
    await getTrailer(id, trailerBtn);
  });
}

async function getTrailer(id, trailerBtn) {
  await FetchAPI.fetchTrailer(id).then(res => {
    if (res.results.length === 0) {
      trailerBtn.textContent = 'No trailer';
      trailerBtn.classList.remove('trailer-btn--active');
      return;
    }
    let trailer = res.results.find(tr => tr.name === 'Official Trailer');
    refs.youtube.src = 'https://www.youtube.com/embed/' + trailer.key;
    refs.trailerContainer.classList.remove('is-hidden');
    refs.trailerContainer.nextSibling.nextSibling.firstElementChild.style.fill =
      'white';
  });
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
    if (watchedStorageInclude) {
      addToWatched.classList.remove('movie-card__btn--active');
    } else {
      addToWatched.classList.add('movie-card__btn--active');
    }
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
    if (queueStorageInclude) {
      addToQueue.classList.remove('movie-card__btn--active');
    } else {
      addToQueue.classList.add('movie-card__btn--active');
    }
  }
}

openModal();
closeModal();
