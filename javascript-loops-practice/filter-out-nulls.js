/* exported filterOutNulls */
function filterOutNulls(values) {
  var withoutNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      withoutNulls.push(values[i]);
    }
  }
  return withoutNulls;
}
