var array = [
  {
    isbn: '9780385323307',
    title: 'Where The Red Fern Grow',
    author: 'Wilson Rawls'
  },
  {
    isbn: '9780747532743',
    title: 'Harry Potter And The Philosopher"s Stone',
    author: 'J.K Rowling'
  },
  {
    isbn: '9788466649179',
    title: 'Ready Player One',
    author: 'Ernest Cline'
  }
];

console.log('Array: ', array);
console.log('type of: ', typeof array);

console.log('JSON array: ', JSON.stringify(array));

var json = '{"id": 101010, "name": "Chris Mendoza"}';

console.log('type of: ', json);

console.log('JSON parse: ', JSON.parse(json));
