// Given an array of integers, Find the minimum sum which is obtained from summing each Two integers product.

//Explanation => 5*2 + 3*4 = 22


function minSum(arr) {
    const sorted = arr.sort((a, b) => a - b)
    let sum = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        sum += sorted[i] * sorted[sorted.length - 1 - i]
    }
    return sum
}


//looked solution, partially understood now but still dont get how sorted[sorted.length - 1 - i] is 


minSum({ 5, 4, 2, 3}) //==> return (22) 
minSum({ 12, 6, 10, 26, 3, 24})// ==> return (342)
minSum({ 9, 2, 8, 7, 5, 4, 0, 6}) //==> return (74)