// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(arr){
return arr.split(',').slice(1,-1).join(' ')
           


}


console.log(array("1,2,3,4"))//2 3


// close but super tough. still confused between split and slice..


//split can turn a string into an array.
//slice can remove stuff inside an array
//join can turn an array into a string 

//ちなみにarr.length-1 とかは使えませんでした。