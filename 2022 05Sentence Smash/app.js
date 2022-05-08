// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'



function arr(arr){
    return arr.join(' ')
}

console.log(arr(['hello', 'world', 'this', 'is', 'great'])) //hello world this is great


//first tryyyyy

// it was easy because it was already an arry and did not need to convert from a string