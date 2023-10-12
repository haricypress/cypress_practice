function palindromeornot(str) {

    var a = str.split("")
    console.log(a)

    b = a.reverse()
    console.log(b)

    b = b.join("")
    console.log(b)


    if (str == b) {
        console.log("this is palindrome")
    }
    else {
        console.log("this is not palindrome")

    }

}
palindromeornot(string(1234))