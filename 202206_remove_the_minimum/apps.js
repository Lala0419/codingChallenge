// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

//P. 
//1. first step is to identify which number is the smallest by Math.min(...numbers)
//2. then find out the index of the number by numbers.indexOf(smallest number)
//3. delete it from the array by numbers.splice(index,1)
//**** you canr mutate the input array so you have to create the duplicate

function removeSmallest(numbers) {
    let newArr=numbers.slice() //****
   let small = Math.min(...numbers)
   let index = newArr.indexOf(small)
    newArr.splice(index,1)
    
    return newArr
}




// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]