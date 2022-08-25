const input = document.querySelector('#validation-input')

function testValidation(event) {
const input = event.currentTarget;
const inputLength = Number(input.dataset.length)

if(input.value.length === inputLength){
    input.classList.remove('invalid')
    input.classList.add('valid')
} else {
    input.classList.remove('valid')
    input.classList.add('invalid')
}

}

const restValidation = (event) => input.classList.remove("valid", "invalid")
input.addEventListener("blur", testValidation)
