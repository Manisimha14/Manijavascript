//* for loop in java script
// they are also called as iterations
// they are used to repeat a block of code multiple times
// for loop syntax
// for (initialization; condition; increment/decrement) {
    // code to be executed
// }
// initialization: is executed once before the loop starts
// condition: is checked before each iteration, if true the loop continues, if false the loop ends
for (let index = 0; index < 20; index++) {
    const element = index;
    console.log(element);
    
    
}
// increment/decrement: is executed after each iteration
// example: print numbers from 0 to 9
for (let i = 0; i < 10; i++) {
    console.log(i);}
    // nested for loop
for (let i = 0; i <=10;i++ ) {
   console.log(`outer loop value is ${i}`);
   for (let j = 0; j <=5; j++) {
    console.log(`Inner loop value is ${j} outer loop value is ${i}`);
    
    
   }
   
    
}
// * lets make you to understand the nested loop concept here in the first for loop the condition is true so the loop executes
// * and as there is a loop inside the first for loop the loop executes completley for ten times after the execution of inner for loop
// * the value of i also increments and the outer loop executes again this process execute again and again
// ! Output
// outer loop value is 0
// Inner loop value is 0 outer loop value is 0
// Inner loop value is 1 outer loop value is 0
// Inner loop value is 2 outer loop value is 0
// Inner loop value is 3 outer loop value is 0
// Inner loop value is 4 outer loop value is 0
// Inner loop value is 5 outer loop value is 0
// outer loop value is 1
// Inner loop value is 0 outer loop value is 1
// Inner loop value is 1 outer loop value is 1
// Inner loop value is 2 outer loop value is 1
// Inner loop value is 3 outer loop value is 1
// Inner loop value is 4 outer loop value is 1
// Inner loop value is 5 outer loop value is 1
// outer loop value is 2
// Inner loop value is 0 outer loop value is 2
// Inner loop value is 1 outer loop value is 2
// Inner loop value is 2 outer loop value is 2
// Inner loop value is 3 outer loop value is 2
// Inner loop value is 4 outer loop value is 2
// Inner loop value is 5 outer loop value is 2
// outer loop value is 3
// Inner loop value is 0 outer loop value is 3
// Inner loop value is 1 outer loop value is 3
// Inner loop value is 2 outer loop value is 3
// Inner loop value is 3 outer loop value is 3
// Inner loop value is 4 outer loop value is 3
// Inner loop value is 5 outer loop value is 3
// outer loop value is 4
// Inner loop value is 0 outer loop value is 4
// Inner loop value is 1 outer loop value is 4
// Inner loop value is 2 outer loop value is 4
// Inner loop value is 3 outer loop value is 4
// Inner loop value is 4 outer loop value is 4
// Inner loop value is 5 outer loop value is 4
// outer loop value is 5
// Inner loop value is 0 outer loop value is 5
// Inner loop value is 1 outer loop value is 5
// Inner loop value is 2 outer loop value is 5
// Inner loop value is 3 outer loop value is 5
// Inner loop value is 4 outer loop value is 5
// Inner loop value is 5 outer loop value is 5
// outer loop value is 6
// Inner loop value is 0 outer loop value is 6
// Inner loop value is 1 outer loop value is 6
// Inner loop value is 2 outer loop value is 6
// Inner loop value is 3 outer loop value is 6
// Inner loop value is 4 outer loop value is 6
// Inner loop value is 5 outer loop value is 6
// outer loop value is 7
// Inner loop value is 0 outer loop value is 7
// Inner loop value is 1 outer loop value is 7
// Inner loop value is 2 outer loop value is 7
// Inner loop value is 3 outer loop value is 7
// Inner loop value is 4 outer loop value is 7
// Inner loop value is 5 outer loop value is 7
// outer loop value is 8
// Inner loop value is 0 outer loop value is 8
// Inner loop value is 1 outer loop value is 8
// Inner loop value is 2 outer loop value is 8
// Inner loop value is 3 outer loop value is 8
// Inner loop value is 4 outer loop value is 8
// Inner loop value is 5 outer loop value is 8
// outer loop value is 9
// Inner loop value is 0 outer loop value is 9
// Inner loop value is 1 outer loop value is 9
// Inner loop value is 2 outer loop value is 9
// Inner loop value is 3 outer loop value is 9
// Inner loop value is 4 outer loop value is 9
// Inner loop value is 5 outer loop value is 9
// outer loop value is 10
// Inner loop value is 0 outer loop value is 10
// Inner loop value is 1 outer loop value is 10
// Inner loop value is 2 outer loop value is 10
// Inner loop value is 3 outer loop value is 10
// Inner loop value is 4 outer loop value is 10
// Inner loop value is 5 outer loop value is 10
// * assesment to print table upto 5 
for (let i = 0; i <=5; i++) {
   for (let j = 0; j <=10; j++) {
    console.log(`${i}`+"*"+ `${j}`+"="+i*j);
    
    
   }
    
}
// ### How It Works

// The code has an outer loop and an inner loop, with one running inside the other.

// * **Outer Loop**: The statement `for (let i = 0; i <= 5; i++)` initializes a variable `i` to 0. It will run as long as `i` is less than or equal to 5, and it increases `i` by 1 after each full execution. This loop controls the first number in the multiplication problem (e.g., $0 \times j$, $1 \times j$, $2 \times j$, etc.).

// * **Inner Loop**: The statement `for (let j = 0; j <= 10; j++)` initializes a variable `j` to 0. It will run as long as `j` is less than or equal to 10, and it increases `j` by 1 after each full execution. This loop controls the second number in the multiplication problem. **This entire loop runs completely for every single turn of the outer loop.**

// * **`console.log()`**: The line `console.log(`${i}`+"*"+ `${j}`+"="+i*j);` is the code that actually prints the multiplication results.
//     * `${i}` and `${j}` are **template literals**, which are a modern way to embed variables directly into strings.
//     * It prints the value of `i`, followed by the string `*`, then the value of `j`, then the string `=`, and finally the product of `i` and `j`.

// ### Output Breakdown

// The program first sets `i = 0` (from the outer loop). Then, the inner loop starts and runs completely, printing:

// $0 \times 0 = 0$
// $0 \times 1 = 0$
// ...
// $0 \times 10 = 0$

// Once the inner loop finishes, the outer loop moves to the next number, setting `i = 1`. The inner loop then starts over, running completely again and printing:

// $1 \times 0 = 0$
// $1 \times 1 = 1$
// ...
// $1 \times 10 = 10$

// This process repeats until the outer loop finishes after `i` reaches 5, resulting in a full multiplication table from $0 \times 0$ to $5 \times 10$.
// * print elements in array
let family =["mani","gani","devi","narayana"];


for (let index = 0; index < family.length; index++) {
    const element = family[index];
//    this above piece of code stores the output family[index] if index=0 then output is mani and so on
console.log(element);
// output
//  mani
// gani
// devi
// narayana

    
}
// *break and continue
// *suppose you want to print numbers only upto 10 but wanted to use the same loop as given below
// ! what you will do use break command
for (let i = 0; i <=20; i++) {
    if(i==10){
        console.log("10 is detected and the loop breaks");
        break
        
    }
    console.log(i);
    
    
}
for (let i = 0; i <=10; i++) {
    if(i==5){
        console.log("5 is detected and the loop breaks");
        continue
        
    }
    console.log(i);
    
    
}
// this is output of continue it is like a chance but it does not print 5 only it prints the if condition
// 0
// 1
// 2
// 3
// 4
// 5 is detected and the loop breaks
// 6
// 7
// 8
// 9
// 10