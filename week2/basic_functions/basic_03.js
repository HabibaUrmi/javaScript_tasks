/* Create a function named getLength that:
Takes one parameter, str.
Returns the length of str using .length.
Call the function with the string "JavaScript".
Print the result using console.log().

*/

// Solution 1: Standard function
function getLength(str) {
  return str.length;
}

// Solution 2: Arrow function with implicit return
const getLengthArrow = (str) => str.length;

// Test the function
console.log(getLength("JavaScript")); // 10
console.log(getLengthArrow("JavaScript")); // 10
