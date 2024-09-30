// Print Today’s date and time using REPL
let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

console.log(`Today is : ${date}-${month}-${year} ${hours}:${minutes}:${seconds}`);


// Code explanation:
// First, we create a new Date object using the Date() constructor.
// Then, we get the current date, month, year, hours, minutes, and seconds using the get methods.
// Finally, we print the date and time using the console.log() method.
