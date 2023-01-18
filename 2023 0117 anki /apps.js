// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Explanation => 5*2 + 3*4 = 22

function minSum(arr) {}

//5*2 + 3*4 = 22
// ex answers
minSum([5, 4, 2, 3]); //==> return (22)
minSum([12, 6, 10, 26, 3, 24]); // ==> return (342)
minSum([9, 2, 8, 7, 5, 4, 0, 6]); //==> return (74)

function minSum(arr) {
	const sorted = arr.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < arr.length / 2; i++) {
		console.log(sorted[i]);
		sum += sorted[i] * sorted[sorted.length - 1 - i];
		// for example if this is the first loop of the for loop,
		// and use the first ex answer on line 8,
		// 'i' for the sorted[i] is 2 and "i" for the sorted[sorted.length-1-i] is 0. because the first "i" is pointing for the value of the "i" and the second "i" is pointing for the index number of the value! trickey!

		// for more clearlity, for the first for loop of the ex answer line 9, it is 3 and 0 and second loop is 6 and 1.
	}
	return sum;
}
