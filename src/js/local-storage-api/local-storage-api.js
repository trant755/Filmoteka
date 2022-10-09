const GENERS_KEY = 'savedGenresId';
const TRENDING_KEY = 'savedTrendingCurentPage';
const WATCHED_KEY = 'savedWatched';
const QUEUE_KEY = 'savedQueue';

class localStorageAPI {
  constructor() {}

  // ======= GENERS =====
  saveGenersLS(json) {
    let genersJSON = localStorage.getItem(GENERS_KEY);

    if (!genersJSON) {
      localStorage.setItem(GENERS_KEY, json);
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

  saveTrendingCurentPage(json) {
    localStorage.setItem(TRENDING_KEY, json);
  }

  getTrendingCurentPage() {
    const trendingCurentPage = localStorage.getItem(TRENDING_KEY);
    return JSON.parse(trendingCurentPage);
  }

  getTrendingFilmById(id) {
    let trendingCurentPage = this.getTrendingCurentPage();
    return trendingCurentPage.find(film => film.id === id);
  }

  removeTrendingCurentPage() {
    localStorage.removeItem(TRENDING_KEY);
  }

  // ======= WATCHED =======

  // ======== QUEUE =======
}

const API = new localStorageAPI();

API.getGeneresLS();
