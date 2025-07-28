var prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter length of side a: "));
let b = parseInt(prompt("Enter length of side b: "));
let c = parseInt(prompt("Enter length of side c: "));

  if (a + b > c && a + c > b && b + c > a) {

    if (a === b && b === c) {
      console.log("It is an EQUILATERAL triangle.");
    } else if (a === b || a === c || b === c) {
      console.log("It is an ISOSCELES triangle.");
    } else {
      console.log("It is a SCALENE triangle.");
    }

  } else {
    console.log("The given sides do NOT form a valid triangle.");
  }