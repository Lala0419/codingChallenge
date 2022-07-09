// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let newArr = []
  for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr)
}

// make new [i] 

adjacentElementsProduct([5, 8])//, 40);
adjacentElementsProduct([1, 2, 3])//, 6);
adjacentElementsProduct([1, 5, 10, 9])//, 90);
adjacentElementsProduct([4, 12, 3, 1, 5])//, 48);
adjacentElementsProduct([5, 1, 2, 3, 1, 4])//, 6);