var prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));

if (number === 1) {
    console.log("1 is neither prime nor composite.");
} else {
    let isPrime = true;

    for (let i = 2; i <= number - 1; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(` ${number} is a Prime Number.`);
    } else {
        console.log(`${number} is NOT a Prime Number.`);
    }
}
