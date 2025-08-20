// Description: This file contains a list of interview questions related to JavaScript, Node.js, and general programming concepts.
// on basis how they are stored in memory
// Primitive types: string, number, boolean, null(empty), undefined, symbol(to create unique),big int
// they are called by value
// reference types (non primitive): object, array, function, date, regex
// // they are called by reference
// java script is a dynamic language
// differnce between dynamic and static language
// dynamic language
// you don't need to decalre the data type of the variable
// its like a multipurpose box whwere you can put anything
// it provides flexibility and facilitates rapid development
// errors are caught at runtime
// perform type checking at runtime
// Examples: JavaScript, Python, Ruby, and PHP.
let data = "Alice"; // 'data' is a string.
console.log(typeof data); // "string"

data = 123; // This is perfectly valid. 'data' is now a number.
console.log(typeof data); // "number"
// Static language
// you need to declare the data type of the variable
// it is like a box with a fixed size and shape means you can only put mangoes in mangoes box and oranges in orange box
// it provides type safety and can catch errors at compile time
// perform type checking at compile time
// errors are caught at compile time
// more control over memory management and performance
// Examples: Java, C, C++, and C#.
// let name: string = "Alice"; // 'name' is explicitly declared as a string.
// usage of symbol
const Id1 = Symbol("id");
const Id2 = Symbol("id");
console.log (Id1)
console.log (Id2)
console.log(Id1 === Id2); // false, because each Symbol is unique
// *************Important Note on Data Types in JavaScript*************
// to find the data type of a variable in JavaScript, you can use the `typeof` operator.
// Type of val	Result
// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"   
// Number	"number"
// BigInt	"bigint"
// String	"string"
// Symbol	"symbol"
// Object	"object"
// Array	"object" (arrays are a type of object)
// Function	"function" (functions are a type of object)
// Date	"object" (dates are a type of object)
// Regular Expression	"object" (regex is a type of object)
// special type of function "function object"

