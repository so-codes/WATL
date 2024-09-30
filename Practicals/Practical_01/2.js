// Write a program to Print the given pattern
// a)
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// b)
// *
// * *
// * * *
// * * * *
// * * * * *

let n = 5;
let str = '';
for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
        str += j + ' ';
    }
    str += '\n';
}

console.log("Output of a) pattern:");
console.log(str);

let n1 = 5;
let str1 = '';
for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= i; j++) {
        str1 += '* ';
    }
    str1 += '\n';
}

console.log("Output of b) pattern:");
console.log(str1);

// Code explanation:
// We first initialize a variable n with 5.
// We then initialize an empty string str.
// We then use a for loop to iterate from n to 1.
// Inside the loop, we use another loop to iterate from 1 to i.
// We concatenate the value of j to the str variable.
// We add a newline character at the end of each iteration of the outer loop.
// Finally, we print the str variable to the console.
// We then initialize a variable n1 with 5.
// We then initialize an empty string str1.
// We then use a for loop to iterate from 1 to n.
// Inside the loop, we use another loop to iterate from 1 to i.
// We concatenate the '*' character to the str1 variable.
// We add a space character at the end of each iteration of the inner loop.
// We add a newline character at the end of each iteration of the outer loop.
// Finally, we print the str1 variable to the console.
// This program prints two patterns. The first pattern is a decreasing sequence of numbers from 1 to n, and the second pattern is an increasing sequence of '*' characters. The patterns are printed using nested loops and string concatenation.
