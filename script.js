function initAnimalTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent .box-animaisinfo')

  if (tabContent.length && tabMenu.length) {
    function activeTab(qualquer) {
      tabContent.forEach((el) => {
        if (el.classList.contains('ativo')) {
          el.classList.remove('ativo');
        }
      })

      tabContent[qualquer].classList.add('ativo')

    }

    tabMenu.forEach((el, index) => {
      el.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }

  tabContent[0].classList.add('ativo')
}
initAnimalTab();

// Accordion
function initAccordion() {
  const descriptionSelect = document.querySelectorAll('.js-accordion dt')

  function accordionInsert() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  for (let i = 0; i < descriptionSelect.length; i++) {
    descriptionSelect[i].addEventListener('click', accordionInsert)
  }
}
initAccordion();

// Smooth Scrolling Interno

function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-nav a[href^="#"]')
  function smoothScrolling(evt) {
    evt.preventDefault()

    const hrefSelect = this.getAttribute('href')
    const section = document.querySelector(hrefSelect)
    // Other method with less support
    // section.scrollIntoView({
    //   block: 'start', /* center, end, start */
    //   behavior: 'smooth'
    // })
    const getTop = section.offsetTop
    window.scrollTo({
      top: getTop - 20,
      behavior: 'smooth'
    })
  }

  linksInternos.forEach((el) => {
    el.addEventListener('click', smoothScrolling)
  })
}
initSmoothScroll();

// Scroll reveal Animation

function initScrollReveal() {

  const sections = document.querySelectorAll('.js-scrollanim')

  function scrollRevealAnim() {

    for (i = 0; i < sections.length; i++) {
      const scrollTrigger = window.innerHeight * 0.75
      const topDistance = sections[i].getBoundingClientRect().top - scrollTrigger
      if (topDistance < 0) {
        sections[i].classList.add('ativo')
      }
    }
  }
  scrollRevealAnim()

  window.addEventListener('scroll', scrollRevealAnim)
} initScrollReveal()

// Fixed navbar transition

const navSelect = document.querySelector('nav')
const navInnerHeight = navSelect.offsetHeight

function navbarScrollTrigger() {
  const getWindowYValue = this.scrollY

  if (getWindowYValue > navInnerHeight) {
    navSelect.classList.add('nav-small')
  } else if (getWindowYValue <= navInnerHeight) {
    navSelect.classList.remove('nav-small')
  }
}

window.addEventListener('scroll', navbarScrollTrigger)


