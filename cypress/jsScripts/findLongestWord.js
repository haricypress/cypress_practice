function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  var word = ''
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
      word = strSplit[i]
    }
  }
  return 'longest word : ' + word + ' ('+longestWord+ ')';
}
console.log(findLongestWord("mee jdhj dskjh kjv k kjdvhkjdhvkj"))