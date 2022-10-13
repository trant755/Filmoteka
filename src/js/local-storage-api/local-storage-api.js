const GENERS_KEY = 'savedGenresId';
const TRENDING_KEY = 'savedTrendingCurentPage';
const WATCHED_KEY = 'savedWatched';
const QUEUE_KEY = 'savedQueue';

export default class localStorageAPI {
  constructor() {}

  // ======= GENERS =====
  saveGenersLS(data) {
    let genersJSON = localStorage.getItem(GENERS_KEY);

    if (!genersJSON) {
      let genres = JSON.stringify(data);
      localStorage.setItem(GENERS_KEY, genres);
    }
  }

  getGeneresLS() {
    let genersJSON = localStorage.getItem(GENERS_KEY);
    if (genersJSON) {
      return JSON.parse(genersJSON);
    }
  }

  removeGeneresLS() {
    localStorage.removeItem(GENERS_KEY);
  }

  // ======= TRENDING =======

  saveTrendingCurentPage(data) {
    let currentTrending = JSON.stringify(data);
    localStorage.setItem(TRENDING_KEY, currentTrending);
  }

  getTrendingCurentPage() {
    const trendingCurentPage = localStorage.getItem(TRENDING_KEY);
    return JSON.parse(trendingCurentPage);
  }

  getTrendingFilmById(id) {
    let trendingCurentPage = this.getTrendingCurentPage();
    return trendingCurentPage?.find(film => film.id === id);
    console.log('film: ', film);
  }

  removeTrendingCurentPage() {
    localStorage.removeItem(TRENDING_KEY);
  }

  // ======= WATCHED =======

  saveFilmToWathched(data) {
    let watchedLs = localStorage.getItem(WATCHED_KEY);
    let watched =
      !watchedLs || watchedLs.length === 0 ? [] : JSON.parse(watchedLs);
    if (!data) return console.log('нима data');

    watched.unshift(data);
    localStorage.setItem(WATCHED_KEY, JSON.stringify(watched));
  }

  getFilmsFromWatched() {
    let watchedLs = localStorage.getItem(WATCHED_KEY);
    if (watchedLs) {
      return JSON.parse(watchedLs);
    }
  }

  getFilmFromWathedById(id) {
    let savedWatched = this.getFilmsFromWatched();
    return savedWatched?.find(film => film.id === id);
  }

  removeFilmFromWatched(id) {
    let savedWatched = this.getFilmsFromWatched();

    let filmToREmove = savedWatched.findIndex(film => film.id === id);
    savedWatched.splice(filmToREmove, 1);

    localStorage.setItem(WATCHED_KEY, JSON.stringify(savedWatched));
  }

  removeSaveWatchedFilms() {
    localStorage.removeItem(WATCHED_KEY);
  }

  // ======== QUEUE =======

  saveFilmToQueue(data) {
    let queueLs = localStorage.getItem(QUEUE_KEY);
    let queue = !queueLs || queueLs.length === 0 ? [] : JSON.parse(queueLs);
    if (!data) return console.log('нима data');

    queue.unshift(data);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }

  getFilmsFromQueue() {
    let queueLs = localStorage.getItem(QUEUE_KEY);
    if (queueLs) {
      return JSON.parse(queueLs);
    }
  }

  getFilmFromQueueById(id) {
    let savedQueue = this.getFilmsFromQueue();
    return savedQueue?.find(film => film.id === id);
  }

  removeFilmFromQueue(id) {
    let savedQueue = this.getFilmsFromQueue();

    let filmToREmove = savedQueue.findIndex(film => film.id === id);
    savedQueue.splice(filmToREmove, 1);

    localStorage.setItem(QUEUE_KEY, JSON.stringify(savedQueue));
  }

  removeSaveWatchedFilms() {
    localStorage.removeItem(QUEUE_KEY);
  }
}
