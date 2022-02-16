var colors;

colors = ['red', 'white', 'blue'];

var americaColors = 'America is ' + colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2];

colors[2] = 'green';

var mexicanColors = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2];

var students;

students = ['Brittney', 'Justin', 'Christina', 'Mandy'];

var numberOfStudents = students.length;

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];

console.log('value of colors[0] ', colors[0]);

console.log('value of colors[1] ', colors[1]);

console.log('value of colors[2] ', colors[2]);

console.log(americaColors);

console.log(mexicanColors);

console.log(colors);

console.log('There are ', numberOfStudents, 'students in the class.');

console.log('The last student in the array is ', lastStudent);

console.log(students);
