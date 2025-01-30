//1.

// define variable

let singleQuotedString = "Single quoted string";
let doubleQuotedString = "Double quoted string";
let templateQuotedString = `Template literal string`;

//result

console.log(singleQuotedString);
console.log(doubleQuotedString);
console.log(templateQuotedString);

//2.

//define variable

let language = "JavaScript";

let string = `I am learning ${language}`;

console.log(string);

// 3.

let multiLine = `This is line one.
This is Line two.
This is line Three`;

console.log(multiLine);

//4

let text = "hello, World!";

let textLength = text.length();

console.log(`The length of the text is ${textLength}.`);

//5

let word = "JavaScript";

// Use bracket notation to access the first and last characters
let firstCharacter = word[0]; // First character
let lastCharacter = word[word.length - 1]; // Last character

console.log(`The first character is ${firstCharacter}.`);
console.log(`The last character is ${lastCharacter}.`);

//6
const num1 = 7;
const num2 = 5;

const resultstr = `The sum of ${num1} and ${num2} is ${num1 + num2}`;

console.log(resultstr);

//7

const greeting = "Hello, World!";
let shout = "Hello, World!".toUpperCase();
let whisper = "Hello, World!".toLowerCase();

console.log(shout);
console.log(whisper);

//8

const sentence = "Learning JavaScript is fun!";

const extractedWord = sentence.substring(9, 19);

console.log(`Extracted word: ${extractedWord}`);

//9

const word1 = "JavaScript";

// Use bracket notation to access the first and last characters
const firstCharacter1 = word[0]; // First character
const lastCharacter1 = word[word.length - 1]; // Last character

console.log(`The first character is ${firstCharacter}.`);
console.log(`The last character is ${lastCharacter}.`);

// 10

const messyString = " Clean me up! ";
const cleanedString = messyString.trim();

console.log(`cleaned string: ${cleanedString}`);

//11

// Create a variable and assign the phrase
const phrase = "JavaScript is versatile and powerful.";

// Use .includes() to check for the word "powerful"
const containsPowerful = phrase.includes("powerful");

// Print the result
console.log(`Does the phrase include 'powerful'? ${containsPowerful}`);

//12
// Create a variable and assign the text
const text1 = "I like apples.";

// Use .replace() to change "apples" to "bananas"
const updatedText = text.replace("apples", "bananas");

// Print the updated string
console.log(updatedText);

//13

// Create a variable and assign the long text
const longText = "The quick brown fox jumps over the lazy dog.";

// Use .slice() to extract "quick brown fox"
const slicedText = longText.slice(4, 20); // Starts at index 4 and ends before index 20

// Print the sliced portion
console.log(`Sliced text: ${slicedText}`);

//14

// Create a variable and assign the description
const description = " JavaScript is Fun and powerful! ";

// Trim the extra spaces
const trimmedDescription = description.trim();

// Convert the string to lowercase
const lowerCaseDescription = trimmedDescription.toLowerCase();

// Check if it includes the word "fun"
const includesFun = lowerCaseDescription.includes("fun");

// Replace "powerful" with "amazing"
const finalDescription = lowerCaseDescription.replace("powerful", "amazing");

// Print the final string and whether it includes "fun"
console.log(`Final description: ${finalDescription}`);
console.log(`Does it include 'fun'? ${includesFun}`);
