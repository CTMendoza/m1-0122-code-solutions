/* exported getKeys */
// create a new function named getKeys and give it a parameter named object
// in the code block assign and  empy array to a new variable named keys

function getKeys(object) {
  var keys = [];
  for (const x in object) {
    keys.push(x);

  }
  return keys;
}

// create a new function named getKeys and give it a parameter named object
// in the code block assign and  empy array to a new variable named keys
// use a for in loop to check that the variable x is a propert of object
// within the for in  loop use the push method of the array keys and push the  variable x
// return the keys arra
