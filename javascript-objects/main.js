var student = {
  firstName: 'Chirs',
  lastName: 'Mendoza'
};

student.livesInIrvine = false;

student.previousOccupation = 'billing clerk';

var fullName = student.firstName + ' ' + student.lastName;

var vehicle = {
  make: 'Tesla',
  model: 'Model S',
  year: 2010
};

vehicle['color'] = 'purple';

vehicle['isConvertible'] = false;

fullName = student.firstName + ' ' + student.lastName;

var pet = {
  name: 'Bunta',
  type: 'dog'
};

delete pet.name;

delete pet.type;

console.log('value of fullName:', fullName);

console.log('value of student.liveInIrvine ', student.livesInIrvine);

console.log('value of student.previousOccupation ', student.previousOccupation);

console.log('value of student ', student);

console.log('value of vehicle["color"] ', vehicle['color']);

console.log('value of vehicle["isConvertible"] ', vehicle['isConvertible']);

console.log('value of student ', vehicle);

console.log('value of pet: ', pet);
