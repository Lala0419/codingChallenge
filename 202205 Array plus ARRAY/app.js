// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
 
  let sum1 = arr1.reduce((acc,c)=>acc+c)
  let sum2 = arr2.reduce((acc,c)=>acc+c)
  console.log(sum1)
  console.log(sum2)
  
  return sum1+sum2
  
}

arrayPlusArray([1,2,3,4],[1,2,3,4])//20



//3rd tryyyy

//the best solution

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}