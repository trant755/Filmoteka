import modalFilmCard from '../templates/movie-card.hbs';

const filmList = document.querySelector('.film__list');
const modalWindow = document.querySelector('.modal-window');
const body = document.querySelector('body');

function openModal() {
    filmList.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.film__item')) {
            modalWindow.showModal();
            body.style.overflow = "hidden";
        }


        const obj = {
            vote: 7.1,
                        votes: 1200,
                        popular: 'hex',
                        origTitle: 'yoPerdole',
                        genres: 'horror'
        }

        let murkup = modalFilmCard(obj);
        modalWindow.insertAdjacentHTML('afterbegin', murkup);
     });

}

function closeModal() {
    modalWindow.addEventListener('click', (event) => {
        let target = event.target;
        console.log('target: ', target);
        if (target.closest('.modal-window__close') || target.matches('.modal-window')) {
            modalWindow.close();
            body.style.overflow = "visible";
        }
    });
}


openModal();
closeModal();



// function openList() {
    
//     console.log('filmList: ', filmList);
// }

// openList();