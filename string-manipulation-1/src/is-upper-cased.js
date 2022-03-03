/* exported isUpperCased */
function isUpperCased(word) {

  for (var i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) {
      return true;
    } else if (word !== word.toUpperCase()) {
      return false;
    }
  }
}
