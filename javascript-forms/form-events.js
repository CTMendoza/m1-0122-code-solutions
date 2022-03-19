function handleFocus(event) {
  console.log('Focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log('event.target.name ', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var userName = document.querySelector('#user-name');
var userEmail = document.querySelector('#user-email');
var userMessage = document.querySelector('#user-message');

userName.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userMessage.addEventListener('input', handleInput);