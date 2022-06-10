// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

//P.
//1. warn the sheep in front of the wolf which means if the wolf is one after warn the sheep after it. but the number is reverse...
    //1.1 reverse the array 
    //1.2 if wolf is behind, the sheep is warned and return the index number +1 as N
//2. if the end of the arrayis wolf return "Pls go away and stop eating my sheep"

//^^ 2 have to be before 1.2 due to if statement rule

function warnTheSheep(queue){
   
  	if(queue[queue.length-1] === "wolf"){
    	return "Pls go away and stop eating my sheep"
    }else{
      queue.reverse()
       console.log(queue)
      let n = queue.findIndex(i=>i==='wolf')
      return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
     }
     

}

//tough one!! took a while to find the way to get index number ...!! did everything on myown except findIndex methods, I had to google.

//the best practice

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

//fucknig genius


warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
		//"Oi! Sheep number 2! You are about to be eaten by a wolf!"
	);
warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
	//"Oi! Sheep number 5! You are about to be eaten by a wolf!"
);
warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
	//"Oi! Sheep number 6! You are about to be eaten by a wolf!"
);
warnTheSheep(["sheep", "wolf", "sheep"],
	//"Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
warnTheSheep(["wolf"],
	//"Pls go away and stop eating my sheep"
);
warnTheSheep(["sheep", "sheep", "wolf"],
	//"Pls go away and stop eating my sheep"
);

