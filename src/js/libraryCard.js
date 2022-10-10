import localStorageAPI from './local-storage-api/local-storage-api';
import { onMarkupCards } from './onMarkupCards';
import { refs } from './refs';

const LS_API = new localStorageAPI();

generateLibraryFilm(LS_API.getFilmsFromWatched);
generateLibraryFilm(LS_API.getFilmsFromQueue);

function generateLibraryFilm(method) {
  let RR = method();
  const watchF = refs.trandingContainer;

  let page = 1;
  let ElParePage = 20;
  let lastEl = ElParePage * page;
  let firstEl = lastEl - ElParePage;
  const resultEL = RR.slice(firstEl, lastEl);

  onMarkupCards(resultEL, watchF, true);
}
