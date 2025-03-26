/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */

function checkAdult(age) {
  if (age >= 18) {
    return "You are an adult.";
  }
}

console.log(checkAdult(20)); // Output: "You are an adult."
console.log(checkAdult(18)); // Output: "You are an adult."
console.log(checkAdult(17)); //Output: undefined
