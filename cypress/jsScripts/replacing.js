var str1 = '1234"asfasf"1234'
str2 = '"' // it is also "var" type variable

console.log("string1 : ", str1)
console.log("string2 (replacing with this string) : ", str2)

//================================================================================

// replaceing """ and "," with empty i.e., ""
console.log("before replace: ", str1)
console.log("after replace: ",str1.replace('"', "").replaceAll('"', ""))


// replacing "," with empty i.e., ""
console.log("before replace: ", str2)
console.log("after replace: ",str2.replace("," , ""))



// replaceing "₹" and "," with empty, i.e., ""
console.log(str1.replace('"', "").replace('"', ""))

