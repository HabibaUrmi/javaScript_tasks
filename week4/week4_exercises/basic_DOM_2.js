document.getElementById("addFruitBtn").addEventListener("click", function () {
  let inputField = document.getElementById("fruitInput");
  let fruitName = inputField.value.trim();

  if (fruitName !== "") {
    let li = document.createElement("li");
    li.textContent = fruitName;

    document.getElementById("fruitList").appendChild(li);

    inputField.value = ""; // Clear the input field
  } else {
    alert("Please enter a fruit name!");
  }
});
