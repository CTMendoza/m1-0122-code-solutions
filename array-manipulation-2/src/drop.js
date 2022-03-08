/* exported drop */
// create a new function named drop with two parameters array and count
// within the code block assign an empty array to a new variable called newArray

function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      newArray.push(array[i]);
    }
  } return newArray;
}

// create a new function named drop with two parameters array and count
// within the code block assign an empty array to a new variable called newArray
// use a for loop and declare the following condition: for (var i = 0; i < array.length; i++)
// within the for loop code block, use and if statement with the following condition ( i >= count)
// if the condition is met, push array[i] into the newArray array.
// return newArray
