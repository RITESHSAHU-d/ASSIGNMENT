const prompt = require('prompt-sync')();

let char = prompt("Enter a single character: ");

if (char >= 'A' && char <= 'Z') {
    console.log(" It is an Uppercase Letter.");
} else if (char >= 'a' && char <= 'z') {
    console.log(" It is a Lowercase Letter.");
} else if (char >= '0' && char <= '9') {
    console.log(" It is a Digit.");
} else {
    console.log("It is a Special Character.");
}
