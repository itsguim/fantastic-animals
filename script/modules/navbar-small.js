function initNavSmaller() {

  function navbarScrollTrigger() {
    const navbar = document.querySelector('[data-nav-change="small"]')
    const navInnerHeight = navbar.offsetHeight

    const getWindowYValue = this.scrollY

    if (getWindowYValue > navInnerHeight) {
      navbar.classList.add('nav-small')
    } else if (getWindowYValue <= navInnerHeight) {
      navbar.classList.remove('nav-small')
    }
  }

  window.addEventListener('scroll', navbarScrollTrigger)
}

export default initNavSmaller

