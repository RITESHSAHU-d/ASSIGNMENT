function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function filterPrimes(arr) {
  return arr.filter(isPrime);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17];
const primes = filterPrimes(numbers);

console.log("Prime Numbers:", primes);
