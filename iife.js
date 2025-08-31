//  * Immediately Invoked Function Expression (IIFE)
// ? Why do we use iife because to stop the pollution from global scope
// * how do we denote iife 
(function mani(){
    console.log("hi mani");
    
})();
// The IIFE syntax: a function expression wrapped in parentheses,
// immediately followed by another set of parentheses to invoke it.
// * to create another iife function we should use semi colon because not ussing it gives error
(()=>{
    console.log("hi gani");
    
})();
// * how to use arguments in iife
(function devi (name){
    console.log(`hi ${name}`);
    
})("narayana");
// * this also called as named iife because the function has name
// ! important questions
// * to create two iifes in single file (semicolon case)
// *how to pass arguments in iifee
// * difference between named and unnamed iifee
