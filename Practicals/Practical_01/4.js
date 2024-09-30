// 4 ] Write a program to print prime numbers between 1 and 100.

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("Prime numbers between 1 and 100:");
for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

// Code explanation:
// We define a function isPrime that takes a number num as input.
// We first check if the number is less than or equal to 1, in which case it is not a prime number.
// We then use a for loop to iterate from 2 to the square root of the number.
// If the number is divisible by any number in this range, it is not a prime number.
// If the number is not divisible by any number in this range, it is a prime number.
// We return true if the number is prime and false otherwise.
// We then use a for loop to iterate from 2 to 100.
// For each number in this range, we check if it is prime using the isPrime function.
// If the number is prime, we print it to the console.
