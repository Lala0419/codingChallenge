 
//  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//1st attemt

function even_or_odd(number) {
  if (number % 2 === 0)
    return "Even"
  else
    return "Odd"
}

//firly easy! first try!

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

//best solution