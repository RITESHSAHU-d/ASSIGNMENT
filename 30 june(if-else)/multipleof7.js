var prompt = require('prompt-sync')();
let number= parseInt(prompt("Enter a number:"));
if(number%7==0)
{
    console.log(`${number} is divisible by 7`);
}
else{
    console.log(`${number} is not divisible by 7`);
}