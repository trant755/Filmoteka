const watched = document.querySelector('.library--btn__watched');
const queue = document.querySelector('.library--btn__queue');

watched.addEventListener('click', onClickWatched);
queue.addEventListener('click', onClickQueue);

function onClickWatched() {
  console.log('press watched');
}

function onClickQueue() {
  console.log('press queue');
}
