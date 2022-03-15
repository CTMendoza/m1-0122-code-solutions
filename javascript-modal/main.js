
var blueButton = document.querySelector('.blue-button');
var modalButton = document.querySelector('.row-modal.hidden');

blueButton.addEventListener('click', toModalButton);
function toModalButton(event) {
  modalButton.className = 'row modal';
}

modalButton.addEventListener('click', exitModalButton);
function exitModalButton(event) {
  modalButton.className = 'row modal hidden';
}
