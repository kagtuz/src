const valueEL = document.querySelector('#value')

let val = 0
const decrEl = document.querySelector('button[data-action="decrement"]')
const incrEl = document.querySelector('button[data-action="increment"]')

decrEl.addEventListener('click', () => {
    val -= 1

    valueEL.textContent = val
})
incrEl.addEventListener('click', () => {
    val += 1

    valueEL.textContent = val
})

