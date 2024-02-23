// map ==> loops through eash element of the array and do the operation that you passed in the call function and hold the result for eash operation in an array and finally returns you the array 
const numbers = [4, 6, 8, 9, 3, 2, 5];

// const double2 = num => num*2;
// const result = numbers.map(double2);
// console.log(result);
const output = numbers.map(num => num*2);
console.log(output);

// option---2.........................................
// function doubleIt(num){
//     return num*2;
// }
// const result = numbers.map(doubleIt);
// console.log(result);

// option--3.......................................
// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled);
