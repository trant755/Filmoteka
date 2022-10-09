import { refs } from './refs';
import MovieApiService from './fetchModule';
import localStorageAPI from './local-storage-api/local-storage-api';
import { onMarkupCards } from './onMarkupCards';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { options } from './options-of-pagination';

const API = new MovieApiService();
const LS_API = new localStorageAPI();

refs.searchInput.addEventListener('submit', searchFilm);

const pagination = new Pagination(refs.paginationContainer, options);

generateTrendingFilms();

function generateTrendingFilms() {
  API.fetchTrending().then(({ results, total_results }) => {
    pagination.setTotalItems(total_results);
    API.fetchGenres().then(LS_API.saveGenersLS);
    onMarkupCards(results, refs.trandingContainer);
    LS_API.saveTrendingCurentPage(results);
  });
}

refs.paginationContainer.addEventListener(
  'click',
  renderNewPageOfTrendingFilms
);

function renderNewPageOfTrendingFilms() {
  clearGallery();

  const newCurrentPage = pagination.getCurrentPage();
  API.addMoviesPage(newCurrentPage);
  if (API.query === '') {
    generateTrendingFilms();
  } else if (API.query !== '') {
    fetchSearchFilms();
  }
}

// function renderNewPageOfSearchfilms() {
//   clearGallery()

//   const
// }

function clearGallery() {
  refs.trandingContainer.innerHTML = '';
}

function searchFilm(ev) {
  ev.preventDefault();

  if (!refs.SearchErrMessage.classList.contains('is-hidden')) {
    refs.SearchErrMessage.classList.add('is-hidden');
  }
  API.query = ev.currentTarget.elements.searchQuery.value;

  if (API.query === '') return;

  fetchSearchFilms();
}

async function fetchSearchFilms() {
  const data = await API.fetchMovies();

  if (data.results.length === 0) {
    refs.SearchErrMessage.classList.remove('is-hidden');
    return;
  }

  pagination.reset();

  pagination.setTotalItems(data.total_results);
  clearGallery();
  API.resetMoviesPage();
  onMarkupCards(data.results, refs.trandingContainer);
}
