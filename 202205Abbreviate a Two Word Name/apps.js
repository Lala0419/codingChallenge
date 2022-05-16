// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


//P
//1. array through --> use split to make substring
//2  and take only toUpperCase --> map? 
//2. separate them with a conmma --> join('.')
//4. make sure there are all uppercase


function abbrevName(name){

   return name.split('').map(e=>e[0]).join('.').toUpperCase()
   

}

abbrevName("Sam Harris")//"S.H"
abbrevName("Patrick Feenan")//"P.F"
abbrevName("Evan Cole")//"E.C"
abbrevName("P Favuzzi")//"P.F"
abbrevName("David Mendieta")//"D.M"


//the best practice

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}