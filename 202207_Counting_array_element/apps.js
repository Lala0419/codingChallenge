// Write a function that takes an array and counts the number of each unique element present.

function count(array){
  return array.reduce(function (stack, value) {
    return stack[value] ? stack[value]++ : stack[value] = 1, stack;
  }, {});
}



function count(array){
  var counter = {};
  
  for (let i=0; i<array.length; ++i)
  {
    if (counter[array[i]] == undefined)
      counter[array[i]] = 1;
    else
      counter[array[i]] ++;
  }
  
  return counter;
}


    count(['james', 'james', 'john']) // { 'james': 2, 'john': 1 }
