function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var el = document.querySelector('.click-button');
el.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var mouseOver = document.querySelector('.hover-button');
mouseOver.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick, false);
