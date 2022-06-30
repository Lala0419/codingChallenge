// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
  let arr=[]
  let con =  ['a',"i","u","e","o"]
  for(let i =0; i<str.length; i ++){
      if(con.some(e=>str[i].includes(e))){
       arr.push(str[i])
}
}
  
  return arr.length 
}


//other solution that I liked

function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
      vowelsCount += 1;
    }
  });  
  return vowelsCount;
}

getCount("abracadabra")// 5
 
getCount("pear tree")// 4
 
getCount("o a kak ushakov lil vo kashu kakao")// 13
  
getCount("my pyx")// 0
  