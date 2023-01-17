// Create a function that takes in an array of numbers

// Alert the sum of the second lowest and the second highest number

function num(arr) {
	arr.sort((a, b) => a - b);
	console.log(arr[0], arr[arr.length - 2]);
}

num([2, 5, 1, 8]);
