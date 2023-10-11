
function findLongestWord(str) {
  var strSplit = str.split(' ');
  console.log(str, strSplit, strSplit.length)
  var longest_length = 0
  var longest_word = ''

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longest_length) {
      longest_length = strSplit[i].length;
      longest_word = strSplit[i]
    }
  }
  return 'longest word : ' + longest_word + ' (' + longest_length + ')';
}

string_value = 'i am an indian'
string_empty = ''
console.log(findLongestWord(string_value))
console.log(findLongestWord(string_empty))