// number 1

// Define variables
let numString1 = "42";
let numString2 = "3.14";

// Convert strings to numbers
let integer1 = parseInt(numString1); // Converts to an integer
let float1 = parseFloat(numString2); // Converts to a floating-point number

// Results
console.log(`The integer is ${integer1}.`);
console.log(`The floating-point number is ${float1}.`);

// number 2

// Define variable
let price = 19.56789;

// Round price
let priceTwoDecimals = price.toFixed(2); // Rounds to 2 decimal places
let priceNoDecimals = price.toFixed(0); // Rounds to no decimal places

// Results
console.log(`Price with 2 decimals: ${priceTwoDecimals}`);
console.log(`Price with no decimals: ${priceNoDecimals}`);

// number 3

// Define variables
let num1 = "10";
let num2 = "notANumber";

// Convert strings to numbers using parseFloat()
let parseNum1 = parseFloat(num1); // Converts "10" to 10
let parseNum2 = parseFloat(num2); // Fails to convert "notANumber", returns NaN

// Sum of num1 and num2
let sum = parseNum1 + parseNum2;

// Results
console.log(`Sum: ${sum}`); // NaN because parseNum2 is NaN
console.log(`parseNum1: ${parseNum1}`); // 10
console.log(`parseNum2: ${parseNum2}`); // NaN

// number 4

// Define variable
let userInput = "25.75 apples";

// Extract numeric value from input using parseFloat()
let extractedNumber = parseFloat(userInput);
let roundedNumber = extractedNumber.toFixed(1); // Rounds to 1 decimal place

// Result
console.log(`Extracted and rounded number: ${roundedNumber}`);

// number 5

const num = 5.67; // Define variable

const roundNumber = Math.round(num); // Rounds to the nearest whole number
const roundNumberDown = Math.floor(num); // Rounds down
const roundNumberUp = Math.ceil(num); // Rounds up

// Results
console.log(`The rounded value is ${roundNumber}.`);
console.log(`The rounded down value is ${roundNumberDown}.`);
console.log(`The rounded up value is ${roundNumberUp}.`);

// number 6

let randomNumber = Math.random(); // Generate a random number between 0 and 1
let randomWholeNumber = Math.floor(randomNumber * 10); // Multiply by 10 and round down

// Result
console.log(`Your random number is ${randomWholeNumber}.`);

// number 7

// Define variables
let a = 12;
let b = 7;
let c = 20;

// Find the largest and smallest numbers
let max = Math.max(a, b, c); // Largest number
let min = Math.min(a, b, c); // Smallest number

// Results
console.log(`The largest number is ${max}.`);
console.log(`The smallest number is ${min}.`);
