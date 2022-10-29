const numberInput = document.querySelector('[data-js="number"]');
const button = document.querySelector('[data-js="button"]');

let userEntry = [];

alert('Entre com alguns números que serão somandos: ')

button.addEventListener('click', function(){
  userEntry.push(numberInput.value);
  numberInput.value = ' ';
})
 
console.log(userEntry);