/* Create a function named generateRandomNumber that:
Takes two parameters, min and max.
Returns a random integer between min and max (inclusive).
Call the function with the arguments 1 and 10.
Print the result using console.log().

Hint: Use Math.random(), Math.floor(), and simple math.

*/

// Solution 1: Standard function
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Solution 2: Arrow function
const generateRandomNumberArrow = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Test the function
console.log(generateRandomNumber(1, 10)); // Random number between 1 and 10
console.log(generateRandomNumberArrow(1, 10)); // Random number between 1 and 10
