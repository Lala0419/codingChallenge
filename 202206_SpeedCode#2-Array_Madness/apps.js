// SpeedCode #2 - Array Madness

// Objective

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!


//short ver

 function arrayMadness(a, b) {
  return a.map(e=>e**2).reduce((acc,c)=>acc+c)>b.map(e=>e**3).reduce((acc,c)=>acc+c)
   
}

//long ver

function arrayMadness(a, b) {
   arrA=a.map(e=>e**2)
   let newA = arrA.reduce((acc,c)=>acc+c)
  // console.log(newA)
   
   arrB=b.map(e=>e**3)
   let newB = arrB.reduce((acc,c)=>acc+c)
  // console.log(newB)
  return newA > newB
   
}

// have to read the question carefully!! took a while just because I understood the question wrong! lesson learned




arrayMadness([4,5,6],[1,2,3])//, true
arrayMadness([5,6,7],[4,5,6])//, false
arrayMadness([4,5,6],[3,4,5])//, false
arrayMadness([3,4,5],[2,3,4])//, false
arrayMadness([2,3,4],[1,2,3])//, false
arrayMadness([1,2,3],[0,1,2])//, true
arrayMadness([5,3,2,4,1],[15])//, false
arrayMadness([2,5,3,4,1],[3,3,3,3,3])//, false
arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1])//, false
arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1])//, true
arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13])//, false