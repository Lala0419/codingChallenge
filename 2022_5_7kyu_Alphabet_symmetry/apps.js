// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// If you like this Kata, please try:

function solve(arr){  

};



solve(["abode","ABc","xyzD"])//[4,3,1]
solve(["abide","ABc","xyz"])//[4,3,0]
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])//[6,5,7]
solve(["encode","abc","xyzD","ABmD"])//[1,3,1,3]


//best practice
function solve(arr){  
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};

// pretty 1 line
function solve(arr) {  
  return arr.map(x => [...x.toLowerCase()].reduce((s,v,i) => s + (v.charCodeAt() == i + 97), 0))
}

//Luke
solve = arr => {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  arr = arr.map( word => {
    let count = 0;
    word.toLowerCase().split('').forEach((letter,index) => {
      if (letter === alphabet[index]) count++
    })
    return count;
  })
  
  return arr;
}


//need to come back on this later for sure!!! 