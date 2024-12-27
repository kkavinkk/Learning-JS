/* Exercise 2:
    ----------
    Write a Javascript program to get
    the extension of a filename
*/

const getFileEstension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileEstension('index.html'))
console.log(getFileEstension('webpack.config.js'))