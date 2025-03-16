/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

let teamMembers = ["John", "Emily", "Mike", "Sarah"];

//1
teamMembers.forEach((member) => console.log(member));

//2

teamMembers.shift();
console.log(teamMembers);

//3
teamMembers.pop(3);
console.log(teamMembers);

//4
teamMembers.unshift("Alex");
console.log(teamMembers);

//5

teamMembers.push("Linda");
console.log(teamMembers);

//6
let newTeamMembers = teamMembers.slice(2);
console.log(newTeamMembers);

//7
let mikeIndex = teamMembers.indexOf("Mike");

//8
let jakeIndex = teamMembers.indexOf("Jake"); // Returns -1 since "Jake" is not in the array

//9
if (mikeIndex !== -1) {
  teamMembers.splice(mikeIndex, 1, "Carol", "Bruce");
}

//10
let newTeam = teamMembers.concat("Bob");

//11

let copiedTeam = teamMembers.slice();

//12
let newMembers = ["Tina", "Dean"];
let mergedTeam = teamMembers.concat(newMembers);

//13
let johnIndices = teamMembers
  .map((name, index) => (name === "John" ? index : -1))
  .filter((index) => index !== -1);

//14
let upperCaseNames = teamMembers.map((name) => name.toUpperCase());

//15

teamMembers.sort();

//16
teamMembers.reverse();

//17
let hasJohn = teamMembers.includes("John");

//18
let allNamesMoreThanThreeLetters = teamMembers.every((name) => name.length > 3);
