function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('[data-scroll] a[href^="#"]')

  function smoothScrolling(evt) {
    evt.preventDefault()
    const href = this.getAttribute('href')
    const section = document.querySelector(href)
    // Other method with less support
    section.scrollIntoView({
      block: 'center', /* center, end, start */
      behavior: 'smooth'
    })
    // const sectionTop = section.offsetTop
    // window.scrollTo({
    //   top: sectionTop - 51 /*nav-height */,
    //   behavior: 'smooth'
    // })
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', smoothScrolling)
  })
}

export default initSmoothScroll