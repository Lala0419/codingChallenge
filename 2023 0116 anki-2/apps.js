// Create a function that takes in an array of numbers.
// Return a new array containing every even number from
// the original array (do not use map or filter)

function numbers(arr) {
	let evens = []; //empty array

	arr.forEach((n) => {
		if (n % 2 === 0) {
			evens.push(n); //add an element at the end
		}
	});

	return evens;
}

console.log(numbers([1, 2, 3, 4, 5, 6, 7, 8]));
//2,4,6,8
