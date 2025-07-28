
var prompt = require('prompt-sync')();

let storedUser = "Ritesh";
let storedPass = "secret123";


let inputUser = prompt("Username: ");
let inputPass = prompt("Password: ");   

if (inputUser === storedUser && inputPass === storedPass) {
  console.log("Login successful. Welcome!");
} else if (inputUser !== storedUser) {
  console.log("Invalid username.");
} else {
  console.log("Invalid password.");
}
