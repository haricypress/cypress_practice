
// 1. using ".reverse()" and printing
var arr = [1, 2, 3, 4, 5];

console.log("\n1. using '.reverse()' and printing")
console.log("original array :", arr)
console.log("reversed array :", arr.reverse())

// ==========================================================
// 2. using '.reverse()' and printing in function
function reverseArray_1(arr) {
  console.log("\n2. using '.reverse()' and printing in function")
  console.log("print in function :",arr.reverse())
}

var arr = [1, 2, 3, 4, 5];

reverseArray_1(arr)

// ==========================================================


// 3. using '.reverse()' and return from function
function reverseArray_2(arr) {
  return arr.reverse()
}

var arr = [1, 2, 3, 4, 5];
console.log("\n3. using '.reverse()' and return from function")
console.log("returned from function :",reverseArray_2(arr))

var arr = [1, 2, 3, 4, 5];
arr = reverseArray_2(arr)
console.log("returned from function, saved in variable :",arr,"\n")
// ==========================================================



