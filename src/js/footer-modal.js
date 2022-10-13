// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[footer-modal-open]'),
//     closeModalBtn: document.querySelector('[footer-modal-close]'),
//     modal: document.querySelector('[footer-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   window.addEventListener("keydown", onPressKeyESC);

//     function onPressKeyESC(evt) {
//       if (evt.code === "Escape") {
//         toggleModal();
//       }
//     }

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// ========================onPressKeyESC====================

// const gallery = document.querySelector('[footer-modal]')

// gallery.addEventListener('click', onGalleryClick);

// function onGalleryClick(evt) {
//    evt.preventDefault();

//     window.addEventListener("keydown", onPressKeyESC, { once: true });
//     function onPressKeyESC(evt) {
//       if (evt.code === "Escape") {
//         instanse.close();
//       }
//     }
//   }
