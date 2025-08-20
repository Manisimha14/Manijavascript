let score = 100;
console.log(score); // Output: 100
let pi =new Number(3.14) ;
console.log(pi); // Output: [Number: 3.14]
console.log(pi.toString()); // Output: "3.14"
console.log(pi.toFixed(2)); // Output: "3.14" (fixed to 2 decimal places)
console.log(pi.toPrecision(2)); // Output: "3.1" (precision to 2 significant digits)
// to get commas in a number we can use toLocaleString method
let largeNumber = 1234567890;   
console.log(largeNumber.toLocaleString()); // Output: "1,234,567,890"
// for indian numbering system we can use toLocaleString with options
let indianNumber = 1234567890;
console.log(indianNumber.toLocaleString('en-IN')); // Output: "1,23,45,67,890"
// maths in javascript
console.log(Math.abs(-5)); // Output: 5 (absolute value)
console.log(Math.round(4.7)); // Output: 5 (rounding)
console.log(Math.ceil(4.1)); // Output: 5 (rounding up)
console.log(Math.floor(4.9)); // Output: 4 (rounding down)
console.log(Math.max(1, 2, 3)); // Output: 3 (maximum value)
console.log(Math.min(1, 2, 3)); // Output: 1 (minimum value)
console.log(Math.random()); // Output: random number between 0 and 1
console.log(Math.random() * 10 + 1); // Output: random number between 1 and 11
// formula to generate a random number between a range
// Math.floor(Math.random() * (max - min + 1)) + min
let min = 1;
let max=6;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: random number between 1 and 6


