/* exported truncate */
function truncate(length, string) {
  var newString = '';
  var ellipsis = '...';
  for (var i = 0; i <= length - 1; i++) {
    var aa = newString += (string.charAt(i));
    aa += ellipsis;
  } return aa;
}
