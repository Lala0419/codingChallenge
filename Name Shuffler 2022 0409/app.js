

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"



//N: I was right about using reverse, however did not know how to use it correctly.

// I know you wanna use reverse method right away. However, .reverse() can only be used in Array and not a string. So first, you have to somehow make the string into an Array.

//1, .split() can be useful to that. It can split a string object into an array of string bt separating the string into sub string.

//ex, [ 'john', 'Mclane' ] if you had a space between  like splitstr = str.split(' ')

//ex [ 'j', 'o', 'h', 'n', ' ', 'M', 'c', 'l', 'a', 'n', 'e' ] if not space in between 

//*** you wanna have a space in this case

//2  now there are the elements of an array, you can use .reverse() to make them (the elements of the array) reverse


//3, Now them elements inside the array are reverse.
//ex [ 'Mclane', 'john' ]

//4. you wanna make it back to a string from an Array

//3, .join() can be useful now. It joins all the elements of an array into a string.

//tadaaaaa  'Mclane john'



function nameShuffler(str){
   splitstr = str.split(' ')

 
  reverseArray = splitstr.reverse()
  
  joinArray = reverseArray.join(' ')
  
  return joinArray
}

nameShuffler('john Mclane') //('Mclane john')


// you can also make this fancy


function nameShuffler(str) {
    return str.split(" ").reverse().join(" ");
}
nameShuffler("john Mclane"); //('Mclane john')




