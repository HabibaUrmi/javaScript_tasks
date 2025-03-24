/* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/

function task1() {
  "use strict";
  try {
    undeclaredVariable = 5;
  } catch (error) {
    console.log("strict more error:", error.message);
  }
}
task(1);

/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/

function task2() {
  "use strict";
  const MAX_USERS = 100;
  let currentUsers = 10;
}
try {
  MAX_USERS = 200;
} catch (error) {
  console.log("constant value error", error.message);
}
task2();

/* Task 4: Write a Simple Function
/*
Task: Create `calculateArea` function that returns the area of a rectangle.
      The function should take `width` and `height` as inputs.

Example:
calculateArea(5, 10) → 50
*/

function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 10));

/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/

const DISCOUNT_RATE = 0.1;

function applyDiscount(price) {
  return price * (1 - DISCOUNT_RATE);
}
console.log(applyDiscount(100));

/* Task 6: Write Useful Comments
/*
Task: Write a function `greetUser(name)` that returns a greeting.
      Use a meaningful comment explaining the function.

Example:
greetUser("Bob") → "Hello, Bob!"
*/

function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log(greetUser("Bob"));

/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}

After:
- Use better naming and proper formatting.
*/

function getSignDescription(number) {
  return number < 0 ? "negative" : "positive";
}

console.log(getSignDescription(-5));

/* Task 8: Fix Formatting
/*
Task: Rewrite this code to make it **formatted correctly**.

Before:
let x=10; function example(){console.log(x);}

After:
- Proper indentation and spacing.
*/

let x = 10;
function example() {
  console.log(x);
}
