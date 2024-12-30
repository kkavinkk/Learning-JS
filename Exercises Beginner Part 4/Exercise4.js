/*
  Exercise 4:
  -----------
  Write a JavaScript program to generate
  a random hexadecimal color code.
*/

const genNumber = () =>
    Math.floor(Math.random() * 16).toString(16);

const genColour = () => '#' + Array.from({ length: 6}).map(genNumber).join('');

console.log(genColour());
console.log(genColour());
console.log(genColour());
console.log(genColour());
console.log(genColour());