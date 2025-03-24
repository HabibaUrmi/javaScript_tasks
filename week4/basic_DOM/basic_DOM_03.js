const inputField = document.getElementById("inputField");
const displayField = document.getElementById("displayField");

const updateDisplayText = () => {
  displayText.innerText = inputField.value;
};

inputField.addEventListener("input", updateDisplayText);
