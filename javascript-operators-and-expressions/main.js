var width = 5;

var height = 6;

var area = width * height;

var bill = 80;

var payment = 100;

var change = payment - bill;

var quizzes = 4;

var midterm = 5;

var final = 6;

var grade = (quizzes + midterm + final) / 3;

var firstName = 'Chris';

var lastName = 'Mendoza';

var fullName = firstName + ' ' + lastName;

var pH = 28;

var isAcidic = pH < 7;

var headCount = 41;

var isSparta = headCount === 300;

var motto = fullName;

motto = motto += ' is the GOAT!';

console.log('Area: ', area);

console.log('typeof: ', typeof area);

console.log('Change amount: ', change);

console.log('typeof: ', typeof change);

console.log('Average score: ', grade);

console.log('typeof: ', typeof grade);

console.log('My name is: ', fullName);

console.log('typeof: ', typeof fullName);

console.log('Is it acidic? ', isAcidic);

console.log('typeof ', typeof isAcidic);

console.log('This is SPARTA!? ', isSparta);

console.log('typeof ', typeof isSparta);

console.log('Who is the GOAT?! ', motto);

console.log('typeof ', typeof motto);
