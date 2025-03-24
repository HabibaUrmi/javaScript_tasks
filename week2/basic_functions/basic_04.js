/* Create a function named capitalize that:
Takes one parameter, str.
Returns the string with the first character in uppercase and the rest in lowercase.
Call the function with the string "javascript".
Print the result using console.log().

Hint: Use str[0].toUpperCase() and str.slice(1).toLowerCase().

*/

// Solution 1: Standard function
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Solution 2: Arrow function
const capitalizeArrow = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

// Test the function
console.log(capitalize("javascript")); // JavaScript
console.log(capitalizeArrow("javascript")); // JavaScript
