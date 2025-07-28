let arr = [1, 2, 2, 3, 4, 4, 5];

let unique = arr.filter((value, index) => {
  return arr.indexOf(value) === index;
});

console.log(unique); 
