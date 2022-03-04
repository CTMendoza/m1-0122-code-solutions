/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - 1; i < array.length && i > 0; i--) {
    if (i >= count) {
      newArray.unshift(array[i]);
    }
  } return newArray;
}
