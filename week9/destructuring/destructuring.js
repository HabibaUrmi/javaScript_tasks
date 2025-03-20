"use strict";

/* Task 1: Fix the Employee Destructuring  
Extract `name` and `position` from the employee object.  
*/

const employee = { name: "Sarah", position: "Manager", department: "HR" };

const { name, position } = employee;

console.log(name);
console.log(position);

/* Task 2: Fix the Array Destructuring  
Extract the first two colors from the colors array.  
*/

const colors = ["red", "blue", "green", "yellow"];

// Fix this
const [primary, secondary] = colors;

console.log(primary, secondary); // Expected: "red blue"

/* Task 3: Fix Nested Destructuring  
Extract `username` and `email` from the user object.  
*/

const user = {
  id: 101,
  details: { username: "john_doe", email: "john@example.com" },
};

// Fix this
const {
  details: { username, email },
} = user;
console.log(username, email); // Expected: "john_doe john@example.com"

/* Task 4: Add Default Values  
Modify the function so that if `role` is missing, it defaults to `"guest"`.  
*/

function getUserInfo(user) {
  const { name, role = "guest" } = user;
  console.log(`${name} - ${role}`);
}

getUserInfo({ name: "Alice" }); // Expected: "Alice - guest"

/* Task 5: Fix Function Parameters  
Fix the function so it correctly destructures `name` and `age`.  
*/

function introduce({ nsme, age }) {
  console.log(`${name} is ${age} years old.`);
}

introduce({ name: "Emma", age: 28 }); // Expected: "Emma is 28 years old."

/* Task 6: Create Your Own
Write a function that receives a `car` object and logs the `brand` and `year`.
Test with `{ brand: "Toyota", year: 2020 }`.
*/

// Write your code here

function logCarInfo(car) {
  const { brand, year } = car;
  console.log(`Brand: ${brand}, Year: ${year}`);
}

logCarInfo({ brand: "Toyota", year: 2020 }); // Expected output: "Brand: Toyota, Year: 2020"
