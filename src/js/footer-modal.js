(() => {
  const refs = {
    openModalBtn: document.querySelector('[footer-modal-open]'),
    closeModalBtn: document.querySelector('[footer-modal-close]'),
    modal: document.querySelector('[footer-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
