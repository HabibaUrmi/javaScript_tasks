// Solution 1: Standard function
function cleanAndTransform(str) {
  return str.trim().toLowerCase().replace("powerful", "amazing");
}

// Solution 2: Arrow function
const cleanAndTransformArrow = (str) =>
  str.trim().toLowerCase().replace("powerful", "amazing");

// Test the function
console.log(cleanAndTransform("JavaScript is powerful!")); // javascript is amazing!
console.log(cleanAndTransformArrow("JavaScript is powerful!")); // javascript is amazing!
