// counting everyting include special characters

function countCharacters(str) {
    const charCount = {};
    for (let char of str) {
 
        // console.log("before:",charCount,char,charCount[char])
        charCount[char] = (charCount[char]|| false)+ 1;
        // console.log("after:",charCount,char, charCount[char],"\n===========")
    }

    return charCount;
  }
  
  const String = "aru___na";
  const output = countCharacters(String);
  console.log("\nstring :", String);
  console.log("\ncharacters count :",output,"\n");  //  to print new line  "\n"  used
//===========================================================================================

// counting only   a-z  /  A-Z   /   0-9   values


function countLetters(str) {
    var letterCount = {};
    
    // Iterate through each character in the string
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      // Check if the character is a letter
      if (/[a-zA-Z0-9]/.test(char)) {
        // Update the letter count
        if (letterCount[char]) {
          letterCount[char]++;
        } else {
          letterCount[char] = 1;
        }
      }
    }
    
    return letterCount;
  }
  
  // Example usage
  var inputString = "aru___na";
  var result = countLetters(inputString);
  console.log(result);