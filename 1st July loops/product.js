var prompt = require('prompt-sync')();

let product = 1;
for (let i = 1; i <= 10; i++) {
    product = product * i;
}
console.log("Product is:", product);
