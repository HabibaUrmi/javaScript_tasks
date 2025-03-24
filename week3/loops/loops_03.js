function calculateAverageSpeed() {
  while (true) {
    let distance = parseFloat(prompt("Enter distance in km (0 to stop):"));
    if (distance === 0) break;
    let time = parseFloat(prompt("Enter time in hours:"));
    console.log(`Your speed was ${distance / time} km/h`);
  }
}

calculateAverageSpeed();
