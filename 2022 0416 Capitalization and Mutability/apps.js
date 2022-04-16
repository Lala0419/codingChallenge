// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

//1st attempt

function makeUpperCase (str){
   return str.charAt(0).toUpperCase()
}

makeUpperCase('work') // 'W'

//not quite


//2nd attempt

function makeUpperCase (str){
  let words = str.split(' ')
  console.log(words) //[ 'work' ]
  let cap = []
  words.forEach(e=>{
    cap.push(e[0].toUpperCase() + e.slice(1,e.length))
  })
  
  return cap.join('')
  
}

makeUpperCase('work') //Work 


//this one works but doenst really make sence to me because [ 'work' ] is an array and it only has 1 element inside. index(0). When you loop it, and make e[0].toUpperCase, doenst make the all work capitalized? like WORK? unless in this case e is 'e' is a letter and not a string and it loops inside a string..? I understand using slice after and start from 1 and till e.length. 


//3rd attempt


function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

capitalizeFirstLetter('work')

// this one makes much more sence to me since it only capitalise the first letter using charAt(0)and add rest of it by using str.slice(1)

//and this was also the best solution! :D 
