let nested = [1, [2, [3, [4]], 5]];
let result = [];

function flatArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (Array.isArray(item)) {
      flatArray(item); 
    } else {
      result.push(item); 
    }
  }
}

flatArray(nested);
console.log(result); 
