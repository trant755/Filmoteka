import { refs } from './refs';
import MovieApiService from './fetchModule';
import localStorageAPI from './local-storage-api/local-storage-api';
import { onMarkupCards } from './onMarkupCards';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { options } from './options-of-pagination';

const API = new MovieApiService();
const LS_API = new localStorageAPI();

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

async function renderNewPageOfTrendingFilms() {
  clearGallery();

  const newCurrentPage = pagination.getCurrentPage();
  API.addMoviesPage(newCurrentPage);

  generateTrendingFilms();
}

function clearGallery() {
  refs.trandingContainer.innerHTML = '';
}
