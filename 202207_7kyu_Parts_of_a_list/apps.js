// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

//P
//1. iterate through
//2. join [i+1]  or slice(i+1) 
//3. 



function partlist(arr) {
    var newArray;
    var returnArray=[];
    for( var i=1; i<arr.length; i++){
      newArray = [];
      //push two diffeent el to an array 
      newArray.push(arr.slice(0,i).join(" "));
      newArray.push(arr.slice(i).join(" "));
      // and push & add them to the returnArray
      returnArray.push(newArray);
    }
    
    return returnArray
}


// I could guess which methods to use but did not know how to use them correctly.




partlist(["I", "wish", "I", "hadn't", "come"])
//[["I", "wish I hadn't come"], 
//["I wish", "I hadn't come"], 
//["I wish I", "hadn't come"], 
//["I wish I hadn't", "come"]])

partlist(["cdIw", "tzIy", "xDu", "rThG"])
//[["cdIw", "tzIy xDu rThG"],
//["cdIw tzIy", "xDu rThG"], 
//["cdIw tzIy xDu", "rThG"]])
   
partlist(["vJQ", "anj", "mQDq", "sOZ"])
//[["vJQ", "anj mQDq sOZ"],
//["vJQ anj", "mQDq sOZ"], 
//["vJQ anj mQDq", "sOZ"]])



