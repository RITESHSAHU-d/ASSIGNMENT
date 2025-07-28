var prompt = require('prompt-sync')();

let sum = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log("Sum of even numbers is:", sum);
