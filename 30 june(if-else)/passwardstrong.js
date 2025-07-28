var prompt = require('prompt-sync')();

let password = prompt("Enter a password: ");

let longEnough      = password.length >= 8;               
let hasDigit        = /[0-9]/.test(password);            
let hasSpecialChar  = /[^a-zA-Z0-9]/.test(password);      

if (longEnough && hasDigit && hasSpecialChar) {
  console.log("Password is STRONG.");
} else {
  console.log(" Password is WEAK.");
  if (!longEnough)     console.log("   • must be at least 8 characters.");
  if (!hasDigit)       console.log("   • must include at least one digit (0‑9).");
  if (!hasSpecialChar) console.log("   • must include at least one special character (e.g. @, #, !).");
}
