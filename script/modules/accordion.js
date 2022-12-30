function initAccordion() {
  const accordionHeaders = document.querySelectorAll('[data-accordion] dt')

  function accordionInsert() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  for (let i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].addEventListener('click', accordionInsert)
  }
}

export default initAccordion