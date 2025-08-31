// if else conditions
// if (condition) {
//     code to be executed if condition is true
// } else {
//     code to be executed if condition is false
// }
// Basic operators: ==, ===, !=, !==, >, <, >=, <=
// logical operators: &&, ||, !
// ternary operator: condition ? expr1 : expr2
// basic operators precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// == refers to value equality
// === refers to value and type equality
// != refers to value inequality
// !== refers to value and type inequality
if (2 == '2') {
    console.log("2 == '2' is true");
}
// true because values are equal
if (2 === '2') {
    console.log("2 === '2' is true");
} else {
    console.log("2 === '2' is false");
}
// false because values are equal but types are not
if (2 != '2') {
    console.log("2 != '2' is true");
} else {
    console.log("2 != '2' is false");
}
// false because values are equal
if (2 !== '2') {
    console.log("2 !== '2' is true");
} else {
    console.log("2 !== '2' is false");
}
// true because values are equal but types are not
//else if
let num = 0;
if (num > 0) {
    console.log("num is positive");
} else if (num < 0) {
    console.log("num is negative");
} else {
    console.log("num is zero");
}   
// && operator
let a = 5;
let b = 10;
if (a > 0 && b > 0) {
    console.log("a and b are positive");
}
// && both conditions must be true for the whole expression to be true
// || operator
if (a > 0 || b < 0) {
    console.log("at least one of a or b is positive");
}
// || at least one condition must be true for the whole expression to be true
// ! operator
if (!(a < 0)) {
    console.log("a is not negative");
}   
// ! negates the condition
// switch case
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4: // Added case for Thursday
        console.log("Thursday");
        break;
    default:
        console.log("Not a day");
        break;
}
// *Now, let's pretend we're the computer and we're reading this code line by line.

// Now, let's pretend we're the computer and we're reading this code line by line.

// let day = 1;

// This is the start. We have a box called day, and we put the number 1 inside it. This is our choice.

// switch (day)

// This is where we turn on our choice machine. We tell it to look at the value inside the day box. So, the machine is now looking for the number 1.

// case 1:

// This is the first button on our remote. It's labeled 1. The machine checks: "Does my choice (1) match this button's label (1)?"

// Yes, it does! We have a match!

// console.log("Monday");

// Because it was a match, the machine now does the action for that button. It prints the word "Monday".

// break;

// This is a very important word! It's like an "STOP" sign. Once the machine has found a match and done its job, the break tells it to stop looking and jump out of the switch statement.

// What happens if we forget break? If we didn't have the break, the machine would keep going to the next case, even though it already found a match. It would print "Monday", then "Tuesday", and so on, which we don't want.

// default:

// The default is like a "just in case" button. If the machine looks at all the other buttons (case 1, case 2, case 3) and doesn't find a match, it will press the default button.

// For example, if we changed our code to let day = 5;, the machine wouldn't find a match for 1, 2, or 3. So, it would go straight to default and print "Not a day"
// Remember, the switch statement is a neat way to make your code tidy when you have many choices to check. It's like having a special menu instead of a long list of "if... then... else" questions!
// * if we want compare string we can use string in case
// truthy value
if ("hello") {
    console.log("this is truthy");
}   
// non empty string is truthy
// true values: true, {}, [], function(){}, 1, -1, "hello"'false'
// falsy value
// "", 0, null, undefined, NaN, false,-0,bigint(0).0n
// * to check it is array
let mani =["mani","gani"]
if (mani.length===0){
    console.log("this is not array");
    
}
else{
    console.log("this is array");
    
}
// * to check about objects
let gani=  {}
if(Object.keys(gani).length===0){
    console.log("this is empty object");
    
}
// null coalescing operator ??
let h=null??"mani"
console.log(h);
// output: mani
// if h is null or undefined then it will return mani otherwise it will return h
// it performs a null check and returns the right-hand operand when the left-hand operand is null or undefined, otherwise, it returns the left-hand operand.
// it is also used for undefined check
let g=undefined??"mani"
console.log(g);
// output: mani
// *ternary operator
let venkatbabu="bisexual"
venkatbabu==="bisexual"?console.log("he is bisexual"):console.log("he is not bisexual");
// output: he is bisexual
// condition ? expr1 : expr2
// * do not take it seriously it is just for understanding purpose