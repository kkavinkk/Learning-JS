/*
    Exercise 2:
    -----------
    Write a Java script program to extract the first
    half of a string of even length
*/

const firsthalf = (str) => str.slice(0, str.length / 2);
//    { div = str.length / 2;
//    const str2 = str.slice(0, div);
//    return str2;  }


console.log(firsthalf('abab'))
console.log(firsthalf('temple'))
console.log(firsthalf('temples'))