// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//P
//1. sort it in alpha
//2. return the first value
//3. return it in a string 
//4. add *** between each letter


//1st appempt

function twoSort(s) {
   return s
    .sort((a, b) => a.localeCompare(b))[0]  //.sort((a, b) => a < b ? -1 : 1)[0]
  	.split('')
    .map(e=>e+'***')
    .join('')
    
}

// if you use slice(o,1), you cant use split after for some reasons.. 
//and cant get rid of the last *** after n 

//** you can actually jhust do sort() and the it automatically sorted in alpha */


//so it look like this..

function twoSort(s) {
   return s
    .sort()[0]
  	.split('')
    .join('***')
    
}




twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])
//'b***i***t***c***o***i***n' );

twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])//'a***r***e'); 
  