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


