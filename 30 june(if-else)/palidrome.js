var prompt = require('prompt-sync')();

let num = prompt("Enter a 3-digit number: ");
let original = parseInt(num);

if (original < 100 || original > 999) {
    console.log(" Please enter a valid 3-digit number.");
} else {
    let n = original;

    let d1 = Math.floor(n / 100);           // first digit
    let d2 = Math.floor((n % 100) / 10);    // middle digit (optional check)
    let d3 = n % 10;                        // last digit

    let reversed = d3 * 100 + d2 * 10 + d1;

    if (original === reversed) {
        console.log(`${original} is a palindrome number.`);
    } else {
        console.log(`${original} is NOT a palindrome number.`);
    }
}
