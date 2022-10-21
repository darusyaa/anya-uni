// modals
// see-how
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-see-how-open]"),
    closeModalBtn: document.querySelector("[data-modal-see-how-close]"),
    modal: document.querySelector("[data-modal-see-how]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
