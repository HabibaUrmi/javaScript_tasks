/* Create a function named isEven that:
Takes one parameter, num.
Returns true if num is even, otherwise returns false.
Call the function with the arguments 4 and 7.
Print the results using console.log().

Bonus: Modify the function to use implicit return. 
*/

// Solution 1: Standard function
function isEven(num) {
  return num % 2 === 0;
}

// Solution 2: Arrow function with implicit return
const isEvenArrow = (num) => num % 2 === 0;

// Test the function
console.log(isEven(4)); // true
console.log(isEvenArrow(7)); // false
