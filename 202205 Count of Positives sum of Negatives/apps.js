// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//1st try

function countPositiveSumNegative(arr){
    let positiveOrNegative = arr.forEach(e => 
        e > 0 ? positiveOrNegative.push(e) : e += e )
    
}

conaole.log(countPositiveSumNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


//2nd try

function countPositiveSumNegative(arr){
    const positiveOrNegative=[]

    for(let i=0;i<arr.length;i++){
        if(i>0){
          return positiveOrNegative.push()
       }else if(i<0){
        return i += i
       }
    }
}

conaole.log(countPositiveSumNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // undefined


//you can compare with the answer below


//3rd try

function countPositiveSumNegative(arr){
    let positive=[]
    let negative=0
    

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
          positive.push(i)
       }else if(arr[i]<0){
         negative += arr[i]
       }
    }
  return[positive.length, negative]
}
console.log(countPositiveSumNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

////You cant forget putting array valiable before the array value like arr[i]. just i does not work and I always so this... 
//also although it was a good idea to set a initial value, it has to be two separate valiables. not positiveOrNegative but for instance positive = [] and negative =[].(but in this case it will be be negative = 0 because you want a total of tbe number value rather than an array). 
//lastly it was hard to figure where and what to return. it has to be outside the for loop because you dont want it to return every single time when iot loops. 


//this one was hard but it was not like I have no idea what to do. just need to know how to excute well. you got the idea and concept 



//best solution

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

//crazyyyy but i can read!