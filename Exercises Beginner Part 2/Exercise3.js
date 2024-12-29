/*
  Exercise 3:
  -----------
  Write a JavaScript progream to concatenate two strings
  except their first characters
*/

const contStrings = (str1, str2) => 
    str1.slice(1) + str2.slice(1);


console.log(contStrings('abc', 'def'));
console.log(contStrings('Junior', 'Developer'));