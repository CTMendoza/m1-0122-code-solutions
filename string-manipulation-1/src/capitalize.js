/* exported capitalize */
// define a new function called capitalize and give it a parameter named string
// within the code block return string.toUpperCase(string.charAt(0))
function capitalize(word) {
  var capitalizeFirstChar = '';
  var lowerCaseOthers = '';
  capitalizeFirstChar = capitalizeFirstChar + word[0].toUpperCase();
  lowerCaseOthers = lowerCaseOthers + word.slice(1).toLowerCase();
  return capitalizeFirstChar + lowerCaseOthers;
}
