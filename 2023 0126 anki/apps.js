// Create a function that takes in an array of numbers.
// Return a new array containing every even number from
// the original array (do not use map or filter)

//from Anki
function numbers(array) {
	let evens = []; //empty array

	array.forEach((n) => {
		if (n % 2 === 0) {
			evens.push(n); //add an element at the end
		}
	});

	return evens;
}

console.log(numbers([1, 2, 3, 4, 5, 6, 7, 8]));

// my answer

function num(arr) {
	let even = [];
	for (i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 === 0) {
			even.push(arr[i]);
		}
	}
	return even;
}

num([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //2,4,6,8,10
