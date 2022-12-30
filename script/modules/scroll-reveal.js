function initScrollReveal() {
  const sections = document.querySelectorAll('[data-scrollreveal]')

  function scrollRevealAnim() {
    for (let i = 0; i < sections.length; i++) {
      const scrollTrigger = window.innerHeight * 0.75
      const topDistance = sections[i].getBoundingClientRect().top - scrollTrigger
      if (topDistance < 0) {
        sections[i].classList.add('ativo')
      }
    }
  }
  scrollRevealAnim()

  window.addEventListener('scroll', scrollRevealAnim)
}

export default initScrollReveal