import modalFilmCard from '../templates/movie-card.hbs';
import localStorageAPI from './local-storage-api/local-storage-api';


const refs = {

    filmList: document.querySelector('#movie-container'),
    modalWindow: document.querySelector('.modal-window'),
    modalWindowWrap: document.querySelector('.modal-window__wrapper'),
    body: document.querySelector('body')
}

const API = new localStorageAPI();



 function openModal() {
  
    
     refs.filmList.addEventListener('click', (event) => {
         event.preventDefault();
        let target = event.target;
        if (target.closest('.movie__link')) {
            refs.modalWindow.showModal();
            refs.body.style.overflow = "hidden";
            getMovieID(target);

        }
     });
    }

function closeModal() {
    refs.modalWindow.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.modal-window__close') || target.matches('.modal-window')) {
            refs.modalWindow.close();
            refs.body.style.overflow = "visible";
        }
    });
}
function getMovieID(element) {
    let id = Number(element.closest('a[data-modal]').getAttribute('data-id'));
    getMovieById(id);
}
function getMovieById(id) {
    let film = API.getTrendingFilmById(id);
    
     let genres = film.genre_ids.map(id => {
         if (film.genre_ids?.length === 0) return;
    let genresArray = API
        .getGeneresLS()
         .genres?.find(obj => obj.id === id);
          
        return genresArray.name;
    });
    film.genres = genres.length > 3 ? genres.slice(0, 3).join(', ') : genres.join(', ');
    let markup = modalFilmCard(film);
    refs.modalWindowWrap.innerHTML = markup;
}

openModal();
closeModal();


