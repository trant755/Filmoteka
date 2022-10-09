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
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    toTopBtn.style.display = 'block';
    toTopBtn.style.opacity = 1;
  } else {
    toTopBtn.style.display = 'none';
  }
}
