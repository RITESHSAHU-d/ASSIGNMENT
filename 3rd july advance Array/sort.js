people.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age; 
  }
  return a.name.localeCompare(b.name); 
});

console.log(people);
