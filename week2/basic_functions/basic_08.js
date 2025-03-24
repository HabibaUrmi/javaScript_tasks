/* Create a function named roundNumber that:
Takes two parameters, num and precision.
Returns the number rounded to the specified precision (number of decimal places).
Call the function with 19.56789 and 2.
Print the result using console.log().

Hint: Use .toFixed().

*/

// Solution 1: Standard function
function roundNumber(num, precision) {
  return parseFloat(num.toFixed(precision));
}

// Solution 2: Arrow function
const roundNumberArrow = (num, precision) => parseFloat(num.toFixed(precision));

// Test the function
console.log(roundNumber(19.56789, 2)); // 19.57
console.log(roundNumberArrow(19.56789, 0)); // 20
