import filmCards from '../templates/filmCards.hbs';

export const onMarkupCards = function (films, container) {
  const markup = films
    .map(film => {
      const savedGenresId = localStorage.getItem('savedGenresId');

      const obje = {};
      obje.release_date = film.release_date.slice(0, 4);
      obje.id = film.id;
      obje.poster_path = '//image.tmdb.org/t/p/w400' + film.poster_path;
      obje.title = film.title;
      // obje.vote_average = '';
      obje.genres = film.genre_ids
        .map(id => {
          let genresArray = JSON.parse(savedGenresId).find(
            obj => obj.id === id
          );

          return genresArray.name;
        })
        .join(', ');
      return filmCards(obje);
    })
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
};
