// netSalary.js
const prompt = require('prompt-sync')();

let basic = Number(prompt("Enter basic salary (₹): "));

if ( basic < 0) {
  console.log("  Please enter a valid positive number.");
} else {
  let hra, da;

  if (basic < 10000) {          
    hra = basic * 0.20;         
    da  = basic * 0.50;         
  } else {                      
    hra = basic * 0.30;         
    da  = basic * 0.80;         
  }

  let netSalary = basic + hra + da;

  console.log(`\n Salary Breakdown`);
  console.log(`Basic Salary : ₹${basic}`);
  console.log(`HRA       : ₹${hra}`);
  console.log(`DA        : ₹${da}`);
  console.log(`-------------------------`);
  console.log(`Net Salary   : ₹${netSalary}`);
}
