// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
	let even = [];
	for (i = 0; i < array.length; i++) {
		if (array % 2 === 0) {
			return even.push(array[i]);
		}
	}
	even.slice(-number, even.length);
	// or even.splice(-number) but this will modify the original array
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); //, [4, 6, 8]);
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2); //, [-8, 26]);
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1); //, [6]);
