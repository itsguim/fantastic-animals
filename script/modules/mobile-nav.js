export default function mobileNavHandler() {
  const btn = document.querySelector('[data-menumobile="button"]')
  const navList = document.querySelector('[data-menumobile="nav-list"]')
  const htmlDoc = document.documentElement

  function toggleMenu() {
    navList.classList.toggle('open')
    handleClickOutside()
  }

  function handleClickOutside() {

    htmlDoc.addEventListener('click', closeContent)

    function closeContent(evt) {
      const target = evt.target

      if ((target !== btn) && !navList.contains(target)) { /* If the target isn't the trigger itself and is not contained in the element */
        navList.classList.remove('open')
        htmlDoc.removeEventListener('click', closeContent) /* Prevents listener stacking */
      }
    }
  }

  function removeClass() { // Prevents that the menu stays open even when the media query changes (>765px) causing a layout issue.
    const winSize = this.innerWidth

    if (winSize >= 765) {
      navList.classList.remove('open')
    }
  }

  btn.addEventListener('click', toggleMenu)
  window.addEventListener('resize', removeClass)
}