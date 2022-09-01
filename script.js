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