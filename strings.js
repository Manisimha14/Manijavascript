// in java script the string can be depicted in both single and double quotes
// variable name can be used by using ${variableName} inside the string
let name = "John";
console.log(`Hello, ${name}!`); // Output: Hello, John! interpolation
let game = "chess";
console.log(game [2]); // Output: e
console.log(game.length); // Output: 5
console.log(game.toUpperCase()); // Output: CHESS
console.log(game.toLowerCase()); // Output: chess
console.log(game.indexOf("e")); // Output: 2
console.log(game.charAt("2")); // Output: e
console.log(game.indexOf("e")); // Output: 2
console.log (game.slice(0, 2)); // Output: ch
// difference between slice and splice
// example of slice
let fruits = ["apple", "banana", "cherry", "date"];
let slicedFruits = fruits.slice(1, 3); // slices from index 1 to index 3 (not inclusive)
console.log(slicedFruits); // Output: ["banana", "cherry"]
// the orginal array remains unchanged
// this is used to extract a portion of an array without modifying the original array
// it is exclusive
// example of splice
let vegetables = ["carrot", "broccoli", "spinach", "kale"]; 
let splicedVegetables = vegetables.splice(1, 2); // removes 2 elements starting from index 1
console.log(splicedVegetables); // Output: ["broccoli", "spinach"]
// the original array is modified
// this is used to remove elements from an array and can also be used to add new elements at the same time
// and it is inclusive
// to remove starting and ending spaces we can use trim method
let text = "   Hello, World!   ";   
console.log(text.trim()); // Output: "Hello, World!"
// repalce usage 
let owner ="Reddy Mani simha";
let newOwner = owner.replace("Reddy", "god");
console.log(newOwner); // Output: "god Mani simha"
// to convert a string to an array we can use split method
console.log(owner.split(" ")); // Output: ["Reddy", "Mani", "simha"]
// here we are splitting the string by space
// we can also split by any character or string
// by using the identifier in the the brackets inside the double quotes
// for more information on strings in javascript you can refer to the official documentation or MDN web docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String