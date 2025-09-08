// * reduce is mainly use in shopping cart purposes 
let nums=[1,2,3]
let add =nums.reduce((accumulator,currentvalue)=>{accumulator+currentvalue,0
console.log(`accumulator: ${accumulator} and current value: ${currentvalue}`);})

console.log(add);
// The `reduce()` method is a powerful tool in JavaScript that processes an array and returns a single value. It's like taking a list of ingredients and "reducing" them down to a final dish. 🧑‍🍳

// ## How `reduce()` Works

// Think of `reduce()` as a loop that goes through each element of an array, applying a function to accumulate a result. This process boils down the entire array into a single value, which could be a number, an object, another array, or anything else you need.

// The `reduce()` method takes two main arguments:

// ### 1\. The Callback Function (`callbackFn`)

// This is the most important part. It's the recipe that tells `reduce()` what to do with each element. This function itself takes four arguments, but you'll primarily focus on the first two:

//   - **`accumulator`**: This is the value that gets carried over from each iteration. It's the "running total" or the "current result" of the reduction.
//   - **`currentValue`**: This is the current element being processed from the array.

// The `callbackFn` **must** return a value. This returned value becomes the `accumulator` for the next iteration.

// ### 2\. The Initial Value (`initialValue`)

// This is the starting point for your `accumulator`. It's the first value your `accumulator` will have before the loop even begins.

//   - **If you provide an `initialValue`**: The `accumulator` starts with this value, and the `currentValue` starts with the first element of the array.
//   - **If you don't provide an `initialValue`**: The `accumulator` automatically starts with the **first element** of the array, and the `currentValue` starts with the **second element**.

// ### Example Explained

// Let's break down the code you provided:

// ```javascript
// const array = [1, 2, 3, 4];
// const initialValue = 0;

// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// ```

// 1.  **Initial State**: The `initialValue` is `0`, so `accumulator` is `0`. The first `currentValue` is `1`.

//       - `accumulator` (`0`) + `currentValue` (`1`) = `1`.
//       - This `1` becomes the new `accumulator`.

// 2.  **Second Iteration**: The `accumulator` is now `1`. The next `currentValue` is `2`.

//       - `accumulator` (`1`) + `currentValue` (`2`) = `3`.
//       - This `3` becomes the new `accumulator`.

// 3.  **Third Iteration**: The `accumulator` is now `3`. The next `currentValue` is `3`.

//       - `accumulator` (`3`) + `currentValue` (`3`) = `6`.
//       - This `6` becomes the new `accumulator`.

// 4.  **Fourth Iteration**: The `accumulator` is now `6`. The final `currentValue` is `4`.

//       - `accumulator` (`6`) + `currentValue` (`4`) = `10`.
//       - This `10` is the final value. The loop finishes.

// 5.  **Final Result**: The `reduce()` method returns the final `accumulator` value, which is `10`.

// In short, `reduce()` is the perfect tool for when you need to take an array of items and
//  calculate a single result** from them, whether that's a sum, a product, a count, or even a restructured data object.
const shoppingCart = [
  { item: 'Laptop', price: 1200, quantity: 1 },
  { item: 'Mouse', price: 25, quantity: 2 },
  { item: 'Keyboard', price: 75, quantity: 1 },
];
let finalval=shoppingCart.reduce((acc,item)=>acc+item.price*item.quantity,0)
console.log(finalval);
