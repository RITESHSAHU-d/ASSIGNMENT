var prompt = require('prompt-sync')();
let a= parseInt(prompt("Enter a number:"));
let b= parseInt(prompt("Enter a number:"));
if (a > b) {
  console.log(`The greater number is: ${a}`);
} else if (b > a) {
  console.log(`The greater number is: ${b}`);
} else {
  console.log('Both numbers are equal.');
}
