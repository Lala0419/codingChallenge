// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//1st attempt

const myPoint = [6]

function compare(arr){
    
    let reduce=arr.reduce((acc,c)=>acc+=c)
    reduce=reduce/arr.length
    
    if(myPoint>reduce){
        return true
    }else{
        return false
    }
    
}

compare([5,5,5,5,5]) //true

//first tryyyyyyy /!!?!?!!!??! No... reduce is the sum of classPoint. you want to make an another variable for the division 



betterThanAverage([5,5,5,5,5],[6])

//best solution 

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}


//3rd attempt!!!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum=classPoints.reduce((acc,c)=>acc+=c)
    let average=sum/classPoints.length
    
    if(yourPoints>average){
        return true
    }else{
        return false
    }

}

betterThanAverage([5,5,5,5,5],6)



///lets ggooooooooo