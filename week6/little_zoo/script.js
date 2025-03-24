document.addEventListener("DOMContentLoaded", function () {
  // Sample initial animal data
  let animals = [
    { name: "Lion", type: "Mammal" },
    { name: "Eagle", type: "Bird" },
    { name: "Snake", type: "Reptile" },
    { name: "Frog", type: "Amphibian" },
    { name: "Shark", type: "Fish" },
  ];

  // DOM elements
  const animalList = document.getElementById("animalList");
  const searchInput = document.getElementById("searchAnimal");
  const filterSelect = document.getElementById("filterType");
  const sortButton = document.getElementById("sortAnimals");
  const addButton = document.getElementById("addAnimal");
  const newAnimalName = document.getElementById("newAnimalName");
  const newAnimalType = document.getElementById("newAnimalType");

  // Display animals
  function displayAnimals(animalsToDisplay) {
    animalList.innerHTML = "";

    if (animalsToDisplay.length === 0) {
      animalList.innerHTML = "<li>No animals found</li>";
      return;
    }

    animalsToDisplay.forEach((animal) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="animal-name">${animal.name}</span>
        <span class="animal-type ${animal.type.toLowerCase()}">${
        animal.type
      }</span>
        <button class="delete-btn" data-name="${animal.name}">×</button>
      `;
      animalList.appendChild(li);
    });

    // Add event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const animalName = this.getAttribute("data-name");
        deleteAnimal(animalName);
      });
    });
  }

  // Filter animals based on search and type
  function filterAnimals() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterType = filterSelect.value;

    let filtered = animals.filter((animal) => {
      const matchesSearch = animal.name.toLowerCase().includes(searchTerm);
      const matchesType = filterType === "All" || animal.type === filterType;
      return matchesSearch && matchesType;
    });

    displayAnimals(filtered);
  }

  // Sort animals
  let sortAscending = true;
  function sortAnimals() {
    animals.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortAscending) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    sortAscending = !sortAscending;
    sortButton.textContent = sortAscending ? "Sort A-Z" : "Sort Z-A";
    filterAnimals();
  }

  // Add new animal
  function addAnimal() {
    const name = newAnimalName.value.trim();
    const type = newAnimalType.value;

    if (name && type) {
      // Check if animal already exists
      if (
        animals.some(
          (animal) => animal.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert("This animal already exists in the zoo!");
        return;
      }

      animals.push({ name, type });
      newAnimalName.value = "";
      newAnimalType.value = "";
      filterAnimals();
    } else {
      alert("Please enter both name and type for the animal.");
    }
  }

  // Delete animal
  function deleteAnimal(name) {
    if (confirm(`Are you sure you want to remove ${name} from the zoo?`)) {
      animals = animals.filter((animal) => animal.name !== name);
      filterAnimals();
    }
  }

  // Event listeners
  searchInput.addEventListener("input", filterAnimals);
  filterSelect.addEventListener("change", filterAnimals);
  sortButton.addEventListener("click", sortAnimals);
  addButton.addEventListener("click", addAnimal);

  // Allow adding animal with Enter key
  newAnimalName.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addAnimal();
    }
  });

  // display
  displayAnimals(animals);
});
