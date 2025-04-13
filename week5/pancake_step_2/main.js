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
  const name = customerName.value.trim();
  const pancake = typeSelect.selectedOptions[0].textContent;

  const toppingList = selectedToppings.map((t) =>
    t.parentElement.textContent.trim()
  );
  const extraList = selectedExtras.map((e) =>
    e.parentElement.textContent.trim()
  );

  const deliveryOption = form.querySelector("input[name='delivery']:checked");
  const delivery = deliveryOption
    ? deliveryOption.parentElement.textContent.trim()
    : "Not selected";

  const total = totalPriceDisplay.textContent;

  summaryText.innerHTML = [
    `Name: ${name}`,
    `Pancake: ${pancake}`,
    `Toppings: ${toppingList.length ? toppingList.join(", ") : "None"}`,
    `Extras: ${extraList.length ? extraList.join(", ") : "None"}`,
    `Delivery: ${delivery}`,
    `Total: ${total}`,
  ].join("<br>");

  orderSummary.style.display = "inline";
});

updateTotalPrice();
