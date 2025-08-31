// * how java script execute the code
// ! Java script execution context
// three types of context
//* 1 global execution context
// in browser the global execution context is windows object
// in node environment it is undefined
// *2 functional execution context
// *3 eval execution context
// ! how java script executes the code
// * we will understand by writing a small piece of code
let a=2
let b=69
function mani(a,b){
    total=a+b
 return total

}
console.log(mani(a,b));
console.log(mani(2,5));
// * first here the global execution context is created by using this
// ! second the memory allocation takes place also called as mcp not mcp servers
// * after memory allocation phase the execution phase occurs
// first a is marked as undefine
// b is marked undefined
// and the function is marked as defination
// next step is execution step
// where the variables are assigned with there values 
// a=2,b=69 and the important is in the function mani again the new variable context with a thread is created
// which means again the two steps will occur first mcp and execute
// in mcp a,b are allocated some memory means undefined
// total is also marked as undefined
// in the execution step the variables are assigned with their respective values
// and the total is returned and the main thing to be noted is the new variable context with the thred will be deleted after it is executed
// * For the call stack concept please refer youtube video as it must be expalined through the chrome
// basically call stack works on the principle of "lifo" last in first out