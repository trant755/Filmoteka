//? Работающая версия

const API_WEB = 'https://api.themoviedb.org/3/search/movie?';
const API_KEY = 'api_key=8a38092ae2d24fc685ebce0502669b7c';

function fetchVideos(needFind) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${needFind}?api_key=8a38092ae2d24fc685ebce0502669b7c&page=1&include_adult=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

fetchVideos('62');
fetchVideos('100');
fetchVideos('1');

// ${ API_WEB }${ API_KEY }

// https://api.themoviedb.org/3/movie/100?api_key=8a38092ae2d24fc685ebce0502669b7c

//! Требует допилки
//* import axios from "axios";

// const API_WEB = "https://api.themoviedb.org/3/movie/";
// const API_KEY = "?api_key=8a38092ae2d24fc685ebce0502669b7c&";
// const API_OPTIONS = "page=1&include_adult=true";

// class MovieApiService {
//   constructor() {
//     this.needToFind = "";
//     this.page = 1;
//   }

//   fetchMovies() {
//     try {
//       const responce = fetch(
//         `https://api.themoviedb.org/3/movie/100?api_key=8a38092ae2d24fc685ebce0502669b7c&page=1&include_adult=true`
//       ).then((response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       });
//       `${API_WEB}${API_KEY}q=${this.needToFind}${API_OPTIONS}&page=${this.page}`;
//       const data = responce.data;

//       this.addMovies();

//       return data;
//     } catch (error) {
//       console.log("Error on try...catch", error);
//     }
//   }

//   addMovies() {
//     this.page += 1;
//   }

//   resetMovies() {
//     this.page = 1;
//   }

//   get query() {
//     return this.needToFind;
//   }

//   set query(newQuery) {
//     this.needToFind = newQuery;
//   }
// }

// console.log();
