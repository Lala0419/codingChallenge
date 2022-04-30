// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//1st attempt

function removeChar(str){
  return str.slice(1, -1)
}


//Altough I did figure this out myself, it was a tough one. In this challenge, I learned that slice is very useful and you can also use this method on string and not jusdt array

