var prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
let num3 = parseInt(prompt("Enter third number: "));

if (num1 >= num2 && num1 >= num3) 
    {
        console.log(`${num1} is the greatest number`)
    }
else if (num2 >= num1 && num2 >= num3) 
    {
        console.log(`${num2} is the greatest number`)
    } 
else 
    {
        console.log(`${num3} is the greatest number`)
    }

