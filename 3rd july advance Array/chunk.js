function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

const array = [1, 2, 3, 4, 5, 6];
const chunkSize = 2;

const chunks = chunkArray(array, chunkSize);
console.log(chunks); 
