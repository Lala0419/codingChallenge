// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples


// 'a' and 'g' returns 1
name1.toLowerCase()===name2.toLowerCase()
return 1

// 'A' and 'C' returns 1

name1.toUpperCase()===name2.toUpperCase()
return 1

// 'b' and 'G' returns 0

name1.toLowerCase()===name2.toUpperCase()
return 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
Number(name1) || Number(name2)
return -1


//1st attempt 

function CheckSameCase(name1,name2){
    
    if((name1.toLowerCase()===name2.toLowerCase())||(name1.toUpperCase()===name2.toUpperCase())){
        return 1
    }else if((name1.toLowerCase()===name2.toUpperCase())||(name1.toUpperCase()===name2.toLowerCase())){
        return 0
    }else{
        return -1
    }
}


//this doesnt work because I misuderstood 'and' means. You can see at the top, I put === instead of && so there how I start this wrong

//you are suppose to do..

// 'a' and 'g' returns 1
name1.toLowerCase()&&name2.toLowerCase()
return 1

// 'A' and 'C' returns 1

name1.toUpperCase()&&name2.toUpperCase()
return 1

// 'b' and 'G' returns 0

name1.toLowerCase()&&name2.toUpperCase()
return 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
Number(name1) || Number(name2)
return -1

//this more make sence except im not sure about the last one..

// after numberous of attempts i finally figured after saw the solution 

//solution 

function CheckSameCase(name1,name2){

    if(name1.toLowerCase()===name1.toUpperCase()||name2.toUpperCase()===name2.toLowerCase()){ //im assuming this turns out as a number 
    return -1
    }else if(name1===name1.toLowerCase()&&name2===name2.toLowerCase()||name1===name1.toUpperCase()&&name2===name2.toUpperCase()){
        return 1
    }else{
        return 0
    }
}

CheckSameCase('A','j')


// My way of thinking process ... it closer than for sure but yet so far away.. 

//add more Anki I guess!




