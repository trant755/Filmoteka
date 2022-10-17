// const toTopBtn = document.querySelector('.button-to-top');
// const svgIcon = document.querySelector('.to-top-icon');

import { refs } from './refs';

refs.toTopBtn.addEventListener('click', onButtonClick);

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
    refs.toTopBtn.style.visibility = 'visible';
    refs.svgIcon.style.opacity = 1;
    refs.toTopBtn.style.opacity = 1;
  } else {
    refs.toTopBtn.style.visibility = 'hiden';
    refs.svgIcon.style.opacity = 0;
    refs.toTopBtn.style.opacity = 0;
  }
}
