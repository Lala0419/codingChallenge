// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//P
//1, square each el  map?
//2, sum them all togeter reduce?


//1st attempt
function squareSum(numbers){
    return numbers.map(n=>n*n).reduce((acc,c)=>acc+c,0)
}



squareSum([1,2])//5
squareSum([0, 3, 4, 5])// 50
squareSum([]) //0

//1st tryyyy


//best practice

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}



//if I were to do mine in this way 

function squareSum(numbers){
  return numbers.reduce((acc,c)=>(c*c)+acc,0)
}
