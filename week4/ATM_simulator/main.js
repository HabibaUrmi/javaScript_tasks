const balanceText = document.querySelector("#balance");
const depositInput = document.querySelector(".depositInput");
const withdrawInput = document.querySelector(".withdrawInput");
const depositBtn = document.querySelector(".depositBtn");
const withdrawBtn = document.querySelector(".withdrawBtn");
const message = document.querySelector(".message");
const logoutBtn = document.querySelector("#logoutBtn");

// PIN Elements
const loginScreen = document.querySelector("#login-screen");
const atmScreen = document.querySelector("#atm-screen");
const pinInput = document.querySelector("#pinInput");
const pinSubmit = document.querySelector("#pinSubmit");

// Retrieve balance and PIN from localStorage
let balance = parseFloat(localStorage.getItem("balance")) || 0;
let storedPin = localStorage.getItem("userPIN");

// Show login screen if PIN exists
if (!storedPin) {
  storedPin = prompt("Set a new 4-digit PIN:");
  if (storedPin && storedPin.length === 4 && /^\d+$/.test(storedPin)) {
    localStorage.setItem("userPIN", storedPin);
  } else {
    alert("Invalid PIN. Please reload and try again.");
  }
} else {
  loginScreen.style.display = "block";
  atmScreen.style.display = "none";
}

// Function to update balance UI and save to localStorage
const updateBalance = () => {
  if (!balanceText) {
    console.error(
      "Error: balanceText is null. Check if #balance exists in the HTML."
    );
    return;
  }
  balanceText.textContent = balance.toFixed(2); // Update UI
  localStorage.setItem("balance", balance); // Save to localStorage
};

// Deposit function
const deposit = () => {
  const amount = parseFloat(depositInput.value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("Enter a valid deposit amount.", true);
    return;
  }

  balance += amount;
  updateBalance();
  showMessage(`Deposited ${amount.toFixed(2)} € successfully!`);
  depositInput.value = "";
};

// Withdraw function
const withdraw = () => {
  const amount = parseFloat(withdrawInput.value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("Enter a valid withdrawal amount.", true);
    return;
  }

  if (amount > balance) {
    showMessage("Not enough balance.", true);
    return;
  }

  balance -= amount;
  updateBalance();
  showMessage(`Withdrew ${amount.toFixed(2)} € successfully!`);
  withdrawInput.value = "";
};

// Function to show messages
const showMessage = (text, isError = false) => {
  message.textContent = text;
  message.style.color = isError ? "red" : "green";
};

// PIN Authentication
pinSubmit.addEventListener("click", () => {
  const enteredPin = pinInput.value;
  if (enteredPin === storedPin) {
    loginScreen.style.display = "none";
    atmScreen.style.display = "block";
    updateBalance();
  } else {
    showMessage("Incorrect PIN. Try again.", true);
  }
});

// Logout function
logoutBtn.addEventListener("click", () => {
  atmScreen.style.display = "none";
  loginScreen.style.display = "block";
  pinInput.value = "";
});

// Attach event listeners
if (depositBtn) depositBtn.addEventListener("click", deposit);
if (withdrawBtn) withdrawBtn.addEventListener("click", withdraw);
