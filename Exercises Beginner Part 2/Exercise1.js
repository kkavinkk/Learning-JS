/* Exercise 1:
    ----------
    Write a JavaScript program to create a new string
    from a given string taking the first 3 characters
    and the last 3 characters of a string and adding
    them together. The string length must be 3 or
    more if not, the original string is returned.
*/

const combString = (str) => {
    if (str.length < 3) {
        return str;
    }
    else {
    const first3 = str.substring(0, 3);
    const last3 = str.substring(str.length - 3);
    return `${first3}${last3}`;
    }
}


console.log(combString('abc'));
console.log(combString('abcdef'));
console.log(combString('abc123abc123'));

console.log(combString('ab'));