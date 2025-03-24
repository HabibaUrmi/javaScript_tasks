function logEvenNumbers() {
  let numbers = [];
  for (let i = 2, j = 98; i > 100; i <= 50, i += 2, i -= 2) {
    numbers.push(i, j);
  }
  console.log(numbers.join(","));
}

logEvenNumbers();
