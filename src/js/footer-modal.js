import { refs } from './helpers/refs';

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.footerModal.addEventListener('click', onBackdropClick);

function toggleModal() {
  refs.footerModal.classList.toggle('is-hidden');

  if (!refs.footerModal.classList.contains('is-hidden')) {
    window.addEventListener('keydown', onPressKeyESC);
    refs.body.classList.add('modal-scroll');
    refs.toTopBtn.classList.add('is-hidden');
    refs.body.style.overflow = 'hidden';
  } else {
    window.removeEventListener('keydown', onPressKeyESC);
    refs.body.classList.remove('modal-scroll');
    refs.toTopBtn.classList.remove('is-hidden');
    refs.body.style.overflow = 'visible';
  }
}

function onPressKeyESC(event) {
  if (event.code === 'Escape') {
    toggleModal();
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    toggleModal();
  }
}
