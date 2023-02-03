// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

function countChar(str1){
    //input is string, output is number of characters in that string
    //return .length
    if(typeof str1 === "string"){
        let strLength = str1.length;
        return strLength;
    } else {
        return "Please enter a valid string";
    }
}


console.log(countChar("hello"));
console.log(countChar(""));
console.log(countChar(0));
console.log(countChar(true));