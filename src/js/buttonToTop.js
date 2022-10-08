const toTopBtn = document.querySelector('.button-to-top');
toTopBtn.addEventListener('click', onButtonClick);

function onButtonClick() {
  window.scrollTo(0, 0);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
}
