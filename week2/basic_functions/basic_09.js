/* Create a function named findMax that:
Takes three parameters, a, b, and c.
Returns the largest of the three numbers.
Call the function with the arguments 12, 7, and 20.
Print the result using console.log().

Hint: Use Math.max(). 
*/

// Solution 1: Standard function
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// Solution 2: Arrow function
const findMaxArrow = (a, b, c) => Math.max(a, b, c);

// Test the function
console.log(findMax(12, 7, 20)); // 20
console.log(findMaxArrow(12, 7, 20)); // 20
