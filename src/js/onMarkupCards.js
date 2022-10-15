import filmCards from '../templates/filmCards.hbs';
import LocalStorageAPI from './local-storage-api/local-storage-api';

const localStorageAPI = new LocalStorageAPI();

export const onMarkupCards = function (films, container, rating) {
  const markup = films
    .map(film => {
      const obje = {};
      obje.id = film.id;
      if (film.release_date?.length > 0) {
        obje.release_date = film.release_date.slice(0, 4);
      }
      if (film.poster_path !== null || film.poster_path?.length > 0) {
        obje.poster_path = '//image.tmdb.org/t/p/w400' + film.poster_path;
      }
      obje.title = film.title;
      if (rating) {
        if (String(film.vote_average).length > 3) {
          obje.vote_average = String(film.vote_average).slice(0, 3);
        } else {
          obje.vote_average = film.vote_average;
        }
      }

      let genres = film.genre_ids.map(id => {
        if (film.genre_ids?.length === 0) return;
        let genresArray = localStorageAPI
          .getGeneresLS()
          .genres?.find(obj => obj.id === id);

        return genresArray.name;
      });

      genres.length > 3
        ? (obje.genresAndMore = genres.slice(0, 2).join(', '))
        : (obje.genres = genres.join(', '));

      return filmCards(obje);
    })
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
};
