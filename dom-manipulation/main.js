var storeClicks = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function clickCounter(event) {
  storeClicks++;
  clickCount.textContent = 'Clicks: ' + storeClicks;
  if (storeClicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (storeClicks >= 4 && storeClicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (storeClicks >= 7 && storeClicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (storeClicks >= 10 && storeClicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (storeClicks >= 13 && storeClicks < 16) {
    hotButton.className = 'hot-button hot';
  } else if (storeClicks >= 16) {
    hotButton.className = 'hot-button nuclear';
  }

}

hotButton.addEventListener('click', clickCounter);
