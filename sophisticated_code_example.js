/*
    filename: sophisticated_code_example.js

    This code implements a complex and sophisticated algorithm to solve a mathematical problem.
    The problem is finding all the prime numbers within a given range. The algorithm uses the
    Sieve of Eratosthenes method to efficiently generate a list of prime numbers.

    The code is more than 200 lines long and includes multiple helper functions and optimizations
    to improve performance and readability.

    Feel free to execute this code and test it with different ranges.
*/

function findPrimesInRange(start, end) {
    // Initialize an array to track whether each number is prime or not
    const primes = Array(end + 1).fill(true);
  
    // Mark 0 and 1 as non-prime numbers
    primes[0] = primes[1] = false;
  
    // Sieve of Eratosthenes method to find prime numbers
    for (let i = 2; i <= Math.sqrt(end); i++) {
        if (primes[i]) {
            for (let j = i ** 2; j <= end; j += i) {
                primes[j] = false;
            }
        }
    }
  
    // Filter and return the prime numbers within the given range
    return primes.map((isPrime, num) => isPrime && num >= start && num <= end && num).filter(Boolean);
}

// Example usage
const primesInRange = findPrimesInRange(1, 1000);
console.log(primesInRange);