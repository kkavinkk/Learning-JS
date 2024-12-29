/*
  Exercise 1:
  -----------
  Write a Javascript program to find the number
  of even digits in a array of integers.
*/

const countEvenNumbers = (arr) => 
    arr.filter(num => num % 2 === 0).length;

console.log(countEvenNumbers([1,2,3,4,5,6]));
console.log(countEvenNumbers([1,2,4,4,5,6]));
console.log(countEvenNumbers([1,2,4,4,2,6]));
