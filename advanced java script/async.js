// ! Asynchronous JavaScript
//  java script by default is a synchronous and single-threaded language.
//  This means that code is executed line by line, and each line must complete before the next one begins.
//  However, JavaScript can also handle asynchronous operations, allowing certain tasks to run in the background without blocking the main thread.
// !What is meant by  blocking code and non-blocking code in JavaScript?
// Blocking code refers to operations that prevent the execution of subsequent code until the current operation is complete.
// Non-blocking code, on the other hand, allows other operations to continue executing while waiting for the current operation to finish.
// !What happens in the background when we use asynchronous code in JavaScript?
// when the asynchronous code is called first ,it is sent to web api provide which contains Dom,Time out etc here the code is handeled
// and then a call back is registered and it is sent to the callback queue and once the main thread is free or the timwr is over
// the call back is pushed to the main thread and executed.
// !Ways to write asynchronous code in JavaScript
// 1. Callbacks
// 2. Promises
// 3. Async/Await
// in the case of promises instaed of callback quee it is sent to microtask queue which has higher priority than callback queue
