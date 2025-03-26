/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/

function canEnterEvent(age, hasID) {
  return age >= 18 && hasID ? "You can enter the event." : "You cannot enter.";
}

console.log(canEnterEvent(20, true)); // Output: "You can enter the event."
console.log(canEnterEvent(18, true)); // Output: "You can enter the event."
console.log(canEnterEvent(17, true)); // Output: "You cannot enter."
console.log(canEnterEvent(19, false)); // Output: "You cannot enter."
console.log(canEnterEvent(16, false)); // Output: "You cannot enter."
