// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.



//1st try

function sumOfMinimums(arr) {
	for(i=0;i<arr.length;i++){
    return Math.min(...arr[0])+Math.min(...arr[1])+Math.min(...arr[2])
  }
}

//this can't controle is the arr of array is a lot like it will get too long


//2nd try

function sumOfMinimums(arr) {
  let sum =0
	for(i=0;i<arr.length;i++){
     sum += Math.min(...arr[i])
  }
  return sum
}


//the best practice

function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}


sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])//, 9));
sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])//, 76));
