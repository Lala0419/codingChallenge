// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy 
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.



//1,sort them  <= did not need to 
//2,find how to show an element odd or even <=used filter
//3,loop?reduce? <= did not need to
//4,true if the smallest odd number is bigger than largest even number 
//5, false otherwise


function isOddHeavy(n){
  
  const odd= n.filter(e=>Math.abs(e%2)==1)
  console.log(odd) //[ 19 ] [ -1, 1 ] *without Math.abs -1 will not count in this 
  const even = n.filter(e=>Math.abs(e%2)==0)
  console.log(even) // [ 0, 2, 4, 4 ] [ -2, 2 ]
  
  if(odd.length>0){
    return Math.min(...odd)>=Math.max(...even)
    //smallest odd numis 19 and largest even num is 4
  }return false
}
isOddHeavy([0,2,19,4,4])
isOddHeavy([1,-2,-1,2])




//the best practice

// function isOddHeavy(n){
//   let odds = [];
//   let evens = [];
//   n.forEach(num=>num%2===0? evens.push(num) : odds.push(num));
//   console.log(odds)
//   console.log(evens)
//   if(odds.length>0){
//     console.log(Math.max(...evens))
//     return Math.min(...odds)>=Math.max(...evens)
//   }return false
// }