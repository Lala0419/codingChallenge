// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

//P.
//1. sort the array 
//2. get the first el and the last el 
//3. find hte out the difference between ages[ages-1]-ages[0]
//4. return the smallest and the largest and the result 


function differenceInAges(ages){
	return [ages.sort((a,b)=>a>b?1:-1)[0], ages.sort((a,b)=>a>b?1:-1)[ages.length-1], ages.reduce(e=>ages[ages.length-1]-ages[0])]

}

//best practice

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}


differenceInAges([82, 15, 6, 38, 35])// [6, 82, 76]);
differenceInAges([57, 99, 14, 32])//[14, 99, 85]);
  

//tend to forget about Math methods..!!
