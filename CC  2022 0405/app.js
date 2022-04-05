// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P: Is it always going to be intergers? Are we going to be given any special characters? An empty arr ever?

//R:Return a new arr with each value doubled
//E: 

P:
//Make a function that takes an array

//best 
function doubled(arr){
return arr.map(element=>element*2)
}
// arrow 
// function double(arr){
//     return arr.map(function arrow(e){
//         return e*2
//     })
// }
// [1,2,3].map(1=>1*2) //2
//            (2=>2*2) //4
//            (3=>3*2) //6
//             [2,4,6]

//map through the arrey and multiply each element by 2. also return lol
doubled([1,2,3])
console.log(doubled([2,3,4]),[4,6,8]) 
//(doubled ([arguments=answers]),[the answers you supposte get])

