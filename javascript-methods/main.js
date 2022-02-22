var num1 = 2;

var num2 = 4;

var num3 = 6;

var maximumValue = Math.max(num1, num2, num3);

var heroes = ['Spiderman', 'Batman', 'One Punch Man', 'Blue Ranger'];

var randomNumber = Math.random(1, 100);

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

var randomHero = heroes[randomIndex];

var library = [
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K Rowling'
  },

  {
    title: 'Discworld',
    author: 'Terry Pratchett'
  },

  {
    title: 'One Piece',
    author: 'Eichoro Oda'
  }
];

var lastBook = library.pop();

var firstBook = library.shift();

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

var fullName = 'Chris Mendoza';

var firstAndLastName = fullName.split(' ');

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('The maximum value is: ', maximumValue);

console.log('randomIndex: ', randomIndex);

console.log('randomHero: ', randomHero);

console.log('lastBook: ', lastBook);

console.log('firstBook: ', firstBook);

console.log(library);

console.log('firstAndLastName: ', firstAndLastName);

console.log('sayMyName: ', sayMyName);
