/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalizeFirstChar = '';
  var capitalizeFirstCharJ = '';
  var capitalizeFirstCharS = '';
  var lowerCaseOthersJ = '';
  var lowerCaseOthersS = '';
  var lowerCaseOthers = '';
  var newString;
  if (word.toLowerCase() === 'javascript') {
    var subJava = word.substring(0, 4);
    var subScript = word.substring(4, 10);
    capitalizeFirstCharJ += subJava[0].toUpperCase();
    capitalizeFirstCharS += subScript[0].toUpperCase();
    lowerCaseOthersJ += subJava.slice(1).toLowerCase();
    lowerCaseOthersS += subScript.slice(1).toLowerCase();
    newString = capitalizeFirstCharJ + lowerCaseOthersJ + capitalizeFirstCharS + lowerCaseOthersS;
  } else {
    capitalizeFirstChar += word[0].toUpperCase();
    lowerCaseOthers += word.slice(1).toLowerCase();
    newString = capitalizeFirstChar + lowerCaseOthers;
  }
  return newString;
}
