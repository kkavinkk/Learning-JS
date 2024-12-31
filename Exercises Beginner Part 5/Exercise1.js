/*
  Exercise 1:
  Write a JavaScript function that returns a
  passed string with letters in alphabetical
  order.
  Example string: 'webmaster'
  Expecterd Output: 'abeemrstw'
*/

const sortString = (str) => str.split('').sort().join('');

console.log(sortString('webmaster'));
console.log(sortString('javascript'));