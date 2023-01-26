function initModal() {
  const modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('.btn--close'),
    loginLink = document.querySelector('[data-modal-opener="login"]');
  ;

  function modalPopIn(evt) {
    evt.preventDefault()
    modal.classList.toggle('active')
  }

  function modalPopOut(evt) {
    evt.target
    if (evt.target === this || evt.target === modalCloseBtn) {
      modal.classList.remove('active')
    }
  }

  loginLink.addEventListener('click', modalPopIn)
  modal.addEventListener('click', modalPopOut)
}

export default initModal