// new cc using Array methods

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//P
//1. loop through the numbers.length
//2. returns all numbers which are divisible by the given divisor
//*** not find but filter because you want out of the all elements and not judt the first one */




function divisibleBy(numbers, divisor){
for(i=0;i<numbers.length;i++){
    return numbers.filter(e=>e%divisor===0)
}
}


divisibleBy([1,2,3,4,5,6], 2)// [2,4,6])
divisibleBy([1,2,3,4,5,6], 3)// [3,6]);
divisibleBy([0,1,2,3,4,5,6], 4)// [0,4]);
divisibleBy([0], 4)// [0]);
divisibleBy([1,3,5], 2)// []);


//first tryyyy but you dont need to us for loop since filter methods does it for us.

//best practice

function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}

//