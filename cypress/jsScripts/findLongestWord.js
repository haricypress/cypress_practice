
function findLongestWord(str) {
  var strSplit = str.split(' ')
  console.log(str, strSplit, strSplit.length)
  var longest_word = ''
  var longest_length = 0

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longest_length) {
      longest_length = strSplit[i].length;
      longest_word = strSplit[i]
    }
  }
  return 'longest word : ' + longest_word + ' (' + longest_length + ')';
}

stringValue = 'i am an indian'
stringEmpty = ''
console.log(findLongestWord(stringValue))
console.log(findLongestWord(stringEmpty))