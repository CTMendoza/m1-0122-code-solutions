/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (const x in object) {
    keys.push(x);

  }
  return keys;
}
