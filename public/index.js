const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', alertButton)

function alertButton () {
  alert(input.value)
}