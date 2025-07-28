var prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "));
let rev = 0;

while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed number is:", rev);
