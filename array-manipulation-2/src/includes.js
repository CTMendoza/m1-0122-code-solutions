/* exported includes */
// create a new function named includes with two parameters array and value
// within the code block use a for loop with the following conditions (var i = 0; i < array.length; i++)
// within the for loop code block, use an if statement with the following condition ( array[i] == value)
// return true

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

// create a new function named includes with two parameters array and value
// within the code block use a for loop with the following conditions (var i = 0; i < array.length; i++)
// within the for loop code block, use an if statement with the following condition ( array[i] == value)
// return true if the array[i] and value match
// return false outside of the loop if value cannot be found in array
