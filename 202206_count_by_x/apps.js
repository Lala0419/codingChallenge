// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//P
//1. declare a new array with an empty value
//2. declare a variable with a value of x * n => 最高数値が　x＊n　だから！
//3. loop through 
//4. if i and x can divide 
//5. push i to z array 


function countBy(x, n) {
  let z = [];
  let limit=x*n
  for(let i=1; i<=limit; i++){
    if(i%x===0){
    z.push(i)
    }
  }

  return z;
}

countBy(1,10)// === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) //=== [2,4,6,8,10]


//best practice

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}




