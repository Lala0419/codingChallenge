// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//1st attempt

function solution(string) {
    
    if(string.include(UpperCase())){
    return string.splice ([i].UpperCase()-1,0,' ')
    }
}

console.log(solution('letsGo'))


//solution

function solution(string) {
  string = string
    .split('')
    .map(function (letter) {
        if (letter === letter.toUpperCase()) {
        letter = ' ' + letter
        }
        return letter
    })
    .join('')

  return string
}
console.log(solution('letsGo')) //lets Go



//solution w map w fat arrow

function solution(string) {

  				string=string
          .split('')
          .map(e=>e===e.toUpperCase() ? e = ' ' + e : e)
          .join('')
  
  return string
    
}
console.log(solution('letsGo')) //lets Go