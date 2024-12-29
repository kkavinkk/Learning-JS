/*
  Exercise 5:
  -----------
  Write a JavaScript program to check if a given string
  contains 2 to 4 occurences of a given character.
*/

const counting = (str, char) => 
    str.split('').filter(ch => ch === char).length;

const contains24 = (str, char) =>
    counting(str, char) >= 2 && counting(str, char) <= 4;

console.log(contains24('ooh!', 'o'))
console.log(contains24('oh!', 'o'))
console.log(contains24('oooh!', 'o'))
console.log(contains24('ooooh!', 'o'))
console.log(contains24('oooooooooooh!', 'o'))