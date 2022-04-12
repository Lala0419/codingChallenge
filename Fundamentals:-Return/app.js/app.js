// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b


  

  function operations (a,b){
  let add= (a+b)
  let multiply = +(a*b)
  let divide = a/b
  let mod = a%b
  let exponent = a**b
  let subt = a-b

  let all = `${add} ${multiply} ${divide} ${mod} ${exponent} ${subt}`
  
  let split = all.split(' ')
  
  for(let i=0; i<split.length; i++){
   split = +split[i]
  }
  
  return split
  
    
}

operations(5,2)



// I was making it wayyyyy complicated 


// I did it right in this way without solution


function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return a ** b
}
    
function subt(a,b){
    return a - b
}
