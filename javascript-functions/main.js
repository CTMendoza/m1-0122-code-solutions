function convertMinutesToSeconds(minutes) {
  var minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(10);

console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hello ' + name + ' how are you?';
  return greeting;
}

var greetResult = greet('Brenda');

console.log('greetResult: ', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(5, 7);

console.log('getAreaResult: ', getAreaResult);

var person1 = {
  firstName: 'Tommy',
  lastName: 'Pickles'
};

function getFirstName(person) {
  var firstNameSelected = person1.firstName;
  return firstNameSelected;
}

var firstNameSelectedResult = getFirstName({ firstName: 'Tommy', lastName: 'Pickles' });

console.log('firstNameSelectedResult: ', firstNameSelectedResult);

var getArray = ['first', 'second', 'third', 'last'];

function getLastElement(array) {
  var lastElement = getArray[3];
  return lastElement;
}

var getLastElementResult = getLastElement(['first', 'second', 'third', 'last']);

console.log('getLastElementResult: ', getLastElementResult);
