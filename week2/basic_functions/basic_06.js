/* Create a function named replaceWord that:
Takes three parameters, sentence, oldWord, and newWord.
Returns the sentence with oldWord replaced by newWord.
Call the function with the sentence "I like apples.", oldWord as "apples", and newWord as "bananas".
Print the result using console.log(). 

*/

// Solution 1: Standard function
function replaceWord(sentence, oldWord, newWord) {
  return sentence.replace(oldWord, newWord);
}

// Solution 2: Arrow function
const replaceWordArrow = (sentence, oldWord, newWord) =>
  sentence.replace(oldWord, newWord);

// Test the function
console.log(replaceWord("I like apples.", "apples", "bananas")); // I like bananas.
console.log(replaceWordArrow("I like apples.", "apples", "bananas")); // I like bananas.
