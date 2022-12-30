function initAnimalTab() {
  const animalList = document.querySelectorAll('[data-content="image"]')
  const descriptionBoxes = document.querySelectorAll('.box-animaisinfo')

  if (descriptionBoxes.length && animalList.length) {
    animalList.forEach((animal, index) => {
      animal.addEventListener('click', () => {
        showAnimalDescription(index)
      })
    })

    function showAnimalDescription(receivedIndex) {
      descriptionBoxes.forEach((box) => {
        if (box.classList.contains('ativo')) {
          box.classList.remove('ativo')
        }
      })
      descriptionBoxes[receivedIndex].classList.add('ativo')
    }
  }
  descriptionBoxes[0].classList.add('ativo')
}

export default initAnimalTab