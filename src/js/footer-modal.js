import { refs } from './refs';

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.footerModal.addEventListener('click', onBackdropClick);

function toggleModal() {
  refs.footerModal.classList.toggle('is-hidden');

  if(!refs.footerModal.classList.contains('is-hidden')) {
    window.addEventListener("keydown", onPressKeyESC);
    refs.body.classList.add('modal-scroll');
  } else {
    window.removeEventListener("keydown", onPressKeyESC);
    refs.body.classList.remove('modal-scroll');
  }
}

function onPressKeyESC(event) {
  if (event.code === "Escape") {
    toggleModal();
  }
}

function onBackdropClick(event) {
  if(event.target === event.currentTarget) {
    toggleModal();
  }
}