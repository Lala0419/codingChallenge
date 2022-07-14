// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


function cubeOdd(arr) {
  let total= 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'number'){
      return undefined;
     
      
    }
    if(arr[i] % 2 ){
      total += Math.pow(arr[i], 3)
    }
    
  }
  console.log({total})
  return total
  

 
}


//took wat too wrong to figure out how to get undified but didnt need to

cubeOdd([1, 2, 3, 4])//, 28);
cubeOdd([-3,-2,2,3])//, 0);
cubeOdd(["a",12,9,"z",42])//, undefined);
