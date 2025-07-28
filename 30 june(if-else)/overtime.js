var prompt = require('prompt-sync')();

let hours = parseInt(prompt("Enter total hours worked: "));

if (hours < 0) {
    console.log("Please enter a valid positive number of hours.");
} else if (hours > 40) {
    let overtimeHours = hours - 40;
    let overtimePay = overtimeHours * 12;
    console.log(`Overtime Hours: ${overtimeHours}`);
    console.log(`Overtime Pay: Rs. ${overtimePay}`);
} else {
    console.log("No overtime. Hours worked are within the standard limit (40 hours).");
}
