/*
  Exercise 2:
  -----------
  Write a JavaScript function that accepts a
  string as a parameter and counts the number
  of vowels withing the string.
*/

const countVowels = (str) => Array.from(str)
    .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcde'))


