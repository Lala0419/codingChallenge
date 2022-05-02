// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.


//1st try

function cuboid(arr){
    return arr.reduce((acc,c)=>acc*c) 
}
console.log(cuboid([2,4,5]))//40 first tryyyyy



//codewar way

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

