/* exported findIndex */
function findIndex(array, value) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      var indexFound = i;
      return indexFound;
    }
  } return -1;
}
