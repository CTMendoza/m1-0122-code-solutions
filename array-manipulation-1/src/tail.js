/* exported tail */
// declare a new function named tail and give it a parameter named array
// within the code block, assign an empty array to a new variable named newArray
// Create a for in statment to create a loop
// within the for loop, create an if statement with a condition stating array[i] is not strictly equal to array[0]
// if true, use the push method to add array[i] into the empty array assingned to newArray
// return newArray

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// declare a new function named tail and give it a parapmeter named array
// within the code block, assign an empty array to a new variable named newArray
// create a for loop with a the following condition (var = i; i < array.length; i++)
// within the for loop use the push method to add array[i] to the newArray object
// close the code block for the for loop
// return the value of newArray
// close the code block for the function tail
