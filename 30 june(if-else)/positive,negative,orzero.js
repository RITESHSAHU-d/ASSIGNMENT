var prompt = require('prompt-sync')();

let num= parseInt(prompt("Enter a number:"));
if(num==0)
{
    console.log('number is zero')
}
else if(num>0)
{
    console.log('number is positive')
}
else
{
    console.log('number is negative')
}
