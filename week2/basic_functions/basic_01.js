/* Create a function named add that:
Takes two parameters, a and b.
Returns the sum of a and b.
Call the function with the arguments 10 and 5.
Print the result using console.log(). 

Bonus: Call the function multiple times with different arguments and print all the results.
*/

// Solution 1: Standard function declaration
function add(a, b) {
  return a + b;
}

// Solution 2: Function expression
const addExpression = function (a, b) {
  return a + b;
};

// Solution 3: Arrow function
const addArrow = (a, b) => a + b;

// Test the function
console.log(add(10, 5));
console.log(addExpression(10, 5));
console.log(addArrow(10, 5));
