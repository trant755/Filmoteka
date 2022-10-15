(() => {
  const refs = {
    openModalBtn: document.querySelector('.footer__modal--open'),
    closeModalBtn: document.querySelector('.modal--close'),
    modal: document.querySelector('.backdrop-modal'),
  };


  console.log(refs.openModalBtn);
  console.log(refs.closeModalBtn);
  console.log(refs.modal);

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  window.addEventListener("keydown", onPressKeyESC);

    function onPressKeyESC(evt) {
      if (evt.code === "Escape") {
        toggleModal();
      }
    }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// ========================onPressKeyESC====================

// const gallery = document.querySelector('[footer-modal]')
refs.modal.addEventListener('click', onGalleryClick);

// gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
   evt.preventDefault();

    window.addEventListener("keydown", onPressKeyESC, { once: true });
    function onPressKeyESC(evt) {
      if (evt.code === "Escape") {
        instanse.close();
      }
    }
  }
