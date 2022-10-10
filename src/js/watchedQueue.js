const watched = document.querySelector('.library--btn__watched');
const queue = document.querySelector('.library--btn__queue');

watched.addEventListener('click', onClickWatched);
queue.addEventListener('click', onClickQueue);

function onClickWatched() {
  watched.classList.add('library--btn--active');
  queue.classList.remove('library--btn--active');
}

function onClickQueue() {
  watched.classList.remove('library--btn--active');
  queue.classList.add('library--btn--active');
}
