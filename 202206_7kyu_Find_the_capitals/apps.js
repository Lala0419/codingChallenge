// Write a function that takes a single string(word) as argument.The function must return an ordered list containing the indexes of all capital letters in the string.


//P.
//1, make it an array
//2, use split 
//3, get upper case letter using if condition 
//4, return the index


var capitals = function (word) {
	word.split('')
  let index =[]
  for(let i = 0; i<=word.length-1; i++){
      if(word[i]==word[i].toUpperCase()){
      index.push(i)
      }
  } return index
  
};


// second try! Can't forget the for loop to include the last letter as well. 
//i <= word.length-1 is correct. i< word.length-1 is nto quite
// i is only the index but word[i] is inside the door so in this case it is a letter.

//E.
capitals('CodEWaRs')// [0,3,4,6] 

