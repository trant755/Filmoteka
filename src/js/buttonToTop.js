const toTopBtn = document.querySelector('.button-to-top');
const svgIcon = document.querySelector('.to-top-icon');

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
    toTopBtn.style.visibility = 'visible';
    svgIcon.style.opacity = 1;
    toTopBtn.style.opacity = 1;
  } else {
    toTopBtn.style.visibility = 'hiden';
    svgIcon.style.opacity = 0;
    toTopBtn.style.opacity = 0;
  }
}
