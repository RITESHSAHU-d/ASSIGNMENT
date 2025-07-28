var prompt = require('prompt-sync')();

let month = parseInt(prompt("Enter month number (1–12): "));

if (month < 1 || month > 12) {
    console.log("Please enter a valid month number between 1 and 12.");
} else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log("This month has 31 days.");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("This month has 30 days.");
} else if (month === 2) {
    console.log("February has 28 days (29 in a leap year).");
}
