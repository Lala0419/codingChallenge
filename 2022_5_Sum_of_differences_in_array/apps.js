// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).


//P
//1, use sort to order the size
//2, Have to make a new array. in this case, for (10-2) and (2-1)
//3, use reduce to sum the elments between or use forEach 


function sumOfDifferences(arr) {
    arr.sort((a,b)=>b-a)
  console.log(arr)
  const test = arr.forEach((e,i)=>e-[i-1])
  
  let newArr =[]
  for(let i=0; i<arr.length-1; i++){
	 newArr[i]=arr[i]-arr[i+1]
  }
  console.log(newArr)
  return newArr.reduce((acc,c)=>acc+c,0)


}



//EX
sumOfDifferences([1, 2, 10])// 9
sumOfDifferences([-3, -2, -1])// 2
