import filmCards from '../templates/filmCards.hbs';

export const onMarkupCards = function (films, container, rating) {
  const markup = films
    .map(film => {
      const savedGenresId = localStorage.getItem('savedGenresId');

      const obje = {};
      obje.id = film.id;
      if (film.release_date.length > 0) {
        obje.release_date = film.release_date.slice(0, 4);
      }
      if (film.poster_path.length > 0) {
        obje.poster_path = '//image.tmdb.org/t/p/w400' + film.poster_path;
      }
      obje.title = film.title;
      if (rating) {
        obje.vote_average = film.vote_average;
      }
      let genres = film.genre_ids.map(id => {
        let genresArray = JSON.parse(savedGenresId).find(obj => obj.id === id);

        return genresArray.name;
      });
      obje.genres =
        genres.length > 3 ? genres.slice(0, 3).join(', ') : genres.join(', ');

      return filmCards(obje);
    })
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
};
