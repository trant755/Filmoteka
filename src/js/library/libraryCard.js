// import localStorageAPI from './local-storage-api/local-storage-api';
import { onMarkupCards } from '../helpers/onMarkupCards';
import { refs } from '../helpers/refs';

// const LS_API = new localStorageAPI();

export const generateLibraryContainer = function (
  method,
  newPage,
  ItemPerPage
) {
  let RR = method();
  const watchF = refs.trandingContainer;

  let page = newPage;
  let ElPerPage = ItemPerPage;
  let lastEl = ElPerPage * page;
  let firstEl = lastEl - ElPerPage;
  const resultEL = RR.slice(firstEl, lastEl);

  onMarkupCards(resultEL, watchF, true);
  return resultEL;
};

export const logicLib = function (method, newPage, ItemPerPage) {
  let RR = method();
  const watchF = refs.trandingContainer;

  let page = newPage;
  let ElPerPage = ItemPerPage;
  let lastEl = ElPerPage * page;
  let firstEl = lastEl - ElPerPage;
  const resultEL = RR.slice(firstEl, lastEl);

  return resultEL;
};
