const API_WEB = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=8a38092ae2d24fc685ebce0502669b7c';

class MovieApiService {
  constructor() {
    this.needToFind = '';
    this.page = 1;
  }

  fetchGenres() {
    const responceGenres = fetch(
      `${API_WEB}/genre/movie/list?${API_KEY}&language=en-US`
    )
      .then(responceGenres => {
        if (!responceGenres.ok) {
          throw new Error(responceGenres.status);
        }
        return response.json();
      })
      .catch(error => {
        error;
      });
  }

  fetchTrending() {
    const responceTrending = fetch(
      `${API_WEB}/trending/movie/day?${API_KEY}&page=${this.page}`
    )
      .then(responceTrending => {
        if (!responceTrending.ok) {
          throw new Error(responceTrending.status);
        }
        return response.json();
      })
      .catch(error => {
        error;
      });
  }

  fetchMovies() {
    try {
      const responce = fetch(
        `${API_WEB}/search/movie?${API_KEY}&query=${this.needToFind}&page=${this.page}`
      ).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });

      const data = responce.data;

      return data;
    } catch (error) {
      console.log('Error on try...catch', error);
    }
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

const MovieApi = new MovieApiService();
