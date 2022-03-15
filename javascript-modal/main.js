var blueButton = document.querySelector('.blue-button');

var modalButton = document.querySelector('.row-modal.hidden');

blueButton.addEventListener('click', toModalButton);

modalButton.addEventListener('click', exitModalButton);

function toModalButton(event) {
  modalButton.className = 'row-modal';
}

function exitModalButton(event) {
  modalButton.className = 'row-modal hidden';
}
