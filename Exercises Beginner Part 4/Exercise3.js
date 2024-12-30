/*
  Exercise 3:
  -----------
  Write a JavaScript program to convert a 
  comma-seperated value (CSV) string to a 2D
  array. A new line indicates a new row int he array

  Example:
  --------
  abc, def, ghi
  jkl, mno, pqr
  stu, vwx, yza
*/

const parseCSV = (csvString) => 
    csvString.split('\n').map(row => row.split(','))

const str = `abc, def, ghi
jkl, mno, pqr
stu, vwx, yza`

console.log(parseCSV(str))

