function initModal() {
  const modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('.modal .btn--close'),
    loginLink = document.querySelector('[data-modal-opener="login"]');
  ;

  function modalToggle(evt) {
    evt.preventDefault()
    modal.classList.toggle('active')
  }

  function modalClickOutside(evt) {
    evt.target
    if (evt.target === this) {
      modal.classList.remove('active')
    }
  }

  loginLink.addEventListener('click', modalToggle)
  modalCloseBtn.addEventListener('click', modalToggle)
  modal.addEventListener('click', modalClickOutside)
}

export default initModal