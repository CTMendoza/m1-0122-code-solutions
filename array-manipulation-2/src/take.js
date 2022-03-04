/* exported take */
// create a function named take with two parameters array and count
// in the code block, assign an empty array to a new variable named newArray

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      newArray.push(array[i]);
    }
  } return newArray;
}

// create a function named take with two parameters array and count
// in the code block, assign an empty array to a new variable named newArray
// use a for loop to with the following conditions (var i = 0; i < array.length; i++)
// in the for loop code block, use a if statement with the condition (i < count)
// in the if statement code block, push arry[i] into the newArray array
// return the array newArray
