/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixResults = [];
  for (var i = 0; i < words.length; i++) {
    suffixResults.push(words[i] + suffix);
  }
  return suffixResults;
}
