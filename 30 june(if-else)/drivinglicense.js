var prompt = require('prompt-sync')();

let name = prompt("Enter your name: ");
let age = parseInt(prompt("Enter your age: "));

if (age >= 18) {
    console.log(`${name}, you are eligible for a driving license.`);
} else {
    console.log(`Sorry ${name}, you are not eligible for a driving license yet.`);
}
