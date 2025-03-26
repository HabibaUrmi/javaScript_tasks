/*
Write a function named isEven:
Take a number as a parameter.
Return true if the number is even, or false if it’s odd.
Call the function with numbers like 4 and 7, and print "The number is even!" or "The number is odd!" based on the result. 
*/

function isEven(number) {
  return number % 2 === 0;
}

function checkNumber(num) {
  console.log(isEven(num) ? "The number is even!" : "The number is odd!");
}

checkNumber(4); // Output: "The number is even!"
checkNumber(7); // Output: "The number is odd!"
checkNumber(10); // Output: "The number is even!"
checkNumber(15); // Output: "The number is odd!"
