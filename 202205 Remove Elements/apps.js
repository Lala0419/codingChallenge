// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEverySecondEl(arr){
//     result=[]
//     for(let i=0; i<arr.length; i=i+2){
//        result.push(arr[i])
//     }
// return result
// }

// console.log(removeEverySecondEl(["Keep", "Remove", "Keep", "Remove", "Keep"])) //[ 'Keep', 'Keep', 'Keep' ]

//it worked!


//lets try in different way

//filter

function removeEverySecondEl(arr){
    return arr.filter((e,i)=>i%2===0)
}

console.log(removeEverySecondEl(["Keep", "Remove", "Keep", "Remove", "Keep"])) //[ 'Keep', 'Keep', 'Keep' ]



//push

function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}


//splice

function removeEveryOther(arr){
  //your code here
  for (var i = 1; i < arr.length;i++){
      arr.splice(i,1);
  }
  return arr;
}