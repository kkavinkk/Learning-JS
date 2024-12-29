/*
  Exercise 5:
  -----------
  Write a JavaScript program to replace the first digit in a 
  string (should contains at least digit) with $ character
*/

const repalceFirstDigit = (str) => str.replace(/[0-9]/, '$');

console.log(repalceFirstDigit('Abcd1Abcde'));
console.log(repalceFirstDigit('A123Abcde'));
console.log(repalceFirstDigit('A1cd1Abcde'));