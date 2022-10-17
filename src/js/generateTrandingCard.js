import { refs } from './refs';
import MovieApiService from './fetchModule';
import localStorageAPI from './local-storage-api/local-storage-api';
import { onMarkupCards } from './onMarkupCards';
import Pagination from 'tui-pagination';
import { options } from './options-of-pagination';
import {initChangeOfThemeOnMain} from './dark-theme';
// import openModal from'./modalWindow';

const API = new MovieApiService();
const LS_API = new localStorageAPI();

let oldQuery = '';

refs.searchInput.addEventListener('submit', searchFilm);

const pagination = new Pagination(refs.paginationContainer, options);

refs.loader.classList.remove('is-hidden');

initChangeOfThemeOnMain();
generateHomePage();

function generateHomePage() {
  if (!LS_API.getGeneresLS()) {
    API.fetchGenres().then(LS_API.saveGenersLS);
  }

  // getSiteTheme();
  generateTrendingFilms();
}

function generateTrendingFilms() {
  API.fetchTrending().then(({ results, total_results }) => {
    pagination.setTotalItems(total_results);
    onMarkupCards(results, refs.trandingContainer);
    LS_API.saveTrendingCurentPage(results);

    refs.loader.classList.add('is-hidden');
  });
}

refs.paginationContainer.addEventListener(
  'click',
  renderNewPageOfTrendingFilms
);

function renderNewPageOfTrendingFilms(e) {
  if (
    // !e.target.classList.contains('tui-page-btn') ||
    // e.target.classList.contains('tui-is-selected') ||
    // e.target.classList.contains('tui-is-disabled')
    e.target.classList.contains('tui-pagination')
  )
    return;

  clearGallery();
  
  const newCurrentPage = pagination.getCurrentPage();

  API.addMoviesPage(newCurrentPage);

  if (API.query === '') {
    generateTrendingFilms();
  } else if (API.query !== '') {
    fetchSearchFilms();
  }
}

function clearGallery() {
  refs.trandingContainer.innerHTML = '';
}

async function searchFilm(ev) {
  ev.preventDefault();

  API.query = ev.currentTarget.elements.searchQuery.value;

  if (API.query === '') return;

  API.resetMoviesPage();

  refs.loader.classList.remove('is-hidden');

  await fetchSearchFilms();
  if (refs.SearchErrMessage.classList.contains('is-hidden')) {
    pagination.reset();
  }

  refs.loader.classList.add('is-hidden');
}

async function fetchSearchFilms() {
  const data = await API.fetchMovies();

  if (data.results.length === 0) {
    refs.SearchErrMessage.classList.remove('is-hidden');

    API.query = oldQuery;
    return;
  } else {
    refs.SearchErrMessage.classList.add('is-hidden');
  }
  oldQuery = API.query;
  pagination.setTotalItems(data.total_results);
  clearGallery();
  API.resetMoviesPage();
  onMarkupCards(data.results, refs.trandingContainer);
  LS_API.saveTrendingCurentPage(data.results);

  hidePaginationForSearch(data);
}

function hidePaginationForSearch(data) {
  if (data.total_pages === 1) {
    refs.paginationContainer.style.display = 'none';
  } else if (refs.paginationContainer.style.display === 'none') {
    refs.paginationContainer.removeAttribute('style');
  }
}


