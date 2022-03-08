/* exported numVowels */
function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.includes('a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U')) {
      count++;
    }
  } return count;
}
