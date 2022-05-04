// Simple, remove the spaces from the string, then return the resultant string.

//1st 

function noSpace(x){
  return x.replace(/\s/g, '');
}

//found this solution on google

//my way

function noSpace(x){
    return x.split(' ').join('')

}

console.log(noSpace('8aaaaa dddd r     ')) //8aaaaaddddr