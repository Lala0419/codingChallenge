// Declare a variable, assign it a string of multiple words,
// and check to see if one of the words is "apple".

//also how do you re-write when you want a yes or no?

let mulWords = "one, two, three, apple";
console.log(mulWords.includes("apple")); //true

let result = mulWords.includes("apple");
result === true ? console.log("yes") : console.log("no"); //yes
