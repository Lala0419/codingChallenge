//Given an array of integers nums which is soarted in asccending order, and integer target, while funciton to search target in nums. If target exists, then return its index. Otherwise, return -1.

//You must write an algorithm with o(log n) runtime complexity.




function num(nums, target) {
    return nums.indexOf(target)
}


num([-1, 0, 3, 5, 9, 12], 9)//4
num([-1, 0, 3, 5, 9, 12], 2)//-1
num([-1, 0, 3, 5, 9, 12], 3)//2