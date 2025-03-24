const button = document.getElementById("button");
const counter = document.getElementById("counter");

let count = 0; // Initialize count

document.getElementById("button").addEventListener("click", () => {
  count++; // Increment count
  document.getElementById("counter").textContent = count; // Update display
});
