/* exported numVowels */
function numVowels(string) {
  var countVowels = 0;
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var char of string) {
    if (vowels.includes(char)) {
      countVowels++;
    }
  } return countVowels;
}
