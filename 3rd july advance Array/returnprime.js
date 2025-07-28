function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPrimes(arr) {
  return arr.filter(isPrime);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 18];
const primes = getPrimes(numbers);

console.log("Prime Numbers:", primes);
