// import localStorageAPI from './local-storage-api/local-storage-api';
import { onMarkupCards } from './onMarkupCards';
import { refs } from './refs';

// const LS_API = new localStorageAPI();

export const generateLibraryContainer = function (method, newPage) {
  // console.log(method);
  console.log('asd', newPage);

  let RR = method();
  const watchF = refs.trandingContainer;

  let page = newPage;
  let ElPerPage = 2;
  let lastEl = ElPerPage * page;
  let firstEl = lastEl - ElPerPage;
  const resultEL = RR.slice(firstEl, lastEl);

  onMarkupCards(resultEL, watchF, true);
  return resultEL;
}

export const logicLib = function(method, newPage) {
  let RR = method();
  const watchF = refs.trandingContainer;

  let page = newPage;
  let ElPerPage = 2;
  let lastEl = ElPerPage * page;
  let firstEl = lastEl - ElPerPage;
  const resultEL = RR.slice(firstEl, lastEl);

  return resultEL;
}
