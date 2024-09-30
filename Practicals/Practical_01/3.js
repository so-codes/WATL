// 3) Write a Program in JavaScript to print Fibonacci series of given number. Take input from user.
function fibonacciSeries(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n);
}

const n = parseInt(process.argv[2]);

if (isNaN(n) || n <= 0) {
    console.log("Please provide a valid positive integer as input.");
} else {
    const series = fibonacciSeries(n);
    console.log(`Fibonacci series of ${n} terms:`, series.join(', '));
}

// Code explanation:
// We define a function fibonacciSeries that takes a number n as input.
// We initialize an array fib with the first two Fibonacci numbers 0 and 1.
// We then use a for loop to calculate the remaining Fibonacci numbers up to n.
// Each Fibonacci number is the sum of the previous two numbers in the sequence.
// We return the first n Fibonacci numbers using the slice method.
// We parse the input from the command line argument using process.argv[2].
// If the input is not a valid positive integer, we print an error message.
// Otherwise, we calculate the Fibonacci series of n terms and print the result.