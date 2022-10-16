const API_WEB = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=8a38092ae2d24fc685ebce0502669b7c';

export default class MovieApiService {
  constructor() {
    this.needToFind = '';
    this.page = 1;
    this.id = 1;
  }

  fetchGenres() {
    const responceGenres = fetch(
      `${API_WEB}/genre/movie/list?${API_KEY}&language=en-US`
    )
      .then(responceGenres => {
        if (!responceGenres.ok) {
          throw new Error(responceGenres.status);
        }
        return responceGenres.json();
      })
      .catch(error => {
        error;
      });
    return responceGenres;
  }

  fetchTrending() {
    const responceTrending = fetch(
      `${API_WEB}/trending/movie/day?${API_KEY}&page=${this.page}`
    )
      .then(responceTrending => {
        if (!responceTrending.ok) {
          throw new Error(responceTrending.status);
        }
        return responceTrending.json();
      })
      .catch(error => {
        error;
      });
    return responceTrending;
  }

  fetchMovies() {
    const response = fetch(
      `${API_WEB}/search/movie?${API_KEY}&query=${this.needToFind}&page=${this.page}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => {
        console.log('Error on try...catch', error);
      });
    return response;
  }

  fetchTrailer(id) {
    console.log(id);
    this.id = id;
    console.log(this.id);

    const response = fetch(
      `${API_WEB}/movie/${this.id}/videos?${API_KEY}&language=en-US`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => {
        console.log('Error on try...catch', error);
      });
    return response;
  }

  addMoviesPage(number) {
    this.page = number;
  }

  resetMoviesPage() {
    this.page = 1;
  }

  get query() {
    return this.needToFind;
  }

  set query(newQuery) {
    this.needToFind = newQuery;
  }
}
