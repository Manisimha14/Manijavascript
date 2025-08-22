// arrays in javascript
// arrays are written in square brackets []
let fruits = ["apple", "banana", "cherry"];
// here fruits is an array that contains three strings and the strings are the elements of the array
// js arrays can hold any data type
// js arrays are dynamic, meaning you can add or remove elements at any time
// js arrays are zero-indexed, meaning the first element is at index 0, the second element is at index 1, and so on
// js copies as shallow copies, meaning if you copy an array to another variable, both variables will point to the same array in memory
let moreFruits = fruits; // both fruits and moreFruits point to the same array
// want to more about arrays? visit https://www.w3schools.com/js/js_arrays.asp or mdn docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// another way to create an array is to use the Array constructor
let vegetables =new Array("carrot", "broccoli", "spinach");
// ************ Array Methods ************
// push() - adds one or more elements to the end of an array and returns the new length of the array
fruits.push("guava"); // adds "guava" to the end of the fruits array
// pop() - removes the last element from an array and returns that element
fruits.pop(); // removes "guava" from the end of the fruits array
console.log(fruits); // ["apple", "banana", "cherry"]
// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
fruits.unshift("mango"); // adds "mango" to the beginning of the fruits array
// shift() - removes the first element from an array and returns that element   
fruits.shift(); // removes "mango" from the beginning of the fruits array
// include() - checks if an array contains a certain element and returns true or false
console.log(fruits.includes("banana")); // true
// log(fruits.includes(typeof "banana")); // false, because "banana" is a string and not a number
// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(fruits.indexOf("cherry")); // 2
console.log(fruits.indexOf("grape")); // -1, because "grape" is not in the fruits array
// join() - joins all elements of an array into a string and returns that string
console.log(fruits.join(", ")); // "apple, banana, cherry"
// slice vs splice
let slice =new Array ("item1", "item2", "item3", "item4", "item5");
console.log(slice.slice(1, 3)); // ["item2", "item3"], returns a new array containing the elements from index 1 to index 3 (not including index 3)
console.log(slice); // ["item1", "item2", "item3", "item4", "item5"], the original array is not modified
let splice = new Array("item1", "item2", "item3", "item4", "item5");
console.log(splice.splice(1,3)); // ["item2", "item3", "item4"], removes 3 elements starting from index 1 and returns them as a new array
console.log(splice); // ["item1", "item5"], the original array is modified
let numbers = [1, 2, 3, 4, 5];
let anothernumbers = [6, 7, 8, 9, 10];
// concat() - merges two or more arrays and returns a new array
let all =anothernumbers.concat(numbers);
console.log(all); // [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
console.log(all.reverse()); // [5, 4, 3, 2, 1, 10, 9, 8, 7, 6], reverses the order of the elements in the array
// another useless method
console.log(anothernumbers.push(numbers));
// returns the new length of the array, which is 6, because we added one element (the numbers array) to the anothernumbers array
// spraed
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log([...a, ...b]); // [1, 2, 3, 4, 5, 6], merges the two arrays using the spread operator
// difference between spread and concat
// concat() merges two or more arrays into a new array
// the spread operator (...) expands an array into individual elements
// both can be used to merge arrays, but the spread operator is more flexible and can be used in other contexts as well
// flat() - flattens a nested array into a single array
let nestedArray = [1, 2, [3, 4], [5, 6]];
console.log(nestedArray.flat()); // [1, 2, 3, 4 5, 6]
// to find it is array or not
console.log(Array.isArray(nestedArray)); // true
// to convert to arary
console.log (Array.from("hello")); // ["h", "e", "l", "l", "o"]
// exceptions
console.log(Array.from( {name :"hello"})); // [undefined], because the object does not have a length property or an iterable protocol
// Array.of() - creates a new array from a set of arguments
let score1 = 120
let score2 = 120
let score3 = 120
console.log(Array.of(score1, score2, score3)); // [120, 120, 120], creates a new array with the three scores as elements


