// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//P: Are you ever given an empty array pr undifined? what then? Are you always given digits?

//R: whatever number waas given, it is now split up into an array and the order of the numbers is reversed
//E: if we were given 9238=> [8,3,2,9]
//                     330=>[0,3,3]
//                     undeefined => not a number

//P: make a function that takes in a number 
function reverseArray(num){
    //make number a string and split that bebe
    let newArray= num.toString().split('').reverse()

    //reverse array
    return Number(newArray)

    //make array integers again

}

reverseArray(9238)//should return [8,3,2,9]
console.log(reverseArray(330),[0,3,3])//should return [8,3,2,9]

//can't do it this way. have to use map. aghhh


function reverseArray(num){
     //make number a string and split that bebe
    let numArray= num.toString().split('').reverse()

    //reverse array
    //make array integers again
    return numArray.map(e=>parseInt(e))
   
}