var contForm = document.querySelector('#contact-form');

contForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  var newObject = {};
  event.preventDefault();

  var name = contForm.elements.name.value;
  var email = contForm.elements.email.value;
  var message = contForm.elements.message.value;

  Object.assign(newObject, { name: name, email: email, message: message });

  console.log(newObject);

  contForm.reset();

}
