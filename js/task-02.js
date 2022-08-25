const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const uiEl = document.querySelector('ul')

const liEl = ingredients.map((el) => {
  const elEL = document.createElement('li')
  elEL.textContent = el
  elEL.classList.add('title')
  return elEL
})

uiEl.append(...liEl)