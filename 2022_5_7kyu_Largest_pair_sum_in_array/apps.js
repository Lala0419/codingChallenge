// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)


//1st attempt 

function largestPairSum (numbers) {
  return numbers.sort((a,b) => a - b).slice(-2).reduce((acc,c) => acc + c, 0)
}

//1st tryyyy

//the best solution

function largestPairSum(numbers){
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}

// b-a does sort big to small 