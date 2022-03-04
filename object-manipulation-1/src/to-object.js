/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {};
  for (var i = 0; i < keyValuePair.length - 1; i++) {
    newObject[keyValuePair[i]] = keyValuePair[i + 1];
  }
  return newObject;
}
