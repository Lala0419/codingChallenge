// Create a function that takes in an array of numbers

// Alert the sum of the second lowest and t
// he second highest number

function num(x) {
	x.sort((a, b) => a - b);
	return x[1] + x[x.length - 2];
}

num([1, 8, 3, 4, 5, 2]); //7
