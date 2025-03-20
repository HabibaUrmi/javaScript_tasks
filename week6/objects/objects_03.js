/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
function User(username, email) {
  this.username = username;
  this.email = email;

  this.showInfo = function () {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  };
}

const user1 = new User("John", "john@example.com");
user1.showInfo();

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }

  showInfo() {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  }
}

const user2 = new User("John", "john@example.com");
user2.showInfo();
user2.changeEmail("john@gmail.com");
user2.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here

class Theme {
  constructor(name, isActive) {
    this.name = name;
    this.isActive = isActive;
  }
}

const theme = new Theme("light", true);
theme.toggleTheme();

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here

class Counter {
  constructor(value) {
    this.value = value;
    this.updateDisplay();
  }

  increase() {
    this.value++;
    this.updateDisplay();
  }

  decrease() {
    this.value--;
    this.updateDisplay();
  }

  updateDisplay() {
    document.getElementById(
      "counterDisplay"
    ).innerText = `Value: ${this.value}`;
  }
}

const counter = new Counter(0);

// Task 5: Product Purchase Quantity & Price Update
const product = {
  name: "Laptop",
  price: 1000,
  quantity: 1,
};

document.getElementById("quantityInput").addEventListener("input", function () {
  product.quantity = parseInt(this.value) || 1;
  document.getElementById("totalPrice").innerText =
    product.price * product.quantity;
});

// Task 6: Task Manager with Add Button
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
  }
}

const tasks = [];

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;

  if (title) {
    const newTask = new Task(title, description);
    tasks.push(newTask);
    updateTaskList();
  }
}

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = `${task.title}: ${task.description}`;
    taskList.appendChild(li);
  });
}

// Task 7: Weather API Fetch
const weatherApp = {
  fetchWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
    )
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "weatherDisplay"
        ).innerText = `Weather: ${data.weather[0].description}`;
      })
      .catch((error) => console.error("Error fetching weather:", error));
  },
};

// Task 8: Car Age Calculator
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.age = function () {
    return new Date().getFullYear() - this.year;
  };
}

const myCar = new Car("Toyota", "Corolla", 2015);
document.getElementById("carAge").innerText = `Car Age: ${myCar.age()} years`;

// Task 9: Sort Users by Score
const users = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 95 },
];

function sortUsers() {
  users.sort((a, b) => b.score - a.score);
  document.getElementById("userList").innerHTML = users
    .map((user) => `<li>${user.name} - ${user.score}</li>`)
    .join("");
}

// Task 10: Shopping List
const shoppingList = {
  items: [],
  addItem(item) {
    this.items.push(item);
    document.getElementById("shoppingList").innerHTML = this.items
      .map((i) => `<li>${i}</li>`)
      .join("");
  },
};

document.getElementById("addItemButton").addEventListener("click", function () {
  const item = document.getElementById("itemInput").value;
  if (item) shoppingList.addItem(item);
});

// Task 11: Like Button for Posts
const posts = [
  { title: "Post 1", content: "Content 1", likes: 0 },
  { title: "Post 2", content: "Content 2", likes: 0 },
];

function likePost(index) {
  posts[index].likes++;
  updatePostList();
}

function updatePostList() {
  document.getElementById("postList").innerHTML = posts
    .map(
      (post, i) =>
        `<li>${post.title} - Likes: ${post.likes} <button onclick="likePost(${i})">Like</button></li>`
    )
    .join("");
}

updatePostList();

// Task 12: Employee Salary Increase
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;

  this.increaseSalary = function (percent) {
    this.salary += this.salary * (percent / 100);
  };
}

const employee = new Employee("John", "Developer", 50000);
employee.increaseSalary(10);
document.getElementById(
  "employeeSalary"
).innerText = `Updated Salary: ${employee.salary}`;

// Task 13: Timer
const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++;
      document.getElementById(
        "timerDisplay"
      ).innerText = `Time: ${this.seconds}s`;
    }, 1000);
  },
};

timer.start();

// Task 14: Book Library
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const library = [];

function addBook() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;

  if (title && author && pages) {
    library.push(new Book(title, author, pages));
    document.getElementById("bookList").innerHTML = library
      .map(
        (book) =>
          `<li>${book.title} by ${book.author} - ${book.pages} pages</li>`
      )
      .join("");
  }
}

// Task 15: Fox Tracker
const foxTracker = {
  foxes: [],
  addFox(name, location) {
    this.foxes.push({ name, location });
    document.getElementById("foxList").innerHTML = this.foxes
      .map((fox) => `<li>${fox.name} in ${fox.location}</li>`)
      .join("");
  },
};

document.getElementById("addFoxButton").addEventListener("click", function () {
  const name = document.getElementById("foxName").value;
  const location = document.getElementById("foxLocation").value;
  if (name && location) foxTracker.addFox(name, location);
});
