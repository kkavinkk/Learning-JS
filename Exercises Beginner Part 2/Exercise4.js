/*
  Exercise 4:
  -----------
  Given two values, write a JavaScript program
  to find out which one is the nearest to 100
*/

const closestTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;

console.log(closestTo100(20, 99))
console.log(closestTo100(49, 51))
console.log(closestTo100(20, 101))
console.log(closestTo100(50, 50))