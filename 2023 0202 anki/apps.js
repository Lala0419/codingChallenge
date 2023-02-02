// Create a function that takes string
// Print the reverse of that string to the console

function str(x) {
	let reverse = x.split(" ").reverse().join(" ");
	return reverse;
}

str("takes a string"); // 'string a takes'
