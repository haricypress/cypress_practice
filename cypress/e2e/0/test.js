// function reverseArray(arr) {
//     console.log( arr.reverse())

//   }
  
//   // Example usage
//   var arr = [1, 2, 3, 4, 5];

// reverseArray(arr);
  

// var a=str.split("")
// b=a.reverse().join("")





// function palindromeornot(str){

//     var a=str.split("")
//     console.log(a)

//     b=a.reverse()
//     console.log(b)
    
//     b = b.join("")
//     console.log(b)


//     if (str==b){
//     console.log("this is palindrome")
//     }
//     else {
//     console.log("this is not palindrome")

//    }

//    }
//    palindromeornot (string(1234))





// =======================================================================



// var str1 = '1234"asfasf"1234'
// str2 = '"'

// console.log(str1.replace('"' , "").replaceAll('"' , ""))   // replaceing "₹" and "," with empty, i.e., ""
// // console.log(str2.replace("," , ""))


// console.log(str1.replace('"' , "").replace('"' , ""))   // replaceing "₹" and "," with empty, i.e., ""


// =======================================================================



// or


// var arr = [1, 2, 3, 4, 5];
//   console.log(arr.reverse())



function countCharacters(str) {
    const charCount = {};
    
    for (let char of str) {
        console.log(charCount[char])
        charCount[char] = (charCount[char] || false) + 1;
    }
    
    return charCount;
  }
  
  const inputString = "aru___na";
  const result = countCharacters(inputString);
  console.log(result);
  
 //==========================================================


 function countLetters(str) {
    var letterCount = {};
    
    // Iterate through each character in the string
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      
      // Check if the character is a letter
      if ("/[a-zA-Z0-9]/".test(char)) {
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
  var inputString = "aauuchhh";
  var result = countLetters(inputString);
  console.log(result);



  
