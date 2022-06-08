// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//P
//1. check if it is 'good' or 'bad' => using loop
//2. if good is more than 1 return 'publish' => if 
//3. if is more than 2 return 'I smell a series! => 



function well(x){
     let arr = x.filter(e=>e==='good')
 console.log(arr.length)
  
    if(arr.length>2){
      return 'I smell a series!'
    }else if(arr.length>0){
      return 'Publish!'
    }else{
     return 'Fail!'
    }

}

// took way too long to figure out the if order... 


well(['bad', 'bad', 'bad'])// 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad'])// 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])// 'I smell a series!');
  

//this also works.. 


//  if(arr.length>0){
//     if(arr.length>2)
//     return 'smell series!'
//     else return 'piblish'
//   }else{
//   return 'fail!'
//   }



//the best practice

const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

