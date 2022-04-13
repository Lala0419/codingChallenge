// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"


//soimilar to Name shuffler 2022 0409..! 

//You have to convert the string into an array by using .split() so you can measure the size of the array(which were strings originaly) by using .length() methods.

// and then compare them two and see which one is longer by using if statement. 

//finally, use the .join() to make the array back to strings. **give no pace inbetween in this case.

//1st attempt

function solution(a, b){
  // your code here

    let arrayA = a.split(' ').join()
    let arrayB = b.split(' ').join()
    if (arrayA.length>arrayB.length){
        return `${arrayB}${arrayA}${arrayB}`
    }else if(arrayA.length<arrayB.length){
        return `${arrayA}${arrayB}${arrayA}`
      
    }
}
solution('45','1')

// figured it in 20min!!! 


//the best solution


function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}


// I again did it in wayyyyyy too complicated way hahaahah

// but happy i was able to figure it out myself :)