/*
  Exercise 2:
  -----------
  Write a JavaScript program to find the number of 
  even value to a given number.
*/

const countEvenNumbers = (arr) => 
    arr.filter(num => num % 2 === 0).length;

const createArray = (num) => {
    const returnArray = [];
    for (let i = 1; i <= num; i += 1) {
        returnArray.push(i);
    }
    return returnArray;
};

console.log(countEvenNumbers((createArray(6))));
console.log(countEvenNumbers((createArray(9))));



