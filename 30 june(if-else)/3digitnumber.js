var prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));

if (number >= 100 && number <= 999 || number <= -100 && number >= -999)
{
    console.log(` ${number} is a 3-digit number.`);
}
else
  {
    console.log(` ${number} is NOT a 3-digit number.`);
}
