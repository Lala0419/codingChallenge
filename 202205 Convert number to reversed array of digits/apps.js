// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


//1st attempt 
function order(arr){
    arr.split(',')
    console.log(arr) //didnt work and if you want it to work, yoo need to make a new variable for it
}

order('348597')

//2nd attempt

function order(arr){
    return arr.split('') 
    //put it in an array and separate them like [ '3', '4', '8', '5', '9', '7' ]
              .join(',') //join them all togeter with ,
}

order('348597')

//ok so these were suppose to be numbers and not string

function order(arr){
     return arr.toString().split('').reverse().map(Number)
}

order(348597)

//1, you have to make it a string
//2, separate them using split 
//3, reverse the numbers using reverse
//4, map(Number) this is new to me but apperntly you can make the elements inside an array into numbers

//*** 3,4 can be otherway around