var prompt = require('prompt-sync')();

for (let a = 1; a <= 4; a++) {
    for (let b = 1; b <= 4; b++) {
        if (a + b === 5) {
            console.log("(", a, ",", b, ")");
        }
    }
}
