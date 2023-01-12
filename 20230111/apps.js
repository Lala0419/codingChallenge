//Create and array of numbers.
// Sum all of the numbers. Alert the sum.

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, c) => acc + c, 0);
console.log("🚀 ~ file: apps.js:6 ~ sum", sum);

alert(sum); //15
