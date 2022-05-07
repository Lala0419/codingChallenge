// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


//1st attempt

function getAverage(marks){
    let loop = [] // chenge this to 0
    for(let i=0; i<marks.length; i++){
        loop=marks[i] +=marks[i]
        // ^^ loop+=marks[i]
        return loop/marks.length
    }
}

//best solutoin 
function getAverage(marks){
return Math.floor(marks.reduce((acc,c)=>acc+c/marks.length))
}

