(() => {
    const refs = {
      closeModalBtn: document.querySelector('[data-modal-more-close]'),
      modal: document.querySelector('[data-modal-more]'),
    };
  
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
    document.addEventListener('click', e => {
      if (e.target.matches('[data-modal-more-open]')) {
        toggleModal();
      }
    });
  })();