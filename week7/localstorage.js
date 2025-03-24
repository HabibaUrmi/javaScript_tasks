/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here

localStorage.setItem("message", "Hello, LocalStorage!");
const message = localStorage.getItem("message");
console.log(message);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here

const userSettings = {
  theme: "dark",
  language: "English",
};

const userSettingsJSON = JSON.stringify(userSettings);

localStorage.setItem("userSettings");
const retrievedSettings = JSON.parse(localStorage.getItem("userSettings"));
console.log(retrievedSettings.theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here

const favoriteBooks = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const retrievedBooks = JSON.parse(localStorage.getItem("favoriteBooks"));
retrievedBooks.forEach((book) => {
  console.log(book.title);
});

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here

function saveToLocalStorage(key, object) {
  const jsonString = JSON.stringify(object);
  localStorage.setItem(key, jsonString);
}

const testObject = { name: "Test Object", value: 42 };
saveToLocalStorage("testObject", testObject);
const retrievedTestObject = JSON.parse(localStorage.getItem("testObject"));
console.log(retrievedTestObject);

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here

function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      const parsedValue = JSON.parse(value);
      console.log(parsedValue);
    } catch (e) {
      console.log(value);
    }
  } else {
    console.log(`No value found for key: ${key}`);
  }
}

getFromLocalStorage("testObject");

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here

const userProfile = {
  username: "john_doe",
  email: "john.doe@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

localStorage.setItem("userProfile", JSON.stringify(userProfile));
const retrievedProfile = JSON.parse(localStorage.getItem("userProfile"));
retrievedProfile.preferences.theme = "dark mode";
console.log(retrievedProfile);

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here

const shoppingList = {
  items: ["Milk", "Eggs", "Bread"],
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  const retrievedList = JSON.parse(localStorage.getItem("shoppingList"));
  retrievedList.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(retrievedList));
  console.log(retrievedList);
}

addItemToList("Butter");

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here

const counter = {
  count: 0,
};

localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
  const retrievedCounter = JSON.parse(localStorage.getItem("counter"));
  retrievedCounter.count += 1;
  localStorage.setItem("counter", JSON.stringify(retrievedCounter));
  console.log(retrievedCounter.count);
}

incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here

const tasks = [
  { id: 1, description: "Task 1", completed: false },
  { id: 2, description: "Task 2", completed: false },
  { id: 3, description: "Task 3", completed: false },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskId) {
  const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));
  const task = retrievedTasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
    localStorage.setItem("tasks", JSON.stringify(retrievedTasks));
    console.log(retrievedTasks);
  } else {
    console.log(`Task with ID ${taskId} not found.`);
  }
}

markTaskComplete(2);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here

function clearLocalStorage() {
  localStorage.clear();
}

clearLocalStorage();
console.log(localStorage.length);
