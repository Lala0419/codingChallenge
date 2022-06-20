// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//P. 
//1. iterate the array and add them
//2. make a condition 
//3. determinate if it is even or odd
//4. return even or odd in string


//1st attempt

function oddOrEven(array) {
    let arr = array.reduce((acc,c)=>acc+c,0)
  if(arr%2===0){
    return 'even'
  }else{
    return 'odd'
  }
}

//2nd attempt probably the best practice in my opinion

function oddOrEven(array) {
    return array.reduce((acc,c)=>acc+c,0)%2===0?'even':'odd'
}



oddOrEven([0])// 'even'
oddOrEven([1])// 'odd'
oddOrEven([])// 'even'

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

