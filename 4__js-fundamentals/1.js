// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.


function divisibleBy3(num){
    //input is number, output is true or false;
    //use % to check if remainder is 0
    if(num !== NaN){
        return num%3 === 0;
    }
}

console.log(divisibleBy3(5),  "assert false"); 
console.log(divisibleBy3(6),  "assert true");
console.log(divisibleBy3(0), "assert true");
console.log(divisibleBy3("hello"), "assert false");
console.log(divisibleBy3(-5), "assert false");
console.log(divisibleBy3(-6), "assert true");