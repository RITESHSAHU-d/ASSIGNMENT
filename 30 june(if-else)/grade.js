var prompt = require('prompt-sync')();

let marks = parseInt(prompt("Enter marks (out of 100): "));

if (marks >= 90) {
    console.log("🎓 Grade: A+");
} else if (marks >= 80) {
    console.log("🎓 Grade: A");
} else if (marks >= 70) {
    console.log("🎓 Grade: B");
} else if (marks >= 60) {
    console.log("🎓 Grade: C");
} else if (marks >= 50) {
    console.log("🎓 Grade: D");
} else {
    console.log("📉 Grade: F (Fail)");
}
