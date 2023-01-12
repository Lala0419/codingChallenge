// Create a function that takes in an array of numbers.
//  Multiply each number together and alert the product.

let num = [1, 2, 3, 4, 5];
let sumMul = num;

function mulNum(arr) {
	let product = 1;
	arr.forEach((num) => (product *= num));
	console.log("🚀 ~ file: apps.js:10 ~ mulNum ~ product", product);
}
mulNum([10, 2, 5]); //100
