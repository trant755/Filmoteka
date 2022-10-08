const toTopBtn = document.querySelector('.button-to-top');
console.log(toTopBtn);

toTopBtn.addEventListener('click', onButtonClick);

function onButtonClick() {
  window.scrollTo(0, 0);
  console.log('sho?');
}
