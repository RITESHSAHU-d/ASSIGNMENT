let arr = [10, 5, 8, 1, 9];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num !== first) {
    second = num;
  }
}

console.log(second); 
