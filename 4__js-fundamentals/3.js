// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

//Create an array of numbers, (ex: [1, 2, 3])
let arrOfNum = [1,2,3];

//first item in the array (ex: 1)
let firstElement = arrOfNum[0];
console.log(firstElement);

//last item in the array (ex: 3)
let lastElement = arrOfNum[arrOfNum.length-1];
console.log(lastElement);

//new item to the end of the array (ex: [1,2,3,4])
arrOfNum.push(4);
console.log(arrOfNum);

//add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
arrOfNum.unshift(["a","b","c"]);
console.log(arrOfNum);

//return the first item from the first item in the array. (ex: "a")
let firstElementFromNewArr = arrOfNum[0][0];
console.log(firstElementFromNewArr);