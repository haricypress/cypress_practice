function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longest_length = 0
  var longest_word = ''

  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longest_length) {
      longest_length = strSplit[i].length;
      longest_word = strSplit[i]
    }
  }
  return 'longest word : ' + longest_word + ' ('+longest_length+ ')';
}


string = 'i am an indian'
console.log(findLongestWord(string))