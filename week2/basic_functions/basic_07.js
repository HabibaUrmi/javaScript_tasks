/* Create a function named containsWord that:
Takes two parameters, sentence and word.
Returns true if sentence includes word, otherwise false.
Call the function with the sentence "JavaScript is fun!" and the word "fun".
Print the result using console.log().

Bonus: Modify the function to use implicit return. 

*/

// Solution 1: Standard function
function containsWord(sentence, word) {
  return sentence.includes(word);
}

// Solution 2: Arrow function with implicit return
const containsWordArrow = (sentence, word) => sentence.includes(word);

// Test the function
console.log(containsWord("JavaScript is fun!", "fun")); // true
console.log(containsWordArrow("JavaScript is fun!", "fun")); // true
