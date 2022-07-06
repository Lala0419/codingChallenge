
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.





function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}

//tried to do with sort() but it did not work

// function isSortedAndHow(array) {
// let arr = array.slice()
// for(i=0;i<arr.length;i++){
//   if(arr[i]==arr.sort((a,b)=>a<b?-1:1)){
//     return 'yes, ascending'
//   }else if(arr[i]==arr.sort((a,b)=>a>b?-1:1)){
//     return "yes, descending"
//   }else{
//     return 'no'
//   }
// }
// }


isSortedAndHow([1, 2])//, 'yes, ascending');

  
isSortedAndHow([15, 7, 3, -8])//, 'yes, descending');
 
  
isSortedAndHow([4, 2, 30])//, 'no');