// Create a function that takes in a string
// Alert if the string is a palindrome or not

function pali(str) {
	//reverse string
	let reverse = str.split("").reverse().join("");
	//compare two string
	if (str.toLowerCase() === reverse.toLowerCase()) {
		console.log("yes");
	} else {
		console.log("no");
	}
}

pali("gng");
