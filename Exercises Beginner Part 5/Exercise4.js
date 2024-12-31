/*
  Exercise 4:
  -----------
  Write a JavaScript function to extract unique
  characters from a string.


const extract = (str) => 
    str.split('').filter(
        (item, index, arr) =>
            arr.slice(index + 1).indexOf(item) === -1
    );
*/

const extract = (str) =>
    [... new Set(str.split(''))];

console.log(extract('aaaaaaaaaaaabbbbbbbbbbbbcccccccc'))