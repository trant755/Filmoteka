import MovieApiService from './fetchModule';

let test2 = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const API = new MovieApiService();

localStorage.setItem('savedGenresId', JSON.stringify(test2));

createTrendingFilms();

function createTrendingFilms() {
  API.fetchTrending().then(({ results }) => {
    console.log(results);
    onMarkupGallery(results);
  });
}

function onMarkupGallery(data) {
  const markup = data
    .map(film => {
      let year = film.release_date.slice(0, 4);
      console.log(year);

      const savedGenresId = localStorage.getItem('savedGenresId');

      let genres = film.genre_ids
        .map(id => {
          let genresArray = JSON.parse(savedGenresId).find(
            obj => obj.id === id
          );
          return genresArray.name;
        })
        .join(', ');
      console.log(genres);
      //   hbs(film);
    })
    .join('');
  // refs.galleryContainer.insertAdjacentHTML('beforeend', markup);

  // API.incrementPage()
}
