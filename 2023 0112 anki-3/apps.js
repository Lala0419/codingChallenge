// Create a function that takes in an array of numbers

// Alert the sum of the second lowest and t
// he second highest number

function num(arr) {
	arr.sort((a, b) => {
		return a - b;
	});

	console.log("🚀 ~ file: apps.js:8 ~ num ~ arr", arr[1], arr[arr.length - 2]);
}

num([1, 3, 2, 8, 0]); //1, 3
