var prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));

if ((number % 3 === 0 || number % 5 === 0) && !(number % 3 === 0 && number % 5 === 0)) {
    console.log(`${number} is divisible by either 3 or 5, but not both.`);
} else {
    console.log(`${number} is either divisible by both 3 and 5 or by neither.`);
}
