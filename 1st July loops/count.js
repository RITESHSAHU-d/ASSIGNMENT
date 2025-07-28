var prompt = require('prompt-sync')();

let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        count = count + 1;
    }
}
console.log("Count is:", count);
