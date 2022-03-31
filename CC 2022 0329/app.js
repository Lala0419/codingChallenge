// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//P: give an array A and a value x. you want to see if it contains the value. A can have numbers or strings.
//R: return true if A has x, false if not.

//E: given [1,2,3] as A and 4 as x, should return False
//   given [7,6,5,] as A and 6 as x, should return True
//   given [] as A and 5 as x, should return False

//  P: MAke a function that takes in two parameters: an array A and a random number x

//1st attempt
 function numInArray(arr,num){
     // look through the arr and see if there are any elements match with num
     
     let matchedNum = arr.forEach(element=>element===num?true:false)

    return matchedNum

     // conditional: if they do, return true. else return false.
 }

 numInArray([1,2,3],4) //should be false

 //2nd attempt

function numInArray(arr,num){
     // look through the arr and see if there are any elements match with num
     
     let matchedNum = arr.forEach(element=>element===num)

     if(arr===num){
         return true
     }else{
         false
     }


     // conditional: if they do, return true. else return false.
 }

 numInArray([1,2,3,],4) // undefined


//3rd attepmt

 function numInArray(arr,num){
     // look through the arr and see if there are any elements match with num
     
     let matchedNum = arr.forEach(element=>element===num)

     if(matchedNum===true){
         return true
     }else{
         false
     }


     // conditional: if they do, return true. else return false.
 }

 numInArray([1,2,3,],4) // undefined

 //didnt work.. wanted to see if forEach would work but i guess not.. inculdes will work easier anyway


 //4th attempt 

 function numInArray(arr,num){
     // look through the arr and see if there are any elements match with num
     
    return arr.includes(num)

     // conditional: if they do, return true. else return false.
 }

 numInArray([1,2,3],4) // should return false
 numInArray([7,6,5],6) // sshould return true
 numInArray([],5) //should return false

//solution ^^