// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


//P
//1. use split to make an array
//2. use forEach to loop throught the array. initialize first and push each element as a number 
//3. map? => map and join them to convert as a string  

function fakeBin(x){
    const arr = x.split('')
  console.log(arr)
  
  const arrOfNum = []
        
    arr.forEach(e=>{
    arrOfNum.push(Number(e))
   })
  console.log(arrOfNum)
  
  return arrOfNum.map(e=>e<5?0:1).join('')

}

//ex

fakeBin('45385593107843568')//'01011110001100111');
fakeBin('509321967506747')// '101000111101101'); 
fakeBin('366058562030849490134388085')// '011011110000101010000011011');


//best pracice

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//appeantly you dont need forEach to convert string to number