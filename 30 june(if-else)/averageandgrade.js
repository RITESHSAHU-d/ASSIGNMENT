var prompt = require('prompt-sync')();

let m1 = parseInt(prompt("Enter marks for Subject 1: "));
let m2 = parseInt(prompt("Enter marks for Subject 2: "));
let m3 = parseInt(prompt("Enter marks for Subject 3: "));
let m4 = parseInt(prompt("Enter marks for Subject 4: "));
let m5 = parseInt(prompt("Enter marks for Subject 5: "));

    let total = m1 + m2 + m3 + m4 + m5;
    let average = total / 5;

    console.log(`Average Marks: ${average}`);

    if (average >= 90) {
        console.log("Grade: A+");
    } else if (average >= 80) {
        console.log("Grade: A");
    } else if (average >= 70) {
        console.log("Grade: B");
    } else if (average >= 60) {
        console.log("Grade: C");
    } else if (average >= 50) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F (Fail)");
    }

