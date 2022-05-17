// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


//P
//need to filter true 
//return the length

function countSheeps(arrayOfSheep) {
  let result = arrayOfSheep.filter(e=>e===true)
  return result.length
}

countSheeps([true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ])

              //'There are 17 sheeps in total' <--- they wanted only for the length num


// thougt I need to use map at first but you dont wanna convert el to anything so filter is the right method. 



//the best practice

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}