// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.


//1st attempt

function squareOrNot (arr){
  

    let square = Math.sqrt(arr)
    console.log(square)
    let checkNum = (square - Math.floor(square))==0
    if(checkNum){
       return square
    } else if(checkNum!==0){
        return Math.pow(arr,2)
    }

}

squareOrNot([4]) //2
squareOrNot([3]) //9


//I was able to manage the function working if it is only one element in an array. I know I have to use forLoop or forEach but it doenst work if I use either of them. 





// many attempts later..

function squareOrNot (arr){

let newV = []  // because forloop doesnt create a new array, you HAVE to make an initial array so there is a [] to add on. probablly better using .map() since it returns w a new array. 

	for(let i= 0; i<arr.length; i++){    
    let initial = arr[i] //this is is just to make a cleancode since it is going to be used a lot.
	let square = Math.sqrt(initial) //this is to find a square roots!! example below using consol.log
    
    //console.log(square)   
//     2
//	   1.7320508075688772
//     3
//	   2.6457513110645907
// 	   1.4142135623730951
//	   1

		if(Number.isInteger(square)){ // this was what was killing me to figure this out... if a number is an integr after you did Math.sqrt() (found the square roots is a whole number.)
  	newV.push(square) // add that whole number to a new array, newV, I made before the loop began.
		} else {
  	newV.push(Math.pow(initial,2)) //or else (if the nuber was not a whole number) make the initial (which is an element in an array)
		}
    
	}  
  return newV  //DO not forget to return it otherwise you dont get the value!!
}

squareOrNot([4,3,9,7,2,1]) //[ 2, 9, 3, 49, 4, 1 ]



// this was a hard one for me. It took me a few hours to solve it. However while I was sarching the answer, I was able to re-learn a few thigns like forEach, forLoop and a few array Methods! So it's alright i guess! 






// the best solution 

function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}


// genius



