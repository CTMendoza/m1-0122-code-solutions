var storeClicks = 0;
var lightOn = document.querySelector('.lightbulb.yellow');
var backgroundLightOn = document.querySelector('.body-color.yellow');

lightOn.addEventListener('click', switchButton);

function switchButton(event) {
  storeClicks++;
  if (storeClicks % 2 === 0) {
    lightOn.className = 'lightbulb yellow';
    backgroundLightOn.className = 'body-color yellow';
  } else if (storeClicks % 2 !== 0) {
    lightOn.className = 'lightbulb black';
    backgroundLightOn.className = 'body-color black';
  }

}
