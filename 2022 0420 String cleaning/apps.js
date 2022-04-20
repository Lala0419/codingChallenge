// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


//1, need to make in an array inorder to use loop to go through the string
//2, loop through the string 
//3, if there is a number, delete = take only the string 
//3, 

//1st attempt

function check(str){

    let array = str.split('')
   
    let result = ''

    for(let i=0; i<array.length; i++){
        if(i==String){
            result.push()
        }else{
            result.shift()
        }
    }

    return result.join()

}

check('This looks5 grea8t!')


//2nd attempt 

function check2(str){

    let array = str.split('')
    
   
    for(let i=0; i<array.length; i++){
      
        if(i==isNaN()){
            array.push()
        }else{
          array.pop()
        }
      
      return array.join('')
    }
    

}

check2('This looks5 grea8t!') //'This looks5 grea8t'


//3rd attempt

function check2(str){

    let array = str.split('')
    
   
    for(let i=0; i<array.length; i++){
      
        if(i==String()){
            array.push()
        }else {
          array.pop()
        }
      
      
    }
    return array.join('')

}

check2('This looks5 grea8t!') //'This looks'


//4th attempt

function check2(str){

    let array = str.split('')
    
      array.map(e=>e==String()?array.push():array.pop())
                            
                            
    return array.join('')

}


check2('This looks5 grea8t!') //'This looks'


//gave up


//the best solution

function stringClean(s){
  return s.replace(/\d/g, "");
}


// what is this? lol

//help google

// the regular expression on looks for the first number character in the string

// let numberInString = theString.match(/\d+/[0];

// var regex = /\d+/g;
// var string = "Any string you want!";
// var matches = string.match(regex);  // creates array from matches

// if (matches){
//   // There is a digit in the string.
// } else {
//   // No Digits found in the string.
// }