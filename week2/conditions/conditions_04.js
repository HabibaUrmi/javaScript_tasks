/* 
Write a function named canEat:
Take two parameters: isHungry and hasFood.
If both are true, return "Time to eat!".
If either is false, return "You need to find food!"
Call the function with different combinations of isHungry and hasFood. 
*/

function canEat(isHungry, hasFood) {
  if (isHungry && hasFood) {
    return "Time to eat!";
  } else {
    return "You need to find food!";
  }
}

console.log(canEat(true, true)); // Output: "Time to eat!"
console.log(canEat(true, false)); // Output: "You need to find food!"
console.log(canEat(false, true)); // Output: "You need to find food!"
console.log(canEat(false, false)); // Output: "You need to find food!"
