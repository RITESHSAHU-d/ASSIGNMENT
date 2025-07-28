var prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));

if (number % 5 === 0 && number % 11 === 0) {
    console.log(`${number} is divisible by both 5 and 11.`);
} else {
    console.log(`${number} is NOT divisible by both 5 and 11.`);
}
