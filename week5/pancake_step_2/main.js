const form = document.getElementById("pancakeForm");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const seeOrderButton = document.getElementById("seeOrder");
const summaryText = document.getElementById("summaryText");

// Step 1: Refactor Event Listeners
form.addEventListener("change", (event) => {
  const target = event.target;
  handleSelectionChange(target);
  updateTotalPrice();
});

// Step 2: Store Toppings and Extras in Arrays
let selectedToppings = [];
let selectedExtras = [];

function handleSelectionChange(target) {
  if (target.classList.contains("topping")) {
    if (target.checked) {
      selectedToppings.push(target);
    } else {
      selectedToppings = selectedToppings.filter((t) => t !== target);
    }
  }

  if (target.classList.contains("extra")) {
    if (target.checked) {
      selectedExtras.push(target);
    } else {
      selectedExtras = selectedExtras.filter((e) => e !== target);
    }
  }
}

// Step 3: Update Total Price Calculation
function updateTotalPrice() {
  let total = 0;

  const pancake = form.type.selectedOptions[0];
  total += Number(pancake.dataset.price);

  total += selectedToppings.length;

  selectedExtras.forEach((extra) => {
    total += Number(extra.dataset.price);
  });

  const delivery = form.querySelector("input[name='delivery']:checked");
  total += Number(delivery.dataset.price);

  totalPriceDisplay.textContent = `${total}€`;
}

// Step 4: Display the Order Summary
seeOrderButton.addEventListener("click", () => {
  console.log("See Order button clicked");
  const name = form.customerName.value.trim();
  const pancake = form.type.selectedOptions[0].textContent;

  const toppings = selectedToppings.map((t) =>
    t.parentElement.textContent.trim()
  );

  const extras = selectedExtras.map((e) => e.parentElement.textContent.trim());

  const delivery = form
    .querySelector("input[name='delivery']:checked")
    .parentElement.textContent.trim();

  const total = totalPriceDisplay.textContent;

  summaryText.innerHTML = `
    <strong>Name:</strong> ${name} <br>
    <strong>Pancake:</strong> ${pancake}<br>
    <strong>Toppings:</strong> ${
      toppings.length ? toppings.join(", ") : "None"
    } <br>
    <strong>Extras:</strong> ${extras.length ? extras.join(", ") : "None"} <br>
    <strong>Delivery:</strong> ${delivery}<br>
    <strong>Total:</strong> ${total}
  `;

  orderSummary.style.display = "block";
});

updateTotalPrice();
