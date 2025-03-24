function calculateAverageUntilZero() {
  let sum = 0,
    count = 0;
  while (true) {
    let num = parseFloat(prompt("Enter a number (0 to stop):"));
    if (num === 0) break;
    sum += num;
    count++;
  }
  console.log(`Average: ${sum / count}`);
}

calculateAverageUntilZero();
