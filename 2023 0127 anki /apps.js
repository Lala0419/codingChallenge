// Create a function that takes string
// Print the reverse of that string to the console

function string(x) {
	let reverse = x.split(" ").reverse().join(" ");
	console.log(reverse);
}

string("string is yay"); //yay is string
