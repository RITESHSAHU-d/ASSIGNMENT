var prompt = require('prompt-sync')();
let rverse=""
let str = prompt("Enter a string: ");
function reverse(str){
    for(let i=str.length();i>=0;i--){
        reverse+=str(i)
    }
    return reverse
}
