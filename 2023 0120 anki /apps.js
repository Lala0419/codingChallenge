// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//(correct answer)

function isSortedAndHow(arr) {
	return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
		? "yes, ascending"
		: arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
		? "yes, descending"
		: "no";
}

isSortedAndHow([1, 2]); //, 'yes, ascending');

isSortedAndHow([15, 7, 3, -8]); //, 'yes, descending');

isSortedAndHow([4, 2, 30]); //, 'no');

//(my way)

function isSortedAndHow(arr) {
	let result = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i + 1]) {
			return "yes acending";
		} else if (arr[i] > arr[i + 1]) {
			return "yes decending";
		} else {
			("no");
		}
	}
}

isSortedAndHow([1, 2]); //, 'yes, ascending');

isSortedAndHow([15, 7, 3, -8]); //, 'yes, descending');

isSortedAndHow([4, 2, 30]); //, 'yes, descending');
