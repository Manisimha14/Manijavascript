// Java script code to convert various data types
"use strict";
console.log(typeof 123); // number
console.log(typeof "Hello"); // string
let valueInnumber = Number("abc"); // NaN
console.log(typeof valueInnumber); // number
let a=(null);
console.log(typeof a); // object
let b=undefined;    
console.log(typeof b); // undefined
let c=Number(null);
console.log(typeof c); 
// Number
let d=Number(undefined);    
console.log(typeof d); 
// Number
// "33abc" wiil be converted to NaN
let e=Number("33abc");
// true will be converted to 1
let f=Number(true); 
// false will be converted to 0
let g=Number(false);
let loggedin =1;
let isLoggedIn = Boolean(loggedin); // true
console.log(isLoggedIn); // true
// if the value of loggedin is empty string, it will be false
// if the value of loggedin is 0, it will be false
// if the value of loggedin is null, it will be false
// if the value of loggedin is undefined, it will be false
// if the value of loggedin is NaN, it will be false
// if the value of loggedin is any other number, it will be true
// if the value of loggedin is any other string, it will be true
let stringvalue = String(123); 
console.log(typeof stringvalue); // string
