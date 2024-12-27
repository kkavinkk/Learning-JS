/* Exercise 3
    ---------
    Write a JavaScript program to replace every
    character in a given string with the character
    following it in the alphabet
*/

// String.fromCharCode
// charCodeat

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');
// need wrap around for Z
console.log(moveCharsForward('HELLO'));