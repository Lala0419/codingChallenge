//   Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


//1st attempt

// function opposite(num){
//     if(Math.sign(num)===1){
//         return num*-1
//     }else if(Math.sisgn(num)===-1){
//         return num*-1
//     }
// }

//this cleared the test but didnt let me attempt
//and I realised I am returning the same thing. 

//2nd attempt
function opposite(num){
    if(num>0){
        return num*-1
    }else if(num<0){
        return Math.abs(num)
    }
}

console.log(opposite(-5)) //5

// worked!

