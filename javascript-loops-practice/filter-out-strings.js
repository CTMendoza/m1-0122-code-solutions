/* exported filterOutStrings */
function filterOutStrings(values) {
  var withoutStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      withoutStrings.push(values[i]);
    }
  }
  return withoutStrings;
}
