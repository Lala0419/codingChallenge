// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!


//P
//1.switch the last index and the firdt index

//1stbattempt

function fixTheMeerkat(arr) {
    const first = arr[0]
    const last = arr[arr.length-1]
  arr.splice(0,1,last)
  arr.splice(-1,1,first)
  return arr
}

// at first, thought I have to use replace but didnt work. was able to solve pretty quick!

(["tail", "body", "head"])//["head", "body", "tail"]);
(["tails", "body", "heads"])//["heads", "body", "tails"]);
(["bottom", "middle", "top"])//["top", "middle", "bottom"]);
(["lower legs", "torso", "upper legs"])//["upper legs", "torso", "lower legs"]);
(["ground", "rainbow", "sky"])// ["sky", "rainbow", "ground"]);


//the best practice

function fixTheMeerkat(arr) {
  return arr.reverse();
}


// DId not come up in my head..!