/* exported getValues */
function getValues(object) {
  var values = [];
  for (const x in object) {
    values.push(object[x]);

  }
  return values;
}
