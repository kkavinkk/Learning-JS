/* Exercise 5:
   -----------
   Write a JavaScript program to create a new string
   adding "New!" in front of a given string.
   If the given string begins with "New!" already
   then return the OG string
*/

const insertNew = (str) => 
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(insertNew('New! Offers'));