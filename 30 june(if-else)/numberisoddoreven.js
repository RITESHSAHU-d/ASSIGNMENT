const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number: "));

//odd or even
    if (number % 2 === 0) {
        console.log(`${number} is Even.`);
    } else {
        console.log(`${number} is Odd.`);
    }

    // Positive, Negative, or Zero
    if (number > 0) {
        console.log(`${number} is Positive.`);
    } else if (number < 0) {
        console.log(`${number} is Negative.`);
    } else {
        console.log("The number is Zero.");
    }