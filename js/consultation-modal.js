(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-consult-close]'),
    modal: document.querySelector('[data-modal-consult]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  document.addEventListener('click', e => {
    if (e.target.matches('[data-modal-consult-open]')) {
      toggleModal();
    }
  });
})();
