function findPairs(arr, target) {
  const seen = new Set();
  const result = [];

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      result.push([complement, num]);
    }
    seen.add(num);
  }

  return result;
}


const arr = [1, 2, 3, 4, 5];
const target = 6;

const pairs = findPairs(arr, target);
console.log(pairs); 
