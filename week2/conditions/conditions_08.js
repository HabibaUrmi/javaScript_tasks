/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

function canVote(age) {
  return age >= 18;
}

function checkVotingEligibility(age) {
  console.log(canVote(age) ? "Eligible to vote" : "Not eligible to vote");
}

checkVotingEligibility(20); // Output: "Eligible to vote"
checkVotingEligibility(18); // Output: "Eligible to vote"
checkVotingEligibility(17); // Output: "Not eligible to vote"
checkVotingEligibility(16); // Output: "Not eligible to vote"
